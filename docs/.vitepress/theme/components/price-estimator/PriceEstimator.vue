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
      isInitializingComputePrices: false,
      computePrices: [] as PriceListItem[],
      isInitializingStoragePrices: false,
      storagePrices: [] as PriceListItem[],
      isInitializingGpuPrices: false,
      gpuPrices: [] as PriceListItem[],
      isInitializingMachines: false,
      machines: [] as MachineFlavor[],
      isInitializingAvailableGpus: false,
      availableGpus: [] as GpuModel[],
      labPrices: [] as PriceListItem[],
      totalCompute: { price: 0.0 },
      totalStorage: 0.0,
      totalStorageCost: 0.0,
      totalPriceItems: [] as TotalPriceItem[],
      sumInTotal: 0.0,
      itemsComputeExport: [] as ComputeUnit[][],
      itemsStorageExport: [] as StorageUnit[][],
    }
  },

  created() {
    this.initializeAll().then(() => {
      this.loadState()
    })
  },

  methods: {
    saveState() {
      const stateToSave = JSON.parse(
        JSON.stringify({
          labCards: this.labCards,
          nextLabId: this.nextLabId,
        }),
      )

      stateToSave.labCards.forEach((lab: LabCard) => {
        lab.initialCompute = lab.computeDataset
        lab.initialStorage = lab.storageDataset
        delete lab.computeDataset
        delete lab.storageDataset
      })

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
          const state = JSON.parse(savedState)
          this.labCards = state.labCards || []
          this.nextLabId = state.nextLabId || 1

          this.$nextTick(() => {
            this.labCards.forEach(lab => {})
            this.setPriceItems()
          })
        }
      } catch (error) {
        console.error("Failed to load state:", error)
        this.labCards = []
        this.nextLabId = 1
      }
    },

    initializeAll() {
      this.isInitializingComputePrices = true
      this.isInitializingStoragePrices = true
      this.isInitializingGpuPrices = true
      this.isInitializingMachines = true
      this.isInitializingAvailableGpus = true

      const priceListPromise = pricesApi.getPriceList().then((json: PriceListItem[]) => {
        this.computePrices = json.filter((item: PriceListItem) => item["service.group"] === "cpu").map(this.preparePricesToYearly)
        this.storagePrices = json.filter((item: PriceListItem) => item["service.family"] === "store")
        this.gpuPrices = json.filter((item: PriceListItem) => item["service.group"] === "gpu").map(this.preparePricesToYearly)
        this.labPrices = json.filter((item: PriceListItem) => item["service.group"] === "lab")
      })

      const gpusPromise = pricesApi.getAvailableGPUS().then((gpus: GpuModel[]) => {
        this.availableGpus = gpus
      })

      const machinesPromise = pricesApi.getMachineFlavors().then((machine: MachineFlavor[]) => {
        this.machines = machine
      })

      return Promise.all([priceListPromise, gpusPromise, machinesPromise]).then(() => {
        this.isInitializingComputePrices = false
        this.isInitializingStoragePrices = false
        this.isInitializingGpuPrices = false
        this.isInitializingMachines = false
        this.isInitializingAvailableGpus = false
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
        priceComputeYearlyYearly: 0,
        numCompute: 0,
        initialCompute: [],
        initialStorage: [],
      }
      this.labCards.push(newLabCard)
      this.nextLabId++
      this.setPriceItems()
      this.saveState()
    },

    updateLabCardStorage(id: number, payload: UpdateStoragePayload) {
      const labCard = this.labCards.find((lab: LabCard) => lab.id === id)
      if (labCard) {
        labCard.storage = payload.size
        labCard.priceStorage = payload.price
        labCard.storageDataset = payload.datasetStorage
      }
      this.totalStorage = this.labCards.reduce((total: number, lab: LabCard) => total + lab.storage, 0)
      this.totalStorageCost = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceStorage, 0)
      this.itemsStorageExport[id] = payload.datasetStorage
      this.setPriceItems()
      this.saveState()
    },

    updateLabCardCompute(id: number, prices: UpdateComputePayload) {
      const labCard = this.labCards.find((lab: LabCard) => lab.id === id)
      if (labCard) {
        labCard.priceComputeYearly = Number(prices.yearlyPrice)
        labCard.numCompute = Number(prices.numCompute)
        labCard.computeDataset = prices.datasetCompute
      }
      this.totalCompute.price = this.labCards.reduce((total: number, lab: LabCard) => total + lab.priceComputeYearly, 0)
      this.itemsComputeExport[id] = prices.datasetCompute
      this.setPriceItems()
      this.saveState()
    },
    removeLabCard(id: number) {
      this.labCards = this.labCards.filter(lab => lab.id !== id)
      delete this.itemsComputeExport[id]
      delete this.itemsStorageExport[id]
      this.setPriceItems()
      this.saveState()
    },

    removeAllLabs() {
      this.labCards = []
      this.itemsComputeExport = []
      this.itemsStorageExport = []
      this.totalCompute = { price: 0.0 }
      this.totalStorage = 0.0
      this.totalStorageCost = 0.0
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
        units: `${this.totalStorage} TB`,
        price: this.totalStorageCost,
      })
      this.totalPriceItems = priceItems
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

          this.labCards = []
          this.itemsComputeExport = []
          this.itemsStorageExport = []
          this.totalCompute = { price: 0.0 }
          this.totalStorage = 0.0
          this.totalStorageCost = 0.0
          this.nextLabId = 1

          data.labs.forEach((lab: any) => {
            const newLabCard: LabCard = {
              id: lab.id,
              title: lab.name,
              storage: 0,
              priceStorage: 0,
              priceComputeYearly: 0,
              priceComputeYearlyYearly: 0,
              numCompute: 0,
              initialCompute: lab.compute || [],
              initialStorage: lab.storage || [],
            }
            this.labCards.push(newLabCard)
            if (lab.id >= this.nextLabId) {
              this.nextLabId = lab.id + 1
            }
          })

          await nextTick()
          this.setPriceItems()
          this.saveState()
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
  <v-container>
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
            :compute-prices="computePrices"
            :gpu-prices="gpuPrices"
            :machines="machines"
            :available-gpus="availableGpus"
            :storage-prices="storagePrices"
            :initial-compute="lab.initialCompute"
            :initial-storage="lab.initialStorage"
            @updateStorage="updateLabCardStorage(lab.id, $event)"
            @updateCompute="updateLabCardCompute(lab.id, $event)"
            @removeLab="removeLabCard(lab.id)"
          />
        </v-col>
      </v-row>
      <v-row v-if="labCards.length !== 0">
        <TotalBlock
          :total-items="totalPriceItems"
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
