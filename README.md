# HUNT Cloud Documentation

This repository holds HUNT Cloud Documentation source.

## Development

### VitePRess

#### Prerequisites

- [Node.js v24.x:](https://nodejs.org)
- [Yarn](https://yarnpkg.com)


```bash
mamba create -n node24 -c conda-forge -y "python==3.13.*" "nodejs==24.*" "yarn"

mamba activate node24

yarn dlx @yarnpkg/sdks vscode
```

#### How to run VitePress

```bash
mamba activate node24
```

Install the dependencies of project with:

```bash
yarn install
```

Start a local Vitepress development server with:

```bash
yarn dev
```

For more details, please read Vitepress's [documentation](https://vitepress.dev/guide/getting-started).

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

## Icons

You can search up and use MDI icons inside components:

- https://pictogrammers.com/library/mdi/
