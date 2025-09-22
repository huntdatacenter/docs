---
title: Rsync
category: Transfer tools
permalink: /do-science/tools/transfer/rsync
outline: 1
description: Installation and usage guide for Rsync.
---

# Rsync

**[RSync](https://linux.die.net/man/1/rsync) is a fast and extraordinarily versatile file copying tool. It can copy locally, to/from another host over any remote shell, or to/from a remote rsync daemon.**

[[toc]]

## Installation

### Install rsync on your lab machine

Log into your lab machine and run: 

```bash
sudo apt install rsync
```

### Install rsync on your local computer

::: details OS X / MacOS

```bash
brew install rsync
```

Note that the code above requires Brew: [Install Homebrew package manager for macOS: brew](https://brew.sh/).
:::


::: details Ubuntu

```bash
sudo apt install rsync
```

:::


## Use

Here are a few simple examples to get you started. 

### Transfer from your local computer

This is an example of data transfers from your local computer to your lab.

```bash
# -- Principal example
rsync -avuz path/to/your/local/directory <username>@<labname>:/mnt/scratch/

# -- Practical example
rsync -avuz path/to/your/local/directory demouser@demolab:/mnt/scratch/
```

### Transfer from your home machine to a blue machine

This is an example of data transfer from your home machine to a iaas or blue machine inside the same lab.

From your home machine: 

```bash
# -- Principal example
rsync -avuz /mnt/work/my/folder ubuntu@<machinename>:/home/ubuntu/

# -- Practical example
rsync -avuz path/to/your/local/directory ubuntu@demolab-blue-thea:/home/ubuntu/
```

### Transfer from your blue machine back to your home machine

This is an example of data transfer from a iaas or blue machine back to your home machine inside the same lab.

From your home machine: 

```bash
# -- Principal example
rsync -avuz ubuntu@<machinename>:/home/ubuntu/ /mnt/work/my/folder 

# -- Practical example
rsync -avuz ubuntu@demolab-blue-thea:/home/ubuntu/ path/to/your/local/directory
```

## More information

See the official [RSync](https://linux.die.net/man/1/rsync) documentation for further details.

## Troubleshooting

### Could not resolve hostname

This error typically happens if you did not complete the onboarding guides and you need to go back to step [3.5 SSH Configuration - Final steps](/do-science/lab-access/configure-ssh/#_3-5-final-steps).

```
ssh: Could not resolve hostname <labname>: nodename nor servname provided, or not known
```

