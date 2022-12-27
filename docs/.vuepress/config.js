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
    nav: [{
        text: "Home",
        link: "/"
      },
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
      "/do-science/": [
        "/do-science/getting-started/",
      ],
      "/administer-science/": [
        "/administer-science/"
      ],
      "/govern-science/": [
        "/govern-science/"
      ],
      "/": [
        "",
        "contact", 
        "system-status"
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
