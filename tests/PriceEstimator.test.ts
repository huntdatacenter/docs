import { vuetify } from "../docs/.vitepress/theme/plugins/vuetify"
import { mount, flushPromises } from "@vue/test-utils"
import PriceEstimator from "../docs/.vitepress/theme/components/price-estimator/PriceEstimator.vue"
import { describe, it, expect, beforeEach, vi } from "vitest"

const title = ""
import type { StorageUnit, PriceListItem } from "../docs/.vitepress/theme/components/price-estimator/types"


describe("PriceEstimator", () => {
  let mockPricesApi: any

  beforeEach(() => {
    mockPricesApi = {
      getPriceList: vi.fn().mockResolvedValue([
        {
          "service.group": "block.nvme.rep",
          "service.family": "store",
          "service.unit": "First 10 TB",
          "service.level": "COMMITMENT",
          "service.commitment": "1Y",
          "price.nok.ex.vat": 1000,
        },
        {
          "service.group": "block.nvme.rep",
          "service.family": "store",
          "service.unit": "Next 90 TB",
          "service.level": "COMMITMENT",
          "service.commitment": "1Y",
          "price.nok.ex.vat": 800,
        },
        {
          "service.group": "block.nvme.rep",
          "service.family": "store",
          "service.unit": "Above 100 TB",
          "service.level": "COMMITMENT",
          "service.commitment": "1Y",
          "price.nok.ex.vat": 600,
        },
        {
          "service.group": "block.hdd.rep",
          "service.family": "store",
          "service.unit": "First 10 TB",
          "service.level": "COMMITMENT",
          "service.commitment": "1Y",
          "price.nok.ex.vat": 500,
        },
        {
          "service.group": "block.hdd.rep",
          "service.family": "store",
          "service.unit": "Next 90 TB",
          "service.level": "COMMITMENT",
          "service.commitment": "1Y",
          "price.nok.ex.vat": 400,
        },
        {
          "service.group": "block.hdd.rep",
          "service.family": "store",
          "service.unit": "Above 100 TB",
          "service.level": "COMMITMENT",
          "service.commitment": "1Y",
          "price.nok.ex.vat": 300,
        },
        {
          "service.group": "cpu",
          "service.unit": "default.c1",
          "service.level": "COMMITMENT",
          "service.commitment": "1Y",
          "price.nok.ex.vat": 50000,
        },
      ]),
      getAvailableGPUS: vi.fn().mockResolvedValue([]),
      getMachineFlavors: vi.fn().mockResolvedValue([
        {
          value: "default.c1",
          title: "Default - 4 cores / 8 GB",
        },
      ]),
    }
  })

  describe("Component Rendering", () => {
    it("renders the component", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test Price Estimator",
        },
        global: {
          plugins: [vuetify],
          mocks: {
            pricesApi: mockPricesApi,
          },
        },
      })

      await flushPromises()
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.findComponent(PriceEstimator).exists()).toBe(true)
    })
  })

  describe("Storage Cost Calculation", () => {
    it("calculates NVME storage cost correctly for 15 TB (crosses first tier)", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      const storagePrices = await mockPricesApi.getPriceList()
      vm.catalogue.storagePrices = storagePrices.filter((item: PriceListItem) => item["service.family"] === "store")


      vm.labCards = [
        {
          id: 1,
          title: "Lab 1",
          storage: 15,
          selectedStorage: [
            {
              id: 1,
              name: "volume-1",
              type: "NVME",
              size: 15,
              usage: "Work",
              price: 0,
            } as StorageUnit,
          ],
        },
      ]

      const result = vm.calculateStorageCost()
      const actual = 10 * 1000 + 5 * 800
      expect(result.NVME.cost).toBeCloseTo(actual, 0)
      expect(result.NVME.size).toBe(15)
    })

    it("calculates NVME storage cost correctly for 110 TB (all three tiers)", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      const storagePrices = await mockPricesApi.getPriceList()
      vm.catalogue.storagePrices = storagePrices.filter((item: PriceListItem) => item["service.family"] === "store")

      vm.labCards = [
        {
          id: 1,
          title: "Lab 1",
          storage: 110,
          selectedStorage: [
            {
              id: 1,
              name: "volume-1",
              type: "NVME",
              size: 110,
              usage: "Work",
              price: 0,
            } as StorageUnit,
          ],
        },
      ]

      const result = vm.calculateStorageCost()
      const actual = 10 * 1000 + 90 * 800 + 10 * 600

      expect(result.NVME.cost).toBeCloseTo(actual, 0)
      expect(result.NVME.size).toBe(110)
    })

    it("calculates HDD storage cost correctly for first 10 TB", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      const storagePrices = await mockPricesApi.getPriceList()
      vm.catalogue.storagePrices = storagePrices.filter((item: PriceListItem) => item["service.family"] === "store")

      vm.labCards = [
        {
          id: 1,
          title: "Lab 1",
          storage: 8,
          selectedStorage: [
            {
              id: 1,
              name: "volume-1",
              type: "HDD",
              size: 8,
              usage: "Archive",
              price: 0,
            } as StorageUnit,
          ],
        },
      ]

      const result = vm.calculateStorageCost()
      expect(result.HDD.cost).toBeCloseTo(4000, 0)
      expect(result.HDD.size).toBe(8)
    })

    it("calculates mixed storage types correctly", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      const storagePrices = await mockPricesApi.getPriceList()
      vm.catalogue.storagePrices = storagePrices.filter((item: PriceListItem) => item["service.family"] === "store")
      vm.labCards = [
        {
          id: 1,
          title: "Lab 1",
          storage: 13,
          selectedStorage: [
            {
              id: 1,
              name: "volume-nvme",
              type: "NVME",
              size: 5,
              usage: "Work",
              price: 0,
            } as StorageUnit,
            {
              id: 2,
              name: "volume-hdd",
              type: "HDD",
              size: 8,
              usage: "Archive",
              price: 0,
            } as StorageUnit,
          ],
        },
      ]
      const actualNvmeCost = 5 * 1000
      const actualHddCost = 8 * 500

      const result = vm.calculateStorageCost()
      expect(result.NVME.cost).toBeCloseTo(actualNvmeCost, 0)
      expect(result.HDD.cost).toBeCloseTo(actualHddCost, 0)
      
    })

    it("calculates storage across multiple labs correctly", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      const storagePrices = await mockPricesApi.getPriceList()
      vm.catalogue.storagePrices = storagePrices.filter((item: PriceListItem) => item["service.family"] === "store")

      vm.labCards = [
        {
          id: 1,
          title: "Lab 1",
          storage: 6,
          selectedStorage: [
            {
              id: 1,
              name: "volume-1",
              type: "NVME",
              size: 6,
              usage: "Work",
              price: 0,
            } as StorageUnit,
          ],
        },
        {
          id: 2,
          title: "Lab 2",
          storage: 7,
          selectedStorage: [
            {
              id: 1,
              name: "volume-2",
              type: "NVME",
              size: 7,
              usage: "Work",
              price: 0,
            } as StorageUnit,
          ],
        },
      ]

      const result = vm.calculateStorageCost()
      expect(result.NVME.cost).toBeCloseTo(12400, 0)
      expect(result.NVME.size).toBe(13)
    })

    it("returns empty object for no storage", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      vm.labCards = []

      const result = vm.calculateStorageCost()
      expect(Object.keys(result).length).toBe(0)
    })
  })

  describe("Lab Management", () => {
    it("adds a new lab card", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      expect(vm.labCards.length).toBe(0)

      vm.addLabCard()
      expect(vm.labCards.length).toBe(1)
      expect(vm.labCards[0].title).toBe("Lab 1")
      expect(vm.nextLabId).toBe(2)

      vm.addLabCard()
      expect(vm.labCards.length).toBe(2)
      expect(vm.labCards[1].title).toBe("Lab 2")
      expect(vm.nextLabId).toBe(3)
    })

    it("removes a lab card", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      vm.addLabCard()
      vm.addLabCard()
      expect(vm.labCards.length).toBe(2)

      vm.removeLabCard(1)
      expect(vm.labCards.length).toBe(1)
      expect(vm.labCards[0].id).toBe(2)
    })

    it("removes all labs", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      vm.addLabCard()
      vm.addLabCard()
      vm.addLabCard()
      expect(vm.labCards.length).toBe(3)

      vm.removeAllLabs()
      expect(vm.labCards.length).toBe(0)
      expect(vm.nextLabId).toBe(1)
      expect(vm.totals.computePrice).toBe(0)
      expect(Object.keys(vm.totals.storageCost).length).toBe(0)
    })
  })

  describe("Total Calculations", () => {
    it("updates compute price total when lab card compute changes", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      vm.addLabCard()

      vm.updateLabCardCompute(1, {
        yearlyPrice: 50000,
        monthlyPrice: 4166.67,
        numCompute: 1,
        selectedCompute: [],
      })

      expect(vm.totals.computePrice).toBe(50000)
    })

    it("updates storage total when lab card storage changes", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      const storagePrices = await mockPricesApi.getPriceList()
      vm.catalogue.storagePrices = storagePrices.filter((item: PriceListItem) => item["service.family"] === "store")

      vm.addLabCard()

      vm.updateLabCardStorage(1, {
        size: 5,
        price: 5000,
        selectedStorage: [
          {
            id: 1,
            name: "volume-1",
            type: "NVME",
            size: 5,
            usage: "Work",
            price: 5000,
          },
        ],
      })

      await flushPromises()

      expect(vm.totals.storageCost.NVME).toBeDefined()
      expect(vm.totals.storageCost.NVME.size).toBe(5)
      expect(vm.totals.storageCost.NVME.cost).toBeCloseTo(5000, 0)
    })
    it("Updates totals when multiple labs are added with compute and storage", async () => {
      const wrapper = mount(PriceEstimator, {
        props: {
          title: "Test",
        },
        global: {
          plugins: [vuetify],
        },
      })

      const vm = wrapper.vm as any
      const storagePrices = await mockPricesApi.getPriceList()
      vm.catalogue.storagePrices = storagePrices.filter((item: PriceListItem) => item["service.family"] === "store")
      
      vm.addLabCard()
      vm.updateLabCardCompute(1, {
        yearlyPrice: 60000,
        monthlyPrice: 5000,
        numCompute: 1,
        selectedCompute: [],
      })
      vm.updateLabCardStorage(1, {
        size: 10,
        price: 10000,
        selectedStorage: [
          {
            id: 1,
            name: "volume-1",
            type: "NVME",
            size: 10,
            usage: "Work",
            price: 10000,
          },
        ],
      })

      await flushPromises()

      vm.addLabCard()
      vm.updateLabCardCompute(2, {
        yearlyPrice: 120000,
        monthlyPrice: 10000,
        numCompute: 2,
        selectedCompute: [],
      })
      vm.updateLabCardStorage(2, {
        size: 20,
        price: 20000,
        selectedStorage: [
          {
            id: 2,
            name: "volume-2",
            type: "NVME",
            size: 20,
            usage: "Work",
            price: 20000,
          },
        ],
      })
      
      await flushPromises()
      expect(vm.totals.computePrice).toBe(180000)
      expect(vm.totals.storageCost.NVME).toBeDefined()
      expect(vm.totals.storageCost.NVME.size).toBe(30)
      const actualNvmeCost = 10 * 1000 + 20 * 800
      expect(vm.totals.storageCost.NVME.cost).toBeCloseTo(actualNvmeCost, 0)

    })
  })
})
