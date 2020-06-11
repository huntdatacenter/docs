---
title: Internal Transfer
category: FAQ
permalink: faq/internal-transfer
sidebarDepth: 1
---

# FAQ on internal data transfer

This page list frequently asked questions related to data transfer and network openings in labs.

[[toc]]

## Internal Kista

### Can I transfer data directly to other labs?
Yes and no. Direct transfers between labs are blocked. However, you can transfer data to other labs using our internal kista service.

### What is an internal kista?
Internal kista is our service for simple and secure data transfers between two labs. One lab make data available (uploader) to another lab that can download the data (downloader). The transfer take place on SFTP servers dedicated to the specific data transaction.

### How do I order an internal kista?
Lab leader or lab coordinator in the lab that will make data available (uploader lab) can request internal kistas through our [Internal kista transfer form](/about/agreements/#internal-kista-transfer-form).

### How long does it take to get access to an internal kista?
Allow for up to a week in deployment time after you send ut the signed transfer form. Although usually the deployment will be available within days. We will notify both the upload and downloader lab with account information.

### How does an internal kista work?
Kistas are short-lived SFTP servers dedicated to your specific data transaction. Access is restricted to named uploaders and downloaders from specific labs. We take the responsibility to ensure that data gets downloaded by the correct user and lab.

### How do I access my internal kista?
See our [internal kista transfer guide](/data-transfer/internal-kista/) for instruction on how to access and upload or download data in internal kista.

### How long can I keep an internal kista?
Internal kistas are a temporary transfer service which will automatically be destroyed after 30 days unless explicitly stated in writing. You must therefore always upload duplicate copies of your data.

::: danger
Do NOT use Kistas as the primary storage area for your data as all Kistas will be destroyed without further notice 30 days after deployment.
:::

### Can internal kistas be used as a data storage?
No. Only upload duplicate copies of your data to an internal kista. We do not hold backup copies of kista data, the service is run on dedicated hardware with limited redundancy, and kistas are automatically destroyed without further notice on their end of duration date.

::: danger
Only upload duplicate copies of your data to internal kistas.
:::

### Can I upload and download data in the same internal kista?
No. Internal kistas allows one way data transactions. This means that the downloader can not upload data. You will need to order two independent internal kistas if you plan to transfer data both ways. This control is included for security reasons.

### Do I need to encrypt my data before internal kista transfers?
No, we don't think so. It is our responsibility to ensure the correct receiver of your data and the confidentiality of your data inside internal kistas. All transfers occur in encrypted transfer channels. We log transfers, and such logs may be made available to your data controller on request.
