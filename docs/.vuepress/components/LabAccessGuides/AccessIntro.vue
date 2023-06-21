<script>
import {
  VCol,
  VRow,
  VTextField,
} from "vuetify/lib";

export default {
  name: "AccessIntro",
  components: {
    VCol,
    VRow,
    VTextField,
  },
  props: {
    username: { type: String, default: null },
    labName: { type: String, default: null },
    ipAddress: { type: String, default: null },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {
    copyText(key) {
      let textToCopy = this.$refs[key].$el.querySelector('input')
      textToCopy.select()
      document.execCommand("copy");
    },
  },
};
</script>


<template>
  <v-row justify="center" class="pt-4 pb-4">
    <v-col cols="10">
      Once you have <a href="/do-science/lab-access/collect-your-keys/" target="_blank">collected your keys</a>
      use the guides below to setup your lab access.
    </v-col>
    <v-col cols="10">
      <v-text-field
        v-model="username"
        ref="username"
        autocomplete="ignore-field"
        label="Username"
        placeholder="Your link is missing access token"
        persistent-placeholder
        outlined
        dense
        readonly
        hide-details
        @focus="$event.target.select()"
      >
        <template v-slot:append>
          <a class="material-icons content_copy" @click="copyText('username')">&#xe14d;</a>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="10">
      <v-text-field
        v-model="labName"
        ref="labName"
        autocomplete="ignore-field"
        label="Lab name"
        placeholder="Your link is missing access token"
        persistent-placeholder
        outlined
        dense
        readonly
        hide-details
        @focus="$event.target.select()"
      >
        <template v-slot:append>
          <a class="material-icons content_copy" @click="copyText('labName')">&#xe14d;</a>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="10">
      <v-text-field
        v-model="ipAddress"
        ref="ipAddress"
        autocomplete="ignore-field"
        label="IP Address"
        placeholder="Your link is missing access token"
        persistent-placeholder
        outlined
        dense
        readonly
        hide-details
        @focus="$event.target.select()"
      >
        <template v-slot:append>
          <a class="material-icons content_copy" @click="copyText('ipAddress')">&#xe14d;</a>
        </template>
      </v-text-field>
    </v-col>
  </v-row >

</template>
