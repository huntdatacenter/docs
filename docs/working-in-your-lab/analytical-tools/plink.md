---
title: PLINK
category: Analytical tools
permalink: /hunt-lab/analytical-tools/plink
sidebarDepth: 1
description: Installation guide for Plink.
---

# PLINK

[PLINK](http://zzz.bwh.harvard.edu/plink/) is a free, open-source whole genome association analysis toolset, designed to perform a range of basic, large-scale analyses in a computationally efficient manner.

[[toc]]

## How to install PLINK 1

Install [PLINK 1](http://zzz.bwh.harvard.edu/plink/) with the following command:

```bash
sudo apt install plink
```

And use the following executable:

```bash
plink1 --noweb
```

## How to install PLINK 1.9

Install [PLINK 1.9](https://www.cog-genomics.org/plink/1.9/) with the following commands:

```bash
sudo apt install plink1.9
```

And use the following executable:

```bash
plink1.9
```

You can also install PLINK 1.9 with Bioconda.
See our [Anaconda and Bioconda](conda) tutorial for more details.

## How to install PLINK 2

Installing [PLINK 2](https://www.cog-genomics.org/plink/2.0/) is a little more cumbersome
as it is not available in Ubuntu's package repositories.

You can either use [Conda](https://docs.hdc.ntnu.no/hunt-lab/analytical-tools/conda/)
to install [Plink2 package](https://anaconda.org/bioconda/plink2) or follow with binary release below.

To install package into your [Conda](https://docs.hdc.ntnu.no/hunt-lab/analytical-tools/conda/)
environment use this command:
```
conda install -c bioconda plink2
```

To download and unpack the binary for PLINK 2 follow these steps:

```bash
# Create a local binary directory in your home directory
mkdir ~/bin

# Download the latest binary of PLINK 2.
wget -P ~/bin/ http://s3.amazonaws.com/plink2-assets/plink2_linux_x86_64_latest.zip

# Install unzip
sudo apt install unzip

# Unzip the archive
unzip ~/bin/plink2_linux_x86_64_latest.zip -d ~/bin/

# Remove archive
rm ~/bin/plink2_linux_x86_64_latest.zip
```

You can now use the following executable:

```bash
plink2
```
