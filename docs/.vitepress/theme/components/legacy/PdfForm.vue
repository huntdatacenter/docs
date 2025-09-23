<script setup>
import { ref, computed, watch, onMounted, nextTick, defineAsyncComponent } from "vue"
import YAML from "yaml"
import { PDFDocument } from "pdf-lib"
import { countries } from "country-list-json"
import SignaturePad from "signature_pad"

// Dynamic import for components
const EmbedPdfViewer = defineAsyncComponent(() => import("./EmbedPdfViewer.vue"))

// Props
const props = defineProps({
  id: { type: String, default: "applet" },
  agreementTag: { type: String, default: null },
  url: { type: String, default: null },
  title: { type: String, default: "Agreement" },
  servicedesk: { type: String, default: null },
  fields: { type: Array, default: null },
})

// Reactive data
const formData = ref({})
const layout = ref({
  formCols: 5,
  pdfCols: 7,
  hidePdf: false,
})
const datemodal = ref({})
const datedialog = ref({})
const canvasOffsets = ref({})
const signatures = ref({}) // signature data
const pdfSignatures = ref({}) // positions in PDF per signature key
const pdfDoc = ref(null)
const renderedFields = ref(null)
const pdfFields = ref([])
const pdfFile = ref(null)
const pdfDownloadClicked = ref(false)
const pdfPages = ref(1)
const showPdf = ref(false)
const downloadPdf = ref(false)
const pdfTimestamp = ref(new Date().toISOString())
const dialogs = ref({})
const signaturePad = ref(null)
const defaultScale = ref(0.04)
const drawer = ref(null)
const expandForm = ref(true)
const serviceDeskDialog = ref(false)
const data = ref({})
const pdfBuffer = ref(null)
const form = ref(null)

// Computed properties
const getCountries = computed(() => {
  return countries ? countries : []
})

const formFilled = computed(() => {
  return props.fields
    .filter(item => item.key)
    .every(item => (formData.value[item.key] || !isFieldRequired(item.required) ? true : false))
})

const pdfData = computed(() => {
  return pdfFile.value ? pdfFile.value : ""
})

const getPdfTitle = computed(() => {
  var d = new Date()
  var datestring =
    d.getFullYear() +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + d.getHours()).slice(-2) +
    ("0" + d.getMinutes()).slice(-2) +
    ("0" + d.getSeconds()).slice(-2)
  return `agreement-${datestring}.pdf`
})

const getData = computed(() => {
  return data.value && data.value[props.servicedesk] ? data.value[props.servicedesk] : null
})

const showServiceDesk = computed(() => {
  return data.value && props.servicedesk && data.value[props.servicedesk]
})

const getRecipient = computed(() => {
  return data.value && data.value[props.servicedesk] && data.value[props.servicedesk]["recipient"]
    ? data.value[props.servicedesk]["recipient"]
    : "cloud.support+hunt-cloud-request@hunt.ntnu.no"
})

// Methods
const loadPdf = url => {
  try {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
        return response.arrayBuffer()
      })
      .then(buffer => {
        pdfBuffer.value = buffer
        try {
          const read_buf = pdfBuffer.value
          PDFDocument.load(read_buf).then(doc => {
            pdfDoc.value = doc
            pdfDoc.value.saveAsBase64({ dataUri: true }).then(base64Data => {
              const pages = doc.getPages().length
              browsePdf(base64Data, pages, true)
            })
            let pdfForm = doc.getForm()
            pdfFields.value = pdfForm.getFields().map(field => field.getName())
            console.log(pdfFields.value)
          })
        } catch (error) {
          console.log("Failed to read fields")
          console.log(error)
        }
      })
  } catch (error) {
    console.log(error)
  }
}

const getTimestamp = () => {
  const event = new Date()
  return event.toISOString()
}

const isFieldRequired = check => {
  return check && check !== "false" ? true : false
}

const isBoolTrue = check => {
  return check && check !== "false" ? true : false
}

const addSignature = key => {
  var wrapper = document.getElementById(`signature-pad--${key}`)
  if (wrapper) {
    const canvas = wrapper.querySelector("canvas")

    signatures.value[key] = {}
    signatures.value[key]["signed"] = false
    signatures.value[key]["canvas"] = canvas
    const pad = new SignaturePad(canvas, {
      dotSize: 3.0,
      minWidth: 2.0,
      maxWidth: 4.0,
    })
    signatures.value[key]["signature"] = pad
    pad.addEventListener(
      "beginStroke",
      () => {
        console.log("Signature started")
      },
      { once: true },
    )

    window.addEventListener("resize", resizeCanvas)
    nextTick(() => {
      resizeCanvas(null, key)
    })
  } else {
    console.log(`No wrapper found for id: signature-pad--${key}`)
  }
}

const resizeCanvas = (event, itemKey = null) => {
  const keys = itemKey ? [itemKey] : Object.keys(signatures.value)

  keys.forEach(key => {
    var wrapper = document.getElementById(`signature-pad--${key}`)
    if (wrapper) {
      var canvas = wrapper.querySelector("canvas")
      var ratio = Math.max(window.devicePixelRatio || 1, 1)

      if (
        canvasOffsets.value &&
        canvasOffsets.value[key] &&
        canvasOffsets.value[key]["width"] &&
        canvasOffsets.value[key]["height"]
      ) {
        var offsetWidth = canvasOffsets.value[key]["width"]
        var offsetHeight = canvasOffsets.value[key]["height"]
      } else {
        var offsetWidth = canvas.offsetWidth
        var offsetHeight = canvas.offsetHeight
        canvasOffsets.value[key] = {
          width: offsetWidth,
          height: offsetHeight,
        }
      }
      console.log(`Canvas current size ${offsetWidth} x ${offsetHeight} (device ratio: ${window.devicePixelRatio})`)
      canvas.width = offsetWidth * ratio
      canvas.height = offsetHeight * ratio
      canvas.getContext("2d").scale(ratio, ratio)

      signatures.value[key]["signature"].clear()
    } else {
      console.log(`No wrapper found for id: signature-pad--${key}`)
    }
  })
}

const openDialog = key => {
  dialogs.value = Object.assign({}, dialogs.value, { [key]: true })

  nextTick(() => {
    addSignature(key)
  })
}

const closeDialog = key => {
  dialogs.value = Object.assign({}, dialogs.value, { [key]: false })
}

const saveDialog = key => {
  dialogs.value = Object.assign({}, dialogs.value, { [key]: false })

  signatures.value[key]["signed"] = signatures.value[key]["signature"].isEmpty() ? false : true
  console.log(`Signature signed [${key}]: ${signatures.value[key]["signed"]}`)
  signatures.value[key]["pngurl"] = signatures.value[key]["signature"].toDataURL()
}

const fetchAgreementFormCache = key => {
  let fields = {}
  const jsonData = key ? localStorage.getItem(key) : null
  try {
    fields = jsonData ? JSON.parse(jsonData) : {}
  } catch (ex) {
    console.log("Failed to fetch data from cache")
  }
  return fields
}

const updateAgreementFormCache = (key, fields) => {
  if (!localStorage.agreementFields) {
    localStorage.agreementFields = {}
  }
  if (key && fields) {
    localStorage.setItem(key, JSON.stringify(fields))
  }
}

const submit = () => {
  try {
    const read_buf = pdfBuffer.value
    PDFDocument.load(read_buf).then(pdfDoc => {
      const pdfForm = pdfDoc.getForm()

      renderedFields.value = {}

      props.fields.forEach(item => {
        if (item.key && !["section", "signature", "date"].includes(item.field) && formData.value[item.key]) {
          let field = pdfForm.getTextField(item.key)
          var fieldValue = null
          if (item.joinkey) {
            fieldValue = `${formData.value[item.joinkey]}, ${formData.value[item.key]}`
          } else {
            fieldValue = formData.value[item.key]
          }
          field.setText(fieldValue)
          renderedFields.value[item.key] = fieldValue
        }
      })

      updateAgreementFormCache(props.agreementTag, renderedFields.value)

      pdfForm.flatten()

      const signedOnly = Object.keys(signatures.value).filter(key => signatures.value[key]["signed"])

      if (signedOnly.length > 0) {
        const embeddedImages = signedOnly.map(key => {
          const pngurl = signatures.value[key]["pngurl"]
          return pdfDoc.embedPng(pngurl).then(img => {
            const pngImage = img
            const pages = pdfDoc.getPages()
            const pageNum = pdfSignatures.value[key]["page"]
            const page = pages[pageNum]
            const pngDims = pngImage.scale(pdfSignatures.value[key]["scale"])
            const xpos = page.getWidth() * pdfSignatures.value[key]["xpos"]
            const ypos = page.getHeight() * pdfSignatures.value[key]["ypos"]
            console.log(
              `Page ${pageNum} (${page.getWidth()} x ${page.getHeight()}) - insert image ${key}.png (${pngDims.width} x ${pngDims.height}) at position ${xpos} x ${ypos}`,
            )
            page.drawImage(pngImage, {
              x: xpos,
              y: ypos,
              width: pngDims.width,
              height: pngDims.height,
            })
          })
        })
        Promise.all(embeddedImages).then(() => {
          console.log("Render PDF with signatures")
          pdfDoc.saveAsBase64({ dataUri: true }).then(pdfData => {
            const pages = pdfDoc.getPages().length
            browsePdf(pdfData, pages, true, true)
          })
        })
      } else {
        console.log("PDF without signatures")
        pdfDoc.saveAsBase64({ dataUri: true }).then(pdfData => {
          const pages = pdfDoc.getPages().length
          browsePdf(pdfData, pages, true, true)
        })
      }
    })
    pdfDownloadClicked.value = false
  } catch (error) {
    console.log(error)
  }
}

const browsePdf = (data = null, pages = 1, show = false, download = false) => {
  const pdfDataUri = data
  pdfFile.value = pdfDataUri
  pdfPages.value = pages
  pdfTimestamp.value = getTimestamp()
  showPdf.value = show
  nextTick(() => {
    downloadPdf.value = download
  })
}

const showTooltip = text => {
  console.log(text)
}

const saveDate = (key, value) => {
  datemodal.value[key] = false
}

const loadFormData = () => {
  fetch("/cfg/service_desk.yml")
    .then(response => response.text())
    .then(responseData => {
      const cfg = YAML.parse(responseData)
      data.value = cfg
      serviceDeskDialog.value = true
    })
}

const serviceDeskRedirect = () => {
  loadFormData()
}

const resetFormData = () => {
  pdfDownloadClicked.value = false
  formData.value = {}
  props.fields
    .filter(item => item.key && item.default && !["signature", "date"].includes(item.field))
    .forEach(item => {
      const defValue = item.default
      formData.value[item.key] = defValue
    })
  props.fields
    .filter(item => item.field === "date")
    .forEach(item => {
      var dateToday = new Date()
      formData.value[item.key] = dateToday.toISOString().substring(0, 10)
    })
  updateAgreementFormCache(props.agreementTag, {})
}

// Watchers
watch(expandForm, val => {
  if (val) {
    const newLayout = { formCols: 12, pdfCols: 12, hidePdf: true }
    layout.value = newLayout
  } else {
    const newLayout = { formCols: 5, pdfCols: 7, hidePdf: false }
    layout.value = newLayout
  }
})

// Lifecycle hooks
onMounted(() => {
  props.fields
    .filter(item => item.field === "signature")
    .forEach(item => {
      dialogs.value = Object.assign({}, dialogs.value, { [item.key]: null })
      pdfSignatures.value[item.key] = {
        page: item.page && item.page > 0 ? item.page : 0,
        xpos: item.xpos && item.xpos > 0 ? item.xpos : 0.5,
        ypos: item.ypos && item.ypos > 0 ? item.ypos : 0.5,
        scale: item.scale && item.scale > 0 ? item.scale : defaultScale.value,
      }
    })

  resetFormData()

  if (props.url) {
    loadPdf(props.url)
  }

  const fieldsCache = fetchAgreementFormCache(props.agreementTag)
  if (fieldsCache) {
    renderedFields.value = fieldsCache
    console.log("loaded fields from cache")
    console.log(fieldsCache)
    if (form.value) {
      console.log("submit from cache")
      form.value.submit()
    }
  }
})
</script>

<template>
  <v-sheet
    class="d-flex flex-xs-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap h-100 w-100 align-self-center"
    style="max-width: 1680px"
  >
    <v-sheet
      class="flex-grow-1 flex-shrink-0 mx-2 px-2 h-100 h-xs-auto h-sm-auto overflow-y-auto col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      style="min-width: 300px; max-width: 100%"
    >
      <form ref="form" @submit.prevent="submit">
        <v-list>
          <v-list-item>
            <v-row justify="space-between" class="mr-xs-1 pr-sm-1" no-gutters>
              <div class="font-weight-bold">{{ title }}</div>
              <v-btn fab x-small title="Reset the form fields" color="link" elevation="0" @click="resetFormData">
                <v-icon>close</v-icon>
              </v-btn>
            </v-row>
          </v-list-item>

          <template v-for="item in fields" :key="item.key">
            <v-divider v-if="item.field === 'divider'"></v-divider>
            <v-list-item v-if="item.field === 'section'" cols="12" dense>
              <p class="text-darken-1 py-0 mt-1 mb-4">{{ item.label }}</p>
            </v-list-item>
            <v-list-item v-if="item.field === 'textfield'" cols="12" dense>
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
                :persistent-hint="item.hint && formData[item.key] ? true : false"
                :placeholder="item.placeholder ? item.placeholder : null"
                persistent-placeholder
                outlined
                dense
                :hide-details="formData[item.key] ? false : 'auto'"
                @focus="$event.target.select()"
              >
                <template v-slot:label>
                  {{ item.label
                  }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                </template>
                <template v-if="item.tooltip ? true : false" v-slot:append>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon x-small v-bind="attrs" v-on="on">
                        <v-icon class="material-icons">info</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ item.tooltip }}</span>
                  </v-tooltip>
                </template>
              </v-text-field>
            </v-list-item>
            <v-list-item v-if="item.field === 'autocompleteone'" cols="12" dense>
              <v-autocomplete
                v-model="formData[item.key]"
                class="mb-3"
                :ref="item.key"
                autocomplete="ignore-field"
                :items="item.options"
                :required="isFieldRequired(item.required)"
                :clearable="isBoolTrue(item.clearable)"
                clear-icon=""
                :placeholder="item.placeholder ? item.placeholder : ''"
                persistent-placeholder
                outlined
                dense
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:label>
                  {{ item.label
                  }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                </template>
                <template v-slot:append>
                  <div
                    v-if="isBoolTrue(item.clearable) && formData[item.key] ? true : false"
                    class="v-input__icon v-input__icon--clear"
                  >
                    <i
                      @click.stop="formData[item.key] = null"
                      type="button"
                      aria-label="clear icon"
                      tabindex="-1"
                      class="v-icon notranslate v-icon--link material-icons theme--dark primary--text"
                    >
                      close
                    </i>
                  </div>
                </template>
              </v-autocomplete>
            </v-list-item>
            <v-list-item v-if="item.field === 'date'" cols="12" dense>
              <v-dialog
                :ref="item.key"
                v-model="datemodal[item.key]"
                :return-value.sync="formData[item.key]"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData[item.key]"
                    class="mb-3"
                    :placeholder="item.placeholder ? item.placeholder : ''"
                    persistent-placeholder
                    outlined
                    dense
                    hide-details
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template v-slot:label>
                      {{ item.label
                      }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                    </template>
                  </v-text-field>
                </template>
                <v-date-picker v-model="datedialog[item.key]" scrollable>
                  <v-btn text color="primary" @click="datemodal[item.key] = false"> Cancel </v-btn>
                  <v-btn text color="primary" @click="saveDate(item.key, datedialog[item.key])"> OK </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-list-item>
            <v-list-item v-if="item.field === 'countries'" cols="12" dense>
              <v-autocomplete
                v-model="formData[item.key]"
                class="mb-3"
                :ref="item.key"
                autocomplete="ignore-field"
                :items="getCountries"
                :item-text="item => `${item.name} ${item.flag}`"
                :item-value="item => item.name"
                :required="isFieldRequired(item.required)"
                :placeholder="item.placeholder ? item.placeholder : ''"
                persistent-placeholder
                outlined
                dense
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:label>
                  {{ item.label
                  }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                </template>
              </v-autocomplete>
            </v-list-item>
            <v-list-item v-if="item.field === 'textarea'" cols="12" dense>
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
                :persistent-hint="item.hint && formData[item.key] ? true : false"
                :placeholder="item.placeholder ? item.placeholder : ''"
                persistent-placeholder
                outlined
                dense
                :rows="1"
                :hide-details="formData[item.key] ? false : 'auto'"
                @focus="$event.target.select()"
              >
                <template v-slot:label>
                  {{ item.label
                  }}<span v-if="isFieldRequired(item.required)" class="red--text text--darken-2"> * </span>
                </template>
              </v-textarea>
            </v-list-item>
            <v-list-item v-if="item.field === 'signature'" cols="12" dense>
              <v-card class="px-0 mb-3" style="width: 100%" elevation="0" outlined>
                <v-card-text>
                  <v-row justify="space-between" class="mr-xs-12 pr-sm-8" no-gutters>
                    <v-col cols="8">
                      <div class="font-weight-bold">{{ item.label }}</div>
                    </v-col>
                    <v-col cols="4">
                      <v-btn color="primary" block @click="openDialog(item.key)"> Add signature </v-btn>
                    </v-col>
                  </v-row>
                  <v-row align="center" justify="space-between" class="mr-xs-12 pr-sm-8" no-gutters>
                    <v-col cols="12" style="height: 40px">
                      <div v-if="signatures && signatures[item.key] && signatures[item.key]['signed']">
                        <img :src="signatures[item.key]['pngurl']" style="max-height: 40px" />
                      </div>
                      <div v-else>Add digital signature now or sign later</div>
                    </v-col>
                  </v-row>

                  <v-dialog v-model="dialogs[item.key]" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <v-card class="prevent-select" style="height: 100%">
                      <v-toolbar>
                        <v-toolbar-title>{{ item.label }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn text @click="closeDialog(item.key)"> Close </v-btn>
                        <v-toolbar-items>
                          <v-btn text @click="saveDialog(item.key)"> Save </v-btn>
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
                <v-btn class="mr-8 px-0" type="submit" block :color="formFilled ? 'teal' : 'link'">
                  Preview agreement
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item>
          <v-list-item>
            <v-row class="px-2" align="center" justify="space-around">
              <v-col v-if="pdfFile && downloadPdf ? true : false" class="px-4 mt-4" cols="12">
                Double check the preview and then save the agreement file.
              </v-col>
              <v-col cols="12">
                <v-btn
                  class="mr-8 px-0"
                  block
                  :color="pdfDownloadClicked ? 'link' : 'primary'"
                  :href="pdfFile"
                  :download="getPdfTitle"
                  target="_blank"
                  :disabled="pdfFile && downloadPdf ? false : true"
                  @click="pdfDownloadClicked = true"
                >
                  Save Agreement
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item>
          <v-list-item v-if="servicedesk">
            <v-row class="px-2" align="center" justify="space-around">
              <v-col v-if="pdfDownloadClicked" class="px-4 mt-6" cols="12">
                <v-icon>attach_file</v-icon> Make sure to attach <b>signed agreement file (.pdf)</b> to your email
                request.
              </v-col>
              <v-col cols="12">
                <v-btn
                  class="mr-8 px-0"
                  block
                  color="success"
                  target="_blank"
                  :disabled="!pdfDownloadClicked"
                  @click="serviceDeskRedirect"
                >
                  Prepare Service desk email
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </form>
    </v-sheet>
    <v-sheet
      class="flex-grow-1 flex-shrink-1 mx-2 px-2 h-100 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      style="min-width: 300px; max-width: 100%"
    >
      <EmbedPdfViewer v-if="showPdf ? true : false" :source="pdfData" :pages="pdfPages" height="500" />
    </v-sheet>
    <v-sheet v-if="showServiceDesk">
      <ServiceDesk
        v-model="serviceDeskDialog"
        :ref="servicedesk"
        :title="getData['title']"
        :requirements="getData['requirements']"
        :attachments="getData['attachments']"
        :fields="getData['fields']"
        :template="getData['template']"
        :recipient="getRecipient"
        :cache-key="agreementTag"
      />
    </v-sheet>
  </v-sheet>
</template>

<style>
.signature-card {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
}

.signature-pad {
  font-size: 10px;
  width: 100%;
  height: 100%;
  max-width: 700px;
  max-height: 460px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  box-shadow:
    0 1px 4px rgba(0, 0, 0, 0.27),
    0 0 40px rgba(0, 0, 0, 0.08) inset;
  border-radius: 4px;
  padding: 16px;
}

.signature-pad::before,
.signature-pad::after {
  position: absolute;
  z-index: -1;
  content: "";
  width: 40%;
  height: 10px;
  bottom: 10px;
  background: transparent;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
}

.signature-pad::before {
  left: 20px;
  -webkit-transform: skew(-3deg) rotate(-3deg);
  transform: skew(-3deg) rotate(-3deg);
}

.signature-pad::after {
  right: 20px;
  -webkit-transform: skew(3deg) rotate(3deg);
  transform: skew(3deg) rotate(3deg);
}

.signature-pad--body {
  border: 1px solid #f4f4f4;
}

.signature-pad--body canvas {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
}

.signature-pad--footer {
  color: #c3c3c3;
  text-align: center;
  font-size: 1.2em;
  margin-top: 8px;
}

.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*
.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner {
  margin-top: 2px !important;
}
*/
</style>
