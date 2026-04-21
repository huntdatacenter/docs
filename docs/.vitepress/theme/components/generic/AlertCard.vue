<script setup>
import { ref } from "vue"

defineOptions({
  name: "AlertCard",
})

const props = defineProps({
  title: { type: String, default: "" },
  message: { type: String, default: "" },
})

const dialog = ref(true)
</script>

<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-alert closable type="warning" :title="props.title" close-label="Close Alert" @click:close="dialog = false"> {{ props.message }} </v-alert>
  </v-dialog>
</template>
