<script setup>
import { ref } from "vue"

defineOptions({
  name: "VideoGuide",
})

// Emits definition
const emit = defineEmits(["update:modelValue"])

// Props definition
const props = defineProps({
  modelValue: { type: Number, required: true }, // Changed from 'value' to 'modelValue'
  title: { type: String, required: true },
  video: { type: String, required: true },
  poster: { type: String, required: true },
  inc: { type: Number, default: 1 },
  buttontext: { type: String, default: "Video guide" },
})

// Reactive data
const videoDialog = ref(false)
const preload = ref(false)
const totpStepper = ref(1)

// Methods
const nextPanel = () => {
  videoDialog.value = false
  emit("update:modelValue", props.modelValue + props.inc)
}
</script>

<template>
  <section>
    <v-row class="my-1">
      <v-col cols="12">
        <!-- prettier-ignore -->
        <v-btn
          variant="text"
          color="success"
          @click.stop="videoDialog = true; preload = true"
          elevation="2"
          prepend-icon="mdi-play"
        >
          {{ buttontext }} (NEW)
        </v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="videoDialog" persistent scrollable max-width="1280px" @keydown.esc="videoDialog = false">
      <v-card class="pa-0 ma-0" elevation="0">
        <v-card-title class="pa-0">
          <v-toolbar color="#00509e" theme="dark" flat>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer />
            <template v-slot:append>
              <v-btn icon="mdi-close" @click="videoDialog = false" />
            </template>
          </v-toolbar>
        </v-card-title>

        <v-card-text class="pa-0 ma-0">
          <video v-if="preload" class="video-card-block" width="100%" :poster="poster" preload="auto" controls>
            <source :src="video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn variant="outlined" color="primary" class="mx-2 my-2" size="small" @click="videoDialog = false">
            Close
          </v-btn>
          <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()"> Next </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<style>
.video-card-block {
  height: 99% !important;
}
</style>
