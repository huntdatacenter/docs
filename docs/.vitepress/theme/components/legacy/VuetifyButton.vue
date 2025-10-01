<script setup>
defineOptions({
  name: "VuetifyButton",
})

// Props definition using defineProps
const props = defineProps({
  id: { type: String, default: "applet" },
  color: { type: String, default: null },
  label: { type: String, default: null },
  href: { type: String, default: null },
  variant: { type: String, default: "tonal" },
  block: { type: Boolean, default: false },
  childClass: { type: [Object, String, Array], default: null },
})

// If you need reactive data, use ref() or reactive()
// const someData = ref(null);
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-btn
        :class="childClass"
        :color="color"
        :variant="variant"
        :href="href"
        :block="block"
        :text="label"
        elevation="1"
      />
    </v-app>
  </div>
</template>

<style>
.vuewidget.vuewrapper {
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
}

.vuewidget.vuewrapper .v-application {
  width: 100%;
}

.vuewidget.vuewrapper .v-application__wrap {
  display: block;
  flex: inherit;
  min-height: initial;
  min-width: inherit;
  width: inherit;
  max-width: inherit;
  overflow-x: hidden;
}

.vuewidget a.v-btn {
  border: inherit;
}
</style>
