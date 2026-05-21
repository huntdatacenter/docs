<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { DataTableHeader } from "vuetify"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"
import type { ComputeUnit, StorageUnit, LabCard } from "./types"
import MachineModal from "./MachineModal.vue"
import StorageModal from "./StorageModal.vue"

// Props
const props = defineProps({
  lab: { type: Object as () => LabCard, required: true },
})

// State
const isComputeModalOpen = ref(false)
const showLocalComputeSummary = ref(false)
const showLocalStorageSummary = ref(false)
let editingComputeItem: ComputeUnit | null = null

const computeHeaders = ref<DataTableHeader[]>([
  { title: "Name", align: "start", sortable: true, key: "name" },
  { title: "Machine type", align: "start", sortable: true, key: "machine_type" },
  { title: "CPU cores", align: "end", sortable: true, key: "core_count" },
  { title: "Memory [GB]", align: "end", sortable: true, key: "ram" },
  { title: "GPU", align: "end", sortable: true, key: "gpu" },
  { title: "GPU count", align: "end", sortable: true, key: "gpu_count" },
  { title: "Subscription", align: "start", sortable: true, key: "subscription" },
  { title: "Price / month", align: "end", sortable: true, nowrap: true, key: "monthlyPrice" },
  { title: "Price / year", align: "end", sortable: true, nowrap: true, key: "yearlyPrice" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
])

const isStorageModalOpen = ref(false)
let editingStorageItem: StorageUnit | null = null

const storageHeaders = ref([
  { title: "Name", align: "start", sortable: true, key: "name" },
  { title: "Usage", align: "start", sortable: true, key: "usage" },
  { title: "Type", align: "start", sortable: true, key: "type" },
  { title: "Size [TB]", align: "end", sortable: true, key: "size" },
  { title: "Price / month", align: "end", sortable: true, nowrap: true, key: "monthlyPrice" },
  { title: "Price / year", align: "end", sortable: true, nowrap: true, key: "yearlyPrice" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
] as const)

const snackbar = ref({
  show: false,
  message: "",
})

const totalHeaders = ref<DataTableHeader[]>([
  { title: "Lab Subcription" + props.lab.subscription, align: "start", sortable: true, key: "labSubscription" },
  { title: "Total Compute", align: "start", sortable: true, key: "totalCompute" },
  { title: "Total Storage", align: "start", sortable: true, key: "totalStorage" },
  { title: "Total Cost", align: "start", sortable: true, key: "totalCost" },
])

const selectedCompute = computed(() => props.lab.selectedCompute || [])
const selectedStorage = computed(() => props.lab.selectedStorage || [])

const computeLabSum = computed(() => {
  return priceEstimatorStore.getLabComputePriceSum(props.lab.id)
})

const storageLabSum = computed(() => {
  return priceEstimatorStore.getLabStoragePriceSumByType(props.lab.id)
})

const storageLabPriceSum = computed(() => {
  return priceEstimatorStore.getLabStoragePriceSum(props.lab.id)
})

const labSubscriptionPrice = computed(() => {
  const price = priceEstimatorStore.getLabSubscription(props.lab.subscription) || 0

  let div = 12
  if (props.lab.subscription === "3Y") {
    div = 36
  }

  return { monthly: price! / div, yearly: price }
})

const LabSumMonthly = computed(() => {
  return labSubscriptionPrice.value.monthly + computeLabSum.value.monthlyCostTotal + storageLabSum.value.HDD.monthlyCostTotal + storageLabSum.value.NVME.monthlyCostTotal
})

const LabSum = computed(() => {
  return labSubscriptionPrice.value.yearly + computeLabSum.value.yearlyCostTotal + storageLabSum.value.HDD.yearlyCostTotal + storageLabSum.value.NVME.yearlyCostTotal
})

const localTitle = ref(props.lab.title)

watch(
  () => props.lab.title,
  (val) => {
    localTitle.value = val
  },
)

const updateTitle = (val: string) => {
  priceEstimatorStore.updateLabTitle(props.lab.id, val)
}

// Methods
const addMachine = () => {
  editingComputeItem = null
  isComputeModalOpen.value = true
}

const addStorage = () => {
  editingStorageItem = null
  isStorageModalOpen.value = true
}

const editStorage = (item: StorageUnit) => {
  editingStorageItem = item
  isStorageModalOpen.value = true
}

const editCompute = (item: ComputeUnit) => {
  editingComputeItem = item
  isComputeModalOpen.value = true
}

const closeComputeModal = () => {
  isComputeModalOpen.value = false
  editingComputeItem = null
}

const closeStorageModal = () => {
  isStorageModalOpen.value = false
  editingStorageItem = null
}

const openSnackbar = (message: string) => {
  snackbar.value.message = message
  snackbar.value.show = true
}

const removeComputeById = (computeId: number) => {
  if (computeId === selectedCompute.value[0]?.id) {
    openSnackbar("Cannot remove the default machine")
    return
  }
  priceEstimatorStore.removeComputeFromLab(props.lab.id, computeId)
}

const removeStorageById = (storageId: number) => {
  priceEstimatorStore.removeStorageFromLab(props.lab.id, storageId)
}
</script>

<template>
  <v-container>
    <v-sheet class="lab-card ma-0">
      <v-card style="background-color: #f5f5f5" class="ma-0">
        <v-row class="ma-2 d-flex" align="center" justify="space-between">
          <v-btn size="small" icon style="visibility: hidden"> </v-btn>
          <v-text-field
            v-model="localTitle"
            label=""
            placeholder="Lab name"
            variant="plain"
            hide-details
            density="compact"
            class="lab-title-input flex-grow-0"
            @update:model-value="updateTitle"
          ></v-text-field>
          <v-btn size="small" icon @click="priceEstimatorStore.removeLab(props.lab.id)">
            <v-icon size="default">mdi-delete</v-icon>
          </v-btn>
        </v-row>

        <v-card flat>
          <v-card-title>Compute</v-card-title>

          <v-data-table-virtual :items="selectedCompute" :headers="computeHeaders" hide-default-footer hover item-value="id">
            <template v-slot:item.monthlyPrice="{ item }">
              <div class="d-flex justify-end">
                <span class="text-right" style="width: 90px">
                  {{ item.monthlyPrice.toFixed(2) }}
                </span>
                <span class="ml-1">NOK</span>
              </div>
            </template>
            <template v-slot:item.yearlyPrice="{ item }">
              <div class="d-flex justify-end">
                <span class="text-right" style="width: 90px">
                  {{ item.yearlyPrice.toFixed(2) }}
                </span>
                <span class="ml-1">NOK</span>
              </div>
            </template>
            <template v-slot:item.actions="{ item }">
              <div class="d-flex ga-2 justify-end">
                <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="editCompute(selectedCompute.find((c) => c.id === item.id)!)"></v-icon>
                <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="removeComputeById(item.id)"></v-icon>
              </div>
            </template>

            <template v-slot:body.append="{ headers }">
              <tr>
                <th :colspan="computeHeaders.length + 1" class="text-center">
                  <v-btn size="small" @click="addMachine" append-icon="mdi-plus"> Add machine </v-btn>
                </th>
              </tr>

              <tr v-if="showLocalComputeSummary">
                <!-- Name -->
                <th role="columnheader">
                  <span><strong>Total compute</strong> </span>
                </th>
                <!-- Machine type -->
                <th></th>
                <!-- CPU cores -->
                <th class="v-data-table-column--align-end"></th>
                <!-- Memory [GB] -->
                <th class="v-data-table-column--align-end"></th>
                <!-- GPU -->
                <th class="v-data-table-column--align-end"></th>
                <!-- GPU count -->
                <th class="v-data-table-column--align-end"></th>
                <!-- Subscription -->
                <th></th>
                <th class="v-data-table-column--align-end">
                  <strong>{{ Number(computeLabSum?.monthlyCostTotal || 0).toFixed(2) }} NOK</strong>
                </th>
                <th class="v-data-table-column--align-end">
                  <strong>{{ Number(computeLabSum?.yearlyCostTotal || 0).toFixed(2) }} NOK</strong>
                </th>
                <!-- Actions -->
                <th class="v-data-table-column--align-end"></th>
              </tr>
            </template>
          </v-data-table-virtual>
        </v-card>

        <v-card flat>
          <v-card-title>Storage</v-card-title>

          <v-data-table-virtual
            v-model="props.lab.selectedStorage"
            :items="selectedStorage"
            :headers="storageHeaders"
            hover
            hide-default-footer
            item-value="id"
            aria-placeholder="No storage added yet"
          >
            <template v-slot:item.size="{ item }"> {{ item.size.toFixed(2) }} TB </template>
            <template v-slot:item.monthlyPrice="{ item }"> {{ item.monthlyPrice.toFixed(2) }} NOK </template>
            <template v-slot:item.yearlyPrice="{ item }"> {{ item.yearlyPrice.toFixed(2) }} NOK </template>
            <template v-slot:item.actions="{ item }">
              <div class="d-flex ga-2 justify-end">
                <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="editStorage(selectedStorage.find((s) => s.id === item.id)!)"></v-icon>
                <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="removeStorageById(item.id)"></v-icon>
              </div>
            </template>

            <template v-slot:body.append="{}">
              <tr>
                <th :colspan="storageHeaders.length + 1" class="text-center">
                  <v-btn size="small" @click="addStorage" append-icon="mdi-plus"> Add storage </v-btn>
                </th>
              </tr>
              <tr v-if="showLocalStorageSummary" v-for="(item, storageType, index) in storageLabSum" :key="storageType">
                <!-- Name -->
                <th>
                  <strong v-if="index === 0">Total storage</strong>
                </th>
                <!-- Usage -->
                <th></th>
                <!-- Type -->
                <th>
                  <span>
                    <strong>{{ storageType }}</strong>
                  </span>
                </th>
                <!-- Size [TB] -->
                <th class="v-data-table-column--align-end">
                  <strong>{{ item.size.toFixed(2) }} TB</strong>
                </th>
                <th class="v-data-table-column--align-end">
                  <strong>{{ item.monthlyCostTotal.toFixed(2) }} NOK</strong>
                </th>
                <th class="v-data-table-column--align-end">
                  <strong>{{ item.yearlyCostTotal.toFixed(2) }} NOK</strong>
                </th>
                <!-- Actions -->
                <th></th>
              </tr>
            </template>
          </v-data-table-virtual>
        </v-card>
        <v-card flat class="ma-2">
          <v-card-title>Lab summary</v-card-title>
          <v-table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th class="text-right">Monthly</th>
                <th class="text-right">Yearly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Lab Subscription ({{ lab.subscription }})</strong>
                </td>
                <td></td>
                <td class="text-right">{{ Number(labSubscriptionPrice.monthly).toFixed(2) }} NOK</td>
                <td class="text-right">{{ Number(labSubscriptionPrice.yearly).toFixed(2) }} NOK</td>
              </tr>
              <tr>
                <td><strong>Compute</strong></td>
                <td></td>
                <td class="text-right">{{ Number(computeLabSum?.monthlyCostTotal || 0).toFixed(2) }} NOK</td>
                <td class="text-right">{{ Number(computeLabSum?.yearlyCostTotal || 0).toFixed(2) }} NOK</td>
              </tr>
              <tr>
                <td><strong>Storage</strong></td>
                <td></td>
                <td class="text-right">{{ Number(storageLabPriceSum?.monthlyCostTotal || 0).toFixed(2) }} NOK</td>
                <td class="text-right">{{ Number(storageLabPriceSum?.yearlyCostTotal || 0).toFixed(2) }} NOK</td>
              </tr>
              <tr class="bg-grey-lighten-3">
                <td><strong>Total</strong></td>
                <td></td>
                <td class="text-right">
                  <strong>{{ Number(LabSumMonthly.toFixed(2) || 0).toFixed(2) }} NOK</strong>
                </td>
                <td class="text-right">
                  <strong>{{ Number(LabSum.toFixed(2) || 0).toFixed(2) }} NOK</strong>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-card>
    </v-sheet>

    <v-dialog v-model="isComputeModalOpen" max-width="600px" min-width="600px">
      <MachineModal :lab-id="lab.id" :compute-id="lab.selectedCompute.length" :edit-data="editingComputeItem" @close="closeComputeModal" @open-snackbar="openSnackbar" />
    </v-dialog>

    <v-dialog v-model="isStorageModalOpen" max-width="600px" min-width="600px">
      <StorageModal :lab-id="lab.id" :storage-id="lab.selectedStorage.length" :edit-data="editingStorageItem" @close="closeStorageModal" />
    </v-dialog>

    <v-snackbar v-model="snackbar.show">{{ snackbar.message }}</v-snackbar>
  </v-container>
</template>

<style scoped>
.lab-card {
  padding: 3px;
}

.lab-title-input {
  min-width: 200px;
}

.lab-title-input :deep(.v-field__input) {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
</style>
