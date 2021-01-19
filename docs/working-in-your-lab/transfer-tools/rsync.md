---
title: Rsync
category: Transfer tools
permalink: /working-in-your-lab/transfer-tools/rsync
sidebarDepth: 1
description: Installation and usage guide for Rsync.
---

# Rsync

[RSync](https://linux.die.net/man/1/rsync) is a fast and extraordinarily versatile file copying tool. It can copy locally, to/from another host over any remote shell, or to/from a remote rsync daemon.

## Installation

### Install on Linux (Ubuntu)

 ```bash
 sudo apt install rsync
 ```

### Install on Mac OS X

::: tip REQUIREMENT
[Install Homebrew package manager for macOS: brew](https://brew.sh/)
:::


```bash
brew install rsync
```

## Use

Here are a few simple examples to get you started. 

## Transfer from you local machine

This is an example of data transfers from your local machine to your lab.

```
# -- Principal example
rsync -avuz path/to/your/local/directory <labname>:/mount/cargo/

# -- Practical example
rsync -avuz path/to/your/local/directory demolab:/mount/cargo/
```

## Transfer from home machine to blue machine

This is an example of data transfer from your home machine a iaas or blue machine inside the same lab.

```
# -- Principal example
rsync -avuz /mnt/work/my/folder ubuntu@<machinename>:/home/ubuntu/

# -- Practical example
rsync -avuz path/to/your/local/directory demolab-blue-thea:/home/ubuntu/
```

## More information

See the official [RSync](https://linux.die.net/man/1/rsync) documentation for further details.


