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
  // NOTE -- roboto font is used in custom components
  [
    "meta",
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      sizes: "any",
    },
  ],

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
  appearance: false,
  // appearance: 'light',
  cleanUrls: true,

  head: customHead,

  themeConfig: {
    siteTitle: false,
    logo: "/img/hunt-cloud-logo.svg",

    outline: {
      level: 2,
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: navigationMenu(),

    sidebar: {
      "/": sidebarCommon(),
      "/do-science/": sidebarDoScience(),
      "/administer-science/": sidebarAdministerScience(),
      "/govern-science/": sidebarGovernScience(),
      "/about/": sidebarAbout(),
      "/ipv4/": [
        {
          text: "IP Address",
          link: "/ipv4/",
        },
      ],
    },

    // socialLinks: [
    //   { icon: "linkedin", link: "https://www.linkedin.com/company/huntcloud/" },
    // ],

    // NOTE: https://vitepress.dev/reference/default-theme-search
    search: {
      provider: "local",
    },
  },

  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
})

function navigationMenu() {
  return [
    { text: "Home", link: "/" },
    { text: "Do science", link: "/do-science/" },
    { text: "Administer science", link: "/administer-science/" },
    { text: "Govern science", link: "/govern-science/" },
    { text: "About", link: "/about/" },
  ]
}

function sidebarCommon() {
  return [
    {
      text: "Home",
      link: "/",
      items: [
        {
          text: "Welcome",
          link: "/do-science/",
        },
        {
          text: "System status",
          link: "/do-science/system-status/",
        },
        {
          text: "Contact",
          link: "/do-science/contact",
        },
        {
          text: "Patch notes",
          link: "/do-science/patch-notes",
        },
        {
          text: "Privacy statement",
          link: "/do-science/privacy-statement",
        },
        {
          text: "Contribute",
          link: "/do-science/contribute",
        },
        { text: "Do science", link: "/do-science/" },
        { text: "Administer science", link: "/administer-science/" },
        { text: "Govern science", link: "/govern-science/" },
        { text: "About", link: "/about/" },
      ],
    },
  ]
}

function sidebarDoScience() {
  return [
    {
      text: "Do science",
      collapsed: false,
      items: [
        {
          text: "Welcome",
          link: "/do-science/",
        },
        {
          text: "System status",
          link: "/do-science/system-status/",
        },
        {
          text: "Contact",
          link: "/do-science/contact",
        },
        {
          text: "Patch notes",
          link: "/do-science/patch-notes",
        },
        {
          text: "Privacy statement",
          link: "/do-science/privacy-statement",
        },
        {
          text: "Contribute",
          link: "/do-science/contribute",
        },
      ],
    },
    {
      text: "Service desk",
      link: "/do-science/service-desk/",
    },
    {
      text: "Lab access",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/do-science/lab-access/",
        },
        {
          text: "1. Collect your keys",
          link: "/do-science/lab-access/1-collect-keys",
        },
        {
          text: "2. Configure access",
          link: "/do-science/lab-access/2-configure-access",
        },
        {
          text: "For IT support",
          link: "/do-science/lab-access/for-it-support-personnel",
        },
        // {
        //   text: "3. Configure SSH",
        //   link: "/do-science/lab-access/3-configure-ssh",
        // },
      ],
    },
    // {
    //   text: "",
    //   link: "",
    // },
    {
      text: "HUNT Workbench",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/do-science/hunt-workbench/",
        },
        {
          text: "Principles",
          link: "/do-science/hunt-workbench/principles",
        },
        {
          text: "Instalation",
          link: "/do-science/hunt-workbench/installation",
        },
        {
          text: "Getting started",
          collapsed: true,
          // Open main page on first click
          link: "/do-science/hunt-workbench/getting-started/",
          items: [
            {
              text: "JupyterLab",
              link: "/do-science/hunt-workbench/getting-started/1-jupyterlab",
            },

            {
              text: "Conda (Workbench)",
              link: "/do-science/hunt-workbench/getting-started/2-conda",
            },

            {
              text: "Data",
              link: "/do-science/hunt-workbench/getting-started/3-data",
            },
            {
              text: "Tooling",
              collapsed: true,
              items: [
                {
                  text: "Python",
                  link: "/do-science/hunt-workbench/getting-started/4-python",
                },
                {
                  text: "RStudio and R",
                  link: "/do-science/hunt-workbench/getting-started/5-rstudio",
                },
                {
                  text: "MATLAB",
                  link: "/do-science/hunt-workbench/getting-started/6-matlab",
                },
                {
                  text: "Stata",
                  link: "/do-science/hunt-workbench/getting-started/7-stata",
                },
                {
                  text: "Julia",
                  link: "/do-science/hunt-workbench/getting-started/8-julia",
                },
                {
                  text: "Visual Studio Code (Workbench)",
                  link: "/do-science/hunt-workbench/getting-started/9-vscode",
                },
                {
                  text: "Remote desktop",
                  link: "/do-science/hunt-workbench/getting-started/10-remote-desktop",
                },
              ],
            },
            {
              text: "Backgrounds",
              collapsed: true,
              items: [
                {
                  text: "Statistics",
                  link: "/do-science/hunt-workbench/getting-started/backgrounds/statistics",
                },
                {
                  text: "Genomics",
                  link: "/do-science/hunt-workbench/getting-started/backgrounds/genomics",
                },
                {
                  text: "Annotations",
                  link: "/do-science/hunt-workbench/getting-started/backgrounds/annotations",
                },
                {
                  text: "Engineering",
                  link: "/do-science/hunt-workbench/getting-started/backgrounds/engineering",
                },
              ],
            },
          ],
        },
        {
          text: "Troubleshooting",
          link: "/do-science/hunt-workbench/troubleshooting",
        },
        {
          text: "FAQ",
          link: "/do-science/hunt-workbench/faq",
        },
      ],
    },
    {
      text: "Tools",
      collapsed: true,
      link: "/do-science/tools/",
      items: [
        {
          text: "Introduction",
          link: "/do-science/tools/",
        },
        {
          text: "Technical tools",
          link: "/do-science/tools/technical/",
          collapsed: true,
          items: [
            {
              text: "Docker",
              link: "/do-science/tools/technical/docker",
            },
            {
              text: "Git",
              link: "/do-science/tools/technical/git",
            },
            {
              text: "GPU",
              link: "/do-science/tools/technical/gpu",
            },
            {
              text: "CUDA",
              link: "/do-science/tools/technical/cuda/",
              collapsed: true,
              items: [
                // {
                //   text: "CUDA",
                //   link: "/do-science/tools/technical/cuda/",
                // },
                {
                  text: "CUDA 11.8",
                  link: "/do-science/tools/technical/cuda/cuda-11.8",
                },
                {
                  text: "CUDA 12.1",
                  link: "/do-science/tools/technical/cuda/cuda-12.1",
                },
                {
                  text: "CUDA 12.4",
                  link: "/do-science/tools/technical/cuda/cuda-12.4",
                },
                {
                  text: "CUDA 12.8",
                  link: "/do-science/tools/technical/cuda/cuda-12.8",
                },
                {
                  text: "CUDA 13.0",
                  link: "/do-science/tools/technical/cuda/cuda-13.0",
                },
              ],
            },
            {
              text: "HTOP",
              link: "/do-science/tools/technical/htop",
            },
            {
              text: "MobaXterm",
              link: "/do-science/tools/technical/mobaxterm",
            },
            {
              text: "NCDU",
              link: "/do-science/tools/technical/ncdu",
            },
            {
              text: "PostgreSQL",
              link: "/do-science/tools/technical/postgresql",
            },
            {
              text: "Apptainer",
              link: "/do-science/tools/technical/apptainer",
            },
            {
              text: "Terminal multiplexers",
              link: "/do-science/tools/technical/terminal-multiplexers",
            },
            {
              text: "VNC",
              link: "/do-science/tools/technical/vnc",
            },
            {
              text: "X2Go",
              link: "/do-science/tools/technical/x2go",
            },
            {
              text: "Visual Studio Code (remote)",
              link: "/do-science/tools/technical/vscode",
            },
            {
              text: "RDP",
              link: "/do-science/tools/technical/rdp",
            },
          ],
        },
        {
          text: "Analytical tools",
          link: "/do-science/tools/analytical/",
          collapsed: true,
          items: [
            {
              text: "BlueBox",
              link: "/do-science/tools/analytical/bluebox",
            },
            {
              text: "Conda",
              link: "/do-science/tools/analytical/conda",
            },
            {
              text: "EPCATS",
              link: "/do-science/tools/analytical/epacts",
            },
            {
              text: "FSL",
              link: "/do-science/tools/analytical/fsl",
            },
            {
              text: "FreeSurfer",
              link: "/do-science/tools/analytical/freesurfer",
            },
            {
              text: "JupyterLab",
              link: "/do-science/tools/analytical/jupyter-lab",
            },
            {
              text: "MATLAB",
              link: "/do-science/tools/analytical/matlab",
            },
            {
              text: "PLINK",
              link: "/do-science/tools/analytical/plink",
            },
            {
              text: "PyCharm",
              link: "/do-science/tools/analytical/pycharm",
            },
            {
              text: "R and Rstudio",
              link: "/do-science/tools/analytical/r-studio",
            },
            {
              text: "Regenie",
              link: "/do-science/tools/analytical/regenie",
            },
            {
              text: "Saige",
              link: "/do-science/tools/analytical/saige",
            },
            {
              text: "Spyder IDE",
              link: "/do-science/tools/analytical/spyder-ide",
            },
            {
              text: "Stata",
              link: "/do-science/tools/analytical/stata",
            },
            {
              text: "ITK-SNAP",
              link: "/do-science/tools/analytical/itksnap",
            },
          ],
        },
        {
          text: "Transfer tools",
          link: "/do-science/tools/transfer/",
          collapsed: true,
          items: [
            {
              text: "7z",
              link: "/do-science/tools/transfer/7z",
            },
            {
              text: "Lftp",
              link: "/do-science/tools/transfer/lftp",
            },
            {
              text: "Rsync",
              link: "/do-science/tools/transfer/rsync",
            },
            {
              text: "SSHFS",
              link: "/do-science/tools/transfer/sshfs",
            },
            {
              text: "WinSCP",
              link: "/do-science/tools/transfer/winscp",
            },
            {
              text: "Cyberduck",
              link: "/do-science/tools/transfer/cyberduck",
            },
            {
              text: "Azcopy",
              link: "/do-science/tools/transfer/azcopy",
            },
            {
              text: "Gsutil",
              link: "/do-science/tools/transfer/gsutil",
            },
          ],
        },
      ],
    },
    {
      text: "Guides",
      collapsed: true,
      link: "/do-science/guides/",
      items: [
        {
          text: "Introduction",
          link: "/do-science/guides/",
        },
        {
          text: "Stata (Workbench)",
          link: "/do-science/guides/workbench-stata",
        },
        {
          text: "Welcome back",
          link: "/do-science/guides/welcome-back",
        },
        {
          text: "Access guides",
          collapsed: true,
          items: [
            {
              text: "New computer",
              link: "/do-science/guides/access-guides/new-computer",
            },
            {
              text: "VPN certificate reset",
              link: "/do-science/guides/access-guides/reset-vpn",
            },
            {
              text: "Google Authenticator reset",
              link: "/do-science/guides/access-guides/reset-gauth",
            },
            {
              text: "SSH passphrase reset",
              link: "/do-science/guides/access-guides/reset-ssh",
            },
            {
              text: "HUNT Workbench certificate request",
              link: "/do-science/guides/access-guides/workbench-request",
            },
            {
              text: "HUNT Workbench reissue certificate",
              link: "/do-science/guides/access-guides/workbench-reissue",
            },
            {
              text: "SSH passphrase reset in Workbench",
              link: "/do-science/guides/access-guides/reset-ssh-workbench",
            },
            {
              text: "VPN configuration",
              link: "/do-science/guides/access-guides/vpn-configuration",
            },
            {
              text: "SSH configuration",
              link: "/do-science/guides/access-guides/ssh-configuration",
            },
            {
              text: "Keka",
              link: "/do-science/guides/access-guides/keka",
            },
          ],
        },
      ],
    },
    {
      text: "Data transfers",
      collapsed: true,
      link: "/do-science/transfers/",
      items: [
        {
          text: "Introduction",
          link: "/do-science/transfers/",
        },
        {
          text: "Internal kista",
          link: "/do-science/transfers/internal-kista",
        },
        {
          text: "External kista",
          link: "/do-science/transfers/external-kista",
        },
      ],
    },
    {
      text: "Community",
      collapsed: true,
      link: "/do-science/community/",
      items: [
        {
          text: "Introduction",
          link: "/do-science/community/",
        },
        {
          text: "«Freedom to explore»",
          link: "/do-science/community/freedom-to-explore",
        },
        {
          text: "Labting",
          link: "/do-science/community/labting",
        },
        {
          text: "Current consent",
          link: "/do-science/community/current-consent",
        },
        {
          text: "Consent information",
          link: "/do-science/community/consent-information",
        },
      ],
    },
    {
      text: "Troubleshooting",
      collapsed: true,
      link: "/do-science/troubleshooting/",
      items: [
        {
          text: "Introduction",
          link: "/do-science/troubleshooting/",
        },
        {
          text: "Connection",
          link: "/do-science/troubleshooting/connection",
        },
        {
          text: "Lab activities",
          link: "/do-science/troubleshooting/lab-activities",
        },
      ],
    },
    {
      text: "FAQ",
      collapsed: true,
      link: "/do-science/faq/",
      items: [
        {
          text: "Introduction",
          link: "/do-science/faq/",
        },
        {
          text: "Access",
          link: "/do-science/faq/access",
        },
        {
          text: "Compute",
          link: "/do-science/faq/compute",
        },
        {
          text: "Storage",
          link: "/do-science/faq/storage",
        },
        {
          text: "Internal transfer",
          link: "/do-science/faq/internal-transfer",
        },
        {
          text: "External transfer",
          link: "/do-science/faq/external-transfer",
        },
        {
          text: "Security",
          link: "/do-science/faq/security",
        },
        {
          text: "Migration",
          link: "/do-science/faq/migration",
        },
      ],
    },
  ]
}

function sidebarAdministerScience() {
  return [
    {
      text: "Administer science",
      link: "/administer-science/",
      collapsed: false,
      items: [
        // {
        //   text: "Welcome",
        //   link: "/administer-science/",
        // },
        {
          text: "Roles",
          link: "/administer-science/roles",
        },
        {
          text: "System status",
          link: "/administer-science/system-status",
        },
        {
          text: "Contact",
          link: "/administer-science/contact",
        },
        {
          text: "Patch notes",
          link: "/administer-science/patch-notes",
        },
        {
          text: "Privacy statement",
          link: "/administer-science/privacy-statement",
        },
        {
          text: "Contribute",
          link: "/administer-science/contribute",
        },
      ],
    },
    {
      text: "Service desk",
      collapsed: true,
      link: "/administer-science/service-desk/",
      items: [
        {
          text: "Introduction",
          link: "/administer-science/service-desk/",
        },
        {
          text: "Lab orders",
          link: "/administer-science/service-desk/lab-orders",
        },
        {
          text: "Data space orders",
          link: "/administer-science/service-desk/data-space-orders",
        },
      ],
    },
    {
      text: "Scientific access",
      collapsed: true,
      link: "/administer-science/scientific-access/",
      items: [
        {
          text: "Introduction",
          link: "/administer-science/scientific-access/",
        },
        {
          text: "FAQ",
          link: "/administer-science/scientific-access/faq",
        },
      ],
    },
    {
      text: "Agreements",
      collapsed: true,
      link: "/administer-science/agreements/overview",
      items: [
        // {
        //   text: "Introduction",
        //   link: "/administer-science/agreements/"
        // },
        {
          text: "Overview",
          link: "/administer-science/agreements/overview",
        },
        {
          text: "Downloads",
          link: "/administer-science/agreements/downloads",
        },
        {
          text: "FAQ",
          link: "/administer-science/agreements/faq",
        },
      ],
    },
    {
      text: "Services",
      collapsed: true,
      link: "/administer-science/services/",
      items: [
        // {
        //   text: "Introduction",
        //   link: "/administer-science/services/",
        // },
        {
          text: "Introduction",
          link: "/administer-science/services/",
        },
        {
          text: "Overview",
          link: "/administer-science/services/overview",
        },
        {
          text: "Specifications",
          link: "/administer-science/services/specifications",
        },
        {
          text: "Machine types",
          link: "/administer-science/services/machine-types",
        },
        {
          text: "Responsiveness",
          link: "/administer-science/services/responsiveness",
        },
      ],
    },
    {
      text: "Prices",
      collapsed: true,
      link: "/administer-science/prices/",
      items: [
        {
          text: "Introduction",
          link: "/administer-science/prices/",
        },
        {
          text: "Overview",
          link: "/administer-science/prices/overview",
        },
        {
          text: "Pricelist",
          link: "/administer-science/prices/pricelist",
        },
        {
          text: "Calculator",
          link: "/administer-science/prices/calculator",
        },
        {
          text: "Examples",
          link: "/administer-science/prices/examples",
        },
        {
          text: "FAQ",
          link: "/administer-science/prices/faq",
        },
      ],
    },
    {
      text: "Data",
      collapsed: true,
      link: "/administer-science/data/",
      items: [
        {
          text: "Introduction",
          link: "/administer-science/data/",
        },
        {
          text: "Tape archive",
          collapsed: true,
          link: "/administer-science/data/tape-archive/",
        },
        {
          text: "FAQ",
          link: "/administer-science/data/faq",
        },
      ],
    },
    {
      text: "FAQ",
      collapsed: true,
      link: "/administer-science/faq/",
      items: [
        {
          text: "Introduction",
          link: "/administer-science/faq/",
        },
        {
          text: "Lab FAQ",
          link: "/administer-science/faq/lab-faq",
        },
        {
          text: "Compliance FAQ",
          link: "/administer-science/faq/compliance-faq",
        },
        {
          text: "Finance FAQ",
          link: "/administer-science/faq/finance-faq",
        },
        {
          text: "Data FAQ",
          link: "/administer-science/faq/data-faq",
        },
        {
          text: "Tech FAQ",
          link: "/administer-science/faq/tech-faq",
        },
        {
          text: "Training FAQ",
          link: "/administer-science/faq/training-faq",
        },
      ],
    },
  ]
}

function sidebarGovernScience() {
  return [
    {
      text: "Govern science",
      collapsed: false,
      items: [
        {
          text: "Welcome",
          link: "/govern-science/",
        },
        {
          text: "Introduction",
          link: "/govern-science/introduction",
        },
        {
          text: "Accountability",
          link: "/govern-science/accountability",
        },
        {
          text: "System status",
          link: "/govern-science/system-status",
        },
        {
          text: "Contact",
          link: "/govern-science/contact",
        },
        {
          text: "Patch notes",
          link: "/govern-science/patch-notes",
        },
        {
          text: "Privacy statement",
          link: "/govern-science/privacy-statement",
        },
        {
          text: "Contribute",
          link: "/govern-science/contribute",
        },
      ],
    },
    {
      text: "Organizational access",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/govern-science/organizational-access/",
        },
        {
          text: "Data processor agreement",
          link: "/govern-science/organizational-access/data-processor-agreement",
        },
        {
          text: "Service center agreement",
          link: "/govern-science/organizational-access/service-center-agreement",
        },
        {
          text: "FAQ",
          link: "/govern-science/organizational-access/faq",
        },
      ],
    },
    {
      text: "Tingweek",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/govern-science/tingweek/",
        },
        {
          text: "Lagtun",
          link: "/govern-science/tingweek/lagtun",
        },
        {
          text: "Resolutions",
          link: "/govern-science/tingweek/resolutions",
        },
        {
          text: "Dates",
          link: "/govern-science/tingweek/dates",
        },
        {
          text: "FAQ",
          link: "/govern-science/tingweek/faq",
        },
      ],
    },
    {
      text: "Policies",
      collapsed: true,
      link: "/govern-science/policies/",
      items: [
        {
          text: "Introduction",
          link: "/govern-science/policies/",
        },
      ],
    },
    {
      text: "Compliance",
      collapsed: true,
      link: "/govern-science/compliance/",
      items: [
        {
          text: "Introduction",
          link: "/govern-science/compliance/",
        },
        {
          text: "Certificates",
          link: "/govern-science/compliance/certificates",
        },
        {
          text: "Subcontractors",
          link: "/govern-science/compliance/subcontractors",
        },
        {
          text: "FAQ",
          link: "/govern-science/compliance/faq",
        },
      ],
    },
    {
      text: "Risk management",
      collapsed: true,
      link: "/govern-science/risk/",
      items: [
        {
          text: "Introduction",
          link: "/govern-science/risk/",
        },
        {
          text: "Resources",
          link: "/govern-science/risk/resources",
        },
        {
          text: "FAQ",
          link: "/govern-science/risk/faq",
        },
      ],
    },
    {
      text: "Service desk",
      collapsed: true,
      link: "/govern-science/service-desk/",
      items: [
        {
          text: "Introduction",
          link: "/govern-science/service-desk/",
        },
        {
          text: "Service center orders",
          link: "/govern-science/service-desk/service-center-orders",
        },
        {
          text: "Data controller orders",
          link: "/govern-science/service-desk/data-controller-orders",
        },
      ],
    },
    {
      text: "FAQ",
      collapsed: true,
      link: "/govern-science/faq/",
      items: [
        {
          text: "Introduction",
          link: "/govern-science/faq/",
        },
      ],
    },
  ]
}

function sidebarAbout() {
  return [
    {
      text: "About HUNT Cloud",
      collapsed: false,
      link: "/about/",
      items: [
        {
          text: "Welcome",
          link: "/about/",
        },
        {
          text: "Affiliation",
          link: "/about/affiliation",
        },
        {
          text: "Contact",
          link: "/about/contact",
        },
      ],
    },
    {
      text: "Team",
      collapsed: true,
      link: "/about/team/",
      items: [
        {
          text: "Introduction",
          link: "/about/team/",
        },
      ],
    },
    // {
    //   text: "Values",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "Introduction",
    //       link: "/about/values/"
    //     },
    //     {
    //       text: "Vision",
    //       link: "/about/values/vision",
    //     },
    //   ]
    // },
    // {
    //   text: "Activities",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "Introduction",
    //       link: "/about/activities/"
    //     },
    //   ]
    // },
    {
      text: "Illustrations",
      collapsed: true,
      link: "/about/illustrations/",
      items: [
        {
          text: "Introduction",
          link: "/about/illustrations/",
        },
        {
          text: "Scenery",
          link: "/about/illustrations/scenery",
        },
        {
          text: "Objects",
          link: "/about/illustrations/objects",
        },
        {
          text: "Characters",
          link: "/about/illustrations/characters",
        },
        {
          text: "FAQ",
          link: "/about/illustrations/faq",
        },
      ],
    },
    // {
    //   text: "History",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "Introduction",
    //       link: "/about/history/"
    //     },
    //   ]
    // },
    // {
    //   text: "FAQ",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "Introduction",
    //       link: "/about/faq/"
    //     },
    //   ]
    // },
  ]
}
