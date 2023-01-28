---
pageClass: custom-homepage
title: Welcome
category: HUNT Cloud
sidebar: false
next: false
editLink: false
lastUpdated: false
readingTime: null
tagline: null
description: null
footerHtml: false
---

<script setup>

</script>


<div class="hc-container">
  <div class="hc-header">
    <div class="hc-header-img"></div>
  </div>

  <div class="hc-row">
    <div class="hc-column">
      <VuetifyButton id="btn1" class="hc-btn" color="primary" label="Do science" href="/do-science/" block />
    </div>
    <div class="hc-column">
      <VuetifyButton id="btn2" class="hc-btn" color="primary" label="Administer science" href="/coordination/" block />
    </div>
    <div class="hc-column">
      <VuetifyButton id="btn3" class="hc-btn" color="primary" label="Govern science" href="/governance/" block />
    </div>
  </div>

</div>


<style scoped>

.theme-default-content {
  max-width: none !important;
  padding: 0 !important;
}

.hc-header {
  width: 100vw;
  max-width: 100%;
  margin-bottom: 64px;
}

.hc-header-img {
  background-image: url("https://assets.hdc.ntnu.no/assets/artworks/hunt-cloud_explore_medium.jpg");
  background-position: 50% 72%;
  //background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #004c7b;
  width: 100vw;
  max-width: 100%;
  height: 350px;
  object-fit: fill;
  margin: 0 auto !important;
}

.hc-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}

.hc-row {
  max-width: 960px;
  margin: 0 auto !important;
}

.hc-column {
  float: left;
  width: 70%;
  min-height: 50px;
  padding-bottom: 32px;
  margin-left: 10px;
  margin-right: 10px;
}

@media (min-width: 720px) {

  .hc-column {
    width: 33%;
    margin-left: 0;
    margin-right: 0;
  }

}

</style>

<center>
<h1>Welcome to the HUNT Cloud documentation</h1>
</center>

<center>
<b>
These pages contains official user documentation for HUNT Cloud. <br>See <a href="https://www.ntnu.edu/mh/huntcloud">About HUNT Cloud</a> for introductory information on our scientific services.
</b>
</center>


**HUNT Cloud is a scientific computing environment located at [NTNU](https://www.ntnu.edu/) in Norway.**



## [Do science](/do-science)

Practical matters such as how to get started, how to use the HUNT Workbench and similar.

![Knowledge](./images/hunt-cloud_bottle-of-knowledge_200px.png)

## [Administer science](/administer-science)

How to oranize your scientific group in HUNT Cloud, including compliance, training, data handling, financal aspects and similar.

![Custom keys](./images/hunt-cloud_the-keymakers_200px.jpg)


## [Govern science](/govern-science)

The content focuses on scientific and trust governance in HUNT Cloud, including privacy and security.

![Strategic compass](./images/hunt-cloud_strategic-compass_200px.png)

## [About HUNT Cloud](/about)

Read about the team, the technologies and the thinking behind HUNT Cloud.

![Mascot](./images/hunt-cloud_mascot_test1_200px.png)


