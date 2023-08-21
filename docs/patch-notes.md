---
title: Patch notes
category: HUNT Cloud
description: Minor and major updates to HUNT Cloud's services.
---

# Patch notes

**This page contains major and minor updates to our services.**


<!-- <section id="link1">
  <button type="button" class="collapsible">Link 1 Title<span style="color:#e4b101;">.</span></button>
  <div class="collapsed-content">
    <hr />
    <p>Link 1 content.</p>
  </div>
</section> -->


<details open><summary style="font-weight: 600; font-size: 20px;">Patch note 2.9.3.0</summary>

### <u>Major changes</u>

*2023-08-21*

### Do science

#### *VSCode in HUNT Workbench*

We have added VSCode to Workbench, available to all Workbench users. 

* VSCode is linked wih your lab directory
* Jupyter and python extensions are available by default. If you require additional extensions, let us know in Slack channel

#### *Iaas Access link*

Created tailored-to-user guide for Iaas/GPU machines. This guide will be shipped with every Iaas/GPU machine order


### Administer science

### Govern science

### <u>Minor changes</u>

### Do science

#### *Sigularity guide*

Added basic guide on how to run Singularity in your lab environment using conda. Click [here](/do-science/tools/technical/singularity/#singularity) for more.

Guide currently covers: 

* Installation
* Common practices and commands
* Pull, Run Docker image
* Listing running containers
* Stop running container
* Where are the images stored ?
* Temporary file storage


#### *Updates*

* HUNT Workbench - Updated RStudio to version 2023.06.1
* Docs pages - Updated X2Go guide with screenshot, clearly explaining how to setup your lab session


### Administer science

On agreements: Updated links to service desk for all agreements: https://gitlab.hdc.ntnu.no/workspace/issues_and_docs/-/issues/8808

Update to Services specification: 2.9   2923-08-07    Description of "Security controls" updated to include "Security and privacy controls".

### Govern science


### Upcoming features

* Singularity guide - nextflow
* Community consent on Slack
* NVMe storage - faster storage type for GPU and CPU intensive workloads
* User paths - simplify ways to use our services


</details>


<details><summary style="font-weight: 600; font-size: 20px;">Patch note 2.8.2.0</summary>

*2023-06-27*

Dear cloud community, 

Welcome to our first patch note!

We created this page to keep you informed about our activities and progress here at HUNT Cloud. In the below notes, you will read about what is new, what we are currently working on, known issues and more.

For the HUNT Cloud team  
*Jakub*


### <u>Major changes</u>

### Do science

#### *Workbench guides for SSH reset*

We are introducing the abillity for users to reset passphrase directly in Workbench.

* This method works for *new* and *existing* users. 
* Once you request SSH passphrase reset, head over to your Workbench to easily reset your passphrase in a familliar manner. 
* You can find further details in this [guide](/do-science/guides/configure-ssh-workbench/#ssh-passphrase-reset-in-workbench).


#### *Lab access link*

We are changing the way we approach onboarding of new users. This approach allows you to connect to our services using tailored-to-you copy-paste commands for your initial configuration.

* You can find Lab access link in your onboarding email, or request a new link in our Do science [service desk](/do-science/service-desk/#request-lab-access-reissue)


### Administer science

#### *Scientific access*

We are simplifying [Scientific access](/administer-science/scientific-access/) for new scientific centers and scientfic groups and have updated the initial onboarding process: 

* [New section](/administer-science/scientific-access/) that describes the scientific onboarding.
* [New scientific access bundle](/administer-science/scientific-access/#order-scientific-access) that combines information needed to add your first Data space and Lab. 
* [FAQ section](/administer-science/scientific-access/faq/) dedicated to scientific access.


### Govern science

#### *Organizational access*

We are simplifying [Organizational access](/govern-science/organizational-access/) and have updated the initial onboarding process:

* [New section](/govern-science/organizational-access/) that describes the organizational onboarding.
* [New organiztional agreement information form](/govern-science/organizational-access/#request-organizational-agreements) that combines information needed to generate your first data processor agreement and services center agreements. 
* [FAQ section](/govern-science/organizational-access/faq/) dedicated to organizational access.

#### Lagtun resolutions

The new [resolutions from Tingweek #9](/govern-science/tingweek/resolutions/) are adopted:

* Enable reduction of inactive compute resources
* Clarify costs for migration to new systems
* Explore data provider initiated data deliveries 


### <u>Minor changes</u>

### Do science

#### *Azcopy guide*

* We added a quick guide for users who want to transfer files from Azure Storage to their lab. [Click here](/do-science/tools/transfer/azcopy) for details.

### Administer science

#### *Agreement updates* 

We updated the agreements for [External kista import order](/administer-science/agreements/downloads/#external-kista-import-order) (v2.1) and [External kista export order](/administer-science/agreements/downloads/#external-kista-export-order) (v1.4): 

* Naming of "Internal lab user" included in separate header to improve differentiation from lab leader.

### Govern science

#### New Tingweek dates

[Dates for upcoming Tingweeks](/govern-science/tingweek/dates/): Tingweek #10 (2023-10) and Tingweek #11 (2024-02) are published in the Tingweek section.
  
### Upcoming features

What are we working on? 

* NVMe storage - faster storage type for GPU and CPU intensive workloads.
* User paths - simplify ways to use our services.
* Simplified IaaS access - similar to Lab Access.

</details>

### Feedback

Found an issue, or want to submit a feedback? Send us a general request form in [Service Desk](/do-science/service-desk/#general-service-request).


<details><summary style="font-weight: 450; font-size: 20px;">About Patch Notes</summary>




### Numbering

We use a four digit numbering system on our Patch notes, for example version `2.8.3.0`. 

| Number | Description | 
| ---- | ---- | 
| 2 | Major services agreement update | 
| 8 | Minor services agreement update |
| 3 | Major Patch notes | 
| 0 | Minor Patch notes | 



#### Major services agreement update 

The first number indicates which major [Services specification](/administer-science/services/specifications/) version the Patch notes are attached to. 

The number references the first digit of the current Services specification version. For example, Services specification version `2.8` will be listed as `2`. 

A major services agreement update indicates that services are changes in a way that need major agreement updates. Such updates are forwarded to all contractual partners on email, and major changes on existing services take effect 90 days after the announcement.

#### Minor services agreement update

The second number indicates which minor [Services specification](/administer-science/services/specifications/) version the Patch note are attached to.

The number references the second digit of the current Services specification version. For example, Services specification version `2.8` will be listed as `8`. 

A minor services agreement update indicate a change in the agreement text, such as clarifications, syntax updates and similar. These changes takes effect when they are communicted on these docs pages, and are not forwarded to contractual partners on email.

#### Major Patch notes

The third number indicates which major Patch notes version the current notes are attached to. 

Major Patch notes indicates what we think are a substantial update in your user experience of our services. 
Such improvements may not always need updates in legal documents.

#### Minor Patch notes

The fourth number indicates which minor Patch notes version the current notes are attached to. 

Minor Patch notes indicates what we think are small (but often important) user experience updates of our services, for example updates of guides, agreements or other good-to-know-about things.

</details>

