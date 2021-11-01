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

## Conda

### How can I scrape my server and start from scratch?

Select control panel in top right corner:

![wb_topbar_cp.png](./images/wb_topbar_cp.png)

Then in the control panel hit stop server:

![wb_cp_stopserver.png](./images/wb_cp_stopserver.png)

You can either start the new instance by hitting the button or by logging in again.

### How can I start a Notebook with a Conda environment?

Here is an example of Notebooks that are connected to Conda environments.

![wb_notebook_envs.png](./images/wb_notebook_envs.png)

### How do I change the Conda environment for my Notebook?

You can also change Conda environment of your Jupyter Notebook later, by switching the kernel:

![wb_notebook_kernel.png](./images/wb_notebook_kernel.png)

You will be able to select default environments including MATLAB kernel and custom environments which contain either `ipykernel` (Python) or `r-irkernel` (R 4.0):

![wb_notebook_conda_env.png](./images/wb_notebook_conda_env.png)

### How to report issues with MATLAB?

Try to collect the error logs from Status information window.
Additionally you could also help by taking a screenshot of error logs in browser console.
Usually you can open the console with a shortcut: `CTRL + SHIFT + J` (MacOS: `CMD + Option + J`), but this can vary between browsers.

Share these logs with us on slack, or feel free to [contact us on email](https://docs.hdc.ntnu.no/contact/).
