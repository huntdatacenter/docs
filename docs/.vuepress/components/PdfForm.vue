<script>
const fs = require("fs")
import fetch from 'node-fetch'
import { PDFDocument } from 'pdf-lib'
import { countries } from 'country-list-json'

import {
  VApp,
  VCol,
  VRow,
  VCard,
  VForm,
  VBtn,
  VTextField,
  VAutocomplete,
} from "vuetify/lib"

export default {
  name: "PdfForm",
  // Components need to be imported above
  components: {
    VApp,
    VCol,
    VRow,
    VCard,
    VForm,
    VBtn,
    VTextField,
    VAutocomplete,
  },
  props: {
    id: { type: String, default: "applet" },
    url: { type: String, default: null },
    title: { type: String, default: "Agreement" },
    fields: { type: Array, default: null },
  },
  data() {
    return {
      formData: {
        // labuserfullname: null
      },
      pdfDoc: null,
      pdfFields: [],
      showPdf: false,
    }
  },
  computed: {
    // Getters
    getCountries() {
      return countries ? countries : []
    },
    formFilled() {
      return this.fields.every((item) =>
        this.formData[item.key] || item.optional ? true : false
      );
    },
  },
  mounted() {
    // Run code when component is mounted
    console.log(this.fields)
  },
  created() {
    // Run code when component is created
    console.log(this.url)

    if (this.url) {
      this.loadPdf(this.url)
    }
  },

  methods: {
    // Functions that can be called with parameters
    loadPdf(url) {
      try {
        fetch(url)
          .then((response) => {
            if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
            return response.arrayBuffer()
          })
          .then((buffer) => {
            this.pdfBuffer = buffer
            try {
              const read_buf = this.pdfBuffer
              PDFDocument.load(read_buf)
                .then((doc) => {
                  this.pdfDoc = doc
                  console.log(doc)
                  let form = doc.getForm()
                  console.log(form)
                  this.pdfFields = form.getFields().map(field => field.getName())
                  console.log(this.pdfFields)
                })
            } catch (error) {
              console.log('Failed to read fields')
              console.log(error)
            }
          })
      } catch (error) {
        console.log(error)
      }
    },
    submit() {
      console.log(this.formData)
      try {
        const read_buf = this.pdfBuffer
        PDFDocument.load(read_buf)
          .then((pdfDoc) => {
            const form = pdfDoc.getForm()

            this.fields.forEach((item) => {
              let field = form.getTextField(item.key)
              field.setText(this.formData[item.key])
            })

            pdfDoc.saveAsBase64({ dataUri: true }).then((data) => {
              const pdfDataUri = data
              document.getElementById('pdf').src = pdfDataUri
              this.showPdf = true
            })
          })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<!-- HTML goes inside v-app -->
<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-card v-show="showPdf" class="pt-4">
        <!--  class="customiframe" frameBorder="0" -->
        <iframe id="pdf" title="Agreement" style="width: 100%; height: auto; min-height: 1000px; min-width: 960px;"></iframe>
      </v-card>
      <v-row v-show="!showPdf" align="center" justify="center" style="margin-top: 24px;">
        <v-col cols="6">
          <v-card class="pt-4">
            <v-row align="center" justify="center" style="padding-left: 36px; padding-right:36px; margin-bottom: 24px;">
              <v-col cols="12">
                <b>{{ title }}</b>
              </v-col>
            </v-row>
            <form ref="form" @submit.prevent="submit">
              <v-row class="ml-3 mb-2" style="padding-left: 24px; padding-right:24px;">
                <v-col v-for="item in fields" cols="12" :key="item.key">
                  <v-text-field
                    v-if="item.field === 'textfield'"
                    v-model="formData[item.key]"
                    :ref="item.key"
                    autocomplete="ignore-field"
                    :label="item.label"
                    :pattern="item.pattern ? item.pattern : null"
                    :title="item.hint ? item.hint : null"
                    :hint="item.hint ? item.hint : null"
                    :suffix="item.suffix ? item.suffix : null"
                    :persistent-hint="
                      item.hint && formData[item.key] ? true : false
                    "
                    placeholder=""
                    persistent-placeholder
                    outlined
                    dense
                    :hide-details="formData[item.key] ? false : 'auto'"
                    @focus="$event.target.select()"
                  ></v-text-field>
                  <v-autocomplete
                    v-else-if="item.field === 'countries'"
                    v-model="formData[item.key]"
                    :ref="item.key"
                    autocomplete="ignore-field"
                    :label="item.label"
                    placeholder=""
                    :items="getCountries"
                    :item-text="item => `${item.name} ${item.flag}`"
                    :item-value="item => item.name"
                    persistent-placeholder
                    outlined
                    dense
                    hide-details
                    @focus="$event.target.select()"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                  <!-- <v-btn type="submit" block class="mt-2" @click="submitForm">Generate Agreement</v-btn> -->
                  <v-btn type="submit" block class="mt-2" :disabled="!formFilled">Generate Agreement</v-btn>
                </v-col>
              </v-row>
            </form>
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

.page-edit
  display: none

.language-text
  display: flex
  padding-top: 8px !important
  padding-bottom: 8px !important

</style>

