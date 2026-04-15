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
| Compute | [default.d3](/administer-science/services/machine-types#d-series) | 1 year | 28748 | 1 | 28748 |
| Compute | [nvidia.l40s](/administer-science/services/machine-types#gpu-accelerator-types) | 1 year | 23425 | 1 | 23425 |
| Store | 10 TB regular storage | 1 year | 2844 | 10 | 28440 |
| Store | 5 TB speed-optimized storage | 1 year | 5524 | 10 | 27625 |
| **PER YEAR** |  | | |  | **122478** |

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



<!-- 


## Lab portfolios

The following examples are aimed at larger scientific centers and organizational unites that organize several labs in their data space.

### Epidemiology center

This example is for a data space consisting of 5 labs: one is dedicated to the internal day-to-day work of the center's core team, one lab is dedicated to data storage with restricted access, and three labs are dedicated to different external collaborations in three different research projects.

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Data space | ORANGE | 1 year | 8495 | 1 | 8495 |
| Lab | | 1 year | 5785 | 5 | 28925 |
| Compute | COMMITMENT default.b3 | 1 year | 7744 | 1 | 7744 |
| Compute | COMMITMENT default.b1 | 1 year | 2904 | 1 | 2904 |
| Compute | COMMITMENT default.b2 | 1 year | 4646 | 3 | 13938 |
| Store | First 10 TB | 1 year | 2331 | 5 | 11655 |
| **PER YEAR** |  | | |  | **73661** |

This examples gives you a ORANGE data space and five lab subscriptions. The day-to-day lab has a slightly larger machine than the external labs. The storage lab holds the smallest machine type. Each lab has attached 1 TB of storage with a total consumption of 5 TB for the data space.

Since the combined storage do not get above 10 TB to invoke the volume discount, the mean lab price will be slightly more expensive due to the ORANGE subscription cost compared to initial epidemiology example on the free subscription level (14732 vs 12762 = 1970 more per year).

The advantage of bundling labs into a joint center portfolio can be to access custom machine types, free external data exports and simplified reporting and management.


### Genomics center

The next example is for a center with five labs: one for internal day-to-day work area, one for restricted storage and three labs are dedicated to external collaborations with intense activity in parts of the year. The combined storage is 50 TB.

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Data space | BLUE | 1 year | 35397 | 1 | 35397 |
| Lab | | 1 year | 5785 | 5 | 28925 |
| Compute | COMMITMENT default.b1 | 1 year | 2904 | 1 | 2904 |
| Compute | COMMITMENT default.b5 | 1 year | 30976 | 1 | 30976 |
| Compute | COMMITMENT default.b2 | 1 year | 4646 | 3 | 13938 |
| Compute | BLUE default.c5 | Days | 46.96 | 90 | 4227 |
| Compute | BLUE default.b4 | Days | 13.37 | 30 | 401 |
| Compute | ON-DEMAND default.c5 | Days | 177.09 | 90 | 15938 |
| Store | First 10 TB | 1 year | 2331 | 10 | 23310 |
| Store | Next 90 TB | 1 year | 1665 | 40 | 66600 |
| **PER YEAR** |  | | |  | **222616** |

The example gives you a BLUE data space and five labs. The day-to-day lab has a machine type to handle most analysis, the storage lab the smallest machine type for data handling, and the collaborative labs small machines that are upgraded for intensive analytical periods. Two such machines utilizes BLUE machines with highly reduced price. The 50 TB total storage is divided across the two first price tiers with a mean cost of 1798 per TB.

### Machine learning center

The last example is for a portfolio of five labs tailored for machine learning: one is dedicated to the internal day-to-day work of the center's core team, one lab is dedicated to data storage with restricted access, and three labs that are dedicated to collaborations with external teams. The total storage is 30 TB.

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Data space | ORANGE | 1 year | 8495 | 1 | 8495 |
| Lab | | 1 year | 5785 | 5 | 28925 |
| Compute | COMMITMENT default.b1 | 1 year | 2904 | 1 | 2904 |
| Compute | COMMITMENT default.b2 | 1 year | 4646 | 4 | 18584 |
| Compute | COMMITMENT default.d3 | 1 year | 21239 | 2 | 42478 |
| Compute | COMMITMENT NVIDIA V100 | 1 year | 28592 | 2 | 57184 |
| Compute | ON-DEMAND default.d3 | Days | 76.81 | 60 | 4609 |
| Compute | ON-DEMAND NVIDIA V100 | Days | 117.50 | 60 | 7050 |
| Compute | ON-DEMAND default.d3 | Days | 76.81 | 90 | 6913 |
| Compute | ON-DEMAND NVIDIA V100 | Days | 117.50 | 90 | 10575 |
| Compute | ON-DEMAND default.d3 | Days | 76.81 | 90 | 6913 |
| Compute | ON-DEMAND NVIDIA V100S | Days | 136.3 | 60 | 8178 |
| Compute | ON-DEMAND default.d3 | Days | 76.81 | 60 | 4609 |
| Store | First 10 TB | 1 year | 2331 | 10 | 23310 |
| Store | Next 90 TB | 1 year | 1665 | 20 | 33300 |
| **PER YEAR** |  | | |  | **264027** |

This data space is on the ORANGE subscription with five labs. The home machines is a combination of smaller machine types: default.b1 (storage) and default.b2 (others). The labs rely on additional machines for its GPU activity. The day-to-day lab include one additional permanent machine (default.d3) with one GPU card, while the labs aimed for external collaborations deploy on-demand machines with GPUs for various periods of the year. The 30 TB storage is split on the two first storage tiers with a mean cost of  1887 per TB.

-->
