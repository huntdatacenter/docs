import { vuetify } from "../docs/.vitepress/theme/plugins/vuetify"
import { mount, flushPromises } from "@vue/test-utils"
import PriceEstimator from "../docs/.vitepress/theme/components/price-estimator/PriceEstimator.vue"
import { describe, it, expect, beforeEach, vi } from "vitest"
import { priceEstimatorStore } from "../docs/.vitepress/theme/components/price-estimator/stores/priceEstimatorStore"
import type { StorageUnit } from "../docs/.vitepress/theme/components/price-estimator/types"

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
      {
        "service.group": "lab",
        "service.unit": "lab",
        "service.level": "COMMITMENT",
        "service.commitment": "1Y",
        "price.nok.ex.vat": 20000,
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
    priceEstimatorStore.catalogue.computePrices = mockPriceList.filter(
      (item: any) => item["service.group"] === "cpu",
    ) as any
    priceEstimatorStore.catalogue.labPrices = mockPriceList.filter(
      (item: any) => item["service.group"] === "lab",
    ) as any
    priceEstimatorStore.catalogue.machinePrices = [
      {
        value: "default.c1",
        title: "Default - 4 cores / 8 GB",
      },
    ] as any
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
          selectedCompute: [],
          selectedStorage: [
            {
              id: 1,
              name: "volume-1",
              type: "NVME",
              size: 15,
              usage: "Work",
              monthlyPrice: 0,
              yearlyPrice: 0,
            } as StorageUnit,
          ],
        },
      ]

      const result = priceEstimatorStore.calculateTotalStorageCost()
      const expectedTiered = 10 * 1000 + 5 * 800
      const expectedFlat = 15 * 1000

      expect(result.NVME.costTiered).toBeCloseTo(expectedTiered, 0)
      expect(result.NVME.costFlat).toBeCloseTo(expectedFlat, 0)
      expect(result.NVME.size).toBe(15)
    })

    it("calculates NVME storage cost correctly for 110 TB (all three tiers)", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          selectedCompute: [],
          selectedStorage: [
            {
              id: 1,
              name: "volume-1",
              type: "NVME",
              size: 110,
              usage: "Work",
              monthlyPrice: 0,
              yearlyPrice: 0,
            } as StorageUnit,
          ],
        },
      ]

      const result = priceEstimatorStore.calculateTotalStorageCost()
      const expectedTiered = 10 * 1000 + 90 * 800 + 10 * 600
      const expectedFlat = 110 * 1000

      expect(result.NVME.costTiered).toBeCloseTo(expectedTiered, 0)
      expect(result.NVME.costFlat).toBeCloseTo(expectedFlat, 0)
      expect(result.NVME.size).toBe(110)
    })

    it("calculates HDD storage cost correctly for first 10 TB", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          selectedCompute: [],
          selectedStorage: [
            {
              id: 1,
              name: "volume-1",
              type: "HDD",
              size: 8,
              usage: "Archive",
              monthlyPrice: 0,
              yearlyPrice: 0,
            } as StorageUnit,
          ],
        },
      ]

      const result = priceEstimatorStore.calculateTotalStorageCost()
      const expectedTiered = 8 * 500
      const expectedFlat = 8 * 500

      expect(result.HDD.costTiered).toBeCloseTo(expectedTiered, 0)
      expect(result.HDD.costFlat).toBeCloseTo(expectedFlat, 0)
      expect(result.HDD.size).toBe(8)
    })

    it("calculates mixed storage types correctly", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          selectedCompute: [],
          selectedStorage: [
            {
              id: 1,
              name: "volume-nvme",
              type: "NVME",
              size: 5,
              usage: "Work",
              monthlyPrice: 0,
              yearlyPrice: 0,
            } as StorageUnit,
            {
              id: 2,
              name: "volume-hdd",
              type: "HDD",
              size: 8,
              usage: "Archive",
              monthlyPrice: 0,
              yearlyPrice: 0,
            } as StorageUnit,
          ],
        },
      ]
      const expectedNvmeTiered = 5 * 1000
      const expectedHddTiered = 8 * 500

      const result = priceEstimatorStore.calculateTotalStorageCost()
      expect(result.NVME.costTiered).toBeCloseTo(expectedNvmeTiered, 0)
      expect(result.HDD.costTiered).toBeCloseTo(expectedHddTiered, 0)
    })

    it("calculates storage across multiple labs correctly", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          selectedCompute: [],
          selectedStorage: [
            {
              id: 1,
              name: "volume-1",
              type: "NVME",
              size: 6,
              usage: "Work",
              monthlyPrice: 0,
              yearlyPrice: 0,
            } as StorageUnit,
          ],
        },
        {
          id: 2,
          title: "Lab 2",
          selectedCompute: [],
          selectedStorage: [
            {
              id: 1,
              name: "volume-2",
              type: "NVME",
              size: 7,
              usage: "Work",
              monthlyPrice: 0,
              yearlyPrice: 0,
            } as StorageUnit,
          ],
        },
      ]

      const result = priceEstimatorStore.calculateTotalStorageCost()
      const expectedTiered = 10 * 1000 + 3 * 800
      const expectedFlat = 13 * 1000

      expect(result.NVME.costTiered).toBeCloseTo(expectedTiered, 0)
      expect(result.NVME.costFlat).toBeCloseTo(expectedFlat, 0)
      expect(result.NVME.size).toBe(13)
    })
  })

  describe("Lab Management", () => {
    it("adds a new lab card", async () => {
      expect(priceEstimatorStore.labs.length).toBe(0)

      priceEstimatorStore.addLab("Lab 1")
      expect(priceEstimatorStore.labs.length).toBe(1)
      expect(priceEstimatorStore.labs[0].title).toBe("Lab 1")

      priceEstimatorStore.addLab("Lab 2")
      expect(priceEstimatorStore.labs.length).toBe(2)
      expect(priceEstimatorStore.labs[1].title).toBe("Lab 2")
    })

    it("Removing labs", async () => {
      priceEstimatorStore.addLab("Lab 1")
      priceEstimatorStore.addLab("Lab 2")

      priceEstimatorStore.addLab("Lab 3")
      expect(priceEstimatorStore.labs.length).toBe(3)

      priceEstimatorStore.removeLab(0) // Removes Lab 1 (id 0)
      expect(priceEstimatorStore.labs.length).toBe(2)
      expect(priceEstimatorStore.labs[0].title).toBe("Lab 2")

      priceEstimatorStore.clearAllLabs()
      expect(priceEstimatorStore.labs.length).toBe(0)
    })

    it("adds compute to a lab correctly using catalogue prices", () => {
      priceEstimatorStore.addLab("Lab 1")
      const labId = priceEstimatorStore.labs[0].id

      // Clear defaults
      priceEstimatorStore.labs[0].selectedCompute = []

      priceEstimatorStore.addComputeToLab(labId, {
        name: "My Machine",
        flavor: "default.c1",
        core_count: 4,
        ram: 8,
        type: "COMMITMENT_1Y",
      })

      const addedCompute = priceEstimatorStore.labs[0].selectedCompute[0]
      expect(addedCompute).toBeDefined()
      expect(addedCompute.name).toBe("My Machine")
      // Mock data has 50000 for default.c1
      expect(addedCompute.yearlyPrice).toBe(50000)
      expect(addedCompute.monthlyPrice).toBeCloseTo(50000 / 12, 4)
    })

    it("adds storage to a lab correctly using catalogue prices", () => {
      priceEstimatorStore.addLab("Lab 1")
      const labId = priceEstimatorStore.labs[0].id

      // Clear defaults
      priceEstimatorStore.labs[0].selectedStorage = []

      priceEstimatorStore.addStorageToLab(labId, {
        name: "My Volume",
        usage: "Work",
        type: "NVME",
        size: 2,
      })

      const addedStorage = priceEstimatorStore.labs[0].selectedStorage[0]
      expect(addedStorage).toBeDefined()
      expect(addedStorage.name).toBe("My Volume")
      // Mock data has 1000 for NVME First 10 TB. 2 * 1000 = 2000.
      expect(addedStorage.yearlyPrice).toBe(2000)
      expect(addedStorage.monthlyPrice).toBeCloseTo(2000 / 12, 4)
    })
  })

  describe("Total Calculations", () => {
    it("updates compute price total when lab card compute changes", async () => {
      priceEstimatorStore.addLab("Lab 1")
      const labId = priceEstimatorStore.labs[0].id

      // Clear default compute added by addLab
      priceEstimatorStore.labs[0].selectedCompute = []

      priceEstimatorStore.addComputeToLab(labId, {
        name: "machine-1",
        flavor: "default.c1",
        core_count: 4,
        ram: 8,
        type: "COMMITMENT_1Y",
      })

      const summary = priceEstimatorStore.updateTotalSummary()

      // @ts-ignore
      expect(summary.allCompute.price).toBe(50000)
      // @ts-ignore
      expect(summary.allCompute.units).toBe(1)
    })

    it("updates storage total when lab card storage changes", async () => {
      priceEstimatorStore.addLab("Lab 1")
      const labId = priceEstimatorStore.labs[0].id

      // Clear default storage added by addLab
      priceEstimatorStore.labs[0].selectedStorage = []

      priceEstimatorStore.addStorageToLab(labId, {
        name: "volume-1",
        usage: "Work",
        type: "NVME",
        size: 5,
      })

      const summary = priceEstimatorStore.updateTotalSummary()

      // @ts-ignore
      expect(summary.allStorage.NVME).toBeDefined()
      // @ts-ignore
      expect(summary.allStorage.NVME.size).toBe(5)
      // 5 * 1000 (First 10 TB price)
      // @ts-ignore
      expect(summary.allStorage.NVME.costFlat).toBeCloseTo(5000, 0)
    })

    it("Updates totals when multiple labs are added with compute and storage", async () => {
      priceEstimatorStore.addLab("Lab 1")
      const lab1Id = priceEstimatorStore.labs[0].id
      priceEstimatorStore.labs[0].selectedCompute = []
      priceEstimatorStore.labs[0].selectedStorage = []

      // Lab 1: 1 machine (50k), 10TB NVME (10k)
      priceEstimatorStore.addComputeToLab(lab1Id, {
        name: "machine-1",
        flavor: "default.c1",
        core_count: 4,
        ram: 8,
        type: "COMMITMENT_1Y",
      })
      priceEstimatorStore.addStorageToLab(lab1Id, {
        name: "volume-1",
        usage: "Work",
        type: "NVME",
        size: 10,
      })

      priceEstimatorStore.addLab("Lab 2")
      const lab2Id = priceEstimatorStore.labs[1].id
      priceEstimatorStore.labs[1].selectedCompute = []
      priceEstimatorStore.labs[1].selectedStorage = []

      // Lab 2: 2 machines (100k), 20TB NVME (20k flat)
      priceEstimatorStore.addComputeToLab(lab2Id, {
        name: "machine-2a",
        flavor: "default.c1",
        core_count: 4,
        ram: 8,
        type: "COMMITMENT_1Y",
      })
      priceEstimatorStore.addComputeToLab(lab2Id, {
        name: "machine-2b",
        flavor: "default.c1",
        core_count: 4,
        ram: 8,
        type: "COMMITMENT_1Y",
      })
      priceEstimatorStore.addStorageToLab(lab2Id, {
        name: "volume-2",
        usage: "Work",
        type: "NVME",
        size: 20,
      })

      const summary = priceEstimatorStore.updateTotalSummary()

      // Total compute: 50k + 50k + 50k = 150k
      // @ts-ignore
      expect(summary.allCompute.price).toBe(150000)

      // @ts-ignore
      expect(summary.allStorage.NVME).toBeDefined()
      // Total storage size: 10 + 20 = 30 TB
      // @ts-ignore
      expect(summary.allStorage.NVME.size).toBe(30)

      // Tiered calculation for 30TB NVME:
      // First 10TB @ 1000 = 10,000
      // Next 20TB @ 800 = 16,000
      // Total = 26,000
      const expectedNvmeTiered = 10 * 1000 + 20 * 800
      // @ts-ignore
      expect(summary.allStorage.NVME.costTiered).toBeCloseTo(expectedNvmeTiered, 0)
    })
  })
})
