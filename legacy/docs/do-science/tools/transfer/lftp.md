---
title: Lftp
category: Transfer tools
permalink: /do-science/tools/transfer/lftp
sidebarDepth: 1
description: Installation and usage guide for lftp.
---

# Lftp

**[Lftp](https://linux.die.net/man/1/lftp) is a file transfer program that allows sophisticated ftp, http and other connections to other hosts. If site is specified then lftp will connect to that site otherwise a connection has to be established with the open command.**

[[toc]]

::: tip
  Lftp can be used as an alternative to sftp when transfering files in and out of Kista.
:::

## Installation

### Install Lftp in your lab

Log into your lab machine and run one of the following codes to install `Lftp`: 

#### Conda

```bash
conda install -r conda-forge lftp
```

#### Apt

```bash
sudo apt install lftp
```


### Install Lftp in your local computer


::: details OS X / MacOS

```bash
brew install lftp
```
Note that the code above requires [Homebrew package manager](https://brew.sh/).

:::

::: details Ubuntu

```bash
sudo apt install lftp
```

:::

## Usage

We recommend that you read the [Lftp manuals](https://linux.die.net/man/1/lftp) to get yourself up and running. The guides provides and extensive overview of Lftp features.

### Connecting to Kista

To connect to your kista over Lftp you will need to prepend the alias with `sftp://`, example:

```bash
lftp sftp://kista
```

We recommend to use `mirror` command which works similar to rsyncfor larger transfers.


