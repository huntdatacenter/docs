---
title: Lab activities
category: Troubleshooting
sidebarDepth: 1
description: Troubleshooting activities in your HUNT Cloud lab.
---

# Troubleshooting machine issues

[[toc]]



## Storage

### Full system volume

Lab machines becomes unresponsive if system volumes get filled up. [Click here](/faq/storage/#how-can-i-see-the-sizes-of-my-lab-volumes) to check the size and utilization of your volumes. Your system disk is full if **`/dev/vda1`** states 100 percent use:

```
Filesystem   Size Used Avail Use% Mounted on
/dev/vda1    9.7G 9.7G   0 100% /
```

We recommend that you run [ncdu](/faq/storage/#how-can-i-find-out-what-is-taking-the-most-space-on-volume) to get an overview over what's taking up space in your volume. For example, you may consider to [move your tmp folder](/faq/storage/#how-can-i-move-my-tmp-out-of-the-root) away from your system disk 

### Full data volumes

Data volumes are unable to store data when they fill up. [Click here](/faq/storage/#how-can-i-see-the-sizes-of-my-lab-volumes) to check the size and utilization of your volumes.

::: tip

We recommend that you [expand your volumes](/service-desk/lab-orders/#store), or compress and/or clean up your data when your volume utilization reach 85% (Use%). Above this threshold it will become increasingly complex to do work and data cleanups.  

::: 

### Accidentially deleted or overwritten files

It's frustrating to accidentially delete or overwrite data that you care about. For files on `/mnt/work` and `/mnt/archive` you have nightly copies stored in 30 days. [Click here](/data/faq/#where-do-i-find-my-restore-files) to see how you can find your restore copies and how your can [restore a file](/data/faq/#how-can-i-restore-a-file).



## HUNT Workbench

See our [Workbench troubleshooting section](/do-science/hunt-workbench/troubleshooting/).



## Software

### Permission denied during installation

You will need to use the **`sudo`** command when you [install software](/faq/compute/#software) with the **`sudo apt install <package>`** command. If forgotten, apt will return an error message like this:

```
E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
```

Rerun your command with sudo. [Contact us](/contact) if this doesn't solve your issue.


### MATLAB

See our [MATLAB troubleshooting section](/working-in-your-lab/analytical-tools/Matlab/#activate-license).

### R and Rstudio

See our [R and Rstudio troubleshooting section](/working-in-your-lab/analytical-tools/r-studio/#troubleshooting).

### Stata

See our [Stata troubleshooting section](/working-in-your-lab/analytical-tools/stata/#troubleshooting).



## General configuration

### Setting locales failed

In Ubuntu 18.04 and earlier may encounter the `setting locales failed` message when updating your packages. Example of such an error message may look like:

```
During startup - Warning message:Setting LC_CTYPE failed, using "C"
```

::: details Solution

1. Check if locale settings are missing

```
locale
```

Example of output of missing locale: 

```
LANG=
LC_COLLATE="C"
LC_CTYPE="UTF-8"
LC_MESSAGES="C"
LC_MONETARY="C"
LC_NUMERIC="C"
LC_TIME="C"
LC_ALL=
```

2. Edit `~/.profile` or `~/.bashrc`:

```
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
```

3. Run `. ~/.profile` or `. ~/.bashrc` to read from the file.

```
. ~/.profile
. ~/.bashrc
```

4. Open a new terminal window and check that the locales are properly set:

```
locale
``` 

Example of output with locale set: 

```
LANG="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_CTYPE="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_ALL="en_US.UTF-8"
```

:::


