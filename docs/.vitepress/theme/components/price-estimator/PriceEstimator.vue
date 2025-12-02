<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, computed } from "vue"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"
import LabCard from "./LabCard.vue"
import TotalBlock from "./TotalBlock.vue"

const totals = computed(() => ({
  computePrice: priceEstimatorStore.totals.computeCost,
  storageCost: priceEstimatorStore.totals.storageCostByType,
}))

const fileInput = ref<HTMLInputElement | null>(null)

watch(
  () => priceEstimatorStore.labs,
  () => {
    if (!priceEstimatorStore.isInitializingPriseEstimator) priceEstimatorStore.saveStateToLocal()
  },
  { deep: true },
)

watch(
  () => totals.value,
  () => {
    if (!priceEstimatorStore.isInitializingPriseEstimator) {
      priceEstimatorStore.updateCostSummary()
    }
  },
  { deep: true },
)

onMounted(async () => {
  await priceEstimatorStore.initializePriceEstimatorStore()
})

function addLabCard() {
  const title = `Lab ${priceEstimatorStore.labs.length + 1}`
  priceEstimatorStore.addLab({ title })
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
      priceEstimatorStore.updateCostSummary()

      const data = JSON.parse(e.target?.result as string)
      if (!data.version || !Array.isArray(data.labs)) {
        throw new Error("Invalid JSON format")
      }

      priceEstimatorStore.isInitializingPriseEstimator = true
      priceEstimatorStore.clearAllLabs()

      data.labs.forEach((lab: any) => {
        priceEstimatorStore.labs.push({
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
      priceEstimatorStore.isInitializingPriseEstimator = false
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
  <v-container v-if="!priceEstimatorStore.isInitializingPriseEstimator">
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
              <v-col cols="auto" v-if="priceEstimatorStore.labs.length">
                <v-btn density="default" size="large" dark @click="priceEstimatorStore.clearAllLabs()">
                  Remove all
                </v-btn>
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
        <v-col cols="12">
          <LabCard v-for="lab of priceEstimatorStore.labs" :key="lab.id" :lab="lab" />
        </v-col>
      </v-row>

      <v-row v-if="priceEstimatorStore.labs.length">
        <TotalBlock
          :total-items="priceEstimatorStore.totalLabCost"
          :totals="totals"
          :itemsComputeExport="priceEstimatorStore.itemsComputeExport"
          :itemsStorageExport="priceEstimatorStore.itemsStorageExport"
        />
      </v-row>
    </v-sheet>
  </v-container>
</template>
