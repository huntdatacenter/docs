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
- Under `Basic SSH settings`, add `10.5.5.12` under `Remote host`and type your username on the same line under `Specify username`.
- Under `Network settings`, check `Connect through SSH gateway (jump host)` and add your labs IP-address to the `Gateway SSH server` and your user name to the `User` field (the 10.42.-address from the ssh-config).
- Click OK and then try to connect.

## Connect

- You will now be asked twice to type in your SSH password that you made during the lab installation.

With a little bit of luck, you should now be able to connect directly from your client computer to your home node in your lab.
