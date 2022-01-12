---
title: Singularity
category: Technical tools
permalink: /working-in-your-lab/technical-tools/singularity
sidebarDepth: 0
description: Installation guide for Singularity
---

# Singularity

[Singularity](https://sylabs.io/guides/latest/user-guide/index.html) provides application containers for Linux, which are also compatible with docker.

## Install using conda

::: warning Requirements

- Conda (miniconda), see our [Conda tutorial](/working-in-your-lab/analytical-tools/conda/) for more details.
- Conda channels: conda-forge, bioconda

:::

You will need conda-forge channel. If you have not set channels yet make sure to add it:

```
conda config --add channels conda-forge
```

Install singularity in conda base:

```
conda install -n base -c conda-forge "singularity>=3.0.0"
```
