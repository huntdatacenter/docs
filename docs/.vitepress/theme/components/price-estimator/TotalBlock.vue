<script>
export default {
  name: "TotalBlock",
  props: {
    totalItems: { type: Array, default: () => [] },
    totals: {
      type: Object,
      default: () => ({
        computePrice: 0.0,
        storageCost: {},
      }),
    },
    itemsComputeExport: { type: Array, default: () => [] },
    itemsStorageExport: { type: Array, default: () => [] },
    labs: { type: Array, default: () => [] },
  },

  data() {
    return {
      totalHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Total units", align: "start", sortable: true, key: "units" },
        { title: "Price / year", align: "start", sortable: true, key: "price" },
      ],
    }
  },
  computed: {
    sumInTotal() {
      const summedStorageCost = Object.values(this.totals.storageCost).reduce((a, b) => a + b.cost, 0)
      const labsTotal = this.totalItems
        .filter(item => item.name.startsWith("Lab"))
        .reduce((sum, item) => sum + item.price, 0)
      return labsTotal + this.totals.computePrice + summedStorageCost
    },
  },
  methods: {
    exportItems() {
      const labsExport = []

      this.labs.forEach(lab => {
        const compute = lab.selectedCompute
        const storage = lab.selectedStorage

        if ((compute && compute.length > 0) || (storage && storage.length > 0)) {
          const labObject = {
            id: lab.id,
            name: lab.title,
          }

          if (compute && compute.length > 0) {
            labObject.compute = compute.map(item => {
              // Create a clean copy without price fields
              const { monthlyPrice, yearlyPrice, ...rest } = item
              return rest
            })
          }

          if (storage && storage.length > 0) {
            labObject.storage = storage.map(item => {
              // Create a clean copy without price fields
              const { price, ...rest } = item
              return rest
            })
          }
          labsExport.push(labObject)
        }
      })

      const exportData = {
        version: "1.0",
        labs: labsExport,
      }

      const jsonString = JSON.stringify(exportData, null, 2)
      const blob = new Blob([jsonString], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "lab-export.json"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    },
  },
}
</script>

<template>
  <v-sheet class="lab-card">
    <v-card class="ma-0 pa-4">
      <v-card-title> Total</v-card-title>
      <v-data-table-virtual :items="totalItems" :headers="totalHeaders" hide-default-footer item-value="id">
        <template v-slot:item.price="{ item }">
          {{ Number(item.price).toFixed(2) + " kr" }}
        </template>
        <template v-slot:item.storage="{ item }">
          {{ Number(item.price).toFixed(2) + " TB" }}
        </template>
      </v-data-table-virtual>
      <v-row dense>
        <v-col cols="5">
          <v-btn class="mt-5" @click="exportItems">
            <v-icon left>mdi-export</v-icon>
            Export
          </v-btn>
        </v-col>
        <v-col cols="7">
          <v-list dense>
            <v-list-item>
              <v-list-item-title> <strong> Estimated total price: </strong></v-list-item-title>
              <v-list-item-subtitle class="align-end">
                {{ Number(this.sumInTotal).toFixed(2) }} NOK ex. VAT / Year
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </v-sheet>
</template>

<style scoped>
.lab-card {
  width: 94%;
  margin: auto;
}

.v-card {
  background-color: #f5f5f5;
}
</style>
