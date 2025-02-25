---
title: System status archive
category: HUNT Cloud
description: Overview of previous system status updates.
---

# System status archive

This page holds an overview of previous system status updates.

::: tip

See our [System status](/govern-science/system-status) page for current status. The notifications below are historical records.

:::

### Past updates

[..]

**2025-02-25 16:34** - Connectivity is restored. Expected cause is a data transfer that escaped our traffic shaping. 

**2025-02-25 16:14** - A drop in system connectivity is registered. We are investigating.

[..] 

**2025-01-06 10:55** - Failed network card on a physical machine make labs on this machine unavailable. We are investigating and will start to migrate labs to new  machines.

[..] 

**2024-09-16 15:56** - The storage responsiveness are restored. Root cause identified. 

**2024-09-16 11:30** - Selected storage volumes on Cloud2 are experiencing long latency and unpredictable performance. This might render individual labs unresponsive. We are investigating.

[..]

**2024-07-06 08:26** - Selected storage volumes went into read-only state last night. We will contact affected labs and start the revert to read-write state first thing Monday morning. No data is lost.

[..]

**2024-05-02 08:12** - External kistas might be unstable as we are getting alerts from a physical machine that hosts part of the service. We will investigate.

[..]

**2024-02-05 12:12** - Connectivity restored. Expected to be caused by a new high-volume download that bypassed our traffic filters. We will tune our filters and start to work on long-term corrections. 

**2024-02-05 11:53** Connectivity issues reported. Access to all labs affected. We are investigating.

[..]


**2024-02-01 15:30** - Connectivity restored. Expected to be caused by a high-volume download that bypassed our traffic filters and caused queuing of in/out traffic. We will monitoring closely and investigate root causes. 

**2024-02-01 14:54** - Connectivity issues are reported. Access to all labs are affected. We are actively investigated. Next update 15.30.

[..]

**2023-12-10 14:45** - Recovery from a failed raid card have caused some storage volumes in labs to be available in read-only mode. This will affect the ability to operate inside these lab. Affected labs will be notified. We will start to update storage volumes to read-write first thing Monday morning. Contact us if you need priority. 

[..]

**2023-12-01 17:00** - UPS is operational.

**2023-12-01 10:26** - UPS failure reported for  Location1. All labs in Cloud1 will be affected if we experience a power drop while the UPS is not working. Services might be offline for one to several days in such scenario. Mitigation has the higest priority from the vendor and a technician is already on the plane from Oslo. We are following the situation closely and will have hightened monitoring over the weekend. 

[..]

**2023-11-26 21:48** - Failure on a physical compute machine reported. Labs located on this physical machine are currently inaccessible. We will start to migrate lab machines over to a new physical machines Monday morning. Contact us if you need priority. New update 2023-11-27 10:00.

[..]

**2023-06-07 14:00** - All systems operational.

**2023-06-07 13:21** - We have noticed issues with the VPN connection. We are investigating and implementing preventing measures. New update 14:00.

[..]

**2023-04-24 09:00** - We plan to implement changes to our core network infrastructure. This will impact the external connectivity to and from all labs for all users between 9-11 am.

[..]

**2023-03-14 15:00** - All systems operational.

**2023-03-14 14:00** - We have noticed issues with the VPN connection. We are currently working on resolving the issue. New update 15:00.

<!--


[..] 

# Colors

- Green (tip) = operational.
- Yellow (warning) = reduced performance.
- Red (danger) = some or all services are inaccessible.

# Example statement

Reduced performance reported. We are investigating. Next update expected 14:30.


# Statement construction

1. State what's reported, such as
   - Reduced performance reported.
   - Inaccessible labs reported.
   - Connection difficulties reported.

2. State what we are doing, such as
   - We are investigating.
   - We will start to investigate first thing in the morning.

3. State next expected info update, such as
   - Next update expected (e.g. 30 min after statement)

# Color example: GREEN

::: tip All systems
Operational
:::

# Color example: ORANGE

::: warning All systems
**2020-00-00 22:46** - Reduced performance reported. We are investigating. Next update expected 23:30.
:::

# Color example: RED

::: danger Lab access
**2020-00-00 22:46** - Some or all labs are inaccsessible. We are investigating. Next update expected 23:30.
:::

::: danger All systems
Shut off.
:::


::: warning Selected labs
**2023-02-27 13:21** - We have located memory error in one physical machine. This will affect the availability of lab machines located here. We plan for a restart and/or migration of labs to a new physical machine. New update 15:00.
:::

-->
