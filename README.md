# HUNT Data Center Pages

This repository holds HUNT Data Center Pages.

## Development

### VuePress

#### Prerequisites

- [Node.js v12.x:](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

#### How to run VuePress

Install the dependencies of project with:

```bash
yarn install
```

Start a local VuePress development server with:

```bash
yarn dev
```

For more details, please read VuePress's [documentation](https://v1.vuepress.vuejs.org/).

### Linting and pre-commit hooks

This repository has [pre-commit](https://pre-commit.com) hooks with linting tools that you can use in your local development environment.
See [pre-commit#install](https://pre-commit.com/#install) for how to install.

To get started, install the pre-commit hooks inside the repo with the snippet below.
Any future commits will then be checked by the checks defined in `.pre-commit-config.yaml`

```bash
pre-commit install
```

You can also use [tox](https://tox.readthedocs.io/en/latest/) to run the pre-commit hooks with linting which is run in CI.
See [tox#install](https://tox.readthedocs.io/en/latest/install.html) for how to install.

```bash
tox
```

## VuePress permalinks

I have chosen to specify permalinks in Markdown `.md` documents to avoid `.html` routes which seems to be the default as of VuePress `1.0.2` as shown [here](https://github.com/vuejs/vuepress/blob/667d9f47c46a1000122f19ec067ecd65702fab92/packages/docs/docs/guide/directory-structure.md#default-page-routing)

I found these issues related to "clean" URLs so it might be fixed in the future:

- [https://github.com/vuejs/vuepress/issues/78](https://github.com/vuejs/vuepress/issues/78)
- [https://github.com/vuejs/vuepress/issues/270](https://github.com/vuejs/vuepress/issues/270)
- [https://github.com/vuejs/vuepress/issues/608](https://github.com/vuejs/vuepress/issues/608)
