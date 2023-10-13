import Vuetify from "vuetify/lib";
import "./sass/index.scss";


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.use(Vuetify);

  // Material icons: https://fonts.google.com/icons
  const opts = {
    theme: { dark: false },
    // theme: { disable: true, dark: false },
    icons: {
      iconfont: "md",
    },
  };
  options.vuetify = new Vuetify(opts);

  router.beforeEach(async (to, from, next) => {
    // `to` and `from` are both route objects
    // this.name = to.params.name
    const to_path = to.fullPath;
    try {
      [
        ["/do-science/getting-started/", "/do-science/lab-access/"],
        ["/getting-started/", "/do-science/lab-access/"],
        ["/lab-access/", "/do-science/lab-access/"],
        ["/service-desk/user-orders/", "/do-science/service-desk/"],
        ["/service-desk/lab-orders/", "/administer-science/service-desk/lab-orders/"],
        ["/service-desk/data-space-orders/", "/administer-science/service-desk/data-space-orders/"],
        ["/service-desk/service-center-orders/", "/govern-science/service-desk/service-center-orders/"],
        ["/service-desk/data-controller-orders/", "/govern-science/service-desk/data-controller-orders/"],
        ["/working-in-your-lab/technical-tools/", "/do-science/tools/technical/"],
        ["/working-in-your-lab/analytical-tools/", "/do-science/tools/analytical/"],
        ["/working-in-your-lab/transfer-tools/", "/do-science/tools/transfer/"],
        ["/working-in-your-lab/workbench/", "/do-science/hunt-workbench/"],
        ["/community/", "/do-science/community/"],
        ["/troubleshooting/", "/do-science/troubleshooting/"],
        ["/faq/", "/do-science/faq/"],
        ["/certificates/", "/govern-science/compliance/certificates/"],
        ["/policies/", "/govern-science/policies/"],
        ["/subcontractors/", "/govern-science/compliance/subcontractors/"],
        ["/responsibilities/", "/govern-science/risk-management/#clarification-of-responsibilities"],
        ["/service-desk/", "/administer-science/service-desk/"],
        ["/data-transfers/internal-kista/", "/do-science/data-transfers/internal-kista/"],
        ["/data-transfers/external-kista/", "/do-science/data-transfers/external-kista/"],
        ["/agreements/", "/administer-science/agreements/"],
        ["/do-science/lab-access/configure-vpn/", "/do-science/lab/"],
        ["/do-science/lab-access/configure-ssh/", "/do-science/lab/"],
        ["/do-science/lab-access/configure-access/", "/do-science/lab/"],
        // ['', ''],
      ].every((pair) => {
        if (pair[0] && pair[1] && to_path.startsWith(pair[0])) {
          // Rewrite the link to correct path
          console.log(`Redirect: ${pair[0]} -> ${pair[1]}`)
          window.location.href = to_path.replace(pair[0], pair[1]);
          return false;
        } else {
          return true;
        }
      })
      if (to.path.startsWith("/assets/") && to.path.endsWith(".pdf")) {
        // NOTE Redirect PDF assets if not found - fails to redirect existing
        window.location.href = "https://assets.hdc.ntnu.no" + to.path;
      } else if (
        to_path.startsWith("/tingweek/") || to_path === "/tingweek"
      ) {
        // NOTE Correct wrong link
        window.location.href = to_path.replace("/tingweek", "/govern-science/tingweek");
      } else if (
        to_path.startsWith("/tingweeks/") || to_path === "/tingweeks"
      ) {
        // NOTE Correct wrong link
        window.location.href = to_path.replace("/tingweeks", "/govern-science/tingweek");
      }
    } catch (err) {
      console.log(err);
    } finally {
      next();
    }
  });

  // Expander Container - scroll to selected item when URL with ID is opened
  if (typeof document !== 'undefined') {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        const { hash } = location
        const decoded = decodeURIComponent(hash)
        // console.log(decoded)
        if (decoded && decoded.startsWith('#detail-') ) {
          let el = document.querySelector(decoded)

          if (el) {
            try {
              var headerOffset = 64
              var elementPosition = el.getBoundingClientRect().top
              var offsetPosition = elementPosition + window.pageYOffset - headerOffset
              window.scrollTo({top: offsetPosition, behavior: "smooth"})
            } catch (err) {
              el.scrollIntoView()
            } finally {
              el.setAttribute("open", "")
              // Highlight the newly opened block for a few seconds
              if (!el.classList.contains('glow')) {
                el.classList.add('glow')
              }
            }
          }
        }
      }
    }
  }
};
