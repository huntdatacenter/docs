<script lang="ts">
import type {
  ComputeUnit,
  StorageUnit,
  PriceListItem,
  MachineFlavor,
  ComputeLabSum,
  StorageLabSum,
  StorageUsageType,
  StorageType,
  Catalogue,
} from "./types"

export default {
  name: "LabCard",
  emits: ["updateStorage", "updateCompute", "removeLab"],
  props: {
    title: { type: String, required: true, default: "Lab " },
    catalogue: {
      type: Object as () => Catalogue,
      required: true,
    },
    initSelectedCompute: { type: Array as () => ComputeUnit[], default: null },
    initSelectedStorage: { type: Array as () => StorageUnit[], default: null },
  },
  data() {
    return {
      computeId: 0,
      isComputeModalOpen: false,
      editingComputeItem: null as ComputeUnit | null,
      selectedCompute: [] as ComputeUnit[],
      isLoadingComputePrices: false,
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
      computeLabSum: { monthlyPrice: 0.0, yearlyPrice: 0.0, ram: 0, cpu_count: 0 } as ComputeLabSum,
      storageId: 0,
      isStorageModalOpen: false,
      editingStorageItem: null as StorageUnit | null,
      selectedStorage: [] as StorageUnit[],
      storageHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Usage", align: "start", sortable: true, key: "usage" },
        { title: "Type", align: "start", sortable: true, key: "type" },
        { title: "Size [TB]", align: "start", sortable: true, key: "size" },
        { title: "Price", align: "start", sortable: true, key: "price" },
        { title: "Actions", key: "actions", align: "end", sortable: false },
      ],
      storageLabSum: {
        size: 0.0,
        type: null,
        price: 0.0,
      } as StorageLabSum,
      snackbar: {
        show: false,
        message: "",
      },
      totalStoragePrice: 0,
    }
  },
  computed: {
    displayStorageSumPrice() {
      return this.storageLabSum.price.toFixed(2) + " kr"
    },
    displayselectedStorage() {
      return this.selectedStorage.map(item => {
        return {
          id: item.id,
          name: item.name,
          usage: item.usage,
          type: item.type,
          size: item.size + " TB",
          price: item.price.toFixed(2) + " kr",
        }
      })
    },
  },

  methods: {
    initializeState() {
      if (this.initSelectedCompute && this.initSelectedCompute.length > 0) {
        this.selectedCompute = this.initSelectedCompute.map(item => {
          const flavorParts = item.flavor.split(" + ")
          const mainFlavor = flavorParts[0]
          const gpuFlavor = item.gpu
          const prices = this.getComputePriceForLab(mainFlavor, item.type, gpuFlavor)
          return { ...item, ...prices }
        })
        this.computeId = this.initSelectedCompute.length
      } else {
        this.selectedCompute = []
        this.computeId = 0
        this.pushDefaultComputeUnit()
      }

      if (this.initSelectedStorage && this.initSelectedStorage.length > 0) {
        this.selectedStorage = this.initSelectedStorage.map(item => ({ ...item, price: 0 }))
        this.storageId = this.initSelectedStorage.length
      } else {
        this.selectedStorage = []
        this.storageId = 0
        this.pushDefaultStorage()
      }
      this.updateLabSumCompute(false)
      this.updateLabSumStorage(false)
    },
    updateLabSumCompute(emit=true) {
      this.computeLabSum.monthlyPrice = this.selectedCompute.reduce(
        (acc, item) => Number(acc) + Number(item.monthlyPrice),
        0,
      )
      this.computeLabSum.yearlyPrice = this.selectedCompute.reduce(
        (acc, item) => Number(acc) + Number(item.yearlyPrice),
        0,
      )
      this.computeLabSum.ram = this.selectedCompute.reduce((acc, item) => acc + item.ram, 0)
      this.computeLabSum.cpu_count = this.selectedCompute.reduce((acc, item) => acc + item.core_count, 0)
      if (emit) {
      this.$emit("updateCompute", {
        monthlyPrice: this.computeLabSum.monthlyPrice,
        yearlyPrice: this.computeLabSum.yearlyPrice,
        numCompute: this.selectedCompute.length || 0,
        selectedCompute: this.selectedCompute,
      })
      }
    },
    updateLabSumStorage(emit = true) {
      this.storageLabSum.size = this.selectedStorage.reduce((acc, item) => acc + item.size, 0)

      this.updateAddedStorage()
      this.storageLabSum.price = this.selectedStorage.reduce((acc, item) => acc + item.price, 0)
      if (emit) {
        this.$emit("updateStorage", {
        size: this.storageLabSum.size,
        price: this.storageLabSum.price,
        selectedStorage: this.selectedStorage,
      })
      }
    },

    addMachine() {
      this.editingComputeItem = null
      this.isComputeModalOpen = true
    },

    addStorage() {
      this.editingStorageItem = null
      this.isStorageModalOpen = true
    },
    editStorage(item: StorageUnit) {
      this.editingStorageItem = item
      this.isStorageModalOpen = true
    },
    editCompute(item: ComputeUnit) {
      this.editingComputeItem = item
      this.isComputeModalOpen = true
    },
    closeComputeModal(payload: any) {
      if (payload) {
        if (this.editingComputeItem) {
          const index = this.selectedCompute.findIndex(item => item.id === this.editingComputeItem!.id)
          if (index !== -1) {
            this.selectedCompute.splice(index, 1, { ...payload, id: this.editingComputeItem!.id })
          }
        } else {
          this.selectedCompute.push({ ...payload, id: this.computeId })
          this.computeId = this.computeId + 1
          if (this.selectedCompute.length > this.selectedStorage.length) {
            this.pushDefaultStorage()
          }
        }
        this.updateLabSumCompute()
      }
      this.isComputeModalOpen = false
      this.editingComputeItem = null
    },
    closeStorageModal(payload: any) {
      if (payload) {
        const price = this.calculateStoragePriceForVolume(payload.size)
        if (this.editingStorageItem) {
          const index = this.selectedStorage.findIndex(item => item.id === this.editingStorageItem!.id)
          if (index !== -1) {
            this.selectedStorage.splice(index, 1, {
              id: this.editingStorageItem!.id,
              name: payload.name,
              usage: payload.usage,
              type: payload.type,
              size: payload.size,
              price: price,
            })
          }
        } else {
          this.storageId = this.storageId + 1
          this.selectedStorage.push({
            id: this.storageId,
            name: payload.name,
            usage: payload.usage,
            type: payload.type,
            size: payload.size,
            price: price,
          })
        }
        this.updateAddedStorage()
        this.updateLabSumStorage()
      }
      this.isStorageModalOpen = false
      this.editingStorageItem = null
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
      this.selectedCompute = this.selectedCompute.filter(item => item.id !== id)
      this.updateLabSumCompute()
    },

    removeStorageById(id: number) {
      if (id === 0) {
        this.openSnackbar("Cannot remove the default storage volume")
        return
      }
      this.selectedStorage = this.selectedStorage.filter(item => item.id !== id)
      this.updateLabSumStorage()
    },
    pushDefaultComputeUnit() {
      const defaultUnit = this.catalogue.computePrices.find(
        (item: PriceListItem) =>
          item["service.unit"] === "default.c1" &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "1Y",
      )
      if (!defaultUnit) return
      
      const machineInfo = this.catalogue.machineCatalogue.find((item: MachineFlavor) => item["value"] === defaultUnit["service.unit"])
      if (!machineInfo) return
      
      const machinetitle = machineInfo["title"].split(" - ")[1].split(" / ")
      const core_count = parseInt(machinetitle[0].split(" ")[0])
      const ram = parseInt(machinetitle[1].split(" ")[0])
      this.selectedCompute.push({
        id: this.computeId,
        name: "machine-0",
        flavor: defaultUnit["service.unit"],
        core_count: core_count,
        gpu: null,
        ram: ram,
        type: "COMMITMENT_1Y",
        monthlyPrice: defaultUnit["price.nok.ex.vat"] / 12,
        yearlyPrice: defaultUnit["price.nok.ex.vat"],
      })
      this.computeId += 1
    },
    pushDefaultStorage() {
      const defaultStorage: StorageUnit = {
        id: this.storageId,
        name: "volume-" + this.storageId,
        usage: "Archive" as StorageUsageType,
        type: "HDD" as StorageType,
        size: 1,
        price: 0,
      }
      this.selectedStorage.push(defaultStorage)
      this.storageId += 1
      this.updateLabSumStorage()
    },
    updateAddedStorage() {
      this.selectedStorage.forEach(item => {
        item.price = this.calculateStoragePriceForVolume(item.size)
      })
    },

    calculateStoragePriceForVolume(volumeSize: number) {
      const fraction = volumeSize / this.storageLabSum.size
      const totalStoragePrice = this.storageCost(this.storageLabSum.size) || 0
      return fraction * totalStoragePrice
    },

    calculateTotalStoragePrice() {
      const totalStorageSize = this.storageLabSum.size
      this.totalStoragePrice = this.storageCost(totalStorageSize) || 0
    },


    storageCost(totalSize: number) {
      totalSize = Number(totalSize)

      const level1Item = this.catalogue.storagePrices.find(
        (item: PriceListItem) => item["service.commitment"] === "1Y" && item["service.unit"] === "First 10 TB"
      )
      const level1 = level1Item?.["price.nok.ex.vat"] || 0

      const level2Item = this.catalogue.storagePrices.find(
        (item: PriceListItem) => item["service.commitment"] === "1Y" && item["service.unit"] === "Next 90 TB"
      )
      const level2 = level2Item?.["price.nok.ex.vat"] || 0

      const level3Item = this.catalogue.storagePrices.find(
        (item: PriceListItem) => item["service.commitment"] === "1Y" && item["service.unit"] === "Over 100 TB"
      )
      const level3 = level3Item?.["price.nok.ex.vat"] || 0

      let price: number | undefined

      if (totalSize <= 10) {
        price = Number(level1) * totalSize
      } else if (totalSize > 10 && totalSize <= 100) {
        price = Number(level1) * 10 + Number(level2) * (totalSize - 10)
      } else if (totalSize > 100) {
        price = Number(level1) * 10 + Number(level2) * 90 + Number(level3) * (totalSize - 100)
      }

      return price
    },

    getComputePriceForLab(flavor: string, type: string, gpuFlavor: string | null = null) {
      let totalYearlyPrice = 0
      let totalMonthlyPrice = 0
      let mainFlavorPrice: number | undefined
      let gpuYearly: number | undefined

      if (type.includes("COMMITMENT")) {
        if (type === "COMMITMENT_3Y") {
          const found3Y = this.catalogue.computePrices.find(
            (p: PriceListItem) =>
              p["service.unit"] === flavor &&
              p["service.level"] === "COMMITMENT" &&
              p["service.commitment"] === "3Y"
          )
          if (found3Y) {
            mainFlavorPrice = found3Y["price.nok.ex.vat"] / 3
          }
        } else {
          mainFlavorPrice = this.catalogue.computePrices.find(
            (p: PriceListItem) =>
              p["service.unit"] === flavor &&
              p["service.level"] === "COMMITMENT" &&
              p["service.commitment"] === "1Y"
          )?.["price.nok.ex.vat"]
        }
      } else {
        const foundPrice = this.catalogue.computePrices.find(
          (p: PriceListItem) => p["service.unit"] === flavor && p["service.level"] === type
        )
        mainFlavorPrice = foundPrice?.["price.nok.ex.vat"]
      }

      if (mainFlavorPrice) {
        totalYearlyPrice += mainFlavorPrice
      }

      totalMonthlyPrice = Number((totalYearlyPrice / 12))

      if (gpuFlavor) {
        const gpuPrice = this.catalogue.gpuPrices.find(
          (p: PriceListItem) => p["service.unit"] === gpuFlavor && p["service.level"] === "ONDEMAND"
        )
        if (gpuPrice) {
          gpuYearly = gpuPrice["price.nok.ex.vat"]
          totalYearlyPrice += gpuYearly
          totalMonthlyPrice = totalMonthlyPrice + Number((gpuYearly / 12))
        }
      }
      return {
        monthlyPrice: totalMonthlyPrice,
        yearlyPrice: totalYearlyPrice,
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
            :items="selectedCompute"
            :headers="computeHeaders"
            :loading="isLoadingComputePrices"
            hide-default-footer
            hover
            item-value="id"
          >
            <template v-slot:item.monthlyPrice="{ item }">
              {{ Number(item.monthlyPrice).toFixed(2) }}
            </template>

            <template v-slot:item.yearlyPrice="{ item }">
              {{ Number(item.yearlyPrice).toFixed(2) }}
            </template>

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
                      <v-btn v-bind="props" icon="mdi-plus" size="small" @click="addMachine"></v-btn>
                    </template>
                    <span>Add a new machine</span>
                  </v-tooltip>
                </th>
              </tr>

              <tr>
                <th role="columnheader" class="pt-4 pb-2">
                  <span><strong>Total</strong> </span>
                </th>
                <th></th>
                <th>
                  <strong>{{ computeLabSum?.cpu_count || 0 }}</strong>
                </th>
                <th>
                  <strong> {{ computeLabSum?.ram || 0 }}</strong>
                </th>
                <th></th>
                <th>
                  <strong>{{ Number(computeLabSum?.monthlyPrice || 0).toFixed(2) + " kr" }} </strong>
                </th>
                <th>
                  <strong>{{ Number(computeLabSum?.yearlyPrice || 0).toFixed(2) + " kr" }} </strong>
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
          <v-data-table-virtual
            v-model="selectedStorage"
            :items="displayselectedStorage"
            :headers="storageHeaders"
            hover
            hide-default-footer
            item-value="id"
          >
            <template v-slot:item.actions="{ item }">
              <div class="d-flex ga-2 justify-end">
                <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="editStorage(selectedStorage.find(s => s.id === item.id)!)"></v-icon>
                <v-icon
                  color="medium-emphasis"
                  icon="mdi-delete"
                  size="small"
                  @click="removeStorageById(item.id)"
                ></v-icon>
              </div>
            </template>

            <template v-slot:body.append="{}">
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
                  <strong>{{ (storageLabSum?.size || 0) + " TB" }}</strong>
                </th>
                <th>
                  <strong> {{ displayStorageSumPrice }}</strong>
                </th>
              </tr>
            </template>
          </v-data-table-virtual>
        </v-card>
      </v-card>
    </v-sheet>

    <v-dialog v-model="isComputeModalOpen" max-width="600px" min-width="600px">
      <Machine
        :compute-id="computeId"
        :catalogue="catalogue"
        :initial-data="editingComputeItem"
        @close="closeComputeModal"
        @open-snackbar="openSnackbar"
      />
    </v-dialog>

    <v-dialog v-model="isStorageModalOpen" max-width="600px" min-width="600px">
      <Storage :storage-id="storageId" :initial-data="editingStorageItem" @close="closeStorageModal" />
    </v-dialog>

    <v-snackbar v-model="snackbar.show"> {{ snackbar.message }}</v-snackbar>
  </v-container>
</template>

<style scoped>
.lab-card {
  padding: 3px;
}
</style>
