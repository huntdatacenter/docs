---
title: CUDA 13.2
category: CUDA
outline: 2
permalink: /do-science/tools/technical/cuda/cuda-13.2
description: Installing Nvidia CUDA toolkit and cuDNN on GPU machines.
---

# CUDA installation

::: tip

You don’t need to use `sudo` to install **[CUDA Toolkit](https://docs.nvidia.com/cuda/doc/index.html)** and **[cuDNN](https://docs.nvidia.com/cudnn/index.html)**.

:::

## CUDA 13.2

In this example we will use `${HOME}/cuda-13.2.0` as our installation path.

```bash
cd "${HOME}"
```

<!-- https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=24.04&target_type=runfile_local -->

Download CUDA runfile installer:

```bash
wget https://developer.download.nvidia.com/compute/cuda/13.2.0/local_installers/cuda_13.2.0_595.45.04_linux.run
```

Update permissions:

```bash
chmod +x ./cuda_13.2.0_595.45.04_linux.run
```

Start the runfile installation (takes a few quiet minutes):

```bash
./cuda_13.2.0_595.45.04_linux.run \
  --silent \
  --toolkit \
  --installpath=${HOME}/cuda-13.2.0 \
  --no-opengl-libs \
  --no-drm \
  --no-man-page && echo Success || echo Fail
```

Cleanup installation files:

```bash
rm -v cuda_13.2.0_595.45.04_linux.run
```

## Install cuDNN for CUDA 13.2

Download [cuDNN](https://docs.nvidia.com/cudnn/index.html) package:

<!-- https://developer.download.nvidia.com/compute/cudnn/redist/cudnn/linux-x86_64/ -->

```bash
wget https://developer.download.nvidia.com/compute/cudnn/redist/cudnn/linux-x86_64/cudnn-linux-x86_64-9.20.0.48_cuda13-archive.tar.xz
```

Extract the cuDNN package into our cuda installation:

```bash
tar -xvf cudnn-linux-x86_64-9.20.0.48_cuda13-archive.tar.xz --strip-components=1 -C ${HOME}/cuda-13.2.0 && echo Success || echo Fail
```

After extraction, remove the package:

```bash
rm -v cudnn-linux-x86_64-9.20.0.48_cuda13-archive.tar.xz
```

## Create activation script for CUDA 13.2

::: tip

In the activation script have used the CUDA installation directory from our example above (`${HOME}/cuda-13.2.0`)

:::

Create activation script by running the code below:

```bash
cat <<\EOF > ~/activate-cuda-13.2.0.sh

export CUDA_HOME=${HOME}/cuda-13.2.0

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

## Set environment variables for CUDA 13.2

From now one you can easily load your cuda variables by sourcing activation script:

```bash
source ~/activate-cuda-13.2.0.sh
```

## Test commands

Run test commands to confirm that your installation was successful:

```bash
which nvcc

nvcc --version
```

The expected output:

```text
/home/ubuntu/cuda-13.2.0/bin/nvcc

nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2026 NVIDIA Corporation
Built on Mon_Mar_02_09:52:23_PM_PST_2026
Cuda compilation tools, release 13.2, V13.2.51
Build cuda_13.2.r13.2/compiler.37434383_0
```
