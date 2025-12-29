---
title: Do science in HUNT Cloud
category: Do science
outline: 0
# aside: false
readingTime: null
permalink: /do-science/
description: These pages contains user documentation aimed at scientists that conduct scientific experiments in HUNT Cloud.
buttons:
  - title: "Service desk"
    subtitle: "Service orders that you can request as an active lab user in HUNT Cloud."
    href: "/do-science/service-desk/"
    icon: "mdi-email"
  - title: "Workbench"
    subtitle: "Getting started with Workbench"
    href: "/do-science/hunt-workbench/getting-started/"
    icon: "mdi-code-tags"
  - title: "Technical tools"
    subtitle: "Technical guides for Git, Docker, GPUs, Cuda, and other tools."
    href: "/do-science/tools/technical/"
    icon: "mdi-toolbox"
  - title: "Analytical tools"
    subtitle: "Guides for analytical tools like RStudio, MATLAB, or Stata."
    href: "/do-science/tools/analytical/"
    icon: "mdi-test-tube"
  - title: "AI / ML"
    subtitle: "GPUs for sensitive AI / ML models."
    href: "/do-science/tools/technical/gpu/"
    icon: "mdi-brain"
  - title: "Data transfers"
    subtitle: "How to transfer data between labs, import and export data."
    href: "/do-science/data-transfers/"
    icon: "mdi-swap-vertical"
  - title: "FAQ"
    subtitle: "Frequently asked questions"
    href: "/do-science/faq/"
    icon: "mdi-help-circle"
  - title: "Troubleshooting"
    subtitle: "Solutions to some of the common issues that you might encounter."
    href: "/do-science/troubleshooting/"
    icon: "mdi-bug"
---

<div class="page-container">
  <div class="page-header">
    <h1>Do science in HUNT Cloud</h1>
    <p class="lead-text">Welcome to our official user documentation for scientists in HUNT Cloud.</p>
  </div>

  <div class="page-icon">
      <img src="../images/hunt-cloud_bottle_250.png" alt="Illustration of laboratory glass bottle with yellow shimmery substance." />
    </div>

  <div class="page-content">
    <p>This section is for active lab users. It contains practical information on how to do science in HUNT Cloud.</p>
  </div>

  <div class="page-content">
    <p>See our <a href="/">main documentation page</a> for other sections.</p>
  </div>

<NavigationCards :buttons="$frontmatter.buttons" />
</div>

<!-- ::: tip Next Tingweek #13 (2024-10)

- **Labting**: Tuesday 15 October 2024 - 2 to 4 p.m. CET ([agenda](https://assets.hdc.ntnu.no/assets/tingweek/hunt-cloud-tingweek13-labting-agenda.pdf))

::: -->

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

