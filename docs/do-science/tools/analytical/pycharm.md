---
title: PyCharm
category: Analytical tools
permalink: /do-science/tools/analytical/pycharm
sidebarDepth: 2
description: Installation guide for PyCharm (unmanaged machine).
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
