import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import { VStepperVertical, VStepperVerticalItem, VStepperVerticalActions } from "vuetify/labs/VStepperVertical"

// Scoped theme for the Price estimator. Applied via <v-theme-provider theme="huntCloud">
// so it only affects the estimator and not other Vuetify components across the site.
const huntCloud = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: "#ffffff",
    "surface-variant": "#eef3f3",
    "on-surface-variant": "#2e7578",
    primary: "#2e7578",
    "primary-darken-1": "#21595c",
    secondary: "#3a5a78",
    accent: "#f4ac67",
    error: "#c0392b",
    info: "#2e7578",
    success: "#2e7d32",
    warning: "#e08a2b",
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
