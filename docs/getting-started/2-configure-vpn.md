---
permalink: /getting-started/configure-vpn
sidebarDepth: 1
---

# Step 2. Configure your VPN

This step configure an encrypted connection between your local machine and your lab. The specific steps are dependent on the operating system on your local machine.

::: warning Requirement

Successful [verification](/getting-started/collect-your-keys/#_1-4-verify-your-key-collection) of Step 1.

:::




## 2.1 Install the VPN software



::: details Windows

We use the open-source application [OpenVPN](https://openvpn.net/) to ensure encrypted communication between your local machine and us. 

[Download and install OpenVPN using the latest Windows Installer](https://openvpn.net/community-downloads/)

Click on the link above, scroll down to the file named **`openvpn-install-<version-number>-i602-win10.exe`** (Windows 10 users), download the file and follow the on-screen installation instructions. 

  ::: warning
  **You will need administrative rights on your local machine to successfully install OpenVPN.** 

Click on the link below if you do not hold administrative rights on your local machine, or don't know if you have such rights. 

  ::: details Installing OpenVPN without administrative rights

You can check if you have administrative rights on your local machine by running **`net localgroup "Administrators"`** in a [command prompt](https://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/) and see if your username is listed.

**Request assistance from your local IT personnel if you do not hold administrative rights on your local machine and request that they:**

(1) assist you in the OpenVPN installation, or

(2) grant you administrative rights on your local machine so you can install OpenVPN yourself.

For simplicity, we have outlined the steps they need to perform below which you can attach to your request.

```
1. Install the OpenVPN client on the computer for my user:
    Download and install using the Windows installer from https://openvpn.net/index.php/open-source/downloads.html
     
2. Create an OpenVPN Administrators group on my computer:
    net localgroup /add "OpenVPN Administrators"

3. Add my user to OpenVPN Administrators group on my computer:
    net localgroup "OpenVPN Administrators" /add <DOMAIN>\<USERNAME>
```

:::





::: details OS X and macOS

We use Tunnelblick to ensure encrypted communication between your local machine and us.

[Download and install the latest **'stable release'** from this page](https://tunnelblick.net/downloads.html)

:::



::: details Ubuntu Linux

We use OpenVPN to ensure encrypted communication between your local machine and us.

Install the **`openvpn`** and **`network-manager-openvpn-gnome`** packages from the standard repositories.

```bash
sudo apt install openvpn network-manager-openvpn-gnome
```
:::


::: details Other Linux distributions

You have a few options on how to install OpenVPN clients in other distributions:

- Install the **`openvpn`** package from the official distribution repository.
- Add the [OpenVPN community repository](https://community.openvpn.net/openvpn/wiki/OpenvpnSoftwareRepos) and install the **`openvpn`** package.
- Download the latest [source tarball](https://openvpn.net/index.php/open-source/downloads.html) from OpenVPN and install.

After the installation, follow the "Ubuntu Linux" guides below on how to setup and connect.

:::



## 2.2 Setup the VPN profile

::: details Windows

1. Start the OpenVPN client (if it is not running already)
2. Right-click on the OpenVPN [notification icon](https://pchelp.ricmedia.com/wp-content/uploads/connect-vpn-using-openvpn-on-windows/openvpn-gui-taskbar-icon.png) on the taskbar
3. Select **`Import file...`**
4. Select the OpenVPN profile file named **`<username>.ovpn`** that you collected in Step 1.

:::



::: details OS X and macOS

**2.2.1 If you 'do' get prompted with the `Welcome to Tunnelblick` message, follow these steps:**
  1. Select **`I have configuration files`**.
  2. In the **`Welcome to Tunnelblick`** prompt, select **`I have configuration files`**.
  3. When prompted for which type of configuration you have, select **`OpenVPN Configurations`**.
  4. Select the OpenVPN profile named. **`<username>.ovpn`** in the collection of credentials given from HUNT.
  5. Continue with the **`Connecting to the VPN section`** below.

**2.2.2 If you 'do not' get prompted with the `Welcome to Tunnelblick` message, follow these steps:** 
   1. Find the OpenVPN profile named **`<username>.ovpn`** that you collected in Step 1.
   2. Right-click the file OpenVPN profile named **`<username>.ovpn`**.
   3. Select **`Open With -> Tunnelblick`**.
   4. When prompted for **`Install Configuration For All Users`**, select **`Only Me`**.
   5. Enter your macOS password to allow Tunnelblick to install the OpenVPN configuration.
   6. Continue with the **`Connecting to the VPN section`** below.

:::


::: details Ubuntu Linux

1. Click on the _Network Manager_ icon in the task bar.
2. Select _Edit Connections..._.
3. Click _Add_.
4. Choose _Import a saved VPN configuration_ and click _Create_.
5. Select the OpenVPN profile named **`<username>.ovpn`** that you collected in Step 1.
6. Enter your user name (same as the OpenVPN profile file name).
7. Click on the person icon in the _Password_ field and select **`Ask for this password every time`**.
8. Enter the _Private Key Password_ with the **`VPN passphrase`** sent to you from HUNT over Signal.
9. Click on the _IPv4 Settings_ tab.
10. Click _Routes..._.
11. Select the _Use this connection only for resources on its network_ and click _OK_.
12. Click _Apply_.

:::


## 2.3 Connect to the VPN

::: details Windows

1. Right-click on the OpenVPN notification icon on the taskbar.
2. Select _Connect_.
3. Enter your user name (same as the OpenVPN profile file name).
4. Enter a rotating **`verification code`** from Google Authenticator as your password.

    ::: warning
    Make sure that the _Save password_ checkbox is **`unchecked`**.

5. When prompted for a _Private Key Password_ or _Passphrase_, insert the **`VPN passphrase`** that your collected in Step 1.

    ::: tip
    Save this passphrase.

Your authentication will fail when you complete your passphrase above. This is expected since your verification code timed out while you typed your passphrase. 

6. Now try again to connect with a fresh **`verfication code`** from Google Authenticator.

You should now be connected to the VPN.

:::





::: details OS X and macOS

1. Start Tunnelblick and **`Connect`**
2. Enter your user name (same as the OpenVPN profile file name)
3. Enter the **`verification code`** from Google Authenticator as your password

    ::: warning
    Make sure that the _Save password_ checkbox is **`unchecked`**.

4. When prompted for a _Private Key Password_ or _Passphrase_, insert the **`VPN passphrase`** that you collected in Step 1.

    ::: tip
    Save this passphrase.

Your authentication will fail when you complete your passphrase above. This is expected since your verification code timed out while you typed your passphrase. 

6. Now try again to connect with a fresh **`verfication code`** from Google Authenticator.

You should now be connected to the VPN.

:::



::: details Ubuntu Linux


1. Click on the _Network Manager_ icon in the task bar.
2. Select _VPN Connections >_ and the name of your profile.
3. In the _Authenticate VPN_ window, enter the **`verification code`** from Google Authenticator in the _Password_ field.
4. Click _OK_ to connect.

:::


## 2.4 Verify your VPN connection

::: warning

Please invest some time to verify a successful VPN connection as you will not be able to complete Step 3 before your VPN is working.

:::


::: details Windows

The OpenVPN notification icon on the taskbar should be green.

:::


::: details OS X and macOS

A small Tunnelblick window should state "Connected" in green letters with a timer that count the connection length.

:::


::: details Ubuntu Linux

If you received the notification _VPN connection has been successfully established_, then you are good to go.

:::



::: tip Next step

If you successfully completed this step, head over to Step 3 to [Configure your SSH](/getting-started/3-configure-ssh) connection. If you did not succeed, start with a quick look in our Immediate troubleshooting section below.

:::




::: details Immediate troubleshooting

Below are a few immediate things to try if your connection did not succeed:

### Authenticate VPN

If the _Authenticate VPN_ prompt pops up again, then try to log in again with a new **`verification code`**.

### VPN connection failed

If you received the notification _VPN Connection Failed_ after 60 seconds, please check the following

- Verify that you have an active internet connection.
- Verify that the _Private Key Password_ is correct.

### Unable to apply changes

If you are unable to click _Apply_ after your changes, try to re-enter your _Private Key Password_ using your **`VPN passphrase`** that you collected in Step 1.

::: tip
If nothing works, please head over to our main [troubleshooting](/troubleshooting/connection/#vpn) section for more information on how to troubleshoot connections.
:::


