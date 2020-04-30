---
title: BlueBox
permalink: /working-in-your-lab/analytical-tools/bluebox
sidebarDepth: 1
---

# BlueBox

[BlueBox](https://github.com/huntdatacenter/BlueBox) helps to move into distributed compute with your research workload.
It simplifies installation of dependency packages on multiple servers.
Handling data, code and results is still as easy as with single machine.

## Setup your home first (master)

Install dependencies on your home server:

```
which tox || sudo apt install tox
```

Get this repository:
```
git clone https://github.com/huntdatacenter/bluebox.git && cd bluebox
```

Use `code`, `data`, and `results` folders in the repository for synchronisation (read below).
We provide basic examples, but otherwise are these folders excluded from git repository,
so you can keep using them and get updates.

Before using your IAAS nodes create the node list `vim hosts.txt`. Follow example hosts:

```
ubuntu@192.168.150.11
ubuntu@192.168.150.12
ubuntu@192.168.150.13
```
