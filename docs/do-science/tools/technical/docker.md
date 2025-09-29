---
title: Docker
category: Technical tools
outline: 1
permalink: /do-science/tools/technical/docker
description: Usage guide for Docker
---

# Docker

**[Docker](https://docs.docker.com/engine/install/ubuntu/) provides application containers for Linux. You may run Docker on On-demand and BLUE machines.**

[[toc]]

::: warning Singularity on home machines

Docker will fail on your **`home`** machine due to security restrictions. We recommend that you run Singularity on your home machine. Read more in our [Singularity installation guide](/do-science/tools/technical/singularity).

:::


## Installation

Follow the official [Docker installation guide](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) to install Docker on unmanaged machines (On-demand and BLUE machines). [GPU machines](/do-science/tools/technical/gpu) come with nvidia-docker preinstalled.



## Move Docker directory

The operating system volume on your machine is limited in size. Depending on your size requirements, you may want to move your docker directory off the system disk and over to your machine home folder.

On you unamanged machine: 

1. Stop the docker service.

```bash
sudo service docker stop
```

2. Copy your Docker files to your home folder. 
 
```bash
sudo rsync -avu /var/lib/docker/ /home/docker
```

3. Point Docker to your new location by editing **`/etc/docker/daemon.json`** and add your new **`data-root`** path:

```bash
sudo vim /etc/docker/daemon.json
```

Example for On-demand and BLUE machines:

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

4. Backup your original Docker files.

```bash
sudo mv /var/lib/docker /var/lib/docker.backup
```

5. Restart the Docker service to fetch the new location.

```bash
sudo service docker restart
```

6. Test your new setup with a Docker command.

```bash
docker ps -a
```

## Troubleshooting

### Issues with pip packages

We have seen issues with installation of pip packages due to **`mtu`** size issues. One solution is to add **`mtu`** size specification to your Docker config file: 

1. Open your Docker config file.

```bash
sudo vim /etc/docker/daemon.json
```

2. Set **`mtu`** to 1330.

This is an example configuration setting **`mtu`** to 1330 to avoid most issues with packet sizes:

```bash
{
    "data-root": "/home/docker",
    "mtu": 1330
}
```


