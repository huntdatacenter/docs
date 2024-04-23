---
title: Machine types
category: Services
sidebarDepth: 1
permalink: /administer-science/services/machine-types
description: This page list default machine types in HUNT Cloud.
---

# Machine types

**You can deploy the following machine types inside your lab that fit your scientific explorations.**

[[toc]]

::: tip Pending activation

Machine types marked with a star (`*`) in the tables below are available in location 2. 

:::

## Compute optimized machine types

These machines are optimized for computation with 2 GB, 4 GB, 8 GB or 16 GB of memory per vCPU respectively.

### B-series

2 GB of memory per vCPU. 

| **Type**    | **vCPU** | **Memory (GB)** |
| ----------- | -------- | --------------- |
| default.b1  | 2        | 4               |
| default.b2  | 4        | 8               |
| default.b3  | 8        | 16              |
| default.b4  | 16       | 32              |
| default.b5  | 32       | 64              |
| default.b6  | 48       | 96              |
| default.b7* | 64       | 128             |
| default.b8* | 80       | 160             |

### C-series

4 GB of memory per vCPU. 

| **Type**    | **vCPU** | **Memory (GB)** |
| ----------  | -------- | --------------- |
| default.c1  | 2        | 8               |
| default.c2  | 4        | 16              |
| default.c3  | 8        | 32              |
| default.c4  | 16       | 64              |
| default.c5  | 32       | 128             |
| default.c6  | 48       | 192             |
| default.c7* | 64       | 256             |
| default.c8* | 80       | 320             |


### D-series

8 GB of memory per vCPU. 

| **Type**    | **vCPU** | **Memory (GB)** |
| ----------- | -------- | --------------- |
| default.d1  | 2        | 16              |
| default.d2  | 4        | 32              |
| default.d3  | 8        | 64              |
| default.d4  | 16       | 128             |
| default.d5  | 24       | 192             |
| default.d6* | 48       | 384             |
| default.d7* | 64       | 512             |
| default.d8* | 80       | 640             |


### E-series

16 GB of memory per vCPU. 

| **Type**    | **vCPU** | **Memory (GB)** |
| ----------- | -------- | --------------- |
| default.e1  | 2        | 32              |
| default.e2  | 4        | 64              |
| default.e3  | 8        | 128             |
| default.e4  | 16       | 256             |
| default.e5* | 24       | 384             |
| default.e6* | 32       | 512             |
| default.e7* | 48       | 768             |

## GPU accelerator types

All the above machine types may be deployed with one or two GPU accelerators:

| **Type** | **Model** | **Architecture** | **Memory** | **Interface**  |
| ------------ | ----------- | ------------ | --------- | ---------- |
| nvidia.p100  | NVIDIA P100  | Pascal       | 16GB HBM2 | PCIe Gen3  |
| nvidia.v100  | NVIDIA  V100  | Volta        | 32GB HBM2 | PCIe Gen3  |
| nvidia.v100s | NVIDIA  V100S | Volta        | 32GB HBM2 | PCIe Gen3  |
| nvidia.a30*  | NVIDIA  A30  | Ampere       | 24GB HBM2 | PCIe Gen3  |
| nvidia.a40*  | NVIDIA  A40  | Ampere       | 48GB HBM2 | PCIe Gen3  |
| nvidia.a100* | NVIDIA  A100 | Ampere        | 40GB HBM2 | PCIe Gen3  |
| nvidia.a100* | NVIDIA  A100 | Ampere       | 80GB HBM2 | PCIe Gen3  |

Note that availability vary between locations. See the [GPU on HUNT Cloud](/do-science/tools/technical/gpu/) documentation for more information. 

## Custom machine types

Not finding the type of your choice? Please [contact us](/contact) so we can tailor machine types for your need (within our limitations of available memory and vCPUs).
