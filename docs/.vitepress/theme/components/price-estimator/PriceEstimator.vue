<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, computed } from "vue"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"
import LabCard from "./LabCard.vue"
import TotalBlock from "./TotalBlock.vue"
import LabModal from "./LabModal.vue"
import AlertCart from "../generic/AlertCard.vue"
import { LocalStorageError } from "./types"

const fileInput = ref<HTMLInputElement | null>(null)
const isLabModalOpen = ref(false)
const localStorageError = ref<LocalStorageError>({ status: false })

watch(
  () => priceEstimatorStore.labs,
  () => {
    if (!priceEstimatorStore.isInitializingPriseEstimator) priceEstimatorStore.saveStateToLocal()
  },
  { deep: true },
)

onMounted(async () => {
  localStorageError.value = await priceEstimatorStore.initializePriceEstimatorStore()
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
  <v-theme-provider theme="huntCloud" with-background>
    <v-container v-if="!priceEstimatorStore.isInitializingPriseEstimator" class="pe-root pa-0">
      <v-sheet class="pe-wrapper ma-auto my-6" color="transparent" max-width="1120">
        <!-- Hero header -->
        <v-sheet class="pe-hero pa-6 mb-6" rounded="xl" elevation="0">
          <div class="d-flex align-center mb-2">
            <v-avatar color="primary" variant="tonal" rounded="lg" size="48" class="mr-4">
              <v-icon size="28">mdi-calculator-variant-outline</v-icon>
            </v-avatar>
            <div>
              <h2 class="pe-title">Price estimator for HUNT Cloud</h2>
              <div class="pe-subtitle">Build your labs below to estimate the cost of our services.</div>
            </div>
          </div>

          <v-divider class="my-4" />

          <div class="d-flex flex-wrap align-center ga-3">
            <v-btn color="primary" size="large" rounded="lg" prepend-icon="mdi-flask-plus-outline" class="text-none" @click="isLabModalOpen = true"> Add lab </v-btn>

            <v-spacer />

            <input ref="fileInput" type="file" style="display: none" accept="application/json" @change="handleFileUpload" />
            <v-btn variant="tonal" color="primary" size="large" rounded="lg" prepend-icon="mdi-import" class="text-none" @click="triggerFileUpload"> Import </v-btn>
            <v-btn
              v-if="priceEstimatorStore.labs.length"
              variant="text"
              color="error"
              size="large"
              rounded="lg"
              prepend-icon="mdi-delete-sweep-outline"
              class="text-none"
              @click="priceEstimatorStore.clearAllLabs()"
            >
              Remove all
            </v-btn>
          </div>
        </v-sheet>

        <!-- Empty state -->
        <v-sheet v-if="!priceEstimatorStore.labs.length" class="pe-empty pa-10 text-center" rounded="xl" elevation="0">
          <v-icon size="56" color="primary" class="mb-3 pe-empty-icon">mdi-flask-outline</v-icon>
          <h3 class="pe-empty-title mb-1">No labs yet</h3>
          <p class="pe-empty-text mb-5">Add your first lab to start estimating your monthly and yearly costs.</p>
          <v-btn color="primary" size="large" rounded="lg" prepend-icon="mdi-plus" class="text-none" @click="isLabModalOpen = true"> Add your first lab </v-btn>
        </v-sheet>

        <!-- Labs -->
        <LabCard v-for="lab of priceEstimatorStore.labs" :key="lab.id" :lab="lab" />

        <TotalBlock v-if="priceEstimatorStore.labs.length" />
      </v-sheet>

      <v-dialog v-model="isLabModalOpen" max-width="600px">
        <LabModal @close="isLabModalOpen = false" />
      </v-dialog>

      <AlertCart v-if="localStorageError.status" title="Error" :message="localStorageError.message"></AlertCart>
    </v-container>
  </v-theme-provider>
</template>

<style scoped>
.pe-root {
  font-family: var(--vp-font-family-base, inherit);
}

.pe-hero {
  background: linear-gradient(135deg, #f3f8f8 0%, #eef3f3 100%);
  border: 1px solid rgba(46, 117, 120, 0.12);
}

.pe-title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #1f2d2d;
  border: none;
  padding: 0;
}

.pe-subtitle {
  margin-top: 2px;
  font-size: 0.95rem;
  color: #5a6b6b;
}

.pe-empty {
  border: 1px dashed rgba(46, 117, 120, 0.3);
  background: #fafcfc;
}

.pe-empty-icon {
  opacity: 0.85;
}

.pe-empty-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2d2d;
  border: none;
  padding: 0;
}

.pe-empty-text {
  color: #5a6b6b;
  font-size: 0.95rem;
}
</style>
