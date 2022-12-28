---
title: Matlab
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/Matlab
sidebarDepth: 1
description: Installation guide for Matlab.
---

# Matlab

[Matlab](https://www.mathworks.com/) is a computing environment developed by MatWorks for efficient matrix manipulations and other handy computing tools.

::: tip

These steps guide the installation of Matlab on unmanaged [iaas or blue](/faq/compute/#machine-types) machines. [Contact us](/contat) for installations on your [home machine](/faq/compute/#machine-types).

:::


::: warning Dependencies

- An unmanaged iaas or blue machine where you have root access.
- Installation of [X2Go server](/working-in-your-lab/technical-tools/x2go/) on this machine.
- Access to Matlab software binaries for Linux from your organizaton.
- Access to a Matlab license for the users in your lab.

:::

## Download

1. Download the Matlab software on your local computer (client).

   For NTNU users, log into [NTNU's software repository for Matlab](https://software.ntnu.no/ntnu/Matlab),
   choose your desired version in the top right corner and download on your local computer.
   We recommend that you skip the latest version (alpha) and choose one of the stable versions
   (e.g. 2019b) to ensure a reliable installation.

2. Transfer Matlab to your preferred folder in your lab machine (for example `/mnt/scratch/matlab/`)
3. Unpack the zip file in your folder.

   Install dependencies:

   ```bash
   sudo apt install unzip libnss3
   ```

   Unzip Matlab installer:

   ```bash
   unzip <matlabfile.zip>
   ```

4. Make all files in folder executables: `chmod -R 777 <matlab-folder>` (e.g. /mnt/scratch/matlab/).
   This is a simple fix for you to be able to run the files within subfolders as required by Matlab.

## Activate license

::: tip
For NTNU users, the exact content of this files is described in [NTNU's repository for Matlab](https://software.ntnu.no/ntnu/Matlab).
:::

- Create a file named `license.dat` with your license information. The content of this file is dependent on your organizations license. The example below will need you to replace `<license-server-address>`, `<key1>` and `<key2>` with an url-address and strings provided by your host institutions license page.:

```ini
SERVER <license-server-address> <key1> <key2>
USE_SERVER

```

::: warning
Make sure you add a new/empty line after "USE_SERVER".
:::

## Install

The below steps require the code to be run in `xterm` started from X2GO on the machine holding the Matlab files downloaded in the above steps.

1. Prepare target directory:
   ```
   mkdir -p /mnt/work/software/matlab_r2019b
   mkdir -p /mnt/scratch/tmp
   ```

2. Go to your Matlab installation folder (e.g. /mnt/scratch/software/matlab_r2019b) and run the installer:

   ```
   bash ./install -downloadFolder /mnt/scratch/software/matlab_r2019b -tmpdir /mnt/scratch/tmp -destinationFolder /mnt/work/software/matlab_r2019b
   ```

3. During the installation choose: `Use a File Installation Key`
4. Choose `I have the File Installation Key for my license` and enter the key (these are found on you software repository)
5. Follow the installer and choose the packages you want.
6. When the installer asks for your product activation, choose the `non internet` option and provide the location of the `license.dat` file previously generated.
7. If successful, your should see `product activation message`.

## Run

- If you're fine with command lines, run `Matlab` directly in your shell.
- If you prefer Matlab's graphical interface, run `Matlab` in your terminal (`xterm`) started in X2GO.
  ```
  /usr/bin/xterm -e matlab
  ```
  or with full path e.g.:
  ```
  /usr/bin/xterm -e /mnt/work/software/matlab2019b/bin/matlab
  ```

With a little bit of luck, it's now time to celebrate with fresh coffee running your favourite test code on the fresh Matlab. If not, here's some of our known issues:

## Troubleshooting

### Why can't Matlab find the packages I choose to install?

One known issue is that sometimes the latest Matlab version compiled by some universities do miss some packages. Try to install a slightly older version. [Contact us](/contact) for assistance if this do not work.

### Can I install the code without sudo?

No, not in an easy way. Thus, either we have to install on `home` machines, or your can install these yourself on unmanaged iaas and blue machines where you get root. [Contact us](/contact) if you need Matlab on your home machine.

### My product activation do not seem to work?

We need to open for traffic from your lab to your organization's license server. [Contact us](/contact) for network openings.

### Why is live editor not working?

If Matlab complains that Live editor is unable to run in the current system configuration it is important to check if libnss3 is installed.

```
dpkg -s libnss3
# If not installed run
sudo apt install libnss3
```

### Why is my Matlab installation stuck?

If the installation was progressing and then stuck at some point it is important to check
disk space `df -h`. In some cases `/tmp` directory may get filled up. We usually recommend
setting alternative tmp before running install:
```
mkdir -p /mnt/scratch/tmp
export TMP=/mnt/scratch/tmp
export TEMP_DIR=/mnt/scratch/tmp
```
