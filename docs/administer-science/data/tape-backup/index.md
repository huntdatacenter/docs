---
title: Tape Backup
category: Data
outline: 1
description: This page gives information about how tape backup works using LTO tapes as a medium.
---

# What is tape backup

Our tape service uses the LTO (Linear Tape-Open) format optimised for high capacity and storage density. LTO tapes provide a reliable way to store your data offline for maximum protection against malicious attacks such as ransomware. The tape service can also be used as a cost-effective way to maintain a backup of your lab data.

## What is LTO tape

LTO is a magnetic tape storage technology widely used for backup, archiving, and data transfer. As an open standard, LTO is not controlled by a single manufacturer, which promotes compatibility and innovation across the industry. Known for its reliability, capacity, and cost-effectiveness, LTO tapes are designed to store vast amounts of data securely over extended periods.

## Reliability

One of the standout features of LTO tapes is their exceptionally low error rate. With a bit error rate of just 1 error in 10^19 bits, LTO tapes are approximately 10,000 times more reliable than hard disks and 1,000 times more reliable than SSDs. This reliability is achieved through advanced error correction code (ECC) technology, which ensures data is written accurately and any errors are promptly detected and corrected. This makes LTO tapes an ideal choice for backup and archival purposes where maintaining data integrity over long periods is essential.

## Security features

LTO tapes are an excellent choice for storing sensitive data. One key feature is the ability to encrypt data on-the-fly, providing a strong defence against unauthorised access. Additionally, LTO tapes can be configured in a WORM (Write Once, Read Many) format, which prevents data from being altered or deleted once written. Another security aspect LTO tape offers is ability to store your data offline in a secure location. This way even if system and data is compromised, your data stays safe, inaccessible from the internet.  

## Tape archive vs tape backup

**Tape archive**

A tape archive is a long-term storage solution for data that is no longer in regular use or data that requires extra safety measures to store. Archived data is typically stored offline for up to 10 years. Archive jobs are run in "Copy" mode, meaning your data is written to two separate tapes to ensure recoverability. After a successful write, archive tapes are removed from the tape library and stored offline in a secure location. Depending on dataset size, recovery may take additional time since the tapes need to be returned to the library manually.

**Tape backup**

Unlike tape archive, regular tape backup is designed to minimise costs while maintaining a high level of data integrity and security. Tape backups run automatically on a predetermined schedule and are retained for a predefined period. Recovery is usually much faster than with tape archive, although several factors can affect the recovery timeline.

## Recovery from tape

Recovery differs between tape archive and tape backup.

In most cases, individual files can be recovered from a tape backup quickly. This is not always the case with a tape archive. If you need to recover a file within one year of the archive job, file-level recovery is possible. After one year, which is the most common scenario for archived data, a full job recovery is required. This is due to measures we take to manage the size of our backup catalog, which would otherwise grow indefinitely.

## Tape backup software

We are using bacula community edition which is an open source sofware that has been around and actively developed since January 2000. This sofware allows us to scale our tape service efficiently, reduce costs and maintain high level of data integrity and security.

You can read more on bacula [here](https://en.wikipedia.org/wiki/Bacula).
Official documentation of bacula can be found [here](https://docs.baculasystems.com/index.html)

## How can I get my data on tape?

You can start by visiting our [service desk](/administer-science/service-desk/lab-orders#tape-backup).
