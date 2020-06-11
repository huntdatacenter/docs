---
title: How to connect
category: Getting started
permalink: /getting-started/how-to-connect
sidebarDepth: 3
---

# Connecting to your lab

::: warning General requirements

**Without these, it is impossible to access your lab environment.**

- Signed user agreement ([blank template](https://assets.hdc.ntnu.no/assets/hunt-cloud-user-agreement.pdf)) forwarded to us over [email](/contact) for account activation.
- Computer connected to the Internet
- Smartphone to receive system keys from HUNT Cloud
- Compressed file from HUNT Cloud downloaded from link sent over email

:::

Your initial setup has four steps:
(i) collect your keys and configuration files
(ii) setup google authenticator app
(iii) establish a successful VPN connection, and
(iv) establish a smooth SSH connection.
Plan for the first step to take a few days, and the two next steps to take a few hours.

- [Setup Signal](#setup-signal) and download your configuration file
- [Setup Google Authenticator](#_2-setup-google-authenticator)
- [Setup OpenVPN Client](#_3-setup-openvpn-client) ([Windows](#windows), [OS X and macOS](#os-x-and-macos), [Linux](#linux))
- [Connecting to your lab](#_4-connecting-to-your-lab)

## 1. Collect your digital lab keys

- We will send you the keys over your personal mobile phone.
- We will send you a link to your VPN certificate and SSH configuration on your organizational email.

### Setup Signal

Signal is a private messenger app that provide a secret channel to communicate system keys.

#### How to install

Search for `Signal` in the iOS or Android app stores, or use the links below.

- [Download and install for **iOS** here](https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8)
- [Download and install for **Android** here](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en)

#### Transfer keys

- Send us a notification on cloud@hunt.ntnu.no when you have installed Signal.
- We will by default send you the keys from number 91001893. This number is registered on '[Norges teknisk-naturvitenskapelige universitet NTNU](https://www.1881.no/?query=91001893)'. We will notify you on your organizational email if this number change.

You are able to continue the onboarding as soon as you receive the system keys. Please allow for this step to take up to 3 days before completion.

### Download VPN certificate and SSH configuration

We will send you a link to an encrypted archive (ZIP-file) with your VPN certificate and your SSH config on your organizational email.

- Click on the link in the email to download the file and save this on your local machine.
- Unpack (extract) the file with your favourite file archiver software that recognize the 7z format ([windows](https://www.google.no/search?q=unpack+7z+windows), [mac](https://www.google.no/search?q=unpack+7z+mac), [linux](https://www.google.no/search?q=unpack+7z+linux)) using the key named `ZIP file key` from your Signal transfer.

### Verify that this step is completed

By completion of this step you should have two files stored on your local computer:

- `<your-username>.ovpn` - your personal OpenVPN certificate
- `ssh-config.txt` - your SSH configuration which you should use to connect to your lab

In addition, you should have 4 secrets:

- `ZIP file key` - your key for unlocking the archive we sent you
- `Google Authenticator key` - your key for generating Google Authenticator verification codes
- `VPN passphrase` - your passphrase for unlocking your OpenVPN certificate
- `SSH temporary key` - your temporary passphrase when logging on with SSH for the first time

It will be impossible to continue without these.

## 2. Setup Google Authenticator

Google Authenticator is a multifactor app for mobile devices that generates verification codes every 30 seconds.

We call this the **`verification code`** which will be used for logging in to your OpenVPN account.

### How to install

Search for `Google Authenticator` in the iOS or Android app stores, or use the links below.

- [Download and install for **iOS** here](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8)
- [Download and install for **Android** here](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)

### Setup the app and add a new account

1. Start the Google Authenticator app
2. Tap _Begin setup_ (first time setup) or _Add an account_ (additional accounts)
3. Select _Enter a provided key_
4. Enter `HUNT CLOUD VPN` as the _account name_
5. Enter the `Google Authenticator key` sent to you from HUNT over Signal
6. Make sure _Time based_ is selected.
7. Tap _Add_ to finish the setup of the new account

You should now be prompted with a 6 digit **`verification code`** that refreshes ever 30 seconds.

## 3. Setup OpenVPN Client

OpenVPN is an open-source application that allows you to connect to the HUNT virtual private network (VPN).

### Windows

#### Install the client

- [Download and install OpenVPN using the latest Windows Installer here](https://openvpn.net/community-downloads/)

::: warning
Installing OpenVPN may require administrative rights on your computer.
If you don't have administrative rights on your computer, or don't know if you have administrative right on your computer, please see [Installing OpenVPN on Windows without administrative rights](#installing-openvpn-on-windows-without-administrative-rights).
:::

#### Setup the OpenVPN profile

1. Start the OpenVPN client (if it is not running already)
2. Right-click on the OpenVPN notification icon on the taskbar
3. Select `Import file...`
4. Select the OpenVPN profile named `<username>.ovpn` in the collection of credentials given from HUNT.

#### Connecting to the VPN

1. Right-click on the OpenVPN notification icon on the taskbar
2. Select _Connect_
3. Enter your user name (same as the OpenVPN profile file name)
4. Enter the **`verification code`** from Google Authenticator as your password

- Make sure that the _Save password_ checkbox is **`unchecked`**.

5. If prompted for a _Private Key Password_ or _Passphrase_, use the `VPN passphrase` from `vpn-key-passphrase.txt` sent to you from HUNT over Signal

- This passphrase can be saved.

You should now be connected to the VPN.

::: tip Troubleshooting
If it does not connect, but displays another `User Authentication` prompt, please try again with a new **`verification code`**

Please see [OpenVPN on Windows](openvpn-on-windows) for troubleshooting.
:::

### OS X and macOS

#### Install the client

The recommended OpenVPN client for OS X and macOS is called Tunnelblick.

- [Download and install the latest **stable release** from here](https://tunnelblick.net/downloads.html)

#### Setup the OpenVPN profile

1. If prompted with the `Welcome to Tunnelblick` prompt, otherwise jump to 2.
   1. Select `I have configuration files`
   2. In the `Welcome to Tunnelblick` prompt, select `I have configuration files`
   3. When prompted for which type of configuration you have, select `OpenVPN Configurations`
   4. Select the OpenVPN profile named `<username>.ovpn` in the collection of credentials given from HUNT.
   5. Continue to section [Connecting to the VPN](connecting-to-the-vpn) section below
2. Find the OpenVPN profile named `<username>.ovpn` in the collection of credentials given from HUNT.
   1. Right-click the file OpenVPN profile named `<username>.ovpn`
   2. Select `Open With -> Tunnelblick`
   3. When prompted for `Install Configuration For All Users`, select `Only Me`
   4. Enter your macOS password to allow Tunnelblick to install the OpenVPN configuration
   5. Continue to section [Connecting to the VPN](connecting-to-the-vpn) section below

#### Connecting to the VPN

1. Start Tunnelblick and `Connect`
2. Enter your user name (same as the OpenVPN profile file name)
3. Enter the **`verification code`** from Google Authenticator as your password
   1. Make sure that the _Save in Keychain_ checkbox is **`unchecked`**
4. If prompted for a _Private Key Password_ or _Passphrase_, use the `VPN passphrase` sent to you from HUNT over Signal

This password can be saved

You should now be connected to the VPN.

::: tip Troubleshooting
If VPN does not connect, but displays another `Login Required` prompt,
please try again with a new **`verification code`**
:::

### Ubuntu Linux

#### Install the client

Install the `openvpn` and `network-manager-openvpn-gnome` packages from the standard repositories.

```bash
sudo apt install openvpn network-manager-openvpn-gnome
```

#### Setup the OpenVPN profile

1. Click on the _Network Manager_ icon in the task bar
2. Select _Edit Connections..._
3. Click _Add_
4. Choose _Import a saved VPN configuration_ and click _Create_
5. Select the OpenVPN profile named `<username>.ovpn` in the collection of credentials given from HUNT.
6. Enter your user name (same as the OpenVPN profile file name)
7. Click on the person icon in the _Password_ field and select `Ask for this password every time`
8. Enter the _Private Key Password_ with the `VPN passphrase` sent to you from HUNT over Signal
9. Click on the _IPv4 Settings_ tab
10. Click _Routes..._
11. Select the _Use this connection only for resources on its network_ and click _OK_
12. Click _Apply_

The OpenVPN profile should now be setup.

#### Connecting to the VPN

1. Click on the _Network Manager_ icon in the task bar
2. Select _VPN Connections >_ and the name of your profile
3. In the _Authenticate VPN_ window, enter the **`verification code`** from Google Authenticator in the _Password_ field
4. Click _OK_ to connect

If you receive the notification _VPN connection has been successfully established_, then you are good to go.

#### Troubleshooting

- If the _Authenticate VPN_ prompt pops up again, then please try again with a new **`verification code`**
- If you receive the notification _VPN Connection Failed_ after 60 seconds, please check the following
- Verify that you have an active internet connection
- Verify that the _Private Key Password_ is correct
- If you cannot access the rest of the internet while connected to the VPN, then please check the following:
- Verify steps 9-11 in [Setup the OpenVPN profile](setup-the-openvpn-profile).
- If you are unable to hit _Apply_ after the changes, try to re-enter your _Private Key Password_ with your `VPN passphrase`.
- If nothing else works, please go the [troubleshooting steps](#4-troubleshooting) and contact us.

### Other Linux distributions

There are a few options on how to install OpenVPN clients in other distributions.

- Install the `openvpn` package from the official distribution repository
- Add the [OpenVPN community repository](https://community.openvpn.net/openvpn/wiki/OpenvpnSoftwareRepos) and install `openvpn` package.
- Download the latest source tarball from OpenVPN [here](https://openvpn.net/index.php/open-source/downloads.html) and install.

<!-- Add section for install and setup -->

## 4. Connecting to your lab

After the VPN connection is successfully established, you can connect to your lab with SSH.

### Connecting with SSH

To connect with SSH please see `ssh-config.txt` which contains the necessary information to connect to your lab, such as your username and IP.

#### Example contents of `ssh-config.txt`

```bash
Host <your-lab-name>-entry
    HostName <your-lab-IP>
    User <your-username>
```

1. Start your favorite terminal program which supports SSH. For Windows users we strongly recommend to set up this initial set using the Putty executable ([putty.exe](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), 64-bit version).
2. Type `ssh <your-username>@<your-lab-IP>`
3. You should then be prompted to enter a password `<your-username>@<your-lab-IP>'s password:`
4. Enter your `SSH temporary key` sent to you from HUNT over Signal _two_ times.
5. Enter your new `passphrase` (see below for a how to). Retype for verification. You will be kicked off the entry server by completion.
6. Login again to your entry server, `ssh <your-username>@<your-lab-IP>`, with your newly generated passphrase.
7. When on your entry server, connect to your home server by typing `ssh home`.
8. Similar to step 3, you will be prompted to retype your `SSH temporary key` sent to you from HUNT over Signal and to repeat your new passphrase two times (it is fine to use the same passphrase as on your entry node). You will be kicked back to your entry server by completion.
9. Log into your home server using `ssh home` using your new passphrase.
10. With a tiny bit of luck, you should now be inside your project lab which should look something like below. Enjoy!

::: details Example when logged in to a lab's home server

```
Welcome to Ubuntu 16.04.3 LTS (GNU/Linux 4.4.0-98-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

66 packages can be updated.
0 updates are security updates.

Welcome to TEST-LAB.

For the record, if you shouldn't be here - please
leave and report the incident to cloud@hunt.ntnu.no.

Last login: Sun Dec  3 12:29:28 2017 from 10.10.10.10
testuser1@test-lab-home:~$
```

:::

### Designing your own passphrase

We prefer that you give a `passphrase` instead of a password. A passphrase is a series of words that create a phrase.
It should be:

- long enough to be hard to guess
- not a famous quotation from the literature (but could be pretty close)
- hard to guess by intuition (even by someone who knows you well)
- easy to remember

Oh, and, it should be unique to this site only (not to mention at least
12 characters long and include both lower and upper cases).
Making a good passphrase is great fun and good security hygiene.
Here is one to get you going:

```bash
PokemonAnalysisAreGreat4Fun
```

### Simplify your life

Do not skip this chapter... We hope that you will log into your lab a lot over the coming months and years, so we need to make sure that you simplify that process to the point where you get instant access to your lab.

::: details Windows
We recommend MobaXterm as a free X server that allow you to connect with both SSH and SFTP. Here is a [step wise guide](/working-in-your-lab/technical-tools/mobaxterm) on how to establish a password less login directly to your home-machine.
:::

::: details Mac and Linux

#### Establish an SSH alias

1. Open the `ssh-config.txt` file your received.
2. Add this content to the file named `config`in the hidden ssh-folder in your home directory (`~/.ssh/config`) using your favourite file editor. You may need to generate this file if it is your first ssh-configuration.

You should now be able to connect to your lab with the SSH-command `ssh <your-lab-name>`.

#### Establish a password-less login

If you already have a RSA certificate on your local computer that you would like to use, start from step 3

1. Log out from your project lab typing `exit` (you should now be in your local computer)
2. Generate a new RSA certificate with `ssh-keygen`. Hint enter three times. When this finish:
3. Enter `ssh-copy-id <your-lab-name>-entry` to add your certificate to your entry node. Enter the entry-node passphrase you generated in the section above.
4. Enter `ssh-add`to add the certificate to the ssh-agent. If you don't have a running ssh-agen you may see an error message. In such a case, first enter `eval "$(ssh-agent -s)"` and next enter `ssh-add`
5. You should now be able to log directly into your home node with the command `ssh <your-lab-name>`, e.g. 'ssh demolab'.

Simple and secure, you should now be able to directly enter your home node with this command:

```bash
ssh <your-lab-name>
```

:::

::: tip
Time for coffee!
:::
