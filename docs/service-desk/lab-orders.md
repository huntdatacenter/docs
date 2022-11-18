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

<SDButton form="request_access_new_user" />

### Deactivate lab user

This order closes access for lab users that no longer need to use your lab, for example when projects ends or lab users switches jobs.

<SDButton form="request_lab_user_deactivation" />

### Reactivate lab user

Lab users are deactivated on request or after 180 inactive days. Lab leaders and lab coordinator can reactivate their access. We will need one order per lab for multiple lab access reactivations.

<SDButton form="reactivate_lab_user" />

### Renew lab user agreement

Lab user agreements needs to be renewed approximately every two years for accounts to be active. Click the button below to renew the lab user areement for one user.

<SDButton form="request_renew_user_agreement" />

## Compute

### Update CPU machine size

Increase or decrease the computational power of one of your existing lab machines to a new [machine type](/services/machine-types/).

<SDButton form="request_machine_size_update" />

::: warning GPU machines

Machine types deployed with GPU (GPU machines) can not be updated after deployment due to technical constraints. To update GPU machine types, (1) request a new GPU machine with your preferred machine type, (2) transfer any data or configuration files, and (3) request the deletion of your original machine.

:::


### New CPU machine

Add a [new machine](/services/machine-types/) to your lab. A CPU machine is the default lab machine with CPU and memory aimed at data analysis.

<SDButton form="request_new_cpu" />

### New GPU machine

Add a new [GPU machine](/services/machine-types/#gpu-accelerator-machine-types) to your lab.

<SDButton form="request_new_gpu" />

### Fleet of blue machines

Add a fleet of blue machines to distribute analysis for large scale analysis, for example by utilizing tools such as our [BlueBox](https://docs.hdc.ntnu.no/working-in-your-lab/analytical-tools/bluebox/).

<SDButton form="request_blue_fleet" />

### Shelve machine order

Instance shelving allows you to stop an instance without having it consume compute resources. Shelved instance keeps the storage and can be started in the future when needed again.

<SDButton form="request_machine_shelving" />

### Unshelve machine order

This form serves for unshelving a machine after it has been shelved.

<SDButton form="request_machine_unshelving" />

### Delete a machine

Click the button below to order a machine deletion.

<SDButton form="request_machine_deletion" />

::: danger

Once data on your machine is deleted, it can not be recreated. You must ensure that you have exported all data that you intend to preserve from the machine **before** you order the machine deletion. [Contact us](/contact) if you need guidance with this work.

:::


## Store

### Expand existing volume

You may expand the existing storage volumes inside your lab up to a maximum of 20TB. We will need separate orders for each individual volume you plan to expand. Read more in our [coordinator FAQ](/data/faq/#volumes).

<SDButton form="request_expand_existing_volume" />

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

<SDButton form="request_new_storage_volume" />

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

### Volume Deletion

This form serves for ordering of volume deletion.

<SDButton form="request_volume_deletion" />

::: danger

Once data on volume is deleted, it can not be recreated. You must ensure that you have exported all data that you intend to preserve from the volume **before** you order a volume deletion. [Contact us](/contact) if you need guidance with this work.

:::


## Data transfers

::: tip External data exports

Head over to the [data space orders](/service-desk/data-space-orders) to request data exports outside HUNT Cloud, such as external export kistas and network openings.

:::

### Internal kista

[Internal kista](/data-transfers/internal-kista/) is the best way to transfer data between two labs in HUNT Cloud.

<SDButton form="request_internal_kista" />

## Others

### Update lab coordinator role

Click the button below to update the [lab coordinator](/coordinator/roles/#lab-coordinator) role for a lab attached to your data space.

<SDButton form="request_coordinator_update" />
