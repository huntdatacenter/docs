<script setup lang="ts">
import { reactive, onMounted } from "vue"
import type { StorageFormData, StorageUnit } from "./types"
import { priceEstimatorStore } from "./stores/priceEstimatorStore"

const props = defineProps({
  labId: { type: Number, required: true },
  storageId: { type: Number, required: true },
  editData: { type: Object as () => StorageUnit | null },
})

const emit = defineEmits<{
  close: [data?: StorageUnit]
}>()

const formData = reactive<StorageFormData>({
  id: undefined,
  name: undefined,
  usage: "Archive",
  type: "HDD",
  size: 1,
})

const close = () => {
  emit("close")
}

const save = () => {
  if (props.editData) {
    // Edit
    priceEstimatorStore.editStorageInLab(props.labId, props.editData.id, {
      name: formData.name!,
      usage: formData.usage!,
      type: formData.type!,
      size: Number(formData.size),
    })
  } else {
    // Add new
    priceEstimatorStore.addStorageToLab(props.labId, {
      name: formData.name!,
      usage: formData.usage!,
      type: formData.type!,
      size: Number(formData.size),
    })
  }

  emit("close")
}

onMounted(() => {
  if (props.editData) {
    formData.id = props.editData.id
    formData.name = props.editData.name
    formData.usage = props.editData.usage
    formData.type = props.editData.type
    formData.size = props.editData.size
  } else {
    formData.id = props.storageId
    formData.name = `volume-${props.storageId + 1}`
  }
})
</script>

<template>
  <v-theme-provider theme="huntCloud" with-background>
  <v-card rounded="lg">
    <v-card-title class="d-flex align-center px-5 pt-4">
      <v-icon color="primary" class="mr-2">mdi-database-outline</v-icon>
      <span class="text-h6">{{ editData ? "Edit storage" : "Add storage" }}</span>
    </v-card-title>
    <v-card-text style="width: 100%">
      <v-container>
        <v-row dense>
          <v-form @submit.prevent="save" style="width: 100%">
            <v-col cols="12">
              <v-text-field v-model="formData.name" label="Name" required variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select :items="['Archive', 'Work', 'Scratch', 'Home']" v-model="formData.usage" label="Usage" required variant="outlined"></v-select>
            </v-col>
            <v-col cols="12">
              <v-select :items="['HDD', 'NVME']" v-model="formData.type" label="Type" required variant="outlined"></v-select>
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
    <v-card-actions class="px-5 pb-4">
      <v-spacer></v-spacer>
      <v-btn variant="text" rounded="lg" class="text-none" @click="close()"> Cancel </v-btn>
      <v-btn variant="flat" color="primary" rounded="lg" class="text-none" prepend-icon="mdi-content-save-outline" @click="save()"> Save </v-btn>
    </v-card-actions>
  </v-card>
  </v-theme-provider>
</template>
