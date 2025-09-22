<script setup>
import { computed, ref } from "vue"

defineOptions({
  name: "CopyInputField",
})

// Props definition
const props = defineProps({
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
      const textField = textFieldRef.value?.$el?.querySelector("input")
      if (textField) {
        textField.select()
        document.execCommand("copy")
      }
    }
  } catch (error) {
    console.error("Failed to copy text:", error)
  }
}

const handleInput = value => {
  emit("update:modelValue", value)
}

const handleFocus = event => {
  event.target.select()
}
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    ref="textFieldRef"
    autocomplete="ignore-field"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
    :prefix="prefix ? `${prefix} ` : ``"
    :suffix="suffix"
    :prepend-inner-icon="prependInnerIcon"
    :loading="loading"
    variant="outlined"
    density="compact"
    readonly
    hide-details
    @update:model-value="handleInput"
    @focus="handleFocus"
  >
    <template v-slot:append-inner>
      <a v-if="!loading" class="material-icons content_copy copy-icon" @click="copyText" title="Copy to clipboard">
        &#xe14d;
      </a>
      <v-progress-circular v-else indeterminate size="20" width="2" />
    </template>
  </v-text-field>
</template>

<style>
a.v-btn {
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

.copy-icon {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  text-decoration: none;
}

.copy-icon:hover {
  opacity: 1;
}
</style>
