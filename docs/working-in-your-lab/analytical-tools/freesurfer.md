---
title: Freesurfer
permalink: /working-in-your-lab/analytical-tools/freesurfer
sidebarDepth: 1
---

# Freesurfer

[Freesurfer](https://surfer.nmr.mgh.harvard.edu/) is an open source
software suite for processing and analyzing (human) brain MRI images.

## Installation

```
export SOFTWARE=/mnt/work/software
mkdir -p ${SOFTWARE}/freesurfer
wget 'https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/6.0.0/freesurfer-Linux-centos6_x86_64-stable-pub-v6.0.0.tar.gz' -O ${SOFTWARE}/freesurfer.tar.gz
tar -C ${SOFTWARE}/freesurfer-setup -xzvf ${SOFTWARE}/freesurfer.tar.gz
```

## Configuration

```
PATH="$PATH:/mnt/work/software/freesurfer/bin"

export FREESURFER_HOME=/mnt/work/software/freesurfer
export FSFAST_HOME=/mnt/work/software/freesurfer/fsfast
export FSF_OUTPUT_FORMAT=nii
export SUBJECTS_DIR=/mnt/work/software/freesurfer/subjects
export MNI_DIR=/mnt/work/software/freesurfer/mni
```
