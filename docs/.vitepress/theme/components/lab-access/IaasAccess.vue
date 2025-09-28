<script setup>
import { ref, computed, onMounted, watch, getCurrentInstance } from "vue"

defineOptions({
  name: "IaasAccess",
})

// Props definition
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

  const urlParams = new URLSearchParams(window.location.search)
  const query = {}
  for (const [key, value] of urlParams) {
    query[key] = value
  }
  return query
}

// Reactive data
const tab = ref(null)
const access = ref(null)
const query = ref({
  ipAddress: null,
  labName: null,
  username: null,
  iaasName: null,
})

const template = ref(`Host {lab_name}-entry
    HostName {ip_address}
    User {username}

Host {lab_name}
    HostName home
    HostKeyAlias {lab_name}
    User {username}
    ProxyJump {lab_name}-entry

Host {iaas_name}
    HostName {iaas_name}
    User ubuntu
    ProxyJump {lab_name}

`)

// Computed properties
const cfgShow = computed(() => {
  return query.value.ipAddress && query.value.labName && query.value.username ? true : false
})

const configText = computed(() => {
  return query.value.ipAddress && query.value.labName && query.value.username ? wrap(template.value) : null
})

const puttyHostName = computed(() => {
  return query.value.ipAddress && query.value.username ? `${query.value.username}@${query.value.ipAddress}` : null
})

const hostsWorkbench = computed(() => {
  return query.value.ipAddress && query.value.labName
    ? `${query.value.ipAddress}  ${query.value.labName}.lab.hdc.ntnu.no`
    : null
})

const isDataComplete = computed(() => {
  return query.value.ipAddress && query.value.labName && query.value.username && query.value.iaasName ? true : false
})

const entryIpUrl = computed(() => {
  return query.value.ipAddress ? query.value.ipAddress.replaceAll(".", "%2E") : ""
})

const iaasName = computed(() => {
  return query.value.iaasName ? query.value.iaasName.replaceAll(".", "%2E").replaceAll("-", "%2D") : ""
})

const userName = computed(() => {
  return query.value.username ? query.value.username.replaceAll("-", "%2D").replaceAll(".", "%2E") : ""
})

const iaas_mobaxtermTerminal = computed(() => {
  return cfgShow.value
    ? `mobaxterm:${iaasName.value}%20%3D%23109%230%25${iaasName.value}%2522%25ubuntu%25%25%2D1%25%2D1%25%25${entryIpUrl.value}%5F%5FPIPE%5F%5F${homeIpUrl.value}%2522%5F%5FPIPE%5F%5F22%25${userName.value}%5F%5FPIPE%5F%5F${userName.value}%25%2D1%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%5F%5FPIPE%5F%5F%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%250%250%250%25%251080%25%250%250%251%25%250%25%25%25%250%25%2D1%25%2D1%250%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%2D256color%25%2D1%250%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%25%2D1%230%23%20%23%2D1`
    : null
})

const homeIpUrl = computed(() => {
  return "home"
})

// Watchers
watch(tab, val => {
  localStorage.osTab = val
})

// Methods
const wrap = template => {
  let text = template
  text = text.replaceAll("{ip_address}", query.value.ipAddress)
  text = text.replaceAll("{lab_name}", query.value.labName)
  text = text.replaceAll("{username}", query.value.username)
  text = text.replaceAll("{iaas_name}", query.value.iaasName)
  return text
}

const copyText = async text => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text || "")
    } else {
      console.warn("Clipboard API not available")
    }
  } catch (error) {
    console.error("Failed to copy text:", error)
  }
}

const copyTextArea = async text => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text || "")
    } else {
      console.warn("Clipboard API not available")
    }
  } catch (error) {
    console.error("Failed to copy text:", error)
  }
}

// Lifecycle
onMounted(() => {
  // Open accordion if hash parameter is defined
  if (window.location.hash !== null && window.location.hash !== "") {
    // Note: this.$refs pattern doesn't exist in Vue 3, would need different approach
    console.log("Hash found:", window.location.hash)
  }

  const accessData = access.value
  if (accessData && accessData.length == 4) {
    query.value.ipAddress = accessData[0]
    localStorage.ipAddress = accessData[0]
    query.value.labName = accessData[1]
    localStorage.labName = accessData[1]
    query.value.username = accessData[2]
    localStorage.username = accessData[2]
    query.value.iaasName = accessData[3]
    localStorage.iaasName = accessData[3]
  } else {
    if (localStorage.ipAddress) {
      query.value.ipAddress = localStorage.ipAddress
    }
    if (localStorage.labName) {
      query.value.labName = localStorage.labName
    }
    if (localStorage.username) {
      query.value.username = localStorage.username
    }
    if (localStorage.iaasName) {
      query.value.iaasName = localStorage.iaasName
    }
  }

  if (localStorage.osTab) {
    tab.value = localStorage.osTab
  }
})

// Parse route query
const routeQuery = getRouteQuery()
console.log(routeQuery)

// Parse access token
access.value = routeQuery.access ? window.atob(routeQuery.access).split("|") : []
console.log(query.value)
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <h1 id="iaas-access" tabindex="-1" @mouseover="onAnchorHover('#')" @mouseleave="onAnchorHover('&ZeroWidthSpace;')">
      IAAS Access
      <a class="header-anchor" href="#iaas-access" aria-label='Permalink to "IAAS Access"'>
        {{ anchor }}
      </a>
    </h1>
    <v-app :id="id">
      <v-card v-show="isDataComplete" class="pt-4">
        <v-row class="ml-3 mb-2" justify="center">
          <v-col cols="6">
            <CopyTextField
              :model-value="query.username"
              label="Username"
              placeholder="Your link is missing access token"
            />
          </v-col>
          <v-col cols="6">
            <CopyTextField
              :model-value="query.labName"
              label="Lab name"
              placeholder="Your link is missing access token"
            />
          </v-col>
          <v-col cols="6">
            <CopyTextField
              :model-value="query.ipAddress"
              label="Lab IP Address"
              placeholder="Your link is missing access token"
            />
          </v-col>
          <v-col cols="6">
            <CopyTextField
              :model-value="query.iaasName"
              label="IAAS machine name"
              placeholder="Your link is missing access token"
            />
          </v-col>
        </v-row>

        <v-card elevation="1">
          <v-tabs v-model="tab" align-tabs="center" grow>
            <v-tab value="windows">Windows</v-tab>
            <v-tab value="macos">MacOS</v-tab>
            <v-tab value="linux">Linux</v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="windows" style="padding-top: 24px">
              <v-expansion-panels elevation="0">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <h3><a href="#ssh-config" class="header-anchor">#</a> 1. SSH Config file</h3>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text id="ssh-config" class="mt-2">
                    <v-col cols="12">
                      1.1. Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit
                      <code>Enter</code>) and assure SSH Config file exists.
                      <CopyTextField
                        :model-value="`type nul >> &quot;%USERPROFILE%\\.ssh\\config&quot;`"
                        label=""
                        prefix="C:\Users\User>"
                      />
                    </v-col>
                    <v-col cols="12">
                      1.2. Open SSH Config file.
                      <CopyTextField
                        :model-value="`Notepad.exe &quot;%USERPROFILE%\\.ssh\\config&quot;`"
                        label=""
                        prefix="C:\Users\User>"
                      />
                    </v-col>
                    <v-col cols="12">
                      1.3. Copy and paste configuration into SSH Config opened in Notepad.
                      <CopyTextArea
                        :model-value="configText"
                        label="SSH Config file"
                        placeholder="Your link is missing access token"
                        rows="16"
                      />
                      <!-- <v-textarea
                        :model-value="configText"
                        ref="ssh-config-win"
                        label="SSH Config file"
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        class="py-2 mt-2"
                        variant="outlined"
                        readonly
                        rows="16"
                        hide-details
                        @focus="$event.target.select()"
                      >
                        <template v-slot:append-inner>
                          <a class="material-icons content_copy" @click="copyTextArea(configText)">&#xe14d;</a>
                        </template>
                      </v-textarea> -->
                    </v-col>
                    <v-col cols="12">
                      1.4. Test by connecting straight into IAAS machine.
                      <CopyTextField :model-value="`ssh ${query.iaasName}`" label="" prefix="C:\Users\User>" />
                    </v-col>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <!-- Mobaxterm iaas terminal session -->
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <h3><a href="#mobaxterm" class="header-anchor">#</a>2. IaaS MobaXterm</h3>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text id="mobaxterm" class="mt-2">
                    <v-col cols="10">
                      <v-btn color="success" block target="_blank" :href="iaas_mobaxtermTerminal">
                        Create terminal session
                      </v-btn>
                    </v-col>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <h3><a href="#troubleshooting" class="header-anchor">#</a> Troubleshooting</h3>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text id="troubleshooting" class="mt-2">
                    <v-col>Work in progress.</v-col>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-tabs-window-item>

            <!-- =========================================== -->
            <v-tabs-window-item value="macos" style="padding-top: 24px">
              <v-expansion-panels elevation="0">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <h3><a href="#ssh-config" class="header-anchor">#</a> 1. SSH Config file</h3>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text id="ssh-config" class="mt-2">
                    <v-col cols="12">
                      1.1. Open new Terminal window and assure SSH Config file exists.
                      <CopyTextField :model-value="`touch ~/.ssh/config`" label="" prefix="~" />
                    </v-col>
                    <v-col cols="12">
                      1.2. Open SSH Config file.
                      <CopyTextField :model-value="`open -Wne ~/.ssh/config`" label="" prefix="~" />
                    </v-col>
                    <v-col cols="12">
                      1.3. Copy and paste configuration into SSH Config opened in Text Editor.
                      <CopyTextArea
                        :model-value="configText"
                        label="SSH Config file"
                        placeholder="Your link is missing access token"
                        rows="16"
                      />
                    </v-col>
                    <v-col cols="12">
                      1.4 Test by connecting straight into IAAS machine.
                      <CopyTextField :model-value="`ssh ${query.iaasName}`" label="" prefix="~" />
                    </v-col>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <h3><a href="#troubleshooting" class="header-anchor">#</a> Troubleshooting</h3>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text id="troubleshooting" class="mt-2">
                    <v-col>Work in progress.</v-col>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-tabs-window-item>

            <!-- =========================================== -->
            <v-tabs-window-item value="linux" style="padding-top: 24px">
              <v-expansion-panels elevation="0">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <h3><a href="#ssh-config" class="header-anchor">#</a> 1. SSH Config file</h3>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text id="ssh-config" class="mt-2">
                    <v-col cols="12">
                      1.1. Open new Terminal window (<code>CTRL + ALT + T</code>) and assure SSH Config file exists.
                      <CopyTextField :model-value="`touch ~/.ssh/config`" label="" prefix="$" />
                    </v-col>
                    <v-col cols="12">
                      1.2. Open SSH Config file.
                      <CopyTextField :model-value="`gedit ~/.ssh/config`" label="" prefix="$" />
                    </v-col>
                    <v-col cols="12">
                      1.3. Copy and paste configuration into SSH Config opened in Text Editor.
                      <CopyTextArea
                        :model-value="configText"
                        label="SSH Config file"
                        placeholder="Your link is missing access token"
                        rows="16"
                      />
                    </v-col>
                    <v-col cols="12">
                      1.4. Test by connecting straight into IAAS machine.
                      <CopyTextField :model-value="`ssh ${query.iaasName}`" label="" prefix="$" />
                    </v-col>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <h3><a href="#troubleshooting" class="header-anchor">#</a> Troubleshooting</h3>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text id="troubleshooting" class="mt-2">
                    <v-col>Work in progress.</v-col>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
      </v-card>

      <v-card v-show="!isDataComplete" class="pt-4">
        Invalid link. Please check your emails to find the full link.
      </v-card>
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

.last-updated {
  display: none;
}

.language-text {
  display: flex;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}

.col.col-12 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.v-input__control {
  margin-top: 4px;
}

.v-text-field__slot {
  font-size: 15px;
}

.v-text-field__prefix {
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  margin-right: 5px;
}
</style>
