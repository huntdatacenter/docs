---
title: X2Go
category: Technical tools
permalink: /working-in-your-lab/technical-tools/x2go
sidebarDepth: 1
description: Usage guide for X2go.
---

# X2Go

This guide explain how you can install and configure the [X2Go](https://wiki.x2go.org/doku.php) software to get instant and 'passwordless' access to graphical tools in your lab, such as **RStudio**, **Stata**, **SPSS** and **MatLab**.

If you are connecting to the home machine in your lab, you are good to go after you have set up your local machine:

- [Set up your local machine](#set-up-your-local-machine)

If you want to connet to an unmanaged machine (iaas or blue) you will need to install the X2Go server before you connect:

- [Set up your unmanaged lab machine (iaas)](#install-x2go-server-on-unmanaged-lab-machine-iaas)

## Set up your local machine

::: tip REQUIREMENTS

- A working connection to your lab machines.
- A lab machine set up for X2Go connection (home machines are by default set up with X2Go and Rstudio).
  :::

### Install X2Go client

Install the [x2go client](https://wiki.x2go.org/doku.php/doc:installation:x2goclient) on your own local machine.

::: details OS X/macOS

- Use [brew](https://brew.sh/) (a handy package manager for macOS) to install both XQuartz (required for X2Go) and the X2Go client:

  ```bash
  brew install --cask xquartz
  brew install --cask x2goclient
  ```

  ::: warning XQuartz
  If this is your first time installing XQuartz, you **must** logout and log back in or restart your Mac for it to work.

- Please read the [X2Go installation docs](https://wiki.x2go.org/doku.php/doc:installation:x2goclient#os_x) for handy tweaks of the X2Go client.

  ::: warning OS X 10.15 Catalina
  In case of issues with x2goclient you can try [nightly build](https://code.x2go.org/releases/X2GoClient_nightly_macosx/x2goclient-4.1.2.2.git20191230.1893.heuler.OSX_10_13.dmg) version.

:::

::: details Windows
Download and run the [X2Go client](https://wiki.x2go.org/doku.php/doc:installation:x2goclient#ms_windows) clicking **`Download X2Go for MS Windows™ and install.`** and then selecting the **`exe-file`**.
:::

::: details Linux (Ubuntu / Debian)
Install x2goclient using apt:

```bash
sudo apt-get update -y && sudo apt install -y x2goclient
```

:::

### Configure the X2Go client for home machines

Once installed, open X2Go and click **`New session`** and enter a _Session name_ that you will use to identify this connection later, e.g. _demolab - rstudio_

::: warning NOTE
The configuration below will work on [home](/faq/compute/#machine-types) machines. This configuration will -not- work on unmanaged [iaas and blue](/faq/compute/#machine-types) machines.
:::

::: details Create session

  ![X2GO introduction](./images/x2go_intro.png "X2GO introduction")

:::

#### In the `Session` tab

::: details Server section

- _Host_: **`10.5.5.12`**
- _Login/username_: **`<your-lab-username>`**
- _SSH port_: **`22`**
- _Use RSA/DSA key for ssh connection_:

  - For Mac and Linux:

    Leave blank if your login is "passwordless" (key-based). If not, confer the '[establish a password less login](/getting-started/how-to-connect/#simplify-your-life)' section in the installation guide.

  - For Windows:

    You will need to save the access key to your local machine and point to this file: (1) log into your lab **`home`** machine, (2) print your key with **`cat ~/.ssh/id_rsa`**, (3) open _Notepad_ on your local machine and copy the text from **`-----BEGIN KEY-----`** to **`-----END KEY-----`** (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window _Use RSA/DSA key for ssh connection_.

    ::: warning NOTE
    This file is a key to your lab. Store the key somewhere in the **`C:`** drive on your local machine.

- _Try auto login_: **`Check`**
- _Use Proxy server for SSH connection_: **`Check`**
  :::

::: details Proxy server section

- _Proxy server type:_ **`SSH`**
- _Host:_ **`<lab-ip>`**
  - For all: This is your lab specific IP that starts with **`10.42.130.`**. You will find the full address in the software that you use to connect to your lab.
- _Port:_ **`22`**
- _Same login as on X2Go Sever:_ **`Leave blank`**
- _Login:_ **`<your-lab-username>`**
  - For all: This is the user name that you use to connect to your lab.
- _Same password as on X2Go Server:_ **`Leave blank`**
- _RSA/DSA key:_
  - For Mac and Linux: **`Leave blank`**
  - For Windows: **`Link to the same file that you established above`**
- _ssh-agent or default ssh key:_ **`Check`**
  :::

::: details Session type section

- Choose **`Single application`** from the drop down menu
- Add **`/usr/bin/xterm`** in the command window
  :::

#### In the `Connection` tab

Play with the _Connection speed_ and _Compression_ methods. For office use **`LAN`** and **`16m-png`** should be fine.

#### In the `Media` tab

![X2GO media](./images/x2go_media.png "X2GO media")

- Uncheck **`Client side printing support`**
- Uncheck **`Enable sound support`**

Hit **`OK`** in the lower right corner.

#### Connect to X2Go server

1. Ensure that your HUNT Cloud VPN is running and connected.

2. Click on your newly saved session in X2Go to connect to your lab machine.
   If this works you should see a terminal pop up on your screen.

3. Type **`xclock`** in the terminal to test the setup. With a little bit of luck,
   you should now see a new window popping up with a digital clock.

#### Connect to other software

You may use X2Go to access software with graphical interfaces.
Such software needs to be installed in your lab machine.

For your home machine, [RStudio](/working-in-your-lab/analytical-tools/r-studio/#install-r-studio) should be installed by default. To access this program, go back to your configuration and update **`Session type`** at the bottom of the **`Session tab`** from **`/usr/bin/xterm/`** to the location of Rstudio (**`/usr/bin/rstudio`**) and reconnect. With a little bit of luck, you should now see Rstudio on the your screen. If so, time to celebrate with coffee! If not, time to visit the [troubleshooting section](/working-in-your-lab/technical-tools/x2go/#troubleshooting).

### Configure the X2Go client for unmanaged machines

Once installed, open X2Go and click **`New session`** and enter a _Session name_ that you will use to identify this connection later, e.g. _demolab - rstudio_

::: warning NOTE
The configuration below will only work on **`iaas`** or **`blue`** machines, and not home machines. This setup require that someone in your lab already have installed X2Go server and your software of choice on the particular machine you will be connecting to.
:::

::: details Create session

  ![X2GO introduction](./images/x2go_intro.png "X2GO introduction")

:::

#### In the `Session` tab

::: details Server section

- _Host_: **`10.5.5.<something>`**
  - You need to type in the IP address for the machine that is set up for X2Go. You will fine the IP by logging into the iaas machine on ssh and type **`ifconfig | grep 10.5.5.`**
- _Login/username_: **`<iaas-machine-username>`**
  - The default user name of iaas and blue machines is **`ubuntu`**. It may be good to confer with your lab coordinator to learn their specific setup for the machine you plan to access.
- _SSH port_: **`22`**
- _Use RSA/DSA key for ssh connection_:

  - For Mac and Linux:

    Leave blank if your login is "passwordless" (key-based). If not, confer the '[establish a password less login](/getting-started/how-to-connect/#simplify-your-life)' section in the installation guide.

  - For Windows:

    You will need to save the access keys to your local machine and point to this file: (1) log into your lab **`home`** machine, (2) print your key with **`cat ~/.ssh/id_rsa`**, (3) open _Notepad_ on your local machine and copy the text from **`-----BEGIN KEY-----`** to **`-----END KEY-----`** (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window _Use RSA/DSA key for ssh connection_.

  - On IAAS nodes:

    In addition to the steps above, ensure that you are able to log directly into the machine from your local machine following [this guide](#install-x2go-server-on-unmanaged-lab-machine-iaas).

- _Try auto login_: **`Check`**
- _Use Proxy server for SSH connection_: **`Check`**
  :::

::: details Proxy server section

- _Proxy server type:_ **`SSH`**
- _Host:_ **`<lab-ip>`**
  - This is your lab specific IP that starts with **`10.42.130.`**. You will find the full address in the software that you use to connect to your lab.
- _Port:_ **`22`**
- _Same login as on X2Go Sever:_ **`Leave blank`**
- _Login:_ **`<your-lab-username>`**
  - This is the user name that you use to connect to your lab.
- _Same password as on X2Go Server:_ **`Leave blank`**
- _RSA/DSA key:_
  - For Mac and Linux: **`Leave blank`**
  - For Windows: **`Link to the same file that you established above`**
- _ssh-agent or default ssh key:_ **`Check`**
  :::

::: details Session type section

- Choose **`Single application`** from the drop down menu
- Add **`/usr/bin/xterm`** in the command window
  :::

#### Remaining configuration

Follow the setups outlines in the **`Configure the X2Go client for home machines`** for further setup, including **`In the connection tab`**, **`In the media tab`**, **`connecting to the X2Go server`** and **`Connect to other software`**: [Start here](/working-in-your-lab/technical-tools/x2go/#configure-the-x2go-client-for-home-machines).

## Install a desktop environment

The default X2Go setup connects directly to individual applications. This section describe how you may install a lightweight [XFCE](https://www.xfce.org/) desktop environment using common settings.

::: details Minimal setup of XFCE desktop

```bash
sudo apt-get update -y && sudo apt-get autoremove -y
sudo apt-get install -y --no-install-recommends xubuntu-desktop
```

:::

## Tips for configuration

The default setup will need some care to run smoothly:

::: details TAB completion

- Fixing TAB completion using shell: (1) Log into your lab machine and (2) run this code:

  ```bash
  sed -i 's|name="\&lt\;Super\&gt\;Tab" type="string" value="switch_window_key"|name="\&lt\;Super\&gt\;Tab" type="empty"|g' ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml
  ```

- Fixing TAB completion using GUI approach over x2go client.

  ```md
  1. Open the Xfce **`Application Menu`** > **`Settings`** > **`Window Manager`**
  2. Click on the **`Keyboard Tab`**
  3. Clear the Switch window for same application setting
  ```

:::

::: details Copy-paste functionality

Connect to your lab machine and run this code:

- Client is connecting **from macOS**

  ```bash
  touch ~/.Xresources
  chmod u+x ~/.Xresources
  echo -e "*VT100.translations: #override Meta <KeyPress> V: insert-selection(PRIMARY, CUT_BUFFER0) \n" >> ~/.Xresources
  cp ~/.Xresources ~/.Xdefaults
  xrdb -merge ~/.Xresources
  ```

- Client is connecting from **Windows** or **Linux**

  ```bash
  touch ~/.Xresources
  chmod u+x ~/.Xresources
  echo -e "*VT100.Translations: #override Ctrl Shift <Key>V: insert-selection(CLIPBOARD) \n" >> ~/.Xresources
  echo -e "*VT100.Translations: #override Ctrl Shift <Key>C: copy-selection(CLIPBOARD) \n" >> ~/.Xresources
  cp ~/.Xresources ~/.Xdefaults
  xrdb -merge ~/.Xresources
  ```

:::

## Install X2Go server on unmanaged lab machine

Connection to X2Go require the application **`x2goserver`** to run for connections to work.
You may install this on iaas and blue machines as follows:

::: warning NOTE
This section is for lab coordinators that want to set up their unmanaged iaas and blue machines for GUI access.
:::

::: tip REQUIREMENTS

- Root access to your lab machine. The below configuration will not work on home machines.

:::

::: details Install x2goserver

Log into your unmanaged lab machine and install **`x2goserver`**:

```bash
sudo add-apt-repository ppa:x2go/stable
sudo apt update
sudo apt install x2goserver libnss3 libasound2 -y
```

:::

::: details Ensure smooth access

You need to make sure you and your lab colleagues can log in to the x2go machine passwordless using RSA certificates, e.g. by following these steps:

1. From your local machine, log into your lab's entry machine:

   ```bash
   ssh <labname>-entry
   ```

2. Form your entry machine, copy your machine key to your iaas-machine with the running X2Go server:

   ```bash
   ssh-copy-id <name-of-iaas-node>
   ```

   ::: warning NOTE
   [Contact us](/contact) if you are unable to make the above step work since a security setting may prohibit this depending on your lab setup.

3. Confirm the passwordless route to your iaas machine:

   ```bash
   ssh <iaas-node>
   ```

4. Get the IP for your IAAS machine

   Inside your IAAS node, list the IP address for the node with **`ifconfig`**. The IP address is listed after **`inet addr:`** and start with 10.5. Note this as you will use this for the X2Go setup on your local machine (steps above).

   ```bash
   hostname -I
   ```

:::

## Troubleshooting

::: details Password prompts during login

X2Go rely either password or certificate to authenticate your connection. If the certificate do not work (or not included), your may be asked to insert your password four times before your application start. If so, try to fetch and save your certificate as described in our [X2Go configuration](/working-in-your-lab/technical-tools/x2go/#configure-the-x2go-client-for-home-machines) under **`Use RSA/DSA key for ssh connection`**.

:::

::: details Keys do not release

Key-buffer not receiving a key release action after a keypress is a known bug of X2GO. There does not seem to be any clear solution to this. It is possible to disable key repeating, which will cause intended key repeating to stop working (e.g. holding arrows). We recommend to check connection settings and to make sure that the best network connection available is used.
If this is causing too many problems, alternatives to X2GO like [MobaXterm](/working-in-your-lab/technical-tools/mobaxterm/) can be considered.

:::

::: details Manually 'killing' a stuck X2Go session

From time to time your X2Go sessions may get stuck, such as when your software inside X2Go consumes all available memory. In such circumstances you may need to manually terminate the stuck X2Go processes using the command line in your lab machine.

1. From your local machine, connect to your lab machine over SSH, either using command line (Mac/Linux) or MobaXterm (Windows).

2. Once onboard your lab machine, list X2Go processes running under your user name.

   ```bash
   ps aux | grep x2go | grep $(whoami)
   ```

   A single line of your output will similar to the output below. This is from a process running the RStudio software. Your output may look different depending on the software your run:

   ```
   demouser 22463 0.0 0.0 11300 1796 ? Ss Jul11 0:00 /bin/bash /usr/bin/x2goruncommand 50 22408 demouser-50-1563761927_stRrstudio_dp32 39401 /usr/bin/rstudio nosnd R
   ```

3. Identify the process ID number that you want to terminate. The unique process ID is listes in the second column in the output from Step 2. For example, the process ID for the X2Go session below is **`22463`** (your number will be different).

   ```
   demouser 22463 0.0 0.0 11300 1796 ? Ss Jul11 0:00 /bin/bash /usr/bin/x2goruncommand 50 22408 demouser-50-1563761927_stRrstudio_dp32 39401 /usr/bin/rstudio nosnd R
   ```

4. Terminate the session ID that is stuck.

   ```bash
   kill <process-id>
   # e.g.: kill 22463
   ```

5. Confirm that the process is killed by reapeating Step 2 to verify that the process ID is no longer listed. Repeat the procedure to kill additional processes if needed.

6. Restart X2Go.
   :::

::: details XQuartz in Mac

If XQuartz is used as X11 Server on OS X, X2Go Client has to be informed. Click on the screw-wrench in the upper left bar in order to open the settings window. If not indicated yet, select XQuartz for the X11 application and supply the right version. Make sure that you have restarted your mac after installing the XQuartz.

![XQuartz](./images/mac_osx_xquartz.png "XQuartz - Mac OS X")

:::

::: details Slow Firefox in x2go

Since version 47 Firefox became slow when using x11 rendering. Current versions should still allow setting xrender. Open new tab and write `about:config` as a url in your firefox browser, then search for `gfx.xrender.enabled` and set it to `true`. Restart your Firefox browser.

:::
