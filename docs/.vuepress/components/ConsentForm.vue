<script>
import {
  VApp,
  VDialog,
  VBtn,
  VCol,
  VRow,
  VCard,
  VCardText,
  VCardActions,
  VSwitch,
} from "vuetify/lib";

export default {
  name: "ConsentForm",
  components: {
    VApp,
    VDialog,
    VBtn,
    VCol,
    VRow,
    VCard,
    VCardText,
    VCardActions,
    VSwitch,
  },
  props: {
    id: { type: String, default: "applet" },
  },
  data() {
    return {
      dialog: false,
      autoUpdate: false,
      autoUpdate1: false,
      isUpdating: false,
      data: {},
    };
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    submit() {
      console.log('submitted')
    },
  },
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <form ref="form" @submit.prevent="submit">
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
          <v-col cols="2">
            <v-switch
              v-model="autoUpdate"
              :disabled="isUpdating"
              class="mt-0"
              color="green lighten-2"
              hide-details
              label="Slack"
            ></v-switch>
          </v-col>
          <v-col cols="10">
            Donec at metus suscipit nunc placerat ornare egestas venenatis metus. 
            Cras pretium urna justo, a auctor enim sodales ut.
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-switch
              v-model="autoUpdate1"
              :disabled="isUpdating"
              class="mt-0"
              color="green lighten-2"
              hide-details
              label="Tingweek"
            ></v-switch>
          </v-col>
          <v-col cols="10">
            Duis vel rutrum augue. Maecenas ultricies ipsum ex, eu tristique ipsum cursus in.
          </v-col>
        </v-row>
        <v-row class="mb-2" justify="center">
          <v-col cols="2">
            <v-btn
              type="submit"
              color="success"
              block
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </form>
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
