---
title: PostgreSQL
category: Technical tools
permalink: /do-science/tools/technical/postgresql
outline: 1
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

Once you have configured your password you can also login from [Workbench Terminal](/do-science/hunt-workbench/faq#can-i-use-a-terminal-from-my-workbench):

```bash
psql --host=/var/run/postgresql
```

## Connecting through pgweb in Workbench

- Host: `/var/run/postgresql`
- Port: `5432`
- Username: use your username
- Password: use password configured in the beggining of the guide
- Database: same as username

Easiest way is to connect with Scheme URL:

```
postgresql:///?host=/var/run/postgresql
```

## Installing psql client in Workbench

You can install `psql` using conda into default environment:

```bash
mamba install -c conda-forge -n default -y postgresql
```

Then connect:
```bash
psql --host=/var/run/postgresql
```


## Installing Python connectors in Workbench

You can install `psycopg2` using conda into [py310 environment](/do-science/hunt-workbench/faq#how-can-i-change-a-conda-environment-for-my-notebook):

```bash
conda install -c conda-forge -n py310 psycopg2
```

Example of connecting to database named with username:
```python
import os
import psycopg2
print(f"Connecting to dbname={os.getenv('USER')} as user={os.getenv('USER')}")
conn = psycopg2.connect(f"host=/var/run/postgresql dbname={os.getenv('USER')} user={os.getenv('USER')}")
```

Test connection by listing pg_tables records fron pg_catalog:

```python
with conn:
    with conn.cursor() as curs:
        curs.execute('SELECT * FROM pg_catalog.pg_tables;')
        for table in curs.fetchall():
            print(table)
```
