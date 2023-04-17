<script>
const yaml = require("js-yaml");
const fs = require("fs");
import fetch from 'node-fetch';

import {
  VApp,
  VCol,
  VRow,
  VCard,
  VForm,
  VBtn,
  VSheet,
  VTextField,
  VAutocomplete,
  VCardTitle,
  VCardText,
} from "vuetify/lib"

export default {
  name: "AgreementForm",
  components: {
    PdfForm: () => import('./PdfForm.vue'),
    VApp,
    VCol,
    VRow,
    VCard,
    VForm,
    VSheet,
    VBtn,
    VTextField,
    VAutocomplete,
    VCardTitle,
    VCardText,
  },
  props: {
    // form: { type: String, default: null },
    id: { type: String, default: "applet" },
  },
  data() {
    return {
      agreements: [],
      forms: {},
      selected: null,
    };
  },
  computed: {
    showForm() {
      return this.selected ? true : false
    },
    getFields() {
      return this.selected && this.forms && this.forms[this.selected.value] ? this.forms[this.selected.value].fields : []
    },
  },
  watch: {
    selected(val) {
      console.log(val)
    }
  },
  mounted() {},
  created() {
  
    fetch("/cfg/agreements.yml")
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        const cfg = yaml.load(data);
        console.log(cfg);
        this.agreements = cfg.agreements
        this.forms = cfg.forms
      });
  },
  methods: {
    
  },
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-sheet v-if="showForm" class="pt-4">
        <PdfForm
          :title="selected.text"
          :url="selected.url"
          :fields="getFields"
        />
      </v-sheet>
      <v-row v-else align="center" justify="center" style="margin-top: 24px;">
        <v-col cols="6">
          <v-card class="mb-4">
            <v-card-title>Select Agreement Form</v-card-title>
            <v-card-text>
            <v-row class="ml-3 mb-2" style="padding-left: 24px; padding-right:24px;">
              <v-col cols="12">
                <v-autocomplete
                  v-model="selected"
                  ref="agreement_field"
                  autocomplete="ignore-field"
                  label="Agreement type"
                  placeholder=""
                  :items="agreements"
                  :item-value="item => item"
                  persistent-placeholder
                  outlined
                  dense
                  hide-details
                  @focus="$event.target.select()"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
