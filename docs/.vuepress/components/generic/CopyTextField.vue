<script>
import {
  VCol,
  VRow,
  VTextField,
} from "vuetify/lib";

export default {
  name: "CopyTextField",
  components: {
    VCol,
    VRow,
    VTextField,
  },
  props: [
    'ref', 'value', 'label', 'placeholder'
  ],
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
  <v-text-field
    :value="value"
    :ref="getRef"
    autocomplete="ignore-field"
    :label="label"
    :placeholder="placeholder"
    persistent-placeholder
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
  </v-text-field>

</template>
