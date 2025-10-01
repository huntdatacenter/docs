---
title: Freesurfer
category: Analytical tools
permalink: /do-science/tools/analytical/freesurfer
outline: 1
description: Installation guide for Freesurfer.
---

# Freesurfer

**[Freesurfer](https://surfer.nmr.mgh.harvard.edu/) is an open source
software suite for processing and analyzing (human) brain MRI images.**

[[toc]]

## 1. Installation

1.1. Log into your lab machine and check if Freesurfer is already installed in your software directory:

```bash 
ls /mnt/work/software
```

If you see a directory named `freesurfer` if the software is already installed. If you don't see the directory, continue with the installation: 

1.2 Download the Freesurfer package:

```bash
# -- principal example (freesurfer v7.2.0)
wget -O /mnt/work/software/freesurfer7.tar.gz 'https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/7.2.0/freesurfer-linux-ubuntu18_amd64-7.2.0.tar.gz'
```

You might want to check up the lastes release and update the links and numbers in the example above.

1.3 Create a directory and unpack the archive:

```bash
# -- make directory
mkdir -p /mnt/work/software/freesurfer

# -- unpack the archive
tar -C /mnt/work/software/ -xzvf /mnt/work/software/freesurfer7.tar.gz
```

## 2. Configuration

Add the following lines to your `~/.bashrc` config to be able to run your Freesurfer tools:

```bash
PATH="$PATH:/mnt/work/software/freesurfer/bin"

export FREESURFER_HOME=/mnt/work/software/freesurfer
export FSFAST_HOME=/mnt/work/software/freesurfer/fsfast
export FSF_OUTPUT_FORMAT=nii
export SUBJECTS_DIR=/mnt/work/software/freesurfer/subjects
export MNI_DIR=/mnt/work/software/freesurfer/mni
```

