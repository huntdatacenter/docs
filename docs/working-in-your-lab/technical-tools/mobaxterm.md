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

A working SSH connection to both entry and home as described in the [How To Connect To Your Lab](/getting-started/) guide.
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
- In **Bookmark settings**, Name your lab session. Click OK to confirm Session settings.
  ![Step 4](./images/mobaxterm_step4.png "MobaXterm - Step 4")

## Connect

Connect to your session. You will now be asked twice to type in your SSH password that you made during the lab installation.

![Connect](./images/mobaxterm_step5.png "MobaXterm - Connect")

With a little bit of luck, you should now be able to connect directly from your client computer to your home node in your lab.


## Generating SSH Key

::: warning Requirements

Make sure Putty is installed in order to use ssh-agent.
If you just installed it, start Putty at least once, before starting MobaXterm again.

:::

In case you have not used SSH keys before and you need to generate one, on Windows you can do so in MobaXterm using Local terminal:

![Main View - Local terminal](./images/mobaxterm_main-local_terminal.png)

Clicking on Local terminal opens MobaXterm command line:

![Local terminal](./images/mobaxterm_local_terminal.png)

Follow these commands to setup your ssh keys:

```bash
mkdir -p .ssh
touch .ssh/config
ssh-keygen -b 4096 -t rsa -f /home/mobaxterm/.ssh/id_rsa -q -N ""
```

Once the keys are set up you can start the ssh-agent:
```bash
eval $(ssh-agent)
```

Then check you ssh keys with ssh-add command:
```bash
ssh-add
```

## Setting ssh-config

To setup ssh config to be used in local terminal of MobaXterm use:

```
cat <<-EOF > /home/mobaxterm/.ssh/config

Paste your config here

EOF
```

## Uploading the new key

To be able to use the key it needs to be uploaded with:

```
ssh-copy-id <your-lab-name>-entry
```
