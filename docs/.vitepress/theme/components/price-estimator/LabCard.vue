<script lang="ts">
export default {
  name: "LabCard",
  emits: ["updateStorage", "updateCompute", "removeLab"],
  props: {
    title: { type: String, required: true, default: "Lab " },
    computePrices: { type: Array, default: () => [] },
    gpuPrices: { type: Array, default: () => [] },
    machines: { type: Array, default: () => [] },
    availableGpus: { type: Array, default: () => [] },
    storagePrices: { type: Array, default: () => [] },
    initialCompute: { type: Array, default: null },
    initialStorage: { type: Array, default: null },
  },
  data() {
    return {
      /* These are the variables used to manage the compute machines */
      computeId: 0,
      isComputeModalOpen: false,
      editingComputeItem: null, // To hold the item being edited
      //Add a default entry to datasetCompute with name, flavor, core_count, ram, type, price
      datasetCompute: [],
      isInitializingComputePrices: false,
      computeHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Machine type", align: "start", sortable: true, key: "flavor" },
        { title: "cpu cores", align: "start", sortable: true, key: "core_count" },
        { title: "Memory [TB]", align: "start", sortable: true, key: "ram" },
        { title: "Type", align: "start", sortable: true, key: "type" },
        { title: "Price / month", align: "start", sortable: true, key: "monthlyPrice" },
        { title: "Price / year", align: "start", sortable: true, key: "yearlyPrice" },
        { title: "Actions", key: "actions", align: "end", sortable: false },
      ],
      totalPriceItems: 0.0,
      computeLabSum: { monthlyPrice: 0.0, yearlyPrice: 0.0, ram: 0, cpu_count: 0 },

      /* These are the variables used to manage the storage */
      storageId: 0,
      isStorageModalOpen: false,
      datasetStorage: [],
      selectedStorage: [],
      isInitializingStoragePrices: false,
      storageHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Usage", align: "start", sortable: true, key: "usage" },
        { title: "Type", align: "start", sortable: true, key: "type" },
        { title: "Size [TB]", align: "start", sortable: true, key: "size" },
        { title: "Price", align: "start", sortable: true, key: "price" },
      ],
      storageLabSum: {
        size: 0.0,
        type: null,
        price: 0.0,
      },
      snackbar: {
        show: false,
        message: "",
      },
    }
  },
  computed: {
    displayStorageSumPrice() {
      return this.storageLabSum.price.toFixed(0) + " kr"
    },
    displayDatasetStorage() {
      return this.datasetStorage.map(item => {
        return {
          id: item.id,
          name: item.name,
          usage: item.usage,
          type: item.type,
          size: item.size + " TB",
          price: item.price.toFixed(0) + " kr",
        }
      })
    },
  },

  watch: {
    // Watch for changes in initial data props to re-initialize the component state
    initialCompute: {
      handler() {
        this.initializeState()
      },
      deep: true,
    },
    initialStorage: {
      handler() {
        this.initializeState()
      },
      deep: true,
    },
  },

  methods: {
    initializeState() {
      if (this.initialCompute && this.initialCompute.length > 0) {
        this.datasetCompute = this.initialCompute.map(item => {
          const flavorParts = item.flavor.split(" + ")
          const mainFlavor = flavorParts[0]
          const gpuFlavor = item.gpu || null
          const prices = this.getComputePrice(mainFlavor, item.type, gpuFlavor)
          return { ...item, ...prices }
        })
        this.computeId = this.initialCompute.length
      } else {
        this.datasetCompute = []
        this.computeId = 0
        this.pushDefaultComputeUnit()
      }

      if (this.initialStorage && this.initialStorage.length > 0) {
        this.datasetStorage = this.initialStorage.map(item => ({ ...item, price: 0 })) // Price will be calculated in updateLabSumStorage
        this.storageId = this.initialStorage.length
      } else {
        this.datasetStorage = []
        this.storageId = 0
        this.pushDefaultStorage()
      }

      this.updateLabSum()
      this.updateLabSumStorage()
    },
    updateLabSum() {
      this.computeLabSum.monthlyPrice = this.datasetCompute.reduce(
        (acc, item) => parseFloat(acc) + parseFloat(item.monthlyPrice),
        0,
      )
      this.computeLabSum.yearlyPrice = this.datasetCompute.reduce(
        (acc, item) => parseFloat(acc) + parseFloat(item.yearlyPrice),
        0,
      )
      this.computeLabSum.ram = this.datasetCompute.reduce((acc, item) => acc + item.ram, 0)
      this.computeLabSum.cpu_count = this.datasetCompute.reduce((acc, item) => acc + item.core_count, 0)
      this.$emit("updateCompute", {
        monthlyPrice: this.computeLabSum.monthlyPrice,
        yearlyPrice: this.computeLabSum.yearlyPrice,
        numCompute: this.datasetCompute.length || 0,
        datasetCompute: this.datasetCompute,
      })
    },
    updateLabSumStorage() {
      this.storageLabSum.size = this.datasetStorage.reduce((acc, item) => acc + item.size, 0)

      this.updateAddedStorage()
      this.storageLabSum.price = this.datasetStorage.reduce((acc, item) => acc + item.price, 0)
      this.$emit("updateStorage", {
        size: this.storageLabSum.size,
        price: this.storageLabSum.price,
        datasetStorage: this.datasetStorage,
      })
    },

    addMachine() {
      this.editingComputeItem = null // Clear any previous editing state
      this.isComputeModalOpen = true
    },
    addStorage() {
      this.isStorageModalOpen = true
    },
    editCompute(item) {
      this.editingComputeItem = item
      this.isComputeModalOpen = true
    },
    closeComputeModal(payload: any) {
      if (payload) {
        if (this.editingComputeItem) {
          // This is an edit, so we replace the existing item
          const index = this.datasetCompute.findIndex(item => item.id === this.editingComputeItem.id)
          if (index !== -1) {
            // Ensure the ID of the original item is preserved
            this.datasetCompute.splice(index, 1, { ...payload, id: this.editingComputeItem.id })
          }
        } else {
          // This is a new item
          this.datasetCompute.push({ ...payload, id: this.computeId })
          this.computeId = this.computeId + 1
          if (this.datasetCompute.length > this.datasetStorage.length) {
            this.pushDefaultStorage()
          }
        }
        this.updateLabSum()
      }
      this.isComputeModalOpen = false
      this.editingComputeItem = null // Reset editing state
    },
    closeStorageModal(payload: any) {
      if (payload) {
        this.storageId = this.storageId + 1
        let price = this.calculateStoragePriceForVolume(payload.size)
        this.datasetStorage.push({
          id: this.storageId,
          name: payload.name,
          usage: payload.usage,
          type: payload.type,
          size: payload.size,
          price: price,
        })
        this.updateAddedStorage()
        this.updateLabSumStorage()
      }
      this.isStorageModalOpen = false
    },
    openSnackbar(message: string) {
      this.snackbar.message = message
      this.snackbar.show = true
    },

    removeComputeById(id: number) {
      if (id === 0) {
        this.openSnackbar("Cannot remove the default machine")
        return
      }

      this.datasetCompute = this.datasetCompute.filter(item => {
        return item["id"] !== id
      })
      this.updateLabSum()
    },
    //remember to emit the updateStorage event

    removeSelectedStorage() {
      if (this.selectedStorage.length === 0) {
        return
      }
      for (let i = 0; i < this.selectedStorage.length; i++) {
        this.datasetStorage = this.datasetStorage.filter(item => {
          return item["id"] !== this.selectedStorage[i]
        })
      }
      this.updateLabSumStorage()
      this.selectedStorage = []
    },
    pushDefaultComputeUnit() {
      let defaultUnit = this.computePrices.find(
        item =>
          item["service.unit"] === "default.c1" &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "1Y",
      )
      const machinetitle = this.machines
        .filter(item => item["value"] === defaultUnit["service.unit"])[0]
        ["title"].split(" - ")[1]
        .split(" / ")
      const core_count = parseInt(machinetitle[0].split(" ")[0])
      const ram = parseInt(machinetitle[1].split(" ")[0])
      this.datasetCompute.push({
        id: this.computeId,
        name: "machine-0",
        flavor: defaultUnit["service.unit"],
        core_count: core_count,
        gpu: null,
        ram: ram,
        type: "COMMITMENT_1Y",
        monthlyPrice: parseFloat(defaultUnit["price.nok.ex.vat"] / 12).toFixed(2),
        yearlyPrice: parseFloat(defaultUnit["price.nok.ex.vat"]).toFixed(2),
      })
      this.computeId += 1
    },
    pushDefaultStorage() {
      let defaultStorage = {
        id: this.storageId,
        name: "volume-" + this.storageId,
        usage: "Archive",
        type: "HDD",
        size: 1,
        price: 0, //price is zero, because it will be updated later, after calculating the total storage
      }

      this.datasetStorage.push(defaultStorage)
      //need to update all the existing storages, except the last one added.
      this.storageId += 1
      this.updateLabSumStorage()
    },
    updateAddedStorage() {
      this.datasetStorage.forEach((item, index) => {
        let price = this.calculateStoragePriceForVolume(item.size)
        item.price = price
      })
    },

    calculateStoragePriceForVolume(volumeSize: number) {
      let fraction = volumeSize / this.storageLabSum.size
      this.calculateTotalStoragePrice()
      return fraction * this.totalStoragePrice
    },

    calculateTotalStoragePrice() {
      let totalStorageSize = this.storageLabSum.size
      this.totalStoragePrice = this.storageCost(totalStorageSize)
    },
    storageCost(totalSize) {
      totalSize = parseFloat(totalSize)
      let level1 = this.storagePrices.find(item => {
        return item["service.commitment"] === "1Y" && item["service.unit"] === "First 10 TB"
      })
      level1 = level1["price.nok.ex.vat"]
      let level2 = this.storagePrices.find(
        item => item["service.commitment"] === "1Y" && item["service.unit"] === "Next 90 TB",
      )
      level2 = level2["price.nok.ex.vat"]
      let level3 = this.storagePrices.find(
        item => item["service.commitment"] === "1Y" && item["service.unit"] === "Over 100 TB",
      )
      level3 = level3["price.nok.ex.vat"]
      // Different equation used if total size is below 10 TB / 10 < totalSize <= 100 / above 100 TB
      let price
      //create a bunch of console log which will help you debug the issue

      if (totalSize <= 10) {
        price = parseFloat(level1) * totalSize
      } else if (totalSize > 10 && totalSize <= 100) {
        price = parseFloat(level1) * 10 + parseFloat(level2) * (totalSize - 10)
      } else if (totalSize > 100) {
        price = parseFloat(level1) * 10 + parseFloat(level2) * 90 + parseFloat(level3) * (totalSize - 100)
      }
      return price
    },

    // Helper to find compute price based on flavor and type
    getComputePrice(flavor, type, gpuFlavor = null) {
      let totalYearlyPrice = 0,
        totalMonthlyPrice = 0,
        mainFlavorPrice,
        gpuYearly

      if (type.includes("COMMITMENT")) {
        if (type === "COMMITMENT_3Y") {
          mainFlavorPrice = this.computePrices.find(
            p =>
              p["service.unit"] === flavor && p["service.level"] === "COMMITMENT" && p["service.commitment"] === "3Y",
          )["price.nok.ex.vat"]
          mainFlavorPrice = mainFlavorPrice / 3
        } else {
          mainFlavorPrice = this.computePrices.find(
            p =>
              p["service.unit"] === flavor && p["service.level"] === "COMMITMENT" && p["service.commitment"] === "1Y",
          )["price.nok.ex.vat"]
        }
      } else {
        mainFlavorPrice = this.computePrices.find(p => p["service.unit"] === flavor && p["service.level"] === type)[
          "price.nok.ex.vat"
        ]
      }
      if (mainFlavorPrice) {
        totalYearlyPrice += mainFlavorPrice
      }

      totalMonthlyPrice = Number((totalYearlyPrice / 12).toFixed(2))

      if (gpuFlavor) {
        const gpuPrice = this.gpuPrices.find(
          // GPU service level must always be ONDEMAND
          p => p["service.unit"] === gpuFlavor && p["service.level"] === "ONDEMAND",
        )
        if (gpuPrice) {
          gpuYearly = gpuPrice["price.nok.ex.vat"]
          totalYearlyPrice += gpuYearly
          totalMonthlyPrice = totalMonthlyPrice + Number((gpuYearly / 12).toFixed(2))
        }
      }
      // Otherwise, the fetched price is yearly, so calculate monthly from it
      return {
        monthlyPrice: parseFloat(totalMonthlyPrice).toFixed(2),
        yearlyPrice: parseFloat(totalYearlyPrice).toFixed(2),
      }
    },
  },

  created() {
    this.initializeState()
  },
}
</script>

<template>
  <v-container>
    <v-sheet class="lab-card ma-0">
      <v-card class="ma-0">
        <v-row class="ma-2" align="center" justify="space-between">
          <v-card-title>{{ title }}</v-card-title>
          <v-btn icon @click="$emit('removeLab')">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-row>

        <v-card flat>
          <v-card-title> Compute</v-card-title>
          <v-card-subtitle> {{ "Add a machine to " + title }}</v-card-subtitle>

          <v-data-table-virtual
            :items="datasetCompute"
            :headers="computeHeaders"
            :loading="isInitializingComputePrices"
            hide-default-footer
            hover
            item-value="id"
          >
            <template v-slot:item.actions="{ item }">
              <div class="d-flex ga-2 justify-end">
                <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="editCompute(item)"></v-icon>
                <v-icon
                  color="medium-emphasis"
                  icon="mdi-delete"
                  size="small"
                  @click="removeComputeById(item.id)"
                ></v-icon>
              </div>
            </template>

            <template v-slot:body.append="{}">
              <tr>
                <th :colspan="computeHeaders.length + 1" class="text-center">
                  <v-tooltip bottom>
                    <template #activator="{ props }">
                      <!-- Pass the activator props to the button -->
                      <v-btn v-bind="props" icon="mdi-plus" size="small" @click="addMachine"></v-btn>
                    </template>

                    <!-- Tooltip content -->
                    <span>Add a new machine</span>
                  </v-tooltip>

                  <!-- <v-icon icon="mdi-plus"></v-icon> -->
                </th>
              </tr>

              <tr>
                <th role="columnheader" class="pt-4 pb-2">
                  <span><strong>Total</strong> </span>
                </th>
                <th></th>
                <th>
                  <strong>{{ this.computeLabSum.cpu_count }}</strong>
                </th>
                <th>
                  <strong> {{ this.computeLabSum.ram }}</strong>
                </th>
                <th></th>
                <th>
                  <strong>{{ parseFloat(this.computeLabSum.monthlyPrice).toFixed(2) + " kr" }} </strong>
                </th>
                <th>
                  <strong>{{ parseFloat(this.computeLabSum.yearlyPrice).toFixed(2) + " kr" }} </strong>
                </th>
                <th></th>
              </tr>
            </template>
          </v-data-table-virtual>
        </v-card>

        <v-card flat>
          <v-card-title> Storage</v-card-title>
          <v-card-subtitle> Add storage to {{ title }} </v-card-subtitle>
          <v-card-subtitle> Each compute unit needs a volume of storage of atleast 1 TB</v-card-subtitle>
          <!-- <v-col cols="auto">
            <v-btn icon="mdi-plus" size="small" @click="addStorage"></v-btn>
          </v-col> -->
          <v-data-table-virtual
            v-model="selectedStorage"
            :items="displayDatasetStorage"
            :headers="storageHeaders"
            :loading="isInitializingStoragePrices"
            show-select
            hover
            hide-default-footer
            item-value="id"
          >
            <template v-slot:body.append="{}" v-if="this.storageLabSum['size'] !== 0">
              <tr>
                <th :colspan="storageHeaders.length + 1" class="text-center">
                  <v-tooltip bottom>
                    <template #activator="{ props }">
                      <v-btn v-bind="props" icon="mdi-plus" size="small" @click="addStorage"></v-btn>
                    </template>

                    <span>Add storage</span>
                  </v-tooltip>
                </th>
              </tr>
              <tr>
                <th role="columnheader" class="pt-4 pb-2">
                  <span><strong>Total</strong> </span>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th>
                  <strong>{{ this.storageLabSum.size + " TB" }}</strong>
                </th>
                <th>
                  <strong> {{ this.displayStorageSumPrice }}</strong>
                </th>
              </tr>
            </template>
          </v-data-table-virtual>

          <v-row class="ma-1">
            <v-col class="d-flex">
              <v-spacer></v-spacer>
              <v-btn @click="removeSelectedStorage">Remove selected</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-sheet>

    <v-dialog v-model="isComputeModalOpen" max-width="600px" min-width="600px">
      <Machine
        :compute-id="computeId"
        :flavors="computePrices"
        :gpus="gpuPrices"
        :machines="machines"
        :available-gpus="availableGpus"
        :initial-data="editingComputeItem"
        @close="closeComputeModal"
        @open-snackbar="openSnackbar"
      />
    </v-dialog>

    <v-dialog v-model="isStorageModalOpen" max-width="600px" min-width="600px">
      <Storage :storage-id="storageId" @close="closeStorageModal" />
    </v-dialog>

    <v-snackbar v-model="snackbar.show"> {{ snackbar.message }}</v-snackbar>
  </v-container>
</template>

<style scoped>
.lab-card {
  padding: 3px;
  /* margin-bottom: 10px; */
}
</style>
