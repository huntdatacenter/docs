<script>
const fs = require("fs")
import fetch from 'node-fetch'
import { PDFDocument } from 'pdf-lib'

import {
  VApp,
  VCol,
  VRow,
  VCard,
  VForm,
  VBtn,
  VTextField,
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
  },
  props: {
    id: { type: String, default: "applet" },
    url: { type: String, default: null },
    label: { type: String, default: null },
  },
  data() {
    return {
      formFields: {
        labuserfullname: null
      },
      pdfDoc: null,
      pdfFields: [],
      showPdf: false,
    }
  },
  computed: {
    // Getters
  },
  mounted() {
    // Run code when component is mounted
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
                  this.pdfFields = doc.getForm()
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
    submitForm() {
      console.log(this.formFields)
      try {
        const read_buf = this.pdfBuffer
        PDFDocument.load(read_buf)
          .then((pdfDoc) => {
            const form = pdfDoc.getForm()

            const nameField = form.getTextField('labuserfullname')
            nameField.setText(this.formFields.labuserfullname)

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
        <iframe id="pdf" title="Agreement" style="width: 100%; height: 100%; min-height: 1000px; min-width: 960px;"></iframe>
      </v-card>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-card v-show="!showPdf" class="pt-4">
            <v-row align="center" justify="center" style="padding-left: 36px; padding-right:36px; margin-bottom: 24px;">
              <v-col cols="12">
                <b>PDF Form</b>
              </v-col>
            </v-row>
            <v-form @submit.prevent>
              <v-row class="ml-3 mb-2" style="padding-left: 24px; padding-right:24px;">
                <v-col cols="12">
                  <v-text-field
                  v-model="formFields.labuserfullname"
                  ref="labuserfullname"
                  autocomplete="ignore-field"
                  label="Full name"
                  placeholder=""
                  persistent-placeholder
                  outlined
                  dense
                  hide-details
                  @focus="$event.target.select()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn type="submit" block class="mt-2" @click="submitForm">{{ label }}</v-btn>
                </v-col>
              </v-row>
            </v-form>
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

