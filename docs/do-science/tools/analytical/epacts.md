---
title: EPACTS
category: Analytical tools
permalink: /do-science/tools/analytical/epacts
sidebarDepth: 0
description: Installation guide for EPACTS, a software pipeline to perform various statistical tests for identifying genome-wide association from GWAS and sequence data.
---

# Install EPACTS

**[EPACTS](https://github.com/statgen/EPACTS) is a software pipeline to perform various statistical tests for identifying genome-wide association from gwas and sequence data.**

[[toc]]

This page describes specific steps for setting up EPACTS in your lab on HUNT Cloud.

::: tip General questions about EPACTS

Contact Hyun Min Kang (hmkang@umich.edu) at the University of Michigan or join the [EPACTS Google group](http://groups.google.com/group/epacts) to ask general questions about the EPACTS software.

:::



## 1. Install required packages

```bash
sudo apt update -y && sudo apt-get install -y \
         build-essential \
         ghostscript \
         groff \
         gnuplot \
         zlib1g-dev \
         r-base-core
```

## 2. Link to the software 

```bash
software="http://csg.sph.umich.edu/kang/epacts/download/EPACTS-3.2.6.tar.gz"
```

You may alternatively clone the git repo.

## 3. Define where to store the software.

```
softwaredir="/mnt/work/software/epacts/"
mkdir -p $softwaredir
```

The above path is a suggestion that you may change.

## 4. Download the code, unpack and clean up

```bash 
wget $software -O $softwaredir/software.tgz
tar -xvzf $softwaredir/software.tgz  -C $softwaredir/
mv -v $softwaredir/EPACTS-3.2.6/* $softwaredir/
rm -rf $softwaredir/EPACTS-3.2.6/
rm $softwaredir/software.tgz
```

## 5. Compile using make and make install

```bash
cd $softwaredir
./configure --prefix=$softwaredir
make
make install
```

## 6. Download reference FASTA files from 1000 Genomes FTP

```bash
$softwaredir/bin/epacts download
```

## 7. Run

```bash
$softwaredir/bin/epacts
```

