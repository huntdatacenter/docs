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
  { title: "vCPUs", align: "end", sortable: true, key: "core_count" },
  { title: "RAM [GB]", align: "end", sortable: true, key: "ram" },
  // { title: "GPU count", align: "end", sortable: true, key: "gpu_count" },
  { title: "GPU", align: "end", sortable: true, key: "gpu" },
  { title: "Subscription", align: "start", sortable: true, key: "subscription" },
  { title: "Price / month", align: "end", sortable: true, key: "monthlyPrice" },
  { title: "Price / year", align: "end", sortable: true, key: "yearlyPrice" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
])

const isStorageModalOpen = ref(false)
let editingStorageItem: StorageUnit | null = null

const storageHeaders = ref([
  { title: "Name", align: "start", sortable: true, key: "name" },
  { title: "Usage", align: "start", sortable: true, key: "usage" },
  { title: "Type", align: "start", sortable: true, key: "type" },
  { title: "Size [TB]", align: "end", sortable: true, key: "size" },
  { title: "Price / month", align: "end", sortable: true, key: "monthlyPrice" },
  { title: "Price / year", align: "end", sortable: true, key: "yearlyPrice" },
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

const removeMachine = (machine: ComputeUnit) => {
  // if (machine.id === selectedCompute.value[0]?.id) {
  if (machine.isDefault) {
    openSnackbar("Cannot remove the home machine. Home machine is an essential component of your lab.")
    return
  }
  priceEstimatorStore.removeComputeFromLab(props.lab.id, machine.id)
}

const removeStorageById = (storageId: number) => {
  priceEstimatorStore.removeStorageFromLab(props.lab.id, storageId)
}
</script>

<template>
  <v-card class="lab-card mb-6" rounded="xl" elevation="2">
    <!-- Lab header -->
    <div class="lab-header d-flex align-center px-5 py-3">
      <v-icon class="mr-3" color="primary">mdi-flask-outline</v-icon>
      <v-text-field
        v-model="localTitle"
        placeholder="Lab name"
        variant="plain"
        hide-details
        density="compact"
        class="lab-title-input flex-grow-1"
        @update:model-value="updateTitle"
      ></v-text-field>

      <v-tooltip text="Renewal period" location="top">
        <template v-slot:activator="{ props }">
          <v-chip size="small" variant="tonal" color="primary" class="mr-2 font-weight-medium" v-bind="props">{{ lab.subscription }}</v-chip>
        </template>
      </v-tooltip>
      <v-btn size="small" variant="text" icon color="error" @click="priceEstimatorStore.removeLab(props.lab.id)">
        <v-icon>mdi-delete-outline</v-icon>
        <v-tooltip activator="parent" location="top">Remove lab</v-tooltip>
      </v-btn>
    </div>

    <div class="pa-4">
      <v-card flat rounded="lg" class="section-card mb-4">
        <div class="section-title d-flex align-center px-4 pt-3">
          <v-icon size="small" color="primary" class="mr-2">mdi-memory</v-icon>
          <span>Compute</span>
        </div>

        <v-data-table-virtual :items="selectedCompute" :headers="computeHeaders" hide-default-footer hover item-value="id">
          <template v-slot:item.gpu="{ item }">
            <div v-if="item.gpu" class="d-flex justify-end v-data-table-column--nowrap">{{ item.gpu_count }} x {{ item.gpu }}</div>
          </template>
          <template v-slot:item.monthlyPrice="{ item }">
            <div class="d-flex justify-end v-data-table-column--nowrap">
              <span class="text-right"> {{ item.monthlyPrice.toFixed(2) }}&nbsp;NOK </span>
            </div>
          </template>
          <template v-slot:item.yearlyPrice="{ item }">
            <div class="d-flex justify-end v-data-table-column--nowrap">
              <span class="text-right"> {{ item.yearlyPrice.toFixed(2) }}&nbsp;NOK </span>
            </div>
          </template>
          <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 justify-end">
              <v-icon icon="mdi-pencil" size="small" @click="editCompute(selectedCompute.find((c) => c.id === item.id)!)"></v-icon>
              <v-icon :color="item.isDefault ? 'rgba(0, 0, 0, 0.3)' : ''" icon="mdi-delete" size="small" @click="removeMachine(item)"></v-icon>
            </div>
          </template>

          <template v-slot:body.append="{ headers }">
            <tr>
              <th :colspan="computeHeaders.length + 1" class="text-center py-2">
                <v-btn size="small" variant="tonal" color="primary" rounded="lg" class="text-none" @click="addMachine" prepend-icon="mdi-plus"> Add machine </v-btn>
              </th>
            </tr>

            <tr v-if="showLocalComputeSummary">
              <!-- Name -->
              <th role="columnheader">
                <span><strong>Total compute</strong> </span>
              </th>
              <!-- Machine type -->
              <th></th>
              <!-- vCPUs -->
              <th class="v-data-table-column--align-end"></th>
              <!-- RAM [GB] -->
              <th class="v-data-table-column--align-end"></th>
              <!-- GPU count -->
              <!-- <th class="v-data-table-column--align-end"></th> -->
              <!-- GPU -->
              <th class="v-data-table-column--align-end"></th>
              <!-- Subscription -->
              <th></th>
              <!-- Price / month -->
              <th class="v-data-table-column--align-end v-data-table-column--nowrap">
                <strong>{{ Number(computeLabSum?.monthlyCostTotal || 0).toFixed(2) }}&nbsp;NOK</strong>
              </th>
              <!-- Price / year -->
              <th class="v-data-table-column--align-end v-data-table-column--nowrap">
                <strong>{{ Number(computeLabSum?.yearlyCostTotal || 0).toFixed(2) }}&nbsp;NOK</strong>
              </th>
              <!-- Actions -->
              <th class="v-data-table-column--align-end"></th>
            </tr>
          </template>
        </v-data-table-virtual>
      </v-card>

      <v-card flat rounded="lg" class="section-card mb-4">
        <div class="section-title d-flex align-center px-4 pt-3">
          <v-icon size="small" color="primary" class="mr-2">mdi-database-outline</v-icon>
          <span>Storage</span>
        </div>

        <v-data-table-virtual
          v-model="props.lab.selectedStorage"
          :items="selectedStorage"
          :headers="storageHeaders"
          hover
          hide-default-footer
          item-value="id"
          aria-placeholder="No storage added yet"
        >
          <template v-slot:item.size="{ item }"> {{ item.size.toFixed(2) }}&nbsp;TB </template>
          <template v-slot:item.monthlyPrice="{ item }"> {{ item.monthlyPrice.toFixed(2) }}&nbsp;NOK </template>
          <template v-slot:item.yearlyPrice="{ item }"> {{ item.yearlyPrice.toFixed(2) }}&nbsp;NOK </template>
          <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 justify-end">
              <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="editStorage(selectedStorage.find((s) => s.id === item.id)!)"></v-icon>
              <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="removeStorageById(item.id)"></v-icon>
            </div>
          </template>

          <template v-slot:body.append="{}">
            <tr>
              <th :colspan="storageHeaders.length + 1" class="text-center py-2">
                <v-btn size="small" variant="tonal" color="primary" rounded="lg" class="text-none" @click="addStorage" prepend-icon="mdi-plus"> Add storage </v-btn>
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
              <th class="v-data-table-column--align-end v-data-table-column--nowrap">
                <strong>{{ item.size.toFixed(2) }}&nbsp;TB</strong>
              </th>
              <!-- Price / month -->
              <th class="v-data-table-column--align-end v-data-table-column--nowrap">
                <strong>{{ item.monthlyCostTotal.toFixed(2) }}&nbsp;NOK</strong>
              </th>
              <!-- Price / year -->
              <th class="v-data-table-column--align-end v-data-table-column--nowrap">
                <strong>{{ item.yearlyCostTotal.toFixed(2) }}&nbsp;NOK</strong>
              </th>
              <!-- Actions -->
              <th></th>
            </tr>
          </template>
        </v-data-table-virtual>
      </v-card>
      <v-card flat rounded="lg" class="section-card">
        <div class="section-title d-flex align-center px-4 pt-3">
          <v-icon size="small" color="primary" class="mr-2">mdi-receipt-text-outline</v-icon>
          <span>Lab summary</span>
        </div>
        <v-table class="summary-table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th class="text-right">Price / month</th>
              <th class="text-right">Price / year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Lab Subscription ({{ lab.subscription }})</strong>
              </td>
              <td></td>
              <td class="text-right v-data-table-column--nowrap">{{ Number(labSubscriptionPrice.monthly).toFixed(2) }}&nbsp;NOK</td>
              <td class="text-right v-data-table-column--nowrap">{{ Number(labSubscriptionPrice.yearly).toFixed(2) }}&nbsp;NOK</td>
            </tr>
            <tr>
              <td><strong>Compute</strong></td>
              <td></td>
              <td class="text-right v-data-table-column--nowrap">{{ Number(computeLabSum?.monthlyCostTotal || 0).toFixed(2) }}&nbsp;NOK</td>
              <td class="text-right v-data-table-column--nowrap">{{ Number(computeLabSum?.yearlyCostTotal || 0).toFixed(2) }}&nbsp;NOK</td>
            </tr>
            <tr>
              <td><strong>Storage</strong></td>
              <td></td>
              <td class="text-right v-data-table-column--nowrap">{{ Number(storageLabPriceSum?.monthlyCostTotal || 0).toFixed(2) }}&nbsp;NOK</td>
              <td class="text-right v-data-table-column--nowrap">{{ Number(storageLabPriceSum?.yearlyCostTotal || 0).toFixed(2) }}&nbsp;NOK</td>
            </tr>
            <tr class="summary-total-row">
              <td><strong>Total</strong></td>
              <td></td>
              <td class="text-right v-data-table-column--nowrap">
                <strong>{{ Number(LabSumMonthly.toFixed(2) || 0).toFixed(2) }}&nbsp;NOK</strong>
              </td>
              <td class="text-right v-data-table-column--nowrap">
                <strong>{{ Number(LabSum.toFixed(2) || 0).toFixed(2) }}&nbsp;NOK</strong>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </div>

    <v-dialog v-model="isComputeModalOpen" max-width="600px" min-width="600px">
      <MachineModal :lab-id="lab.id" :compute-id="lab.selectedCompute.length" :edit-data="editingComputeItem" @close="closeComputeModal" @open-snackbar="openSnackbar" />
    </v-dialog>

    <v-dialog v-model="isStorageModalOpen" max-width="600px" min-width="600px">
      <StorageModal :lab-id="lab.id" :storage-id="lab.selectedStorage.length" :edit-data="editingStorageItem" @close="closeStorageModal" />
    </v-dialog>

    <v-snackbar color="orange-darken-4" v-model="snackbar.show">{{ snackbar.message }}</v-snackbar>
  </v-card>
</template>

<style scoped>
.lab-card {
  overflow: hidden;
  border: 1px solid rgba(46, 117, 120, 0.12);
  transition: box-shadow 0.2s ease;
}

.lab-card:hover {
  box-shadow:
    0 6px 20px rgba(46, 117, 120, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.06) !important;
}

.lab-header {
  background: linear-gradient(135deg, #f3f8f8 0%, #eef3f3 100%);
  border-bottom: 1px solid rgba(46, 117, 120, 0.12);
}

.lab-title-input {
  min-width: 200px;
}

.lab-title-input :deep(.v-field__input) {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1f2d2d;
  padding-top: 0;
}

.section-card {
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #fcfdfd;
}

.section-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1f2d2d;
  padding-bottom: 4px;
}

.section-card :deep(.v-data-table) {
  background: transparent;
}

.section-card :deep(thead th) {
  font-weight: 600 !important;
  color: #5a6b6b !important;
  text-transform: uppercase;
  font-size: 0.72rem !important;
  letter-spacing: 0.04em;
}

.summary-table {
  background: transparent;
}

.summary-total-row td {
  background: rgba(46, 117, 120, 0.08);
}

.summary-total-row td strong {
  color: #21595c;
}
</style>
