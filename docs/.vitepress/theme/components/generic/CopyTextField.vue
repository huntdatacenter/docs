<script setup>
import { computed, ref, useTemplateRef } from "vue"

defineOptions({
  name: "CopyTextField",
})

// Props definition
const props = defineProps({
  modelValue: { type: [Object, String], default: null }, // Changed from 'value' to 'modelValue'
  label: { type: String, default: "" },
  placeholder: { type: String, default: null },
  prefix: { type: String, default: null },
  suffix: { type: String, default: null },
  prependInnerIcon: { type: String, default: null },
  language: { type: String, default: null },
})

// Emits definition
const emit = defineEmits(["update:modelValue"])

// Template ref
const textFieldRef = ref(null)

// Computed properties
const getRef = computed(() => {
  return `textfield-${Math.random().toString(20).slice(2, 8)}`
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

// <a class="material-icons content_copy" style="cursor: pointer" @click="copyText" title="Copy to clipboard">&#xe14d;</a>
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    ref="textFieldRef"
    autocomplete="ignore-field"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
    :prefix="prefix"
    :suffix="suffix"
    :prepend-inner-icon="prependInnerIcon"
    variant="outlined"
    density="compact"
    readonly
    hide-details
    @update:model-value="$emit('update:modelValue', $event)"
    @focus="handleFocus"
  >
    <template v-slot:append-inner>
      <v-tooltip text="Copy" location="bottom">
        <template v-slot:activator="{ props }">
          <a v-bind="props" style="cursor: pointer" @click="copyText(getRef)">
            <v-icon icon="mdi mdi-content-copy" size="small"></v-icon>
          </a>
        </template>
      </v-tooltip>
    </template>
  </v-text-field>

  <!-- style="background-color: #0d1117; color: #e6edf3" -->
  <!-- <div class="vuewidget vuewrapper copy-text-field" data-vuetify> -->
  <!-- <div :class="`language-${language} vp-adaptive-theme`">
      <button title="Copy Code" class="copy"></button>
      <span class="lang">{{ language }}</span>
      <pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0">
        <code>
          <span class="line">
            <span style="">{{ modelValue }}</span>
          </span>
        </code>
      </pre>
    </div> -->
  <!-- <div class="vp-code-group"> -->

  <!-- NOTE: below is the new variant <====================== -->
  <!-- <div :class="`language-${language} vp-adaptive-theme vuewidget vuewrapper copy-text-field`">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">{{ language }}</span>
    <pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0">
          <code>
            <span v-html="modelValue"></span>
          </code>
        </pre>
  </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<style>
.vuewidget.vuewrapper {
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
}

.vuewidget.vuewrapper .copy-text-field {
  line-height: 0%;
}

/*
.vuewidget.vuewrapper .v-application {
  width: 100%;
}
*/

.vuewidget.vuewrapper .v-application__wrap {
  display: block;
  flex: inherit;
  min-height: initial;
  min-width: inherit;
  width: inherit;
  max-width: inherit;
  overflow-x: hidden;
}

.vuewidget.vuewrapper pre.shiki {
  padding: 0px;
  margin: 0px;
  overflow: hidden;
}
.vuewidget.vuewrapper code {
  /* min-height: inherit; */
  height: auto;
  padding: 0px;
  margin: 0px;
}
</style>
