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

Below guide establishes a connection between [Iaas](/do-science/faq/compute/#what-is-an-iaas-machine) machine and your local VSCode editor. This allows you to run code from your local computer on your iaas machine.


## 1 Requirements

#### 1.1 Extensions

Below extensions are required in order for you to setup a successfull connection between your local machine and iaas machine.

In [extensions](https://code.visualstudio.com/docs/editor/extension-marketplace), find and install `Remote-SSH`.
After you have successfully installed this extension, you can move to next step.

#### 1.2 Setup .ssh config file

::: expander "macOS" id="macos-1"

1. You need to access VSCode `command palette` by shortuct ⇧⌘P (`CMD+shift+P`), or selecting `View --> Command Palette`.

![mvscode1](./images/vscode1.png)

2. A command pallete should pop-up. Type in:

```
 Remote-SSH: Open SSH Configuration file
```

![mvscode2](./images/vscode2.png)

Press enter. Now  select config file, f.e. `/Users/username/.ssh/config`

![mvscode3](./images/vscode3.png)

3. A window with your ssh config file should open in VScode. In here, you can paste your iaas [ssh-config.txt](/do-science/getting-started/configure-ssh/#_3-1-identify-required-info) file which you have recevied from us. Send us a [general request](/do-science/service-desk/#general-service-request) if you are missing this text file.

Example:

![mvscode4](./images/vscode4.png)

4. Save your changes and continue with next step

:::

::: expander "Windows" id="widows-1"
WIP
:::

::: expander "Linux" id="linux-1"
WIP
:::


## 2 Connect to your Iaas machine

Now that you have installed necessary extensions and setup config file, you will be able to connect directly to Iaas machine.

2.1 In command palette, type `Remote-SSH: Connect to Host` and select it from the drop down menu.

![vscode5](./images/vscode5.png)

2.2 A list of connections from your .ssh/config file should appear in drop down menu. Select your Iaas machine. A new window will open and after a short moment you should be prompted for Iaas machine password.

![vscode6](./images/vscode6.png)

2.3 On the left side of the window, select [Explorer](https://code.visualstudio.com/docs/getstarted/userinterface#_explorer). 

![vscode7](./images/vscode7.png)

You should see an option to Open Folder. Click on it and keep default path /home/username or select preffered path. Type Iaas machine password once more when prompted. 

![vscode8](./images/vscode8.png)



2.4 Now you should see all files in your selected directory. Happy coding !


