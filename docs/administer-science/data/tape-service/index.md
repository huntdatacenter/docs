---
title: Tape Service
category: Data
outline: 1
description: This page gives information about how tape service works using LTO tapes as a medium.
---

# Tape service

Our tape service uses the LTO (Linear Tape-Open) format optimised for high capacity and storage density. LTO tapes provide a reliable way to store your data offline for maximum protection against malicious attacks such as ransomware. The tape service can also be used as a cost-effective way to maintain a backup of your lab data.

We offer two variants of the service: **tape archive** and **tape backup**. The rest of this page explains the difference, how recovery works, and how to get started.

## Tape archive vs tape backup

|                     | Tape backup                                                                   | Tape archive                                           |
| ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Intended for**    | Supplemental copies of active lab data                                        | Long-term, passive preservation of data                |
| **What is written** | Full copies of data from predefined storage locations within your lab         | Full copies of the data you designate                  |
| **How often**       | At scheduled intervals that you specify                                       | Written once                                           |
| **Number of tapes** | A single tape                                                                 | Two tapes (for increased redundancy)                   |
| **Retention**       | A period you specify, up to 10 years                                          | A period you specify, up to 10 years                   |
| **Cost model**      | Metered daily on the cumulative terabytes written across the retention period | A one-time charge per order, for the terabytes written |

Both variants maintain the same high level of data integrity and security.

## What you need to decide

As a Lab leader, you are responsible for:

- **Identifying the data** in your lab that should be written to tape.
- **Specifying the retention length** - how long the data should be kept, up to a maximum of 10 years.
- **Specifying the interval** for tape backup jobs - how often a fresh full copy is written.

We're responsible for the technical side:

- configuration and maintenance of the tape systems,
- encryption keys,
- tape writes,
- preservation,
- data retrieval,
- destruction of tapes.

If a lab subscription is terminated before the retention period expires, responsibility for the tape data passes to the service center the lab is attached to.

## Retrieval

You can order data retrieval at any time during the retention period.

::: warning Retrieval is not instant
The retrieval process includes manual steps and may involve tapes held off-site and offline, so requests can take an extended period to complete. Plan accordingly. Tape is not a substitute for a working copy of data you need on short notice.
:::

Within that, recovery from a tape backup is usually faster than from a tape archive, since archive tapes are more likely to have been moved off-site and need to be returned to the library manually. Several factors can affect the timeline in either case.

## Storage, distribution and destruction

Tapes may be moved outside our data centers under a documented chain-of-custody procedure. Off-site and offline tapes are stored in protected zones in Trondheim, Norway, designed to withstand fire for up to one hour.

::: danger Data is destroyed when retention expires
After the retention period expires, data is irrevocably destroyed without notification. Make sure the retention length you specify actually covers how long you need the data.
:::

## Cost

The cost per terabyte for both types is listed in the [price list](/administer-science/prices/pricelist). The two are metered differently, and the difference matters:

- **Tape archive** is a one-time charge per order, based on the total terabytes written.
- **Tape backup** is metered daily, based on the total terabytes written across the retention period. Because each job writes a full copy, the metered volume grows with every interval.

The meter starts when the first data is written and ends when the retention period expires, or when we receive a termination request for the tape order. All meters end on the date we receive a termination notice for the Services Agreement. Consumption is billed the following quarter.

::: tip Watch the interval
Frequent intervals combined with long retention multiply quickly. If the data is not changing, tape archive is usually the cheaper choice.
:::

## Why we use LTO tape

LTO is an open format maintained by a consortium of manufacturers rather than a single vendor, so drives and media remain available and compatible across the long timescales this service is built for. Two properties make it a good fit:

- **Very low error rates.** The LTO specification permits at most one unrecoverable bit error per 10<sup>19</sup> bits written - roughly four orders of magnitude better than a typical hard drive - achieved through error correction built into the drives. Full specifications are published by the [LTO Consortium](https://www.lto.org/).
- **It can be taken offline.** A tape on a shelf is not reachable over the network, which is what makes tape effective against ransomware and similar attacks.

### Security

- **Encryption.** Tapes are written encrypted, and HUNT Cloud manages the encryption keys.
- **Written once.** LTO supports WORM (Write Once, Read Many), so data cannot be altered or deleted after it is written. Archive data is written once and not changed afterwards.
- **Offline and off-site.** Tapes are kept offline in protected zones, inaccessible from the internet. Even if your lab systems are compromised, the data on tape stays safe.

## Tape service software

You can read more on bacula [here](https://en.wikipedia.org/wiki/Bacula).
Official documentation of bacula can be found [here](https://docs.baculasystems.com/index.html)

## How can I get my data on tape?

You can start by visiting our [service desk](/administer-science/service-desk/lab-orders#tape-backup).
