---
title: Compute
permalink: /troubleshooting/compute
sidebarDepth: 1
---

# Troubleshooting machine issues

[[toc]]

## Software installation

### Apt - permission denied

You will need to use the **`sudo`** command when you [install software](/faq/compute/#software) with the **`sudo apt install <package>`** command. If forgotten, apt will return an error message like this:

```
E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
```

Rerun your command with sudo. [Contact us](/contact) if this doesn't solve your issue.

### Stata - icons appear as question marks

There is a [known issue](https://www.statalist.org/forums/forum/general-stata-discussion/general/1460742-stata-15-1-ubuntu-linux-icons-not-appearing) in Stata for Linux that may render icons as question marks. We have implemented work arounds that should mitigate this issues for installations that we support. [Contact us](/contact) if you experience this so we can have a look and update your configuration.
