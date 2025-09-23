<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from "vue"
import YAML from "yaml"

defineOptions({
  name: "SDButton",
})

// Async component import
// const ServiceDesk = defineAsyncComponent(() => import("./ServiceDesk.vue"))

// Props definition
const props = defineProps({
  form: { type: String, default: null },
})

// Reactive data
const dialog = ref(false)
const data = ref({})

// Computed properties
const getData = computed(() => {
  return data.value && data.value[props.form] ? data.value[props.form] : null
})

const showBtn = computed(() => {
  return data.value && data.value[props.form]
})

const getRecipient = computed(() => {
  return data.value && data.value[props.form] && data.value[props.form]["recipient"]
    ? data.value[props.form]["recipient"]
    : "cloud.support+hunt-cloud-request@hunt.ntnu.no"
})

// Load configuration data
const loadConfigData = async () => {
  if (props.form) {
    try {
      const response = await fetch("/cfg/service_desk.yml")
      const yamlData = await response.text()
      const cfg = YAML.parse(yamlData)
      data.value = cfg
    } catch (error) {
      console.error("Failed to load service desk configuration:", error)
    }
  }
}

// Lifecycle
onMounted(() => {
  loadConfigData()
})
</script>

<template>
  <div class="vuewidget vuewrapper sdbutton">
    <section v-if="showBtn">
      <!-- Service desk blue button -->
      <div class="home" style="padding: 0px">
        <div class="hero">
          <p class="action">
            <input
              :value="getData['title']"
              class="nav-link external action-button"
              type="button"
              style="padding: 18px; cursor: pointer"
              @click="dialog = true"
            />
          </p>
        </div>
      </div>

      <!-- Service desk dialog window -->
      <ServiceDesk
        v-model="dialog"
        :ref="form"
        :title="getData['title']"
        :requirements="getData['requirements']"
        :attachments="getData['attachments']"
        :fields="getData['fields']"
        :template="getData['template']"
        :recipient="getRecipient"
      />
    </section>
  </div>
</template>

<style>
.vuewidget.vuewrapper.sdbutton .home {
  padding: 3.6rem 2rem 0;
  max-width: 960px;
  margin: 0 auto;
  display: block;
}

.vuewidget.vuewrapper.sdbutton .home .hero {
  text-align: center;
}

.vuewidget.vuewrapper.sdbutton .home .hero .action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #00509e;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #00488e;
}
</style>
