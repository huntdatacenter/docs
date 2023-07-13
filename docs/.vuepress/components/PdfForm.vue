<script>
// const fs = require("fs")
import fetch from 'node-fetch'
import { PDFDocument } from 'pdf-lib'
import { countries } from 'country-list-json'
import SignaturePad from "signature_pad"

import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
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
  VTextField,
  VAutocomplete,
  VTextarea,
  VDialog,
  VContainer,
  VNavigationDrawer,
  VDivider,
  VLayout,
} from "vuetify/lib"

export default {
  name: "PdfForm",
  // Components need to be imported above
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
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
    VTextField,
    VAutocomplete,
    VTextarea,
    VDialog,
    VContainer,
    VNavigationDrawer,
    VDivider,
    VLayout,
  },
  props: {
    id: { type: String, default: "applet" },
    url: { type: String, default: null },
    title: { type: String, default: "Agreement" },
    fields: { type: Array, default: null },
    expandOnHover: { type: Boolean, default: false },
  },
  data() {
    return {
      formData: {
        // labuserfullname: null
      },
      signatures: {}, // signature data
      pdfSignatures: {}, // positions in PDF per signature key
      pdfDoc: null,
      pdfFields: [],
      pdfFile: null,
      showPdf: false,
      downloadPdf: false,
      // canvas: null,
      dialogs: {},
      // showSignatures: false,
      signaturePad: null,
      defaultScale: 0.16,
      drawer: null,
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
  },
  watch: {
    selected(val) {
      console.log(val)
    }
  },
  mounted() {
    // Run code when component is mounted
    console.log(this.fields)
    this.drawer = true
  },
  created() {
    // Run code when component is created
    console.log(this.url)

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
    console.log(this.pdfSignatures)

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
                  this.pdfDoc.saveAsBase64({ dataUri: true }).then((base64Data) => {
                    this.browsePdf(base64Data, true)
                  })
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
    isFieldRequired(check) {
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
          // backgroundColor: 'rgb(255, 255, 255)'
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
      console.log(`Open dialog [${key}]: ${this.dialogs[key]}`)

      // TODO render canvas field for signature
      this.$nextTick(() => {
        this.addSignature(key)
      })
    },
    closeDialog(key) {
      console.log(`Close dialog [${key}]: ${this.dialogs[key]}`)
      this.dialogs = Object.assign({}, this.dialogs, { [key]: false })
      // TODO should we changed anything if just closing?
    },
    saveDialog(key) {
      console.log(`Save dialog [${key}]: ${this.dialogs[key]}`)
      this.dialogs = Object.assign({}, this.dialogs, { [key]: false })

      // TODO save signature to variable
      // ...
      this.signatures[key]['signed'] = this.signatures[key]['signature'].isEmpty() ? false : true
      console.log(`Signature signed [${key}]: ${this.signatures[key]['signed']}`)
      this.signatures[key]['pngurl'] = this.signatures[key]['signature'].toDataURL()
      // console.log(this.signatures[key]['pngurl'])
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

            // TODO 
            // 1. check if signatures were listed
            // 2. check if signed
            // 3. consider to also check if signature was started - beginStroke
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
                    // TODO use x: xpos,
                    // x: page.getWidth() / 2 - pngDims.width,
                    x: xpos,
                    y: ypos,
                    // y: page.getHeight() * 0.18,
                    width: pngDims.width,
                    height: pngDims.height,
                  })
                })
              })
              Promise.all(embeddedImages).then(() => {
                // Render PDF when image is added
                console.log('Render PDF with signatures')
                pdfDoc.saveAsBase64({ dataUri: true }).then((base64Data) => {
                  this.browsePdf(base64Data, true, true)
                })
              })

            } else {
              // Render PDF without signature image
              console.log('PDF without signatures')
              pdfDoc.saveAsBase64({ dataUri: true }).then((base64Data) => {
                this.browsePdf(base64Data, true, true)
              })
            }
          })
      } catch (error) {
        console.log(error)
      }
    },
    browsePdf(data = null, show = false, download = false) {
      const pdfDataUri = data
      this.pdfFile = pdfDataUri
      // document.getElementById('pdf').data = this.pdfFile
      // document.getElementById('pdfDownload').href = this.pdfFile
      this.showPdf = show
      this.downloadPdf = download
    },
  },
}
</script>


<!-- HTML goes inside v-app -->
<template>
  <v-layout>
    <!-- 
      class="overflow-hidden"
      style="position: relative;"
    -->
    <!-- 
      :permanent="drawer ? true : false"
      :temporary="drawer ? false : true"
    -->
    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="expandOnHover"
      :permanent="expandOnHover"
      width="600"
      mini-variant-width="600"
    >
      <v-divider></v-divider>
      <form ref="form" @submit.prevent="submit">
        <v-list>
          <v-list-item v-for="item in fields" cols="12" :key="item.key">
            <p v-if="item.field === 'section'" class="font-weight-bold py-0 my-0">{{ item.label }}</p>
            <v-text-field
              v-if="item.field === 'textfield'"
              v-model="formData[item.key]"
              :ref="item.key"
              autocomplete="ignore-field"
              :label="item.label"
              :pattern="item.pattern ? item.pattern : null"
              :title="item.hint ? item.hint : null"
              :minlength="item.minlength ? item.minlength : null"
              :maxlength="item.maxlength ? item.maxlength : null"
              :required="isFieldRequired(item.required)"
              :autocapitalize="item.autocapitalize ? item.autocapitalize : null"
              :suffix="item.suffix ? item.suffix : null"
              :type="item.specialType ? item.specialType : null"
              :hint="item.hint ? item.hint : null"
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
            ></v-autocomplete>
            <v-textarea 
              v-if="item.field === 'textarea'"
              v-model="formData[item.key]"
              :ref="item.key"
              autocomplete="ignore-field"
              :label="item.label"
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
            ></v-textarea>

            <v-card
              v-if="item.field === 'signature'"
              class="px-0 my-4"
              style="width: 100%"
              elevation="0"
              outlined
            >
              <v-card-text>
                <v-row align="center" justify="space-around" class="mr-16">
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
                <v-row align="center" justify="space-around">
                  <v-col cols="11">
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
            </v-card>
          </v-list-item>
          <v-list-item>
            <v-row class="px-2" align="center" justify="space-around">
              <v-col cols="12">
                <v-btn class="mr-8 px-0" type="submit" block color="teal" :disabled="!formFilled">Generate Agreement</v-btn>
              </v-col>
              <v-col v-if="pdfFile && downloadPdf ? true : false" cols="12">
                <v-btn class="mr-8 px-0"  block color="success" :href="pdfFile" :download="`agreement.pdf`" target="_blank">Download Agreement</v-btn>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </form>
    </v-navigation-drawer>
    <!-- <v-container class="fill-height"> -->
    <v-sheet class="pt-0" style="width: 100%">
      <object v-if="pdfFile ? true : false" :data="pdfFile" type="application/pdf" style="width: 100%; height: auto; min-height: 1000px; min-width: 960px;">
        <p>Unable to display PDF file. <a id="pdfDownload" :href="pdfFile">Download</a> instead.</p>
      </object>
    </v-sheet>
    <!-- </v-container> -->

  </v-layout>
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

//.v-label
//  background-color: white 

.v-card:hover
  background-color: red

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

