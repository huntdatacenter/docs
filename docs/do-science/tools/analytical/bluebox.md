---
title: BlueBox
category: Analytical tools
permalink: /do-science/tools/analytical/bluebox
outline: 1
description: BlueBox is a tool for distributed analysis across a fleet of cloud machines inside your lab.
---

# BlueBox

**[BlueBox](https://github.com/huntdatacenter/BlueBox) is a tool that we have developed to help you distribute your analysis across a fleet of cloud machines inside your lab.**

In short, BlueBox aids with the installation of software packages and handling of data, code and results across many machines.

[[toc]]

::: tip 

Visit our [BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md) on Github for the full documentation. Below is an outline of the steps to get you started.

:::


## 1. Order a fleet of machines

The installation of BlueBox requires access to a fleet of machines. 

<!--
1.1 Order a fleet of machines for your BlueBox in our [administer science service desk](/administer-science/service-desk/lab-orders/#fleet-of-blue-machines). 
-->

We will set up your machines and provide you with a list of machine names that you can utilize.

## 2. Install

BluBox is installed on your lab's **`home`** machine where it orchestrate the communication with a fleet of On-demand or BLUE machines where you analysis happens.

::: tip Helping hand

[Contact us](/contact) us for a helping hand to get up and running. We care passionately about your ability to scale science.

:::

2.1. Install dependencies on your lab home machine:

```bash
which tox || sudo apt install tox sshpass
```

2.2. Download our BlueBox code:

```bash
git clone https://github.com/huntdatacenter/bluebox.git && cd bluebox
```

## 3. Configuration

3.1. Specify the machines in your fleet:

3.1.1 Open at the **`example.hosts.txt`** file to see the formatting. 

3.1.2 Generate a new file named **`hosts.txt`** that specify which machines in your fleet you would like to utilize. 

An example of such a list may look like: 

```bash
# -- Non-work example list
ubuntu@demolab-blue-azelf
ubuntu@demolab-blue-maiar
ubuntu@demolab-blue-zaran
```

3.2. Test your setup

You need to set up your machine the first you use BlueBox and when you are adding or removing machines to your fleet. Run this code to set up machine keys:

```bash
make setup
```

## 4. Do science

Now that your machines are activated, head over to our [BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md) on Github to complete the full configuration to set up your software dependencies, push your code and data and run your code in parallel.



## More information

* [BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md) on Github.

