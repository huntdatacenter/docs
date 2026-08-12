// Library for render Jinja template

import nunjucks from "nunjucks"

const nunjucksEnv = new nunjucks.Environment(null, {
  autoescape: false,
  trimBlocks: true,
  lstripBlocks: true,
})

export default nunjucksEnv
