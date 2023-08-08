<script>
import {
  VCol,
  VRow,
  VTextField,
  VTextarea,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelHeader,
  VExpansionPanelContent,
} from "vuetify/lib";

export default {
  name: "LinuxJourney",
  components: {
    VCol,
    VRow,
    VTextField,
    VTextarea,
    VExpansionPanel,
    VExpansionPanels,
    VExpansionPanelHeader,
    VExpansionPanelContent,
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

    <v-expansion-panel>
      <v-expansion-panel-header>
          <h3><a href="#vpn-config" class="header-anchor">#</a> 1. VPN Configuration</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="vpn-config" ref="#vpn-config" class="mt-2">
        If you have not setup HUNT Cloud VPN yet follow our
        <a href="/do-science/lab-access/configure-vpn/" target="_blank">VPN configuration guide</a>
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
          2.2. Start Terminal application.
        </v-col>
        <v-col cols="12">
          2.3. Login to entry machine.
          <CopyTextField
            :value="`ssh -o StrictHostKeyChecking=accept-new ${username}@${ipAddress}`"
            label=""
            prefix="$"
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
          2.8. When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
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
          2.12. Close Terminal window to make sure you are disconnected from your lab.
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
          3.1. Open new Terminal window (<code>CTRL + ALT + T</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
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
          3.2. Start ssh-agent.
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
          3.3. Add your public key to the ssh agent.
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
          3.4. Place your public key into the lab.
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
          3.5. Confirm passwordless access.
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
          3.6. Close Terminal window to make sure you are disconnected from your lab.
        </v-col>

      </v-expansion-panel-content>
    </v-expansion-panel>

    <!-- 4. SSH Config file -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3><a href="#ssh-config" class="header-anchor">#</a> 4. SSH Config file</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">

        <!-- Place in <code>~/.ssh/config</code>. -->
        <v-col cols="12">
          4.1. Open new Terminal window (<code>CTRL + ALT + T</code>) and assure SSH Config file exists. No output is expected.
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
          4.2. Open SSH Config file.
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
          4.3. Add lab configuration into SSH Config opened in Text Editor.
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
          4.4. Test by connecting straight into home machine.
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
