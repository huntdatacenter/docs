---
title: PyCharm
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/pycharm
sidebarDepth: 2
description: Guide on installation of PyCharm on unmanaged machine.
---

# PyCharm

Pycharm is an IDE for Python developers.

::: warning Requirements

Administrator privileges
:::


Installation on unmanaged machines:

```
sudo apt update
sudo apt install snapd

sudo snap install pycharm-community --classic
```

Running PyCharm with x2go:
```
/snap/bin/pycharm-community
```

You can replace `pycharm-community` with `pycharm-professional` if you have your own professional license.
