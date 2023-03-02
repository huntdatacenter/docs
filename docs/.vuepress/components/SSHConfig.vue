<script>
import {
  VApp,
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
        labName: null,
        username: null,
      },
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
    show() {
      return this.query.ipAddress && this.query.labName && this.query.username ? true : false;
    },
    configText() {
      return this.query.ipAddress && this.query.labName && this.query.username ? this.wrap(this.template) : null;
    },
    puttyHostName() {
      return this.query.ipAddress && this.query.username ? `${this.query.username}@${this.query.ipAddress}` : null
    }
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
            <v-card v-if="show" class="pt-4">
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
                </v-row>

                <v-card elevation="1">
                    <v-expansion-panels elevation="0">
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
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-card>
            <v-card v-else class="pt-4">
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
