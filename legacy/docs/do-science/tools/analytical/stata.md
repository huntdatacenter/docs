---
title: Stata
category: Analytical tools
permalink: /do-science/tools/analytical/stata
sidebarDepth: 1
description: Installation guide for Stata.
---

# Stata

**[Stata](https://www.stata.com/) is a ananlytical software developed by StataCorp tailored towards epidemiological analysis.**

[[toc]]

::: warning Requirement

- Access to a Stata license for the lab users in your lab.

:::

## Installation in HUNT Workbench

You may request Stata in your HUNT Workbench as a Jupyter notebook. This means that you can write known Stata commands and that you can view plots on your screen. See our [Stata guide](/do-science/guides/stata/) for more details and request HUNT Workbench Stata access in our do-science [service desk](/do-science/service-desk/#general-service-request).

## Installation on home machines

[Contact us](/contact) for assistance on installations on your [home machine](/do-science/faq/compute/#machine-types) and discussions on licenses types tailored for your lab work.

::: tip NTNU license
All NTNU employees are covered by the NTNU license which allow for quick installations. Lab users that are not affiliated with NTNU will need to either bring their own license or ask their lab leader to buy a license from StataCorp.
:::

## Running Stata over X2Go

After our installation, you can access Stata over [X2Go](/do-science/tools/technical/x2go/) with this **`Single application`** address in the X2Go configuration (or similar provided by us):

```bash
/usr/bin/xterm -e /mnt/work/software/stata170/xstata-mp -f0
```

Or you can run as terminal application:

```bash
/mnt/work/software/stata170/stata-mp
```


## Troubleshooting

#### The icons appear as question marks

There is a [known issue](https://www.statalist.org/forums/filedata/fetch?id=1351289&d=1469795531&type=full) in Stata on Linux that may render icons as question marks. We have implemented work arounds that should mitigate this issues for installations that we support. [Contact us](/contact) if you still experience this so we can have a look and update your configuration.

#### My file consume all of the machine memory

You might need to consider the memory consumption of Stata when you work with files close to your machine memory. [Click here](/do-science/faq/compute/#is-my-process-hitting-memory-issues) to learn how to assess if you are hitting memory issues on your machines. If so, the University of Wisconsin has written up a guide on [how to reduce Stata's memory consumption](https://www.ssc.wisc.edu/sscc/pubs/stata_memory.htm). [Contact us](/contact) for a memory upgrade if necessary.
