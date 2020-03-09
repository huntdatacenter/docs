---
title: Storage
permalink: faq/storage
sidebarDepth: 1
---

# FAQ on lab storage

This page list frequently asked questions related to lab storage.

[[toc]]

## Resources

### What storage does my lab have?

You will find the following storage volumes on your lab [home](compute/#what-is-a-home-machine) machine:

| **Name** | **Location** | **Recommended use** | **Recovery** |
| - | - | - | - | 
| home | **`/home/`** | Private space for lab users. | None. |
| work | **`/mnt/work/`** | Workspace for all lab users. | Nightly snapshots.* |
| scratch | **`/mnt/scratch/`** | Temporary files to keep costs down. |  None |
| archive | **`/mnt/archive/`** | Long term archiving at reduced cost. | Nightly snapshots.* | 
| cargo | **`/mnt/cargo/`** | Import and export of data. | None |

(*) The nightly snapshot for file changes are intended to protect against accidental deletion and accidental overwrites.


### How can I see the size of my lab storage? 

Log into your [home](compute/#what-is-a-home-machine) machine in your lab with your favourite terminal and type: `df -h | grep -E '(^Filesystem|/dev/vd)'`. This will give you an overview of the storage resources (volumes) that are allocated to your lab machine. Example output that list attached volumes: 

```bash
$ df -h | grep -E '(^Filesystem|/dev/vd)'
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1       9.7G  7.2G  2.6G  74% /
/dev/vdb1        99G   60M   94G   1% /home
/dev/vdc1       197G   61M  187G   1% /mnt/work
/dev/vdd1       493G   71M  467G   1% /mnt/archive
/dev/vde1       197G   60M  187G   1% /mnt/scratch
/dev/vdf1        99G   60M   94G   1% /mnt/cargo
```

## Data

### How can I unzip a file? 

We recommend using the 7z software to unzip files and folders. Read our [7z guide](/working-in-your-lab/technical-tools/7z/) to get going.



