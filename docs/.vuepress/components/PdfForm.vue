<script>
// const fs = require("fs")
import fetch from 'node-fetch'
import { PDFDocument } from 'pdf-lib'
import { countries } from 'country-list-json'
import SignaturePad from "signature_pad"

import {
  VApp,
  VCol,
  VRow,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VSpacer,
  VForm,
  VBtn,
  VTextField,
  VAutocomplete,
  VTextarea,
  VDialog,
} from "vuetify/lib"

export default {
  name: "PdfForm",
  // Components need to be imported above
  components: {
    VApp,
    VCol,
    VRow,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VToolbar,
    VToolbarTitle,
    VToolbarItems,
    VSpacer,
    VForm,
    VBtn,
    VTextField,
    VAutocomplete,
    VTextarea,
    VDialog,
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
      signatures: {
        // signature data
      },
      pdfDoc: null,
      pdfFields: [],
      showPdf: false,
      // canvas: null,
      dialogs: {},
      showSignatures: false,
      signaturePad: null,
    }
  },
  computed: {
    // Getters
    getCountries() {
      return countries ? countries : []
    },
    formFilled() {
      return this.fields.filter(item => item.key).every((item) =>
        this.formData[item.key] || item.optional ? true : false
      )
    },
  },
  watch: {
    selected(val) {
      console.log(val)
    }
  },
  mounted() {
    // Run code when component is mounted
    console.log(this.fields)
  },
  created() {
    // Run code when component is created
    console.log(this.url)

    this.fields.filter(item => item.field === "signature").every((item) => {
      const itemKey = item.key
      this.dialogs = Object.assign({}, this.dialogs, { [itemKey]: null })
      this.showSignatures = true
    })

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
    addSignature(key) {
      var wrapper = document.getElementById(`signature-pad--${key}`)
      if (wrapper) {
        const canvas = wrapper.querySelector("canvas")
        
        this.signatures[key] = {}
        this.signatures[key]['canvas'] = canvas
        const signaturePad = new SignaturePad(canvas, {
          // It's Necessary to use an opaque color when saving image as JPEG
          // this option can be omitted if only saving as PNG or SVG
          // backgroundColor: 'rgb(255, 255, 255)'
        })
        this.signatures[key]['signature'] = signaturePad
        signaturePad.addEventListener("beginStroke", () => {
          console.log("Signature started");
        }, { once: true });
        // TODO fix resize of canvas
        // window.onresize = this.resizeCanvas
        window.addEventListener("resize", this.resizeCanvas)
        this.$nextTick(() => {
          this.resizeCanvas(null, key)
        })
      } else {
        console.log(`No wrapper found for id: signature-pad--${key}`)
      }
    },
    resizeCanvas(event, itemKey = null) {
      console.log(event)
      const keys = itemKey ? [itemKey] : Object.keys(this.signatures)

      keys.forEach((key) => {
        var wrapper = document.getElementById(`signature-pad--${key}`)
        if (wrapper) {
          var canvas = wrapper.querySelector("canvas")
          // var canvas = this.signatures[key]['canvas']

          // When zoomed out to less than 100%, for some very strange reason,
          // some browsers report devicePixelRatio as less than 1
          // and only part of the canvas is cleared then.
          var ratio =  Math.max(window.devicePixelRatio || 1, 1)

          // This part causes the canvas to be cleared
          console.log(`Canvas current size ${canvas.offsetWidth} x ${canvas.offsetHeight} (device ratio: ${window.devicePixelRatio})`)
          canvas.width = canvas.offsetWidth * ratio
          canvas.height = canvas.offsetHeight * ratio
          canvas.getContext("2d").scale(ratio, ratio)
          console.log(`Set signature canvas size ${canvas.width} x ${canvas.height} (ratio: ${ratio})`)

          // This library does not listen for canvas changes, so after the canvas is automatically
          // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
          // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
          // that the state of this library is consistent with visual state of the canvas, you
          // have to clear it manually.
          this.signatures[key]['signature'].clear()
        } else {
          console.log(`No wrapper found for id: signature-pad--${key}`)
        }
      })
    },
    openDialog(key) {
      this.dialogs = Object.assign({}, this.dialogs, { [key]: true })
      console.log(`Open dialog [${key}]: ${this.dialogs[key]}`)

      // TODO render canvas field for signature
      this.$nextTick(() => {
        this.addSignature(key)
      })
    },
    closeDialog(key) {
      console.log(`Close dialog [${key}]: ${this.dialogs[key]}`)
      this.dialogs = Object.assign({}, this.dialogs, { [key]: false })
    },
    saveDialog(key) {
      console.log(`Save dialog [${key}]: ${this.dialogs[key]}`)
      this.dialogs = Object.assign({}, this.dialogs, { [key]: false })

      // TODO save signature to variable
      // ...
      console.log(`Signature pad - empty: ${this.signatures[key]['signature'].isEmpty()}`)
      this.signatures[key]['png'] = this.signatures[key]['signature'].toDataURL()
      // console.log(this.signatures[key]['png'])
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

            // TODO 
            // 1. check if there is image
            // 2. check if signature was added
            const check = true
            if (check) {
              // Adds signature image then renders PDF
              const pngurl = this.signaturePad.toDataURL()
              console.log(pngurl)
              pdfDoc.embedPng(pngurl).then((img) => {
                const pngImage = img
                const pngDims = pngImage.scale(0.2)
                const pages = pdfDoc.getPages()
                console.log(pages.length)
                const page = pages[1]
                console.log('render image into page')
                console.log(`Page ${page.getWidth()} x ${page.getHeight()} - ${pngDims.width} x ${pngDims.height}`)
                page.drawImage(pngImage, {
                  // x: 390, 
                  // x: page.getWidth() / 2 - 150,
                  // y: page.getHeight() - 580, //  - pngDims.height,
                  x: page.getWidth() / 2 - pngDims.width,
                  y: page.getHeight() * 0.18,
                  width: pngDims.width,
                  height: pngDims.height,
                })
                // Render PDF when image is added
                pdfDoc.saveAsBase64({ dataUri: true }).then((data) => {
                  const pdfDataUri = data
                  document.getElementById('pdf').src = pdfDataUri
                  this.showPdf = true
                })
              })
            } else {
              // Render PDF without signature image
              pdfDoc.saveAsBase64({ dataUri: true }).then((data) => {
                const pdfDataUri = data
                document.getElementById('pdf').src = pdfDataUri
                this.showPdf = true
              })
            }
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
                    :minlength="item.minlength ? item.minlength : null"
                    :maxlength="item.maxlength ? item.maxlength : null"
                    :required="item.required && item.required !== 'false' ? true : false"
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
                  <v-textarea 
                    v-if="item.field === 'textarea'"
                    v-model="formData[item.key]"
                    :ref="item.key"
                    autocomplete="ignore-field"
                    :label="item.label"
                    :hint="item.hint ? item.hint : null"
                    :pattern="item.pattern ? item.pattern : null"
                    :title="item.hint ? item.hint : null"
                    :suffix="item.suffix ? item.suffix : null"
                    :persistent-hint="
                      item.hint && formData[item.key] ? true : false
                    "
                    placeholder=""
                    persistent-placeholder
                    outlined
                    dense
                    :rows="1"
                    :hide-details="formData[item.key] ? false : 'auto'"
                    @focus="$event.target.select()"
                  ></v-textarea>

                  <v-card
                    v-if="item.field === 'signature'"
                    v-show="showSignatures"
                    :id="`v-card--${item.key}`"
                    class="v-text-field--outlined rounded"
                  >
                    <!-- <div class="v-input__control"> -->
                      <!-- <div class="v-input__slot"> -->
                        <!-- <fieldset aria-hidden="true">
                          <legend style="width: 60px;">
                            <span class="notranslate">​</span>
                          </legend>
                        </fieldset> -->
                        <!-- <div class="v-card__title v-text-field--outlined v-input--dense" style=""><label :for="`v-card--${item.key}`" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">{{ item.label }}</label></div> -->
                        <!-- <div><label for="input-97" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">Full Name</label><input autocomplete="ignore-field" id="input-97" placeholder="" type="text"></div> -->
                        <v-card-subtitle>{{ item.label }}</v-card-subtitle>
                        <v-card-text class="v-text-field__slot">
                          <!-- <label :for="`v-card--${item.key}`" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">{{ item.label }}</label> -->
                          <v-row>
                            <v-col cols="8">
                              Here goes image of signature
                            </v-col>
                            <v-col cols="4">
                              <v-btn
                                color="primary"
                                dark
                                @click="openDialog(item.key)"
                              >
                                Add signature
                              </v-btn>
                            </v-col>
                          </v-row>
                          
                          <v-dialog
                            v-model="dialogs[item.key]"
                            fullscreen
                            hide-overlay
                            transition="dialog-bottom-transition"
                          >
                            <v-card style="height: 100%">
                              <v-toolbar
                                dark
                                color="primary"
                              >
                                <v-toolbar-title>{{ item.label }}</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn
                                  icon
                                  dark
                                  @click="closeDialog(item.key)"
                                >
                                  <!-- <v-icon>mdi-close</v-icon> -->
                                  Close
                                </v-btn>
                                <v-toolbar-items>
                                  <v-btn
                                    dark
                                    text
                                    @click="saveDialog(item.key)"
                                  >
                                    Save
                                  </v-btn>
                                </v-toolbar-items>
                              </v-toolbar>
                              <div class="signature-card">
                                <div :id="`signature-pad--${item.key}`" class="signature-pad mt-8">
                                  <div class="signature-pad--body">
                                    <canvas></canvas>
                                  </div>
                                  <div class="signature-pad--footer">
                                    <div class="description">Sign above</div>
                                  </div>
                                </div>
                              </div>
                            </v-card>
                          </v-dialog>
                        </v-card-text>
                      <!-- </div> -->
                    <!-- </div> -->
                  </v-card>
                  <p v-if="item.field === 'section'" class="font-weight-bold py-0 my-0">{{ item.label }}</p>
                </v-col>
                <!-- <v-col cols="12">
                  <div id="signature-pad" class="signature-pad">
                    <div class="signature-pad--body">
                      <canvas></canvas>
                    </div>
                    <div class="signature-pad--footer">
                      <div class="description">Sign above</div>
                    </div>
                  </div>
                </v-col> -->
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

.v-label
  background-color: white 

.signature-card
  display: flex
  width: 100%
  align-content: center
  justify-content: center

.signature-pad
  font-size: 10px
  width: 100%
  height: 100%
  max-width: 700px
  max-height: 460px
  border: 1px solid #e8e8e8
  background-color: #fff
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.08) inset
  border-radius: 4px
  padding: 16px

.signature-pad::before, .signature-pad::after
  position: absolute
  z-index: -1
  content: ""
  width: 40%
  height: 10px
  bottom: 10px
  background: transparent
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4)

.signature-pad::before
  left: 20px
  -webkit-transform: skew(-3deg) rotate(-3deg)
          transform: skew(-3deg) rotate(-3deg)

.signature-pad::after
  right: 20px
  -webkit-transform: skew(3deg) rotate(3deg)
          transform: skew(3deg) rotate(3deg)

.signature-pad--body
  border: 1px solid #f4f4f4

.signature-pad--body canvas
  width: 100%
  height: 100%
  border-radius: 4px
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset

.signature-pad--footer
  color: #C3C3C3
  text-align: center
  font-size: 1.2em
  margin-top: 8px


</style>

