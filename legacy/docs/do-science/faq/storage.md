---
title: Storage
category: FAQ
permalink: /do-science/faq/storage
sidebarDepth: 1
description: This page lists frequently asked questions related to lab storage.
---

# FAQ on lab storage

This page lists frequently asked questions related to lab storage.

[[toc]]

## Resources

### What storage does my lab have?

You will find the following storage volumes inside your [home](compute/#what-is-a-home-machine) machine in your lab:

| **Name** | **Location** | **Recommended use** | **Restore** |
| - | - | - | - |
| home | **`/home/`** | Private space for lab users | None |
| work | **`/mnt/work/`** | Workspace for all lab users | Nightly snapshots* |
| scratch | **`/mnt/scratch/`** | Temporary files |  None |
| archive | **`/mnt/archive/`** | Long term archiving | Nightly snapshots* |

(*) The nightly snapshot for file changes are intended to protect against accidental deletion and accidental overwrites.


### How can I see the sizes of my lab volumes?

Log into your [home](compute/#what-is-a-home-machine) machine in your lab with your favorite terminal and type: **`df -h --type=ext4`**. This will give you an overview of the storage resources (volumes) that are allocated to your lab machine. Example output that list attached volumes:

```bash
$ df -h --type=ext4
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1       9.7G  7.2G  2.6G  74% /
/dev/vdb1        99G   60M   94G   1% /home
/dev/vdc1       197G   61M  187G   1% /mnt/work
/dev/vdd1       493G   71M  467G   1% /mnt/archive
/dev/vde1       197G   60M  187G   1% /mnt/scratch
/dev/vdf1        99G   60M   94G   1% /mnt/cargo
```

### How can I find out what is taking the most space on volume?

We recommend using `ncdu` to get better overview of how the space on a specific volume is used. You can find more details in our [ncdu installation guide](/do-science/tools/technical/ncdu/).

### How can I move my tmp out of the root?

Log into your home machine in your lab with your favorite terminal and type:

```bash
echo "export TMPDIR=/mnt/scratch/tmp" >> ~/.profile
source ~/.profile
mkdir -p $TMPDIR
```

::: details Move tmp on blue and IaaS machines

To move tmp for the default Ubuntu user on blue and IaaS machines:

```bash
# Move tmp folder out of the system disk
echo "export TMPDIR=/home/ubuntu/tmp/" >> ~/.profile
source ~/.profile
mkdir -p $TMPDIR
```
:::


### Why is home only 100G?

The intention behind HUNT Cloud is to establish collaborative lab environments where people become stronger together by sharing data, code, results and knowledge. We have therefore kept the private **`home`** volume to a minimum to encourage lab users to move their activities into collaborative volumes such as work, archive and scratch. Order a volume expansion in our [service desk](/administer-science/service-desk/lab-orders/#expand-existing-volume) of these volumes if you are in need of space.

::: danger WARNING

There is -no- restore (backup) on your home-folder. All data in **`home`** may be lost in case of unexpected events. We strongly recommend that you keep the scientific data that your care about on the **`work`** or **`archive`** folders. [Click here](/administer-science/data/faq/#restore) to read more about restore.

:::

## Expansions

::: tip Data coordination
See our [data management FAQ](/administer-science/data/faq/) in our Coordination section for information on volume expansions.
:::

## Permissions

### Can other lab users access my data?

Yes. HUNT Cloud is a collaborative computing platform where mutually trusted people work together in dedicated lab environments. Therefore, all lab users inside your lab may by access data that you store in work, archive, scratch and cargo. This may include both your scripts and your results. [Contact us](/contact) if you have data that need further protections, as we are happy to establishing dedicated labs in such circumstances.

### Can anyone access my home folder?

Yes. More precise, other lab users will not be able do access data in your home folder directly. However, data in your lab is under the control of your data controller. This includes data that you upload and generate, also data in your private home folder. This is stated in our [user agreement](/administer-science/agreements/downloads/#user-agreement). Thus, your data controller or lab leader may request us to transfer data from your home folder into other folders that are accessible for other lab users or for compliance archiving, for example if you leave your lab. We will not expose your system keys during such moves.

### How can other lab users edit my files by default?

Depending on your lab configuration, the files you generate may be read-only for other users. You may relax these permissions to read-write for any new files you create by adding **`umask 002`** to your **`~/.profile`** file ([more on umask](https://en.wikipedia.org/wiki/Umask)), for example by running this snippet in the command line inside your [home](/do-science/faq/compute/#what-is-a-home-machine) machine:

```bash
echo "
# -- set default file permissions for user and group to read-write
umask 002" >> ~/.profile; source ~/.profile
```

### Can I restrict permissions to files within my lab?

Yes. Sometimes you might want to restrict write permissions to avoid accidental overwrites or accidental deletions of valuable data in your `home`-machine. You may restrict the write access to files with the `chmod` command.

```bash
# -- restrict write privileges for individual file
chmod 600 <filename>

# -- Restrict write privileges for all files in a folder
chmod 600 -R <foldername>
```

::: details Principal example

Log into your lab and test the privileges settings:

```bash
# move to scratch
cd /mnt/scratch

# Make a test file
touch test.txt

# Restrict write privileges to you only
chmod 600 test.txt

# Check privileges
ls -lh test.txt
```
:::

::: warning

We do -not- recommend using `chmod` to restrict access to data within your lab for confidentiality purposes. All data within a lab will principally be accessible for all lab users in our agreement framework. [Contact us](/contact) for a dialogue on heightened security measures if you need increased data confidentiality.

:::


## Restore

::: tip

See our [Data administrator FAQ](/administer-science/data/faq/#restore) for questions regarding backup and restore.

:::



## General archiving

### How do I zip and unzip files in my lab?

We recommend using the 7z software to compress and decompress files and folders. Read our [7z guide](/do-science/tools/transfer/7z/) to get going.









## IaaS and blue storage

This section list commonly asked questions for storage our unmanaged [IaaS and blue machine types](/do-science/faq/compute/#machine-types) that you maintain yourself.

### What storage do I get on IaaS and blue machines?

Default IaaS and blue machines comes with a 1TB empty volume attached to your **`/home`** folder. That is the same folder as you log into with the default user (**`/home/ubuntu`**). You can request other storage sizes according to your need before deployment.

### Where is my data?

Your data is located on your [home](/do-science/faq/compute/#machine-types) machine. You will need to (1) transfer data to your IaaS and blue machine for analysis, and (2) transfer your your results back to your home machine for long term preservation afterwards.


### How can I transfer data to my IaaS and blue machines?

We recommend **`rsync`** for data transfers between your home machine and IaaS and blue machines. This will sync up your data and only transfer files that has changed since your last transfer.

```bash
# -- Principal example
rsync <options> <source> <destination>

# -- Principal example from your home machine to your iaas machine
rsync -avhP <home-folder> ubuntu@<iaas-macine-name>:<iaas-folder>

# -- Practical example from your home machine to your iaas machine:
rsync -avhP /mnt/scratch/data/ ubuntu@demolab-blue-sarga:~/data/
```


### Where should I store my data on IaaS and blue machines?

You are free to create the directory structure that fits your needs under the **`/home`** folder in your IaaS and blue machines. For example, under the default login folder (**`/home/ubuntu/`**):

```bash
mkdir data
```

### Do IaaS and blue machines have backup?

::: warning
Your IaaS and blue machines have **NO** backup installed by default. You will need to transfer your results back to your **`/mnt/archive`** and **`/mnt/work`** folders on your **`home`** machine for restore provided by us.
:::


### What happens to my data when IaaS and blue machines are destroyed?

::: danger DANGER

All data on IaaS and blue machines will be lost when your machine is reclaimed. It is your sole responsibility to ensure that you transfer the data that your care about from your IaaS and blue machines back to your home machine for long term preservation.
:::

### My scripts require data storage outside of the /home folder

When you need to store larger chunks of data outside of your **`/home`** folder, **`bind mounts`** is a handy tool. With a bind mount you can create whatever path you need on the file system and map it back to a suitable location under your **`/home`** folder. Such trick might be handy if you want to transfer the exact same scripts from your **`home`** machine (not to be confused with the **`/home`** folder on your IaaS and blue machines, sorry...) to your new IaaS and blue machines:

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

## Storage retype

Migrating data between different types of storage. Typically between regular and fast storage systems.

### Stages of retyping

1. Premigration - the work we do in the background that does not require any downtime.
2. Migration - final synchronization of data that requires downtime

### Time estimate

We typically prepare the premigration within 1 to 14 days, for storages between 1 TB to 25 TB respectively.

The downtime estimate that you care about the most usually take around 2 ~ 4 hours depending on the size of storage and amount of daily changes in data.

### Will my data be placed in different directories?

No. Data paths will not change.
