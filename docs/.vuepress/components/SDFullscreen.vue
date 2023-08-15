<script>
const yaml = require("js-yaml");
import fetch from 'node-fetch';

export default {
  name: "SDFullscreen",
  components: {
    ServiceDesk: () => import('./ServiceDesk.vue')
  },
  props: {},
  data() {
    return {
      form: null,
      data: {},
      dialog: false,
    };
  },
  computed: {
    getData() {
      return this.data && this.data[this.form] ? this.data[this.form] : null;
    },
    showForm() {
      return this.data && this.data[this.form];
    },
    getRecipient() {
      return this.data && this.data[this.form] && this.data[this.form]["recipient"] ? this.data[this.form]["recipient"] : "cloud.support+hunt-cloud-request@hunt.ntnu.no";
    },
  },
  watch: {
    dialog(val) {
      console.log(val)
      if (!val) {
        const state = window.history.state
        const searchURL = new URL(window.location)
        // console.log(searchURL)
        // searchURL.searchParams.set('open', event.value)
        window.history.pushState(state, '', searchURL)
      }
    }
  },
  mounted() {},
  created() {
    this.loadFormFromUri()
    if (this.form) {
      fetch("/cfg/service_desk.yml")
        .then((response) => response.text())
        .then((data) => {
          // console.log(data);
          const cfg = yaml.load(data);
          // console.log(cfg);
          this.data = cfg;

          this.dialog = true;
        });
    }
  },
  methods: {
    loadFormFromUri() {
      // open=form_name
      this.form = this.$route.query && this.$route.query.open ? this.$route.query.open : null
    },
  },
};
</script>

<template>
  <section v-if="showForm">
    <ServiceDesk
      v-model="dialog"
      :ref="form"
      :title="getData['title']"
      :requirements="getData['requirements']"
      :fields="getData['fields']"
      :template="getData['template']"
      :recipient="getRecipient"
      fullscreen
    />
  </section>
</template>
