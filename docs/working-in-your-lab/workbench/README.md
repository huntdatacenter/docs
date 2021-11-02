---
title: Introduction
category: Workbench
description: Guides to your Workbench setup.
---

# Workbench

**The intention with the Workbench is to give you a simple and secure place to work with your data and tools together with your team.**

## About

The Workbench is web-based and build around the feel of Jupyter notebooks with access to application such as RStudio, R, Python and Conda. We have also included support for Matlab and Stata for those than bring their own license.

![hunt-lab-workbench.png](./images/hunt-lab-workbench.png)

## Request access

::: warning Approvals
Workbench is currently only available to NTNU users and lab users from data controllers that have approved the service.
:::

**Existing users**: [Contact us](/contact) to request keys and the certificate. Example email:

> Hi team,
>
> I would like to try Workbench in `labname` and are looking forward to receive my certificate.

**New users**: You will receive keys and the certificate as part of your regular onboarding.

::: tip Requirement

Install Signal app on your phone so that we can quickly forward the keys when they are ready.

- [Download and install for **iOS** here](https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8)
- [Download and install for **Android** here](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en)
:::

## Key transfer

Similar to your initial onboarding, we will send you a link to your certificate over your organizational email and your keys over Signal.

On your phone you should expect an image with your certificate key from phone number 91001893. This number is registered on NTNU. The text should include your **`TLS certificate`**.

On email you should expect a link to one (1) compressed file:

::: warning Expect these files on your local machine

A successful opening of the 7z-file file should include two (2) files:

- **`<labname>-<your-username>.p12`** - your TLS certificate.
- **`<labname>-<your-username>.mobileconfig`** - your OS X and MacOS configuration file.

:::

When have successfully received your certificate, head over to our [Workbench installation page](/working-in-your-lab/workbench/installation/) to finalize your access.
