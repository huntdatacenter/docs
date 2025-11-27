---
title: AWS S3 Client
category: Transfer tools
permalink: /do-science/tools/transfer/aws-s3-client
outline: 1
description: Configuration guide for AWS S3 client.
---

# Transferring data from AWS S3 storage

Guide below is meant for users who want to transfer data from AWS S3 storage to HUNT Cloud lab.

::: tip
This guide is meant to help you setup correct parameters for your transfer and is not indented as a full guide to AWS S3 client. For proper guidance, follow official AWS documentation.

:::

## Configuration

::: warning
Configure bandwidth limits such that your data transfer does not affect your lab mates.

:::

Before you begin your transfer, make sure to setup below parameters in `aws.config`:

```bash
[profile default]
s3 =
    max_concurrent_requests = 4
    max_queue_size = 100
    multipart_threshold = 64MB
    multipart_chunksize = 16MB
    max_bandwidth = 200MB/s

```
