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
} from "vuetify/lib";

export default {
  name: "LinuxJourney",
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

            <v-stepper v-model="vpnStepper" vertical>
              <v-stepper-step
                :complete="vpnStepper > 1"
                step="1"
              >
                Install OpenVPN
              </v-stepper-step>

              <v-stepper-content step="1">
                <v-card
                  class="mb-12"
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

                  <details><summary><b>Other linux distributions</b></summary>
                  
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
                <v-btn color="primary" class="mx-2" @click="vpnStepper = 2">Continue</v-btn>
                <!-- <v-btn color="link" class="mx-2" @click="totpDialog = false">Close</v-btn> -->
              </v-stepper-content>

              <v-stepper-step
                :complete="vpnStepper > 2"
                step="2"
              >
                Setup the VPN profile
              </v-stepper-step>

              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
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
                      Select the OpenVPN profile named <code>&lt;username&gt;.ovpn</code> that you collected in Step 1.
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
                <v-btn color="primary" class="mx-2" @click="vpnStepper = 3">Continue</v-btn>
                <v-btn color="link" class="mx-2" @click="vpnStepper = 1">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step
                :complete="vpnStepper > 3"
                step="3"
              >
                Connect to the VPN
              </v-stepper-step>

              <v-stepper-content step="3">
                <v-card
                  class="mb-12"
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
                <v-btn color="primary" class="mx-2" @click="vpnStepper = 4">Continue</v-btn>
                <v-btn color="link" class="mx-2" @click="vpnStepper = 2">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step
                :complete="vpnStepper > 4"
                step="4"
              >
                Verify your VPN connection
              </v-stepper-step>

              <v-stepper-content step="4">
                <v-card
                  class="mb-12"
                  elevation="0"
                >
                If you received the notification that <i>VPN connection has been successfully established</i>, then you are good to go.
                </v-card>
                <v-btn color="primary" class="mx-2" @click="vpnStepper = 1">Start again</v-btn>
                <v-btn color="link" class="mx-2" @click="vpnStepper = 3">Back</v-btn>
                <v-btn color="success" class="mx-2" @click="vpnDialog = false; vpnStepper = 1;">Finish</v-btn>
              </v-stepper-content>

            </v-stepper>
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
            prefix="$"
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
          {{ passChangeId }}.8. When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
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
          {{ passLessId }}.1. Open new Terminal window (<code>CTRL + ALT + T</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
          <v-text-field
            :value='`ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""`'
            ref="linuxStep13"
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
              <a class="material-icons content_copy" @click="copyText('linuxStep13')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.2. Start ssh-agent.
          <v-text-field
            :value='`eval "$(ssh-agent -s)"`'
            ref="linuxStep14"
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
              <a class="material-icons content_copy" @click="copyText('linuxStep14')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.3. Add your public key to the ssh agent.
          <v-text-field
            :value="`ssh-add ~/.ssh/id_rsa`"
            ref="linuxStep15"
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
              <a class="material-icons content_copy" @click="copyText('linuxStep15')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.4. Place your public key into the lab.
          <v-text-field
            :value="`ssh-copy-id -i ~/.ssh/id_rsa ${username}@${ipAddress}`"
            ref="linuxStep16"
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
              <a class="material-icons content_copy" @click="copyText('linuxStep16')">&#xe14d;</a>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12">
          {{ passLessId }}.5. Confirm passwordless access.
          <v-text-field
            :value="`ssh -o PasswordAuthentication=no -o PreferredAuthentications=publickey ${username}@${ipAddress}`"
            ref="linuxStep17"
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
              <a class="material-icons content_copy" @click="copyText('linuxStep17')">&#xe14d;</a>
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
          {{ sshConfId }}.1. Open new Terminal window (<code>CTRL + ALT + T</code>) and assure SSH Config file exists. No output is expected.
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
          {{ sshConfId }}.2. Open SSH Config file.
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
          {{ sshConfId }}.3. Add lab configuration into SSH Config opened in Text Editor.
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
          {{ sshConfId }}.4. Test by connecting straight into home machine.
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
            ref="hostsWorkbenchLinux"
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
              <a class="material-icons content_copy" @click="copyText('hostsWorkbenchLinux')">&#xe14d;</a>
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
          <v-text-field
          :value="`sudo apt-get update && sudo apt-get install -y xclip`"
          ref="linuxXclipCmd"
          label=""
          placeholder=""
          persistent-placeholder
          prefix="$"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
            <a class="material-icons content_copy" @click="copyText('linuxXclipCmd')">&#xe14d;</a>
          </template>
          </v-text-field>
        </v-col>
        <v-col cols="10">
          3. Run this command to copy SSH Public key created in Step 3 into clipboard.
          <v-text-field
          :value="`xclip -selection clipboard < ~/.ssh/id_rsa.pub`"
          ref="linuxCopyPubKeyCmd"
          label=""
          placeholder=""
          persistent-placeholder
          prefix="$"
          outlined
          dense
          readonly
          hide-details
          @focus="$event.target.select()"
          >
          <template v-slot:append>
            <a class="material-icons content_copy" @click="copyText('linuxCopyPubKeyCmd')">&#xe14d;</a>
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
          WIP
        </v-col>

      </v-expansion-panel-content>
    </v-expansion-panel>


  </v-expansion-panels>
</template>
