<script>
import {
  VApp,
  VDialog,
  VBtn,
  VCol,
  VRow,
  VTextField,
  VTextarea,
  VSelect,
  VIcon,
  VCard,
  VCardText,
  VCardActions,
  VSubheader,
  VSpacer,
  VDivider,
} from "vuetify/lib";

export default {
  name: "SSHConfig",
  components: {
    VApp,
    VDialog,
    VBtn,
    VCol,
    VRow,
    VTextField,
    VTextarea,
    VSelect,
    VIcon,
    VCard,
    VCardText,
    VCardActions,
    VSubheader,
    VSpacer,
    VDivider,
  },
  props: {
    id: { type: String, default: "applet" },
  },
  data() {
    return {
      ipAddress: null,
      labName: null,
      username: null,
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
    showConfig() {
      return this.ipAddress && this.labName && this.username ? true : false
    },
    configText() {
      return this.ipAddress && this.labName && this.username ? this.wrap(this.template) : null;
    },
  },
  mounted() {},
  created() {
    console.log(this.$route.query);
    this.ipAddress = this.$route.query.ip_address
    this.labName = this.$route.query.lab_name
    this.username = this.$route.query.username
  },
  methods: {
    wrap(template) {
      let text = template;
      text = text.replaceAll('{ip_address}', this.ipAddress);
      text = text.replaceAll('{lab_name}', this.labName);
      text = text.replaceAll('{username}', this.username);
      return text;
    },
  },
};
</script>


<template>
    <div class="vuewidget vuewrapper" data-vuetify>
        <v-app :id="id">
            <v-card class="pt-4">
                <v-row class="mb-2">
                    <v-col>
                        <v-text-field
                            v-model="username"
                            autocomplete="ignore-field"
                            label="Username"
                            placeholder="Missing username query"
                            persistent-placeholder
                            outlined
                            dense
                            readonly
                            hide-details
                            @focus="$event.target.select()"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="labName"
                            autocomplete="ignore-field"
                            label="Lab name"
                            placeholder="Missing lab_name query"
                            persistent-placeholder
                            outlined
                            dense
                            readonly
                            hide-details
                            @focus="$event.target.select()"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="ipAddress"
                            autocomplete="ignore-field"
                            label="IP Address"
                            placeholder="Missing ip_address query"
                            persistent-placeholder
                            outlined
                            dense
                            readonly
                            hide-details
                            @focus="$event.target.select()"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-textarea
                    v-if="showConfig"
                    v-model.trim="configText"
                    label="SSH Config"
                    class="py-2"
                    outlined
                    readonly
                    rows="13"
                    hide-details
                    @focus="$event.target.select()"
                ></v-textarea>
                <v-card v-else>
                    URL is missing parameters
                </v-card>
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

  a.v-btn
    border: inherit
</style>
  