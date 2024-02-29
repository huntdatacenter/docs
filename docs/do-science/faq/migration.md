---
title: Migration
category: FAQ
# Permalink '/do-science/faq/migration/' is being used in Lab Access link
permalink: /do-science/faq/migration/
sidebarDepth: 1
description: This page lists frequently asked questions related to migration of labs to new cloud location.
---

# FAQ on migration

**This page lists frequently asked questions related to migration of labs to new cloud location.**

[[toc]]

## Migration

Migration of labs from cloud1 to cloud2.

### Why?

We have a new shiny server room with new machines.
Don't worry the old machines will move to a farm just out of town where they will live happily ever after.

<!-- before migration -->
## Schedule and preparations

### What does it cost?

There is no cost related to Lab migration.

### Can I schedule my lab migration?

Yes. We will reach out to schedule migrations with each lab. We can try to prioritize or postpone if needed due to running analysis.

### I am supposed to receive a big dataset, should I ask for a prioritization?

Yes.

### Are there going to be any changes to storage?

Work and scratch are replicated for better speeds. Archive is erasure coded for better long term storage.

### What about my GPU?

In cloud2 we will have different GPU models. TBA

<!-- TODO: add details on recommended mapping (gitlab issue) -->

<!-- during migration -->
## During migration

### Will I be notified about migration?

Yes. We will notify before... <!-- TODO -->

### Is my lab going to be unavailable during migration?

Yes. This is to avoid inconsistency in your data.

<!-- after migration: access, ... -->
## After migration

### Do I need to change anything regarding my lab user setup?

Yes. The IP address of entry machine and passwords will change. We will send you reset with all the details in Lab access link.

### Are there any changes to lab setup?

We will setup new machines in cloud2 with latest Ubuntu (22.04 LTS). You should check if you need apt packages that require older version than 22.04.

### Will I have all my apt packages installed?

We will install clean setup, transfer your data and configure lab users. If there are specific apt packages you will be able to install them yourself, but you need to double check that they support Ubuntu 22.04 (https://packages.ubuntu.com/).
