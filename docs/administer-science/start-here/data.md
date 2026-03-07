---
title: About data
category: HUNT Cloud
permalink: /administer-science/start-here/data
outline: 0
description: This page gives on overview of dat management in HUNT Cloud.
---

# About data

**Data is the precious raw material of data-driven sciences. We should take good care of it and make it shine.**

[[toc]]

### Data care

Most labs in HUNT Cloud work with sensitive data. Usually, a key success factor for our labs is to get hold of and activate as much data as possible in their projects, and to enable as much brain-power as possible to analyze the data. This may include recruiting lab users from a broad set of scientific fields and backgrounds.

We recommend that you as a lab administrator establish routines to talk with your lab users about the responsibilities they take on when working with sensitive data. For example for personal sensitive data science, that there is a human behind every number, and that such donations needs to be handled with care and respect to maintain the trust from both study participants and the broader research community.


### Data storage

By default, the home machine in your lab have three storage volumes that are reachable for all of your team:

- **Work volume.** This is where you run your experiments. Place your scripts and code and do your work here. The directories for Workbench, licensed software (Matlab, Stata) and database directories are also stored here. Data saved here can be restored for 30 days.

- **Archive volume**. This is where you store your files that don't change that much, for example your data and analysis results. Data saved here can be restored for 30 days.

- **Scratch volume**. Scratch is designed for temporary data that gets generated when you run your scripts and analysis. This volume do -not- hold backup/restore. 
 
### Data backup

Both work and archive holds nightly backups, that we call restore, for 30 days. This means that you are able to restore data yourself in cases of accidental deletions and accidental overwrites. '

Keep in mind that the restore function occupy a full duplicate copy of your data when you plan for your storage sizes, and additional space if you change the data over a 30 days period. To illustrate, you will need at least 2TB of storage if you plan to store 1 TB of research data. 

You can turn off the restore function if you don't need the additional safety measure.

### Data transfers

You lab users have several ways to get data in and out of your lab, among others:

- **Direct uploads from lab users**. By default, lab users will be able to move small files between their local computer by "drag-and-drop" in their Workbench. This is intended for code and summary statistics and other day-to-day operations of non-sensitive data.

- **External transfers of sensitive data in an our of HUNT Cloud**. We have a dedicated service for sensitive data transports that we call "External kista". This is aimed at hospitals and data producing facilities, and follows strict security protocols, e.g. compliance with the Norwegian "Helsenorm".

- **Internal transfers between labs**. We have a dedicated service for data transports between lab environments that we call "Internal kista". This is to ensure that transfers between lab environments inside HUNT Cloud is documented and controlled.

Both external and internal kistas are ordered in our administer science service desk and require signature from either lab leaders or data space leaders before activation. 

If needed, we are more than happy to assist in dialogues with your data sources to describe security controls of the kista services.

### Data organization

Regardless of how well-intentioned the initial planning of your lab may be, data organization often becomes chaotic over time. Duplicate data copies may become a significant cost-driver over time, and it might be difficult to find what you are looking for.

We recommend that one in your lab users take on the role of "data administrator" with the responsibility to maintain oversight and control, to guide your lab users towards the intended structure, and to clean up redundant data when necessary.

