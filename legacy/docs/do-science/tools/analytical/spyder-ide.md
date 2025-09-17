---
title: Spyder IDE
category: Analytical tools
permalink: /do-science/tools/analytical/spyder-ide
sidebarDepth: 0
description: Installation guide for Spyder-IDE.
---

# Spyder

**[Spyder](https://www.spyder-ide.org/) is a powerful scientific environment written in Python, for Python, and designed by and for scientists, engineers and data analysts.**

Spyder offers a unique combination of the advanced editing, analysis, debugging, and profiling functionality of a comprehensive development tool with the data exploration, interactive execution, deep inspection, and beautiful visualization capabilities of a scientific package.

::: warning REQUIREMENT
[Miniconda installation](https://docs.conda.io/projects/conda/en/latest/user-guide/configuration/admin-multi-user-install.html)
:::

## Installation

Install spyder inside it's own conda environment:
```bash
mamba create -n spyder -c conda-forge "spyder==6.*"
```

Activate environment:
```bash
mamba activate spyder
```

Create desktop icon by running this command in your [Workbench Terminal](/do-science/hunt-workbench/faq/#can-i-use-a-terminal-from-my-workbench) to be able to see it in [Remote desktop](/do-science/hunt-workbench/getting-started/remote-desktop/):
```bash
cat <<EOF | tee ~/Desktop/Spyder.desktop
[Desktop Entry]
Version=1.0
Type=Application
Name=Spyder
Exec=$(which spyder) -w ${HOME} -p ${HOME}/spyder --no-web-widgets
Icon=/usr/local/share/icons/spyder.svg
Path=${HOME}/Desktop
EOF
```

