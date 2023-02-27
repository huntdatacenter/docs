<script>
import {
  VApp,
  VCol,
  VRow,
  VTextField,
  VTextarea,
  VCard,
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
    configText() {
      return this.query.ipAddress && this.query.labName && this.query.username ? this.wrap(this.template) : null;
    },
  },
  mounted() {},
  created() {
    console.log(this.$route.query);
    this.query.ipAddress = this.$route.query.ip_address
    this.query.labName = this.$route.query.lab_name
    this.query.username = this.$route.query.username
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
            <v-card class="pt-4">
                <v-row class="mb-2">
                    <v-col cols="10">
                        <v-text-field
                            v-model="query.username"
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
                    <v-col cols="10">
                        <v-text-field
                            v-model="query.labName"
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
                    <v-col cols="10">
                        <v-text-field
                            v-model="query.ipAddress"
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
                <h3 id="ssh-config"><a href="#ssh-config" class="header-anchor">#</a> SSH-Config</h3>
                <v-textarea
                    v-model.trim="configText"
                    label="SSH Config"
                    placeholder="URL is missing parameters"
                    persistent-placeholder
                    class="py-2 mt-2"
                    outlined
                    readonly
                    rows="13"
                    hide-details
                    @focus="$event.target.select()"
                ></v-textarea>
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

</style>
