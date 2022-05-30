---
title: GPU
category: Technical tools
permalink: /working-in-your-lab/technical-tools/gpu
sidebarDepth: 1
description: We offer GPU machine types in our IaaS tier allowing you to run the AI/ML workloads of your choice.
---

# GPU on HUNT Cloud

We offer GPU machine types in our IaaS tier allowing you to run the AI/ML workloads of your choice.

See [GPU specification](/services/machine-types/#gpu-accelerator-machine-types) for more details on the specific GPU models we offer.

## Software

To get you started, the GPU machines come pre-installed with the software below. If you need to install any other tools or versions you can do this as well.

- Ubuntu 20.04 LTS
- Docker
- NVIDIA 470 drivers or later (from the [`graphics-drivers` repository](https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa?field.series_filter=focal))
- NVIDIA Container Toolkit (also known as `nvidia-docker`)

## How to use

Run the following command to call the NVIDIA System Management Interface (`nvidia-smi`) to manage and verify that things are working:

```bash
nvidia-smi
```

If you wish to use a specific version of CUDA, you can either install it manually or use the NVIDIA Container Toolkit to run a container of your choosing. Here is an example for CUDA version `11.0`:

```bash
sudo docker run --rm --runtime=nvidia nvidia/cuda:11.0-base nvidia-smi
```

### Jupyter in Nvidia Docker

If you want to use Jupyterlab on GPU machine we recommend [iot-salzburg/gpu-jupyter](https://github.com/iot-salzburg/gpu-jupyter) docker image. This project uses the NVIDIA CUDA image as the base image and installs their toolstack on top of it to enable GPU calculations in the Jupyter notebooks. Python packages Tensorflow and Pytorch are preinstalled to match the Cuda version (GPU drivers).

```bash
docker pull cschranz/gpu-jupyter:v1.4_cuda-11.2_ubuntu-20.04

docker run --rm -d --runtime=nvidia -v ${HOME}:${HOME} --workdir ${HOME} -e HOME=${HOME} -e GRANT_SUDO=yes -e JUPYTER_ENABLE_LAB=yes -p 8888:8888 --user root --name gpu-jupyter cschranz/gpu-jupyter:v1.4_cuda-11.2_ubuntu-20.04

docker ps
```

This starts an instance of GPU-Jupyter with the tag `v1.4_cuda-11.2_ubuntu-20.04` at `http://localhost:8888` (port _8888_). The default password is `gpu-jupyter`.

More details about docker image can also be found on [docker hub](https://hub.docker.com/r/cschranz/gpu-jupyter).

## More info

- [NVIDIA Drivers overview](https://docs.nvidia.com/datacenter/tesla/drivers/index.html) for an overview of drivers for NVIDIA GPUs.
- [NVIDIA Container Toolkit documentation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/overview.html) for more details on how to easily use and run containers.
- [NVIDIA GPU Cloud catalog](https://ngc.nvidia.com/catalog/containers/nvidia:cuda) for an overview of CUDA containers from NVIDIA.
