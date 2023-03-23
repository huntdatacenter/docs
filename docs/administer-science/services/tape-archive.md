---
title: Tape Archive
category: Services
sidebarDepth: 1
permalink: /administer-science/services/tape-archive
description: This page gives the official Cloud tape archive specification.
---
# Tape Archive

Following guide is meant to help you archive your data using simple bash commands and afterwards send it to us using internal [kista](/administer-science/service-desk/lab-orders/#internal-kista) where we can collect the data and store it on a long term tape medium.

::: warning Attention
Make sure to send us a tape archive [order](add link) before you continue with next steps.

:::

### 1. Identification of data

1.1 Identify what data you want stored on the tape. Mark down whole directories. Generally, we expect your data to be stored in /mnt/archive directory

1.2 Do you use symbolic links ? If you are not sure, you can identifiy symlink directories by first letter in permission string. Letter l stands for a symbolic link. You can also use command below to count your symlinks. If output is other than 0, contact us on slack for further instructions.

Example:
```bash
lrwxrwxrwx 1 root    root      28 Mar 21 07:59 test-symbolic-link -> /path/of/symbolic-link/ 
```

Command:
```bash
ls -lR /mnt/archive | grep ^l |wc -l
```


### 2. Compress data using tar

2.1 Check diskspace available with command below.

```bash
df -H
```

For compression of data we will use tar command and store archive in **/lab/scratch** directory.

2.2 Create a file_list of all files you want to save

```bash
find -L /mnt/archive -not -type d >  labname-filelist.txt # this will check /mnt/archive directory and list all files. Permissions can be issue 
```

Options used:  
-c: Create an archive.  
-z: Compress the archive with gzip.  
-v: Display progress in the terminal while creating the archive, also known as “verbose” mode. (optional)  
-f: Allows you to specify the filename of the archive.  
-h: Follow symlinks; archive and dump the files they point to. (optional)

Examples:   
```bash
tar -czvf single_file.tar.gz ~/archive/data.dta    # single file or directory
```

```bash
tar -chzvf archive_symlink.tar.gz ~/archive    # includes symbolic links
```

```bash
tar -czvf archive_multiple_dir.tar.gz /home/foo/one/test.txt /home/foo/two/data.dta  # compress multiple directories
```

```bash
tar -czvf excluded_files.tar.gz /included/path --exclude=/home/excluded/path --exclude=/home/another/excluded/path # excludes specified directories
```

3. Hash the data

Once you have compressed your files, you need to create a hash of the files using sha256sum command. 

single hash:
```bash
sha256sum your_archive.tar.gz > hash_archive.txt
```
4. Upload compressed data, hash file and file_list.txt to  [kista](/administer-science/service-desk/lab-orders/#internal-kista).

5. Notify us
