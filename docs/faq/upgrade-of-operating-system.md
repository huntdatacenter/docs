---
title: Operating system upgrades
category: FAQ
permalink: faq/os-upgrade
sidebarDepth: 1
description: This page lists frequently asked questions related to operating system upgrades.
---

# Operating system upgrades

This page lists frequently asked questions related to operating system upgrades.

[[toc]]

## Why is this necessary?

We need to upgrade operating systems on your entry and home machines every other year or so to ensure that your lab runs reliably. OS upgrades are required for continuous security updates and to maintain a basic set of applications in your lab.

## What is the current target version?

This cycle, we will upgrade Ubuntu operating systems from version 16.04 to version 18.04 LTS (Bionic).

## Why not upgrade to the latest version?

For reliability, we aim to run one OS version below the latest release long term release from Ubuntu. That said, we do recognize the need to utilize newer OS versions to keep your science flying. These are available on IAAS og Blue machines.

## When will you do the upgrade?

We aim to upgrade all labs before the end of April 2021. For those that are interested to get 18.04 as soon as possible, feel free to [contact us](/contact) so we can prioritize your lab.

## How long will the upgrade take?

We expect the upgrade to take up to two hours including a restart.

## Will my running jobs be affected?

Yes. We need to restart your home machines and all running jobs on this machine will be stopped during the upgrade. Jobs running on IAAS and Blue machines will not be affected.

## Will I be notified?

Yes. We will reach out to your lab to schedule the upgrade.

## Will the upgrade affect my tools?

Maybe. Below is a description of expected changes in packages that may cause potential effects on your workflows.

### Python

System python version will change from 3.5 to 3.6. You may need to reinstall some of your Pip packages.

### R / Rstudio

R version can slightly change, although the main version will remain the same. This should minimize any risk of affecting your scripts. Be aware that the operating system upgrade also upgrade system packages that your R-packages may depend on.

### Conda

No changes expected. Those who use Conda to run Python, R, or other tools should not see any changes.

### Matlab

No changes expected.

### Stata

No changes expected.

## What if I remain on the old OS version?

You will loose possibility to install packages. Many tools like Python are progressing and your setup will not be supported anymore.
We recognize that some tools are bound to older package versions. [Contact us](/contact) if you are dependent on packages from the old operating system version so we can discuss different options to keep your science going.
