---
title: Docker
category: Technical tools
permalink: /working-in-your-lab/technical-tools/docker
sidebarDepth: 1
description: Usage guide for Docker
---

# Docker

**[Docker](https://docs.docker.com/engine/install/ubuntu/) provides application containers for Linux.**

## Installation

Follow official [Docker installation guide](https://docs.docker.com/engine/install/ubuntu/) if you want to install Docker on Iaas or Blue machine.

[GPU machines](/working-in-your-lab/technical-tools/gpu/) come with nvidia-docker preinstalled.

::: tip Singularity on home machines

Docker may fail to run on your home machine due to our security configurations. We recommend that you run Singularity on your home machine. Read more in our [Singularity installation guide](/working-in-your-lab/technical-tools/singularity/).

:::

## Moving docker directory

The operating system volume on your machine is limited in size. Depending on your size requirements, you may want to move your docker directory off the system disk and over to your machine home folder.

1. Stop docker service and migrate files:

```bash
sudo service docker stop

sudo rsync -avu /var/lib/docker/ /home/docker
```

2. Edit `/etc/docker/daemon.json` and add `data-root` path:

```bash
sudo vim /etc/docker/daemon.json
```

Example for IAAS / Blue machines:

```bash
{
    "data-root": "/home/docker",
}
```

Example for GPU machines:

```bash
{
    "data-root": "/home/docker",
    "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

3. Backup original Docker files:

```bash
sudo mv /var/lib/docker /var/lib/docker.backup
```

4. Restart Docker service:

```bash
sudo service docker restart
```

5. Test Docker command:

```bash
docker ps -a
```

## Troubleshooting

### Issues with pip packages

We have seen issues with installation on pip pakces due to `mtu` size issues. One solution is to add `mtu` size to your docker config file: 

1. Open your docker config file.

```bash
sudo vim /etc/docker/daemon.json
```

2. Set `mtu` to 1330.

Example configuration setting `mtu` to 1330 to avoid most issues with packet sizes:

```bash
{
    "data-root": "/home/docker",
    "mtu": 1330
}
```

