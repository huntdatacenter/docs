---
title: Principles
category: Workbench
permalink: /working-in-your-lab/workbench/principles
sidebarDepth: 1
description: Principles of Workbench use.
---

# Principles

Workbench aims to improve your day to day work experience with Python, MATLAB, and R code.
To achieve that we included MATLAB and RStudio development environments as you know them from before,
and also Jupyter Notebooks with various kernels.

<!-- see main page for licensing -->

## Safe place to experiment

We are spawning your Workbench in an isolated container on your home machine. There you can easily experiment
and if something breaks, you can stop the ephemeral container and start new one in control panel.

![wb_control_panel.png](./images/wb_control_panel.png)

You should be able to access all the paths that you would expect on your home node. Workbench is preconfigured with access to data in lab volumes and your home directory. You will also get a Workbench directory:

```
/mnt/work/workbench/<username>
```

## Reproducibility

Not everything should be ephemeral and therefore you should still store data in volumes mounted from home node.
Workbench is designed for smooth work on your code as your prepare your analysis.

It setup comes with Conda package manager which is configured to store packages on work volume.
You will find Conda very helpful when it comes to Python and R packages. Conda can help you take control over your dependencies, and to avoid unwanted surprises over time, you can start with their guide to
[Manage environments](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).

## Flexibility

All your Jupyter Notebooks and code will be stored on work volume, where it can be shared with your lab
colleagues. Work volume is ideal place if you want your things to be backed up.
You can use this setup to your advantage, but you will also be able to override this at your own risk.

You will get a set of default Conda environments for Python (py38) and R (r-base). You can use those in your Jupyter notebooks. It is easy to expand on them or create your own using the Terminal tool.
