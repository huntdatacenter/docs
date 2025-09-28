// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"

// import { VStepperVertical } from "vuetify/labs/VStepperVertical"

import CopyInput from "./components/generic/CopyInput.vue"
import CopyInputField from "./components/generic/CopyInputField.vue"
import CopyTextArea from "./components/generic/CopyTextArea.vue"
import CopyTextField from "./components/generic/CopyTextField.vue"

import VuetifyButton from "./components/legacy/VuetifyButton.vue"
import MyIPAddress from "./components/legacy/MyIPAddress.vue"
import NavitationCards from "./components/legacy/NavitationCards.vue"
import HideLastUpdated from "./components/legacy/HideLastUpdated.vue"
import ConsentForm from "./components/legacy/ConsentForm.vue"
import SDButton from "./components/legacy/SDButton.vue"
import SOButton from "./components/legacy/SOButton.vue"
import ServiceDesk from "./components/legacy/ServiceDesk.vue"
import AgreementForm from "./components/legacy/AgreementForm.vue"
import EmbedPdfViewer from "./components/legacy/EmbedPdfViewer.vue"
import PdfForm from "./components/legacy/PdfForm.vue"
import LabAccess from "./components/lab-access/LabAccess.vue"
import LinuxJourney from "./components/lab-access/LinuxJourney.vue"
import WindowsJourney from "./components/lab-access/WindowsJourney.vue"
import MacJourney from "./components/lab-access/MacJourney.vue"
import TotpGuide from "./components/lab-access/TotpGuide.vue"
import VideoGuide from "./components/lab-access/VideoGuide.vue"
import AccessIntro from "./components/lab-access/AccessIntro.vue"
import IaasAccess from "./components/lab-access/IaasAccess.vue"
import DesignNewPassphrase from "./components/lab-access/DesignNewPassphrase.vue"

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
    app.component("SDButton", SDButton)
    app.component("SOButton", SOButton)
    app.component("ServiceDesk", ServiceDesk)
    app.component("AgreementForm", AgreementForm)
    app.component("EmbedPdfViewer", EmbedPdfViewer)
    app.component("PdfForm", PdfForm)
    app.component("LabAccess", LabAccess)
    app.component("LinuxJourney", LinuxJourney)
    app.component("WindowsJourney", WindowsJourney)
    app.component("MacJourney", MacJourney)
    app.component("TotpGuide", TotpGuide)
    app.component("VideoGuide", VideoGuide)
    app.component("AccessIntro", AccessIntro)
    app.component("IaasAccess", IaasAccess)
    app.component("DesignNewPassphrase", DesignNewPassphrase)
  },
} satisfies Theme
