---
title: Transfer
permalink: faq/transfer
sidebarDepth: 1
---

# FAQ on data transfers

This page list frequently asked questions related to data transfers and network openings in labs.

[[toc]]

## Internal transfers (Kista)

### Can I transfer data directly to other labs? 

Yes. You can make your data reachable for other labs through our HUNT Kista service. Direct transfers outside of Kistas are blocked. 

### What is a Kista? 

Kista is our service for data transfers between labs in a simple and secure manner. You upload data to a dedicated environment (Kista, chest in english) where a dedicated individual in the receiving lab can download your data. We take the responsibility to ensure that data gets downloaded by the correct user and lab.

### How does a Kista work? 

Kistas are short-lived dedicated sftp-servers with named uploaders and downloaders from specific lab environments inside HUNT Cloud. We will give you specific instructions on how to upload and download data.

### How do I order a Kista? 

Lab leaders and Lab coordinators may request Kistas on email. You need to specify your lab name, the user that will upload data inside your lab, the name of the receiving lab, the name of the lab user that will download the data to the receiving lab, and the size of the Kista in gigabytes or terabytes. Allow for up to a week in deployment (usually a few days). 

### How long can I keep a Kista? 

All Kistas will automatically be destroyed after 30 days. Thus, Kistas are short-lived temporary transfer services. Do NOT use Kistas as a storage area for your data as they will be destroyed without further notice.

### Do I need to encrypt the data in a Kista? 

No, we don't think so. It is our responsibility to ensure the correct receiver of your data and the confidentiality of your data inside the Kista. We do also log the transfers, and such logs may be made available to your data controller on request.







## External transfers

### Can I transfer data directly to remote parties? 

Yes. We do allow direct data transfers to parties outside HUNT Cloud. Your lab leader may request openings for such transfers. See the [Network openings](/faq/transfer/#how-do-i-request-a-network-opening) section below for information on how to open for outbound data transfers.

### How do I request a network opening? 

Your lab leader can request network openings through our [network opening form](/assets/hunt-cloud-network-opening-form.pdf). We use this form to document outbound traffic from your lab.

::: details Clarification of the form fields

The below bullet points clarify the field information needed to complete our [network opening form](/assets/hunt-cloud-network-opening-form.pdf). 

- **Lab name:** This is the name of your lab. You may find the name when you log into your lab:

```bash
Welcome to `LAB NAME`.

For the record, if you shouldn't be here - please
leave and report the incident to cloud@hunt.ntnu.no.

Last login: Sun Dec  3 12:29:28 2017 from 10.10.10.10
your-username@`your-labname`-home~$
``` 

- **Lab leader:** This is the name of the individual that is the contracting party of your lab agreement with HUNT Cloud, typically your principal investigator or center leader. 

- **Remote party**: This is the institution that your will transfer data to and from. We use this information to sanity check your network address. Do also specify the country where the machine reside. We use this information for reporting to your data controller.

- **Network**: This is the public IP address for the remote machine in a [IPv4](https://en.wikipedia.org/wiki/IPv4)-format which is defined as four set of numbers separated by dots. Contact your remote party for this information. If the machine is located outside NTNU, the network address can **not** start with **`10.`**, **`192.`** or **`172.`** since these are internal addresses that are unreachable outside your institution.

- **Port number**: This is the [network port](https://en.wikipedia.org/wiki/Port_(computer_networking)) that needs to be opened for communication to occur. The port number is specific for the protocol of the transfer. For example, port 22 is commonly used for regular SSH-transfers. Contact your remote party for this information. 

- **Duration**: Specify the date of the expected termination date of the opening. Alternatively, state **`Permanent`** if you want the network opening to exist for the lifetime of your lab. 

- **Purpose**: This is the general purpose for the transfer that we report to data controllers. For example, raw data transfer, result transfers, software transfers, etc. 

- **Personal data**: State **`YES`** if you expect the transfer to include personal data as defined by GDPR in [Article 4 (1)](https://www.privacy-regulation.eu/en/article-4-definitions-GDPR.htm), and state **`NO`** if you don't. We recommend that you encrypt personal data during transfers.

- **Place/date**: State the place where your lab leader signed the form and the date when the form was signed.

- **Lab leader**: This is the field for the signature of your lab leader. For compliance purposes, lab coordinators or lab users are not authorized to sign this form.

:::

### Why is my lab closed for remote transfers? 

All labs are closed for outbound data traffic at the time of deployment. Your lab leader may request openings for such transfers. See the [Network openings](/faq/transfer/#how-do-i-request-a-network-opening) section below for information on how to open for outbound data transfers.

### Can remote parties upload data to my lab? 

Unfortunately, remote parties can not at this stage upload data directly to your lab. However, we do have several options for such transfers, so please [contact us](/contact-us) for possible solutions.


