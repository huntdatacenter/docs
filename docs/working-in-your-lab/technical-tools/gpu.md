---
title: GPU
category: Technical tools
permalink: /working-in-your-lab/technical-tools/gpu
sidebarDepth: 1
description:  We offer GPU optimized machine types in our IaaS tier allowing you to run the workloads of your choice via PCI passthrough.
---

# GPU on HUNT Cloud

We offer GPU optimized machine types in our IaaS tier allowing you to run the workloads of your choice via PCI passthrough.

## Hardware

- Manufacturer: NVIDIA
- Model: Tesla P100
- Architecture: Pascal
- Memory: 16GB CoWoS HBM2 with ECC
- Interface: PCIe 3.0

## Software

To get you started, we deploy the GPU machines with the following packages:

- Ubuntu 18.04 LTS
- Docker
- NVIDIA Container Runtime for Docker (nvidia-docker)
- NVIDIA 410 Drivers

When that is said, you are free to change and install any other tools you need to get your analysis flying.

## How to use

Run the following command to call the NVIDIA System Management Interface (nvidia-smi) to verify that things are working as intended:

```bash
sudo docker run --runtime=nvidia --rm nvidia/cuda nvidia-smi
```

## More info

Please see the nvidia-docker [wiki](https://github.com/NVIDIA/nvidia-docker/wiki) for more details.
