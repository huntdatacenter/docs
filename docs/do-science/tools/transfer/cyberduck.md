---
title: Cyberduck
category: Transfer tools
permalink: /do-science/tools/transfer/cyberduck
sidebarDepth: 1
description: Installation and usage guide for cyberduck transfer tool.
---

# Cyberduck
Is a free software for convenient file transfers between your macOS laptop and lab. 

[[toc]]
## Download

You can download free version of Cyberduck through their main [webpage](https://cyberduck.io/download/). Once you download the app, follow instructions on screen for quick install.

## Setup connection to your lab

1. You will need to setup your `hosts file` and `SSH config file` according to your customized Access link which you received during your onboarding.

2. After you open the app, you should see following window. Select + sign in bottom left corner in order to setup new connection

![cyberduck1](./images/cyberduck1.png)

3. New window should pop-up. Fill in details as described in below image. 

![cyberduck2](./images/cyberduck2.png)

4. Double-click on your new connection. You should successfully connect to your lab entry node.


## How to transfer your files

You can confirm correct setup by checking if your `archive` and `work` directory are avialable in Cyberduck. 
Then, you are able to download/upload file by simple drag-n-drop or right clicking on your files and selecting *Download to*.


## Immediate troubleshooting

### What is my lab IP address ?

You can find you lab IP address in config.txt file sent over to your email or via access link which you were provided during initial onboarding. If you cannot find either, ping us in your lab channel on slack and we will help you out.