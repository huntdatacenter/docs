<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import type { ComputeUnit, PriceListItem, GpuModel, MachineType, MachineFormData } from "./types"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"

const props = defineProps({
  labId: { type: Number, required: true },
  computeId: { type: Number, required: true },
  editData: { type: Object as () => ComputeUnit | null },
  selectedRadio: { type: String, default: "1Y" },
})

const emit = defineEmits<{
  close: [data?: any]
  "open-snackbar": [message: string]
}>()

const formData = ref<MachineFormData>({
  id: undefined,
  name: undefined,
  machine_type: undefined,
  gpu: undefined,
  gpu_count: 1,
  subscription: undefined,
  isDefault: false,
})

let subscriptions = ref([
  { text: "Commitment - 1 Year", value: "COMMITMENT_1Y" },
  { text: "Commitment - 3 Years", value: "COMMITMENT_3Y" },
  { text: "On demand", value: "ONDEMAND" },
  { text: "Spot", value: "SPOT" },
])

const getComputePriceYear = computed((): string | number => {
  if (!formData.value.machine_type || !formData.value.subscription) {
    return 0
  }
  let price: number | undefined
  if (formData.value.subscription.includes("COMMITMENT")) {
    if (formData.value.subscription === "COMMITMENT_3Y") {
      const item = priceEstimatorStore.catalogue.computePrices.find(
        (item: PriceListItem) => item["service.unit"] === formData.value.machine_type && item["service.level"] === "COMMITMENT" && item["service.commitment"] === "3Y",
      )
      price = item ? item["price.nok.ex.vat"] / 3 : undefined
    } else {
      const item = priceEstimatorStore.catalogue.computePrices.find(
        (item: PriceListItem) => item["service.unit"] === formData.value.machine_type && item["service.level"] === "COMMITMENT" && item["service.commitment"] === "1Y",
      )
      price = item ? item["price.nok.ex.vat"] : undefined
    }
  } else {
    const item = priceEstimatorStore.catalogue.computePrices.find(
      (item: PriceListItem) => item["service.unit"] === formData.value.machine_type && item["service.level"] === formData.value.subscription,
    )
    price = item ? item["price.nok.ex.vat"] : undefined
  }
  return price ? Number(price).toFixed(2) : 0
})

const getComputePriceMonth = computed((): string | number => {
  const yearly = Number(getComputePriceYear.value)
  return yearly ? Number(yearly / 12).toFixed(2) : 0
})

const getGpuPriceYear = computed((): string | number => {
  const gpu = formData.value.gpu
  const gpuCount = formData.value.gpu_count

  if (!gpu || !gpuCount) {
    return 0
  }
  const price = priceEstimatorStore.catalogue.gpuPrices.find((item: PriceListItem) => item["service.unit"] === gpu && item["service.level"] === "ONDEMAND")

  return price ? (Number(price["price.nok.ex.vat"]) * gpuCount).toFixed(2) : 0
})

const getGpuPriceMonth = computed((): string | number => {
  const yearlyGpu = Number(getGpuPriceYear.value)
  return yearlyGpu ? Number(yearlyGpu / 12).toFixed(2) : 0
})

const getMachineType = computed((): MachineType[] => {
  if (!formData.value.subscription) {
    return []
  }
  return priceEstimatorStore.catalogue.machinePrices.filter((item: MachineType) => item)
})

const getGpus = computed(() => {
  return priceEstimatorStore.catalogue.availableGpus.map((item: GpuModel) => {
    return {
      title: item["type"] + " - " + item["vram"] + " GB VRAM",
      value: item["type"],
    }
  })
})

const gpuCount = computed({
  get: () => (formData.value.gpu ? formData.value.gpu_count : undefined),
  set: (val) => {
    if (formData.value.gpu) formData.value.gpu_count = val
  },
})

const getMaxGpuCount = computed((): number => {
  if (!formData.value.gpu) return 1

  const selectedGpu = priceEstimatorStore.catalogue.availableGpus.find((item: GpuModel) => item["type"] === formData.value.gpu)

  return selectedGpu?.max ?? 1
})

const close = () => {
  emit("close")
}

const save = () => {
  if (!formData.value.machine_type) {
    emit("open-snackbar", "No machine type selected")
    return
  }

  const name = formData.value.name
  const machinetitle = priceEstimatorStore.catalogue.machinePrices
    .filter((item: MachineType) => item["value"] === formData.value.machine_type)[0]
    ["title"].split(" - ")[1]
    .split(" / ")
  const core_count = parseInt(machinetitle[0].split(" ")[0])
  const ram = parseInt(machinetitle[1].split(" ")[0])
  const machineWithGpu = formData.value.machine_type
  const subscription = formData.value.subscription
  const gpu = formData.value.gpu
  var gpuCount
  if (gpu) {
    gpuCount = formData.value.gpu_count
  }

  if (props.editData) {
    priceEstimatorStore.editComputeInLab(props.labId, props.editData.id, {
      name: name!,
      machine_type: machineWithGpu,
      core_count: core_count,
      ram: ram,
      subscription: subscription!,
      gpu: gpu,
      gpuCount: gpuCount,
      isDefault: formData.value.isDefault!,
    })
  } else {
    // Add new compute
    priceEstimatorStore.addComputeToLab(props.labId, {
      name: name!,
      machine_type: machineWithGpu!,
      core_count: core_count,
      ram: ram,
      subscription: subscription!,
      gpu: gpu,
      gpu_count: gpuCount,
      isDefault: formData.value.isDefault!,
    })
  }

  emit("close")
}

onMounted(() => {
  if (props.editData) {
    formData.value.id = props.editData.id
    formData.value.name = props.editData.name
    formData.value.subscription = props.editData.subscription
    formData.value.isDefault = props.editData.isDefault

    if (formData.value.isDefault) {
      subscriptions.value = subscriptions.value.slice(0, 2)
    }

    if (props.editData.machine_type.includes(" + ")) {
      const parts = props.editData.machine_type.split(" + ")
      formData.value.machine_type = parts[0]
      formData.value.gpu = parts[1]
    } else {
      formData.value.machine_type = props.editData.machine_type
      formData.value.gpu = props.editData.gpu
      formData.value.gpu_count = props.editData.gpu_count
    }
  } else {
    formData.value.id = props.computeId
    const labName = priceEstimatorStore.labs[props.labId].title.toLowerCase().replace(" ", "-")
    formData.value.name = `${labName}-iaas-${props.computeId}`
  }
})
</script>

<template>
  <v-theme-provider theme="huntCloud" with-background>
  <v-card rounded="lg">
    <v-card-title class="d-flex align-center px-5 pt-4">
      <v-icon color="primary" class="mr-2">mdi-memory</v-icon>
      <span class="text-h6">{{ editData ? "Edit compute" : "Add compute" }}</span>
    </v-card-title>
    <v-card-text style="width: 100%">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="formData.name" label="Name" required variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-autocomplete v-model="formData.subscription" :items="subscriptions" item-title="text" item-value="value" label="Subscription type" required variant="outlined">
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="formData.machine_type"
              :items="getMachineType"
              label="Machine type"
              variant="outlined"
              required
              :disabled="!formData.subscription"
              width="100%"
            >
              <template #item="{ item, props }">
                <VDivider v-if="'divider' in item.raw" />
                <VListSubheader v-else-if="'header' in item.raw" :title="item.raw.header" />
                <VListItem v-else v-bind="props" :title="item.title" :value="item.value" />
              </template>
            </v-autocomplete>
          </v-col>
          <v-col v-show="formData.machine_type" cols="12" sm="6">
            <v-text-field v-model="getComputePriceMonth" label="Compute Price / Month" suffix="NOK ex. VAT" readonly variant="outlined"></v-text-field>
          </v-col>
          <v-col v-show="formData.machine_type" cols="12" sm="6">
            <v-text-field v-model="getComputePriceYear" label="Compute Price / Year" suffix="NOK ex. VAT / Year" readonly variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" v-show="!formData.isDefault">
            <v-select v-model="formData.gpu" :items="getGpus" label="GPU type (optional)" variant="outlined" clearable :disabled="!formData.subscription"></v-select>
          </v-col>
          <v-col cols="12" v-show="!formData.isDefault">
            <v-number-input v-model="gpuCount" variant="outlined" label="GPU count" :min="1" :max="getMaxGpuCount" :disabled="!formData.gpu"></v-number-input>
          </v-col>
          <v-col v-show="formData.gpu" cols="12" sm="6">
            <v-text-field v-model="getGpuPriceMonth" label="GPU Price / Month" suffix="NOK ex. VAT" readonly variant="outlined"></v-text-field>
          </v-col>
          <v-col v-show="formData.gpu" cols="12" sm="6">
            <v-text-field v-model="getGpuPriceYear" label="GPU Price / Year" suffix="NOK ex. VAT / Year" readonly variant="outlined"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="px-5 pb-4">
      <v-spacer></v-spacer>
      <v-btn variant="text" rounded="lg" class="text-none" @click="close()"> Cancel </v-btn>
      <v-btn variant="flat" color="primary" rounded="lg" class="text-none" prepend-icon="mdi-content-save-outline" @click="save()"> Save </v-btn>
    </v-card-actions>
  </v-card>
  </v-theme-provider>
</template>
