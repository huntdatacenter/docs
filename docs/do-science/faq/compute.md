---
title: Compute
category: FAQ
permalink: /do-science/faq/compute
outline: 1
description: Frequently asked questions related to computation and analysis in labs.
---

# FAQ on lab compute

This page lists frequently asked questions related to computation and analysis in labs.

[[toc]]

## Resources

### Can I update my compute resources?

Yes. Your lab leader and lab coordinator can order machine updates] and order new lab machines in our [service desk](/administer-science/service-desk/lab-orders#compute) in accordance with our default [machine types](/administer-science/services/machine-types).


### Can I have custom machine types?

Yes. Don't find what you are looking for among our default [machine types](/administer-science/services/machine-types)? Labs in a data space on the [blue subscription](/administer-science/services/overview#subscriptions) level can request machines types with tailored memory and CPU resources. [Contact us](/contact) on email to get started.

### Is my process hitting memory issues?

See below for descriptions on how to monitor your memory consumption using the `htop` and `time` commands.

### Can I monitor my resource consumption?

Yes. You have several options:

(1) A quick way is to use [HTOP](/do-science/tools/technical/htop) for interactive monitoring of CPU and memory inside individual machines.

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

[See more time command examples](https://www.cyberciti.biz/faq/unix-linux-time-command-examples-usage-syntax/)

When your command or script finishes, `time` writes a message to standard error giving timing statistics about your program run, for example:

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

(3) Use your monthly "Lab report" sent to your lab leader and lab coordinator for tracking of longer term resource consumption inside your lab.


## Access

### How can I access our IaaS and SPOT machines?

In your home machine, type **`ssh `** (ssh and space) and hit the **`Tab`** button twice. This will give you a list of the available IaaS and SPOT machines in your lab. The default user will be **`ubuntu`** and the default password will be **`ubuntu`**.

```bash
ssh ubuntu@<machine-name>
```

### How can I make the login 'passwordless'?

You can add your keys to the IaaS and SPOT machines or 'passwordless' logins. In your home machine:

```bash
# -- Add keys

# principal example
ssh-copy-id ubuntu@<machine-name>

# practical example
ssh-copy-id ubuntu@demolab-iaas-sagal

# -- Add certificate to ssh-agent
ssh-add

# -- Test login
ssh ubuntu@<machine-name>
```


## Software

### Can I bring my own software and licenses?

Yes. You can install your own software in your lab environment under a _bring-your-own-software_ and _bring-your-own-license_ policy. Your lab leader is responsible to ensure that licensed software is used in accordance with the license agreement inside the lab environments. [Contact us](/contact) for installation of licensed software on your home-machine.

### How do I install my own software?

A quick way to install open-source software packages is to use the built in [apt package tool](https://itsfoss.com/apt-get-linux-guide/) in Ubuntu:

```bash
sudo apt install <packagename>
```

::: warning WARNING

Be aware that installation of new packages with apt may affect the workflow of your lab colleagues. Therefore we recommend taking an extra step and configure [Conda](/do-science/tools/analytical/conda). Conda is a great package manager that provides a lot of packages in easy way without affecting other users.

:::



### Where can I install my software?

On you home machine, we recommend that you install software that you download in a folder that is reachable for all of your fellow lab users, such as **`/mnt/works/software`**. Software installations that uses **`apt`** (see above) will automatically install in the correct folders.

### Can I run MATLAB, Stata, SPSS and RStudio?

Yes. You can run commonly used analytical tools, such MATLAB, Stata, SPSS and RStudio directly from your lab. You will need to bring a license from your host institution if you are affiliated outside of NTNU. Graphical user interfaces are accessed through the X2Go-software. [Contact us](/contact) for installations on home-machines.

### Can I run Windows software?

Most likely. Many commonly used software in scientific computing can be run from your lab, such as MATLAB, Stata, and SPSS, including many special tools for image analysis and genetic analysis. However, we do run Linux as the operating systems in your lab. Some Windows tools will therefore be unavailable. We do provide Windows systems in those rare cases when this is the only option to run mission critical applications. [Contact us](/contact) if you think you do need Windows tools to get your science to fly.

### Can I run Docker containers?

Yes. You can run [Docker images](https://www.docker.com/) on both [IaaS](/do-science/faq/compute#what-is-an-iaas-machine) and [SPOT](/do-science/faq/compute#what-is-a-spot-machine) machines. Docker images can not be run from home machines due to security reasons.

::: tip

If you need to run docker images on home machine try using Apptainer instead (previously known as Singularity). Read more in our [Apptainer installation guide](/do-science/tools/technical/apptainer).

:::

### Can I run Apptainer (Singularity) containers?

Yes, you can run your Apptainer (Singularity) containers on both home, IaaS and SPOT machines. Follow our quick
[Apptainer installation guide](/do-science/tools/technical/apptainer). For simplicity, we strongly recommend to install Apptainer via Conda.

## Workflow

### How can I keep my jobs running when I disconnect?

You can keep your terminal jobs and sessions running by using something called a terminal multiplexer. See our [terminal multiplexers guide](/do-science/tools/technical/terminal-multiplexers) to get started. Your jobs over [X2Go](/do-science/tools/technical/x2go#set-up-your-local-machine), such as RStudio and Stata, should be kept alive between your logins by default.

### How can I profile the resources needed in my workflow?

For longer workflows your resource consumption may differ for each step in your code. Profiling tools may help to identify consumption for each part, such as time, CPU, mem, etc., both within your code and any third party libraries that you may utilize.

::: details See example of profiling tools

For those interested in a deep dive into profiling, we recommend to get familiar with [Flame graphs](http://www.brendangregg.com/flamegraphs.html).

Examples of python profilers:

- [py-spy](https://github.com/benfred/py-spy) - top-like sampling profiler (low overhead, non-interuptive, flamegraphs)
- [scalene](https://github.com/emeryberger/scalene) - a high-performance CPU and memory profiler for Python.
- [vprof](https://github.com/nvdv/vprof) - Visual Python profiler.

Examples of R profilers:

- [profvis](https://rstudio.github.io/profvis/) - Interactive visualizations for profiling R Code.

:::


## Maintenance

### Can I restart our lab machines?

Yes. You can restart your home, IaaS and spot machines by running the **`reboot`** command. We have enabled this command so that you can schedule restarts in according with computational workflows.

```bash
sudo reboot
```

::: warning
Please be aware that restarts will affect all of your lab colleagues working on your machine. Our advice is to carefully plan restarts with your lab colleagues and announce such restarts in advance so no one looses their valuable work. [Click here](/do-science/faq/access#how-can-i-see-users-currently-logged-into-a-machine) to see which users that are currently logged into your machines.
:::

### What privileges does my account have?

You have [sudo](https://en.wikipedia.org/wiki/Sudo) rights in home machines for application installation (apt) and machine restart (reboot). You have full administrator privileges on other machine types in your lab ([IaaS and SPOT](/do-science/faq/compute#machine-types)).

### Can I get additional administrator privileges?

We fully understand that you might need to tune your lab. Thus, you get full administrator privileges on other machine types than home in your lab ([IaaS and SPOT](/do-science/faq/compute#machine-types)). [Contact us](/contact) if you would like try one of these. Privileges on home machines are restricted to allow us to be responsible for data and user management.

### Can I update our operating system on home?

No. Your home machine is configured for reliability. We have therefore chosen to run long term support versions of your operating systems here. Your home machine will therefore typically run one version behind the latest release. We understand that your workflow sometimes require newer versions. Therefore, [contact us](/contact) for deployment of IaaS and SPOT machines that comes with the latest LTS Ubuntu release as default.

### Can I get a machine with the latest Ubuntu release?

Yes. Both [IaaS](/do-science/faq/compute#what-is-an-iaas-machine) and [spot](/do-science/faq/compute#what-is-a-spot-machine) machines are deployed with the latest long term support Ubuntu version. From there, you can upgrade to your version of choice.  [Contact us](/contact) if your workflow require other Linux operating systems.

### When do you plan to upgrade our home operating system?

We will typically upgrade operating systems every two years when a new long term support version is introduced.


## Operating system upgrades

This section lists frequently asked questions related to operating system upgrades on entry and home machines that is performed every other year.

### Why is this necessary?

We need to upgrade operating systems on your entry and home machines every other year or so to ensure that your lab runs reliably. OS upgrades are required for continuous security updates and to maintain a basic set of applications in your lab.

### What is the current target version?

Entry and home machines runs on Ubuntu 18.04. The next cycle will upgrade Ubuntu operating systems from version 18.04 to version 20.04 LTS.

### Why not upgrade to the latest version?

For reliability, we aim to run one OS version below the latest Ubuntu long term release. That said, we do recognize the need to utilize newer OS versions to keep your science flying. These are available on IAAS and spot machines.

### When will you do the upgrade?

We expect the next upgrade cycle to begin in Q1 2023.

### How long will the upgrade take?

We expect the upgrade to take up to two hours including one restart for each lab.

### Will my running jobs be affected?

Yes. We need to restart your home machines and all running jobs on this machine will be stopped during upgrades. Jobs running on IAAS and spot machines will not be affected.

### Will I be notified?

Yes. We will reach out to your lab to schedule the upgrade.

### Will the upgrade affect my tools?

Maybe. Below is a description of expected changes in packages that may cause potential effects on your workflows.

#### Python

System python version may change. We will specify such changes on these pages prior to each cycle. You may need to reinstall some of your Pip packages.

#### R / RStudio

R version can change slightly, although the main version will remain the same. This should minimize any risk of affecting your scripts. Be aware that the operating system upgrade also upgrade system packages that your R-packages may depend on.

#### Conda

No changes expected. Those who use Conda to run Python, R, or other tools should not see any changes.

#### Matlab

No changes expected.

#### Stata

No changes expected.

### What if I remain on the old OS version?

You will loose possibility to install packages. Many tools like Python are progressing and your setup will not be supported anymore. We recognize that some tools are bound to older package versions. [Contact us](/contact) if you are dependent on packages from the old operating system version so we can discuss different options to keep your science going.


## Machine types

You will meet four principal machine types in your lab. You may choose to deploy home, IaaS and SPOT machines in [various sizes](/administer-science/services/machine-types).

### What is a "home" machine?

This is a managed machine type. All labs have one "home" machine that is pre-configured with user accounts, [attached storage](/do-science/faq/storage#resources) and some analytical software. Users may download their own software using the **`apt`** package manager and reboot their machine when needed. Further configurations has to be guided by us. Home machines run Ubuntu 16.04 operating systems.

### What is an "IaaS" machine?

In addition to the home machine, lab leaders and lab coordinators may request new "IaaS" (infrastructure as a service) machines to be deployed in your lab. This is an unmanaged machine type where you as a lab user get full administrator privileges (root access). We expect you to configure and maintain these machines yourself. We usually deploy these machines with vanilla Ubuntu 20.04 operating system, 1TB of storage and the machine size of your choice. IaaS machines are deployed for a minimum of 30 days.

### What is a "SPOT" machine?

Spot machines are identical to IaaS machine with one exceptions: they are deployed for a maximum of 30 days. The machine type is introduced to allow for flexible deployments of short-lived high capacity environments.

### What is an "entry" machine?

You will meet the "entry" machine when you configure your account during your initial onboarding. Hopefully, you will not meet this machine type again. The machine type is introduced for security purposes allowing us to quickly install security updates and do machine restarts without affecting your analysis in the other lab machines.

### What is your "local" machine?

We use this term for the machine that you use to connect to your lab, such as your laptop and your desktop.
