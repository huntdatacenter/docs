---
permalink: /working-in-your-lab/technical-tools/sshfs
---

# SSHFS

This page describe how you can mount your labs file system over an encrypted connection.

Depending on you security model, you may mount selected part of your storage system to your client computer over VPN.

## Install software packages on linux (Debian)

1. Install sshfs: `apt install sshfs`

## Install software packages on OS X and macOS

1. Install [brew](https://brew.sh/)
2. Install fuse4x: `brew cask install osxfuse`
3. Install sshfs: `brew install sshfs`

## Mount your lab storage to your computer

- Connect your HUNT Cloud VPN
- Make a folder on the local computer that is dedicated as mount point for your lab storage, e.g. `mkdir <labname>` - for example `mkdir demolab`, this will be referred as the `localfolder` below.
- Mount your storage using sshfs: `sshfs <labname>-entry: <local-folder-name> -o volname=<labname>`, e.g. `sshfs demolab-entry: demolab -o volname=demolab`

That's it.
With a little bit of luck you should be able to find your lab folders in "Finder"...
If not, don't hesitate to contact us [here](/contact) so we can improve this guide together.

## Unmount your lab storage

- If you wish to stop the mount before you turn off your computer or vpn, you turn it off with this command: `sudo umount <localfolder>`, such as `sudo umount demolab`
