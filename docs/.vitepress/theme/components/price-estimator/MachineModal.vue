<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import type { ComputeUnit, PriceListItem, GpuModel, MachineFlavor, MachineFormData, Catalogue } from "./types"
import { priceEstimatorStore } from "./stores/pricingEstimatorStore"

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
  id: null,
  name: null,
  flavor: null,
  gpu: null,
  subscription: null,
})

const subscriptions = [
  { text: "Commitment - 1 Year", value: "COMMITMENT_1Y" },
  { text: "Commitment - 3 Years", value: "COMMITMENT_3Y" },
  { text: "On demand", value: "ONDEMAND" },
  { text: "Spot", value: "SPOT" },
]

const getComputePriceYear = computed((): string | number => {
  if (!formData.value.flavor || !formData.value.subscription) {
    return 0
  }
  let price: number | undefined
  if (formData.value.subscription.includes("COMMITMENT")) {
    if (formData.value.subscription === "COMMITMENT_3Y") {
      const item = priceEstimatorStore.catalogue.computePrices.find(
        (item: PriceListItem) =>
          item["service.unit"] === formData.value.flavor &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "3Y",
      )
      price = item ? item["price.nok.ex.vat"] / 3 : undefined
    } else {
      const item = priceEstimatorStore.catalogue.computePrices.find(
        (item: PriceListItem) =>
          item["service.unit"] === formData.value.flavor &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "1Y",
      )
      price = item ? item["price.nok.ex.vat"] : undefined
    }
  } else {
    const item = priceEstimatorStore.catalogue.computePrices.find(
      (item: PriceListItem) =>
        item["service.unit"] === formData.value.flavor && item["service.level"] === formData.value.subscription,
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
  if (!formData.value.gpu) {
    return 0
  }
  const price = priceEstimatorStore.catalogue.gpuPrices.find(
    (item: PriceListItem) => item["service.unit"] === formData.value.gpu && item["service.level"] === "ONDEMAND",
  )
  return price ? Number(price["price.nok.ex.vat"]).toFixed(2) : 0
})

const getGpuPriceMonth = computed((): string | number => {
  const yearlyGpu = Number(getGpuPriceYear.value)
  return yearlyGpu ? Number(yearlyGpu / 12).toFixed(2) : 0
})

const getFlavors = computed((): MachineFlavor[] => {
  if (!formData.value.subscription) {
    return []
  }
  return priceEstimatorStore.catalogue.machinePrices.filter((item: MachineFlavor) => item)
})

const getGpus = computed(() => {
  return priceEstimatorStore.catalogue.availableGpus.map((item: GpuModel) => {
    return {
      title: item["type"] + " - " + item["vram"] + " GB VRAM",
      value: item["type"],
    }
  })
})

const close = () => {
  emit("close")
}

const save = () => {
  if (!formData.value.flavor) {
    emit("open-snackbar", "No machine type selected")
    return
  }

  const name = formData.value.name
  const machinetitle = priceEstimatorStore.catalogue.machinePrices
    .filter((item: MachineFlavor) => item["value"] === formData.value.flavor)[0]
    ["title"].split(" - ")[1]
    .split(" / ")
  const core_count = parseInt(machinetitle[0].split(" ")[0])
  const ram = parseInt(machinetitle[1].split(" ")[0])
  const flavorWithGpu = formData.value.gpu ? formData.value.flavor + " + " + formData.value.gpu : formData.value.flavor
  const subscription = formData.value.subscription
  const gpu = formData.value.gpu

  if (props.editData) {
    priceEstimatorStore.editComputeInLab(props.labId, props.editData.id, {
      name: name!,
      flavor: flavorWithGpu,
      core_count: core_count,
      ram: ram,
      type: subscription!,
      gpu: gpu,
    })
  } else {
    // Add new compute
    priceEstimatorStore.addComputeToLab(props.labId, {
      name: name!,
      flavor: flavorWithGpu!,
      core_count: core_count,
      ram: ram,
      type: subscription!,
      gpu: gpu,
    })
    // Add default storage
    priceEstimatorStore.addDefaultStorageToLab(props.labId)
  }

  emit("close")
}

onMounted(() => {
  if (props.editData) {
    formData.value.id = props.editData.id
    formData.value.name = props.editData.name
    formData.value.subscription = props.editData.type

    if (props.editData.flavor.includes(" + ")) {
      const parts = props.editData.flavor.split(" + ")
      formData.value.flavor = parts[0]
      formData.value.gpu = parts[1]
    } else {
      formData.value.flavor = props.editData.flavor
      formData.value.gpu = props.editData.gpu || null
    }
  } else {
    formData.value.id = props.computeId
    formData.value.name = `machine-${props.computeId + 1}`
  }
})
</script>

<template>
  <v-card light class="d-flex justify-center align-center">
    <v-card-title>
      <span class="text-h5">Add Compute</span>
    </v-card-title>
    <v-card-text style="width: 100%">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="formData.name" label="Name" required variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="formData.subscription"
              :items="subscriptions"
              item-title="text"
              item-value="value"
              label="Subscription type"
              required
              variant="outlined"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="formData.flavor"
              :items="getFlavors"
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
          <v-col v-show="formData.flavor" cols="12" sm="6">
            <v-text-field
              v-model="getComputePriceMonth"
              label="Compute Price / Month"
              suffix="NOK ex. VAT"
              readonly
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col v-show="formData.flavor" cols="12" sm="6">
            <v-text-field
              v-model="getComputePriceYear"
              label="Compute Price / Year"
              suffix="NOK ex. VAT / Year"
              readonly
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="formData.gpu"
              :items="getGpus"
              label="GPU type (optional)"
              variant="outlined"
              clearable
              :disabled="!formData.subscription"
            ></v-select>
          </v-col>
          <v-col v-show="formData.gpu" cols="12" sm="6">
            <v-text-field
              v-model="getGpuPriceMonth"
              label="GPU Price / Month"
              suffix="NOK ex. VAT"
              readonly
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col v-show="formData.gpu" cols="12" sm="6">
            <v-text-field
              v-model="getGpuPriceYear"
              label="GPU Price / Year"
              suffix="NOK ex. VAT / Year"
              readonly
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red darken-2" text @click="close()"> Close </v-btn>
      <v-btn color="green darken-2" text @click="save()"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>
