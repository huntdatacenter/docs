module.exports = {
  // https://v1.vuepress.vuejs.org/config/#title
  title: "HUNT Cloud Documentation",
  // https://v1.vuepress.vuejs.org/config/#description
  description: "HUNT Cloud Documentation",
  // https://v1.vuepress.vuejs.org/config/#dest
  dest: "build",
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
    repo: "https://github.com/huntdatacenter/docs",
    repoLabel: "Contribute!",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar
    nav: [{
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
      "/": [{
          title: "Home",
          collapsable: false,
          children: ["",
            "system-status",
            "contribute",
            "contact"
          ]
        },
        {
          title: "About",
          // collapsable: false,
          children: [
            "about/",
            "about/news",
            "about/agreements"
          ]
        },
        {
          title: "Getting started",
          // collapsable: false,
          children: [
            "getting-started/",
            "getting-started/1-collect-keys.md",
            "getting-started/2-configure-vpn.md",
            "getting-started/3-configure-ssh.md"
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
                "working-in-your-lab/technical-tools/terminal-multiplexers",
                "working-in-your-lab/technical-tools/x2go"
              ]
            },
            {
              title: "Analytical tools",
              // collapsable: false,
              children: [
                "working-in-your-lab/analytical-tools/",
                "working-in-your-lab/analytical-tools/bluebox",
                "working-in-your-lab/analytical-tools/conda",
                "working-in-your-lab/analytical-tools/epacts",
                "working-in-your-lab/analytical-tools/fsl",
                "working-in-your-lab/analytical-tools/freesurfer",
                "working-in-your-lab/analytical-tools/jupyter-lab",
                "working-in-your-lab/analytical-tools/matlab",
                "working-in-your-lab/analytical-tools/plink",
                "working-in-your-lab/analytical-tools/r-studio",
                "working-in-your-lab/analytical-tools/saige",
                "working-in-your-lab/analytical-tools/spyder-ide",
                "working-in-your-lab/analytical-tools/stata"
              ]
            },
            {
              title: "Transfer tools",
              // collapsable: false,
              children: [
                "working-in-your-lab/transfer-tools/",
                "working-in-your-lab/transfer-tools/7z",
                "working-in-your-lab/transfer-tools/sshfs",
                "working-in-your-lab/transfer-tools/winscp"
              ]
            }
          ]
        },
        {
          title: "Data transfer",
          // collapsable: false,
          children: [
            "data-transfer/",
            "data-transfer/internal-kista.md",
            "data-transfer/external-kista.md"
          ]
        },
        {
          title: "Troubleshooting",
          // collapsable: false,
          children: [
            "troubleshooting/",
            "troubleshooting/connection",
            "troubleshooting/compute",
            "troubleshooting/labreports"
          ]
        },
        {
          title: "FAQ",
          // collapsable: false,
          children: [
            "faq/",
            "faq/users",
            "faq/storage",
            "faq/compute",
            "faq/transfer",
            "faq/internal-transfer",
            "faq/external-transfer",
            "faq/security"
          ]
        }
      ]
    }
  },
  // https://v1.vuepress.vuejs.org/plugin/
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/active-header-links",
    [
      "vuepress-plugin-container", {
        type: "details",
        defaultTitle: "DETAILS",
        before: info =>
          `<details class="custom-block details">${
            info ? `<summary>${info}</summary><p>` : "<p>"
          }\n`,
        after: "</p></details>"
      }
    ],
    [
      "vuepress-plugin-sitemap", {
        hostname: "https://docs.hdc.ntnu.no"
      }
    ],
    [
      "vuepress-plugin-reading-time", {
        excludes: ['/about', '/system-status', '/contribute', '/contact', '/faq']
      }
    ],
    [
      "seo", {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.frontmatter.category ? ($page.frontmatter.category + ': ' + $page.title) : $page.title,
        description: $page => $page.frontmatter.description,
        type: $page => ['getting-started', 'working-in-your-lab', 'data-transfer'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || 'https://docs.hdc.ntnu.no') + path,
        customMeta: (add, context) => {
          const {
            $site, // Site configs provided by Vuepress
            $page, // Page configs provided by Vuepress

            // All the computed options from above:
            siteTitle, title, description, type, url,
          } = context

          add('twitter:label1', 'Updates')
          add('twitter:data1', '<https://docs.hdc.ntnu.no/about/news/|Cloud news>')
          add('twitter:label2', $page.readingTime ? 'Reading time' : null)
          add('twitter:data2', $page.readingTime ? $page.readingTime.text + ' 🕑' : null)
        },
      }
    ]
  ]
};
