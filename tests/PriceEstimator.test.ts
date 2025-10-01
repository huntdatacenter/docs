import { mount } from "@vue/test-utils"
import PriceEstimator from "../docs/.vitepress/theme/components/price-estimator/PriceEstimator.vue"

import { expect, it } from "vitest"

import { vuetify } from "../docs/.vitepress/theme/plugins/vuetify"

const title = ""

it("renders empty component", () => {
  const wrapper = mount(PriceEstimator, {
    propsData: {
      title: [],
    },
    global: {
      // components: {
      //   PriceEstimator,
      // },
      plugins: [vuetify],
    },
  })

  expect(wrapper.exists()).toBe(true)
})

it("renders the component", () => {
  const wrapper = mount(PriceEstimator, {
    propsData: {
      title: title,
    },
    global: {
      // components: {
      //   PriceEstimator,
      // },
      plugins: [vuetify],
    },
  })
  expect(wrapper.findComponent(PriceEstimator).exists()).toBe(true)
  // const productCards = wrapper.findAll(".group-slider-card")
  // expect(productCards.length).toBe(products.length)
  // const productLinks = wrapper.findAll(".group-slider-card-link")
  // expect(productLinks.length).toBe(products.length)
  // productLinks.forEach((link, index) => {
  //   expect(link.attributes("href")).toBe(products[index].href)
  // })
  // const subTitle = wrapper.find("b")
  // expect(subTitle.text()).toBe(products[0].subtitle)
})
