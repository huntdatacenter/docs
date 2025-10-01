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

<img src="./images/cyberduck1.png" width="600px">

3. New window should pop-up. Fill in details as described in below image. 

<img src="./images/cyberduck_2.png" width="600px">

4. Double-click on your new connection. You should successfully connect to your lab *home* node.

## How to transfer your files

You can confirm correct setup by checking if your `archive` and `work` directory are avialable in Cyberduck. 
Then, you are able to download/upload file by simple drag-n-drop or right clicking on your files and selecting *Download to*.

## Recommended settings
### Setting for limiting bandwith 

1. Click settings under Cyberduck in the toolbar on top of the screen

<img src="./images/Cyberduck-step1.png" width="400px">

2. Click the bandwith icon and change both options to 10MB/s

<img src="./images/Cyberduck-step2.png" width="700px">

### Settings during transfer

Setting for limiting transfer connections to fairly share bandwith with others. 

1. Click the connection icon in the top right corner 

<img src="./images/cyberduck-limit-transfer-connections-1.png" width="600px">

2. Select the option for 2 connections

<img src="./images/cyberduck-limit-transfer-connections-2.png" width="400px">

## Immediate troubleshooting

### What is my lab IP address ?
You can find you lab IP address in config.txt file sent over to your email or via access link which you were provided during initial onboarding. Cannot find lab access link ? Request your lab access link [here](https://docs.hdc.ntnu.no/do-science/service-desk/#request-lab-access-link-reissue)

