const prefixer = require("postcss-prefix-selector");
const { getSlug, getTitle } = require("./customUtils.js");

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
        href: "https://www.ntnu.no/assets/images/favicon.ico",
      },
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
        content: "#00509e",
      },
    ],
    [
      "meta",
      {
        name: "mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
  ],
  // https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#git-repo-and-edit-links
    // repo: "https://github.com/huntdatacenter/docs",
    // repoLabel: "Contribute!",
    docsDir: "docs",
    editLinks: false,
    editLinkText: "Help us improve this page!",
    lastUpdated: true,
    // https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-logo
    logo: "/img/hunt-cloud-logo.svg",
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#built-in-search
    searchMaxSuggestions: 8,
    // searchPlaceholder: 'Search...',
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar
    // TODO remove nav key in vuepress 2
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Do science",
        link: "/do-science/",
      },
      {
        text: "Administer science",
        link: "/administer-science/",
      },
      {
        text: "Govern science",
        link: "/govern-science/",
      },
      {
        text: "About",
        link: "/about/",
      },
    ],
    // Necessary for lab access redirect
    navbar: [
      {
        text: "Lab access",
        link: "/lab-access/",
      },
    ],
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    sidebar: {
      "/do-science/": [
        {
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
              title: "System status",
              path: "/do-science/system-status.md",
            },
            {
              title: "Contact",
              path: "/do-science/contact.md",
            },
            {
              title: "Patch notes",
              path: "/do-science/patch-notes.md",
            },
            {
              title: "Privacy statement",
              path: "/do-science/privacy-statement.md",
            },
            {
              title: "Contribute",
              path: "/do-science/contribute.md",
            },
          ],
        },
        "/do-science/service-desk/",
        {
          title: "Lab access",
          text: "Lab access",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/do-science/lab-access/",
            },
            "/do-science/lab-access/1-collect-keys.md",
            "/do-science/lab-access/2-configure-access.md",
            "/do-science/lab-access/for-it-support-personnel.md",
            // "/do-science/lab-access/3-configure-ssh.md",
          ],
        },
        {
          title: "HUNT Workbench",
          text: "HUNT Workbench",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/do-science/hunt-workbench/",
            },
            "/do-science/hunt-workbench/principles.md",
            "/do-science/hunt-workbench/installation.md",
            {
              title: "Getting started",
              text: "Getting started",
              collapsable: true,
              isGroup: true,
              // Open main page on first click
              path: "/do-science/hunt-workbench/getting-started/",
              children: [
                "/do-science/hunt-workbench/getting-started/1-jupyterlab.md",
                "/do-science/hunt-workbench/getting-started/2-conda.md",
                "/do-science/hunt-workbench/getting-started/3-data.md",
                {
                  title: "Tooling",
                  text: "Tooling",
                  collapsable: true,
                  isGroup: true,
                  children: [
                    "/do-science/hunt-workbench/getting-started/4-python.md",
                    "/do-science/hunt-workbench/getting-started/5-rstudio.md",
                    "/do-science/hunt-workbench/getting-started/6-matlab.md",
                    "/do-science/hunt-workbench/getting-started/7-stata.md",
                    "/do-science/hunt-workbench/getting-started/8-julia.md",
                    "/do-science/hunt-workbench/getting-started/9-vscode.md",
                    "/do-science/hunt-workbench/getting-started/10-remote-desktop.md",
                  ],
                },
                {
                  title: "Backgrounds",
                  text: "Backgrounds",
                  collapsable: true,
                  isGroup: true,
                  children: [
                    "/do-science/hunt-workbench/getting-started/backgrounds/statistics.md",
                    "/do-science/hunt-workbench/getting-started/backgrounds/genomics.md",
                    "/do-science/hunt-workbench/getting-started/backgrounds/annotations.md",
                    "/do-science/hunt-workbench/getting-started/backgrounds/engineering.md",
                  ],
                },
              ],
            },
            "/do-science/hunt-workbench/troubleshooting.md",
            "/do-science/hunt-workbench/faq.md",
          ],
        },
        {
          title: "Tools",
          text: "Tools",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/do-science/tools/",
            },
            {
              title: "Technical tools",
              text: "Technical tools",
              isGroup: true,
              path: "/do-science/tools/technical/",
              children: [
                "/do-science/tools/technical/docker.md",
                "/do-science/tools/technical/git.md",
                "/do-science/tools/technical/gpu.md",
                {
                  title: "Cuda",
                  text: "Cuda",
                  // path: "/do-science/tools/technical/cuda/",
                  isGroup: true,
                  children: [
                    "/do-science/tools/technical/cuda/",
                    "/do-science/tools/technical/cuda/cuda-11.8.md",
                    "/do-science/tools/technical/cuda/cuda-12.1.md",
                    "/do-science/tools/technical/cuda/cuda-12.4.md",
                    "/do-science/tools/technical/cuda/cuda-12.8.md",
                  ],
                },
                "/do-science/tools/technical/htop.md",
                "/do-science/tools/technical/mobaxterm.md",
                "/do-science/tools/technical/ncdu.md",
                "/do-science/tools/technical/postgresql.md",
                "/do-science/tools/technical/apptainer.md",
                "/do-science/tools/technical/terminal-multiplexers.md",
                "/do-science/tools/technical/vnc.md",
                "/do-science/tools/technical/x2go.md",
                "/do-science/tools/technical/vscode.md",
                "/do-science/tools/technical/rdp.md",
              ],
            },
            {
              title: "Analytical tools",
              text: "Analytical tools",
              isGroup: true,
              path: "/do-science/tools/analytical/",
              children: [
                "/do-science/tools/analytical/bluebox.md",
                "/do-science/tools/analytical/conda.md",
                "/do-science/tools/analytical/epacts.md",
                "/do-science/tools/analytical/fsl.md",
                "/do-science/tools/analytical/freesurfer.md",
                "/do-science/tools/analytical/jupyter-lab.md",
                "/do-science/tools/analytical/matlab.md",
                "/do-science/tools/analytical/plink.md",
                "/do-science/tools/analytical/pycharm.md",
                "/do-science/tools/analytical/r-studio.md",
                "/do-science/tools/analytical/regenie.md",
                "/do-science/tools/analytical/saige.md",
                "/do-science/tools/analytical/spyder-ide.md",
                "/do-science/tools/analytical/stata.md",
                "/do-science/tools/analytical/itksnap.md",
              ],
            },
            {
              title: "Transfer tools",
              text: "Transfer tools",
              isGroup: true,
              path: "/do-science/tools/transfer/",
              children: [
                "/do-science/tools/transfer/7z.md",
                "/do-science/tools/transfer/lftp.md",
                "/do-science/tools/transfer/rsync.md",
                "/do-science/tools/transfer/sshfs.md",
                "/do-science/tools/transfer/winscp.md",
                "/do-science/tools/transfer/cyberduck.md",
                "/do-science/tools/transfer/azcopy.md",
                "/do-science/tools/transfer/gsutil.md",
              ],
            },
          ],
        },
        {
          title: "Guides",
          text: "Guides",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/do-science/guides/",
            },
            "/do-science/guides/workbench-stata.md",
            "/do-science/guides/welcome-back.md",
            {
              title: "Access guides",
              text: "Access guides",
              isGroup: true,
              children: [
                "/do-science/guides/access-guides/new-computer.md",
                "/do-science/guides/access-guides/reset-vpn.md",
                "/do-science/guides/access-guides/reset-gauth.md",
                "/do-science/guides/access-guides/reset-ssh.md",
                "/do-science/guides/access-guides/workbench-request.md",
                "/do-science/guides/access-guides/workbench-reissue.md",
                "/do-science/guides/access-guides/reset-ssh-workbench.md",
                "/do-science/guides/access-guides/vpn-configuration.md",
                "/do-science/guides/access-guides/ssh-configuration.md",
                "/do-science/guides/access-guides/keka.md",
              ],
            },
          ],
        },
        {
          title: "Data transfers",
          text: "Data transfers",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/do-science/transfers/",
            },
            "/do-science/transfers/internal-kista.md",
            "/do-science/transfers/external-kista.md",
          ],
        },
        {
          title: "Community",
          text: "Community",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/do-science/community/",
            },
            "/do-science/community/freedom-to-explore.md",
            "/do-science/community/labting.md",
            "/do-science/community/current-consent.md",
            "/do-science/community/consent-information.md",
            ]
        },
        {
          title: "Troubleshooting",
          text: "Troubleshooting",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/do-science/troubleshooting/",
            },
            "/do-science/troubleshooting/connection.md",
            "/do-science/troubleshooting/lab-activities.md",
          ],
        },
        {
          title: "FAQ",
          text: "FAQ",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/do-science/faq/",
            },
            "/do-science/faq/access.md",
            "/do-science/faq/compute.md",
            "/do-science/faq/storage.md",
            "/do-science/faq/internal-transfer.md",
            "/do-science/faq/external-transfer.md",
            "/do-science/faq/security.md",
            "/do-science/faq/migration.md",
          ],
        },
      ],
      "/administer-science/": [
        {
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
              title: "Roles",
              path: "/administer-science/roles.md",
            },
            {
              title: "System status",
              path: "/administer-science/system-status.md",
            },
            {
              title: "Contact",
              path: "/administer-science/contact.md",
            },
            {
              title: "Patch notes",
              path: "/administer-science/patch-notes.md",
            },
            {
              title: "Privacy statement",
              path: "/administer-science/privacy-statement.md",
            },
            {
              title: "Contribute",
              path: "/administer-science/contribute.md",
            },
          ],
        },
        {
          title: "Service desk",
          text: "Service desk",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/administer-science/service-desk/",
            },
            "/administer-science/service-desk/lab-orders.md",
            "/administer-science/service-desk/data-space-orders.md",
          ],
        },
        // {
        //   title: "HUNT Lab",
        //   text: "HUNT Lab",
        //   collapsable: true,
        //   isGroup: true,
        //   children: [
        //     {
        //       title: "Introduction",
        //       path: "/administer-science/hunt-lab/"
        //     },
        //   ]
        // },
        // {
        //   title: "HUNT Dataspace",
        //   text: "HUNT Dataspace",
        //   collapsable: true,
        //   isGroup: true,
        //   children: [
        //     {
        //       title: "Introduction",
        //       path: "/administer-science/hunt-dataspace/"
        //     },
        //   ]
        // },
        {
          title: "Scientific access",
          text: "Scientific access",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/administer-science/scientific-access/",
            },
            "/administer-science/scientific-access/faq.md",
          ],
        },
        {
          title: "Agreements",
          text: "Agreements",
          collapsable: true,
          isGroup: true,
          children: [
            // {
            //   title: "Introduction",
            //   path: "/administer-science/agreements/"
            // },
            "/administer-science/agreements/overview.md",
            "/administer-science/agreements/downloads.md",
            "/administer-science/agreements/faq.md",
          ],
        },
        {
          title: "Services",
          text: "Services",
          collapsable: true,
          isGroup: true,
          children: [
            // {
            //   title: "Introduction",
            //   path: "/administer-science/services/"
            // },
            "/administer-science/services/",
            "/administer-science/services/overview.md",
            "/administer-science/services/specifications.md",
            "/administer-science/services/machine-types.md",
            "/administer-science/services/responsiveness.md",
          ],
        },
        {
          title: "Prices",
          text: "Prices",
          collapsable: true,
          isGroup: true,
          children: [
            "/administer-science/prices/",
            "/administer-science/prices/overview.md",
            "/administer-science/prices/pricelist.md",
            "/administer-science/prices/calculator.md",
            "/administer-science/prices/examples.md",
            "/administer-science/prices/faq.md",
          ],
        },
        {
          title: "Data",
          text: "Data",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/administer-science/data/",
            },
            {
              title: "Tape archive",
              text: "Tape archive",
              isGroup: true,
              children: [
                "/administer-science/data/introduction.md",
                "/administer-science/data/technical-guide.md",
              ],
            },
            "/administer-science/data/faq.md",
          ],
        },
        {
          title: "FAQ",
          text: "FAQ",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/administer-science/faq/",
            },
            "/administer-science/faq/lab-faq.md",
            "/administer-science/faq/compliance-faq.md",
            "/administer-science/faq/finance-faq.md",
            "/administer-science/faq/data-faq.md",
            "/administer-science/faq/tech-faq.md",
            "/administer-science/faq/training-faq.md",
          ],
        },
      ],
      "/govern-science/": [
        {
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
              title: "Accountability",
              path: "/govern-science/accountability.md",
            },
            {
              title: "System status",
              path: "/govern-science/system-status.md",
            },
            {
              title: "Contact",
              path: "/govern-science/contact.md",
            },
            {
              title: "Patch notes",
              path: "/govern-science/patch-notes.md",
            },
            {
              title: "Privacy statement",
              path: "/govern-science/privacy-statement.md",
            },
            {
              title: "Contribute",
              path: "/govern-science/contribute.md",
            },
          ],
        },
        {
          title: "Organizational access",
          text: "Organizational access",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/govern-science/organizational-access/",
            },
            "/govern-science/organizational-access/data-processor-agreement.md",
            "/govern-science/organizational-access/service-center-agreement.md",
            "/govern-science/organizational-access/faq.md",
          ],
        },
        {
          title: "Tingweek",
          text: "Tingweek",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/govern-science/tingweek/",
            },
            "/govern-science/tingweek/lagtun.md",
            "/govern-science/tingweek/resolutions.md",
            "/govern-science/tingweek/dates.md",
            "/govern-science/tingweek/faq.md",
          ],
        },
        {
          title: "Policies",
          text: "Policies",
          collapsable: true,
          isGroup: true,
          children: [
            "/govern-science/policies/",
          ],
        },
        {
          title: "Compliance",
          text: "Compliance",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/govern-science/compliance/",
            },
            "/govern-science/compliance/certificates.md",
            "/govern-science/compliance/subcontractors.md",
            "/govern-science/compliance/faq.md",
          ],
        },
        {
          title: "Risk management",
          text: "Risk management",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/govern-science/risk/",
            },
            "/govern-science/risk/resources.md",
            "/govern-science/risk/faq.md",
          ],
        },
        {
          title: "Service desk",
          text: "Service desk",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/govern-science/service-desk/",
            },
            "/govern-science/service-desk/service-center-orders.md",
            "/govern-science/service-desk/data-controller-orders.md",
          ],
        },
        {
          title: "FAQ",
          text: "FAQ",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/govern-science/faq/",
            },
          ],
        },
      ],
      "/about/": [
        {
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
              title: "Affiliation",
              path: "/about/affiliation.md",
            },
            {
              title: "Contact",
              path: "/about/contact.md",
            },
          ],
        },
        {
          title: "Team",
          text: "Team",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/about/team/",
            },
          ],
        },
        // {
        //   title: "Values",
        //   text: "Values",
        //   collapsable: true,
        //   isGroup: true,
        //   children: [
        //     {
        //       title: "Introduction",
        //       path: "/about/values/"
        //     },
        //     "/about/values/vision.md",
        //   ]
        // },
        // {
        //   title: "Activities",
        //   text: "Activities",
        //   collapsable: true,
        //   isGroup: true,
        //   children: [
        //     {
        //       title: "Introduction",
        //       path: "/about/activities/"
        //     },
        //   ]
        // },
        {
          title: "Illustrations",
          text: "Illustrations",
          collapsable: true,
          isGroup: true,
          children: [
            {
              title: "Introduction",
              path: "/about/illustrations/",
            },
            {
              title: "Scenery",
              path: "/about/illustrations/scenery.md",
            },
            {
              title: "Objects",
              path: "/about/illustrations/objects.md",
            },
            {
              title: "Characters",
              path: "/about/illustrations/characters.md",
            },
            {
              title: "FAQ",
              path: "/about/illustrations/faq.md",
            },
          ],
        },
        // {
        //   title: "History",
        //   text: "History",
        //   collapsable: true,
        //   isGroup: true,
        //   children: [
        //     {
        //       title: "Introduction",
        //       path: "/about/history/"
        //     },
        //   ]
        // },
        // {
        //   title: "FAQ",
        //   text: "FAQ",
        //   collapsable: true,
        //   isGroup: true,
        //   children: [
        //     {
        //       title: "Introduction",
        //       path: "/about/faq/"
        //     },
        //   ]
        // },
      ],
      "/ipv4/": [
        {
          title: "IP Address",
          path: "/ipv4/",
        },
      ],
      "/": [
        {
          title: "Home",
          text: "Home",
          path: "/",
          collapsable: false,
          isGroup: true,
          children: ["/", "/system-status.md", "/contact.md", "/contribute.md"],
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
      ],
    },
  },
  chainWebpack: config => {
    config.module.rule("images").use("url-loader").options({
      limit: 10000,
      esModule: false,
      name: `assets/img/[name].[hash:8].[ext]`,
    });
    // Patch for Vuetify CSS conflict: https://github.com/vuetifyjs/vuetify/issues/8530#issuecomment-680942337
    const sassRule = config.module.rule("sass");
    const sassNormalRule = sassRule.oneOfs.get("normal");
    // creating a new rule
    const vuetifyRule = sassRule.oneOf("vuetify").test(/[\\/]vuetify[\\/]src[\\/]/);
    // taking all uses from the normal rule and adding them to the new rule
    Object.keys(sassNormalRule.uses.entries()).forEach(key => {
      vuetifyRule.uses.set(key, sassNormalRule.uses.get(key));
    });
    // moving rule "vuetify" before "normal"
    sassRule.oneOfs.delete("normal");
    sassRule.oneOfs.set("normal", sassNormalRule);
    // adding prefixer to the "vuetify" rule
    vuetifyRule
      .use("vuetify")
      .loader(require.resolve("postcss-loader"))
      .tap((options = {}) => {
        options.sourceMap = process.env.NODE_ENV !== "production";
        options.plugins = [
          prefixer({
            prefix: "[data-vuetify]",
            transform(prefix, selector, prefixedSelector) {
              let result = prefixedSelector;
              if (selector.startsWith("html") || selector.startsWith("body")) {
                result = prefix + selector.substring(4);
              }
              return result;
            },
          }),
        ];
        return options;
      });
    // moving sass-loader to the end
    vuetifyRule.uses.delete("sass-loader");
    vuetifyRule.uses.set("sass-loader", sassNormalRule.uses.get("sass-loader"));
  },
  // https://v1.vuepress.vuejs.org/plugin/
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/active-header-links",
    [
      "@mr-hope/sitemap",
      {
        hostname: "https://docs.hdc.ntnu.no",
      },
    ],
    [
      "vuepress-plugin-reading-time",
      {
        excludes: ["/about", "/system-status", "/contribute", "/contact", "/faq"],
      },
    ],
    // Expander title examples
    // ::: expander Custom title
    // ::: expander "Custom title" id="1-custom-url-slug"
    [
      'vuepress-plugin-container',
      {
        type: 'expander',
        before: title => `<details class="custom-block expander" id="${getSlug(title)}"><summary><a href="#${getSlug(title)}" class="header-anchor" onclick='document.querySelector("#${getSlug(title)}").setAttribute("open", "")'>#</a> ${getTitle(title)}</summary>`,
        after: '</details>',
      },
    ],
    [
      "seo",
      {
        // siteTitle: (_, $site) => $site.title,
        title: $page => ($page.frontmatter.category ? $page.frontmatter.category + ": " + $page.title : $page.title),
        description: $page => $page.frontmatter.description,
        twitterCard: _ => "summary",
        type: $page => (["lab-access", "tools", "working-in-your-lab", "data-transfers"].some(folder => $page.regularPath.startsWith(`/do-science/${folder}`)) ? "article" : "website"),
        url: (_, $site, path) => ($site.themeConfig.domain || "https://docs.hdc.ntnu.no") + path,
        customMeta: (add, context) => {
          const {
            $site, // Site configs provided by Vuepress
            $page, // Page configs provided by Vuepress

            // All the computed options from above:
            // siteTitle,
            title,
            description,
            type,
            url,
          } = context;

          add("twitter:label1", $page.readingTime && type === "article" ? "Reading time" : null);
          add("twitter:data1", $page.readingTime && type === "article" ? "🕑 " + $page.readingTime.text : null);
          add("twitter:label2", type === "article" ? "Latest updates" : null);
          add("twitter:data2", type === "article" ? "https://docs.hdc.ntnu.no/news/" : null);
        },
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return timestamp ? new Date(timestamp).toLocaleDateString() : timestamp;
        },
      },
    ],
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html",
      },
    ],
  ],
};
