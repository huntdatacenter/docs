---
title: Storage
permalink: faq/storage
sidebarDepth: 2
---

# FAQ on lab storage

This page list frequently asked questions realted to lab storage.

[[toc]]

## Resources

### How can I see my lab storage? 

Log into your lab using MobaXterm (Windows) or your faviourite terminal (Mac/Linux) and type: **`df -h | grep 'mnt\|Size\|home'`**. This will give you an overview of the storage resources (volumes) that are allocated to your lab machine. Example output that list attached volumes: 

```bash
-home:~$ df -h | grep 'mnt\|Size\|home'
Filesystem      Size  Used Avail Use% Mounted on
/dev/vdb1        99G   60M   94G   1% /home
/dev/vdc1       197G   61M  187G   1% /mnt/work
/dev/vdd1       493G   71M  467G   1% /mnt/archive
/dev/vde1       197G   60M  187G   1% /mnt/scratch
/dev/vdf1        99G   60M   94G   1% /mnt/cargo
```

