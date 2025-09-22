<script>
import {
  VApp,
} from "vuetify/lib";

export default {
  name: "CopyInput",
  components: {
    VApp,
    CopyInputField: () => import('./CopyInputField.vue'),
  },
  props: {
    id: { type: String, default: "applet" },
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
  computed: {},
  created() {},
  methods: {},
};
</script>


<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <CopyInputField
        :value="value"
        :label="label"
        :placeholder="placeholder"
        :prefix="prefix"
        :suffix="suffix"
        :prepend-inner-icon="prependInnerIcon"
        :loading="loading"
      />
    </v-app>
  </div>
</template>

<style lang="sass">
.vuewidget

  &.vuewrapper
    // reset full view - no scroll bars, no full view
    overflow: inherit

    .v-application--wrap
      display: block
      flex: inherit
      min-height: initial
      min-width: inherit
      width: 100%
      overflow-x: hidden

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
