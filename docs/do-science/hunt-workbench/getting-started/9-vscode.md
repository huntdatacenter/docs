---
title: Visual Studio Code (Workbench)
category: Getting started
outline: 0
permalink: /do-science/hunt-workbench/getting-started/vscode
description: How to use VS Code
tags:
  - vscode
  - visual
  - studio
  - code
---

<!--

TODO

1. Creating Jupyter nootebook in VS Code
2. How to select python kernel from same conda installation as is used by Jupyterlab (use example kernel that we install on user setup: py310)
3. How to run code in cells
3. To explain how to create environment - Refer to python section in this getting-started guide where that is already written up
4. Try and add a section on R if possible to run R code with R kernel (e.g. if selecting r-base environment)

-->

# Visual Studio Code

### Creating Jupyter Notebook in VS Code
To create a Jupyter notebook in Visual Studio Code:
- Open VS Code via button found in your Workbench (It might load for a few minutes when you open the first time)
- Click on the "View" menu, you will find it by clicking the button that show three lines on the left side of the screen, then press "Command Palette".
- Type "Jupyter: Create New Blank Notebook" and hit Enter.
- A new untitled notebook will be created where you can start writing your code.

### Creating Python Conda environment
To create a basic python Conda environment, follow this [link](/do-science/hunt-workbench/getting-started/python/) for further instructions. 

### Selecting Python Kernel from Conda Installation
To select a Python kernel from the same Conda installation as used by JupyterLab:
- Open the notebook you created.
- At the top right corner, click on the kernel dropdown menu.
- Choose the kernel corresponding to the Conda environment you want to use (e.g., `py310`).

### Running Code in Cells
To run code in cells:
- Simply click on the cell you want to run.
- Press `Shift+Enter`, or click the "Run" button in the cell toolbar.
- The code in the cell will execute, and the output (if any) will be displayed below the cell.


### Running R Code with R Kernel
To run R code with an R kernel. Basic R env is offered as default in your Workbench. For more detailed setup, follow this [link](/do-science/hunt-workbench/getting-started/rstudio/#how-to-create-r-environment)
- Open a new or existing notebook.
- Choose the R kernel from the kernel dropdown menu.
- You can now write and execute R code in the notebook.
