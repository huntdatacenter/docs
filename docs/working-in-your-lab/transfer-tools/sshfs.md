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

   Download latest version of sshfs from [here](https://github.com/osxfuse/sshfs/releases), open and install it

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
   sshfs ${labname}: ~/${labname}-storage -o follow_symlinks -o volname=${labname}
   ```

   e.g. `sshfs demolab: demolab -o volname=demolab`

5. You can make an alias in profile/rc config (`~/.bash_profile`, `~/.bashrc`, or `~/.zshrc`) for easier access:

   ```bash
   echo "alias ${labname}-mount=sshfs ${labname}: ~/${labname}-storage -o follow_symlinks -o volname=${labname}" >> ~/.profile
   ```

That's it.
With a little bit of luck you should be able to find your lab folders in "Finder"...
If not, don't hesitate to contact us [here](/contact) so we can improve this guide together.

## Unmount your lab storage

- If you wish to stop the mount before you turn off your computer or vpn, you turn it off with this command:

  ```bash
  sudo umount ~/${labname}-storage
  ```

## Troubleshooting

::: details Installation on macOS 11 (Big Sur)

Brew packages above are deprecated and if you are on new version or could not install old way download
macFUSE and SSHFS from [osxfuse.github.io](https://osxfuse.github.io/).

1. Download and open macFUSE:

    ![macFUSE-1-dmg.png](./images/macFUSE-1-dmg.png)

2. Start installation and confirm that you trust the developer:

    ![macFUSE-2-Install-guide.png](./images/macFUSE-2-Install-guide.png)

3. Read the info, then continue:

    ![macFUSE-3-Install.png](./images/macFUSE-3-Install.png)

4. Approve if you want the installation to continue:

    ![macFUSE-4-Install.png](./images/macFUSE-4-Install.png)

5. Switch to Security and privacy in System Preferences:

    ![macFUSE-5-Security-and-Privacy-open.png](./images/macFUSE-5-Security-and-Privacy-open.png)

6. Confirm if you want to allow software from this developer to be used in the system,
   allowing this is necessary for sshfs to work:

    ![macFUSE-5-Security-and-Privacy-allow.png](./images/macFUSE-5-Security-and-Privacy-allow.png)

7. Restart the system immediately if you plan to install sshfs:

    ![macFUSE-6-Install-restart.png](./images/macFUSE-6-Install-restart.png)

After restarting the system, when necessary drivers are loaded, you can continue installing sshfs.

1. Download and open sshfs:

    ![sshfs-1-install.png](./images/sshfs-1-install.png)

2. Confirm if you agree with license agreement:

    ![sshfs-2-install-agree.png](./images/sshfs-2-install-agree.png)

3. Approve if you want the installation to continue:

    ![sshfs-3-install-approve.png](./images/sshfs-3-install-approve.png)

4. Finish:

    ![sshfs-4-install-finish.png](./images/sshfs-4-install-finish.png)

:::
