<script setup>
import { ref, computed, watch, onMounted, nextTick, getCurrentInstance } from "vue"

import YAML from "yaml"

// Dynamic import for PdfForm component
// const PdfForm = defineAsyncComponent(() => import("./PdfForm.vue"))

const ISSERVER = typeof window === "undefined"

// Props
const props = defineProps({
  id: { type: String, default: "applet" },
})

// Get route information safely
const instance = getCurrentInstance()
const getRouteQuery = () => {
  try {
    if (instance && instance.appContext.app.config.globalProperties.$route) {
      return instance.appContext.app.config.globalProperties.$route.query
    }
  } catch (error) {
    console.warn("Vue Router not available, checking URL parameters directly")
  }

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

// Initialize data from route
const routeQuery = getRouteQuery()

// Reactive data
const agreements = ref([])
const forms = ref({})
const selected = ref(null)
const expandForm = ref(false)

// Computed properties
const showForm = computed(() => {
  return selected.value ? true : false
})

const getFields = computed(() => {
  return selected.value && forms.value && forms.value[selected.value.value]
    ? forms.value[selected.value.value].fields
    : []
})

// Methods
const loadSelectedFromUri = () => {
  selected.value = routeQuery && routeQuery.open ? agreements.value.find(item => item.value == routeQuery.open) : null
}

const updateUrl = event => {
  const state = window.history.state
  window.history.pushState(state, "", "?open=")

  nextTick(() => {
    const state2 = window.history.state
    const searchURL = new URL(window.location)
    searchURL.searchParams.set("open", event.value)
    window.history.pushState(state2, "", searchURL)
  })
}

// Watchers
watch(
  () => routeQuery.open,
  (to, from) => {
    // console.log(`changed uri: ${from} -> ${to}`)
    loadSelectedFromUri()
  },
)

// Lifecycle hooks
onMounted(() => {
  fetch("/cfg/agreements.yml")
    .then(response => response.text())
    .then(data => {
      const cfg = YAML.parse(data)
      agreements.value = cfg.agreements
      forms.value = cfg.forms
      if (routeQuery.open) {
        loadSelectedFromUri()
      }
    })
})
</script>

<template>
  <div class="vuewidget vuewrapper agreement-form" data-vuetify>
    <v-app :id="id">
      <v-layout v-if="showForm" class="d-flex flex-nowrap h-100 w-100 pt-0 align-center justify-center" >
        <PdfForm
          :agreement-tag="selected.value"
          :title="selected.text"
          :url="selected.url"
          :servicedesk="selected.servicedesk"
          :fields="getFields"
        />
      </v-layout>
      <v-row v-else class="agreement-form-autocomplete" justify="center" style="margin-top: 24px">
        <v-col class="mx-2">
          <v-card class="mb-4">
            <v-card-title>Select Agreement Form</v-card-title>
            <v-card-text>
              <v-autocomplete
                v-model="selected"
                ref="agreement_field"
                autocomplete="ignore-field"
                label="Agreement type"
                placeholder=""
                :items="agreements"
                :item-title="item => item.text"
                :item-value="item => item"
                persistent-placeholder
                variant="outlined"
                hide-details
                @focus="$event.target.select()"
                @update:model-value="updateUrl"
              ></v-autocomplete>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-app>
  </div>
</template>

<style>
.vuewidget.vuewrapper{
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
  height: 100%;
}

.vuewidget.vuewrapper.agreement-form{
  max-width: 1680px !important;
}

.vuewidget.vuewrapper .agreement-form-autocomplete {
  max-width: 900px !important;
  width: 100%;
  height: 100%;
}

.vuewidget.vuewrapper .v-application {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.vuewidget.vuewrapper.agreement-form .v-application .v-application__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: initial;
  min-width: inherit;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
