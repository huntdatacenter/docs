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

You will find the following storage volumes inside your [home](compute/#what-is-a-home-machine) machine in your lab:

| **Name** | **Location** | **Recommended use** | **Recovery** |
| - | - | - | - | 
| home | **`/home/`** | Private space for lab users. | None. |
| work | **`/mnt/work/`** | Workspace for all lab users. | Nightly snapshots.* |
| scratch | **`/mnt/scratch/`** | Temporary files to keep costs down. |  None |
| archive | **`/mnt/archive/`** | Long term archiving at reduced cost. | Nightly snapshots.* | 
| cargo | **`/mnt/cargo/`** | Import and export of data. | None |

(*) The nightly snapshot for file changes are intended to protect against accidental deletion and accidental overwrites.


### How can I see the size of my lab storage? 

Log into your [home](compute/#what-is-a-home-machine) machine in your lab with your favourite terminal and type: **`df -h | grep -E '(^Filesystem|/dev/vd)'`**. This will give you an overview of the storage resources (volumes) that are allocated to your lab machine. Example output that list attached volumes: 

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

### Why is home so small? 

The intention behind HUNT Cloud is to establish collaborative lab environments where people become stronger together by sharing data, code, results and knowledge. We have therefore kept the private **`home`** volume to a minimum to encourage lab users to move their activities into collaborative volumes such as work, archive and scratch. [Contact us](/contact) for volumes expansion of these volumes if you are in need of space.



## Permissions

### Can other lab users access my data? 

Yes. HUNT Cloud is a collaborative computing platform where mutually trusted people work together in dedicated lab environments. Therefore, all lab users inside your lab may by access data that you store in work, archive, scratch and cargo. This may include both your scripts and your results. [Contact us](/contact) if you have data that need further protections, as we are happy to establishing dedicated labs in such circumstances.

### Can anyone access my home folder? 

Yes. Other lab users will not be able do access data in your home folder. However, please be aware that the data in your lab is under the control of your data controller. This includes data that you upload and generate, also data in your private home folder. This is stated in our [user agreement](/about/agreements/#user-agreement). You data controller or lab leader may request us to transfer data from your home folder into other folders that are accessible for other lab users, for example if you leave your lab. We will not expose your system keys during such moves.

### How can other lab users edit my files by default? 

Depending on your lab configuration, the files you generate may be read-only for other users. You may relax these permissions to read-write for any new files you create by adding **`umask 002`** to your **`~/.profile`** file ([more on umask](https://en.wikipedia.org/wiki/Umask)), for example by running this snippet in the command line inside your [home](/faq/compute/#what-is-a-home-machine) machine:

```bash
echo "
# -- set default file permissions for user and group to read-write
umask 002" >> ~/.profile; source ~/.profile
```




## Archiving

### How do I zip and unzip files in my lab? 

We recommend using the 7z software to compress and decompress files and folders. Read our [7z guide](/working-in-your-lab/technical-tools/7z/) to get going.



