---
title: PLINK
category: Analytical tools
permalink: /do-science/tools/analytical/plink
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

Make sure you have your personal bin directory in place:
```bash
mkdir -p ~/bin && source ~/.profile
```

Download the latest binary release of PLINK 1.9:
```bash
wget -P ~/bin/ https://s3.amazonaws.com/plink1-assets/plink_linux_x86_64_20231211.zip
```

Unpack the archive:
```bash
unzip  ~/bin/plink_linux_x86_64_20231211.zip -d ~/bin/
```

Remove archive:
```bash
rm -v ~/bin/plink_linux_x86_64_20231211.zip
```

Test by printing the version:
```bash
plink --version
```

You can also install PLINK 1.9 with Bioconda.
See our [Anaconda and Bioconda](conda) tutorial for more details.

## How to install PLINK 2

### Using conda

Installing [PLINK 2](https://www.cog-genomics.org/plink/2.0/) is a little more cumbersome
as it is not available in Ubuntu's package repositories.

You can either use [Conda](/do-science/tools/analytical/conda/)
to install [Plink2 package](https://anaconda.org/bioconda/plink2) or follow with binary release below.

To install package into your [Conda](/do-science/tools/analytical/conda/)
environment use this command:
```bash
conda install -c bioconda plink2
```

### Using binary release

To download and unpack the binary for PLINK 2 follow these steps.

Make sure you have your personal bin directory in place:
```bash
mkdir -p ~/bin && source ~/.profile
```

Download the latest binary release of PLINK 2:
```bash
wget -P ~/bin/ http://s3.amazonaws.com/plink2-assets/plink2_linux_x86_64_latest.zip
```

Unzip the archive:
```bash
unzip ~/bin/plink2_linux_x86_64_latest.zip -d ~/bin/
```

Remove archive:
```bash
rm -v ~/bin/plink2_linux_x86_64_latest.zip
```

You can now use the following executable:
```bash
plink2
```

## Troubleshooting

Install unzip if missing:
```bash
sudo apt install -y unzip
```
