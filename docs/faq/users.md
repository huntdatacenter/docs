---
title: Users
permalink: faq/users
sidebarDepth: 1
---

# FAQ on lab users

This page lists frequently asked questions related to users and user management in labs.

[[toc]]

## New users

### How do we add new users?

Your lab leader or lab coordinator can add new users to your lab. New users must sign our [user agreements](/assets/hunt-cloud-user-agreement.pdf). Forward the signed agreement to us on [email](/contact) and start our [onboarding guide](/getting-started).

### How long does an account activation take?

Allow for several weeks at this point. We activate new accounts and labs in the beginning of each week. Depending on the number of requests, accounts may be activated the upcoming week or some weeks thereafter. We do recognize that science never sleeps, so [contact us](/contact) for high priority activations same or next business day when needed.

### How many users can we add to a lab?

We have no hard limits. When that is said, all users in your lab will have access to all the data in the lab. Thus, we require that you limit users to those that have permissions in place to work with your data. Usually, labs with up to 6-7 people seem to be most effective. We are more than happy to spin off new labs as your team grows.

### Can we add users from outside our own organization?

Yes. Part of the rationale for our services is to keep data close to its donors by bringing scientists to the data. The data processor of your data (usually the host organization of the lab leader) is formally responsible for adding new users. We are happy to activate accounts for users that lab leader authorizes, both from local, national and global institutions. Keep in mind that users in your lab will have access to all of your lab data.

## Current users

### Can I connect from several local machines? 

Yes. We allow you to configure several local machines to connect to your lab, for example both your laptop and desktop machine. Each machine needs to be configured with a VPN certificate and SSH. Start from step 2, [Configure your VPN](/getting-started/configure-vpn/) in our Getting started guide to get going. You will need your VPN passphrase and your VPN certificate, thus, Windows users may need to [contact us](/contact) for a new certificate.

### Can I do multiple connections at the same time?

No. For security reasons we only accept one connection from one user at the time. This means that your initial connection will be deactivated if you try to log in from another local machine. Check our [terminal multiplexer](/working-in-your-lab/technical-tools/terminal-multiplexers/) guide for how to instantly get back to your work when your connect from multiple local machines. 

### Can I connect from my private machine? 

Maybe. Teleworking conditions from your own organization and/or conditions from your data controller may restrict connections from personal computers. Contact your lab owner for more information on the specific conditions in your lab.

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

## Deactivated users

### Can I reactivate my old account?

Yes. We deactivate accounts that have not been used for 180 days for security reasons. You may reactivate such accounts. Reactivation require a new co-signed HUNT Cloud user agreement with your lab leader or lab coordinator that you [forward to us](/contact) on mail for account activation. You will need to reconfigure VPN and SSH to get up and running.

## User roles

The following user roles are defined in our lab agreements: 

- **Lab leader.** This is the individual that has signed the lab agreement for your lab environment. It is usually the principal investigator or other administrative personnel holding the approvals (such as ethical approvals) for your lab activity.

- **Lab coordinator**. The lab leader delegate authority to a lab coordinator to make decisions inside a lab environment, for example to authorize new users and upgrade compute and storage resources.

- **Lab user**. We use the term lab user on all that hold user accounts in your lab environments.
