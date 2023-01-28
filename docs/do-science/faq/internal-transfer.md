---
title: Internal transfer
category: FAQ
permalink: /do-science/faq/internal-transfer
sidebarDepth: 1
description: This page lists frequently asked questions related to internal transfers and network openings in labs.
---

# FAQ on internal data transfer

**This page lists frequently asked questions related to internal transfers and network openings in labs.**

[[toc]]

## Internal Kista

Internal kistas handles transfers between labs inside HUNT Cloud.

### Can I transfer data directly to other labs?

Yes and no. Direct transfers between labs are blocked by default. However, you can transfer data to other labs using our internal kista service.

### What is an internal kista?

Internal kista is our service for simple and secure data transfers between two labs. One lab make data available (uploader) to another lab that can download the data (downloader). The transfer take place on SFTP servers dedicated to the specific data transaction.

### How do I order an internal kista?

Lab leader or lab coordinator can order internal kistas in our [service desk](/service-desk/lab-orders/#internal-kista).

### How long does it take to get access to an internal kista?

Allow for days in deployment time after you send us the signed transfer order.

### How does an internal kista work?

Kistas are short-lived SFTP servers dedicated to your specific data transaction. Access is restricted to named uploaders and downloaders from specific labs. We take the responsibility to ensure that data gets downloaded by the correct user and lab.

### Can I specify several uploaders and/or downloaders?

Yes. You may specify up to three uploaders and/or downloaders per kista in your kista order.

### How do I access my internal kista?

See our [internal kista transfer guide](/data-transfers/internal-kista/) for instruction on how to access and upload or download data in internal kista.

### What is the size and utilization of my internal kista?

You can check the size and utilization if you log in to your kista and run the following commands:

```bash
# -- Log into your kista
sftp <username>@<ip>

# -- Enter your upload directory
cd upload

# -- Look up the size
df -h
```

Below is an example of the output for a 1tb kista (984GB) with 110GB uploaded data.

```
    Size     Used    Avail   (root)    %Capacity
   984GB    110GB    825GB    875GB          11%
```

### How long can I keep an internal kista?

Internal kistas are a temporary transfer service which will automatically be destroyed after 30 days unless explicitly stated in writing in the kista order. You must therefore always upload duplicate copies of your data.

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

We don't think so. It is our responsibility to ensure the correct receiver of your data and the confidentiality of your data inside internal kistas. All transfers occur in encrypted transfer channels. We log transfers, and such logs may be made available to your data controller on request.


## Transfers inside my lab

We recommend [rsync](/do-science/transfer/rsync) for transfers between machines inside your lab. 

### How can I transfer data from my home machine to a blue machine? 

You will need to transfer data over to your lab new machine for efficient analysis. From your home machine: 

```bash
# -- Principal example
rsync -avuz /mnt/work/my/folder ubuntu@<machinename>:/home/ubuntu/

# -- Practical example
rsync -avuz path/to/your/local/directory ubuntu@demolab-blue-thea:/home/ubuntu/

```

### How can I transfer data from a blue machine back to my home machine? 

And, you may want to transfer results from your lab machine and back to your home machine. From your home machine: 

```bash
# -- Principal example
rsync -avuz ubuntu@<machinename>:/home/ubuntu/ /mnt/work/my/folder 

# -- Practical example
rsync -avuz ubuntu@demolab-blue-thea:/home/ubuntu/ path/to/your/local/directory
```



