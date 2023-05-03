---
title: VPN certificate reset
category: Guides
permalink: /do-science/guides/vpn-certificate-reset
sidebarDepth: 1
description: This guide describe how to reset your VPN certificate for HUNT Cloud.
---

# VPN certificate reset

**This guide describes how to reset your VPN certificate and passphrase required to access your lab when you receieve your shipments from the [VPN certificate reset](/do-science/service-desk/#vpn-certificate-reset) order.**

[[toc]]

## 1. Requirements

::: warning Shipments from the VPN certificate reset order 

1.1 Your new VPN certificate and VPN profile in a compressed `7z`-file sent over filesender.no

1.2. Your new `VPN passphrase` and your `7-ZIP file key` sent over Signal.

:::

**Required software**. The following required software should aready be installed during your initial onboarding: 

1.3. Working VPN software (if not, head over to our Getting started guide to [install the VPN software](/do-science/getting-started/configure-vpn/#_2-1-install-the-vpn-software).

1.4. A working Google authenticator application on your phone that provide time-based VPN verification codes (if not, you can order a [Google authenticator key reset](/do-science/service-desk/#google-authenticator-key-reset) in our service desk).

## 2. Download and unpack your new certificate

We will communicate your VPN certificate over your organizational email. You will receive a link to an encrypted file archive (7z-file).

2.1 Click on the link in the email to download the file and save this on your local computer.

2.2 Unpack (extract) the file with your favorite file archiver software that recognize the [7z format](/do-science/tools/transfer/7z/) (see below).

Use the key named **`7-ZIP file key`** from your Signal transfer to decrypt the 7z archive.

::: tip Decryption guides

[Click here](/do-science/tools/transfer/7z/#install-7z-on-your-local-computer) for installation guidance if your current software don't recognize the 7z-format.

:::

::: danger OS X and MacOS - Passphrase not working?

Note that the default archive utility on MacOS do -not- recognize the passphrase of the 7z files. You will need to install the 7z-compatible software from the link above.

:::


## 3. Remove your old VPN certificate

You will need to remove your old VPN certificate and passwords before you install a new one. 

::: expander "Windows" id="3-windows"

1. Right click on the OpenVPN icon in the task bar in the lower right corner of your screen and select **`Clear Saved Passwords`** 
2. Open your file explorer and manually remove the folder with the old OpenVPN configurations. It's usually located here: 

```
C:\Users\<MYUSERNAME>\OpenVPN\config\<folder-with-username-that-you-should-remove>
```

:::

::: expander "MacOS" id="3-macos"

To remove old VPN configuration on MacOS using tunnelblick, follow our guide belo

1. Click on running Tunnelblick icon in upper menu bar and select `VPN details...`

![VPNemovalstep1.png](./images/VPNemovalstep1.png)

2. Select your VPN profile on the left side of the window. Then, in the bottom left corner, select expansion window maked with 3 dots in a circle

![credentialsremoval1](./images/credentialsremovalpart1.png)

3. At the very bottom of the newly opened withdow, select `Delete configuration's credentials in keychain`

![credentialsremoval2](./images/configremovalpart2.png)

4. Afterwards, select your VPN profile and delete it from Tunnelblick app as described on below picture

![profileremoval](./images/Configurations.png)

5. You can now continue with next step


:::

## 4. Setup the new VPN profile

Follow the [Setup the VPN profile](/do-science/getting-started/configure-vpn/#_2-2-setup-the-vpn-profile) section of our "Getting started" guide. 

## 5. Connect to the VPN

Follow the [Connect to the VPN](/do-science/getting-started/configure-vpn/#_2-3-connect-to-the-vpn) section of our "Getting started guide". 

## 6. Verify your VPN connection

Follow the [Verify your VPN connection](/do-science/getting-started/configure-vpn/#_2-4-verify-your-vpn-connection) section to verify a successful VPN connection as your will not be able to log into your lab until the VPN is working.

## Troubleshooting

See the [Immediate troubleshooting](/do-science/getting-started/configure-vpn/#immediate-troubleshooting) section in our [VPN configuration](/do-science/getting-started/configure-vpn/#_2-1-install-the-vpn-software) guide. 


