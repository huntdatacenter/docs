---
title: FSL
permalink: /working-in-your-lab/analytical-tools/fsl
---

# FSL

FSL is a comprehensive library of image analysis and statistical tools
for fMRI, MRI and DTI brain imaging data. The suite consists of various
command line tools, as well as simple GUIs for its core analysis pipelines.
Among others, FSL offers implementations of standard GLM analysis,
white matter tractography, tissue segmentation, affine and non-linear
co-registration, and independent component analysis [(Source: Neurodebian)](http://neuro.debian.net/pkgs/fsl-complete.html).

## Installation

Our tutorial only briefly summarises the installation, therefore we recommend to read up
in official [FSL installation](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation/Linux).

::: warning REQUIREMENT
Python 2
:::

```bash
git clone https://gist.github.com/cffe4e955249bdde6985d4232a618ab8.git ~/fslinstaller
sudo mkdir -p /mnt/work/software/FSL
sudo mkdir -p /mnt/scratch/tmp
sudo chown ubuntu:ubuntu /mnt/scratch/tmp/
export TMP=/mnt/scratch/tmp/
cd /mnt/work/software/FSL && sudo TMP=$TMP python ~/fslinstaller/fslinstaller.py
rm -rf ~/fslinstaller
```

::: details Output log from installation

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

Based on [shell setup](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation/ShellSetup)
in `.profile` or `.bashrc` add following:

```
PATH="$PATH:/mnt/work/software/fsl/bin"
export FSLDIR=/mnt/work/software/fsl
source "${FSLDIR}/etc/fslconf/fsl.sh"
```
