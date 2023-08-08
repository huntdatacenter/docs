---
title: JupyterLab
category: Getting started
sidebarDepth: 0
permalink: /do-science/hunt-workbench/getting-started/jupyterlab
description: How to use JupyterLab and Jupyter notebooks
---

# JupyterLab

> [JupyterLab](https://jupyter.org/) is the latest web-based interactive development environment for notebooks, code, and data. Its flexible interface allows users to configure and arrange workflows in data science, scientific computing, computational journalism, and machine learning.

Here we try to summarize basics of what you should know when starting with Jupyter.

We recommend official JupyterLab guides to get familiar with the interface:
- [The JupyterLab Interface](https://jupyterlab.readthedocs.io/en/latest/user/interface.html)
- [Working with Files](https://jupyterlab.readthedocs.io/en/latest/user/files.html)
- [Notebooks](https://jupyterlab.readthedocs.io/en/latest/user/notebook.html)

> Jupyter notebooks are documents that combine live runnable code with narrative text (Markdown), equations (LaTeX), images, interactive visualizations and other rich output.

![notebook_ui.png](./images/notebook-ui.png)

## Working with Notebooks

You can find useful explanations and video guides in official documentation:

- [Notebooks](https://jupyterlab.readthedocs.io/en/latest/user/notebook.html)
- [Code consoles](https://jupyterlab.readthedocs.io/en/latest/user/code_console.html)
- [Terminals](https://jupyterlab.readthedocs.io/en/latest/user/terminal.html)
- [Documents and kernels](https://jupyterlab.readthedocs.io/en/latest/user/documents_kernels.html)
- [Text editor](https://jupyterlab.readthedocs.io/en/latest/user/file_editor.html)

## Working with lab mates

Typically your lab has more users and you all are sharing [compute](https://docs.hdc.ntnu.no/do-science/faq/compute/) and [storage resources](/do-science/faq/storage/). 
For this to work efficiently you will need to know how to check your resource usage and free up resources if needed.

### Monitoring resources

One way to monitor resources is using Glances. We have included [Glances proxy extension](https://github.com/huntdatacenter/jupyter-glances-proxy) in Jupyterlab installation.

You can also you Terminal app inside your Workbench and run standard commands like [Htop](https://docs.hdc.ntnu.no/do-science/tools/technical/htop/) and [others](/do-science/faq/compute/#can-i-monitor-my-resource-consumption)

For checking storage capacity and how much data are written on disk have a look at [df -h --type=ext4](/do-science/faq/storage/#resources) and [ncdu](/do-science/tools/technical/ncdu/).

### Managing resources

Read more in the official JupyterLab guide about [Managing Kernels and Terminals](https://jupyterlab.readthedocs.io/en/latest/user/running.html) to find out about Kernels in Jupyterlab and how you can stop them to free up RAM (operational memory) once you do not use them.

### Long running notebooks

If your Jupyter Notebook takes too long to execute (more than VPN session), you should consider running it from terminal. You will also need to use [terminal multiplexers](https://docs.hdc.ntnu.no/do-science/tools/technical/terminal-multiplexers/#tmux) to assure that you can always reconnect to your session.

Activate your conda environment first:

```
conda activate py310
```

Then run your notebook:

```
jupyter run your_notebook.ipynb
```
