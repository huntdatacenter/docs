---
title: Conda
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/conda
sidebarDepth: 1
description: Installation guide for Conda, including installation of R packages using Conda.
---

# Conda, Anaconda, Miniconda and Bioconda

[Conda](https://conda.io/en/latest/) - [Anaconda](https://docs.anaconda.com/anaconda/) - [Miniconda](https://conda.io/en/latest/miniconda.html) - [Bioconda](https://bioconda.github.io)

## Installation

### Install Conda

Follow the [Installing on Linux](https://conda.io/projects/conda/en/latest/user-guide/install/linux.html)
instructions to install [Miniconda](https://docs.conda.io/en/latest/miniconda.html#linux-installers).

To get more out of conda we recommend reading
[Conda - Managing environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)
guide.

### Set up Bioconda and other channels

Follow the [Set up channels](https://bioconda.github.io/user/install.html#set-up-channels) guide from Bioconda.

```
conda config --add channels defaults
conda config --add channels bioconda
conda config --add channels anaconda
conda config --add channels conda-forge
```

Depending on your aims you might also consider adding [R channel](https://anaconda.org/r/).
```
conda config --add channels r
```

### Install Your Tools

Have a field day installing your favourite tools

```bash
conda install plink2
```

### Do Cool Science

```bash
plink2 <input>
```

## Additional resources

- [Install R with conda](https://conda.io/docs/user-guide/tasks/use-r-with-conda.html)
- Update to the [latest R version](https://anaconda.org/conda-forge/r-base)
- Please note that this does work with some, but not all, bioconductor-packages. Please send us a note if you need these. List of available r-packages [here](https://repo.continuum.io/pkgs/r/linux-64/)

```bash
# install
conda install r-essentials
conda update r-essentials
conda install -c conda-forge r-base

# install cran packages within r
install.packages("png", "~/anaconda3/lib/R/library")
```
