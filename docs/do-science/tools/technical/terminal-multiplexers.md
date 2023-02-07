---
title: Terminal multiplexers
category: Technical tools
permalink: /do-science/tools/technical/terminal-multiplexers
sidebarDepth: 1
description: Usage guide for terminal multiplexers, tmux and screen.
---

# Terminal Multiplexers

**Working with code and programs in persistent terminal sessions allow your work to run even when you disconnect from your virtual machine.**

This is practical when your want to keep your code running if your internet connection drops, to resume work at home or similar. 

Below are a couple of popular terminal multiplexers, all preinstalled in your lab, so you can find your favorite.

[[toc]]

## GNU Screen

[GNU Screen](https://www.gnu.org/software/screen/) is one of the most popular terminal multiplexers. It's a great starting point to get you going.

### Start a new session

Start a virtual session on your computer with:

```bash
screen -S testsession
```

You may see a blink on the screen or a Screen welcome menu, and then something that resembles your regular terminal window.

### List sessions

Now let's try to list your running sessions (you can have many running at once):

```bash
screen -ls
```

You should see something like:

```bash
There are screens on:
        <number>.testsession        <time> (Attached)
```

This means that you are attached to the virtual session named `testsession`.
Write some random text in your command line within the session to mimic come work before we try to attach the session.

### Detach your session

Detach your session holding down the `Ctrl` key together with `A` and `D`:

```bash
Ctrl + A + D
```

Your screen should blink again and you should see something like this in your terminal:

```bash
[detached from <number>.testsession]
```

### Resuming a session

First list the sessions again using `screen -ls` as described above. You should expect something like this:

```bash
There are screens on:
  <number>.testsession  <time>  (Detached)
```

This means that your session is still alive on your computer. This session can now be resumed with the command `screen -r <sessionname>`:

```bash
screen -r testsession
```

You should now see the random text that you left in inside your session before you detached.

### Terminating a session

Terminate your session with `exit`.

```bash
exit
```

### Learning more about Screen

If you want to learn more about Screen, including how to use multiple windows and split screens check out the [How to Install and Use Screen on an Ubuntu Cloud Server](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-screen-on-an-ubuntu-cloud-server) tutorial or the comprehensive [Screen User's Manual](https://www.gnu.org/software/screen/manual/).

## tmux

[tmux](https://github.com/tmux/tmux/wiki) is a newer and popular alternative to GNU Screen.
There are many good online introductions to tmux such as [A Quick and Easy Guide to tmux](https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/) and the online book [The Tao of tmux](https://leanpub.com/the-tao-of-tmux/read).

## Byobu

[Byobu](https://byobu.org/) is a handy wrapper for both tmux and GNU Screen.
It includes an enhanced profiles, convenient keybindings, configuration utilities, and toggle-able system status notifications for both the GNU Screen window manager and the more modern Tmux terminal multiplexer, and works on most Linux, BSD, and Mac distributions.
