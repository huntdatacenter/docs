<script setup>
import { computed } from "vue"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"

const currencyFormatter = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  maximumFractionDigits: 0,
})

const headers = [
  { title: "Name", key: "name", sortable: false },
  { title: "Units", key: "units", sortable: false },
  { title: "Price / year", key: "cost", sortable: false },
]

const rawSummary = computed(() => priceEstimatorStore.updateTotalSummary())

const tableItems = computed(() => {
  const s = rawSummary.value || {}
  const items = []

  let totalFlat = 0
  let totalDiscount = 0

  // Lab subscriptions
  if (s.labSubscriptions) {
    const flat = Number(s.labSubscriptions.price ?? 0)
    totalFlat += flat

    items.push({
      id: "labSubscriptions",
      name: "Lab Subscriptions",
      units: s.labSubscriptions.units ?? 0,
      cost: flat,
    })
  }

  // Compute
  if (s.allCompute) {
    const flat = Number(s.allCompute.price ?? 0)
    totalFlat += flat

    items.push({
      id: "compute",
      name: "Compute",
      units: s.allCompute.units ?? 0,
      cost: flat,
    })
  }

  // Storage
  if (s.allStorage) {
    Object.entries(s.allStorage).forEach(([type, obj]) => {
      const flat = Number(obj.costFlat ?? 0)
      const tiered = Number(obj.costTiered ?? flat)
      const discount = Math.max(0, flat - tiered)

      totalFlat += flat
      totalDiscount += discount

      items.push({
        id: `storage-${type}`,
        name: `Storage: ${type}`,
        units: obj.size ?? 0,
        cost: flat,
      })
    })
  }

  // Discount row
  items.push({
    id: "discount-row",
    name: "Storage Discount",
    units: "",
    cost: totalDiscount > 0 ? -totalDiscount : 0,
    isDiscountRow: true,
  })

  // Total row
  items.push({
    id: "total-row",
    name: "Total",
    units: "",
    cost: totalFlat - totalDiscount,
    isTotalRow: true,
  })

  return items
})
</script>

<template>
  <v-card class="ma-4 pa-4">
    <v-row align="center" justify="space-between">
      <v-col>
        <v-card-title>Total Summary</v-card-title>
      </v-col>
      <v-col cols="auto">
        <v-btn density="default" size="large" dark @click="priceEstimatorStore.exportItems()">
          <v-icon left>mdi-export</v-icon>
          Export
        </v-btn>
      </v-col>
    </v-row>

    <v-data-table :headers="headers" :items="tableItems" hide-default-footer item-value="id" class="mt-2">
      <template #item.name="{ item }">
        <strong v-if="item.isTotalRow">{{ item.name }}</strong>
        <span v-else>{{ item.name }}</span>
      </template>

      <template #item.cost="{ item }">
        <span v-if="item.isDiscountRow" class="text-green-darken-3" style="font-weight: 600">
          - {{ currencyFormatter.format(Math.abs(item.cost)) }}
        </span>

        <span v-else-if="item.isTotalRow" style="font-weight: 700">
          {{ currencyFormatter.format(item.cost) }}
        </span>

        <span v-else>
          {{ currencyFormatter.format(item.cost) }}
        </span>
      </template>

      <template #item.units="{ item }">
        <strong v-if="item.isTotalRow">{{ item.units }}</strong>
        <span v-else>{{ item.units }}</span>
      </template>

      <template #no-data>
        <v-sheet class="pa-4">No summary data available</v-sheet>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
.v-card {
  background-color: #f5f5f5;
}
</style>
