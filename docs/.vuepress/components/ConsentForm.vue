<script>
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
  },
  props: {
    id: { type: String, default: "applet" },
    service: { type: String, default: "consent" },
    apiVersion: { type: String, default: "v1" },
  },
  data() {
    return {
      domain: 'hdc.ntnu.no',
      isLoading: true,
      consentToken: null,
      form: {
        slack: true,
        tingweek: true,
      },
    };
  },
  computed: {
    showConsent() {
      return !this.isLoading && this.consentToken ? true : false
    },
    url() {
      return `https://${this.service}-api.${this.domain}/api/${this.apiVersion}/consent/${this.consentToken}`
    },
  },
  mounted() {
    this.isLoading = false
  },
  created() {
    this.isLoading = true
    this.consentToken = this.$route.query.token ? atob(this.$route.query.token) : null
    // console.log(this.consentToken)
    // TODO fetch data of consent from API
    if (this.consentToken) {
      this.getConsentData()
    }
    // TODO load data from api into form variables based on main status (if PENDING keep true)
  },
  methods: {
    getConsentData() {
      fetch(this.url, {
        method: "GET",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then(
        (response) => {
          return response.text()
        }
      ).then((data) => {
        console.log(data)
        // this.data = data
      })
    },
    submit() {
      console.log(this.form)
      fetch(this.url, {
        method: "PUT",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then(
        (response) => {
          return response.text()
        }
      ).then((data) => {
        console.log(data)
        // this.data = data
      })
    },
  },
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-row v-if="isLoading" justify="center">
        <v-col cols="8">
          Loading...
        </v-col>
      </v-row>
      <v-row v-if="!isLoading && !showConsent" justify="center">
        <v-col cols="8">
          If you do not have your Consent link request one in Service desk.
        </v-col>
      </v-row>
      <v-sheet class="pa-4">
        <form v-if="showConsent" ref="form" @submit.prevent="submit">
          <v-row>
            <v-col>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lorem fermentum, 
              ultrices metus non, sagittis est. Pellentesque habitant morbi tristique senectus et netus 
              et malesuada fames ac turpis egestas. Phasellus vitae porta dolor. Pellentesque feugiat quis 
              sapien et tincidunt. Nam pellentesque quam eget augue finibus pharetra. 
              Nunc eget tortor eu libero porttitor venenatis. Nulla vehicula mollis massa. 
              Sed dignissim mauris ac odio porttitor pulvinar.
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Proin rhoncus eros purus, vel dapibus nisi euismod at. Donec viverra elementum vestibulum. 
              Fusce tristique at enim quis semper. Duis vel rutrum augue. Maecenas ultricies ipsum ex, 
              eu tristique ipsum cursus in. Pellentesque ac dictum libero. Vivamus finibus rhoncus neque non 
              tristique. Proin volutpat purus ipsum, sed vehicula felis egestas sed.
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="4">
              <v-btn
                href="#"
                target="_blank"
                color="link"
                block
              >
                Privacy statement (PDF)
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-switch
                v-model="form['slack']"
                :disabled="isLoading"
                class="mt-0"
                color="green lighten-1"
                inset
                hide-details
                name="slack"
                label="Slack: Donec at metus suscipit nunc placerat ornare egestas venenatis metus. Cras pretium urna justo, a auctor enim sodales ut."
              ></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-switch
                v-model="form['tingweek']"
                :disabled="isLoading"
                class="mt-0"
                color="green lighten-1"
                inset
                hide-details
                name="tingweek"
                label="Tingweek: Duis vel rutrum augue. Maecenas ultricies ipsum ex, eu tristique ipsum cursus in."
              ></v-switch>
            </v-col>
          </v-row>
          <v-row class="mb-2" justify="center">
            <v-col cols="3">
              <v-btn
                type="submit"
                color="success"
                block
              >
                Submit consent
              </v-btn>
            </v-col>
          </v-row>
        </form>
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
