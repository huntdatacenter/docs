module.exports = {
  // https://v1.vuepress.vuejs.org/config/#title
  title: "HUNT Cloud Documentation",
  // https://v1.vuepress.vuejs.org/config/#description
  description: "HUNT Cloud Documentation",
  // https://v1.vuepress.vuejs.org/config/#dest
  dest: "public",
  // https://v1.vuepress.vuejs.org/config/#base
  base: "/",
  // https://v1.vuepress.vuejs.org/config/#head
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://www.ntnu.no/assets/images/favicon.ico"
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#00509e"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ]
  ],
  // https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#git-repo-and-edit-links
    repo: "https://gitlab.com/huntdatacenter/docs",
    repoLabel: "Contribute!",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Getting started",
        link: "/getting-started/"
      }
    ],
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    sidebar: {
      "/": [
        {
          title: "Home",
          collapsable: false,
          children: ["", "about", "contribute", "contact"]
        },
        {
          title: "Getting started",
          // collapsable: false,
          children: [
            "getting-started/",
            "getting-started/how-to-connect",
            "getting-started/faq"
          ]
        },
        {
          title: "Working in your lab",
          // collapsable: false,
          children: [
            "working-in-your-lab/",
            {
              title: "Technical tools",
              // collapsable: false,
              children: [
                "working-in-your-lab/technical-tools/",
                "working-in-your-lab/technical-tools/git",
                "working-in-your-lab/technical-tools/gpu",
                "working-in-your-lab/technical-tools/htop",
                "working-in-your-lab/technical-tools/mobaxterm",
                "working-in-your-lab/technical-tools/winscp",
                "working-in-your-lab/technical-tools/sshfs",
                "working-in-your-lab/technical-tools/winscp",
                "working-in-your-lab/technical-tools/x2go"
              ]
            },
            {
              title: "Analytical tools",
              // collapsable: false,
              children: [
                "working-in-your-lab/analytical-tools/",
                "working-in-your-lab/analytical-tools/matlab"
              ]
            }
          ]
        },
        {
          title: "Troubleshooting",
          // collapsable: false,
          children: ["troubleshooting/", "troubleshooting/connecting"]
        },
        {
          title: "FAQ",
          // collapsable: false,
          children: ["faq/", "faq/resources", "faq/users", "faq/software"]
        }
      ]
    }
  },
  // https://v1.vuepress.vuejs.org/plugin/
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/active-header-links",
    [
      "vuepress-plugin-sitemap",
      {
        hostname: "https://huntdatacenter.gitlab.io/docs/"
      }
    ]
  ]
};
