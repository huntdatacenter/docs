---
title: FAQ
category: HUNT Cloud
permalink: /data/faq
sidebarDepth: 1
description: This page list frequently asked questions about data coordination in HUNT Cloud.
---

# FAQ on data coordination

**This page list frequently asked questions on data coordination. See our [lab user storage FAQ](/faq/storage) for practical use of our storage services.** 

[[toc]]

::: tip

This section prosper on questions. [Contact us](/contact) with burning topics so we can grow the page together.

::: 

## Volumes

### What is a storage volume?

You can think of a storage volume as a named virtual hard disk that is attached and reachable from a lab. This is the places there your lab users storage their data. Read more about the [four default volumes](/faq/storage/#what-storage-does-my-lab-have).

### Can we add new volumes to our labs?

Yes. Nothing is better than seeing your data grow. We are more than happy to include additional volumes to your lab machines to make your science fly. Order your [new volumes](/service-desk/lab-orders/#new-volume) in our service desk.


### Can we expand existing volumes?

You can expand volumes on both and iaas machines in terabyte (TB) steps. Lab leaders and lab coordinators can expand volume expansion in our [service desk](/service-desk/lab-orders/#expand-existing-volume).

### When should we expand our volumes? 

Full storage means that your lab users no longer can utilize this volume in your scientific activities. We recommend that you expand a storage volume at about 85 percent usage. See how to [check your current usage](/faq/storage/#how-can-i-see-the-sizes-of-my-lab-volumes) here.

### Will data disappear during a volume expansion? 

No. The data in your volume will still be there after the volume expansion.

### What's the response time for a volume expansion? 

During the expansion, the machine where the volume is attached will need to be restarted. Thus, all running analysis on the lab machine will be stopped. We recommend that you plan the expansion with your lab users about 2 weeks before the storage is needed. Then, we will together schedule a two (2) hour time slot for the technical expansion, usually from 9-11 am. 

### Why is volume sizes less than claimed?

The volumes sizes that you see on your machines are slightly less that the volume sizes that you claim. This is expected. Read why below.

::: details Terabyte definition
One (1) terabyte of claimed storage is defined as 2^40 bytes. Computers allocate storage in base 2 mathematics (2^40 bytes = 1,099,511,627,776 bytes) and report the allocation attached to machines in base 10 mathematics (10^12 bytes = 1,000,000,000,000 bytes). The discrepancy between the two systems cause volume allocations to be observed in the machines as a lower number than the terabytes claimed. To illustrate, an allocation of one (1) terabyte storage will be reported, and have an operational capacity, of 0.91 terabytes when attached to a machine (10^12 bytes / 2^40 bytes = 0.91 terabytes).
:::

### What is the upper size of a volume?

We aim to keep individual volumes below 20 TB if possible. The soft limit is set for practical purposes when it comes to volume handling on our side. It is also set to help distribute large collections across several logical units in the unlikely case of volume destructions.

## Access

### Can all users access all data in a lab? 

Yes, principally. Practically, maybe. On the `home`-machine, all lab users can by default access all folders on the collaborative data volumes: `/mnt/archive`, `/mnt/work` `/mnt/scratch` and `/mnt/cargo`. Lab users may add individually restrictions to files or folders they upload or generate, although such separation is not guaranteed by us. When needed, we recommend to separate user access by establishing separate labs labs rather than to separate data in folders inside a lab.

### What happens with a user's data when the user is deactivated in a lab? 

All data that is uploaded or generated by lab users are under the control of the Lab leader's organization. This includes data in the user's home folder. When lab access is deactivated for a lab user, then Lab leader and/or Data space leader can ask HUNT Cloud to change ownership and permissions of such data to allow other lab users to access the data. 






