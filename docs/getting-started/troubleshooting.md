---
permalink: /getting-started/troubleshooting
sidebarDepth: 3
---

# Troubleshooting

Sometimes things don't work as they should.
We have collected some of the common issues you might encounter when trying to connect.
If you are stuck, give us a shout [here](/contact/).

## OpenVPN

### Installing OpenVPN on Windows without administrative rights

If you run into any issues installing OpenVPN on Windows, then this might be due to lack of administrative rights on your computer.

::: tip
You can check if you have administrative rights on your computer by running `net localgroup "Administrators"` in a command prompt and seeing if your username is listed.
:::

Please request assistance from your local IT personnel in order to grant you administrative rights on your computer, allowing you to install OpenVPN yourself.

If your local IT personnel cannot not give you administrative rights, then please request that they assist in installing OpenVPN for you. We've outlined the steps they need to perform below which you can attach to your request:

#### Instructions for local IT personnel

```text
1. Install the OpenVPN client on my computer for my user:
  Download and install using the Windows installer from https://openvpn.net/index.php/open-source/downloads.html

2. Create an OpenVPN Administrators group on my computer:
  net localgroup /add "OpenVPN Administrators"

3. Add my user to OpenVPN Administrators group on my computer:
  net localgroup "OpenVPN Administrators" /add <DOMAIN>\<USERNAME>
```
