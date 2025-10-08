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
      totalCompute: { price: 0.0 },
      totalStorage: { size: 0.0, cost: 0.0 },
      totalLabCost: [] as TotalPriceItem[],
      sumInTotal: 0.0,
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
  },

  created() {
    this.initializeAll().then(() => {


      console.log("Catalogue : ", this.catalogue)
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

          // Recalculate totals from loaded lab cards
          this.totalCompute.price = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceComputeYearly, 0)
          this.totalStorage.size = this.labCards.reduce((total: number, lab: LabCard) => total + lab.storage, 0)
          this.totalStorage.cost = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceStorage, 0)

          this.$nextTick(() => {
            this.setPriceItems()
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
        console.log("Price list loaded", this.catalogue, this.labPrices)
      })

      const gpusPromise = pricesApi.getAvailableGPUS().then((gpus: GpuModel[]) => {
        this.catalogue.availableGpus = gpus
      })

      const machinesPromise = pricesApi.getMachineFlavors().then((machine: MachineFlavor[]) => {
        this.catalogue.machineCatalogue = machine
      })

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
      this.setPriceItems()
    },

    updateLabCardStorage(id: number, payload: UpdateStoragePayload) {
      const labCard = this.labCards.find((lab: LabCard) => lab.id === id)
      if (labCard) {
        labCard.storage = payload.size
        labCard.priceStorage = payload.price
        labCard.selectedStorage = payload.selectedStorage
      }
      this.totalStorage.size = this.labCards.reduce((total: number, lab: LabCard) => total + lab.storage, 0)
      this.totalStorage.cost = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceStorage, 0)
      this.itemsStorageExport[id] = payload.selectedStorage
      this.setPriceItems()
    },

    updateLabCardCompute(id: number, prices: UpdateComputePayload) {
      const labCard = this.labCards.find((lab: LabCard) => lab.id === id)
      if (labCard) {
        labCard.priceComputeYearly = Number(prices.yearlyPrice)
        labCard.numCompute = Number(prices.numCompute)
        labCard.selectedCompute = prices.selectedCompute
      }
      this.totalCompute.price = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceComputeYearly, 0)
      this.itemsComputeExport[id] = prices.selectedCompute
      this.setPriceItems()
    },
    removeLabCard(id: number) {
      this.labCards = this.labCards.filter(lab => lab.id !== id)
      delete this.itemsComputeExport[id]
      delete this.itemsStorageExport[id]
      this.setPriceItems()
    },

    removeAllLabs() {
      this.labCards = []
      this.itemsComputeExport = []
      this.itemsStorageExport = []
      this.totalCompute = { price: 0.0 }
      this.totalStorage = { size: 0.0, cost: 0.0 }
      this.nextLabId = 1
      this.setPriceItems()
      if (!ISSERVER) {
        localStorage.removeItem("priceEstimatorState")
      }
    },

    setPriceItems() {
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
        price: this.totalCompute.price,
      })
      priceItems.push({
        name: "Storage",
        subscription: "Commitment",
        units: `${this.totalStorage.size} TB`,
        price: this.totalStorage.cost,
      })
      this.totalLabCost = priceItems
      this.sumInTotal = priceItems.reduce((total, item) => total + item.price, 0)
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
          this.totalCompute = { price: 0.0 }
          this.totalStorage = { size: 0.0, cost: 0.0 }
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
          this.setPriceItems()
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
          :sum-in-total="sumInTotal"
          :itemsComputeExport="itemsComputeExport"
          :itemsStorageExport="itemsStorageExport"
        />
      </v-row>
    </v-sheet>
  </v-container>
</template>

<style scoped>
</style>
