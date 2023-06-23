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
    CopyTextField: () => import('../generic/CopyTextField.vue'),
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
      <CopyTextField
        v-model="username"
        label="Username"
        placeholder="Your link is missing access token"
        prefix=""
      />
    </v-col>
    <v-col cols="10">
      <CopyTextField
        v-model="labName"
        label="Lab name"
        placeholder="Your link is missing access token"
        prefix=""
      />
    </v-col>
    <v-col cols="10">
      <CopyTextField
        v-model="ipAddress"
        label="Lab IP Address"
        placeholder="Your link is missing access token"
        prefix=""
      />
    </v-col>
  </v-row >

</template>
