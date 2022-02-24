---
title: Workbench key transfer
category: Guides
permalink: /guides/workbench-key-transfer
sidebarDepth: 1
description: Guide on the key transfer for the HUNT Cloud workbench.
---

# Workbench key transfer

**This section describe how you can prepare your workbench key transfer and how to ensure that you get your expected keys before you start your installation.**

[[toc]]

## Prepare your key transfer

After you have send us the workbench access request, ensure that you have installed and activated the **Signal app** on your phone so we can quickly forward your keys when they are ready. 

* [Download and install for iOS here](https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8)
* [Download and install for Android here](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en)

## Verify your key transfer

Similar to your initial onboarding, we will send you a link to your certificate over your organizational email and your keys over Signal.

1. On your phone you should expect an image with your certificate key from phone number 91001893. This number is registered on NTNU. The text should include your `TLS certificate`.

2. On email you should expect a link to one (1) compressed file:

::: warning Expect these files on your local machine

A successful opening of the 7z-file file should include two (2) files:

* `<labname>-<your-username>.p12` - your TLS certificate.
* `<labname>-<your-username>.mobileconfig` - your OS X and MacOS configuration file.

:::

When have successfully received your certificate, head over to our [workbench installation page](/working-in-your-lab/workbench/installation/) to finalize your setup.

