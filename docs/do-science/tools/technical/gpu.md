---
title: GPU
category: Technical tools
sidebarDepth: 1
permalink: /do-science/tools/technical/gpu
description: HUNT Cloud offers GPU machines for your AI/ML workloads.
---

# GPU on HUNT Cloud

**You can add GPU cards to your On-demand and BLUE machine for your AI/ML workloads.**

[[toc]]



## GPU Models

See our [GPU accelerator machine types](/administer-science/services/machine-types/#gpu-accelerator-machine-types) for more details on the specific GPU models we offer.


## Software

We pre-install the machines with with the folloing software to get you started: 

- Ubuntu 22.04 LTS
- Docker
- NVIDIA 510 drivers or later (from the [`graphics-drivers` repository](https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa?field.series_filter=jammy))
- NVIDIA Container Toolkit (also known as **`nvidia-docker`**)

You may install other tools and versions.

## How to order

You can order your GPU machines in our [administer science service desk](/administer-science/service-desk/lab-orders/#new-gpu-machine).

## How to use

Log into your GPU lab machine and run the following command to call the NVIDIA System Management Interface (**`nvidia-smi`**) to manage and verify that things are working:

```bash
nvidia-smi
```

### Specify CUDA version

If you wish to use a specific version of CUDA, we recommend that you use the NVIDIA Container Toolkit to run a container of your choosing. Here is an example for CUDA version **`12.0`**:

```bash
sudo docker run --rm --runtime=nvidia nvidia/cuda:12.0.0-base-ubuntu22.04 nvidia-smi
```

More versions of CUDA base image can be found in [Docker Hub](https://hub.docker.com/r/nvidia/cuda/tags?page=1&name=base-ubuntu22.04).

### Jupyter in Nvidia Docker

If you want to use Jupyterlab on your GPU machine we recommend the [iot-salzburg/gpu-jupyter](https://github.com/iot-salzburg/gpu-jupyter) docker image.

This project uses the NVIDIA CUDA image as the base image and installs their toolstack on top of it to enable GPU calculations in the Jupyter notebooks. Python packages Tensorflow and Pytorch are preinstalled to match the Cuda version (GPU drivers).

```bash
docker pull cschranz/gpu-jupyter:v1.4_cuda-11.6_ubuntu-20.04_python-only

docker run --rm -d --runtime=nvidia -v ${HOME}:${HOME} --workdir ${HOME} -e HOME=${HOME} -e GRANT_SUDO=yes -e JUPYTER_ENABLE_LAB=yes -p 8888:8888 --user root --name gpu-jupyter cschranz/gpu-jupyter:v1.4_cuda-11.6_ubuntu-20.04_python-only

docker ps
```

The commands above starts an instance of GPU-Jupyter with the tag **`v1.4_cuda-11.6_ubuntu-20.04_python-only`** at **`http://localhost:8888`** (port _8888_). The default password is **`gpu-jupyter`**.

It is also possible to start an interactive bash session and run scripts inside:

```bash
docker run --rm --runtime=nvidia -v ${HOME}:${HOME} --workdir ${HOME} -e HOME=${HOME} -v /etc/passwd:/etc/passwd -v /etc/group:/etc/group --user "1000" --entrypoint bash -ti cschranz/gpu-jupyter:v1.4_cuda-11.6_ubuntu-20.04_python-only
```

More details about this docker image can be found on [docker hub](https://hub.docker.com/r/cschranz/gpu-jupyter).

## More info

- [NVIDIA Drivers overview](https://docs.nvidia.com/datacenter/tesla/drivers/index.html) for an overview of drivers for NVIDIA GPUs.
- [NVIDIA Container Toolkit documentation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/overview.html) for more details on how to easily use and run containers.
- [NVIDIA GPU Cloud catalog](https://ngc.nvidia.com/catalog/containers/nvidia:cuda) for an overview of CUDA containers from NVIDIA.
