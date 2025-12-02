---
layout: page
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

import { ref } from 'vue';

const cards = [
  {
    id: 'btn1',
    title: 'do science',
    href: '/do-science/',
    image: '/img/hunt-cloud_bottle_250.png',
    imageAlt: 'Illustration of laboratory glass bottle with yellow shimmery substance.',
    description: 'Scientists are explorers. This section is aimed at those who use data to discover knowledge for a better world in HUNT Cloud.'
  },
  {
    id: 'btn2',
    title: 'Administer science',
    href: '/administer-science/',
    image: '/img/hunt-cloud_key_250.png',
    imageAlt: 'Illustration of decorative hand-made golden key with purple gem stones.',
    description: 'Scientific administrators are keymakers. This section is aimed at administrators that enables scientific explorations.'
  },
  {
    id: 'btn3',
    title: 'Govern science',
    href: '/govern-science/',
    image: '/img/hunt-cloud_compass_250.png',
    imageAlt: 'Illustration of sundial compass in brass.',
    description: 'Trust enables science. This section is aimed at data controllers and scientific centers that guides the development of HUNT Cloud.'
  }
];

const bottomCards = ref([
  {
    id: 'btn4',
    title: 'About HUNT Cloud',
    href: '/about/',
    description: 'HUNT Cloud is shaped by a small team of scientific instrument makers. Read more about the thinking and team behind HUNT Cloud.',
    buttonColor: 'black--text'
  },
  {
    id: 'mascot',
    image: '/img/hunt-cloud_bot_250_2.png',
    imageAlt: 'Illustration of small centien robot made of metal with shiny lightbulb on top of its head.',
    href: '/about/',
    isMascot: true
  },
  {
    id: 'btn5',
    title: 'Scientific products',
    href: 'https://www.ntnu.edu/mh/huntcloud',
    description: 'Explore and evolve. See the main HUNT Cloud page for information on HUNT Cloud\'s scientific products and services.',
    buttonColor: 'black--text'
  }
]);

const cardStyle = {
  padding: '25px',
  background: '#f5f5f5',
  borderRadius: '20px',
};

const imageHeight = '120px';

</script>

<div class="hc-container mb-8">
  <div class="hc-header">
    <div class="hc-header-img"></div>
  </div>
  <div class="hc-content">
    <div class="hc-title">
      <h1>Welcome to the HUNT Cloud documentation</h1>
    </div>
    <div class="hc-row">
  <div
    v-for="card in cards"
    :key="card.id"
    class="hc-column-4"
    :style="cardStyle"
  >
    <a :href="card.href">
      <img
        :alt="card.imageAlt"
        :style="{ height: imageHeight, width: 'auto' }"
        :src="card.image"
      />
    </a>
    <VuetifyButton
      :id="card.id"
      class="hc-btn"
      color="primary"
      :label="card.title"
      :href="card.href"
      block
    />
    <p>{{ card.description }}</p>
  </div>
</div>
    <div class="hc-row">
      <div
        v-for="card in bottomCards"
        :key="card.id"
        class="hc-column-4"
        :class="{ 'mascot-container': card.isMascot }"
      >
      <template v-if="card.isMascot">
          <a :href="card.href">
            <img
              :alt="card.imageAlt"
              height="200"
              :src="card.image"
            />
          </a>
        </template>
        <template v-else>
          <VuetifyButton
            :id="card.id"
            class="hc-btn"
            :color="card.buttonColor"
            :label="card.title"
            :href="card.href"
            block
          />
          <p>{{ card.description }}</p>
        </template>
        </div>
    </div>
    <div class="hc-row">
      <center>
        <i>These pages contain the official user documentation for HUNT Cloud. <br>HUNT Cloud is a scientific infrastructure for data explorations at <a href="https://www.ntnu.edu/">NTNU</a>, Norway.<br><a href="/govern-science/privacy-statement">Privacy statement</a>.</i><br>
      </center>
    </div>
  </div>
</div>
<!-- DO NOT PLACE CONTENT outside hc-content -->

<style scoped>

h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.25;
}

h1 {
  font-size: 2.2rem;
}


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
  /* margin-left: 20px;
  margin-right: 20px;
  margin-top: 16px;
  width: 90%; */
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
  display: flex;
  gap: 15px;

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

.mascot-container {
  display: flex;
  margin-left: 0;
  margin-right: 0;
  min-height: 100px;
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
