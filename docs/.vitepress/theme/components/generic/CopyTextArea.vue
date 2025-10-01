<script setup>
import { computed, ref, useTemplateRef, nextTick } from "vue"

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

// Computed properties
const getRef = computed(() => {
  return `textarea-${Math.random().toString(20).slice(2, 8)}`
})

// Template ref
const textareaRef = ref(getRef)

const textarea = useTemplateRef(getRef)

// Methods
const copyText = async () => {
  try {
    // Modern clipboard API approach
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(props.modelValue?.toString() || "")
    } else {
      // Fallback for older browsers
      // const textarea = useTemplateRef(getRef)
      if (textarea) {
        textarea.select()
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
  // nextTick(() => {
  //   event.target.select()
  // })
}
// @focus="$event.target.select()"

// <a class="material-icons content_copy" style="cursor: pointer" @click="copyText(getRef)">&#xe14d;</a>
</script>

<template>
  <v-textarea
    :value="modelValue"
    ref="textareaRef"
    autocomplete="ignore-field"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
    :rows="rows"
    variant="outlined"
    density="compact"
    readonly
    hide-details
    @input="$emit('input', $event.target.value)"
    @focus="handleFocus"
  >
    <template v-slot:append-inner>
      <v-tooltip text="Copy" location="bottom">
        <template v-slot:activator="{ props }">
          <a v-bind="props" style="cursor: pointer" @click="copyText(getRef)"
            ><v-icon icon="mdi mdi-content-copy" size="small"></v-icon
          ></a>
        </template>
      </v-tooltip>
    </template>
  </v-textarea>
</template>
