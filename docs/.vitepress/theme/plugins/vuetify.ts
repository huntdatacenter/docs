import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import { VStepperVertical, VStepperVerticalItem, VStepperVerticalActions } from "vuetify/labs/VStepperVertical"

export const vuetify = createVuetify({
  components: {
    ...components,
    VStepperVertical,
    VStepperVerticalItem,
    VStepperVerticalActions,
  },
  directives,
})

export default vuetify
