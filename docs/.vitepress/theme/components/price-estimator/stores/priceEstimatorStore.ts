// src/stores/pricingEstimatorStore.ts
import { reactive } from "vue"
import {
  type LabCard,
  type ComputeUnit,
  type StorageUnit,
  type StorageType,
  type PriceListItem,
  type GpuModel,
  type MachineFlavor,
  type Catalogue,
  type SubscriptionType,
  storageTypes,
  StorageCostByType,
} from "../types/index.js"
import pricesApi from "../api/pricesApi.js"
import { StorageUsageType } from "../types/index"

const ISSERVER = typeof window === "undefined"

export const priceEstimatorStore = reactive({
  /* State */

  isInitializingPriseEstimator: false,
  labs: [] as LabCard[],
  catalogue: {
    computePrices: [] as PriceListItem[],
    storagePrices: [] as PriceListItem[],
    gpuPrices: [] as PriceListItem[],
    machinePrices: [] as MachineFlavor[],
    availableGpus: [] as GpuModel[],
    labPrices: [] as PriceListItem[],
  } as Catalogue,

  /* Generic Helper */

  async initializePriceEstimatorStore() {
    console.log("initializing")
    this.isInitializingPriseEstimator = true

    await this.getCatalogueAPI()

    // Load saved data from localstorage
    let saved

    // TODO: Fix this later
    // if (!ISSERVER) {
    //   try {
    //     saved = localStorage.getItem("pricingEstimatorState")
    //     if (saved) {
    //       const state = JSON.parse(saved)
    //       this.labs = (state.labs || []).map((lab: any) => ({
    //         id: lab.id ?? this.generateLabId(),
    //         title: lab.title,
    //         storage: lab.storage || 0,
    //         priceStorage: lab.priceStorage || 0,
    //         priceComputeYearly: lab.priceComputeYearly || 0,
    //         numCompute: lab.numCompute || 0,
    //         selectedCompute: lab.selectedCompute || [],
    //         selectedStorage: lab.selectedStorage || [],
    //       }))
    //     }
    //   } catch (err) {
    //     console.error("Failed to load state:", err)
    //   }
    // }

    if (!saved) {
      // Create first sample lab
      this.addLab("Lab 1")
    }

    this.isInitializingPriseEstimator = false
  },

  async getCatalogueAPI() {
    // Get price list from the API
    const priceListPromise = pricesApi.getPriceList().then((json: PriceListItem[]) => {
      this.catalogue.computePrices = json
        .filter(item => item["service.group"] === "cpu")
        .map(this.convertPricesToYearly)
      this.catalogue.storagePrices = json.filter(item => item["service.family"] === "store")
      this.catalogue.gpuPrices = json.filter(item => item["service.group"] === "gpu").map(this.convertPricesToYearly)
      this.catalogue.labPrices = json.filter(item => item["service.group"] === "lab")
    })

    const gpusPromise = pricesApi.getAvailableGPUS().then((gpus: GpuModel[]) => {
      this.catalogue.availableGpus = gpus
    })

    const machinesPromise = pricesApi.getMachineFlavors().then((machine: MachineFlavor[]) => {
      this.catalogue.machinePrices = machine
    })

    await Promise.all([priceListPromise, gpusPromise, machinesPromise])
  },

  convertPricesToYearly(item: PriceListItem) {
    if (item["service.commitment"] === "1D") {
      item["service.commitment"] = "1Y"
      item["price.nok.ex.vat"] *= 365
    }
    return item
  },

  saveStateToLocal() {
    console.log("Not working for now")
    // try {
    //   const stateToSave = {
    //     labs: this.labs.map(lab => ({
    //       id: lab.id,
    //       title: lab.title,
    //       storage: lab.storage,
    //       priceStorage: lab.priceStorageYearly,
    //       priceComputeYearly: lab.priceComputeYearly,
    //       selectedCompute: lab.selectedCompute || [],
    //       selectedStorage: lab.selectedStorage || [],
    //     })),
    //   }
    //   localStorage.setItem("pricingEstimatorState", JSON.stringify(stateToSave))
    // } catch (err) {
    //   console.error("Failed to save state:", err)
    // }
  },

  /* Lab helpers */
  addLab(labTitle: string) {
    const newLab: LabCard = {
      id: this.labs.length,
      title: labTitle,
      selectedCompute: [],
      selectedStorage: [],
    }

    // Add compute
    const defaultComputeUnit = this.catalogue.computePrices.find(
      (item: PriceListItem) =>
        item["service.unit"] === "default.c1" &&
        item["service.level"] === "COMMITMENT" &&
        item["service.commitment"] === "1Y",
    )
    if (!defaultComputeUnit) return

    const machineInfo = this.catalogue.machinePrices.find(
      (item: MachineFlavor) => item["value"] === defaultComputeUnit["service.unit"],
    )
    if (!machineInfo) return

    const machineTitle = machineInfo["title"].split(" - ")[1].split(" / ")
    const coreCount = parseInt(machineTitle[0].split(" ")[0])
    const ram = parseInt(machineTitle[1].split(" ")[0])
    const unit: ComputeUnit = {
      id: 0,
      name: "machine-1",
      flavor: defaultComputeUnit["service.unit"],
      core_count: coreCount,
      ram,
      type: "COMMITMENT_1Y",
      monthlyPrice: Number(defaultComputeUnit["price.nok.ex.vat"] / 12),
      yearlyPrice: defaultComputeUnit["price.nok.ex.vat"],
    }

    newLab.selectedCompute.push(unit)

    // Add storage
    const defaultStorageUnit = this.catalogue.storagePrices.find(
      (item: PriceListItem) =>
        item["service.group"] === "block.hdd.rep" &&
        item["service.unit"] === "First 10 TB" &&
        item["service.level"] === "COMMITMENT" &&
        item["service.commitment"] === "1Y",
    )
    if (!defaultStorageUnit) return

    const defaultStorage = {
      id: 0,
      name: "volume-1",
      usage: "Archive",
      type: "HDD",
      size: 1,
      monthlyPrice: Number(defaultStorageUnit["price.nok.ex.vat"] / 12),
      yearlyPrice: defaultStorageUnit["price.nok.ex.vat"],
    } as StorageUnit

    newLab.selectedStorage.push(defaultStorage)

    // Update
    this.labs.push(newLab)
  },

  removeLab(labId: number) {
    this.labs = this.labs.filter(lab => lab.id !== labId)
  },

  getLabComputePriceSum(labId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) {
      console.log("Lab not found")
      return { monthlyCostTotal: 0, yearlyCostTotal: 0 }
    }

    const monthlyCostTotal = lab.selectedCompute.reduce((a, b) => a + b.monthlyPrice, 0)
    const yearlyCostTotal = lab.selectedCompute.reduce((a, b) => a + b.yearlyPrice, 0)

    return { monthlyCostTotal, yearlyCostTotal }
  },

  getLabStoragePriceSum(labId: number): StorageCostByType {
    const results: StorageCostByType = {
      HDD: { size: 0, yearlyCostTotal: 0, monthlyCostTotal: 0 },
      NVME: { size: 0, yearlyCostTotal: 0, monthlyCostTotal: 0 },
    }

    const lab = this.labs.find(l => l.id === labId)
    if (!lab) {
      return results
    }

    for (const storageType of storageTypes) {
      const storages = lab.selectedStorage.filter(str => str.type === storageType)
      const size = storages.reduce((sum, s) => sum + s.size, 0)
      const yearlyCostTotal = storages.reduce((sum, s) => sum + s.yearlyPrice, 0)
      const monthlyCostTotal = storages.reduce((sum, s) => sum + s.monthlyPrice, 0)
      results[storageType] = { size, yearlyCostTotal, monthlyCostTotal }
    }

    return results
  },

  clearAllLabs() {
    this.labs = []

    if (!ISSERVER) localStorage.removeItem("pricingEstimatorState")
  },

  updateLabTitle(id: number, title: string) {
    const lab = this.labs.find(l => l.id === id)
    if (lab) {
      lab.title = title
      this.saveStateToLocal()
    }
  },

  /* Storage helpers */

  calculateTotalStorageCost() {
    // Calculate current total storage size by types
    const totalStorageByType: { [key: string]: number } = {}
    this.labs.forEach((lab: LabCard) => {
      for (const storage of lab.selectedStorage) {
        if (totalStorageByType[storage.type]) {
          totalStorageByType[storage.type] += storage.size
        } else {
          totalStorageByType[storage.type] = storage.size
        }
      }
    })

    const totalCost = {} as {
      [key: string]: { size: number; costTiered: number; costFlat: number }
    }

    for (const [type, size] of Object.entries(totalStorageByType)) {
      totalCost[type] = { size: size, costTiered: 0, costFlat: 0 }

      const blockType = type === "NVME" ? "block.nvme.rep" : "block.hdd.rep"

      const priceEntries = this.catalogue.storagePrices.filter(
        (item: PriceListItem) =>
          item["service.group"] === blockType &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "1Y",
      )

      // Tiered calculation
      let remainingSize = size
      for (const entry of priceEntries) {
        let applicableSize = 0
        if (entry["service.unit"] === "First 10 TB") {
          applicableSize = Math.min(remainingSize, 10)
        } else if (entry["service.unit"] === "Next 90 TB") {
          applicableSize = Math.min(remainingSize, 90)
        } else {
          applicableSize = remainingSize
        }
        remainingSize -= applicableSize

        const unitPrice = Number(entry["price.nok.ex.vat"]) || 0
        totalCost[type].costTiered += unitPrice * applicableSize
      }

      // Flat rate
      const defaultPriceEntry = priceEntries.find((e: PriceListItem) => e["service.unit"] === "First 10 TB")
      const flatUnitPrice = Number(defaultPriceEntry!["price.nok.ex.vat"]) || 0
      totalCost[type].costFlat = flatUnitPrice * size
    }

    return totalCost
  },

  addStorageToLab(labId: number, payload: { name: string; usage: StorageUsageType; type: StorageType; size: number }) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    const prices = this.getStoragePriceFromCatalogue(payload.type, payload.size)
    const storageId = lab.selectedStorage?.length || 0
    const newStorage: StorageUnit = {
      id: storageId,
      name: payload.name,
      usage: payload.usage,
      type: payload.type,
      size: payload.size,
      yearlyPrice: prices?.yearlyPrice!,
      monthlyPrice: prices?.monthlyPrice!,
    }
    lab.selectedStorage.push(newStorage)

    this.saveStateToLocal()
  },

  editStorageInLab(
    labId: number,
    storageId: number,
    payload: { name: string; usage: StorageUsageType; type: StorageType; size: number },
  ) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    const idx = lab.selectedStorage?.findIndex(s => s.id === storageId) ?? -1
    if (idx === -1) return
    const price = this.getStoragePriceFromCatalogue(payload.type, payload.size)
    lab.selectedStorage![idx] = {
      id: storageId,
      name: payload.name,
      usage: payload.usage,
      type: payload.type,
      size: payload.size,
      yearlyPrice: price?.yearlyPrice!,
      monthlyPrice: price?.monthlyPrice!,
    }

    this.saveStateToLocal()
  },

  removeStorageFromLab(labId: number, storageId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    lab.selectedStorage = lab.selectedStorage?.filter(s => s.id !== storageId)

    this.saveStateToLocal()
  },

  getStoragePriceFromCatalogue(type: string, size: number) {
    // This gets default storage value. No discount.

    let totalYearlyPrice = 0
    let totalMonthlyPrice = 0

    if (type === "HDD") {
      const defaultHDDUnit = this.catalogue.storagePrices.find(
        (item: PriceListItem) =>
          item["service.group"] === "block.hdd.rep" &&
          item["service.unit"] === "First 10 TB" &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "1Y",
      )
      if (!defaultHDDUnit) return

      totalYearlyPrice = defaultHDDUnit?.["price.nok.ex.vat"] * size
      totalMonthlyPrice = Number(totalYearlyPrice / 12)

      return {
        monthlyPrice: totalMonthlyPrice,
        yearlyPrice: totalYearlyPrice,
      }
    }

    if (type === "NVME") {
      const defaultNVMEUnit = this.catalogue.storagePrices.find(
        (item: PriceListItem) =>
          item["service.group"] === "block.nvme.rep" &&
          item["service.unit"] === "First 10 TB" &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "1Y",
      )

      if (!defaultNVMEUnit) return

      totalYearlyPrice = defaultNVMEUnit?.["price.nok.ex.vat"] * size
      totalMonthlyPrice = Number(totalYearlyPrice / 12)

      return {
        monthlyPrice: totalMonthlyPrice,
        yearlyPrice: totalYearlyPrice,
      }
    }
  },

  /*  Compute helpers  */

  getComputePriceFromCatalogue(flavor: string, type: string, gpuFlavor?: string) {
    let totalYearlyPrice = 0
    let totalMonthlyPrice = 0
    let mainFlavorPrice: number | undefined
    let gpuYearly: number | undefined

    if (type.includes("COMMITMENT")) {
      if (type === "COMMITMENT_3Y") {
        const found3Y = this.catalogue.computePrices.find(
          p => p["service.unit"] === flavor && p["service.level"] === "COMMITMENT" && p["service.commitment"] === "3Y",
        )
        if (found3Y) {
          mainFlavorPrice = found3Y["price.nok.ex.vat"] / 3
        }
      } else {
        mainFlavorPrice = this.catalogue.computePrices.find(
          p => p["service.unit"] === flavor && p["service.level"] === "COMMITMENT" && p["service.commitment"] === "1Y",
        )?.["price.nok.ex.vat"]
      }
    } else {
      const foundPrice = this.catalogue.computePrices.find(
        p => p["service.unit"] === flavor && p["service.level"] === type,
      )
      mainFlavorPrice = foundPrice?.["price.nok.ex.vat"]
    }

    if (mainFlavorPrice) {
      totalYearlyPrice += mainFlavorPrice
    }

    totalMonthlyPrice = Number(totalYearlyPrice / 12)

    if (gpuFlavor) {
      const gpuPrice = this.catalogue.gpuPrices.find(
        p => p["service.unit"] === gpuFlavor && p["service.level"] === "ONDEMAND",
      )
      if (gpuPrice) {
        gpuYearly = gpuPrice["price.nok.ex.vat"]
        totalYearlyPrice += gpuYearly
        totalMonthlyPrice = totalMonthlyPrice + Number(gpuYearly / 12)
      }
    }
    return {
      monthlyPrice: totalMonthlyPrice,
      yearlyPrice: totalYearlyPrice,
    }
  },

  addComputeToLab(
    labId: number,
    payload: { name: string; flavor: string; core_count: number; ram: number; type: string; gpu?: string },
  ) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    const compId = lab.selectedCompute?.length || 0
    const prices = this.getComputePriceFromCatalogue(payload.flavor, payload.type, payload.gpu)
    const newCompute: ComputeUnit = {
      id: compId,
      name: payload.name,
      flavor: payload.flavor,
      core_count: payload.core_count,
      gpu: payload.gpu,
      ram: payload.ram,
      type: payload.type as SubscriptionType,
      monthlyPrice: prices.monthlyPrice,
      yearlyPrice: prices.yearlyPrice,
    }
    lab.selectedCompute = lab.selectedCompute || []
    lab.selectedCompute.push(newCompute)

    this.saveStateToLocal()
  },

  editComputeInLab(
    labId: number,
    computeId: number,
    payload: { name: string; flavor: string; core_count: number; ram: number; type: string; gpu?: string },
  ) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab || !lab.selectedCompute) return

    const idx = lab.selectedCompute.findIndex(c => c.id === computeId)
    if (idx === -1) return

    const prices = this.getComputePriceFromCatalogue(payload.flavor, payload.type, payload.gpu)
    lab.selectedCompute[idx] = {
      id: computeId,
      name: payload.name,
      flavor: payload.flavor,
      core_count: payload.core_count,
      gpu: payload.gpu,
      ram: payload.ram,
      type: payload.type as SubscriptionType,
      monthlyPrice: prices.monthlyPrice,
      yearlyPrice: prices.yearlyPrice,
    }

    this.saveStateToLocal()
  },

  removeComputeFromLab(labId: number, computeId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    lab.selectedCompute = lab.selectedCompute?.filter(c => c.id !== computeId)
    this.saveStateToLocal()
  },

  /* Total Helpers */
  updateTotalSummary() {
    // Get lab subscriptions
    const summary = { labSubscriptions: {}, allCompute: {}, allStorage: {} }

    if (this.labs.length > 0 && this.catalogue.labPrices.length > 0) {
      const labSubscriptions = {
        units: this.labs.length,
        price: this.catalogue.labPrices[0]["price.nok.ex.vat"] * this.labs.length,
      }
      summary.labSubscriptions = labSubscriptions
    }

    // Get total compute from labs
    const totalComputeUnits = this.labs.reduce((sum, lab) => sum + lab.selectedCompute.length, 0)
    const totalComputeForAllLabs = this.labs.reduce((labSum, lab) => {
      const computeSum = lab.selectedCompute.reduce((sum, comp) => sum + comp.yearlyPrice, 0)
      return labSum + computeSum
    }, 0)
    const allCompute = {
      units: totalComputeUnits,
      price: totalComputeForAllLabs,
    }
    summary.allCompute = allCompute

    // Get total storages from labs

    const storageSum = this.calculateTotalStorageCost()
    console.log("SUMMARY", storageSum)
    summary.allStorage = storageSum
    return summary
  },
})
