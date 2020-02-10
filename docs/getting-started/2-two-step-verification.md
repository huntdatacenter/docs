---
permalink: /getting-started/collect-your-keys
sidebarDepth: 2
---

# 2. Setup Google Authenticator

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
