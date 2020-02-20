---
title: Compute
permalink: /troubleshooting/compute
sidebarDepth: 1
---

# Troubleshooting machine issues

[[toc]]

## Software

### Software installation

You will need to use the `sudo` command when you [install software](/faq/compute/#software). If forgotten, apt will return an error message like this:

```
E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
```

Rerun your command with sudo. [Contact us](/contact) if this doesn't solve your issue.
