---
title: SSHFS
category: Transfer tools
permalink: /working-in-your-lab/transfer-tools/sshfs
sidebarDepth: 1
description: Installation and usage guide for sshfs.
---

# SSHFS

This page describe how you can mount your labs file system over an encrypted connection.

Depending on you security model, you may mount selected part of your storage system to your client computer over VPN.

## Install software packages on linux (Debian)

1. Install sshfs:

   ```bash
   sudo apt install sshfs
   ```

## Install software packages on OS X and macOS

::: tip REQUIREMENT
[Install Homebrew package manager for macOS: brew](https://brew.sh/)
:::

1. Install macfuse:

   ```bash
   brew install --cask macfuse
   ```

2. Allow developer in `System Preferences` -> `Security & Privacy` -> `General`

3. Install sshfs:

   ```bash
   brew install sshfs
   ```

4. Reboot macOS before continuing

## Mount your lab storage to your computer

1. Connect your HUNT Cloud VPN
2. Set labname

   ```bash
   export labname=<labname>  # export labname=demolab
   ```

3. Make a folder on the local computer that is dedicated as mount point for your lab storage:

   ```bash
   mkdir ~/${labname}-storage
   ```

4. Mount your storage using sshfs:

   ```bash
   sshfs ${labname}-entry: ~/${labname}-storage -o follow_symlinks -o volname=${labname}
   ```

   e.g. `sshfs demolab-entry: demolab -o volname=demolab`

5. You can make an alias in profile/rc config (`~/.bash_profile`, `~/.bashrc`, or `~/.zshrc`) for easier access:

   ```bash
   echo "alias ${labname}-mount=sshfs ${labname}-entry: ~/${labname}-storage -o follow_symlinks -o volname=${labname}" >> ~/.profile
   ```

That's it.
With a little bit of luck you should be able to find your lab folders in "Finder"...
If not, don't hesitate to contact us [here](/contact) so we can improve this guide together.

## Unmount your lab storage

- If you wish to stop the mount before you turn off your computer or vpn, you turn it off with this command:

  ```bash
  sudo umount ~/${labname}-storage
  ```
