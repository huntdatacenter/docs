<script setup>
import { computed, ref, useTemplateRef } from "vue"

defineOptions({
  name: "CopyTextArea",
})

// Props definition
const props = defineProps({
  modelValue: { type: [Object, String], default: null }, // Changed from 'value' to 'modelValue'
  label: { type: String, default: "" },
  placeholder: { type: String, default: null },
  prefix: { type: String, default: null },
  suffix: { type: String, default: null },
  prependInnerIcon: { type: String, default: null },
})

// Emits definition
const emit = defineEmits(["update:modelValue"])

// Template ref
const textFieldRef = ref(null)

// Computed properties
const getRef = computed(() => {
  return Math.random().toString(20).slice(2, 6)
})

// Methods
const copyText = async () => {
  try {
    // Modern clipboard API approach
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(props.modelValue?.toString() || "")
    } else {
      // Fallback for older browsers
      const textField = useTemplateRef(getRef)
      if (textField) {
        textField.select()
        document.execCommand("copy")
      }
    }
  } catch (error) {
    console.error("Failed to copy text:", error)
  }
}

const handleInput = event => {
  emit("update:modelValue", event.target.value)
}

const handleFocus = event => {
  event.target.select()
}

// <a class="material-icons content_copy" style="cursor: pointer" @click="copyText(getRef)">&#xe14d;</a>
</script>

<template>
  <v-textarea
    :value="modelValue"
    :ref="getRef"
    autocomplete="ignore-field"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
    :rows="rows"
    outlined
    dense
    readonly
    hide-details
    @input="$emit('input', $event.target.value)"
    @focus="$event.target.select()"
  >
    <template v-slot:append>
      <a style="cursor: pointer" @click="copyText(getRef)"
        ><v-icon icon="mdi mdi-content-copy" size="small"></v-icon
      ></a>
    </template>
  </v-textarea>
</template>
