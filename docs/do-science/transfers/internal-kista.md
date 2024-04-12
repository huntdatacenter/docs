---
title: Internal kista
category: Data transfers
permalink: /do-science/data-transfers/internal-kista
sidebarDepth: 1
description: Internal kistas provide labs with a simple and controlled way to transfer data between two labs inside HUNT Cloud.
---

# Internal kista

**Internal kistas provides controlled data transfers between two labs inside HUNT Cloud. In short, internal kistas are short-lived and hardened [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol)-servers dedicated to one data transaction between two labs.**

[[toc]]

::: tip Note
This page describes the practical aspects of kista transfers. Head over to our [internal transfer](/do-science/faq/internal-transfer/) section in the FAQ for more information on the service itself.
:::



## Order

Lab leaders and lab coordinators can order internal kistas in our administer-science [service desk](/administer-science/service-desk/lab-orders/#internal-kista).

## Roles

The kista order defines two roles that we will use in this document:

- **Uploader**. This is the lab user in the lab that has ordered the Kista and that will provide (upload) data.
- **Downloader**. This the lab user in the lab that will receive (download) data.

We will notify the lab user that registered as the uploader when the kista is deployed. The uploader is responsible for notifying the downloader when data is uploaded and ready to be downloaded.

## Connection details

You can view the kista transfer information directly from your home machine both as a uploader and downloader:

1. Log into your home machine
2. View the kista transfer information in the **`/opt/hunt-cloud/kista/`** folder:

```bash
# -- List kista transfer information files
ls /opt/hunt-cloud/kista/

# -- Principle example to see transfer information
cat /opt/hunt-cloud/kista/*<number>*

# -- Practical example to see transfer information
cat /opt/hunt-cloud/kista/*5623*
```

The transfer information will look similar to this:

```bash
### SFTP account information
Protocol: sftp
Server: 10.42.132.<number>
Port: 22
Username: <username>-<role>
```

*Note. The information above is for illustration and will not work for your connection. Your account information will contain different information for the "Server" and "Username".*

## Upload

::: tip
This section is aimed at the lab user that will **upload** data to a kista. See the [download section](#download) if you plan to download data to your lab.
:::

SFTP method allows you to connect to a remote kista through your home machine and safely transfer your data.

::: expander "SFTP" id="upload-sftp"

**Connect**

Connect to your kista using the SFTP protocol. This may seem unfamiliar at first, however its simple to use once you get going:

1. From your home machine, connect to the kista over SFTP using the transfer information collected above.

```bash
# -- Principal example
sftp <username>-<role>@10.42.132.<number>

# -- Demo example uploader
sftp demouser-upload@10.42.132.118
```

When successfully connected, you should see the following message in your terminal:

```
Connected to 10.42.132.<number>.
sftp>
```

**Upload**

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

For large uploads, [terminal multiplexers](/do-science/tools/technical/terminal-multiplexers/) can be a handy tool allowing for the transfer to continue even when you log off from your home machine.

You can resume an upload with this command:

```bash
reput /mnt/cargo/example-file1.txt
```

:::

LFTP method works in similar fashion, except it offers you more reliable transfer in case you are transferring a lot of data over long period of time using **mirror** option, f.e it will allow you to continue upload even if connection is broken.

::: expander "LFTP" id="upload-lftp"

**Connect and upload**

1. From your home machine, using command below you will be able to connect to remote kista and specify **directories** for transfer. Ideally you should run your command in [terminal multiplexer](/do-science/tools/technical/terminal-multiplexers/).


```bash
# -- Principal example
lftp -e "mirror -cR <upload_directory> /upload; bye" sftp://<username>-upload:@<ip-address>

# -- Demo example
lftp -e "mirror --parallel 10 -cR /mnt/archive/example_archive/ /upload; bye" sftp://demouser-upload:@10.42.132.118
```
You can read more about LFTP [here](/do-science/tools/transfer/lftp/)

:::

## Download

::: tip
This section is aimed at the lab user that will **download** data from a kista. See the [upload section](#upload) if you plan to download data to your lab.

:::

::: expander "SFTP" id="download-sftp"

1. From your home machine, connect to the kista over SFTP using the transfer information collected above.

```bash
# -- Principal example
sftp <username>-<role>@10.42.132.<number>

# -- Demo example downloader
sftp demouser-download@10.42.132.118
```

When successfully connected, you should see the following message in your terminal:

```
Connected to 10.42.132.<number>.
sftp>
```
2. Once inside your kista, move to the **`upload`** folder.

```bash
cd upload
```

3. List files in the current directory.

```bash
ls -lah
```

4. Download a file or folder by specifying the file or folder name and the local path that you want to download to.

```bash
# -- Principal example
get <sftp-file> <home-machine-folder>

# -- Download individual file
get example-filename1.txt /mnt/cargo/

# -- Download folder
get -r example-directory /mnt/cargo/
```

5. Disconnect from your the SFTP-server

```bash
quit
```

For large downloads, [terminal multiplexers](/do-science/tools/technical/terminal-multiplexers/#gnu-screen) can be a handy tool allowing for the transfer to continue even when you log off from your home machine.

You can resume a download with this command:

```bash
reget /mnt/cargo/example-file1.txt
```
:::

::: expander "LFTP" id="download-lftp"

For large downloads, [terminal multiplexers](/do-science/tools/technical/terminal-multiplexers/#gnu-screen) can be a handy tool allowing for the transfer to continue even when you log off from your home machine.

```bash
# -- Principal example
lftp -e "mirror -c /upload <download_to_directory>; bye" sftp://<username>-<role>:@<ip-address>

# -- Demo example downloader
lftp -e "mirror --parallel 10 -c /upload /home/demouser/download-hunt; bye" sftp://demouser-download:@10.42.132.118
```
:::


## Troubleshooting

#### WARNING: Remote host identification has changed

You might see this warning message when you log into a kista that has been rebuild on the same IP as you have used for a previous kista transport.

```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
```

::: details Solution

[Click here](/do-science/troubleshooting/connection.html#warning-remote-host-identification-has-changed) to see the full message and explanation in our main troubleshooting section. You may ignore this message if you connect to a kista inside your lab.



You can remove the message and proceed with the login by running the command that is stated at the end of the screen message similar to:

```bash
ssh-keygen -f "/home/<username>/.ssh/known_hosts" -R "10.42.<number>.<number>"
```
:::
