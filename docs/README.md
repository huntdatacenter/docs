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
# description: HUNT Cloud is a scientific computing service located at NTNU in Norway. These pages contains official user documentation on our cloud services. Their content is aimed at lab users.
---

<script setup>

</script>

<div class="hc-container">
  <div class="hc-header">
    <div class="hc-header-img"></div>
  </div>

  <div class="hc-row">
    <div class="hc-column">
      <VuetifyButton id="btn1" class="hc-btn" color="success" label="Do science" href="/getting-started/" block />
    </div>
    <div class="hc-column">
      <VuetifyButton id="btn2" class="hc-btn" color="primary" label="Administer science" href="/coordination/" block />
    </div>
    <div class="hc-column">
      <VuetifyButton id="btn3" class="hc-btn" color="blue-grey" label="Scientific suite" href="/governance/" block />
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



