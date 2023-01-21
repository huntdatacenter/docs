---
title: Troubleshooting
category: HUNT Workbench
permalink: /do-science/hunt-workbench/troubleshooting
sidebarDepth: 1
description: HUNT Workbench troubleshooting.
---

# HUNT Workbench troubleshooting

**Unfortunately, sometimes things don't work as intended. Here is a collection of known issues that you might encounter in your HUNT Workbench. Contact us if you are still stuck after reading up.**

[[toc]]

::: tip

See our [HUNT Workbench FAQ](/do-science/hunt-workbench/faq/) for known questions.

:::

## Access

### I am unable to access my HUNT Workbench applications?

If you were previously able to access your applications (such as _RStudio_), and then the application suddenly stopped working, one quick approach is to try restarting your HUNT Workbench environment.

Follow this guide to [restart your workbench](/do-science/hunt-workbench/faq/#how-can-i-restart-my-workbench-environment-and-start-from-scratch). [Contact us](/contact) or reach out in your lab channel on Slack if you don't find a solution in our [FAQ](/working-in-your-lab/hunt-workbench/faq/) or troubleshooting section.

### 504: Gateway Timeout Error

Reach out to us on [Slack or email](/contact) if you get a **`504 error`** while trying to login to your HUNT Workbench. In these cases you will not be able to access your workbench.

Note. This does not apply when you are able to open your HUNT Workbench, but get a _504_ when your try to access specific applications, such as _RStudio_ below (see solution below).

### 403: Forbidden - Expired client certificate

Your HUNT Workbench certificate is time limited. You will meet the **`403 Forbidden`** message (example image below) when your certificate expire. Head over to the [service desk](/do-science/service-desk#hunt-workbench-reissue) to order a new certificate.

![expired_certificate.png](./images/expired_certificate.png)

### Has my lab certificate expired?

If you were previously able to access your HUNT Workbench and now your browser suddenly reports expired/unsafe certificates (e.g.: **`Your connection is not private`** or **`ERR_CERT_DATE_INVALID`**), reach out to us in your lab channel on Slack or contact us on [email](/contact). If the certificate is expired we can usually sign new lab certificates and update the service quickly.

![expired_server_cert.png](./images/expired_server_cert.png)

## RStudio

### 500: Internal Server Error

If you are a fast clicker and get to an app before it's initialized in the background you might get error message:

```
500: Internal Server Error
Could not start rstudio in time
```

Try reloading the page (`Ctrl + R` / `CMD + R`) to reconnect with your RStudio session. [Contact us](/contact) if the error message persists.

### 504: Gateway Timeout Error

The **`504 error`** may be shown when you access **`/user/<username>/rstudio/`** but RStudio fails to start. If you were previously able to access your RStudio in HUNT Workbench it is possible that RStudio saved more data in your environment files than it is able to load into memory. 

One potential approach is to (1) first utilize your [workbench terminal](/do-science/hunt-workbench/faq/#terminal) to manually resetting your RStudio settings:

```bash
mv "/mnt/work/workbench/${USER}/.local/share/rstudio" "/mnt/work/workbench/${USER}/.local/share/rstudio-$(date +%Y-%m-%d)"
```

And then (2) [restart your HUNT Workbench environment](/do-science/hunt-workbench/faq/#how-can-i-restart-my-workbench-environment-and-start-from-scratch).

If the error still persists, don't hesitate to reach out in your lab channel on Slack or [contact us](/contact) for further assistance.

## MATLAB

### Error - 'matlab' executable not found in PATH

Access to MATLAB requires the application to be installed and activated in your lab.

If you click on the MATLAB icon and the application is missing you will meet a red error box stating that "_matlab executable not found in PATH_". 

Contact your lab coordinator to investigate your licensing options and [contact us](/contact) in Slack or email us with your installation request.

### Icons in user interface disappeared

If MATLAB icons disappeared and application is stuck loading you will need to reset your user settings.

<!-- [matlab icons missing](./images/matlab_icons_missing.png) -->

Removing user settings can be done in your [workbench terminal](/do-science/hunt-workbench/faq/#terminal):

```bash
ls /mnt/work/workbench/$USER/.matlab
rm -r /mnt/work/workbench/$USER/.matlab
```

### I can not install new toolboxes

[Contact us](/contact) on Slack or email if you need new toolboxes in your MATLAB installation. You will most likely not be able to install these yourself. 

## Experience

### Unresponsive environment

An unresponsive or slow HUNT Workbench may be caused by several things. Here's a small checklist to narrow down potential causes:

- Use Google Chrome as your browser. Other browsers don't support all features and might cause potential silent failures.

- Restart your HUNT Workbench environment to start fresh in the case something got hung up. [Click here](/do-science/hunt-workbench/faq/#how-can-i-restart-my-workbench-environment) to see how.

- Check the resource consumption of your **`home`**-machine to ensure that you have available free cpu and memory resources.

[Contact us](/contact) for further investigation if none of these works.

::: details Check your resources

One way to check your resource consumption is to log into your lab **`home`**-machine and run [htop](/do-science/tools/technical-tools/htop/). Consider to upgrade the machine size in the administer science [Service desk](/administer-science/service-desk/lab-orders/#update-cpu-machine-size) if you are low on free resources.

:::


