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
  name: "WindowsJourney",
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
    VideoGuide: () => import('../LabAccessGuides/VideoGuide.vue'),
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
      hostsFileId: 6,
      workbenchId: 7,
      cmdPrompt: `<code>WIN + R</code> and type <strong><code>cmd.exe</code></strong> then hit <code>Enter</code>`,
      openvpnInstallerName: `OpenVPN-<version-number>-I001-amd64.msi`,
      sshKeygenWin: `ssh-keygen -q -t rsa -b 4096 -f "%USERPROFILE%\\.ssh\\id_rsa" -N ""`,
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
      hostsChangeSuccess: null,
      hostsChangeLoading: false,
      guidingOptions: [
        { text: 'New user', value: 'new_user' },
        { text: 'User to new lab', value: 'new_lab' },
        { text: 'New computer', value: 'new_computer' },
        { text: 'SSH reset', value: 'ssh_reset' },
        { text: 'VPN reset', value: 'vpn_reset' },
        { text: 'TOTP reset (Google authenticator)', value: 'totp_reset' },
        { text: 'Workbench reissue', value: 'workbench_reissue' },
        { text: 'Reissue all', value: 'reissue_all' },
        { text: 'Lab migration', value: 'lab_migration' },
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
    entryIpUrl() {
      return this.ipAddress ? this.ipAddress.replace('.', '%2E') : '';
    },
    homeIpUrl() {
      // return '10.5.5.12'.replace('.', '%2E');
      return 'home';
    },
    mobaxtermTerminal() {
      return this.cfgShow ? `mobaxterm:${this.labName}%3D%23109%230%25${this.homeIpUrl}%2522%25${this.username}%25%250%250%25%25${this.entryIpUrl}%2522%25${this.username}%25%2D1%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%250%250%250%25%251080%25%250%250%251%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%2D256color%25%2D1%25%2D1%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%230%23%20%23%2D1` : null;
    },
    mobaxtermRdp() {
      return this.cfgShow ? `mobaxterm:${this.labName}%2DRDP%3D%2391%234%25${this.labName}%2D${this.homeIpUrl}%253389%25${this.username}%250%250%250%250%25%2D1%250%250%25%2D1%25xfce4%2Dsession%25${this.entryIpUrl}%5F%5FPIPE%5F%5F${this.homeIpUrl}%2522%5F%5FPIPE%5F%5F22%25${this.username}%5F%5FPIPE%5F%5F${this.username}%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%5F%5FPIPE%5F%5F%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%25%25%2D1%25%2D1%250%250%250%25%2D1%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%25%2D1%25%2D1%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%230%23%20%23%2D1` : null;
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
      // TODO: change to https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
      document.execCommand("copy");
    },
    copyTextArea(key) {
      let textToCopy = this.$refs[key].$el.querySelector('textarea')
      textToCopy.select()
      // TODO: change to https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
      document.execCommand("copy");
    },
    nextPanel(inc = 1) {
      this.mainExpansionPanel = this.mainExpansionPanel ? this.mainExpansionPanel + inc : 1
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
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'ssh_reset', 'vpn_reset', 'workbench_reissue', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#fetch-secrets" class="header-anchor">#</a> {{ fetchSecretsId }}. Fetch secrets</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="fetch-secrets" ref="#fetch-secrets" class="mt-2">
            You have received a link to an encrypted file archive (7-ZIP file).

            <ol>
              <li>Click on the filesender link in the email to download the file and save this on your local computer.</li>
              <li>Unpack (extract) the file only with <a href="/do-science/tools/transfer/7z/#detail-2-windows" target="_blank">software that supports the 7-ZIP archive format</a>.</li>
              <li>Use the key named 7-ZIP file key from your Signal transfer to decrypt the 7z archive.</li>
            </ol>

            <VideoGuide
              v-model="mainExpansionPanel"
              title="Fetch secrets"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-win-fetch-secrets-v1.mp4/3e139ecf-193c-3eee-0d2e-e5e5c296e759?t=1728710988779"
              poster="/img/video-covers/user-onboarding-fetch-secrets-video-cover.jpeg"
            />

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 2. VPN Access -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'vpn_reset', 'totp_reset', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#vpn-config" class="header-anchor">#</a> {{ vpnConfId }}. VPN Access</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="vpn-config" ref="#vpn-config" class="mt-2">
            If you have not setup access to <strong>HUNT Cloud VPN</strong> yet, follow both <i>TOTP</i> and <i>OpenVPN</i> configuration guides:

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
              <v-card elevation="0">
                <v-card-title class="pa-0">
                  <v-toolbar dark color="#00509e" flat>
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
                        class="mb-12 pr-4"
                        elevation="0"
                      >
                        We use the open-source application <b>OpenVPN GUI</b> to ensure encrypted communication between your local computer and us.<br /><br />

                        If you are not an NTNU user <a href="https://openvpn.net/community-downloads/" target="_blank">download and install <b>OpenVPN</b> using the latest stable Windows Installer (Avoid beta versions)</a>
                        <br /><br />

                        Click on the link above, scroll down to the file named <code style="font-weight: bold;">{{ openvpnInstallerName }}</code>,
                        download the file and follow the on-screen installation instructions until finished.
                        <br /><br />

                        <v-alert
                          border="left"
                          colored-border
                          type="info"
                          elevation="2"
                        >
                          <b><img alt="1-openvpn-icon" src="/img/vpn/ntnu-icon-25.svg" style="height: 1.2em; margin-bottom: -3px;" /> NTNU Software center</b>
                          <hr class="mt-1 mb-2" />
                          Windows <b>users from NTNU</b> can install OpenVPN community edition
                          using <a href="https://i.ntnu.no/wiki/-/wiki/English/OpenVPN" target="_blank">NTNU Software Center</a> even without administrative rights.
                        </v-alert>

                        <v-alert
                          border="left"
                          colored-border
                          type="warning"
                          elevation="2"
                        >
                          <b>You will need administrative rights on your local computer to successfully install OpenVPN</b>
                          <hr class="mt-1 mb-2" />
                          Click on the link below if you do not hold administrative rights on your local computer, or don't know if you have such rights.<br /><br />

                          <details style="font-size: 14px"><summary style="cursor: pointer;"><b>Installing OpenVPN without administrative rights</b></summary>

                            <div class="pl-4 pr-16 py-0">
                              <br />
                              You can check if you have administrative rights in the Command prompt (<span v-html="cmdPrompt"></span>) on your local computer
                              by running a command below. See if your local username is listed.
                              <CopyTextField
                                :value='`net localgroup "Administrators"`'
                                class="my-1"
                                label=""
                                prefix=""
                                placeholder=""
                              />

                              <div class="mt-2 mb-1"><strong>Request assistance from your local IT personnel if you do not hold administrative rights on your local computer and request that they:</strong></div>

                              (1) assist you in the OpenVPN installation, or<br />

                              (2) grant you administrative rights on your local computer so you can install OpenVPN yourself.<br />

                              <div class="mt-2 mb-1"><strong>For simplicity, we have outlined the steps they need to perform, which you can attach to your request:</strong></div>
                              <a href="/do-science/guides/openvpn-admin-group/" target="_blank">https://docs.hdc.ntnu.no/do-science/guides/openvpn-admin-group/</a>
                            </div>
                          </details>
                        </v-alert>

                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 2">Continue</v-btn>
                      <!-- <v-btn color="link" class="mx-2 mb-1" @click="vpnDialog = false">Close</v-btn> -->
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
                        <v-alert
                          v-show="filterGuidesByType && ['vpn_reset', 'reissue_all'].includes(filterGuidesByType)"
                          border="left"
                          colored-border
                          type="warning"
                          elevation="2"
                        >
                          <b>Remove old VPN Configuration</b>
                          <hr class="mt-1 mb-2" />
                          <ol>
                            <li>
                              Right click on the OpenVPN notification icon on the taskbar, in the lower right corner of your screen and select. Find <code style="font-weight: bold;">Clear Saved Passwords</code> option and click on it to remove previously used passwords.
                            </li>
                            <li>
                              Open your file explorer and manually remove the folder with the old OpenVPN configurations. It's usually located here:
                              <CopyTextField
                                :value="`%USERPROFILE%\\openvpn\\config\\${username}`"
                                label=""
                                placeholder="Your link is missing access token"
                              />
                              or
                              <CopyTextField
                                :value="`C:\\Users\\%USERNAME%\\openvpn\\config`"
                                label=""
                                placeholder="Your link is missing access token"
                              />
                              <!-- prefix="C:\Users\User>" -->
                            </li>
                          </ol>
                        </v-alert>

                        <ol>
                          <li>
                            Start the OpenVPN client (if it is not running already) <br />
                            <img alt="1-openvpn-icon" src="/img/vpn/1-openvpn-icon.png" style="max-width: 80px;" />
                          </li>
                          <li>
                            Click to expand pane on Windows taskbar <br />
                            <img alt="2-openvpn-expandable-pane-guide" src="/img/vpn/2-openvpn-expandable-pane-guide.png" style="max-width: 140px;" />
                          </li>
                          <li>
                            Right click on the OpenVPN notification icon on the taskbar, <br />
                            then through <code>Import</code> select <code style="font-weight: bold;">Import file...</code> <br />
                            <img alt="4-openvpn-import-guide" src="/img/vpn/4-openvpn-import-guide.png" style="max-width: 380px;" />
                          </li>
                          <li>
                            Select OpenVPN (OVPN) profile: <code style="font-weight: bold;">{{ username }}.ovpn</code> that you extracted from 7-ZIP archive. <br />
                            <img alt="5-openvpn-open-file-guide" src="/img/vpn/5-openvpn-open-file-guide.png" style="max-width: 500px;" />
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
                      Connect to HUNT Cloud VPN
                    </v-stepper-step>

                    <v-stepper-content step="3">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >
                        <ol>
                          <li>
                            Right-click on the OpenVPN notification icon on the taskbar.
                          </li>
                          <li>
                            Select <i>Connect</i>. <br />
                            <img alt="7-openvpn-click-connect" src="/img/vpn/7-openvpn-click-connect.png" style="max-width: 240px;" />
                          </li>
                          <li>
                            Enter your username:
                            <CopyTextField
                              :value="username"
                              class="my-1"
                              label=""
                              prefix=""
                              placeholder="Your link is missing access token"
                            />
                          </li>
                          <li>
                            Enter a rotating 6-digit <code style="font-weight: bold;">verification code</code> from Google Authenticator as your password. <br />
                            <strong>Do not save rotating password.</strong> Make sure that save password box is empty and then click OK.
                            <br />
                            <img alt="8-openvpn-totp-fill-guide" src="/img/vpn/8-openvpn-totp-fill-guide.png" style="max-width: 280px;" />
                          </li>
                          <li>
                            When prompted for a Private Key Password, insert the <code style="font-weight: bold;">VPN passphrase</code> from Signal. <br />
                            Make sure to save this long password and then click OK. <br />
                            Your authentication will fail when you complete your passphrase below.
                            This is expected since your <code style="font-weight: bold;">verification code</code> timed out while you typed your passphrase. <br />
                            <img alt="9-openvpn-passphrase-fill-guide" src="/img/vpn/9-openvpn-passphrase-fill-guide.png" style="max-width: 280px;" />
                          </li>
                          <li>
                            If the same window as in step 4 pops up try to connect again with a fresh <code style="font-weight: bold;">verification code</code> from Google Authenticator app.
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
                        class="mb-8 pr-16"
                        elevation="0"
                      >

                        <v-alert
                          border="left"
                          colored-border
                          type="success"
                          elevation="2"
                          icon="chevron_right"
                        >
                          <b>The OpenVPN notification icon on the taskbar should be green.</b>
                          <hr class="mt-1 mb-2" />
                          <img alt="OpenVPN-icon" src="/img/vpn/2.OpenVPN-guide.png" />
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
                        class="mb-8 pr-4 ml-0 pl-0"
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

                        <br />
                        <h3 id="route-addition-failed"><a href="#route-addition-failed" class="header-anchor">#</a> Route addition failed </h3>
                        <p>
                          You should reinstall your OpenVPN with administrative rights if you already installed OpenVPN and are getting errors below:
                          <div class="language- extra-class"><pre class="language-text">
                            <code v-text="`ERROR: route addition failed using CreateIpForwardEntry: Ingen tilgang.`"></code>
                          </pre></div>

                          <div class="language- extra-class"><pre class="language-text">
                            <code v-text="`ERROR: Windows route add command failed [adaptive]: returned error code 1`"></code>
                          </pre></div>

                          <div class="language- extra-class"><pre class="language-text">
                            <code v-text="`ERROR: Some routes were not successfully added. The connection may not function correctly`"></code>
                          </pre></div>
                        </p>

                        <br />
                        <h3 id="tls-key-negotiation-timeout"><a href="#tls-key-negotiation-timeout" class="header-anchor">#</a> TLS handshake failed</h3>
                        <p>
                          If you see the error below the problem might be with your current network (e.g. institution is blocking VPN connections).
                          <div class="language- extra-class"><pre class="language-text">
                            <code v-text="`TLS Error: TLS key negotiation failed to occur within 60 seconds (check your network connectivity)`"></code>
                          </pre></div>

                          <ul>
                            <li>
                              Make sure your IP address is in our <a href="https://docs.hdc.ntnu.no/do-science/troubleshooting/connection/#access-list">Access list</a>.
                            </li>
                            <li>
                              Confirm that your local institution is blocking VPN connecting by connecting from different network (e.g. mobile internet or from home).
                              For more details see our troubleshooting guide
                              <a href="https://docs.hdc.ntnu.no/do-science/troubleshooting/connection/#cannot-connect-due-to-local-firewalls">Cannot connect due to local firewalls</a>.
                            </li>
                          </ul>
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

            <VideoGuide
              v-model="mainExpansionPanel"
              title="VPN access"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-win-vpn-access-v1.mp4/3719140a-745a-fabf-0959-9ee83a4155b6?t=1728711018006"
              poster="/img/video-covers/user-onboarding-vpn-access-video-cover.jpeg"
            />

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 3. SSH Passphrase change -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_lab', 'ssh_reset', 'lab_migration', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#ssh-passphrase" class="header-anchor">#</a> {{ passChangeId }}. SSH Passphrase change</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="ssh-passphrase" ref="#ssh-passphrase" class="mt-2">

            <v-alert
              v-show="filterGuidesByType && ['new_lab', 'ssh_reset', 'lab_migration'].includes(filterGuidesByType)"
              border="left"
              colored-border
              type="warning"
              elevation="2"
            >
              Ensure that you are logged into VPN.
            </v-alert>

            <VideoGuide
              v-model="mainExpansionPanel"
              title="SSH Passphrase change"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-win-ssh-passphrase-change-v1.mp4/d59555f9-027c-ad16-e989-0443bb6e4355?t=1728711001208"
              poster="/img/video-covers/lab-access-macOS-ssh-passphrase-v1.jpg"
            />

            <v-col cols="12">
              {{ getNextItem(passChangeId, true) }} Design <DesignNewPassphrase />.
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} To start Command Prompt press <code>WIN + R</code> and type <strong><code>cmd.exe</code></strong> then hit <code>Enter</code>.
            </v-col>
            <!-- Only show for lab migration scenarios -->
            <!-- <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(passChangeId) }} Remove old fingerprint.
              <CopyTextField
                :value="`ssh-keygen -R ${labName}-entry`"
                label=""
                prefix="C:\Users\User>"
                placeholder="Your link is missing access token"
              />
            </v-col> -->
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Login to entry machine.
              <CopyTextField
                :value="`ssh -o StrictHostKeyChecking=accept-new ${username}@${ipAddress}`"
                label=""
                prefix="C:\Users\User>"
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
              <CopyTextField
                :value="`ssh ${username}@${ipAddress}`"
                label=""
                prefix="C:\Users\User>"
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
              {{ getNextItem(passChangeId) }} When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
              <CopyTextField
                :value="`ssh -o StrictHostKeyChecking=accept-new home`"
                label=""
                :prefix="`${username}@${labName}-entry:~$`"
                placeholder="Your link is missing access token"
              />
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
              <CopyTextField
                :value="`ssh home`"
                label=""
                :prefix="`${username}@${labName}-entry:~$`"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              Expected result:
              <div class="language- extra-class"><pre class="language-text">
                  <code v-text="`${username}@${labName}-home:~$`"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passChangeId) }} Close Command Prompt window to make sure you are disconnected from your lab.
            </v-col>

            <v-btn v-if="['lab_migration'].includes(filterGuidesByType)" color="primary" class="mx-2 my-2" small @click="nextPanel(2)">Next</v-btn>
            <v-btn v-else color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 4. SSH Passwordless access -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#passwordless-access" class="header-anchor">#</a> {{ passLessId }}. SSH Passwordless access</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="passwordless-access" ref="#passwordless-access" class="mt-2">

            <VideoGuide
              v-model="mainExpansionPanel"
              title="SSH Passwordless access"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-win-ssh-passwordless-access-v1.mp4/1eb5ede3-95e6-8425-5cf2-eb05930484e1?t=1728711005994"
              poster="/img/video-covers/lab-access-macOS-ssh-keys-v1.jpg"
            />

            <v-col cols="12">
              {{ getNextItem(passLessId, true) }}  Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
              <CopyTextField
                :value="sshKeygenWin"
                class="my-2"
                label=""
                prefix="C:\Users\User>"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(passLessId) }} Place your public key into the lab. You will be asked for your SSH passphrase.
              <CopyTextField
                :value='`type "%USERPROFILE%\\.ssh\\id_rsa.pub" | ssh ${username}@${ipAddress} add-public-key`'
                class="my-2"
                label=""
                prefix="C:\Users\User>"
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
                class="my-2"
                label=""
                prefix="C:\Users\User>"
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
              {{ getNextItem(passLessId) }} Close Command prompt window to make sure you are disconnected from your lab.
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

            <VideoGuide
              v-model="mainExpansionPanel"
              title="SSH Config file"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-win-ssh-config-file-v1.mp4/6bef3c72-c979-65ab-1ae0-5aac8c8ea218?t=1728710993297"
              poster="/img/video-covers/lab-access-macOS-ssh-config-v1.jpg"
            />

            <v-col cols="12">
              {{ getNextItem(sshConfId, true) }} Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>) and assure SSH Config file exists. No output is expected.
              <CopyTextField
                :value='`type nul >> "%USERPROFILE%\\.ssh\\config"`'
                label=""
                prefix="C:\Users\User>"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Open SSH Config file.
              <CopyTextField
                :value='`Notepad.exe "%USERPROFILE%\\.ssh\\config"`'
                label=""
                prefix="C:\Users\User>"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(sshConfId) }} Replace old lab configuration in SSH Config opened in Notepad and then save changes.
              <v-textarea
                v-model.trim="configText"
                ref="ssh-config-win"
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
                  <a class="material-icons content_copy" @click="copyTextArea('ssh-config-win')">&#xe14d;</a>
                </template>
              </v-textarea>
            </v-col>
            <v-col v-else cols="12">
              {{ getNextItem(sshConfId) }} Add lab configuration into SSH Config opened in Notepad and then save changes.
              <v-textarea
                v-model.trim="configText"
                ref="ssh-config-win"
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
                  <a class="material-icons content_copy" @click="copyTextArea('ssh-config-win')">&#xe14d;</a>
                </template>
              </v-textarea>
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(sshConfId) }} Remove old fingerprint.
              <CopyTextField
                :value="`ssh-keygen -R ${labName}`"
                label=""
                prefix="C:\Users\User>"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Test by connecting straight into home machine.
              <CopyTextField
                :value="`ssh -o StrictHostKeyChecking=accept-new ${labName}`"
                label=""
                prefix="C:\Users\User>"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(sshConfId) }} Close Command Prompt to make sure you are disconnected from your lab.
            </v-col>

            <v-btn color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- 6. Hosts file -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'lab_migration', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#hosts-file" class="header-anchor">#</a> {{ hostsFileId }}. Workbench - hosts file</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="hosts-file" ref="#hosts-file" class="mt-2">
            <v-alert
              border="left"
              colored-border
              type="warning"
              elevation="2"
            >
              <strong>Administrator permissions are required.</strong>
              <hr class="mt-1 mb-2" />
              If you do not have Administrator permissions on your local workstation make sure to ask
              IT department in your organization for assistance or permissions.
            </v-alert>

            Let's set up your hosts file on your local computer. <br />
            This allows you to connect to HUNT Workbench in your lab using a domain name {{ fqdn }}.

            <VideoGuide
              v-model="mainExpansionPanel"
              title="Workbench - Hosts file"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-win-workbench-hosts-file-v1.mp4/2bc0d8da-0672-94e0-b075-8cfbe3c99eb3?t=1728711036239"
              poster="/img/video-covers/lab-access-macOS-workbench-hosts-v1.jpg"
            />

            <br /><br />
            <v-col cols="12">
              {{ getNextItem(hostsFileId, true) }} Press the Windows key.
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} Type <code style="font-weight: bold;">Notepad</code> in the search field.
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} In the search results, <strong>right-click</strong> Notepad and select <code style="font-weight: bold;">Run as administrator</code>.
              <br />
              <img class="pa-2" alt="notepad-administrator" src="/img/workbench/notepad-administrator.png" style="max-width: 600px;" />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} Confirm <strong>administrator permissions</strong> by clicking on <code style="font-weight: bold;">Yes</code>.
              <br />
              <img class="pa-2" alt="notepad-admin-confirm" src="/img/workbench/notepad-admin-confirm.png" style="max-width: 350px;" />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} In Notepad, start by selecting <code style="font-weight: bold;">File</code> > <code style="font-weight: bold;">Open</code> (<code>CTRL + O</code>).
              <br />
              <img class="pa-2" alt="notepad-open-file" src="/img/workbench/notepad-open-file.png" style="max-width: 450px;" />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} Find the directory below:<br />
              <CopyTextField
                :value="`C:\\Windows\\System32\\Drivers\\etc`"
                class="my-2"
                label="Directory"
                prefix=""
                placeholder="Your link is missing access token"
              />
              <img class="pa-2" alt="notepad-hosts-base-directory" src="/img/workbench/notepad-hosts-base-directory.png" style="max-width: 500px;" /><br />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} Show hidden files by changing type from <strong>Text documents (*.txt)</strong> to view <strong>All files</strong>.<br />
              <img class="pa-2" alt="notepad-all-files" src="/img/workbench/notepad-all-files.png" style="max-width: 500px;" /><br />
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} When a file named <strong>hosts</strong> appears in the list select it and click <strong>Open</strong>: <br />
              <img class="pa-2" alt="notepad-selected-hosts" src="/img/workbench/notepad-selected-hosts.png" style="max-width: 500px;" />
              <!-- <img class="pa-2" alt="notepad-open-hosts-steps" src="/img/workbench/notepad-open-hosts-steps.png" style="max-width: 500px;" /> -->
              <br />
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(hostsFileId) }} Make sure the line with the old hosts record is removed. <strong>Search and remove lines</strong> containing domain name:<br />
              <CopyTextField
                :value="fqdn"
                class="my-2"
                label=""
                prefix=""
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col v-if="['lab_migration'].includes(filterGuidesByType)" cols="12">
              {{ getNextItem(hostsFileId) }} Add (append) the new <strong>hosts record</strong> below to the text file:<br />
              <CopyTextField
                :value="hostsWorkbench"
                class="my-2"
                label=""
                prefix=""
                placeholder="Your link is missing access token"
              />
              Make sure to avoid duplicate records.
            </v-col>
            <v-col v-else cols="12">
              {{ getNextItem(hostsFileId) }} Add (append) the <strong>hosts record</strong> below to the text file:<br />
              <CopyTextField
                :value="hostsWorkbench"
                class="my-2"
                label=""
                prefix=""
                placeholder="Your link is missing access token"
              />
              Make sure to avoid duplicate records.
            </v-col>
            <v-col cols="12">
              {{ getNextItem(hostsFileId) }} Select <code>File</code> > <code>Save</code> to save your changes and close the <code>Notepad</code> application.
            </v-col>
            <!-- <v-col cols="12">
              {{ getNextItem(hostsFileId) }} Confirm your settings with a quick test:
                <br />
                <v-btn class="my-2" :color="hostsChangeColor" :loading="hostsChangeLoading" @click.stop="testHosts()">Test hosts record</v-btn>
                <br />
                If a button turned red you should try to repeat this guide to make sure all the steps were followed.<br />
                Then you can try to click the button again.
                <br />
            </v-col> -->
            <v-btn v-if="['lab_migration'].includes(filterGuidesByType)" color="primary" class="mx-2 my-2" small @click="nextPanel(2)">Next</v-btn>
            <v-btn v-else color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>


        <!-- 7. Workbench -->
        <v-expansion-panel :disabled="!filterGuidesByType || ['new_user', 'new_computer', 'new_lab', 'workbench_reissue', 'reissue_all'].includes(filterGuidesByType) ? false : true">
          <v-expansion-panel-header>
            <h3><a href="#workbench" class="header-anchor">#</a> {{ workbenchId }}. Workbench - certificate</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="workbench" ref="#workbench" class="mt-2">

            <VideoGuide
              v-model="mainExpansionPanel"
              title="Workbench - Client certificate"
              video="https://www.ntnu.edu/documents/1282184702/1349480876/lab-access-win-workbench-certificate-v1.mp4/a303cd49-43ac-9501-498b-c3fcab27e5a8?t=1728711028658"
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
                      <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper++">Continue</v-btn>
                      <!-- <v-btn color="link" class="mx-2 mb-1" @click="workbenchDialog = false">Close</v-btn> -->
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper = 4">Skip to Troubleshooting</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="workbenchStepper > 2"
                      step="2"
                    >
                      Install your certificates
                    </v-stepper-step>

                    <v-stepper-content step="2">
                      <v-card
                        class="mb-8 pr-4"
                        elevation="0"
                      >
                        Let's install the certificates that are required to allow traffic with HUNT Workbench that is located in your lab.
                        <br /><br />
                        <ol>
                          <li>
                            Open your <code>.p12 certificate</code> that you downloaded from FileSender.
                            Make sure the store location is set to <code>Current User</code> and click <code>Next</code>:
                            <br />
                            <img class="pa-2" alt="1_cert_p12" src="/img/workbench/1_cert_p12.png" style="max-width: 500px;" />
                            <br />
                          </li>
                          <li>
                            Click <code>Next</code> one more time.
                            <br />
                            <img class="pa-2" alt="2_cert_p12" src="/img/workbench/2_cert_p12.png" style="max-width: 500px;" />
                            <br />
                          </li>
                          <li>
                            Fill in the <code>TLS passphrase</code> that you received on signal, and make sure the options are checked exactly as in the image.
                            Then click <code>Next</code>:
                            <br />
                            <img class="pa-2" alt="3_cert_p12" src="/img/workbench/3_cert_p12.png" style="max-width: 500px;" />
                            <br />
                          </li>
                          <li>
                            Check the first option: <i>Automatically select the certificate store based on the type of certificate</i>.
                            Click <code>Next</code>:
                            <br />
                            <img class="pa-2" alt="4_cert_p12" src="/img/workbench/4_cert_p12.png" style="max-width: 500px;" />
                            <br />
                          </li>
                          <li>
                            You should now get a Completing the Certificate Import Wizard message.
                            Click Finish to complete the import:
                            <br />
                            <img class="pa-2" alt="5_cert_p12" src="/img/workbench/5_cert_p12.png" style="max-width: 500px;" />
                            <br />
                          </li>
                          <li>
                            The wizard will require a confirmation to install a certificate from us: HCTS CA 1 (HUNT Cloud Trust Services).
                            Our certificate is required to safely access your workbench environment.
                            <br /><br />
                            You will normally be asked to confirm our certificate only when you set up the HUNT Workbench for the first time.
                            Thus, if you see <code>LAB</code> instead of <code>HCTS CA 1</code> skip to step 7.
                            <br /><br />
                            Before clicking <code>YES</code>, confirm that you see our thumbprint (fingerprint):
                            <br />
                            <div class="language- extra-class"><pre class="language-text">
                              <code v-text="`ADD9DFEC C998BE44 AC2F254E 75E5EB98 D91879A6`"></code>
                            </pre></div>
                            <br />
                            <img class="pa-2" alt="6_confirmCAcertificate" src="/img/workbench/6_confirmCAcertificate.png" style="max-width: 500px;" />
                            <br />
                          </li>
                          <li>
                            Similar to Step 6, you will also need to install a certificate for your lab (<code>Lab CA</code>),<br />
                            where your <strong>Lab name should appear</strong>. Click <code>YES</code>.
                            <br />
                            <img class="pa-2" alt="7_confirmLabCAcertificate" src="/img/workbench/7_confirmLabCAcertificate.png" style="max-width: 500px;" />
                            <br />
                          </li>
                          <li>
                            Now quit your internet browser (we recommend <a href="https://www.google.com/chrome/" target="_blank">Google Chrome browser</a>)<br />
                            and restart it for the certificate to get recognized.
                            <br />
                            <img class="pa-2" alt="8_import_success" src="/img/workbench/8_import_success.png" style="max-width: 300px;" />
                            <br />
                          </li>
                        </ol>
                      </v-card>
                      <v-btn color="primary" class="mx-2 mb-1" @click="workbenchStepper++">Continue</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper--">Back</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="workbenchStepper > 3"
                      step="3"
                    >
                      Login to Workbench
                    </v-stepper-step>

                    <v-stepper-content step="3">
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
                      <v-btn color="warning" class="mx-2 mb-1" @click="workbenchStepper++">Troubleshooting</v-btn>
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper--">Back</v-btn>
                    </v-stepper-content>

                    <v-stepper-step
                      :complete="workbenchStepper > 4"
                      step="?"
                    >
                      Troubleshooting
                      <small>Optional tips to try in case of issues</small>
                    </v-stepper-step>

                    <v-stepper-content step="4">
                      <v-card
                        class="mb-8 pr-4 ml-0 pl-0"
                        elevation="0"
                      >
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

                        <details class="my-2"><summary style="cursor: pointer;"><strong>Firefox - Warning: Potential security risk ahead</strong></summary>
                          <div class="pl-4 pr-16 py-2">
                            Click on the <code style="font-weight: bold;">Advanced</code> button to find the <strong>Error code</strong> (Feilkode).
                            <br/><br/>
                            Continue based on the error code:
                            <ul>
                              <li>
                                If you see error code: <code style="font-size: 90% !important;">SEC_ERROR_UNKNOWN_ISSUER</code> continue with the next step below.
                              </li>
                              <li>
                                If you see any other error code contacts us on Slack or send us <a href="https://docs.hdc.ntnu.no/do-science/service-desk/#general-service-request" target="_blank">general Service desk request</a>.
                                <br />
                                Remember to include the error code and screenshot.
                              </li>
                            </ul>
                          </div>
                        </details>

                        <details class="my-2"><summary style="cursor: pointer;"><strong>Firefox - Did Not Connect (SEC_ERROR_UNKNOWN_ISSUER)</strong></summary>
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
                                Open the following Firefox URL: <!-- <code>about:preferences#privacy</code>. -->
                                <CopyTextField
                                  :value="`about:preferences#privacy`"
                                  label=""
                                  prefix=""
                                  placeholder=""
                                />
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
                      <v-btn color="link" class="mx-2 mb-1" @click="workbenchStepper--">Back</v-btn>
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

            <!-- <v-col cols="12">
              <details class="my-2"><summary style="cursor: pointer;"><strong>Hosts record</strong></summary>
                <div class="pl-4 pr-16 py-2">
                  Below you can find <strong>hosts record</strong> for quick copying.
                  If you need to configure your access step by step use <code style="font-size: 90% !important;">{{ hostsFileId }}. Workbench - hosts file</code> guide above.
                  <CopyTextField
                    :value="hostsWorkbench"
                    class="my-2"
                    label=""
                    prefix=""
                    placeholder="Your link is missing access token"
                  />
                </div>
              </details>
            </v-col> -->

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
        <v-expansion-panel v-if="mainExpansionPanel && mainExpansionPanel == 7">
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
              <v-row>
                <v-col cols="12">
                  <v-btn color="success" class="mx-2 mb-1" :href="`https://${fqdn}`" target="_blank" elevation="3">Open Workbench</v-btn>
                  <v-btn color="primary" class="mx-2 mb-1" :href="`https://${fqdn}/hub/home`" target="_blank" elevation="3">Control panel</v-btn>
                </v-col>
              </v-row>
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

        <!-- Mobaxterm (Windows only) -->
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h3><a href="#mobaxterm" class="header-anchor">#</a> MobaXterm</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="mobaxterm" ref="#mobaxterm" class="mt-2">
            <v-col cols="10">
              <v-btn
              color="success"
              block
              target="_blank"
              :href="mobaxtermTerminal"
              >
              Create terminal session
              </v-btn>
            </v-col>
            <v-col cols="10">
              <v-btn
              color="primary"
              block
              target="_blank"
              :href="mobaxtermRdp"
              >
              Create remote desktop session
              </v-btn>
            </v-col>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Copy SSH Public key -->
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h3><a href="#copypubkey" class="header-anchor">#</a> Copy SSH Public key</h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content id="copypubkey" ref="#copypubkey" class="mt-2">
            <v-col cols="12">
              1. Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>).
            </v-col>
            <v-col cols="10">
              2. Run this command to copy SSH Public key into clipboard.
              <CopyTextField
                :value="`type %USERPROFILE%\\.ssh\\id_rsa.pub | clip`"
                label=""
                prefix="C:\Users\User>"
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
              Removing saved OpenVPN passphrases and metadata
              <CopyTextField
                :value="`REG DELETE HKEY_CURRENT_USER\\SOFTWARE\\OpenVPN-GUI\\configs\\${username}`"
                label=""
                prefix="C:\Users\User>"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              Confirm deletion with by typing <code>Yes</code> and then press <code>Enter</code>:
              <div class="language- extra-class"><pre class="language-text">
                  <code v-text="`Permanently delete the registry key\nHKEY_CURRENT_USER\\SOFTWARE\\OpenVPN-GUI\\configs\\${username} (Yes/No)? Yes\n\nThe operation completed successfully.`"></code>
              </pre></div>
            </v-col>
            <v-col cols="12">
              Deleting OpenVPN config
              <CopyTextField
                :value="`del %USERPROFILE%\\OpenVPN\\config\\${username}`"
                label=""
                prefix="C:\Users\User>"
                placeholder="Your link is missing access token"
              />
            </v-col>
            <v-col cols="12">
              Confirm deletion with by pressing <code>Y</code> and then <code>Enter</code>:
              <div class="language- extra-class"><pre class="language-text">
                  <code v-text="`C:\\Users\\User\\OpenVPN\\config\\${username}\\*, Are you sure (Y/N)? Y`"></code>
              </pre></div>
            </v-col>

          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-card>
  </v-sheet>
</template>
