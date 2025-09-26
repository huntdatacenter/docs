<script setup>
import { ref } from "vue"

// Props (currently empty but kept for future use)
defineProps({})

// Reactive data
const dialog = ref(false)
const totpStepper = ref(1)

// Methods would go here if needed
</script>

<template>
  <span>
    <a @click.stop="dialog = true">your new passphrase</a>
    <v-dialog v-model="dialog" persistent scrollable max-width="960px" @keydown.esc="dialog = false">
      <v-card elevation="0">
        <v-card-title class="pa-0">
          <v-toolbar dark color="#00509e" flat>
            <v-toolbar-title>Design your new passphrase</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon fab @click="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card-title>

        <v-card-text class="pa-0">
          <v-card class="pa-8" elevation="0">
            You will need to update your SSH temporary key in the steps below. We prefer that you design a passphrase
            instead of a password. A passphrase is a series of words that creates a phrase.
            <br /><br />
            It should be:

            <ul class="my-2">
              <li>long enough to be hard to guess (at least 12 characters long)</li>
              <li>not a famous quotation from the literature (but could be pretty close)</li>
              <li>hard to guess by intuition (even by someone who knows you well)</li>
              <li>easy to remember</li>
              <li>at least 3 characters have to be different from your previous one (including temporary key)</li>
              <li>include both lower and upper cases</li>
            </ul>

            Oh, and, it should be unique to this site only.
            <br /><br />

            Making a good passphrase is great fun and good security hygiene.
            <br />

            Here's one example of such passphrase:

            <div class="language- extra-class" style="user-select: none">
              <pre class="language-text">
                <code>AnalysingPokemon4FunInTheMorning</code>
              </pre>
            </div>

            <br />Go ahead and create one for yourself to use in the next steps of the guide.

            <br /><br />
            <v-btn color="primary" class="mx-2" @click="dialog = false">Continue in the guide</v-btn>
            <!-- <v-btn color="link" class="mx-2" @click="dialog = false">Close</v-btn> -->
          </v-card>
        </v-card-text>
      </v-card>
    </v-dialog>
  </span>
</template>

<style scoped>
ul {
  list-style-type: disc;
  padding-left: 24px;
}

pre code {
  font-size: 14px !important;
  /* padding: 0 !important; */
  padding-left: 12px !important;
  padding-right: 12px !important;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  background-color: unset;
  color: rgba(204, 204, 204, 1) !important;
}

/* pre[class*="language-"] {
  margin: 0.85rem 0;
} */

div[class*="language-"] {
  position: relative;
  background-color: #282c34;
  border-radius: 6px;
}

div[class*="language-"]:before {
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 1em;
  font-size: 0.75rem;
  color: hsla(0, 0%, 100%, 0.4);
}
</style>
