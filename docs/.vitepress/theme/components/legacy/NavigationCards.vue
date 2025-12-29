<script setup>
import { ref } from "vue"

defineOptions({
  name: "NavigationCards",
})

// Props definition
const props = defineProps({
  id: { type: String, default: "applet" },
  buttons: { type: Array, default: () => [] }, // Better default for arrays
})

// Reactive data
const cardcolor = ref("#f1eef0ff")
const avatarcolor = ref("#e0dce0")
const iconcolor = ref("#004c7b")
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-row class="my-2" density="compact">
        <!-- columns -->
        <v-col v-for="item in buttons" cols="12" sm="6" md="6" :key="item.title">
          <v-card
            :color="cardcolor"
            height="100%"
            theme="light"
            elevation="2"
            :href="item.href"
            class="navigation-card"
          >
            <v-list-item lines="three">
              <template v-slot:prepend>
                <v-avatar
                  v-if="item.icon"
                  size="80"
                  rounded
                  :color="avatarcolor"
                  class="icon-avatar"
                >
                  <v-icon :color="iconcolor" size="60">
                    {{ item.icon }}
                  </v-icon>
                </v-avatar>
              </template>

              <v-list-item-title class="text-h5 mb-1">
                {{ item.title }}
              </v-list-item-title>

              <v-list-item-subtitle>
                {{ item.subtitle }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<style>
.vuewidget.vuewrapper {
  /* reset full view - no scroll bars, no full view */
  overflow: inherit;
}

.vuewidget.vuewrapper .v-application--wrap {
  display: block;
  flex: inherit;
  min-height: initial;
  min-width: inherit;
  width: 100%;
  overflow-x: hidden;
}

.vuewidget a.v-btn {
  border: inherit;
}

.v-chip.v-size--small {
  margin-top: 8px !important;
  margin-bottom: 5px !important;
}

.last-updated {
  display: none;
}

a.v-card {
  text-decoration: none !important;
}

.navigation-card {
  border-radius: 20px !important;
  transition: transform 0.2s, box-shadow 0.2s;
}

.navigation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25) !important;
}

.icon-avatar {
  padding: 15px;
}

/* Ensure proper spacing in list items */
.v-list-item {
  padding: 16px;
}
</style>
