---
title: Saige
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/saige
sidebarDepth: 1
description: Installation guide for Saige
---

# Saige package for R

[SAIGE is an R package](https://github.com/weizhouUMICH/SAIGE) with scalable and
accurate implementation of generalized mixed model (Chen, H. et al. 2016).
It accounts for sample relatedness and is feasible for genetic association tests
in large cohorts and biobanks.

::: tip
If you are interested in using Saige, you should definitely give a try to
[Regenie](/working-in-your-lab/analytical-tools/regenie/), a strong C++ tool
for whole genome regression modelling of large GWAS.
:::

## Install using conda

::: warning Requirements

- Conda (miniconda), see our [Conda tutorial](/working-in-your-lab/analytical-tools/conda/) for more details.
- Conda channels: conda-forge, bioconda

:::

To install the latest version of SAIGE in your conda environment use:

```
conda install -c bioconda r-saige
```

After installation you should be able to import SAIGE library in R and run SAIGE scripts:

```
step1_fitNULLGLMM.R --help

step2_SPAtests.R --help

createSparseGRM.R --help
```

If you need to run your scripts with older version of R, you can use `3.5.1` and `3.6.1`:
```
conda install -c conda-forge -c bioconda "r-base=3.6.1" r-saige
```

## Install the hard way

The below guide is based on packages listed in the Dockerfile example in Github. It describes installation
of the [SAIGE R package](https://github.com/weizhouUMICH/SAIGE) on a clean IAAS or BLUE machine in HUNT Cloud.

::: warning Requirements

- Ubuntu operating system (current installation is tested on 18.04).
- Administrator privileges (HUNT IAAS or HUNT BLUE machines).
- Fresh coffee and 30 minutes to spare.

:::

### Defining your software directory

Below is an example:

```
# Define your software directory
software_dir="/home/ubuntu/software/"

# Create directory if it don't exist
mkdir -p $software_dir

# Move into the directory
cd $software_dir
```

### Install required APT packages

```
sudo apt update -y && sudo apt-get install -y \
    build-essential \
    cmake \
    curl \
    libboost-all-dev \
    libbz2-dev \
    libcairo2-dev \
    libcurl4-openssl-dev \
    liblzma-dev \
    libopenblas-dev \
    libpcre3-dev \
    libpng-dev \
    libreadline-dev \
    libssl-dev \
    libz-dev \
    python3-pip \
    python3-setuptools \
    unzip \
    gfortran \
    r-cran-rjava \
    openjdk-8-jdk
```

### Defining your Java version

Run the code below and manually choose java-8in the provided list and hit 'ENTER'.

```
# manual update to java-8-openjdk
sudo update-alternatives --config java
```

### Installing required python packages

```
pip3 install cget;
```

### Installing a specific R version

The current SAIGE version requires a specific R-version (3.5.1). The below snippets compile this specific version.

```
# ensure software dir
cd $software_dir

# define version
r_version="3.5.1";

# download
curl -O https://cloud.r-project.org/src/base/R-3/R-${r_version}.tar.gz;

# unzip
tar xvzf R-${r_version}.tar.gz;

# cleanup
rm R-${r_version}.tar.gz;

# move into r-folder
cd $software_dir/R-${r_version}

# configure
sudo ./configure \
  --with-x=no \
  --with-blas="-lopenblas" \
  --enable-R-shlib  \
  -enable-shared;

# make
sudo make; # TODO stopped here
sudo mkdir -p /usr/local/lib/R/lib;

# install
sudo make install;

# cleanup
cd $software_dir
sudo rm -rf $software_dir/R-${r_version}
```

### Installing SAIGE

```
cd $software_dir

# Download latest version
curl -OL https://github.com/weizhouUMICH/SAIGE/archive/master.zip

# Unpack
unzip master.zip

# Update file folder names
mv SAIGE-master/ SAIGE/

# Install required R-packages
Rscript SAIGE/extdata/install_packages.R

# Install SAIGE
R CMD INSTALL SAIGE
```

### Set number of threads for openblas

This steps adds a thread restriction on BLAS to avoid multithread
conflicts with other R packages.

First, add restriction to `step2_SPAtests.R`

```
echo "#!/usr/bin/env Rscript

# Restrict threads in openblas
hasOpenBlas = grepl(\"openblas\",extSoftVersion()[\"BLAS\"]);
if (hasOpenBlas) {
  ### Only when using openblas instead of blas
  require(inline)
  openblas.set.num.threads <- cfunction( signature(ipt=\"integer\"),
    body = \'openblas_set_num_threads(*ipt);\',
    otherdefs = c (\'extern void openblas_set_num_threads(int);\'),
      libargs = c (\'-L/opt/openblas/lib -lopenblas\'),
      language = \"C\",
      convention = \".C\")};
if (hasOpenBlas) openblas.set.num.threads(1)
" > insert_openblas_restriction.tmp
```

Then, add to file:

```
# cut header
cat SAIGE/extdata/step2_SPAtests.R | sed -n '1!p' > step2_body.tmp
```

### Combine

```
cat insert_openblas_restriction.tmp \
    step2_body.tmp > step2_SPAtests.R
Install the required 'inline' R-package:
echo 'req_packages <- "inline";
for (pack in req_packages) {
  if(!require(pack,character.only = TRUE)) {
    install.packages(pack, repos = "http://cran.us.r-project.org")}}' \
> install_inline.R
Rscript install_inline.R
rm install_inline.R
```

Add quick references:

```
# Move files to usr/local/bin for quick referencing
sudo mv SAIGE/extdata/step1_fitNULLGLMM.R /usr/local/bin/
sudo mv step2_SPAtests.R /usr/local/bin/
sudo mv SAIGE/extdata/createSparseGRM.R /usr/local/bin/
sudo chmod a+x /usr/local/bin/*.R
```

### Cleanup

```
rm -rf master.zip
rm -rf SAIGE
rm insert_openblas_restriction.tmp
rm step2_body.tmp
rm step2_SPAtests.R
```

### Testing SAIGE

```
step1_fitNULLGLMM.R

step2_SPAtests.R

createSparseGRM.R
```

More information
