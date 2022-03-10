---
title: Data spaces
category: Service desk
description: HUNT Cloud service desk orders for data spaces.
sidebarDepth: 2
---

# Service desk orders for data spaces

**This page list predefined service orders for data space management. To place an order, click the blue botton and send us a prefilled email.**

[[toc]]

::: tip

(1) Send your order from your organizational email that was registered in your user agreement. (2) Send us a regular [email](/contact) with your request if you can't find what you are looking for on the this page.

:::



## Lab mangement

### New lab

Click the button below to order a new lab under your existing data space.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=New%20lab%20-%20%7Bnew%20labname%7D%20%40%20%7Bdata%20space%20name%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20new%20lab%20under%20our%20data%20space.%0A%0AI%20have%20attached%20a%20signed%20lab%20agreement%20to%20this%20email.%20%0A%0AWe%20will%20forward%20individual%20user%20agreements%20for%20our%20initial%20lab%20users%20so%20you%20can%20get%20going%20with%20the%20lab%20onboarding.%0A%0AI%20would%20like%20to%20attached%20the%20following%20machine%20type%20as%20our%20home%20machine%3A%0A%0Amachine_type%3D%7Bdefault.b1%7D%0A%0AI%20would%20like%20to%20attached%20the%20following%20sizes%20of%20the%20default%20storage%20volumes%20to%20our%20home%20machine.%20%0A%0Awork_volume_size_in_gb%3D200%20%20%0Aarchive_volume_size_in_gb%3D400%20%20%0Ascratch_volume_size_in_gb%3D300%20%20%0Acargo_volume_size_in_gb%3D100%20%20%0A%0A%281%20TB%20%3D%201000%20GB%2C%20minimum%20total%20allocation%20is%201000%20gb%29%0A%0AI%20will%20forward%20individual%20machine%20request%20in%20case%20we%20want%20more%20machines%20in%20our%20lab.%0A%0AI%20am%20looking%20forward%20to%20an%20email%20verification%20when%20the%20lab%20is%20up%20and%20running.%0A%0ABest%2C" class="nav-link external action-button">
    Request a new lab
  </a>
</p></div></div>

* **Who can order:** Data space leaders and data space compliance coordinators in active data spaces.
* **Required attachment**: [A signed lab order](/agreements/downloads/#lab-order), individual lab user agreements in separate orders arranged by the lab leader (see order), desired machine type and storage volumes sizes for the default home machine (see below).
* **Expected response time:** One week.
* **Cost:** One lab subscription as specified in the [Services specifications](/services/specifications/) and [Price list](/prices/pricelist/).

::: details More on the required resource specifications

The default lab setup comes with one (1) virtual machine where you can store your data and do analysis. We have named this machine your **`home`**-machine. You need to specify the start resources for this machine at the time of your order.

*Machine type*. The email template asks you to specify the machine type for your home machine. See the coordinator section for information on the [available machine types](/services/machine-types/). [Contact us](/contact) if you need guidance on the selection.

*Storage volumes*. The home machine comes with four storage volumes that is tailored for various scientific activities. You need to specify your choice of these storage sizes: 

work_volume_size_in_gb=200  
archive_volume_size_in_gb=400  
scratch_volume_size_in_gb=300  
cargo_volume_size_in_gb=100  

Note that the storage is stated as Gigabytes. 1 Terabyte equals 1000 Gigabytes. To illustrate, if you want your archive volume to be 2 TB, specicy 2000 in the list above. [Contact us](/contact) if you need guidance on the size selection.

The minimum storage allocation for your home machine is a combined size of 1000 Gigabytes divided across the four volumes. 

See the "Lab" section in our [Services specifications](/services/specifications/) for more information on the lab service and default configuration.

:::



## Transport

::: tip Internal transfers and import

Data transfers inside HUNT Cloud and external data imports can be ordered from our [lab orders page](/service-desk/lab-orders).

:::

### External export kista

The [external export kista](/faq/external-transfer/#faq-on-external-data-transfer) allows labs to make data available for external parties outside HUNT Cloud in a compliant manner.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=External%20export%20kista%20order%20-%20%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20an%20external%20export%20kista%20for%20%7Blabname%7D.%0A%0AI%20have%20attached%20two%20files%3A%20%281%29%20the%20signed%20external%20eport%20kista%20order%2C%20and%20%282%29%20the%20public%20SSH%20key%20from%20the%20external%20uploader.%0A%0AWe%20are%20looking%20forward%20to%20receive%20access%20information%20en%20email.%0A%0ABest%2C" class="nav-link external action-button">
    Request an external export kista
  </a>
</p></div></div>

* **Who can order:** Data space leaders or Data space compliance coordinators.
* **Required attachments**: (1) [A signed external kista export order](/agreements/downloads/#external-kista-export-order), and (2) one [SSH public key](/data-transfers/external-kista/#ssh-key-pair) from the external uploader.
* **Expected response time:** Days.
* **Expected delivery:** Access information sent to the lab user that will make data available for export.
* **Cost:** Included in your lab subscription.




### Network opening

[Network opening orders](/faq/external-transfer/#direct-external-transfers) allows data transfers directly to and from parties outside HUNT Cloud.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=Network%20opening%20-%20%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20network%20opening.%20%0A%0AI%20have%20attached%20a%20signed%20network%20opening%20order%20with%20further%20information.%0A%0AWe%20are%20looking%20forward%20to%20receive%20confirmation%20of%20the%20opening%20in%20our%20Slack%20lab%20channel.%0A%0ABest%2C" class="nav-link external action-button">
    Request a network opening
  </a>
</p></div></div>

* **Who can order:** Data space leaders or Data space compliance coordinators.
* **Required information**: IPv4 address and port number for the external party.
* **Required attachments**: [A signed network opening order](/agreements/downloads/#network-opening-order).
* **Expected response time:** Days.
* **Expected delivery:** Network opening communicated in your Slack lab channel.
* **Cost:** Included in your lab subscription.

