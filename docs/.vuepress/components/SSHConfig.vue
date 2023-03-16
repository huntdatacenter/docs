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
  },
  props: {
    id: { type: String, default: "applet" },
  },
  data() {
    return {
      query: {
        ipAddress: null,
        // homeIpAddress: null,
        labName: null,
        username: null,
      },
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
      cmdline: `# -- Set new passphrase on entry
ssh {username}@{ip_address}
# -- Reconnect to entry
ssh {username}@{ip_address}

# -- Set new passphrase on home
ssh home
# -- Confirm passphrase change by reconnecting to home
ssh home

# -- Open new Powershell window and generate ssh key
ssh-keygen -q -t rsa -b 4096 -f %USERPROFILE%\\.ssh\\id_rsa -N ""

# -- Set public key in lab
type %USERPROFILE%\\.ssh\\id_rsa.pub | ssh {username}@{ip_address} add-public-key

# -- Confirm passwordless access
ssh {username}@{ip_address}
      `,
      template: `# Place in ~/.ssh/config

Host {lab_name}-entry
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
    cmdlineText() {
      return this.query.ipAddress && this.query.labName && this.query.username ? this.wrap(this.cmdline) : null;
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
  mounted() {},
  created() {
    console.log(this.$route.query);
    // /do-science/lab/?access=MTAuNDIuMS4xMzB8ZGVtb2xhYnxqb2V0ZXN0ZXI%3D
    // access = $(echo -n "${ip_address}|${lab_name}|${username}" | base64 | sed 's|=|%3D|g' )
    const access = this.$route.query.access ? atob(this.$route.query.access).split('|') : [];

    if (access.length == 3) {
        this.query.ipAddress = access[0]
        this.query.labName = access[1]
        this.query.username = access[2]
    } else if (access.length == 4) {
        this.query.ipAddress = access[0]
        // this.query.homeIpAddress = access[1]
        this.query.labName = access[2]
        this.query.username = access[3]
    }
    console.log(this.query);
  },
  methods: {
    wrap(template) {
      let text = template;
      text = text.replaceAll('{ip_address}', this.query.ipAddress);
      text = text.replaceAll('{lab_name}', this.query.labName);
      text = text.replaceAll('{username}', this.query.username);
      return text;
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
                            autocomplete="ignore-field"
                            label="Username"
                            placeholder="Your link is missing access token"
                            persistent-placeholder
                            outlined
                            dense
                            readonly
                            hide-details
                            @focus="$event.target.select()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="10">
                        <v-text-field
                            v-model="query.labName"
                            autocomplete="ignore-field"
                            label="Lab name"
                            placeholder="Your link is missing access token"
                            persistent-placeholder
                            outlined
                            dense
                            readonly
                            hide-details
                            @focus="$event.target.select()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="10">
                        <v-text-field
                            v-model="query.ipAddress"
                            autocomplete="ignore-field"
                            label="IP Address"
                            placeholder="Your link is missing access token"
                            persistent-placeholder
                            outlined
                            dense
                            readonly
                            hide-details
                            @focus="$event.target.select()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="10">
                        <v-text-field
                            v-model="hostsWorkbench"
                            autocomplete="ignore-field"
                            label="Hosts file - Workbench"
                            placeholder="Your link is missing access token"
                            persistent-placeholder
                            outlined
                            dense
                            readonly
                            hide-details
                            @focus="$event.target.select()"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-card elevation="1">
                    <v-expansion-panels elevation="0">
                        <v-expansion-panel>
                            <v-expansion-panel-header :disable-icon-rotate="formFilled">
                                <h3 id="cmdline"><a href="#cmdline" class="header-anchor">#</a> Command line</h3>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-2">
                                <v-col cols="10">
                                  To start Command line press <code>WIN</code> + <code>R</code> and type <strong><code>cmd.exe</code></strong> then hit <code>Enter</code>.
                                </v-col>
                                <v-col cols="10">
                                    <v-textarea
                                        v-model="cmdlineText"
                                        autocomplete="ignore-field"
                                        label="Command line"
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
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header :disable-icon-rotate="formFilled">
                                <h3 id="powershell"><a href="#powershell" class="header-anchor">#</a> Powershell</h3>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-2">
                                <v-col cols="10">
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
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header :disable-icon-rotate="formFilled">
                                <h3 id="putty"><a href="#putty" class="header-anchor">#</a> Putty</h3>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-2">
                                <v-col cols="10">
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
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header :disable-icon-rotate="formFilled">
                                <h3 id="ssh-config"><a href="#ssh-config" class="header-anchor">#</a> SSH Config</h3>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-2">
                                <v-col cols="10">
                                    <v-textarea
                                        v-model.trim="configText"
                                        label="SSH Config file"
                                        placeholder="Your link is missing access token"
                                        persistent-placeholder
                                        class="py-2 mt-2"
                                        outlined
                                        readonly
                                        rows="13"
                                        hide-details
                                        @focus="$event.target.select()"
                                    ></v-textarea>
                                </v-col>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header :disable-icon-rotate="formFilled">
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

</style>
