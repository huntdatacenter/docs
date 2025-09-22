---
title: For IT support
category: Lab access
permalink: /do-science/lab-access/for-it-support
outline: 1
description: Access information for IT support personnel.
---

# Access information for IT support

**This page is aimed at IT support personnel that may be asked to help their employees accessing labs in HUNT Cloud.**

[[toc]]

::: tip Contact us

Don't hesitate to [contact us](/contact) for technical follow-ups and questions to may help the onboarding of your employees.

:::

## About 

HUNT Cloud is a scientific cloud solution that provide secure processing environments for scientists.

HUNT Cloud is fully owned by the Norwegian University of Science and Technology (NTNU), Norway, and affiliated to the Department of Public Health and Nursing at the Faculty for Medicine and Health Sciences. Our data centers are located in Trondheim, Norway.

Our secure processing environments are named 'labs', and users inside a lab are named 'lab users'. In short, a lab gives a defined team of scientists access to a private space where they can upload, store and analyze data.

In slightly more technical terms, a lab is one or more virtual machines with Linux operating system and  attached storage located inside a dedicated private network.

## Technical requirements

Lab users will need the following to be able to access their labs.

**Equipment units**

* A dedicated local computer with updated operating system from Windows, Mac OS or Ubuntu Linux.
* A personal smart phone for one-time passwords and key transfers. 

**Software on the personal phone** 

* Signal 
* Google authenticator or Microsoft authenticator

**Software on the local computer**

* 7z (Windows/Linux) or Keka (Mac)
* OpenVPN (Windows/Linux) or Tunnelblick (Mac)
* Updated Chrome web-browser

**Installation actions that may need administrator privileges** 

* Install the VPN-certificate in OpenVPN/Tunnelblick
* Install the TLS-certificate in Chrome

**Network openings**

The VPN will need to connect with us on the following address that might require network openings at your organization: 

```
IP: 129.241.176.121
Port: 1194
Protocol: UDP
```

Blocked network connections will typically give errors such as `LS Error: TLS key negotiation failed to occur within 60 seconds` or `The VPN failed because the connection attempt timed out`.

## Information forwarded to lab users

We will send lab users an email on their organizational email address with access information as soon as their user agreements are processed on our side. This email includes:


* A link to an encrypted and compressed 7z-file with access certificates. Lab users needs to download this file to their local computer.
* A link to their 'Lab access link'. Lab users needs to click this link to see their personalized step-by-step access guide.

In addition, lab users gets an image on their phone over Signal that includes keys to the compressed 7z-file and temporary lab access keys. 

::: tip Expiration

The keys over Signal and the link to the compressed file are open for ten (10) days. Lab users can request a new link and Signal code by replying to their access email if the ten days has passed before they start their onboarding. We will normally ship a new link within the same or next working day. 

:::



## Principal access steps

Here are the principal steps that lab users needs to pass to gain access to their lab. 

### 1. Keys and certificates

Lab users will need a combination of temporary passwords and certificates to access their HUNT Cloud lab. 

We forward part of these codes directly to the lab user's private phone over the application Signal, and part over the lab user's organizational emails as an encrypted and compressed file. 

Lab users will need to install the Signal application on their phones and the 7z or Keka compression software on their local computer during this step. 
 

### 2. System access

Access to and from HUNT Cloud and lab users are controlled with Virtual Private Networks (VPN). 

The VPN utilizes a combination of one-time passwords (OTP) from the lab users smart phone and a fixed passphrase that we provide.

Lab users will need to install OpenVPN (Windows/Linux) or Tunnelblick (Mac) and initiate the certificate that we sent them on their local computer during this step. This step require administrator privileges on their local computer.

### 3. Lab access

Lab access requires a reset of the temporary passphrase over Secure Shell (SSH).

Lab users needs to reset their passphrase in two steps following the guide in their lab access link. 

Their first step is to reset the passphrase on a virtual machine that we have named 'entry'. This is the first machine (jump-host) into their lab that we fully control for security and logging purposes.

Then, lab users needs to repeat the same steps on a virtual machine that we have named 'home'. This is the machine that holds data and analytical tools. The process is described in their lab access link. 

### 4. Workbench access

Workbench is our web-based work environments where lab users can access common tools such as Python, RStudio, Matlab and their remote desktop (VNC).

The access requires access to Chrome browser on their local computer. The process also require administrator privileges to install TLS-certificate that is dedicated to the lab and update the host file for easier connection.


## Software licenses

HUNT Cloud utilizes open-source software for default application that are made available inside labs. 
|
Lab users have the ability to bring their own license for other application that they need for their work such as Stata, MATLAB and others. Lab users can forward their licenses in our Service desk.

## Security and privacy

HUNT Cloud holds third-party certifications for security (ISO 27001), privacy (ISO 27701) and quality (ISO 9001). Labs are protected with an extensive list of security and privacy controls. [Click here](/govern-science/) to visit our 'Govern science' section for more information.



