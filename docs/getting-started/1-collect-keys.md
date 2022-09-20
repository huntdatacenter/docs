---
title: Collect your keys
category: Getting started
permalink: /getting-started/collect-your-keys
sidebarDepth: 1
description: Guide on how to request and receive your keys. Note requirements before proceeding with the guide.
---

# Step 1. Collect your keys

This step ensures that you have the correct keys and config files before you invest time in the remaining setup.

::: warning Requirements

- Signed [user agreement](https://assets.hdc.ntnu.no/assets/agreements/hunt-cloud-user-agreement.pdf) forwarded to us on [email](/contact) for account activation.
- Private phone to receive your lab keys.
- Organizational email to receive your lab configuration files.

**Without these, it will be impossible to complete step 1.**

:::

We will register your account for activation as soon as we receive your signed user agreement.


## 1.1 Secrets to your phone

We will communicate your system keys over the Signal mobile app.

### Activate your Signal account

Signal is a private messenger app for your phone that provide a secret communication channel. Search for **`Signal`** in the iOS or Android app stores, or use the links below to install.

- 1.1.1. Install signal application:
  - [Download and install for **iOS** here](https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8)
  - [Download and install for **Android** here](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en)
- 1.1.2. Open Signal application
- 1.1.3. **Activate your Signal account** using the phone number attached in your user agreement.
- 1.1.4. Check if you have any received messages.

Only after your Signal account is active you can move forward notifying us. You can do so by replying to your service desk request for onboarding.

::: tip
[Contact us](/contact) on email as soon as you have activated Signal. This allows us to quickly forward your lab keys when they are ready.

Example email:

> Hi all, I have installed and activated Signal and are looking forward to receive my keys.

:::


### Key transfer

When your account is set up on our side, we will forward your lab keys over Signal from phone number 91001893. This number is registered on '[Norges teknisk-naturvitenskapelige universitet NTNU](https://www.1881.no/?query=91001893)'. We will notify you on your organizational email if this number change.

::: tip Time estimate

Allow for a week to pass from you send us your agreement and until we forward your keys ([read more](/faq/users/#how-long-does-a-new-account-activation-take)).

:::

::: warning Expect these keys on your phone

A successful transfer to your phone should include four (4) keys:

- **`ZIP file key`** - your key for unlocking the [7-zip archive](https://docs.hdc.ntnu.no/working-in-your-lab/transfer-tools/7z/) file sent on email.
- **`Google Authenticator key`** - your key for generating Google Authenticator verification codes.
- **`VPN passphrase`** - your passphrase for unlocking your OpenVPN certificate.
- **`SSH temporary key`** - your temporary passphrase when logging in to your lab with SSH for the first time.

:::



## 1.2 Secrets on your email

We will communicate your VPN certificate and SSH configuration over your organizational email. You will receive a link to an encrypted file archive (7z-file).

- Click on the link in the email to download the file and save this on your local machine.
- Unpack (extract) the file with your favorite file archiver software that recognize the [7z format](https://docs.hdc.ntnu.no/working-in-your-lab/transfer-tools/7z/) (see below).
- Use the key named **`ZIP file key`** from your Signal transfer to decrypt the 7-zip archive.

::: tip Decryption guides

Click on these links for installation guidance if your current software don't recognize the 7z-format: [Windows](https://docs.hdc.ntnu.no/working-in-your-lab/transfer-tools/7z/#windows), [mac](https://docs.hdc.ntnu.no/working-in-your-lab/transfer-tools/7z/#mac-os-x), [linux](https://www.google.no/search?q=unpack+7z+linux).

OS X and macOS: The default archive utility will not recognize the passphrase of 7z files. You will need to install 7z-compatible software from the link above.

:::

::: warning Expect these files on your local machine

A successful extraction on your local machine should include two (2) files:


- **`<your-username>.ovpn`** - your personal VPN certificate to be used in step 2.
- **`ssh-config.txt`** - your SSH configuration to be used in step 3.

:::


## 1.3 One-time verification codes

You will use one-time verification codes to access your VPN. We use Google Authenticator for this purpose. Google Authenticator is a multifactor app for phones that generates one-time verification codes every 30 seconds.

We call this the **`verification code`** which will be used for logging in to your OpenVPN account.

### Install Google Authenticator

Search for `Google Authenticator` in the iOS or Android app stores, or use the links below.

- [Download and install for **iOS** here](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8)
- [Download and install for **Android** here](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)

### Setup the app and add a new account

1. Start the Google Authenticator app.
2. Tap _Begin setup_ (first time setup) or _Add an account_ (additional accounts).
3. Select _Enter a provided key_.
4. Enter **`HUNT CLOUD VPN`** as the _account name_.
5. Enter the **`Google Authenticator key`** sent to you over Signal.
6. Make sure _Time based_ is selected.
7. Tap _Add_ to finish the setup of the new account.

::: warning Expect this one-time verification

A 6 digit **`verification code`** that refreshes ever 30 seconds in the Google Authenticator app on your phone.

:::



## 1.4 Verify your key collection

A successful completion of this step should give you:

- Four (4) keys on your phone stored in Signal
- Two (2) files stored on your local machine
- Rotating verification codes on your phone

Without these, it will be impossible to complete the remaining steps.

::: tip Time for coffee!

If you successfully completed this step, celebrate with fresh coffee and head over to the [VPN configuration](/getting-started/configure-vpn). If you did not succeed, start with a quick look in our Immediate troubleshooting section below.

:::


## Immediate troubleshooting


### Signal

#### I am unable to install or run Signal on my phone.

Steps to resolve issues with Signal may vary by phone model and OS. Signal has a handy [troubleshooting guide ](https://support.signal.org/hc/en-us/articles/360007318711-Troubleshooting-Notifications) as a starting point. [Contact us](/contact) if this do not resolve your issue.

### 7z file

#### OS X and macOS: The ZIP password do not seem to work?

The default archive utility may give you an error message when unpacking the [7z-format](https://docs.hdc.ntnu.no/working-in-your-lab/transfer-tools/7z/) locked with a passphrase. Try to download and unpack with the 7z application in the [decryption guides](/getting-started/collect-your-keys/#_1-2-secrets-on-your-email). [Contact us](/contact) if this does not work.

#### Windows: I am unable to unpack the 7z-file forwarded on email.

If the [decryption guides](/getting-started/collect-your-keys/#_1-2-secrets-on-your-email) above did solve the issue at hand, this is the time to reach out to your local IT support for help.

### More information

See our main [troubleshooting](/troubleshooting/connection/) section for more information. Please [contact us](/contact) if you encounter issues that we have not yet documented.
