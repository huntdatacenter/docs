---
title: Stata
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/stata
sidebarDepth: 1
description: Installation guide for Stata.
---

# Stata

[Stata](https://www.stata.com/) is a ananlytical software developed by StataCorp tailored towards epidemiological analysis.

::: warning Requirement

- Access to a Stata license for the users in your lab.

:::


## Installation on home machines

[Contact us](/contact) for assistance on installations on your [home machine](/faq/compute/#machine-types) and discussions on licenses types tailored for your lab work.

::: tip NTNU license
All NTNU employees are covered by the NTNU license which allow for quick installations. Lab users that are not affiliated with NTNU will need to either bring their own license or ask their lab leader to buy a license from StataCorp.
:::

## Running Stata over X2Go

After our installation, you can access Stata over [X2Go](/working-in-your-lab/technical-tools/x2go/) with this **`Single application`** address in the X2Go configuration (or similar provided by us):

```bash
/mnt/work/software/stata16/xstata-mp
```


## Troubleshooting

### The icons appear as question marks

There is a [known issue](https://www.statalist.org/forums/filedata/fetch?id=1351289&d=1469795531&type=full) in Stata on Linux that may render icons as question marks. We have implemented work arounds that should mitigate this issues for installations that we support. [Contact us](/contact) if you still experience this so we can have a look and update your configuration.

### My file consume all of the machine memory

You might need to consider the memory consumption of Stata when you work with files close to your machine memory. [Click here](/faq/compute/#is-my-process-hitting-memory-issues) to learn how to assess if you are hitting memory issues on your machines. If so, the University of Wisconsin has written up a guide on [how to reduce Stata's memory consumption](https://www.ssc.wisc.edu/sscc/pubs/stata_memory.htm). [Contact us](/contact) for a memory upgrade if necessary.


