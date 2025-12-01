<script setup lang="ts">
import { reactive, onMounted } from "vue"
import type { StorageFormData, StorageUnit } from "./types"

interface Props {
  storageId?: number
  initialData?: StorageUnit | null
}

const props = withDefaults(defineProps<Props>(), {
  storageId: 0,

  initialData: null,
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
  if (props.initialData) {
    formData.id = props.initialData.id
    formData.name = props.initialData.name
    formData.usage = props.initialData.usage
    formData.type = props.initialData.type
    formData.size = props.initialData.size
  } else {
    formData.id = props.storageId
    formData.name = `volume-${props.storageId}`
  }
})

const close = () => {
  emit("close")
}

const save = () => {
  emit("close", {
    id: formData.id!,
    name: formData.name!,
    size: Number(formData.size),
    usage: formData.usage,
    type: formData.type,
  } as StorageUnit)
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
