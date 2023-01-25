---
title: Git
category: Technical tools
permalink: /do-science/tools/technical-tools/git
sidebarDepth: 1
description: Usage guide for Git in HUNT Cloud.
---

# Git

**[Git](https://git-scm.com/) is a handy version control system for tracking changes in files and coordinate work across your lab.**

[[toc]]


## Introduction 

Depending on your lab's Data Safety Level (DSL), your data controller may allow access to hosted git repository managers such as [GitLab](https://gitlab.com/), [GitHub](https://github.com/) and [Bitbucket](https://bitbucket.org/). 

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

## Add remote Git repositories on HUNT Cloud


### How to access GitHub

Add the following lines to your SSH configuration file `~/.ssh/config` on your `home` machine on HUNT Cloud:

::: tip
If the SSH configuration file `~/.ssh/config` does not exist, you have to create it.
:::

```ini
Host github.com
  Hostname ssh.github.com
  User git
  Port 443
  IdentityFile ~/.ssh/git
```

See [GitHub's documentation](https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port) for more details.

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

See [GitLab's documentation](https://docs.gitlab.com/ee/user/gitlab_com/#alternative-ssh-port) for more details.

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
  IdentityFile ~/.ssh/git
```

See [Atlassian's documentation](https://support.atlassian.com/bitbucket-cloud/docs/troubleshoot-ssh-issues/#If-port-22-is-blocked) for more details.

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
