---
title: VNC
category: Technical tools
permalink: /hunt-lab/technical-tools/vnc
sidebarDepth: 1
description: Usage guide for VNC.
---

# VNC

## Install TurboVNC

Install TurboVNC on your lab machine:
```
wget https://netix.dl.sourceforge.net/project/turbovnc/2.2.6/turbovnc_2.2.6_amd64.deb
sudo apt install ./turbovnc_2.2.6_amd64.deb
```

Make sure you have a desktop environment setup:
```
sudo apt-get update -y && sudo apt-get autoremove -y
sudo apt-get install -y --no-install-recommends xubuntu-desktop
```

## Using TurboVNC

Start the session on your server with the command below and note the number of session N (e.g. `:1`):
```
/opt/TurboVNC/bin/vncserver -geometry 1280x900 -nohttpd -SecurityTypes None -localhost
```

If you have one or more existing sessions running and you want to list them, you can use `-list` parameter:
```
/opt/TurboVNC/bin/vncserver -list
```

You can stop your session by using `-kill` parameter and `:n` being a number of session (e.g. `:1`):
```
/opt/TurboVNC/bin/vncserver -kill :n
```

## Client

To be able to connect to a VNC session you need allowing connection
using ssh tunnel. In the example we use port 5901, but in case of multiple users
you will need to calculate your port based on session number N: 5900 + n(:1) => 5901.

```
ssh -L59000:localhost:5901 -C -N lab
```

Connect with VNC client of your choice using the address below.
We recommend installing TigerVNC as a client on your notebook.

```
127.0.0.1:59000
```

If you do not have it installed yet, you can follow the examples below.

### Ubuntu

```
sudo apt update
sudo apt install tigervnc-viewer
```

### Mac OS X

```
brew install --cask tigervnc-viewer
```

### Windows or other

https://bintray.com/tigervnc/stable/tigervnc/1.11.0
