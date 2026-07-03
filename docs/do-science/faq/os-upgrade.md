---
title: OS Upgrade
category: FAQ
# Permalink '/do-science/faq/os-upgrade/' is being used in Lab Access link
permalink: /do-science/faq/os-upgrade/
outline: 1
description: This page lists frequently asked questions related to the 2026 OS upgrade of labs to new Ubuntu release.
---

# FAQ on OS upgrades

**This page lists frequently asked questions related to the OS Upgrades of labs to new Ubuntu release in 2026. [Contact us](/contact) with questions to help us grow this FAQ.**

[[toc]]

## General

### Why do we need to upgrade?

We need to upgrade operating systems on your entry and home machines every other year or so to ensure that your lab runs reliably. OS upgrades are required for continuous security updates and to maintain a basic set of applications in your lab.

## What is the current target version?

This time we will upgrade Ubuntu operating systems on entry and home machines that run on Ubuntu 22.04 LTS to version 24.04 LTS.

## When will you do the upgrade?

We expect this upgrade cycle to run during July.

## Will my running jobs be affected?

Yes. We need to restart your home machines and all running jobs on this machine will be stopped during upgrades. Jobs running on IAAS, Spot, or GPU machines will not be affected.

## Will I be notified?

Yes. We will reach out to your lab to schedule the upgrade.

## Will the upgrade affect my tools?

Maybe. Below is a description of expected changes in packages that may cause potential effects on your workflows.

### Workbench

OS Upgrade should not affect your Workbench tooling.

### Python

System python version may change. We will specify such changes on these pages prior to each cycle. You may need to reinstall some of your Pip packages.

### R / Rstudio

R version can change slightly, although the main version will remain the same. This should minimize any risk of affecting your scripts. Be aware that the operating system upgrade also upgrade system packages that your R-packages may depend on.

### Conda

No changes expected. Those who use Conda to run Python, R, or other tools should not see any changes.

### Matlab

No changes expected.

### Stata

No changes expected.
