---
title: CUDA 12.8
category: CUDA
sidebarDepth: 1
permalink: /do-science/tools/technical/cuda/cuda-12.8
description: Installing Nvidia CUDA toolkit and cuDNN on GPU machines.
---

# CUDA installation

::: tip

You don’t need to use `sudo` to install **[CUDA Toolkit](https://docs.nvidia.com/cuda/doc/index.html)** and **[cuDNN](https://docs.nvidia.com/cudnn/index.html)**.

:::

## CUDA 12.8

In this example we will use `${HOME}/cuda-12.8.1` as our installation path.

```bash
cd "${HOME}"
```

Download CUDA runfile installer:

```bash
wget https://developer.download.nvidia.com/compute/cuda/12.8.1/local_installers/cuda_12.8.1_570.124.06_linux.run
```

Update permissions:

```bash
chmod +x ./cuda_12.8.1_570.124.06_linux.run
```

Start the runfile installation (takes a few quiet minutes):

```bash
./cuda_12.8.1_570.124.06_linux.run \
  --silent \
  --toolkit \
  --installpath=${HOME}/cuda-12.8.1 \
  --no-opengl-libs \
  --no-drm \
  --no-man-page && echo Success || echo Fail
```

Cleanup installation files:

```bash
rm -v cuda_12.8.1_570.124.06_linux.run
```

## Install cuDNN for CUDA 12.8

Download [cuDNN](https://docs.nvidia.com/cudnn/index.html) package:

<!-- https://developer.download.nvidia.com/compute/cudnn/redist/cudnn/linux-x86_64/ -->

```bash
wget https://developer.download.nvidia.com/compute/cudnn/redist/cudnn/linux-x86_64/cudnn-linux-x86_64-9.9.0.52_cuda12-archive.tar.xz
```

Extract the cuDNN package into our cuda installation:

```bash
tar -xvf cudnn-linux-x86_64-9.9.0.52_cuda12-archive.tar.xz --strip-components=1 -C ${HOME}/cuda-12.8.1 && echo Success || echo Fail
```

After extraction, remove the package:

```bash
rm -v cudnn-linux-x86_64-9.9.0.52_cuda12-archive.tar.xz
```

## Create activation script for CUDA 12.8

::: tip

In the activation script have used the CUDA installation directory from our example above (`${HOME}/cuda-12.8.1`)

:::

Create activation script by running the code below:

```bash
cat <<\EOF > ~/activate-cuda-12.8.sh

export CUDA_HOME=${HOME}/cuda-12.8.1

export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=$CUDA_HOME/extras/CUPTI/lib64:$LD_LIBRARY_PATH
export CUDAToolkit_ROOT_DIR=$CUDA_HOME
export CUDAToolkit_ROOT=$CUDA_HOME

export CUDA_TOOLKIT_ROOT_DIR=$CUDA_HOME
export CUDA_TOOLKIT_ROOT=$CUDA_HOME
export CUDA_BIN_PATH=$CUDA_HOME
export CUDA_PATH=$CUDA_HOME
export CUDA_INC_PATH=$CUDA_HOME/targets/x86_64-linux
export CFLAGS=-I$CUDA_HOME/targets/x86_64-linux/include:$CFLAGS
export CUDAToolkit_TARGET_DIR=$CUDA_HOME/targets/x86_64-linux

EOF

```

## Set environment variables for CUDA 12.8

From now one you can easily load your cuda variables by sourcing activation script:

```bash
source ~/activate-cuda-12.8.sh
```

## Test commands

Run test commands to confirm that your installation was successful:

```bash
which nvcc

nvcc --version
```

The expected output:
```
/home/ubuntu/cuda-12.8.1/bin/nvcc

nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2024 NVIDIA Corporation
Built on Tue_Feb_27_16:19:38_PST_2024
Cuda compilation tools, release 12.8, V12.8.99
Build cuda_12.8.r12.8/compiler.33961263_0
```
