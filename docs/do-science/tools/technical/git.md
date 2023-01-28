---
title: Git
category: Technical tools
sidebarDepth: 1
permalink: /do-science/tools/technical/git
description: Usage guide for Git in HUNT Cloud.
---

# Git

**[Git](https://git-scm.com/) is a version control system for tracking changes in files and coordinate work across your lab.** 

Depending on your lab's Data Safety Level (DSL), your data controller may allow access to hosted git repository managers such as [GitLab](https://gitlab.com/), [GitHub](https://github.com/) and [Bitbucket](https://bitbucket.org/).

[[toc]]

## Add remote Git repositories

Log into your lab home machine in HUNT Cloud and add the following lines to your SSH configuration file `~/.ssh/config`:

::: tip
If the SSH configuration file `~/.ssh/config` does not exist, you have to create it.
:::

### How to access GitHub


```ini
Host github.com
  Hostname ssh.github.com
  User git
  Port 443
  IdentityFile ~/.ssh/git
```

See [GitHub's documentation](https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port) for more details.

### How to access GitLab

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

From your lab home machine:

- Generate a new key to be used with your git-repository manager: `ssh-keygen -f ~/.ssh/git`. You may change the key-name, _git_ in this example, to whatever you like.

- View the content of your new public key, and copy the content to your clipboard: `cat ~/.ssh/git.pub`

### Add your new key

- In GitHub, attach the content of the file to your account [as described here](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/).
- In GitLab, attach the content of the file to your account [as described here](https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html)

### Test your connection

- In GitHub, test if you are allowed to connect to GitHub from port 443 (`ssh -T -p 443 git@ssh.github.com -i ~/.ssh/git`). GitHub should greet you if successful, if not, you need to talk to your lab technical contact to learn about the network restrictions of your lab.
- In GitLab, test if you are allowed to connect to GitLab from port 443 (`ssh -T -p 443 git@altssh.gitlab.com -i ~/.ssh/git`). GitLab should greet you if successful, if not, you need to talk to your lab technical contact to learn about the network restrictions of your lab.
- In GitHub, test your new connection with `ssh -T git@github.com`. You should see a greeting.
- In GitLab, test your new connection with `ssh -T git@gitlab.com`. You should see a greeting.


## Troubleshooting

### Connection does not work

You may have noticed that things do not work when you attempt to use the regular `git@github.com:` format, for example:

```bash
git clone git@github.com:samtools/htslib.git
```

This is due to our restriction on port `22` which is used for the git clone command.

The above guides demonstrate how you can use a different port, such as port `443`, for this communication.

