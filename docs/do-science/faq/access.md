---
title: Access
category: FAQ
permalink: /do-science/faq/access
sidebarDepth: 1
description: This page lists frequently asked questions related to access for lab users.
---

# FAQ on user access

This page lists frequently asked questions related to lab user access in labs.

[[toc]]



## System access

### Can I connect from home?

Most likely. We allow connections both from organizations and private network. However, be aware that teleworking conditions from your own organization and/or conditions from your data controller may restrict connections outside your office space and from [private machines](#can-i-connect-from-my-private-machine). Contact your lab owner for more information on the specific conditions in your lab.

### Can I connect from more than one local computer?

Yes. We allow you to configure several local computers to connect to your lab, for example both your laptop and desktop machine. Each machine needs to be configured with a VPN certificate and SSH. Start from step 2, [Configure your VPN](/do-science/lab-access/configure-vpn/) in our Getting started guide to get going. You will need your VPN passphrase and your VPN certificate, thus, Windows users may need to request a [VPN certificate reset](/do-science/service-desk/#vpn-certificate-reset) in the service desk to get going.

### Can I have multiple connections at the same time?

No. For security reasons we only accept one connection from one user at the time. This means that your initial connection will be deactivated if you try to log in from another local computer. Check our [terminal multiplexer](/do-science/tools/technical/terminal-multiplexers/) guide for how to instantly get back to your work when your connect from multiple local computers.

### Can I connect from my private machine?

Maybe. We do allow such connections, however teleworking conditions from your own organization and/or conditions from your data controller may restrict connections from private machines. Contact your lab leader for more information on the specific conditions in your lab.







## Lab access

### How can I reset my password? 

You may request a SSH passphrase reset in our do science [service desk](/do-science/service-desk/#ssh-passphrase-reset).

### How do I change my machine passphrase?

You can change your SSH passphrase with the **`passwd`** command. You will be asked to type your current password, and your future password two times. You will need to run the command on both your entry and home machine for a full update. Order a SSH passphrase reset in our [service desk](/do-science/service-desk/#ssh-passphrase-reset) if you don't remember your passwords and need a reset.

```bash
passwd
```

### How can I see the other users in my lab?

Lab leaders and lab coordinators will get forwarded lists of their users at fixed intervals for review. Lab users can log into their home machine and look up users accounts with this command:

```bash
ls /home
```

### How can I see users currently logged into a machine?

Log into the machine in question, for example `home`, and write `who` in the command line. This list your lab colleagues that are currently logged in or active on that machine.

```bash
who
```

### How can I see which groups I belong to? 

Log into the machine in question, for example `home`, and write `groups` in the command line. This list your group affiliations on the machine. Expect to see your username and labname as groups on your `home` machine. You will also see `restore` as your group if your are responsible for your lab's restore activities.

```bash 
# -- list your groups
groups

# -- example output (principal)
<username> <labname>
```


### I have moved to a new institution, now what? 

Your lab leader or lab coordinator will need to send us a [new user agreement](/administer-science/service-desk/lab-orders/#add-a-new-lab-user) when you move to a new institution. We will revoke your current VPN certificate and send you a new one the is registered on your new organization.


### What is Lab Access link ? 

Lab access link is our new approach to how we onboard new users and how we instruct you to connect to HUNT Cloud services.
It comes pre-filled with your username and labname information, allowing you to simply copy-paste customized commands into your terminal and at the same time, inform you about expected outcome.


### How can I order lab access link ?

If you cannot find your lab access link or did not receive it, you can order one in our [do-science service desk](/do-science/service-desk/#request-lab-access-reissue)


## Access to more than one lab

### Can I get access to several labs?

Yes. You can access more than one lab. We encourage data spaces to separate data in labs and bring top expertise into their lab to do analysis there. You will need to send us one user agreement for each lab your want to access. Lab leaders and lab coordinators may order your access in our [service desk](/administer-science/service-desk/lab-orders/#add-a-new-lab-user).

### How do I get started with my second lab?

We will ship SSH configuration and keys after your lab leader or lab coordinator have order your lab access in the [service desk](/administer-science/service-desk/lab-orders/#add-a-new-lab-user). When you get your keys, head to [Step 3. Configure your SSH](/do-science/lab-access/configure-ssh/) in our onboarding guide to get started.

### Can I transfer and merge data between my labs?

Maybe, however not by default. You will need an explicit approval from your lab leader for such transfers and merges. When this is in place, order an [internal kista](/administer-science/service-desk/lab-orders/#internal-kista) for compliant transfers between your labs.












## Deactivated users

### How long can I keep my account?

You can keep your account as long as you are actively working in your lab. We deactivate accounts that have not been used for 180 days for security reasons.

### Will I loose my data if I get deactivated? 

No, not as long as your lab is active. We will deactivate your account, although we do not delete your data as long as the lab is active. Please note that your lab leader has the same ability to delete, change or share data the lab under their control regardless if you your account is active or deactivated. 

### Can I reactivate my old account?

Yes. Lab leaders and lab coordinators can order reactivations in our [service desk](/administer-science/service-desk/lab-orders/#reactivate-lab-user). Reactivation requires a new user agreement if it is more than two years since your first user agreement was signed. You will need to reconfigure VPN and SSH to get up and running.



## Returning users

### Remind me, how do I connect to my lab?

Sure. If you haven't logged in for a while, here's a quick recap of the steps: (1) Start the HUNT VPN (OpenVPN or Tunnelblick), and use the verification code from Google Authenticator on your phone as key. (2) Log in to your lab using SSH (OS X, macOS and Linux), MobaXterm (Windows), or X2Go (both) for graphical software. Head over to our [troubleshooting](/do-science/troubleshooting/connection) section for further investigations if this does not work.




## Lab roles

Here is an explanation of some role names that we refer to in our documentation and agreements:

###  Lab leader

This is the individual that has signed the lab order for your lab. It is usually the principal investigator or other individuals holding approvals or that coordinate the scientific activity in your lab. The lab leader can adjust resources, manage users in the lab and order kistas.

### Lab coordinator

This is the individual that is authorized by the lab leader to authorize new users and upgrade compute and storage resources.

### Lab user

We use the term lab user on all that hold user accounts in a lab. All lab users in a lab holds the same technical privileges.


