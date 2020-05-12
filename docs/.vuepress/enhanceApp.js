
export default ({ router }) => {
  router.beforeEach(async (to, from, next) => {
    // `to` and `from` are both route objects
    // this.name = to.params.name
    try {
      // console.log("https://assets.hdc.ntnu.no" + to.path);
      // console.log(to.path);
      // console.log(to);
      if (to.path.startsWith('/assets/') && to.path.endsWith(".pdf")) {
        // console.log("https://assets.hdc.ntnu.no" + to.path);
        window.location.href = "https://assets.hdc.ntnu.no" + to.path;
        next();
      } else {
        next();
      }
    } catch(err) {
      next();
    }
  })
}
