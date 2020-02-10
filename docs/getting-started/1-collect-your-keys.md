---
permalink: /getting-started/collect-your-keys
sidebarDepth: 3
---

# 1. Collect your keys

- We will send you the keys over your personal mobile phone.
- We will send you a link to your VPN certificate and SSH configuration on your organizational email.

### Setup Signal

Signal is a private messenger app that provide a secret channel to communicate system keys.

#### How to install

Search for `Signal` in the iOS or Android app stores, or use the links below.

- [Download and install for **iOS** here](https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8)
- [Download and install for **Android** here](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en)

#### Transfer keys

- Send us a notification on cloud@hunt.ntnu.no when you have installed Signal.
- We will by default send you the keys from number 91001893. This number is registered on '[Norges teknisk-naturvitenskapelige universitet NTNU](https://www.1881.no/?query=91001893)'. We will notify you on your organizational email if this number change.

You are able to continue the onboarding as soon as you receive the system keys. Please allow for this step to take up to 3 days before completion.

### Download VPN certificate and SSH configuration

We will send you a link to an encrypted archive (ZIP-file) with your VPN certificate and your SSH config on your organizational email.

- Click on the link in the email to download the file and save this on your local machine.
- Unpack (extract) the file with your favourite file archiver software that recognize the 7z format ([windows](https://www.google.no/search?q=unpack+7z+windows), [mac](https://www.google.no/search?q=unpack+7z+mac), [linux](https://www.google.no/search?q=unpack+7z+linux)) using the key named `ZIP file key` from your Signal transfer.

### Verify that this step is completed

By completion of this step you should have two files stored on your local computer:

- `<your-username>.ovpn` - your personal OpenVPN certificate
- `ssh-config.txt` - your SSH configuration which you should use to connect to your lab

In addition, you should have 4 secrets:

- `ZIP file key` - your key for unlocking the archive we sent you
- `Google Authenticator key` - your key for generating Google Authenticator verification codes
- `VPN passphrase` - your passphrase for unlocking your OpenVPN certificate
- `SSH temporary key` - your temporary passphrase when logging on with SSH for the first time

It will be impossible to continue without these.


