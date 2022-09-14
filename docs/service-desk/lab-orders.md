---
title: Labs
category: Service desk
permalink: /service-desk/lab-orders
description: HUNT Cloud service desk orders for labs.
sidebarDepth: 2
---

# Service desk orders for labs

**This page list predefined service orders for activities within one lab. To place an order, click the blue button and send us a prefilled email.**

[[toc]]

::: tip Save time

It saves you time to send us the request from your **organizational email**. We use this for identification, and request from private emails need additional verification that takes longer.

:::

Send us a regular [email](/contact) with your request if you can't find what you are looking for on the this page.


## User management

::: warning Active lab users

Orders for active lab users, such as workbench access and password resets, are listed in our [user orders page](/service-desk/user-orders).

:::

### Add a new lab user

Click the button below to order access for a new user to your lab.

<ServiceDesk title="Request lab access for a new user" :template='{
  subject: "New labuser - {username} @ {labname}",
  body: `Hi HUNT Cloud team,

I would like to request access for a new lab user.

I have attached a signed user agreement to this email, and asked our new colleague to install and activate the Signal app for the key transfer. 

We are looking forward to start the onboarding process.


Best regards,


`,
}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />

* **Who can order:** Lab leaders and lab coordinators.
* **Required attachment**: [A signed user agreement](/agreements/downloads/#user-agreement).
* **Expected response time:** One week.
* **Expected delivery:** Lab keys and VPN certificate.
* **Next step:** [Prepare your key transfer](/getting-started/).
* **Cost:** Included in your lab subscription.


### Deactivate lab user

This order closes access for lab users that no longer need to use your lab, for example when projects ends or lab users switches jobs.


<ServiceDesk title="Request lab user deactivation" :template='{
  subject: "Deactiave lab user- {username} @ {labname}",
  body: `Hi HUNT Cloud team,

I would like to deactivate lab access for one of our lab users:
 
username = {username} 
lab name = {labname}  

I am looking forward to a confirmation of the deactivation on email.


Best regards,



`,
}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />

* **Who can order:** Lab leaders and lab coordinators can deactivate access for all lab users. Lab users can deactivate their own lab access.
* **Expected response time:** Days.
* **Expected delivery:** Confirmation on email that lab access is deactivated.
* **Cost:** Included in your lab subscription.


### Reactivate lab user

Lab users are deactivated on request or after 180 inactive days. Lab leaders and lab coordinator can reactivate their access. We will need one order per lab for multiple lab access reactivations.

<ServiceDesk title="Request lab user reactivation" :template='{
  subject: "Reactivate lab user {username} @ {labname}",
  body: `Hi HUNT Cloud team,

I would like to reactivate access for one of our lab users.

I have attached a new signed user agreement to this email, and asked our colleague to install and activate the Signal app for the key transfer.

I am looking forward to a confirmation of the reactivation on email.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Name of user", key: "username", pattern: "[-aA-zZ0-9 ]{3,}", hint: "Name of user  should include only letters aA-zZ, 0-9 or dash.", field: "textfield" }
]' />

* **Who can order:** Lab leaders and lab coordinators.
* **Required attachment**: [A new user agreement](/agreements/downloads/#user-agreement).
* **Expected response time:** One week.
* **Expected delivery:** Lab keys and VPN certificate.
* **Next step:** [Prepare your key transfer](/getting-started/).
* **Cost:** Included in your lab subscription.


### Renew lab user agreement

Lab user agreements needs to be renewed approximately every two years for accounts to be active. Click the button below to renew the lab user areement for one user.

<ServiceDesk title="Renew user agreement" :template='{
  subject: "Renew lab user agreement - {labuser} @ {labname}",
  body: `Hi HUNT Cloud team,

I would like to renew that lab user agreement for one of our lab users.

I have attached a new signed user agreement to this email.

I am looking forward to a confirmation of the renewal on email.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "User name", key: "labuser", pattern: "[-a-z0-9]{3,}", hint: "Lab user should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" }
]' />

* **Who can order:** Lab leaders and lab coordinators.
* **Required attachment**: [A signed user agreement](/agreements/downloads/#user-agreement).
* **Expected response time:** Days.
* **Expected delivery:** Email acknowledgment.
* **Cost:** Included in your lab subscription.







## Compute

### Update machine size

Increase or decrease the computational power of one of your existing lab machines to a new [machine type](/services/machine-types/).


<ServiceDesk title="Request a machine size update" :template='{
  subject: "Update machine size {labname}",
  body: `Hi HUNT Cloud team,

I would like to request a machine update: 

lab name = {labname}  
machine name = {machinename}  
current machine type = {default.b1}  
new machine type = {newmachine}  

I am aware that the update will require a machine restart.

Let us touch base in our Slack lab channel to schedule a time for the restart that fits our scientific activities.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Machine name", key: "machinename", pattern: "^[a-z][0-9]{3,}$", hint: "Machine name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
   { label: "Current machine type", key: "default.b1", pattern: "^[a-z][0-9]{3,}$", hint: "Machine type should include only lowercase letters a-z, 0-9.", field: "textfield" },
    { label: "New machine type", key: "newmachine", pattern: "^[a-z][0-9]{3,}$", hint: "Machine type should include only lowercase letters a-z, 0-9.", field: "textfield" }
]' />


* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days.
* **Expected delivery:** Lab machine with updated size.
* **Requirement:** The procedure require a machine restart that needs to be scheduled with your lab users.
* **Cost:** As specified in the [Services specifications](/services/specifications/) and [Price list](/prices/pricelist/).


### New CPU machine

Add a [new machine](/services/machine-types/) to your lab. A CPU machine is the default lab machine with CPU and memory aimed at data analysis.

<ServiceDesk title="Request a new lab machine" :template='{
  subject: "New CPU machine {labname}",
  body: `Hi HUNT Cloud team,

I would like to request a new CPU machine in our lab: 

lab name = {labname}  
machine type = {default.b2}  
storage size = {terabytes}  
subscription = {type}

I am looking forward to receive access information in our Slack lab channel when the machine is up and running.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Machine type", key: "default.b2", pattern: "^[a-z0-9. ]{3,}$", hint: "Machine type should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Storage size (in terabytes)", key: "terabytes", pattern: "[-aA-zZ0-9 ]{1,5}", hint: "Storage size should include only letters aA-zZ, 0-9, or dash. (max 5 characters)", field: "textfield" },
    {
    label: "Subscription",
    key: "type",
    field: "selectone",
    options: [
      "Commitment",
      "On-demand",
      "Blue",
    ],
    pattern: "{1,}"
  },
]' />


* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days.
* **Expected delivery:** New lab machine accessible from your home machine.
* **Cost:** As specified in the [Services specifications](/services/specifications/) and [Price list](/prices/pricelist/).




### New GPU machine

Add a new [GPU machine](/services/machine-types/#gpu-accelerator-machine-types) to your lab.

<ServiceDesk title="Request a new GPU machine" :template='{
  subject: "New GPU machine {labname}",
  body: `Hi HUNT Cloud team,

I would like to request a new GPU machine in our lab: 

lab name = {labname}  
gpu type = {nvidia.p100}
machine type = {default.b2}  
storage size = {terabytes}  
subscription = {type}

I am looking forward to receive access information in our Slack lab channel when the machine is up and running.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "GPU type", key: "nvidia.p100", pattern: "^[aA-zZ0-9.]{3,}$", hint: "GPU type should include only letters aA-zZ, 0-9, or dot.", field: "textfield" },
  { label: "Machine type", key: "default.b2", pattern: "^[a-z0-9]{3,}$", hint: "Machine type should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Storage size (in terabytes)", key: "terabytes", pattern: "[-aA-zZ0-9 ]{1,5}", hint: "Storage size should include only letters aA-zZ, 0-9, or dash. (max 5 characters)", field: "textfield" },
    {
    label: "Subscription",
    key: "type",
    field: "selectone",
    options: [
      "Commitment",
      "On-demand",
      "Blue",
    ],
    pattern: "{1,}"
  },
]' />

* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days (subject to availability).
* **Expected delivery:** New lab machine with GPU accelerator accessible from your home machine.
* **Cost:** As specified in the [Services specifications](/services/specifications/) and [Price list](/prices/pricelist/).




### Fleet of blue machines

Add a fleet of blue machines to distribute analysis for large scale analysis, for example by utilizing tools such as our [BlueBox](https://docs.hdc.ntnu.no/working-in-your-lab/analytical-tools/bluebox/).

<ServiceDesk title="Request a fleet of Blue machines" :template='{
  subject: "Fleet of blue machines {labname}",
  body: `Hi HUNT Cloud team,

I would like to request a fleet of the following blue machines: 

lab name = {labname}  
number of machines = {number}
machine type = {default.b2}  
storage size per machine = {terabytes}  

I am looking forward to receive access information in our Slack lab channel when the fleet is up and running.


Best regards,


`,
}' :fields='[
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  { label: "Number of machines", key: "number", pattern: "^[1-9][0-9]?$", hint: "Number of machines should include only numbers 0-9.", field: "textfield" },
  { label: "Machine type", key: "default.b2", pattern: "^[a-z0-9 ]{3,}$", hint: "Machine type should include only lowercase letters a-z, 0-9.", field: "textfield" },
  { label: "Storage size per machine (in terabytes)", key: "terabytes", pattern: "[-aA-zZ0-9 ]{1,5}", hint: "Storage size should include only letters aA-zZ, 0-9, or dash. (max 5 characters)", field: "textfield" },
]' />

* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days (subject to availability).
* **Expected delivery:** Multiple blue machines accessible from your home machine.
* **Cost:** As specified in the [Services specifications](/services/specifications/) and [Price list](/prices/pricelist/).















## Store

### Expand existing volume

You may expand the existing storage volumes inside your lab up to a maximum of 20TB. We will need separate orders for each individual volume you plan to expand. Read more in our [coordinator FAQ](/data/faq/#volumes).

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=Storage%20volume%20expansion%20-%20%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20storage%20volume%20expansion%3A%20%0A%0Alab%20name%20%3D%20%7Blab%20name%7D%20%20%0Amachine%20name%20%3D%20%7Bmachine%20name%7D%0Avolume%20name%20%3D%20%7Bvolume%20name%7D%0Acurrent%20size%20%3D%20%7Bnumber%20of%20terabytes%7D%0Anew%20size%20%3D%20%7Bnumber%20of%20terabytes%7D%0A%0AI%20am%20aware%20that%20the%20expansion%20will%20require%20a%20machine%20restart.%0A%0ALet%20us%20touch%20base%20in%20our%20Slack%20lab%20channel%20to%20schedule%20a%20time%20for%20the%20restart%20that%20fits%20our%20scientific%20activities.%0A%0ABest%2C" class="nav-link external action-button">
    Request storage volume expansion
  </a>
</p></div></div>

* **Who can order:** Lab leaders and lab coordinators.
* **Required information**: lab name, machine name, volume name and intended size.
* **Expected response time:** One week. The volume expansion requires a machine restart that needs to be scheduled 9-11am on a workday.
* **Expected delivery:** Increased storage capacity.
* **Cost:** New storage is included in your total storage plan.

::: details Identify the required information

You may identify lab name, machine name and volume name from your resource reports. Alternatively, you may log into your lab machine using SSH and fetch the information manually

**Lab and machine name**

You will find the lab and machine name for you home machine when you log into your home machine.

```bash
Welcome to `LAB NAME`.

For the record, if you shouldn't be here - please
leave and report the incident to cloud@hunt.ntnu.no.

Last login: Sun Dec  3 12:29:28 2017 from 10.10.10.10
your-username@`your-labname`-home~$
```

Example from above:

```bash
# -- Machine name
your-labname-home

# -- Lab name (remove -home)
your-labname
```


If you plan to expand volumes of machines other than `home`, log into your machine of choice to identify the exact machine name:

```bash
# -- Machine name
your-labname-iaas-helya-gpu1
```

.

**Volume name and current size**

You can identify the volume name while you are logged into the machine where you need to expand the storage:

```bash
# -- Command
df -h | grep -E '(^Filesystem|/mnt/)'

# -- Output example
Filesystem      Size  Used Avail Use% Mounted on
/dev/vdc1       197G   61M  187G   1% /mnt/work
/dev/vdd1       493G   71M  467G   1% /mnt/archive
/dev/vde1       197G   60M  187G   1% /mnt/scratch
/dev/vdf1        99G   60M   94G   1% /mnt/cargo
```

The above example shows for example that `/mnt/archive` has a current `Size` of 493 gigabytes shown (500 gigabytes allocated).

:::



### New volume

You may add new volumes to your lab machines. We will need separate orders for each individual volume you plan to add.  Read more in our [coordinator FAQ](/data/faq/#volumes).

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=New%20storage%20volume%20-%20%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20new%20storage%20volume%3A%20%0A%0Alab%20name%20%3D%20%7Blab%20name%7D%20%20%0Amachine%20name%20%3D%20%7Bmachine%20name%7D%0Avolume%20name%20%3D%20%7Bvolume%20name%7D%0Asize%20%3D%20%7Bnumber%20of%20terabytes%7D%0A%0AI%20am%20aware%20that%20the%20expansion%20will%20require%20a%20machine%20restart.%20So%2C%20let%20us%20touch%20base%20in%20our%20Slack%20lab%20channel%20to%20schedule%20a%20time%20for%20the%20restart%20that%20fits%20our%20scientific%20activities.%0A%0ABest%2C" class="nav-link external action-button">
    Request a new storage volume
  </a>
</p></div></div>

* **Who can order:** Lab leaders and lab coordinators.
* **Required information**: lab name, machine name, volume name and total size in terabytes.
* **Expected response time:** One week. The volume expansion requires a machine restart that needs to be scheduled 9-11 am CET on a workday.
* **Expected delivery:** New storage volume attached (mounted) to your lab machine.
* **Cost:** New storage is included in your total storage plan.

::: details Identify the required information

You may identify lab name, machine name and volume name from your resource reports. Alternatively, you may log into your lab machine using SSH and fetch the information manually

**Lab and machine name**

You will find the lab and machine name for you home machine when you log into your home machine.

```bash
Welcome to `LAB NAME`.

For the record, if you shouldn't be here - please
leave and report the incident to cloud@hunt.ntnu.no.

Last login: Sun Dec  3 12:29:28 2017 from 10.10.10.10
your-username@`your-labname`-home~$
```

Example from above:

```bash
# -- Machine name
your-labname-home

# -- Lab name (remove -home)
your-labname
```


If you plan to expand volumes of machines other than `home`, log into your machine of choice to identify the exact machine name:

```bash
# -- Machine name
your-labname-iaas-helya-gpu1
```


**Volume name and current size**

You can identify your current volume names while you are logged into the machine where you need to expand the storage. For example on your home machine:

```bash
# -- Command
df -h | grep -E '(^Filesystem|/mnt/)'

# -- Output example
Filesystem      Size  Used Avail Use% Mounted on
/dev/vdc1       197G   61M  187G   1% /mnt/work
/dev/vdd1       493G   71M  467G   1% /mnt/archive
/dev/vde1       197G   60M  187G   1% /mnt/scratch
/dev/vdf1        99G   60M   94G   1% /mnt/cargo
```

You may use this information to plan your new storage names and sizes. We typically recommend to go by type of storage and numbers as usage tends to change over time, such as `archive2`, `work2` etc.
:::



## Data transports

::: tip External data exports

Head over to the [data space orders](/service-desk/data-space-orders) to request data exports outside HUNT Cloud, such as external export kistas and network openings.

:::

### Internal kista

[Internal kista](/data-transfers/internal-kista/) is the best way to transfer data between two labs in HUNT Cloud.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=Internal%20kista%20order%20-%20%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20an%20internal%20kista%20from%20%7Blabname%7D%20to%20%7Blabname%7D.%0A%0AI%20have%20attached%20the%20signed%20internal%20kista%20order.%0A%0AWe%20are%20looking%20forward%20to%20receive%20access%20information%20in%20our%20Slack%20lab%20channel.%0A%0ABest%2C" class="nav-link external action-button">
    Request an internal kista
  </a>
</p></div></div>

* **Who can order:** Lab leaders or lab coordinators from the uploader lab.
* **Required attachment**: [A signed internal kista order](/agreements/downloads/#internal-kista-order).
* **Expected response time:** Days.
* **Expected delivery:** Access information communicated in your Slack lab channel.
* **Cost:** Included in your lab subscription.





## Others

### Update lab coordinator role

Click the button below to update the [lab coordinator](/coordinator/roles/#lab-coordinator) role for a lab attached to your data space.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=Update%20lab%20coordinator%20role%20-%20%7Blab%20name%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20update%20the%20coordinator%20role%20in%20our%20Lab%3A%0A%0A%2A%20Lab%20name%3A%20%0A%0ANew%20lab%20coordinator%3A%20%0A%0A%2A%20Name%3A%20%20%0A%2A%20Department%3A%20%20%0A%2A%20Faculty%3A%20%20%0A%2A%20Institution%3A%20%20%0A%2A%20Email%3A%20%20%0A%2A%20Phone%3A%20%20%0A%0AI%20am%20looking%20forward%20to%20receive%20an%20email%20acknowledging%20that%20you%20have%20updated%20the%20role.%0A%0ABest%2C" class="nav-link external action-button">
    Request update of lab coordinator role
  </a>
</p></div></div>

* **Who can order:** Lab leaders.
* **Required attachment**: None.
* **Expected delivery time:** Days.
* **Cost:** Included in your lab subscription.



