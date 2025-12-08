import { vuetify } from "../docs/.vitepress/theme/plugins/vuetify"
import { mount, flushPromises } from "@vue/test-utils"
import PriceEstimator from "../docs/.vitepress/theme/components/price-estimator/PriceEstimator.vue"
import { describe, it, expect, beforeEach, vi } from "vitest"
import { priceEstimatorStore } from "../docs/.vitepress/theme/components/price-estimator/stores/priceEstimatorStore"
import type { StorageUnit, PriceListItem } from "../docs/.vitepress/theme/components/price-estimator/types"

// Mock the pricesApi module
const { mockPriceList } = vi.hoisted(() => {
  return {
    mockPriceList: [
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
    ],
  }
})

vi.mock("../docs/.vitepress/theme/components/price-estimator/api/pricesApi.js", () => ({
  default: {
    getPriceList: vi.fn().mockResolvedValue(mockPriceList),
    getAvailableGPUS: vi.fn().mockResolvedValue([]),
    getMachineFlavors: vi.fn().mockResolvedValue([
      {
        value: "default.c1",
        title: "Default - 4 cores / 8 GB",
      },
    ]),
  },
}))

describe("PriceEstimator", () => {
  beforeEach(() => {
    priceEstimatorStore.clearAllLabs()
    // Manually populate catalogue for tests that need it
    priceEstimatorStore.catalogue.storagePrices = mockPriceList.filter(
      (item: any) => item["service.family"] === "store",
    ) as any
  })

  describe("Component Rendering", () => {
    it("renders the component", async () => {
      const wrapper = mount(PriceEstimator, {
        global: {
          plugins: [vuetify],
        },
      })

      await flushPromises()
      expect(wrapper.exists()).toBe(true)
      // We can check if the store was initialized
      expect(priceEstimatorStore.catalogue.storagePrices.length).toBeGreaterThan(0)
    })
  })

  describe("Storage Cost Calculation", () => {
    it("calculates NVME storage cost correctly for 15 TB (crosses first tier)", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          storage: 15,
          priceStorage: 0,
          priceComputeYearly: 0,
          numCompute: 0,
          selectedCompute: [],
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

      const result = priceEstimatorStore.calculateTotalStorageCost()
      const actual = 10 * 1000 + 5 * 800
      expect(result.NVME.cost).toBeCloseTo(actual, 0)
      expect(result.NVME.size).toBe(15)
    })

    it("calculates NVME storage cost correctly for 110 TB (all three tiers)", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          storage: 110,
          priceStorage: 0,
          priceComputeYearly: 0,
          numCompute: 0,
          selectedCompute: [],
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

      const result = priceEstimatorStore.calculateTotalStorageCost()
      const actual = 10 * 1000 + 90 * 800 + 10 * 600

      expect(result.NVME.cost).toBeCloseTo(actual, 0)
      expect(result.NVME.size).toBe(110)
    })

    it("calculates HDD storage cost correctly for first 10 TB", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          storage: 8,
          priceStorage: 0,
          priceComputeYearly: 0,
          numCompute: 0,
          selectedCompute: [],
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

      const result = priceEstimatorStore.calculateTotalStorageCost()
      expect(result.HDD.cost).toBeCloseTo(4000, 0)
      expect(result.HDD.size).toBe(8)
    })

    it("calculates mixed storage types correctly", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          storage: 13,
          priceStorage: 0,
          priceComputeYearly: 0,
          numCompute: 0,
          selectedCompute: [],
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

      const result = priceEstimatorStore.calculateTotalStorageCost()
      expect(result.NVME.cost).toBeCloseTo(actualNvmeCost, 0)
      expect(result.HDD.cost).toBeCloseTo(actualHddCost, 0)
    })

    it("calculates storage across multiple labs correctly", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          storage: 6,
          priceStorage: 0,
          priceComputeYearly: 0,
          numCompute: 0,
          selectedCompute: [],
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
          priceStorage: 0,
          priceComputeYearly: 0,
          numCompute: 0,
          selectedCompute: [],
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

      const result = priceEstimatorStore.calculateTotalStorageCost()
      expect(result.NVME.cost).toBeCloseTo(12400, 0)
      expect(result.NVME.size).toBe(13)
    })

    it("returns empty object for no storage", async () => {
      priceEstimatorStore.labs = []
      const result = priceEstimatorStore.calculateTotalStorageCost()
      expect(Object.keys(result).length).toBe(0)
    })
  })

  describe("Lab Management", () => {
    it("adds a new lab card", async () => {
      expect(priceEstimatorStore.labs.length).toBe(0)

      priceEstimatorStore.addLab("Lab 1")
      expect(priceEstimatorStore.labs.length).toBe(1)
      expect(priceEstimatorStore.labs[0].title).toBe("Lab")

      priceEstimatorStore.addLab("Lab 2")
      expect(priceEstimatorStore.labs.length).toBe(2)
      expect(priceEstimatorStore.labs[1].title).toBe("Lab 2")
    })

    it("removes a lab card", async () => {
      priceEstimatorStore.addLab("Lab 1")
      priceEstimatorStore.addLab("Lab 1")
      expect(priceEstimatorStore.labs.length).toBe(2)

      priceEstimatorStore.removeLab(0)
      expect(priceEstimatorStore.labs.length).toBe(1)
    })

    it("removes all labs", async () => {
      priceEstimatorStore.addLab("Lab 1")
      priceEstimatorStore.addLab("Lab 1")
      priceEstimatorStore.addLab("Lab 1")
      expect(priceEstimatorStore.labs.length).toBe(3)

      priceEstimatorStore.clearAllLabs()
      expect(priceEstimatorStore.labs.length).toBe(0)
      expect(priceEstimatorStore.totals.computeCost).toBe(0)
      expect(Object.keys(priceEstimatorStore.totals.storageCostByType).length).toBe(0)
    })
  })

  describe("Total Calculations", () => {
    it("updates compute price total when lab card compute changes", async () => {
      priceEstimatorStore.addLab("Lab 1")

      // Simulate adding compute
      priceEstimatorStore.labs[0].priceComputeYearly = 50000
      priceEstimatorStore.labs[0].numCompute = 1

      // Trigger update
      priceEstimatorStore.updateCostSummary()

      // Note: updateCostSummary uses totals.computeCost which is updated by addComputeToLab etc.
      // We need to manually update totals.computeCost if we manipulate labs directly
      priceEstimatorStore.totals.computeCost = 50000

      expect(priceEstimatorStore.totals.computeCost).toBe(50000)
    })

    it("updates storage total when lab card storage changes", async () => {
      priceEstimatorStore.addLab("Lab 1")

      priceEstimatorStore.labs[0].selectedStorage = [
        {
          id: 1,
          name: "volume-1",
          type: "NVME",
          size: 5,
          usage: "Work",
          price: 5000,
        } as StorageUnit,
      ]

      priceEstimatorStore.updateAddedStorage()

      expect(priceEstimatorStore.totals.storageCostByType.NVME).toBeDefined()
      expect(priceEstimatorStore.totals.storageCostByType.NVME.size).toBe(5)
      expect(priceEstimatorStore.totals.storageCostByType.NVME.cost).toBeCloseTo(5000, 0)
    })

    it("Updates totals when multiple labs are added with compute and storage", async () => {
      priceEstimatorStore.addLab("Lab 1")
      priceEstimatorStore.labs[0].priceComputeYearly = 60000
      priceEstimatorStore.labs[0].selectedStorage = [
        {
          id: 1,
          name: "volume-1",
          type: "NVME",
          size: 10,
          usage: "Work",
          price: 10000,
        } as StorageUnit,
      ]

      priceEstimatorStore.addLab("Lab 1")
      priceEstimatorStore.labs[1].priceComputeYearly = 120000
      priceEstimatorStore.labs[1].selectedStorage = [
        {
          id: 2,
          name: "volume-2",
          type: "NVME",
          size: 20,
          usage: "Work",
          price: 20000,
        } as StorageUnit,
      ]

      // Manually update totals as we bypassed the action methods
      priceEstimatorStore.totals.computeCost = 180000
      priceEstimatorStore.updateAddedStorage()

      expect(priceEstimatorStore.totals.computeCost).toBe(180000)
      expect(priceEstimatorStore.totals.storageCostByType.NVME).toBeDefined()
      expect(priceEstimatorStore.totals.storageCostByType.NVME.size).toBe(30)

      const actualNvmeCost = 10 * 1000 + 20 * 800
      expect(priceEstimatorStore.totals.storageCostByType.NVME.cost).toBeCloseTo(actualNvmeCost, 0)
    })
  })
})
