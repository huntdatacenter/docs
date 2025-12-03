<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue"
import { DataTableHeader } from "vuetify"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"
import type { ComputeUnit, StorageUnit, ComputeLabSum, StorageLabSum, LabCard } from "./types"
import MachineModal from "./MachineModal.vue"
import StorageModal from "./StorageModal.vue"

// Props
const props = defineProps({
  lab: { type: Object as () => LabCard, required: true },
})

// State
const isComputeModalOpen = ref(false)
let editingComputeItem: ComputeUnit | null = null

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
let editingStorageItem: StorageUnit | null = null

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

const selectedCompute = computed(() => props.lab.selectedCompute || [])
const selectedStorage = computed(() => props.lab.selectedStorage || [])

const computeLabSum = computed<ComputeLabSum>(() => {
  return priceEstimatorStore.getLabComputeSum(props.lab.id)
})

const storageLabSum = computed<StorageLabSum>(() => {
  return priceEstimatorStore.getLabStorageSum(props.lab.id)
})

const localTitle = ref(props.lab.title)

watch(
  () => props.lab.title,
  val => {
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

onMounted(() => {
  if (!selectedCompute.value.length) {
    priceEstimatorStore.pushDefaultComputeUnitForLab(props.lab.id)
  }
  if (!selectedStorage.value.length) {
    priceEstimatorStore.addDefaultStorageToLab(props.lab.id)
  }
})
</script>

<template>
  <v-container>
    <v-sheet class="lab-card ma-0">
      <v-card class="ma-0">
        <v-row class="ma-2 d-flex" align="center" justify="space-between">
          <v-btn icon style="visibility: hidden"> </v-btn>
          <v-text-field
            v-model="localTitle"
            variant="underlined"
            hide-details
            density="compact"
            class="lab-title-input flex-grow-0"
            @update:model-value="updateTitle"
          ></v-text-field>
          <v-btn icon @click="priceEstimatorStore.removeLab(props.lab.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-row>

        <v-card flat>
          <v-card-title>Compute</v-card-title>

          <v-data-table-virtual
            :items="selectedCompute"
            :headers="computeHeaders"
            hide-default-footer
            hover
            item-value="id"
          >
            <template v-slot:item.monthlyPrice="{ item }">
              {{ item.monthlyPrice.toFixed(2) + " kr" }}
            </template>
            <template v-slot:item.yearlyPrice="{ item }">
              {{ item.yearlyPrice.toFixed(2) + " kr" }}
            </template>
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
                  <v-btn size="small" @click="addMachine" append-icon="mdi-plus"> Add machine </v-btn>
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
          <v-card-title>Storage</v-card-title>
          <v-card-subtitle> Each compute unit needs a volume of storage of atleast 1 TB</v-card-subtitle>

          <v-data-table-virtual
            v-model="props.lab.selectedStorage"
            :items="selectedStorage"
            :headers="storageHeaders"
            hover
            hide-default-footer
            item-value="id"
            aria-placeholder="No storage added yet"
          >
            <template v-slot:item.size="{ item }">
              {{ item.size.toFixed(2) + " TB" }}
            </template>
            <template v-slot:item.price="{ item }">
              {{ item.price.toFixed(2) + " kr" }}
            </template>
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
                  <v-btn size="small" @click="addStorage" append-icon="mdi-plus"> Add storage </v-btn>
                </th>
              </tr>
              <tr>
                <th role="columnheader" class="pt-4 pb-2">
                  <span><strong>Total</strong> </span>
                </th>
                <th></th>
                <th></th>
                <th>
                  <strong>{{ (storageLabSum?.size || 0).toFixed(2) + " TB" }}</strong>
                </th>
                <th>
                  <strong>{{ (storageLabSum?.price || 0).toFixed(2) + " kr" }}</strong>
                </th>
                <th></th>
              </tr>
            </template>
          </v-data-table-virtual>
        </v-card>
      </v-card>
    </v-sheet>

    <v-dialog v-model="isComputeModalOpen" max-width="600px" min-width="600px">
      <MachineModal
        :lab-id="lab.id"
        :compute-id="lab.selectedCompute.length"
        :edit-data="editingComputeItem"
        @close="closeComputeModal"
        @open-snackbar="openSnackbar"
      />
    </v-dialog>

    <v-dialog v-model="isStorageModalOpen" max-width="600px" min-width="600px">
      <StorageModal
        :lab-id="lab.id"
        :storage-id="lab.selectedStorage.length"
        :edit-data="editingStorageItem"
        @close="closeStorageModal"
      />
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
