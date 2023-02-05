---
title: Lab reports
category: FAQ
permalink: /administer-science/faq/labreports
sidebarDepth: 1
description: Starting from January 2020, we aim to send monthly reports to lab leaders and lab coordinators of the resource allocations and usage in their lab environments. Here is a collection of some of the known issues as of today.
---

# Troubleshooting lab reports

Starting from January 2020, we aim to send monthly reports to lab leaders and lab coordinators of the resource allocations and usage in their lab environments. Here is a collection of some of the known issues as of today:

[[toc]]

## Storage

The reported storage volumes may deviate from the observed storage as you see it inside your lab machines. We know of a few reasons why this may happen which is listed below. You can check your storage as reported on your machines by logging into the machine and type `df -h`.

### Discrepancy in reported volume numbers

Storage volumes that are attached to the machine, but not mounted as volumes, will appear in the reported list. However, these may not be seen on the machine using the regular `df -h` command. If you see such discrepancies, feel free to [contact us](/contact). We are happy to help adding or removing those to your machines.

### Discrepancy in reported volume sizes

Storage volumes sizes may show larger sizes in the report than those you observe in your machine. One reason for this could be that the volume size is expanded on our end, although we have not effectuated this on your end as this will require a planned restart of the machine.

### Discrepancy in reported volume usage

Volumes that are attached to machines that has been running without a restart since December 2019 may report zero usage. These machine may need a restart for all of your volumes to be reported correctly. You can do this yourself by logging into the machine where the storage is attached and execute the `sudo reboot` command.

::: warning WARNING

Rebooting your lab machine may affect all your lab colleagues. We advice that you discuss this with your lab colleagues and announce restarts so no one looses their valuable work.

:::
