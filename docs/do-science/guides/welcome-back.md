---
title: Welcome back
category: Guides
permalink: /do-science/guides/welcome-back
sidebarDepth: 1
description: Guide to pick up the thread after being away for several months.
---

# Welcome back

**This page is aimed at lab users that needs to pick up their thread after some time away from their lab.**

We know, science has its natural cycles and seasons for courses, grants, supervision, publishing, celebrations and so forth. We have our seasons too, with time for breaks, work sprints, parental leaves, caring for family members etc. 

It's normal to not remember where you left off, and quickly picking up the threads when you get back is important. Our aim for this page is to get you back in your lab so you can quickly click around to get reacquainted with your data, scripts and thinking again.

[[toc]]


## Are you able to access your lab?

First thing first, we need to get you into your lab so you can do your science. 

### No, I'm not able to get in

Worry not, let's get you in. Lab users that are inactive for 180 days will automatically be deactivated for security reasons. If so, we will need a lab user reactivation request from your lab leader or lab coordinator in our service desk:

[Service desk - User reactivation](/administer-science/service-desk/lab-orders/#reactivate-lab-user)

Ask your lab leader or lab coordinator to send us a new user agreement. [Contact us](/contact) on email or Slack if you don't remember who's your lab leader or lab coordinator. You will get new keys and further guides on how to get in once the request is registered and your new keys are ready. 

### Yes, but I forgot everything

Worry not if your account is active but you have forgotten your passwords and/or how to log in. 

**New computer**

If you have a new local computer since your last visit, click on the link below to get going:

[Guides - New computer](/do-science/guides/new-computer/) 

You will need to order VPN and Workbench certificates and a SSH passphrase reset if you don't remember your lab password.

**New location**

If you are abroad and accessing your lab from a new location, you may need to request access for your network here: 

[Service desk - Request VPN access link opening](/do-science/service-desk/#vpn-access-list)


**New password**

Passwords are easy to forget when you have been away for a while. Note that there is no button named "I forgot my password" in service desk. Rather, you will need to request a new SSH passphrase: 

[Service desk - SSH passphrase reset](/do-science/service-desk/#ssh-passphrase-reset)


This will reset your lab password that you use both in Workbench and when your log in over SSH. You will get your new temporary passphrase on Signal and guidance in your access link over email. 


**New Workbench certificate**

Your Workbench certificate expire after some time, and then you will need to install a new one. You can order a new one here: 

[Service desk - Workbench certificate](/do-science/service-desk/#hunt-workbench-reissue)

You will get the certificate on email and guidance in your access link on how to replace your old one.


## Remind me

### Organization at a glance

**Located in Norway**

Your lab is hosted on a virtual machine that is located on a physical machine located in one of HUNT Cloud's data centers in Norway. 

**Shared resources**

Inside your lab you share storage and resources with your lab team. You have your own Workbench where you can install your own package, preferably with Conda.

**Storage folders**

Your Workbench and lab is set up with default storage folders `work`, `archive` and `scratch`. Data here is shared among your team. We recommend that you use `scratch` for your temporary files, `archive` for your long term data storage, and `work` for your day-to-day activities. Note that `scratch` and your `home` folder -do not- have restore (backup). 

### What's new since last time

We continuously update our services, and your Workbench or other things may look a bit different from last time. 

**Updates in Patch notes**

We publish our updates in patch notes. This is a handy way to see what's changed. The "Do science" section is a good place to start for scientific work.

[Patch notes](/administer-science/patch-notes/#patch-notes)

Rest assured that we never move or interfere with data inside your lab without your consent and clear communication first.

**Ask around**

If you are unsure about what is going on in your lab, grab a coffee with your lab team or lab coordinator for an update. And feel free to [contact us](/contact) for an update or chat about on improvements since last time.


### Where can I get more information?

Our documentation pages (these web pages) is a good place to get started. Start in our [Do science](/do-science) section and in our [FAQs](/do-science/faq).

### Where can I get help?

We are always happy to get in touch and hear what is going on. The best way to reach us is through our [Service desk](/do-science/service-desk/#service-desk-for-lab-users) and Slack.

**Service desk**

We have Service Desk for the most common orders. This is the quickest way 


 but if none of these fit, you can reach us in your lab channel on Slack or place a general request [here](/do-science/service-desk/#general-service-request)





