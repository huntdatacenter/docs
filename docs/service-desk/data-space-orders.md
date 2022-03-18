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
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=New%20lab%20-%20%7Bnew%20labname%7D%20%40%20%7Bdata%20space%20name%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20new%20lab%20under%20our%20data%20space.%0A%0AI%20have%20attached%20a%20signed%20lab%20agreement%20to%20this%20email.%20%0A%0AWe%20would%20like%20to%20start%20with%20the%20following%20machine%20type%20for%20our%20home%20machine%3A%20%0A%0AMACHINE_TYPE%20%3D%20default.b2%0A%0AWe%20would%20like%20to%20attached%20the%20following%20storage%20volume%20sizes%20to%20our%20home%20machine%20%28numbers%20are%20in%20Gigabytes%29%3A%0A%0AARCHIVE%20%3D%20400%20%20%0AWORK%20%3D%20300%20%20%0ASCRACH%20%3D%20300%20%20%0A%0AOur%20lab%20leader%20and%20lab%20coordinator%20will%20as%20quickly%20as%20possible%20forward%20individual%20user%20agreements%20for%20our%20initial%20users%20as%20separate%20requests%20using%20this%20link%3A%20%0A%0Ahttps%3A//docs.hdc.ntnu.no/service-desk/lab-orders.html%23add-a-new-lab-user%0A%0AI%20am%20looking%20forward%20to%20receive%20an%20email%20verification%20stating%20that%20the%20lab%20is%20up%20and%20running.%0A%0ABest%2C" class="nav-link external action-button">
    Request a new lab
  </a>
</p></div></div>

* **Who can order:** Data space leaders and data space compliance coordinators in active data spaces.
* **Required attachment**: [A signed lab order](/agreements/downloads/#lab-order) and information on storage volume sizes and machine type for the home machine (see below).
* **Expected response time:** One week.
* **Next step**: [Add the first lab users](/service-desk/lab-orders.html#add-a-new-lab-user) in new lab. 
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

The above numbers are in Gigabytes (1000 Gigabytes = 1 Terabyte). To illustrate, if you want your archive volume to be 2 Terabyte, specify **`ARHICVE = 2000`** in your order. 

**More information**

See the "Lab" section in our [Services specifications](/services/specifications/) for more information on the lab service and default configuration. [Contact us](/contact) if you need guidance on the size selection.

:::





### Delete lab

Click the button below to order a lab deletion of an active lab under your data space.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=Lab%20deletion%20order%20-%20%7Blabname%7D%40%7Bdata%20space%20name%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20the%20following%20lab%20under%20our%20data%20space%20to%20be%20deleted%3A%0A%0Alab%3D%7Blabname%7D%0A%0AI%20have%20attached%20a%20signed%20lab%20deletion%20order%20to%20this%20email%20confirming%20the%20request.%20%0A%0AWe%20have%20already%20exported%20the%20data%20that%20we%20need%20from%20the%20lab.%20%0A%0AI%20am%20aware%20that%20all%20data%20in%20the%20lab%20will%20be%20irrevocably%20destroyed%20and%20can%20not%20be%20recreated%20once%20this%20order%20is%20completed.%0A%0AI%20am%20looking%20forward%20to%20receive%20a%20written%20notification%20on%20email%20confirming%20that%20the%20lab%20and%20all%20attached%20data%20is%20deleted.%0A%0ABest%2C" class="nav-link external action-button">
    Request a lab deletion
  </a>
</p></div></div>

* **Who can order:** Data space leaders and Lab leaders in collaboration.
* **Required attachment**: [A signed lab deletion order](/agreements/downloads/#lab-deletion-order).
* **Expected response time:** Weeks.
* **Expected delivery:** Countersignature from HUNT Cloud on your lab deletion order confirming that lab data, including online and offline duplicate copies, are deleted.
* **Cost:** Included in your lab subscription.

::: danger

Once your lab data is deleted it can not be recreated. You must ensure that you have exported all data that you intend to preserve from the lab -before- you order the lab deletion. [Contact us](/contact) if you need guidance with this work.

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
* **Cost:** Included in your data space subscription.




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
* **Cost:** Included in your data space subscription.

