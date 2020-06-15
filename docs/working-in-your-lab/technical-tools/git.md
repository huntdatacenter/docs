---
title: Git
category: Technical tools
permalink: /working-in-your-lab/technical-tools/git
sidebarDepth: 1
description: Usage guide for Git.
---

# Git

[Git](https://git-scm.com/) is a handy version control system for tracking changes in files and coordinate work across your lab.

[[toc]]

## Remote Git repositories on HUNT Cloud

Depending on your lab's security tier, your data controller may allow access to hosted git repository managers such as [GitLab](https://gitlab.com/) and [GitHub](https://github.com/).
If so, you will be able to clone remote repositories, for example:

```bash
git clone https://github.com/samtools/htslib.git
```

However, you may notice things do not work when using the `git@github.com:` format, for example:

```bash
git clone git@github.com:samtools/htslib.git
```

This does not work because Git is using SSH on port `22` which is blocked by default by the firewalls on HUNT Cloud.

Luckily we can tell Git to use a different port, such as port `443`, which is open by default. See below how to do this for your favorite hosted git repositories.

### How to access GitHub

Add the following lines to your SSH configuration file `~/.ssh/config` on your `home` machine on HUNT Cloud:

::: tip
If the SSH configuration file `~/.ssh/config` does not exist, you have to create it.
:::

```ini
Host github.com
  Hostname ssh.github.com
  Port 443
```

See GitHub's [Using SSH over the HTTPS port](https://help.github.com/en/articles/using-ssh-over-the-https-port) article for more details

### How to access GitLab

Add the following lines to your SSH configuration file `~/.ssh/config` on your `home` machine on HUNT Cloud:

::: tip
If the SSH configuration file `~/.ssh/config` does not exist, you have to create it.
:::

```ini
Host gitlab.com
  Hostname altssh.gitlab.com
  User git
  Port 443
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/git
```

See GitLab's [article](https://about.gitlab.com/2016/02/18/gitlab-dot-com-now-supports-an-alternate-git-plus-ssh-port/) for more details.

### How to access Bitbucket

Add the following lines to your SSH configuration file `~/.ssh/config` on your `home` machine on HUNT Cloud:

::: tip
If the SSH configuration file `~/.ssh/config` does not exist, you have to create it.
:::

```ini
Host bitbucket.org
  Hostname altssh.bitbucket.org
  User git
  Port 443
```

See [Atlassian troubleshooting guide](https://confluence.atlassian.com/bitbucket/troubleshoot-ssh-issues-271943403.html#TroubleshootSSHissues-Ifport22isblocked) for more details.

## Set up

### Generate a new SSH key for the connection

- From your lab-home, generate a new key to be used with your git-repository manager: `ssh-keygen -f ~/.ssh/git`. You may change the key-name, _git_ in this example, to whatever you like.
- View the content of your new public key, and copy the content to your clipboard: `cat ~/.ssh/git.pub`

### Add your new key

- In GitHub, attach the content of the file to your account [as described here](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/).
- In GitLab, attach the content of the file to your account [as described here](https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html)

### Test your connection

- In GitHub, test if you are allowed to connect to GitHub from port 443 (`ssh -T -p 443 git@ssh.github.com -i ~/.ssh/git`). GitHub should greet you if successful, if not, you need to talk to your lab technical contact to learn about the network restrictions of your lab.
- In GitLab, test if you are allowed to connect to GitLab from port 443 (`ssh -T -p 443 git@altssh.gitlab.com -i ~/.ssh/git`). GitLab should greet you if successful, if not, you need to talk to your lab technical contact to learn about the network restrictions of your lab.
- In GitHub, test your new connection with `ssh -T git@github.com`. You should see a greeting.
- In GitLab, test your new connection with `ssh -T git@gitlab.com`. You should see a greeting.
