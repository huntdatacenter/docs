---
title: Visual Studio Code
category: Technical tools
permalink: /do-science/tools/technical/vscode
sidebarDepth: 1
description: Usage guide for VNC.
---

## Visual Studio Code

[VS Code](https://code.visualstudio.com/) is a source-code editor made by Microsoft and support most common features such as debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.


## Connect to Iaas machine with VSCode

Below guide establishes a connection between Iaas machine and your local VSCode editor. This allows you to run code from your local computer on your Iaas machine.


## 1. Requirements

#### 1.1 Extensions



#### 1.2 Setup .ssh config file

::: details macOS

1. You need to access VSCode `command palette` by shortuct ⇧⌘P (`CMD+shift+P`), or selecting `View --> Command Palette`

:::
Windows 

Linux


## 2. Connect to your Iaas machine

Now that you have installed necessary extensions and setup config file, you will be able to connect directly to Iaas machine.

2.1 In command palette, type `Remote-SSH: Connect to Host` and select it from the drop down menu.

2.2 Then you should have a list of connections from your .ssh/config file available in drop down menu selection. Select your Iaas machine. After a short moment you should be prompted for Iaas machine password

2.3 On the left side of the window, select `Explorer`. You should see an option to Open Folder. Click on it and keep default path /home/username or select preffered path. Type Iaas machine password once more when prompted. 

2.4 Now you should see all files in your selected directory. Happy coding !


