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
  name: "SSHConfig",
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
    ProxyCommand ssh -W %h:%p {lab_name}-entry
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
    entryIpUrl() {
      return this.query.ipAddress ? this.query.ipAddress.replace('.', '%2E') : '';
    },
    homeIpUrl() {
      // return '10.5.5.12'.replace('.', '%2E');
      return 'home';
    },
    mobaxtermTerminal() {
      return this.cfgShow ? `mobaxterm:${this.query.labName}%3D%23109%230%25${this.homeIpUrl}%2522%25${this.query.username}%25%250%250%25%25${this.entryIpUrl}%2522%25${this.query.username}%25%2D1%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%250%250%250%25%251080%25%250%250%251%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%2D256color%25%2D1%25%2D1%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%230%23%20%23%2D1` : null;
    },
    mobaxtermRdp() {
      return this.cfgShow ? `mobaxterm:${this.query.labName}%2DRDP%3D%2391%234%25${this.query.labName}%2D${this.homeIpUrl}%253389%25${this.query.username}%250%250%250%250%25%2D1%250%250%25%2D1%25xfce4%2Dsession%25${this.entryIpUrl}%5F%5FPIPE%5F%5F${this.homeIpUrl}%2522%5F%5FPIPE%5F%5F22%25${this.query.username}%5F%5FPIPE%5F%5F${this.query.username}%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%5F%5FPIPE%5F%5F%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%25%25%2D1%25%2D1%250%250%250%25%2D1%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%25%2D1%25%2D1%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%230%23%20%23%2D1` : null;
    },
  },
  watch: {
    tab(val) {
      localStorage.osTab = val
    }
  },
  mounted() {},
  created() {
    // console.log(this.$route.query)
    // /do-science/lab/?access=MTAuNDIuMS4xMzB8ZGVtb2xhYnxqb2V0ZXN0ZXI%3D
    // access = $(echo -n "${ip_address}|${lab_name}|${username}" | base64 | sed 's|=|%3D|g' )
    const access = this.$route.query.access ? atob(this.$route.query.access).split('|') : []

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
        <v-row class="ml-3 mb-2">
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
              v-model="hostsWorkbench"
              ref="hostsWorkbench"
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
                <a class="material-icons content_copy" @click="copyText('hostsWorkbench')">&#xe14d;</a>
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-card elevation="1">
          <v-expansion-panels elevation="0">
            <v-expansion-panel>
              <v-expansion-panel-header>
                  <h3 id="cmdline"><a href="#cmdline" class="header-anchor">#</a> VPN Configuration</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="mt-2">
                <a href="/do-science/getting-started/configure-vpn/" target="_blank">VPN configuration guide</a>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                  <h3 id="cmdline"><a href="#cmdline" class="header-anchor">#</a> SSH Passphrase change</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="mt-2">
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
                      1. Design <a href="/do-science/getting-started/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a>.
                    </v-col>
                    <v-col cols="12">
                      2. To start Command Prompt press <code>WIN</code> + <code>R</code> and type <strong><code>cmd.exe</code></strong> then hit <code>Enter</code>.
                    </v-col>
                    <v-col cols="12">
                      3. Login to entry machine.
                      <v-text-field
                        :value="`ssh -o StrictHostKeyChecking=accept-new ${query.username}@${query.ipAddress}`"
                        ref="winStep2"
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
                          <a class="material-icons content_copy" @click="copyText('winStep2')">&#xe14d;</a>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      4. You should then be prompted to enter a password. Enter your <code>SSH temporary key</code> from Signal message.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="`${query.username}@${query.ipAddress}'s password:`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      5. When asked for current UNIX password type in your <code>SSH temporary key</code> from Signal message.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passExpiredText"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      6. Enter <a href="/do-science/getting-started/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a> and retype for verification. You will be kicked off the entry machine right after your password is changed.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passSetNew"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      7. Reconnect to entry using your new passphrase.
                      <v-text-field
                        :value="`ssh ${query.username}@${query.ipAddress}`"
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
                          <code v-text="`${query.username}@${query.labName}-entry:~$`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      8. When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
                      <v-text-field
                        :value="`ssh -o StrictHostKeyChecking=accept-new home`"
                        ref="winStep8"
                        label=""
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        :prefix="`${query.username}@${query.labName}-entry:~$`"
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
                      9. You will be prompted to type your <code>SSH temporary key</code> from Signal message.
                      <!-- <div class="language- extra-class"><pre class="language-text">
                          <code v-text="`${query.username}@home's password:`"></code>
                      </pre></div> -->
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passExpiredText"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      10. Similar to above, you will be asked for a new password. Type your new passphrase two times.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passSetNew"></code>
                      </pre></div>
                      <!-- Expected result:
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passChangedHome"></code>
                      </pre></div> -->
                    </v-col>
                    <v-col cols="12">
                      11. Verify a successful passphrase update by logging into your home machine.
                      <v-text-field
                        :value="`ssh home`"
                        ref="winStep11"
                        label=""
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        :prefix="`${query.username}@${query.labName}-entry:~$`"
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
                          <code v-text="`${query.username}@${query.labName}-home:~$`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      12. Close Command Prompt window to make sure you are disconnected from your lab.
                    </v-col>

                    <v-col cols="12">
                      13. Open new Command Prompt window (<code>WIN + R</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
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
                      14. Place your public key into the lab.
                      <v-text-field
                        :value="`type %USERPROFILE%\\.ssh\\id_rsa.pub | ssh ${query.username}@${query.ipAddress} add-public-key`"
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
                      15. Confirm passwordless access.
                      <v-text-field
                        :value="`ssh ${query.username}@${query.ipAddress}`"
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
                  </v-tab-item>
                  <v-tab-item value="macos">
                    <v-col cols="12">
                      1. Design <a href="/do-science/getting-started/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a>.
                    </v-col>
                    <v-col cols="12">
                      2. Start Terminal application.
                    </v-col>
                    <v-col cols="12">
                      3. Login to entry machine.
                      <v-text-field
                        :value="`ssh -o StrictHostKeyChecking=accept-new ${query.username}@${query.ipAddress}`"
                        ref="macStep2"
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
                          <a class="material-icons content_copy" @click="copyText('macStep2')">&#xe14d;</a>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      4. You should then be prompted to enter a password. Enter your <code>SSH temporary key</code> from Signal message.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="`${query.username}@${query.ipAddress}'s password:`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      5. When asked for current UNIX password type in your <code>SSH temporary key</code> from Signal message.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passExpiredText"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      6. Enter <a href="/do-science/getting-started/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a> and retype for verification. You will be kicked off the entry machine right after your password is changed.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passSetNew"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      7. Reconnect to entry using your new passphrase.
                      <v-text-field
                        :value="`ssh ${query.username}@${query.ipAddress}`"
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
                          <code v-text="`${query.username}@${query.labName}-entry:~$`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      8. When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
                      <v-text-field
                        :value="`ssh -o StrictHostKeyChecking=accept-new home`"
                        ref="macStep8"
                        label=""
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        :prefix="`${query.username}@${query.labName}-entry:~$`"
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
                      9. You will be prompted to type your <code>SSH temporary key</code> from Signal message.
                      <!-- <div class="language- extra-class"><pre class="language-text">
                          <code v-text="`${query.username}@home's password:`"></code>
                      </pre></div> -->
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passExpiredText"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      10. Similar to above, you will be asked for a new password. Type your new passphrase two times.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passSetNew"></code>
                      </pre></div>
                      <!-- Expected result:
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passChangedHome"></code>
                      </pre></div> -->
                    </v-col>
                    <v-col cols="12">
                      11. Verify a successful passphrase update by logging into your home machine.
                      <v-text-field
                        :value="`ssh home`"
                        ref="macStep11"
                        label=""
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        :prefix="`${query.username}@${query.labName}-entry:~$`"
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
                          <code v-text="`${query.username}@${query.labName}-home:~$`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      12. Close Command Prompt window to make sure you are disconnected from your lab.
                    </v-col>

                    <v-col cols="12">
                      13. Open new Terminal tab (<code>CMD + T</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
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
                      14. Start ssh-agent.
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
                      15. Add your public key to the ssh agent.
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
                      16. Place your public key into the lab.
                      <v-text-field
                        :value="`ssh-copy-id ${query.username}@${query.ipAddress}`"
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
                      17. Confirm passwordless access.
                      <v-text-field
                        :value="`ssh ${query.username}@${query.ipAddress}`"
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
                  </v-tab-item>
                  <v-tab-item value="linux">
                    <v-col cols="12">
                      1. Design <a href="/do-science/getting-started/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a>.
                    </v-col>
                    <v-col cols="12">
                      2. Start Terminal application.
                    </v-col>
                    <v-col cols="12">
                      3. Login to entry machine.
                      <v-text-field
                        :value="`ssh -o StrictHostKeyChecking=accept-new ${query.username}@${query.ipAddress}`"
                        ref="linuxStep2"
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
                          <a class="material-icons content_copy" @click="copyText('linuxStep2')">&#xe14d;</a>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      4. You should then be prompted to enter a password. Enter your <code>SSH temporary key</code> from Signal message.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="`${query.username}@${query.ipAddress}'s password:`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      5. When asked for current UNIX password type in your <code>SSH temporary key</code> from Signal message.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passExpiredText"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      6. Enter <a href="/do-science/getting-started/configure-ssh/#_3-2-design-a-passphrase" target="_blank">your new passphrase</a> and retype for verification. You will be kicked off the entry machine right after your password is changed.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passSetNew"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      7. Reconnect to entry using your new passphrase.
                      <v-text-field
                        :value="`ssh ${query.username}@${query.ipAddress}`"
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
                          <code v-text="`${query.username}@${query.labName}-entry:~$`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      8. When logged into your <code>entry</code> machine, connect to your <code>home</code> machine.
                      <v-text-field
                        :value="`ssh -o StrictHostKeyChecking=accept-new home`"
                        ref="linuxStep8"
                        label=""
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        :prefix="`${query.username}@${query.labName}-entry:~$`"
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
                      9. You will be prompted to type your <code>SSH temporary key</code> from Signal message.
                      <!-- <div class="language- extra-class"><pre class="language-text">
                          <code v-text="`${query.username}@home's password:`"></code>
                      </pre></div> -->
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passExpiredText"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      10. Similar to above, you will be asked for a new password. Type your new passphrase two times.
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passSetNew"></code>
                      </pre></div>
                      <!-- Expected result:
                      <div class="language- extra-class"><pre class="language-text">
                        <code v-text="passChangedHome"></code>
                      </pre></div> -->
                    </v-col>
                    <v-col cols="12">
                      11. Verify a successful passphrase update by logging into your home machine.
                      <v-text-field
                        :value="`ssh home`"
                        ref="linuxStep11"
                        label=""
                        placeholder="Your link is missing access token"
                        persistent-placeholder
                        :prefix="`${query.username}@${query.labName}-entry:~$`"
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
                          <code v-text="`${query.username}@${query.labName}-home:~$`"></code>
                      </pre></div>
                    </v-col>
                    <v-col cols="12">
                      12. Close Command Prompt window to make sure you are disconnected from your lab.
                    </v-col>

                    <v-col cols="12">
                      13. Open new Terminal tab (<code>CMD + T</code>) and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press <code>n</code> and skip to next step.
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
                      14. Start ssh-agent.
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
                      15. Add your public key to the ssh agent.
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
                      16. Place your public key into the lab.
                      <v-text-field
                        :value="`ssh-copy-id ${query.username}@${query.ipAddress}`"
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
                      17. Confirm passwordless access.
                      <v-text-field
                        :value="`ssh ${query.username}@${query.ipAddress}`"
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
                  </v-tab-item>
                </v-tabs-items>
                  
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3 id="ssh-config"><a href="#ssh-config" class="header-anchor">#</a> SSH Config file</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="mt-2">
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
                      1. Assure SSH Config file exists.
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
                      2. Open SSH Config file.
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
                      3. Add lab configuration into SSH Config opened in Notepad.
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
                  </v-tab-item>
                  <v-tab-item value="macos">
                    <!-- Place in <code>~/.ssh/config</code>. -->
                    <v-col cols="12">
                      1. Assure SSH Config file exists.
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
                      2. Open SSH Config file.
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
                      3. Add lab configuration into SSH Config opened in Text Editor.
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
                  </v-tab-item>
                  <v-tab-item value="linux">
                    <!-- Place in <code>~/.ssh/config</code>. -->
                    <v-col cols="12">
                      1. Assure SSH Config file exists.
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
                      2. Open SSH Config file.
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
                      3. Add lab configuration into SSH Config opened in Text Editor.
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
                  </v-tab-item>
                </v-tabs-items>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- <v-expansion-panel>
              <v-expansion-panel-header>
                <h3 id="powershell"><a href="#powershell" class="header-anchor">#</a> Powershell</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="mt-2">
                <v-col cols="12">
                  <v-textarea
                    v-model="powershellText"
                    autocomplete="ignore-field"
                    label="Powershell setup"
                    placeholder="Your link is missing access token"
                    persistent-placeholder
                    outlined
                    dense
                    readonly
                    rows="19"
                    hide-details
                    @focus="$event.target.select()"
                  ></v-textarea>
                </v-col>
              </v-expansion-panel-content>
            </v-expansion-panel> -->
            <!-- <v-expansion-panel>
              <v-expansion-panel-header>
                <h3 id="putty"><a href="#putty" class="header-anchor">#</a> Putty</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="mt-2">
                <v-col cols="12">
                  <v-text-field
                    v-model="puttyHostName"
                    autocomplete="ignore-field"
                    label="Putty - Host Name"
                    placeholder="Your link is missing access token"
                    persistent-placeholder
                    outlined
                    dense
                    readonly
                    hide-details
                    @focus="$event.target.select()"
                  ></v-text-field>
                </v-col>
              </v-expansion-panel-content>
            </v-expansion-panel> -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3 id="mobaxterm"><a href="#mobaxterm" class="header-anchor">#</a> MobaXterm (Windows)</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="mt-2">
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
          </v-expansion-panels>
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
