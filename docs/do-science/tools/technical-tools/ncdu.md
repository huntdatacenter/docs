---
title: NCDU
category: Technical tools
permalink: /working-in-your-lab/technical-tools/ncdu
sidebarDepth: 1
description: Usage guide for NCDU.
---

# NCDU

[Ncdu](https://dev.yorhel.nl/ncdu/man) is a disk usage analyzer with an ncurses interface. It is designed to find space hogs on a remote server where you don't have an entire graphical setup available, but it is a useful tool even on regular desktop systems. Ncdu aims to be fast, simple and easy to use, and should be able to run in any minimal POSIX-like environment with ncurses installed.

## Linux

Install `ncdu` using the following command:

```
sudo apt install ncdu
```

## Usage

To start `ncdu`, simply run in the directory that you want to analyze:

```
ncdu
```

To analyze root volume (/) you can use ncdu with `-x` parameter. This helps to exclude other volumes mounted in the system, which are not taking space on root volume:
```
ncdu -x /
```

If you want to analyze disk usage on other volume you can use this example:
```
ncdu -x /mnt/archive
```
