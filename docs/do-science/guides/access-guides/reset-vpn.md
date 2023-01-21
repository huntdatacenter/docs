---
title: VPN certificate reset
category: Guides
permalink: /do-science/guides/vpn-certificate-reset
sidebarDepth: 1
description: This guide describe how to reset your VPN certificate for HUNT Cloud.
---

# VPN certificate reset

**This guide describes how to reset your VPN certificate and passphrase required to access your lab when you receieve your shipments from the [VPN certificate reset](/service-desk/user-orders/#vpn-certificate-reset) order.**

### Requirements

::: warning Shipments from the VPN certificate reset order 

1. Your new VPN certificate and VPN profile sent over Filesender.no
2. Your new **`VPN passphrase`** and your **`ZIP file key`** sent over Signal.

:::

Software already installed in your initial lab onboarding: 

3. VPN software already installed (if not, head over to our Getting started guide to [install the VPN software](/getting-started/configure-vpn/#_2-1-install-the-vpn-software).
4. A working Google authenticator application on your phone that provid time-based VPN verification codes (if not, you can order [Google authenticator key reset](/service-desk/user-orders/#google-authenticator-key-reset) in our service desk).

### Download and unpack the certificate

We will communicate your VPN certificate over your organizational email. You will receive a link to an encrypted file archive (7z-file).

- Click on the link in the email to download the file and save this on your local machine.
- Unpack (extract) the file with your favorite file archiver software that recognize the [7z format](https://docs.hdc.ntnu.no/working-in-your-lab/transfer-tools/7z/) (see below).
- Use the key named **`ZIP file key`** from your Signal transfer to decrypt the 7-zip archive.

::: tip Decryption guides

Click on these links for installation guidance if your current software don't recognize the 7z-format: [Windows](https://docs.hdc.ntnu.no/working-in-your-lab/transfer-tools/7z/#windows), [mac](https://docs.hdc.ntnu.no/working-in-your-lab/transfer-tools/7z/#mac-os-x), [linux](https://www.google.no/search?q=unpack+7z+linux).

OS X and macOS: The default archive utility will not recognize the passphrase of 7z files. You will need to install 7z-compatible software from the link above.

:::

### Remove the old VPN certificate

You will need to remove your old VPN certificate and passwords before you install a new one. 

::: details Windows 

1. Right click on the OpenVPN icon in the task bar in the lower right corner of your screen and select **`Clear Saved Passwords`** 
2. Open your file explorer and manually remove the folder with the old OpenVPN configurations. It's usually located here: 

```
C:\Users\<MYUSERNAME>\OpenVPN\config\<folder-with-username-that-you-should-remove>
```

3. Right click on the OpenVPN icon once more and **`Import from file`** from the Connect to the VPN section of our Getting started guide.

:::

### Setup the new VPN profile

Follow the [Setup the VPN profile](/getting-started/configure-vpn/#_2-2-setup-the-vpn-profile) section of our "Getting started" guide. 

### Connect to the VPN

Follow the [Connect to the VPN](/getting-started/configure-vpn/#_2-3-connect-to-the-vpn) section of our "Getting started guide". 

### Verify your VPN connection

Follow the [Verify your VPN connection](/getting-started/configure-vpn/#_2-4-verify-your-vpn-connection) section to verify a successful VPN connection as your will not be able to log into your lab until the VPN is working.

### Troubleshooting

[Contact us](/contact) in your Slack lab table if you experience trouble with installation and suggestions on how to improve this guide..



