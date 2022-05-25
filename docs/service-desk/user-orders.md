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

::: tip

(1) Send your order from your organizational email that was registered in your user agreement. (2) Send us a regular [email](/contact) with your request if you can't find what you are looking for on the this page.

:::




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

I have install and activated the Signal app on my phone and are looking forward to receive my key and certificate.

These are the tools I plan to use: {tools}.

—  
Kind regards,  

`,
}' :fields='[
  { label: "Username", key: "username", field: "textfield" },
  { label: "Lab name", key: "labname", field: "textfield" },
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

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=Workbench%20reissue%20-%20%7Busername%7D%20%40%20%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20reissue%20of%20Workbench%20certificate%20for%20lab%3A%20%7Blabname%7D.%0A%0AI%20have%20installed%20and%20activated%20the%20Signal%20app%20on%20my%20phone%20and%20are%20looking%20forward%20to%20receive%20my%20certificate.%20%0A%0ABest%2C" class="nav-link external action-button">
    Request Workbench reissue
  </a>
</p></div></div>

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** Workbench certificate.
* **Requirement:** (1) Active Signal app on phone.
* **Next step:** [Guide on Workbench reissue](/guides/workbench-reissue-certificate/).
* **Cost:** Included in the lab subscription.


### SSH passphrase reset  

Order a [SSH passphrase reset](/guides/configure-ssh/) that you may need to access your workbench and install software on your home machine.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=SSH%20passphrase%20reset%20-%20%7Busername%7D%20%40%20%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20passphrase%20reset%20for%20my%20user%20%7Busername%7D%20%40%20%7Blabname%7D.%0A%0AI%20have%20activated%20Signal%20on%20my%20phone%20and%20are%20looking%20forward%20to%20receive%20my%20temporary%20key%20here.%0A%0ABest%2C" class="nav-link external action-button">
    Request SSH passphrase reset
  </a>
</p></div></div>

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

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=VPN%20access%20opening%20request%20-%20%7Busername%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20an%20VPN%20access%20opening%20for%20the%20following%20IP%20address%3A%20%0A%0A%7BIP4-address%7D.%0A%0AI%20am%20looking%20forward%20to%20be%20notified%20on%20email%20when%20the%20opening%20is%20implemented.%0A%0ABest%2C
" class="nav-link external action-button">
    Request VPN access list opening
  </a>
</p></div></div>

* **Who can order:** All active lab users.
* **Required information**: [Your IP4 address](http://ip4.me).
* **Expected response time:** One day.
* **Expected delivery:** Opening communicated on email.
* **Cost:** Included in the lab subscription.


### VPN certificate reset  

You may need to reset your VPN certificate when you get a new local machine or if you need a new VPN passphrase.


<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=VPN%20certificate%20reset%20-%20%7Busername%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20reset%20my%20VPN%20certificate.%20%0A%0AI%20have%20an%20active%20Signal%20account%20on%20my%20phone%2C%20and%20are%20looking%20forward%20to%20receive%20my%20new%20VPN%20passphrase%20on%20the%20phone%20and%20a%20link%20to%20the%20new%20VPN%20certificate%20on%20my%20organizational%20email.%0A%0AI%20am%20aware%20that%20my%20lab%20access%20will%20be%20paused%20from%20the%20new%20certificate%20is%20issued%20and%20until%20I%20have%20installed%20the%20new%20certificate%20on%20my%20local%20machine.%0A%0ABest%2C" class="nav-link external action-button">
    Request VPN certificate reset
  </a>
</p></div></div>

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** VPN passphrase on Signal, link to VPN certificate on email.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the VPN reset](/guides/vpn-certificate-reset/).
* **Cost:** Included in the lab subscription.



### Google authenticator key reset  

You will need to reset the [Google Authenticator key](/guides/google-authenticator-reset/) that you need to access the HUNT Cloud VPN, for example when you change your phone.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=Google%20authenticator%20key%20request%20-%20%7Busername%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20new%20Google%20authenticator%20key%20for%20my%20VPN%20access.%20%0A%0AAlternative%201%3A%20%0A%0AI%20have%20an%20active%20Signal%20account%20on%20the%20same%20phone%20number%20that%20is%20registered%20in%20my%20user%20account%20and%20are%20looking%20forward%20to%20receive%20my%20new%20key%20on%20my%20phone.%0A%0AAlternative%202%3A%20%0A%0APlease%20note%20that%20I%20have%20a%20new%20phone%20number%20%28%2B00-0000000%29.%20I%20have%20activated%20Signal%20on%20this%20number%20and%20are%20looking%20forward%20to%20receive%20my%20new%20key%20on%20the%20app.%0A%0ABest%2C" class="nav-link external action-button">
    Request Google authenticator key reset
  </a>
</p></div></div>

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** New key on Signal.
* **Requirement:** Active Signal app on your phone.
* **Next step:** [Guide on the key reset](/guides/google-authenticator-reset/).
* **Cost:** Included in the lab subscription.

## Applications

### MobaXterm configuration file

You may simplify your MobaXterm configuration using a predefined file with credentials and configuration during setup.

<div class="home" style="padding: 0px;"><div class="hero">
<p class="action">
  <a href="mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=MobaXterm%20file%20-%20%7Busername%7D%40%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20new%20MobXterm%20configuration%20file.%20%0A%0AI%20am%20looking%20forward%20to%20receive%20my%20file%20over%20email%2C%20and%20then%20head%20over%20to%20the%20docs%20to%20get%20going%20on%20the%20configuration%3A%20%0A%0Ahttps%3A//docs.hdc.ntnu.no/working-in-your-lab/technical-tools/mobaxterm/%0A%0ABest%2C" class="nav-link external action-button">
    Request MobaXterm configuration file
  </a>
</p></div></div>

* **Who can order:** All active lab users.
* **Expected response time:** Days.
* **Expected delivery:** File as email attachment.
* **Requirement:** Active SSH connection.
* **Next step:** [MobaXterm configuration guide](/working-in-your-lab/technical-tools/mobaxterm/).
* **Cost:** Included in the lab subscription.
