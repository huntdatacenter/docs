---
title: Data controllers
category: Service desk
permalink: /service-desk/data-controller-orders
description: HUNT Cloud service desk orders for data controllers.
sidebarDepth: 2
---

# Service desk orders for data controllers

**This page list predefined service orders for data controllers. To place an order, click the blue button and send us a prefilled email.**

[[toc]]

::: tip Save time

It saves you time to send us the request from your **organizational email**. We use this for identification, and request from private emails need additional verification that takes longer.

:::

Send us a regular [email](/contact) with your request if you can't find what you are looking for on the this page.


## Data processor management

### New data processor agreement

Click on the blue button below to order a HUNT Cloud data processor agreement using the HUNT Cloud template.

<SDButton form="request_new_dp_agreement" />


### Upgrade to a new data processor agreement version

Our HUNT Cloud data processor agreement version gets updated from time to time. As an active data controller you may request upgrades to newer versions in between the regular agreement upgrades.

<ServiceDesk title="Request a data processor agreement version upgrade" :template='{
  subject: "Data processor agreement upgrade - {organization}",
  body: `Hi HUNT Cloud team,

I would like to request to an upgraded data processor agreement for our organization.

I am looking forward to get the data processor agreement on email, and to continue our dialogue on screen.


Best regards,


`,
}' :fields='[
  { label: "Organization", key: "organization", field: "textfield" },
]' />
* **Guide:** [Get going as a data controller](/coordination/get-going/data-controller/)
* **Who can request:** Data controller administrators.
* **Required attachment**: None, although you may add a new [HUNT Cloud data processor agreement form](/coordination/get-going/data-controller/#_6-forward-required-processor-agreement-information-to-hunt-cloud) if you plan to update your contact information.
* **Expected delivery:** PDF agreements for review/signatures.
* **Expected delivery time:** One week.
* **Cost:** There is no direct cost upgrading data processor agreements.


## Service center management

### Add a service center

Click the button below to order a new service center.

<ServiceDesk title="Request a new service center" :template='{
  subject: "New service center order - {datacontroller}",
  body: `Hi HUNT Cloud team,

I would like to request a new service center under our data controller agreement.

I have attached a signed service center agreement form to this email. 

I am looking forward to get the service center agreement on email, and to continue our dialogue on screen.


Best regards,


`,
}' :fields='[
  { label: "Data controller", key: "datacontroller", field: "textfield" },
]' />
* **Guide:** [Get going with your service center](/coordination/get-going/service-center/)
* **Who can order:** Data space leaders and data space administrators under active data controller agreements.
* **Required attachment**: [HUNT Cloud Service Agreement Form](/coordination/get-going/service-center/#_2-forward-required-services-agreement-information-to-hunt-cloud).
* **Expected delivery:** PDF agreements for review/signatures.
* **Expected delivery time:** One week.
* **Next step:** [Order your first data space](/coordination/get-going/data-space/)
* **Cost:** There is no direct cost for a service center. Data space subscription cost and attached resources in labs are billed as specified in the attached invoice profile in accordance with the [Services specifications](/services/specifications/) and [Price list](/prices/pricelist/).








