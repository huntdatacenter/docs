---
title: Transfer
permalink: faq/transfer
sidebarDepth: 1
---

# FAQ on data transfer

This page list frequently asked questions related to data transfer and network openings in labs.

[[toc]]

## Internal transfers (Kista)

### Can I transfer data directly to other labs? 

Yes. You can make your data reachable for other labs through our HUNT Kista service. Direct transfers outside of Kistas are blocked. 

### What is a Kista? 

Kista is our service for data transfers between labs in a simple and secure manner. You upload data to a dedicated environment (Kista, chest in english) where a dedicated individual in the receiving lab can download your data. We take the responsibility to ensure that data gets downloaded by the correct user and lab.

### How do I order a Kista? 

You lab leader or lab coordinator can order Kistas to initiate transfers to other labs through our [kista transfer form](/about/agreements/#kista-transfer-form). Allow for up to a week in deployment (usually a few days). 

### How does a Kista work? 

Kistas are short-lived dedicated sftp-servers with named uploaders and downloaders from specific lab environments inside HUNT Cloud. We will notify the you when your Kista is deployed with information on how to upload and download data (see below). 

### How can I access my Kista? 

You will find instructions on how to upload or download data in your lab's home machine when your Kista is deployed: 

```bash
# -- see available Kistas
ls /opt/hunt-cloud/kista/

# -- see instructions for a demokista
less /opt/hunt-cloud/kista/kista-<name>.txt 
```

### How long can I keep a Kista? 

All Kistas will automatically be destroyed after 30 days. Thus, Kistas are short-lived temporary transfer services. Kistas must therefore only hold duplicate copies of your data and must never hold your only data copy. 

::: danger
Do NOT use Kistas as the primary storage area for your data as all Kistas will be destroyed without further notice 30 days after deployment.
:::

### Do I need to encrypt the data in a Kista? 

No, we don't think so. It is our responsibility to ensure the correct receiver of your data and the confidentiality of your data inside the Kista. We do also log the transfers, and such logs may be made available to your data controller on request.







## External transfers

### Can I transfer data directly to remote parties? 

Yes. We do allow direct data transfers to parties outside HUNT Cloud. Your lab leader may request openings for such transfers. See the [Network openings](/faq/transfer/#how-do-i-request-a-network-opening) section below for information on how to open for outbound data transfers.

### How do I request a network opening? 

Your lab leader can request network openings through our [network opening form](/about/agreements/#network-opening-form). We use this form to document outbound traffic from your lab.

### Why is my lab closed for remote transfers? 

All labs are closed for outbound data traffic at the time of deployment. Your lab leader may request openings for such transfers. See the [Network openings](/faq/transfer/#how-do-i-request-a-network-opening) section below for information on how to open for outbound data transfers.

### Which network openings do my external party need to initiate? 

Your remote party will need to open for incoming traffic from your lab in HUNT Cloud: **`IP 129.241.176.121`**. The IP is registered under NTNU. They will need to open for traffic on **`TCP port 22`** if you plan to use SSH-tools such as **`rsync`**. [Contact us](/contact) if you plan to transfer data over other ports.

### Do I need to encrypt data for external transfers? 

Yes, we think so, at least for personal information. It is your responsibility to ensure that the data maintain its confidentiality during the transfer. Even when you use an encrypted transport layer, encrypted data is a good way to ensure that only the indented receiver are able to access your data. Read our [7z software](/working-in-your-lab/technical-tools/7z/#install-the-software) for how encrypt and compress files for large transfers. [Contact us](/contact) if you wonder if your your data needs to be encrypted as we are more than happy to help with evaluations.

### Can remote parties upload data to my lab? 

Unfortunately, remote parties can not at this stage upload data directly to your lab. However, we do have several options for such transfers, so please [contact us](/contact-us) for possible solutions.


