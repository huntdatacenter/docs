---
title: Lab coordination
category: Frequently asked questions
permalink: /administer-science/faq/lab-management/
description: This page contains common questions on scientific administration in HUNT Cloud.
---

# Lab management FAQ

**This FAQ is intended for lab coordinators and lab leaders that manages activites whitin one lab.**

[[toc]]

::: tip

Head over to our [Do science FAQ](/do-science/faq) for questions on how to do science in a lab.

:::

## General questions 

### What can I order as a lab coordinator? 

Head over to our service desk for [lab orders](/administer-science/service-desk/lab-orders/) to get an overview of the pre-defined orders that you can manage as a lab coordinator or lab leaders. 

## User management

### How do we add new lab users to our existing lab?

Lab leaders and lab coordinators may order access for new lab users in our [administer science service desk](/administer-science/service-desk/lab-orders/#add-a-new-lab-user).

### How do we add existing lab users to a new lab? 

You will need to send us one user agreement per user via the [administer science service desk](/administer-science/service-desk/lab-orders/#add-a-new-lab-user) similar to new users as each lab holds independent user agreements. However, existing users will only configure the SSH connection as part of the access since their VPN and user name stays the same.

### How long does an account activation take?

Usually within days, although it may be good to allow for one week. We do recognize that science never sleeps, so [contact us](/contact) for high priority activations same or next business day when strictly needed.

### How many users can we add to one lab?

We have no hard limits. When that is said, all users in your lab will have access to all the data in the lab. Thus, we require that you limit users to those that have permissions in place to work with your data. Usually, labs with up to 6-7 people seem to be most effective. We are more than happy to spin off new labs as your team grows.

### Can we add users from outside our own organization?

Yes. Part of the rationale for our services is to keep data close to its donors by bringing scientists to the data. The data processor of your data (usually the host organization of the lab leader) is formally responsible for adding new users. We are happy to activate accounts for users that lab leader authorizes, both from local, national and global institutions. Keep in mind that users in your lab will have access to all of your lab data.


## Troubleshooting lab reports

We aim to send regular reports to lab leaders and lab coordinators of the resource allocations and usage in their lab environments. Here is a collection of some of the known issues as of today:

The reported storage volumes may deviate from the observed storage as you see it inside your lab machines. We know of a few reasons why this may happen which is listed below. You can check your storage as reported on your machines by logging into the machine and type `df -h`.

### Discrepancy in reported volume numbers

Storage volumes that are attached to the machine, but not mounted as volumes, will appear in the reported list. However, these may not be seen on the machine using the regular `df -h` command. If you see such discrepancies, feel free to [contact us](/contact). We are happy to help adding or removing those to your machines.

### Discrepancy in reported volume sizes

Storage volumes sizes may show larger sizes in the report than those you observe in your machine. One reason for this could be that the volume size is expanded on our end, although we have not effectuated this on your end as this will require a planned restart of the machine.

### Discrepancy in reported volume usage

Volumes that are attached to machines that has been running without a restart since December 2019 may report zero usage. These machine may need a restart for all of your volumes to be reported correctly. You can do this yourself by logging into the machine where the storage is attached and execute the `sudo reboot` command.

::: warning WARNING

Rebooting a lab machine will affect all lab users. We advice that you discuss this with your lab team and announce the restart so no one looses their valuable work.

:::
