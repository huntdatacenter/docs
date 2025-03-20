<script>
import {
  VApp,
  VDialog,
  VBtn,
  VIcon,
  VCol,
  VRow,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VListItem,
  VListItemTitle,
  VListItemSubtitle,
  VListItemAvatar,
  VListItemContent,
} from "vuetify/lib";

export default {
  name: "NavigationCards",
  components: {
    VApp,
    VDialog,
    VBtn,
    VIcon,
    VCol,
    VRow,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VListItem,
    VListItemTitle,
    VListItemSubtitle,
    VListItemAvatar,
    VListItemContent,
  },
  props: {
    id: { type: String, default: "applet" },
    buttons: { type: Array, default: [] },
  },
  data() {
    return {
      // dialog: false,
      cardcolor: '#cfdaf1',
      avatarcolor: '#9db7e1',
      iconcolor: 'rgb(72 84 104)'
    };
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-row class="my-2" dense>
        <!-- columns -->
        <v-col v-for="item in buttons" cols="12" sm="6" md="6" :key="item.title">
          <v-card
            :color="cardcolor"
            height="100%"
            light
            elevation="2"
            :href="item.href"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <!-- <div class="text-overline mb-2">
                  OVERLINE
                </div> -->
                <v-list-item-title class="text-h5 mb-1">
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                v-if="item.icon ? true : false"
                size="80"
                rounded
                :color="avatarcolor"
                :style="{ padding: '15px' }"
              >
                <font-awesome-icon :icon="item.icon" :style="{ color: iconcolor, width: '100%', height: 'auto' }" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<style lang="sass">
.vuewidget

  &.vuewrapper
    // reset full view - no scroll bars, no full view
    overflow: inherit

    .v-application--wrap
      display: block
      flex: inherit
      min-height: initial
      min-width: inherit
      width: 100%
      overflow-x: hidden

  a.v-btn
    border: inherit

.v-chip.v-size--small
  margin-top: 8px !important
  margin-bottom: 5px !important

.last-updated
  display: none

a
  &.v-card
    text-decoration: none !important

</style>
