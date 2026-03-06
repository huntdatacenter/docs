---
title: About labs
category: HUNT Cloud
permalink: /administer-science/start-here/labs
outline: 0
description: This page gives on overview of lab management in HUNT Cloud.
---

# About your lab

**The digital lab is where you store and analyze your data and collaborate with your team.**

[[toc]]

Technically, your lab is a virtual machine that runs on a server in one of our data centers. This virtual machine contains resources for data storage and computation, as well as security configurations and user management controls.

Your scientists, that we call "lab users", gets their own workbench and personal folders. Principally all resources in your lab gets shared among your team, both computing power and storage. Your resources are dedicated to your lab, so you -not- access computing or storage resources from other labs in HUNT Cloud.


### Machines

By default, your lab consist of two machines, an entry machine and a home machine. You can add more machine if you like. 

The entry machine is a machine that we have set up to control the security and access to your lab. Your team has to pass this machine to enter your lab. However, they should only meet this machine during their user onboarding process. 

The advantages of the entry machine is that we manage and maintain the security in your lab, including machine restarts, without affecting your scientific analysis that runs inside your lab.

The home machine is where most of the fun happens. This is the machine that is the home of your default storage, and most of your analysis tools, including your users' lab benches (Workbench). 

### Storage

By default, the home machine in your lab have three storage volumes that are reachable for all of your team:

- **Work volume.** This is where you run your experiments. Place your scripts and code and do your work here. The directories for Workbench, licensed software (Matlab, Stata) and database directories are also stored here. Data saved here can be restored for 30 days.

- **Archive volume**. This is where you store your files that don't change that much, for example your data and analysis results. Data saved here can be restored for 30 days.

- **Scratch volume**. Scratch is designed for temporary data that gets generated when you run your scripts and analysis. This volume do -not- hold backup/restore. 
 
### Backup

Both work and archive holds nightly backups, that we call restore, for 30 days. This means that you are able to restore data yourself in cases of accidental deletions and accidental overwrites. '

Keep in mind that the restore function occupy a full duplicate copy of your data when you plan for your storage sizes. To illustrate, you will need at least 2TB of storage if you plan to store 1 TB of research data. 

You can turn off the restore function if you don't need the additional safety measure. 




