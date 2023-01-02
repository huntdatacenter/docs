---
title: Security
category: FAQ
permalink: /do-science/faq/security
sidebarDepth: 1
description: This page lists frequently asked questions related to security management in labs.
---

# FAQ on security

This page lists frequently asked questions related to security management in labs.

[[toc]]

## Incident reporting

### What is a security incident?

For practical purposes, something that may lead to a data breach, data loss or a violation of our [user agreement](/agreements/downloads). [Contact us](/contact) for formal definitions.

### What should I report?

[Report the event](/contact) if your are in doubt! We will guide you on which information it's good to include. Also, report all incidents with a an **`unintended and undesirable consequence`** in your lab. We use these information to prioritize our maintenance and development work.

### Can I be punished for reporting?

We encourage incident reporting, and do not punish such activity. However, it is important to note that Norwegian law and your institution’s general employment conditions do apply (as for all the things we do).

### Can I report anonymously?

Yes. We recommend that your use a lawyer as your intermediate if you wish to remain anonymous.


## Data classification

### How is data classified in HUNT Cloud?

| **Classification** | **Description** | **Examples** |
| - | - | -
| Sensitive | Research data that can indirectly identify research participants. | Individual level data such as phenotype data and genotype data. |
| Internal |  Research data that can *not* identify research participants. | Summary statistics, figures, computer code, non-human data, encrypted sensitive data. |

Storage volumes are classified as sensitive by default. Volumes may be declassified to internal in agreement with the respective data controllers and lab owners.

Volumes classified as internal may be mounted directly to individual lab users' machines under the following conditions:

- the lab owner, the lab's host institution and data controller(s) allow such a set-up.
- the lab owner take the direct responsibility to ensure that volumes classified as internal do not hold sensitive data.

### Can I store direct identifiable health information in my lab?

Not by default. Direct identifiable research data such as names of research participants, personal identification numbers, phone numbers, address information, etc., must be stored outside our system unless specifically approved in dedicated amendments to the data processor agreement that we hold with your host organization.
