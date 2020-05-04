---
title: BlueBox
permalink: /working-in-your-lab/analytical-tools/bluebox
sidebarDepth: 1
---

# BlueBox

[BlueBox](https://github.com/huntdatacenter/BlueBox) is a tool that we have developed to help you distribute your analysis across across a fleet of cloud machines. BlueBox simplifies the installation of the same software packages across multiple machine, and simplifies handling of data, code and results. 

::: warning Requirements
The installation of BlueBox requires access to iaas and blue machines in your lab. [Contact us](/contact) for activation if you would like to give it a try.
:::

::: tip Tip
Visit our [BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md) on Github for the full documentation. Below is an outline of the steps to get you started. 
:::


## Install on your home machine

1. Install dependencies on your home machine:

```
which tox || sudo apt install tox
```

2. Download the BlueBox code:

```
git clone https://github.com/huntdatacenter/bluebox.git && cd bluebox
```

3. Add your machine list

Have a quick look at the `example.hosts.txt` file and generate a new file named `hosts.txt` with your machine fleet. You will get this list from us. Example of the format: 

```
ubuntu@demolab-blue-azelf
ubuntu@demolab-blue-maiar
ubuntu@demolab-blue-zaran
```

4. Test your setup 

When using BlueBox for the firs time, or adding new machines, run this code: 

`make setup`

5. If this works, head over to the [BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md) to add dependencies, puch code and data and collect your results.


## Guide

[BlueBox Guide](https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md)
