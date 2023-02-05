---
title: FSL
category: Analytical tools
permalink: /do-science/tools/analytical/fsl
sidebarDepth: 1
description: Installation guide for FSL in HUNT Cloud.
---

# FSL

**[FSL](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/) is a comprehensive library of image analysis and statistical tools for fMRI, MRI and DTI brain imaging data.**

The FSL suite consists of various command line tools, as well as simple GUIs for its core analysis pipelines.
Among others, FSL offers implementations of standard GLM analysis, white matter tractography, tissue segmentation, affine and non-linear co-registration, and independent component analysis ([Source: Neurodebian](http://neuro.debian.net/pkgs/fsl-complete.html)).

::: tip

(1) Use [HTCondor](https://neuro.debian.net/blog/2012/2012-03-09_parallelize_fsl_with_condor.html)
with FSL to speed up analysis by running the tasks in parallel.

(2) [Bedpostx](https://users.fmrib.ox.ac.uk/~moisesf/Bedpostx_GPU/Installation.html) also supports [GPU](/do-science/tools/technical/gpu/), which provides significantly faster results on large datasets.
:::

## Installation using Conda

A simple way if you manage your dependencies with [Conda](/do-science/tools/analytical/conda/) is to install the [FSLpy package](https://anaconda.org/conda-forge/fslpy) in your environment:

```bash
conda install -c conda-forge fslpy
```

## Installation using flsinstaller

You may install FSL directly on your lab machine. We recoomend that your read up on the official [FSL installation](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation/Linux) documentation if you choose this path.

::: warning Requirement

The installation require Python 2.

:::

```bash
git clone https://gist.github.com/cffe4e955249bdde6985d4232a618ab8.git ~/fslinstaller
mkdir -p /mnt/work/software/FSL
mkdir -p /mnt/scratch/tmp
export TMP=/mnt/scratch/tmp/
cd /mnt/work/software/FSL && python ~/fslinstaller/fslinstaller.py
rm -rf ~/fslinstaller
```

::: details Output log from installation

This is an example of expected output for a successful installation: 

```
--- FSL Installer - Version 3.0.15 ---
When asked a question, the default answer is given in square brackets.
Hit the Enter key to accept this default answer.
Where would you like the FSL install to be (including the FSL folder name)? [/usr/local/fsl]: /mnt/work/software/FSL/fsl
Downloading...
Checking FSL package
[OK] File downloaded
Installing FSL software version 6.0.1...
[OK] FSL software installed.
Performing post install tasks
Stage 1
By installing this python distribution you agree to the license terms in
/mnt/work/software/FSL/fsl/fslpython/LICENSE.txt
100%
Stage 2
100%
/tmp/fslpythonYBC3/fslpython_miniconda_installer.log
100%
Post install setup complete
[OK] Post installation setup complete
```

:::

## Configuration

Based on [shell setup](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation/ShellSetup), add the following to your `.profile` or `.bashrc` file:

```
PATH="$PATH:/mnt/work/software/fsl/bin"
export FSLDIR=/mnt/work/software/fsl
source "${FSLDIR}/etc/fslconf/fsl.sh"
```


