---
title: Internal kista
permalink: /data-transfer/internal-kista
sidebarDepth: 1
---

# Internal kista

Internal kista is our service for controlled data transfers between labs inside HUNT Cloud. In short, internal kistas are short-lived and hardened [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) servers dedicated to a specific data transfer between two lab environments.

::: tip Note
This page describes the practical aspects of kista transfers. Head over to our [Transfer section](/faq/transfer/) in the FAQ for more information on the service itself.
:::


[[toc]]

## Order a kistas

Internal kistas are ordered by the uploader Lab leader or Lab coordinator using the [Internal kista transfer form](/about/agreements/#internal-kista-transfer-form). Forward the form [to us](/contact) for deployment.

The form defines two roles that we will use in this document: 

- **Uploader**. This is a lab user in the Lab that orders the Kista whom will upload the data. 
- **Downloader**. This is a lab user in the lab that will download the data.

## Account information

We will forward SFPT account information to the home machines in both the uploader and downloader lab when the kista is deployed. This information can be accessed in your home machine under the **`/opt/hunt-cloud/kista/`** folder:

```bash
# -- List of Kista account informations
ls /opt/hunt-cloud/kista/

# -- Principle example to see account information
less /opt/hunt-cloud/kista/*<number>*

# -- Practical example to see account information
less /opt/hunt-cloud/kista/*5623*
```

The account information will look something similar to this: 

```bash
### SFTP account information
Protocol: sftp
Server: 10.42.132.<number>
Port: 22
Username: <username>-upload
```

*Note. The information above is for illustration. Your account information will contain different Server and Username information.*

## Connect

You will connect to kistas over the SFTP protocol. This may seem a bit unfamiliar the first time. Keep the faith, we bet it will be simple to use when you get going.

1. Log into your the home machine in your lab. 
2. Connect to the kista over SFTP using the account information above. 

```bash
# -- Principal example
sftp <usernam>-upload@10.42.132.<number>

# -- Demo example
sftp demouser-upload@10.42.132.118
```

When successfully connected, you should see the following on your terminal: 

```
Connected to 10.42.132.<number>.
sftp>
```

## Upload data

::: tip 
This section is aimed at the lab user that will **upload** data to the kista. See below if you plan to download data to your lab.
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



## Download data

::: tip 
This section is aimed at the lab user that will **download** data from the kista.
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


## Other commands

Most SFTP commands will work in the internal kistas, for examples: 

```bash
# -- List files in a local directory
#    from where you are connecting: 
lls -lah /mnt/cargo
```

