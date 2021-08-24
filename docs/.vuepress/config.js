module.exports = {
  // https://v1.vuepress.vuejs.org/config/#title
  // disabled when using logo
  title: null,
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
    // https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-logo
    logo: "/img/hunt-cloud-logo.svg",
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar
    // TODO remove nav key in vuepress 2
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Getting started",
        link: "/getting-started/"
      }
    ],
    navbar: [{
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
          text: "Home",
          isGroup: true,
          children: ["/",
            "/system-status.md",
            "/contribute.md",
            "/contact.md",
          ]
        },
        {
          title: "About",
          text: "About",
          isGroup: true,
          children: [
            "/about/ting-week.md",
            "/about/policies.md",
            "/about/certificates.md",
            "/about/activities.md",
            "/about/organization.md"
          ]
        },
        {
          title: "Coordination",
          text: "Coordination",
          isGroup: true,
          children: [
	    "/coordination/",
            "/coordination/services-model.md",
            "/coordination/roles.md",
            {
              title: "Compliance",
              text: "Compliance",
              isGroup: true,
              children: [
                "/coordination/compliance/overview.md",
		"/coordination/compliance/downloads.md",
                "/coordination/compliance/risks.md"
              ]
            },
            {
              title: "Services",
              text: "Services",
              isGroup: true,
              children: [
                "/coordination/services/overview.md",
                "/coordination/services/specifications.md",
                "/coordination/services/machine-types.md",
                "/coordination/services/responsiveness.md"
              ]
             },
            {
              title: "Prices",
              text: "Prices",
              isGroup: true,
              children: [
                "/coordination/prices/",
                "/coordination/prices/pricelist.md",
		"/coordination/prices/examples.md"
              ]
             }
           ]
         },
        {
          title: "Getting started",
          text: "Getting started",
          isGroup: true,
          children: [
            "/getting-started/",
            "/getting-started/1-collect-keys.md",
            "/getting-started/2-configure-vpn.md",
            "/getting-started/3-configure-ssh.md"
          ]
        },
        {
          title: "Working in your lab",
          text: "Working in your lab",
          isGroup: true,
          children: [
            "/working-in-your-lab/",
            {
              title: "Technical tools",
              text: "Technical tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/technical-tools/",
                "/working-in-your-lab/technical-tools/git.md",
                "/working-in-your-lab/technical-tools/gpu.md",
                "/working-in-your-lab/technical-tools/htop.md",
                "/working-in-your-lab/technical-tools/mobaxterm.md",
                "/working-in-your-lab/technical-tools/ncdu.md",
                "/working-in-your-lab/technical-tools/singularity.md",
                "/working-in-your-lab/technical-tools/ssl.md",
                "/working-in-your-lab/technical-tools/terminal-multiplexers.md",
                "/working-in-your-lab/technical-tools/vnc.md",
                "/working-in-your-lab/technical-tools/x2go.md"
              ]
            },
            {
              title: "Analytical tools",
              text: "Analytical tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/analytical-tools/",
                "/working-in-your-lab/analytical-tools/bluebox.md",
                "/working-in-your-lab/analytical-tools/conda.md",
                "/working-in-your-lab/analytical-tools/epacts.md",
                "/working-in-your-lab/analytical-tools/fsl.md",
                "/working-in-your-lab/analytical-tools/freesurfer.md",
                "/working-in-your-lab/analytical-tools/jupyter-lab.md",
                "/working-in-your-lab/analytical-tools/matlab.md",
                "/working-in-your-lab/analytical-tools/plink.md",
                "/working-in-your-lab/analytical-tools/pycharm.md",
                "/working-in-your-lab/analytical-tools/r-studio.md",
                "/working-in-your-lab/analytical-tools/regenie.md",
                "/working-in-your-lab/analytical-tools/saige.md",
                "/working-in-your-lab/analytical-tools/spyder-ide.md",
                "/working-in-your-lab/analytical-tools/stata.md"
              ]
            },
            {
              title: "Transfer tools",
              text: "Transfer tools",
              isGroup: true,
              children: [
                "/working-in-your-lab/transfer-tools/",
                "/working-in-your-lab/transfer-tools/7z.md",
                "/working-in-your-lab/transfer-tools/rsync.md",
                "/working-in-your-lab/transfer-tools/sshfs.md",
                "/working-in-your-lab/transfer-tools/winscp.md"
              ]
            }
          ]
        },
        {
          title: "Data transfers",
          text: "Data transfers",
          isGroup: true,
          children: [
            "/data-transfers/",
            "/data-transfers/internal-kista.md",
            "/data-transfers/external-kista.md"
          ]
        },
        {
          title: "Troubleshooting",
          text: "Troubleshooting",
          isGroup: true,
          children: [
            "/troubleshooting/",
            "/troubleshooting/connection.md",
            "/troubleshooting/compute.md",
            "/troubleshooting/labreports.md"
          ]
        },
        {
          title: "FAQ",
          text: "FAQ",
          isGroup: true,
          children: [
            "/faq/",
            "/faq/users.md",
            "/faq/storage.md",
            "/faq/compute.md",
            "/faq/internal-transfer.md",
            "/faq/external-transfer.md",
            "/faq/security.md",
            "/faq/upgrade-of-operating-system.md"
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
        // siteTitle: (_, $site) => $site.title,
        title: $page => $page.frontmatter.category ? ($page.frontmatter.category + ': ' + $page.title) : $page.title,
        description: $page => $page.frontmatter.description,
        twitterCard: _ => 'summary',
        type: $page => [
          'getting-started', 'working-in-your-lab', 'data-transfer'
        ].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || 'https://docs.hdc.ntnu.no') + path,
        customMeta: (add, context) => {
          const {
            $site, // Site configs provided by Vuepress
            $page, // Page configs provided by Vuepress

            // All the computed options from above:
            // siteTitle,
            title, description, type, url,
          } = context

          add('twitter:label1', ($page.readingTime && type === 'article') ? 'Reading time' : null)
          add('twitter:data1', ($page.readingTime && type === 'article') ? '🕑 ' + $page.readingTime.text : null)
          add('twitter:label2', type === 'article' ? 'Latest updates' : null)
          add('twitter:data2', type === 'article' ? 'https://docs.hdc.ntnu.no/news/' : null)
        },
      }
    ]
  ]
};
