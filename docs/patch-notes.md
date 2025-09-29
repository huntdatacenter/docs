---
title: Patch notes
category: HUNT Cloud
description: Patch notes list major and minor updates to HUNT Cloud's services.
---

# Patch notes

**This page contains major and minor updates to our services.**

[[toc]]

This page contains descriptions of updates (patches) to HUNT Cloud's services. All with the aim to provide the best possible conditions scientific explorations.


## Patch note 2.11.4

*2025-05-28*

::: details Do science

<h3>Major changes</h3>

**Documentation updates** 

We are updating our [tools](/tools) section in do science guides. These updates can range from simple text adjustments to updating code and removing those that are irrelevant.

If you think we are missing an important guide or a guide is not working as expected, please give us feedback via this [contact form](/about/contact).

<h3>Minor changes</h3>  

- Added automatic IPv4 checking [here](/ipv4/)

::: 

::: details Administer science 

<h3>Major changes</h3>

**New GPUs on offer**

Introduced two new GPU series from NVIDIA in 2025-Q1. 

**NVIDIA A16** - cheapest card on offer. Providing 16GB of VRAM while giving strong performance. We can utilise up to 12x cards in a single lab gpu node, offering up to 192GB of VRAM.

**NVIDIA L40S** - New series from NVIDIA aiming for fast AI, image and ML processing. This is a new gen of A40 cards, offering 48GB of VRAM in a single card. Up to 2x cards available in a single gpu node.  

You can review price on both GPU cards [here](/administer-science/prices/pricelist).  

<h3>Minor changes</h3>

- Cleaned up inconsistencies in price lists

:::

::: details Govern science

<h3>Major changes</h3>

**Updated ISO certifcation** 

New certificate are uploaded under [certificates](/govern-science/compliance/certificates/#iso-iec-27001-certificate)


<h3>Minor changes</h3>


::: 


## Patch note 2.11.3

*2024-10-09*

::: details Do science

<h3>Major changes</h3>

**Onboarding video guides for Windows users**

We have added video guides for Windows users to the lab access links. The aim is to ease the onboarding and support the written information. The videos supplement the video guides for Mac that was published earlier this year.

As a next step we are thinking about how to expand the video guides into other topics. Feel free to [contact us](/contact) with suggestions and ideas.

<h3>Minor changes</h3>  

- MATLAB: We have started upgrades to v2024b for NTNU users.
- RStudio: Upgraded from v2023 to v2024, and improved the start-up time in Workbench. 
- Visual Studio Code: Version upgrade (2024/8) and included support for Snakemake.
- Workbench environment: Extended the environment timeout from 3 to 10 days. This means that environments that are inactive for more than 10 days will be shut down. 
- Fixed issue in Windows lab access link where commands would not work if you have space in your user directory structure

::: 

::: details Administer science

<h3>Major changes</h3>

**Storage performance configuration** 

We noticed substantial performance reduction on our  block storage configuration in Cloud2 as the usage increased over the summer. 

After spending a significant amount of time identifying the root cause, we are now adding several measure to increase the system predictability. 

As part of this, we have started to move current storage volumes over to new configurations. Labs will be contacted to schedule such updates with approximately one day downtime during implementation.

As a next step we plan to differentiate on different storage types/performance in our services specification and price list.

<h3>Minor changes</h3>

**Migration milestone** 

More than half of all labs are now migrated from Cloud1 to Cloud2. After a small pause due to the storage performance issues, we have now resumed the migration. Remaining labs will be contacted to schedule their move to limit the downtime of scientific activities.

::: 


::: details Govern science

<h3>Major changes</h3>

**Policy ownership** 

The ownership of our [Security and privacy management policy](/govern-science/policies/#security-and-privacy-management-policy) is moved from the Head of HUNT Research Centre to the Head of HUNT Cloud as part of an internal reorganization. 

**New quality policy**

We have established a new [Quality policy](/govern-science/policies/#quality-policy) independent from HUNT Research Centre as part of the effort towards our own ISO/IEC 9001 certificate in Quality management. The document outlines the quality measures that we strive towards for our services.


<h3>Minor changes</h3>

**New Lab transfer order** 

To simplify the movement of Labs between different Data spaces (administrative units), we have added a new "[Lab transfer order](administer-science/agreements/downloads/#lab-transfer-order)" that define the process. The order is signed by the Data space leader of the current and destination Data space and specify the date when the costs will be moved.

::: 



## Patch note 2.11.2

*2024-04-15*

::: details Do science

<h3>Major changes</h3>

**Onboarding video guides**

We have added video guides for the most common steps in your lab onboarding. When you get your lab access link, you will see a new icon that allows you to watch a guide where we walk you through specific steps in your onboarding process to support the written access link guide. [Let us know](/contact) if you would like us to expand the video guides into other topics. 

**Tailored lab access links**

We have updated your lab access links so it is tailored for your specific request. For example, if you request a Workbench ceritficate you will now only see the sections that are relevant for this configuration.

**New machine type (E-series)**

Based on requests, we have updated our default machine series with a [new E-series](/administer-science/services/machine-types/#e-series) that holds 16 GB ram per CPU. These can be ordered by [Requesting a machine size update](/administer-science/service-desk/lab-orders/#update-cpu-machine-size) in our administer science service desk. 

**New GPU type (A40)**

NVIDIA A40 GPUs with 48 GB of memory are now available as [GPU accelerator types](/administer-science/services/machine-types/#gpu-accelerator-types) in Cloud2. [Contact us](/contact) for prioritized migration if you want to give it a try.


<h3>Minor changes</h3>

**Apptainer (Singularity)**

The containerization tool Singularity was renamed to Apptainer when it moved into [Linux Foundation](https://apptainer.org/news/community-announcement-20211130/). [Our documentation](/do-science/tools/technical/apptainer-singularity) is updated accordingly. 

**Guide for VS Code in Workbench**

We have added a Workbench [guide for VS Code](/do-science/hunt-workbench/getting-started/vscode) with information on how to create a Jupyter notbook or Python environment, how to run R code with r kernel and similar. 

**BRAT annotation tool in Workbench**

We have added [BRAT rapid annotation](https://brat.nlplab.org/) tools to Workbench. This is a tool for collaborative text annotation.

**Freedom to explore in new languages**

Our community translation of [Freedom to explore](/do-science/community/freedom-to-explore) continues to grow, and we have added [Bulgarian](/do-science/community/freedom-to-explore/#bulgarian-bul), [Serbian](/do-science/community/freedom-to-explore/#serbian-srp) and [Indonesian](/do-science/community/freedom-to-explore/#indonesian-ind) since the last patch note - now counting an impressive 44 translations! Help us grow the list and [send us your translation](/do-science/community/freedom-to-explore/#my-language-is-missing) if your language is missing!


:::


::: details Administer science

<h3>Major changes</h3>

**Migration to the new location has started**

After years in the making, we are excited to announce that the migration to our new location and cloud installation has started! We have a new server-room with upgraded equipment and more flexibility ready for your as soon as you complete your migration. We are reaching out to labs to schedule the migration with the aim to avoid conflicts with deadlines and other important work. See our [FAQ pages for migration](/do-science/faq/migration) for more information. 

**New price list (v4.1)**

We have updated our [price list](/administer-science/prices/pricelist/#current) with a new version (v4.1) that includes the new E-series machine types and the new NVIDIA A40 GPU type. The [price calculator](/administer-science/prices/calculator) is updated accordingly.

**Invoice updates**

We have updated our supportive invoicing information from 2023-Q4 with additional information. The new versions combine all costs under one invoice profile with listings per lab and resource type. The aim is to increase the transparency and overview of your costs. [Contact us](/contact) with suggestions of how we can further improve your invoice.

**Dataspace reports**

We have created and shipped the first Data space reports. These aims to summarize information and resource consumption across one to several invoice profiles that are attached to a data space. The aim is to increase control and const control across your entire scientific portfolio. [Contact us](/contact) with suggestions of how we can further improve your report.



<h3>Minor changes</h3>

**VAT extemption outside NTNU**

We updated the [invoice profile form](/administer-science/agreements/downloads/#invoice-profile) with a section on possible extemptions from value added tax. Documented collaborations with partners from NTNU may be exempted from VAT if delivery of trusted research environments is part of the collaboration agreement. [Contact us](/contact) is this is relevant for you.

**Automatic overhead estimates for temporary Internal kistas**

We are now automatically calculating file system overhead in internal kista orders. This means that you order a size that is equal to the amount of data that you plan to transfer. In short, kistas with a size below 1TB receives 100GB additional buffer size, and kistas above 1TB recieves 10 percent buffer to compensate for the file system. 

**Restore option for new storage volumes**

We have added an option to select if you want restore to be anabled when you order new storage volumes. Previously such volumes was deployed without restore by default.

**External kista IPv4 validation**

Added a new field which will prompt user to validate their public IPv4 address. If IPv4 address is private, user will not be allowed to continue and should double check validity of their IPv4 address.


<h3>Upcoming features</h3>

**Spending limits**

We see a need to increase the spending limit intervals on invoice profiles from quarters to yearly amounts. The aim is to improve our reporting when you close in on the thresholds. We plan to reach out to invoice profile contacts before the 2024-Q2 invoice.

**Service descriptions**

We plan to introdue the new Services descriptions for Explore, Evolve and Scientific suite during the during the upcoming [Tingweek](/govern-science/tingweek/).

:::



::: details Govern science

<h3>Major changes</h3>

**New ISO certificates available**

The new certificates for ISO/IEC 27001 and ISO/IEC 27701 from DNV is now available from our [compliance section](/govern-science/compliance/certificates). 

**New service center reports**

Based on the last Tingweek resolution ([R10/LT11/T11/24]((/govern-science/tingweek/resolutions/#improve-resource-and-compliance-reporting))), we have made a new service center report that summarize resources, activities and costs inside all data spaces and labs under your center. The intention is that this will increase transparency and enhance dialogues on how to improve our systems and advance your science. We will forward the first version on email with the aim to automate shipments from 2024-Q2.

**Community deletion policy enforced**

Community messages in Slack is from 2024-01-01 stored for 1Y only. Older messages automatically deleted in accordance with our [community consent](/do-science/community/current-consent/#you-messages-are-kept-for-one-year). Read more about the consent history [here](/do-science/community/consent-information).

**Security and privacy policies with new privacy controls**

[Security and privacy policies](/govern-science/policies/#security-and-privacy-policies) are updated with additional privacy controls from ISO/IEC 27017 and with updated sections on roles and definitions. The updates are based on findings from DNV in November.

<h3>Minor changes</h3>

**Updated Statement of applicability**

[Statement of Applicability (SoA)](/govern-science/compliance/certificates/#statement-of-applicability-soa) is the document where we state which ISO control objectves we have applied in our certificate. We have updated the document with new roles and comments for our privacy controls. 

**Agreement updates**

* The data encryption section in the Security measures appendix to our Data processor agreements is updated to reflect that data is encrypted for regular hard drives at the new location (Site 2). 
* The [Price list appendix](/administer-science/prices/pricelist) to the service center agreement is updated with a new machine series and a new GPU accelerator choice. The change is directly implemented since they affect new services. 

<h3>Upcoming features</h3>

**Next Tingweek**

The [next Tingweek](/govern-science/tingweek/) is held from May 28 to 30. Now is the time to [contact us](/contact) with suggestions and dialogues on new resolutions.

:::

<!-- ================== -->

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

We humbled and proud of your response to help us translate our tagline «Freedom to explore» into languages among our community members. So far we have register 42 translations! [Click here](/do-science/community/freedom-to-explore) to see the results and to read more about he project.

:::


::: details Administer science

<h3>Major changes</h3>

**Fire safe for the off-site tape archive**

We have improved the fire safety of our off-site tape archive with an new safe that will withstand fire for up to 60 minutes. 

<h3>Minor changes</h3>

**Services specifications**

We have made two minor updates to the [Services specifications](/administer-science/services/specifications) since the last patch notes.

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

* [Read a copy of the new community consent](/do-science/community/current-consent)
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

We have added a guide on [how to run Singularity](/do-science/tools/technical/singularity) in your lab environment using Conda. The guide covers: 

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

We have updated the [X2Go guide](/do-science/tools/technical/x2go) with screenshots and tried to clarify how you best can setup your lab session.


<h3>Upcoming features</h3>

* Singularity guide on Nextflow for scientific workflows.

:::




::: details Administer science


<h3>Minor changes</h3>

**Services specification**

Update to the [Services specification](/administer-science/services/specifications) (2.9) where references to "security" is extended to "security and privacy" as a preparation for the upcoming ISO/IEC 27701-certification.

**Agreement updates**

We have updated the link to the service desk buttons at the bottom of all [service orders](/administer-science/agreements/downloads).

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
* New scientific access bundle that combines information needed to add your first Data space and Lab. 
* [FAQ section](/administer-science/scientific-access/faq) dedicated to scientific access.

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
* [FAQ section](/govern-science/organizational-access/faq) dedicated to organizational access.

**Lagtun resolutions**

The new [resolutions from Tingweek #9](/govern-science/tingweek/resolutions) are adopted:

* Enable reduction of inactive compute resources
* Clarify costs for migration to new systems
* Explore data provider initiated data deliveries 


<h3>Minor changes</h3>

**New Tingweek dates**

[Dates for upcoming Tingweeks](/govern-science/tingweek/dates): Tingweek #10 (2023-10) and Tingweek #11 (2024-02) are published in the Tingweek section.

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

The first number indicates which major [Services specification](/administer-science/services/specifications) version the Patch notes are attached to. 

The number references the first digit of the current Services specification version. For example, Services specification version `2.8` will be listed as `2`. 

A major services agreement update indicates that services are changes in a way that need major agreement updates. Such updates are forwarded to all contractual partners on email, and major changes on existing services take effect 90 days after the announcement.

#### Minor services agreement update

The second number indicates which minor [Services specification](/administer-science/services/specifications) version the Patch note are attached to.

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
