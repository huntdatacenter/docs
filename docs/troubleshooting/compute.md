---
title: Compute
category: Troubleshooting
permalink: /troubleshooting/compute
sidebarDepth: 1
description: Troubleshooting installation, third-party software, and setup.
---

# Troubleshooting machine issues

[[toc]]


## Software installation

### Permission denied

You will need to use the **`sudo`** command when you [install software](/faq/compute/#software) with the **`sudo apt install <package>`** command. If forgotten, apt will return an error message like this:

```
E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
```

Rerun your command with sudo. [Contact us](/contact) if this doesn't solve your issue.

## Full system disk

### Set new tmp folder path

Depending on you workflow, the **`/tmp`** folder on the system disk may fill up. In such circumstances, we do recommend that you point your temporary files to a larger directory on your **`scratch`** volume.

```
# Make a new tmp folder
mkdir -p /mnt/scratch/tmp

# Add the new tmp folder path
echo 'export TMP=/mnt/scratch/tmp' >> .bashrc

# Activate the new path
source .bashrc
```



## Third-party software

### Matlab

See our [Matlab troubleshooting section](/working-in-your-lab/analytical-tools/Matlab/#activate-license)..

### Stata

See our [Stata troubleshooting section](/working-in-your-lab/analytical-tools/stata/#troubleshooting).

## Setting locales failed

Example of such an issue:

```
During startup - Warning message:Setting LC_CTYPE failed, using "C"
```

1. Check if locale settings are missing
```
> locale
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

4. Open a new terminal window and check that the locales are properly set:

```
> locale
LANG="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_CTYPE="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_ALL="en_US.UTF-8"
```
