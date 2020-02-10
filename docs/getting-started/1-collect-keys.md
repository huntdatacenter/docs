---
permalink: /getting-started/collect-your-keys
sidebarDepth: 1
---

# Step 1. Collect your keys

::: warning Requirements for this level

- Signed user agreement ([blank template](https://www.ntnu.edu/documents/1282184702/1283475046/hcc-user-agreement-web.pdf/7dbfd0ac-9f02-4165-8862-a480becb88ad?version=1.1)) forwarded to us [on mail](/contact).
- Your private phone to receive system keys of Signal.
- Your organizational email to receive system certificates.

**Without these, it will be impossible to complete this step.**

:::

## Overview

This step will help you to collect your system keys over the mobile app Signal, and to collect your system configurations and certificates over your organizational email. When the step is completed you should be ready to start the connection.


## 1.1 Get lab keys

### Setup Signal

Signal is a private messenger app that provide a secret communication channel. We use this to communicate your system keys.


### How to install

Search for `Signal` in the iOS or Android app stores, or use the links below.

- [Download and install for **iOS** here](https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8)
- [Download and install for **Android** here](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en)

::: tip Notification

[Contact us](/contact) on email as soon as you have installed Signal. This allows us to quickly forward your lab keys when they are ready.

:::


### Key transfer


We will forward your lab keys over Signal from number 91001893 when your lab account is set up on our side. The number is registered on '[Norges teknisk-naturvitenskapelige universitet NTNU](https://www.1881.no/?query=91001893)'. We will notify you on your organizational email if this number change.



## 1.3 Download file

We will send you a link to an encrypted archive (7z-file) with your VPN certificate and your SSH config on your organizational email.

- Click on the link in the email to download the file and save this on your local machine.
- Unpack (extract) the file with your favourite file archiver software that recognize the 7z format ([windows](https://www.google.no/search?q=unpack+7z+windows), [mac](https://www.google.no/search?q=unpack+7z+mac), [linux](https://www.google.no/search?q=unpack+7z+linux)) using the key named `ZIP file key` from your Signal transfer.

# 1.4 Setup Google Authenticator

Google Authenticator is a multifactor app for mobile devices that generates verification codes every 30 seconds.

We call this the **`verification code`** which will be used for logging in to your OpenVPN account.

## How to install

Search for `Google Authenticator` in the iOS or Android app stores, or use the links below.

- [Download and install for **iOS** here](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8)
- [Download and install for **Android** here](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)

## Setup the app and add a new account

1. Start the Google Authenticator app
2. Tap _Begin setup_ (first time setup) or _Add an account_ (additional accounts)
3. Select _Enter a provided key_
4. Enter `HUNT CLOUD VPN` as the _account name_
5. Enter the `Google Authenticator key` sent to you from HUNT over Signal
6. Make sure _Time based_ is selected.
7. Tap _Add_ to finish the setup of the new account

You should now be prompted with a 6 digit **`verification code`** that refreshes ever 30 seconds.

## Verify that this step is completed

By completion of this step you should have two files stored on your local computer:

- `<your-username>.ovpn` - your personal OpenVPN certificate
- `ssh-config.txt` - your SSH configuration which you should use to connect to your lab

In addition, you should have 4 secrets:

- `ZIP file key` - your key for unlocking the archive we sent you
- `Google Authenticator key` - your key for generating Google Authenticator verification codes
- `VPN passphrase` - your passphrase for unlocking your OpenVPN certificate
- `SSH temporary key` - your temporary passphrase when logging on with SSH for the first time

It will be impossible to continue without these.

You are able to continue the onboarding as soon as you receive the system keys. Please allow for this step to take up to 3 days before completion.

