---
title: FAQ
category: Workbench
permalink: /working-in-your-lab/workbench/faq
sidebarDepth: 1
description: Frequently asked questions about the Workbench in HUNT Lab.
---

# FAQ on the Workbench

**This page contain frequently asked questions on your Workbench in your lab. Help us expand this section by sending us your questions and burning topics.**

[[toc]]

## Storage

### Where do I find my data?

Workbench uses same storages volumes as your home machine. You can also access your home directory.
You should be able to access the same paths as on home node.

### Where is my code stored?

Jupyter Notebooks and code are stored in the shared volume:

```
/mnt/work/workbench
```

## Reproducibility

### How can I start a Notebook with a Conda environment?

Here is an example of Notebooks that are connected to Conda environments.

![wb_notebook_envs.png](./images/wb_notebook_envs.png)

### How do I change the Conda environment for my Notebook?

You can also change Conda environment of your Jupyter Notebook later, by switching the kernel:

![wb_notebook_kernel.png](./images/wb_notebook_kernel.png)

You will be able to select default environments including MATLAB kernel and custom environments which contain either `ipykernel` (Python) or `r-irkernel` (R 4.0):

![wb_notebook_conda_env.png](./images/wb_notebook_conda_env.png)

### How can I create my own Conda environment for Jupyter?

Creating Conda environment with Python and IPython kernel:

```
conda create -n <name> 'python==3.8' 'ipykernel'
```

Creating Conda environment with R and R-IRkernel kernel:

```
conda create -n <name> 'r-base>=4.0,<4.1' 'r-irkernel' 'r-devtools'
```

## Management

### How can I scrape my server and start from scratch?

Select control panel in top right corner:

![wb_topbar_cp.png](./images/wb_topbar_cp.png)

Then in the control panel hit stop server:

![wb_cp_stopserver.png](./images/wb_cp_stopserver.png)

You can either start the new instance by hitting the button or by logging in again.

### Can I install Jupyter extensions?

Currently this is not allowed and Jupyter extension manager is disabled. Feel free to reach out to us on Slack
and we can discuss adding useful extensions into your Workbench.

## MATLAB

### How do I report issues with MATLAB?

Try to collect the error logs from Status information window.
Additionally you could also help by taking a screenshot of error logs in browser console.
Usually you can open the console with a shortcut: `CTRL + SHIFT + J` (MacOS: `CMD + Option + J`), but this can vary between browsers. Share these logs with us on slack, or feel free to [contact us on email](https://docs.hdc.ntnu.no/contact/).
