---
title: Lftp
category: Transfer tools
permalink: /working-in-your-lab/transfer-tools/lftp
sidebarDepth: 1
description: Installation and usage guide for lftp.
---

# Lftp

[Lftp](https://linux.die.net/man/1/lftp) is a file transfer program that allows sophisticated ftp, http and other connections to other hosts. If site is specified then lftp will connect to that site otherwise a connection has to be established with the open command.

::: tip
  Lftp can be used as an alternative to sftp when transfering files in and out of Kista.
:::

## Installation

### Conda

```
conda install -r conda-forge lftp
```

### Ubuntu

Install using apt:

```
sudo apt install lftp
```

### Mac OS X

::: warning REQUIREMENT
Installation on macOS requires [Homebrew package manager](https://brew.sh/)
:::

```
brew install lftp
```

## Usage

We recommend reading [lftp manuals](https://linux.die.net/man/1/lftp), which provides
extensive overview of features.

### Connecting to Kista

To connect to your kista you will need to prepend the alias with `sftp://`, example:

```bash
lftp sftp://kista
```

We recommend to use `mirror` command, which works similar to rsync.
