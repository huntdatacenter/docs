---
title: Compute
permalink: faq/compute
sidebarDepth: 1
---

# FAQ on lab compute

This page list frequently asked questions realted to compuation and analysis in labs.

[[toc]]

## Machine types

You will meet four principal machine types in your lab. You may choose to deploy home, iaas and blue machines in [various sizes](https://www.ntnu.edu/mh/huntcloud/cloud-services/hunt-compute).

### What is a "home" machine?

This is a managed machine type. All labs have one "home" machine that is pre-configured with user accounts, mounted storage and some analytical software. Users may download their own software using the `apt` package manager and reboot their machine when needed. Further configurations has to be guided by us. Home machines run Ubuntu 16.04 operating systems.

### What is an "iaas" machine?

In addition to the home machine, lab leaders and lab coordinators may request new "iaas" machines to be deployed in your lab. This is an unmanage machine type. You do get full administrator privileges (root access). We expect you to configure and maintain these machines yourself. We normally deploy these machines with a vanilla Ubuntu 18.04 operating system. Iaas machines are deployed for a minimum of 30 days.

### What is a "blue" machine?

Blue machines are identical to iaas machine with one exceptions: they are deployed for a maximum of 30 days. The machine type is introduced to allow for flexible deployments of short-lived high capacity environments.

### What is an "entry" machine?

You will meet the "entry" machine when you configure your account during your initial onboarding. Hopefully, you will not meet this machine type again. The machine type is introduced for security purposes allowing us to quickly install security updates and do machine restarts without affecting your analyis in the other lab machines.

## Software

### Can we bring our own software?

Yes. You can install your own software in your lab environment under our _bring-your-own-software_ policy, for example using the following syntax:

```bash
sudo apt install <packagename>
```

### Can we bring our own licenses?

Yes. If you use software that needs paid licenses you may bring your own licenses under our _bring-your-own-license_-policy. Your lab leader is responsible to ensure that licensed software is used in accordance with the license agreement inside the lab environments.


## Workflow


### How can I keep my jobs running when I disconnect?

You can keep your jobs and sessions running by using something called a terminal multiplexer. See our [terminal multiplexers guide](/tutorials/terminal-multiplexers) to get started.
