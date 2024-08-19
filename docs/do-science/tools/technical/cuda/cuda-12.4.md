---
title: Cuda 12.4
category: Cuda
sidebarDepth: 1
permalink: /do-science/tools/technical/cuda/cuda-12.4
description: Installing CUDA and cuDNN on GPU machines.
---

# Cuda installation

::: tip

You don’t need to use `sudo` to install **[CUDA Toolkit](https://docs.nvidia.com/cuda/doc/index.html)** and **[cuDNN](https://docs.nvidia.com/cudnn/index.html)**.

:::

## Cuda 12.4

In this example we will use `/home/ubuntu/cuda-12.4.0` as our installation path:

```bash
mkdir -v /home/ubuntu/cuda-12.4.0
```

Download CUDA installer:

```bash
wget https://developer.download.nvidia.com/compute/cuda/12.4.0/local_installers/cuda_12.4.0_550.54.14_linux.run
```

Update permissiongs:

```bash
chmod +x ./cuda_12.4.0_550.54.14_linux.run
```

Run the installation (takes a few quiet minutes):

```bash
./cuda_12.4.0_550.54.14_linux.run \
  --silent \
  --toolkit \
  --installpath=/home/ubuntu/cuda-12.4.0 \
  --no-opengl-libs \
  --no-drm \
  --no-man-page
```

Cleanup installation files:

```bash
rm -v cuda_12.4.0_550.54.14_linux.run
```

## Install cuDNN for CUDA 12.4

Download [cuDNN](https://docs.nvidia.com/cudnn/index.html) package:

```bash
wget https://developer.download.nvidia.com/compute/cudnn/redist/cudnn/linux-x86_64/cudnn-linux-x86_64-8.9.7.29_cuda12-archive.tar.xz
```

Extract the package into our cuda installation:

```bash
tar -xvf cudnn-linux-x86_64-8.9.7.29_cuda12-archive.tar.xz --strip-components=1 -C /home/ubuntu/cuda-12.4.0
```

## Create activation script for CUDA 12.4

Create activation script for setting the variables:

```bash
vim ~/activate-cuda-12.4.sh
```

Paste in the contents. We have use the cude installation directory from our example above (`/home/ubuntu/cuda-12.4.0`):
```
export CUDA_HOME=/home/ubuntu/cuda-12.4.0

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
```

Save the file.

## Set environment variables for CUDA 12.4

From now one you can easily load your cuda variables by running this command:
```bash
source ~/activate-cuda-12.4.sh
```
