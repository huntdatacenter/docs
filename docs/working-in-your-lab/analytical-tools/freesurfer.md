---
title: Freesurfer
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/freesurfer
sidebarDepth: 1
description: Installation guide for Freesurfer.
---

# Freesurfer

[Freesurfer](https://surfer.nmr.mgh.harvard.edu/) is an open source
software suite for processing and analyzing (human) brain MRI images.

## Installation

Check if Freesurfer is not already installed in software directory:
```
/mnt/work/software
```

If not installed download the Freesurfer package:
```
wget -O /mnt/work/software/freesurfer7.tar.gz 'https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/7.2.0/freesurfer-linux-ubuntu18_amd64-7.2.0.tar.gz'
```

Then create a directory and unpack the archive:
```
mkdir -p /mnt/work/software/freesurfer
tar -C /mnt/work/software/ -xzvf /mnt/work/software/freesurfer7.tar.gz
```

## Configuration

Add these to your `~/.bashrc` config to be able to run freesurfer tools:

```
PATH="$PATH:/mnt/work/software/freesurfer/bin"

export FREESURFER_HOME=/mnt/work/software/freesurfer
export FSFAST_HOME=/mnt/work/software/freesurfer/fsfast
export FSF_OUTPUT_FORMAT=nii
export SUBJECTS_DIR=/mnt/work/software/freesurfer/subjects
export MNI_DIR=/mnt/work/software/freesurfer/mni
```
