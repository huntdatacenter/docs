---
title: Transfer
category: FAQ
permalink: faq/transfer
sidebarDepth: 1
description: This page lists frequently asked questions related to data transfer and network openings in labs.
---

# FAQ on data transfer

This page lists frequently asked questions related to data transfer and network openings in labs.

[[toc]]

## Internal transfers (kistas)

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







## External transfers (kistas)

### Can parties outside HUNT Cloud upload data to my lab?
Yes. Remote parties can upload data to your lab utilizing the external kista service.

### What is an external kista?
External kista is our service for controlled data transfers between your lab and an external user outside HUNT Cloud. The transfer take place on a time-limited SFTP server that is dedicated for your specific data transaction.

### How do I order an external kista?
Lab leaders can request an external kista for data import through our [External kista import agreement](/about/agreements/#external-kista-import-agreement). You will need to fill in the form in collaboration with the party outside HUNT Cloud that will import data to your external kista. Forward the complete form to us for deployment.

### How quickly can I get access to an external kista?
You should order your kista a few weeks before you need the transfer. The data importer outside HUNT Cloud may need to order firewall openings from his organization, the importer will need to generate a SSH key pair, and configure his/her local machine to connect with your external kista.

### What is an 'importer'?
We have defined the Importer as the user outside HUNT Cloud that will import (upload) data to your external kista.

### How do I know the transfer size?
You may need to communicate with the Importer if you do not know the size of your transfer. We need this information to allocate storage to your kista.

### How do I know the importer IP?
You need to communicate with the Importer to get the IPv4 address for the machine they will use to connect to your external kista. We use this information to restrict access to your external kista for other machines.

### How do I access my external kista?
See our [external kista transfer guide](/data-transfer/external-kista/#for-external-users) for instruction on how to access and upload or download data in internal kista.

### Can I import and export data in the same external kista?
No. For compliance reasons, external kistas are for one way transfers only. You will need to order two independent external kistas if you plan to transfer data both ways.

### Do the Importer need to encrypt the data?
Most likely. However, this is decided by the data controller. Feel free to [contact us](/contact), we are more than happy to help with evaluations on encryption.

### Where can I get additional security information on the external kistas?
[Contact us](/contact) for additional information on the external kista service aimed at security, privacy and compliance officers.






## External transfers (others)

### Can I transfer data directly to parties outside HUNT Cloud?
Yes and no. Direct transfers are blocked. However, your lab leader can allow network openings for data exports outside HUNT Cloud (see below).

### Can I have permanent openings to machines outside my lab?
Yes. We do allow two-way data transactions between your lab and machines outside HUNT Cloud. Such openings needs to be approved by your service owner and the traffic needs to be initiated from inside your lab.

### How do I request a network opening?
Lab leaders can request network openings through our [network opening form](/about/agreements/#network-opening-form). We use this form to document outbound traffic from your lab.

### Which network openings do the machine outside HUNT Cloud need to approve?
Your remote party will need to open for incoming traffic from your lab in HUNT Cloud: **`IP 129.241.176.121`**. The IP is registered under NTNU. They will need to open for traffic on **`TCP port 22`** if you plan to use SSH-tools such as **`rsync`**.

### Do I need to encrypt data for external transfers?
Most likely. It is your responsibility to ensure that the data maintain its confidentiality during the transfer. Even when you use an encrypted transport layer, encrypted data is a good way to ensure that only the indented receiver are able to access your data on the receiving end. Read our [7z guide](/working-in-your-lab/technical-tools/7z/#install-the-software) on how encrypt and compress files for large transfers. [Contact us](/contact) if you wonder if your your data needs to be encrypted or not. We are more than happy to help with evaluations.
