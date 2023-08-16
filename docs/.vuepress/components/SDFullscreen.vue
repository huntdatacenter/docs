<script>
const yaml = require("js-yaml");
import fetch from 'node-fetch';

export default {
  name: "SDFullscreen",
  components: {
    ServiceDesk: () => import('./ServiceDesk.vue')
  },
  props: {
    form: { type: String, default: null },
  },
  data() {
    return {
      formTag: null,
      data: {},
      dialog: false,
    };
  },
  computed: {
    getData() {
      return this.data && this.data[this.formTag] ? this.data[this.formTag] : null;
    },
    showForm() {
      return this.data && this.data[this.formTag];
    },
    getRecipient() {
      return this.data && this.data[this.formTag] && this.data[this.formTag]["recipient"] ? this.data[this.formTag]["recipient"] : "cloud.support+hunt-cloud-request@hunt.ntnu.no";
    },
  },
  watch: {
    // dialog(val) {
    //   console.log(val)
    //   if (!val) {
    //     const state = window.history.state
    //     const searchURL = new URL(window.location)
    //     window.history.pushState(state, '', searchURL)
    //   }
    // }
  },
  mounted() {},
  created() {
    this.loadFormTag()
    this.loadFormData()
  },
  methods: {
    loadFormTag() {
      // URI: ?form=form_name
      this.formTag = this.$route.query && this.$route.query.form ? this.$route.query.form : this.form
    },
    loadFormData() {
      fetch("/cfg/service_desk.yml")
        .then((response) => response.text())
        .then((data) => {
          // console.log(data);
          const cfg = yaml.load(data);
          // console.log(cfg);
          this.data = cfg;

          this.dialog = true;
        });
    },
  },
};
</script>

<template>
  <section v-if="showForm">
    <ServiceDesk
      v-model="dialog"
      :ref="formTag"
      :title="getData['title']"
      :requirements="getData['requirements']"
      :fields="getData['fields']"
      :template="getData['template']"
      :recipient="getRecipient"
      fullscreen
    />
  </section>
</template>
