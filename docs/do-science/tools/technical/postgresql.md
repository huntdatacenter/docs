---
title: PostgreSQL
category: Technical tools
permalink: /do-science/tools/technical/postgresql
sidebarDepth: 1
description: Connection guide for PostgreSQL.
---

# PostgreSQL

**[PostgreSQL](https://www.postgresql.org/) is a relational database management system that can elevate your data handling.**

[[toc]]

::: warning Requirement

This guide is for the managed PostgreSQL pilot service on home machines. 

You can use this guide to connect to your installation if you have requested the setup and received a confirmation that the setup is completed.

:::

## Set password

First you need to login over ssh and set your password using this command:

```bash
psql -c "\password"
```

## Connecting from Workbench

Once you have configured your password you can also login from [Workbench Terminal](/do-science/hunt-workbench/faq/#can-i-use-a-terminal-from-my-workbench):

```bash
psql --host=/var/run/postgresql
```

## Connecting through pgweb in Workbench

- Host: `/var/run/postgresql`
- Port: `5432`
- Username: use your username
- Password: use password configured in the beggining of the guide
- Database: same as username

## Installing Python connectors in Workbench

You can install `psycopg2` using conda into [py310 environment](/do-science/hunt-workbench/faq/#how-can-i-change-a-conda-environment-for-my-notebook):

```bash
conda install -c conda-forge -n py310 psycopg2
```
