---
title: MobaXterm
category: Technical tools
permalink: /working-in-your-lab/technical-tools/mobaxterm
sidebarDepth: 1
description: Usage guide for MobaXterm.
---

# MobaXterm

MobaXterm is a software package that simplifies connecting to your lab on HUNT Cloud from your local Windows computer.

## Prerequisites

A working SSH connection to both entry and home as described in the [How To Connect To Your Lab](/getting-started/how-to-connect) guide.
If these steps don't work as intended, it will be hard (although not impossible) to get MobaXterm to work smoothly.

## How to install

- Download the `Home edition (installer edition)` from [mobaxterm.mobatek.net](https://mobaxterm.mobatek.net/download.html):
- Unzip the file and install the software

## Configure

- Open MobaXterm
- Select a new session and click on the `SSH` image on the `Session settings`.
- In **Basic SSH settings**, add `10.5.5.12` as `Remote host` and type your username into `Specify username` field. Under **Advanced SSH settings** uncheck `X11-forwarding` if not used. Select ssh (private) key file if you already have one.
  ![Step 1](./images/mobaxterm_step1.png "MobaXterm - Step 1")
- Under `Network settings`, click on `Connect through SSH gateway (jump host)`
  ![Step 2](./images/mobaxterm_step2.png "MobaXterm - Step 2")
- Add your labs IP-address to the `Gateway SSH server` and your user name to the `User` field (the 10.42.-address from the ssh-config). Select ssh (private) key file if you already have one. Click OK to confirm SSH jump host.
  ![Step 3](./images/mobaxterm_step3.png "MobaXterm - Step 3")
- Click OK to confirm Session settings and then try to connect.

## Connect

- You will now be asked twice to type in your SSH password that you made during the lab installation.

With a little bit of luck, you should now be able to connect directly from your client computer to your home node in your lab.
