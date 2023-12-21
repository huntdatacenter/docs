---
title: Patch notes
category: HUNT Cloud
description: Minor and major updates to our services.
---

# Patch notes

**This page contains major and minor updates to our services.**

[[toc]]

This page contains descriptions of updates to HUNT Cloud's services. All with the aim to provide the best possible conditions for your scientific explorations.

## Patch note 2.11.1

*2023-12-21*

::: details Do science

<h3>Major changes</h3>

**Remote desktop in Workbench**

We have added new icon to Workbench called "Remote desktop". By opening this application, a new window will open in your browser with a graphical interface where you can run your favorite tools over VNC. The new application is developed based on user feedback in an attempt to limit the use of tools such as x2go.

Note that this feature is available for labs running Ubuntu 22.04 operating system. If you don't the see VNC icon, you are probably on an older Ubuntu version. If so, Remote Desktop will become available in your Workbench as soon as your lab migrate to Cloud2.

**End of support for SPSS**

IBM decided to end their support and licensing for SPSS on Linux. This means that NTNU users will no longer have access to this tool in our labs. We are exploring open-source alternatives such as [jamovi](https://www.jamovi.org/). Let us know in your lab channel on Slack if this is something you would like to see priorized in HUNT Workbench.


<h3>Minor changes</h3>

**Latest version of MATLAB 2023b in Workbench**

All Workbench sessions are running on the latest MATLAB 2023b version.

**Freedom to explore**

We humbled and proud of your response to help us translate our tagline «Freedom to explore» into languages among our community members. So far we have register 42 translations! [Click here](/do-science/community/freedom-to-explore/) to see the results and to read more about he project.

:::


::: details Administer science

<h3>Major changes</h3>

**Fire safe for the off-site tape archive**

We have improved the fire safety of our off-site tape archive with an new safe that will withstand fire for up to 60 minutes. 

<h3>Minor changes</h3>

**Services specifications**

We have made two minor updates to the [Services specifications](/administer-science/services/specifications/) since the last patch notes.

**Updated invoice profile**

We have simplified the [Invoice profile](/administer-science/agreements/downloads/#invoice-profile) by moving Free quota and Pilot periods into separate agreements. 

<h3>Upcoming features</h3>

* We aim to improve the granularity of lab costs in the upcoming invoice cycle.
* We aim to propose major changes to our Services descriptions during the upcoming [Tingweek](/govern-science/tingweek/).

:::


::: details Govern science

<h3>Major changes</h3>

**External audit from DNV**

DNV audited us towards ISO/IEC 27001, 27017 and 27701 in November. The result was 0 major nonconformaties (CAT2), 5 minor nonconformaties (CAT1), 15 observations and 6 opportunities. We are currently working on the mitigations. The report from DNV is available for data controllers [on request](/contact). 

<h3>Upcoming features</h3>

* We aim to update governing documents based on suggestions from DNV over the next months.
* We aim to propose major changes to our Services descriptions during the upcoming [Tingweek](/govern-science/tingweek/).

:::



<!-- ================== -->



## Patch note 2.9.2

*2023-10-16*

::: details Do science

<h3>Major changes</h3>

**New community consent**

We will introduce a new consent for our HUNT Cloud community during Tingweek #10 next week. The intention is to ensure that you know and agree to how we processed your personal data in Slack. 

We will forward a consent link on email to all active users. Users that do not consent will be deactivated from Slack.

This is part of our wider effort to strengthen our protection of your personal data as a user of HUNT Cloud.

* [Read a copy of the new community consent](/do-science/community/current-consent/)
* [Read about our HUNT Cloud community](/do-science/community/)

**Workbench certificate expiration reminder**

We have started to forward reminders on email to renew your workbench certificate before expiration. The aim is to send you the notification roughly one week before you need to install the new certificates.


**Lab Access configuration**

We have removed the old onboarding guide, and new lab users will do their initial [lab access](/do-science/lab-access/) setup by clicking a `Lab access link` that we send in the initial onboarding email. The new ["Configure access](/do-science/lab/)-page will point you a service desk button where you can request a lab access link if you don't have yours at hand. 

<h3>Minor changes</h3>

**New Slack URL**

Our Slack URL is updated to [hunt-cloud.slack.com](https://hunt-cloud.slack.com). You may need to update the URL in your web browser, while apps on phones should automatically register the change.


**Automatic replys in Slack**

We have introduced custom Slackbots for common troubleshooting requests. For example, type `403` in your lab channel to give it a try. 

:::


::: details Administer science

<h3>Major changes</h3>

No updates.

<h3>Minor changes</h3>

**Add a new community member**

Labs under a BLUE data space subscription may now invite persons that are not lab users to their HUNT Cloud community lab channel. [Click here](/administer-science/service-desk/lab-orders/#community-membership) to request memberships. 

Membership is voluntary, and new members will be asked to consent to our data processing for the service. See our [community section](/do-science/community/) to learn more about our community and the new community consent.

<h3>Upcoming features</h3>

Improved granularity for individual lab costs on future invoices.

:::




::: details Govern science

<h3>Major changes</h3>

**New privacy statement**

We have introduced our own [privacy statement](/do-science/privacy-statement.html) that described how we process data for scientists and scientific administrators that users our services. A link to the privacy statement is included in all web pages and before individual service desk requests.

**New community consent**

We are introducing a new consent for the data processing in our HUNT Cloud community Slack chat. We will forward a consent link to all members. See our "Do science" patch note above for more information.


<h3>Minor changes</h3>

**Threats and vulnerabilities**

We have included the ability to report threats and vulnerabilities on our [contact](/contact) page.

**Deregister to future Tingweek invitations**

We have introducted a new service desk button where all users can deregister to future Tingweek invitations.

<h3>Upcoming features</h3>

**New policies and statement of applicability**

We will welcome DNV for a joint ISO 27001 and 27701 certiication audit in the first week of November. We plan to upgrade our Security and privacy policies and Statement of Applicability with new ISO/IEC 27001:2022 control set before the audit. 

:::





<!-- ================== -->

## Patch note 2.9.1

*2023-08-21*

::: details Do science

<h3>Major changes</h3>

**Visual Studio Code added to HUNT Workbench**

Virtual Studio Code (VS Code) is now available to all [HUNT Workbench](/do-science/hunt-workbench/) users. The application is linked with your lab directory, and Jupyter and python extensions are available by default. [Contact us](/contact) in your Slack lab channel if your require additional extensions.

**Custom IaaS access links**

New access guides tailored for individual lab users are added for unmanaged IaaS and GPU machines. The new guide will ship with new machine orders.

<h3>Minor changes</h3>

**Extended Singularity guide**

We have added a guide on [how to run Singularity](/do-science/tools/technical/singularity/) in your lab environment using Conda. The guide covers: 

* Installation
* Common practices and commands
* Pull, Run Docker image
* Listing running containers
* Stop running container
* Finding your images
* Temporary file storage

**RStudio updated in HUNT Workbench**

RStudio is updated to version 2023.06.1 in HUNT Workbench.

**Updated JupyterHub in HUNT Workbench**

JupyterHub4 is now running on all Workbench sessions.

**Lab Access link update**

We keep improving onboarding experience for new users.

* Users are now guided on how to setup VPN and TOTP (Time-based One-Time Password) in more convenient fashion with trackable progress of your onboarding.

**Extended X2Go guide**

We have updated the [X2Go guide](/do-science/tools/technical/x2go/) with screenshots and tried to clarify how you best can setup your lab session.


<h3>Upcoming features</h3>

* Singularity guide on Nextflow for scientific workflows.

:::




::: details Administer science


<h3>Minor changes</h3>

**Services specification**

Update to the [Services specification](/administer-science/services/specifications/) (2.9) where references to "security" is extended to "security and privacy" as a preparation for the upcoming ISO/IEC 27701-certification.

**Agreement updates**

We have updated the link to the service desk buttons at the bottom of all [service orders](/administer-science/agreements/downloads/).

<h3>Upcoming features</h3>

* Invoices are planned shipped in the first week of September.
* Community membership consent.
* We have been piloting a service to fill out PDF orders in your local browser. You can see an experimental version for our [Internal kista orders](/administer-science/service-desk/lab-orders/#internal-kista). 


:::




::: details Govern science

<h3>Major changes</h3>

We have started the implementation of [ISO/IEC 27701:2019](https://www.iso.org/standard/71670.html) for the planned certification audit with DNV later this year. This first step updates our policies and statement of applicability. 

**Updated Security and and privacy management policy**

We have included 'privacy' in our updated [Security and privacy management policy](/govern-science/policies/#security-and-privacy-management-policy) (v2.4). This document sets the direction for all our security and privacy work. 

**Updated Security and privacy policies**

Our new [Security and privacy policies](https://docs.hdc.ntnu.no/govern-science/policies/#security-and-privacy-policies) version (v4.4) includes 119 new privacy controls from ISO/IEC 27701:2019. The aim is to clarify control objectives aimed to protect information that we control or process on behalf of scientific institutions. 

**Updated Statement of applicability (SoA)**

[The new SoA](/govern-science/compliance/certificates/#statement-of-applicability-soa) includes 85 additional control objectives from ISO/IEC 27701:2019. New objectives are included as 'Planned, not implemented', and objectives that are merged with existing ISO/IEC 27002:2013 controls are adjusted from 'Fully implemented ' to 'Partly implemented' pending internal audits.

<h3>Upcoming features</h3>

* Planning of [Ting #10](/govern-science/tingweek/#tings) agenda and resolutions. [Contact us](/contact) if you have topics that you would like us to include. 
* Including justifications, comments and implementation status for new and merged privacy controls in SoA after on internal audits.
* General updates to our privacy practices related to the ISO/IEC 27701:2019 implementation.

:::


<!-- ================== -->


## Patch note 2.8.2

*2023-06-27*

Dear cloud community, 

Welcome to our first patch note!

We created this page to keep you informed about our activities and progress here at HUNT Cloud. In the below notes, you will read about what is new, what we are currently working on, known issues and more.

For the HUNT Cloud team  
*Jakub*


::: details Do science

<h3>Major changes</h3>

**Workbench guides for SSH reset**

We are introducing the ability for users to reset passphrase directly in Workbench.

* This method works for *new* and *existing* users. 
* Once you request SSH passphrase reset, head over to your Workbench to easily reset your passphrase in a familiar manner. 
* You can find further details in this [guide](/do-science/guides/configure-ssh-workbench/#ssh-passphrase-reset-in-workbench).


**Lab access link**

We are changing the way we approach onboarding of new users. This approach allows you to connect to our services using tailored-to-you copy-paste commands for your initial configuration.

* You can find Lab access link in your onboarding email, or request a new link in our Do science [service desk](/do-science/service-desk/#request-lab-access-reissue)


<h3>Minor changes</h3>

**Azcopy guide**

* We added a quick guide for users who want to transfer files from Azure Storage to their lab. [Click here](/do-science/tools/transfer/azcopy) for details.

<h3>Upcoming features</h3>

* NVMe storage - faster storage type for GPU and CPU intensive workloads.
* User paths - simplify ways to use our services.
* Simplified IaaS access - similar to Lab Access.


:::



::: details Administer science

<h3>Major changes</h3>

**Scientific access**

We are simplifying [Scientific access](/administer-science/scientific-access/) for new scientific centers and scientific groups and have updated the initial onboarding process: 

* [New section](/administer-science/scientific-access/) that describes the scientific onboarding.
* [New scientific access bundle](/administer-science/scientific-access/#order-scientific-access) that combines information needed to add your first Data space and Lab. 
* [FAQ section](/administer-science/scientific-access/faq/) dedicated to scientific access.

<h3>Minor changes</h3>

**Agreement updates**
 
We updated the agreements for [External kista import order](/administer-science/agreements/downloads/#external-kista-import-order) (v2.1) and [External kista export order](/administer-science/agreements/downloads/#external-kista-export-order) (v1.4): 

* Naming of "Internal lab user" included in separate header to improve differentiation from lab leader.

:::



::: details Govern science

<h3>Major changes</h3>

**Organizational access**

We are simplifying [Organizational access](/govern-science/organizational-access/) and have updated the initial onboarding process:

* [New section](/govern-science/organizational-access/) that describes the organizational onboarding.
* [New organizational agreement information form](/govern-science/organizational-access/#request-organizational-agreements) that combines information needed to generate your first data processor agreement and services center agreements. 
* [FAQ section](/govern-science/organizational-access/faq/) dedicated to organizational access.

**Lagtun resolutions**

The new [resolutions from Tingweek #9](/govern-science/tingweek/resolutions/) are adopted:

* Enable reduction of inactive compute resources
* Clarify costs for migration to new systems
* Explore data provider initiated data deliveries 


<h3>Minor changes</h3>

**New Tingweek dates**

[Dates for upcoming Tingweeks](/govern-science/tingweek/dates/): Tingweek #10 (2023-10) and Tingweek #11 (2024-02) are published in the Tingweek section.

:::


<!-- ================== -->


## About


#### Feedback

Found an issue, or want to submit a feedback? Send us a general request form in [Service Desk](/do-science/service-desk/#general-service-request).

#### Schedule

There are no fixed publication schedule for the next Patch note. The intention is to publish a new version whenever we think we have interesting updates to communicate. New notes gets communicated to our cloud community in Slack.


#### Numbering

We use a three digit numbering system on our Patch notes, for example version `2.8.3`. 

| Number | Description | 
| ---- | ---- | 
| 2 | Major services specification update | 
| 8 | Minor services specification update |
| 3 | Patch notes number | 

::: details Click here for details on the numbering

.

#### Major services agreement update 

The first number indicates which major [Services specification](/administer-science/services/specifications/) version the Patch notes are attached to. 

The number references the first digit of the current Services specification version. For example, Services specification version `2.8` will be listed as `2`. 

A major services agreement update indicates that services are changes in a way that need major agreement updates. Such updates are forwarded to all contractual partners on email, and major changes on existing services take effect 90 days after the announcement.

#### Minor services agreement update

The second number indicates which minor [Services specification](/administer-science/services/specifications/) version the Patch note are attached to.

The number references the second digit of the current Services specification version. For example, Services specification version `2.8` will be listed as `8`. 

A minor services agreement update indicate a change in the agreement text, such as clarifications, syntax updates and similar. These changes takes effect when they are communicated on these docs pages, and are not forwarded to contractual partners on email.

#### Patch notes number

The third number indicates which patch version the current note is attached to. Thus, a patch note is always linked to a specific Service specification version.

**Major updates**

Major updates indicates what we think are a substantial update in your user experience of our services. 
Such improvements may not always need updates in legal documents.

**Minor updates**

Minor Patch notes indicates what we think are small (but often important) user experience updates of our services, for example updates of guides, agreements or other good-to-know-about things.

**Upcoming features**

These are features that we have planned to move forward by the time of the notes publication, although they are not always the features that we end up prioritizing over the next period. 

:::
