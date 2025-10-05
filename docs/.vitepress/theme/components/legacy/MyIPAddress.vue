<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from "vue"

defineOptions({
  name: "MyIPAddress",
})

// Props definition
const props = defineProps({
  id: { type: String, default: "applet" },
  hidePrefix: { type: Boolean, default: false },
})

// Reactive data
const ipAddress = ref(null)
const loading = ref(true)

// Computed properties
const getMyIpaddress = computed(() => {
  return ipAddress.value ? ipAddress.value : null
})

const show = computed(() => {
  return ipAddress.value && ipAddress.value.length > 3 ? true : false
})

// Fetch IP address function
const fetchIpAddress = async () => {
  try {
    const response = await fetch("https://consent-api.hdc.ntnu.no/ip4", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "text/plain",
      },
    })

    const data = await response.text()
    ipAddress.value = data
  } catch (error) {
    console.error("Failed to fetch IP address:", error)
    ipAddress.value = null
  } finally {
    loading.value = false
  }
}

// Lifecycle hook
onMounted(() => {
  fetchIpAddress()
})
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <CopyTextField :model-value="getMyIpaddress" :prefix="hidePrefix ? `` : `Your IP address:`" :loading="loading" />
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
</style>
