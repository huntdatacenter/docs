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
    try {
      if (to.path.startsWith("/assets/") && to.path.endsWith(".pdf")) {
        // NOTE Redirect PDF assets if not found - fails to redirect existing
        window.location.href = "https://assets.hdc.ntnu.no" + to.path;
        next();
      } else if (
        to.path.startsWith("/tingweeks/") ||
        to.path === "/tingweeks"
      ) {
        // NOTE Correct wrong link
        window.location.href = "https://docs.hdc.ntnu.no/tingweek/";
        next();
      } else {
        next();
      }
    } catch (err) {
      next();
    }
  });
};
