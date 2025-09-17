import { defineConfig, type HeadConfig } from "vitepress"

// https://vitepress.vuejs.org/config/app-configs#head
const customHead: HeadConfig[] = [
  ["link", { rel: "shortcut icon", href: "https://www.ntnu.no/assets/images/favicon.ico", sizes: "any" }],

  ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],

  ["meta", { name: "author", content: "HUNT Cloud" }],
  ["meta", { name: "keywords", content: "HUNT Cloud,documentation,service desk" }],

  ["meta", { name: "theme-color", content: "#00509e" }],
  ["meta", { name: "mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }], // DEPRECATED
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["meta", { name: "msapplication-TileColor", content: "#00509e" }],

  // ["meta", { rel: "stylesheet", type: "text/css", href: "/css/custom.css", sizes: "any" }],
  // [
  //   "meta",
  //   {
  //     rel: "stylesheet",
  //     href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
  //     sizes: "any",
  //   },
  // ],

  ["link", { rel: "icon", type: "image/svg+xml", href: "/img/hunt-cloud-logo.svg", sizes: "any" }],
  ["link", { rel: "mask-icon", type: "image/svg+xml", href: "/img/hunt-cloud-logo.svg", color: "#00509e" }],
  // ["script", { src: "https://plausible.io/js/script.file-downloads.hash.outbound-links.tagged-events.js", 'data-domain': "hdc.ntnu.no", defer: "" }],
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HUNT Cloud documentation",
  description: "HUNT Cloud Documentation",
  lang: "en-US",

  // base: "",
  outDir: "../build",
  // appearance: false,
  // appearance: 'light',
  cleanUrls: true,

  head: customHead,

  themeConfig: {
    // siteTitle: false,
    logo: "/img/hunt-cloud-logo.svg",

    // https://vitepress.dev/reference/default-theme-config
    nav: navigationMenu(),

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
})

function navigationMenu() {
  return [
    { text: "Home", link: "/" },
    { text: "Examples", link: "/markdown-examples" },
  ]
}
