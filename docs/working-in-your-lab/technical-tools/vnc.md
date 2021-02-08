---
title: VNC
category: Technical tools
permalink: /working-in-your-lab/technical-tools/vnc
sidebarDepth: 1
description: Usage guide for VNC.
---

# VNC

## Install TurboVNC

Install TurboVNC on your machine:
```
wget https://netix.dl.sourceforge.net/project/turbovnc/2.2.5/turbovnc_2.2.5_amd64.deb
sudo apt install ./turbovnc_2.2.5_amd64.deb
```

## Using TurboVNC

Start the session on your server with the command below and note N (e.g. `:1`):
```
/opt/TurboVNC/bin/vncserver -geometry 1280x900 -nohttpd -SecurityTypes None -localhost
```

Listing the existing sessions:
```
/opt/TurboVNC/bin/vncserver -list
```

Stopping the server:
```
/opt/TurboVNC/bin/vncserver -kill :n
```

## Client

Allowing connection using ssh tunnel (Port = 5900 + n):
```
ssh -L59000:localhost:5901 -C -N lab
```

Connect with VNC client of your choice using the address:
```
127.0.0.1:59000
```

Install TigerVNC client on your notebook.

### Ubuntu

```
sudo apt update
sudo apt install tigervnc-viewer
```

### Mac OS X

```
brew cask install tigervnc-viewer
```

### Windows or other

https://bintray.com/tigervnc/stable/tigervnc/1.11.0
