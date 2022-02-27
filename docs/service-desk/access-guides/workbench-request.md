---
title: Workbench certificate request
category: Guides
permalink: /guides/workbench-request
sidebarDepth: 1
description: Guide on the certificate request for the HUNT Cloud Workbench.
---

# Workbench certificate request

**This section describes how you can request your Workbench certificate and how to verify that you received all you need before you start your installation.**

[[toc]]

## Prepare to receive your certificate

After you have sent us Workbench access request, ensure that you have installed and activated the **Signal app** on your phone so we can quickly forward your certificate when they are ready.

* [Download and install for iOS here](https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8)
* [Download and install for Android here](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en)

## Verify your certificate

Similar to your initial onboarding, we will send you a link to your certificate over your organizational email and your keys over Signal.

1. On your phone you should expect an image with your certificate passphrases from phone number `+47 91001893`. This number is registered at NTNU. The text should include your `TLS certificate`.

2. On email you should expect a link to one (1) compressed file:

::: warning Expect these files on your local machine

A successful opening of the 7z-file file should include two (2) files:

* `<labname>-<your-username>.p12` - your TLS certificate.
* `<labname>-<your-username>.mobileconfig` - your OS X and MacOS configuration file.

:::

When you have successfully received your certificate, head over to our [Workbench installation guide](/working-in-your-lab/workbench/installation/) to finalize your setup.
