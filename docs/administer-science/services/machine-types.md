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

Machine types marked with a star (`*`) in the tables below are expected to be avilable during 2023-Q2. 

:::

## Compute optimized machine types

These machines are optimized for computation with 2GB, 4GB or 8GB for memory per vCPU respectively.

### B-series

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

| **Type**    | **vCPU** | **Memory (GB)** |
| ----------  | -------- | --------------- |
| default.c1  | 2        | 8               |
| default.c2  | 4        | 16              |
| default.c3  | 8        | 32              |
| default.c4  | 16       | 64              |
| default.c5  | 32       | 128             |
| default.c6  | 48       | 196             |
| default.c7* | 64       | 256             |
| default.c8* | 80       | 320             |


### D-series

| **Type**    | **vCPU** | **Memory (GB)** |
| ----------- | -------- | --------------- |
| default.d1  | 2        | 16              |
| default.d2  | 4        | 32              |
| default.d3  | 8        | 64              |
| default.d4  | 16       | 128             |
| default.d5  | 24       | 194             |
| default.d6* | 48       | 384             |
| default.d7* | 64       | 512             |
| default.d8* | 80       | 640             |


## GPU accelerator machine types

All the above machine types may be deployed with _1_ or _2_ of the following GPU accelerators if available:

| **Type** | **Model** | **Architecture** | **Memory** | **Interface**  |
| ------------ | ----------- | ------------ | --------- | ---------- |
| nvidia.p100  | Tesla P100  | Pascal       | 16GB HBM2 | PCIe Gen3  |
| nvidia.a30*  | Tesla A30  | Pascal       | 24GB HBM2 | PCIe Gen3  |
| nvidia.v100  | Tesla V100  | Volta        | 32GB HBM2 | PCIe Gen3  |
| nvidia.v100s | Tesla V100S | Volta        | 32GB HBM2 | PCIe Gen3  |
| nvidia.a100* | Tesla A40 | Volta        | 40GB HBM2 | PCIe Gen3  |
| nvidia.a100* | Tesla A80 | Volta        | 80GB HBM2 | PCIe Gen3  |

Manufacturer = NVIDIA. See the [GPU on HUNT Cloud](/do-science/tools/technical/gpu/) documentation for more information.

## Custom machine types

Not finding the type of your choice? Please [contact us](/contact) so we can tailor machine types for your need (within our limitations of available memory and vCPUs).
