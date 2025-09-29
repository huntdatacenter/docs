---
title: Connection
category: Troubleshooting
outline: 1
permalink: /do-science/troubleshooting/connection
description: Your lab connection is encrypted over a virtual private network (VPN) to ensure the confidentiality of the information. We have listed some of the solutions in case you meet any troubles connecting.
---

# Troubleshooting connection

**Unfortunately, sometimes things don't work as they should. This page contains known issues that you might encounter during system connection (VPN and phone) and lab connection (SSH and HUNT Workbench).**

[[toc]]

## VPN

Your lab connection is encrypted over a virtual private network (VPN) to ensure the confidentiality of the information. We have listed some of the things that may cause you trouble:

### Access list

We allow connection from known IP addresses only. This means that your VPN connection may be blocked if you connect from a (for us) unknown network outside Norway. We are happy to open for new connections. Copy your IP address and request your VPN access list opening in our [service desk](/do-science/service-desk/#vpn-access-list).

<MyIPAddress />

::: tip For NTNU users

You can access your lab over the Cisco AnyConnect VPN from NTNU worldwide: (1) Connect the NTNU VPN using this address: **`vpn.ntnu.no`**, (2) connect the HUNT Cloud VPN, (3) connect to your lab, and (4) do cool science!

:::

### Cannot connect due to local firewalls

Some organizations and companies have local firewalls which prohibit your computer from connecting to the HUNT Cloud VPN. Blocked network connections will typically give an error such as `TLS Error: TLS key negotiation failed to occur within 60 seconds` or `The VPN failed because the connection attempt timed out`. Please contact your local IT department for assistance with the network requirements below if you think this may be the case. Feel free to include [our email](/contact) in the communication if you need assistance.

**Network requirements for HUNT Cloud**

```
IP: 129.241.176.121
Port: 1194
Protocol: UDP
```






### Administrator rights

Windows users needs administrator rights on their local computer to successfully install OpenVPN. You will need to contact your local IT personnel for this installation if you do not hold such rights. See this page for details: [Installing OpenVPN on Windows without administrator rights](/do-science/lab/#_2-1-install-the-vpn-software).

You should reinstall your OpenVPN with administrative rights if you already installed OpenVPN and are getting errors below:

```
ERROR: route addition failed using CreateIpForwardEntry: Ingen tilgang.
ERROR: Windows route add command failed [adaptive]: returned error code 1
ERROR: Some routes were not successfully added. The connection may not function correctly
```

### Lost or missing VPN passphrase

Your **`VPN passphrase`** is stored on your local computer and used to decrypt your VPN certificate before connection. From time to time your local password Keychain may update or otherwise render this passphrase inaccessible. You will need a new VPN certificate from us and then [reconfigure your VPN](/do-science/lab/#_2-2-setup-the-vpn-profile)  if this happens. Order your VPN certificate reset in our [service desk](/do-science/service-desk/#vpn-certificate-reset).



### Broken VPN connection

Your VPN session will reset after 12 hours. This will cause your connection to break. For examples, connections left running over night will not work the next morning. You will need to turn off your VPN and then initiate a new connection to get back into your lab.

### Conflict with existing VPN

Already running VPN services on your local computer may cause conflicts when connecting to our HUNT Cloud VPN. Try to disconnect the already running VPN service and reconnect to the HUNT Cloud VPN.

::: details For NTNU users

NTNU users on all operating systems may connect to both NTNU VPN and the HUNT Cloud VPN using a [tailored NTNU VPN address](#access-list).

:::

::: details For UiB users

You cannot access your HUNT Cloud lab while using the default Cisco AnyConnect VPN from UiB. In order to connect to your lab with the UiB VPN activated, use split tunneling as described [here](https://hjelp.uib.no/tas/public/ssp/content/search?q=KI%200881). Using the split tunneling will allow you to access UiB services, e.g. mail, while connected to your lab.

:::

### No internet while connected to VPN

If you use OpenVPN on Linux and cannot access the rest of the internet while connected to the HUNT Cloud VPN, then please double check that you selected the **`Use this connection only for resources on its network`** in the final steps of [Setup the VPN profile](/do-science/lab/#_2-2-setup-the-vpn-profile) in the Getting Started section.

### Wrong password

If your VPN login suddenly stops working, and you are pretty sure your user name and mobile code are both correct, try to sync Google Authenticator's time settings: Start Google authenticator on your phone, tap the tree dots in the corner (menu button) and go to **`Settings`** > **`Time correction for codes`** and hit **`Sync now`**. Now, try to log in again. If this do not work, [contact us](/contact) for further investigation.

### Deactivated account

Inactive accounts will be deactivated after about 180 days. This will cause your login to fail if you have not visited your lab in such a time frame. Your lab leader or lab coordinator may order your user reactivation in our [service desk](/administer-science/service-desk/lab-orders#reactivate-lab-user).

### New local computer

We are happy to hear that! If you have a new local computer you will need to install a new VPN certificate on all machines that you will connect from. You can find all required steps in our [FAQ section](/do-science/service-desk/#i-have-a-new-machine-what-should-i-request).


### New VPN certificate

When you got your new VPN certificate, head over to our [VPN certificate reset guide](/do-science/guides/vpn-certificate-reset) to get going.

### Failed to negotiate cipher

You will need an updated VPN configuration when you see the `Failed to negotiate cipher with server`-error while connecting to the VPN. Order a [VPN certificate reset](/do-science/service-desk/#vpn-certificate-reset) in our do science service desk.

> **Full message**: Failed to negotiate cipher with server.  Add the server's cipher ('AES-256-CBC') to --data-ciphers (currently 'AES-256-GCM:AES-128-GCM') if you want to connect to this server.

### Conflict with local network

In rare cases if your local network is using 10.8.0.0/16 or overlapping with it you might be having issues connecting to VPN or further, [contact us](/contact) for further investigation.


## Phone

### New phone

We are happy to hear! You will need a new Google authenticator code from us to connect to your HUNT Cloud VPN. Order a new code in our [service desk](/do-science/service-desk/#google-authenticator-key-reset).

### No phone

Unfortunately, you do need a phone to connect to your lab. You will use this both for your two-step verification each time you access your lab, and we use your phone registration as part of our user identification process.

### Phone without internet connection

You will need to connect your phone to the internet to install Signal, Google authenticator and to receive your keys, either over WiFi or roaming.

### Signal is unavailable for my phone

We are aware that Signal may be unavailable on some phones. Steps to resolve this will vary by phone model and OS. Start with this [troubleshooting guide](https://support.signal.org/hc/en-us/articles/360007318711-Troubleshooting-Notifications) on the official Signal pages as a starting point. [Contact us](/contact) if this do not resolve your issue.

### Signal privacy settings

To be able to ship credentials to you we need to see your phone number as registered in Signal.
You can allow finding your account in Signal app settings:

![signal-phone-number](./images/signal-phone-number.png)

### Signal cannot find HUNT Cloud phone number

None of the recommendations above helped, even though you have the latest version of Signal app active?

Try to uninstall Signal, and then configure it again from the start. This seems to solve the issue with corrupted metadata after some of the Signal updates.

## SSH

### Connection timeout

The most common causes of **`Connection timed out`** responses are: (1) that your VPN connection is not working as intended ([troubleshoot VPN](#vpn)), (2) that you typed a wrong SSH password three times in a row causing a 15 minute ban on further logins to your lab. If your VPN is working correctly, aim for a 15 minute coffee break before your retry. [Contact us](/contact) for further troubleshooting if you are still unable to connect.

### Forgotten passwords

After the initial onboarding, you will need your passphrase to install software using the **`sudo apt install <software>`** command and when you connect to your workbench. If you have forgotten your passphrase, worry not. Order a SSH passphrase reset in our [service desk](/do-science/service-desk/#ssh-passphrase-reset). If you need to install software sooner than we can ship, we recommend that you try [Conda](/do-science/tools/analytical/conda) or ask some of your lab colleagues to install the software.

### Broken connection

Your SSH connection is transferred inside your VPN connection. You will therefore experience a sudden drop in your SSH connection if your VPN connection break, for example due to our [12 hour timeout](#broken-vpn-connection), a [broken internet connection](#broken-vpn-connection) etc. You will also experience a broken connection if your lab machine becomes unresponsive, for example due to an [out of memory killer](#unresponsive-machine-oom-killer) or other related issues (see below), and when your internet connection temporarily drops. For such cases, see our [terminal multiplexer guide](/do-science/tools/technical/terminal-multiplexers) on how to keep your environment stable during broken connections.

### Unresponsive machine (OOM Killer)

Your lab machines may become unresponsive. You will notice this as a lost connection. A typical reason for this is that one or more a processes inside your machine consumed all the memory, initiating a Out Of Memory Killer (OOM Killer). You will be unable to log onto your lab if an OOM Killer is triggered on your **`home`** machine. You will be able to log into your lab, although unable to log into the affected **`iaas`** or **`blue`** machines, if an OOfM Killer is triggered on other machines in your lab. Your data will not be affected of OOM Killers. [Contact us](/contact) us for a machine restart and consider to update your machine type in our [service desk](/administer-science/service-desk/lab-orders#update-machine-size).

### WARNING: Remote host identification has changed

You might get this warning message the first time you connect to a new machine inside your lab:

```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
Please contact your system administrator.
Add correct host key in /home/<username>/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /home/<username>/.ssh/known_hosts:<number>
  remove with:
  ssh-keygen -f "/home/<username>/.ssh/known_hosts" -R <machine-name>
ECDSA host key for <machine-name> has changed and you have requested strict checking.
```

The warning tells you that such a discrepancy between the expected and observed key might be due to an attack. **You may ignore this message inside your lab.** The reason for the warning is that your RSA key has changed when the machine was rebuilt.

You can remove such messages by running the command that are stated at the bottom in the screen message, for example:

```bash
ssh-keygen -f "/home/<username>/.ssh/known_hosts" -R <machine-name>
```

Your message will be slightly different as the **`username`** and **`machine-name`** will be unique to you and your lab.

::: warning
If you see this message any other time, please [contact us](/contact) for further investigations.
:::

## HUNT Workbench

See our [HUNT Workbench troubleshooting](/do-science/hunt-workbench/troubleshooting) section.
