import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import { VStepperVertical, VStepperVerticalItem, VStepperVerticalActions } from "vuetify/labs/VStepperVertical"

// Scoped theme for the Price estimator. Applied via <v-theme-provider theme="huntCloud">
// so it only affects the estimator and not other Vuetify components across the site.
const huntCloud = {
  dark: false,
  colors: {
    primary: "#00509e",
    background: "#ffffff",
    surface: "#ffffff",
    secondary: "#3a5a78",
    accent: "#f4ac67",
    error: "#c0392b",
    info: "#2e7578",
    success: "#2e7d32",
    warning: "#e08a2b",
    "surface-variant": "#eef3f3",
    "surface-bright": "#fcfdfd",
    "on-surface-variant": "#00509e",
    "on-surface-strong": "#1f2d2d",
    "on-surface-muted": "#5a6b6b",
    "primary-darken-1": "#21595c",
    "header-gradient-start": "#f3f8f8",
    "header-gradient-end": "#eef3f3",
    "shadow-cool": "#d8e6e7",
    "shadow-warm": "#dfc4c4",
  },
}

export const vuetify = createVuetify({
  components: {
    ...components,
    VStepperVertical,
    VStepperVerticalItem,
    VStepperVerticalActions,
  },
  directives,
  theme: {
    themes: {
      huntCloud,
    },
  },
})

export default vuetify
