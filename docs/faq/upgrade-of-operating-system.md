---
title: Upgrade of Operating System
category: FAQ
permalink: faq/os-upgrade
sidebarDepth: 1
description: This page lists frequently asked questions related to OS upgrades.
---

# Upgrade of Operating System

We will from time to time upgrade operating systems on entry and home machines. This page lists frequently asked questions related to such upgrades.



[[toc]]

## Why is this necessary? 

To provide you with a reliable lab environment, we do need to update the Ubuntu operating systems on your entry and home machines. We aim to do this about every two years. 

## What is the target version?

The upgraded Ubuntu version will be 18.04 LTS (Bionic). For those that are interested to get this version as soon as possible, feel free to reach out here in the thread or in your lab channel so we can prioritize your lab.

## How long will the upgrade take?

We expect the upgrade to take up to 2 hours including restart.

## Will I be notified? 

Yes, we will reach out to lab users to schedule the upgrades.

## Will it affect my tools?

Maybe. Below we describe expected changes in packages with potential effects.

### Python

System python version will change from 3.5 to 3.6. You may need to reinstall some of your Pip packages.

### R / Rstudio

R version can slightly change, although the main version still remains the same. This should minimize any risk of affecting your scripts. Be aware that the operating system upgrade also upgrade system packages that your R-packages may relay on.

### Conda

No changes expected. Those who use Conda to run Python, R, or other tools should not see any changes.

### Matlab

No changes expected.

### Stata

No changes expected.

## What if I need the old version? 

Some of your tools may relay on old package version. Reach out if you are dependent on packages from the old operating system version so we can discuss different options to keep your science going.


