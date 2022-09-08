---
title: Lab users
category: Service desk
permalink: /service-desk/user-orders
description: HUNT Cloud service desk orders for lab users.
sidebarDepth: 2
---

# Service desk orders for lab users

**This page list predefined service orders for active users in one or more labs. To place an order, click the blue button and send us a pre-filled email with required information.**

[[toc]]

::: tip Save time

It saves you time to send us the request from your **organizational email**. We use this for identification, and request from private emails need additional verification that takes longer.

:::

Send us a regular [email](/contact) with your request if you can't find what you are looking for on the this page.




## Lab access

::: warning New users

The service orders below are aimed at active lab users. Lab access for new users are ordered by lab leaders or lab coordinators from our [lab orders page](/service-desk/lab-orders) using the [new lab user](/service-desk/lab-orders#new-lab-user) button.

:::

### Workbench access

[Workbench](/working-in-your-lab/workbench/) provides smooth access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R, Stata notebook or MATLAB.

<ServiceDesk title="Request Workbench access" :template='{
  subject: "Workbench order - {username} @ {labname}",
  body: `Hi HUNT Cloud team,

I would like to try Workbench in {labname}.

I have installed and activated the Signal app on my phone and are looking forward to receive my key and certificate.

These are the tools I plan to use: {tools}.

—  
Kind regards,  

`,
}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
  {
    label: "Tools",
    key: "tools",
    field: "selector",
    options: [
      "Rstudio",
      "Jupyter",
      "Python",
      {text: "MATLAB (need license)", value: "MATLAB"},
      {text: "Stata (need license)", value: "Stata"}
    ],
    default: ["Rstudio", "Jupyter", "Python"],
  },
]' />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** Workbench access key and certificate.
* **Requirement:** (1) Active Signal app on phone. (2) Active license from your host organization for MATLAB and Stata for these to be installed.
* **Next step:** [Prepare your key transfer](/guides/workbench-request/).
* **Cost:** Included in the lab subscription.


### Workbench reissue

If you have existing Workbench setup and your certificate has expired request new one.

<ServiceDesk title="Request Workbench reissue" :template='{
  subject: "Workbench reissue - {username} @ {labname}",
  body: `Hi HUNT Cloud team,

I would like to request reissue of Workbench certificate for lab: {labname}.

I have installed and activated the Signal app on my phone and are looking forward to receive my certificate. 


Kind regards,
`,
}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** Workbench certificate.
* **Requirement:** (1) Active Signal app on phone.
* **Next step:** [Guide on Workbench reissue](/guides/workbench-reissue-certificate/).
* **Cost:** Included in the lab subscription.


### SSH passphrase reset  

Order a [SSH passphrase reset](/guides/configure-ssh/) that you may need to access your workbench and install software on your home machine.

<ServiceDesk title="Request SSH passphrase reset" :template='{
  subject: "SSH passphrase reset - {username} @ {labname}",
  body: `Hi HUNT Cloud team,

I would like to request a passphrase reset for my user {username} @ {labname}.

I have activated Signal on my phone and are looking forward to receive my temporary key here.


Kind regards,

`,

}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** Temporary passphrase on Signal.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the passphrase reset](/guides/configure-ssh/).
* **Cost:** Included in the lab subscription.

### Deactivate lab access

Head over to the [lab orders page](/service-desk/lab-orders#deactivate-lab-user) to deactivate your lab access.








## System access

### VPN access list

We allow connection from known IP addresses only outside Norway. Access from networks outside Norway needs to be requested included in our VPN access list.

<ServiceDesk title="Request VPN access link opening" :template='{
  subject: "VPN access opening request - {username}",
  body: `Hi HUNT Cloud team,

I would like to request an VPN access opening for the following IP address: 

access_ip = {IP4_address}  
access_duration = {access_duration}  
access_country = {country}  

I am looking forward to be notified on email when the opening is implemented.


Kind regards,

`,
}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
  { label: "Access IP4 address", key: "IP4_address", pattern:"^\\s*((?!169\\.254\\.|10\\.|0\\.|127\\.|255\\.255\\.255\\.255|192\\.168\\.)(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.)((\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.){2}(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\s*$", hint: "Get your IP address here: http://ip4.me", field: "textfield" },
  {
    label: "Access duration",
    key: "access_duration",
    field: "selectone",
    options: [
      "Temporary",
      "Permanent",
    ],
    default: ["Temporary"],
  },
  { label: "Access Country", key: "country", pattern: "[-A-z0-9._]{3,}", field: "textfield" },
]' />

* **Who can order:** All active lab users.
* **Required information**: [Your IP4 address](http://ip4.me), location and purpose (see below).
* **Expected response time:** One day.
* **Expected delivery:** Opening communicated on email.
* **Cost:** Included in the lab subscription.

::: details About the required information

* **access_ip**. This is the external IP from your local machine that is visible for us when you connect. [Click here](http://ip4.me) to locate your address. Note that IPs that starts with "10.", "192." and "172." are internal addresses that will not work.
* **access_duration**. State if you request a "permanent" or "temporary" access from the address. Permanent openings will follow your user duration. If you need temporary access during travels or similar, state the desired duration of the opening.
* **access_country**. State from which country you will be connecting.

:::

### VPN certificate reset  

You may need to reset your VPN certificate when you get a new local machine or if you need a new VPN passphrase.


<ServiceDesk title="Request VPN certificate reset" :template='{
  subject: "VPN certificate reset - {username}",
  body: `Hi HUNT Cloud team,

I would like to reset my VPN certificate. 

I have an active Signal account on my phone, and are looking forward to receive my new VPN passphrase on the phone and a link to the new VPN certificate on my organizational email.

I am aware that my lab access will be paused from the new certificate is issued and until I have installed the new certificate on my local machine.


Kind regards,

`,
}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
]' />
* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** VPN passphrase on Signal, link to VPN certificate on email.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the VPN reset](/guides/vpn-certificate-reset/).
* **Cost:** Included in the lab subscription.



### Google authenticator key reset  

You need the [Google Authenticator key](/guides/google-authenticator-reset/) to access the HUNT Cloud VPN. Click the button below to request a new key (f.e. when you change your phone).

<ServiceDesk title="Request Google authenticator request" :template='{
  subject: "Google authenticator key request - {username}",
  body: `Hi HUNT Cloud team,

I would like to request a new Google authenticator key for my VPN access. 

I have an active Signal account on my phone and I look forward to receiving new key on my phone.

phone_number = {phone_number}


Kind regards,

`,
}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
  { label: "Phone number (optional)", key: "phone_number", pattern: "(not_changed|[+0-9]{3,})", hint: "Phone number should include only + and 0-9 numbers", field: "textfield", optional: true, default: "not_changed" },
]' />

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** New key on Signal.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the key reset](/guides/google-authenticator-reset/).
* **Cost:** Included in the lab subscription.

## Applications

### MobaXterm configuration file

You may simplify your MobaXterm configuration using a predefined file with credentials and configuration during setup.

<ServiceDesk title="Request MobaXterm configuration file" :template='{
  subject: "MobaXterm file - {username}@{labname}",
  body: `Hi HUNT Cloud team,
  
I would like to request a new MobXterm configuration file. 

I am looking forward to receive my file over email, and then head over to the docs to get going on the configuration: 

https://docs.hdc.ntnu.no/working-in-your-lab/technical-tools/mobaxterm/


Kind regards,

`,
}' :fields='[
  { label: "Username", key: "username", pattern: "[-a-z0-9._]{3,}", hint: "Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.", field: "textfield" },
  { label: "Lab name", key: "labname", pattern: "[-a-z0-9]{3,}", hint: "Lab name should include only lowercase letters a-z, 0-9, or dash.", field: "textfield" },
]' />
* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** File as email attachment.
* **Requirement:** Active SSH connection.
* **Next step:** [MobaXterm configuration guide](/working-in-your-lab/technical-tools/mobaxterm/).
* **Cost:** Included in the lab subscription.
