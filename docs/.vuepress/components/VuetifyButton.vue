<script>
import {
    VApp,
    VBtn,
} from "vuetify/lib";

export default {
    name: "VuetifyButton",
    components: {
        VApp,
        VBtn
    },
    props: {
        id: { type: String, default: "applet" },
        color: { type: String, default: null },
        label: { type: String, default: null },
        href: { type: String, default: null },
        text: { type: Boolean, default: false },
        block: { type: Boolean, default: false },
        childClass: { type: Object, default: null },
    },
    data() {
        return {};
    },
    //computed: {},
    //mounted() {},
    //created() {},
    //methods: {},
};
</script>

<template>
    <div class="vuewidget vuewrapper" data-vuetify>
        <v-app :id="id">
            <v-btn :class="childClass" :color="color" :text="text" :href="href" :block="block">{{
                label
            }}</v-btn>
        </v-app>
    </div>
</template>

<style lang="sass">
.vuewidget

  &.vuewrapper
    // reset full view - no scroll bars, no full view
    overflow: inherit

    .v-application
      width: 100%

    .v-application--wrap
      display: block
      flex: inherit
      min-height: initial
      min-width: inherit
      width: inherit
      max-width: inherit
      overflow-x: hidden

  a.v-btn
    border: inherit
</style>

