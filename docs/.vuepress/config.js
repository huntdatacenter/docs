const prefixer = require('postcss-prefix-selector');

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
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      },
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
    nav: [
      {
        text: "Do science",
        link: "/do-science/"
      },
      {
        text: "Administer science",
        link: "/administer-science/"
      },
      {
        text: "Govern science",
        link: "/govern-science/"
      }
      ,
      {
        text: "About",
        link: "/about/"
      }
    ],
    navbar: [{
        text: "Home - test1",
        link: "/"
      },
      {
        text: "Getting started",
        link: "/getting-started/"
      }
    ],
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    sidebar: {
      "/do-science/": [{
        title: "Do science",
        text: "Do science",
        collapsable: false,
        isGroup: true,
        children: [
          {
            title: "Welcome",
            path: "/do-science/",
          },
          {
            title: "Back to main page",
            path: "/",
          }
          ]
        },
        {
          title: "Getting started",
          text: "Getting started",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/do-science/getting-started/"},
            "/do-science/getting-started/1-collect-keys.md",
            "/do-science/getting-started/2-configure-vpn.md",
            "/do-science/getting-started/3-configure-ssh.md",
          ]
        },
        {
          title: "HUNT Workbench",
          text: "HUNT Workbench",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/do-science/hunt-workbench/",},
            "/do-science/hunt-workbench/principles.md",
            "/do-science/hunt-workbench/installation.md",
            "/do-science/hunt-workbench/troubleshooting.md",
            "/do-science/hunt-workbench/faq.md",
          ]
        },
        {
        title: "Tools",
        text: "Tools",
        collapsable: true,
        isGroup: true,
        children: [
        {title: "Introduction",
        path: "/do-science/tools/",},
          {
            title: "Technical tools",
            text: "Technical tools",
            isGroup: true,
            children: [
              "/do-science/tools/technical-tools/client-certificate.md",
              "/do-science/tools/technical-tools/docker.md",
              "/do-science/tools/technical-tools/git.md",              
              "/do-science/tools/technical-tools/gpu.md",
              "/do-science/tools/technical-tools/htop.md",
              "/do-science/tools/technical-tools/mobaxterm.md",
              "/do-science/tools/technical-tools/ncdu.md",
              "/do-science/tools/technical-tools/singularity.md",
              "/do-science/tools/technical-tools/terminal-multiplexers.md",
              "/do-science/tools/technical-tools/vnc.md",
              "/do-science/tools/technical-tools/x2go.md",
            ]
          },
          {
            title: "Analytical tools",
            text: "Analytical  tools",
            isGroup: true,
            children: [
              "/do-science/tools/analytical-tools/bluebox.md",
              "/do-science/tools/analytical-tools/conda.md",
              "/do-science/tools/analytical-tools/epacts.md",
              "/do-science/tools/analytical-tools/fsl.md",
              "/do-science/tools/analytical-tools/freesurfer.md",
              "/do-science/tools/analytical-tools/jupyter-lab.md",
              "/do-science/tools/analytical-tools/matlab.md",
              "/do-science/tools/analytical-tools/plink.md",
              "/do-science/tools/analytical-tools/pycharm.md",
              "/do-science/tools/analytical-tools/r-studio.md",
              "/do-science/tools/analytical-tools/regenie.md",
              "/do-science/tools/analytical-tools/saige.md",
              "/do-science/tools/analytical-tools/spyder-ide.md",
              "/do-science/tools/analytical-tools/stata.md",
            ]
          },
          {
            title: "Transfer tools",
            text: "Transfer tools",
            isGroup: true,
            children: [
              "/do-science/tools/transfer-tools/7z.md",
              "/do-science/tools/transfer-tools/lftp.md",
              "/do-science/tools/transfer-tools/rsync.md",
              "/do-science/tools/transfer-tools/sshfs.md",
              "/do-science/tools/transfer-tools/winscp.md",
            ]
          },
        ]
        },       
        {
          title: "Guides",
          text: "Guides",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/do-science/guides/",},
            "/do-science/guides/workbench-stata.md",            
          ]
        },       
        {
          title: "Data transfers",
          text: "Data transfers",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/do-science/transfers/"},
            "/do-science/transfers/internal-kista.md",
            "/do-science/transfers/external-kista.md",
          ]
        },       
        {
          title: "Community",
          text: "Community",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/do-science/community/",},
            "/do-science/community/labting.md",
            "/do-science/community/digital-cafe.md",
          ]
        },       
        "/do-science/service-desk/",
          {
          title: "Troubleshooting",
          text: "Troubleshooting",
          collapsable: true,
          isGroup: true,
           children: [
           {title: "Introduction",
           path: "/do-science/troubleshooting/",},
           "/do-science/troubleshooting/connection.md",
           "/do-science/troubleshooting/lab-activities.md",
          ]
        },        {
          title: "FAQ",
          text: "FAQ",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/do-science/faq/",},
            "/do-science/faq/access.md",
            "/do-science/faq/compute.md",
            "/do-science/faq/storage.md",
            "/do-science/faq/internal-transfer.md",
            "/do-science/faq/external-transfer.md",
            "/do-science/faq/security.md",
          ]
        },
      ],
      "/administer-science/": [{
        title: "Administer science",
        text: "Administer science",
        collapsable: false,
        isGroup: true,
        children: [
          {
            title: "Welcome",
            path: "/administer-science/",
          },
          {
            title: "Introduction",
            path: "/administer-science/introduction.md",
          },
          {
            title: "Back to main page",
            path: "/",
          }
          ]
        },
        {
          title: "HUNT Lab",
          text: "HUNT Lab",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/administer-science/hunt-lab/"},
          ]
        },
        {
          title: "HUNT Dataspace",
          text: "HUNT Dataspace",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/administer-science/hunt-dataspace/"},
          ]
        },
        {
          title: "Get going",
          text: "Get going",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/administer-science/get-going/"},
            "/administer-science/get-going/lab.md",
            "/administer-science/get-going/data-space.md",
          ]
        },
        {
          title: "Agreements",
          text: "Agreements",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/administer-science/agreements/"},
            "/administer-science/agreements/overview.md",
            "/administer-science/agreements/downloads.md",

            "/administer-science/agreements/faq.md",
          ]
        },
        {
          title: "Services",
          text: "Services",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/administer-science/services/"},
            "/administer-science/services/overview.md",
            "/administer-science/services/specifications.md",

            "/administer-science/agreements/responsiveness.md",
          ]
        },
        {
          title: "Prices",
          text: "Prices",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/administer-science/prices/"},
            "/administer-science/prices/pricelist.md",
            "/administer-science/prices/calculator.md",
            "/administer-science/prices/examples.md",
            "/administer-science/prices/faq.md",
          ]
        },
        {
          title: "Service desk",
          text: "Service desk",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/administer-science/service-desk/"},
            "/administer-science/service-desk/lab-orders.md",
            "/administer-science/service-desk/data-space-orders.md",
          ]
        },       
       {
          title: "FAQ",
          text: "FAQ",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/administer-science/faq/"},
            "/administer-science/faq/user-management.md",
            "/administer-science/faq/faq.md",
            "/administer-science/faq/labreports.md",
          ]
        },
      ],
      "/govern-science/": [{
        title: "Govern science",
        text: "Govern science",
        collapsable: false,
        isGroup: true,
        children: [
          {
            title: "Welcome",
            path: "/govern-science/",
          },
          {
            title: "Introduction",
            path: "/govern-science/introduction.md",
          },
          {
            title: "Responsibilities",
            path: "/govern-science/responsibilities.md",
          },
          {
            title: "Back to main page",
            path: "/",
          }
          ]
        },
        {
          title: "Tingweek",
          text: "Tingweek",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/govern-science/tingweek/"},
            "/govern-science/tingweek/lagtun.md",
            "/govern-science/tingweek/datacontrollerting.md",
            "/govern-science/tingweek/dataspaceting.md",
            "/govern-science/tingweek/labting.md",
            "/govern-science/tingweek/resolutions.md",
            "/govern-science/tingweek/ting-dates.md",
            "/govern-science/tingweek/faq.md",
          ]
        },
        {
          title: "Policies",
          text: "Policies",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Security and privacy policies",
            path: "/govern-science/policies/"},
          ]
        },
        {
          title: "Compliance",
          text: "Compliance",
          collapsable: true,
          isGroup: true,
          children: [
            "/govern-science/compliance/certificates.md",
            "/govern-science/compliance/subcontractors.md"
          ]
        },
        {
          title: "Agreements",
          text: "Agreements",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/govern-science/agreements/"},
            "/govern-science/agreements/overview.md",
            "/govern-science/agreements/faq.md",            
          ]
        },
        {
          title: "Service desk",
          text: "Service desk",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/govern-science/service-desk/"},
            "/govern-science/service-desk/service-center-orders.md",
            "/govern-science/service-desk/data-controller-orders.md",
            ]
        },
        {
          title: "FAQ",
          text: "FAQ",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/govern-science/faq/"},
          ]
        },
      ],
      "/about/": [{
        title: "About HUNT Cloud",
        text: "About HUNT Cloud",
        collapsable: false,
        isGroup: true,
        children: [
          {
            title: "Welcome",
            path: "/about/",
   	  },
          {
            title: "Introduction",
            path: "/about/introduction.md",
          },
          {
            title: "Affiliation",
            path: "/about/affiliation.md",
          },
          {
            title: "Back to main page",
            path: "/",
          }
          ]
        },
        {
          title: "Team",
          text: "Team",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/about/team/"},
          ]
        },
        {
          title: "Values",
          text: "Values",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/about/values/"},
            "/about/values/vision.md",
          ]
        },
        {
          title: "Activities",
          text: "Activities",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/about/activities/"},
          ]
        },
        {
          title: "Art",
          text: "Art",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/about/art/"},
          ]
        },
        {
          title: "History",
          text: "History",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/about/history/"},
          ]
        },
        {
          title: "FAQ",
          text: "FAQ",
          collapsable: true,
          isGroup: true,
          children: [
            {title: "Introduction",
            path: "/about/faq/"},
          ]
        },
      ],      
      "/": [{
        title: "Home",
        text: "Home",
        path: "/",
        collapsable: false,
        isGroup: true,
        children: ["/",
        "/system-status.md",
        "/contact.md", 
        "/contribute.md",
        ]
        },
        {
        title: "Do science",
        path: "/do-science/",
        },
        {
        title: "Administer science",
        path: "/administer-science/",
        },
        {
        title: "Govern science",
        path: "/govern-science/",
        },
        {
        title: "About HUNT Cloud",
        path: "/about/",
        },        
      ]
   },
  },
  chainWebpack: (config) => {
    config.module.rule("images").use("url-loader").options({
      limit: 10000,
      esModule: false,
      name: `assets/img/[name].[hash:8].[ext]`,
    });
    // Patch for Vuetify CSS conflict: https://github.com/vuetifyjs/vuetify/issues/8530#issuecomment-680942337
    const sassRule = config.module.rule('sass');
    const sassNormalRule = sassRule.oneOfs.get('normal');
    // creating a new rule
    const vuetifyRule = sassRule.oneOf('vuetify').test(/[\\/]vuetify[\\/]src[\\/]/);
    // taking all uses from the normal rule and adding them to the new rule
    Object.keys(sassNormalRule.uses.entries()).forEach((key) => {
        vuetifyRule.uses.set(key, sassNormalRule.uses.get(key));
    });
    // moving rule "vuetify" before "normal"
    sassRule.oneOfs.delete('normal');
    sassRule.oneOfs.set('normal', sassNormalRule);
    // adding prefixer to the "vuetify" rule
    vuetifyRule.use('vuetify').loader(require.resolve('postcss-loader')).tap((options = {}) => {
        options.sourceMap = process.env.NODE_ENV !== 'production';
        options.plugins = [
            prefixer({
                prefix: '[data-vuetify]',
                transform(prefix, selector, prefixedSelector) {
                    let result = prefixedSelector;
                    if (selector.startsWith('html') || selector.startsWith('body')) {
                        result = prefix + selector.substring(4);
                    }
                    return result;
                },
            }),
        ];
        return options;
    });
    // moving sass-loader to the end
    vuetifyRule.uses.delete('sass-loader');
    vuetifyRule.uses.set('sass-loader', sassNormalRule.uses.get('sass-loader'));
  },
  // https://v1.vuepress.vuejs.org/plugin/
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/active-header-links",
    [
      "@mr-hope/sitemap", {
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
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return timestamp ? new Date(timestamp).toLocaleDateString() : timestamp;
        }
      }
    ]
  ]
};
