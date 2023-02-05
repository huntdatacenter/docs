---
title: Singularity
category: Technical tools
permalink: /do-science/tools/technical/singularity
sidebarDepth: 0
description: Installation guide for Singularity
---

# Singularity

**[Singularity](https://sylabs.io/guides/latest/user-guide/index.html) provides application containers for Linux that is also compatible with Docker.**

## Install with Conda

::: warning Requirements

- Conda (miniconda), see our [Conda tutorial](/do-science/tools/analytical/conda/) for more details.
- Conda channels: conda-forge, bioconda

:::

**Add the conda-forge channel**

You will need the conda-forge channel to install Singularity. If you have not set channels yet make sure to add it:

```bash
conda config --add channels conda-forge
```

**Install singularity in conda base**

```bash
conda install -n base -c conda-forge "singularity>=3.0.0"
```
