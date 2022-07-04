---
title: Storage
category: FAQ
permalink: /faq/storage
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

### How can I find out what is taking the most space on volume?

We recommend using [ncdu](/working-in-your-lab/technical-tools/ncdu/) to get better overview of how the space on a specific volume is used. You can find more details in our [ncdu installation guide](/working-in-your-lab/technical-tools/ncdu/).

### How can I move my tmp out of the root?

Log into your machine in the lab with your favourite terminal and type:

```
echo "export TMPDIR=/mnt/scratch/tmp" >> ~/.profile
source ~/.profile
mkdir -p $TMPDIR
```

### Why is home only 100G?

The intention behind HUNT Cloud is to establish collaborative lab environments where people become stronger together by sharing data, code, results and knowledge. We have therefore kept the private **`home`** volume to a minimum to encourage lab users to move their activities into collaborative volumes such as work, archive and scratch. Order a volume expansion in our [service desk](/service-desk/lab-orders/#expand-existing-volume) of these volumes if you are in need of space.

::: danger WARNING

There is -no- restore (backup) on your home-folder. All data in **`home`** may be lost in case of unexpected events. We strongly recommend that you keep the scientific data that your care about on the **`work`** or **`archive`** folders. [Click here](/faq/storage/#restore) to read more about restore.

:::

## Expansions

::: tip Data coordination
See our [data management FAQ](/data/faq/) in our Coordination section for information on volume expansions.
:::

## Permissions

### Can other lab users access my data?

Yes. HUNT Cloud is a collaborative computing platform where mutually trusted people work together in dedicated lab environments. Therefore, all lab users inside your lab may by access data that you store in work, archive, scratch and cargo. This may include both your scripts and your results. [Contact us](/contact) if you have data that need further protections, as we are happy to establishing dedicated labs in such circumstances.

### Can anyone access my home folder?

Yes. More precise, other lab users will not be able do access data in your home folder direclty. However, data in your lab is under the control of your data controller. This includes data that you upload and generate, also data in your private home folder. This is stated in our [user agreement](/agreements/downloads/#user-agreement). Thus, your data controller or lab leader may request us to transfer data from your home folder into other folders that are accessible for other lab users or for compliance archiving, for example if you leave your lab. We will not expose your system keys during such moves.

### How can other lab users edit my files by default?

Depending on your lab configuration, the files you generate may be read-only for other users. You may relax these permissions to read-write for any new files you create by adding **`umask 002`** to your **`~/.profile`** file ([more on umask](https://en.wikipedia.org/wiki/Umask)), for example by running this snippet in the command line inside your [home](/faq/compute/#what-is-a-home-machine) machine:

```bash
echo "
# -- set default file permissions for user and group to read-write
umask 002" >> ~/.profile; source ~/.profile
```

### Can I restrict permissions to files within my lab?

Yes. Sometimes you might want to restrict write permissions of files for valuable data to avoid accidental overwrites or accidental deletions. You can restrict this with the `chmod` command.

```
# -- restrict write privileges for individual file
chmod 600 <filename>

# -- Restrict write privileges for all files in a folder
chmod 600 -R <foldername>
```

::: details Principal example

Log into your lab and test the privileges settings, and then ask one of your lab colleagues to test edit the file:

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

::: warning Confidentiality

We do -not- recommend using `chmod` to restrict access to data within your lab for confidentiality purposes. All data within a lab will principally be accessible for all lab users in our agreement framework. [Contact us](/contact) for a dialogue on heightened security measures if you need increased data confidentiality.

:::


## Restore

### Do I have 'backup' in my lab?

Yes and no. We have activated restore functionality for two folders in your home machine by default, **`/mnt/work`** and **`/mnt/archive`**. No other volumes on your home machine, nor your iaas and blue machines have restore activated by deployment.

::: warning

Restore is activated for two volumes in your lab: **`/mnt/work`** and **`/mnt/archive`**. No other volumes have restore by default.

:::

### How does restore work?

The restore is intended to protection your data against accidental overwrites and accidental deletion of files in your lab. Therefore, we do nightly copies of data that has changed during the day from your **`/mnt/work`** and **`/mnt/archive`** volumes. This allows you to revert to previous versions of your files from the period that your restore copies are preserved.

::: danger

Your data are stored in one (1) physical location. This means that your restore do -not- protect against accidents that destroy this location. Keep at least one copy of your data outside HUNT Cloud, or use our tape service to keep encrypted offsite tapes, to ensure improved geographical distribution for data that need such protection.

:::

### How long do you keep my restore copies?

We keep restore files for thirty (30) days by default. This means that you can revert to daily versions of your files in your **`/mnt/work`** and **`/mnt/archive`** volumes as they existed on an individual day over this period.

### Where do I find my restore files?

You can see your restore files by visiting the **`.restore`** folder in the **`/mnt/work`** and **`/mnt/archive`** volumes.

```bash
ls /mnt/work/.restore
ls /mnt/archive/.restore
```

This should give you the list of folders with the date and time for your individual restores in that folder.

```
2020-01-29-054701  2020-02-10-054701  2020-02-23-054701
2020-01-30-054701  2020-02-11-054701  2020-02-24-054701
2020-01-31-054701  2020-02-13-054701  2020-02-25-054701
2020-02-01-054701  2020-02-14-054701  2020-02-26-054701
2020-02-02-054701  2020-02-15-054701  2020-02-27-054701
2020-02-03-054701  2020-02-16-054701
2020-02-04-054701  2020-02-17-054701
2020-02-05-054701  2020-02-18-054701
2020-02-06-054701  2020-02-19-054701
2020-02-07-054701  2020-02-20-054701
```

### How can I restore a file?

You will find your files inside the above folders. Move into the folder, for example by using the **`cd <foldername>`** command to identify your file of interest. Then, copy that file or folder back into your current lab folders.

```bash
# -- Principal example
cp /mnt/archive/.restore/2020-02-27-054701/<my-file.txt> .
ls
```

### Who is responsible for our restore?

We are responsible to ensure that the technical side of your restore work for the **`/mnt/work`** and **`/mnt/archive`** volumes. One or more lab users are assigned to the **`restore`** group that can remove files for your restore folders. These users are responsible for the data inside the restore folders.

### Can I delete restore folders?

Labs users assigned to the **`restore`** group can edit and delete files inside your restore folders. You can see if you are attached to this group by running the **`groups`** command:

```bash
groups
```

You should be able to delete restore files if **`restore`** is among the listed groups. Contact your lab leader if you are not listed and you think that you need such authorization. You lab leader can [contact us](/contact) and request that you gets added to this group.

### Do restore consume storage space?

Yes. Your restore folders are stored inside your  **`/mnt/work`** and **`/mnt/archive`** volumes. This will consume storage space in these volumes as a regular folder. Typically, restore will take one duplicate copy of your data and then incremental changes over the 30 day period. You should therefore plan your volume sizes for at least twice the amount of data that you plan to store.

### What is the size of our restore folders?

You can see the consumption of your default restore folders with the following command:

```bash
du -sh /mnt/work/.restore/*
du -sh /mnt/archive/.restore/*
```

### Why is my restore folders filling my volumes?

We take nightly copies of data that has changed over the last day. Thus, folders with data that change on a daily basis will continuously grow your restore. For example, if you store temporary files from your analysis in work or archive. One good way to avoid this is to use your **`/mnt/scratch`** volume for such temporary files.

### Can we deactivate our restore?

Yes. Lab leaders can [contact us](/contact) and request that we deactivate restore for individual folders in your home machine.

### Can I control if my restore works as intended?

Yes. You can check for yourself that your restore is working as intended:

1. Start by controlling that your restore folders do exist, and if so hold duplicate copies from the last 30 days. You should expect to see 30 subfolders with daily time stamps within each **`.restore`** folder:

```bash
ls /mnt/work/.restore/
ls /mnt/archive/.restore/
```

2. Check the size of your daily restore folders (see above). You should expect the earliest date to hold most of your date (largest storage size) and the others to show sizes according to your data changes. Depending on your volume sizes, these commands may take up to many minutes.

3. Manually inspect the content of individual folders inside your daily restores using **`cd <folder>`**.

4. Test that you are able to [copy out a file or folder](/faq/storage/#how-can-i-restore-a-file) into your regular lab storage.

Celebrate the success if you are able to successfully export a file, or [contact us](/contact) if you think something is wrong with your restore.





## General archiving

### How do I zip and unzip files in my lab?

We recommend using the 7z software to compress and decompress files and folders. Read our [7z guide](/working-in-your-lab/transfer-tools/7z/) to get going.









## Iaas and blue storage

This section list commonly asked questions for storage our unmanaged [iaas and blue machine types](/faq/compute/#machine-types) that you maintain yourself.

### What storage do I get on iaas and blue machines?

Default iaas and blue machines comes with a 1TB empty volume attached to your **`/home`** folder. That is the same folder as you log into with the default user (**`/home/ubuntu`**). You can request other storage sizes according to your need before deployment.

### Where is my data?

Your data is located on your [home](/faq/compute/#machine-types) machine. You will need to (1) transfer data to your iaas and blue machine for analysis, and (2) transfer your your results back to your home machine for long term preservation afterwards.


### How can I transfer data to my iaas and blue machines?

We recommend **`rsync`** for data transfers between your home machine and iaas and blue machines. This will sync up your data and only transfer files that has changed since your last transfer.

```bash
# -- Principal example
rsync <options> <source> <destination>

# -- Principal example from your home machine to your iaas machine
rsync -avhP <home-folder> ubuntu@<iaas-macine-name>:<iaas-folder>

# -- Practical example from your home machine to your iaas machine:
rsync -avhP /mnt/scratch/data/ ubuntu@demolab-blue-sarga:~/data/
```


### Where should I store my data on iaas and blue machines?

You are free to create the directory structure that fits your needs under the **`/home`** folder in your iaas and blue machines. For example, under the default login folder (**`/mnt/ubuntu/`**):

```bash
mkdir data
```

### Do iaas and blue machines have backup?

::: warning
Your iaas and blue machines have **NO** backup installed by default. You will need to transfer your results back to your **`/mnt/archive`** and **`/mnt/work`** folders on your **`home`** machine for restore provided by us.
:::


### What happens to my data when iaas and blue machines are destroyed?

::: danger DANGER

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
