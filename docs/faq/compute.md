---
title: Compute
permalink: faq/compute
sidebarDepth: 1
---

# FAQ on lab compute

This page list frequently asked questions realted to compuation and analysis in labs.

[[toc]]



## Resources

### How can I upgrade my compute resources? 

Your [lab leader](/faq/users/#user-roles) and lab coordinator approves upgrades. This includes both upgrades in cpu and memory of individual machines, and supplement of new machines in accordance with our [machine types](https://www.ntnu.edu/mh/huntcloud/cloud-services/hunt-compute). Forward upgrade requests to us on [email](/contact).

### Is my process hitting memory issues?

See below for descriptions on how to monitor your memory consumption using the `htop` and `time` commands. 


### How can I monitor my resource consumption? 

You have several options: 

(1) A quick way is to use [HTOP](https://docs.hdc.ntnu.no/working-in-your-lab/technical-tools/htop/) for interatctive monitoring of cpu and memory inside individual machines. 

(2) The [time](http://man7.org/linux/man-pages/man1/time.1.html) command is a quick way to determine the duration of execution of a particular command. For example add `/usr/bin/time -v` before your command to get going: 

:::details /usr/bin/time examples

```bash
# -- principal example
/usr/bin/time -v <your-comand>

# -- command example
/usr/bin/time -v ls

# -- script example
/usr/bin/time -v ./script.sh
```

[Read more time command example](https://www.cyberciti.biz/faq/unix-linux-time-command-examples-usage-syntax/)

When yoru command or script finishes, `time` writes a message to standard error giving timing statistics about your program run, for example: 

```
        Command being timed: "ls /"
        User time (seconds): 0.00
        System time (seconds): 0.01
        Percent of CPU this job got: 250%
        Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.00
        Average shared text size (kbytes): 0
        Average unshared data size (kbytes): 0
        Average stack size (kbytes): 0
        Average total size (kbytes): 0
        Maximum resident set size (kbytes): 0
        Average resident set size (kbytes): 0
        Major (requiring I/O) page faults: 0
        Minor (reclaiming a frame) page faults: 315
        Voluntary context switches: 2
        Involuntary context switches: 0
        Swaps: 0
        File system inputs: 0
        File system outputs: 0
        Socket messages sent: 0
        Socket messages received: 0
        Signals delivered: 0
        Page size (bytes): 4096
        Exit status: 0
```

:::

(3) Use your monthly "Lab report" sent to your lab leader and lab coordinator for tracking of longer term resource consumptions inside your lab.

### How can I profile my resource consumption? 

For longer workflows your resource consumption may differ for each step in your code. Profiling tools may help to identify consumption for each part, such as time, cpu, mem, etc., both within your code and any third party libraries that you may utilize.

::: details See example of profiling tools

For those interested in a deep dive into profiling, we recommend to get familiar with [Flame graphs](http://www.brendangregg.com/flamegraphs.html).

Examples of python profilers:

- [py-spy](https://github.com/benfred/py-spy) - top-like sampling profiler (low overhead, non-interuptive, flamegraphs)
- [scalene](https://github.com/emeryberger/scalene) - a high-performance CPU and memory profiler for Python.
- [vprof](https://github.com/nvdv/vprof) - Visual Python profiler.

:::















## Software

### Can I bring my own software?

Yes. You can install your own software in your lab environment under our _bring-your-own-software_ policy, for example, with the following syntax:

```bash
sudo apt install <packagename>
```

### Can I bring my own licenses?

Yes. If you use software that needs paid licenses you need to bring your own licenses under our _bring-your-own-license_-policy. Your lab leader is responsible to ensure that licensed software is used in accordance with the license agreement inside the lab environments.


## Workflow


### How can I keep my jobs running when I disconnect?

You can keep your jobs and sessions running by using something called a terminal multiplexer. See our [terminal multiplexers guide](/tutorials/terminal-multiplexers) to get started.

## Machine types

You will meet four principal machine types in your lab. You may choose to deploy home, iaas and blue machines in [various sizes](https://www.ntnu.edu/mh/huntcloud/cloud-services/hunt-compute).

### What is a "home" machine?

This is a managed machine type. All labs have one "home" machine that is pre-configured with user accounts, mounted storage and some analytical software. Users may download their own software using the `apt` package manager and reboot their machine when needed. Further configurations has to be guided by us. Home machines run Ubuntu 16.04 operating systems.

### What is an "iaas" machine?

In addition to the home machine, lab leaders and lab coordinators may request new "iaas" machines to be deployed in your lab. This is an unmanage machine type. You do get full administrator privileges (root access). We expect you to configure and maintain these machines yourself. We normally deploy these machines with a vanilla Ubuntu 18.04 operating system. Iaas machines are deployed for a minimum of 30 days.

### What is a "blue" machine?

Blue machines are identical to iaas machine with one exceptions: they are deployed for a maximum of 30 days. The machine type is introduced to allow for flexible deployments of short-lived high capacity environments.

### What is an "entry" machine?

You will meet the "entry" machine when you configure your account during your initial onboarding. Hopefully, you will not meet this machine type again. The machine type is introduced for security purposes allowing us to quickly install security updates and do machine restarts without affecting your analyis in the other lab machines.

