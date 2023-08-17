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
  VAutocomplete,
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
    VAutocomplete,
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
  emits: [
    'input',  // used to update value prop assigned from parent using v-model
  ],
  props: {
    id: { type: String, default: "applet" },
    value: { type: Boolean, default: false },
    title: { type: String, default: null },
    fields: { type: Array, default: null },
    template: { type: Object, default: null },
    requirements: { type: Array, default: null },
    attachments: { type: Array, default: null },
    recipient: {
      type: String,
      default: "cloud.support+hunt-cloud-request@hunt.ntnu.no",
    },
    cacheKey: { type: String, default: null },
    fullscreen: { type: Boolean, default: false },
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
        this.formData[item.key] || item.optional ? true : false
      );
    },
    encodedSubject() {
      return this.subjectTemplate ? this.encode(this.subjectTemplate) : null;
    },
    encodedBody() {
      return this.bodyTemplate ? this.encode(this.bodyTemplate) : null;
    },
    encodedRecipient() {
      return this.recipient ? this.recipient.replace('+', '%2B') : this.recipient;
    },
    wrapRecipient() {
      return `HUNT Cloud - Service Desk <${this.encodedRecipient}>`.replace('<', '%3C').replace('>', '%3E');
    },
    mailto() {
      return `mailto:${this.encodedRecipient}?subject=${this.encodedSubject}&body=${this.encodedBody}`;
    },
    deeplinkUrl() {
      const url = 'https://outlook.office.com/mail/deeplink/compose'
      return `${url}?to=${this.wrapRecipient}&subject=${this.encodedSubject}&body=${this.encodedBody}`;
    },
  },
  mounted() {},
  created() {
    this.panel = 0;
    this.subjectTemplate = this.template ? this.template.subject : null;
    this.bodyTemplate = this.template ? this.template.body : null;
    var formFields = []
    for (const item of this.fields) {
      if (item && item.key) {
        formFields.push(item.key)
        if (item.default) {
          const defValue = item.default;
          this.formData[item.key] = defValue;
        }
      }
    }
    // console.log(formFields)
    let cache = this.fetchAgreementFormCache(this.cacheKey)
    if (cache) {
      try {
        for (const [key, value] of Object.entries(cache)) {
          if (key !== "open") {
            if (formFields.includes(key)) {
              console.log(`Prefill from cache: ${key} = ${value}`)
              this.setValue(value, key)
              // console.log(this.formData[key])
            }
          }
        }
      } catch (ex) {
        console.log("Failed to load form fields from cache")
      }
    }
  },
  methods: {
    close() {
      this.finalizeClicked = true;
      this.sendClicked = true;
      this.panel = 0;
      this.$emit('input', false);
    },
    closeBtn() {
      this.panel = 0;
      this.$emit('input', false);
    },
    submit() {
      this.panel = 2;
    },
    review() {
      this.finalizeClicked = true;
      this.panel = 2;
    },
    actionSend() {
      this.sendClicked = true;
      this.panel = 3;
      window.location.href = this.mailto;
    },
    actionSendOutlook() {
      this.sendClicked = true;
      this.panel = 3;
      window.location.href = this.deeplinkUrl;
    },
    actionSendOutlookPopup() {
      this.sendClicked = true;
      this.panel = 3;
      // window.location.href = this.deeplinkUrl;
      window.open(this.deeplinkUrl, '_blank');
    },
    encode(template) {
      return template ? encodeURIComponent(this.wrap(template)) : null;
    },
    setValue(value, key) {
      // NOTE: enforce reactivity to data change - re-rendering the template
      const updates = {};
      updates[key] = value ? value.trim() : value;
      this.formData = Object.assign({}, this.formData, updates);
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
      text = text.replaceAll('\n---\n', '\n```  \n');
      return text;
    },
    fetchAgreementFormCache(key) {
      let fields = {}
      const jsonData = key ? localStorage.getItem(key) : null
      try {
        fields = jsonData ? JSON.parse(jsonData) : {}
      } catch (ex) {
        console.log("Failed to fetch data from cache")
      }
      return fields
    },
  },
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-dialog
        v-model="value"
        hide-overlay
        transition="dialog-bottom-transition"
        max-width="960px"
        :fullscreen="fullscreen"
        @click:outside="closeBtn"
      >
        <v-card>
          <v-toolbar dark color="#00509e">
            <v-toolbar-title>Service desk - {{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon fab @click="closeBtn">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-card-text class="pt-6">
            <v-expansion-panels v-model="panel">
              <v-expansion-panel>
                <v-expansion-panel-header :disable-icon-rotate="formFilled">
                  Request details
                  <!-- <template v-if="formFilled" v-slot:actions>
                    <v-icon color="teal">done</v-icon>
                  </template> -->
                </v-expansion-panel-header>
                <v-expansion-panel-content class="mt-2">
                  <v-row justify="center">
                    <v-col v-for="item in requirements" class="pb-0 pt-0" cols="12" :key="item.key" dense>
                      <p class="mb-2" v-html="item"></p>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                      <v-col cols="6">
                        <v-btn
                          color="success"
                          block
                          @click="panel = panel + 1"
                        >
                          Continue
                        </v-btn>
                      </v-col>
                    </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
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
                          v-model="formData[item.key]"
                          autocomplete="ignore-field"
                          :label="item.label"
                          :pattern="item.pattern ? item.pattern : null"
                          :title="item.hint ? item.hint : null"
                          :hint="item.hint ? item.hint : null"
                          :suffix="item.suffix ? item.suffix : null"
                          :autocapitalize="item.autocapitalize ? item.autocapitalize : null"
                          :persistent-hint="
                            item.hint && formData[item.key] ? true : false
                          "
                          placeholder=""
                          persistent-placeholder
                          outlined
                          dense
                          :hide-details="formData[item.key] ? false : 'auto'"
                          @focus="$event.target.select()"
                          @change="setValue($event, item.key)"
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
                        <v-autocomplete
                          v-else-if="item.field === 'autocompleteone'"
                          :items="item.options"
                          v-model="formData[item.key]"
                          :label="item.label"
                          placeholder=""
                          persistent-placeholder
                          small-chips
                          outlined
                          dense
                          clear-icon="close"
                          hide-details
                        ></v-autocomplete>
                        <v-text-field
                          v-if="item.field === 'number'"
                          v-model="formData[item.key]"
                          autocomplete="ignore-field"
                          type="number"
                          :label="item.label"
                          :title="item.hint ? item.hint : null"
                          :hint="item.hint ? item.hint : null"
                          :suffix="item.suffix ? item.suffix : null"
                          :min="item.min ? item.min : null"
                          :max="item.max ? item.max : null"
                          :step="item.step ? item.step : null"
                          :persistent-hint="
                            item.hint && formData[item.key] ? true : false
                          "
                          placeholder=""
                          persistent-placeholder
                          outlined
                          dense
                          :hide-details="formData[item.key] ? false : 'auto'"
                          @focus="$event.target.select()"
                          @change="setValue($event, item.key)"
                        ></v-text-field>
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
                        label="Email recipient (TO)"
                        class="py-2"
                        outlined
                        readonly
                        dense
                        hide-details
                        @focus="$event.target.select()"
                      ></v-text-field>
                      <v-text-field
                        v-model.trim="messageSubject"
                        label="Email subject"
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
                  <v-row v-if="attachments && attachments.length > 0" justify="center">
                    <v-col class="pb-0 pt-0" cols="10" dense>
                      <b><p class="mb-2">Remember to attach these documents once you are redirected to your email client:</p></b>
                    </v-col>
                    <v-col class="pb-0 pt-0" cols="10" dense>
                      <ul>
                        <li v-for="item in attachments" class="pb-0 pt-0" :key="item.key" dense>
                          <p class="mb-2" v-html="item"></p>
                        </li>
                      </ul>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-btn color="success" block @click="actionSend">
                        Open in Email Client
                      </v-btn>
                    </v-col>
                    <v-col cols="4">
                      <v-btn color="primary" block @click="actionSendOutlookPopup">
                        Open in Outlook Web
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
                        In case your <b>Email client did not open</b> and you want to
                        send email manually feel free to hit Review button and
                        copy the message contents and use our service desk email
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
                <v-btn color="success" block outlined @click="review">
                  Review email
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="primary" block outlined @click="actionSendOutlook">
                  Open in Outlook Web
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

.v-chip.v-size--small
    margin-top: 8px !important
    margin-bottom: 5px !important

</style>
