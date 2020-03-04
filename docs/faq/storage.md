---
title: Storage
permalink: faq/storage
sidebarDepth: 1
---

# FAQ on lab storage

This page list frequently asked questions related to lab storage.

[[toc]]

## Resources

### How can I see my lab storage? 

Log into your `home` machine in your lab with your favourite terminal and type: `df -h | grep -E '(^Filesystem|/dev/vd)'`. This will give you an overview of the storage resources (volumes) that are allocated to your lab machine. Example output that list attached volumes: 

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
