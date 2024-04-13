<script>
import {
  VCol,
  VRow,
  VBtn,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VSpacer,
  VDialog,
  VIcon,
} from "vuetify/lib";

export default {
  name: "VideoGuide",
  components: {
    VCol,
    VRow,
    VBtn,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VToolbar,
    VToolbarTitle,
    VToolbarItems,
    VSpacer,
    VDialog,
    VIcon,
  },
  props: {
    value: { type: Number, required: true },
    title: { type: String, required: true },
    video: { type: String, required: true },
    poster: { type: String, required: true },
    inc: { type: Number, default: 1 },
    buttontext: { type: String, default: "Video guide" },
  },
  data() {
    return {
      videoDialog: false,
      preload: false,
      totpStepper: 1,
    }
  },
  computed: {},
  created() {
    // console.log(this.value)
  },
  methods: {
    nextPanel() {
      // console.log(this.value)
      this.videoDialog = false
      this.$emit('input', this.value + this.inc)
    },
  },
};
</script>

<!-- icon: videocam vs. play_arrow -->

<template>
  <section>
    <v-row class="my-1">
      <v-col cols="12">
        <v-btn
          text
          color="success"
          @click.stop="videoDialog = true; preload = true"
          elevation="2"
        >
          <v-icon>play_arrow</v-icon>&nbsp;&nbsp;{{ buttontext }} (NEW)
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog
      v-model="videoDialog"
      persistent
      scrollable
      max-width="1280px"
      @keydown.esc="videoDialog = false"
    >
      <v-card class="pa-0 ma-0" elevation="0">
        <v-card-title class="pa-0">
          <v-toolbar dark color="#00509e" flat>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon fab @click="videoDialog = false">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card-title>

        <v-card-text class="pa-0 ma-0">
          <video
            v-if="preload"
            class="video-card-block"
            width="100%"
            :poster="poster"
            preload="auto"
            controls
          >
            <source
              :src="video"
              type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined color="primary" class="mx-2 my-2" small @click="nextPanel()">Next</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<style lang="sass">

.video-card-block
  height: 99% !important

</style>
