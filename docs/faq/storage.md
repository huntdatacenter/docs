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
| home | `/home/` | Private space for lab users | Snapshots for accidental deletion can be activated |
| work | `/mnt/work/` | Shared space among all lab users | Snapshots for accidental deletion can be activated |
| scratch | `/mnt/scratch/` | Temporary files to keep costs down |  None |
| archive | `/mnt/archive/` | Long term archiving at reduced cost | Offline and offsite tape duplicate can be activated | 
| cargo | `/mnt/cargo/` | Import and export of data | None |

- Initial volumes sizes will be decided by lab owners and can be expanded at a later stage.
- Data are duplicated within the same site to protect against data loss in the case of single equipment failure.
- Additional [iaas](compute/#what-is-an-iaas-machine) machines have `scratch` volumes without data recovery.

### How can I see the size of my lab storage? 

Log into your [home](compute/#what-is-a-home-machine) machine in your lab with your favourite terminal and type: `df -h | grep -E '(^Filesystem|/dev/vd)'`. This will give you an overview of the storage resources (volumes) that are allocated to your lab machine. Example output that list attached volumes: 

```bash
$ df -h | grep 'mnt\|Size\|home'
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1       9.7G  7.2G  2.6G  74% /
/dev/vdb1        99G   60M   94G   1% /home
/dev/vdc1       197G   61M  187G   1% /mnt/work
/dev/vdd1       493G   71M  467G   1% /mnt/archive
/dev/vde1       197G   60M  187G   1% /mnt/scratch
/dev/vdf1        99G   60M   94G   1% /mnt/cargo
```

### How is data classified in HUNT Cloud?

| **Classification** | **Description** | **Examples** | 
| - | - | - 
| Sensitive | Research data that can indirectly identify research participants. | Individual level data such as phenotype data and genotype data. | 
| Internal |  Research data that can *not* identify research participants. | Summary statistics, figures, computer code, non-human data, encrypted sensitive data. |

Storage volumes are classified as sensitive by default. Volumes may be declassified to internal in agreement with the respective data controllers and lab owners.

Volumes classified as internal may be mounted directly to individual lab users' machines under the following conditions: 

- the lab owner, the lab's host institution and data controller(s) allow such a set-up.
- the lab owner take the direct responsibility to ensure that volumes classified as internal do not hold sensitive data.

Please note that `direct identifiable research data`, such as names of research participants, personal identification numbers, phone numbers, address information, etc., must be stored outside our system.
