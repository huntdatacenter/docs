---
title: Julia
category: Getting started
sidebarDepth: 0
permalink: /do-science/hunt-workbench/getting-started/julia
description: How to use Julia
---

# Julia

Julia is not part of our standard setup, but it takes only a few steps to add.

1. Start by creating a Conda environment named Julia with Julia package installed:

```
mamba create -n julia -c conda-forge -y julia
```

2. When you environment is created, you can activate it:

```
conda activate julia
```

3. Then start Julia repl:

```
julia
```

4. Install Julia kernel for Jupyter notebooks:

```
using Pkg
Pkg.add("IJulia")
```

5. Reload you Workbench environment and Julia icons should appear.
