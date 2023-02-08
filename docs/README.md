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
        <a href="/do-science/"><img alt="Bottle of knowledge" height="150" src="/img/hunt-cloud_bottle_250.png" /></a>
        <VuetifyButton id="btn1" class="hc-btn" color="black--text" label="Do science" href="/do-science/" block />
        <p>
          Scientists are explorers. This section is aimed at explorers that use data to discover knowledge for a better world in HUNT Cloud.
        </p>
      </div>
      <div class="hc-column-4">
        <a href="/administer-science/"><img alt="Custom keys" height="150" src="/img/hunt-cloud_key_250.png" /></a>
        <VuetifyButton id="btn2" class="hc-btn" color="black--text" label="Administer science" href="/administer-science/" block />
        <p>
          Scientific administrators are keymakers. This section is aimed at administrators that enables scientific explorations.
        </p>
      </div>
      <div class="hc-column-4">
        <a href="/govern-science/"><img alt="Strategic compass" height="150" src="/img/hunt-cloud_compass_250.png" /></a>
        <VuetifyButton id="btn3" class="hc-btn" color="black--text" label="Govern science" href="/govern-science/" block />
        <p>
          Trust enables science. This section is aimed at data controllers and scientific centers that guides the development of HUNT Cloud.
        </p>
      </div>
    </div>
    <div class="hc-row">
      <div class="hc-column-4">
         <VuetifyButton id="btn3" class="hc-btn" color="black--text" label="About HUNT Cloud" href="/about/" block />
        <p>
          HUNT Cloud is shaped by a small team of scientific instrument makers. Read more about the thinking and team behind HUNT Cloud.
        </p>
      </div>
      <div class="hc-column-4">
         <a href="/about/"><img alt="Transparent" height="200" src="/img/hunt-cloud_bot_250_2.png" /></a>
      </div>
      <div class="hc-column-4">
        <VuetifyButton id="btn3" class="hc-btn" color="black--text" label="Scientific products" href="https://www.ntnu.edu/mh/huntcloud" block />
        <p>
          Explore and evolve. See the main HUNT Cloud page for information on HUNT Cloud's scientific products and services.
        </p>
      </div>
    </div>
    <div class="hc-row">
        <center>
            <i>These pages contain the official user documentation for HUNT Cloud. <br>HUNT Cloud is a scientific infrastructure for data explorations at <a href="https://www.ntnu.edu/">NTNU</a> in Norway.</i>
        </center>
    </div>
  </div>
</div>
<!-- DO NOT PLACE CONTENT outside hc-content -->

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
  background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_640.jpg");
  background-position: 50% 50%;
  //background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #004c7b;
  width: 100vw;
  max-width: 100%;
  height: 200px;
  object-fit: fill;
  margin: 0 auto !important;
  box-shadow: inset 0px -3px 5px rgba(0, 0, 0, 0.1);
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
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 12px;
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
  text-align: left; /* left or justify */
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
  text-align: left; /* left or justify */
}

.hc-column-8 p {
  justify-self: center;
  padding-left: 32px;
  padding-right: 32px;
}

.hc-column-8:has(p) {
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 720px) {
  .hc-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_960.jpg");
    height: 300px;
  }

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

@media (min-width: 960px) {
  .hc-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1280.jpg");
    height: 350px;
  }
}

@media (min-width: 1280px) {
  .hc-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1920.jpg");
    height: 450px;
  }
}

@media (min-width: 1920px) {
  .hc-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1920.jpg");
    height: 700px;
  }
}


</style>
