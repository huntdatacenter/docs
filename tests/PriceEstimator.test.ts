import { vuetify } from "../docs/.vitepress/theme/plugins/vuetify"
import { mount, flushPromises } from "@vue/test-utils"
import PriceEstimator from "../docs/.vitepress/theme/components/price-estimator/PriceEstimator.vue"
import LabCard from "../docs/.vitepress/theme/components/price-estimator/LabCard.vue"
import StorageModal from "../docs/.vitepress/theme/components/price-estimator/StorageModal.vue"
import { describe, it, expect, beforeEach, vi } from "vitest"
import { priceEstimatorStore, DEFAULT_DAYS } from "../docs/.vitepress/theme/components/price-estimator/stores/priceEstimatorStore"
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
    getMachineTypes: vi.fn().mockResolvedValue([
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
    priceEstimatorStore.billingMode = "monthly"
    // Manually populate catalogue for tests that need it
    priceEstimatorStore.catalogue.storagePrices = mockPriceList.filter((item: any) => item["service.family"] === "store") as any
    priceEstimatorStore.catalogue.computePrices = mockPriceList.filter((item: any) => item["service.group"] === "cpu") as any
    priceEstimatorStore.catalogue.labPrices = mockPriceList.filter((item: any) => item["service.group"] === "lab") as any
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
      wrapper.unmount()
    })
  })

  describe("Storage Cost Calculation", () => {
    it("calculates NVME storage cost correctly for 15 TB (crosses first tier)", async () => {
      priceEstimatorStore.labs = [
        {
          id: 1,
          title: "Lab 1",
          subscription: "COMMITMENT_1Y",
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
          subscription: "COMMITMENT_1Y",
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
          subscription: "COMMITMENT_1Y",
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
          subscription: "COMMITMENT_1Y",
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
          subscription: "COMMITMENT_1Y",
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
          subscription: "COMMITMENT_1Y",
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

      priceEstimatorStore.addLab({
        name: "Lab 1",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
      expect(priceEstimatorStore.labs.length).toBe(1)
      expect(priceEstimatorStore.labs[0].title).toBe("Lab 1")

      priceEstimatorStore.addLab({
        name: "Lab 2",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
      expect(priceEstimatorStore.labs.length).toBe(2)
      expect(priceEstimatorStore.labs[1].title).toBe("Lab 2")
    })

    it("Removing labs", async () => {
      priceEstimatorStore.addLab({
        name: "Lab 1",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
      priceEstimatorStore.addLab({
        name: "Lab 2",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })

      priceEstimatorStore.addLab({
        name: "Lab 3",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
      expect(priceEstimatorStore.labs.length).toBe(3)

      priceEstimatorStore.removeLab(0) // Removes Lab 1 (id 0)
      expect(priceEstimatorStore.labs.length).toBe(2)
      expect(priceEstimatorStore.labs[0].title).toBe("Lab 2")

      priceEstimatorStore.clearAllLabs()
      expect(priceEstimatorStore.labs.length).toBe(0)
    })

    it("adds compute to a lab correctly using catalogue prices", () => {
      priceEstimatorStore.addLab({
        name: "Lab 1",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
      const labId = priceEstimatorStore.labs[0].id

      // Clear defaults
      priceEstimatorStore.labs[0].selectedCompute = []

      priceEstimatorStore.addComputeToLab(labId, {
        name: "My Machine",
        machine_type: "default.c1",
        core_count: 4,
        ram: 8,
        subscription: "COMMITMENT_1Y",
      })

      const addedCompute = priceEstimatorStore.labs[0].selectedCompute[0]
      expect(addedCompute).toBeDefined()
      expect(addedCompute.name).toBe("My Machine")
      // Mock data has 50000 for default.c1
      expect(addedCompute.yearlyPrice).toBe(50000)
      expect(addedCompute.monthlyPrice).toBeCloseTo(50000 / 12, 4)
    })

    it("adds storage to a lab correctly using catalogue prices", () => {
      priceEstimatorStore.addLab({
        name: "Lab 1",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
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
      priceEstimatorStore.addLab({
        name: "Lab 1",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
      const labId = priceEstimatorStore.labs[0].id

      // Clear default compute added by addLab
      priceEstimatorStore.labs[0].selectedCompute = []

      priceEstimatorStore.addComputeToLab(labId, {
        name: "machine-1",
        machine_type: "default.c1",
        core_count: 4,
        ram: 8,
        subscription: "COMMITMENT_1Y",
      })

      const summary = priceEstimatorStore.updateTotalSummary()

      // @ts-ignore
      expect(summary.allCompute.price).toBe(50000)
      // @ts-ignore
      expect(summary.allCompute.units).toBe(1)
    })

    it("updates storage total when lab card storage changes", async () => {
      priceEstimatorStore.addLab({
        name: "Lab 1",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
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
      priceEstimatorStore.addLab({
        name: "Lab 1",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
      const lab1Id = priceEstimatorStore.labs[0].id
      priceEstimatorStore.labs[0].selectedCompute = []
      priceEstimatorStore.labs[0].selectedStorage = []

      // Lab 1: 1 machine (50k), 10TB NVME (10k)
      priceEstimatorStore.addComputeToLab(lab1Id, {
        name: "machine-1",
        machine_type: "default.c1",
        core_count: 4,
        ram: 8,
        subscription: "COMMITMENT_1Y",
      })
      priceEstimatorStore.addStorageToLab(lab1Id, {
        name: "volume-1",
        usage: "Work",
        type: "NVME",
        size: 10,
      })

      priceEstimatorStore.addLab({
        name: "Lab 2",
        subscription: "1Y",
        machineType: "default.c1",
        machineSubscription: "COMMITMENT_1Y",
        hddSize: 1,
        nvmeSize: 0,
      })
      const lab2Id = priceEstimatorStore.labs[1].id
      priceEstimatorStore.labs[1].selectedCompute = []
      priceEstimatorStore.labs[1].selectedStorage = []

      // Lab 2: 2 machines (100k), 20TB NVME (20k flat)
      priceEstimatorStore.addComputeToLab(lab2Id, {
        name: "machine-2a",
        machine_type: "default.c1",
        core_count: 4,
        ram: 8,
        subscription: "COMMITMENT_1Y",
      })
      priceEstimatorStore.addComputeToLab(lab2Id, {
        name: "machine-2b",
        machine_type: "default.c1",
        core_count: 4,
        ram: 8,
        subscription: "COMMITMENT_1Y",
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

  describe("Daily billing mode", () => {
    const addLabWithItems = () => {
      priceEstimatorStore.labs = [{ id: 0, title: "Lab 1", subscription: "1Y", selectedCompute: [], selectedStorage: [], collapse: false }]
      priceEstimatorStore.addComputeToLab(0, { name: "short-term", machine_type: "default.c1", core_count: 4, ram: 8, subscription: "COMMITMENT_1Y", days: 10, isDefault: false })
      priceEstimatorStore.addStorageToLab(0, { name: "volume-1", usage: "Work", type: "NVME", size: 2, days: 5 })
      return priceEstimatorStore.labs[0]
    }

    it("defaults items to DEFAULT_DAYS when no days are given", () => {
      priceEstimatorStore.labs = [{ id: 0, title: "Lab 1", subscription: "1Y", selectedCompute: [], selectedStorage: [], collapse: false }]
      priceEstimatorStore.addComputeToLab(0, { name: "m", machine_type: "default.c1", core_count: 4, ram: 8, subscription: "COMMITMENT_1Y", isDefault: false })
      priceEstimatorStore.addStorageToLab(0, { name: "v", usage: "Work", type: "HDD", size: 1 })

      expect(priceEstimatorStore.labs[0].selectedCompute[0].days).toBe(DEFAULT_DAYS)
      expect(priceEstimatorStore.labs[0].selectedStorage[0].days).toBe(DEFAULT_DAYS)
    })

    it("computes per-lab daily price and price x days totals", () => {
      addLabWithItems()

      const compute = priceEstimatorStore.getLabComputePriceSum(0)
      expect(compute.dailyCostTotal).toBeCloseTo(50000 / 365, 6)
      expect(compute.periodCostTotal).toBeCloseTo((50000 / 365) * 10, 6)

      // NVME: 1000 NOK / TB / year, 2 TB for 5 days
      const storage = priceEstimatorStore.getLabStoragePriceSum(0)
      expect(storage.dailyCostTotal).toBeCloseTo((2 * 1000) / 365, 6)
      expect(storage.periodCostTotal).toBeCloseTo(((2 * 1000) / 365) * 5, 6)
      expect(priceEstimatorStore.getLabStoragePriceSumByType(0).NVME.periodCostTotal).toBeCloseTo(((2 * 1000) / 365) * 5, 6)

      // Monthly values are unaffected
      expect(compute.monthlyCostTotal).toBeCloseTo(50000 / 12, 6)
    })

    it("updates days per item and ignores invalid values", () => {
      addLabWithItems()

      priceEstimatorStore.updateComputeDays(0, 0, 3)
      priceEstimatorStore.updateStorageDays(0, 0, 7)
      priceEstimatorStore.updateComputeDays(0, 0, 0)
      priceEstimatorStore.updateStorageDays(0, 0, NaN)

      expect(priceEstimatorStore.labs[0].selectedCompute[0].days).toBe(3)
      expect(priceEstimatorStore.labs[0].selectedStorage[0].days).toBe(7)
    })

    it("keeps days when an item is edited", () => {
      addLabWithItems()

      priceEstimatorStore.editComputeInLab(0, 0, { name: "renamed", machine_type: "default.c1", core_count: 4, ram: 8, subscription: "COMMITMENT_1Y", isDefault: false })
      priceEstimatorStore.editStorageInLab(0, 0, { name: "renamed", usage: "Work", type: "HDD", size: 3 })

      expect(priceEstimatorStore.labs[0].selectedCompute[0].days).toBe(10)
      expect(priceEstimatorStore.labs[0].selectedStorage[0].days).toBe(5)
    })

    it("includes period totals in the total summary", () => {
      addLabWithItems()

      const summary = priceEstimatorStore.updateTotalSummary()
      expect(summary.allCompute.periodPrice).toBeCloseTo((50000 / 365) * 10, 6)
      // @ts-ignore
      expect(summary.allStorage.NVME.costPeriod).toBeCloseTo(((2 * 1000) / 365) * 5, 6)
    })

    it("persists the billing mode and days", () => {
      addLabWithItems()
      priceEstimatorStore.setBillingMode("daily")

      const saved = JSON.parse(localStorage.getItem("hunt-cloud-estimator-state")!)
      expect(saved.billingMode).toBe("daily")
      expect(saved.labs[0].selectedCompute[0].days).toBe(10)
      expect(saved.labs[0].selectedStorage[0].days).toBe(5)
    })

    it("falls back to defaults for invalid days from forms", () => {
      const lab = addLabWithItems()
      priceEstimatorStore.addStorageToLab(0, { name: "v", usage: "Work", type: "HDD", size: 1, days: null as any })
      priceEstimatorStore.editComputeInLab(0, 0, { name: "m", machine_type: "default.c1", core_count: 4, ram: 8, subscription: "COMMITMENT_1Y", days: 0, isDefault: false })

      expect(lab.selectedStorage[1].days).toBe(DEFAULT_DAYS)
      expect(lab.selectedCompute[0].days).toBe(10)
    })

    it("shows a Days field in the storage form only in daily mode and saves it", async () => {
      addLabWithItems()
      const monthlyForm = mount(StorageModal, { props: { labId: 0, storageId: 1 }, global: { plugins: [vuetify] } })
      expect(monthlyForm.text()).not.toContain("Days")
      monthlyForm.unmount()

      priceEstimatorStore.setBillingMode("daily")
      const form = mount(StorageModal, { props: { labId: 0, storageId: 1 }, global: { plugins: [vuetify] } })
      expect(form.text()).toContain("Days")

      const daysInput = form.findAll("input").find((i) => i.attributes("type") !== "number" && (i.element as HTMLInputElement).value === String(DEFAULT_DAYS))!
      await daysInput.setValue("14")
      await form
        .findAll("button")
        .find((b) => b.text().includes("Save"))!
        .trigger("click")

      expect(priceEstimatorStore.labs[0].selectedStorage[1].days).toBe(14)
      form.unmount()
    })

    it("switches the lab tables between monthly and daily columns", async () => {
      const lab = addLabWithItems()
      const wrapper = mount(LabCard, { props: { lab }, global: { plugins: [vuetify] } })

      expect(wrapper.text()).toContain("Price / month")
      expect(wrapper.text()).not.toContain("Price / day")

      priceEstimatorStore.setBillingMode("daily")
      await flushPromises()

      expect(wrapper.text()).toContain("Price / day")
      expect(wrapper.text()).toContain("Days")
      expect(wrapper.text()).not.toContain("Price / month")
      wrapper.unmount()
    })
  })
})
