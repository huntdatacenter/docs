---
title: BlueBox
category: Analytical tools
permalink: /working-in-your-lab/analytical-tools/bluebox
sidebarDepth: 1
description: BlueBox is a tool for distributed analysis across a fleet of cloud machines inside your lab.
---

# BlueBox

[BlueBox](https://github.com/huntdatacenter/BlueBox) is a tool that we have developed to help you distribute your analysis across a fleet of cloud machines inside your lab. In short, BlueBox aids with the installation of software packages and handling of data, code and results across many machines.

Visit our [BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md) on Github for the full documentation. Below is an outline of the steps to get you started.

::: warning Requirements
The installation of BlueBox requires access to iaas and blue machines in your lab. [Contact us](/contact) for activation if you would like to give it a try.
:::


## Install

BluBox is installed on your home machines where it orchestrate the communication with the machines that you have at hand for analysis.

1. Install dependencies on your home machine:

```bash
which tox || sudo apt install tox
```

2. Download the BlueBox code:

```bash
git clone https://github.com/huntdatacenter/bluebox.git && cd bluebox
```

## Configuration

1. Specify the machines in your fleet:

Open at the `example.hosts.txt` file to see the formatting. Then generate a new file named `hosts.txt` that specify the machines you would like to utilize. This list will be provided for us if you do not have blue or iaas machines in your lab. And example of such a list could be:

```bash
ubuntu@demolab-blue-azelf
ubuntu@demolab-blue-maiar
ubuntu@demolab-blue-zaran
```

2. Test your setup

When using BlueBox for the firs time (or when you are adding new machines) run this code to set up machine keys:

```bash
make setup
```

Now that your machines are activated, head over to our [BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md) on Github to complete the full configuration to set up your software dependencies, push your code and data and run your code in parallel.

::: tip

[Concat us](/contact) us for a helping hand to get up and running. This is early days for your setup and documentation. We appreciate questions and feedback so we can improve BlueBox and make it as simple as possible for you to distribute analysis across machines.

:::


## Guide

[BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md)
