---
permalink: /getting-started/collect-your-keys
sidebarDepth: 1
---

# Step 1. Collect your keys

This step ensures that you have the correct keys and configuration files before you invest time in the remaining setup.

::: warning Requirements

- Signed user agreement ([blank template](/assets/hunt-cloud-user-agreement.pdf)) forwarded to us over [email](/contact) for account activation.
- Private phone to receive your lab keys.
- Organizational email to receive your lab configuration files.

**Without these, it will be impossible to complete step 1.**

:::

We register your account for activation when we recieve your signed [user agreement](/assets/hunt-cloud-user-agrement.pdf).

::: tip Time estimate

Allow for a few weeks to pass from you send us your agreement and until we forward your keys ([read more](/faq/users/#how-long-does-a-new-account-activation-take)).

:::



## 1.1 Secrets to your phone

We will communicate your system keys over the Signal mobile app. 

### Install Signal

Signal is a private messenger app for your phone that provide a secret communication channel. Search for **`Signal`** in the iOS or Android app stores, or use the links below to install.

- [Download and install for **iOS** here](https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8)
- [Download and install for **Android** here](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en)

### Notify us

[Contact us](/contact) on email as soon as you have installed Signal. This allows us to quickly forward your lab keys when they are ready. Example email: 

> Hi all, I have installed Signal and are looking forward to recieve my keys.

### Key transfer

When your account is set up on our side, we will forward your lab keys over Signal from phone number 91001893 . This number is registered on '[Norges teknisk-naturvitenskapelige universitet NTNU](https://www.1881.no/?query=91001893)'. We will notify you on your organizational email if this number change.

::: warning Expect these keys on your phone

A successful transfer to your phone should include four (4) keys: 

- **`ZIP file key`** - your key for unlocking the archive file sent on email.
- **`Google Authenticator key`** - your key for generating Google Authenticator verification codes.
- **`VPN passphrase`** - your passphrase for unlocking your OpenVPN certificate.
- **`SSH temporary key`** - your temporary passphrase when logging in to your lab with SSH for the first time.

**Without these, it will be impossible to complete step 1.**

:::



## 1.2 Secrets on your email

We will communicate your VPN certificate and SSH configuration over your organizational email. You will recieve a link to an encrypted file archive (7z-file).

- Click on the link in the email to download the file and save this on your local machine.
- Unpack (extract) the file with your favourite file archiver software that recognize the 7z format (see below).
- Use the key named **`ZIP file key`** from your Signal transfer to decrypt the archive.

::: tip Decryption guides

Click on these links for installation guidance if your current software don't recognize the 7z-format: [windows](https://www.google.no/search?q=unpack+7z+windows), [mac](https://www.google.no/search?q=unpack+7z+mac), [linux](https://www.google.no/search?q=unpack+7z+linux).

::: 

::: warning Expect these files on your local machine

A successful extraction on your local machine should include two (2) files: 


- **`<your-username>.ovpn`** - your personal VPN certificate to be used in step 2.
- **`ssh-config.txt`** - your SSH configuration to be used in step 3.

**Without these, it will be impossible to complete step 2 and 3.**
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

You should now be prompted with a 6 digit **`verification code`** that refreshes ever 30 seconds.

:::



## 1.4 Verify your key collection

A successful completion of this step should have given you: 

- Four (4) keys on your phone stored in Signal
- Rotating verification in Google Authenticator on your phone
- Two (2) files stored on your local machine


::: tip Time for coffee!

If you successfully completed this step, celebrate with fresh coffee before you head into the [VPN configuration](/getting-started/2-configure-vpn). If you did not succeed, it's also a good time to grab some coffee before your head over to our main [troubleshooting](/troubleshooting/connection/) section.

:::


