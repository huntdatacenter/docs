<script>
import {
  VApp,
  VBtn,
  VCol,
  VRow,
  VTextField,
  VTextarea,
  VCard,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VTab,
  VTabs,
  VTabsSlider,
  VTabItem,
  VTabsItems,
} from "vuetify/lib";

export default {
  name: "IaasAccess",
  components: {
    VApp,
    VBtn,
    VCol,
    VRow,
    VTextField,
    VTextarea,
    VCard,
    VExpansionPanel,
    VExpansionPanels,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VTab,
    VTabs,
    VTabsSlider,
    VTabItem,
    VTabsItems,
  },
  props: {
    id: { type: String, default: "applet" },
  },
  data() {
    return {
      tab: null,
      access: null,
      query: {
        ipAddress: null,
        // homeIpAddress: null,
        labName: null,
        username: null,
        iaasName: null,
      },
//       sshKeygenWin: `ssh-keygen -q -t rsa -b 4096 -f %USERPROFILE%\\.ssh\\id_rsa -N ""`,
//       sshKeygenMac: `ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""`,
//       powershell: `# -- Set new passphrase on entry
// ssh -o StrictHostKeyChecking=accept-new {username}@{ip_address}
// # -- Reconnect to entry
// ssh {username}@{ip_address}

// # -- Set new passphrase on home
// ssh -o StrictHostKeyChecking=accept-new home
// # -- Confirm passphrase change by reconnecting to home
// ssh home

// # -- Open new Powershell window and generate ssh key
// ssh-keygen -q -t rsa -b 4096 -f $env:USERPROFILE\\.ssh\\id_rsa -N '""'

// # -- Set public key in lab
// type $env:USERPROFILE\\.ssh\\id_rsa.pub | ssh {username}@{ip_address} add-public-key

// # -- Confirm passwordless access
// ssh {username}@{ip_address}
//       `,
//       passExpired: `WARNING: Your password has expired.
// You must change your password now and login again!
// Changing password for {username}.
// (current) UNIX password:`,
//       passSetNew: `New password:
// Retype new password:`,
//       passChangedEntry: `passwd: Password updated successfully
// Connection to {ip_address} closed.`,
//       passChangedHome: `passwd: Password updated successfully
// Connection to home closed.`,
      template: `Host {lab_name}
    HostName {iaasip}
    HostKeyAlias {iaasname}
    User Ubuntu
    ProxyCommand ssh -W %h:%p {lab_name}
`,
    };
  },
  computed: {
    cfgShow() {
      return this.query.ipAddress && this.query.labName && this.query.username ? true : false;
    },
    configText() {
      return this.query.ipAddress && this.query.labName && this.query.username ? this.wrap(this.template) : null;
    },
    powershellText() {
      return this.query.ipAddress && this.query.labName && this.query.username ? this.wrap(this.powershell) : null;
    },
    passExpiredText() {
      return this.query.ipAddress && this.query.labName && this.query.username ? this.wrap(this.passExpired) : null;
    },
    puttyHostName() {
      return this.query.ipAddress && this.query.username ? `${this.query.username}@${this.query.ipAddress}` : null;
    },
    hostsWorkbench() {
      return this.query.ipAddress && this.query.labName ? `${this.query.ipAddress}    ${this.query.labName}.lab.hdc.ntnu.no` : null;
    },
    iaasMachine() {
      return this.query.ipAddress && this.query.labName  && this.query.username && this.query.iaasName && this.query.iaasIp ? true : false;
    },
    entryIpUrl() {
      return this.query.ipAddress ? this.query.ipAddress.replace('.', '%2E') : '';
    },
    homeIpUrl() {
      // return '10.5.5.12'.replace('.', '%2E');
      return 'home';
    },
    // mobaxtermTerminal() {
    //   return this.cfgShow ? `mobaxterm:${this.query.labName}%3D%23109%230%25${this.homeIpUrl}%2522%25${this.query.username}%25%250%250%25%25${this.entryIpUrl}%2522%25${this.query.username}%25%2D1%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%250%250%250%25%251080%25%250%250%251%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%2D256color%25%2D1%25%2D1%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%230%23%20%23%2D1` : null;
    // },
    // mobaxtermRdp() {
    //   return this.cfgShow ? `mobaxterm:${this.query.labName}%2DRDP%3D%2391%234%25${this.query.labName}%2D${this.homeIpUrl}%253389%25${this.query.username}%250%250%250%250%25%2D1%250%250%25%2D1%25xfce4%2Dsession%25${this.entryIpUrl}%5F%5FPIPE%5F%5F${this.homeIpUrl}%2522%5F%5FPIPE%5F%5F22%25${this.query.username}%5F%5FPIPE%5F%5F${this.query.username}%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%5F%5FPIPE%5F%5F%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%25%25%2D1%25%2D1%250%250%250%25%2D1%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%25%2D1%25%2D1%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%230%23%20%23%2D1` : null;
    // },
  },
  watch: {
    tab(val) {
      localStorage.osTab = val
    }
  },
  mounted() {
    // Open accordion if hash parameter is defined
    if (window.location.hash !== null && window.location.hash !== "") {
      if (window.location.hash in this.$refs) {
        this.$refs[window.location.hash].isActive = true
      }
    }
    const access = this.access
    if (access.length == 5) {
      this.query.ipAddress = access[0]
      localStorage.ipAddress = access[0]
      this.query.labName = access[1]
      localStorage.labName = access[1]
      this.query.username = access[2]
      localStorage.username = access[2]
      this.query.iaasName = access[3]
      localStorage.iaasName = access[3]
      this.query.iaasIp = access[4]
      localStorage.iaasIp = access[4]
    } else if (access.length == 6) {
      this.query.ipAddress = access[0]
      localStorage.ipAddress = access[0]
      // this.query.homeIpAddress = access[1]
      this.query.labName = access[2]
      localStorage.labName = access[2]
      this.query.username = access[3]
      localStorage.username = access[3]
      this.query.iaasName = access[4]
      localStorage.iaasName = access[4]
      this.query.iaasIp = access[5]
      localStorage.iaasIp = access[5]
    } else if (!access || access.length == 0) {
      if (localStorage.ipAddress) {
        this.query.ipAddress = localStorage.ipAddress
      }
      if (localStorage.labName) {
        this.query.labName = localStorage.labName
      }
      if (localStorage.username) {
        this.query.username = localStorage.username
      }
    }
    if (localStorage.osTab) {
      this.tab = localStorage.osTab
    }
  },
  created() {
    console.log(this.$route.query)
    // /do-science/iaas/?iaas=MTAuNDIuMS4xMzB8ZGVtb2xhYnxqb2V0ZXN0ZXJ8ZGVtb2xhYi1ibHVlLWFyZGFufDEwLjUuNS4xNg%3D%3D
    this.access = this.$route.query.access ? atob(this.$route.query.access).split('|') : []
    console.log(this.query)
  },
  methods: {
    wrap(template) {
      let text = template
      text = text.replaceAll('{ip_address}', this.query.ipAddress)
      text = text.replaceAll('{lab_name}', this.query.labName)
      text = text.replaceAll('{username}', this.query.username)
      text = text.replaceAll('{iaasname}', this.query.iaasName)
      text = text.replaceAll('{iaasip}', this.query.iaasIp)
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
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-card v-show="cfgShow" class="pt-4">
        <v-row class="ml-3 mb-2">
          <v-col cols="10">
            Once you have <a href="/do-science/getting-started/collect-your-keys/" target="_blank">collected your keys</a>
            use the guides below to setup your lab access.
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="query.username"
              ref="username"
              autocomplete="ignore-field"
              label="Username"
              placeholder="Your link is missing access token"
              persistent-placeholder
              outlined
              dense
              readonly
              hide-details
              @focus="$event.target.select()"
            >
              <template v-slot:append>
                <a class="material-icons content_copy" @click="copyText('username')">&#xe14d;</a>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="query.labName"
              ref="labName"
              autocomplete="ignore-field"
              label="Lab name"
              placeholder="Your link is missing access token"
              persistent-placeholder
              outlined
              dense
              readonly
              hide-details
              @focus="$event.target.select()"
            >
              <template v-slot:append>
                <a class="material-icons content_copy" @click="copyText('labName')">&#xe14d;</a>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="query.ipAddress"
              ref="ipAddress"
              autocomplete="ignore-field"
              label="IP Address"
              placeholder="Your link is missing access token"
              persistent-placeholder
              outlined
              dense
              readonly
              hide-details
              @focus="$event.target.select()"
            >
              <template v-slot:append>
                <a class="material-icons content_copy" @click="copyText('ipAddress')">&#xe14d;</a>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="query.iaasName"
              ref="IaasName"
              autocomplete="ignore-field"
              label="IaaS Name"
              placeholder="Your link is missing access token"
              persistent-placeholder
              outlined
              dense
              readonly
              hide-details
              @focus="$event.target.select()"
            >
              <template v-slot:append>
                <a class="material-icons content_copy" @click="copyText('iaasName')">&#xe14d;</a>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="query.iaasIp"
              ref="IaasIp"
              autocomplete="ignore-field"
              label="IaaS IP address"
              placeholder="Your link is missing access token"
              persistent-placeholder
              outlined
              dense
              readonly
              hide-details
              @focus="$event.target.select()"
            >
              <template v-slot:append>
                <a class="material-icons content_copy" @click="copyText('iaasip')">&#xe14d;</a>
              </template>
            </v-text-field>
          </v-col>
          <v-card elevation="1">
          <v-expansion-panels elevation="0">
          <v-expansion-panel>
              <v-expansion-panel-header>
                <h3><a href="#ssh-config" class="header-anchor">#</a> 4. SSH Config file</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">
                <v-tabs
                  v-model="tab"
                  centered
                >
                  <!-- <v-tabs-slider></v-tabs-slider> -->

                  <v-tab href="#windows">Windows</v-tab>

                  <v-tab href="#macos">MacOS</v-tab>

                  <v-tab href="#linux">Linux</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <v-tab-item value="windows">
                    <v-col cols="12">
                      4.1. Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>) and assure SSH Config file exists.
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
                        :value="`ssh ${query.labName}`"
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
                  </v-tab-item>
                  <v-tab-item value="macos">
                    <!-- Place in <code>~/.ssh/config</code>. -->
                    <v-col cols="12">
                      4.1. Open new Terminal window and assure SSH Config file exists.
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
                      4.2. Open SSH Config file.
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
                      4.3. Add lab configuration into SSH Config opened in Text Editor.
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
                      4.4. Test by connecting straight into home machine.
                      <v-text-field
                        :value="`ssh ${query.labName}`"
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
                  </v-tab-item>
                  <v-tab-item value="linux">
                    <!-- Place in <code>~/.ssh/config</code>. -->
                    <v-col cols="12">
                      4.1. Open new Terminal window (<code>CTRL + ALT + T</code>) and assure SSH Config file exists.
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
                        :value="`ssh ${query.labName}`"
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
                </v-tab-item>
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        </v-card>
        </v-row>  
      </v-card>
    </v-app>
  </div>
</template>


<style lang="sass">
.vuewidget

  &.vuewrapper
    // reset full view - no scroll bars, no full view
    overflow: inherit

    .v-application--wrap
      display: block
      flex: inherit
      min-height: initial
      min-width: inherit
      width: 100%
      overflow-x: hidden

.last-updated
  display: none

.language-text
  display: flex
  padding-top: 8px !important
  padding-bottom: 8px !important

.col
  &.col-12
    padding-top: 8px
    padding-bottom: 8px

.v-input__control
  margin-top: 4px

.v-text-field__slot
  font-size: 15px

.v-text-field__prefix
  color: rgba(0, 0, 0, 0.5)
  font-size: 13px
  margin-right: 5px

</style>
