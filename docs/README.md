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
  <div class="hc-content">
    <div class="hc-title">
      <h1>Welcome to the HUNT Cloud documentation</h1>
    </div>
    <div class="hc-row">
      <div class="hc-column-4">
        <a href="/do-science/"><img alt="knowledge" height="150" src="/img/hunt-cloud_bottle-of-knowledge_200px.png" /></a>
        <VuetifyButton id="btn1" class="hc-btn" color="primary" label="Do science" href="/do-science/" block />
        <p>
          Practical matters such as how to get started, how to use the HUNT Workbench and similar.
        </p>
      </div>
      <div class="hc-column-4">
        <a href="/coordination/"><img alt="custom keys" height="150" src="/img/hunt-cloud_the-keymakers_200px.jpg" /></a>
        <VuetifyButton id="btn2" class="hc-btn" color="primary" label="Administer science" href="/coordination/" block />
        <p>
          How to oranize your scientific group in HUNT Cloud, including compliance, training, data handling, financal aspects and similar.
        </p>
      </div>
      <div class="hc-column-4">
        <a href="/governance/"><img alt="strategic compass" height="150" src="/img/hunt-cloud_strategic-compass_200px.png" /></a>
        <VuetifyButton id="btn3" class="hc-btn" color="primary" label="Govern science" href="/governance/" block />
        <p>
          The content focuses on scientific and trust governance in HUNT Cloud, including privacy and security.
        </p>
      </div>
    </div>
    <div class="hc-row">
      <div class="hc-column-8">
        <h2>About HUNT Cloud</h2>
        <p>
          HUNT Cloud is a scientific computing environment located at <a href="https://www.ntnu.edu/">NTNU</a> in Norway.
        </p>
        <p>
          These pages contains official user documentation for HUNT Cloud.
        </p>
        <p>
          See <a href="https://www.ntnu.edu/mh/huntcloud">About HUNT Cloud</a> for introductory information on our scientific services.
        </p>
        <p>Read <a href="/about">about the team</a>, the technologies and the thinking behind HUNT Cloud.</p>
      </div>
      <div class="hc-column-4">
        <div class="mascot"></div>
      </div>
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
  margin-bottom: 12px;
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
  margin-top: 16px;
  /* width: 90%; */
}

.hc-title {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  max-width: 960px;
  margin: 0 auto !important;
  padding-left: 12px;
  padding-right: 12px;
}

.hc-content {
  display: grid;
  max-width: 960px;
  margin: 0 auto !important;
}

.hc-row {
  justify-content: center;
  align-items: start;
  vertical-align: top;
}

.hc-column-4 {
  justify-self: start;
  display: grid;
  float: left;
  width: 100%;
  min-height: 12px;
  padding-bottom: 12px;
  margin-left: 0px;
  margin-right: 0px;
  text-align: justify;
  justify-content: center;
  align-items: center;
}

.hc-column-4 a {
  justify-self: center;
  padding-bottom: 24px;
}

.hc-column-4 p {
  justify-self: center;
  padding-left: 32px;
  padding-right: 32px;
}

.hc-column-4:has(div.mascot) {
  display: flex;
  margin-left: 0;
  margin-right: 0;
  min-height: 100px;
}

div .mascot {
  flex: 100%;
  min-height: 250px;
}

.hc-column-8 {
  justify-self: start;
  display: grid;
  float: left;
  /* width: 100%; */
  min-height: 12px;
  padding-bottom: 12px;
  margin-left: 0px;
  margin-right: 0px;
  text-align: justify;
}

.hc-column-8:has(p) {
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 720px) {

  .hc-column-8 {
    width: 60%;
    margin-left: 0;
    margin-right: 0;
  }

  .hc-column-4 {
    width: 33%;
    margin-left: 0;
    margin-right: 0;
  }

}

</style>
