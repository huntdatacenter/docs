<script>
import {
  VCol,
  VRow,
  VTextField,
} from "vuetify/lib";

export default {
  name: "CopyInputField",
  components: {
    VCol,
    VRow,
    VTextField,
  },
  props: {
    value: { type: [Object, String], default: null },
    label: { type: String, default: "" },
    placeholder: { type: String, default: null },
    prefix: { type: String, default: null },
    suffix: { type: String, default: null },
    prependInnerIcon: { type: String, default: null },
    loading: { type: Boolean, default: false },
  },
  data() {
    return {}
  },
  computed: {
    getRef() {
      return Math.random().toString(20).slice(2, 6)
    }
  },
  created() {},
  methods: {
    copyText(key) {
      let textToCopy = this.$refs[key].$el.querySelector('input')
      textToCopy.select()
      document.execCommand("copy");
    },
  },
};
</script>


<template>
  <v-text-field
    :value="value"
    :ref="getRef"
    autocomplete="ignore-field"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
    :prefix="`${prefix} `"
    :suffix="suffix"
    :prepend-inner-icon="prependInnerIcon"
    :loading="loading"
    outlined
    dense
    readonly
    hide-details
    @input="$emit('input', $event.target.value)"
    @focus="$event.target.select()"
  >
    <template v-slot:append>
      <a class="material-icons content_copy" style="cursor: pointer;" @click="copyText(getRef)">&#xe14d;</a>
    </template>
  </v-text-field>
</template>

<!--
.vuewidget
  a.v-btn
    border: inherit
-->

<style lang="sass">

a.v-btn
  border: inherit

.v-chip.v-size--small
    margin-top: 8px !important
    margin-bottom: 5px !important

.v-text-field--outlined .v-text-field__prefix
    margin-right: 5px !important
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    font-size: 0.9em
    color: #787878

</style>
