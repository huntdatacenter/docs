<script setup>
import { defineAsyncComponent } from "vue"

defineOptions({
  name: "CopyInput",
})

// Async component import (Vue 3 style)
// const CopyInputField = defineAsyncComponent(() => import("./CopyInputField.vue"))

// Props definition
const props = defineProps({
  id: { type: String, default: "applet" },
  modelValue: { type: [Object, String], default: null }, // Changed from 'value' to 'modelValue'
  label: { type: String, default: "" },
  placeholder: { type: String, default: null },
  prefix: { type: String, default: null },
  suffix: { type: String, default: null },
  prependInnerIcon: { type: String, default: null },
  loading: { type: Boolean, default: false },
})

// Emits definition
const emit = defineEmits(["update:modelValue"])

// Handle model value updates
const handleModelValueUpdate = value => {
  emit("update:modelValue", value)
}
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <CopyInputField
        :model-value="modelValue"
        :label="label"
        :placeholder="placeholder"
        :prefix="prefix"
        :suffix="suffix"
        :prepend-inner-icon="prependInnerIcon"
        :loading="loading"
        @update:model-value="handleModelValueUpdate"
      />
    </v-app>
  </div>
</template>

<style>
.vuewidget.vuewrapper {
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
}

.vuewidget.vuewrapper .v-application--wrap {
  display: block;
  flex: inherit;
  min-height: initial;
  min-width: inherit;
  width: 100%;
  overflow-x: hidden;
}

.vuewidget a.v-btn {
  border: inherit;
}

.v-chip.v-size--small {
  margin-top: 8px !important;
  margin-bottom: 5px !important;
}

/* Updated selector for Vuetify 3 */
.v-text-field--variant-outlined .v-field__prefix {
  margin-right: 5px !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 0.9em;
  color: #787878;
}
</style>
