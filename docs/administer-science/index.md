---
title: Administer science in HUNT Cloud
category: Administer science
permalink: /administer-science/
outline: 0
# aside: false
description: These pages contains user documentation aimed at individuals that administer science in HUNT Cloud.
buttons:
    - title: 'Service desk'
      subtitle: 'Service orders that you can order for labs and data spaces in HUNT Cloud.'
      href: '/administer-science/service-desk/'
      icon: "mdi-email"
    - title: 'Scientific access'
      subtitle: 'Required agreements for scientific centers and groups.'
      href: '/administer-science/scientific-access/'
      icon: "mdi-file-edit"
    - title: 'Agreements'
      subtitle: 'Overview of the administrative agreements in HUNT Cloud.'
      href: '/administer-science/agreements/'
      icon: "mdi-handshake"
    - title: 'Services'
      subtitle: 'This page gives you an overview of our cloud services.'
      href: '/administer-science/services/'
      icon: "mdi-cloud"
    - title: 'Prices'
      subtitle: 'This page gives you an introduction to our prices.'
      href: '/administer-science/prices/'
      icon: "mdi-tag"
    - title: 'Price calculator'
      subtitle: 'Calculate your labs cost.'
      href: '/administer-science/prices/calculator/'
      icon: "mdi-calculator"
    - title: 'Data'
      subtitle: 'Page for data administration in HUNT Cloud.'
      href: '/administer-science/data/'
      icon: "mdi-file-document"
    - title: 'FAQ'
      subtitle: 'Frequently asked questions.'
      href: '/administer-science/faq/'
      icon: "mdi-help-circle"
---
<div class="page-container">
  <div class="page-header">
    <h1>Administer science in HUNT Cloud</h1>
    <p class="lead-text">Welcome to our documentation for individuals that administer science in HUNT Cloud.</p>
  </div>

  <div class="page-icon">
      <img src="../images/hunt-cloud_key_250.png" alt="Illustration of decorative hand-made golden key with purple gem stones." />
    </div>

  <div class="page-content">
      <p>This section is aimed at those that administer science in HUNT Cloud. See our <a href="/">main documentation page</a> for other sections.</p>
    </div>

  <div class="page-content">
      <p>See our <a href="/administer-science/scientific-access/">scientific access</a> section for guidance on how new scientific centers and research groups can enable HUNT Cloud resources for their scientists..</p>
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


