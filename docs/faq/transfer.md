---
title: Transfer
permalink: faq/transfer
sidebarDepth: 2
---

# FAQ on data transfers

This page list frequently asked questions related to data transfers and network openings in labs.

[[toc]]

## General questions

### Can I transfer data directly to remote parties? 

Yes, we do allow direct data transfers to parties outside HUNT Cloud. Your lab leader may request openings for such transfers. See the [Network openings](/faq/transfer/#network-opening-request) section below for information on how to open for outbound data transfers.

### Why is my lab closed for remote transfers? 

All labs are closed for outbound data traffic at the time of deployment. Your lab leader may request openings for such transfers. See the [Network openings](/faq/transfer/#network-opening-request) section below for information on how to open for outbound data transfers.

### Can remote parties upload data to my lab? 

Unfortunately, remote parties can not at this stage upload data directly to your lab. However, we do have several options for such transfers, so please [contact us](/contact-us) for possible solutions.

## Network opening request

### How do I request network openings? 

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
