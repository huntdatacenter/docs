<script>
import {
  VApp,
} from "vuetify/lib";

import fetch from 'node-fetch';

export default {
  name: "MyIPAddress",
  components: {
    VApp,
    CopyInputField: () => import('./CopyInputField.vue'),
  },
  props: {
    id: { type: String, default: "applet" },
    hidePrefix: { type: Boolean, default: false },
  },
  data() {
    return {
      ipAddress: null,
    }
  },
  computed: {
    getMyIpaddress() {
      return this.ipAddress ? this.ipAddress : null
    },
    show() {
      return this.ipAddress && this.ipAddress.length > 3 ? true : false
    },
  },
  mounted() {},
  created() {
    fetch('https://consent-api.hdc.ntnu.no/ip4', {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "text/plain",
      },
    }).then(
      (response) => {
        return response.text()
      }
    ).then((data) => {
      this.ipAddress = data
    })
  },
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <CopyInputField
        :value="getMyIpaddress"
        :prefix="hidePrefix ? `` : `Your IP address:`"
        :loading="!show"
      />
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

</style>
