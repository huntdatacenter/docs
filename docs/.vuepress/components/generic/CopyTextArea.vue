<script>
import {
  VCol,
  VRow,
  VTextarea,
} from "vuetify/lib";

export default {
  name: "CopyTextArea",
  components: {
    VCol,
    VRow,
    VTextarea,
  },
  props: {
    value: { type: [Object, String], default: null },
    label: { type: String, default: "" },
    placeholder: { type: String, default: null },
    rows: { type: String, default: "5" },
  },
  data() {
    return {}
  },
  computed: {
    getRef() {
      return Math.random().toString(20).slice(2, 6)
    }
  },
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
  <v-textarea
    :value="value"
    :ref="getRef"
    autocomplete="ignore-field"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
    :rows="rows"
    outlined
    dense
    readonly
    hide-details
    @input="$emit('input', $event.target.value)"
    @focus="$event.target.select()"
  >
    <template v-slot:append>
      <a class="material-icons content_copy" @click="copyText(getRef)">&#xe14d;</a>
    </template>
  </v-textarea>

</template>
