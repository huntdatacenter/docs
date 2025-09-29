---
title: RStudio and R
category: Getting started
outline: 0
permalink: /do-science/hunt-workbench/getting-started/5-rstudio
description: How to use RStudio and R
---

# RStudio and R

<!--

- What is the default environment for rstudio (r-base) and why do we use it
- Which packages are preinstalled in r-base environment
- How can this environment be recreated

-->

## R
We recommend using R via Conda, as its much more stable in your lab. This page contains guides on how you can setup R through Conda in your workbench

### How to create R environment

Here's an example on how to create a Conda environment with _R_ and _R-IRkernel_ kernel and commonly used packages, paste this into your [terminal](/do-science/hunt-workbench/faq#terminal) in workbench. Feel free to remove or add other packages if you wish:

```bash
mamba create -n <name> 'r-base>=4.0,<5.0' 'r-irkernel' 'r-devtools' 'r-remotes' 'r-dplyr' 'r-tidyverse' 'r-haven' 'r-languageserver' 'r-lintr' 'cmake' 'compilers' 'cmake' 'gmp'
```

## Rstudio

RStudio is configured to use packages installed in the conda environment named **`r-base`**.

### R packages

You can identify your current _R version_ packages in your [Workbench Terminal](/do-science/hunt-workbench/faq#terminal) following these steps:

1. Open your Workbench Terminal.

![workbench_terminal.png](./images/workbench_terminal.png)

2. List the packages in your **`r-base`** conda environment.

```bash
conda list -n r-base
```

### How to install R packages



If you want to install your own R packages, we recommend that you use [Conda](/do-science/tools/analytical/conda) where ever possible:

1. Open [Workbench Terminal](/do-science/hunt-workbench/faq#terminal):

![workbench_terminal.png](./images/workbench_terminal.png)

2. Activate r-base environment

```bash
conda activate r-base
```

3. Add packages to your **`r-base`** code environment:

```bash
# -- Principal example
conda install -n r-base -c conda-forge r-'<package-name>' r-'<another-package-name>'

# -- Practical example*
conda install -n r-base -c conda-forge r-dplyr
```

For example, the above example installs the [dplyr package](https://anaconda.org/conda-forge/r-dplyr).

3. When the installation is complete, open _RStudio_ or _R_ in your workbench (look further down for guide on [how to use R in terminal](https://docs.hdc.ntnu.no/do-science/hunt-workbench/getting-started/5-rstudio/#:~:text=activate%20r%2Dbase-,%23,-How%20can%20I)) and load your new package:

```bash
# -- Principal example
library(<package-name>)

# -- Practical example
library(dplyr)
```

You can defer to alternative methods such as `install.packages()` when the package is not available in Conda (see below).

### How do I install R packages not found in Conda?

If you don't find a _R package_ in Conda as described above, you may need to defer to running the **`install.packages()`** command inside R. We recommend to use **`R`** in your [workbench terminal](/do-science/hunt-workbench/faq#terminal) for such installations (instead of installing directly in RStudio) to avoid broken environment states in RStudio. Packages installed into your **`r-base`** environment through _R_ in terminal should be available in _RStudio_.

Packages installed into `r-base` environment through **R** in [terminal](/do-science/hunt-workbench/faq#terminal) will be available in **RStudio**.

Make sure to activate the `r-base` environment before running **R** command.

```bash
conda activate r-base
```

### How can I use R in my Workbench Terminal?

First, open your [Workbench Terminal](/do-science/hunt-workbench/faq#terminal).

Start by activating `r-base` environment:

```bash
conda activate r-base
```

Then run **R** inside your `r-base` environment:

```bash
R
```

Enjoy!

### How can I recover my R environment in case of broken package installation?

Sometimes you may get errors about the **`GLIBCXX`** library not being found and/or essential R packages are not working. This happens typically after installation of custom package. In such cases, you might consider to recreate your **`r-base`** environment from scratch:

1. Open your [workbench terminal](/do-science/hunt-workbench/faq#terminal) and run the following code to reset your **`r-base`** environment:

```bash
mamba create --yes -n r-base 'r-base>=4.0,<5.0' 'compilers' 'cmake' 'gmp' 'r-irkernel' 'r-devtools' 'r-remotes' 'r-dplyr' 'r-tidyverse' 'r-haven' 'r-languageserver' 'r-lintr'
```

If you have older setup without mamba, use conda command instead:
```bash
conda create --yes -n r-base 'r-base>=4.0,<5.0' 'compilers' 'cmake' 'gmp' 'r-irkernel' 'r-devtools' 'r-remotes' 'r-dplyr' 'r-tidyverse' 'r-haven' 'r-languageserver' 'r-lintr'
```

::: warning

This removes custom packages that you might have installed.

:::
