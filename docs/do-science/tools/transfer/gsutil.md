---
title: Gsutil
category: Transfer tools
permalink: /do-science/tools/transfer/gsutil
sidebarDepth: 1
description: Usage guide for gsutil.
---

# Transferring data from Google cloud

Guide below is meant for users who want to transfer data between Google cloud and HUNT Cloud lab.

::: warning
This guide is meant to help you setup correct parameters for your transfer and is not indented as a full guide to gsutil. For proper guidance, follow official documentation.

:::

## Setup parameters

Before you begin your transfer, make sure to apply parameters `GSUtil:parallel_process_count=1` and `GSUtil:parallel_thread_count=2`.
Increasing the values could affect the work of your lab mates.

```bash
# First test with timeout
timeout 900 gsutil -o GSUtil:parallel_process_count=1 -o GSUtil:parallel_thread_count=2 -m cp -r gs://your-bucket  ...
```

```bash
# If all is fine remove timeout
gsutil -o GSUtil:parallel_process_count=1 -o GSUtil:parallel_thread_count=2 -m cp -r gs://your-bucket  ...
```
