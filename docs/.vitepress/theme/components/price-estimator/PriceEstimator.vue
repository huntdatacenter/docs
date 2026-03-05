<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, computed } from "vue"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"
import LabCard from "./LabCard.vue"
import TotalBlock from "./TotalBlock.vue"
import LabModal from "./LabModal.vue"

const fileInput = ref<HTMLInputElement | null>(null)
const isLabModalOpen = ref(false)

watch(
  () => priceEstimatorStore.labs,
  () => {
    if (!priceEstimatorStore.isInitializingPriseEstimator) priceEstimatorStore.saveStateToLocal()
  },
  { deep: true },
)

onMounted(async () => {
  await priceEstimatorStore.initializePriceEstimatorStore()
})

function triggerFileUpload() {
  fileInput.value?.click()
}

async function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  try {
    await priceEstimatorStore.importLabs(file)
    target.value = ""
  } catch (err) {
    console.error(err)
    alert(err)
  }
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
            <v-btn density="default" size="large" dark @click="isLabModalOpen = true">Add lab</v-btn>
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
        <v-col>
          <LabCard v-for="lab of priceEstimatorStore.labs" :key="lab.id" :lab="lab" />
        </v-col>
      </v-row>

      <v-row v-if="priceEstimatorStore.labs.length">
        <v-col>
          <TotalBlock />
        </v-col>
      </v-row>
    </v-sheet>

    <v-dialog v-model="isLabModalOpen" max-width="600px">
      <LabModal @close="isLabModalOpen = false" />
    </v-dialog>
  </v-container>
</template>
