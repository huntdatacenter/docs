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
  name: "MacJourney",
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
    hostsCyberduck() {
      return this.ipAddress && this.labName ? `10.5.5.12    home
${this.ipAddress}    ${this.labName}-entry
` : null;
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
        If you have not setup <b>HUNT Cloud VPN</b> yet follow <i>TOTP</i> and <i>Tunnelblick</i> configuration guides:

        <TotpGuide />

        <v-row class="my-1">
          <v-col cols="12">
            <v-btn
              text
              color="link"
              @click.stop="vpnDialog = true"
              elevation="2"
            >
              <v-icon>vpn_lock</v-icon>&nbsp;&nbsp;2. Tunnelblick Configuration
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
                <v-toolbar-title>Tunnelblick Configuration</v-toolbar-title>
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
                  Install Tunnelblick
                </v-stepper-step>

                <v-stepper-content step="1">
                  <v-card
                    class="mb-8 pr-4"
                    elevation="0"
                  >
                    We use <code>Tunnelblick</code> to ensure encrypted communication between your local computer and HUNT Cloud.<br /><br />

                    <a href="https://tunnelblick.net/downloads.html" target="_blank">Download and install the latest 'stable release' from this page(opens new window).</a>
                    <br /><br />

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
                    <b>If you 'do' get prompted with the Welcome to Tunnelblick message, follow these steps:</b>

                    <ol>
                      <li>
                        Select I have configuration files.
                      </li>
                      <li>
                        In the Welcome to Tunnelblick prompt, select I have configuration files.
                      </li>
                      <li>
                        When prompted for which type of configuration you have, select OpenVPN Configurations.
                      </li>
                      <li>
                        Select the OpenVPN profile named <code>&lt;username&gt;.ovpn</code> in the collection of credentials given from HUNT Cloud.
                      </li>
                      <li>
                        Continue with the Connecting to the VPN section below.
                      </li>
                    </ol>

                    <br />
                    <b>If you 'do not' get prompted with the Welcome to Tunnelblick message, follow these steps:</b>

                    <ol>
                      <li>
                        Find the OpenVPN profile named <code>&lt;username&gt;.ovpn</code> that you collected in Step 1.
                      </li>
                      <li>
                        Right-click the file OpenVPN profile named <code>&lt;username&gt;.ovpn</code>.
                      </li>
                      <li>
                        Select <code>Open With</code> -> <code>Tunnelblick</code>.
                      </li>
                      <li>
                        When prompted for <code>Install Configuration For All Users</code>, select <code>Only Me</code>.
                      </li>
                      <li>
                        Enter your macOS password to allow Tunnelblick to install the OpenVPN configuration.
                      </li>
                      <li>
                        Continue with the <code>Connecting to the VPN section</code> below.
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
                        Start Tunnelblick and Connect.
                      </li>
                      <li>
                        Enter your user name (same as the OpenVPN profile file name).
                      </li>
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
                      <b>Tunnelblick window should state "Connected".</b>
                      <hr class="mt-1 mb-2" />
                      A small Tunnelblick window should state <b>"Connected"</b> in green letters
                      with a timer that count the connection length.
                      <br /><br />
                      You should also see it by hovering your mouse over Tunnelblick icon
                      in <a href="https://support.apple.com/en-ie/guide/mac-help/mchlp1446/mac" target="_blank">the menu bar</a>.
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
          {{ passChangeId }}.2. Start Terminal application.
        </v-col>
        <v-col cols="12">
          {{ passChangeId }}.3. Login to entry machine.
          <CopyTextField
            :value="`ssh -o StrictHostKeyChecking=accept-new ${username}@${ipAddress}`"
            label=""
            prefix="~"
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
            ref="macStep7"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('macStep7')">&#xe14d;</a>
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
            ref="macStep8"
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
              <a class="material-icons content_copy" @click="copyText('macStep8')">&#xe14d;</a>
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
            ref="macStep11"
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
              <a class="material-icons content_copy" @click="copyText('macStep11')">&#xe14d;</a>
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
          {{ passChangeId }}.12. Close Terminal window to make sure you are disconnected from your lab.
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
          {{ passLessId }}.1. Open new Terminal window and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
          <v-text-field
            :value='`ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""`'
            ref="macStep13"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('macStep13')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.2. Start ssh-agent. Note: Output of this command is only informational.
          <v-text-field
            :value='`eval "$(ssh-agent -s)"`'
            ref="macStep14"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('macStep14')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.3. Add your public key to the ssh agent.
          <v-text-field
            :value="`ssh-add --apple-use-keychain ~/.ssh/id_rsa`"
            ref="macStep15"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('macStep15')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.4. Place your public key into the lab.
          <v-text-field
            :value="`ssh-copy-id -i ~/.ssh/id_rsa ${username}@${ipAddress}`"
            ref="macStep16"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('macStep16')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.5. Confirm passwordless access.
          <v-text-field
            :value="`ssh -o PasswordAuthentication=no -o PreferredAuthentications=publickey ${username}@${ipAddress}`"
            ref="macStep17"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('macStep17')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.6. Close Terminal window to make sure you are disconnected from your lab.
        </v-col>

      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 5. SSH Config file -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#ssh-config" class="header-anchor">#</a> {{ sshConfId }}. SSH Config file</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">

        <!-- Place in <code>~/.ssh/config</code>. -->
        <v-col cols="12">
          {{ sshConfId }}.1. Open new Terminal window and assure SSH Config file exists. No output is expected.
          <v-text-field
            :value="`touch ~/.ssh/config`"
            ref="macSshConfig1"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('macSshConfig1')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ sshConfId }}.2. Open SSH Config file.
          <v-text-field
            :value="`open -Wne ~/.ssh/config`"
            ref="macSshConfig2"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('macSshConfig2')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ sshConfId }}.3. Add lab configuration into SSH Config opened in Text Editor.
          <v-textarea
            v-model.trim="configText"
            ref="ssh-config-mac"
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
              <a class="material-icons content_copy" @click="copyTextArea('ssh-config-mac')">&#xe14d;</a>
            </template>
          </v-textarea>
        </v-col>
        <v-col cols="12">
          {{ sshConfId }}.4. Test by connecting straight into home machine.
          <v-text-field
            :value="`ssh -o StrictHostKeyChecking=accept-new ${labName}`"
            ref="ssh-config-lab-mac"
            label=""
            placeholder="Your link is missing access token"
            persistent-placeholder
            prefix="~"
            outlined
            dense
            readonly
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('ssh-config-lab-mac')">&#xe14d;</a>
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
            ref="hostsWorkbenchMacOS"
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
              <a class="material-icons content_copy" @click="copyText('hostsWorkbenchMacOS')">&#xe14d;</a>
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

    <!-- Cyberduck (MacOS only) -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#cyberduck" class="header-anchor">#</a> Cyberduck</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="cyberduck" ref="#cyberduck" class="mt-2">
        <v-col cols="12">
          Cyberduck is an SFTP client with graphical user interface.
        </v-col>
        <v-col cols="12">
          1. Add the hosts records below to your <code>/etc/hosts</code> file.
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="hostsCyberduck"
            ref="hostsCyberduck"
            autocomplete="ignore-field"
            label="Hosts file - Cyberduck"
            placeholder="Your link is missing access token"
            persistent-placeholder
            class="py-2 mt-2"
            outlined
            readonly
            rows="3"
            hide-details
            @focus="$event.target.select()"
          >
            <template v-slot:append>
              <a class="material-icons content_copy" @click="copyText('hostsCyberduck')">&#xe14d;</a>
            </template>
          </v-textarea>
        </v-col>
        <v-col cols="12">
          2. Follow <a href="/do-science/tools/transfer/cyberduck/" target="_blank">Cyberduck guide</a>
          to configure your access.
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
          1. Open new Terminal window.
        </v-col>
        <v-col cols="10">
          2. Run this command to copy SSH Public key created in Step 3 into clipboard.
          <v-text-field
          :value="`pbcopy < ~/.ssh/id_rsa.pub`"
          ref="macCopyPubKeyCmd"
          label=""
          placeholder=""
          persistent-placeholder
          prefix="~"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
            <a class="material-icons content_copy" @click="copyText('macCopyPubKeyCmd')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          3. Paste (CMD+V) your SSH Public key where needed.
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
</template>
