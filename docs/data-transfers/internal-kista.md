---
title: Internal kista
category: Data transfers
permalink: /data-transfers/internal-kista
sidebarDepth: 1
description: Internal kistas provide labs with a simple and controlled way to transfer data between two labs inside HUNT Cloud.
---

# Internal kista

Internal kistas provide labs with a simple and controlled way to transfer data between two labs inside HUNT Cloud. In short, internal kistas are short-lived and hardened [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) servers dedicated to one data transaction between two labs.

::: tip Note
This page describes the practical aspects of kista transfers. Head over to our [internal transfer](/faq/internal-transfer/) section in the FAQ for more information on the service itself.
:::


[[toc]]

## Order

Internal kistas are ordered by the uploader Lab leader or Lab coordinator using the [Internal kista transfer order](/agreements/downloads/#internal-kista-transfer-form). Forward the order [to us](/contact) for deployment.

The kista order defines two roles that we will use in this document:

- **Uploader**. This is the lab user in the Lab that has ordered the Kista and that will provide (upload) data.
- **Downloader**. This the lab user in the lab that will receive (download) data.

## Connect

We wil notify you when your kista is deployed. You can then collect your account information directly from your home machine:

1. Log into your home machine
2. Collect your account information from the **`/opt/hunt-cloud/kista/`** folder:

```bash
# -- List kista account information files
ls /opt/hunt-cloud/kista/

# -- Principle example to see account information
less /opt/hunt-cloud/kista/*<number>*

# -- Practical example to see account information
less /opt/hunt-cloud/kista/*5623*
```

The account information will look similar to this:

```bash
### SFTP account information
Protocol: sftp
Server: 10.42.132.<number>
Port: 22
Username: <username>-upload
```

*Note. The information above is for illustration and will not work for your connection. Your account information will contain different Server and Username information.*

Next, connect to your kista using the SFTP protocol. This may seem unfamiliar at first, however its simple to use once you get going:

3. From your home machine, connect to the kista over SFTP using your account information collected above.

```bash
# -- Principal example
sftp <usernam>-upload@10.42.132.<number>

# -- Demo example
sftp demouser-upload@10.42.132.118
```

When successfully connected, you should see the following message in your terminal:

```
Connected to 10.42.132.<number>.
sftp>
```

## Upload

::: tip
This section is aimed at the lab user that will **upload** data to a kista. See the [download section](#download) if you plan to download data to your lab.
:::

1. Once inside your kista, move to the **`upload`** folder.

```bash
cd upload
```

2. Upload a file or folder by specifying its local path on your home machine.

```bash
# -- Upload individual file
put /mnt/cargo/example-file1.txt

# -- Upload folder
put -r /mnt/cargo/example-directory/
```

3. List files the current directory to verify the transfer

```bash
ls -lah
```

4. Disconnect from your the SFTP-server

```bash
quit
```

For large uploads, [terminal multiplexers](/working-in-your-lab/technical-tools/terminal-multiplexers/#gnu-screen) can be a handy tool allowing for the transfer to continue even when you log off from your home machine.

You can resume an upload with this command:

```bash
reput /mnt/cargo/example-file1.txt
```



## Download

::: tip
This section is aimed at the lab user that will **download** data from a kista.
:::

1. Once inside your kista, move to the **`upload`** folder.

```bash
cd upload
```

2. List files in the current directory.

```bash
ls -lah
```

2. Download a file or folder by specifying the file or folder name and the local path that you want to download to.

```bash
# -- Principal example
get <sftp-file> <home-machine-folder>

# -- Download individual file
get example-filename1.txt /mnt/cargo/

# -- Download folder
get -r example-directory /mnt/cargo/
```

3. Disconnect from your the SFTP-server

```bash
quit
```

For large downloads, [terminal multiplexers](/working-in-your-lab/technical-tools/terminal-multiplexers/#gnu-screen) can be a handy tool allowing for the transfer to continue even when you log off from your home machine.

You can resume a download with this command:

```bash
reget /mnt/cargo/example-file1.txt
```
