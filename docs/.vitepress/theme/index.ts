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

import PriceEstimator from "./components/price-estimator/PriceEstimator.vue"
import LabCard from "./components/price-estimator/LabCard.vue"
import Machine from "./components/price-estimator/Machine.vue"
import Storage from "./components/price-estimator/Storage.vue"
import TotalBlock from "./components/price-estimator/TotalBlock.vue"

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

const redirects: Record<string, string> = {
  "/do-science/lab-access/collect-your-keys": "/do-science/lab-access/1-collect-keys",
  "/administer-science/agreements/": "/administer-science/agreements/overview",
  "/administer-science/prices/calculator": "/administer-science/prices/estimator",
  // "/legacy/path": "/current/path",
  // add your redirects here
}

const redirectPrefixes: Array<[string, string]> = [
  ["/do-science/getting-started/", "/do-science/lab-access/"] as const,
  ["/getting-started/", "/do-science/lab-access/"] as const,
  ["/lab-access/", "/do-science/lab-access/"] as const,
  ["/service-desk/user-orders/", "/do-science/service-desk/"] as const,
  ["/service-desk/lab-orders/", "/administer-science/service-desk/lab-orders/"] as const,
  ["/service-desk/data-space-orders/", "/administer-science/service-desk/data-space-orders/"] as const,
  ["/service-desk/service-center-orders/", "/govern-science/service-desk/service-center-orders/"] as const,
  ["/service-desk/data-controller-orders/", "/govern-science/service-desk/data-controller-orders/"] as const,
  ["/working-in-your-lab/technical-tools/", "/do-science/tools/technical/"] as const,
  ["/working-in-your-lab/analytical-tools/", "/do-science/tools/analytical/"] as const,
  ["/working-in-your-lab/transfer-tools/", "/do-science/tools/transfer/"] as const,
  ["/working-in-your-lab/workbench/", "/do-science/hunt-workbench/"] as const,
  ["/community/", "/do-science/community/"] as const,
  ["/troubleshooting/", "/do-science/troubleshooting/"] as const,
  ["/faq/", "/do-science/faq/"] as const,
  ["/certificates/", "/govern-science/compliance/certificates"] as const,
  ["/policies/", "/govern-science/policies/"] as const,
  ["/subcontractors/", "/govern-science/compliance/subcontractors"] as const,
  ["/responsibilities/", "/govern-science/risk-management/#clarification-of-responsibilities"] as const,
  ["/service-desk/", "/administer-science/service-desk/"] as const,
  ["/data-transfers/internal-kista/", "/do-science/data-transfers/internal-kista"] as const,
  ["/data-transfers/external-kista/", "/do-science/data-transfers/external-kista"] as const,
  ["/agreements/", "/administer-science/agreements/overview"] as const,
  ["/do-science/lab-access/configure-vpn/", "/do-science/lab/"] as const,
  ["/do-science/lab-access/2-configure-vpn/", "/do-science/lab/"] as const,
  ["/do-science/lab-access/configure-ssh/", "/do-science/lab/"] as const,
  ["/do-science/lab-access/3-configure-ssh/", "/do-science/lab/"] as const,
  ["/do-science/lab-access/configure-access/", "/do-science/lab/"] as const,
  ["/do-science/lab-access/2-configure-access", "/do-science/lab/"] as const,
  ["/do-science/guides/configure-ssh", "/do-science/guides/access-guides/reset-ssh"] as const,
  // ["", ""] as const,
  // ["", ""] as const,
].filter(
  item =>
    item && Array.isArray(item) && item[0] && item[1] && typeof item[0] === "string" && typeof item[1] === "string",
) // Filter assures there is 2 strings in each item in the array

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    router.onBeforeRouteChange = to => {
      // Redirect PDFs into assets to assure uploads of PDFs into assets repository
      if (to.startsWith("/assets/") && to.endsWith(".pdf")) {
        // NOTE Redirect PDF assets if not found - fails to redirect existing
        window.location.href = "https://assets.hdc.ntnu.no" + to
        return false // prevent the original navigation
      }

      // Redirect everytevery URIs that start with key (first item in the pair)
      redirectPrefixes.every(pair => {
        if (to.startsWith(pair[0])) {
          // Rewrite the link to correct path
          console.log(`Redirect: ${pair[0]} -> ${pair[1]}`)
          window.location.href = to.replace(pair[0], pair[1])
          return false
        } else {
          return true
        }
      })

      // Redirect specific URIs
      if (redirects[to]) {
        router.go(redirects[to])
        return false // prevent the original navigation
      }
    }

    // Handle redirects on initial page load
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname
      if (redirects[currentPath]) {
        window.location.pathname = redirects[currentPath]
      }
    }

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
    // Price estimator
    app.component("PriceEstimator", PriceEstimator)
    app.component("LabCard", LabCard)
    app.component("Machine", Machine)
    app.component("Storage", Storage)
    app.component("TotalBlock", TotalBlock)
  },
} satisfies Theme
