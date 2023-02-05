---
title: Machine types
category: HUNT Cloud
sidebarDepth: 1
description: This page list default machine types in HUNT Cloud.
---

# Machine types

You may choose to deploy machine types inside your lab that fit your scientific explorations.

[[toc]]

## Compute optimized machine types

We have default machine series optimized for computation with 2GB, 4GB or 8GB for memory per vCPU respectively.

### B-series

| **Type**   | **vCPU** | **Memory (GB)** |
| ---------- | -------- | --------------- |
| default.b1 | 2        | 4               |
| default.b2 | 4        | 8               |
| default.b3 | 8        | 16              |
| default.b4 | 16       | 32              |
| default.b5 | 32       | 64              |
| default.b6 | 48       | 96              |

### C-series

| **Type**   | **vCPU** | **Memory (GB)** |
| ---------- | -------- | --------------- |
| default.c1 | 2        | 8               |
| default.c2 | 4        | 16              |
| default.c3 | 8        | 32              |
| default.c4 | 16       | 64              |
| default.c5 | 32       | 128             |
| default.c6 | 48       | 196             |

### D-series

| **Type**   | **vCPU** | **Memory (GB)** |
| ---------- | -------- | --------------- |
| default.d1 | 2        | 16              |
| default.d2 | 4        | 32              |
| default.d3 | 8        | 64              |
| default.d4 | 16       | 128             |
| default.d5 | 24       | 194             |

## GPU accelerator machine types

All the above machine types may be deployed with _1_ or _2_ of the following GPU accelerators if available:

| **Type** | **Model** | **Architecture** | **Memory** | **Interface**  |
| ------------ | ----------- | ------------ | --------- | ---------- |
| nvidia.p100 | Tesla P100  | Pascal       | 16GB HBM2 | PCIe Gen3  |
| nvidia.v100 | Tesla V100  | Volta        | 32GB HBM2 | PCIe Gen3  |
| nvidia.v100s | Tesla V100S | Volta        | 32GB HBM2 | PCIe Gen3  |

Manufacturer = NVIDIA. See the [GPU on HUNT Cloud](/do-science/tools/technical/gpu/) documentation for more information.

## Custom machine types

Not finding the type of your choice? Please [contact us](/contact) so we can tailor machine types for your need (within our limitations of available memory and vCPUs).
