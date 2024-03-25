---
title: Migration
category: FAQ
# Permalink '/do-science/faq/migration/' is being used in Lab Access link
permalink: /do-science/faq/migration/
sidebarDepth: 1
description: This page lists frequently asked questions related to migration of labs to new cloud location.
---

# FAQ on migration

**This page lists frequently asked questions related to the migration of labs to our new cloud location in 2024.**

[[toc]]

## Why do we need to migrate?

We have a shiny, new server room with new and upgraded equipment. This means more flexibility and capacity for your scientific experiments. At the same time this means more space for us in our original location to start planning the next generation of services.

<!-- before migration -->

## Before migration


### When will our lab migration happen?

We plan to migrate most labs in 2024 starting in Q2.


### Can we schedule our lab migration?

Yes. The migration wil be scheduled on a per lab basis and we will reach out to schedule your migration. We aim to avoid conflicts with your internal deadline such as papers, conferences, grants etc. to the extend possible.


### Is there any cost involved with the migration?

Not directly, the migration is included in your lab subscription. However, the GPU availability will differ slightly in Cloud2. Those that utilize P100 and V100(s) GPU cards might be asked to migrate to a newer generation such as A30, A40 and A100.


### I am supposed to receive a big dataset, should I ask for a prioritization?

Yes. The available storage capacity in the new location is larger. Please reach out if you plan for imports above 10 terabytes.

### Will our home be the same?

A new installation for your home machine will be available. You will be asked to update your lab passwords and install new workbench certificates. The operating system will be a fresh install of latest Ubuntu (22.04 LTS) and you will need to install software that you have installed in your current location.

### Will I have all my apt packages installed?

We will install a clean operating system, transfer your data and configure your current lab users. You need to install specific apt packages yourself.

### How do I know if my apt-packages are suppoerted in Ubuntu 22.04?

We recommend that you if you need apt packages that require older version than 22.04. It might be good to sanity-check that they support Ubuntu 22.04 (https://packages.ubuntu.com/).


### Will our CPU machines be the same?

Yes. We aim to move you to a new compute machine with the same machine type that you have today. However, the operating system will be fresh intallation, so software and other adaptations that you have done to your current environment must be reinstalled.


### Will our storage volumes be the same?

Yes. We will migrate your storage volumes to the new location.

### Will our GPU machines be the same?

No. The GPU availability will differ slightly. Those that utilize P100 and V100(s) GPU cards might be asked to migrate to a newer generation such as A30, A40 and A100.

| Current GPU model  | Recommended model |
|--------------------|-------------------|
| p100 (16 GB VRAM)  | a30 (24 GB VRAM)  |
| v100s (32 GB VRAM) | a40 (48 GB VRAM)  |
| v100 (32 GB VRAM)  | a40 (48 GB VRAM)  |
| a100 (40 GB VRAM)  | a40 (48 GB VRAM)  |

<!-- TODO: add info on cargo volume -->

<!-- during migration -->

## During migration

### Will we be notified about our migration?

Yes. Your migration will be scheduled. We will notify you over email in advance and when the migration start.

### Will our lab be unavailable during our migration?

Yes. Your lab will be unavailable while data are migration to avoid inconsistency in your data.

### How long will the migration last?

The duration of the migration depends on the size of your storage volumes. We will reach our to larger environments with migraton time estimates before we start.


<!-- after migration: access, ... -->
## After migration

### Do I need to change anything regarding my lab user setup?

Yes. The IP address of your entry machine and passwords will change. We will send you information with necessary onboarding details in a new Lab access link.

### Do I need update my X2go session preferences?

Yes. Update the IP address of entry machine. You will find the updated IP address in Lab access link once your lab is migrated.

### How can I easily update my Mobaxterm session?

Follow the Mobaxterm session in Lab access link and use the button to create new session.

<!-- TODO I am missing an apt package, how can I install -->
