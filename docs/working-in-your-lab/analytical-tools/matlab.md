---
permalink: /working-in-your-lab/analytical-tools/matlab
---

# MATLAB

[MATLAB](https://www.mathworks.com/) is a computing environment developed by MatWorks for efficient matrix manipulations and other handy computing tools.

We do provide the opportunity for MATLAB installations on managed and unmanaged machines.
Installation on home-nodes require us to run some code.

The below guide is for multi-user setup in an unmanaged environment (iaas-node).

## Dependencies

- A machine prepared for [x2go](/working-in-your-lab/technical-tools/x2go/).
- An unmanaged machines (iaas-node) where you have root access.
- Access to MATLAB software binaries for linux.
- Access to a MATLAB license, typically provided by your organization.

::: warning
Without these, it will be impossible to get MATLAB to work in your lab.
:::

## Download MATLAB to your lab

- Download the MATLAB software on your local computer (client).
  - For NTNU users, log into [NTNU's software repository for matlab](https://software.ntnu.no/ntnu/matlab), choose your desired version in the top right corner and download on your local computer. We recommend that you skip the latest version and choose a slightly older version to ensure a reliable installation.
- Transfer MATLAB to your preferred folder in your lab machine, for example /mnt/work/software/matlab/)
- Unpack the zip file in your folder.
  - Install software: `sudo apt install unzip`
  - Unzip: `unzip <matlabfile.zip>`
- Make all files in folder executables: `chmod -R 777 <matlab-folder>`. This is a primitive fix so you are able to run the files within subfolders as required by MATLAB.

## Add a license file

- Create a file named `license.dat` with your license information. The content of this file is dependent on your organizations license. The example below will need you to replace `<license-server-address>`, `<key1>` and `<key2>` with an url-address and strings provided by your host institutions license page.:
  - For NTNU users, the exact content of this files is described in [NTNU's software repository for matlab](https://software.ntnu.no/ntnu/matlab).

```ini
SERVER <license-server-address> <key1> <key2>
USE_SERVER


```

::: warning
Make sure you add a line shift after "USE_SERVER".
:::

## Install

The below steps require the code to be run in `xterm` started from X2GO on the machine holding the MATLAB files downloaded in the above steps.

- Go to your matlab folder and run the installer: `sudo ./install`
- During the install choose: "`Use a File Installation Key`"
- Choose "`I have the File Installation Key for my license`" and enter the key (these are found on you software repository)
- Follow the installer and choose the packages you want.
- When the installer ask for your product activation, choose the "`non internet`" option and provide the location of the `license.dat` file previously generated.
- If successful, your should see a "product activation message".

## Run MATLAB

- If you prefer MATLAB's graphical interface, run `matlab`in the your terminal (`xterm`) started in X2GO.
- If you're fine with command lines, run `matlab` directly in your shell.

With a little bit of luck, it's now time to celebrate with fresh coffee running your favourite test code on the fresh MATLAB. If not, here's some of our known issues:

## Known issues

### Why don't MATLAB find the packages I choose to install?

Some of the latest MATLAB versions compiled by some universities miss some packages.
Try to download and install a slightly older version.

### Can I install the code without sudo?

Not in a straight forward way.
We recommend that you install on a unmanaged node where you have root.

### My product activation do not seem to work?

We need to open for traffic from your lab to your organization's license server.
Give us a shout [here](/contact).
