---
title: Conda (Workbench)
category: Getting started
sidebarDepth: 0
permalink: /do-science/hunt-workbench/getting-started/conda
description: How to use Conda and Mamba
tags:
  - conda
  - anaconda
  - miniconda
  - bioconda
  - mamba
  - micromamba
---

# Conda

<!--

- why do we recommend using conda
- what is the difference between mamba and conda
- how to create shared conda environment

-->

## Reproducible science

Conda is a great way to help you take control over your dependencies, and to avoid unwanted surprises over time. We recommend you to start with their guide on how to [manage environments](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).



## A safe place to experiment

Create your own environments for Python or R packages. Export the details into the environment file for reproducibility. Share environment files with others.

## Conda or Mamba

We install both. Generally they should be interchangeable. We recommend that you mamba instead of conda for create and install commands for quicker setup. If you have older setup without mamba command replace it with conda.

## Conda environments

Start by finding out which environments you already have:

```bash
conda env list
```

List packages installed in your environment. Replace "name" with a name of one of your environments from the list above.

```bash
# General example
conda list -n name

# Specific example with py310
conda env export -n py310
```

## Create a sharable environment

You can keep configuration of your environment in your git repository together with your code.
In general example replace name with name of your environment:

```bash
# General example
conda env export -n name > environment.yml

# Specific example with py310
conda env export -n py310 > environment.yml
```

You or your lab mates can use this environment file to recreate same environment.

```bash
conda env create -f environment.yml
```
