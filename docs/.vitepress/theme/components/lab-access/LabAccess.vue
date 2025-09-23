<script setup>
import { ref, computed, onMounted, watch, getCurrentInstance } from "vue"
import YAML from "yaml"

// Dynamic import for components
// import { defineAsyncComponent } from "vue"
// const TotpGuide = defineAsyncComponent(() => import("./TotpGuide.vue"))

defineOptions({
  name: "LabAccess",
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
const migMap = ref(null)
const migrated = ref(false)
const filterLabMigration = ref(false)
const query = ref({
  ipAddress: null,
  labName: null,
  username: null,
})

// Template strings
const sshKeygenWin = ref(`ssh-keygen -q -t rsa -b 4096 -f %USERPROFILE%\\.ssh\\id_rsa -N ""`)
const sshKeygenMac = ref(`ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""`)
const powershell = ref(`# -- Set new passphrase on entry
ssh -o StrictHostKeyChecking=accept-new {username}@{ip_address}
# -- Reconnect to entry
ssh {username}@{ip_address}

# -- Set new passphrase on home
ssh -o StrictHostKeyChecking=accept-new home
# -- Confirm passphrase change by reconnecting to home
ssh home

# -- Open new Powershell window and generate ssh key
ssh-keygen -q -t rsa -b 4096 -f $env:USERPROFILE\\.ssh\\id_rsa -N '""'

# -- Set public key in lab
type $env:USERPROFILE\\.ssh\\id_rsa.pub | ssh {username}@{ip_address} add-public-key

# -- Confirm passwordless access
ssh {username}@{ip_address}`)

const passExpired = ref(`WARNING: Your password has expired.
You must change your password now and login again!
Changing password for {username}.
(current) UNIX password:`)

const passSetNew = ref(`New password:
Retype new password:`)

const passChangedEntry = ref(`passwd: Password updated successfully
Connection to {ip_address} closed.`)

const passChangedHome = ref(`passwd: Password updated successfully
Connection to home closed.`)

const template = ref(`Host {lab_name}-entry
    HostName {ip_address}
    User {username}

Host {lab_name}
    HostName home
    HostKeyAlias {lab_name}
    User {username}
    # Use ProxyCommand to jump directly to home via entry
    ProxyJump {lab_name}-entry
`)

// Computed properties
const cfgShow = computed(() => {
  return query.value.ipAddress && query.value.labName && query.value.username ? true : false
})

const configText = computed(() => {
  return query.value.ipAddress && query.value.labName && query.value.username ? wrap(template.value) : null
})

const passExpiredText = computed(() => {
  return query.value.ipAddress && query.value.labName && query.value.username ? wrap(passExpired.value) : null
})

const puttyHostName = computed(() => {
  return query.value.ipAddress && query.value.username ? `${query.value.username}@${query.value.ipAddress}` : null
})

const hostsWorkbench = computed(() => {
  return query.value.ipAddress && query.value.labName
    ? `${query.value.ipAddress}    ${query.value.labName}.lab.hdc.ntnu.no`
    : null
})

const entryIpUrl = computed(() => {
  return query.value.ipAddress ? query.value.ipAddress.replace(".", "%2E") : ""
})

const homeIpUrl = computed(() => {
  return "home"
})

const getCurrentUrl = computed(() => {
  return window.location.href
})

// Methods
const migrationMapping = async () => {
  try {
    const response = await fetch("/cfg/migmap.yml")
    const data = await response.text()
    const cfg = YAML.parse(data)
    migMap.value = cfg
    checkIfMappingRedirect("migrationMapping")
  } catch (error) {
    console.error("Failed to load migration mapping:", error)
  }
}

const checkIfMappingRedirect = (src = null) => {
  if (migMap.value && query.value.ipAddress) {
    if (migMap.value.hasOwnProperty(query.value.ipAddress) && migMap.value[query.value.ipAddress]) {
      const newIp = migMap.value[query.value.ipAddress]
      query.value.ipAddress = newIp
      localStorage.ipAddress = newIp

      // Simple check for recursive loops
      if (!migMap.value.hasOwnProperty(newIp)) {
        const queryString = btoa(`${newIp}|${query.value.labName}|${query.value.username}`)
        let search = window.location.search
        const routeQuery = getRouteQuery()

        localStorage.migrated = "1"
        window.location.search = search.replace(routeQuery.access, queryString)
      }
    }
  }
}

const wrap = template => {
  let text = template
  text = text.replaceAll("{ip_address}", query.value.ipAddress)
  text = text.replaceAll("{lab_name}", query.value.labName)
  text = text.replaceAll("{username}", query.value.username)
  return text
}

const copyText = async key => {
  try {
    // Modern clipboard API approach
    if (navigator.clipboard && window.isSecureContext) {
      const element = document.querySelector(`[ref="${key}"]`)
      const input = element?.querySelector("input")
      if (input) {
        await navigator.clipboard.writeText(input.value)
      }
    } else {
      // Fallback for older browsers
      const element = document.querySelector(`[ref="${key}"]`)
      const input = element?.querySelector("input")
      if (input) {
        input.select()
        document.execCommand("copy")
      }
    }
  } catch (error) {
    console.error("Failed to copy text:", error)
  }
}

const copyTextArea = async key => {
  try {
    // Modern clipboard API approach
    if (navigator.clipboard && window.isSecureContext) {
      const element = document.querySelector(`[ref="${key}"]`)
      const textarea = element?.querySelector("textarea")
      if (textarea) {
        await navigator.clipboard.writeText(textarea.value)
      }
    } else {
      // Fallback for older browsers
      const element = document.querySelector(`[ref="${key}"]`)
      const textarea = element?.querySelector("textarea")
      if (textarea) {
        textarea.select()
        document.execCommand("copy")
      }
    }
  } catch (error) {
    console.error("Failed to copy textarea:", error)
  }
}

// Watchers
watch(tab, val => {
  localStorage.osTab = val
})

// Lifecycle
onMounted(() => {
  if (localStorage.hasOwnProperty("migrated") && localStorage.migrated === "1") {
    migrated.value = true
    localStorage.migrated = null
  }

  migrationMapping()

  // Open accordion if hash parameter is defined
  if (window.location.hash !== null && window.location.hash !== "") {
    // Note: Hash-based accordion opening would need to be implemented differently in Vue 3
    // since we don't have direct access to $refs in the same way
  }

  const accessData = access.value
  if (accessData && accessData.length == 3) {
    query.value.ipAddress = accessData[0]
    localStorage.ipAddress = accessData[0]
    query.value.labName = accessData[1]
    localStorage.labName = accessData[1]
    query.value.username = accessData[2]
    localStorage.username = accessData[2]
  } else if (accessData && accessData.length == 4) {
    query.value.ipAddress = accessData[0]
    localStorage.ipAddress = accessData[0]
    query.value.labName = accessData[2]
    localStorage.labName = accessData[2]
    query.value.username = accessData[3]
    localStorage.username = accessData[3]
  } else if (!accessData || accessData.length == 0) {
    if (localStorage.ipAddress) {
      query.value.ipAddress = localStorage.ipAddress
    }
    if (localStorage.labName) {
      query.value.labName = localStorage.labName
    }
    if (localStorage.username) {
      query.value.username = localStorage.username
    }
  }

  if (localStorage.osTab) {
    tab.value = localStorage.osTab
  }

  checkIfMappingRedirect("mounted")
})

// Initialize data from route
const routeQuery = getRouteQuery()
access.value = routeQuery.access ? atob(routeQuery.access).split("|") : []
filterLabMigration.value = routeQuery.filter && routeQuery.filter === "lab_migration" ? true : false
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-sheet v-show="!cfgShow" class="ma-4">
        <v-row justify="center">
          <v-col cols="12"> You should receive your Lab access links as part of your onboarding email. </v-col>
          <v-col cols="12">
            <v-alert type="warning" variant="tonal" border="start" elevation="2">
              <strong>Haven't signed a user agreement yet?</strong>
              <hr class="mt-1 mb-2" />
              You need to follow up on user onboarding with your lab leader or lab coordinator in
              <a href="https://docs.hdc.ntnu.no/administer-science/service-desk/lab-orders/#user-management">
                Service desk > User management
              </a>
              <br />
            </v-alert>
          </v-col>
          <v-col cols="12">
            <v-alert type="warning" variant="tonal" border="start" elevation="2">
              <strong>{{
                access && access.length > 0 ? `Your link appears to be wrong.` : `Have you lost your access link?`
              }}</strong>
              <hr class="mt-1 mb-2" />
              If you lost your access link, click on the blue button below to request a new one.
              <br />
              <SDButton form="request_lab_access_link" />
            </v-alert>
          </v-col>
        </v-row>
      </v-sheet>

      <v-card v-show="cfgShow" class="pt-4">
        <v-card elevation="1">
          <v-alert v-if="migrated" type="warning" variant="tonal" border="start" elevation="2">
            <strong
              >Your Lab access link has changed after
              <a href="/do-science/faq/migration/" target="_blank">Lab migration (FAQ)</a>.</strong
            >
            <hr class="mt-1 mb-2" />
            Make sure to use this new link next time:<br />
            <CopyTextField :model-value="getCurrentUrl" label="" prefix="" placeholder="" />
          </v-alert>

          <v-tabs v-model="tab" centered grow>
            <v-tab value="first-time">First time?</v-tab>
            <v-tab value="windows">Windows</v-tab>
            <v-tab value="macos">MacOS</v-tab>
            <v-tab value="linux">Linux</v-tab>
          </v-tabs>

          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="first-time" style="padding-top: 24px">
              <v-row justify="center">
                <v-col cols="10">
                  <v-container class="introblock">
                    <v-row justify="center" style="margin-left: 16px; margin-right: 16px">
                      <v-col v-if="filterLabMigration" cols="10" align="center">
                        <b>First time setting up access to your lab after migration?</b>
                      </v-col>
                      <v-col v-else cols="10" align="center">
                        <b>First time setting up access to your lab?</b>
                      </v-col>
                    </v-row>
                    <v-row justify="center" style="margin-left: 16px; margin-right: 16px">
                      <v-col cols="10" align="center">
                        We have tailored all the steps in this guide to you. You'll find your unique connection
                        information conveniently included where necessary.
                      </v-col>
                    </v-row>
                    <v-row justify="center" style="margin-left: 16px; margin-right: 16px">
                      <v-col cols="10" align="center">
                        To make your onboarding process as efficient as possible, we've made it easy for you to copy and
                        paste commands. Simply look for a button in the right corner of commands.
                      </v-col>
                    </v-row>
                    <v-row justify="center" style="margin-left: 16px; margin-right: 16px">
                      <v-col cols="10" align="center">
                        Whether you're using Windows, macOS, or Linux, this guide accommodates your operating system
                        preference. So go ahead, choose your OS, and embark on your journey with confidence.
                      </v-col>
                    </v-row>
                    <v-row justify="center" style="margin-left: 16px; margin-right: 16px">
                      <v-col cols="10" align="center">
                        <i>Let's get started!</i>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col align="center">
                  <img alt="Illustration of a robot" src="/img/hunt-cloud_bot_250_2.png" />
                </v-col>
              </v-row>
            </v-tabs-window-item>

            <v-tabs-window-item value="windows">
              <AccessIntro :username="query.username" :labName="query.labName" :ipAddress="query.ipAddress" />

              <WindowsJourney
                :username="query.username"
                :labName="query.labName"
                :ipAddress="query.ipAddress"
                :template="template"
              />
            </v-tabs-window-item>

            <v-tabs-window-item value="macos">
              <v-expansion-panels elevation="0">
                <AccessIntro :username="query.username" :labName="query.labName" :ipAddress="query.ipAddress" />

                <MacJourney
                  :username="query.username"
                  :labName="query.labName"
                  :ipAddress="query.ipAddress"
                  :template="template"
                />
              </v-expansion-panels>
            </v-tabs-window-item>

            <v-tabs-window-item value="linux">
              <v-expansion-panels elevation="0">
                <AccessIntro :username="query.username" :labName="query.labName" :ipAddress="query.ipAddress" />

                <LinuxJourney
                  :username="query.username"
                  :labName="query.labName"
                  :ipAddress="query.ipAddress"
                  :template="template"
                />
              </v-expansion-panels>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
      </v-card>
    </v-app>
  </div>
</template>

<style>
.vuewidget.vuewrapper {
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
}

.vuewidget.vuewrapper .v-application {
  code {
    font-size: 100% !important;
  }
}

.vuewidget.vuewrapper .v-application--wrap {
  display: block;
  flex: inherit;
  min-height: initial;
  min-width: inherit;
  width: 100%;
  overflow-x: hidden;
}

.vuewidget.vuewrapper .v-chip--removable {
  background-color: #97d2d4 !important;
}

.vuewidget.vuewrapper .v-application a {
  color: #1976d2;
}

.vuewidget.vuewrapper a.header-anchor {
  font-size: 0.85em;
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  margin-top: 0.125em;
  opacity: 0;
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

.introblock {
  background: url("/img/arrowup.svg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
}
</style>
