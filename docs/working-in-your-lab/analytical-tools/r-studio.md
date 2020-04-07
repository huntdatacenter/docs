---
title: R and R-Studio
permalink: /working-in-your-lab/analytical-tools/r-studio
sidebarDepth: 2
---

# R

[R](https://www.r-project.org/) is a handy language and environment for statistical computing and graphics.
We have already installed the latest version on your home machines.
For those of you running unmanaged machines on our security tier 2 may want to upgrade to the latest version using the code below:

[[toc]]

## Adjust R version

```bash
# Install R
sudo apt install r-base r-base-dev -y

# Add the updated package repository to your sources list:
# https://cran.r-project.org/bin/linux/ubuntu/
sudo su
echo "deb https://ftp.acc.umu.se/mirror/CRAN/bin/linux/ubuntu $(lsb_release -cs)/" >> /etc/apt/sources.list

# Add keys for the CRAN repository
gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E084DAB9
gpg -a --export E084DAB9 | sudo apt-key add -
exit

# Update packages
sudo apt update
sudo apt upgrade
sudo apt autoremove

# Start R
R
```

### Upgrade to latest R version

The default version in Ubuntu is usually a few versions behind the newest R version available. Follow the code below if you need the newest version.

```bash
# -- Add the new package repository to your sources list:
sudo add-apt-repository "deb https://cloud.r-project.org/bin/linux/ubuntu $(lsb_release -cs)-cran35/"

# Add keys for the r-project repository
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9

# -- Update packages
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y

# -- Start R
R
```

### Downgrade to a specific R version (IAAS machines)

Sometimes you may want to pin your R version to a specific release to please specific packages required for your work.
Below are a guide on how to downgrade and pin your R version to a specific release (just in case your figured out the need _after_ you upgraded R to a new version...).
The guide is copied from this great [forum post](https://askubuntu.com/questions/1056630/r-3-5-0-not-working-on-ubuntu-18-04/1057231#1057231).

::: warning Please note

This setup below will only work on IAAS- or BLUE-machines as they require administrator privileges.
Contact us if you need to downgrade the R version on your home machine.

:::

#### Save the R-packages that is already installed in your lab

```bash
dpkg -l | grep "^ii  r-" > r_packages.txt
```

#### Pin the software version to a specific version (in this case R 3.5)

```bash
cat <<EOF | sudo tee /etc/apt/preferences.d/pin-r35
Package: r-*
Pin: release a=$(lsb_release -cs)-cran35
Pin: version 3.5*
Pin-Priority: 800

Package: r-cran-nlme
Pin: release a=$(lsb_release -cs)-cran35
Pin: version 3.1.139-1$(lsb_release -cs)0
Pin-Priority: 800
EOF
```

#### Purge and remove the current R version

```bash
sudo apt purge r-*
sudo apt autoremove
```

#### Re-install your specific R version and your r-packages

```bash
sudo apt-get install $(cat r_packages.txt | awk '{print $2}')
```

#### Check that the new correct version is running

```bash
R

R version 3.5.3 (2019-03-11) -- "Great Truth"
```

#### Optional, remove the version pinning

Remove your pin-file if you want to revert to the newest version.

```bash
sudo rm /etc/apt/preferences.d/pin-r35
sudo apt dist-upgrade
```

## Install R Studio

We do provide the opportunity for a graphical interface via R Studio.
Researchers may install this on unmanaged machines.

::: tip
Make sure R-Studio is not already installed, if the lab was setup before command will return path.

```
which rstudio
```

:::

::: warning Please note

Installation on home-machines requires us to run some code.

The below guide will therefore not work on home-machines.

:::

::: warning Dependencies

`Without these, it will be impossible to get RStudio to work.`

- R (installed as above)
- A machine prepared for a [graphical interface (X2Go)](/working-in-your-lab/technical-tools/x2go/)
- An IAAS-machine or BLUE-machine with administrator access

:::

### Download the latest software version

Search [www.rstudio.com](https://www.rstudio.com/products/rstudio/download/#download) for the latest version in accordance with your operating system (e.g. Ubuntu 16.04 xenial).
The below text is an example code which you may cut and paste into your shell:

```bash
# download the package
wget https://download1.rstudio.org/rstudio-xenial-1.1.463-amd64.deb -O /tmp/rstudio.deb

# install essential dependencies
sudo apt update && sudo apt install -y libnss3 libasound2

# install rstudio
sudo apt install /tmp/rstudio.deb

# clean up files
rm /tmp/rstudio.deb
```

### Configure X2Go

To automatically start RStudio, revisit your _Session preferences_ in the [X2Go setup](x2go) and update your _Single application command path_ to `/usr/bin/rstudio`and _Create a session icon on the desktop..._.

::: tip NOTE
There is a known bug in x2go `1.1.456` that will go away if you comment out (add # before) a line in the x2goagent.options:

```bash
sudo vim /etc/x2go/x2goagent.options
# X2GO_NXAGENT_DEFAULT_OPTIONS+=" -extension BIG-REQUESTS"
```

:::
