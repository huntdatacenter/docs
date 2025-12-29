---
title: Govern science in HUNT Cloud
category: HUNT Cloud
permalink: /govern-science/
outline: 0
# aside: false
description: These pages contains user documentation aimed at representatives that govern science in HUNT Cloud.
buttons:
  - title: "Organizational access"
    subtitle: "Required agreements for organizations that wants to enable HUNT Cloud resources."
    href: "/govern-science/organizational-access/"
    icon: "mdi-file-document-edit"
  - title: "Tingweek"
    subtitle: "We meet three times per year to advance our services."
    href: "/govern-science/tingweek/"
    icon: "mdi-comment"
  - title: "Policies"
    subtitle: "Quality, security and privacy policies governs activities in HUNT Cloud."
    href: "/govern-science/policies"
    icon: "mdi-format-list-checks"
  - title: "Compliance"
    subtitle: "Our compliance program aims to ensure a trustworthy frame."
    href: "/govern-science/compliance/"
    icon: "mdi-shield-account"
  - title: "Risk management"
    subtitle: "This page list risk management resources for HUNT Cloud."
    href: "/govern-science/risk-management/"
    icon: "mdi-account-cog"
  - title: "Service desk"
    subtitle: "Predefined service orders that data controllers and service centers can order."
    href: "/govern-science/service-desk/"
    icon: "mdi-email"
  - title: "FAQ"
    subtitle: "Frequently asked questions."
    href: "/govern-science/faq/"
    icon: "mdi-help-circle"
---

<div class="page-container">
  <div class="page-header">
    <h1>Govern science in HUNT Cloud</h1>
    <p class="lead-text">Welcome to our documentation for representatives that govern science in HUNT Cloud.</p>
  </div>

  <div class="page-icon">
    <img src="../images/hunt-cloud_compass_250.png" alt="Illustration of sundial compass in brass." />
  </div>

  <div class="page-content">
    <p>This section is aimed at representatives for data controllers and service centers. See our <a href="/">main documentation page</a> for other sections.</p>
  </div>

  <div class="page-content">
    <p>See our <a href="/govern-science/organizational-access/">organizational access</a> section for guidance on how new organizations can enable HUNT Cloud resources for their scientific centers and research groups.</p>
  </div>

  <NavigationCards :buttons="$frontmatter.buttons" />
</div>

<style scoped>
.page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;
}

.lead-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
}

.page-content {
  margin-bottom: 40px;
  line-height: 1.8;
}

.page-content p {
  margin-bottom: 20px;
  font-size: 1rem;
}

.page-icon {
  text-align: center;
  margin: 40px 0;
  justify-self: center;
}

.page-icon img {
  max-width: 150px;
  height: auto;
  justify-self: center;
}
</style>
