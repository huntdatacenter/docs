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
    CopyTextField: () => import('./generic/CopyTextField.vue'),
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
      template: `Host {lab_name}-entry
    HostName {ip_address}
    User {username}

Host {lab_name}
    HostName home
    HostKeyAlias {lab_name}
    User {username}
    ProxyJump {lab_name}-entry

Host {iaas_name}
    HostName 10.5.5.16
    HostKeyAlias {iaas_name}
    User ubuntu
    ProxyJump {lab_name}

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
      return this.query.ipAddress && this.query.labName ? `${this.query.ipAddress}  ${this.query.labName}.lab.hdc.ntnu.no` : null;
    },
    isDataComplete() {
      return this.query.ipAddress && this.query.labName  && this.query.username && this.query.iaasName ? true : false;
    },
    entryIpUrl() {
      return this.query.ipAddress ? this.query.ipAddress.replace('.', '%2E') : '';
    },
    iaas_mobaxtermTerminal() {
      return this.cfgShow ? `mobaxterm:${this.labName}%2Diaas%2D${this.iaasName}%20%3D%23109%230%25${this.homeIpUrl}%2Diaas%2D${this.iaasName}%2522%25ubuntu%25%25%2D1%25%2D1%25%2510%2E42%2E130%2E39%5F%5FPIPE%5F%5F10%2E5%2E5%2E12%2522%5F%5FPIPE%5F%5F22%25${this.username}%5F%5FPIPE%5F%5F${this.username}%25%2D1%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%5F%5FPIPE%5F%5F%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%250%250%250%25%251080%25%250%250%251%25%250%25%25%25%250%25%2D1%25%2D1%250%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%2D256color%25%2D1%250%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%25%2D1%230%23%20%23%2D1` : null;
    },
    homeIpUrl() {
      // return '10.5.5.12'.replace('.', '%2E');
      return 'home';
    },
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
    if (access.length == 4) {
      this.query.ipAddress = access[0]
      localStorage.ipAddress = access[0]
      this.query.labName = access[1]
      localStorage.labName = access[1]
      this.query.username = access[2]
      localStorage.username = access[2]
      this.query.iaasName = access[3]
      localStorage.iaasName = access[3]
    } else {
      if (localStorage.ipAddress) {
        this.query.ipAddress = localStorage.ipAddress
      }
      if (localStorage.labName) {
        this.query.labName = localStorage.labName
      }
      if (localStorage.username) {
        this.query.username = localStorage.username
      }
      if (localStorage.iaasName) {
        this.query.iaasName = localStorage.iaasName
      }
    }
    if (localStorage.osTab) {
      this.tab = localStorage.osTab
    }
  },
  created() {
    console.log(this.$route.query)
    // /do-science/iaas/?access=MTAuNDIuMS4xMzB8ZGVtb2xhYnxqb2V0ZXN0ZXJ8ZGVtb2xhYi1ibHVlLWFyZGFu
    this.access = this.$route.query.access ? atob(this.$route.query.access).split('|') : []
    console.log(this.query)
  },
  methods: {
    wrap(template) {
      let text = template
      text = text.replaceAll('{ip_address}', this.query.ipAddress)
      text = text.replaceAll('{lab_name}', this.query.labName)
      text = text.replaceAll('{username}', this.query.username)
      text = text.replaceAll('{iaas_name}', this.query.iaasName)
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
      <v-card v-show="isDataComplete" class="pt-4">

        <v-row class="ml-3 mb-2" justify="center">
          <v-col cols="6">
            <CopyTextField
              v-model="query.username"
              label="Username"
              placeholder="Your link is missing access token"
            />
          </v-col>
          <v-col cols="6">
            <CopyTextField
              v-model="query.labName"
              label="Lab name"
              placeholder="Your link is missing access token"
            />
          </v-col>
          <v-col cols="6">
            <CopyTextField
              v-model="query.ipAddress"
              label="Lab IP Address"
              placeholder="Your link is missing access token"
            />
          </v-col>
          <v-col cols="6">
            <CopyTextField
              v-model="query.iaasName"
              label="IAAS machine name"
              placeholder="Your link is missing access token"
            />
          </v-col>
        </v-row>
        <v-card elevation="1">
          <v-tabs
            v-model="tab"
            centered
            grow
          >
            <v-tab href="#windows">Windows</v-tab>
            <v-tab href="#macos">MacOS</v-tab>
            <v-tab href="#linux">Linux</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item value="windows" style="padding-top: 24px;">
              <v-expansion-panels elevation="0">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3><a href="#ssh-config" class="header-anchor">#</a> 1. SSH Config file</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">

                    <v-col cols="12">
                      1.1. Open new Command Prompt window (<code>WIN + R</code> and type <code>cmd.exe</code> then hit <code>Enter</code>) and assure SSH Config file exists.
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
                      1.2. Open SSH Config file.
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
                      1.3. Copy and paste configuration into SSH Config opened in Notepad.
                      <v-textarea
                        v-model.trim="configText"
                        ref="ssh-config-win"
                        label="SSH Config file"
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        class="py-2 mt-2"
                        outlined
                        readonly
                        rows="16"
                        hide-details
                        @focus="$event.target.select()"
                      >
                        <template v-slot:append>
                          <a class="material-icons content_copy" @click="copyTextArea('ssh-config-win')">&#xe14d;</a>
                        </template>
                      </v-textarea>
                    </v-col>
                    <v-col cols="12">
                      1.4. Test by connecting straight into IAAS machine.
                      <v-text-field
                        :value="`ssh ${query.iaasName}`"
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
                <!-- Mobaxterm iaas terminal session -->
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3><a href="#mobaxterm" class="header-anchor">#</a>2. IaaS MobaXterm</h3>
                  </v-expansion-panel-header>
                    <v-expansion-panel-content id="mobaxterm" ref="#mobaxterm" class="mt-2">
                      <v-col cols="10">
                        <v-btn
                          color="success"
                          block
                          target="_blank"
                          :href="iaas_mobaxtermTerminal"
                          >
                          Create terminal session
                        </v-btn>
                      </v-col>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3><a href="#troubleshooting" class="header-anchor">#</a> Troubleshooting</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content id="troubleshooting" ref="#troubleshooting" class="mt-2">
                    <v-col>Work in progress.</v-col>
                  </v-expansion-panel-content>
                </v-expansion-panel>

              </v-expansion-panels>
            </v-tab-item>

            <!-- =========================================== -->
            <v-tab-item value="macos" style="padding-top: 24px;">
              <v-expansion-panels elevation="0">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3><a href="#ssh-config" class="header-anchor">#</a> 1. SSH Config file</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">
                     <!-- Place in <code>~/.ssh/config</code>. -->
                     <v-col cols="12">
                      1.1. Open new Terminal window and assure SSH Config file exists.
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
                      1.2. Open SSH Config file.
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
                      1.3. Copy and paste configuration into SSH Config opened in Text Editor.
                      <v-textarea
                        v-model.trim="configText"
                        ref="ssh-config-mac"
                        label="SSH Config file"
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        class="py-2 mt-2"
                        outlined
                        readonly
                        rows="16"
                        hide-details
                        @focus="$event.target.select()"
                      >
                        <template v-slot:append>
                          <a class="material-icons content_copy" @click="copyTextArea('ssh-config-mac')">&#xe14d;</a>
                        </template>
                      </v-textarea>
                    </v-col>
                    <v-col cols="12">
                      1.4 Test by connecting straight into IAAS machine.
                      <v-text-field
                        :value="`ssh ${query.iaasName}`"
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

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3><a href="#troubleshooting" class="header-anchor">#</a> Troubleshooting</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content id="troubleshooting" ref="#troubleshooting" class="mt-2">
                    <v-col>Work in progress.</v-col>
                  </v-expansion-panel-content>
                </v-expansion-panel>

              </v-expansion-panels>
            </v-tab-item>

            <!-- =========================================== -->
            <v-tab-item value="linux" style="padding-top: 24px;">
              <v-expansion-panels elevation="0">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3><a href="#ssh-config" class="header-anchor">#</a> 1. SSH Config file</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content id="ssh-config" ref="#ssh-config" class="mt-2">

                    <!-- Place in <code>~/.ssh/config</code>. -->
                    <v-col cols="12">
                      1.1. Open new Terminal window (<code>CTRL + ALT + T</code>) and assure SSH Config file exists.
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
                      1.2. Open SSH Config file.
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
                      1.3. Copy and paste configuration into SSH Config opened in Text Editor.
                      <v-textarea
                        v-model.trim="configText"
                        ref="ssh-config-linux"
                        label="SSH Config file"
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        class="py-2 mt-2"
                        outlined
                        readonly
                        rows="16"
                        hide-details
                        @focus="$event.target.select()"
                      >
                        <template v-slot:append>
                          <a class="material-icons content_copy" @click="copyTextArea('ssh-config-linux')">&#xe14d;</a>
                        </template>
                      </v-textarea>
                    </v-col>
                    <v-col cols="12">
                      1.4. Test by connecting straight into IAAS machine.
                      <v-text-field
                        :value="`ssh ${query.iaasName}`"
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

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3><a href="#troubleshooting" class="header-anchor">#</a> Troubleshooting</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content id="troubleshooting" ref="#troubleshooting" class="mt-2">
                    <v-col>Work in progress.</v-col>
                  </v-expansion-panel-content>
                </v-expansion-panel>

              </v-expansion-panels>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-card>
      <v-card v-show="!isDataComplete" class="pt-4">
        Invalid link. Please check your emails to find the full link.
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

