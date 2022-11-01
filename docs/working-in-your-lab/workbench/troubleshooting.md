---
title: Troubleshooting
category: Workbench
permalink: /working-in-your-lab/workbench/troubleshooting
sidebarDepth: 1
description: Workbench troubleshooting in your HUNT Cloud lab.
---

# Workbench troubleshooting

**Unfortunately, sometimes things don't work as intended. Here is a collect of issues you might encounter in your Workbench. Contact us if you are still stuck after reading up.**

[[toc]]

::: tip

See our [Workbench FAQ](/working-in-your-lab/workbench/faq/) for general questions about Workbench.

:::

## Access

### I am unable to access my Workbench applications?

If you were previously able to access your applications in Workbench (e.g. RStudio), and then the application suddenly stopped working, one quick approach is to try restarting your Workbench environment. Follow the guide to [restart Workbench environment](/working-in-your-lab/workbench/faq/#how-can-i-restart-my-workbench-environment-and-start-from-scratch). [Contact us](/contact) or reach out in your lab channel on Slack if you do not find answer in [FAQ](/working-in-your-lab/workbench/faq/) or troubleshooting sections below.

### 504: Gateway Timeout Error

If you get 504 error code while trying to login to Workbench please reach out in your lab channel on Slack or contact us on [email](/contact).
In such cases you will not be able to access Workbench.
This does not apply when you are able to open Workbench, but get 504 when trying to access specific applications, in such cases try to go through sections below.

### 403: Forbidden - Expired client certificate

Your Workbench certificate is time limited. You will meet the **`403 Forbidden`** message below when your certificate expire. Head over to the [service desk](/service-desk/user-orders/#workbench-reissue) to order a new certificate.

![expired_certificate.png](./images/expired_certificate.png)

### Has my lab certificate expired?

If you were previously able to access Workbench and now your browser reports expired/unsafe certificates (e.g.: Your connection is not private) please reach out in your lab channel on Slack or contact us on [email](/contact). If the certificate is expired we can usually sign and update new lab certificates quickly.

![expired_server_cert.png](./images/expired_server_cert.png)

## RStudio

### 500: Internal Server Error

If you are a fast clicker and get to an app before it's initialized in the background you might get error message:

```
500: Internal Server Error

Could not start rstudio in time
```

Try reloading the page (`Ctrl + R` / `CMD + R`) to reconnect with RStudio session.
[Contact us](/contact) if the error message persists.

### 504: Gateway Timeout Error

The 504 error may be shown when you access `/user/<username>/rstudio/`, but Workbench cannot start RStudio. If you were previously able to access your RStudio in Workbench, one potential approach is using [Workbench terminal](/working-in-your-lab/workbench/faq/#terminal) and manually resetting your RStudio settings:

```bash
mv "/mnt/work/workbench/${USER}/.local/share/rstudio" "/mnt/work/workbench/${USER}/.local/share/rstudio-$(date +%Y-%m-%d)"
```

Then [restart your Workbench environment](/working-in-your-lab/workbench/faq/#how-can-i-restart-my-workbench-environment-and-start-from-scratch). If the error still persists, don't hesitate to [contact us](/contact) for further assistance.

## MATLAB

### Icons in user interface disappeared

If MATLAB icons disappeared and application is stuck loading you will need to reset user settings.

[matlab icons missing](./images/matlab_icons_missing.png)

Removing user settings can be done in Workbench terminal:

```bash
ls /mnt/work/workbench/$USER/.matlab
rm -r /mnt/work/workbench/$USER/.matlab
```

## Experience

### Unresponsive Workbench

An unresponsive or slow Workbench may be caused by several things. Here's a small checklist to narrow down potential causes:

- Use Google Chrome as your browser. Other browsers don't support all features and might cause potential silent failures.

- Restart your Workbench environment to start fresh in the case something got hung up. [Click here](/working-in-your-lab/workbench/faq/#how-can-i-restart-my-workbench-environment) to see how.

- Check the resource consumption of your `home`-machine to ensure that you have availble free memory and cpu resources, for example by logging into your lab `home`-machine and run [htop](/working-in-your-lab/technical-tools/htop/). Consider to upgrade your machine size in the [service desk](/service-desk/lab-orders/#update-machine-size) if your are low on free resources.

[Contact us](/contact) if none of these works for further investigation.
