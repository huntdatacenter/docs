import { mount } from "@vue/test-utils"
import ProductSlider from "../pages/.vitepress/components/ProductSlider.vue"

import { expect, it } from "vitest"

import { vuetify } from "../pages/.vitepress/plugins/vuetify"

const products = [
  {
    title: "Product 1",
    text: "Describe product 1",
    subtitle: "Subtitle 1",
    img: "./product1.png",
    href: "#product1",
  },
  {
    title: "Product 2",
    text: "Describe product 2",
    subtitle: "Subtitle 2",
    img: "./product2.png",
    href: "#product2",
  },
  {
    title: "Product 3",
    text: "Describe product 3",
    subtitle: "Subtitle 3",
    img: "./product3.png",
    href: "#product3",
  },
]

it("renders empty component", () => {
  const wrapper = mount(ProductSlider, {
    propsData: {
      products: [],
    },
    global: {
      // components: {
      //   ProductSlider,
      // },
      plugins: [vuetify],
    },
  })

  expect(wrapper.exists()).toBe(true)
})

it("renders the component with 3 products and clickable links", () => {
  const wrapper = mount(ProductSlider, {
    propsData: {
      products: products,
    },
    global: {
      // components: {
      //   ProductSlider,
      // },
      plugins: [vuetify],
    },
  })
  expect(wrapper.findComponent(ProductSlider).exists()).toBe(true)
  const productCards = wrapper.findAll(".group-slider-card")
  expect(productCards.length).toBe(products.length)
  const productLinks = wrapper.findAll(".group-slider-card-link")
  expect(productLinks.length).toBe(products.length)
  productLinks.forEach((link, index) => {
    expect(link.attributes("href")).toBe(products[index].href)
  })
  const subTitle = wrapper.find("b")
  expect(subTitle.text()).toBe(products[0].subtitle)
})
