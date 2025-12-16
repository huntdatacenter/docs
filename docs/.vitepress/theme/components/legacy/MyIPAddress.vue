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

const isNtnuVpn = computed(() => {
  return ipAddress.value && ipAddress.value.startsWith("10.50.")
})

const isEduroam = computed(() => {
  return ipAddress.value && (ipAddress.value.startsWith("10.24.") || ipAddress.value.startsWith("10.20."))
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
      <v-alert
        v-if="isNtnuVpn"
        type="warning"
        color="orange-darken-4"
        class="mt-1"
        elevation="0"
        variant="tonal"
        rounded="lg"
      >
        It seems like you are connected to NTNU VPN. You should be able to connect to HUNT Cloud VPN. If you still
        experience issues send us a request to add you to NTNU VPN group.
      </v-alert>
      <v-alert
        v-if="isEduroam"
        type="warning"
        color="orange-darken-4"
        class="mt-1"
        elevation="0"
        variant="tonal"
        rounded="lg"
      >
        It seems like you are connected to NTNU / Eduroam network. You should be able to connect to HUNT Cloud VPN.
      </v-alert>
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
