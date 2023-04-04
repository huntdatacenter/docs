<script>
import {
  VApp,
  VCol,
  VRow,
  VCard,
  VBtn,
  VTextField,
} from "vuetify/lib";

export default {
  name: "PdfForm",
  // Components need to be imported above
  components: {
    VApp,
    VCol,
    VRow,
    VCard,
    VBtn,
    VTextField,
  },
  props: {
    id: { type: String, default: "applet" },
    label: { type: String, default: null },
  },
  data() {
    return {
      username: null
    };
  },
  computed: {
    // Add code
  },
  mounted() {
    // Add code
  },
  created() {
    // Add code
  },
  methods: {
    // Add code
  },
};
</script>

<!-- HTML goes inside v-app -->
<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-card class="pt-4">
        <v-row class="ml-3 mb-2">
          <v-col cols="12">
            <v-text-field
             v-model="username"
             ref="username"
             autocomplete="ignore-field"
             label="Username"
             placeholder=""
             persistent-placeholder
             outlined
             dense
             readonly
             hide-details
             @focus="$event.target.select()"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn>{{ label }}</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-app>
  </div>
</template>

<!-- SASS is auto-translated in CSS style -->
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

.last-updated
  display: none

.language-text
  display: flex
  padding-top: 8px !important
  padding-bottom: 8px !important

</style>

