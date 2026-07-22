<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"
import type { MachineType } from "./types"

const emit = defineEmits<{
  close: []
}>()

const formData = ref({
  name: "",
  subscription: "1Y",
  machineType: "c1",
  machineSubscription: "COMMITMENT_1Y",
  archive: 0.4,
  work: 0.3,
  scratch: 0.3,
})

const subscriptions = computed(() => {
  return priceEstimatorStore.catalogue.labPrices.map((p) => {
    const price = p["price.nok.ex.vat"]
    const is3Y = p["service.commitment"] === "3Y"
    return {
      title: `${is3Y ? "Triennial" : "Yearly"} - ${price.toFixed(0)} NOK`,
      value: p["service.commitment"],
    }
  })
})

const machineSubscriptions = [
  { title: "Commitment - 1 Year", value: "COMMITMENT_1Y" },
  { title: "Commitment - 3 Years", value: "COMMITMENT_3Y" },
]

const machineType = computed(() => {
  return priceEstimatorStore.catalogue.machinePrices
})

const save = () => {
  priceEstimatorStore.addLab({
    name: formData.value.name,
    subscription: formData.value.subscription,
    machineType: formData.value.machineType,
    machineSubscription: formData.value.machineSubscription,
    archive: Number(formData.value.archive),
    work: Number(formData.value.work),
    scratch: Number(formData.value.scratch),
    isDefault: true,
    collapse: false,
  })
  emit("close")
}

onMounted(() => {
  formData.value.name = `Lab ${priceEstimatorStore.labs.length + 1}`
})
</script>

<template>
  <v-theme-provider theme="huntCloud" with-background>
    <v-card rounded="lg">
      <v-card-title class="d-flex align-center px-5 pt-4">
        <v-icon color="primary" class="mr-2">mdi-flask-plus-outline</v-icon>
        <span class="text-h6">Add new lab</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-text-field v-model="formData.name" label="Lab Name" variant="outlined"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-select v-model="formData.subscription" :items="subscriptions" label="Renewal Period" variant="outlined"></v-select>
            </v-col>

            <v-col cols="12">
              <v-autocomplete v-model="formData.machineType" :items="machineType" label="Default Home Machine" variant="outlined" item-title="title" item-value="value">
                <template #item="{ item, props }">
                  <VDivider v-if="'divider' in item.raw" />
                  <VListSubheader v-else-if="'header' in item.raw" :title="item.raw.header" />
                  <VListItem v-else v-bind="props" :title="item.title" :value="item.value" />
                </template>
              </v-autocomplete>
            </v-col>

            <v-col cols="12">
              <v-select v-model="formData.machineSubscription" :items="machineSubscriptions" label="Home Machine Subscription" variant="outlined"></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="formData.archive" label="Archive Storage (TB)" type="number" variant="outlined" min="0" placeholder="0.4"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="formData.work" label="Work Storage (TB)" type="number" variant="outlined" min="0" placeholder="0.3"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="formData.scratch" label="Scratch Storage (TB)" type="number" variant="outlined" min="0" placeholder="0.4"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="px-5 pb-4">
        <v-spacer></v-spacer>
        <v-btn variant="text" rounded="lg" class="text-none" @click="$emit('close')">Cancel</v-btn>
        <v-btn variant="flat" color="primary" rounded="lg" class="text-none" prepend-icon="mdi-plus" @click="save">Add lab</v-btn>
      </v-card-actions>
    </v-card>
  </v-theme-provider>
</template>
