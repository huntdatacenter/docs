---
title: Lab connections
permalink: /troubleshooting/connection
sidebarDepth: 1
---

# Troubleshooting lab connections

[[toc]]

## VPN

Your lab connection is encrypted over a virtual private network (VPN) to ensure the confidentiality of the information. We have listed some of the things that may cause you trouble:

### Administrator rights

Windows users needs administrator rights on their local computer to successfully install OpenVPN. You will need to contact your local IT personnel for this installation if you do not hold such rights. See this page for details: [Installing OpenVPN on Windows without administrator rights](/getting-started/troubleshooting/#openvpn).

### Local firewalls

Our VPN service communicate with your local machine on a specific port that needs to be allowed in your local firewall: UDP protocol on Port 1194 to and from IP 129.241.176.121. Blocked network connections will typically give a "The VPN failed because the connection attempt timed out"-error. Please contact your local IT department for assistance if you think this may be the case. Feel free to [include us](/contact) in the communication if you need assistance.

### IP whitelist

We allow connection from known IP addresses only. This means that your VPN connection may be blocked if you connect from a (for us) unknown network outside Norway. Please look up your IP address ([ip4.me](http://ip4.me)) and [forward to us](/contact) if you think this is the case. We are happy to open for new connections.

### Lost VPN passphrase

Your VPN passphrase is stored on your local computer and used to decrypt your VPN certificate before connection. From time to time your local password keychain may update or otherwise render this passphrase inaccessible. You will need a new VPN certificate if this happens. [Contact us](/contact) on mail for such a request and allow a few days in shipping.

### Broken connection

Your VPN session will reset after 12 hours. This will cause your connection to break. For examples, connections left running over night will not work the next morning. You will need to turn off your VPN and then initiate a new connection to get back into your lab.

### Wrong password

If your VPN login suddenly stops working, and you are pretty sure your user name and mobile code are both correct, try to sync Google Authenticator's time settings: Start Google authenticator on your phone, tap the tree dots in the corner (menu button) and go to `Settings` > `Time correction for codes` and hit `Sync now`. Now, try to log in again. If this do not work, [contact us](/contact) for further investigation.

### New phone

We are happy to hear that! You will need a new Google authenticator code from us to connect your VPN again. [Contact us](/contact) on mail with a request for a new code and allow a few days for shipping. Follow this [guide](/getting-started/how-to-connect/#_2-setup-google-authenticator) for installation.

### No phone

Unfortunately, you do need a phone to connect to your lab. You will use this both for your two-step verification code each time you log in and in our user identification process.

### Deactivated account

Inactive accounts are deactivate after about 180 days. This will cause your login to fail if you have not visited your lab in such a time frame. [Contact us](/contact) for an account reactivation.

## SSH

### Connection timeout

The most common causes of `Connection timed out` responses are: (1) that your VPN connection is not working as intended ([troubleshoot VPN](/troubleshooting/connection/#vpn)), (2) that you typed a wrong SSH password three (3) times in a row causing a 15 minute ban on further logins to your lab. If your VPN is working correctly, aim for a 15 minute coffee break before your retry. [Contact us](/contact) for further troubleshooting if you are still unable to connect. 

### Forgotten passwords

After the initial onboarding, you will need your password to install software using the `sudo apt install <software>` command. If you have forgotten your password, [contact us](/contact) for a reset, and allow for a few days for effectuation. Another alternative is to ask if some of your lab colleagues may install the software for you using their own user account.

### Broken connection

Your SSH connection is transferred inside your VPN connection. You will therefore experience a sudden drop in your SSH connection if your VPN connection break, for example due to our [12 hour timeout](/troubleshooting/connection/#vpn), a [broken internet connection](/troubleshooting/connection/#vpn) etc. You will also experience a broken connection if your lab machine becomes unresponsive, for example due to an out of memory killer or other related issues (see below).

### Unresponsive machine (OOM Killer)

Your lab machines may become unresponsive. You will notice this as a lost connection. A typical reason for this is that one or more a processes inside your machine consumed all the memory, initiating a [Out Of Memory Killer](https://www.memset.com/docs/additional-information/oom-killer/) (OOM Killer). You will be unable to log onto your lab if an OOM Killer is triggered on your `home` machine. You will be able to log into your lab, although unable to log into the affected `iaas` or `blue` machines, if an OOM Killer is triggered on other machines in your lab. Your data will not be affected of OOM Killers. [Contact us](/contact) us for a machine restart.


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

Your message will be slightly different as the `username` and `machine-name` will be unique to you and your lab.

::: warning
If you see this message any other time, please [contact us](/contact) for further investigations.
:::
