<script setup>
import { ref, computed, onMounted } from "vue"

const ISSERVER = typeof window === "undefined"

defineOptions({
  name: "ServiceDesk",
})

// Emits definition
const emit = defineEmits(["update:modelValue"])

// Props definition
const props = defineProps({
  id: { type: String, default: "applet" },
  modelValue: { type: Boolean, default: false }, // Changed from 'value' to 'modelValue'
  title: { type: String, default: null },
  fields: { type: Array, default: () => [] },
  template: { type: Object, default: () => ({}) },
  requirements: { type: Array, default: () => [] },
  attachments: { type: Array, default: () => [] },
  recipient: {
    type: String,
    default: "cloud.support+hunt-cloud-request@hunt.ntnu.no",
  },
  cacheKey: { type: String, default: null },
  fullscreen: { type: Boolean, default: false },
})

// Reactive data
const subjectTemplate = ref(null)
const bodyTemplate = ref(null)
const formData = ref({})
const message = ref({
  subject: null,
  body: null,
})
const loadingEmailButtons = ref(true)
const sendClicked = ref(false)
const finalizeClicked = ref(false)
const panel = ref(0)

// Computed properties
const messageSubject = computed(() => {
  return subjectTemplate.value ? wrap(subjectTemplate.value) : null
})

const messageBody = computed(() => {
  return bodyTemplate.value ? wrap(bodyTemplate.value) : null
})

const formFilled = computed(() => {
  return props.fields.every(item => (formData.value[item.key] || item.optional ? true : false))
})

const encodedSubject = computed(() => {
  return subjectTemplate.value ? encode(subjectTemplate.value) : null
})

const encodedBody = computed(() => {
  return bodyTemplate.value ? encode(bodyTemplate.value) : null
})

const encodedRecipient = computed(() => {
  return props.recipient ? encode(props.recipient) : props.recipient
})

const mailto = computed(() => {
  const redir = `mailto:${encodedRecipient.value}?subject=${encodedSubject.value}&body=${encodedBody.value}`
  console.log(redir)
  return redir
})

const outlookDoubleEncodedTo = computed(() => {
  // Outlook does not seem to follow RFCs for mailto with deeplinks - they are double decoding TO field
  return props.recipient ? encode(encode(props.recipient)) : props.recipient
})

const wrapRecipient = computed(() => {
  // Same as outlookDoubleEncodedTo works only if double encoded
  return props.recipient ? encode(encode(`HUNT Cloud - Service Desk <${props.recipient}>`)) : props.recipient
})

const deeplinkUrl = computed(() => {
  const url = "https://outlook.office.com/mail/deeplink/compose"
  const redir = `${url}?to=${wrapRecipient.value}&subject=${encodedSubject.value}&body=${encodedBody.value}`
  console.log(redir)
  return redir
})

// Methods
const close = () => {
  finalizeClicked.value = true
  sendClicked.value = true
  panel.value = 0
  emit("update:modelValue", false)
}

const closeBtn = () => {
  panel.value = 0
  emit("update:modelValue", false)
}

const activateSendButtons = () => {
  loadingEmailButtons.value = false
}

const submit = () => {
  panel.value = 2
  setTimeout(activateSendButtons, 1200)
}

const review = () => {
  finalizeClicked.value = true
  panel.value = 2
}

const actionSend = () => {
  sendClicked.value = true
  panel.value = 3
  window.location.href = mailto.value
}

const actionSendOutlook = () => {
  sendClicked.value = true
  panel.value = 3
  window.location.href = deeplinkUrl.value
}

const actionSendOutlookPopup = () => {
  sendClicked.value = true
  panel.value = 3
  window.open(deeplinkUrl.value, "_blank")
}

const wrap = template => {
  let text = template
  for (const [key, value] of Object.entries(formData.value)) {
    if (value || value === "") {
      if (Array.isArray(value)) {
        text = text.replaceAll(`{${key}}`, value.join(", "))
      } else {
        text = text.replaceAll(`{${key}}`, value)
      }
    }
  }
  text = text.replaceAll("\n---\n", "\n```\n")
  return text
}

const encode = template => {
  return template ? encodeURIComponent(wrap(template)) : null
}

const setValue = (value, key) => {
  // NOTE: enforce reactivity to data change - re-rendering the template
  const updates = {}
  updates[key] = value ? value.trim() : value
  formData.value = Object.assign({}, formData.value, updates)
}

const fetchAgreementFormCache = key => {
  let fields = {}
  let jsonData = null
  if (!ISSERVER) {
    jsonData = key ? localStorage.getItem(key) : null
  }
  try {
    fields = jsonData ? JSON.parse(jsonData) : {}
  } catch (ex) {
    console.log("Failed to fetch data from cache")
  }
  return fields
}

// Lifecycle
onMounted(() => {
  panel.value = 0
  loadingEmailButtons.value = true
  subjectTemplate.value = props.template ? props.template.subject : null
  bodyTemplate.value = props.template ? props.template.body : null

  var formFields = []
  for (const item of props.fields) {
    if (item && item.key) {
      formFields.push(item.key)
      if (item.default || item.default === "") {
        const defValue = item.default
        formData.value[item.key] = defValue
      }
    }
  }

  let cache = fetchAgreementFormCache(props.cacheKey)
  if (cache) {
    try {
      for (const [key, value] of Object.entries(cache)) {
        if (key !== "open") {
          if (formFields.includes(key)) {
            console.log(`Prefill from cache: ${key} = ${value}`)
            setValue(value, key)
          }
        }
      }
    } catch (ex) {
      console.log("Failed to load form fields from cache")
    }
  }
})
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-dialog
        :model-value="modelValue"
        transition="dialog-bottom-transition"
        max-width="960px"
        :fullscreen="fullscreen"
        @update:model-value="emit('update:modelValue', $event)"
        @click:outside="closeBtn"
      >
        <v-card class="service-desk-card">
          <v-toolbar color="#00509e" theme="dark">
            <v-toolbar-title>Service desk - {{ title }}</v-toolbar-title>
            <v-spacer />
            <template v-slot:append>
              <v-btn icon="mdi-close" @click="closeBtn" />
            </template>
          </v-toolbar>

          <v-card-text class="pt-6">
            <v-expansion-panels v-model="panel">
              <v-expansion-panel>
                <v-expansion-panel-title> Request details </v-expansion-panel-title>
                <v-expansion-panel-text class="mt-2">
                  <v-row justify="center">
                    <v-col v-for="(item, index) in requirements" :key="index" class="pb-0 pt-0" cols="12">
                      <p class="mb-2" v-html="item"></p>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-btn color="success" block @click="panel = panel + 1"> Continue </v-btn>
                    </v-col>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  Form
                  <template v-if="formFilled" v-slot:actions>
                    <v-icon color="teal">mdi-check</v-icon>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <form @submit.prevent="submit">
                    <v-row justify="center">
                      <v-col v-for="item in fields" :key="item.key" cols="8">
                        <v-text-field
                          v-if="item.field === 'textfield'"
                          v-model="formData[item.key]"
                          autocomplete="ignore-field"
                          :label="item.label"
                          :pattern="item.pattern ? item.pattern : null"
                          :title="item.hint ? item.hint : null"
                          :hint="item.hint ? item.hint : null"
                          :suffix="item.suffix ? item.suffix : null"
                          :autocapitalize="item.autocapitalize ? item.autocapitalize : null"
                          :persistent-hint="item.hint && formData[item.key] ? true : false"
                          placeholder=""
                          persistent-placeholder
                          variant="outlined"
                          density="compact"
                          :hide-details="formData[item.key] ? false : 'auto'"
                          @focus="$event.target.select()"
                          @update:model-value="setValue($event, item.key)"
                        />

                        <v-textarea
                          v-else-if="item.field === 'textarea'"
                          v-model="formData[item.key]"
                          autocomplete="ignore-field"
                          :label="item.label"
                          :title="item.hint ? item.hint : null"
                          :hint="item.hint ? item.hint : null"
                          :suffix="item.suffix ? item.suffix : null"
                          :autocapitalize="item.autocapitalize ? item.autocapitalize : null"
                          :rows="item.rows ? item.rows : 3"
                          :persistent-hint="item.hint && formData[item.key] ? true : false"
                          placeholder=""
                          persistent-placeholder
                          variant="outlined"
                          density="compact"
                          :hide-details="formData[item.key] ? false : 'auto'"
                          @focus="$event.target.select()"
                          @update:model-value="setValue($event, item.key)"
                        />

                        <v-select
                          v-else-if="item.field === 'selector'"
                          :items="item.options"
                          v-model="formData[item.key]"
                          :label="item.label"
                          :item-title="
                            item => (Object.prototype.hasOwnProperty.call(item, 'text') ? item.text : item)
                          "
                          :item-value="
                            item => (Object.prototype.hasOwnProperty.call(item, 'value') ? item.value : item)
                          "
                          placeholder=""
                          persistent-placeholder
                          chips
                          multiple
                          variant="outlined"
                          hide-details
                        />

                        <v-select
                          v-else-if="item.field === 'selectone'"
                          :items="item.options"
                          v-model="formData[item.key]"
                          :label="item.label"
                          :item-title="
                            item => (Object.prototype.hasOwnProperty.call(item, 'text') ? item.text : item)
                          "
                          :item-value="
                            item => (Object.prototype.hasOwnProperty.call(item, 'value') ? item.value : item)
                          "
                          placeholder=""
                          persistent-placeholder
                          chips
                          variant="outlined"
                          hide-details
                        />

                        <v-autocomplete
                          v-else-if="item.field === 'autocompleteone'"
                          :items="item.options"
                          v-model="formData[item.key]"
                          :label="item.label"
                          :item-title="
                            item => (Object.prototype.hasOwnProperty.call(item, 'text') ? item.text : item.header)
                          "
                          :item-value="
                            item => (Object.prototype.hasOwnProperty.call(item, 'value') ? item.value : item)
                          "
                          placeholder=""
                          persistent-placeholder
                          chips
                          variant="outlined"
                          density="compact"
                          clearable
                          hide-details
                        />

                        <v-text-field
                          v-else-if="item.field === 'number'"
                          v-model="formData[item.key]"
                          autocomplete="ignore-field"
                          type="number"
                          :label="item.label"
                          :title="item.hint ? item.hint : null"
                          :hint="item.hint ? item.hint : null"
                          :suffix="item.suffix ? item.suffix : null"
                          :min="item.min ? item.min : null"
                          :max="item.max ? item.max : null"
                          :step="item.step ? item.step : null"
                          :persistent-hint="item.hint && formData[item.key] ? true : false"
                          placeholder=""
                          persistent-placeholder
                          variant="outlined"
                          density="compact"
                          :hide-details="formData[item.key] ? false : 'auto'"
                          @focus="$event.target.select()"
                          @update:model-value="setValue($event, item.key)"
                        />
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="6">
                        <v-btn color="success" block type="submit" :disabled="!formFilled"> Continue </v-btn>
                      </v-col>
                    </v-row>
                  </form>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel :disabled="!formFilled">
                <v-expansion-panel-title>
                  Email request
                  <template v-if="sendClicked" v-slot:actions>
                    <v-icon color="teal">mdi-check</v-icon>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row justify="center">
                    <v-col cols="10">
                      <CopyTextField
                        :model-value="recipient"
                        label="Email recipient (TO)"
                        class="py-2"
                        prepend-inner-icon="mdi-email"
                      />
                      <CopyTextField :model-value="messageSubject" label="Email subject" class="py-2" />
                      <CopyTextArea :model-value="messageBody" label="Body" class="py-2" rows="8" />
                    </v-col>
                  </v-row>

                  <!-- Attachments reminder -->
                  <v-row v-if="attachments && attachments.length > 0" justify="center">
                    <v-col class="pb-0 pt-0 px-4" cols="10">
                      <b><p class="mb-2">Remember to attach these documents in the email request:</p></b>
                    </v-col>
                  </v-row>
                  <v-row v-if="attachments && attachments.length > 0" class="mb-6" justify="center">
                    <v-col class="pb-0 pt-0" cols="1" align="center">
                      <v-icon>mdi-attachment</v-icon>
                    </v-col>
                    <v-col class="pb-0 pt-0" cols="9">
                      <ul>
                        <li v-for="(item, index) in attachments" :key="index" class="pb-0 pt-0">
                          <p class="mb-2" v-html="item"></p>
                        </li>
                      </ul>
                    </v-col>
                  </v-row>

                  <v-row justify="center">
                    <v-col cols="4">
                      <v-tooltip text="Default email client" location="bottom">
                        <template v-slot:activator="{ props }">
                          <v-btn
                            v-bind="props"
                            color="success"
                            block
                            :loading="loadingEmailButtons"
                            :disabled="loadingEmailButtons"
                            @click="actionSend"
                          >
                            Open in Email Client
                          </v-btn>
                        </template>
                      </v-tooltip>
                    </v-col>
                    <v-col cols="4">
                      <v-btn
                        color="primary"
                        block
                        :loading="loadingEmailButtons"
                        :disabled="loadingEmailButtons"
                        @click="actionSendOutlookPopup"
                      >
                        Open in Outlook Web
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel v-if="sendClicked" :disabled="!formFilled">
                <v-expansion-panel-title>
                  Finalize request
                  <template v-if="finalizeClicked" v-slot:actions>
                    <v-icon color="teal">mdi-check</v-icon>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row justify="center">
                    <v-col cols="10"> </v-col>
                  </v-row>
                  <v-row class="mb-6" justify="center">
                    <v-col cols="10">
                      <p class="text-center body-1">
                        Now your Email client should open and you can follow up sending Service desk request there.
                      </p>
                    </v-col>
                    <v-col cols="10">
                      <p class="text-center body-1">
                        In case your <b>Email client did not open</b> and you want to send email manually feel free to
                        hit Review button and copy the message contents and use our service desk email address.
                      </p>
                    </v-col>
                  </v-row>

                  <!-- Attachments reminder -->
                  <v-row v-if="attachments && attachments.length > 0" class="mb-6" justify="center">
                    <v-col class="pb-0 pt-0 px-4" cols="1" align="center">
                      <v-icon>mdi-attachment</v-icon>
                    </v-col>
                    <v-col class="pb-0 pt-0 px-4" cols="9">
                      <v-row>
                        <b><p class="mb-2">Remember to attach these documents in the email request:</p></b>
                      </v-row>
                      <v-row>
                        <ul>
                          <li v-for="(item, index) in attachments" :key="index" class="pb-0 pt-0">
                            <p class="mb-2" v-html="item"></p>
                          </li>
                        </ul>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>

          <v-card-actions v-if="sendClicked">
            <v-row class="mb-2" justify="center">
              <v-col cols="4">
                <v-btn color="success" variant="outlined" block @click="review"> Review email </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="primary" variant="outlined" block @click="actionSendOutlook"> Open in Outlook Web </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="primary" block @click="close"> Close </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<style>
.vuewidget.vuewrapper {
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
}

.vuewidget.vuewrapper .v-application--wrap {
  display: block;
  flex: inherit;
  min-height: initial;
  min-width: inherit;
  width: 100%;
  overflow-x: hidden;
}

.vuewidget a.v-btn {
  border: inherit;
}

.service-desk-card {
  font-size: 14px !important;
}

.v-chip.v-size--small {
  margin-top: 8px !important;
  margin-bottom: 5px !important;
}
</style>
