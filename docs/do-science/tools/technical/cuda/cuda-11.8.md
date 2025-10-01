---
title: CUDA 11.8
category: CUDA
outline: 2
permalink: /do-science/tools/technical/cuda/cuda-11.8
description: Installing Nvidia CUDA toolkit and cuDNN on GPU machines.
---

# Cuda installation

::: tip

You don’t need to use `sudo` to install **[CUDA Toolkit](https://docs.nvidia.com/cuda/doc/index.html)** and **[cuDNN](https://docs.nvidia.com/cudnn/index.html)**.

:::

## CUDA 11.8

In this example we will use `${HOME}/cuda-11.8.0` as our installation path.

Download CUDA runfile installer:

```bash
wget https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_520.61.05_linux.run
```

Update permissions:

```bash
chmod +x ./cuda_11.8.0_520.61.05_linux.run
```

Run the installation (takes a few quiet minutes):

```bash
./cuda_11.8.0_520.61.05_linux.run \
  --silent \
  --toolkit \
  --installpath=${HOME}/cuda-11.8.0 \
  --no-opengl-libs \
  --no-drm \
  --no-man-page && echo Success || echo Fail
```

Cleanup installation files:

```bash
rm -v cuda_11.8.0_520.61.05_linux.run
```

## Install cuDNN for CUDA 11.8

Download [cuDNN](https://docs.nvidia.com/cudnn/index.html) package:

```bash
wget https://developer.download.nvidia.com/compute/cudnn/redist/cudnn/linux-x86_64/cudnn-linux-x86_64-8.9.7.29_cuda11-archive.tar.xz
```

Extract the cuDNN package into our cuda installation:

```bash
tar -xvf cudnn-linux-x86_64-8.9.7.29_cuda11-archive.tar.xz --strip-components=1 -C ${HOME}/cuda-11.8.0 && echo Success || echo Fail
```

After extraction, remove the package:

```bash
rm -v cudnn-linux-x86_64-8.9.7.29_cuda11-archive.tar.xz
```

## Create activation script for CUDA 11.8

::: tip

In the activation script have used the CUDA installation directory from our example above (`${HOME}/cuda-11.8.0`)

:::

Create activation script by running the code below:

```bash
cat <<\EOF > ~/activate-cuda-11.8.sh

export CUDA_HOME=${HOME}/cuda-11.8.0

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

## Set environment variables for CUDA 11.8

From now one you can easily load your cuda variables by running this command:

```bash
source ~/activate-cuda-11.8.sh
```

## Test commands

Run test commands to confirm that your installation was successful:

```bash
which nvcc

nvcc --version
```

The expected output:

```
/home/ubuntu/cuda-11.8.0/bin/nvcc

nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2022 NVIDIA Corporation
Built on Wed_Sep_21_10:33:58_PDT_2022
Cuda compilation tools, release 11.8, V11.8.89
Build cuda_11.8.r11.8/compiler.31833905_0
```
