<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { DataTableHeader } from "vuetify"
import { pricingEstimatorStore } from "./stores/pricingEstimatorStore"
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

// Props
const props = withDefaults(
  defineProps<{
    labId: number
    title: string
    catalogue: Catalogue
    storageCostByType?: { [key: string]: { size: number; cost: number } }
  }>(),
  {
    title: "Lab ",
    storageCostByType: () => ({}),
  },
)

// Emits - only keep removeLab for now, could also be replaced with direct store call
const emit = defineEmits<{
  removeLab: []
}>()

// State
const isComputeModalOpen = ref(false)
const editingComputeItem = ref<ComputeUnit | null>(null)
const isLoadingComputePrices = ref(false)

const computeHeaders = ref<DataTableHeader[]>([
  { title: "Name", align: "start", sortable: true, key: "name" },
  { title: "Machine type", align: "start", sortable: true, key: "flavor" },
  { title: "cpu cores", align: "start", sortable: true, key: "core_count" },
  { title: "Memory [TB]", align: "start", sortable: true, key: "ram" },
  { title: "Type", align: "start", sortable: true, key: "type" },
  { title: "Price / month", align: "start", sortable: true, key: "monthlyPrice" },
  { title: "Price / year", align: "start", sortable: true, key: "yearlyPrice" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
])

const isStorageModalOpen = ref(false)
const editingStorageItem = ref<StorageUnit | null>(null)

const storageHeaders = ref([
  { title: "Name", align: "start", sortable: true, key: "name" },
  { title: "Usage", align: "start", sortable: true, key: "usage" },
  { title: "Type", align: "start", sortable: true, key: "type" },
  { title: "Size [TB]", align: "start", sortable: true, key: "size" },
  { title: "Price / year", align: "start", sortable: true, key: "price" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
] as const)

const snackbar = ref({
  show: false,
  message: "",
})

// Computed - read directly from store
const currentLab = computed(() => pricingEstimatorStore.labs.find(l => l.id === props.labId))

const selectedCompute = computed(() => currentLab.value?.selectedCompute || [])
const selectedStorage = computed(() => currentLab.value?.selectedStorage || [])

const computeLabSum = computed<ComputeLabSum>(() => {
  return pricingEstimatorStore.getLabComputeSum(props.labId)
})

const storageLabSum = computed<StorageLabSum>(() => {
  const sum = pricingEstimatorStore.getLabStorageSum(props.labId)
  return {
    size: sum.size,
    type: null,
    price: sum.price,
  }
})

const displaySelectedCompute = computed(() => {
  return selectedCompute.value.map(item => ({
    id: item.id,
    name: item.name,
    flavor: item.flavor,
    core_count: item.core_count,
    ram: item.ram,
    type: item.type,
    monthlyPrice: item.monthlyPrice.toFixed(2) + " kr",
    yearlyPrice: item.yearlyPrice.toFixed(2) + " kr",
  }))
})

const displayStorageSumPrice = computed(() => {
  return storageLabSum.value.price.toFixed(2) + " kr"
})

const displayselectedStorage = computed(() => {
  return selectedStorage.value.map(item => ({
    id: item.id,
    name: item.name,
    usage: item.usage,
    type: item.type,
    size: item.size + " TB",
    price: item.price.toFixed(2) + " kr",
  }))
})

// Methods
const addMachine = () => {
  editingComputeItem.value = null
  isComputeModalOpen.value = true
}

const addStorage = () => {
  editingStorageItem.value = null
  isStorageModalOpen.value = true
}

const editStorage = (item: StorageUnit) => {
  editingStorageItem.value = item
  isStorageModalOpen.value = true
}

const editCompute = (item: ComputeUnit) => {
  editingComputeItem.value = item
  isComputeModalOpen.value = true
}

const closeComputeModal = (payload: any) => {
  if (payload) {
    if (editingComputeItem.value) {
      // Edit existing compute
      pricingEstimatorStore.editComputeInLab(props.labId, editingComputeItem.value.id, {
        name: payload.name,
        flavor: payload.flavor,
        core_count: payload.core_count,
        ram: payload.ram,
        type: payload.type,
        gpu: payload.gpu || null,
      })
    } else {
      // Add new compute
      pricingEstimatorStore.addComputeToLab(props.labId, {
        name: payload.name,
        flavor: payload.flavor,
        core_count: payload.core_count,
        ram: payload.ram,
        type: payload.type,
        gpu: payload.gpu || null,
      })

      // Add default storage if needed
      if (selectedCompute.value.length > selectedStorage.value.length) {
        pricingEstimatorStore.pushDefaultStorageForLab(props.labId)
      }
    }
  }
  isComputeModalOpen.value = false
  editingComputeItem.value = null
}

const closeStorageModal = (payload: any) => {
  if (payload) {
    if (editingStorageItem.value) {
      // Edit existing storage
      pricingEstimatorStore.editStorageInLab(props.labId, editingStorageItem.value.id, {
        name: payload.name,
        usage: payload.usage,
        type: payload.type,
        size: payload.size,
      })
    } else {
      // Add new storage
      pricingEstimatorStore.addStorageToLab(props.labId, {
        name: payload.name,
        usage: payload.usage,
        type: payload.type,
        size: payload.size,
      })
    }
  }
  isStorageModalOpen.value = false
  editingStorageItem.value = null
}

const openSnackbar = (message: string) => {
  snackbar.value.message = message
  snackbar.value.show = true
}

const removeComputeById = (id: number) => {
  if (id === selectedCompute.value[0]?.id) {
    openSnackbar("Cannot remove the default machine")
    return
  }
  pricingEstimatorStore.removeComputeFromLab(props.labId, id)
}

const removeStorageById = (id: number) => {
  pricingEstimatorStore.removeStorageFromLab(props.labId, id)
}

// Initialize default compute and storage if lab is empty
const initializeIfEmpty = () => {
  if (!selectedCompute.value.length) {
    pricingEstimatorStore.pushDefaultComputeUnitForLab(props.labId)
  }
  if (!selectedStorage.value.length) {
    pricingEstimatorStore.pushDefaultStorageForLab(props.labId)
  }
}

// Initialize on mount
initializeIfEmpty()
</script>

<template>
  <v-container>
    <v-sheet class="lab-card ma-0">
      <v-card class="ma-0">
        <v-row class="ma-2" align="center" justify="space-between">
          <v-card-title>{{ title }}</v-card-title>
          <v-btn icon @click="emit('removeLab')">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-row>

        <v-card flat>
          <v-card-title> Compute</v-card-title>

          <v-data-table-virtual
            :items="displaySelectedCompute"
            :headers="computeHeaders"
            :loading="isLoadingComputePrices"
            hide-default-footer
            hover
            item-value="id"
          >
            <template v-slot:item.actions="{ item }">
              <div class="d-flex ga-2 justify-end">
                <v-icon
                  color="medium-emphasis"
                  icon="mdi-pencil"
                  size="small"
                  @click="editCompute(selectedCompute.find(c => c.id === item.id)!)"
                ></v-icon>
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
            aria-placeholder="No storage added yet"
          >
            <template v-slot:item.actions="{ item }">
              <div class="d-flex ga-2 justify-end">
                <v-icon
                  color="medium-emphasis"
                  icon="mdi-pencil"
                  size="small"
                  @click="editStorage(selectedStorage.find(s => s.id === item.id)!)"
                ></v-icon>
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
                <th>
                  <strong>{{ (storageLabSum?.size || 0) + " TB" }}</strong>
                </th>
              </tr>
            </template>
          </v-data-table-virtual>
        </v-card>
      </v-card>
    </v-sheet>

    <v-dialog v-model="isComputeModalOpen" max-width="600px" min-width="600px">
      <Machine
        :compute-id="0"
        :catalogue="catalogue"
        :initial-data="editingComputeItem"
        @close="closeComputeModal"
        @open-snackbar="openSnackbar"
      />
    </v-dialog>

    <v-dialog v-model="isStorageModalOpen" max-width="600px" min-width="600px">
      <Storage :storage-id="0" :initial-data="editingStorageItem" @close="closeStorageModal" />
    </v-dialog>

    <v-snackbar v-model="snackbar.show"> {{ snackbar.value.message }}</v-snackbar>
  </v-container>
</template>

<style scoped>
.lab-card {
  padding: 3px;
}
</style>
