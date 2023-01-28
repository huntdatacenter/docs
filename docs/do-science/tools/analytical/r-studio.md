---
title: R and R-Studio
category: Analytical tools
permalink: /do-science/tools/analytical/r-studio
sidebarDepth: 2
description: Installation guide for R and R-Studio
---

# R

[R](https://www.r-project.org/) is a handy language and environment for statistical computing and graphics.
We have already installed the latest version on your home machines.
For those of you running unmanaged machines on our security tier 2 may want to upgrade to the latest version using the code below:

[[toc]]

## Install R

### Install using Conda

We recommend using [Conda](/do-science/analytical/conda/) to install R packages. Conda gives you better flexibility when choosing versions, which will not affect other researchers in your lab.

::: tip
We have very easy guide on how to get [Saige](/do-science/analytical/saige/) running in Conda environment.
:::

If you have a conda setup based on the guide above you will need some additional channels to install the packages.
You will need [bioconda](https://anaconda.org/bioconda) and [conda-forge](https://anaconda.org/conda-forge) channels.
If you have not set channels yet make sure to add them in the same order,
but feel free to skip bioconda if you do not see a need for it:

```bash
conda config --add channels bioconda
conda config --add channels conda-forge
```

To install R (>=4.0.3) you have to install r-base package. In the example below we create an environment where r-base is being installed as default with devtools:

```bash
conda create --name renv --channel conda-forge  "r-base>=4.0.3" r-devtools
```

To be able to work with R that you just installed you have to activate your conda environment:

```bash
conda activate renv
R
```

Additional R packages can be found in channels or installed using R devtools. We highly recommend to use R packages from Conda channels [bioconda](https://anaconda.org/bioconda) and [conda-forge](https://anaconda.org/conda-forge). Conda packages usually have `r-` prefix in their names. Here is an example how to install matrix R package into renv environment:

```bash
conda install -n renv r-matrix
```

If you still decide to install cran packages when using conda, then you should minimize the issues encounted by specifying the library path. For example to install png package:
```bash
install.packages("png", paste0(Sys.getenv("CONDA_PREFIX"), "/lib/R/library"))
```

#### Running multiple version of R

To run multiple R versions with conda environments it may be necessary
to setup custom `~/.Rprofile` config. You can use example below as an inspiration for setting
your .Rprofile config to link each R version to library paths within environment:

```bash
condaenv <- Sys.getenv("CONDA_PREFIX")
if (condaenv != "") {
  .libPaths(c(paste0(Sys.getenv("CONDA_PREFIX"), "/lib/R/library")))
}
```

### Install using system packages

```bash
# Install R
sudo apt install r-base r-base-dev -y

# Add the updated package repository to your sources list:
# https://cran.r-project.org/bin/linux/ubuntu/
echo "deb https://cloud.r-project.org/bin/linux/ubuntu $(lsb_release -cs)-cran35/" | sudo tee "/etc/apt/sources.list.d/$(lsb_release -cs)-cran35.list"

# Add keys for the CRAN repository
gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
gpg -a --export E298A3A825C0D65DFD57CBB651716619E084DAB9 | sudo apt-key add -

# Update packages
sudo apt update
sudo apt upgrade
sudo apt autoremove

# Start R
R
```

### Upgrade to latest R version (4.0)

The default version in Ubuntu is usually a few versions behind the newest R version available. Follow the code below if you need the newest version.

::: warning Please note
Running upgrade affects versions of all packages on your machine. This may break your or others environments.
We recommend installing new R version using [Conda](/do-science/analytical/r-studio/#install-using-conda) instead.
:::


```bash
# -- Add the new package repository to your sources list:
echo "deb https://cloud.r-project.org/bin/linux/ubuntu $(lsb_release -cs)-cran40/" | sudo tee "/etc/apt/sources.list.d/$(lsb_release -cs)-cran40.list"

# Add keys for the r-project repository
gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
gpg -a --export E298A3A825C0D65DFD57CBB651716619E084DAB9 | sudo apt-key add -

# -- Update packages
sudo apt update
sudo apt upgrade
sudo apt install r-base
sudo apt autoremove -y

# -- Start R
R
```

### Downgrade to a specific R version (IAAS machines)

Sometimes you may want to pin your R version to a specific release to please specific packages required for your work.
Below are a guide on how to downgrade and pin your R version to a specific release (just in case your figured out the need _after_ you upgraded R to a new version...).
The guide is copied from this great [forum post](https://askubuntu.com/questions/1056630/r-3-5-0-not-working-on-ubuntu-18-04/1057231#1057231).

::: warning Please note

This setup below will only work on IAAS- or BLUE-machines as they require administrator privileges.
Contact us if you need to downgrade the R version on your home machine.

:::

#### Save the R-packages that is already installed in your lab

```bash
dpkg -l | grep "^ii  r-" > r_packages.txt
```

#### Pin the software version to a specific version (in this case R 3.5)

```bash
cat <<EOF | sudo tee /etc/apt/preferences.d/pin-r35
Package: r-*
Pin: release a=$(lsb_release -cs)-cran35
Pin: version 3.5*
Pin-Priority: 800

Package: r-cran-nlme
Pin: release a=$(lsb_release -cs)-cran35
Pin: version 3.1.139-1$(lsb_release -cs)0
Pin-Priority: 800
EOF
```

#### Purge and remove the current R version

```bash
sudo apt purge r-*
sudo apt autoremove
```

#### Re-install your specific R version and your r-packages

```bash
sudo apt-get install $(cat r_packages.txt | awk '{print $2}')
```

#### Check that the new correct version is running

```bash
R

R version 3.5.3 (2019-03-11) -- "Great Truth"
```

#### Optional, remove the version pinning

Remove your pin-file if you want to revert to the newest version.

```bash
sudo rm /etc/apt/preferences.d/pin-r35
sudo apt update
sudo apt upgrade
```

## Install R Studio

We do provide the opportunity for a graphical interface via R Studio.
Researchers may install this on unmanaged machines.

::: tip
Make sure R-Studio is not already installed, if the lab was setup before command will return path.

```bash
which rstudio
```

:::

::: warning Please note

Installation on home-machines requires us to run some code.

The below guide will therefore not work on home-machines.

:::

::: warning Dependencies

`Without these, it will be impossible to get RStudio to work.`

- R (installed as above)
- A machine prepared for a [graphical interface (X2Go)](/do-science/technical/x2go/)
- An IAAS-machine or BLUE-machine with administrator access

:::

### Download the latest software version

Search [www.rstudio.com](https://www.rstudio.com/products/rstudio/download/#download) for the latest version in accordance with your operating system (e.g. Ubuntu 18.04 Bionic).
The below text is an example code which you may cut and paste into your shell:

```bash
# download the package
wget https://download1.rstudio.org/rstudio-xenial-1.1.463-amd64.deb -O /tmp/rstudio.deb

# install essential dependencies
sudo apt update && sudo apt install -y libnss3 libasound2

# install rstudio
sudo apt install /tmp/rstudio.deb

# clean up files
rm /tmp/rstudio.deb
```

::: warning Latest version
If you plan to install latest version (>=1.2.0) remember to use `--disable-gpu` parameter when running R-Studio
or setup environment variable as mentioned in [Troubleshooting RStudio Rendering Errors](https://support.rstudio.com/hc/en-us/articles/360017886674-Troubleshooting-RStudio-Rendering-Errors).
:::

### Configure X2Go

To automatically start RStudio, revisit your _Session preferences_ in the [X2Go setup](/do-science/technical/x2go/) and update your _Single application command path_ to `/usr/bin/rstudio`and _Create a session icon on the desktop..._.

::: tip NOTE
There is a known bug in x2go `1.1.456` that will go away if you comment out (add # before) a line in the x2goagent.options:

```bash
sudo vim /etc/x2go/x2goagent.options
# X2GO_NXAGENT_DEFAULT_OPTIONS+=" -extension BIG-REQUESTS"
```

:::

## Troubleshooting

### I cannot create R_TempDir

If your system disk is full, R will not be able to store temporary files used for computation. You may see the error message **`Fatal error: cannot create 'R_TempDir'`**. [Click here](/faq/storage/#how-can-i-see-the-sizes-of-my-lab-volumes) to verify if the disk disk is full, and this guide to change your temp folder to a larger volume.

### Installation of devtools

You may need to install some more dependencies to get `install.packages("devtools")` going:

```bash
sudo apt update
sudo apt install libcurl4-openssl-dev libssh2-1-dev libssl-dev libxml2-dev
```

### RStudio do not recognize the latest R-version

Since R versions can be installed side-by-side on a system, you may need to select which version of R you would like RStudio to use. Click the [Chaning R versions for RStudio desktop](https://support.rstudio.com/hc/en-us/articles/200486138-Changing-R-versions-for-RStudio-desktop) on the RStudio support pages for more information.

### PredictABEL, matplotlib, viridis, or plyr fails to import

If running `library(PredictABEL)` in rstudio server fails with:

```bash
Error: package or namespace load failed for 'PredictABEL':
 .onLoad failed in loadNamespace() for 'tcltk', details:
  call: fun(libname, pkgname)
  error: (converted from warning) couldn't connect to display ":0"
```

You need to install these packages related to tcl and tk:
```bash
sudo apt update
sudo apt install tcl tcl8.6 tk tk-table tk8.6
```

### RStudio or R becomes unresponsive when I run my code

It might be good to check the resource consumption on your lab machine. The response may be reduced if you or your lab mates consume all memory and/or CPU. A quick way to do this is via [HTOP and time](https://docs.hdc.ntnu.no/faq/compute/#can-i-monitor-my-resource-consumption). 

For example, if you use all your memory you might need to reduce your table sizes or upgrade your machine size. If your lab mates consume all your resources you may want to ask them to spare some for you.


