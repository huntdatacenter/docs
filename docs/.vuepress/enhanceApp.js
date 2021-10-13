export default ({ router }) => {
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
        // NOTE Redirect PDF assets if not found - fails to redirect existing
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
