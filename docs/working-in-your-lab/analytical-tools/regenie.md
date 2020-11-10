---
title: Regenie
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/regenie
sidebarDepth: 1
description: Installation guide for Regenie
---

# Regenie

[Regenie](https://github.com/rgcgithub/regenie) is a C++ program for
whole genome regression modelling of large genome-wide association studies.
It is developed and supported by a team of scientists at the Regeneron Genetics Center.

The method has the following properties:

- It works on quantitative and binary traits, including binary traits with unbalanced case-control ratios
- It can process multiple phenotypes at once
- It is fast and memory efficient
- For binary traits it supports Firth logistic regression and an SPA test
- It supports the BGEN, PLINK bed/bim/fam and PLINK2 pgen/pvar/psam genetic data formats

::: warning Requirements

- Conda (miniconda), see our [Conda tutorial](/working-in-your-lab/analytical-tools/conda/) for more details.
- Conda channels: conda-forge, bioconda

:::

## Installation

```
conda install -c bioconda regenie
```

## Genome-wide association analysis

We recommend [Regenie documentation](https://rgcgithub.github.io/regenie/options/) to read up on gwas analysis
using Regenie. For more details we recommend having a look on the official paper
[Computationally efficient whole genome regression for quantitative and binary traits](https://www.biorxiv.org/content/10.1101/2020.06.19.162354v2.abstract),
where Regenie was first introduced.
