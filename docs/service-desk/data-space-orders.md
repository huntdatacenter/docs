---
title: Data spaces
category: Service desk
permalink: /service-desk/data-space-orders
description: HUNT Cloud service desk orders for data spaces.
sidebarDepth: 2
---

# Service desk orders for data spaces

**This page list predefined service orders for data space management. To place an order, click the blue button and send us a prefilled email.**

[[toc]]

::: tip Save time

It saves you time to send us the request from your **organizational email**. We use this for identification, and request from private emails need additional verification that takes longer.

:::

Send us a regular [email](/contact) with your request if you can't find what you are looking for on the this page.



## Lab mangement

### New lab

Click the button below to order a new lab under your existing data space.

<ServiceDesk title="Request a new lab" :template='{
  subject: "New lab order - {labname} @ {dataspace}",
  body: `Hi HUNT Cloud team,

I would like to request a new lab under our data space.

I have attached a signed lab agreement to this email. 

We would like to start with the following machine type for our home machine:  

MACHINE_TYPE = {default.b2}  

We would like to attached the following storage volume sizes to our home machine (numbers are in Gigabytes):  

ARCHIVE = {number1} GB  
WORK = {number2} GB  
SCRATCH = {number3} GB  

Our lab leader and lab coordinator will as quickly as possible forward individual user agreements for our initial users as separate requests using this link: 

https://docs.hdc.ntnu.no/service-desk/lab-orders.html#add-a-new-lab-user

I am looking forward to receive an email verification stating that the lab is up and running.


Best regards,

`,
}' :fields='[
  { label: "New lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Data space name", key: "dataspace", pattern: "[-a-z0-9]{3,}", hint: "Data space name should include only letters a-z, 0-9, or dot.", field: "textfield" },
  { label: "Machine type", key: "default.b2", pattern: "(default).[a-z][0-9]", hint: "Machine type should include only lowercase letters a-z, 0-9, or dash.", field: "textfield", default: "default.b2" },
  { label: "Archive volume size (in gigabytes)", key: "number1", pattern: "[1-9][0-9]{0,2}[0][0]", hint: "Archive volume size should include only numbers 0-9.", field: "textfield", default: "400" }, 
  { label: "Work volume size (in gigabytes)", key: "number2", pattern: "[1-9][0-9]{0,2}[0][0]", hint: "Work volume size should include only numbers 0-9.", field: "textfield", default: "300" }, 
  { label: "Scratch volume size (in gigabytes)", key: "number3", pattern: "[1-9][0-9]{0,2}[0][0]", hint: "Scratch volume size should include only numbers 0-9.", field: "textfield", default: "300" }, 
]' />

* **Who can order:** Data space leaders and data space compliance coordinators in active data spaces.
* **Required attachment**: [A signed lab order](/agreements/downloads/#lab-order) and information on storage volume sizes and machine type for the home machine (see below).
* **Expected delivery time:** One week.
* **Next step**: [Add your first lab users](/service-desk/lab-orders.html#add-a-new-lab-user).
* **Cost:** One lab subscription as specified in the [Services specifications](/services/specifications/) and [Price list](/prices/pricelist/).

::: details More on the required resource specifications

Your lab comes with one (1) machine with computational resources and attached storage by default. We call this your **`home`**-machine.

**Machine type**

For cost savings, we recommend that you start with the **`default.b2`** machine type. And if needed, upgrade to larger machine types when your scientists are well onboard in your new lab and ready to explore. You may specify [alternative machines types](/services/machine-types/) in the order if you know you need other sizes right away.

**Storage volumes**

Your lab comes with three (3) storage volumes attached to your home machine. We have suggested default sizes on these volumes that you may want to change.

*Volume types*

i) the **`archive`** volume is tailored for data storage, such as your raw data and results;
ii) the **`work`** volume is tailored for your data in your day-to-day activities that your want to preserve, such as code files; and iii) the **`scratch`** volume is tailored for temporary analytical files, such typically generated in intermediate steps of your analysis. Note that the **`scratch`** volume do -not- include our restore service (backup).

*Volume sizes*

The minimum storage allocation of the three volumes is 1000 Gigabytes (1 Terabyte). We have suggested a default allocation that you may update if you like:

ARCHIVE = 400  
WORK = 300  
SCRACH = 300  

The above numbers are in Gigabytes (1000 Gigabytes = 1 Terabyte). To illustrate, if you want your archive volume to be 2 Terabyte, specify **`ARCHIVE = 2000`** in your order.

**More information**

See the "Lab" section in our [Services specifications](/services/specifications/) for more information on the lab service and default configuration. [Contact us](/contact) if you need guidance on the size selection.

:::





### Delete lab

Click the button below to order a lab deletion of an active lab under your data space.

<ServiceDesk title="Request a lab deletion" :template='{
  subject: "Lab deletion order - {labname} @ {dataspace}",
  body: `Hi HUNT Cloud team,

I would like to request the following lab under our data space to be deleted:

lab = {labname}  

I have attached a signed lab deletion order to this email confirming the request. 

We have already exported the data that we need from the lab. 

I am aware that all data in the lab will be irrevocably destroyed and can not be recreated once this order is completed.

I am looking forward to receive a written notification on email confirming that the lab and all attached data is deleted.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Data space name", key: "dataspace", pattern: "[-a-z0-9]{3,}", hint: "Data space name should include only letters a-z, 0-9, or dot.", field: "textfield" },
]' />

* **Who can order:** Data space leaders and Lab leaders in collaboration.
* **Required attachment**: [A signed lab deletion order](/agreements/downloads/#lab-deletion-order).
* **Expected response time:** Weeks.
* **Expected delivery:** Countersignature from HUNT Cloud on your lab deletion order confirming that lab data, including online and offline duplicate copies, are deleted.
* **Cost:** Included in your lab subscription.

::: danger

Once your lab data is deleted it can not be recreated. You must ensure that you have exported all data that you intend to preserve from the lab -before- you order the lab deletion. [Contact us](/contact) if you need guidance with this work.

:::


## Transfers

Data transfers in and out of HUNT Cloud needs authorization from Data space leaders or Data space compliance coordinators.

::: tip Internal transfers and import

Data transfers between labs inside HUNT Cloud can be requested from our [lab page](/service-desk/lab-orders).

:::

### External import kista

The [external import kista](/faq/external-transfer/#faq-on-external-data-transfer) allows external parties outside HUNT Cloud to transfer data directly to a lab inside HUNT Cloud in a compliant manner.

<ServiceDesk title="Request an external import kista" :template='{
  subject: "External import kista order - {labname}",
  body: `Hi HUNT Cloud team,

I would like to request an external import kista for {labname}.  

I have attached two files: (1) the signed external import kista order, and (2) the public SSH key from the external uploader.

We are looking forward to receive access information en email.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />

* **Who can order:** Data space leaders or Data space compliance coordinators.
* **Required attachments**: (1) [A signed external kista import order](/agreements/downloads/#external-kista-import-order), and (2) one [SSH public key](/data-transfers/external-kista/#ssh-key-pair) from the external uploader.
* **Expected response time:** Days.
* **Expected delivery:** Kista access information sent to the lab user that will import the data.
* **Cost:** Included in your data space subscription.

::: warning External dependency
Note that time to successful transfer depend on access to SFTP software and potential firewall adjustments for the external-party that will download data.
:::

### External export kista

The [external export kista](/faq/external-transfer/#faq-on-external-data-transfer) allows labs to make data available for external parties outside HUNT Cloud in a compliant manner.

<ServiceDesk title="Request an external export kista" :template='{
  subject: "External import kista order - {labname}",
  body: `Hi HUNT Cloud team,

I would like to request an external export kista for {labname}.  

I have attached two files: (1) the signed external export kista order, and (2) the public SSH key from the external uploader.

We are looking forward to receive access information en email.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />

* **Who can order:** Data space leaders or Data space compliance coordinators.
* **Required attachments**: (1) [A signed external kista export order](/agreements/downloads/#external-kista-export-order), and (2) one [SSH public key](/data-transfers/external-kista/#ssh-key-pair) from the external downloader.
* **Expected response time:** Days.
* **Expected delivery:** Access information sent to the lab user that will make data available for export.
* **Cost:** Included in your data space subscription.

::: warning External dependency
Note that time to successful transfer depend on access to SFTP software and potential firewall adjustments for the external-party that will upload data.
:::


### Network opening

[Network opening orders](/faq/external-transfer/#direct-external-transfers) allows data transfers directly to and from parties outside HUNT Cloud.

<ServiceDesk title="Request a network opening" :template='{
  subject: "Network opening - {labname}",
  body: `Hi HUNT Cloud team,

I would like to request a network opening. 

I have attached a signed network opening order with further information.

We are looking forward to receive confirmation of the opening in our Slack lab channel.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />

* **Who can order:** Data space leaders or Data space compliance coordinators.
* **Required information**: IPv4 address and port number for the external party.
* **Required attachments**: [A signed network opening order](/agreements/downloads/#network-opening-order).
* **Expected response time:** Days.
* **Expected delivery:** Network opening communicated in your Slack lab channel.
* **Cost:** Included in your data space subscription.


## Data space mangement

### Update data space coordinator roles

Click the button below to update your [data space coordinator roles](/coordinator/roles/) under your existing data space.

<ServiceDesk title="Request update of lab coordinator role" :template='{
  subject: "Update lab coordinator role - {labname}",
  body: `Hi HUNT Cloud team,

I would like to update the following coordinator role(s) in our data space:

Role: {role} coordinator  
Name and Surname: {name}  
Department: {department}  
Faculty: {faculty}  
Institution: {institution}  
Phone: {phone}  

I am looking forward to receive an email acknowledging that you have updated our coordinator roles.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  {
    label: "Role",
    key: "role",
    field: "selectone",
    options: [
      "Compliance",
      "Data",
      "Technical",
      "Knowledge",
      "Financial",
    ]},
  { label: "Name and Surname", key: "name", field: "textfield" },
  { label: "Department", key: "department", field: "textfield" },
  { label: "Faculty", key: "faculty", field: "textfield" },
  { label: "Institution", key: "institution", field: "textfield" },
  { label: "Phone number", key: "phone", pattern: "[0-9+]{3,}", field: "textfield" },
]' />

* **Who can order:** Data space leaders or Data space compliance coordinators in active data spaces.
* **Required attachment**: None.
* **Expected delivery time:** Days.
* **Cost:**  Included in your data space subscription.


### Update lab leader role

Click the button below to update lab leader roles for labs attached to your data space.

<ServiceDesk title="Request update of lab leader role" :template='{
  subject: "Update lab leader role - {labname} in {dataspace}",
  body: `Hi HUNT Cloud team,

I would like to update the lab leader role for a lab under our dataspace. 

I have attached a signed lab agreement to this email. 

I am looking forward to receive an email acknowledging that you have updated the role.


Best regards,

`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Dataspace name", key: "dataspace", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />

* **Who can order:** Data space leaders and data space compliance officers.
* **Required attachment**: A new [signed lab order](/agreements/downloads/#lab-order).
* **Expected delivery time:** Days.
* **Cost:** Included in your data space subscription.


