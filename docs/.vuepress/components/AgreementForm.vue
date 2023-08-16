<script>
const yaml = require("js-yaml");
// const fs = require("fs");
import fetch from 'node-fetch';

import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VToolbarTitle,
  VCol,
  VRow,
  VCard,
  VForm,
  VBtn,
  VSheet,
  VLayout,
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
    VAppBar,
    VAppBarNavIcon,
    VToolbarTitle,
    VCol,
    VRow,
    VCard,
    VForm,
    VSheet,
    VLayout,
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
      expandForm: false,
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
    '$route.query.open': {
      handler(to, from) {
        // console.log(`changed uri: ${from} -> ${to}`)
        this.loadSelectedFromUri()
      }
    },
    // selected(val) {
    //   console.log(val)
    // },
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
        if (this.$route.query.open) {
          this.loadSelectedFromUri()
        }
      });
  },
  methods: {
    loadSelectedFromUri() {
      this.selected = this.$route.query && this.$route.query.open ? this.agreements.find((item) => item.value == this.$route.query.open) : null
    },
    updateUrl(event) {
      const state = window.history.state
      window.history.pushState(state, '', '?open=')

      this.$nextTick(() => {
        const state2 = window.history.state
        const searchURL = new URL(window.location)
        searchURL.searchParams.set('open', event.value)
        window.history.pushState(state2, '', searchURL)
      })
    }
  },
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <!-- <v-app-bar elevation="2" dense>
        <v-app-bar-nav-icon @click="expandForm = !expandForm"></v-app-bar-nav-icon>
        <v-toolbar-title v-if="selected && selected.text ? true : false">{{ selected.text }}</v-toolbar-title>
      </v-app-bar> -->
      <v-layout v-if="showForm" class="d-flex flex-nowrap h-100 w-100 pt-0 align-center justify-center">
        <PdfForm
          v-if="showForm"
          :agreement-tag="selected.value"
          :title="selected.text"
          :url="selected.url"
          :servicedesk="selected.servicedesk"
          :fields="getFields"
        />
        <!-- :expand-form="expandForm" -->
      </v-layout>
      <v-row v-else align="center" justify="center" style="margin-top: 24px;">
        <v-col class="mx-2" style="max-width: 900px">
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
                  @change="updateUrl($event)"
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
    height: 100%

    .v-application
      height: 100%

      .v-application--wrap
        display: block
        flex: inherit
        min-height: initial
        min-width: inherit
        width: 100%
        height: 100%
        overflow-x: hidden

.page-edit
  display: none

.language-text
  display: flex
  padding-top: 8px !important
  padding-bottom: 8px !important

</style>
