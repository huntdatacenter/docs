---
title: Price examples
category: HUNT Cloud
permalink: /administer-science/prices/examples
outline: 2-3
description: This page list examples of yearly cost for selected use cases in HUNT Cloud.
---

# Price examples

**We know, the complexity of flexible cloud prices is demanding. Bare with us, because the flexibility opens opportunities. Here are a few examples to give you a pricing direction.**

[[toc]]

For the record, all prices in the examples are listed as VAT exclusive in NOK from the [price list](/administer-science/prices/pricelist). The prices are provided for guidance and may contain both errors and outdated information.

::: tip Estimate your specific cost

Head over to our [pricing estimator](/administer-science/prices/estimator) to calculate the cost for your specific scientific environment, and do not hesitate to [contact us](/contact) for assistance.

:::

## Epidemiology

This is a typical lab tailored for data analysis of structured data, such as health registries and survey data.

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ----: | ----: | ----: |
| Lab | subscription | 1 year | 9354 | 1 | 9354 |
| Compute | [default.c1](/administer-science/services/machine-types#c-series) | 1 year | 5360 | 1 | 5360 |
| Store | 1 TB regular storage | 1 year | 2844 | 1 | 2844 |
| **PER YEAR** |  | | |  | **17558** |

The above example establishes your own lab in HUNT Cloud with access to commonly used tools in HUNT Workbench. Your lab holds sufficient resources for analysis for a small team: 2 vCPUs and 8 GB of memory, and the minimum allocation of 1 TB storage. Resources can easily be upgraded as your experiments grow.



## Genomics

This is an example of a lab for larger genomics analysis, for example when you need a lab to store and analyze genomics data from several sources using a varied set of tools.

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ----: | ----: | ----: |
| Lab | subscription | 1 year | 9354 | 1 | 9354 |
| Compute | [default.b5](/administer-science/services/machine-types#b-series) | 1 year | 41462 | 1 | 41462 |
| Store | 10 TB regular storage | 1 year | 2844 | 10 | 28440 |
| **PER YEAR** |  | | |  | **79256** |

The above example establishes your own lab in HUNT Cloud, a  powerful machine fit for larger analysis (32 vCPU and 64 GB memory), and storage capacity to run both experiments and archive larger data sets (10 TB). 

The cost can be reduced by running a smaller machine size for day-to-day activities and then upgrading to larger on-demand machines in analysis intensive periods.



## Machine learning

This is an example of a machine learning lab with mixed activities that require data storage, computational power and graphical accelerators. 

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ----: | ----: | ----: |
| Lab | subscription | 1 year | 9354 | 1 | 9354 |
| Compute | [default.c1](/administer-science/services/machine-types#c-series) | 1 year | 5360 | 1 | 5360 |
| Compute | [default.c4](/administer-science/services/machine-types#c-series) | 1 year | 32986 | 1 | 32986 |
| Compute | [nvidia.l40s](/administer-science/services/machine-types#gpu-accelerator-types) | 1 year | 23425 | 1 | 23425 |
| Store | 10 TB regular storage | 1 year | 2844 | 10 | 28440 |
| Store | 2 TB speed-optimized storage | 1 year | 5524 | 2 | 11048 |
| **PER YEAR** |  | | |  | **110613** |

The above example establishes your own lab in HUNT Cloud. The compute resources are split in two machines: a smaller home machine (default.c1 with 2 vCPU and 8 GB memory) for data handling and day-to-day activities, and a larger machine (default.d3 with 8 vCPU and 64 GB memory) that has attached one enterprise GPU card (NVIDIA L40S with 48 GB memory). The lab holds 10 TB regular storage for archive and 5 TB of speed-optimized storage (NVMe) for the GPU machine. The cost may be reduced by using on-demand compute resources when GPU.


## Data archives

This is an example of a large data archive, such as a biobank or image archive that manages data for reuse. The configuration exemplifies a data archive holding 200 TB of data with 90 days of intensive data quality control per year.


| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ----: | ----: | ----: |
| Lab | subscription | 1 year | 9354 | 1 | 9354 |
| Compute | [default.c1](/administer-science/services/machine-types#c-series) | 1 year | 5360 | 1 | 5360 |
| Compute | [default.b4](/administer-science/services/machine-types#b-series) | 1 day | 52.25 | 90 | 4702 |
| Store | First 10 TB regular storage | 1 year | 2844 | 10 | 28440 |
| Store | Next 90 TB regular storage | 1 year | 2188 | 90 | 196920 |
| Store | Next 100 TB regular storage | 1 year | 1641 | 100 | 164100 |
| **PER YEAR** |  | | |  | **408876** |

The above examples gives you a lab with a home machine intended for basic data activities. On-demand compute resources is allocated for 90 days for intensive quality control activities. 

Storage above 10 TB obtains a volume discounts ending at a mean TB price of NOK 1947. The total cost may be significantly reduced by initiating a layered preservation strategies that utilizes tapes for duplicate copies.

