---
title: BOTO S3 client
category: Transfer tools
permalink: /do-science/tools/transfer/boto-s3-client
outline: 1
description: Configuration guide for BOTO S3 client.
---

# Transferring data using BOTO S3 client

Guide below is meant for users who want to transfer data using [BOTO S3 Client](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html) to HUNT Cloud lab.

::: tip
This guide is meant to help you setup correct parameters for your transfer and is not indented as a full guide to BOTO S3 client. For proper guidance, follow official [BOTO documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html).

:::

## Configuration

::: warning
Configure bandwidth limits such that your data transfer does not affect your lab mates.

:::

Before you begin your transfer, make sure to setup below parameters in `boto.cfg`:

```bash
[GSUtil]
parallel_composite_upload_component_size = 500M
parallel_composite_upload_threshold = 500M
#storage/sliced_object_download_component_size: The target size for each download slice. This property is ignored if the total file size is so large that downloading slices of this size would require more slices than allowed, as set in storage/sliced_object_download_max_components.
sliced_object_download_component_size = 500M
# = storage/sliced_object_download_max_components: The maximum number of slices to use in the download. Set 0 for no limit, in which case the number of slices is determined solely by storage/sliced_object_download_component_size.
sliced_object_download_max_components = 0
# storage/sliced_object_download_threshold: The minimum total file size for performing a sliced object download. You can disable all sliced object downloads by setting this value to 0.
sliced_object_download_threshold = 500M
parallel_process_count = 1
parallel_thread_count = 2

```
