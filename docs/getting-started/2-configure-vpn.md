---
permalink: /getting-started/configure-vpn
sidebarDepth: 3
---

# 2. Configure your VPN

OpenVPN is an open-source application that allows you to connect to the HUNT virtual private network (VPN).

## Windows

### Install the client

- [Download and install OpenVPN using the latest Windows Installer here](https://openvpn.net/community-downloads/)

::: warning
Installing OpenVPN may require administrative rights on your computer.
If you don't have administrative rights on your computer, or don't know if you have administrative right on your computer, please see [Installing OpenVPN on Windows without administrative rights](#installing-openvpn-on-windows-without-administrative-rights).
:::

### Setup the OpenVPN profile

1. Start the OpenVPN client (if it is not running already)
2. Right-click on the OpenVPN notification icon on the taskbar
3. Select `Import file...`
4. Select the OpenVPN profile named `<username>.ovpn` in the collection of credentials given from HUNT.

### Connecting to the VPN

1. Right-click on the OpenVPN notification icon on the taskbar
2. Select _Connect_
3. Enter your user name (same as the OpenVPN profile file name)
4. Enter the **`verification code`** from Google Authenticator as your password

- Make sure that the _Save password_ checkbox is **`unchecked`**.

5. If prompted for a _Private Key Password_ or _Passphrase_, use the `VPN passphrase` from `vpn-key-passphrase.txt` sent to you from HUNT over Signal

- This passphrase can be saved.

You should now be connected to the VPN.

::: tip Troubleshooting
If it does not connect, but displays another `User Authentication` prompt, please try again with a new **`verification code`**

Please see [OpenVPN on Windows](openvpn-on-windows) for troubleshooting.
:::

## OS X and macOS

### Install the client

The recommended OpenVPN client for OS X and macOS is called Tunnelblick.

- [Download and install the latest **stable release** from here](https://tunnelblick.net/downloads.html)

### Setup the OpenVPN profile

1. If prompted with the `Welcome to Tunnelblick` prompt, otherwise jump to 2.
   1. Select `I have configuration files`
   2. In the `Welcome to Tunnelblick` prompt, select `I have configuration files`
   3. When prompted for which type of configuration you have, select `OpenVPN Configurations`
   4. Select the OpenVPN profile named `<username>.ovpn` in the collection of credentials given from HUNT.
   5. Continue to section [Connecting to the VPN](connecting-to-the-vpn) section below
2. Find the OpenVPN profile named `<username>.ovpn` in the collection of credentials given from HUNT.
   1. Right-click the file OpenVPN profile named `<username>.ovpn`
   2. Select `Open With -> Tunnelblick`
   3. When prompted for `Install Configuration For All Users`, select `Only Me`
   4. Enter your macOS password to allow Tunnelblick to install the OpenVPN configuration
   5. Continue to section [Connecting to the VPN](connecting-to-the-vpn) section below

### Connecting to the VPN

1. Start Tunnelblick and `Connect`
2. Enter your user name (same as the OpenVPN profile file name)
3. Enter the **`verification code`** from Google Authenticator as your password
   1. Make sure that the _Save in Keychain_ checkbox is **`unchecked`**
4. If prompted for a _Private Key Password_ or _Passphrase_, use the `VPN passphrase` sent to you from HUNT over Signal

This password can be saved

You should now be connected to the VPN.

::: tip Troubleshooting
If VPN does not connect, but displays another `Login Required` prompt,
please try again with a new **`verification code`**
:::

## Ubuntu Linux

### Install the client

Install the `openvpn` and `network-manager-openvpn-gnome` packages from the standard repositories.

```bash
sudo apt install openvpn network-manager-openvpn-gnome
```

### Setup the OpenVPN profile

1. Click on the _Network Manager_ icon in the task bar
2. Select _Edit Connections..._
3. Click _Add_
4. Choose _Import a saved VPN configuration_ and click _Create_
5. Select the OpenVPN profile named `<username>.ovpn` in the collection of credentials given from HUNT.
6. Enter your user name (same as the OpenVPN profile file name)
7. Click on the person icon in the _Password_ field and select `Ask for this password every time`
8. Enter the _Private Key Password_ with the `VPN passphrase` sent to you from HUNT over Signal
9. Click on the _IPv4 Settings_ tab
10. Click _Routes..._
11. Select the _Use this connection only for resources on its network_ and click _OK_
12. Click _Apply_

The OpenVPN profile should now be setup.

### Connecting to the VPN

1. Click on the _Network Manager_ icon in the task bar
2. Select _VPN Connections >_ and the name of your profile
3. In the _Authenticate VPN_ window, enter the **`verification code`** from Google Authenticator in the _Password_ field
4. Click _OK_ to connect

If you receive the notification _VPN connection has been successfully established_, then you are good to go.

### Troubleshooting

- If the _Authenticate VPN_ prompt pops up again, then please try again with a new **`verification code`**
- If you receive the notification _VPN Connection Failed_ after 60 seconds, please check the following
- Verify that you have an active internet connection
- Verify that the _Private Key Password_ is correct
- If you cannot access the rest of the internet while connected to the VPN, then please check the following:
- Verify steps 9-11 in [Setup the OpenVPN profile](setup-the-openvpn-profile).
- If you are unable to hit _Apply_ after the changes, try to re-enter your _Private Key Password_ with your `VPN passphrase`.
- If nothing else works, please go the [troubleshooting steps](#4-troubleshooting) and contact us.

## Other Linux distributions

There are a few options on how to install OpenVPN clients in other distributions.

- Install the `openvpn` package from the official distribution repository
- Add the [OpenVPN community repository](https://community.openvpn.net/openvpn/wiki/OpenvpnSoftwareRepos) and install `openvpn` package.
- Download the latest source tarball from OpenVPN [here](https://openvpn.net/index.php/open-source/downloads.html) and install.

<!-- Add section for install and setup -->
