<script>
import {
  VCol,
  VRow,
  VBtn,
  VTextField,
  VTextarea,
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
} from "vuetify/lib";

export default {
  name: "WindowsJourney",
  components: {
    VCol,
    VRow,
    VBtn,
    VTextField,
    VTextarea,
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
    CopyTextField: () => import('../generic/CopyTextField.vue'),
    TotpGuide: () => import('../LabAccessGuides/TotpGuide.vue'),
  },
  props: {
    username: { type: String, default: null },
    labName: { type: String, default: null },
    ipAddress: { type: String, default: null },
    template: { type: String, default: "" },
  },
  data() {
    return {
      vpnDialog: false,
      vpnStepper: 1,
      fetchSecretsId: 1,
      vpnConfId: 2,
      passChangeId: 3,
      passLessId: 4,
      sshConfId: 5,
      workbenchId: 6,
      cmdPrompt: `<code>WIN + R</code> and type <strong><code>cmd.exe</code></strong> then hit <code>Enter</code>`,
      openvpnName: `OpenVPN-<version-number>-I001-amd64.msi`,
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
  },
  created() {},
  methods: {
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
  },
};
</script>


<template>
  <v-expansion-panels elevation="0">

    <!-- 1. Fetch secrets -->
    <v-expansion-panel>
        <v-expansion-panel-header>
          <h3><a href="#fetch-secrets" class="header-anchor">#</a> {{ fetchSecretsId }}. Fetch secrets</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content id="fetch-secrets" ref="#fetch-secrets" class="mt-2">
          You have received a link to an encrypted file archive (7-ZIP file).

          <ol>
            <li>Click on the filesender link in the email to download the file and save this on your local computer.</li>
            <li>Unpack (extract) the file only with <a href="/do-science/tools/transfer/7z/#install-7z-on-your-local-computer" target="_blank">software that supports the 7-ZIP archive format</a>.</li>
            <li>Use the key named 7-ZIP file key from your Signal transfer to decrypt the 7z archive.</li>
          </ol>
        </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 2. VPN Configuration -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#vpn-config" class="header-anchor">#</a> {{ vpnConfId }}. VPN Configuration</h3>
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

                    <a href="https://openvpn.net/community-downloads/" target="_blank">Download and install <b>OpenVPN</b> using the latest stable Windows Installer (Avoid beta versions)</a>
                    <br /><br />

                    Click on the link above, scroll down to the file named <code>{{ openvpnName }}</code> (Windows 10 users),
                    download the file and follow the on-screen installation instructions until finished.
                    <br /><br />

                    <v-alert
                      border="left"
                      colored-border
                      type="info"
                      elevation="2"
                    >
                      <b>NTNU users should use NTNU Software center.</b>
                      <hr class="mt-1 mb-2" />
                      Windows users from NTNU can install OpenVPN community edition
                      using NTNU Software Center even without administrative rights.
                    </v-alert>

                    <v-alert
                      border="left"
                      colored-border
                      type="warning"
                      elevation="2"
                    >
                      <b>You will need administrative rights on your local computer to successfully install OpenVPN.</b>
                      <hr class="mt-1 mb-2" />
                      Click on the link below if you do not hold administrative rights on your local computer, or don't know if you have such rights.
                    </v-alert>

                    <details><summary style="cursor: pointer;"><b>Installing OpenVPN without administrative rights</b></summary>

                      <div class="pl-4 pr-16 py-0">
                        <br />
                        You can check if you have administrative rights on your local computer by running
                        <code>net localgroup "Administrators"</code> in a Command prompt (<span v-html="cmdPrompt"></span>)
                        and see if your username is listed.
                        <br /><br />

                        <b>Request assistance from your local IT personnel if you do not hold administrative rights on your local computer and request that they:</b>
                        <br /><br />

                        (1) assist you in the OpenVPN installation, or<br /><br />

                        (2) grant you administrative rights on your local computer so you can install OpenVPN yourself.<br /><br />

                        <b>For simplicity, we have outlined the steps they need to perform below which you can attach to your request:</b>
                        <br /><br />

                        <ol>
                          <li class="mb-2">
                            Install the OpenVPN client on the computer for my user:<br />
                            Download and install using the Windows installer from <a href="https://openvpn.net/community-downloads/" target="_blank">https://openvpn.net/community-downloads/</a>
                            <br />
                          </li>
                          <li class="mb-3">
                            Create an OpenVPN Administrators group on my computer:<br />

                            <CopyTextField
                              :value='`net localgroup /add "OpenVPN Administrators"`'
                              label=""
                              prefix=""
                            />
                          </li>
                          <li class="mb-3">
                            Add my user to OpenVPN Administrators group on my computer:<br />

                            <CopyTextField
                              :value='`net localgroup "OpenVPN Administrators" /add "myDomain\\myUsername"`'
                              label=""
                              prefix=""
                            />

                            Replace <code>myDomain</code> and <code>myUsername</code> with user information.
                          </li>
                        </ol>
                      </div>

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
                        Start the OpenVPN client (if it is not running already) <br />
                        <img alt="OpenVPN-icon" src="/img/vpn/1.OpenVPN-guide.png" />
                      </li>
                      <li>
                        Expand pane on taskbar <br />
                        <img alt="OpenVPN-icon" src="/img/vpn/3.OpenVPN-guide.png" />
                      </li>
                      <li>
                        Select <code>Import file...</code> <br />
                        <img alt="OpenVPN-icon" src="/img/vpn/4.OpenVPN-guide.png" />
                      </li>
                      <li>
                        Click on Import file and select OpenVPN profile file <code>&lt;username&gt;.ovpn</code> that you extracted from 7-ZIP archive. <br />
                        <img alt="OpenVPN-icon" src="/img/vpn/5.OpenVPN-guide.png" /> <br />
                        <img alt="OpenVPN-icon" src="/img/vpn/6.OpenVPN-guide.png" />
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
                        Right-click on the OpenVPN notification icon on the taskbar.
                      </li>
                      <li>
                        Select <i>Connect</i>. <br />
                        <img alt="OpenVPN-icon" src="/img/vpn/7.OpenVPN-guide.png" />
                      </li>
                      <li>
                        Enter your user name (same as the OpenVPN profile file name).
                      </li>
                      <li>
                        Enter a rotating <code>verification code</code> from Google Authenticator as your password. <br />
                        <img alt="OpenVPN-icon" src="/img/vpn/9.OpenVPN-guide.png" />
                      </li>
                      <li>
                        When prompted for a Private Key Password, insert the <code>VPN passphrase</code> that your collected in Step 1. Your authentication will fail when you complete your passphrase below. 
                        This is expected since your verification code timed out while you typed your passphrase. <br />
                        <img alt="OpenVPN-icon" src="/img/vpn/8.OpenVPN-guide.png" />
                      </li>
                      <li>
                        Now try again to connect with a fresh verfication code from Google Authenticator.
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
                    class="mb-8 pr-4"
                    elevation="0"
                  >
                    WIP

                  </v-card>
                  <v-btn color="primary" class="mx-2 mb-1" @click="vpnStepper = 1">Start again</v-btn>
                  <v-btn color="link" class="mx-2 mb-1" @click="vpnStepper = 4">Back</v-btn>
                </v-stepper-content>

              </v-stepper>
            </v-card-text>
          </v-card>
        </v-dialog>

      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 3. SSH Passphrase change -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#ssh-passphrase" class="header-anchor">#</a> {{ passChangeId }}. SSH Passphrase change</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="ssh-passphrase" ref="#ssh-passphrase" class="mt-2">

        <v-col cols="12">
          {{ passChangeId }}.1. Design <a href="/do-science/lab-access/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a>.
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.2. To start Command Prompt press <code>WIN + R</code> and type <strong><code>cmd.exe</code></strong> then hit <code>Enter</code>.
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.3. Login to entry machine.
          <CopyTextField
            :value="`ssh -o StrictHostKeyChecking=accept-new ${username}@${ipAddress}`"
            label=""
            prefix="C:\Users\User>"
            placeholder="Your link is missing access token"
          />
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.4. You should then be prompted to enter a password. Enter your <code>SSH temporary key</code> from Signal message.
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="`${username}@${ipAddress}'s password:`"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.5. When asked for current UNIX password type in your <code>SSH temporary key</code> from Signal message.
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passExpiredText"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.6. Enter <a href="/do-science/lab-access/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a> and retype for verification. You will be kicked off the entry machine right after your password is changed.
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passSetNew"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.7. Reconnect to entry using your new passphrase.
          <v-text-field
          :value="`ssh ${username}@${ipAddress}`"
          ref="winStep7"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('winStep7')">&#xe14d;</a>
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
          {{ passChangeId }}.8. When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
          <v-text-field
          :value="`ssh -o StrictHostKeyChecking=accept-new home`"
          ref="winStep8"
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
              <a class="material-icons content_copy" @click="copyText('winStep8')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.9. You will be prompted to type your <code>SSH temporary key</code> from Signal message.
          <!-- <div class="language- extra-class"><pre class="language-text">
              <code v-text="`${username}@home's password:`"></code>
          </pre></div> -->
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passExpiredText"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.10. Similar to above, you will be asked for a new password. Type your new passphrase two times.
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passSetNew"></code>
          </pre></div>
          <!-- Expected result:
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passChangedHome"></code>
          </pre></div> -->
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.11. Verify a successful passphrase update by logging into your home machine.
          <v-text-field
          :value="`ssh home`"
          ref="winStep11"
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
              <a class="material-icons content_copy" @click="copyText('winStep11')">&#xe14d;</a>
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
          {{ passChangeId }}.12. Close Command Prompt window to make sure you are disconnected from your lab.
        </v-col>
          
      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 4. SSH Passwordless access -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#passwordless-access" class="header-anchor">#</a> {{ passLessId }}. SSH Passwordless access</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="passwordless-access" ref="#passwordless-access" class="mt-2">

        <v-col cols="12">
          {{ passLessId }}.1. Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
          <v-text-field
          :value="sshKeygenWin"
          ref="winStep13"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
            <a class="material-icons content_copy" @click="copyText('winStep13')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.2. Place your public key into the lab.
          <v-text-field
          :value="`type %USERPROFILE%\\.ssh\\id_rsa.pub | ssh ${username}@${ipAddress} add-public-key`"
          ref="winStep14"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('winStep14')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.3. Confirm passwordless access.
          <v-text-field
          :value="`ssh -o PasswordAuthentication=no -o PreferredAuthentications=publickey ${username}@${ipAddress}`"
          ref="winStep15"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('winStep15')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.4. Close Command prompt window to make sure you are disconnected from your lab.
        </v-col>

      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 5. SSH Config file -->
    <v-expansion-panel>
      <v-expansion-panel-header>
          <h3><a href="#ssh-config" class="header-anchor">#</a> {{ sshConfId }}. SSH Config file</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">
        <v-col cols="12">
          {{ sshConfId }}.1. Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>) and assure SSH Config file exists. No output is expected.
          <v-text-field
          :value='`type nul >> "%USERPROFILE%\\.ssh\\config"`'
          ref="winSshConfig1"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('winSshConfig1')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ sshConfId }}.2. Open SSH Config file.
          <v-text-field
          :value='`Notepad.exe "%USERPROFILE%\\.ssh\\config"`'
          ref="winSshConfig2"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('winSshConfig2')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ sshConfId }}.3. Add lab configuration into SSH Config opened in Notepad.
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
        <v-col cols="12">
          {{ sshConfId }}.4. Test by connecting straight into home machine.
          <v-text-field
          :value="`ssh -o StrictHostKeyChecking=accept-new ${labName}`"
          ref="ssh-config-lab-win"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('ssh-config-lab-win')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 6. Workbench -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#workbench" class="header-anchor">#</a> {{ workbenchId }}. Workbench</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="workbench" ref="#workbench" class="mt-2">
        <v-col cols="12">
          HUNT Workbench provides you with web-based access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R and MATLAB.
        </v-col>
        <v-col cols="12">
          Follow <a href="/do-science/hunt-workbench/installation/" target="_blank">Workbench Installation guide</a> to configure your access.
        </v-col>
        <v-col cols="12">
          <v-text-field
          v-model="hostsWorkbench"
          ref="hostsWorkbenchWindows"
          autocomplete="ignore-field"
          label="Hosts file - Workbench"
          placeholder="Your link is missing access token"
          persistent-placeholder
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('hostsWorkbenchWindows')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>

        <v-col cols="12">
          After you have successfully configured your access, you can use the following link to access your Workbench.
          <v-text-field
            :value="`https://${this.labName}.lab.hdc.ntnu.no`"
            ref="workbench-link"
            placeholder="Your link is missing access token"
            persistent-placeholder
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('workbench-link')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
      </v-expansion-panel-content>
    </v-expansion-panel>

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
          <v-text-field
          :value="`type %USERPROFILE%\\.ssh\\id_rsa.pub | clip`"
          ref="winCopyPubKeyCmd"
          label=""
          placeholder=""
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
            <a class="material-icons content_copy" @click="copyText('winCopyPubKeyCmd')">&#xe14d;</a>
          </template>
          </v-text-field>
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
          <v-text-field
          :value="`REG DELETE HKEY_CURRENT_USER\\SOFTWARE\\OpenVPN-GUI\\configs\\${username}`"
          ref="troubleshooting-remove-ovpn-passphrase"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('troubleshooting-remove-ovpn-passphrase')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          Confirm deletion with by typing <code>Yes</code> and then press <code>Enter</code>:
          <div class="language- extra-class"><pre class="language-text">
              <code v-text="`Permanently delete the registry key\nHKEY_CURRENT_USER\\SOFTWARE\\OpenVPN-GUI\\configs\\${username} (Yes/No)? Yes\n\nThe operation completed successfully.`"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          Deleting OpenVPN config
          <v-text-field
          :value="`del %USERPROFILE%\\OpenVPN\\config\\${username}`"
          ref="troubleshooting-remove-ovpn-config"
          label=""
          placeholder="Your link is missing access token"
          persistent-placeholder
          prefix="C:\Users\User>"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('troubleshooting-remove-ovpn-config')">&#xe14d;</a>
          </template>
          </v-text-field>
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
</template>
