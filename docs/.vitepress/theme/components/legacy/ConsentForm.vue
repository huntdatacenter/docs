<script setup>
import { ref, computed, onMounted, nextTick, getCurrentInstance } from "vue"
// import { useRoute } from "vue-router"
import YAML from "yaml"
import MarkdownIt from "markdown-it"

const ISSERVER = typeof window === "undefined"

const md = new MarkdownIt()

defineOptions({
  name: "ConsentForm",
})

// Props definition
const props = defineProps({
  id: { type: String, default: "applet" },
  service: { type: String, default: "consent" },
  apiVersion: { type: String, default: "v1" },
  domain: { type: String, default: "hdc.ntnu.no" },
})

// Get route information safely
const instance = getCurrentInstance()
const getRouteQuery = () => {
  // Try to get route from Vue Router
  try {
    if (instance && instance.appContext.app.config.globalProperties.$route) {
      return instance.appContext.app.config.globalProperties.$route.query
    }
  } catch (error) {
    console.warn("Vue Router not available, checking URL parameters directly")
  }

  // Fallback: parse URL parameters directly
  let urlParams = []
  if (!ISSERVER) {
    urlParams = new URLSearchParams(window.location.search)
  }
  const query = {}
  for (const [key, value] of urlParams) {
    query[key] = value
  }
  return query
}
//let route = useRoute()

// Reactive data
const consentVersion = ref(null)
const isLoading = ref(true)
const isLoadingTexts = ref(true)
const isReadonly = ref(false)
const isSaving = ref(false)
const isError = ref(false)
const isWarning = ref(false)
const consentToken = ref(null)
const submittedAs = ref([])
const form = ref({})
const textData = ref({})
const consentItems = ref([])

// Computed properties
const showConsent = computed(() => {
  return (
    !isLoading.value &&
    !isLoadingTexts.value &&
    !isError.value &&
    consentToken.value &&
    form.value &&
    consentItems.value.length > 0
  )
})

const url = computed(() => {
  return `https://${props.service}-api.${props.domain}/api/${props.apiVersion}/consent/${consentToken.value}`
})

const getParagraphs = computed(() => {
  return "paragraphs" in textData.value && textData.value["paragraphs"]
    ? md.render(textData.value["paragraphs"]).replace("\n\n", "\n").replace("\n\n", "\n").split("\n")
    : []
})

// Methods
const getConsentData = async () => {
  try {
    const response = await fetch(url.value, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })

    const data = await response.json()
    handleResponse(data)
  } catch (err) {
    console.error(err)
    isError.value = true
  } finally {
    isLoading.value = false
  }
}

const loadCurrentVersionOfTexts = async version => {
  try {
    const response = await fetch("/cfg/consent_texts.yml")
    const data = await response.text()
    const cfg = YAML.parse(data)
    textData.value = cfg[`v${version}`]
  } catch (err) {
    console.error(err)
    isError.value = true
  } finally {
    isLoadingTexts.value = false
  }
}

const handleResponse = data => {
  if (data["status"] === "error") {
    if (data["item"] === "Consent not found") {
      console.log("Consent not found")
      isWarning.value = true
    }
    console.log(data["item"])
  } else if (data["status"] === "success" && data["item"] && data["item"]["items"].length > 0) {
    // Store a current consent version and load texts based on the version
    if (data && "item" in data && "version" in data["item"] && data["item"]["version"]) {
      consentVersion.value = data["item"]["version"]
      loadCurrentVersionOfTexts(consentVersion.value)
      console.log(`Consent version: v${consentVersion.value}`)
    } else {
      console.log(data)
    }

    // Load consent value for each item
    data["item"]["items"].forEach(item => {
      console.log(item)
      // Load data from api into form variables based on main status
      if (item["status"] === "PENDING") {
        form.value[item["type"]] = null
      } else if (item["status"] === "ACTIVE") {
        form.value[item["type"]] = true
      } else {
        form.value[item["type"]] = false
      }
      consentItems.value.push(item["type"])
    })
  }
}

const showType = consentType => {
  return (
    textData.value &&
    "items" in textData.value &&
    consentType in textData.value["items"] &&
    textData.value["items"][consentType] &&
    consentItems.value.includes(consentType)
  )
}

const submit = async () => {
  isSaving.value = true
  isReadonly.value = true

  const items = consentItems.value.map(item => {
    return form.value[item] ? { type: item, status: "ACTIVE" } : { type: item, status: "REVOKED" }
  })

  try {
    const response = await fetch(url.value, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        items: items,
      }),
    })

    const data = await response.text()
    handleResponse(data)
  } catch (error) {
    console.error(error)
    isError.value = true
  } finally {
    setTimeout(() => {
      isSaving.value = false
      submittedAs.value = getSubmitMessage()
      nextTick(() => {
        document.getElementById("actionalert")?.scrollIntoView()
      })
    }, 600)

    setTimeout(() => {
      isReadonly.value = false
    }, 1000)
  }
}

const getSubmitMessage = () => {
  if (form.value["slack"]) {
    return [
      "Thanks, your consent is registered.",
      "Welcome! If you are a new user, we will send you an invitation to our HUNT Cloud community on Slack as soon as we process your consent. You can now close the window.",
    ]
  } else {
    return [
      "Thanks, your withdrawal is registered.",
      "Sorry to see you go! We will deactivate and delete your Slack account as soon as we process your withdrawal. You can now close the window.",
    ]
  }
}

const giveConsent = () => {
  isSaving.value = true
  isReadonly.value = true
  console.log("give consent")
  consentItems.value.forEach(item => {
    form.value[item] = true
  })
  submit()
}

const withdrawConsent = () => {
  isSaving.value = true
  isReadonly.value = true
  console.log("withdraw consent")
  consentItems.value.forEach(item => {
    form.value[item] = false
  })
  submit()
}

const getSlackStatus = item => {
  if (item == null) {
    return "Your consent status is not yet registered."
  }
  return item
    ? "Your consent for HUNT Cloud community membership is active"
    : "Your consent for HUNT Cloud community membership has been withdrawn"
}

// Lifecycle
onMounted(() => {
  try {
    isLoading.value = true
    const query = getRouteQuery()
    console.log(query)
    consentToken.value = query.token ? atob(query.token) : null
  } catch (error) {
    isWarning.value = true
    isLoading.value = false
  }

  if (consentToken.value) {
    getConsentData()
  }
})
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-sheet class="ma-4">
        <v-row v-if="isError" justify="center">
          <v-col cols="12">
            <v-alert type="error" variant="tonal" border="start" elevation="2">
              <strong>Error occured while processing your consent.</strong>
              <hr class="mt-1 mb-2" />
              Please contact us on <a href="/about/contact/" target="_blank">email</a> or try again later.
            </v-alert>
          </v-col>
        </v-row>

        <v-row v-if="!isLoading && !showConsent && isWarning" justify="center">
          <v-col cols="12">
            <v-alert class="pa-4" type="warning" variant="tonal" border="start" elevation="2" height="80px">
              <strong>Your link appears to be wrong.</strong>
              <hr class="mt-1 mb-2" />
              If you do not have your own Consent link order one in Service desk.
            </v-alert>
          </v-col>
        </v-row>

        <v-sheet v-if="showConsent">
          <form @submit.prevent="submit">
            <v-card id="consent-container" class="mb-6">
              <v-card-text id="consent-text" class="px-8">
                <v-row>
                  <v-col v-for="(item, index) in getParagraphs" :key="index" class="pa-1 mt-1" cols="12">
                    <span id="consent-text-item" v-html="item"></span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-sheet>
              <v-row justify="center">
                <v-col cols="4" style="min-width: 240px">
                  <v-btn
                    :href="textData['link']"
                    target="_blank"
                    color="primary"
                    variant="outlined"
                    block
                    prepend-icon="mdi-file-pdf-box"
                  >
                    Privacy statement
                  </v-btn>
                </v-col>
              </v-row>

              <v-row v-if="form" class="px-4">
                <v-col v-if="showType('slack')" cols="12">
                  <v-switch
                    v-model="form['slack']"
                    class="mt-0"
                    color="success"
                    readonly
                    inset
                    hide-details
                    name="slack"
                    :label="getSlackStatus(form['slack'])"
                  />
                </v-col>
              </v-row>

              <v-row class="mb-2" justify="center">
                <v-col cols="3" style="min-width: 240px">
                  <v-btn
                    color="success"
                    :disabled="isError"
                    :loading="isSaving || isLoading"
                    block
                    prepend-icon="mdi-check"
                    @click="giveConsent()"
                  >
                    Give consent
                  </v-btn>
                </v-col>
                <v-col cols="3" style="min-width: 240px">
                  <v-btn
                    color="blue-grey-darken-4"
                    :disabled="isError"
                    :loading="isSaving || isLoading"
                    block
                    variant="outlined"
                    elevation="1"
                    prepend-icon="mdi-cancel"
                    @click="withdrawConsent()"
                  >
                    Withdraw consent
                  </v-btn>
                </v-col>
              </v-row>
            </v-sheet>
          </form>
        </v-sheet>

        <v-row v-if="submittedAs && submittedAs.length == 2" justify="center">
          <v-col cols="10">
            <v-alert id="actionalert" type="info" variant="tonal">
              <strong>{{ submittedAs[0] }}</strong>
              <hr class="mt-1 mb-2" />
              {{ submittedAs[1] }}
            </v-alert>
          </v-col>
        </v-row>
      </v-sheet>
    </v-app>
  </div>
</template>

<style>
.vuewidget.vuewrapper {
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
  height: 100%;
}

.vuewidget.vuewrapper .v-application {
  height: 100%;
}

.vuewidget.vuewrapper .v-application--wrap {
  display: block;
  flex: inherit;
  min-height: initial;
  min-width: inherit;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.vuewidget a.v-btn {
  border: inherit;
}

.vuewidget a.v-btn:hover {
  text-decoration: none !important;
}

.v-chip.v-size--small {
  margin-top: 8px !important;
  margin-bottom: 5px !important;
}

.last-updated {
  display: none;
}

#consent-text {
  overflow-y: scroll;
  min-height: 260px;
  height: calc(100vh - 400px);
}

#consent-text-item p {
  margin-bottom: 0px;
}

.page-edit {
  display: none;
  padding: 0px !important;
  margin: 0px !important;
}

.theme-default-content {
  padding-bottom: 0px !important;
  padding-bottom: 0 !important;
}

.page {
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
}
</style>
