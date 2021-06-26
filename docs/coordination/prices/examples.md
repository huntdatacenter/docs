---
title: Price examples
category: HUNT Cloud
permalink: /prices/examples
sidebarDepth: 1
description: This page list examples of cloud prices for common use cases.
---

# Price examples

We know, digging into the deep details of flexible cloud prices may be demanding. To ease on the process, we have compiled a few use cases that may give you a direction of your costs. [Contact us](/contact) for assistance in price calculations and price optimization.

[[toc]]

All prices are listed as VAT exclusive NOK from the [Price List v3.0](/prices/pricelist/).

## Lab configurations for...

Let's start with a few examples of crude prices in labs configured for some common uses cases. Depending on your data space subscription and cost optimization techniques, the listed prices may be reduced. [Contact us](/contact) for assistance in price calculations. 

### ... epidemiology

This is a project that needs a lab to store and analyse structured data, such as registry data, health studies or your own study data. The configuration should give sufficient resources for storage and computational power for software such as RStudio or Stata for 2-3 scientist. 

| Service | Unit | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Data space | WHITE | 1 year | 0 | 1 | 0 |
| Lab | | 1 year | 5785 | 1 | 5785 |
| Compute | default.b2 | 1 year | 4646 | 1 | 4646 |
| Store | 1 terabyte | 1 year | 2331 | 1 | 2331 |
| **PER YEAR** |  | | |  | **12762** | 

### ... genomics

Next up is a typical lab for storage and analysis of genomics data. This configuration is aimed at research groups that conduct data-driven experiments on a day-to-day basis. 

| Service | Unit | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Data space | WHITE | 1 year | 0 | 1 | 0 |
| Lab | | 1 year | 5785 | 1 | 5785 |
| Compute | default.b5 | 1 year | 30976 | 1 | 30976 |
| Store | 10 terabytes | 1 year | 2331 | 10 | 23310 |
| **PER YEAR** |  | | |  | **59071** | 

### ... machine learning

This configuration exemplifies a lab for machine learning with a small home machine for data handling with 10 terabyte of storage, and one extra analytical machine for GPU analysis with 5 terabytes of storage.

| Service | Unit | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Data space | WHITE | 1 year | 0 | 1 | 0 |
| Lab | | 1 year | 5785 | 1 | 5785 |
| Compute | default.b2 | 1 year | 4646 | 1 | 2904 |
| Compute | default.d3 | 1 year | 21239 | 1 | 21239 | 
| Compute | NVIDIA V100 | 1 year | 28592 | 1 | 28592 |
| Store | First 10 TB | 1 year | 2331 | 10 | 23310 |
| Store | Next 5 TB | 1 year | 1665 | 5 | 8325 | 
| **PER YEAR** |  | | |  | **90155** | 



### ... data archives

This configuration exemplifies a large data archive, for example a biobank or other data controllers that store data for reuse. The activity inside the lab is aimed at quality control when data arrives, typically for a few months per year. The configuration exemplifies a data archive that totals 150 TB with intensive quality control activities for 3 months of the year.

| Service | Unit | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Data space | WHITE | 1 year | 0 | 1 | 0 |
| Lab | | 1 year | 5785 | 1 | 5785 |
| Compute | default.b2 | 1 year | 4646 | 1 | 2904 |
| Compute | default.b5 | Days | 112.02 | 90 | 10082 | 
| Store | First 10 TB | 1 year | 2331 | 10 | 23310 |
| Store | Next 90 TB | 1 year | 1665 | 90 | 149850 | 
| Store | Over 100 TB | 1 year | 1266 | 50 | 63300 | 
| **PER YEAR** |  | | |  | **256231** | 

The mean terabyte price for the 150 TB allocated storage ends at 1576.4.













## Data space configurations for...

Here are a few examples of prices when we combine labs into data spaces. [Contact us](/contact) for assistance for more detailed price calculations for your research group and/or center.

### ... epidemiolgy center

This example is for a portfolio of 5 labs where one is dedicated as a storage archive, one as the internal day-to-day work area, and three additional labs that are dedicated to external collaborations. The combined storage is 5 terabytes across the five labs.

| Service | Unit | Type | Cost/unit | Units | Total cost |
| ---- | ---- | ---- | ---- | ---- | ---- | 
| Data space | ORANGE | 1 year | 8495 | 1 | 8495 |
| Lab | | 1 year | 5785 | 5 | 28925 |
| Compute | COMMITMENT default.b1 | 1 year | 2904 | 1 | 2904 |
| Compute | COMMITMENT default.b2 | 1 year | 4646 | 3 | 13938 |
| Compute | COMMITMENT default.b3 | 1 year | 7744 | 1 | 7744 | 
| Store | First 10 TB | 1 year | 2331 | 5 | 11655 |
| **PER YEAR** |  | | |  | **73661** | 

Since the combined storage do not get above 10 TB this for the volume discount, the mean lab price will be 1699 moreper lab than if the center were running with the same labs on the WHITE data space subscription level. One potential opportunity with lab bundling reaching the ORANGE data space subscription level is the Lagtun invite for the data space leader. This gives the center the opportunity to participate in the development of services and prices. It also allows for combined reporting and management across the labs.


### ... genomics center

This example is for a portfolio of 5 labs where one is dedicated as a storage archive, one as the internal day-to-day work area, and three additional labs that are dedicated to external collaborations with intense activity only parts of the year. The combined storage is 50 terabytes across the five labs.

| Service | Unit | Type | Cost/unit | Units | Total cost |
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




### ... machine learning center

This example is for a portfolio of 5 labs where one is dedicated as a storage archive, one as the internal day-to-day work area for the group with 2 fixed GPU cards, and three additional labs that are dedicated to external collaborations with intense activity only parts of the year. The combined storage is 30 terabytes across the five labs.

| Service | Unit | Type | Cost/unit | Units | Total cost |
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











