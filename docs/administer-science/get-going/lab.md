---
title: Lab
category: HUNT Cloud
permalink: /coordination/get-going/lab
sidebarDepth: 1
description: This page helps you to get going with administrative agreements in HUNT Cloud.
---

# Get going with your first lab

**This guide aims to describe the steps to get you going with your first lab in HUNT Cloud.**

Labs in HUNT Cloud are digital environments (laboratories) where scientists access scientific tools and allocated cloud resources for storage, computation and transport.

[[toc]]

Labs are controlled in lab orders that specify lab leaders and coordinators that can authorize lab users and adjust resources. Read more about the lab orders in our [agreement section](/administer-science/agreements/overview/#lab-order)


### 1. Identify your lab team

For each lab, identify one lab leader and one lab coordinator that will manage day-to-day activities in your lab, including adding new lab users and adjusting lab resources. The lab leader and lab coordinator are our point of contact in the lab for dialogue and help, as well as the point of contact for your data space coordinator team.

### 2. Brand your lab

For each lab, and together with your new lab team, invest some time to identify a cool, catchy or powerful name for your lab. The name of your new "scientific instrument" may help strengthen your scientific brand when you communicate with colleagues, collaborators and other interested parties. 

### 4. Plan your lab resources

For each lab, and together with your lab team, approximate your initial requirements for storage and computational power that fits your planned experiments.

Your lab will be configured with one default machine that we call the **`home`** machine. We will deploy your lab with an initial machine type of 4 vCPU and 8 GB of memory (default.b2) that you may upgrade as soon as your lab users are onboarded.

::: tip Machine type adjustments

Machine sizes can be adjusted up and down throughout your lab's life cycle from our [service desk](/administer-science/service-desk/lab-orders.html#compute).
 
:::

You home machine will be configured with three where you need to the initial size. 

* *WORK*. This storage volume is intended for day-to-day activities.
* *ARCHIVE*. This storage volume is intended for long-term data archiving.
* *SCRATCH*. This storage volume is intended for temporary files. Restore is -not- activated for this volume.

The combined minimum allocation for the three volumes are 1 terabyte (1000 gigabytes). To illustrate, a typical setup for epidemiology labs may be 300 GB for `work`, 300 GB for `scratch` and 400 GB for `archive`.

[Contact](/contact) us if you think we can help in the process of guiding your initial storage sizes. 


::: warning Duplicate data copies

The configuration of `work` and `scratch` volumes comes with 30 days default restore functionality of data (backup). This service duplicates the data on these volumes. Thus, in your planning you might want to double the volume size compared to the data you plan to add on the volumes.

:::

::: danger Constraint on downgrades

Storage volumes can be increased -not decreased- in size throughout your lab's lifecycle, and you pay per allocated terabyte. Therefore, we advice labs to start small and increase their storage volume sizes in sync with the data growth.

:::

Your home machine type and attached storage will be billed in accordance with our price list. Head over to our [prices section](/administer-science/prices/introduction) to read more about the price model, see our price list and test your cost in our [prices calculator](/administer-science/prices/calculator/). Note that the default configuration of home machines are priced as one year commitment. 

[Contact us ](/contact) for guidance on both generic and tailored setups if you think we may help. 

### 5. Prepare your lab order

- Download the "[Lab order](/administer-science/agreements/downloads/#lab-order)" on your local machine (right click on the link and select "Save Link As...")
- Open the PDF on your local machine and either (i) print and complete the fields by hand or (i) open in an PDF-editor and complete the fields digitally. Field descriptions are included in the "Clarification of the form fields" under the link above. 
- Add your own signature and the signature of the lab leader.

### 6. Place your lab order

Head over to our service desk to place your lab order.

::: tip Service desk

[Click here to order your lab](/administer-science/service-desk/data-space-orders.html#new-lab)

:::

* (1) Attach the PDF-file of the lab order that includes both the signature of the data space leader and lab leader.
* (2) Add your preferred storage volume sizes in the email template.


### 7. Add your first lab users

Now that your lab order is signed, sealed and deliver, it's a good time for your lab leader to identify the lab users that will be using the lab. 

You lab leader is responsible for the identification and verification of individual lab users that they authorize access to the lab that they manage. Such authorizations are documented in individual user agreements for each user in each lab they will access.

::: tip Service desk

[Click here to add users to your lab](/administer-science/service-desk/lab-orders.html#add-a-new-lab-user)

:::

- Download the "[User agreement](/administer-science/agreements/downloads/#user-agreement)" on your local machine (right click on the link and select "Save Link As...").
- Open the PDF on your local machine and either (i) print and complete the fields by hand or (i) open in an PDF-editor and complete the fields digitally. Field descriptions are included in the "Clarification of the form fields" under the link above. 
- Ensure that both the lab leader and the new user sign the agreement.
- Forword the signed agreements us using the service desk link above.

::: warning Start with your core team

We recommend that you onboard no more than three lab users as a start, including your technical data space coordinator, so we can ensure that both data and tools are in place as you like before the full team enters your lab.

:::

Well done! Time for fresh coffee!
