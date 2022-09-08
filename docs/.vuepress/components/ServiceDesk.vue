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
  VToolbar,
  VToolbarTitle,
  VCard,
  VCardText,
  VCardActions,
  VSubheader,
  VSpacer,
  VDivider,
  VToolbarItems,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelHeader,
  VExpansionPanelContent,
} from "vuetify/lib";

export default {
  name: "ServiceDesk",
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
    VToolbar,
    VToolbarTitle,
    VCard,
    VCardText,
    VCardActions,
    VSubheader,
    VSpacer,
    VDivider,
    VToolbarItems,
    VExpansionPanel,
    VExpansionPanels,
    VExpansionPanelHeader,
    VExpansionPanelContent,
  },
  props: {
    id: { type: String, default: "applet" },
    title: { type: String, default: null },
    fields: { type: Array, default: null },
    template: { type: Object, default: null },
    recipient: {
      type: String,
      default: "cloud.support+hunt-cloud-request@hunt.ntnu.no",
    },
  },
  data() {
    return {
      subjectTemplate: null,
      bodyTemplate: null,
      formData: {},
      message: {
        subject: null,
        body: null,
      },
      dialog: null,
      sendClicked: false,
      finalizeClicked: false,
      panel: 0,
    };
  },
  computed: {
    messageSubject() {
      return this.subjectTemplate ? this.wrap(this.subjectTemplate) : null;
    },
    messageBody() {
      return this.bodyTemplate ? this.wrap(this.bodyTemplate) : null;
    },
    formFilled() {
      return this.fields.every((item) =>
        this.formData[item.key] ? true : false
      );
    },
    encodedSubject() {
      return this.subjectTemplate ? this.encode(this.subjectTemplate) : null;
    },
    encodedBody() {
      return this.bodyTemplate ? this.encode(this.bodyTemplate) : null;
    },
    mailto() {
      return `mailto:${this.recipient}?subject=${this.encodedSubject}&body=${this.encodedBody}`;
    },
  },
  mounted() {},
  created() {
    // console.log(this.template)
    this.subjectTemplate = this.template ? this.template.subject : null;
    this.bodyTemplate = this.template ? this.template.body : null;
    for (const item of this.fields) {
      if (item && item.field === "selector" && item.default) {
        this.formData[item.key] = item.default;
      }
    }
  },
  methods: {
    close() {
      this.finalizeClicked = true;
      this.sendClicked = true;
      this.panel = 2;
      this.dialog = false;
    },
    submit() {
      this.panel = 1;
    },
    review() {
      this.finalizeClicked = true;
      this.panel = 1;
    },
    actionSend() {
      this.sendClicked = true;
      this.panel = 2;
      window.location.href = this.mailto;
    },
    encode(template) {
      return template ? encodeURIComponent(this.wrap(template)) : null;
    },
    wrap(template) {
      let text = template;
      for (const [key, value] of Object.entries(this.formData)) {
        if (value) {
          if (Array.isArray(value)) {
            text = text.replaceAll(`{${key}}`, value.join(", "));
          } else {
            text = text.replaceAll(`{${key}}`, value);
          }
        }
      }
      return text;
    },
  },
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-dialog
        v-model="dialog"
        hide-overlay
        transition="dialog-bottom-transition"
        max-width="960px"
      >
        <template v-slot:activator="{ on, attrs }">
          <div class="home" style="padding: 0px">
            <div class="hero">
              <p class="action">
                <a
                  v-bind="attrs"
                  v-on="on"
                  class="nav-link external action-button"
                  >{{ title }}</a
                >
              </p>
            </div>
          </div>
        </template>
        <v-card>
          <v-toolbar dark color="#00509e">
            <v-toolbar-title>Service desk - {{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon fab @click="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-card-text class="pt-6">
            <v-expansion-panels v-model="panel">
              <v-expansion-panel>
                <v-expansion-panel-header :disable-icon-rotate="formFilled">
                  Form
                  <template v-if="formFilled" v-slot:actions>
                    <v-icon color="teal">done</v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form ref="form" @submit.prevent="submit">
                    <v-row justify="center">
                      <v-col v-for="item in fields" cols="8" :key="item.key">
                        <v-text-field
                          v-if="item.field === 'textfield'"
                          v-model.trim="formData[item.key]"
                          autocomplete="ignore-field"
                          :label="item.label"
                          :pattern="item.pattern ? item.pattern : null"
                          :title="item.hint ? item.hint : null"
                          :hint="item.hint ? item.hint : null"
                          :persistent-hint="item.hint && formData[item.key] ? true : false"
                          placeholder=""
                          persistent-placeholder
                          outlined
                          dense
                          :hide-details="formData[item.key] ? false : 'auto'"
                          @focus="$event.target.select()"
                        ></v-text-field>
                        <v-select
                          v-else-if="item.field === 'selector'"
                          :items="item.options"
                          v-model="formData[item.key]"
                          :label="item.label"
                          placeholder=""
                          persistent-placeholder
                          chips
                          multiple
                          outlined
                          hide-details
                        ></v-select>
                        <v-select
                          v-else-if="item.field === 'selectone'"
                          :items="item.options"
                          v-model="formData[item.key]"
                          :label="item.label"
                          placeholder=""
                          persistent-placeholder
                          chips
                          outlined
                          hide-details
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="6">
                        <v-btn
                          color="success"
                          block
                          type="submit"
                          :disabled="!formFilled"
                        >
                          Continue
                        </v-btn>
                      </v-col>
                    </v-row>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel :disabled="!formFilled">
                <v-expansion-panel-header :disable-icon-rotate="sendClicked">
                  Email request
                  <template v-if="sendClicked" v-slot:actions>
                    <v-icon color="teal"> done </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row justify="center">
                    <v-col cols="10">
                      <v-text-field
                        :value="recipient"
                        label="To"
                        class="py-2"
                        outlined
                        readonly
                        dense
                        hide-details
                        @focus="$event.target.select()"
                      ></v-text-field>
                      <v-text-field
                        v-model.trim="messageSubject"
                        label="Subject"
                        class="py-2"
                        outlined
                        readonly
                        dense
                        hide-details
                        @focus="$event.target.select()"
                      ></v-text-field>
                      <v-textarea
                        v-model.trim="messageBody"
                        label="Body"
                        class="py-2"
                        outlined
                        readonly
                        rows="13"
                        hide-details
                        @focus="$event.target.select()"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6">
                      <v-btn color="primary" block @click="actionSend">
                        Open Email Client
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel v-if="sendClicked" :disabled="!formFilled">
                <v-expansion-panel-header
                  :disable-icon-rotate="finalizeClicked"
                >
                  Finalize request
                  <template v-if="finalizeClicked" v-slot:actions>
                    <v-icon color="teal"> done </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row justify="center">
                    <v-col cols="10"> </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="10">
                      <p class="text-center body-1">
                        Now your Email client should open and you can follow up
                        sending Service desk request there.
                      </p>
                    </v-col>
                    <v-col cols="10">
                      <p class="text-center body-1">
                        In case your Email client did not open and you want to
                        send email manually feel free to hit Review button and
                        copy the message contents and use our service desk
                        address.
                      </p>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
          <v-card-actions v-if="sendClicked">
            <v-row class="mb-2" justify="center">
              <v-col cols="4">
                <v-btn color="primary" block outlined @click="review">
                  Review
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="link" block @click="close"> Close </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
