---
title: Price examples
category: HUNT Cloud
permalink: /administer-science/prices/examples
sidebarDepth: 1
description: This page list examples of yearly cost for selected use cases in HUNT Cloud.
---

# Price examples

**We know, the complexity of flexible cloud prices is demanding. Bare with us, because the flexibility opens opportunities. Here are a few examples to give you a pricing direction.** 

[[toc]]

For the record, all prices in the examples are listed as VAT exclusive in NOK from the [price list](/administer-science/prices/pricelist/). The prices are provided for guidance and may contain both errors and outdated information.

::: tip Estimate your specific cost

Head over to our [pricing calculator](/administer-science/prices/calculator) to estimate the cost for your specific scientific environment, and do not hesitate to [contact us](/contact) for assistance.

:::


## Individual labs

Let's start with a few examples of prices for individual labs configured for common experiments. Depending on your data space subscription and cost optimization configuration, the listed prices may be reduced. 

### Explore basic

Let's start with our default lab for sensitive data discoveries for teams of 2-3 scientists. The lab size is tailored for data analysis of structured data such as health registries and survey data that you collect. 

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Lab | subscription | 1 year | 5823 | 1 | 5823 |
| Compute | default.c1 | 1 year | 3553 | 1 | 3553 |
| Store | 1 terabyte | 1 year | 2376 | 1 | 2376 |
| **PER YEAR** |  | | |  | **11752** |

The above example establishes your own lab in HUNT Cloud with access to commonly used tools in HUNT Workbench. You lab holds sufficient resources for analysis for a small team. Both compute and store can easily be upgraded as your experiments grow.


### Genomics

Next up is a typical lab for genomics analysis. Let's assume you need a lab to store and analyze genomics data from several sources with a varied set of tools. 

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Data space | WHITE | 1 year | 0 | 1 | 0 |
| Lab | | 1 year | 5823 | 1 | 5823 |
| Compute | default.b5 | 1 year | 29829 | 1 | 29829 |
| Store | 10 terabytes | 1 year | 2376 | 10 | 23760 |
| **PER YEAR** |  | | |  | **59412** |

The above example gives you a free data space and one lab, a powerful machine fit for many analysis, and storage capacity to both experiment and archive larger data sets. The cost can be reduced by for example reducing the compute size in day-to-day activities and then upgrade to larger on-demand machines in analysis intensive periods. 

### Machine learning

Let's increase the complexity slightly. This example is for a machine learning lab with mixed activities that require data storage, computational power and graphical accelerators. The example list one home machine, one machine with GPU and a total of 15TB storage.

| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Data space | WHITE | 1 year | 0 | 1 | 0 |
| Lab | | 1 year | 5785 | 1 | 5785 |
| Compute | default.b2 | 1 year | 4646 | 1 | 4646 |
| Compute | default.d3 | 1 year | 21239 | 1 | 21239 | 
| Compute | NVIDIA V100 | 1 year | 28592 | 1 | 28592 |
| Store | First 10 TB | 1 year | 2331 | 10 | 23310 |
| Store | Next 5 TB | 1 year | 1665 | 5 | 8325 | 
| **PER YEAR** |  | | |  | **91897** | 

As the others examples, this includes a free data space and one lab. The compute resources are split in two machines: a smaller home machine (default.b2) for data handling and day-to-day activities, and a larger machine (default.d3) that has attached one enterprise GPU card. You need to extra machine to obtain administrator privileges. The 15 TB total storage in the lab is priced in the first two storage tiers with a reduced priced for the TB's above 10 TB. The mean storage price in the example is 2109.

 




### Data archives

This configuration exemplifies a large data archive, such as a biobank or image archive that manages data for reuse. The activity inside the lab would typically be data import, intensive quality control at the time of data arrivals, compression and other preservation activities and data exports. The configuration exemplifies a data archive holding a total of 150 TB with intensified quality control a total of 90 days of the year.


| Service | Description | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Data space | WHITE | 1 year | 0 | 1 | 0 |
| Lab | | 1 year | 5785 | 1 | 5785 |
| Compute | default.b2 | 1 year | 4646 | 1 | 4646 |
| Compute | default.b5 | Days | 112.02 | 90 | 10082 | 
| Store | First 10 TB | 1 year | 2331 | 10 | 23310 |
| Store | Next 90 TB | 1 year | 1665 | 90 | 149850 | 
| Store | Over 100 TB | 1 year | 1266 | 50 | 63300 | 
| **PER YEAR** |  | | |  | **256973** | 

The above examples gives you one free data space and one lab with a home machine intended for data archiving and transfers. On-demand compute resources is consumed for a total of 90 days. The storage price is calculated across all storage tiers in the the price list ending at a mean price of 1576 per TB. The total cost may be reduced by for example tailored preservation strategies utilizing tapes for duplicate copies.






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


