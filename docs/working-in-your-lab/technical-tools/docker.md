---
title: Docker
category: Technical tools
permalink: /working-in-your-lab/technical-tools/docker
sidebarDepth: 0
description: Usage guide for Docker
---

# Docker

[Docker](https://docs.docker.com/engine/install/ubuntu/) provides application containers for Linux.

::: tip

If you need to run docker images on `home` machine try using Singularity instead. Read more in our [Singularity installation guide](/working-in-your-lab/technical-tools/singularity/).

:::

## Installation

Follow official [Docker installation guide](https://docs.docker.com/engine/install/ubuntu/) if you want to install Docker on Iaas or Blue machine.

[GPU machines](/working-in-your-lab/technical-tools/gpu/). come with nvidia-docker preinstalled.

## Moving docker directory

1. Stop docker service and migrate files:

```
sudo service docker stop

sudo rsync -avu /var/lib/docker/ /home/docker
```

2. Edit `/etc/docker/daemon.json` and add `data-root` path:

```
sudo vim /etc/docker/daemon.json
```

Example for IAAS / Blue machines:
```
{
    "data-root": "/home/docker",
}
```

Example for GPU machines:
```
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

```
sudo mv /var/lib/docker /var/lib/docker.backup
```

4. Restart Docker service:

```
sudo service docker restart
```

5. Test Docker command:

```
docker ps -a
```
