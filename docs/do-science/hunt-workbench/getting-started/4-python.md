---
title: Python
category: Getting started
sidebarDepth: 0
permalink: /do-science/hunt-workbench/getting-started/python
description: How to use Python
---

# Python

<!-- 

- How to recreate py310 environment
- Which packages are preinstalled in py310 environment

 -->

## Create Python environment

Below is an example on how you create a Conda environment with _Python_ and _IPython_ kernel from your [workbench terminal](/do-science/hunt-workbench/faq/#terminal)::

```bash
mamba create -n <name> 'python~=3.10.*' 'ipykernel' 'pip' 'ipywidgets>=8.0.2,<9.0.0'
```
