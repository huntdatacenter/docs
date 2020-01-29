---
title: X2Go
permalink: /working-in-your-lab/technical-tools/x2go
sidebarDepth: 3
---

# X2Go

This guide explain how you can install and configure the X2Go software to get instant and 'passwordless' access to graphical tools in your lab, such as **RStudio**, **Stata**, **SPSS** and **MatLab**.

If your lab machine is set up for graphical interface, you are good to go after you have set up your local machine:

- [Set up your local machine](#install-x2go-client)

If your lab machine is not set up for graphical access, you will need to install the X2Go server:

- [Set up your home lab machine](#install-x2go-server-on-your-home-lab-machine-iaas)
- [Set up your unmanaged lab machine (iaas)](#install-x2go-server-on-unamanaged-lab-machine-iaas)

::: tip REQUIREMENTS

- A working connection to your lab machines.
- A lab machine set up for X2Go connection (X2Go server and your software of choice, see below).
  :::

We utilize [X2Go](https://wiki.x2go.org/doku.php) to interact with the graphical software on your lab machines.
Thus, if your lab is already set up for such access, you should be fine to access your tools as soon as you have installed and configured X2Go on your local machine.

## Install X2Go client

Install the [x2go client](https://wiki.x2go.org/doku.php/doc:installation:x2goclient) on your own local machine.

::: details OS X/macOS

- Run brew to install both xquartz and x2goclient:

  ```bash
  brew cask install xquartz
  brew cask install x2goclient
  ```

  ::: tip REQUIREMENT
  [Install Homebrew package manager for macOS: brew](https://brew.sh/)

- Please read the [X2Go installation docs](https://wiki.x2go.org/doku.php/doc:installation:x2goclient#os_x) for handy tweaks.

  ::: warning OS X 10.15 Catalina
  In case of issues with x2goclient you can try [nightly build](https://code.x2go.org/releases/X2GoClient_nightly_macosx/x2goclient-4.1.2.2.git20191230.1893.heuler.OSX_10_13.dmg) version.

:::

::: details Windows
Download and run the [X2Go client](https://wiki.x2go.org/doku.php/doc:installation:x2goclient#ms_windows).
:::

::: details Linux (Ubuntu / Debian)
Install x2goclient using apt:

```bash
sudo apt-get update -y && sudo apt install -y x2goclient
```

:::

## Configure X2Go client

Once installed, open X2Go and click `New session` and enter a _Session name_ that you will use to identify this connection later, e.g. _demolab - rstudio_

::: tip NOTE
The default suggestions in red below are for connection to software on your lab's home machine.
Alternatives for unmanaged IAAS machines (for Lab coordinators) are noted as separate bullet points.
:::

### In the `Session` tab

::: details Server section

- _Host_: `10.5.5.12`
  - On IAAS nodes:
    You need to type in the IP address for the machine that is set up for X2Go. You will fine the IP by logging into the iaas machine and type `ifconfig | grep 10.5.5.`
- _Login/username_: `<your-lab-username>`
  - On IAAS nodes:
    The default user name is `ubuntu`. It may be good to confer with your lab coordinator to learn their specific setup for the machine you plan to access.
- _SSH port_: `22`
- _Use RSA/DSA key for ssh connection_:

  - For Mac and Linux:

    Leave blank if your login is "passwordless" (key-based). If not, confer the '[establish a password less login](/getting-started/how-to-connect/#simplify-your-life)' section in the installation guide.

  - For Windows:

    You will need to save the access keys to your local machine and point to this file: (1) log into your lab `home` machine, (2) print your key with `cat ~/.ssh/id_rsa`, (3) open _Notepad_ on your local machine and copy the text from `-----BEGIN KEY-----` to `-----END KEY-----` (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window _Use RSA/DSA key for ssh connection_.

  - On IAAS nodes:

    In addition to the steps above, ensure that you are able to log directly into the machine from your local machine following [this guide](#install-x2go-server-on-unamanaged-lab-machine-iaas).

- _Try auto login_: `Check`
- _Use Proxy server for SSH connection_: `Check`
  :::

::: details Proxy server section

- _Proxy server type:_ `SSH`
- _Host:_ `<lab-ip>`
  - For all: This is your lab specific IP that starts with `10.42.130.`. You will find the full address in the software that you use to connect to your lab.
- _Port:_ `22`
- _Same login as on X2Go Sever:_ `Leave blank`
- _Login:_ `<your-lab-username>`
  - For all: This is the user name that you use to connect to your lab.
- _Same password as on X2Go Server:_ `Leave blank`
- _RSA/DSA key:_
  - For Mac and Linux: `Leave blank`
  - For Windows: `Link to the same file that you established above`
- _ssh-agent or default ssh key:_ `Check`
  :::

::: details Session type section

- Choose `Single application` from the drop down menu
- Add `/usr/bin/xterm` in the command window
  :::

### In the `Connection` tab

Play with the _Connection speed_ and _Compression_ methods.

::: tip
For office use `LAN` and `16m-png` should be fine.
:::

### In the `Media` tab

- Uncheck `Client side printing support`
- Uncheck `Enable sound support`

Hit `OK` in the lower right corner.

## Connect to X2Go server

::: tip
Ensure that your HUNT Cloud VPN is running and connected.
:::

1. Click on your newly saved session in X2Go to connect to your lab machine.
   If this works you should see a terminal pop up on your screen.

2. Type `xclock` in the terminal to test the setup. With a little bit of luck,
   you should now see a new window popping up with a digital clock.

## Connect to other software

You may use X2Go to access software with graphical interfaces.
Such software needs to be installed in your lab machine.
For example, if you or your lab mates have [installed RStudio](/working-in-your-lab/analytical-tools/r-studio/#install-r-studio),
you may access this program by updating the `Session type` at the bottom of the `Session tab`
from `/usr/bin/xterm/` to actual of the software e.g. `/usr/bin/rstudio` and reconnect.

Time to celebrate with coffee!

## XFCE Environment

Setting up XFCE environment and common settings.

::: details Minimal setup of XFCE desktop

```bash
sudo apt-get update -y && sudo apt-get autoremove -y
sudo apt-get install -y --no-install-recommends xubuntu-desktop
```

:::

::: details TAB completion

- Fixing TAB completion using shell:

  ```bash
  sed -i 's|name="&lt;Super&gt;Tab" type="string" value="switch_window_key"|name="&lt;Super&gt;Tab" type="empty"|g' ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml
  ```

- Fixing TAB completion using GUI approach over x2go client.

  ```md
  1. Open the Xfce `Application Menu` > `Settings` > `Window Manager`
  2. Click on the `Keyboard Tab`
  3. Clear the Switch window for same application setting
  ```

:::

::: details Copy-paste functionality

- Client is connecting **from macOS**

  ```bash
  touch ~/.Xdefaults
  chmod u+x ~/.Xdefaults
  cat \<\< EOF >> ~/.Xdefaults
  *VT100.translations: #override \
                   Meta <KeyPress> V: insert-selection(PRIMARY, CUT_BUFFER0)
  EOF
  ```

- Client is connecting from **Windows** or **Linux**

  ```bash
  touch ~/.Xdefaults
  chmod u+x ~/.Xdefaults
  cat \<\< EOF >> ~/.Xdefaults
  *VT100.Translations: #override \
                   Ctrl Shift <Key>V: insert-selection(CLIPBOARD) \
                   Ctrl Shift <Key>C: copy-selection(CLIPBOARD)
  EOF
  ```

:::

## Install X2Go server on your home lab machine (IAAS)

::: warning NOTE
This section is for lab coordinators that want to set up their lab home for graphical access.
:::

Log into your home node and install X2Go server

```bash
sudo apt install x2goserver
```

::: tip INFO
The above command works on lab environments deployed after 2019-01.
Give us a shout [here](/contact) if you would like to install x2goserver on labs deployed before this date.
:::

## Install X2Go server on unamanaged lab machine (IAAS)

::: warning NOTE
This section is for lab coordinators that want to set up their unmanaged machines for GUI access.
:::

::: tip REQUIREMENTS

- Root access to your lab machine.

:::

Connection to X2Go require the application `x2goserver` to run on your IAAS nodes.
You may install this on your unmanaged IAAS-nodes as follows:

Log into unmanaged lab machine of your choice and install the remote desktop software:

```bash
sudo add-apt-repository ppa:x2go/stable
sudo apt update
sudo apt install x2goserver -y
```

::: details Ensure smooth access

You need to make sure you and your lab mates can log in to the x2go machine passwordless using RSA certificates, e.g. by following these steps:

1. From your local machine, log into your lab's entry machine:

   ```bash
   ssh <labname>-entry
   ```

2. Form your entry machine, copy your machine key to your iaas-machine with the running X2Go server:

   ```bash
   ssh-copy-id <name-of-iaas-node>
   ```

3. Confirm the passwordless route to your iaas machine:

   ```bash
   ssh <iaas-node>
   ```

   ::: warning NOTE
   Give us a shout [here](/contact) if you are unable to make the above step work since a security setting may prohibit this depending on your lab setup.

4. Get the IP for your IAAS machine

   Inside your IAAS node, list the IP address for the node with `ifconfig`. The IP address is listed after `inet addr:` and start with 10.5. Note this as you will use this for the X2Go setup on your local machine (steps above).

   ```bash
   hostname -I
   ```

:::

## Troubleshooting

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

3. Identify the process ID number that you want to terminate. The unique process ID is listes in the second column in the output from Step 2. For example, the process ID for the X2Go session below is `22463` (your number will be different).

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
