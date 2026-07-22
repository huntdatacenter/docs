<script setup>
import { computed } from "vue"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"

const currencyFormatter = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  currencyDisplay: "code",
  maximumFractionDigits: 0,
})

const headers = [
  { title: "Name", align: "start", key: "name", sortable: false },
  { title: "Units", align: "end", key: "units", sortable: false },
  { title: "Price / year", align: "end", key: "cost", sortable: false },
]

const rawSummary = computed(() => priceEstimatorStore.updateTotalSummary())

const tableItems = computed(() => {
  const s = rawSummary.value || {}
  const items = []

  let totalFlat = 0
  let totalDiscount = 0
  let totalSubsequent = 0

  // Lab subscriptions 1Y -> Yearly
  if (s.labSubscriptions?.["1Y"]?.units > 0) {
    const flat = Number(s.labSubscriptions["1Y"].price ?? 0)
    totalFlat += flat
    totalSubsequent += flat

    items.push({
      id: "labSubscriptions1Y",
      name: "Lab Subscriptions (Yearly)",
      units: s.labSubscriptions["1Y"].units,
      cost: flat,
    })
  }

  // Lab subscriptions 3Y -> Triennial
  if (s.labSubscriptions?.["3Y"]?.units > 0) {
    const flat = Number(s.labSubscriptions["3Y"].price ?? 0)
    totalFlat += flat
    // 3Y subscription is paid upfront (or in first year context), not added to subsequent years

    items.push({
      id: "labSubscriptions3Y",
      name: "Lab Subscriptions (Triennial)",
      units: s.labSubscriptions["3Y"].units,
      cost: flat,
    })
  }

  // Compute
  if (s.allCompute) {
    const flat = Number(s.allCompute.price ?? 0)
    totalFlat += flat
    totalSubsequent += flat

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
      totalSubsequent += flat
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
    name: "Storage Volume Discount",
    units: "",
    cost: totalDiscount > 0 ? -totalDiscount : 0,
    isDiscountRow: true,
  })

  // Total row
  items.push({
    id: "total-row",
    name: "Total first year",
    units: "",
    cost: totalFlat - totalDiscount,
    isTotalRow: true,
  })

  // Only show subsequent years if we have 3Y subscriptions (which are paid upfront/differently)
  if (s.labSubscriptions?.["3Y"]?.units > 0) {
    items.push({
      id: "total-row-2",
      name: "Total subsequent years",
      units: "",
      cost: totalSubsequent - totalDiscount,
      isTotalRow: true,
    })
  }

  return items
})
</script>

<template>
  <v-card class="total-block mt-6" rounded="xl" elevation="3">
    <div class="total-header d-flex flex-wrap align-center px-5 py-4">
      <v-icon color="primary" class="mr-3">mdi-cart-outline</v-icon>
      <span class="total-title">Total summary</span>
      <v-spacer />
      <v-tooltip text="Save this configuration to a JSON file" location="top">
        <template v-slot:activator="{ props }">
          <v-btn variant="tonal" color="primary" size="large" rounded="lg" v-bind="props" prepend-icon="mdi-export" class="text-none" @click="priceEstimatorStore.exportItems()">
            Save config
          </v-btn>
        </template>
      </v-tooltip>
    </div>

    <v-data-table-virtual
      :headers="headers"
      :items="tableItems"
      hide-default-footer
      item-value="id"
      class="total-table"
      :row-props="(data) => ({ class: data.item.isTotalRow ? 'total-row' : data.item.isDiscountRow ? 'discount-row' : '' })"
    >
      <template v-slot:item.name="{ item }">
        <span v-if="item.isTotalRow">
          <strong>{{ item.name }}</strong>
        </span>
        <span v-else>{{ item.name }}</span>
      </template>

      <template v-slot:item.cost="{ item }">
        <span v-if="item.isDiscountRow" class="text-green-darken-3" style="font-weight: 600">- {{ currencyFormatter.format(Math.abs(item.cost)) }}</span>

        <span v-else-if="item.isTotalRow" style="font-weight: 700">
          {{ currencyFormatter.format(item.cost) }}
        </span>

        <span v-else>
          {{ currencyFormatter.format(item.cost) }}
        </span>
      </template>

      <template v-slot:item.units="{ item }">
        <span v-if="item.isTotalRow">
          <strong>{{ item.units }}</strong>
        </span>
        <span v-else>{{ item.units }}</span>
      </template>

      <template v-slot:no-data>
        <v-sheet class="pa-4">No summary data available</v-sheet>
      </template>
    </v-data-table-virtual>
  </v-card>
</template>

<style scoped>
.total-block {
  border: 1px solid rgba(46, 117, 120, 0.18);
  overflow: hidden;
}

.total-header {
  background: linear-gradient(135deg, #f3f8f8 0%, #eef3f3 100%);
  border-bottom: 1px solid rgba(46, 117, 120, 0.15);
}

.total-title {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1f2d2d;
}

.total-table :deep(thead th) {
  font-weight: 600 !important;
  color: #5a6b6b !important;
  text-transform: uppercase;
  font-size: 0.72rem !important;
  letter-spacing: 0.04em;
}

.total-table :deep(tr.total-row td) {
  background: rgba(46, 117, 120, 0.08);
  font-size: 1rem;
}

.total-table :deep(tr.total-row:last-child td) {
  background: rgba(46, 117, 120, 0.14);
}

.total-table :deep(tr.discount-row td) {
  background: rgba(46, 125, 50, 0.06);
}
</style>
