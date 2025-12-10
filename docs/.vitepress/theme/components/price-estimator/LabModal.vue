<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"
import type { MachineFlavor } from "./types"

const emit = defineEmits<{
  close: []
}>()

const formData = ref({
  name: "",
  subscription: "1Y",
  machineFlavor: "default.c1",
  machineSubscription: "COMMITMENT_1Y",
  hddSize: 1,
  nvmeSize: 0,
})

const subscriptions = computed(() => {
  return priceEstimatorStore.catalogue.labPrices.map(p => {
    const price = p["price.nok.ex.vat"]
    const is3Y = p["service.commitment"] === "3Y"
    return {
      title: `${is3Y ? "3 Years" : "1 Year"} - ${price.toFixed(0)} NOK`,
      value: p["service.commitment"],
    }
  })
})

const machineSubscriptions = [
  { title: "Commitment - 1 Year", value: "COMMITMENT_1Y" },
  { title: "Commitment - 3 Years", value: "COMMITMENT_3Y" },
]

const machineFlavors = computed(() => {
  return priceEstimatorStore.catalogue.machinePrices
})

const save = () => {
  priceEstimatorStore.addLab({
    name: formData.value.name,
    subscriptionType: formData.value.subscription,
    machineFlavor: formData.value.machineFlavor,
    machineSubscription: formData.value.machineSubscription,
    hddSize: Number(formData.value.hddSize),
    nvmeSize: Number(formData.value.nvmeSize),
  })
  emit("close")
}

onMounted(() => {
  formData.value.name = `Lab ${priceEstimatorStore.labs.length + 1}`
})
</script>

<template>
  <v-card light class="d-flex justify-center align-center">
    <v-card-title>Add New Lab</v-card-title>
    <v-card-text>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="formData.name" label="Lab Name" variant="outlined"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-select
              v-model="formData.subscription"
              :items="subscriptions"
              label="Subscription Period"
              variant="outlined"
            ></v-select>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
              v-model="formData.machineFlavor"
              :items="machineFlavors"
              label="Default Home Machine"
              variant="outlined"
              item-title="title"
              item-value="value"
            >
              <template #item="{ item, props }">
                <VDivider v-if="'divider' in item.raw" />
                <VListSubheader v-else-if="'header' in item.raw" :title="item.raw.header" />
                <VListItem v-else v-bind="props" :title="item.title" :value="item.value" />
              </template>
            </v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-select
              v-model="formData.machineSubscription"
              :items="machineSubscriptions"
              label="Home Machine Subscription"
              variant="outlined"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.hddSize"
              label="HDD Storage (TB)"
              type="number"
              variant="outlined"
              min="0"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.nvmeSize"
              label="NVMe Storage (TB)"
              type="number"
              variant="outlined"
              min="0"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red darken-1" text @click="$emit('close')">Cancel</v-btn>
      <v-btn color="green darken-1" text @click="save">Add Lab</v-btn>
    </v-card-actions>
  </v-card>
</template>
