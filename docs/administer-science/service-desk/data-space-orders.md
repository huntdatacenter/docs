---
title: Data space orders
category: Service desk
permalink: /administer-science/service-desk/data-space-orders
description: HUNT Cloud service desk orders for data spaces.
sidebarDepth: 2
---

# Service desk orders for data spaces

**This page list predefined service orders for data space management. To place an order, click the blue button and send us a pre-filled email.**

[[toc]]

::: tip Save time

It saves you time to send us the request from your **organizational email**. We use this for identification. Requests from private emails need additional verification that takes longer.

:::

Send us a regular [email](/contact) with your request if you can't find what you are looking for on the this page.



## Lab management

### New lab

Click the button below to order a new lab under your existing data space.

<SDButton form="request_new_lab" />

* **Who can order:** Data space leaders and data space compliance administrators in active data spaces.
* **Required attachment**: [A signed lab order](/administer-science/agreements/downloads/#lab-order) and information on storage volume sizes and machine type for the home machine (see below).
* **Expected delivery time:** One week.
* **Next step**: [Add your first lab users](/administer-science/service-desk/lab-orders.html#add-a-new-lab-user).
* **Cost:** One lab subscription as specified in the [Services specifications](/administer-science/services/specifications/) and [Price list](/administer-science/prices/pricelist/).

::: warning Next: Add your first lab user(s)

It's important that you order lab access for each scientist (lab user) that will work in your lab as soon as you send us the above Lab order. Without these, your scientists will not be able to access your new lab. 

[Click on this link to get going](/administer-science/service-desk/lab-orders/#add-a-new-lab-user).

:::

::: details More on the required resource specifications

Your lab comes with one (1) machine with computational resources and attached storage by default. We call this your **`home`**-machine.

**Machine type**

For cost savings, we recommend that you start with the **`default.b2`** machine type. And if needed, upgrade to larger machine types when your scientists are well onboard in your new lab and ready to explore. You may specify [alternative machines types](/administer-science/services/machine-types/) in the order if you know you need other sizes right away.

**Storage volumes**

Your lab comes with three (3) storage volumes attached to your home machine. We have suggested default sizes on these volumes that you may want to change.

*Volume types*

i) the **`archive`** volume is tailored for data storage, such as your raw data and results;
ii) the **`work`** volume is tailored for your data in your day-to-day activities that your want to preserve, such as code files; and iii) the **`scratch`** volume is tailored for temporary analytical files, such typically generated in intermediate steps of your analysis. Note that the **`scratch`** volume do -not- include our restore service (backup).

*Volume sizes*

The minimum storage allocation of the three volumes is 1000 Gigabytes (1 Terabyte). We have suggested a default allocation that you may update if you like:

ARCHIVE = 400
WORK = 300
SCRATCH = 300

The above numbers are in Gigabytes (1000 Gigabytes = 1 Terabyte). To illustrate, if you want your archive volume to be 2 Terabyte, specify **`ARCHIVE = 2000`** in your order.

**More information**

See the "Lab" section in our [Services specifications](/administer-science/services/specifications/) for more information on the lab service and default configuration. [Contact us](/contact) if you need guidance on the size selection.

:::





### Delete lab

Click the button below to order a lab deletion of an active lab under your data space.

<SDButton form="request_lab_deletion" />

* **Who can order:** Data space leaders and Lab leaders in collaboration.
* **Required attachment**: [A signed lab deletion order](/administer-science/agreements/downloads/#lab-deletion-order).
* **Expected response time:** Weeks.
* **Expected delivery:** Countersignature from HUNT Cloud on your lab deletion order confirming that lab data, including online and offline duplicate copies, are deleted.
* **Cost:** Included in your lab subscription.

::: danger

Once your lab data is deleted it can not be recreated. You must ensure that you have exported all data that you intend to preserve from the lab -before- you order the lab deletion. [Contact us](/contact) if you need guidance with this work.

:::


## Transfers

Data transfers in and out of HUNT Cloud needs authorization from Data space leaders or Data space compliance administrators.

::: tip Internal transfers and import

Data transfers between labs inside HUNT Cloud can be requested from our [lab order service desk](/administer-science/service-desk/lab-orders).

:::

### External import kista

The [external import kista](/do-science/faq/external-transfer/#faq-on-external-data-transfer) allows external parties outside HUNT Cloud to transfer data directly to a lab inside HUNT Cloud in a compliant manner.

<SDButton form="request_external_import_kista" />

* **Who can order:** Data space leaders or Data space compliance administrators.
* **Required attachments**: (1) [A signed external kista import order](/administer-science/agreements/downloads/#external-kista-import-order), and (2) one [SSH public key](/do-science/data-transfers/external-kista/#ssh-key-pair) from the external uploader.
* **Expected response time:** Days.
* **Expected delivery:** Kista access information sent to the lab user that will import the data.
* **Cost:** Included in your data space subscription.

::: warning External dependency
Note that time to successful transfer depend on access to SFTP software and potential firewall adjustments for the external-party that will download data.
:::

### External export kista

The [external export kista](/do-science/faq/external-transfer/#faq-on-external-data-transfer) allows labs to make data available for external parties outside HUNT Cloud in a compliant manner.

<SDButton form="request_external_export_kista" />

* **Who can order:** Data space leaders or Data space compliance administrators.
* **Required attachments**: (1) [A signed external kista export order](/administer-science/agreements/downloads/#external-kista-export-order), and (2) one [SSH public key](/do-science/data-transfers/external-kista/#ssh-key-pair) from the external downloader.
* **Expected response time:** Days.
* **Expected delivery:** Access information sent to the lab user that will make data available for export.
* **Cost:** Included in your data space subscription.

::: warning External dependency
Note that time to successful transfer depends on access to SFTP software and potential firewall adjustments for the external-party that will upload data.
:::


### Network opening

[Network opening orders](/do-science/faq/external-transfer/#direct-external-transfers) allows data transfers directly to and from parties outside HUNT Cloud.

<SDButton form="request_network_opening" />

* **Who can order:** Data space leaders or Data space compliance administrators.
* **Required information**: IPv4 address and port number for the external party.
* **Required attachments**: [A signed network opening order](/administer-science/agreements/downloads/#network-opening-order).
* **Expected response time:** Days.
* **Expected delivery:** Network opening communicated in your Slack lab channel.
* **Cost:** Included in your data space subscription.


## Data space management

### Update data space administrator roles

Click the button below to update your [data space administrator](/administer-science/roles/) under your existing data space.

<SDButton form="update_data_space_administrator_role" />

* **Who can order:** Data space leaders or Data space compliance administrators in active data spaces.
* **Required attachment**: None.
* **Expected delivery time:** Days.
* **Cost:**  Included in your data space subscription.


### Update lab leader role

Click the button below to update lab leader roles for labs attached to your data space.

<SDButton form="request_lab_leader_role" />

* **Who can order:** Data space leaders and data space compliance officers.
* **Required attachment**: A new [signed lab order](/administer-science/agreements/downloads/#lab-order).
* **Expected delivery time:** Days.
* **Cost:** Included in your data space subscription.


### New invoice profile

Click the button below to add a new invoice profile to your data space. Use this is you want a new lab to be invoiced to a specific account that you control, or if you want to separate one of your existing labs into a separate account.

<SDButton form="request_new_invoice_profile" />

* **Who can order:** Data space leaders and data space financial officers.
* **Required attachment**: A new [signed invoice profile](/administer-science/agreements/downloads/#invoice-profile).
* **Expected delivery time:** Days.
* **Cost:** Included in your data space subscription.


### Update existing invoice profile

Click the button below to update an existing invoice profile to your data space. Use this is you want to update your account information, update your financial contact etc.

<SDButton form="request_update_of_existing_invoice" />

* **Who can order:** Data space leaders and data space financial officers.
* **Required attachment**: A new [signed invoice profile](/administer-science/agreements/downloads/#invoice-profile).
* **Expected delivery time:** Days.
* **Cost:** Included in your data space subscription.

## Tingweek

### Unsubscribe to Tingweek invitations

All activite HUNT Cloud users will be invited to individual Tings in our Tingweeks. Participation is voluntary and you can unsubscribe from future Ting invitations here. 

<SDButton form="unsubscribe_ting_invitations" />

* **Who can order:** Data space leaders and data space administrators.
* **Expected delivery time:** Days.
* **Expected response time:** Confirmation that you are unsubscribed to future Ting invitations.
* **Cost:** Included in your data space subscription.
	

## General request

Don't find what you are looking for on the predefined orders above? Don't you worry. Send us a general service request. 

<SDButton form="general_dataspace_request" />

* **Who can order:** Data space leaders and data space coordinators.
* **Expected response time:** Days.

::: warning General responses are slower

Note that a general request has slower response time than a predefined order. If you don't find what you are looking for here, it might be good to invest some time investigating options in our [do science](/do-science/service-desk/) and [govern science](/govern-science/service-desk/) service desk.

:::

::: tip Not an active user? 

[Contact us](/contact) on email for general questions and information on our scientific services and activities.

:::


