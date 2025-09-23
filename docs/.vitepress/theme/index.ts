// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"

import CopyInput from "./components/generic/CopyInput.vue"
import CopyInputField from "./components/generic/CopyInputField.vue"
import CopyTextArea from "./components/generic/CopyTextArea.vue"
import CopyTextField from "./components/generic/CopyTextField.vue"

import VuetifyButton from "./components/legacy/VuetifyButton.vue"
import MyIPAddress from "./components/legacy/MyIPAddress.vue"
import NavitationCards from "./components/legacy/NavitationCards.vue"
import HideLastUpdated from "./components/legacy/HideLastUpdated.vue"
import ConsentForm from "./components/legacy/ConsentForm.vue"

import "./style.css"

import "@mdi/font/css/materialdesignicons.css"

import "vuetify/styles"

import { vuetify } from "./plugins/vuetify"

// Search for FREE icons: https://fontawesome.com/search?o=r&m=free
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faClipboardCheck,
  faCode,
  faEnvelope,
  faFolderOpen,
  faPeopleArrows,
  faBrain,
  faCheck,
  faInfinity,
  faQuoteLeft,
  faQuoteRight,
  faToolbox,
  faVials,
  faBug,
  faCircleQuestion,
  faArrowDownUpAcrossLine,
  faFileLines,
  faCalculator,
  faTag,
  faCloud,
  faHandshake,
  faFilePen,
  faComment,
  faListCheck,
  faUserShield,
  faUserGear,
  faPalette,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons"

library.add(faClipboardCheck)
library.add(faCode)
library.add(faEnvelope)
library.add(faFolderOpen)
library.add(faPeopleArrows)
library.add(faBrain)
library.add(faCheck)
library.add(faInfinity)
library.add(faQuoteLeft)
library.add(faQuoteRight)
library.add(faToolbox)
library.add(faVials)
library.add(faBug)
library.add(faCircleQuestion)
library.add(faArrowDownUpAcrossLine)
library.add(faFileLines)
library.add(faCalculator)
library.add(faTag)
library.add(faCloud)
library.add(faHandshake)
library.add(faFilePen)
library.add(faComment)
library.add(faListCheck)
library.add(faUserShield)
library.add(faUserGear)
library.add(faPalette)
library.add(faPeopleGroup)

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)

    // Search for FREE icons: https://fontawesome.com/search?o=r&m=free
    app.component("font-awesome-icon", FontAwesomeIcon)

    app.component("CopyInput", CopyInput)
    app.component("CopyInputField", CopyInputField)
    app.component("CopyTextArea", CopyTextArea)
    app.component("CopyTextField", CopyTextField)
    app.component("VuetifyButton", VuetifyButton)
    app.component("MyIPAddress", MyIPAddress)
    app.component("NavitationCards", NavitationCards)
    app.component("HideLastUpdated", HideLastUpdated)
    app.component("ConsentForm", ConsentForm)
  },
} satisfies Theme
