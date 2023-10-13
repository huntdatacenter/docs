<script>
const yaml = require("js-yaml");
import fetch from 'node-fetch';

import {
  VApp,
  VBtn,
  VCol,
  VRow,
  VSheet,
  VCard,
  VCardText,
  VCardActions,
  VSwitch,
  VAlert,
  VIcon,
} from "vuetify/lib";

export default {
  name: "ConsentForm",
  components: {
    VApp,
    VBtn,
    VCol,
    VRow,
    VSheet,
    VCard,
    VCardText,
    VCardActions,
    VSwitch,
    VAlert,
    VIcon,
  },
  props: {
    id: { type: String, default: "applet" },
    service: { type: String, default: "consent" },
    apiVersion: { type: String, default: "v1" },
  },
  data() {
    return {
      domain: 'hdc.ntnu.no',
      consentVersion: null,
      isLoading: true,
      isLoadingTexts: true,
      isReadonly: false,
      isSaving: false,
      isError: false,
      isWarning: false,
      consentToken: null,
      submittedAs: [],
      form: {},
      textData: {},
      consentItems: [],
    };
  },
  computed: {
    showConsent() {
      return !this.isLoading && !this.isLoadingTexts && !this.isError && this.consentToken && this.form && this.consentItems.length > 0 ? true : false
    },
    url() {
      return `https://${this.service}-api.${this.domain}/api/${this.apiVersion}/consent/${this.consentToken}`
    },
  },
  mounted() {},
  created() {
    try {
      this.isLoading = true
      this.consentToken = this.$route.query.token ? atob(this.$route.query.token) : null
      // console.log(this.consentToken)
    } catch(error) {
      this.isWarning = true
      this.isLoading = false
    }

    if (this.consentToken) {
      this.getConsentData()
    }
  },
  methods: {
    getConsentData() {
      fetch(this.url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then(
        (response) => {
          return response.json()
        }
      ).then((data) => {
        // console.log(data)
        this.handleResponse(data)
      }).catch((err) => {
        console.error(err)
        this.isError = true
      })
      .finally(() => {
        this.isLoading = false
      });
    },
    loadCurrentVersionOfTexts(version) {
      // console.log('load text data')
      fetch("/cfg/consent_texts.yml")
        .then((response) => response.text())
        .then((data) => {
          // console.log(data);
          const cfg = yaml.load(data)
          // console.log(cfg);
          this.textData = cfg[`v${version}`]
        }).catch((err) => {
          console.error(err)
          this.isError = true
        })
        .finally(() => {
          this.isLoadingTexts = false
        })
    },
    handleResponse(data) {
      if (data['status'] === 'error') {
        if (data['item'] === 'Consent not found') {
          this.isWarning = true
        }
        console.log(data['item'])
      } else if (data['status'] === 'success' && data['item'] && data['item']['items'].length > 0) {
        // Store a current consent version and load texts based on the version
        if (data && 'item' in data && 'version' in data['item'] && data['item']['version']) {
          this.consentVersion = data['item']['version']
          this.loadCurrentVersionOfTexts(this.consentVersion)
          console.log(`Consent version: v${this.consentVersion}`)
        } else {
          console.log(data)
        }
        // Load consent value for each item
        data['item']['items'].forEach((item) => {
          console.log(item)
          // -- NOTE
          //  - load data from api into form variables based on main status
          //  - (if PENDING it means it is first time == keep true)
          if (item['status'] === 'PENDING') {
            this.form[item['type']] = false
          } else if (item['status'] === 'ACTIVE') {
            this.form[item['type']] = true
          } else {
            this.form[item['type']] = false
          }
          this.consentItems.push(item['type'])
        })
        // console.log(this.consentItems)
        // console.log(data['item']['items'])
      }
    },
    showType(consentType) {
      return this.textData && 'items' in this.textData && consentType in this.textData['items'] && this.textData['items'][consentType] && this.consentItems.includes(consentType)
    },
    submit() {
      this.isSaving = true
      this.isReadonly = true
      // console.log('submit')
      // console.log(this.form)
      const items = this.consentItems.map((item) => {
        return this.form[item] ? { "type": item, "status": "ACTIVE" } : { "type": item, "status": "REVOKED" }
      })
      // console.log(items)

      try {
        fetch(this.url, {
          method: "PUT",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            "items": items
          }),
        }).then(
          (response) => {
            return response.text()
          }
        ).then((data) => {
          this.handleResponse(data)
        })
      } catch (error) {
        console.error(error)
        this.isError = true
      } finally {
        setTimeout(() => {
          this.isSaving = false
          this.submittedAs = this.getSubmitMessage()
        }, "600")
        setTimeout(() => {
          this.isReadonly = false
        }, "1000")
      }
    },
    getSubmitMessage() {
      if (this.form['slack']) {
        return ["Once again welcome to our community.", "If we have not sent you a slack invitation yet we will send you one as soon as we process this consent."]
      } else {
        return ["Sorry to see you go!", "Your slack account will be deactivated and then deleted as soon as we process this withdrawal."]
      }
      // if (this.form['slack'] && this.form['tingweek']) {
      //   return ["Once again welcome to our community.", "If we have not sent you a slack invitation yet we will send you one as soon as we process this consent."]
      // } else if (!this.form['slack'] && this.form['tingweek']) {
      //   return ["Sorry to see you go!", "Your slack account will be deactivated and then deleted as soon as we process this withdrawal."]
      // } else if (this.form['slack'] && !this.form['tingweek']) {
      //   return ["Sorry to see you go!", "If we have not sent you a slack invitation yet we will send you one as soon as we process this consent. Although we will miss you in our Ting week discussions."]
      // } else if (!this.form['slack'] && !this.form['tingweek']) {
      //   return ["Sorry to see you go!", "Your slack account will be deactivated and then deleted as soon as we process this withdrawal."]
      // }
    },
    giveConsent() {
      this.isSaving = true
      this.isReadonly = true
      console.log('give consent')
      this.consentItems.forEach((item) => {
        this.form[item] = true
      })
      this.submit()
    },
    withdrawConsent() {
      this.isSaving = true
      this.isReadonly = true
      console.log('withdraw consent')
      this.consentItems.forEach((item) => {
        this.form[item] = false
      })
      this.submit()
    },
  },
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-sheet class="ma-4">
        <v-row v-if="isError" justify="center">
          <v-col cols="12">
            <v-alert
              border="left"
              colored-border
              type="error"
              elevation="2"
            >
              <strong>Error occured while processing your consent.</strong>
              <hr class="mt-1 mb-2" />
              Please contact us on <a href="/about/contact/" target="_blank">email</a> or try again later.
            </v-alert>
          </v-col>
        </v-row>
        <v-row v-if="!isLoading && !showConsent && isWarning" justify="center">
          <v-col cols="12">
            <v-alert
              border="left"
              colored-border
              type="warning"
              elevation="2"
            >
              <strong>Your link appears to be wrong.</strong>
              <hr class="mt-1 mb-2" />
              If you do not have your own Consent link order one in Service desk.
            </v-alert>
          </v-col>
        </v-row>
        <v-sheet v-if="showConsent">
          <form ref="form" @submit.prevent="submit">
            <v-row>
              <v-col v-for="item in textData['paragraphs']" cols="12">
                {{ item }}
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="4">
                <v-btn
                  :href="`https://assets.hdc.ntnu.no/assets/consent/v${consentVersion}/privacy-statement-v${consentVersion}.pdf`"
                  target="_blank"
                  color="link"
                  block
                >
                  Privacy statement (PDF)
                </v-btn>
              </v-col>
            </v-row>
            <v-row v-if="form ? true : false">
              <v-col v-if="showType('slack')" cols="12">
                <!-- :readonly="isLoading || isSaving || isReadonly" -->
                <v-switch
                  v-model="form['slack']"
                  class="mt-0"
                  color="green lighten-1"
                  readonly
                  inset
                  hide-details
                  name="slack"
                  :label="textData['items']['slack']"
                ></v-switch>
              </v-col>
            </v-row>
            <v-row v-if="form ? true : false">
              <v-col v-if="showType('tingweek')" cols="12">
                <!-- :readonly="isLoading || isSaving || isReadonly" -->
                <v-switch
                  v-model="form['tingweek']"
                  class="mt-0"
                  color="green lighten-1"
                  readonly
                  inset
                  hide-details
                  name="tingweek"
                  :label="textData['items']['tingweek']"
                ></v-switch>
              </v-col>
            </v-row>
            <v-row class="mb-2" justify="center">
              <!-- <v-col cols="3">
                <v-btn
                  type="submit"
                  color="success"
                  :disabled="isError"
                  :loading="isSaving || isLoading"
                  block
                >
                  <v-icon
                    left
                    dark
                  >
                    check
                  </v-icon>
                  Submit consent
                </v-btn>
              </v-col> -->
              <v-col cols="3">
                <v-btn
                  color="success"
                  :disabled="isError"
                  :loading="isSaving || isLoading"
                  block
                  @click="giveConsent()"
                >
                  <v-icon
                    left
                    dark
                  >
                    check
                  </v-icon>
                  Give consent
                </v-btn>
              </v-col>
              <v-col cols="3">
                <v-btn
                  color="blue-grey-darken-4"
                  :disabled="isError"
                  :loading="isSaving || isLoading"
                  block
                  outlined
                  elevation="1"
                  @click="withdrawConsent()"
                >
                  <v-icon
                    left
                    dark
                  >
                    cancel
                  </v-icon>
                  Withdraw consent
                </v-btn>
              </v-col>
            </v-row>
          </form>
        </v-sheet>
        <v-row v-if="submittedAs && submittedAs.length == 2 ? true : false" justify="center">
          <v-col cols="10">
            <v-alert
              type="info"
            >
              <strong>{{ submittedAs[0] }}</strong>
              <hr class="mt-1 mb-2" />
              {{ submittedAs[1] }}
            </v-alert>
          </v-col>
        </v-row>
      </v-sheet>
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

.last-updated
  display: none

</style>
