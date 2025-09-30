<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'

const ISSERVER = typeof window === "undefined"

defineOptions({
  name: "MacJourney"
})

// Props definition
const props = defineProps({
  username: { type: String, default: null },
  labName: { type: String, default: null },
  ipAddress: { type: String, default: null },
  template: { type: String, default: "" },
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

// incIndices is not a reactive variable so no need to use ref()
let incIndices = {}

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

const hostsCyberduck = computed(() => {
  return props.ipAddress && props.labName ? `10.5.5.12    home
${props.ipAddress}    ${props.labName}-entry
` : null
})

const fqdn = computed(() => {
  return props.labName ? `${props.labName}.lab.hdc.ntnu.no` : null
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

const copyText = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text || '')
    } else {
      console.warn('Clipboard API not available')
    }
  } catch (error) {
    console.error('Failed to copy text:', error)
  }
}

const copyTextArea = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text || '')
    } else {
      console.warn('Clipboard API not available')
    }
  } catch (error) {
    console.error('Failed to copy text:', error)
  }
}

const nextPanel = (inc = 1) => {
  mainExpansionPanel.value = mainExpansionPanel.value ? mainExpansionPanel.value + inc : 1
}

const getNextItem = (groupId, reset = false) => {
  const groupKey = `group-${groupId}`
  if (reset || !incIndices[groupKey]) {
    incIndices[groupKey] = 0
  }
  const itemId = ++incIndices[groupKey]
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
  <v-sheet class="macos-journey pa-1">
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="filterGuidesByType"
          :items="guidingOptions"
          item-title="text"
          item-value="value"
          label="Filter steps"
          placeholder="Showing all steps"
          persistent-placeholder
          chips
          clearable
          variant="outlined"
          density="compact"
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
              <li>Unpack (extract) the file only with <a href="/do-science/tools/transfer/7z/#detail-2-macos" target="_blank">software that supports the 7-ZIP archive format</a>.</li>
              <li>Use the key named 7-ZIP file key from your Signal transfer to decrypt the 7z archive.</li>
            </ol>

            <VideoGuide
              v-model="mainExpansionPanel"
              title="Fetch secrets"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-macOS-fetch-secrets-v1.mp4/f0358961-6e4d-c415-8643-39212a0e19d7?t=1712929989690"
              poster="/img/video-covers/user-onboarding-fetch-secrets-video-cover.jpeg"
            />

            <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 2. VPN Access -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'vpn_reset', 'totp_reset', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#vpn-config" class="header-anchor">#</a> {{ vpnConfId }}. VPN Access</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="vpn-config" class="mt-2">
            If you have not setup <b>HUNT Cloud VPN</b> yet follow <i>TOTP</i> and <i>Tunnelblick</i> configuration guides:

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
                  2. Tunnelblick Configuration
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
                <v-card-title class="pa-0">
                  <v-toolbar color="#00509e" theme="dark">
                    <v-toolbar-title>Tunnelblick Configuration</v-toolbar-title>
                    <v-spacer />
                    <template v-slot:append>
                      <v-btn icon="mdi-close" @click="vpnDialog = false" />
                    </template>
                  </v-toolbar>
                </v-card-title>

                <v-card-text class="pa-0">
                  <v-stepper-vertical v-model="vpnStepper" hide-actions>
                    <v-stepper-vertical-item
                      :complete="vpnStepper > 1"
                      value="1"
                      title="Install Tunnelblick"
                    >
                      <v-card class="mb-8 pr-4" elevation="0">
                        <v-card-text>
                          We use <code>Tunnelblick</code> to ensure encrypted communication between your local computer and HUNT Cloud.<br /><br />

                          <a href="https://tunnelblick.net/iprelease/Latest_Tunnelblick_Stable.dmg" target="_blank">Download and install Tunnelblick from this page.</a>
                          <br /><br />
                          In case the link above does not start download <a href="https://tunnelblick.net/downloads.html#:~:text=GnuPG%20v2%20signature-,Stable,-Tunnelblick" target="_blank">lookup the 'Stable' release from this download page (opens new window).</a>
                          <br /><br />
                        </v-card-text>
                      </v-card>

                      <template v-slot:actions>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 2">Continue</v-btn>
                        <v-btn color="" class="mx-2 mb-1" @click="vpnStepper = 5">Skip to troubleshooting</v-btn>
                      </template>
                    </v-stepper-vertical-item>

                    <v-stepper-vertical-item
                      :complete="vpnStepper > 2"
                      value="2"
                      title="Setup the VPN profile"
                    >
                      <v-card class="mb-8 pr-4" elevation="0">
                        <v-card-text>
                          <b>If you 'do' get prompted with the Welcome to Tunnelblick message, follow these steps:</b>

                          <ol>
                            <li>Select I have configuration files.</li>
                            <li>In the Welcome to Tunnelblick prompt, select I have configuration files.</li>
                            <li>When prompted for which type of configuration you have, select OpenVPN Configurations.</li>
                            <li>Select the OpenVPN profile named <code>{{ username }}.ovpn</code> in the collection of credentials given from HUNT Cloud.</li>
                            <li>Continue with the Connecting to the VPN section below.</li>
                          </ol>

                          <br />
                          <b>If you 'do not' get prompted with the Welcome to Tunnelblick message, follow these steps:</b>

                          <ol>
                            <li>Find the OpenVPN profile named <code>{{ username }}.ovpn</code> that you collected in Step 1.</li>
                            <li>Right-click the file OpenVPN profile named <code>{{ username }}.ovpn</code>.</li>
                            <li>Select <code>Open With</code> -> <code>Tunnelblick</code>.</li>
                            <li>When prompted for <code>Install Configuration For All Users</code>, select <code>Only Me</code>.</li>
                            <li>Enter your macOS password to allow Tunnelblick to install the OpenVPN configuration.</li>
                            <li>Continue with the <code>Connecting to the VPN section</code> below.</li>
                          </ol>
                        </v-card-text>
                      </v-card>

                      <template v-slot:actions>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 3">Continue</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="vpnStepper = 1">Back</v-btn>
                      </template>
                    </v-stepper-vertical-item>

                    <v-stepper-vertical-item
                      :complete="vpnStepper > 3"
                      value="3"
                      title="Connect to the VPN"
                    >
                      <v-card class="mb-8 pr-4" elevation="0">
                        <v-card-text>
                          <ol>
                            <li>Start Tunnelblick and Connect.</li>
                            <li>Enter your user name (same as the OpenVPN profile file name).</li>
                            <li>
                              Enter the verification code from Google Authenticator as your password. <br />
                              <img alt="tunnelblick-login" src="/img/vpn/tunnelblick-login.png" /> <br />
                              Make sure that the Save password checkbox is <b>unchecked</b>.
                            </li>
                            <li>
                              When prompted for a Private Key Password or Passphrase, insert the VPN passphrase from Signal message.
                              <br /><br />
                              Your authentication will fail when you complete your passphrase above.<br />
                              This is expected since your verification code timed out while you typed your passphrase.
                              <br /><br />
                            </li>
                            <li>Now try again to connect with a fresh verification code from Google Authenticator.</li>
                          </ol>
                          <br /><br />
                          You should now be connected to the VPN.
                        </v-card-text>
                      </v-card>

                      <template v-slot:actions>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 4">Continue</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="vpnStepper = 2">Back</v-btn>
                      </template>
                    </v-stepper-vertical-item>

                    <v-stepper-vertical-item
                      :complete="vpnStepper > 4"
                      value="4"
                      title="Verify your VPN connection"
                    >
                      <v-card class="mb-8 pr-16" elevation="0">
                        <v-card-text>
                          <v-alert
                            border="start"
                            border-color="success"
                            elevation="2"
                            icon="mdi-chevron-right"
                          >
                            <b>Tunnelblick window should state "Connected".</b>
                            <hr class="mt-1 mb-2" />
                            A small Tunnelblick window should state <b>"Connected"</b> in green letters
                            with a timer that count the connection length.
                            <br /><br />
                            You should also see it by hovering your mouse over Tunnelblick icon
                            in <a href="https://support.apple.com/en-ie/guide/mac-help/mchlp1446/mac" target="_blank">the menu bar</a>.
                          </v-alert>
                        </v-card-text>
                      </v-card>

                      <template v-slot:actions>
                        <v-btn color="success" class="mx-2 mb-1" @click="vpnDialog = false; vpnStepper = 1;">Finish</v-btn>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 1">Start again</v-btn>
                        <v-btn color="warning" class="mx-2 mb-1" @click="vpnStepper = 5">Troubleshooting</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="vpnStepper = 3">Back</v-btn>
                      </template>
                    </v-stepper-vertical-item>

                    <v-stepper-vertical-item
                      value="5"
                      title="Troubleshooting"
                      subtitle="Optional tips to try in case of issues"
                    >
                      <v-card class="mb-8 pr-4" elevation="0">
                        <v-card-text>
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

                          <br />
                          <h3 id="totp-wrong-credentials"><a href="#totp-wrong-credentials" class="header-anchor">#</a> TOTP wrong credentials</h3>
                          <p>
                            If you received an error "wrong credentials" after using your TOTP authenticator:
                            <ul>
                              <li>Make sure your phone is connected to internet for time synchronization.</li>
                            </ul>
                          </p>

                          <br />
                          <h3 id="could-not-read-auth-error"><a href="#could-not-read-auth-error" class="header-anchor">#</a> Could not read Auth error</h3>
                          <p>
                            The error messages below indicates that TOTP (Google Auth) code is not accepted.
                            You should try to setup your TOTP one more time or request a TOTP reset in Service desk.
                            <div class="language- extra-class"><pre class="language-text">
                              <code v-text="`ERROR: could not read Auth username/password/ok/string from management interface`"></code>
                            </pre></div>

                          </p>

                          <br />
                          <h3 id="could-not-read-private-key-error"><a href="#could-not-read-private-key-error" class="header-anchor">#</a> Could not read Private Key error</h3>
                          <p>
                            The error messages below indicates that there is a typo in the Private Key Password (step 2.3.5) and you need to type it in again.
                            <div class="language- extra-class"><pre class="language-text">
                              <code v-text="`ERROR: could not read Private Key username/password/ok/string from management interface`"></code>
                            </pre></div>

                            <div class="language- extra-class"><pre class="language-text">
                              <code v-text="`Cannot load private key file`"></code>
                            </pre></div>
                          </p>

                          <v-alert
                            border="start"
                            border-color="info"
                            elevation="2"
                          >
                            <b>TIP</b>
                            <hr class="mt-1 mb-2" />
                            If nothing works, please head over to our main <a href="/do-science/troubleshooting/connection/#vpn" target="_blank">troubleshooting section</a> for more information on how to troubleshoot connections.
                          </v-alert>
                        </v-card-text>
                      </v-card>

                      <template v-slot:actions>
                        <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 1">Start again</v-btn>
                        <v-btn color="success" class="mx-2 mb-1" @click="vpnDialog = false; vpnStepper = 1;">Finish</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="vpnStepper = 4">Back</v-btn>
                      </template>
                    </v-stepper-vertical-item>
                  </v-stepper-vertical>
                </v-card-text>
              </v-card>
            </v-dialog>

            <VideoGuide
              v-model="mainExpansionPanel"
              title="VPN access"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-macOS-vpn-access-v1.mp4/72993cbe-8e1f-3b3f-9f96-6b4d75016b17?t=1712930006465"
              poster="/img/video-covers/user-onboarding-vpn-access-video-cover.jpeg"
            />

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
              border="start"
              border-color="warning"
              elevation="2"
            >
              Ensure that you are logged into VPN.
            </v-alert>

            <VideoGuide
              v-model="mainExpansionPanel"
              title="SSH Passphrase change"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-macOS-ssh-passphrase-v1.mp4/db6118da-a8ff-837f-8b49-b99510161a45?t=1715087073596"
              poster="/img/video-covers/lab-access-macOS-ssh-passphrase-v1.jpg"
            />

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
                prefix="~"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} You should then be prompted to enter a password. Enter your <code>SSH temporary key</code> from Signal message.
              <div class="language- extra-class">
                <pre class="language-text">
                  <code v-text="`${username}@${ipAddress}'s password:`"></code>
                </pre>
              </div>
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
                border="start"
                border-color="warning"
                elevation="2"
              >
                If you are getting an <code>Authentication token manipulation error</code> check strength requirements for passphrase in <b>Step {{ passChangeId }}.1</b>.
              </v-alert>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Reconnect to entry using your new passphrase.
              <v-text-field
                :model-value="`ssh ${username}@${ipAddress}`"
                ref="macStep7"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                prefix="~"
                variant="outlined"
                density="compact"
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyText(`ssh ${username}@${ipAddress}`)">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              Expected result:
              <div class="language- extra-class"><pre class="language-text">
                  <code v-text="`${username}@${labName}-entry:~$`"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
              <v-text-field
                :model-value="`ssh -o StrictHostKeyChecking=accept-new home`"
                ref="macStep8"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                :prefix="`${username}@${labName}-entry:~$`"
                variant="outlined"
                density="compact"
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyText(`ssh -o StrictHostKeyChecking=accept-new home`)">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} You will be prompted to type your <code>SSH temporary key</code> from Signal message.
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="passExpiredText"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Similar to above, you will be asked for a new password. Type your new passphrase two times.
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="passSetNew"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Verify a successful passphrase update by logging into your home machine.
              <v-text-field
                :model-value="`ssh home`"
                ref="macStep11"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                :prefix="`${username}@${labName}-entry:~$`"
                variant="outlined"
                density="compact"
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyText(`ssh home`)">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              Expected result:
              <div class="language- extra-class"><pre class="language-text">
                  <code v-text="`${username}@${labName}-home:~$`"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Close Terminal window to make sure you are disconnected from your lab.
            </v-col>

            <v-btn v-if="['lab_migration'].includes(filterGuidesByType)" color="primary" class="mx-2 my-2" size="small" @click="nextPanel(2)">Next</v-btn>
            <v-btn v-else color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 4. SSH Passwordless access -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'reissue_all', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#passwordless-access" class="header-anchor">#</a> {{ passLessId }}. SSH Passwordless access</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="passwordless-access" class="mt-2">

            <VideoGuide
              v-model="mainExpansionPanel"
              title="SSH Passwordless access"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-macOS-ssh-keys-v1.mp4/3dbb4fbb-3e2e-21f8-4543-e86d31df7624?t=1715087057373"
              poster="/img/video-covers/lab-access-macOS-ssh-keys-v1.jpg"
            />

            <v-col cols="12">
              {{ getNextItem(passLessId, true) }} Open new Terminal window and generate ssh key.
              If command reports that id_rsa key already exists,
              to avoid overwriting your existing keys press <code>n</code> and skip to next step.
              <CopyTextField
                :model-value='`ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""`'
                class="my-2"
                label=""
                prefix="~"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Start ssh-agent. Note: Output of this command is only informational.
              <CopyTextField
                :model-value='`eval "$(ssh-agent -s)"`'
                class="my-2"
                label=""
                prefix="~"
                placeholder="Your link is missing access token"
              />
            </v-col>

            <v-col cols="12">
              {{ getNextItem(passLessId) }} Add your public key to the ssh agent.
              <CopyTextField
                :model-value="`ssh-add --apple-use-keychain ~/.ssh/id_rsa`"
                class="my-2"
                label=""
                prefix="~"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Place your public key into the lab.
              <CopyTextField
                :model-value="`ssh-copy-id -i ~/.ssh/id_rsa ${username}@${ipAddress}`"
                class="my-2"
                label=""
                prefix="~"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              You will be asked for your SSH passphrase:
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="`${username}@${ipAddress}'s password:`"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Confirm passwordless access.
              <CopyTextField
                :model-value="`ssh -o PasswordAuthentication=no -o PreferredAuthentications=publickey ${username}@${ipAddress}`"
                class="my-2"
                label=""
                prefix="~"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              Expected result:
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="`${username}@${labName}-entry:`"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Close Terminal window to make sure you are disconnected from your lab.
            </v-col>

            <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 5. SSH Config file -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'lab_migration', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#ssh-config" class="header-anchor">#</a> {{ sshConfId }}. SSH Config file</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="ssh-config" class="mt-2">

            <VideoGuide
              v-model="mainExpansionPanel"
              title="SSH Config file"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-macOS-ssh-config-v1.mp4/1701d076-b83e-cee7-86cc-b763bad31531?t=1715087051308"
              poster="/img/video-covers/lab-access-macOS-ssh-config-v1.jpg"
            />

            <v-col cols="12">
              {{ getNextItem(sshConfId, true) }} Open new Terminal window and assure SSH Config file exists. No output is expected.
              <v-text-field
                :model-value="`touch ~/.ssh/config`"
                ref="macSshConfig1"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                prefix="~"
                variant="outlined"
                density="compact"
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyText(`touch ~/.ssh/config`)">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Open SSH Config file.
              <v-text-field
                :model-value="`open -Wne ~/.ssh/config`"
                ref="macSshConfig2"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                prefix="~"
                variant="outlined"
                density="compact"
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyText(`open -Wne ~/.ssh/config`)">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(sshConfId) }} Replace old lab configuration in SSH Config opened in Text Editor and then save changes.
              <v-textarea
                :model-value="configText"
                ref="ssh-config-mac"
                label="SSH Config file"
                placeholder="Your link is missing access token"
                persistent-placeholder
                class="py-2 mt-2"
                variant="outlined"
                readonly
                rows="11"
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyTextArea(configText)">&#xe14d;</a>
                </template>
              </v-textarea>
            </v-col>
            <v-col v-else cols="12">
              {{ getNextItem(sshConfId) }} Add lab configuration into SSH Config opened in Text Editor and then save changes.
              <v-textarea
                :model-value="configText"
                ref="ssh-config-mac"
                label="SSH Config file"
                placeholder="Your link is missing access token"
                persistent-placeholder
                class="py-2 mt-2"
                variant="outlined"
                readonly
                rows="11"
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyTextArea(configText)">&#xe14d;</a>
                </template>
              </v-textarea>
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(sshConfId) }} Remove old fingerprint.
              <CopyTextField
                :model-value="`ssh-keygen -R ${labName}`"
                label=""
                prefix="~"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Test by connecting straight into home machine.
              <v-text-field
                :model-value="`ssh -o StrictHostKeyChecking=accept-new ${labName}`"
                ref="ssh-config-lab-mac"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                prefix="~"
                variant="outlined"
                density="compact"
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyText(`ssh -o StrictHostKeyChecking=accept-new ${labName}`)">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Close Terminal window to make sure you are disconnected from your lab.
            </v-col>

            <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 6. Hosts file -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'lab_migration', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#hosts-file" class="header-anchor">#</a> {{ hostsFileId }}. Workbench - hosts file</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="hosts-file" class="mt-2">
            Let's set up your hosts file on your local computer. <br />
            This allows you to connect to HUNT Workbench in your lab using a domain name {{ fqdn }}.

            <VideoGuide
              v-model="mainExpansionPanel"
              title="Workbench - Hosts file"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-macOS-workbench-certificate-v1.mp4/f7c17ea5-9c0f-2f3b-9905-bd3618bab685?t=1716815389835"
              poster="/img/video-covers/lab-access-macOS-workbench-hosts-v1.jpg"
            />

            <br /><br />
            <v-col cols="12">
              {{ getNextItem(hostsFileId, true) }} On your local computer, open your /etc/hosts file in your preferred text editor.
              You will be asked for password that you use to login into your MacOS account.
              <br /><br />
              <div class="pl-8">
                Use this command if you prefer graphical <strong>Text editor</strong> app,
                and remeber to close the editor for the change to come into effect:
                <CopyTextField
                  :model-value="`EDITOR='open -Wne' sudo -e /etc/hosts`"
                  class="my-2"
                  label=""
                  prefix="$"
                  placeholder=""
                />
                If you prefer terminal editor <strong>vim</strong>, simply run:
                <CopyTextField
                  :model-value="`sudo vim /etc/hosts`"
                  class="my-2"
                  label=""
                  prefix="$"
                  placeholder=""
                />
              </div>
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(hostsFileId) }} Make sure the line with the old hosts record is removed. <strong>Search and remove lines</strong> containing domain name:<br />
                <CopyTextField
                  :model-value="fqdn"
                  class="my-2"
                  label=""
                  prefix=""
                  placeholder="Your link is missing access token"
                />
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(hostsFileId) }} Add (append) the new <strong>hosts record</strong> below to the text file:
              <br />
              <div class="pl-8">
                <CopyTextField
                  :model-value="hostsWorkbench"
                  class="my-2"
                  label=""
                  prefix=""
                  placeholder="Your link is missing access token"
                />
                Make sure to avoid duplicate records.
              </div>
            </v-col>
            <v-col v-else cols="12">
              {{ getNextItem(hostsFileId) }} Add (append) the <strong>hosts record</strong> below to the text file:
              <br />
              <div class="pl-8">
                <CopyTextField
                  :model-value="hostsWorkbench"
                  class="my-2"
                  label=""
                  prefix=""
                  placeholder="Your link is missing access token"
                />
                Make sure to avoid duplicate records.
              </div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} Save the changes and close your text editor.
            </v-col>
            <v-btn v-if="['lab_migration'].includes(filterGuidesByType)" color="primary" class="mx-2 my-2" size="small" @click="nextPanel(2)">Next</v-btn>
            <v-btn v-else color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- 7. Workbench -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'workbench_reissue', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-title>
            <h3><a href="#workbench" class="header-anchor">#</a> {{ workbenchId }}. Workbench - certificate</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="workbench" class="mt-2">

            <VideoGuide
              v-model="mainExpansionPanel"
              title="Workbench - Client certificate"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-macOS-workbench-hosts-v1.mp4/91354bdb-7e24-6300-5fab-38a3b58a003e?t=1716815396032"
              poster="/img/video-covers/lab-access-macOS-workbench-certificate-v1.jpg"
            />

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

            <v-dialog
              v-model="workbenchDialog"
              persistent
              scrollable
              max-width="960px"
              @keydown.esc="workbenchDialog = false"
            >
              <v-card elevation="0">
                <v-card-title class="pa-0">
                  <v-toolbar color="#00509e" theme="dark" flat>
                    <v-toolbar-title>Workbench Access Configuration</v-toolbar-title>
                    <v-spacer />
                    <template v-slot:append>
                      <v-btn icon="mdi-close" @click="workbenchDialog = false" />
                    </template>
                  </v-toolbar>
                </v-card-title>

                <v-card-text class="pa-0">
                  <v-stepper v-model="workbenchStepper" orientation="vertical">
                    <v-stepper-header>
                      <v-stepper-item
                        :complete="workbenchStepper > 1"
                        step="1"
                        title="Checks"
                      />
                      <v-divider />
                      <v-stepper-item
                        :complete="workbenchStepper > 2"
                        step="2"
                        title="Install your certificates"
                      />
                      <v-divider />
                      <v-stepper-item
                        :complete="workbenchStepper > 3"
                        step="3"
                        title="Login to Workbench"
                      />
                      <v-divider />
                      <v-stepper-item
                        step="?"
                        title="Troubleshooting"
                      />
                    </v-stepper-header>

                    <v-stepper-window>
                      <v-stepper-window-item value="1">
                        <v-card class="mb-12 pr-4" elevation="0">
                          <v-card-text>
                            <v-alert
                              border="start"
                              border-color="warning"
                              elevation="2"
                            >
                              Make sure you have received your Workbench certificate (<code>.mobileconfig</code>).
                            </v-alert>
                            <v-alert
                              border="start"
                              border-color="warning"
                              elevation="2"
                            >
                              Assure working VPN connection.
                            </v-alert>
                          </v-card-text>
                        </v-card>
                        <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper++">Continue</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="workbenchStepper = 4">Skip to Troubleshooting</v-btn>
                      </v-stepper-window-item>

                      <v-stepper-window-item value="2">
                        <v-card class="mb-8 pr-4" elevation="0">
                          <v-card-text>
                            <v-alert
                              border="start"
                              border-color="warning"
                              elevation="2"
                            >
                              <strong>Permissions to add system profiles required.</strong>
                              <hr class="mt-1 mb-2" />
                              If you do not see Profiles section in your System settings make sure to ask
                              IT department in your organization for assistance.
                            </v-alert>

                            Let's install the certificates that are required to allow traffic with HUNT Workbench that is located in your lab.
                            <br /><br />
                            <ol>
                              <li>
                                Open your system profile config file that you got from FileSender (<code>{{ labName }}-{{ username }}.mobileconfig</code>).
                              </li>
                              <li>
                                Open <code style="font-weight: bold;">System settings</code>
                              </li>
                              <li>
                                Open section <code style="font-weight: bold;">General</code>, scroll to the bottom of the section and select subsection <code style="font-weight: bold;">Device management</code>.
                                <br />
                                <img class="pa-2" alt="device-management" src="/img/workbench/macos-device-management.png" style="max-width: 500px;" />
                                <br />
                                (On MacOS Sonoma or older open section <code style="font-weight: bold;">Privacy & Security</code>, scroll to the bottom of the section and select <code style="font-weight: bold;">Profiles</code>)
                                <br />
                                <img class="pa-2" alt="system-profiles" src="/img/workbench/macventura1.png" style="max-width: 500px;" />
                                <br />
                              </li>
                              <li>
                                Select certificate required for installation ({{  labName }}-{{ username }}-client).
                                <br />
                                <img class="pa-2" alt="macventura2" src="/img/workbench/macventura2.png" style="max-width: 300px;" />
                                <br />
                              </li>
                              <li>
                                Click Install when prompted. Then enter the TLS passphrase that you received on Signal and confirm.
                                <br />
                                <img class="pa-2" alt="macventura3" src="/img/workbench/macventura3.png" style="max-width: 400px;" />
                                <br />
                              </li>
                              <li>
                                Now quit your internet browser <code style="font-weight: bold;">CMD + Q</code> (we recommend <a href="https://www.google.com/chrome/" target="_blank">Google Chrome browser</a>).<br />
                                and restart it for the certificate to get recognized.
                              </li>
                              <li>
                                When you open your HUNT Workbench for the first time you will be asked for your local macOS password.
                                This allows the browser to access your client certificate stored in your local Keychain. <br />
                                After filling in the password, confirm by clicking <code style="font-weight: bold;">Always allow</code> / <code style="font-weight: bold;">Tillat alltid</code>.
                                <br />
                                <img class="pa-2" alt="macos_chrome" src="/img/workbench/macos_chrome.png" style="max-width: 400px;" />
                                <br />
                              </li>
                            </ol>
                          </v-card-text>
                        </v-card>
                        <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper++">Continue</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="workbenchStepper--">Back</v-btn>
                      </v-stepper-window-item>

                      <v-stepper-window-item value="3">
                        <v-card class="mb-8 pr-16" elevation="0">
                          <v-card-text>
                            <v-alert
                              border="start"
                              border-color="warning"
                              elevation="2"
                            >
                              <strong>Make sure you are connected to the VPN before you access your HUNT Workbench.</strong>
                            </v-alert>
                            <v-alert
                              border="start"
                              border-color="info"
                              elevation="2"
                            >
                              We recommend to use <a href="https://www.google.com/chrome/" target="_blank">Google Chrome browser</a> for all HUNT Workbench applications to work correctly.
                            </v-alert>

                            <ol>
                              <li>Open your web browser.</li>
                              <li>
                                Open the URL address below to access your lab in your web browser:
                                <br />
                                <strong><a :href="`https://${fqdn}`" target="_blank">https://{{ fqdn }}</a></strong>
                                <br /><br />
                                You may get a User Identification Request for your new certificate.<br />
                                Verify that the certificates are issued by HUNT Cloud:
                                <br />
                                <div class="language- extra-class"><pre class="language-text">
                                  <code v-html='`Issuer: "${tlsClientIssuer}"\nOrganization: "HUNT Cloud"\nIssued Under: "HUNT Cloud Trust Services"`'></code>
                                </pre></div>
                                <br />
                                Ensure that the <code>Remember this decision</code> box is checked, and click <code>OK</code>.
                                <br />
                                <img class="pa-2" alt="chrome_select_certificate_confirm" src="/img/workbench/chrome_select_certificate_confirm.png" style="max-width: 300px;" />
                                <br />
                              </li>
                              <li class="mb-2">
                                Sign in with your HUNT Cloud <strong>username</strong> and <strong>lab passphrase</strong>.<br />
                                Lab passphrase is the same passphrase that you created yourself on your first SSH login.<br />
                                <CopyTextField
                                  :model-value="username"
                                  class="my-2"
                                  label="Username"
                                  prefix=""
                                  placeholder="Your link is missing access token"
                                />
                                If you did not create a lab passphrase yet use a temporary SSH passphrase that you received
                                from us on Signal message to login and then follow passphrase change flow.
                                <br />
                                <img class="pa-2" alt="workbench-login-form" src="/img/workbench/workbench-login-form.png" style="max-width: 250px;" />
                                <br />
                              </li>
                              <li>
                                With a little bit of luck you should now see your new HUNT Workbench.
                                Feel free to read our <a href="/do-science/hunt-workbench/getting-started/" target="_blank">getting started guide</a>.
                                <br />
                                <strong>Click around and explore your new world!</strong>
                              </li>
                            </ol>
                            <br />

                            <img class="pa-2" alt="JupyterLab" src="/img/workbench/JupyterLab.png" />

                            <v-alert
                              border="start"
                              border-color="info"
                              elevation="2"
                            >
                              <b>Remember to bookmark your Lab address</b>
                              <hr class="mt-1 mb-2" />
                              <code>https://{{fqdn}}</code>
                            </v-alert>
                          </v-card-text>
                        </v-card>
                        <v-btn color="success" class="mx-2 mb-1" @click="workbenchDialog = false; workbenchStepper = 1;">Finish</v-btn>
                        <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper = 1">Start again</v-btn>
                        <v-btn color="warning" class="mx-2 mb-1" @click="workbenchStepper++">Troubleshooting</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="workbenchStepper--">Back</v-btn>
                      </v-stepper-window-item>

                      <v-stepper-window-item value="4">
                        <v-card class="mb-8 pr-4 ml-0 pl-0" elevation="0">
                          <v-card-text>
                            This section includes issues that you might encounter during your first setup.
                            See our <a href="/do-science/hunt-workbench/faq/" target="_blank">HUNT Workbench FAQ</a> and <a href="/do-science/hunt-workbench/troubleshooting/" target="_blank">HUNT Workbench Troubleshooting</a> if you do not find your answers below.

                            <details class="my-2"><summary style="cursor: pointer;"><strong>This site can't be reached</strong></summary>
                              <div class="pl-4 pr-16 py-2">
                                1. If you are getting <code>DNS_PROBE_FINISHED_NXDOMAIN</code> error you need to repeat the <code style="font-size: 90% !important;">{{ hostsFileId }}. Workbench - hosts file</code> guide.
                                <br/>
                                2. If you are getting <code>ERR_CONNECTION_TIMED_OUT</code> error you need to make sure that you are connected to VPN. If you are able to ssh into lab your VPN is fine, and you need to repeat the <code>6. Workbench - hosts file</code> guide.
                              </div>
                            </details>

                            <details class="my-2"><summary style="cursor: pointer;"><strong>I don't remember my passphrase</strong></summary>
                              <div class="pl-4 pr-16 py-2">
                                Don't worry. Request a <a href="/do-science/service-desk/#ssh-passphrase-reset" target="_blank">reset of SSH passphrase</a> in our "do-science" Service desk.
                              </div>
                            </details>

                            <details class="my-2"><summary style="cursor: pointer;"><strong>Nginx error - 403 Forbidden</strong></summary>
                              <div class="pl-4 pr-16 py-2">
                                This error means that you are attempting to connect without client certificate.
                                <br /><br/>
                                There are 3 different causes each requires a different approach
                                <ol>
                                  <li>
                                    If you have just installed a fresh client certificate, <strong>restart your computer</strong> to make sure certificates are applied.
                                  </li>
                                  <br />
                                  <li>
                                    If you have not yet installed a fresh client certificate on this computer, review the section <strong>Install your certificates</strong> above. Start by click on blue button <code>Start again</code>.
                                  </li>
                                  <br />
                                  <li>
                                    If you have used Workbench in {{ labName }} lab before, this error means that your certificate expired and you can follow this link to <a href="/do-science/service-desk/#hunt-workbench-reissue" target="_blank">request Workbench reissue</a>. Once your request is processed we will send you a fresh certificate.
                                  </li>
                                </ol>
                              </div>
                            </details>

                            <details class="my-2"><summary style="cursor: pointer;"><strong>Firefox - Did Not Connect</strong></summary>
                              <div class="pl-4 pr-16 py-2">
                                <v-alert
                                  border="start"
                                  border-color="info"
                                  elevation="2"
                                >
                                  We recommend to use <a href="https://www.google.com/chrome/" target="_blank">Google Chrome browser</a> for all HUNT Workbench applications to work correctly.
                                </v-alert>

                                Firefox may require that you manually import the HUNT Cloud Certificate Authority to consider it trusted.

                                If you see Error code: <code>SEC_ERROR_UNKNOWN_ISSUER</code> when accessing Workbench follow these steps:

                                <ol>
                                  <li>
                                    Download our public CA certificate from <a href="https://pki.hdc.ntnu.no/hctsca1.crt" target="_blank">https://pki.hdc.ntnu.no/hctsca1.crt</a>
                                  </li>
                                  <li>
                                    Open the following Firefox URL: <code>about:preferences#privacy</code>.
                                  </li>
                                  <li>
                                    Scroll down to section <code>Certificates</code> and click on <code>View Certificates</code>.
                                    <br />
                                    <img class="pa-2" alt="mac-firefox-certificates" src="/img/workbench/mac-firefox-certificates.png" />
                                    <br />
                                  </li>
                                  <li>
                                    Switch to tab <code>Authorities</code> and click on <code>Import</code>.
                                    <br />
                                    <img class="pa-2" alt="mac-firefox-import-cert" src="/img/workbench/mac-firefox-import-cert.png" />
                                    <br />
                                  </li>
                                  <li>
                                    Select <code>hctsca1.crt</code> and check option <code>Trust this CA to identify websites</code>.
                                    <br />
                                    <img class="pa-2" alt="mac-firefox-trust-ca" src="/img/workbench/mac-firefox-trust-ca.png" />
                                    <br />
                                  </li>
                                </ol>
                              </div>
                            </details>

                            <details class="my-2"><summary style="cursor: pointer;"><strong>502 Bad gateway</strong></summary>
                              <div class="pl-4 pr-16 py-2">
                                A 502 Bad gateway error when accessing <a :href="`https://${fqdn}/hub/home`" target="_blank">https://{{ fqdn }}/hub/home</a>
                                is an indication that something is wrong with the configuration on the server side.<br />
                                Contact us in your lab channel on Slack (#lab-{{ labName }}) or <a href="/do-science/service-desk/#general-service-request" target="_blank">Service desk email</a> further investigations.
                              </div>
                            </details>
                          </v-card-text>
                        </v-card>
                        <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper = 1">Start again</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="workbenchStepper--">Back</v-btn>
                        <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="workbenchDialog = false; workbenchStepper = 1;">Close</v-btn>
                      </v-stepper-window-item>
                    </v-stepper-window>
                  </v-stepper>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-col cols="12">
              After you have successfully completed all the steps, you can start using your Workbench environment by opening this URL address: <a :href="`https://${fqdn}`" target="_blank">https://{{ fqdn }}</a>
            </v-col>

            <v-col cols="12">
              <details class="my-2"><summary style="cursor: pointer;"><strong>Workbench Control panel</strong></summary>
                <div class="pl-4 pr-16 py-2">
                  You can access Control panel on this URL address:
                  <a :href="`https://${fqdn}/hub/home`" target="_blank">https://{{ fqdn }}/hub/home</a>
                </div>
              </details>
            </v-col>

            <v-btn color="primary" class="mx-2 my-2" size="small" @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- Where to go next -->
        <v-expansion-panel v-if="mainExpansionPanel && mainExpansionPanel == 7">
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

        <!-- Cyberduck (MacOS only) -->
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h3><a href="#cyberduck" class="header-anchor">#</a> Cyberduck</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="cyberduck" class="mt-2">
            <v-col cols="12">
              Cyberduck is an SFTP client with graphical user interface.
            </v-col>
            <v-col cols="12">
              1. Add the hosts records below to your <code>/etc/hosts</code> file.
            </v-col>
            <v-col cols="12">
              <v-textarea
                :model-value="hostsCyberduck"
                ref="hostsCyberduck"
                autocomplete="ignore-field"
                label="Hosts file - Cyberduck"
                placeholder="Your link is missing access token"
                persistent-placeholder
                class="py-2 mt-2"
                variant="outlined"
                readonly
                rows="3"
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append-inner>
                  <a class="material-icons content_copy" @click="copyTextArea(hostsCyberduck)">&#xe14d;</a>
                </template>
              </v-textarea>
            </v-col>
            <v-col cols="12">
              2. Follow <a href="/do-science/tools/transfer/cyberduck/" target="_blank">Cyberduck guide</a>
              to configure your access.
            </v-col>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <!-- Copy SSH Public key -->
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h3><a href="#copypubkey" class="header-anchor">#</a> Copy SSH Public key</h3>
          </v-expansion-panel-title>
          <v-expansion-panel-text id="copypubkey" class="mt-2">
            <v-col cols="12">
              1. Open new Terminal window.
            </v-col>
            <v-col cols="10">
              2. Run this command to copy SSH Public key created in Step 3 into clipboard.
              <CopyTextField
                :model-value="`pbcopy < ~/.ssh/id_rsa.pub`"
                label=""
                prefix="~"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              3. Paste (CMD+V) your SSH Public key where needed.
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
              <h3>Keka cannot open 7-zip archive</h3>
              <img alt="tunnelblick-login" src="/img/7-zip/keka2.png" /> <br />
              Make sure to allow Keka access to your home folder in <b>File Access</b> section of Keka.
              <img alt="tunnelblick-login" src="/img/7-zip/keka1.png" /> <br />
            </v-col>

          </v-expansion-panel-text>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-card>
  </v-sheet>
</template>

<style scoped>
a {
  color: #1976d2;
  text-decoration-line: none !important;
  text-underline-offset: unset !important;
  font-weight: 600 !important;
}

code {
  font-size: 100% !important;
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.4em;
}
pre code {
  font-size: 14px !important;
  /* padding: 0 !important; */
  padding-left: 12px !important;
  padding-right: 12px !important;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  background-color: unset;
  color: rgba(204, 204, 204, 1) !important;
}
pre[class*=language-] {
  margin: .85rem 0;
  padding-bottom: 4px !important;
  padding-top: 4px !important;
}
div[class*=language-] {
  position: relative;
  background-color: #282c34;
  border-radius: 6px;
  overflow-x: unset;
}
div[class*=language-]:before {
  position: absolute;
  z-index: 3;
  top: .8em;
  right: 1em;
  font-size: .75rem;
  color: hsla(0, 0%, 100%, .4);
}

.v-overlay__content ul {
  list-style-type: disc;
  padding-left: 24px;
}
.v-overlay__content ol {
  list-style-type: decimal;
  padding-left: 24px !important;
}
.v-overlay__content code {
  font-size: 90% !important;
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.4em;
}
.v-overlay__content pre[class*=language-] {
  padding-bottom: 8px !important;
  padding-top: 8px !important;
}
</style>
