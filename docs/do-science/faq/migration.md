---
title: Migration
category: FAQ
# Permalink '/do-science/faq/migration/' is being used in Lab Access link
permalink: /do-science/faq/migration/
outline: 1
description: This page lists frequently asked questions related to the 2024 migration of labs to their new cloud location.
---

# FAQ on migration

**This page lists frequently asked questions related to the migration of labs to their new cloud location in 2024. [Contact us](/contact) with questions to help us grow this FAQ.**



[[toc]]

::: tip Skip to the chase

We have a new location with upgraded equipment. All labs will be migrated over here in 2024. You should plan for few days of downtime. We will schedule the migration with individual labs to avoid conflicts with scientific deadlines. Data on home machines will be migrated automatically, and on a case-by-case basis for unmanaged machines. You will need to reconfigure custom software installation and reset your lab password.

:::

## General

### Why do we need to migrate?

We have a shiny new server room with new and upgraded equipment. This means more flexibility and capacity for your scientific experiments. At the same time this means more space for us in our original location to start planning the next generation of services.

### Can we migrate part of the lab?

Unfortunately not. The lab has to migrated as a whole.

## Timing

### When will our lab migration happen?

We plan to migrate most labs in 2024 starting in Q2. Lab leaders in BLUE and ORANGE data spaces will be contacted for schedule preferences.

### Can we schedule our lab migration?

Yes. We aim to avoid conflicts with your internal deadline such as papers, conferences, grants etc. to the extent possible. We will reach out to BLUE and ORANGE data spaces to schedule the migration accordance to their preferences. We will also try to accommodate requests for labs in WHITE data spaces to the extent possible.

### We are supposed to receive a big dataset, should we ask for a prioritization?

Yes! The available storage capacity in the new location is larger. Please reach out if you plan to import more than 10 terabytes of data.

### When is the last date we can schedule our migration?

Honestly, we don't know. Ideally, we would like all labs to be scheduled for migration during 2024.

## Cost

### Is there any cost involved with the migration?

Not directly, the migration is included in your lab subscription. However, be aware that the GPU availability differ slightly in the new location. We will migrate most P100 and V100S users to A30 or A40 GPUs.



<!-- before migration -->

## Before migration

### Do we need to prepare something before the migration?

Yes, if you have `cargo`-volumes and unmanaged machines in your lab. Worry not, we will contact your lab leader will further details if this is the case. In short, you will need to remove data from your cargo-volumes as these will be discontinued, and decide if you want storage volumes for unmanaged machines to be migrated or not.

### Will our home machine be the same after the migration?

No. You will get a new home machine with a new Ubuntu operating system (22.04 LTS). You will need to install and configure software that you have installed on your current home machine.

### Will our Conda environments on our home machine work after the new migration?

Yes, we expect that the Conda environments will work. We will migrate the storage volume on your home machine where these are stored.

### Will our apt and snap packages on home be migrated?

No. We will install a clean operating system, transfer your data and configure your current lab users. You need to install your preferred apt and snap packages yourself. We can send you a list of apt and snap packages installed after migration if you ask us on slack or email.

### How do I know if my apt-packages are supported in Ubuntu 22.04?

Some of your current apt-packages may depend on older Linux version. You can check the current packages that are supported by Ubuntu 22.04 (**Jammy**) here: [https://packages.ubuntu.com/](https://packages.ubuntu.com/).





### Will you migrate our storage volumes?

Yes. We will migrate your storage volumes to the new location. This means that your data should be the same. For unmanaged machines, you will be asked to choose if you want data to be migrated or if you want a fresh storage volume.

### Will our CPU machine types be the same?

Yes. We aim to move you to a new compute machine with the same machine type that you have today. However, the operating system will be fresh installation. Therefore, you will need to install and configure software that you have previously installed in your current lab.

### Will our GPU machines be the same?

No. The GPU availability differ slightly between the two locations. Labs with P100 and V100(s) GPU accelerators may be asked to migrate to a newer generation such as A30 or A40.

| Current GPU model  | Recommended model |
|--------------------|-------------------|
| P100 (16 GB vRAM)  | A30 (24 GB vRAM)  |
| V100s (32 GB vRAM) | A40 (48 GB vRAM)  |
| A100 (32 GB vRAM)  | A40 (48 GB vRAM)  |
| A100 (40 GB vRAM)  | A40 (48 GB vRAM)  |

<!-- TODO: add info on cargo volume -->

<!-- during migration -->

## During migration

### Will we be notified about our migration?

Yes. Your migration will be scheduled. We will notify you over email in advance and when the migration start.

### Will our lab be unavailable during our migration?

Yes and no. We will start the migration of your storage volumes and other configurations while you work in your current lab. When these initial transfers and configurations are completed, we will finalize your installation. Both your old and new lab will be unavailable during this step to avoid inconsistency in your data.

### How long will the migration last?

We expect your lab to be unavailable for about 1 day while we finalize your migration.


<!-- after migration: access, ... -->
## After migration

### Can we log directly into our migrated lab?

No. All lab users need to update their lab IP, reset their SSH passphrase and install a new Workbench certificate. We will send guides on how to do this during the migration (lab access link).


### Do I need update my X2go session preferences?

Yes. You need to update your IP address in your session preferences. You will find the updated IP address in Lab access link once your lab is migrated.

### How can I easily update my MobaXterm session?

Follow the MobaXterm session in Lab access link and use the blue button to create new session.

<!-- TODO I am missing an apt package, how can I install -->
