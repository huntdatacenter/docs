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
  VList,
  VListItem,
  VListItemTitle,
  VListItemContent,
  VSheet,
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
  VIcon,
  VTooltip,
  VTextField,
  VAutocomplete,
  VTextarea,
  VDialog,
  VDivider,
} from "vuetify/lib"

export default {
  name: "PdfForm",
  // Components need to be imported above
  components: {
    EmbedPdfViewer: () => import('./EmbedPdfViewer.vue'),
    VApp,
    VCol,
    VRow,
    VList,
    VListItem,
    VListItemTitle,
    VListItemContent,
    VSheet,
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
    VIcon,
    VTooltip,
    VTextField,
    VAutocomplete,
    VTextarea,
    VDialog,
    VDivider,
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
      layout: {
        formCols: 5,
        pdfCols: 7,
        hidePdf: false
      },
      canvasOffsets: {},
      signatures: {}, // signature data
      pdfSignatures: {}, // positions in PDF per signature key
      pdfDoc: null,
      pdfFields: [],
      pdfFile: null,
      pdfPages: 1,
      showPdf: false,
      downloadPdf: false,
      pdfTimestamp: new Date().toISOString(),
      // canvas: null,
      dialogs: {},
      // showSignatures: false,
      signaturePad: null,
      defaultScale: 0.04,
      drawer: null,
      expandForm: true,
    }
  },
  computed: {
    // Getters
    getCountries() {
      return countries ? countries : []
    },
    formFilled() {
      return this.fields.filter(item => item.key).every((item) =>
        this.formData[item.key] || !this.isFieldRequired(item.required) ? true : false
      )
    },
    pdfData() {
      return this.pdfFile ? this.pdfFile : ""
    },
    getPdfTitle() {
      var d = new Date();
      var datestring = d.getFullYear() + ("0"+(d.getMonth()+1)).slice(-2) + ("0" + d.getDate()).slice(-2) + "-" + ("0" + d.getHours()).slice(-2) + ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2)
      return `agreement-${datestring}.pdf`
    },
  },
  watch: {
    expandForm(val) {
      // console.log(val)
      if (val) {
        const layout = { formCols: 12, pdfCols: 12, hidePdf: true}
        this.layout = layout
      } else {
        const layout = { formCols: 5, pdfCols: 7, hidePdf: false}
        this.layout = layout
      }
    }
  },
  mounted() {
    // Run code when component is mounted
  },
  created() {
    // Run code when component is created
    this.fields.filter(item => item.field === "signature").forEach((item) => {
      this.dialogs = Object.assign({}, this.dialogs, { [item.key]: null })
      this.pdfSignatures[item.key] = {
        page: item.page && item.page > 0 ? item.page : 0,
        xpos: item.xpos && item.xpos > 0 ? item.xpos : 0.5,
        ypos: item.ypos && item.ypos > 0 ? item.ypos : 0.5,
        scale: item.scale && item.scale > 0 ? item.scale : this.defaultScale,
      }
      // this.showSignatures = true
    })
    // console.log(this.pdfSignatures)

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
                  // this.browsePdf(this.pdfDoc, true, false)
                  this.pdfDoc.saveAsBase64({ dataUri: true }).then((base64Data) => {
                    const pages = doc.getPages().length
                    this.browsePdf(base64Data, pages, true)
                  })
                  // console.log(doc)
                  let form = doc.getForm()
                  // console.log(form)
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
    getTimestamp() {
      const event = new Date()
      return event.toISOString()
    },
    isFieldRequired(check) {
      return check && check !== 'false' ? true : false
    },
    isBoolTrue(check) {
      return check && check !== 'false' ? true : false
    },
    addSignature(key) {
      // TODO
      // 1. handle reopening of signature dialog
      var wrapper = document.getElementById(`signature-pad--${key}`)
      if (wrapper) {
        const canvas = wrapper.querySelector("canvas")
        
        this.signatures[key] = {}
        this.signatures[key]['signed'] = false
        this.signatures[key]['canvas'] = canvas
        const signaturePad = new SignaturePad(canvas, {
          // It's Necessary to use an opaque color when saving image as JPEG
          // this option can be omitted if only saving as PNG or SVG
          // backgroundColor: 'rgb(255, 255, 255)',
          dotSize: 3.0,
          minWidth: 2.0,
          maxWidth: 4.0,
        })
        this.signatures[key]['signature'] = signaturePad
        signaturePad.addEventListener("beginStroke", () => {
          console.log("Signature started");
        }, { once: true });

        window.addEventListener("resize", this.resizeCanvas)
        this.$nextTick(() => {
          this.resizeCanvas(null, key)
        })
      } else {
        console.log(`No wrapper found for id: signature-pad--${key}`)
      }
    },
    resizeCanvas(event, itemKey = null) {
      // console.log(event)
      const keys = itemKey ? [itemKey] : Object.keys(this.signatures)

      keys.forEach((key) => {
        var wrapper = document.getElementById(`signature-pad--${key}`)
        if (wrapper) {
          var canvas = wrapper.querySelector("canvas")

          // When zoomed out to less than 100%, for some very strange reason,
          // some browsers report devicePixelRatio as less than 1
          // and only part of the canvas is cleared then.
          var ratio =  Math.max(window.devicePixelRatio || 1, 1)

          if (this.canvasOffsets && this.canvasOffsets[key] && this.canvasOffsets[key]['width'] && this.canvasOffsets[key]['height']) {
            var offsetWidth = this.canvasOffsets[key]['width']
            var offsetHeight = this.canvasOffsets[key]['height']
          } else {
            var offsetWidth = canvas.offsetWidth
            var offsetHeight = canvas.offsetHeight
            this.canvasOffsets[key] = {
              width: offsetWidth,
              height: offsetHeight,
            }
          }
          // This part causes the canvas to be cleared
          console.log(`Canvas current size ${offsetWidth} x ${offsetHeight} (device ratio: ${window.devicePixelRatio})`)
          canvas.width = offsetWidth * ratio
          canvas.height = offsetHeight * ratio
          canvas.getContext("2d").scale(ratio, ratio)
          // console.log(`Set signature canvas size ${canvas.width} x ${canvas.height} (ratio: ${ratio})`)

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
      // console.log(`Open dialog [${key}]: ${this.dialogs[key]}`)

      this.$nextTick(() => {
        this.addSignature(key)
      })
    },
    closeDialog(key) {
      // console.log(`Close dialog [${key}]: ${this.dialogs[key]}`)
      this.dialogs = Object.assign({}, this.dialogs, { [key]: false })
      // TODO should we changed anything if just closing?
    },
    saveDialog(key) {
      // console.log(`Save dialog [${key}]: ${this.dialogs[key]}`)
      this.dialogs = Object.assign({}, this.dialogs, { [key]: false })

      // save signature and status to variable
      this.signatures[key]['signed'] = this.signatures[key]['signature'].isEmpty() ? false : true
      console.log(`Signature signed [${key}]: ${this.signatures[key]['signed']}`)
      this.signatures[key]['pngurl'] = this.signatures[key]['signature'].toDataURL()
    },
    submit() {
      console.log(this.formData)
      try {
        const read_buf = this.pdfBuffer
        PDFDocument.load(read_buf)
          .then((pdfDoc) => {
            const form = pdfDoc.getForm()

            this.fields.forEach((item) => {
              if (item.key && !["section", "signature"].includes(item.field) && this.formData[item.key]) {
                let field = form.getTextField(item.key)
                field.setText(this.formData[item.key])
              }
            })

            // Flatten the form once filled up
            form.flatten()

            // TODO 
            // 1. consider to also check if signature was started - beginStroke
            const signedOnly = Object.keys(this.signatures).filter(key => this.signatures[key]['signed'])

            if (signedOnly.length > 0) {
              // Adds signature image then renders PDF

              // Create promises to wait for embedPng tasks
              const embeddedImages = signedOnly.map((key) => {
                const pngurl = this.signatures[key]['pngurl']
                return pdfDoc.embedPng(pngurl).then((img) => {
                  const pngImage = img
                  const pages = pdfDoc.getPages()
                  const pageNum = this.pdfSignatures[key]['page']
                  const page = pages[pageNum]
                  const pngDims = pngImage.scale(this.pdfSignatures[key]['scale'])
                  const xpos = page.getWidth() * this.pdfSignatures[key]['xpos']
                  const ypos = page.getHeight() * this.pdfSignatures[key]['ypos']
                  console.log(`Page ${pageNum} (${page.getWidth()} x ${page.getHeight()}) - insert image ${key}.png (${pngDims.width} x ${pngDims.height}) at position ${xpos} x ${ypos}`)
                  page.drawImage(pngImage, {
                    x: xpos,
                    y: ypos,
                    width: pngDims.width,
                    height: pngDims.height,
                  })
                })
              })
              Promise.all(embeddedImages).then(() => {
                // Render PDF when image is added
                console.log('Render PDF with signatures')
                // this.browsePdf(pdfDoc, true, true)
                pdfDoc.saveAsBase64({ dataUri: true }).then((pdfData) => {
                  const pages = pdfDoc.getPages().length
                  this.browsePdf(pdfData, pages, true, true)
                })
              })

            } else {
              // Render PDF without signature image
              console.log('PDF without signatures')
              // this.browsePdf(pdfDoc, true, true)
              pdfDoc.saveAsBase64({ dataUri: true }).then((pdfData) => {
                const pages = pdfDoc.getPages().length
                this.browsePdf(pdfData, pages, true, true)
              })
            }
          })
      } catch (error) {
        console.log(error)
      }
    },
    browsePdf(data = null, pages = 1, show = false, download = false) {
      const pdfDataUri = data
      this.pdfFile = pdfDataUri
      this.pdfPages = pages
      this.pdfTimestamp = this.getTimestamp()
      this.showPdf = show
      this.$nextTick(() => {
        this.downloadPdf = download
      })
    },
    showTooltip(text) {
      console.log(text)
    },
  },
}
</script>


<!-- HTML goes inside v-app -->
<template>
    <v-sheet class="d-flex flex-xs-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap h-100 w-100 align-self-center" style="max-width: 1680px">
      <v-sheet class="flex-grow-1 flex-shrink-0 mx-2 px-2 h-100 h-xs-auto h-sm-auto overflow-y-auto col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style="min-width: 300px; max-width: 100%;">
        <form ref="form" @submit.prevent="submit">
          <v-list>
            <v-list-item>
              <p class="font-weight-bold py-0 my-0">{{ title }}</p>
            </v-list-item>

            <template v-for="item in fields">
              <v-divider v-if="item.field === 'divider'" :key="item.key"></v-divider>
              <v-list-item v-if="item.field === 'section'" :key="item.key" cols="12" dense>
                <p class="text-darken-1 py-0 mt-0 mb-2">{{ item.label }}</p>
              </v-list-item>
              <v-list-item v-if="item.field === 'textfield'" :key="item.key" cols="12" dense>
                <v-text-field
                  v-model="formData[item.key]"
                  class="mb-3"
                  :ref="item.key"
                  autocomplete="ignore-field"
                  :pattern="item.pattern ? item.pattern : null"
                  :title="item.hint ? item.hint : null"
                  :minlength="item.minlength ? item.minlength : null"
                  :maxlength="item.maxlength ? item.maxlength : null"
                  :min="item.min && item.specialType === 'number' ? item.min : null"
                  :max="item.max && item.specialType === 'number' ? item.max : null"
                  :required="isFieldRequired(item.required)"
                  :autocapitalize="item.autocapitalize ? item.autocapitalize : null"
                  :suffix="item.suffix ? item.suffix : null"
                  :type="item.specialType ? item.specialType : null"
                  :hint="item.hint ? item.hint : null"
                  :persistent-hint="
                    item.hint && formData[item.key] ? true : false
                  "
                  :placeholder="item.placeholder ? item.placeholder : ''"
                  persistent-placeholder
                  outlined
                  dense
                  :hide-details="formData[item.key] ? false : 'auto'"
                  @focus="$event.target.select()"
                >
                  <template v-slot:label>
                    {{ item.label }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                  </template>
                  <template v-if="item.tooltip ? true : false" v-slot:append>
                    <!-- <v-btn
                      icon
                      @click="showTooltip(item.tooltip)"
                      x-small
                    >
                      <v-icon class="material-icons">info</v-icon>
                    </v-btn> -->
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <!-- @click="showTooltip(item.tooltip)" -->
                        <v-btn
                          icon
                          x-small
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon class="material-icons">info</v-icon>
                        </v-btn>
                      </template>
                      <span>{{ item.tooltip }}</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-list-item>
              <v-list-item v-if="item.field === 'autocompleteone'" :key="item.key" cols="12" dense>
                <v-autocomplete
                  v-model="formData[item.key]"
                  class="mb-3"
                  :ref="item.key"
                  autocomplete="ignore-field"
                  :items="item.options"
                  :required="isFieldRequired(item.required)"
                  :clearable="isBoolTrue(item.clearable)"
                  clear-icon=""
                  placeholder=""
                  persistent-placeholder
                  outlined
                  dense
                  hide-details
                  @focus="$event.target.select()"
                >
                  <template v-slot:label>
                    {{ item.label }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                  </template>
                  <template v-slot:append>
                    <div v-if="isBoolTrue(item.clearable) && formData[item.key] ? true : false" class="v-input__icon v-input__icon--clear">
                      <i @click.stop="formData[item.key] = null" type="button" aria-label="clear icon" tabindex="-1" class="v-icon notranslate v-icon--link material-icons theme--dark primary--text">
                        close
                      </i>
                    </div>
                  </template>
                </v-autocomplete>
              </v-list-item>
              <v-list-item v-if="item.field === 'countries'" :key="item.key" cols="12" dense>
                <v-autocomplete
                  v-model="formData[item.key]"
                  class="mb-3"
                  :ref="item.key"
                  autocomplete="ignore-field"
                  :items="getCountries"
                  :item-text="item => `${item.name} ${item.flag}`"
                  :item-value="item => item.name"
                  :required="isFieldRequired(item.required)"
                  placeholder=""
                  persistent-placeholder
                  outlined
                  dense
                  hide-details
                  @focus="$event.target.select()"
                >
                  <template v-slot:label>
                    {{ item.label }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                  </template>
                </v-autocomplete>
              </v-list-item>
              <v-list-item v-if="item.field === 'textarea'" :key="item.key" cols="12" dense>
                <v-textarea
                  v-model="formData[item.key]"
                  class="mb-3"
                  :ref="item.key"
                  autocomplete="ignore-field"
                  :pattern="item.pattern ? item.pattern : null"
                  :title="item.hint ? item.hint : null"
                  :minlength="item.minlength ? item.minlength : null"
                  :maxlength="item.maxlength ? item.maxlength : null"
                  :required="isFieldRequired(item.required)"
                  :hint="item.hint ? item.hint : null"
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
                >
                  <template v-slot:label>
                    {{ item.label }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                  </template>
                </v-textarea>
              </v-list-item>
              <v-list-item v-if="item.field === 'signature'" :key="item.key" cols="12" dense>
                <v-card
                  class="px-0 mb-3"
                  style="width: 100%"
                  elevation="0"
                  outlined
                >
                  <v-card-text>
                    <v-row justify="space-between" class="mr-xs-12 pr-sm-8" no-gutters>
                      <v-col cols="8">
                        <div class="font-weight-bold">{{ item.label }}</div>
                      </v-col>
                      <v-col cols="4">
                        <v-btn
                          color="primary"
                          block
                          @click="openDialog(item.key)"
                        >
                          Add signature
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row align="center" justify="space-between" class="mr-xs-12 pr-sm-8" no-gutters>
                      <v-col cols="12" style="height: 40px;">
                        <div v-if="signatures && signatures[item.key] && signatures[item.key]['signed']">
                          <img :src="signatures[item.key]['pngurl']" style="max-height: 40px;" />
                        </div>
                        <div v-else>
                          Add digital signature now or sign later
                        </div>
                      </v-col>
                    </v-row>

                    <v-dialog
                      v-model="dialogs[item.key]"
                      fullscreen
                      hide-overlay
                      transition="dialog-bottom-transition"
                    >
                      <v-card class="prevent-select" style="height: 100%">
                        <v-toolbar>
                          <v-toolbar-title>{{ item.label }}</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            @click="closeDialog(item.key)"
                          >
                            Close
                          </v-btn>
                          <v-toolbar-items>
                            <v-btn
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
                </v-card>
              </v-list-item>
            </template>
            <v-list-item>
              <v-row class="px-2" align="center" justify="space-around">
                <v-col cols="12">
                  <v-btn class="mr-8 px-0" type="submit" block color="teal" :disabled="!formFilled">Generate Agreement</v-btn>
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <v-row class="px-2" align="center" justify="space-around">
                <v-col cols="12">
                  <v-btn class="mr-8 px-0"  block color="success" :href="pdfFile" :download="getPdfTitle" target="_blank" :disabled="pdfFile && downloadPdf ? false : true">Download Agreement</v-btn>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </form>
      </v-sheet>
      <v-sheet class="flex-grow-1 flex-shrink-1 mx-2 px-2 h-100 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style="min-width: 300px; max-width: 100%;">
        <EmbedPdfViewer v-if="showPdf ? true : false" :source="pdfData" :pages="pdfPages" height="500" />
      </v-sheet>
    </v-sheet>

</template>

<!-- SASS is auto-translated in CSS style -->
<style lang="sass">

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

.prevent-select
  -webkit-user-select: none
  -ms-user-select: none
  user-select: none

//.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner
//  margin-top: 2px !important

</style>

