---
title: Lab orders
category: Service desk
permalink: /administer-science/service-desk/lab-orders
description: HUNT Cloud service desk orders for labs.
outline: 2
---

# Service desk orders for labs

**This page list predefined service orders for activities within one lab. To place an order, click the blue button and send us a pre-filled email.**

[[toc]]

::: tip Save time

It saves you time to send us the request from your **organizational email**. We use this for identification. Requests from private emails need additional verification that takes longer.

:::

Send us a regular [email](/contact) with your request if you can't find what you are looking for on the this page.


## User management

::: warning Active lab users

Orders for active lab users, such as workbench access and password resets, are listed in our [user orders page](/do-science/service-desk/).

:::

### Add a new lab user

Click the button below to order access for a new user to your lab.

<SDButton form="request_access_new_user" />

* **Who can order:** Lab leaders and lab coordinators.
* **Required attachment**: [A signed user agreement](/administer-science/agreements/downloads#user-agreement).
* **Expected response time:** Days.
* **Expected delivery:** Lab keys and VPN certificate.
* **Next step:** [Prepare your key transfer](/do-science/lab-access/).
* **Cost:** Included in your lab subscription.


### Deactivate lab user

This order closes access for lab users that no longer need to use your lab, for example when projects ends or lab users switches jobs.

<SDButton form="request_lab_user_deactivation" />

* **Who can order:** Lab leaders and lab coordinators can deactivate access for all lab users. Lab users can deactivate their own lab access.
* **Expected response time:** Days.
* **Expected delivery:** Confirmation on email that lab access is deactivated.
* **Cost:** Included in your lab subscription.


### Reactivate lab user

Lab users are deactivated on request or after 180 inactive days. Lab leaders and lab coordinator can reactivate their access. We will need one order per lab for multiple lab access reactivations.

<SDButton form="reactivate_lab_user" />

* **Who can order:** Lab leaders and lab coordinators.
* **Required attachment**: [A new user agreement](/administer-science/agreements/downloads#user-agreement).
* **Expected response time:** Days.
* **Expected delivery:** Lab keys and VPN certificate.
* **Next step:** [Prepare your key transfer](/do-science/lab-access/).
* **Cost:** Included in your lab subscription.

### Update lab coordinator role

Click the button below to update the [lab coordinator](/administer-science/roles#lab-coordinator) role for a lab attached to your data space.

<SDButton form="request_coordinator_update" />

* **Who can order:** Lab leaders.
* **Required attachment**: None.
* **Expected delivery time:** Days.
* **Cost:** Included in your lab subscription.


### Renew lab user agreement

Lab user agreements needs to be renewed approximately every two years for accounts to be active. Click the button below to renew the lab user agreement for one user.

<SDButton form="request_renew_user_agreement" />

* **Who can order:** Lab leaders and lab coordinators.
* **Required attachment**: [A signed user agreement](/administer-science/agreements/downloads#user-agreement).
* **Expected response time:** Days.
* **Expected delivery:** Email acknowledgment.
* **Cost:** Included in your lab subscription.


## Compute

### Update CPU machine size

Increase or decrease the computational power of one of your existing lab machines to a new [machine type](/administer-science/services/machine-types).

<SDButton form="request_machine_size_update" />

* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days.
* **Expected delivery:** Lab machine with updated size.
* **Requirement:** The procedure require a machine restart that needs to be scheduled with your lab users.
* **Cost:** As specified in the [Services specifications](/administer-science/services/specifications) and [Price list](/administer-science/prices/pricelist).


::: warning GPU machines

Machine types deployed with GPU (GPU machines) can not be updated after deployment due to technical constraints. To update GPU machine types, (1) request a new GPU machine with your preferred machine type, (2) transfer any data or configuration files, and (3) request the deletion of your original machine.

:::


### New CPU machine

Add a [new machine](/administer-science/services/machine-types) to your lab. A CPU machine is the default lab machine with CPU and memory aimed at data analysis.

<SDButton form="request_new_cpu" />

* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days.
* **Expected delivery:** New lab machine accessible from your home machine.
* **Cost:** As specified in the [Services specifications](/administer-science/services/specifications) and [Price list](/administer-science/prices/pricelist).


### New GPU machine

Add a new [GPU machine](/administer-science/services/machine-types#gpu-accelerator-machine-types) to your lab.

<SDButton form="request_new_gpu" />

* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days (subject to availability).
* **Expected delivery:** New lab machine with GPU accelerator accessible from your home machine.
* **Cost:** As specified in the [Services specifications](/administer-science/services/specifications) and [Price list](/administer-science/prices/pricelist).


<!--

### Fleet of blue machines

Add a fleet of blue machines to distribute analysis for large scale analysis, for example by utilizing tools such as our [BlueBox](/do-science/tools/analytical/bluebox/).

<SDButton form="request_blue_fleet" />

* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days (subject to availability).
* **Expected delivery:** Multiple blue machines accessible from your home machine.
* **Cost:** As specified in the [Services specifications](/administer-science/services/specifications) and [Price list](/administer-science/prices/pricelist).
-->

### Shelve machine order

Instance shelving allows you to stop an instance without having it consume compute resources. Shelved instance keeps the storage and can be started in the future when needed again.

<SDButton form="request_machine_shelving" />

* **Who can order:** Lab leaders and lab coordinators.
* **Required information**: lab name and machine name.
* **Expected response time:** Days.
* **Cost:** During unshelving a machine will be started with same [machine type](/administer-science/services/machine-types#compute-optimized-machine-types) as before shelving

### Unshelve machine order

This form serves for unshelving a machine after it has been shelved.

<SDButton form="request_machine_unshelving" />

### Delete a machine

Click the button below to order a machine deletion.

<SDButton form="request_machine_deletion" />

::: danger

Once data on your machine is deleted, it can not be recreated. You must ensure that you have exported all data that you intend to preserve from the machine **before** you order the machine deletion. [Contact us](/contact) if you need guidance with this work.

:::

* **Who can order:** Lab leaders and lab coordinators.
* **Required information**: lab name and machine name.
* **Expected response time:** Days.
* **Cost:** No additional costs.


## Store

### Expand existing volume

You may expand the existing storage volumes inside your lab up to a maximum of 20TB. We will need separate orders for each individual volume you plan to expand. Read more in our [data FAQ](/administer-science/data/faq#volumes).

<SDButton form="request_expand_existing_volume" />

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
leave and report the incident to cloud.support+hunt-cloud-contact-form@hunt.ntnu.no.

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

You may add new volumes to your lab machines. We will need separate orders for each individual volume you plan to add.  Read more in our [coordinator FAQ](/administer-science/data/faq#volumes).

<SDButton form="request_new_storage_volume" />

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
leave and report the incident to cloud.support+hunt-cloud-contact-form@hunt.ntnu.no.

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

### Volume Deletion

This form serves for ordering of volume deletion.

<SDButton form="request_volume_deletion" />

::: danger

Once data on volume is deleted, it can not be recreated. You must ensure that you have exported all data that you intend to preserve from the volume **before** you order a volume deletion. [Contact us](/contact) if you need guidance with this work.

:::

* **Who can order:** Lab leaders.
* **Required information**: lab name, machine name, volume name.
* **Expected response time:** Days
* **Cost:** No additional costs.

### Tape archive

Click button below to order a long term archiving of your data

<SDButton form="request_tape_archive" />

* **Who can order:** Lab leader and coordinator.
* **Required information:** size of dataset and retention period.
* **Expected response time:** Weeks.
* **Cost:** Can be found in our [price list](/administer-science/prices/pricelist#current)


## Data transfers

::: tip External data exports

Head over to the [data space orders](/administer-science/service-desk/data-space-orders) to request data exports outside HUNT Cloud, such as external export kistas and network openings.

:::

### Internal kista

[Internal kista](/do-science/data-transfers/internal-kista) is the best way to transfer data between two labs in HUNT Cloud.

<!-- <SOButton title="Prepare internal kista order" order="internal_kista" /> -->

<SDButton form="request_internal_kista" />

* **Who can order:** Lab leaders or lab coordinators from the uploader lab.
* **Required attachment**: [A signed internal kista order](/administer-science/agreements/downloads#internal-kista-order).
* **Expected response time:** Days.
* **Expected delivery:** Access information communicated in your Slack lab channel.
* **Cost:** Included in your lab subscription.

## Community membership

### Add a new community member

Labs under a BLUE data space subscription levels may invite collaborators to their [HUNT Cloud community](/do-science/community/) channels that are not active users in their lab. Membership is voluntary, and new members will be asked to consent to our data processing for the service.

<SDButton form="request_community_membership" />

* **Who can order:** Lab leaders and lab coordinators on BLUE data space subscription levels.
* **Expected response time:** Days.
* **Expected delivery:** Link to the community consent forwarded to your collaborator on email.
* **Required information:** Contact information and affiliation for your collaborator.
* **Required action for new member:** Read and consent to the data processing terms of the service.
* **Cost:** Included in the data space subscription.

## Tingweek

### Deregister to future Tingweek invitations

All active HUNT Cloud users will be invited to individual Tings three times per year during our Tingweeks. Participation is voluntary and you can deregister to receive future invitations here.

<SDButton form="deregister_tingweek_invitations" />

* **Who can order:** Lab leaders and lab coordinators.
* **Expected delivery time:** Days.
* **Expected response time:** Confirmation of deregistration.
* **Cost:** Included in your data space subscription.

## General request

Don't find what you are looking for on the predefined orders above? Don't you worry. Send us a general service request.

<SDButton form="general_lab_request" />

* **Who can order:** Lab leaders and lab coordinators.
* **Expected response time:** Days.

::: warning General responses are slower

Note that a general request has slower response time than a predefined order. If you don't find what you are looking for here, it might be good to invest some time investigating options in our [do science](/do-science/service-desk/) and [govern science](/govern-science/service-desk/) service desk.

:::

::: tip Not an active user?

[Contact us](/contact) on email for general questions and information on our scientific services and activities.

:::
