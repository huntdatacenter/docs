---
title: Service desk
category: Service desk
permalink: /servicedesk/
description: Predefined HUNT Cloud service desk orders for scientists and science administrators.
outline: false
buttons:
  - title: 'I am a Scientist'
    subtitle: 'Active lab user: access, VPN, workbench and resets.'
    href: '/servicedesk/scientist'
    icon: "mdi-flask"
  - title: 'I am a Science Administrator'
    subtitle: 'Lab leader, coordinator or administrator: labs, users, compute, storage, data spaces and organizations.'
    href: '/servicedesk/administrator'
    icon: "mdi-key"
---

# Service desk

**Place predefined service orders for HUNT Cloud. Start by telling us who you are, and the available orders will show in the menu on the left.**

<NavigationCards :buttons="$frontmatter.buttons" />
