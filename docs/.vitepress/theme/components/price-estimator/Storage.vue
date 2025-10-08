<script lang="ts">
import type { StorageFormData, StorageUnit, PriceListItem } from "./types"

export default {
  name: "Storage",
  emits: ["close"],
  props: {
    storageId: { type: Number, default: () => 0 },
    initialData: { type: Object as () => StorageUnit | null, default: null },
  },
  data: () => ({
    formData: {
      id: null,
      name: null,
      usage: "Archive",
      type: "HDD",
      size: 1,
    } as StorageFormData,
    overlay: true,
  }),

  created() {
    if (this.initialData) {
      this.formData.id = this.initialData.id
      this.formData.name = this.initialData.name
      this.formData.usage = this.initialData.usage
      this.formData.type = this.initialData.type
      this.formData.size = this.initialData.size
    } else {
      this.formData.id = this.storageId
      this.formData.name = `volume-${this.storageId}`
    }
  },
  methods: {
    close() {
      this.$emit("close")
    },
    save() {
      this.$emit("close", {
        id: this.formData.id,
        name: this.formData.name,
        size: Number(this.formData.size),
        usage: this.formData.usage,
        type: this.formData.type,
      })
    },
  },
}
</script>

<template>
  <v-card class="d-flex justify-center align-center">
    <v-card-title>
      <span class="headline">Storage</span>
    </v-card-title>
    <v-card-text style="width: 100%">
      <v-container>
        <v-row dense>
          <v-form @submit.prevent="save" style="width: 100%">
            <v-col cols="12">
              <v-text-field v-model="formData.name" label="Name" required variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                :items="['Archive', 'Work', 'Scratch', 'Home']"
                v-model="formData.usage"
                label="Usage"
                required
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                :items="['HDD', 'NVME']"
                v-model="formData.type"
                label="Type"
                required
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formData.size"
                label="Size (TB)"
                hint="Enter the size of the storage in Terrabytes"
                persistent-hint
                type="number"
                :min="1"
                :max="100"
                :step="1"
                required
                suffix="TB"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-form>
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
