<script>
import {
  VCol,
  VRow,
  VBtn,
  VTextField,
  VTextarea,
  VAutocomplete,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VCard,
  VCardTitle,
  VCardText,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VSpacer,
  VDialog,
  VStepper,
  VStepperContent,
  VStepperStep,
  VStepperItems,
  VIcon,
  VAlert,
  VSheet,
} from "vuetify/lib";

export default {
  name: "LinuxJourney",
  components: {
    VCol,
    VRow,
    VBtn,
    VTextField,
    VTextarea,
    VAutocomplete,
    VExpansionPanel,
    VExpansionPanels,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VCard,
    VCardTitle,
    VCardText,
    VToolbar,
    VToolbarTitle,
    VToolbarItems,
    VSpacer,
    VDialog,
    VStepper,
    VStepperContent,
    VStepperStep,
    VStepperItems,
    VIcon,
    VAlert,
    VSheet,
    CopyTextField: () => import('../generic/CopyTextField.vue'),
    TotpGuide: () => import('../LabAccessGuides/TotpGuide.vue'),
    DesignNewPassphrase: () => import('../LabAccessGuides/DesignNewPassphrase.vue'),
  },
  props: {
    username: { type: String, default: null },
    labName: { type: String, default: null },
    ipAddress: { type: String, default: null },
    template: { type: String, default: "" },
  },
  data() {
    return {
      mainExpansionPanel: null,
      extrasExpansionPanel: null,
      vpnDialog: false,
      vpnStepper: 1,
      workbenchDialog: false,
      workbenchStepper: 1,
      fetchSecretsId: 1,
      vpnConfId: 2,
      passChangeId: 3,
      passLessId: 4,
      sshConfId: 5,
      workbenchId: 6,
      sshKeygenWin: `ssh-keygen -q -t rsa -b 4096 -f %USERPROFILE%\\.ssh\\id_rsa -N ""`,
      passExpired: `WARNING: Your password has expired.
You must change your password now and login again!
Changing password for {username}.
(current) UNIX password:`,
      passSetNew: `New password:
Retype new password:`,
      passChangedEntry: `passwd: Password updated successfully
Connection to {ip_address} closed.`,
      passChangedHome: `passwd: Password updated successfully
Connection to home closed.`,
      guidingOptions: [
        { text: 'New user', value: 'new_user' },
        { text: 'User to new lab', value: 'new_lab' },
        { text: 'New computer', value: 'new_computer' },
        { text: 'SSH reset', value: 'ssh_reset' },
        { text: 'VPN reset', value: 'vpn_reset' },
        { text: 'Lab Migration', value: 'lab_migration' },
      ],
      filterGuidesByType: null,
      incIndices: {},
    }
  },
  computed: {
    cfgShow() {
      return this.ipAddress && this.labName && this.username ? true : false;
    },
    configText() {
      return this.ipAddress && this.labName && this.username ? this.wrap(this.template) : null;
    },
    passExpiredText() {
      return this.ipAddress && this.labName && this.username ? this.wrap(this.passExpired) : null;
    },
    hostsWorkbench() {
      return this.ipAddress && this.labName ? `${this.ipAddress}    ${this.labName}.lab.hdc.ntnu.no` : null;
    },
    fqdn() {
      return this.labName ? `${this.labName}.lab.hdc.ntnu.no` : null
    },
    hostsChangeColor() {
      if (typeof this.hostsChangeSuccess == "boolean") {
        return this.hostsChangeSuccess ? "success" : "error"
      } else {
        return "link"
      }
    },
    tlsClientIssuer() {
      return this.labName ? `LAB-${this.labName.toUpperCase()} CA` : ''
    },
  },
  // watch: {},
  mounted() {
    if (!this.filterGuidesByType && localStorage.hasOwnProperty('labAccessGuideFilter') && localStorage.labAccessGuideFilter) {
      this.updateFilter(localStorage.labAccessGuideFilter, true)
    }
  },
  created() {
    const labAccessGuideFilter = this.$route.query.filter ? this.$route.query.filter : null
    if (!this.filterGuidesByType && labAccessGuideFilter) {
      this.updateFilter(labAccessGuideFilter, true)
    }
  },
  methods: {
    updateFilter(value, update = false) {
      const val = this.guidingOptions.find(item => item.value === value)
      this.filterGuidesByType = update && val && val.value ? val.value : this.filterGuidesByType
      localStorage.labAccessGuideFilter = val && val.value ? val.value : null
    },
    wrap(template) {
      let text = template
      text = text.replaceAll('{ip_address}', this.ipAddress)
      text = text.replaceAll('{lab_name}', this.labName)
      text = text.replaceAll('{username}', this.username)
      return text
    },
    copyText(key) {
      let textToCopy = this.$refs[key].$el.querySelector('input')
      textToCopy.select()
      document.execCommand("copy");
    },
    copyTextArea(key) {
      let textToCopy = this.$refs[key].$el.querySelector('textarea')
      textToCopy.select()
      document.execCommand("copy");
    },
    nextPanel() {
      this.mainExpansionPanel = this.mainExpansionPanel ? this.mainExpansionPanel + 1 : 1
    },
    setHostsChangeSuccess() {
      this.hostsChangeSuccess = true
      this.hostsChangeLoading = false
    },
    setHostsChangeError() {
      this.hostsChangeSuccess = false
      this.hostsChangeLoading = false
    },
    testHosts() {
      this.hostsChangeSuccess = null
      this.hostsChangeLoading = true

      fetch(`http://${this.fqdn}`, { redirect: "manual" }).then((item) => {
        if (item.type === "opaqueredirect") {
          setTimeout(this.setHostsChangeSuccess, 500)
        } else {
          setTimeout(this.setHostsChangeError, 500)
        }
      }).catch((err) => {
        setTimeout(this.setHostsChangeError, 500)
        // console.log(err)
      })
    },
    getNextItem(groupId, reset = false) {
      const groupKey = `group-${groupId}`
      if (reset || !this.incIndices || !this.incIndices[groupKey]) {
        this.incIndices[groupKey] = 0
      }
      const itemId = ++this.incIndices[groupKey]
      // console.log(`${groupKey} -- ${groupId}.${this.incIndices[groupKey]}.`)
      return `${groupId}.${itemId}.`
    },
  },
};
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
          small-chips
          deletable-chips
          chips
          item-color="green"
          outlined
          dense
          clearable
          clear-icon="close"
          hide-details
          @input="event => updateFilter(event)"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-card class="mt-6" elevation="1">
      <v-expansion-panels accordion v-model="mainExpansionPanel" elevation="0">

        <!-- 1. Fetch secrets -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'ssh_reset', 'vpn_reset'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#fetch-secrets" class="header-anchor">#</a> {{ fetchSecretsId }}. Fetch secrets</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="fetch-secrets" ref="#fetch-secrets" class="mt-2">
            You have received a link to an encrypted file archive (7-ZIP file).

            <ol>
              <li>Click on the filesender link in the email to download the file and save this on your local computer.</li>
              <li>Unpack (extract) the file only with <a href="/do-science/tools/transfer/7z/#detail-2-ubuntu" target="_blank">software that supports the 7-ZIP archive format</a>.</li>
              <li>Use the key named 7-ZIP file key from your Signal transfer to decrypt the 7z archive.</li>
            </ol>

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 2. VPN Access -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'vpn_reset'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#vpn-config" class="header-anchor">#</a> {{ vpnConfId }}. VPN Access</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="vpn-config" ref="#vpn-config" class="mt-2">
            If you have not setup <b>HUNT Cloud VPN</b> yet follow <i>TOTP</i> and <i>OpenVPN</i> configuration guides:

            <TotpGuide />

            <v-row class="my-1">
              <v-col cols="12">
                <v-btn
                  text
                  color="link"
                  @click.stop="vpnDialog = true"
                  elevation="2"
                >
                  <v-icon>vpn_lock</v-icon>&nbsp;&nbsp;2. OpenVPN Configuration
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
                  <v-toolbar dark color="#00509e">
                    <v-toolbar-title>OpenVPN Configuration</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn icon fab @click="vpnDialog = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                </v-card-title>

                <v-card-text class="pa-0">
                  <v-stepper v-model="vpnStepper" vertical>
                    <v-stepper-step
                      :complete="vpnStepper > 1"
                      step="1"
                    >
                      Install OpenVPN
                    </v-stepper-step>

                    <v-stepper-content step="1">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >
                        We use OpenVPN to ensure encrypted communication between your local computer and HUNT Cloud.<br /><br />

                        Install the openvpn and network-manager-openvpn-gnome packages from the standard repositories:<br />

                        <CopyTextField
                          :value="`sudo apt update && sudo apt install openvpn network-manager-openvpn-gnome`"
                          label=""
                          prefix="$"
                        />
                        <br />

                        <details><summary style="cursor: pointer;"><b>Other linux distributions</b></summary>

                          <br />You have a few options on how to install OpenVPN clients in other distributions:<br /><br />

                          <ul>
                            <li>Install the <code>openvpn</code> package from the official distribution repository.</li>
                            <li>Add the <a href="https://community.openvpn.net/openvpn/wiki/OpenvpnSoftwareRepos" target="_blank">OpenVPN community repository</a> (opens new window)and install the <code>openvpn</code> package.</li>
                            <li>Download the latest <a href="https://openvpn.net/index.php/open-source/downloads.html" target="_blank">source tarball</a> (opens new window)from OpenVPN and install.</li>
                          </ul>

                          <br />
                          After the installation, follow the "Ubuntu Linux" guides below on how to setup and connect.
                        </details>
                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 2">Continue</v-btn>
                      <!-- <v-btn color="link" class="mx-2 mb-1" @click="totpDialog = false">Close</v-btn> -->
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="vpnStepper > 2"
                      step="2"
                    >
                      Setup the VPN profile
                    </v-stepper-step>

                    <v-stepper-content step="2">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >
                        <ol>
                          <li>
                            Click on the <i>Network Manager icon</i> in the task bar.
                          </li>
                          <li>
                            Select <i>Edit Connections...</i>
                          </li>
                          <li>
                            Click <i>Add</i>.
                          </li>
                          <li>
                            Choose <i>Import a saved VPN configuration</i> and click <i>Create</i>.
                          </li>
                          <li>
                            Select the OpenVPN profile named <code>{{ username }}.ovpn</code> that you collected in Step 1.
                          </li>
                          <li>
                            Enter your user name (same as the OpenVPN profile file name).
                          </li>
                          <li>
                            Click on the person icon in the Password field and select <code>Ask for this password every time</code>.
                          </li>
                          <li>
                            Enter the <i>Private Key Password</i> with the <code>VPN passphrase</code> sent to you from HUNT over Signal.
                          </li>
                          <li>
                            Click on the IPv4 Settings tab.
                          </li>
                          <li>
                            Click <i>Routes...</i>
                          </li>
                          <li>
                            Select the <i>Use this connection only for resources on its network</i> and click OK.
                          </li>
                          <li>
                            Click <i>Apply</i>.
                          </li>
                        </ol>

                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 3">Continue</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="vpnStepper = 1">Back</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="vpnStepper > 3"
                      step="3"
                    >
                      Connect to the VPN
                    </v-stepper-step>

                    <v-stepper-content step="3">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >
                        <ol>
                          <li>
                            Click on the <i>Network Manager</i> icon in the task bar.
                          </li>
                          <li>
                            Choose <i>VPN Connections</i> and select the name of your profile.
                          </li>
                          <li>
                            In the Authenticate VPN window, enter the <code>verification code</code> from TOTP (Google Authenticator) app into the Password field.
                          </li>
                          <li>
                            Click <i>OK</i> to connect.
                          </li>
                        </ol>
                        <br /><br />
                        You should now be connected to the VPN.
                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 4">Continue</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="vpnStepper = 2">Back</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="vpnStepper > 4"
                      step="4"
                    >
                      Verify your VPN connection
                    </v-stepper-step>

                    <v-stepper-content step="4">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >

                        <v-alert
                          border="left"
                          colored-border
                          type="success"
                          elevation="2"
                          icon="chevron_right"
                        >
                          <b>Status notification.</b>
                          <hr class="mt-1 mb-2" />
                          If you received the notification that <code>VPN connection has been successfully established</code>,<br />
                          then you are good to go.
                        </v-alert>

                      </v-card>
                      <v-btn color="success" class="mx-2 mb-1" @click="vpnDialog = false; vpnStepper = 1;">Finish</v-btn>
                      <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 1">Start again</v-btn>
                      <v-btn color="warning" class="mx-2 mb-1" @click="vpnStepper = 5">Troubleshooting</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="vpnStepper = 3">Back</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="vpnStepper > 5"
                      step="?"
                    >
                      Troubleshooting
                      <small>Optional tips to try in case of issues</small>
                    </v-stepper-step>

                    <v-stepper-content step="5">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >

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
                        <h3 id="unable-to-apply-changes"><a href="#unable-to-apply-changes" class="header-anchor">#</a> Unable to apply changes</h3>
                        <p>
                          If you are unable to click <i>Apply</i> after your changes, try to re-enter your <code>Private Key Password</code> using your VPN passphrase that you received in Signal message.
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
                          border="left"
                          colored-border
                          type="info"
                          elevation="2"
                        >
                          <b>TIP</b>
                          <hr class="mt-1 mb-2" />
                          If nothing works, please head over to our main <a href="/do-science/troubleshooting/connection/#vpn" target="_blank">troubleshooting section</a> for more information on how to troubleshoot connections.
                        </v-alert>

                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 1">Start again</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="vpnStepper = 4">Back</v-btn>
                    </v-stepper-content>

                  </v-stepper>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 3. SSH Passphrase change -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_lab', 'ssh_reset', 'lab_migration'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
              <h3><a href="#ssh-passphrase" class="header-anchor">#</a> {{ passChangeId }}. SSH Passphrase change</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="ssh-passphrase" ref="#ssh-passphrase" class="mt-2">

            <v-col cols="12">
              {{ getNextItem(passChangeId, true) }} Design <DesignNewPassphrase />.
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Start Terminal application.
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(passChangeId) }} Remove old fingerprint.
              <CopyTextField
                :value="`ssh-keygen -R ${labName}`"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Login to entry machine.
              <CopyTextField
                :value="`ssh -o StrictHostKeyChecking=accept-new ${username}@${ipAddress}`"
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
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Reconnect to entry using your new passphrase.
              <v-text-field
                :value="`ssh ${username}@${ipAddress}`"
                ref="linuxStep7"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                prefix="$"
                outlined
                dense
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append>
                  <a class="material-icons content_copy" @click="copyText('linuxStep7')">&#xe14d;</a>
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
                :value="`ssh -o StrictHostKeyChecking=accept-new home`"
                ref="linuxStep8"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                :prefix="`${username}@${labName}-entry:~$`"
                outlined
                dense
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append>
                  <a class="material-icons content_copy" @click="copyText('linuxStep8')">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} You will be prompted to type your <code>SSH temporary key</code> from Signal message.
              <!-- <div class="language- extra-class"><pre class="language-text">
                  <code v-text="`${username}@home's password:`"></code>
              </pre></div> -->
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="passExpiredText"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Similar to above, you will be asked for a new password. Type your new passphrase two times.
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="passSetNew"></code>
              </pre></div>
              <!-- Expected result:
              <div class="language- extra-class"><pre class="language-text">
                <code v-text="passChangedHome"></code>
              </pre></div> -->
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Verify a successful passphrase update by logging into your home machine.
              <v-text-field
                :value="`ssh home`"
                ref="linuxStep11"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                :prefix="`${username}@${labName}-entry:~$`"
                outlined
                dense
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append>
                  <a class="material-icons content_copy" @click="copyText('linuxStep11')">&#xe14d;</a>
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

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 4. SSH Passwordless access -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#passwordless-access" class="header-anchor">#</a> {{ passLessId }}. SSH Passwordless access</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="passwordless-access" ref="#passwordless-access" class="mt-2">

            <v-col cols="12">
              {{ getNextItem(passLessId, true) }} Open new Terminal window (<code>CTRL + ALT + T</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
              <CopyTextField
                :value='`ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""`'
                class="my-0"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Start ssh-agent.
              <CopyTextField
                :value='`eval "$(ssh-agent -s)"`'
                class="my-0"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Add your public key to the ssh agent.
              <CopyTextField
                :value="`ssh-add ~/.ssh/id_rsa`"
                class="my-0"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Place your public key into the lab.
              <CopyTextField
                :value="`ssh-copy-id -i ~/.ssh/id_rsa ${username}@${ipAddress}`"
                class="my-0"
                label=""
                prefix="$"
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
                :value="`ssh -o PasswordAuthentication=no -o PreferredAuthentications=publickey ${username}@${ipAddress}`"
                class="my-0"
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
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Close Terminal window to make sure you are disconnected from your lab.
            </v-col>

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 5. SSH Config file -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'lab_migration'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#ssh-config" class="header-anchor">#</a> {{ sshConfId }}. SSH Config file</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">

            <!-- Place in <code>~/.ssh/config</code>. -->
            <v-col cols="12">
              {{ getNextItem(sshConfId, true) }} Open new Terminal window (<code>CTRL + ALT + T</code>) and assure SSH Config file exists. No output is expected.
              <v-text-field
                :value="`touch ~/.ssh/config`"
                ref="linuxSshConfig1"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                prefix="$"
                outlined
                dense
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append>
                  <a class="material-icons content_copy" @click="copyText('linuxSshConfig1')">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Open SSH Config file.
              <v-text-field
                :value="`gedit ~/.ssh/config`"
                ref="linuxSshConfig2"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                prefix="$"
                outlined
                dense
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append>
                  <a class="material-icons content_copy" @click="copyText('linuxSshConfig2')">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Add lab configuration into SSH Config opened in Text Editor.
              <v-textarea
                v-model.trim="configText"
                ref="ssh-config-linux"
                label="SSH Config file"
                placeholder="Your link is missing access token"
                persistent-placeholder
                class="py-2 mt-2"
                outlined
                readonly
                rows="11"
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append>
                  <a class="material-icons content_copy" @click="copyTextArea('ssh-config-linux')">&#xe14d;</a>
                </template>
              </v-textarea>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Test by connecting straight into home machine.
              <v-text-field
                :value="`ssh -o StrictHostKeyChecking=accept-new ${labName}`"
                ref="ssh-config-lab-linux"
                label=""
                placeholder="Your link is missing access token"
                persistent-placeholder
                prefix="$"
                outlined
                dense
                readonly
                hide-details
                @focus="$event.target.select()"
              >
                <template v-slot:append>
                  <a class="material-icons content_copy" @click="copyText('ssh-config-lab-linux')">&#xe14d;</a>
                </template>
              </v-text-field>
            </v-col>

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 6. Workbench -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'lab_migration'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#workbench" class="header-anchor">#</a> {{ workbenchId }}. Workbench</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="workbench" ref="#workbench" class="mt-2">

            <v-col cols="12">
              <a href="/do-science/hunt-workbench/" target="_blank">HUNT Workbench</a> provides you with web-based access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R and MATLAB.
            </v-col>
            <v-col cols="12">
              <strong>Follow Workbench Access guide to configure your access:</strong>
            </v-col>

            <v-row class="my-1 mx-1">
              <v-col cols="12">
                <v-btn
                  text
                  color="link"
                  @click.stop="workbenchDialog = true"
                  elevation="2"
                >
                  <v-icon>settings</v-icon>&nbsp;&nbsp;Workbench Access
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
                  <v-toolbar dark color="#00509e" flat>
                    <v-toolbar-title>Workbench Access Configuration</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn icon fab @click="workbenchDialog = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                </v-card-title>

                <v-card-text class="pa-0">
                  <v-stepper v-model="workbenchStepper" vertical>
                    <v-stepper-step
                      :complete="workbenchStepper > 1"
                      step="1"
                    >
                    Checks
                    </v-stepper-step>

                    <v-stepper-content step="1">
                      <v-card
                        class="mb-12 pr-4"
                        elevation="0"
                      >
                        <v-alert
                          border="left"
                          colored-border
                          type="warning"
                          elevation="2"
                        >
                          Make sure you have received your Workbench certificate (<code>{{ labName }}-{{ username }}.p12</code>).
                        </v-alert>
                        <v-alert
                          border="left"
                          colored-border
                          type="warning"
                          elevation="2"
                        >
                          Assure working VPN connection.
                        </v-alert>
                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper = 2">Continue</v-btn>
                      <!-- <v-btn color="link" class="mx-2 mb-1" @click="workbenchDialog = false">Close</v-btn> -->
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper = 5">Skip to Troubleshooting</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="workbenchStepper > 2"
                      step="2"
                    >
                      Edit your hosts file
                    </v-stepper-step>

                    <v-stepper-content step="2">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >
                        First, let's set up your hosts file on your local computer. <br />
                        This allows you to connect to HUNT Workbench in your lab using a domain name {{ fqdn }}.
                        <br /><br />
                        <ol>
                          <li>
                            On your local computer, open your /etc/hosts file in your preferred text editor.
                            <br /><br />
                            Use this command if prefer graphical editor <strong>Gedit</strong>:
                            <CopyTextField
                              :value="`sudo gedit /etc/hosts`"
                              class="my-2"
                              label=""
                              prefix="$"
                              placeholder=""
                            />
                            If you prefer terminal editor <strong>vim</strong> simply run:
                            <CopyTextField
                              :value="`sudo vim /etc/hosts`"
                              class="my-2"
                              label=""
                              prefix="$"
                              placeholder=""
                            />
                          </li>
                          <br />
                          <li>
                            Add (append) the <strong>hosts record</strong> below to the text file:<br />
                            <CopyTextField
                              :value="hostsWorkbench"
                              class="my-2"
                              label=""
                              prefix=""
                              placeholder="Your link is missing access token"
                            />
                            Make sure to avoid duplicate records.
                          </li>
                          <br />
                          <li>
                            Save the changes and close your text editor.
                          </li>
                        </ol>
                        <br />

                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper = 3">Continue</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper = 1">Back</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="workbenchStepper > 3"
                      step="3"
                    >
                      Install your certificates
                    </v-stepper-step>

                    <v-stepper-content step="3">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >
                        <v-alert
                          border="left"
                          colored-border
                          type="info"
                          elevation="2"
                        >
                          We recommend that you use <a href="https://www.google.com/chrome/" target="_blank">Google Chrome browser</a> for all HUNT Workbench applications to work correctly.
                        </v-alert>

                        <ol>
                          <li>
                            Open <strong>Google Chrome</strong> on your local computer.
                          </li>
                          <li>
                            Download our public CA certificate from <a href="https://pki.hdc.ntnu.no/hctsca1.crt" target="_blank">https://pki.hdc.ntnu.no/hctsca1.crt</a>
                          </li>
                          <li>
                            In Google Chrome, open the URL <a href="chrome://settings/certificates" target="_blank">chrome://settings/certificates</a> and navigate to section <code>Authorities</code>.
                          </li>
                          <li>
                            Click the <strong>Import</strong> button on the right side of the screen to import <code>hctsca1.crt</code> certificate file.
                          </li>
                          <li>
                            Select first option Trust this certificate for identifying websites.
                            <br />
                            <img class="pa-2" alt="import-ca-trust-websites" src="/img/workbench/import-ca-trust-websites.png" style="max-width: 500px;" />
                            <br />
                          </li>
                          <li>
                            Within <a href="chrome://settings/certificates" target="_blank">chrome://settings/certificates</a> navigate to section <code>Your certificates</code>
                            and click the <strong>Import</strong> button on the right side of the screen.
                          </li>
                          <li>
                            Browse and select your <code style="font-weight: bold;">{{ labName}}-{{ username }}.p12</code> file that you downloaded to your local computer,
                            and enter the <strong>TLS passphrase</strong> that we sent you on Signal.
                          </li>
                          <li>
                            Restart <strong>Google Chrome</strong>.
                          </li>
                        </ol>
                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper = 4">Continue</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper = 2">Back</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="workbenchStepper > 4"
                      step="4"
                    >
                      Login to Workbench
                    </v-stepper-step>

                    <v-stepper-content step="4">
                      <v-card
                        class="mb-8 pr-16"
                        elevation="0"
                      >
                        <v-alert
                          border="left"
                          colored-border
                          type="warning"
                          elevation="2"
                        >
                          <strong>Make sure you are connected to the VPN before you access your HUNT Workbench.</strong>
                        </v-alert>
                        <v-alert
                          border="left"
                          colored-border
                          type="info"
                          elevation="2"
                        >
                          We recommend to use <a href="https://www.google.com/chrome/" target="_blank">Google Chrome browser</a> for all HUNT Workbench applications to work correctly.
                        </v-alert>

                        <ol>
                          <li>
                            Open your web browser.
                          </li>
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
                              :value="username"
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
                          border="left"
                          colored-border
                          type="info"
                          elevation="2"
                        >
                          <b>Remember to bookmark your Lab address</b>
                          <hr class="mt-1 mb-2" />
                          <code>https://{{fqdn}}</code>
                        </v-alert>

                      </v-card>
                      <v-btn color="success" class="mx-2 mb-1" @click="workbenchDialog = false; workbenchStepper = 1;">Finish</v-btn>
                      <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper = 1">Start again</v-btn>
                      <v-btn color="warning" class="mx-2 mb-1" @click="workbenchStepper = 5">Troubleshooting</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper = 3">Back</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="workbenchStepper > 5"
                      step="?"
                    >
                      Troubleshooting
                      <small>Optional tips to try in case of issues</small>
                    </v-stepper-step>

                    <v-stepper-content step="5">
                      <v-card
                        class="mb-8 pr-4 ml-0 pl-0"
                        elevation="0"
                      >
                      This section includes issues that you might encounter during your first setup.
                      See our <a href="/do-science/hunt-workbench/faq/" target="_blank">HUNT Workbench FAQ</a> and <a href="/do-science/hunt-workbench/troubleshooting/" target="_blank">HUNT Workbench Troubleshooting</a> if you do not find your answers below.

                        <details class="my-2"><summary style="cursor: pointer;"><strong>This site can't be reached</strong></summary>
                          <div class="pl-4 pr-16 py-2">
                            If you are getting <code>DNS_PROBE_FINISHED_NXDOMAIN</code> error you need to repeat the <a @click="workbenchStepper = 2">Step 2 (Edit your hosts file)</a> of this guide.
                          </div>
                        </details>

                        <details class="my-2"><summary style="cursor: pointer;"><strong>I don't remember my passphrase</strong></summary>
                          <div class="pl-4 pr-16 py-2">
                            Don't worry. Request a <a href="/do-science/service-desk/#ssh-passphrase-reset" target="_blank">reset of SSH passphrase</a> in our "do-science" Service desk.
                          </div>
                        </details>

                        <details class="my-2"><summary style="cursor: pointer;"><strong>Firefox - Did Not Connect</strong></summary>
                          <div class="pl-4 pr-16 py-2">
                            <v-alert
                              border="left"
                              colored-border
                              type="info"
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

                        <details class="my-2"><summary style="cursor: pointer;"><strong>Chrome on Ubuntu</strong></summary>
                          <div class="pl-4 pr-16 py-2">
                            <ol>
                              <li>
                                In Google Chrome, open the URL <a href="chrome://settings/certificates" target="_blank">chrome://settings/certificates</a> and navigate to section <code>Authorities</code>.
                              </li>
                              <li>
                                Search for HUNT Cloud certificates (<code>org-HUNT Cloud Trust Services</code>).
                              </li>
                              <li>
                                Edit the HCTS CA 1 certificate and select first option <code>Trust this certificate for identifying websites</code>.
                                <br />
                                <img class="pa-2" alt="import-ca-trust-websites" src="/img/workbench/import-ca-trust-websites.png" />
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

                        <!-- <details class="my-2"><summary style="cursor: pointer;"><strong>Title</strong></summary>
                          <div class="pl-4 pr-16 py-2">
                            text
                          </div>
                        </details> -->
                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper = 1">Start again</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper = 4">Back</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchDialog = false; workbenchStepper = 1;">Close</v-btn>
                    </v-stepper-content>

                  </v-stepper>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-col cols="12">
              After you have successfully completed all the steps, you can start using your Workbench environment by opening this URL address: <a :href="`https://${fqdn}`" target="_blank">https://{{ fqdn }}</a>
              <!-- <CopyTextField
                :value="`https://${fqdn}`"
                class="my-2"
                label=""
                prefix=""
                placeholder="Your link is missing access token"
              /> -->
            </v-col>

            <v-col cols="12">
              <details class="my-2"><summary style="cursor: pointer;"><strong>Hosts record</strong></summary>
                <div class="pl-4 pr-16 py-2">
                  Below you can find <strong>hosts record</strong> for quick copying.
                  If you need to configure your access step by step use Workbench Access guide above.
                  <CopyTextField
                    :value="hostsWorkbench"
                    class="my-2"
                    label=""
                    prefix=""
                    placeholder="Your link is missing access token"
                  />
                </div>
              </details>
            </v-col>

            <v-col cols="12">
              <details class="my-2"><summary style="cursor: pointer;"><strong>Workbench Control panel</strong></summary>
                <div class="pl-4 pr-16 py-2">
                  You can access Control panel on this URL address:
                  <a :href="`https://${fqdn}/hub/home`" target="_blank">https://{{ fqdn }}/hub/home</a>
                </div>
              </details>
            </v-col>

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Where to go next -->
        <v-expansion-panel v-if="mainExpansionPanel && mainExpansionPanel == 6">
          <v-expansion-panel-header>
            <h3><a href="#where-to-go-next" class="header-anchor">#</a> Where to go next</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="where-to-go-next" ref="#where-to-go-next" class="mt-2">
            <v-sheet
              rounded="lg"
              width="100%"
              class="pa-4 text-center mx-auto"
            >
              <v-icon
                class="mb-5"
                color="success"
                size="100"
              >check_circle</v-icon>

              <h2 class="text-h5 mb-6">You have configured your lab access</h2>

              <p class="mb-4 text-medium-emphasis text-body-2">
                Feel free to continue reading our <a href="/do-science/hunt-workbench/getting-started/" target="_blank">getting started guides</a> and figure out which <a href="/do-science/tools/" target="_blank">tools</a> do you need for your work.
                <br>

                Otherwise, you're done!
              </p>
            </v-sheet>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <v-card elevation="1" class="mt-4">
      <v-card-title class="pt-3 pb-2" style="font-weight: 400;">
        Optional guides
      </v-card-title>
      <v-expansion-panels accordion v-model="extrasExpansionPanel" elevation="0">

        <!-- Copy SSH Public key -->
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h3><a href="#copypubkey" class="header-anchor">#</a> Copy SSH Public key</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="copypubkey" ref="#copypubkey" class="mt-2">
            <v-col cols="12">
              1. Open new Terminal window (<code>CTRL + ALT + T</code>).
            </v-col>
            <v-col cols="10">
              2. If you don't have xclip installed yet run installation.
              <CopyTextField
                :value="`sudo apt-get update && sudo apt-get install -y xclip`"
                class="my-2"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="10">
              3. Run this command to copy SSH Public key created in Step 3 into clipboard.
              <CopyTextField
                :value="`xclip -selection clipboard < ~/.ssh/id_rsa.pub`"
                class="my-2"
                label=""
                prefix="$"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              3. Paste (CTRL+V) your SSH Public key where needed.
            </v-col>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Troubleshooting -->
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h3><a href="#troubleshooting" class="header-anchor">#</a> Troubleshooting</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="troubleshooting" ref="#troubleshooting" class="mt-2">

            <v-col cols="12">
              WIP
            </v-col>

          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-card>
  </v-sheet>
</template>
