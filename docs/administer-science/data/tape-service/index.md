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

|                         | Tape archive                                                                             | Tape backup                                                         |
| ----------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Best for**            | Data no longer in regular use, or data that requires extra safety measures               | Ongoing protection of active lab data at the lowest possible cost   |
| **How jobs run**        | On request, in "Copy" mode                                                               | Automatically, on a predetermined schedule                          |
| **Number of copies**    | Two separate tapes                                                                       | TODO: CONFIRM                                                       |
| **Retention**           | Offline for up to 10 years                                                               | A predefined retention period                                       |
| **Where tapes live**    | Removed from the tape library and stored offline in a secure location                    | TODO: CONFIRM                                                       |
| **Recovery speed**      | Slower - tapes must be returned to the library manually, and larger datasets take longer | Usually much faster, though several factors can affect the timeline |
| **File-level recovery** | Within one year of the archive job. After that, a full job recovery is required          | Individual files can normally be recovered quickly                  |

Both variants maintain the same high level of data integrity and security.

## Recovery from tape

In most cases, individual files can be recovered from a tape backup quickly. This is not always the case with a tape archive.

::: warning One-year limit on archive file recovery
If you need to recover a file within one year of the archive job, file-level recovery is possible. After one year — the most common scenario for archived data — a full job recovery is required.

This is due to measures we take to manage the size of our backup catalog, which would otherwise grow indefinitely.
:::

### Reliability

One of the standout features of LTO tapes is their exceptionally low error rate:

- **Bit error rate:** 1 error in 10<sup>19</sup> bits
- **Approximately 10,000×** more reliable than hard disks
- **Approximately 1,000×** more reliable than SSDs
  This reliability is achieved through advanced error correction code (ECC) technology, which ensures data is written accurately and any errors are promptly detected and corrected. This makes LTO tapes an ideal choice for backup and archival purposes, where maintaining data integrity over long periods is essential.

### Security features

LTO tapes are an excellent choice for storing sensitive data:

- **On-the-fly encryption** — a strong defence against unauthorised access.
- **WORM (Write Once, Read Many)** — prevents data from being altered or deleted once written.
- **Offline storage** — tapes are kept in a secure location, inaccessible from the internet. Even if your system and data are compromised, the data on tape stays safe.

## Tape service software

You can read more on bacula [here](https://en.wikipedia.org/wiki/Bacula).
Official documentation of bacula can be found [here](https://docs.baculasystems.com/index.html)

## How can I get my data on tape?

You can start by visiting our [service desk](/administer-science/service-desk/lab-orders#tape-backup).
