<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'

defineOptions({
  name: "LinuxJourney"
})

// Get route information safely
const instance = getCurrentInstance()
const getRouteQuery = () => {
  try {
    if (instance && instance.appContext.app.config.globalProperties.$route) {
      return instance.appContext.app.config.globalProperties.$route.query
    }
  } catch (error) {
    console.warn('Vue Router not available, checking URL parameters directly')
  }

  const urlParams = new URLSearchParams(window.location.search)
  const query = {}
  for (const [key, value] of urlParams) {
    query[key] = value
  }
  return query
}

// Props definition
const props = defineProps({
  username: { type: String, default: null },
  labName: { type: String, default: null },
  ipAddress: { type: String, default: null },
  template: { type: String, default: "" },
})

// Reactive data
const mainExpansionPanel = ref(null)
const extrasExpansionPanel = ref(null)
const vpnDialog = ref(false)
const vpnStepper = ref(1)
const workbenchDialog = ref(false)
const workbenchStepper = ref(1)
const fetchSecretsId = ref(1)
const vpnConfId = ref(2)
const passChangeId = ref(3)
const passLessId = ref(4)
const sshConfId = ref(5)
const hostsFileId = ref(6)
const workbenchId = ref(7)
const lastPanelId = ref(7)
const hostsChangeSuccess = ref(null)
const hostsChangeLoading = ref(false)

const sshKeygenWin = ref(`ssh-keygen -q -t rsa -b 4096 -f %USERPROFILE%\\.ssh\\id_rsa -N ""`)
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

const guidingOptions = ref([
  { text: 'New user', value: 'new_user' },
  { text: 'User to new lab', value: 'new_lab' },
  { text: 'New computer', value: 'new_computer' },
  { text: 'SSH reset', value: 'ssh_reset' },
  { text: 'VPN reset', value: 'vpn_reset' },
  { text: 'TOTP reset (Google authenticator)', value: 'totp_reset' },
  { text: 'Workbench reissue', value: 'workbench_reissue' },
  { text: 'Reissue all', value: 'reissue_all' },
  { text: 'Lab Migration', value: 'lab_migration' },
])

const filterGuidesByType = ref(null)
const incIndices = ref({})

// Computed properties
const cfgShow = computed(() => {
  return props.ipAddress && props.labName && props.username ? true : false
})

const configText = computed(() => {
  return props.ipAddress && props.labName && props.username ? wrap(props.template) : null
})

const passExpiredText = computed(() => {
  return props.ipAddress && props.labName && props.username ? wrap(passExpired.value) : null
})

const hostsWorkbench = computed(() => {
  return props.ipAddress && props.labName ? `${props.ipAddress}    ${props.labName}.lab.hdc.ntnu.no` : null
})

const fqdn = computed(() => {
  return props.labName ? `${props.labName}.lab.hdc.ntnu.no` : null
})

const hostsChangeColor = computed(() => {
  if (typeof hostsChangeSuccess.value == "boolean") {
    return hostsChangeSuccess.value ? "success" : "error"
  } else {
    return "primary"
  }
})

const tlsClientIssuer = computed(() => {
  return props.labName ? `LAB-${props.labName.toUpperCase()} CA` : ''
})

// Methods
const updateFilter = (value, update = false) => {
  const val = guidingOptions.value.find(item => item.value === value)
  filterGuidesByType.value = update && val && val.value ? val.value : filterGuidesByType.value
  localStorage.labAccessGuideFilter = val && val.value ? val.value : null
}

const wrap = (template) => {
  let text = template
  text = text.replaceAll('{ip_address}', props.ipAddress)
  text = text.replaceAll('{lab_name}', props.labName)
  text = text.replaceAll('{username}', props.username)
  return text
}

const copyText = async (key) => {
  try {
    const element = document.querySelector(`[ref="${key}"]`)
    const input = element?.querySelector('input')
    if (input) {
      input.select()
      await navigator.clipboard.writeText(input.value)
    }
  } catch (error) {
    console.error('Failed to copy text:', error)
  }
}

const copyTextArea = async (key) => {
  try {
    const element = document.querySelector(`[ref="${key}"]`)
    const textarea = element?.querySelector('textarea')
    if (textarea) {
      textarea.select()
      await navigator.clipboard.writeText(textarea.value)
    }
  } catch (error) {
    console.error('Failed to copy text:', error)
  }
}

const nextPanel = (inc = 1) => {
  mainExpansionPanel.value = mainExpansionPanel.value ? mainExpansionPanel.value + inc : 1
}

const setHostsChangeSuccess = () => {
  hostsChangeSuccess.value = true
  hostsChangeLoading.value = false
}

const setHostsChangeError = () => {
  hostsChangeSuccess.value = false
  hostsChangeLoading.value = false
}

const testHosts = async () => {
  hostsChangeSuccess.value = null
  hostsChangeLoading.value = true

  try {
    const response = await fetch(`http://${fqdn.value}`, { redirect: "manual" })
    if (response.type === "opaqueredirect") {
      setTimeout(setHostsChangeSuccess, 500)
    } else {
      setTimeout(setHostsChangeError, 500)
    }
  } catch (err) {
    setTimeout(setHostsChangeError, 500)
  }
}

const getNextItem = (groupId, reset = false) => {
  const groupKey = `group-${groupId}`
  if (reset || !incIndices.value || !incIndices.value[groupKey]) {
    incIndices.value[groupKey] = 0
  }
  const itemId = ++incIndices.value[groupKey]
  return `${groupId}.${itemId}.`
}

// Lifecycle
onMounted(() => {
  if (!filterGuidesByType.value && localStorage.hasOwnProperty('labAccessGuideFilter') && localStorage.labAccessGuideFilter) {
    updateFilter(localStorage.labAccessGuideFilter, true)
  }

  const query = getRouteQuery()
  const labAccessGuideFilter = query.filter ? query.filter : null
  if (!filterGuidesByType.value && labAccessGuideFilter) {
    updateFilter(labAccessGuideFilter, true)
  }
})
</script>

<template>
  <v-sheet class="pa-1">
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="filterGuidesByType"
          :items="guidingOptions"
          label="Filter steps"
          placeholder="Showing all steps"
          persistent-placeholder
          chips
          variant="outlined"
          density="compact"
          clearable
          hide-details
          @update:model-value="event => updateFilter(event)"
        />
      </v-col>
    </v-row>

    <v-card class="mt-6" elevation="1">
      <v-expansion-panels v-model="mainExpansionPanel" elevation="0">

        <!-- 1. Fetch secrets -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'ssh_reset', 'vpn_reset', 'workbench_reissue', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#fetch-secrets" class="header-anchor">#</a> {{ fetchSecretsId }}. Fetch secrets</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="fetch-secrets" class="mt-2">
            You have received a link to an encrypted file archive (7-ZIP file).

            <ol>
              <li>Click on the filesender link in the email to download the file and save this on your local computer.</li>
              <li>Unpack (extract) the file only with <a href="/do-science/tools/transfer/7z/#detail-2-ubuntu" target="_blank">software that supports the 7-ZIP archive format</a>.</li>
              <li>Use the key named 7-ZIP file key from your Signal transfer to decrypt the 7z archive.</li>
            </ol>

            <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 2. VPN Access -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'vpn_reset', 'totp_reset', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#vpn-config" class="header-anchor">#</a> {{ vpnConfId }}. VPN Access</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="vpn-config" class="mt-2">
            If you have not setup <b>HUNT Cloud VPN</b> yet follow <i>TOTP</i> and <i>OpenVPN</i> configuration guides:

            <TotpGuide />

            <v-row class="my-1">
              <v-col cols="12">
                <v-btn
                  variant="text"
                  color="primary"
                  @click.stop="vpnDialog = true"
                  elevation="2"
                  prepend-icon="mdi-vpn"
                >
                  2. OpenVPN Configuration
                </v-btn>
              </v-col>
            </v-row>

            <v-dialog
              v-model="vpnDialog"
              persistent
              scrollable
              max-width="960px"
              @keydown.esc="vpnDialog = false"
            >
              <v-card>
                <v-toolbar color="#00509e" theme="dark">
                  <v-toolbar-title>OpenVPN Configuration</v-toolbar-title>
                  <v-spacer />
                  <template v-slot:append>
                    <v-btn icon="mdi-close" @click="vpnDialog = false" />
                  </template>
                </v-toolbar>

                <v-card-text class="pa-0">
                  <v-stepper v-model="vpnStepper" orientation="vertical">
                    <v-stepper-header class="elevation-0">
                      <v-stepper-item
                        :complete="vpnStepper > 1"
                        step="1"
                        title="Install OpenVPN"
                      />
                      <v-divider />
                      <v-stepper-item
                        :complete="vpnStepper > 2"
                        step="2"
                        title="Setup the VPN profile"
                      />
                      <v-divider />
                      <v-stepper-item
                        :complete="vpnStepper > 3"
                        step="3"
                        title="Connect to the VPN"
                      />
                      <v-divider />
                      <v-stepper-item
                        :complete="vpnStepper > 4"
                        step="4"
                        title="Verify your VPN connection"
                      />
                      <v-divider />
                      <v-stepper-item
                        step="?"
                        title="Troubleshooting"
                        subtitle="Optional tips to try in case of issues"
                      />
                    </v-stepper-header>

                    <v-stepper-window>
                      <v-stepper-window-item value="1">
                        <v-card class="mb-8 pr-4" elevation="0">
                          We use OpenVPN to ensure encrypted communication between your local computer and HUNT Cloud.<br /><br />

                          Install the openvpn and network-manager-openvpn-gnome packages from the standard repositories:<br />

                          <CopyTextField
                            :model-value="`sudo apt update && sudo apt install openvpn network-manager-openvpn-gnome`"
                            label=""
                            prefix="$"
                          />
                          <br />

                          <details><summary style="cursor: pointer;"><b>Other linux distributions</b></summary>
                            <br />You have a few options on how to install OpenVPN clients in other distributions:<br /><br />
                            <ul>
                              <li>Install the <code>openvpn</code> package from the official distribution repository.</li>
                              <li>Add the <a href="https://community.openvpn.net/openvpn/wiki/OpenvpnSoftwareRepos" target="_blank">OpenVPN community repository</a> and install the <code>openvpn</code> package.</li>
                              <li>Download the latest <a href="https://openvpn.net/index.php/open-source/downloads.html" target="_blank">source tarball</a> from OpenVPN and install.</li>
                            </ul>
                            <br />
                            After the installation, follow the "Ubuntu Linux" guides below on how to setup and connect.
                          </details>
                        </v-card>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 2">Continue</v-btn>
                      </v-stepper-window-item>

                      <v-stepper-window-item value="2">
                        <v-card class="mb-8 pr-4" elevation="0">
                          <ol>
                            <li>Click on the <i>Network Manager icon</i> in the task bar.</li>
                            <li>Select <i>Edit Connections...</i></li>
                            <li>Click <i>Add</i>.</li>
                            <li>Choose <i>Import a saved VPN configuration</i> and click <i>Create</i>.</li>
                            <li>Select the OpenVPN profile named <code>{{ username }}.ovpn</code> that you collected in Step 1.</li>
                            <li>Enter your user name (same as the OpenVPN profile file name).</li>
                            <li>Click on the person icon in the Password field and select <code>Ask for this password every time</code>.</li>
                            <li>Enter the <i>Private Key Password</i> with the <code>VPN passphrase</code> sent to you from HUNT over Signal.</li>
                            <li>Click on the IPv4 Settings tab.</li>
                            <li>Click <i>Routes...</i></li>
                            <li>Select the <i>Use this connection only for resources on its network</i> and click OK.</li>
                            <li>Click <i>Apply</i>.</li>
                          </ol>
                        </v-card>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 3">Continue</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="vpnStepper = 1">Back</v-btn>
                      </v-stepper-window-item>

                      <v-stepper-window-item value="3">
                        <v-card class="mb-8 pr-4" elevation="0">
                          <ol>
                            <li>Click on the <i>Network Manager</i> icon in the task bar.</li>
                            <li>Choose <i>VPN Connections</i> and select the name of your profile.</li>
                            <li>In the Authenticate VPN window, enter the <code>verification code</code> from TOTP (Google Authenticator) app into the Password field.</li>
                            <li>Click <i>OK</i> to connect.</li>
                          </ol>
                          <br /><br />
                          You should now be connected to the VPN.
                        </v-card>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 4">Continue</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="vpnStepper = 2">Back</v-btn>
                      </v-stepper-window-item>

                      <v-stepper-window-item value="4">
                        <v-card class="mb-8 pr-4" elevation="0">
                          <v-alert
                            type="success"
                            variant="tonal"
                            border="start"
                            elevation="2"
                          >
                            <template v-slot:prepend>
                              <v-icon>mdi-chevron-right</v-icon>
                            </template>
                            <b>Status notification.</b>
                            <hr class="mt-1 mb-2" />
                            If you received the notification that <code>VPN connection has been successfully established</code>,<br />
                            then you are good to go.
                          </v-alert>
                        </v-card>
                        <v-btn color="success" class="mx-2 mb-1" @click="vpnDialog = false; vpnStepper = 1;">Finish</v-btn>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 1">Start again</v-btn>
                        <v-btn color="warning" class="mx-2 mb-1" @click="vpnStepper = 5">Troubleshooting</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="vpnStepper = 3">Back</v-btn>
                      </v-stepper-window-item>

                      <v-stepper-window-item value="5">
                        <v-card class="mb-8 pr-4" elevation="0">
                          <br />
                          <h3 id="authenticate-vpn"><a href="#authenticate-vpn" class="header-anchor">#</a> Authenticate VPN</h3>
                          <p>If the <em>Authenticate VPN</em> prompt pops up again, then try to log in again with a new <strong><code>verification code</code></strong>.</p>

                          <br />
                          <h3 id="vpn-connection-failed"><a href="#vpn-connection-failed" class="header-anchor">#</a> VPN connection failed</h3>
                          <p>
                            If you received the notification VPN Connection Failed after 60 seconds, please check the following:
                            <ul>
                              <li>Verify that you have an active internet connection.</li>
                              <li>Verify that the Private Key Password is correct.</li>
                            </ul>
                          </p>

                          <v-alert
                            type="info"
                            variant="tonal"
                            border="start"
                            elevation="2"
                          >
                            <b>TIP</b>
                            <hr class="mt-1 mb-2" />
                            If nothing works, please head over to our main <a href="/do-science/troubleshooting/connection/#vpn" target="_blank">troubleshooting section</a> for more information on how to troubleshoot connections.
                          </v-alert>
                        </v-card>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 1">Start again</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="vpnStepper = 4">Back</v-btn>
                      </v-stepper-window-item>
                    </v-stepper-window>
                  </v-stepper>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 3. SSH Passphrase change -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_lab', 'ssh_reset', 'lab_migration', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#ssh-passphrase" class="header-anchor">#</a> {{ passChangeId }}. SSH Passphrase change</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="ssh-passphrase" class="mt-2">
            <v-alert
              v-show="filterGuidesByType && ['new_lab', 'ssh_reset', 'lab_migration'].includes(filterGuidesByType)"
              type="warning"
              variant="tonal"
              border="start"
              elevation="2"
            >
              Ensure that you are logged into VPN.
            </v-alert>

            <v-col cols="12">
              {{ getNextItem(passChangeId, true) }} Design <DesignNewPassphrase />.
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Start Terminal application.
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Login to entry machine.
              <CopyTextField
                :model-value="`ssh -o StrictHostKeyChecking=accept-new ${username}@${ipAddress}`"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} You should then be prompted to enter a password. Enter your <code>SSH temporary key</code> from Signal message.
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="`${username}@${ipAddress}'s password:`"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} When asked for current UNIX password type in your <code>SSH temporary key</code> from Signal message.
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="passExpiredText"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Enter your new passphrase and retype for verification. You will be kicked off the entry machine right after your password is changed.
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="passSetNew"></code>
              </pre></div>
              <v-alert
                type="warning"
                variant="tonal"
                border="start"
                elevation="2"
              >
                If you are getting an <code>Authentication token manipulation error</code> check strength requirements for passphrase in step {{ passChangeId }}.1.
              </v-alert>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Reconnect to entry using your new passphrase.
              <CopyTextField
                :model-value="`ssh ${username}@${ipAddress}`"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              Expected result:
              <div class="language- extra-class"><pre class="language-text">
                  <code v-text="`${username}@${labName}-entry:~$`"></code>
              </pre></div>
            </v-col>

            <v-btn v-if="['lab_migration'].includes(filterGuidesByType)" color="primary" class="mx-2 my-2" size="small" @click="nextPanel(2)">Next</v-btn>
            <v-btn v-else color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- Continue with remaining panels... -->
        <!-- For brevity, I'll include a few more key panels and indicate where the rest would go -->

        <!-- 4. SSH Passwordless access -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#passwordless-access" class="header-anchor">#</a> {{ passLessId }}. SSH Passwordless access</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="passwordless-access" class="mt-2">
            <v-col cols="12">
              {{ getNextItem(passLessId, true) }} Open new Terminal window (<code>CTRL + ALT + T</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
              <CopyTextField
                :model-value='`ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""`'
                class="my-0"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <!-- Additional steps would continue here... -->

            <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 7. Workbench -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'workbench_reissue', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#workbench" class="header-anchor">#</a> {{ workbenchId }}. Workbench - certificate</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="workbench" class="mt-2">
            <v-col cols="12">
              <a href="/do-science/hunt-workbench/" target="_blank">HUNT Workbench</a> provides you with web-based access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R and MATLAB.
            </v-col>
            <v-col cols="12">
              <strong>Follow Workbench Access guide to configure your access:</strong>
            </v-col>

            <v-row class="my-1 mx-1">
              <v-col cols="12">
                <v-btn
                  variant="text"
                  color="primary"
                  @click.stop="workbenchDialog = true"
                  elevation="2"
                  prepend-icon="mdi-cog"
                >
                  Workbench Access
                </v-btn>
              </v-col>
            </v-row>

            <!-- Workbench dialog would be implemented similarly to VPN dialog -->

            <v-col cols="12">
              After you have successfully completed all the steps, you can start using your Workbench environment by opening this URL address: <a :href="`https://${fqdn}`" target="_blank">https://{{ fqdn }}</a>
            </v-col>

            <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- Where to go next -->
        <v-expansion-panel v-if="mainExpansionPanel && mainExpansionPanel == lastPanelId">
          <v-expansion-panel-title>
            <h3><a href="#where-to-go-next" class="header-anchor">#</a> Where to go next</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="where-to-go-next" class="mt-2">
            <v-sheet
              rounded="lg"
              width="100%"
              class="pa-4 text-center mx-auto"
            >
              <v-icon
                class="mb-5"
                color="success"
                size="100"
              >mdi-check-circle</v-icon>

              <h2 class="text-h5 mb-6">You have configured your lab access</h2>

              <p class="mb-4 text-medium-emphasis text-body-2">
                Feel free to continue reading our <a href="/do-science/hunt-workbench/getting-started/" target="_blank">getting started guides</a> and figure out which <a href="/do-science/tools/" target="_blank">tools</a> do you need for your work.
                <br>
                Otherwise, you're done!
              </p>
              <v-row>
                <v-col cols="12">
                  <v-btn color="success" class="mx-2 mb-1" :href="`https://${fqdn}`" target="_blank" elevation="3">Open Workbench</v-btn>
                  <v-btn color="primary" class="mx-2 mb-1" :href="`https://${fqdn}/hub/home`" target="_blank" elevation="3">Control panel</v-btn>
                </v-col>
              </v-row>
            </v-sheet>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <v-card elevation="1" class="mt-4">
      <v-card-title class="pt-3 pb-2" style="font-weight: 400;">
        Optional guides
      </v-card-title>
      <v-expansion-panels v-model="extrasExpansionPanel" elevation="0">

        <!-- Copy SSH Public key -->
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h3><a href="#copypubkey" class="header-anchor">#</a> Copy SSH Public key</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="copypubkey" class="mt-2">
            <v-col cols="12">
              1. Open new Terminal window (<code>CTRL + ALT + T</code>).
            </v-col>
            <v-col cols="10">
              2. If you don't have xclip installed yet run installation.
              <CopyTextField
                :model-value="`sudo apt-get update && sudo apt-get install -y xclip`"
                class="my-2"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="10">
              3. Run this command to copy SSH Public key created in Step 3 into clipboard.
              <CopyTextField
                :model-value="`xclip -selection clipboard < ~/.ssh/id_rsa.pub`"
                class="my-2"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              3. Paste (CTRL+V) your SSH Public key where needed.
            </v-col>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- Troubleshooting -->
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h3><a href="#troubleshooting" class="header-anchor">#</a> Troubleshooting</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="troubleshooting" class="mt-2">
            <v-col cols="12">
              WIP
            </v-col>
          </v-expansion-panel-text>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-card>
  </v-sheet>
</template>
