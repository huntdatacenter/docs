<script setup>
import { ref, computed, onMounted, defineAsyncComponent, getCurrentInstance } from "vue"
import YAML from "yaml"

const ISSERVER = typeof window === "undefined"

defineOptions({
  name: "SDFullscreen",
})

// Async component import
const ServiceDesk = defineAsyncComponent(() => import("./ServiceDesk.vue"))

// Props definition
const props = defineProps({
  form: { type: String, default: null },
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

// Reactive data
const formTag = ref(null)
const data = ref({})
const dialog = ref(false)

// Computed properties
const getData = computed(() => {
  return data.value && data.value[formTag.value] ? data.value[formTag.value] : null
})

const showForm = computed(() => {
  return data.value && data.value[formTag.value]
})

const getRecipient = computed(() => {
  return data.value && data.value[formTag.value] && data.value[formTag.value]["recipient"]
    ? data.value[formTag.value]["recipient"]
    : "cloud.support+hunt-cloud-request@hunt.ntnu.no"
})

// Methods
const loadFormTag = () => {
  // URI: ?form=form_name
  const query = getRouteQuery()
  formTag.value = query && query.form ? query.form : props.form
}

const loadFormData = async () => {
  try {
    const response = await fetch("/cfg/service_desk.yml")
    const yamlData = await response.text()
    const cfg = YAML.parse(yamlData)
    data.value = cfg
    dialog.value = true
  } catch (error) {
    console.error("Failed to load service desk configuration:", error)
  }
}

// Watchers (commented out the original watcher)
// watch(dialog, (val) => {
//   console.log(val)
//   if (!val) {
//     const state = window.history.state
//     const searchURL = new URL(window.location)
//     window.history.pushState(state, '', searchURL)
//   }
// })

// Lifecycle
onMounted(() => {
  loadFormTag()
  loadFormData()
})
</script>

<template>
  <section v-if="showForm">
    <ServiceDesk
      v-model="dialog"
      :ref="formTag"
      :title="getData['title']"
      :requirements="getData['requirements']"
      :attachments="getData['attachments']"
      :fields="getData['fields']"
      :template="getData['template']"
      :recipient="getRecipient"
      fullscreen
    />
  </section>
</template>
