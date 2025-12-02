<script setup lang="ts">
import { reactive, onMounted } from "vue"
import type { StorageFormData, StorageUnit } from "./types"
import { priceEstimatorStore } from "./stores/prirceEstimatorStore"

const props = defineProps({
  labId: { type: Number, required: true },
  storageId: { type: Number, required: true },
  editData: { type: Object as () => StorageUnit | null },
})

const emit = defineEmits<{
  close: [data?: StorageUnit]
}>()

const formData = reactive<StorageFormData>({
  id: null,
  name: null,
  usage: "Archive",
  type: "HDD",
  size: 1,
})

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

const close = () => {
  emit("close")
}

const save = () => {
  if (props.editData) {
    // Edit
    priceEstimatorStore.editStorageInLab(props.labId, props.editData.id, {
      name: formData.name!,
      usage: formData.usage,
      type: formData.type,
      size: formData.size,
    })
  } else {
    // Add new
    priceEstimatorStore.addStorageToLab(props.labId, {
      name: formData.name!,
      usage: formData.usage,
      type: formData.type,
      size: formData.size,
    })
  }

  emit("close")
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
