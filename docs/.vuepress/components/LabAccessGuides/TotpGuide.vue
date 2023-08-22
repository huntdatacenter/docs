<script>
import {
  VCol,
  VRow,
  VBtn,
  VCard,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VSpacer,
  VDialog,
  VStepper,
  VStepperContent,
  VStepperStep,
  VStepperItems,
  VIcon,
} from "vuetify/lib";

export default {
  name: "TotpGuide",
  components: {
    VCol,
    VRow,
    VBtn,
    VCard,
    VToolbar,
    VToolbarTitle,
    VToolbarItems,
    VSpacer,
    VDialog,
    VStepper,
    VStepperContent,
    VStepperStep,
    VStepperItems,
    VIcon,
  },
  props: {},
  data() {
    return {
      totpDialog: false,
      totpStepper: 1,
    }
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<template>
  <section>
    <v-row class="my-1">
      <v-col cols="12">
        <v-btn
          text
          @click.stop="totpDialog = true"
          elevation="2"
        >
          <v-icon>smartphone</v-icon>&nbsp;&nbsp;1. Time-based one-time password (TOTP)
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog
      v-model="totpDialog"
      persistent
      max-width="960px"
      @keydown.esc="totpDialog = false"
    >
      <v-card>
        <v-toolbar dark color="#00509e">
          <v-toolbar-title>TOTP Configuration</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon fab @click="totpDialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-stepper v-model="totpStepper" vertical>
          <v-stepper-step
            :complete="totpStepper > 1"
            step="1"
          >
            Install TOTP application on your phone
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              elevation="0"
            >
              Search for <code>Google Authenticator</code> in the iOS or Android app stores, or use the links below:

              <ul class="my-2">
                <li>
                  <a href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8" target="_blank">Download and install for iOS here (opens new window)</a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en" target="_blank">Download and install for Android here (opens new window)</a>
                </li>
              </ul>

              If you prefer different TOTP application e.g. <code>Microsoft Authenticator</code> you can use it,
              although the steps might be sligthly different and we do not cover them in our guides.
            </v-card>
            <v-btn color="primary" class="mx-2" @click="totpStepper = 2">Continue</v-btn>
            <!-- <v-btn color="link" class="mx-2" @click="totpDialog = false">Close</v-btn> -->
          </v-stepper-content>

          <v-stepper-step
            :complete="totpStepper > 2"
            step="2"
          >
            Add new TOTP account
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              elevation="0"
            >
              <ol>
                <li>Start the Google Authenticator app.</li>
                <li>Tap <i>Begin setup</i> (first time setup) or <i>Add an account</i> (additional accounts).</li>
                <li>Select Enter a provided key.</li>
                <li>Enter <code>HUNT CLOUD VPN</code> as the account name.</li>
                <li>Enter the <code>Google Authenticator</code> key sent to you over Signal.</li>
                <li>Make sure <i>Time based</i> is selected.</li>
                <li>Tap <i>Add</i> to finish the setup of the new account.</li>
              </ol>
            </v-card>
            <v-btn color="primary" class="mx-2" @click="totpStepper = 3">Continue</v-btn>
            <v-btn color="link" class="mx-2" @click="totpStepper = 1">Back</v-btn>
          </v-stepper-content>

          <v-stepper-step step="3">
            Check your TOTP codes
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              elevation="0"
            >
              In your <i>Google authenticator</i> app you should see a field<br />
              with name <code>HUNT CLOUD VPN</code> showing <b>6 digit verification code</b>.
              <br /><br />
              This code refreshes ever 30 seconds.
            </v-card>
            <v-btn color="primary" class="mx-2" @click="totpStepper = 1">Start again</v-btn>
            <v-btn color="link" class="mx-2" @click="totpStepper = 2">Back</v-btn>
            <v-btn color="success" class="mx-2" @click="totpDialog = false; totpStepper = 1;">Finish</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-dialog>
  </section>
</template>
