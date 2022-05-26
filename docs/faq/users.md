---
title: Users
category: FAQ
permalink: /faq/users
sidebarDepth: 1
description: This page lists frequently asked questions related to users and user management in labs.
---

# FAQ on lab users

This page lists frequently asked questions related to users and user management in labs.

[[toc]]

## New users

### How do we add new users?

Lab leaders and lab coordinators may order access for new lab users in our [servie desk](/service-desk/lab-orders/#add-a-new-lab-user). New users must sign the user agreements. Next, head over to our [onboarding guide](/getting-started) to prepare your key shipment.

### How long does an account activation take?

Allow for one week. However, we do recognize that science never sleeps, so [contact us](/contact) for high priority activations same or next business day when strictly needed.

### How many users can we add to a lab?

We have no hard limits. When that is said, all users in your lab will have access to all the data in the lab. Thus, we require that you limit users to those that have permissions in place to work with your data. Usually, labs with up to 6-7 people seem to be most effective. We are more than happy to spin off new labs as your team grows.

### Can we add users from outside our own organization?

Yes. Part of the rationale for our services is to keep data close to its donors by bringing scientists to the data. The data processor of your data (usually the host organization of the lab leader) is formally responsible for adding new users. We are happy to activate accounts for users that lab leader authorizes, both from local, national and global institutions. Keep in mind that users in your lab will have access to all of your lab data.








## Connectivity

### Can I connect and work from home?

Yes. We allow connections both from organizations and private network. However, be aware that teleworking conditions from your own organization and/or conditions from your data controller may restrict connections outside your office space and from [private machines](/faq/users/#can-i-connect-from-my-private-machine). Contact your lab owner for more information on the specific conditions in your lab.

### Can I connect from several local machines?

Yes. We allow you to configure several local machines to connect to your lab, for example both your laptop and desktop machine. Each machine needs to be configured with a VPN certificate and SSH. Start from step 2, [Configure your VPN](/getting-started/configure-vpn/) in our Getting started guide to get going. You will need your VPN passphrase and your VPN certificate, thus, Windows users may need to order av [VPN certificate reset](/service-desk/user-orders/#vpn-certificate-reset) in the service desk to get going.

### Can I do multiple connections at the same time?

No. For security reasons we only accept one connection from one user at the time. This means that your initial connection will be deactivated if you try to log in from another local machine. Check our [terminal multiplexer](/working-in-your-lab/technical-tools/terminal-multiplexers/) guide for how to instantly get back to your work when your connect from multiple local machines.

### Can I connect from my private machine?

Maybe. We do allow such connections, however teleworking conditions from your own organization and/or conditions from your data controller may restrict connections from private machines. Contact your lab leader for more information on the specific conditions in your lab.














## Current users

### How do I change my machine passphrase?

You can change your SSH passphrase with the **`passwd`** command. You will be asked to type your current password, and your future password two times. You will need to run the command on both your entry and home machine for a full update. Order a SSH passphrase reset in our [service desk](/service-desk/user-orders/#ssh-passphrase-reset) if you don't remember your passwords and need a reset.

```bash
passwd
```

### I don't remember my password, now what?

Worry not. Order a SSH passphrase reset in our [service desk](/service-desk/user-orders/#ssh-passphrase-reset). After the initial setup, you do need to remember your SSH password when you install software and access your workbench. Since you will not use your password for other activities after the initial onboarding it may be hard to remember. 


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

I will need to send us a [new user agreement](/service-desk/lab-orders/#add-a-new-lab-user) when you move to a new institution. We will revoke your current VPN certificate and send you a new one the is registered on your new organization.







## Access to more than one lab

### Can I get access to several labs?

Yes. You can access more than one lab. We encourage data spaces to separate data in labs and bring top expertise into their lab to do analysis there. You will need to send us one user agreement for each lab your want to acces. Lab leaders and lab coordinators may order your access in our [service desk](/service-desk/lab-orders/#add-a-new-lab-user).

### How do I get started with my second lab?

We will ship SSH configuration and keys after your lab leader or lab coordinator have order your lab access in the [service desk](/service-desk/lab-orders/#add-a-new-lab-user). When you get your keys, head to [Step 3. Configure your SSH](/getting-started/configure-ssh/) in our onboarding guide to get started.

### Can I transfer and merge data between my labs?

Maybe, however not by default. You will need an explicit approval from your lab leader for such transfers and merges. When this is in place, order an [internal kista](/service-desk/lab-orders/#internal-kista) for compliant transfers between your labs.












## Deactivated users

### How long can I keep my account?

You can keep your account as long as you are actively working in your lab. We deactivate accounts that have not been used for 180 days for security reasons.

### Will I loose my data if I get deactivated? 

No, not as long as your lab is active. We will deactivate your account, although we do not delete your data as long as the lab is active. Please note that your lab leader has the same ability to delete, change or share data the lab under their control regardless if you your account is active or deactived. 

### Can I reactivate my old account?

Yes. Lab leaders and lab coordintors can order reactivations in our [service desk](/service-desk/lab-orders/#reactivate-lab-user). Reactivation require a new [user agreement](/agreements/downloads/#user-agreement). You will need to reconfigure VPN and SSH to get up and running.



## Returning users

### Remind me, how do I connect to my lab?

Sure. If you haven't logged in for a while, here's a quick recap of the steps: (1) Start the HUNT VPN (OpenVPN or Tunnelblick), and use the verification code from Google Authenticator on your phone as key. (2) Log in to your lab using SSH (OS X, macOS and Linux), MobaXterm (Windows), or X2Go (both) for graphical software. Head over to our [troubleshooting](/troubleshooting/connection) section for further investigations if this does not work.




## Lab roles

Here is an explanation of some role names that we refer to in our documentation and agreements:

###  Lab leader

This is the individual that has signed the lab order for your lab. It is usually the principal investigator or other individuals holding approvals or that coordinate the scientific activity in your lab. The lab leader can adjust resources, manage users in the lab and order kistas.

### Lab coordinator

This is the individual that is authorized by the lab leader to authorize new users and upgrade compute and storage resources.

### Lab user

We use the term lab user on all that hold user accounts in a lab. All lab users in a lab holds the same technical privileges.


