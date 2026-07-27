---
title: Apptainer (Singularity)
category: Technical tools
permalink: /do-science/tools/technical/apptainer-singularity
outline: 0
description: Installation guide for Apptainer (Singularity)
tags:
  - docker
  - apptainer
  - singularity
---


# Apptainer (Singularity)

**[Apptainer](https://apptainer.org/docs/user/latest/), previously known as Singularity, provides application containers for Linux that is also compatible with Docker.**

[[toc]]

## Installation

Version variable:

```sh
apptainer_version="1.5.3"
```

Download APT package:

```sh
wget "https://github.com/apptainer/apptainer/releases/download/v${apptainer_version}/apptainer_${apptainer_version}_amd64.deb"
```

Install:

```sh
sudo apt install "./apptainer_${apptainer_version}_amd64.deb"
```

## Common practices and commands

All information is collected from [the official Apptainer documentation](https://apptainer.org/docs/user/latest/).

### Pull Docker image

You can use the [pull](https://apptainer.org/docs/user/latest/cli/apptainer_pull.html) and [build](https://apptainer.org/docs/user/latest/cli/apptainer_build.html) commands to download pre-built images from an external resource like the [Container Library](https://cloud.sylabs.io/library) or [Docker Hub](https://hub.docker.com/).

```bash
apptainer pull docker://godlovedc/lolcow
```

```bash
apptainer build  -B $TMPDIR lolcow.sif docker://godlovedc/lolcow
```

### Run Docker image

For demonstration, let’s use an easy (though somewhat useless) example of [lolcow.sif](https://hub.docker.com/r/wdconinc/lolcow/) image from Docker:

```bash
apptainer pull docker://godlovedc/lolcow
#-- The above command will save the alpine image from the Container Library as lolcow.sif
```

To start an instance, you should follow below pattern:

```
apptainer instance start -B $TMPDIR      <image>    <instance-name>
```
```bash
apptainer instance start -B $TMPDIR lolcow.sif instance1
```

This command causes Apptainer to create an isolated environment for the container services to live inside.



### Listing running containers

One can confirm that an instance is running by using the `instance list` command like so:

```bash
apptainer instance list

INSTANCE NAME    PID        IP    IMAGE
instance1        3661427          /mnt/scratch/tmp/rootfs-728963423/root
```

### Stop running container

When you are finished with your instance you can clean it up with the `instance stop` command as follows:

```bash
apptainer instance stop instance1
```

### Where are the images stored ?

By default, Apptainer will create a set of folders in your `$APPTAINER_CACHEDIR` directory for docker layers, Cloud library images, and metadata, respectively:

```bash
$APPTAINER_CACHEDIR/cache/library
$APPTAINER_CACHEDIR/cache/oci
$APPTAINER_CACHEDIR/cache/oci-tmp
```

### Temporary file storage

By default, Apptainer won't recognize lab tmp storage. You can apply lab tmp storage location `/mnt/scratch/tmp` to a container using `-B $TMPDIR` variable

```bash
#-- Example
apptainer shell -B $TMPDIR docker://ubuntu
```
