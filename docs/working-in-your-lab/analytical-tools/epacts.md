---
title: EPACTS
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/epacts
sidebarDepth: 0
---

# Install EPACTS

[EPACTS](https://github.com/statgen/EPACTS) is a software pipeline
to perform various statistical tests for identifying genome-wide
association from gwas and sequence data.

Please contact Hyun Min Kang (hmkang@umich.edu) at the University of Michigan
or join the [EPACTS Google group](http://groups.google.com/group/epacts)
to ask questions about EPACTS.

`This page describes specific steps setting up EPACTS in your Ubuntu lab on HUNT Cloud.`

## Install required packages

```
sudo apt update -y && sudo apt-get install -y \
         build-essential \
         ghostscript \
         groff \
         gnuplot \
         zlib1g-dev \
         r-base-core
```

## Link to software (alternatively, clone the git repo)

```
software="http://csg.sph.umich.edu/kang/epacts/download/EPACTS-3.2.6.tar.gz"
```

## Define where to store the software.

Below is a suggestion that you may change.

```
softwaredir="/mnt/work/software/epacts/"
mkdir -p $softwaredir
```

## Download the code, unpack and clean up

```
wget $software -O $softwaredir/software.tgz
tar -xvzf $softwaredir/software.tgz  -C $softwaredir/
mv -v $softwaredir/EPACTS-3.2.6/* $softwaredir/
rm -rf $softwaredir/EPACTS-3.2.6/
rm $softwaredir/software.tgz
```

## Compile using make and make install

```
cd $softwaredir
./configure --prefix=$softwaredir
make
make install
```

## Download reference FASTA files from 1000 Genomes FTP

```
$softwaredir/bin/epacts download
```

## Run

```
$softwaredir/bin/epacts
```
