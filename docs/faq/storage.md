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


## General archiving

### How do I zip and unzip files in my lab? 

We recommend using the 7z software to compress and decompress files and folders. Read our [7z guide](/working-in-your-lab/technical-tools/7z/) to get going.









## Iaas and blue storage

This section list commonly asked questions for storage our unmanaged [iaas and blue machine types](/faq/compute/#machine-types) that you maintain yourself.

### Where is my data?

Your data is located on your [home](/faq/compute/#machine-types) machine. You will need to transfer data to your iaas and blue machine for analysis and your will need to transfer your results back home afterwards.

### What storage do I get on iaas and blue machines? 

Default iaas and blue machines comes with a 1TB empty volume attached to your **`/home`** folder. That is the same folder as you log into with the default user (**`/home/ubuntu`**). You can request other storage sizes according to your need.


### How can I transfer data to my iaas and blue machines?

We recommend **`rsync`** for data transfers between your home machine and iaas and blue machines. This will sync up your data and only transfer files that has changed since your last transfer.

```bash
# -- Principal example from your home machine:
rsync -avhP ubuntu@<iaas-macine-name>:<iaas-folder> <home-folder>

# -- Practical example from your home machine: 
rsync -avhP ubuntu@demolab-blue-sarga:~/results/ /mnt/scratch/results/
``` 

### Where should I store my data on iaas and blue machines? 

You are free to create the directory structure that fits your needs under the **`/home`** folder in your iaas and blue machines. For example, under the default login folder (**`/mnt/ubuntu/`**): 

```bash
mkdir workflow
```

### Do iaas and blue machines have backup? 

No. You will have to transfer your results back to your **`/mnt/archive`** and **`/mnt/work`** folders on your **`home`** machine for nightly backups provided by us. Alternatively, your can install your own solution of choice for data duplication.

### What happens to my data when iaas and blue machines are destroyed? 

::: danger

All data on iaas and blue machines will be lost when your machine is reclaimed. It is your sole responsibility to ensure that you transfer the data that your care about from your iaas and blue machines back to your home machine for long term preservation.
:::

### My scripts require data storage outside of the /home folder

When you need to store larger chunks of data outside of your **`/home`** folder, **`bind mounts`** is a handy tool. With a bind mount you can create whatever path you need on the file system and map it back to a suitable location under your **`/home`** folder. Such trick might be handy if you want to transfer the exact same scripts from your **`home`** machine (not to be confused with the **`/home`** folder on your iaas and blue machines, sorry...) to your new iaas and blue machines:

```bash
# -- Principal example: 
sudo mkdir -p /path/outside/home
sudo mount --bind /home/directory/stucture /path/outside/home

# -- Working example:
sudo mkdir -p /home/ubuntu/workflow
sudo mkdir -p /mnt/work/workflow
sudo mount --bind /home/ubuntu/workflow /mnt/work/workflow
ls /mnt/work/workflow
```

