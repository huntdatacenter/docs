---
title: VNC
category: Technical tools
permalink: /do-science/tools/technical/vnc
sidebarDepth: 1
description: Usage guide for VNC.
---

# VNC

**[VNC](https://en.wikipedia.org/wiki/Virtual_Network_Computing) is a graphical desktop-sharing system that allow you to connect to graphical interfaces in your lab machines.**

[[toc]]

## 1. Install TurboVNC

1.1. Log into your lab machine. 

1.2. Download the latest TurboVNC

```
# -- Example for version 3.0.2 
wget wget https://netix.dl.sourceforge.net/project/turbovnc/3.0.2/turbovnc_3.0.2_amd64.deb
```

[Click here](https://sourceforge.net/projects/turbovnc/files/) to see the latest version and update the text above with a new version number if needed.

1.3. Install 

```bash
sudo apt install ./turbovnc_3.0.2_amd64.deb
```

## 2. Install a desktop environment

Make sure you have a desktop environment setup that TigerVNC can connect towards:

```bash
sudo apt-get update -y && sudo apt-get autoremove -y
sudo apt-get install -y --no-install-recommends xubuntu-desktop
```

## 3. Start TurboVNC

Start the session on your server with the command below and note the number of session N (e.g. `:1`):

```bash
/opt/TurboVNC/bin/vncserver -geometry 1280x900 -nohttpd -SecurityTypes None -localhost -disconnect
```


## 4. Configure your local computer

You will need a SSH tunnel between your local computer and your lab to connect to your VNC session. 

::: tip Calculate your port

In this example we will use port 5901. In case of multiple users you will need to calculate your port based your session number identified above (N): 5900 + n(:1) => 5901.
:::

4.1 In your local computer, establish a SSH tunnel to your lab:

```bash
ssh -L59000:localhost:5901 -C -N lab
```

4.2 Download and install tigervnc on your local computer. 

::: details Windows

[Download TigerVNC](https://sourceforge.net/projects/tigervnc/) on sourceforge.net (Click **`Download`**).

:::

::: details OS X and MacOS

```bash
brew install --cask tigervnc-viewer
```
:::

::: details Ubuntu

```bash
sudo apt update
sudo apt install tigervnc-viewer
```
:::


4.3 Connect your VNC client using the following address (see below).

```bash
127.0.0.1:59000
```


## Useful commands for Turbo VNC

TurboVNC commands are run inside your lab machine.

### List running sessions

If you have one or more existing sessions running and you want to list them, you can use `-list` parameter:

```bash
/opt/TurboVNC/bin/vncserver -list
```

### Stop session 

You can stop your session by using `-kill` parameter and `:n` being a number of session (e.g. `:1`):

```bash
/opt/TurboVNC/bin/vncserver -kill :n
```

## Troubleshooting

.


