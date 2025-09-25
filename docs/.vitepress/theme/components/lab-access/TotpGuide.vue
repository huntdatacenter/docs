<script setup>
import { ref } from "vue"

// Define component name (for debugging purposes)
defineOptions({
  name: "TotpGuide",
})

// Reactive data
const totpDialog = ref(false)
const totpStepper = ref("1")
</script>

<template>
  <section>
    <v-row class="my-1">
      <v-col cols="12">
        <v-btn variant="text" @click.stop="totpDialog = true" elevation="2">
          <v-icon>mdi-cellphone</v-icon>&nbsp;&nbsp;1. Time-based one-time password (TOTP)
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="totpDialog" persistent scrollable max-width="960px" @keydown.esc="totpDialog = false">
      <v-card elevation="0">
        <v-card-title class="pa-0">
          <v-app-bar dark color="#00509e" flat>
            <v-app-bar-title>TOTP Configuration</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="totpDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-app-bar>
        </v-card-title>

        <v-card-text class="pa-0">
          <v-stepper-vertical v-model="totpStepper" class="mt-16">
            <v-stepper-vertical-item :complete="totpStepper > 1" value="1">
              <template v-slot:title> Install TOTP application on your phone </template>

              <v-card class="mb-12" elevation="0">
                Search for <code>Google Authenticator</code> in the iOS or Android app stores, or use the links below:

                <ul class="my-2">
                  <li>
                    <a href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8" target="_blank"
                      >Download and install for iOS here (opens new window)</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en"
                      target="_blank"
                      >Download and install for Android here (opens new window)</a
                    >
                  </li>
                </ul>

                If you prefer different TOTP application e.g. <code>Microsoft Authenticator</code> you can use it,
                although the steps might be sligthly different and we do not cover them in our guides.
              </v-card>
              <v-btn color="primary" class="mx-2 mb-1" @click="totpStepper = 2">Continue</v-btn>
            </v-stepper-vertical-item>

            <v-stepper-vertical-item :complete="totpStepper > 2" value="2">
              <template v-slot:title> Add new TOTP account </template>

              <v-card class="mb-12" elevation="0">
                <ol>
                  <li>Start the Google Authenticator app and follow these steps.</li>
                  <li>
                    If you are using the app for the first time and screen saying
                    <i>"Welcome to Google Authenticator"</i> appears, just tap
                    <code>Use google authenticator without an account</code>.
                  </li>
                  <li>
                    Click on the
                    <img
                      alt="google-auth-plus-icon"
                      src="/img/totp/google-auth-plus-icon.png"
                      style="height: 2.5em; margin-bottom: -0.5em"
                    />
                    <code>plus button</code> in the bottom right corner <v-icon>mdi-south-east</v-icon> of your phone
                    screen.<br />
                    <!-- <img alt="google-auth-plus-icon" src="/img/totp/google-auth-plus-icon.png" style="max-width: 75px;" /> -->
                  </li>
                  <li>
                    Select option <code>Enter a setup key <v-icon>mdi-keyboard</v-icon></code
                    >.
                  </li>
                  <li>
                    A form called <i>"Enter account details"</i> appears.<br />
                    <v-row style="max-width: 400px" justify="start" dense no-gutters>
                      <v-col class="my-1" cols="12">
                        <v-text-field
                          variant="outlined"
                          label="Account name"
                          readonly
                          disabled
                          density="compact"
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col class="my-1" cols="12">
                        <v-text-field
                          variant="outlined"
                          label="Your key"
                          readonly
                          disabled
                          density="compact"
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col class="my-1" cols="8">
                        <v-text-field
                          model-value="Time based"
                          variant="outlined"
                          label="Type of key"
                          placeholder=""
                          readonly
                          disabled
                          density="compact"
                          persistent-placeholder
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </li>
                  <li>
                    Enter <code style="font-weight: bold">HUNT CLOUD VPN</code> as <i>"Account name"</i> because you
                    will have only one HUNT Cloud VPN.
                    <v-row style="max-width: 400px" justify="start" dense no-gutters>
                      <v-col class="my-1" cols="12">
                        <v-text-field
                          model-value="HUNT CLOUD VPN"
                          variant="outlined"
                          label="Account name"
                          placeholder=""
                          readonly
                          disabled
                          density="compact"
                          persistent-placeholder
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </li>
                  <li>
                    Enter the <code>Google Authenticator</code> key sent to you over Signal.
                    <v-row style="max-width: 400px" justify="start" dense no-gutters>
                      <v-col class="my-1" cols="12">
                        <v-text-field
                          model-value=""
                          variant="outlined"
                          label="Your key"
                          placeholder="****************"
                          readonly
                          disabled
                          density="compact"
                          persistent-placeholder
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </li>
                  <li>
                    Make sure <code style="font-weight: bold">Time based</code> is selected.
                    <v-row style="max-width: 400px" justify="start" dense no-gutters>
                      <v-col class="my-1" cols="12">
                        <v-text-field
                          model-value="Time based"
                          variant="outlined"
                          label="Type of key"
                          placeholder=""
                          readonly
                          disabled
                          density="compact"
                          persistent-placeholder
                          hide-details
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </li>
                  <li>
                    Tap on <code style="font-weight: bold">Add</code> button to finish the setup of the new account.
                  </li>
                </ol>
              </v-card>
              <v-btn color="primary" class="mx-2 mb-1" @click="totpStepper = 3">Continue</v-btn>
              <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="totpStepper = 1">Back</v-btn>
            </v-stepper-vertical-item>

            <v-stepper-vertical-item value="3">
              <template v-slot:title> Check your TOTP codes </template>

              <v-card class="mb-12" elevation="0">
                In your <i>Google authenticator</i> app you should see a field<br />
                with name <code>HUNT CLOUD VPN</code> showing <b>6 digit verification code</b>. <br /><br />
                This code refreshes every 30 seconds.
                <br /><br />
                Phone might need to be connected to internet to assure precise synchronization of time.
              </v-card>
              <v-btn color="primary" class="mx-2 mb-1" @click="totpStepper = 1">Start again</v-btn>
              <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="totpStepper = 2">Back</v-btn>
              <!-- prettier-ignore -->
              <v-btn
                color="success"
                class="mx-2 mb-1"
                @click="totpDialog = false; totpStepper = 1"
                >Finish</v-btn
              >
            </v-stepper-vertical-item>
          </v-stepper-vertical>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>
