<script>
export default {
  name: "TotalBlock",
  props: {
    totalItems: { type: Array, default: () => [] },
    sumInTotal: { type: Number, default: 0.0 },
    itemsComputeExport: { type: Array, default: () => [] },
    itemsStorageExport: { type: Array, default: () => [] },
  },

  data() {
    return {
      totalHeaders: [
        { title: "Name", align: "start", sortable: true, key: "name" },
        { title: "Total units", align: "start", sortable: true, key: "units" },
        { title: "Price", align: "start", sortable: true, key: "price" },
      ],
      datasetStorage: [],
      totalPrice: 0.0,
      commitmentPrice: 0.0,
      onDemandPrice: 0.0,
    }
  },
  computed: {
    formattedTotalItems() {
      if (!this.totalItems) {
        return []
      }
      return this.totalItems.map(item => ({
        ...item,
        price: parseFloat(item.price).toFixed(2),
      }))
    },
  },
  watch: {},

  methods: {
    exportItems() {
      // Create deep copies to avoid modifying the original data
      const computeItemsClean = JSON.parse(JSON.stringify(this.itemsComputeExport))
      const storageItemsClean = JSON.parse(JSON.stringify(this.itemsStorageExport))

      const labs = [] // Initialize as an array
      const maxId = Math.max(computeItemsClean.length, storageItemsClean.length)

      // Iterate through possible lab IDs (assuming they start from 1)
      for (let id = 1; id < maxId; id++) {
        const compute = computeItemsClean[id]
        const storage = storageItemsClean[id]

        // Only add the lab to the export if it has compute or storage items
        if (compute || storage) {
          const labObject = {
            id: id,
            name: "lab " + id,
          }

          if (compute) {
            // Remove price properties from compute items
            labObject.compute = compute.map(item => {
              delete item.monthlyPrice
              delete item.yearlyPrice
              return item
            })
          }

          if (storage) {
            // Remove price properties from storage items
            labObject.storage = storage.map(item => {
              delete item.price
              return item
            })
          }
          labs.push(labObject)
        }
      }

      const exportData = {
        version: "1.0",
        labs: labs,
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
      <v-data-table-virtual
        v-model="datasetStorage"
        :items="formattedTotalItems"
        :headers="totalHeaders"
        hover
        hide-default-footer
        item-value="id"
      >
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
                {{ parseFloat(this.sumInTotal).toFixed(2) }} NOK ex. VAT / Year
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </v-sheet>
</template>

<style scoped>
/* Your component styles go here */
.lab-card {
  width: 94%;
  margin: auto;
}

.v-card {
  background-color: #f5f5f5;
}
</style>
