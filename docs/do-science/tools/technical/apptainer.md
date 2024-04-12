---
title: Apptainer (Singularity)
category: Technical tools
permalink: /do-science/tools/technical/singularity
sidebarDepth: 0
description: Installation guide for Apptainer (Singularity)
tags:
  - docker
  - apptainer
  - singularity
---


# Apptainer (Singularity)

**[Apptainer](https://docs.sylabs.io/guides/latest/user-guide/index.html), previously known as Singularity, provides application containers for Linux that is also compatible with Docker.**

[[toc]]

## Install with Conda

::: warning Requirements

- Conda (miniconda), see our [Conda tutorial](/do-science/tools/analytical/conda/) for more details.
- Conda channels: conda-forge, bioconda

:::

**Add the conda-forge channel**

You will need the conda-forge channel to install Singularity. If you have not set channels yet make sure to add it:

```bash
conda config --add channels conda-forge
```

**Install Apptainer (Singularity) in conda environment**

Create environment and install Apptainer (Singularity):

```bash
conda create -n apptainer -c conda-forge "apptainer"
```

Activate your apptainer environment and try running Apptainer:

```bash
conda activate apptainer

apptainer --help
```

## Common practices and commands

All information is collected from [the official Apptainer documentation](https://docs.sylabs.io/guides/latest/user-guide/index.html).

### Pull Docker image

You can use the [pull](https://docs.sylabs.io/guides/3.3/user-guide/cli/singularity_pull.html) and [build](https://docs.sylabs.io/guides/3.3/user-guide/cli/singularity_build.html) commands to download pre-built images from an external resource like the [Container Library](https://cloud.sylabs.io/library) or [Docker Hub](https://hub.docker.com/).

```bash
#-- Example
singularity pull library://library/default/alpine
```

```bash
#-- Example
singularity build  -B $TMPDIR lolcow.sif docker://godlovedc/lolcow
```

### Run Docker image

For demonstration, let’s use an easy (though somewhat useless) example of [alpine_latest.sif](https://cloud.sylabs.io/library/_container/5baba5e594feb900016ea41c) image from the [container library](https://cloud.sylabs.io/library/):

```bash
singularity pull library://alpine
#-- The above command will save the alpine image from the Container Library as alpine_latest.sif.
```

To start an instance, you should follow below pattern:

```
singularity instance start -B $TMPDIR      <image>    <instance-name>
```
```bash
singularity instance start -B $TMPDIR alpine_latest.sif instance1
```

This command causes Singularity to create an isolated environment for the container services to live inside.



### Listing running containers

One can confirm that an instance is running by using the `instance list` command like so:

```bash
singularity instance list

INSTANCE NAME    PID      IMAGE
instance1        12715    /home/ysub/alpine_latest.sif
```

### Stop running container

When you are finished with your instance you can clean it up with the `instance stop` command as follows:

```bash
singularity instance stop instance1
```

### Where are the images stored ?

By default, Singularity will create a set of folders in your `$SINGULARITY_CACHEDIR` directory for docker layers, Cloud library images, and metadata, respectively:

```bash
$SINGULARITY_CACHEDIR/cache/library
$SINGULARITY_CACHEDIR/cache/oci
$SINGULARITY_CACHEDIR/cache/oci-tmp
```

### Temporary file storage

By default, Singularity won't recognize lab tmp storage. You can apply lab tmp storage location `/mnt/scratch/tmp` to a container using `-B $TMPDIR` variable

```bash
#-- Example
singularity shell -B $TMPDIR docker://ubuntu
```
