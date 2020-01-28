---
title: Connecting to your lab
permalink: /troubleshooting/connecting
sidebarDepth: 1
---

# Troubleshooting lab connections

[[toc]]

## VPN

Your lab connection is encrypted over a virtual private network (VPN) to ensure the confidentiality of the information. We have listed some of the things that may cause trouble here:

### Administrator rights

Windows users needs administrator rights on their local computer to successfully install OpenVPN. You will need to contact your local IT personnel for this installation if you do not hold such rights. See this page for details: [Installing OpenVPN on Windows without administrator rights](/getting-started/troubleshooting/#openvpn).

### Local firewalls

Our VPN service communicate with your local machine on a specific port that needs to be allowed in your local firewall: UDP protocol on Port 1194 to and from IP 129.241.176.121. Blocked network connections will typically give a "The VPN failed because the connection attempt timed out"-error. Please contact your local IT department for assistance if you think this may be the case. Feel free to [include us](/contact) in the communication if you need assistance.

### IP whitelist

We allow connection from known IP addresses only. This means that your VPN connection may be blocked if you connect from a (for us) unknown network. Please look up your IP address ([ip4.me](http://ip4.me)) and [forward to us](/contact) if you think this is the case. We are happy to open for new connections.

### Broken connection

Your VPN session will reset after 12 hours. This will cause your connection to break. For examples, connections left running over night will not work the next morning. You will need to turn off your VPN and then initiate a new connection to get back into your lab.

### Wrong password

If your VPN login suddenly stops working, and you are pretty sure your user name and mobile code are both correct, try to sync Google Authenticator's time settings: Start Google authenticator on your phone, tap the tree dots in thecorner (menu button) and go to 'Settings' > 'Time correction for codes' and hit 'Sync now'. Now, try to log in again.

### Deactivated account

Inactive accounts are deactivate after about 180 days. This will cause your login to fail if you have not visited your lab in such a time frame. [Contact us](/contact) for an account reactivation.


## SSH

### Password updates

### Forgotten passwords

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

## X2Go

### Password prompts

RSA setup description.
