<script>
const yaml = require("js-yaml");
const fs = require("fs");
import fetch from 'node-fetch';

export default {
  name: "SDButton",
  components: {
    ServiceDesk: () => import('./ServiceDesk.vue')
  },
  props: {
    form: { type: String, default: null },
  },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    getData() {
      return this.data && this.data[this.form] ? this.data[this.form] : null;
    },
    showBtn() {
      return this.data && this.data[this.form];
    },
    getRecipient() {
      return this.data && this.data[this.form] && this.data[this.form]["recipient"] ? this.data[this.form]["recipient"] : "cloud.support+hunt-cloud-request@hunt.ntnu.no";
    },
  },
  mounted() {},
  created() {
    if (this.form) {
      fetch("/cfg/service_desk.yml")
        .then((response) => response.text())
        .then((data) => {
          // console.log(data);
          const cfg = yaml.load(data);
          // console.log(cfg);
          this.data = cfg;
        });
    }
  },
  methods: {},
};
</script>

<template>
    <section v-if="showBtn">
        <ServiceDesk
          :title="getData['title']"
          :requirements="getData['requirements']"
          :fields="getData['fields']"
          :template="getData['template']"
          :recipient="getRecipient"
        />
    </section>
</template>
