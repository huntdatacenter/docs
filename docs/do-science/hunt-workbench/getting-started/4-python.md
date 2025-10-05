---
title: Python
category: Getting started
outline: 0
permalink: /do-science/hunt-workbench/getting-started/4-python
description: How to use Python
---

# Python

<!--

- How to recreate py310 environment
- Which packages are preinstalled in py310 environment

 -->

## Create Python environment

Below is an example on how you create a Conda environment with _Python_ and _IPython_ kernel from your [workbench terminal](/do-science/hunt-workbench/faq#terminal):

Principal example:
```text
mamba create -n <name> 'python==3.12.*' 'ipykernel' 'pip' 'ipywidgets>=8.1.7,<9.0.0' 'matplotlib' 'pandas'
```

Demo example:
```bash
mamba create -n py312 'python==3.12.*' 'ipykernel' 'pip' 'ipywidgets>=8.1.7,<9.0.0' 'matplotlib' 'pandas'
```
