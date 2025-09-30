<script lang="ts">
import { defineComponent, nextTick } from "vue"
import pricesApi from "./api/pricesApi.js"

const ISSERVER = typeof window === "undefined"

// Define the labCard interface for type safety
interface labCard {
  id: number
  title: string
  storage: number
  priceStorage: number
  priceComputeYearly: number
  priceComputeYearlyYearly: number
  numCompute: number
  // Add properties to hold initial data for imported labs
  initialCompute?: any[]
  initialStorage?: any[]
  // Add properties to hold the current dataset for saving state
  computeDataset?: any[]
  storageDataset?: any[]
}

interface datasetCompute {
  id: number
  name: string
  flavor: string
  core_count: number
  ram: number
  type: string
  monthlyPrice: number
  yearlyPrice: number
}
interface datasetStorage {}

export default defineComponent({
  props: {
    title: { type: String, default: "Title" },
  },

  data() {
    return {
      labCards: [] as labCard[], // Initialize an empty array for lab cards
      nextLabId: 1, // New property to track the next available lab ID
      selectedDataSpaceSub: null,
      dataspaceSubscriptions: [
        // Predefined data space subscriptions
        { name: "Data space", subscription: "White (1 year)", label: "White (1 year)", units: 1, price: 0.0 },
        { name: "Data space", subscription: "White (3 years)", label: "White (3 years)", units: 1, price: 0.0 },
        { name: "Data space", subscription: "Orange (1 year)", label: "Orange (1 year)", units: 1, price: 8495.0 },
        { name: "Data space", subscription: "Orange (3 years)", label: "Orange (3 years)", units: 1, price: 29734.0 },
        { name: "Data space", subscription: "Blue (1 year)", label: "Blue (1 year)", units: 1, price: 35397.0 },
      ] as { name: string; subscription: string | null; label: string; units: number; price: number }[],
      // Initialization states and data storage for various price and machine data
      isInitializingComputePrices: false,
      computePrices: [],
      isInitializingStoragePrices: false,
      storagePrices: [],
      isInitializingGpuPrices: false,
      gpuPrices: [],
      isInitializingMachines: false,
      machines: [],
      isInitializingAvailableGpus: false,
      availableGpus: [],
      labPrices: [],
      // Total price data
      totalCompute: { price: 0.0 },
      totalStorage: 0.0,
      totalStorageCost: 0.0,
      totalPriceItems: [],
      sumInTotal: 0.0,
      itemsComputeExport: [] as datasetCompute[],
      itemsStorageExport: [] as datasetStorage[],
    }
  },

  created() {
    // Initialize all data when the component is created, then load the saved state
    this.initializeAll().then(() => {
      this.loadState()
    })
  },

  methods: {
    // Method to save the current state to localStorage
    saveState() {
      // Create a deep clone of the state to avoid mutating the reactive state that the child is watching.
      const stateToSave = JSON.parse(
        JSON.stringify({
          labCards: this.labCards,
          nextLabId: this.nextLabId,
        }),
      )

      // Update the 'initial' properties on the cloned object before saving.
      stateToSave.labCards.forEach(lab => {
        lab.initialCompute = lab.computeDataset
        lab.initialStorage = lab.storageDataset
        // Clean up the temporary properties so they aren't saved in localStorage
        delete lab.computeDataset
        delete lab.storageDataset
      })

      if (!ISSERVER) {
        localStorage.setItem("priceEstimatorState", JSON.stringify(stateToSave))
      }
    },

    // Method to load the state from localStorage
    loadState() {
      //Add some try catch here, if it fails just give them an empty state
      try {
        const savedState = localStorage.getItem("priceEstimatorState")
        if (savedState) {
          const state = JSON.parse(savedState)
          this.labCards = state.labCards || []
          this.nextLabId = state.nextLabId || 1

          // After loading state, we need to re-populate the export arrays and recalculate totals
          this.$nextTick(() => {
            this.labCards.forEach(lab => {
              // This assumes that the child LabCard component will emit its state on creation
              // which will then be captured by updateLabCardCompute/Storage.
            })
            this.setPriceItems()
          })
        }
      } catch (error) {
        console.error("Failed to load state:", error)
        // If loading fails, just start with an empty state
        this.labCards = []
        this.nextLabId = 1
      }
    },

    // Method to initialize all data
    initializeAll() {
      this.isInitializingComputePrices = true
      this.isInitializingStoragePrices = true
      this.isInitializingGpuPrices = true
      this.isInitializingMachines = true
      this.isInitializingAvailableGpus = true

      const priceListPromise = pricesApi.getPriceList().then(json => {
        this.computePrices = json.filter(item => item["service.group"] === "cpu").map(this.preparePricesToYearly)
        this.storagePrices = json.filter(item => item["service.family"] === "store")
        this.gpuPrices = json.filter(item => item["service.group"] === "gpu").map(this.preparePricesToYearly)
        this.labPrices = json.filter(item => item["service.group"] === "lab")
      })

      const gpusPromise = pricesApi.getAvailableGPUS().then(gpus => {
        this.availableGpus = gpus
      })

      const machinesPromise = pricesApi.getMachineFlavors().then(machine => {
        this.machines = machine
      })

      // Return a promise that resolves when all data fetching is complete
      return Promise.all([priceListPromise, gpusPromise, machinesPromise]).then(() => {
        this.isInitializingComputePrices = false
        this.isInitializingStoragePrices = false
        this.isInitializingGpuPrices = false
        this.isInitializingMachines = false
        this.isInitializingAvailableGpus = false
      })
    },
    // Initialize available GPUs
    initializeAvailableGpus() {
      this.isInitializingAvailableGpus = true
      const uponGpus = pricesApi.getAvailableGPUS()
      uponGpus.then(gpus => {
        this.availableGpus = gpus
        this.isInitializingAvailableGpus = false
      })
    },
    // Initialize available machines
    initializeMachines() {
      this.isInitializingMachines = true
      const machines = pricesApi.getMachineFlavors()
      machines.then(machine => {
        this.machines = machine
        this.isInitializingMachines = false
      })
    },
    // Convert daily prices to yearly prices
    preparePricesToYearly(item: any) {
      if (item["service.commitment"] === "1D") {
        item["service.commitment"] = "1Y"
        item["price.nok.ex.vat"] = item["price.nok.ex.vat"] * 365
      }
      return item
    },

    // Add a new lab card
    addLabCard() {
      const newLabCard = {
        id: this.nextLabId, // Use the counter for the new ID
        title: `Lab ${this.nextLabId}`,
        // Initialize with default empty values to prevent errors
        storage: 0,
        priceStorage: 0,
        priceComputeYearly: 0,
        priceComputeYearlyYearly: 0,
        numCompute: 0,
        initialCompute: [],
        initialStorage: [],
      }
      this.labCards.push(newLabCard)
      this.nextLabId++ // Increment the counter for the next lab
      this.setPriceItems()
      this.saveState() // Save state after adding a lab
    },

    // Update the storage property of a lab card
    updateLabCardStorage(id, payload) {
      const labCard = this.labCards.find(lab => lab.id === id)
      if (labCard) {
        labCard.storage = payload
        labCard.priceStorage = payload.price
        // Store the current dataset to be used when saving state
        labCard.storageDataset = payload.datasetStorage
      }
      this.totalStorage = this.labCards.reduce((total, lab) => total + lab.storage.size, 0)
      this.totalStorageCost = this.labCards.reduce((total, lab) => total + lab.priceStorage, 0)
      this.itemsStorageExport[id] = payload.datasetStorage
      this.setPriceItems()
      this.saveState() // Save state after updating storage
    },

    // Update the compute property of a lab card
    updateLabCardCompute(id, prices) {
      const labCard = this.labCards.find(lab => lab.id === id)
      if (labCard) {
        labCard.priceComputeYearly = parseFloat(prices.yearlyPrice)
        labCard.numCompute = parseFloat(prices.numCompute)
        // Store the current dataset to be used when saving state
        labCard.computeDataset = prices.datasetCompute
      }
      this.totalCompute.price = this.labCards.reduce((total, lab) => total + lab.priceComputeYearly, 0)
      /**
       * We need to handle that we can have multiple labs for the export. So make it an array of arrays.
       */
      this.itemsComputeExport[id] = prices.datasetCompute
      this.setPriceItems()
      this.saveState() // Save state after updating compute
    },
    // Remove a lab card by its ID
    removeLabCard(id) {
      this.labCards = this.labCards.filter(lab => lab.id !== id)
      // Use delete to create a sparse array, preserving other indices
      delete this.itemsComputeExport[id]
      delete this.itemsStorageExport[id]
      // Recalculate totals after removing a lab card
      this.setPriceItems()
      this.saveState() // Save state after removing a lab
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
      // Remove the saved state from local storage
      if (!ISSERVER) {
        localStorage.removeItem("priceEstimatorState")
      }
    },

    // Set the price items and calculate the total sum
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
      this.$refs.fileInput.click()
    },

    async handleFileUpload(event) {
      const file = event.target.files[0]
      if (!file) {
        return
      }

      const reader = new FileReader()
      reader.onload = async e => {
        try {
          // Ensure all price data is loaded before processing the file
          await this.initializeAll()

          const data = JSON.parse(e.target.result as string)

          // Basic validation of the JSON structure
          if (!data.version || !Array.isArray(data.labs)) {
            throw new Error("Invalid JSON format: 'version' or 'labs' property is missing.")
          }

          // Reset current state
          this.labCards = []
          this.itemsComputeExport = []
          this.itemsStorageExport = []
          this.totalCompute = { price: 0.0 }
          this.totalStorage = 0.0
          this.totalStorageCost = 0.0
          this.nextLabId = 1 // Reset the lab ID counter

          // Re-create labs from the imported file
          data.labs.forEach(lab => {
            const newLabCard: labCard = {
              id: lab.id,
              title: lab.name,
              // Initialize all properties to a default state
              storage: 0,
              priceStorage: 0,
              priceComputeYearly: 0,
              priceComputeYearlyYearly: 0,
              numCompute: 0,
              initialCompute: lab.compute || [],
              initialStorage: lab.storage || [],
            }
            this.labCards.push(newLabCard)
            // Update the nextLabId to be one greater than the highest ID found
            if (lab.id >= this.nextLabId) {
              this.nextLabId = lab.id + 1
            }
          })

          // Wait for the DOM to update with the new lab cards
          await nextTick()

          // Now that lab cards are created and have emitted their initial state,
          // recalculate the total summary.
          this.setPriceItems()
          this.saveState() // Save the newly imported state

          // Reset the file input so the same file can be uploaded again
          event.target.value = ""
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

      <!-- Subscription selection component (commented out) -->
      <!-- <v-select
      v-model="selectedDataSpaceSub"
      :items="dataspaceSubscriptions"
      item-title="label"
      label="Choose a subscription"
      clearable
      @update:model-value="setPriceItems"
    >
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props" :subtitle="item.raw.price"></v-list-item>
      </template>
</v-select> -->

      <v-container>
        <v-row lex-direction="row-reverse" justify="space-between">
          <v-col cols="auto">
            <!-- Add a new lab card on button click -->
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
      <!-- Loop through labCards array and render LabCard component -->
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
      <!-- Display total prices if there are lab cards -->
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
/* Add scoped styles if needed */

/* TODO: Make sure that the price is calculated correctly when importing a file and loading from local storage */
</style>
