---
title: Azcopy
category: Transfer tools
permalink: /do-science/tools/transfer/azcopy
sidebarDepth: 1
description: Installation and usage guide for azcopy.
---

# Transferring data from Azure Storage

Guide below is meant for users who want to transfer data from Azure Storage to HUNT Cloud lab.

::: warning
This guide is meant to help you setup correct parameters for your transfer and is not indented as a full guide to azcopy. For proper guidance, follow official Microsoft documentation.

::: 

## Installation

You can use [conda](https://anaconda.org/conda-forge/azcopy) to install azcopy.


## Setup parameters

Before you begin your transfer, make sure to setup below parameters

```bash
export AZCOPY_CONCURRENCY_VALUE=16
```

```bash
# First test with timeout
timeout 900 azcopy cp --cap-mbps 400 --recursive  ...
```

```bash
# If all is fine remove timeout
azcopy cp --cap-mbps 400 --recursive  ...
```
