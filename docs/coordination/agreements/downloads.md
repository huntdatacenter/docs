---
title: Downloads
category: HUNT Cloud
permalink: /agreements/downloads
sidebarDepth: 1
description: This page list agreements that may be relevant for you as a lab user. Contact your lab leader for more details on other agreement types.
---

# Download agreements

This page list agreements that may be relevant for lab users and lab coordinators. Contact your lab leader for more details on other agreement types.

[[toc]]

## User agreement

[HUNT Cloud User Agreement](https://assets.hdc.ntnu.no/assets/agreements/hunt-cloud-user-agreement.pdf) (pdf)

Your lab leader and lab coordinator can add new users to your lab through our user agreement. The agreement is signed by both the new user and the lab leader or lab coordinator. Read more about how to add new users in our [FAQ user section](/faq/users/).

## Lab agreement

[HUNT Cloud Lab Agreement](https://assets.hdc.ntnu.no/assets/agreements/hunt-cloud-lab-agreement.pdf) (pdf)

Your data space leader or administrative data space coordinator can use this agreement to add new labs under a data space. The agreement is co-signed by both the data space leader and the new lab leader.

## Internal kista order

[HUNT Cloud - Internal Kista Order](https://assets.hdc.ntnu.no/assets/agreements/hunt-cloud-internal-kista-order.pdf) (pdf)

Lab leaders and lab coordinators from labs that will upload data can order internal kistas for data transfers between two labs in HUNT Cloud. We use this order to document internal traffic from your lab. Read more about Internal kistas in our [FAQ transfer section](/faq/internal-transfer/).

## External kista import order

[HUNT Cloud - External Kista Import Order](https://assets.hdc.ntnu.no/assets/agreements/hunt-cloud-external-kista-import-order.pdf) (pdf)

Lab leaders can request external kistas where collaborators outside HUNT Cloud can upload data to a kista reachable from your lab. This agreement is signed both by the Lab leader and the uploader outside HUNT Cloud. Read more about External kistas in our [FAQ transfer section](/faq/external-transfer/).

## External kista export order

[HUNT Cloud - External Kista Export Order](https://assets.hdc.ntnu.no/assets/agreements/hunt-cloud-external-kista-export-order.pdf) (pdf)

Lab leaders can request external kistas where collaborators outside HUNT Cloud can download data made available directly from your lab. This agreement is signed both by the Lab leader and the downloader outside HUNT Cloud. Read more about External kistas in our [FAQ transfer section](/faq/external-transfer/).

## Network opening order

[HUNT Cloud Network Opening Order](https://assets.hdc.ntnu.no/assets/agreements/hunt-cloud-network-opening-order.pdf) (pdf)

Your lab leader can request external network openings through our network opening order. We use this to document outbound traffic from your lab. Read more about network openings in our [FAQ transfer section](/faq/external-transfer/).


::: details Clarification of the form fields

The below bullet points clarify the field information needed to complete our network opening order.

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

- **Place/date**: State the place where your lab leader signed the odrder and the date when the order was signed.

- **Lab leader**: This is the field for the signature of your lab leader. For compliance purposes, lab coordinators or lab users are not authorized to sign this form.

:::
