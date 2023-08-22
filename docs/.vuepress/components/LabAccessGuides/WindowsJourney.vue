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
  VCardText,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VSpacer,
  VDialog,
  VStepper,
  VStepperHeader,
  VStepperContent,
  VStepperStep,
  VStepperItems,
  VDivider,
  VIcon,
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
    VCardText,
    VToolbar,
    VToolbarTitle,
    VToolbarItems,
    VSpacer,
    VDialog,
    VStepper,
    VStepperHeader,
    VStepperContent,
    VStepperStep,
    VStepperItems,
    VDivider,
    VIcon,
    CopyTextField: () => import('../generic/CopyTextField.vue'),
  },
  props: {
    username: { type: String, default: null },
    labName: { type: String, default: null },
    ipAddress: { type: String, default: null },
    template: { type: String, default: "" },
  },
  data() {
    return {
      totpDialog: false,
      e1: null,
      vpnDialog: false,
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

    <v-expansion-panel>
        <v-expansion-panel-header>
          <h3><a href="#vpn-config" class="header-anchor">#</a> 1. VPN Configuration</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content id="vpn-config" ref="#vpn-config" class="mt-2">
          If you have not setup HUNT Cloud VPN yet follow our
          <a href="/do-science/lab-access/configure-vpn/" target="_blank">VPN configuration guide</a>

          <v-row class="my-1">
            <v-col cols="12">
              <v-btn
                text
                @click.stop="totpDialog = true"
                elevation="2"
              >
                <v-icon>smartphone</v-icon>&nbsp;&nbsp;Time-based one-time password (TOTP)
              </v-btn>
            </v-col>
          </v-row>
          <v-dialog
            v-model="totpDialog"
            persistent
            max-width="960px"
            @keydown.esc="totpDialog = false"
          >
            <v-card>
              <v-toolbar dark color="#00509e">
                <v-toolbar-title>TOTP Configuration</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn icon fab @click="totpDialog = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>

              <v-stepper v-model="e1" vertical>
                <v-stepper-step
                  :complete="e1 > 1"
                  step="1"
                >
                  Install TOTP application on your phone
                </v-stepper-step>

                <v-stepper-content step="1">
                  <v-card
                    class="mb-12"
                    elevation="0"
                  >
                    Search for <code>Google Authenticator</code> in the iOS or Android app stores, or use the links below:

                    <ul class="my-2">
                      <li>
                        <a href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8" target="_blank">Download and install for iOS here (opens new window)</a>
                      </li>
                      <li>
                        <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en" target="_blank">Download and install for Android here (opens new window)</a>
                      </li>
                    </ul>

                    If you prefer different TOTP application e.g. <code>Microsoft Authenticator</code> you can use it,
                    although the steps might be sligthly different and we do not cover them in our guides.
                  </v-card>
                  <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
                  <!-- <v-btn text @click="totpDialog = false">Close</v-btn> -->
                </v-stepper-content>

                <v-stepper-step
                  :complete="e1 > 2"
                  step="2"
                >
                  Add new TOTP account
                </v-stepper-step>

                <v-stepper-content step="2">
                  <v-card
                    class="mb-12"
                    elevation="0"
                  >
                    <ol>
                      <li>Start the Google Authenticator app.</li>
                      <li>Tap <i>Begin setup</i> (first time setup) or <i>Add an account</i> (additional accounts).</li>
                      <li>Select Enter a provided key.</li>
                      <li>Enter <code>HUNT CLOUD VPN</code> as the account name.</li>
                      <li>Enter the <code>Google Authenticator</code> key sent to you over Signal.</li>
                      <li>Make sure <i>Time based</i> is selected.</li>
                      <li>Tap <i>Add</i> to finish the setup of the new account.</li>
                    </ol>
                  </v-card>
                  <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
                  <!-- <v-btn text @click="totpDialog = false">Close</v-btn> -->
                </v-stepper-content>

                <v-stepper-step step="3">
                  Check your TOTP codes
                </v-stepper-step>

                <v-stepper-content step="3">
                  <v-card
                    class="mb-12"
                    elevation="0"
                  >
                    In your <i>Google authenticator</i> app you should see a field<br />
                    with name <code>HUNT CLOUD VPN</code> showing <b>6 digit verification code</b>.
                    <br /><br />
                    This code refreshes ever 30 seconds.
                  </v-card>
                  <v-btn color="primary" @click="e1 = 1">Continue</v-btn>
                  <v-btn color="success" @click="totpDialog = false">Close</v-btn>
                </v-stepper-content>
              </v-stepper>
            </v-card>
          </v-dialog>

          <v-row class="my-1">
            <v-col cols="12">
              <v-btn
                text
                color="link"
                @click.stop="vpnDialog = true"
                elevation="2"
              >
                <v-icon>vpn_lock</v-icon>&nbsp;&nbsp;OpenVPN Configuration
              </v-btn>
            </v-col>
          </v-row>
          <v-dialog
            v-model="vpnDialog"
            persistent
            max-width="960px"
            @keydown.esc="vpnDialog = false"
          >
            <v-card>
              <v-toolbar dark color="#00509e">
                <v-toolbar-title>OpenVPN Configuration</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn icon fab @click="vpnDialog = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>

              <v-card-text class="pt-6">
                Testing testing
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 2. SSH Passphrase change -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#ssh-passphrase" class="header-anchor">#</a> 2. SSH Passphrase change</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="ssh-passphrase" ref="#ssh-passphrase" class="mt-2">

        <v-col cols="12">
          2.1. Design <a href="/do-science/lab-access/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a>.
        </v-col>
        <v-col cols="12">
          2.2. To start Command Prompt press <code>WIN + R</code> and type <strong><code>cmd.exe</code></strong> then hit <code>Enter</code>.
        </v-col>
        <v-col cols="12">
          2.3. Login to entry machine.
          <CopyTextField
            :value="`ssh -o StrictHostKeyChecking=accept-new ${username}@${ipAddress}`"
            label=""
            prefix="C:\Users\User>"
            placeholder="Your link is missing access token"
          />
        </v-col>
        <v-col cols="12">
          2.4. You should then be prompted to enter a password. Enter your <code>SSH temporary key</code> from Signal message.
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="`${username}@${ipAddress}'s password:`"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          2.5. When asked for current UNIX password type in your <code>SSH temporary key</code> from Signal message.
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passExpiredText"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          2.6. Enter <a href="/do-science/lab-access/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a> and retype for verification. You will be kicked off the entry machine right after your password is changed.
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passSetNew"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          2.7. Reconnect to entry using your new passphrase.
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
          2.8. When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
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
          2.9. You will be prompted to type your <code>SSH temporary key</code> from Signal message.
          <!-- <div class="language- extra-class"><pre class="language-text">
              <code v-text="`${username}@home's password:`"></code>
          </pre></div> -->
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passExpiredText"></code>
          </pre></div>
        </v-col>
        <v-col cols="12">
          2.10. Similar to above, you will be asked for a new password. Type your new passphrase two times.
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passSetNew"></code>
          </pre></div>
          <!-- Expected result:
          <div class="language- extra-class"><pre class="language-text">
          <code v-text="passChangedHome"></code>
          </pre></div> -->
        </v-col>
        <v-col cols="12">
          2.11. Verify a successful passphrase update by logging into your home machine.
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
          2.12. Close Command Prompt window to make sure you are disconnected from your lab.
        </v-col>
          
      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 3. SSH Passwordless access -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#passwordless-access" class="header-anchor">#</a> 3. SSH Passwordless access</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="passwordless-access" ref="#passwordless-access" class="mt-2">

        <v-col cols="12">
          3.1. Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
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
          3.2. Place your public key into the lab.
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
          3.3. Confirm passwordless access.
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
          3.4. Close Command prompt window to make sure you are disconnected from your lab.
        </v-col>

      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 4. SSH Config file -->
    <v-expansion-panel>
      <v-expansion-panel-header>
          <h3><a href="#ssh-config" class="header-anchor">#</a> 4. SSH Config file</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">
        <v-col cols="12">
          4.1. Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>) and assure SSH Config file exists. No output is expected.
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
          4.2. Open SSH Config file.
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
          4.3. Add lab configuration into SSH Config opened in Notepad.
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
          4.4. Test by connecting straight into home machine.
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

    <!-- 5. Workbench -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#workbench" class="header-anchor">#</a> 5. Workbench</h3>
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
