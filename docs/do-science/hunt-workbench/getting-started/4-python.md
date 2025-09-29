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

Below is an example on how you create a Conda environment with _Python_ and _IPython_ kernel from your [workbench terminal](/do-science/hunt-workbench/faq#terminal)::

```bash
# -- Principal example 
mamba create -n <name> 'python==3.12.*' 'ipykernel' 'pip' 'ipywidgets>=8.0.2,<9.0.0'

# -- Demo example
mamba create -n py312env 'python~=3.12.*' 'ipykernel' 'pip' 'ipywidgets>=8.0.2,<9.0.0'
```
