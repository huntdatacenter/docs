---
title: PostgreSQL
category: Technical tools
permalink: /do-science/tools/technical/postgresql
sidebarDepth: 1
description: Connection guide for PostgreSQL.
---

# PostgreSQL

If you have requested [PostgreSQL](https://www.postgresql.org/) installation and received a confirmation you can use this guide to connect.

## Set password

First you need to login over ssh and set your password using this command:

```bash
psql -c "\password"
```

## Connecting from Workbench

Once you have configured your password you can also login from [Workbench Terminal](/do-science/hunt-workbench/faq/#can-i-use-a-terminal-from-my-workbench):

```bash
psql --host=172.18.0.1 --port=5432
```

## Connecting through pgweb in Workbench

- Host: `172.18.0.1`
- Port: `5432`
- Username: use your username
- Password: use password configured in the beggining of the guide
- Database: same as username

## Installing Python connectors in Workbench

You can install `psycopg2` using conda into [py310 environment](/do-science/hunt-workbench/faq/#how-can-i-change-a-conda-environment-for-my-notebook):

```bash
conda install -c conda-forge -n py310 psycopg2
```
