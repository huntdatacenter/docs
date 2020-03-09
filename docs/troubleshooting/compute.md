---
title: Compute
permalink: /troubleshooting/compute
sidebarDepth: 1
---

# Troubleshooting machine issues

[[toc]]


## Software installation

### Permission denied

You will need to use the **`sudo`** command when you [install software](/faq/compute/#software) with the **`sudo apt install <package>`** command. If forgotten, apt will return an error message like this:

```
E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
```

Rerun your command with sudo. [Contact us](/contact) if this doesn't solve your issue.

## Third-party software

### Matlab 

See our [Matlab troubleshooting section](/working-in-your-lab/analytical-tools/Matlab/#activate-license).

### Stata

See our [Stata troubleshooting section](/working-in-your-lab/analytical-tools/stata/#troubleshooting).



