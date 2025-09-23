<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue"
import { useRoute } from "vue-router"
import YAML from "yaml"

// Dynamic import for PdfForm component
// const PdfForm = defineAsyncComponent(() => import("./PdfForm.vue"))

// Props
const props = defineProps({
  id: { type: String, default: "applet" },
})

// Route
const route = useRoute()

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
  selected.value =
    route.query && route.query.open ? agreements.value.find(item => item.value == route.query.open) : null
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
  () => route.query.open,
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
      // console.log(data);
      const cfg = YAML.parse(data)
      console.log(cfg)
      agreements.value = cfg.agreements
      forms.value = cfg.forms
      if (route.query.open) {
        loadSelectedFromUri()
      }
    })
})
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
      <v-row v-else align="center" justify="center" style="margin-top: 24px">
        <v-col class="mx-2" style="max-width: 900px">
          <v-card class="mb-4">
            <v-card-title>Select Agreement Form</v-card-title>
            <v-card-text>
              <v-row class="ml-3 mb-2" style="padding-left: 24px; padding-right: 24px">
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

<style>
.vuewidget.vuewrapper {
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
  height: 100%;
}

.vuewidget.vuewrapper .v-application {
  height: 100%;
}

.vuewidget.vuewrapper .v-application .v-application--wrap {
  display: block;
  flex: inherit;
  min-height: initial;
  min-width: inherit;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.page-edit {
  display: none;
}

.language-text {
  display: flex;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
</style>
