---
title: DPIAs and data applications
category: Administer science
permalink: /administer-science/dpia-and-data-applications
outline: 1
description: A consolidated reference for researchers who need to describe how data is stored and processed in HUNT Cloud when writing DPIAs and applications for data access.
---

# DPIAs and data applications

**This page gathers, in one place, the information scientists most often need when describing how data is stored and processed in HUNT Cloud. It is aimed at postdocs, principal investigators and PhD students who write Data Protection Impact Assessments (DPIAs) and applications for data access ("request for data") and need to document our security level, certifications and access controls.**

[[toc]]

::: tip We review your drafts
The fastest way to get this right is to let us comment on your written text. We are happy to assist with information, clarifications and review of DPIAs and data applications. [Contact us](/contact) — and see the [risk management resources](/govern-science/risk-management/resources) for the source documents behind this page.
:::

## A short description you can adapt

When an application asks you to describe where and how the data is processed, you can build on the following summary and tailor it to your project:

> The data is processed in HUNT Cloud, a secure scientific cloud service owned and operated by the Norwegian University of Science and Technology (NTNU). The processing takes place in a dedicated, isolated digital laboratory ("lab") running on physical servers owned by NTNU and located in data centers in Trondheim, Norway. Access requires an encrypted VPN connection with two-factor authentication, followed by an authenticated SSH login, and data never leaves the lab unless explicitly transferred. HUNT Cloud is certified to ISO/IEC 27001 (information security), ISO/IEC 27701 (privacy information management) and ISO 9001 (quality), with the cloud-specific controls ISO/IEC 27017 and ISO/IEC 27018 included in the 27001 certificate.

Always check the wording against your own project, your data controller's expectations and the current [certificates](/govern-science/compliance/certificates).

## Where your data lives

- **Owner and operator:** HUNT Cloud is fully owned by NTNU, Norway, and affiliated with the Department of Public Health and Nursing.
- **Location:** Your virtual machines run on physical servers owned by NTNU and located in data centers in Trondheim, Norway — relevant when an application asks about data location and storage outside the EU/EEA.
- **Isolation:** Your lab is one or more Linux virtual machines with attached storage inside a dedicated private network. Resources are dedicated to your lab; lab users cannot access data or resources belonging to other labs.
- **Entry machine:** A dedicated "entry" machine acts as a security gateway (jump host) that every connection must pass, keeping access control separate from your scientific work.
- **Home machine:** Your analysis runs on a "home" machine that holds your default storage volumes, your Workbench tools (Python, RStudio, MATLAB, remote desktop) and your analytical software. Data is uploaded to, stored in and analyzed on the home machine, and **does not leave the lab unless you explicitly transfer it**. You can scale the home machine's compute power and add storage or extra machines as your project grows.

## Security levels and data classification

Storage volumes in HUNT Cloud are classified by the sensitivity of the data they hold. Volumes are **classified as sensitive by default**.

| Classification | Description | Examples |
| - | - | - |
| **Sensitive** | Research data that can indirectly identify research participants. | Individual-level data such as phenotype and genotype data. |
| **Internal** | Research data that can *not* identify research participants. | Summary statistics, figures, computer code, non-human data, encrypted sensitive data. |

Volumes may be declassified from sensitive to internal in agreement with the relevant data controllers and lab owners.

::: tip Mapping to legal terms
HUNT Cloud's "Sensitive" and "Internal" labels are operational *storage* classifications, not legal categories. In GDPR and Norwegian terms, data that can indirectly identify participants (HUNT Cloud "Sensitive") is **pseudonymised personal data** — still personal data, and for health or genetic data a **special category** (see [legal framework](#norwegian-legal-framework-and-terminology) below). Data that can no longer identify anyone — a basis for "Internal" — corresponds to **anonymous data**, which falls outside data-protection law.
:::

::: warning Direct identifiers
Directly identifiable data — names, national identity numbers, phone numbers, addresses, etc. — may **not** be stored by default. It must be kept outside HUNT Cloud unless specifically approved in a dedicated amendment to the data processor agreement with your host organization. See the [security FAQ](/do-science/faq/security) for details.
:::

## Access security and two-factor login

Applications and DPIAs frequently ask how access is controlled. Access to a lab combines several independent controls:

1. **Encrypted VPN.** All traffic between the user's computer and HUNT Cloud runs through an encrypted OpenVPN connection, protecting the confidentiality of the data in transit.
2. **Two-factor authentication.** The VPN login requires a one-time verification code (TOTP) generated every 30 seconds in an authenticator app (Google or Microsoft Authenticator) on the user's personal phone, combined with a fixed personal passphrase. This is the "two-factor log-in".
3. **Authenticated SSH.** After the VPN, users authenticate with SSH — first to the entry (jump host) machine, then to the home machine that holds the data and analytical tools.
4. **Out-of-band key delivery.** Access keys are split across channels: certificates arrive as an encrypted 7z archive over organizational email, while the keys to unlock them are delivered separately over the encrypted Signal app to the user's registered phone.

Together this means a user needs *something they have* (phone with the authenticator and Signal keys) and *something they know* (VPN passphrase and SSH credentials) to reach the data.

## ISO certificates

Independent auditors verify HUNT Cloud against three international management-system standards every year. Certificates and audit reports are available to data controllers on request; you can cite them directly in your application.

| Standard | What it covers |
| - | - |
| **ISO/IEC 27001** | Information security management. Certified since 2017. |
| **ISO/IEC 27701** | Privacy information management (extends 27001). Certified since 2024. |
| **ISO 9001** | Quality management. Certified since 2017. |
| **ISO/IEC 27017** | Additional security controls for cloud services (included in the 27001 certificate). |
| **ISO/IEC 27018** | Additional privacy controls for cloud services (included in the 27001 certificate). |

The **Statement of Applicability (SoA)** lists exactly which ISO controls we apply, with their implementation status — a useful reference when an assessor wants to check specific safeguards. See the full [certificates page](/govern-science/compliance/certificates) for downloadable PDFs, certificate IDs and the SoA, and the [compliance program](/govern-science/compliance/) for an overview.

## Norwegian legal framework and terminology

Applications and DPIAs are easier to write — and to get approved — when you use the terms your institution and the authorities expect:

- **Data controller (*behandlingsansvarlig*)** — determines why and how personal data is processed; usually your host institution. **Data processor (*databehandler*)** — processes data on the controller's behalf; this is the role HUNT Cloud (NTNU) holds. The two are bound by a **data processor agreement (*databehandleravtale*)** — see our [data processor agreement](/govern-science/organizational-access/data-processor-agreement).
- **Legal basis (*behandlingsgrunnlag*)** — you must identify a lawful basis under GDPR [Article 6](https://gdpr-info.eu/art-6-gdpr/). For health, genetic and other **special categories of personal data (*særlige kategorier*)** you additionally need a basis under [Article 9](https://gdpr-info.eu/art-9-gdpr/); research typically relies on Article 9(2)(j).
- **Special categories** — *health data* and *genetic data* are special-category personal data. This is the precise legal term; HUNT Cloud's "Sensitive" label is the matching storage classification.
- **Security measures (*tekniske og organisatoriske tiltak*)** — GDPR [Article 32](https://gdpr-info.eu/art-32-gdpr/) requires appropriate technical and organisational measures. The isolation, access controls, encryption and certifications described above are what you cite here.

These rules reach Norwegian law through the **Personal Data Act (*personopplysningsloven*)**, which incorporates the GDPR. Medical and health research carries additional requirements:

- **Health Research Act (*helseforskningsloven*)** — research on people, human biological material or personal health data needs prior approval from a **Regional Committee for Medical and Health Research Ethics (REK)** before it can start.
- **Notification and advice** — projects processing personal data are normally notified to **[Sikt](https://sikt.no/en/data-protection-services)** (the data-protection service for most Norwegian institutions, formerly NSD), and your institution's **Data Protection Officer (*personvernombud*, DPO)** advises on and signs off DPIAs.

## Data Protection Impact Assessment (DPIA)

A DPIA may be required before processing begins where it is likely to result in a high risk to individuals' rights — for example large-scale processing of special-category (health or genetic) data. The duty comes from GDPR [Article 35](https://gdpr-info.eu/art-35-gdpr/), incorporated through the Personal Data Act (*personopplysningsloven*); the Norwegian term is *personvernkonsekvensvurdering*. A few points worth knowing:

- **You write the assessment.** There is no standardized text to copy — you must assess the risks relevant to your specific scientific context. We are happy to share and discuss scenarios, threats and assessments, and to comment on your drafts.
- **Residual risk.** No system removes all risk. Whatever remains after security and privacy controls are in place is the *residual risk*, and it must be formally accepted.
- **Risk owner.** The person with the authority to accept residual risk on behalf of the data and/or organization is the *risk owner*. You document your assessment and inform the risk owner of any residual risks; they accept the risk or require further reduction before the service is used.
- **Risk assessment reports (RAR).** Your organization may also request a security/privacy risk assessment ("ROS-analyse"). We share our own internal RAR with data controllers on request.

See the [risk management](/govern-science/risk-management/) section and its [FAQ](/govern-science/risk-management/faq) for more.

## What institutions often ask for

DPIA templates and data-application forms tend to ask the same questions. Here is where HUNT Cloud's answer comes from:

| The form asks about… | Where to find it |
| - | - |
| Where data is processed/stored (and whether outside the EU/EEA) | [Where your data lives](#where-your-data-lives) — NTNU data centers in Norway. |
| Data processor and processor agreement | [Legal framework](#norwegian-legal-framework-and-terminology); the [data processor agreement](/govern-science/organizational-access/data-processor-agreement). |
| Technical and organisational security measures (Art. 32) | [Access security](#access-security-and-two-factor-login), the [services specifications](/administer-science/services/specifications) and the [SoA](/govern-science/compliance/certificates#statement-of-applicability-soa). |
| Access control and authentication | [Access security and two-factor login](#access-security-and-two-factor-login). |
| Certifications / independent assurance | [ISO certificates](#iso-certificates). |
| Sub-processors / subcontractors | [Subcontractors](/govern-science/compliance/subcontractors). |
| Encryption | Encrypted VPN in transit; [tape service](/administer-science/data/tape-backup/) for encrypted offsite copies. |
| Backup, restore and deletion | [Data administrator FAQ](/administer-science/data/faq). |
| Incident / data-breach handling | [Security FAQ](/do-science/faq/security). |
| Logging and auditability | We log access and transfers; logs are available to data controllers on request — [contact us](/contact). |

## Documents you can cite

| Document | Use it to show… |
| - | - |
| [ISO certificates](/govern-science/compliance/certificates) | Independent verification of our security, privacy and quality management. |
| [Statement of Applicability (SoA)](/govern-science/compliance/certificates#statement-of-applicability-soa) | Which specific ISO controls are implemented. |
| [Security and privacy policies](/govern-science/policies/) | The framework of individual controls we commit to. |
| [Services specifications](/administer-science/services/specifications) | Responsibilities and security/privacy measures per service. |
| [Privacy statement](/administer-science/privacy-statement) | How HUNT Cloud handles personal data. |
| [Risk management resources](/govern-science/risk-management/resources) | The full set of resources behind risk assessments. |

::: tip Need something not listed here?
We hold an extensive collection of additional security documentation that is not published on these pages. It is available to data controllers on request under some conditions. [Contact us](/contact) for your assessments.
:::
