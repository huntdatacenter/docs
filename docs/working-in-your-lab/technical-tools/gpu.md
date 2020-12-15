---
title: GPU
category: Technical tools
permalink: /working-in-your-lab/technical-tools/gpu
sidebarDepth: 1
description: We offer GPU machine types in our IaaS tier allowing you to run the AI/ML workloads of your choice.
---

# GPU on HUNT Cloud

We offer GPU machine types in our IaaS tier allowing you to run the AI/ML workloads of your choice.

## GPU specification

- Manufacturer: NVIDIA
- Model: Tesla P100
- Architecture: Pascal
- Memory: 16GB CoWoS HBM2 with ECC
- Interface: PCIe 3.0

## Software

To get you started, the GPU machines come pre-installed with the software below. If you need to install any other tools or versions you can do this as well.

- Ubuntu 18.04 LTS
- Docker
- NVIDIA 450 drivers (from the [`graphics-drivers` repository](https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa?field.series_filter=bionic))
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

## More info

* [NVIDIA Container Toolkit documentation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/overview.html) for more details on how to easily use and run containers.
* [NVIDIA GPU Cloud catalog](https://ngc.nvidia.com/catalog/containers/nvidia:cuda) for an overview of CUDA containers from NVIDIA.
