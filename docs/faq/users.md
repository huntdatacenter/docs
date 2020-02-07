---
title: Users
permalink: faq/users
sidebarDepth: 1
---

# FAQ on users

This page lists frequently asked questions related to users and user management in labs.

[[toc]]

## Roles

### What is "lab leader"?

We use the term "lab leader" on the individual that sign our lab agreement, and thus are in charge of a lab environment. This is usually the individual / principal investigator holding the ethical approval for the lab activity.

### What is a "lab coordinator"?

The "lab coordinator" is named in the lab agreement. This individual is delegated authority on behalf of the lab leader to make decisions in the lab, such as authorizing new users and adjust resources.

### What is a "lab user"?

We use the term "lab user" on scientists that hold accounts and uses lab environments.

## New users

### How can we add new users in our lab?

Lab leaders and lab coordinators can identify and authorize new users in their lab environments. New users must co-sign the HUNT Cloud user agreement (acceptable use policy) with the lab leader or lab coordinator. Forward signed agreements [on mail](/contact) for account activation.

### How long may a new account activation take?

Allow for several weeks. We activate new accounts and labs in the start of each week. Depending on the number of requests accounts may therefore be activated the upcoming week or some weeks thereafter. We do recognize that science never sleeps, so [contact us](/contact) for high priority account activations same or next business day when needed.

### Can we add new users outside our own organization?

Yes. Part of the rationale for our services is to keep data close to its donors by bringing in scientists to work with the data. The host organization of the lab leader (data processor) is responsible for the lab user identification and authorization. We are happy to activate accounts for users that lab leader authorizes, both from local, national and global institutions.

### How many users can we add to our lab?

We have no hard limits. When that is said, all users in your lab will have access to all the data in the lab. Thus, we require that you limit users to those that have permissions in place to work with your data. Usually, labs with up to 6-7 people seem to be most effective. We are more than happy to spin off new labs as your team grows.

## Current users

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
