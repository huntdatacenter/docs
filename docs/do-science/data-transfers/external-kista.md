---
title: External kista
category: Data transfers
permalink: /do-science/data-transfers/external-kista
outline: 2
description: External kistas support labs with a simple and secure way to transfer data from an external user located outside HUNT Cloud and into a lab in HUNT Cloud.
---

# External kista

**External kistas support labs with a trusted way to transfer data from an external user located outside HUNT Cloud and into a lab in HUNT Cloud.**

[[toc]]

::: tip Note
This page describes the practical aspects of external kista transfers. Head over to our [External kista FAQ](/do-science/faq/external-transfer#external-kista) for more information on the service itself.
:::

## For external users

This section aims to give a technical description on how external users outside HUNT Cloud can connect and transfer data to our hosted SFTP service called external kista. 

In short, external kistas are short-lived and hardened [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) servers dedicated to transferring data. Please [contact us](/contact) if you require more information or run into trouble.

::: warning Technical requirements

As an external user outside HUNT Cloud, you will need to meet the following technical requirements to transfer data to/from a external kista.

- [Network connection to HUNT Cloud](#network-connection-to-hunt-cloud)
- [SSH key pair](#ssh-key-pair)
- [SFTP client](#sftp-client)

All major operating systems such as Windows, MacOS and Linux are supported.

:::



### Network connection to HUNT Cloud

Your host organization might need to open it's network firewall in order for your computer to connect and transfer to the external kistas in HUNT Cloud. Below are the network details that your organizational IT department will need add such a firewall opening:

- External kista IP address: `129.241.176.121`
- Port range: `2000-2128`
- Protocol: `TCP`

We will select one specific port number during the kista deployment. This will be forwarded in the transfer information to your HUNT Cloud party when the external kista has been setup.

### SSH key pair

You will use a `SSH public key` to authenticate and access your kista instead of passwords. You must therefore send us such a key before we can deploy your kista. This section describes how to do this.

**1. Generate a SSH key pair**

We recommend that you create a dedicated SSH key pair for each kista transfer. Click on the section below for a step wise guide on how to generate a new key pair in Windows that you can use for your kista access.

::: details How to generate a RSA SSH key pair on Windows 10 or higher using Open SSH

1. Open new Command Prompt window (WIN + R and type cmd.exe then hit Enter).

2. Generate rsa key pair in default location.

```
ssh-keygen -q -t rsa -b 4096 -f "%USERPROFILE%\.ssh\id_rsa" -N ""
```

3. Copy public key. This command will save it to a new text file and place it on your desktop.

```
type %USERPROFILE%\.ssh\id_rsa.pub > %USERPROFILE%\Desktop\ekista_pubkey.txt
```

4. Share the `ekista_pubkey.txt` to your HUNT Cloud contact. 

:::

::: details How to generate a RSA SSH key pair on OS X, macOS and Ubuntu

1. Open new Terminal

2. Generate a new dedicated RSA key pair.

```bash 
ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""
```

3. Copy the id_rsa key to your downloads directory.

```bash
cat ~/.ssh/ekista.pub > ~/Downloads/ekista_pubkey.txt
```

4. Share the `ekista_pubkey.txt` to your HUNT Cloud contact. 

:::

::: details Accepted key types
We accept the following public key types:

- RSA
- ECDSA
- Ed25519
:::

**2. Share public SSH key with HUNT Cloud**

After generating the SSH key pair, please share the **public key** (not the private one) with us. Send your new public key `ekista_pubkey.txt` as an email attachment to your HUNT Cloud contact that can forward your key to us as an attachment in their service order.


### SFTP client

You will need a SFTP client to connect and transfer data to the external kista. For Windows, we recommend the WinSCP client. OS X, macOS and Ubuntu can use built in command line tools. 

In addition to the SFTP software, you will need the external kista transfer information shipped by HUNT Cloud on the time of deployment to be able to connect.

::: tip Access information from HUNT Cloud
You will need the following information from HUNT Cloud to connect to your kista:

- `Host name`
- `Port number`
- `User name`
:::

Below is a guide on how to connect using the WinSCP SFTP client on Windows.

::: details How to connect to an external kista on Windows with WinSCP

1. In `WinSCP`:
   - Click `New Session`

![ekista_7](./images/ekista_1.png "ekista_7")

2. In the `Login` window:
   - Enter `ekista.hdc.ntnu.no` as `Host name`
   - Enter the port number from the transfer information as `Port number` (the number in the example will not work).
   - Enter the user name from the transfer information as `User name` (the name in the example will not work).
   - Click `Advanced`

![ekista_7](./images/ekista_2.png "ekista_7")

3. In the `Advanced Site Settings` window:
   - Select the `Authentication` page in the sidebar
   - Uncheck the `Attempt 'keyboard-interactive' authentication` checkbox
   - Enter the location of the `Private key file`. If you followed the previous guide, then this should be the location of the `ekista` private key file.
   - Click `OK`

![ekista_8](./images/ekista_3.png "ekista_8")

4. In the `Login` window:
   - Click `Save`

![ekista_9](./images/ekista_4.png "ekista_9")

5. In the `Save session as site` window:
   - Choose a `Site name` if required, combining the `User name` and `Host name` (the site name given in the example will not work).
   - Click `OK`

![ekista_10](./images/ekista_5.png "ekista_10")

6. In the `Login` window:
   - Click `Login`

![ekista_11](./images/ekista_6.png "ekista_11")

7. In the `Warning` window:
   - Compare and verify that the appropriate `SHA-256 key fingerprint` from the transfer information matches
   - Click `Yes`

![ekista_12](./images/ekista_7.png "ekista_12")

8. In the `Authentication Banner` window:
   - Read the information banner to ensure you are connecting to correct kista
   - Click `Continue`

![ekista_13](./images/ekista_8.png "ekista_13")

9. In the `Key passphrase` window:
   - Enter the passphrase for your private key. If you followed the previous guide, this should be the `ekista.ppk` key and passphrase that you set during the generation in the [SSH key pair](#ssh-key) section above.
   - Click `OK`

![ekista_13](./images/ekista_9.png "ekista_13")

10. In `WinSCP`:

- You should now be connect to the SFTP server
- Upload data in the `upload` directory

![ekista_13](./images/ekista_10.png "ekista_13")
:::


::: details How to connect to an external kista on OS X, macOS and Ubuntu

You can connect to the kista from your local computer using the built in SFTP tool.

```bash
# -- principal example
sftp -oPort=<port-number> <username>@ekista.hdc.ntnu.no

# -- practical example
sftp -oPort=2124 johndoe-importer@ekista.hdc.ntnu.no
```

Once logged in you can follow the examples from our [internal kista guide](/do-science/data-transfers/internal-kista) for [upload](/do-science/data-transfers/internal-kista#upload) or [download](/do-science/data-transfers/internal-kista#download) of data.

:::


## For internal users

Follow the examples from our [internal kista guide](/do-science/data-transfers/internal-kista).

## Troubleshooting

#### Cannot connect to external kista

1. Confirm that you are using correct key to authenticate (based on guide above). 

2. If correct key is used, there are few things that could be an issue. 

- connection is blocked by firewalls (organisational or on your local computer/virtual machine)

- misconfiguration on HUNT Cloud side

3. To get the correct idea on what could be an issue, you can share `nmap` or `traceroute` logs with HUNT Cloud in communication email

::: details Nmap

This is a faster way to get results out of traceroute. 

1. Download and install nmap from official website.

[https://nmap.org/download.html](https://nmap.org/download.html)

2. Run below code in command prompt or terminal (change port to match the one for your ekista transfer).

```
nmap -Pn --traceroute -p <port number>  ekista.hdc.ntnu.no
```

3. Share output in communication email with HUNT Cloud.

::: 

::: details Traceroute

1. Run below code in command prompt or terminal (this might take a while)

```
traceroute -P TCP -p <port number> ekista.hdc.ntnu.no
```
*Note*: on linux or macOS machines, you might need sudo permission.

2. Share output in communication email with HUNT Cloud.

:::
