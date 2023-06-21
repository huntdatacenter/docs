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
  name: "LabAccess",
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
    AccessIntro: () => import('./LabAccessGuides/AccessIntro.vue'),
    WindowsJourney: () => import('./LabAccessGuides/WindowsJourney.vue'),
    MacJourney: () => import('./LabAccessGuides/MacJourney.vue'),
    LinuxJourney: () => import('./LabAccessGuides/LinuxJourney.vue'),
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
      },
      sshKeygenWin: `ssh-keygen -q -t rsa -b 4096 -f %USERPROFILE%\\.ssh\\id_rsa -N ""`,
      sshKeygenMac: `ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""`,
      powershell: `# -- Set new passphrase on entry
ssh -o StrictHostKeyChecking=accept-new {username}@{ip_address}
# -- Reconnect to entry
ssh {username}@{ip_address}

# -- Set new passphrase on home
ssh -o StrictHostKeyChecking=accept-new home
# -- Confirm passphrase change by reconnecting to home
ssh home

# -- Open new Powershell window and generate ssh key
ssh-keygen -q -t rsa -b 4096 -f $env:USERPROFILE\\.ssh\\id_rsa -N '""'

# -- Set public key in lab
type $env:USERPROFILE\\.ssh\\id_rsa.pub | ssh {username}@{ip_address} add-public-key

# -- Confirm passwordless access
ssh {username}@{ip_address}
      `,
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
      template: `Host {lab_name}-entry
    HostName {ip_address}
    User {username}

Host {lab_name}
    HostName home
    HostKeyAlias {lab_name}
    User {username}
    # Use ProxyCommand to jump directly to home via entry
    ProxyJump {lab_name}-entry
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
    passExpiredText() {
      return this.query.ipAddress && this.query.labName && this.query.username ? this.wrap(this.passExpired) : null;
    },
    puttyHostName() {
      return this.query.ipAddress && this.query.username ? `${this.query.username}@${this.query.ipAddress}` : null;
    },
    hostsWorkbench() {
      return this.query.ipAddress && this.query.labName ? `${this.query.ipAddress}    ${this.query.labName}.lab.hdc.ntnu.no` : null;
    },
    entryIpUrl() {
      return this.query.ipAddress ? this.query.ipAddress.replace('.', '%2E') : '';
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
    if (access.length == 3) {
      this.query.ipAddress = access[0]
      localStorage.ipAddress = access[0]
      this.query.labName = access[1]
      localStorage.labName = access[1]
      this.query.username = access[2]
      localStorage.username = access[2]
    } else if (access.length == 4) {
      this.query.ipAddress = access[0]
      localStorage.ipAddress = access[0]
      // this.query.homeIpAddress = access[1]
      this.query.labName = access[2]
      localStorage.labName = access[2]
      this.query.username = access[3]
      localStorage.username = access[3]
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
    // console.log(this.$route.query)
    // /do-science/lab/?access=MTAuNDIuMS4xMzB8ZGVtb2xhYnxqb2V0ZXN0ZXI%3D
    // access = $(echo -n "${ip_address}|${lab_name}|${username}" | base64 | sed 's|=|%3D|g' )
    this.access = this.$route.query.access ? atob(this.$route.query.access).split('|') : []
    // console.log(this.query)
  },
  methods: {
    wrap(template) {
      let text = template
      text = text.replaceAll('{ip_address}', this.query.ipAddress)
      text = text.replaceAll('{lab_name}', this.query.labName)
      text = text.replaceAll('{username}', this.query.username)
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

        <v-card elevation="1">
          <v-tabs
            v-model="tab"
            centered
          >
            <!-- <v-tabs-slider></v-tabs-slider> -->

            <v-tab href="#first-time">First time?</v-tab>

            <v-tab href="#windows">Windows</v-tab>

            <v-tab href="#macos">MacOS</v-tab>

            <v-tab href="#linux">Linux</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item value="first-time" style="padding-top: 24px;">

              <v-row justify="center">
                <v-col cols="8" align="center">
                  <b>First time setting up access to your lab?</b>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col cols="8" align="center">
                  We have tailored all the steps in this guide to you. 
                  They contain your username and connection info where needed.
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="8" align="center">
                  To save your time all the commands that have a blue copy button in the right corner can be copy pasted.
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col cols="8" align="center">
                  <i>Feel free to choose your OS and start your journey.</i>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col align="center">
                  <img alt="Illustration of a robot" src="/img/hunt-cloud_bot_250_2.png" />
                </v-col>
              </v-row>

            </v-tab-item>

            <v-tab-item value="windows">

              <AccessIntro
                :username="this.query.username"
                :labName="this.query.labName"
                :ipAddress="this.query.ipAddress"
              />

              <WindowsJourney
                :username="this.query.username"
                :labName="this.query.labName"
                :ipAddress="this.query.ipAddress"
                :template="this.template"
              />

            </v-tab-item>
            <!-- ============================================================================================== -->
            <v-tab-item value="macos">
              <v-expansion-panels elevation="0">

                <AccessIntro
                  :username="this.query.username"
                  :labName="this.query.labName"
                  :ipAddress="this.query.ipAddress"
                />

                <MacJourney
                  :username="this.query.username"
                  :labName="this.query.labName"
                  :ipAddress="this.query.ipAddress"
                  :template="this.template"
                />

              </v-expansion-panels>
            </v-tab-item>
            <!-- ============================================================================================== -->
            <v-tab-item value="linux">
              <v-expansion-panels elevation="0">

                <AccessIntro
                  :username="this.query.username"
                  :labName="this.query.labName"
                  :ipAddress="this.query.ipAddress"
                />

                <LinuxJourney
                  :username="this.query.username"
                  :labName="this.query.labName"
                  :ipAddress="this.query.ipAddress"
                  :template="this.template"
                />

              </v-expansion-panels>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-card>
      <v-card v-show="!cfgShow" class="pt-4">
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
