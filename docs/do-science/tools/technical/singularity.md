---
title: Singularity
category: Technical tools
permalink: /do-science/tools/technical/singularity
sidebarDepth: 0
description: Installation guide for Singularity
---


# Singularity

**[Singularity](https://sylabs.io/guides/latest/user-guide/index.html) provides application containers for Linux that is also compatible with Docker.**

[[toc]]

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

## Common practices and commands

All information is collected form official Singularity documentation (link above).

### Pull and run Docker image

You can use the [pull](https://docs.sylabs.io/guides/3.3/user-guide/cli/singularity_pull.html) and [build](https://docs.sylabs.io/guides/3.3/user-guide/cli/singularity_build.html) commands to download pre-built images from an external resource like the [Container Library](https://cloud.sylabs.io/library) or [Docker Hub](https://hub.docker.com/).


### Listing running containers

### Stop running container

### Where are the images stored ?

