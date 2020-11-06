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

## Requirements

- Conda (miniconda)
- Conda channels: bioconda, conda-forge

## Installation

```
conda install -c bioconda regenie
```
