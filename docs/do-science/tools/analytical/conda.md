---
title: Conda (Lab)
category: Analytical tools
permalink: /do-science/tools/analytical/conda
sidebarDepth: 1
description: Installation guide for Conda, including installation of R packages using Conda.
tags:
  - conda
  - anaconda
  - miniconda
  - bioconda
  - mamba
  - micromamba
---

# Conda

**[Conda](https://conda.io/en/latest/) is a handy environment management system that allows you to reliably install packages and libraries and quickly switch between package versions. We recommend to use faster [Micromamba](https://mamba.readthedocs.io/en/latest/user_guide/micromamba.html) distribution.**

[[toc]]

::: tip Conda for HUNT Workbench

This guide is for the installation of Conda directly on your lab machines. Head over to our [Reproducibility](/do-science/hunt-workbench/faq/#reproducibility) FAQ in the HUNT Workbench section to learn more about Conda in your workbench environment.

:::


## 1. Install Conda

1.1 Log into your lab machine and install Miniconda:

```bash
echo | "${SHELL}" <(curl -L https://micro.mamba.pm/install.sh);

~/.local/bin/micromamba install -n base -c conda-forge -y "conda" "mamba"
```

See [Installing on Linux](https://conda.io/projects/conda/en/latest/user-guide/install/linux.html)
for more information on the [Micromamba](https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html) installation.

1.2 After the installation, log out and log into your lab to activate your Conda setup.

```bash
exit
```

::: tip Get more out of Conda

To get most out of Conda we recommend reading the guide
[Conda - Managing environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).

:::


## 2. Set up Bioconda and Conda-forge channels

To find packages in Conda you need to configure relevant channels.

We recommend to start with [bioconda](https://anaconda.org/bioconda) and [conda-forge](https://anaconda.org/conda-forge) channels.

2.1 A quick way to make sure your channels are added correctly is to (re)add them in this order:

```
conda config --add channels defaults
conda config --add channels bioconda
conda config --add channels conda-forge
```

Read more on how to [set up channels](https://bioconda.github.io/) in the guide from Bioconda.

## 3. Install your tools

Search for your favorite tool on the [Bioconda page](https://bioconda.github.io/search.html?q=) and have a field day installing:

```bash
# -- Working example
mamba install plink2
# -- or
conda install plink2
```

::: tip
We have a very easy guide on how to get [Saige](/do-science/tools/analytical/saige/) running in Conda.
:::

## 4. Do cool science

Start your favorite tools and do cool science:

```bash
plink2 <input>
```

## Additional resources

- [Install R with conda](https://conda.io/docs/user-guide/tasks/use-r-with-conda.html)
- Update to the [latest R version](https://anaconda.org/conda-forge/r-base)
- [List of available R-packages](https://repo.continuum.io/pkgs/r/linux-64/)

Note that this work with some, but not all, bioconductor-packages. Please send us a note if you need these.

```bash
# install
mamba create -n renv -c conda-forge r-base r-essentials
# or
conda create -n renv -c conda-forge r-base r-essentials
conda activate renv

# install package in shell
R CMD INSTALL --library="${CONDA_PREFIX}/lib/R/library" .

# install cran packages within r
install.packages("png", paste(Sys.getenv("CONDA_PREFIX"), "/lib/R/library", sep=""))
```
