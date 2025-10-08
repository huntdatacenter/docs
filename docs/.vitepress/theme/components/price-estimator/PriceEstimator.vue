<script lang="ts">
import { defineComponent, nextTick } from "vue"
import pricesApi from "./api/pricesApi.js"
import type {
  LabCard,
  ComputeUnit,
  StorageUnit,
  PriceListItem,
  GpuModel,
  MachineFlavor,
  TotalPriceItem,
  UpdateComputePayload,
  UpdateStoragePayload,
  Catalogue,
} from "./types"

const ISSERVER = typeof window === "undefined"

export default defineComponent({
  props: {
    title: { type: String, default: "Title" },
  },

  data() {
    return {
      labCards: [] as LabCard[],
      nextLabId: 1,
      catalogue: {
        computePrices: [] as PriceListItem[],
        storagePrices: [] as PriceListItem[],
        gpuPrices: [] as PriceListItem[],
        machineCatalogue: [] as MachineFlavor[],
        availableGpus: [] as GpuModel[],
      } as Catalogue,

      labPrices: [] as PriceListItem[],
      totals: {
        computePrice: 0.0,
        storageSize: 0.0,
        storageCost: 0.0,
      },
      totalLabCost: [] as TotalPriceItem[],
      itemsComputeExport: [] as ComputeUnit[][],
      itemsStorageExport: [] as StorageUnit[][],
      isLoadingCatalogues : false,
      isLoadingState: false,
    }
  },

  watch: {
    labCards: {
      handler() {
        if (!this.isLoadingState) {
          this.saveState()
        }
      },
      deep: true,
    },
    totals: {
      handler() {
        if (!this.isLoadingState) {
          this.setTotalItems()
        }
      },
      deep: true,
    },
  },

  created() {
    this.initializeAll().then(() => {
      this.loadState()
    })
  },

  methods: {
    saveState() {
      const stateToSave = {
        labCards: this.labCards.map((lab: LabCard) => ({
          id: lab.id,
          title: lab.title,
          storage: lab.storage,
          priceStorage: lab.priceStorage,
          priceComputeYearly: lab.priceComputeYearly,
          numCompute: lab.numCompute,
          initSelectedCompute: lab.selectedCompute || [],
          initSelectedStorage: lab.selectedStorage || [],
        })),
        nextLabId: this.nextLabId,
      }

      if (!ISSERVER) {
        localStorage.setItem("priceEstimatorState", JSON.stringify(stateToSave))
      }
    },

    loadState() {
      try {
        let savedState
        if (!ISSERVER) {
          savedState = localStorage.getItem("priceEstimatorState")
        }
        if (savedState) {
          this.isLoadingState = true
          const state = JSON.parse(savedState)
          this.labCards = (state.labCards || []).map((lab: any) => ({
            id: lab.id,
            title: lab.title,
            storage: lab.storage || 0,
            priceStorage: lab.priceStorage || 0,
            priceComputeYearly: lab.priceComputeYearly || 0,
            numCompute: lab.numCompute || 0,
            selectedCompute: lab.initSelectedCompute || [],
            selectedStorage: lab.initSelectedStorage || [],
          }))
          this.nextLabId = state.nextLabId || 1

          this.totals.computePrice = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceComputeYearly, 0)
          this.totals.storageSize = this.labCards.reduce((total: number, lab: LabCard) => total + lab.storage, 0)
          this.totals.storageCost = this.calculateStorageCost()
          this.setTotalItems()

          this.$nextTick(() => {
            this.isLoadingState = false
          })
        }
      } catch (error) {
        console.error("Failed to load state:", error)
        this.labCards = []
        this.nextLabId = 1
        this.isLoadingState = false
      }
    },

    initializeAll() {
        this.isLoadingCatalogues = true

      const priceListPromise = pricesApi.getPriceList().then((json: PriceListItem[]) => {
        this.catalogue.computePrices = json.filter((item: PriceListItem) => item["service.group"] === "cpu").map(this.preparePricesToYearly)
        this.catalogue.storagePrices = json.filter((item: PriceListItem) => item["service.family"] === "store")
        this.catalogue.gpuPrices = json.filter((item: PriceListItem) => item["service.group"] === "gpu").map(this.preparePricesToYearly)
        this.labPrices = json.filter((item: PriceListItem) => item["service.group"] === "lab")
      })

      const gpusPromise = pricesApi.getAvailableGPUS().then((gpus: GpuModel[]) => {
        this.catalogue.availableGpus = gpus
      })

      const machinesPromise = pricesApi.getMachineFlavors().then((machine: MachineFlavor[]) => {
        this.catalogue.machineCatalogue = machine
      })
      this.setTotalItems()

      return Promise.all([priceListPromise, gpusPromise, machinesPromise]).then(() => {
        this.isLoadingCatalogues = false
      })
    },

    preparePricesToYearly(item: PriceListItem): PriceListItem {
      if (item["service.commitment"] === "1D") {
        item["service.commitment"] = "1Y"
        item["price.nok.ex.vat"] = item["price.nok.ex.vat"] * 365
      }
      return item
    },

    addLabCard() {
      const newLabCard = {
        id: this.nextLabId,
        title: `Lab ${this.nextLabId}`,
        storage: 0,
        priceStorage: 0,
        priceComputeYearly: 0,
        numCompute: 0,
        initSelectedCompute: [],
        initSelectedStorage: [],
      }
      this.labCards.push(newLabCard)
      this.nextLabId++
    },

    calculateStorageCost() {
      /**
       * We are going to go through all the lab cards. For each type of storage there is (HHD and NVME) sum up it seperately. Then we calculate the price such that: The first 10TB is a price collected from api, the next 90TB is another price and anything above that is another price.
       */
      console.log(this.catalogue)
      let totalStorageByType: { [key: string]: number } = {}
      this.labCards.forEach((lab: LabCard) => {
          lab.selectedStorage?.forEach((storage: StorageUnit) => {
            if (totalStorageByType[storage.type]) {
              totalStorageByType[storage.type] += storage.size
            } else {
              totalStorageByType[storage.type] = storage.size
            }
          })
        })
      console.log("Total storage by type: ", totalStorageByType)
      let totalCost = 0.0
      for (const [type, size] of Object.entries(totalStorageByType)) {
        /**
         * Convert from NVME to block.nvme.rep and HDD to block.hdd.rep
         */
        const blockType = type === "NVME" ? "block.nvme.rep" : "block.hdd.rep"
        let remainingSize = size
        const priceEntries = this.catalogue.storagePrices.filter((item: PriceListItem) => item["service.group"] === blockType && item["service.level"] === "COMMITMENT" && item["service.commitment"] === "1Y")
        console.log("Price entries for type ", type, priceEntries)
        for (const entry of priceEntries) {
          let applicableSize = 0
          if (entry["service.unit"] === "First 10 TB") {
            applicableSize = Math.min(remainingSize, 10)
          } else if (entry["service.unit"] === "Next 90 TB") {
            applicableSize = Math.min(remainingSize, 90)
          } else {
            applicableSize = remainingSize
            entry["price.nok.ex.vat"] = entry["price.nok.ex.vat"] * (applicableSize / 100)
          }
          remainingSize -= applicableSize
          totalCost += entry["price.nok.ex.vat"] * applicableSize
          console.log("For entry ", entry["service.unit"], " applicable size: ", applicableSize, " remaining size: ", remainingSize, " cost: ", entry["price.nok.ex.vat"] * applicableSize)
        }
      }
      return totalCost

    },


    updateLabCardStorage(id: number, payload: UpdateStoragePayload) {
      const labCard = this.labCards.find((lab: LabCard) => lab.id === id)
      if (labCard) {
        labCard.storage = payload.size
        labCard.priceStorage = payload.price
        labCard.selectedStorage = payload.selectedStorage
      }
      this.totals.storageSize = this.labCards.reduce((total: number, lab: LabCard) => total + lab.storage, 0)
      this.totals.storageCost = this.calculateStorageCost()
      this.itemsStorageExport[id] = payload.selectedStorage
    },

    updateLabCardCompute(id: number, prices: UpdateComputePayload) {
      const labCard = this.labCards.find((lab: LabCard) => lab.id === id)
      if (labCard) {
        labCard.priceComputeYearly = Number(prices.yearlyPrice)
        labCard.numCompute = Number(prices.numCompute)
        labCard.selectedCompute = prices.selectedCompute
      }
      this.totals.computePrice = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceComputeYearly, 0)
      this.itemsComputeExport[id] = prices.selectedCompute
    },
    removeLabCard(id: number) {
      this.labCards = this.labCards.filter(lab => lab.id !== id)
      delete this.itemsComputeExport[id]
      delete this.itemsStorageExport[id]
      this.totals.computePrice = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceComputeYearly, 0)
      this.totals.storageSize = this.labCards.reduce((total: number, lab: LabCard) => total + lab.storage, 0)
      this.totals.storageCost = this.calculateStorageCost()
    },

    removeAllLabs() {
      this.labCards = []
      this.itemsComputeExport = []
      this.itemsStorageExport = []
      this.totals = {
        computePrice: 0.0,
        storageSize: 0.0,
        storageCost: 0.0,
      }
      this.nextLabId = 1
      if (!ISSERVER) {
        localStorage.removeItem("priceEstimatorState")
      }
    },

    setTotalItems() {
      let priceItems: { name: string; subscription: string | null; units: number | string; price: number }[] = []
      if (this.labCards) {
        this.labCards.forEach(item => {
          priceItems.push({
            name: item.title,
            subscription: "1 Year",
            units: 1,
            price: this.labPrices[0]["price.nok.ex.vat"],
          })
        })
      }
      let numOfCompute = this.labCards.reduce((total, lab) => total + lab.numCompute, 0)
      priceItems.push({
        name: "Compute",
        subscription: null,
        units: numOfCompute || 0,
        price: this.totals.computePrice,
      })
      priceItems.push({
        name: "Storage",
        subscription: "Commitment",
        units: `${this.totals.storageSize} TB`,
        price: this.totals.storageCost,
      })
      this.totalLabCost = priceItems
    },
    triggerFileUpload() {
      (this.$refs.fileInput as HTMLInputElement).click()
    },

    async handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement
      const file = target.files?.[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = async e => {
        try {
          await this.initializeAll()

          const data = JSON.parse(e.target?.result as string)

          if (!data.version || !Array.isArray(data.labs)) {
            throw new Error("Invalid JSON format: 'version' or 'labs' property is missing.")
          }

          this.isLoadingState = true
          this.labCards = []
          this.itemsComputeExport = []
          this.itemsStorageExport = []
          this.totals = {
            computePrice: 0.0,
            storageSize: 0.0,
            storageCost: 0.0,
          }
          this.nextLabId = 1

          data.labs.forEach((lab: any) => {
            const newLabCard: LabCard = {
              id: lab.id,
              title: lab.name,
              storage: 0,
              priceStorage: 0,
              priceComputeYearly: 0,
              numCompute: 0,
              initSelectedCompute: lab.compute || [],
              initSelectedStorage: lab.storage || [],
            }
            this.labCards.push(newLabCard)
            if (lab.id >= this.nextLabId) {
              this.nextLabId = lab.id + 1
            }
          })

          await nextTick()
          this.isLoadingState = false
          target.value = ""
        } catch (error) {
          console.error("Failed to parse or process JSON file:", error)
          alert("Error: Could not import file. Please ensure it is a valid JSON file with the correct format.")
        }
      }
      reader.onerror = error => {
        console.error("FileReader error:", error)
        alert("Error reading file.")
      }
      reader.readAsText(file)
    },
  },
})
</script>

<template>
  <v-container v-if="!isLoadingCatalogues" >
    <v-sheet class="group-slider-wrapper ma-auto pt-0" elevation="0" max-width="1120">
      <v-card-title>Price estimator for HUNT Cloud</v-card-title>
      <v-card-subtitle> This calculator gives a rough estimate of how much our services cost</v-card-subtitle>
      <v-container>
        <v-row lex-direction="row-reverse" justify="space-between">
          <v-col cols="auto">
            <v-btn density="default" size="large" dark @click="addLabCard">Add lab</v-btn>
          </v-col>
          <v-col cols="auto">
            <v-row>
              <v-col cols="auto" v-if="labCards.length !== 0">
                <v-btn density="default" size="large" dark @click="removeAllLabs"> Remove all </v-btn>
              </v-col>
              <v-col cols="auto">
                <input
                  ref="fileInput"
                  type="file"
                  style="display: none"
                  accept="application/json"
                  @change="handleFileUpload"
                />
                <v-btn density="default" size="large" dark @click="triggerFileUpload">
                  <v-icon left>mdi-import</v-icon>
                  Import
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col v-for="(lab, index) in labCards" :key="index" cols="12">
          <LabCard
            :key="lab.id"
            :title="lab.title"
            :catalogue="catalogue"
            :init-selected-compute="lab.selectedCompute || []"
            :init-selected-storage="lab.selectedStorage || []"
            @updateStorage="updateLabCardStorage(lab.id, $event)"
            @updateCompute="updateLabCardCompute(lab.id, $event)"
            @removeLab="removeLabCard(lab.id)"
          />
        </v-col>
      </v-row>
      <v-row v-if="labCards.length !== 0">
        <TotalBlock
          :total-items="totalLabCost"
          :totals="totals"
          :itemsComputeExport="itemsComputeExport"
          :itemsStorageExport="itemsStorageExport"
        />
      </v-row>
    </v-sheet>
  </v-container>
</template>

<style scoped>
</style>
