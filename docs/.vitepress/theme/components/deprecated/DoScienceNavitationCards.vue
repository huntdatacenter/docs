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
} from "vuetify/lib"

export default {
  name: "DoScienceNavitationCards",
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
      cardcolor: "#cfdaf1",
      avatarcolor: "#9db7e1",
      iconcolor: "rgb(72 84 104)",
      // data: [
      //   // {
      //   //   title: 'Order new lab',
      //   //   subtitle: 'Data space leaders, and compliance administrators can order a new lab.',
      //   //   href: '/administer-science/service-desk/data-space-orders/',
      //   //   icon: ['fas', 'flask'],
      //   // },
      //   // {
      //   //   title: 'Request new lab user',
      //   //   subtitle: 'Lab leader, and coordinator can request adding new users.',
      //   //   href: '/administer-science/service-desk/lab-orders/#add-a-new-lab-user',
      //   //   icon: ['fas', 'person-circle-plus'],
      //   // },
      //   {
      //     title: 'Service desk',
      //     subtitle: 'Service orders that you can request as an active lab user in HUNT Cloud.',
      //     href: '/do-science/service-desk/',
      //     icon: ['fas', 'envelope'],
      //   },
      //   {
      //     title: 'Workbench',
      //     subtitle: 'Getting started with Workbench',
      //     href: '/do-science/hunt-workbench/getting-started/',
      //     icon: ['fas', 'code'],
      //   },
      //   {
      //     title: 'Technical tools',
      //     subtitle: 'Technical guides for Git, Docker, GPUs, Cuda, and other tools.',
      //     href: '/do-science/tools/technical/',
      //     icon: ['fas', 'toolbox'],
      //   },
      //   {
      //     title: 'Analytical tools',
      //     subtitle: 'Guides for analytical tools like RStudio, MATLAB, or Stata.',
      //     href: '/do-science/tools/analytical/',
      //     icon: ['fas', 'vials'],
      //   },
      //   {
      //     title: 'AI / ML',
      //     subtitle: 'GPUs for sensitive AI / ML models.',
      //     href: '/do-science/tools/technical/gpu/',
      //     icon: ['fas', 'brain'],
      //   },
      //   // {
      //   //   title: 'Video guides',
      //   //   subtitle: 'Learn how to work in your lab.',
      //   //   href: '',  // TODO -- add link
      //   //   icon: ['fas', 'video'],
      //   // },
      //   {
      //     title: 'Data transfers',
      //     subtitle: 'How to transfer data between labs, import and export data.',
      //     href: '/do-science/data-transfers/',
      //     icon: ['fas', 'arrow-down-up-across-line'],
      //   },
      //   {
      //     title: 'FAQ',
      //     subtitle: 'Frequently asked questions',
      //     href: '/do-science/faq/',
      //     icon: ['fas', 'circle-question'],
      //   },
      //   {
      //     title: 'Troubleshooting',
      //     subtitle: 'Solutions to some of the common issues that you might encounter.',
      //     href: '/do-science/troubleshooting/',
      //     icon: ['fas', 'bug'],
      //   },
      //   // {
      //   //   title: '07',
      //   //   subtitle: '',
      //   //   href: '',
      //   //   icon: ['fas', 'flask'],
      //   // },
      // ],
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<template>
  <div class="vuewidget vuewrapper" data-vuetify>
    <v-app :id="id">
      <v-row class="my-2" dense>
        <!-- columns -->
        <v-col v-for="item in buttons" cols="12" sm="6" md="6" :key="item.title">
          <v-card :color="cardcolor" height="100%" light elevation="2" :href="item.href">
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
</style>
