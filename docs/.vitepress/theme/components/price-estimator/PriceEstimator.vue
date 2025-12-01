<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, computed } from "vue"
import pricesApi from "./api/pricesApi.js"
import { pricingEstimatorStore } from "./stores/pricingEstimatorStore"

import type {
  LabCard,
  PriceListItem,
  GpuModel,
  MachineFlavor,
  UpdateComputePayload,
  UpdateStoragePayload,
} from "./types"

const ISSERVER = typeof window === "undefined"

/* ------------------------------------------------------------------
   COMPUTED MAPPINGS TO STORE
------------------------------------------------------------------ */
const labCards = computed(() => pricingEstimatorStore.labs)
const catalogue = computed(() => pricingEstimatorStore.catalogue)
const totals = computed(() => ({
  computePrice: pricingEstimatorStore.totals.computeCost,
  storageCost: pricingEstimatorStore.totals.storageCostByType,
}))
const totalLabCost = computed(() => pricingEstimatorStore.totalLabCost)
const itemsComputeExport = computed(() => pricingEstimatorStore.itemsComputeExport)
const itemsStorageExport = computed(() => pricingEstimatorStore.itemsStorageExport)

const isLoadingCatalogues = computed(() => pricingEstimatorStore.isLoadingCatalogues)
const isLoadingState = computed(() => pricingEstimatorStore.isLoadingPriseEstimator)

const fileInput = ref<HTMLInputElement | null>(null)

/* ------------------------------------------------------------------
   WATCHERS – equivalent to Options API "watch"
------------------------------------------------------------------ */
watch(
  () => labCards.value,
  () => {
    if (!pricingEstimatorStore.isLoadingPriseEstimator) {
      pricingEstimatorStore.saveState()
    }
  },
  { deep: true },
)

watch(
  () => totals.value,
  () => {
    if (!pricingEstimatorStore.isLoadingPriseEstimator) {
      pricingEstimatorStore.updateTotalBreakdown()
    }
  },
  { deep: true },
)

/* ------------------------------------------------------------------
   INITIALIZATION
------------------------------------------------------------------ */
async function initializeAll() {
  pricingEstimatorStore.isLoadingCatalogues = true

  const priceListPromise = pricesApi.getPriceList().then((json: PriceListItem[]) => {
    pricingEstimatorStore.catalogue.computePrices = json
      .filter(item => item["service.group"] === "cpu")
      .map(pricingEstimatorStore.preparePricesToYearly)

    pricingEstimatorStore.catalogue.storagePrices = json.filter(item => item["service.family"] === "store")

    pricingEstimatorStore.catalogue.gpuPrices = json
      .filter(item => item["service.group"] === "gpu")
      .map(pricingEstimatorStore.preparePricesToYearly)

    pricingEstimatorStore.catalogue.labPrices = json.filter(item => item["service.group"] === "lab")
  })

  const gpusPromise = pricesApi.getAvailableGPUS().then((gpus: GpuModel[]) => {
    pricingEstimatorStore.catalogue.availableGpus = gpus
  })

  const machinesPromise = pricesApi.getMachineFlavors().then((machine: MachineFlavor[]) => {
    pricingEstimatorStore.catalogue.machineCatalogue = machine
  })

  pricingEstimatorStore.updateTotalBreakdown()

  await Promise.all([priceListPromise, gpusPromise, machinesPromise])
  pricingEstimatorStore.isLoadingCatalogues = false
}

onMounted(async () => {
  await initializeAll()
  pricingEstimatorStore.loadState()
})

/* ------------------------------------------------------------------
   ACTIONS (formerly "methods")
------------------------------------------------------------------ */
function addLabCard() {
  const title = `Lab ${pricingEstimatorStore.labs.length + 1}`
  pricingEstimatorStore.addLab({ title })
}

function updateLabCardStorage(id: number, payload: UpdateStoragePayload) {
  pricingEstimatorStore.updateLabStorage(id, payload)
}

function updateLabCardCompute(id: number, payload: UpdateComputePayload) {
  pricingEstimatorStore.updateLabCompute(id, payload)
}

function removeLabCard(id: number) {
  pricingEstimatorStore.removeLab(id)
}

function removeAllLabs() {
  pricingEstimatorStore.clearAllLabs()
}

function triggerFileUpload() {
  fileInput.value?.click()
}

async function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  const reader = new FileReader()

  reader.onload = async e => {
    try {
      await initializeAll()

      const data = JSON.parse(e.target?.result as string)
      if (!data.version || !Array.isArray(data.labs)) {
        throw new Error("Invalid JSON format")
      }

      pricingEstimatorStore.isLoadingPriseEstimator = true
      pricingEstimatorStore.clearAllLabs()

      data.labs.forEach((lab: any) => {
        pricingEstimatorStore.labs.push({
          id: lab.id,
          title: lab.name,
          storage: 0,
          priceStorage: 0,
          priceComputeYearly: 0,
          numCompute: 0,
          selectedCompute: lab.compute || [],
          selectedStorage: lab.storage || [],
        })
      })

      await nextTick()
      pricingEstimatorStore.isLoadingPriseEstimator = false
      target.value = ""
    } catch (err) {
      console.error(err)
      alert("Error importing file.")
    }
  }

  reader.readAsText(file)
}
</script>

<template>
  <v-container v-if="!isLoadingCatalogues && !isLoadingState">
    <v-sheet class="group-slider-wrapper ma-auto pt-0" elevation="0" max-width="1120">
      <v-card-title>Price estimator for HUNT Cloud</v-card-title>
      <v-card-subtitle> This calculator gives a rough estimate of how much our services cost </v-card-subtitle>

      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-btn density="default" size="large" dark @click="addLabCard">Add lab</v-btn>
          </v-col>

          <v-col cols="auto">
            <v-row>
              <v-col cols="auto" v-if="labCards.length">
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
        <v-col v-for="lab in labCards" :key="lab.id" cols="12">
          <LabCard
            :title="lab.title"
            :catalogue="catalogue"
            :storage-cost-by-type="totals.storageCost"
            :init-selected-compute="lab.selectedCompute || []"
            :init-selected-storage="lab.selectedStorage || []"
            @updateStorage="updateLabCardStorage(lab.id, $event)"
            @updateCompute="updateLabCardCompute(lab.id, $event)"
            @removeLab="removeLabCard(lab.id)"
          />
        </v-col>
      </v-row>

      <v-row v-if="labCards.length">
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
