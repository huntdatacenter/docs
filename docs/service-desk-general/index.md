---
layout: page
title: Service Desk
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

const sections = [
  {
    id: 'do-science',
    title: 'Do Science',
    description: 'For lab users — access, tools, and community.',
    cards: [
      {
        title: 'Lab access',
        description: 'Request access to a lab in HUNT Cloud.',
        href: 'https://docs.hdc.ntnu.no/do-science/service-desk/#lab-access',
      },
      {
        title: 'Community access',
        description: 'Request access to the HUNT Cloud community resources.',
        href: 'https://docs.hdc.ntnu.no/do-science/service-desk/#community-access',
      },
      {
        title: 'HUNT Workbench',
        description: 'See the full list of service orders available for lab users.',
        href: 'http://docs.hdc.ntnu.no/do-science/service-desk/#hunt-workbench',
      },
      {
        title: 'All Do Science orders',
        description: 'See the full list of service orders available for lab users.',
        href: '/do-science/service-desk/',
      }
    ]
  },
  {
    id: 'administer-science',
    title: 'Administer Science',
    description: 'For data space and lab leaders — manage labs, users, and roles.',
    cards: [
      {
        title: 'New lab',
        description: 'Order a new lab within your data space.',
        href: 'https://docs.hdc.ntnu.no/administer-science/service-desk/data-space-orders#new-lab',
      },
      {
        title: 'Delete lab',
        description: 'Request deletion of an existing lab.',
        href: 'https://docs.hdc.ntnu.no/administer-science/service-desk/data-space-orders#delete-lab',
      },
      {
        title: 'Roles',
        description: 'Manage roles and responsibilities within your data space.',
        href: 'https://docs.hdc.ntnu.no/administer-science/service-desk/data-space-orders#roles',
      },
    ]
  },
  {
    id: 'govern-science',
    title: 'Govern Science',
    description: 'For data controllers and service centers — agreements, data spaces, and governance.',
    cards: [
      {
        title: 'Organizational Access',
        description: 'Service orders that data controllers and service centers can order in HUNT Cloud.',
        href: 'https://docs.hdc.ntnu.no/govern-science/service-desk/',
      },
    ]
  }
];

</script>

<div class="sd-container">
  <div class="sd-content">
    <div class="sd-title">
      <h1>Service Desk</h1>
      <p class="sd-subtitle">Your central hub for the most common requests in HUNT Cloud. Click a card to place your order or get support.</p>
    </div>
    <div
      v-for="section in sections"
      :key="section.id"
      class="sd-section"
    >
      <div class="sd-section-header">
        <span class="sd-section-icon">{{ section.icon }}</span>
        <div>
          <h2>{{ section.title }}</h2>
          <p class="sd-section-desc">{{ section.description }}</p>
        </div>
      </div>
      <div class="sd-grid">
        <div
          v-for="card in section.cards"
          :key="card.title"
          class="sd-card"
        >
          <a :href="card.href" class="sd-card-link">
            <span class="sd-card-icon">{{ card.icon }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="sd-footer">
      <center>
        <i>These pages contain the official user documentation for HUNT Cloud.<br>
        HUNT Cloud is a scientific infrastructure for data explorations at <a href="https://www.ntnu.edu/">NTNU</a>, Norway.<br>
        <a href="/govern-science/privacy-statement">Privacy statement</a>.</i>
      </center>
    </div>
  </div>
</div>

<style scoped>

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.25;
}

h1 {
  font-size: 2.2rem;
  margin-block-start: 0.67em;
  margin-block-end: 0.2em;
}

h2 {
  font-size: 1.5rem;
  margin: 0 0 4px 0;
  color: #004c7b;
}

h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 8px 0 6px 0;
  color: #000;
}

.theme-default-content {
  max-width: none !important;
  padding: 0 !important;
}

.sd-header {
  width: 100vw;
  max-width: 100%;
  margin-bottom: 12px;
}

.sd-content {
  max-width: 960px;
  margin: 0 auto !important;
  padding: 0 16px;
}

.sd-title {
  text-align: center;
  margin-bottom: 40px;
}

.sd-subtitle {
  color: #555;git stash 
  font-size: 1.1rem;
  margin-top: 4px;
}

/* Section */
.sd-section {
  margin-bottom: 80px;
}

.sd-section-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0dce4;
}

.sd-section-icon {
  font-size: 2rem;
  line-height: 1;
  margin-top: 4px;
}

.sd-section-desc {
  color: #555;
  margin: 0;
  font-size: 0.95rem;
}

/* Card grid */
.sd-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.sd-card {
  background: #f1eef0ff;
  border-radius: 16px;
  padding: 20px 24px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.sd-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
}

.sd-card-link {
  color: inherit;
  display: block;
  text-decoration: none;
}

.sd-card-icon {
  font-size: 1.6rem;
}

.sd-card p {
  color: #444;
  font-size: 0.92rem;
  margin: 0;
}

/* Footer */
.sd-footer {
  margin-top: 40px;
  color: #555;
  font-size: 0.9rem;
}

/* Responsive */
@media (min-width: 600px) {
  .sd-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 720px) {
  .sd-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_960.jpg");
    height: 300px;
  }

  .sd-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 960px) {
  .sd-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1280.jpg");
    height: 350px;
  }
}

@media (min-width: 1280px) {
  .sd-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1920.jpg");
    height: 450px;
  }
}

@media (min-width: 1920px) {
  .sd-header-img {
    background-image: url("https://assets.hdc.ntnu.no/assets/static/banner_1920.jpg");
    height: 700px;
  }
}

</style>
