<script setup>
import { ref, computed, watch } from "vue"

defineOptions({
  name: "RemoveOldVpnGuide",
})

const props = defineProps({
  username: { type: String, default: "your_username" },
  os: {
    type: String,
    default: "windows",
    validator: (value) => ["windows", "mac", "linux"].includes(value),
  },
})

const removeVpnDialog = ref(false)
const removeVpnStepper = ref("1")

const isMac = computed(() => props.os === "mac")
const isLinux = computed(() => props.os === "linux")
const isWindows = computed(() => props.os === "windows")

watch(
  () => props.os,
  () => {
    removeVpnStepper.value = "1"
  },
)
</script>

<template>
  <section>
    <v-row class="my-1">
      <v-col cols="12">
        <v-btn variant="text" @click.stop="removeVpnDialog = true" elevation="2"> <v-icon>mdi-certificate-outline</v-icon>&nbsp;&nbsp;Remove your old VPN certificate </v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="removeVpnDialog" persistent scrollable max-width="960px" @keydown.esc="removeVpnDialog = false">
      <v-card elevation="0">
        <v-card-title class="pa-0">
          <v-app-bar dark color="#00509e" flat>
            <v-app-bar-title>Remove old VPN certificate</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="removeVpnDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-app-bar>
        </v-card-title>

        <v-card-text class="pa-0">
          <!-- macOS (Tunnelblick) -->
          <v-stepper-vertical v-if="isMac" v-model="removeVpnStepper" class="mt-16" hide-actions :editable="false">
            <v-stepper-vertical-item :complete="removeVpnStepper > 1" value="1">
              <template v-slot:title> Open VPN details in Tunnelblick </template>

              <v-card class="mb-12" elevation="0">
                To remove your old VPN configuration on macOS using <code>Tunnelblick</code>, follow the steps below. <br /><br />

                <ol>
                  <li>Click on the running <code>Tunnelblick</code> icon in the upper menu bar <v-icon icon="mdi-arrow-top-right"></v-icon> of your screen.</li>
                  <li>
                    Select <code style="font-weight: bold">VPN Details...</code>
                    <img class="guide-img" alt="tunnelblick-vpn-removal-step1" src="/img/vpn/tunnelblick-vpn-removal-step1.png" />
                  </li>
                </ol>
              </v-card>
              <v-btn color="primary" class="mx-2 mb-1" @click="removeVpnStepper = 2">Continue</v-btn>
            </v-stepper-vertical-item>

            <v-stepper-vertical-item :complete="removeVpnStepper > 2" value="2">
              <template v-slot:title> Delete saved credentials </template>

              <v-card class="mb-12" elevation="0">
                <ol>
                  <li>Select your VPN profile on the left side of the window.</li>
                  <li>
                    In the bottom left corner <v-icon icon="mdi-arrow-bottom-left"></v-icon>, click the button marked with
                    <code><v-icon>mdi-dots-horizontal-circle-outline</v-icon> three dots in a circle</code>.
                    <img class="guide-img" alt="tunnelblick-vpn-removal-step2a" src="/img/vpn/tunnelblick-vpn-removal-step2a.png" />
                    <img class="guide-img" alt="tunnelblick-vpn-removal-step2b" src="/img/vpn/tunnelblick-vpn-removal-step2b.png" />
                  </li>
                  <li>
                    At the very bottom of the newly opened window, select
                    <code style="font-weight: bold">Delete configuration's credentials in keychain</code>.
                    <img class="guide-img" alt="tunnelblick-vpn-removal-step3" src="/img/vpn/tunnelblick-vpn-removal-step3.png" />
                  </li>
                </ol>
              </v-card>
              <v-btn color="primary" class="mx-2 mb-1" @click="removeVpnStepper = 3">Continue</v-btn>
              <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="removeVpnStepper = 1">Back</v-btn>
            </v-stepper-vertical-item>

            <v-stepper-vertical-item value="3">
              <template v-slot:title> Delete the VPN profile </template>

              <v-card class="mb-12" elevation="0">
                Select your VPN profile and delete it from the <code>Tunnelblick</code> app as shown in the picture below.
                <img class="guide-img" alt="tunnelblick-vpn-removal-step4" src="/img/vpn/tunnelblick-vpn-removal-step4.png" />
                <br />
                You can now continue with the next step.
              </v-card>
              <!-- prettier-ignore -->
              <v-btn
                color="success"
                class="mx-2 mb-1"
                @click="removeVpnDialog = false; removeVpnStepper = 1"
                >Finish</v-btn
              >
              <v-btn color="primary" class="mx-2 mb-1" @click="removeVpnStepper = 1">Start again</v-btn>
              <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="removeVpnStepper = 2">Back</v-btn>
            </v-stepper-vertical-item>
          </v-stepper-vertical>

          <!-- Linux (Ubuntu 24.04 Settings) -->
          <v-stepper-vertical v-else-if="isLinux" v-model="removeVpnStepper" class="mt-16" hide-actions :editable="false">
            <v-stepper-vertical-item :complete="removeVpnStepper > 1" value="1">
              <template v-slot:title> Open VPN options </template>

              <v-card class="mb-12" elevation="0">
                To remove your old VPN configuration on Linux (Ubuntu 24.04), follow the steps below.
                <br /><br />

                <ol>
                  <li>Open <code>Settings</code>.</li>
                  <li>Select <code>Network</code>.</li>
                  <li>
                    Click the <code><v-icon>mdi-cog</v-icon> VPN Options</code> icon (small wheel) to the right of your VPN profile.
                    <img class="guide-img" alt="linux-vpn-removal-step1" src="/img/vpn/step1_Linux_24_04_vpn_remove.png" />
                  </li>
                </ol>
              </v-card>
              <v-btn color="primary" class="mx-2 mb-1" @click="removeVpnStepper = 2">Continue</v-btn>
            </v-stepper-vertical-item>

            <v-stepper-vertical-item value="2">
              <template v-slot:title> Remove the VPN profile </template>

              <v-card class="mb-12" elevation="0">
                <ol>
                  <li>
                    Click the red <code style="font-weight: bold">Remove VPN...</code> button at the bottom of the window.
                    <img class="guide-img" alt="linux-vpn-removal-step2" src="/img/vpn/step2_Linux_24_04_vpn_remove.png" />
                  </li>
                  <li>Click <code style="font-weight: bold">Forget</code> to confirm.</li>
                </ol>
                <br />
                You can now continue with the next step.
              </v-card>

              <!-- prettier-ignore -->
              <v-btn
                color="success"
                class="mx-2 mb-1"
                @click="removeVpnDialog = false; removeVpnStepper = 1"
                >Finish</v-btn
              >
              <v-btn color="primary" class="mx-2 mb-1" @click="removeVpnStepper = 1">Start again</v-btn>
              <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="removeVpnStepper = 1">Back</v-btn>
            </v-stepper-vertical-item>
          </v-stepper-vertical>

          <!-- Windows -->
          <v-stepper-vertical v-else-if="isWindows" v-model="removeVpnStepper" class="mt-16" hide-actions :editable="false">
            <v-stepper-vertical-item :complete="removeVpnStepper > 1" value="1">
              <template v-slot:title> Clear saved passwords </template>

              <v-card class="mb-12" elevation="0">
                You will need to remove your old VPN certificate and passwords before you install a new one.
                <br /><br />

                <ol>
                  <li>
                    Find the <code>OpenVPN</code> icon in the task bar in the lower right corner <v-icon icon="mdi-arrow-bottom-right"></v-icon> of your screen.<br />
                    If you don't see it, click the <code><v-icon>mdi-chevron-up</v-icon></code> arrow to show hidden icons.
                    <img class="guide-img" alt="windows-vpn-removal-step1" src="/img/vpn/step1_Windows_remove_passwords.png" />
                  </li>
                  <li>Right click on the <code>OpenVPN</code> icon.</li>
                  <li>Select <code style="font-weight: bold">Clear Saved Passwords</code>.</li>
                </ol>
              </v-card>
              <v-btn color="primary" class="mx-2 mb-1" @click="removeVpnStepper = 2">Continue</v-btn>
            </v-stepper-vertical-item>

            <v-stepper-vertical-item value="2">
              <template v-slot:title> Remove old OpenVPN configuration folder </template>

              <v-card class="mb-12" elevation="0">
                <ol>
                  <li>Open your <code>File Explorer</code>.</li>
                  <li>
                    Open your file explorer and manually remove the folder with the old OpenVPN configurations. It's usually located here:
                    <CopyTextField :model-value="`%USERPROFILE%\\openvpn\\config\\${username}`" />
                  </li>
                </ol>
              </v-card>
              <!-- prettier-ignore -->
              <v-btn
                color="success"
                class="mx-2 mb-1"
                @click="removeVpnDialog = false; removeVpnStepper = 1"
                >Finish</v-btn
              >
              <v-btn color="primary" class="mx-2 mb-1" @click="removeVpnStepper = 1">Start again</v-btn>
              <v-btn color="primary" variant="text" class="mx-2 mb-1" @click="removeVpnStepper = 1">Back</v-btn>
            </v-stepper-vertical-item>
          </v-stepper-vertical>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<style scoped>
/* TODO -- adjust so we can avoid using scoped style */
code {
  font-size: 100% !important;
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.4em;
}
ul {
  list-style-type: disc;
  padding-left: 24px;
}

a {
  color: #1976d2;
}

pre code {
  padding-left: 12px !important;
  padding-right: 12px !important;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
}

.v-overlay__content code {
  font-size: 95% !important;
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.4em 0.4em;
}

.guide-img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 8px 0;
}
</style>
