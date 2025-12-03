// src/stores/pricingEstimatorStore.ts
import { reactive } from "vue"
import type {
  LabCard,
  ComputeUnit,
  StorageUnit,
  PriceListItem,
  GpuModel,
  MachineFlavor,
  TotalPriceItem,
  UpdateComputePayload,
  UpdateStoragePayload,
  Catalogue,
  SubscriptionType,
} from "../types/index.js"
import pricesApi from "../api/pricesApi.js"

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
  totals: {
    computeCost: 0,
    storageCostByType: {} as Record<string, { size: number; cost: number }>,
  },
  totalLabCost: [] as TotalPriceItem[],

  // TODO: This is variables for exporting. Fix this later.
  itemsComputeExport: [] as ComputeUnit[][],
  itemsStorageExport: [] as StorageUnit[][],

  /* Generic Helper */

  async initializePriceEstimatorStore() {
    console.log("initializing")
    this.isInitializingPriseEstimator = true

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
      this.labs = [
        {
          id: 0,
          title: "Lab 1",
          storage: 0,
          priceStorage: 0,
          priceComputeYearly: 0,
          numCompute: 0,
          selectedCompute: [],
          selectedStorage: [],
        },
      ]
    }

    await this.getCatalogueAPI()

    this.totals.computeCost = this.labs.reduce((sum, lab) => sum + (lab.priceComputeYearly || 0), 0)
    this.updateAddedStorage()
    this.updateCostSummary()

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
    try {
      const stateToSave = {
        labs: this.labs.map(lab => ({
          id: lab.id,
          title: lab.title,
          storage: lab.storage,
          priceStorage: lab.priceStorage,
          priceComputeYearly: lab.priceComputeYearly,
          numCompute: lab.numCompute,
          selectedCompute: lab.selectedCompute || [],
          selectedStorage: lab.selectedStorage || [],
        })),
      }
      localStorage.setItem("pricingEstimatorState", JSON.stringify(stateToSave))
    } catch (err) {
      console.error("Failed to save state:", err)
    }
  },

  /* Lab helpers */
  getLabComputeSum(labId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return { monthlyPrice: 0, yearlyPrice: 0, ram: 0, cpu_count: 0 }
    const monthlyPrice = lab.selectedCompute?.reduce((a, b) => a + (b.monthlyPrice || 0), 0) || 0
    const yearlyPrice = lab.selectedCompute?.reduce((a, b) => a + (b.yearlyPrice || 0), 0) || 0
    const ram = lab.selectedCompute?.reduce((a, b) => a + (b.ram || 0), 0) || 0
    const cpu_count = lab.selectedCompute?.reduce((a, b) => a + (b.core_count || 0), 0) || 0
    return { monthlyPrice, yearlyPrice, ram, cpu_count }
  },

  getLabStorageSum(labId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return { size: 0, price: 0, type: null }
    const size = lab.selectedStorage?.reduce((a, b) => a + (b.size || 0), 0) || 0
    const price = lab.selectedStorage?.reduce((a, b) => a + (b.price || 0), 0) || 0
    return { size, price, type: null }
  },

  clearAllLabs() {
    this.labs = []
    this.itemsComputeExport = []
    this.itemsStorageExport = []
    this.totals.computeCost = 0
    this.totals.storageCostByType = {}
    this.totalLabCost = []
    if (!ISSERVER) localStorage.removeItem("pricingEstimatorState")
  },

  addLab(lab?: Partial<LabCard>) {
    const newLab: LabCard = {
      id: this.labs.length,
      title: lab?.title || "Lab",
      storage: lab?.storage || 0,
      priceStorage: lab?.priceStorage || 0,
      priceComputeYearly: lab?.priceComputeYearly || 0,
      numCompute: lab?.numCompute || 0,
      selectedCompute: lab?.selectedCompute || [],
      selectedStorage: lab?.selectedStorage || [],
    }
    this.labs.push(newLab)
    this.updateAddedStorage()
    this.updateCostSummary()
    this.saveStateToLocal()
  },

  removeLab(id: number) {
    this.labs = this.labs.filter(l => l.id !== id).map((l, index) => ({ ...l, id: index }))
    delete this.itemsComputeExport[id]
    delete this.itemsStorageExport[id]
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.updateAddedStorage()
    this.updateCostSummary()
    this.saveStateToLocal()
  },

  updateLabTitle(id: number, title: string) {
    const lab = this.labs.find(l => l.id === id)
    if (lab) {
      lab.title = title
      this.saveStateToLocal()
    }
  },

  updateCostSummary() {
    const priceItems: TotalPriceItem[] = []

    if (this.labs.length > 0 && this.catalogue.labPrices.length > 0) {
      priceItems.push({
        name: "Lab subscriptions",
        units: this.labs.length,
        price: this.catalogue.labPrices[0]["price.nok.ex.vat"] * this.labs.length,
      })
    }

    const totalComputeUnits = this.labs.reduce((sum, lab) => sum + (lab.numCompute || 0), 0)
    priceItems.push({
      name: "Compute",
      units: totalComputeUnits,
      price: this.totals.computeCost,
    })

    const summedStorageCost = Object.values(this.totals.storageCostByType).reduce((acc, val) => acc + val.cost, 0)
    const summedStorageSize = Object.values(this.totals.storageCostByType).reduce((acc, val) => acc + val.size, 0)
    priceItems.push({
      name: "Storage",
      units: `${summedStorageSize} TB`,
      price: summedStorageCost,
    })

    this.totalLabCost = priceItems
  },

  /* Storage helpers */

  calculateTotalStorageCost() {
    let totalStorageByType: { [key: string]: number } = {}
    this.labs.forEach((lab: LabCard) => {
      if (!lab.selectedStorage || !Array.isArray(lab.selectedStorage)) {
        console.log("No selectedStorage or not an array for lab:", lab.id)
        return
      }

      console.log(`Lab ${lab.id} storage count:`, lab.selectedStorage.length)

      // Single forEach loop
      for (const storage of lab.selectedStorage) {
        console.log("item", storage)

        if (totalStorageByType[storage.type]) {
          totalStorageByType[storage.type] += storage.size
        } else {
          totalStorageByType[storage.type] = storage.size
        }
      }
    })
    let totalCost = {} as { [key: string]: { size: number; cost: number } }
    console.log("totalStorageByType", totalStorageByType)
    for (const [type, size] of Object.entries(totalStorageByType)) {
      totalCost[type] = { size: size, cost: 0 }
      const blockType = type === "NVME" ? "block.nvme.rep" : "block.hdd.rep"
      let remainingSize = size
      const priceEntries = this.catalogue.storagePrices.filter(
        (item: PriceListItem) =>
          item["service.group"] === blockType &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "1Y",
      )
      console.log(priceEntries, "priceEntries")
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

        totalCost[type].cost += entry["price.nok.ex.vat"] * applicableSize

        console.log("totalCost", totalCost)
      }
    }
    return totalCost
  },

  calculateStoragePriceForVolume(volumeSize: number, storageType: string) {
    const typeCostData = this.totals.storageCostByType[storageType]

    if (!typeCostData || typeCostData.size === 0) {
      return 0
    }

    const unitPrice = typeCostData.cost / typeCostData.size
    return volumeSize * unitPrice
  },

  updateAddedStorage() {
    this.totals.storageCostByType = this.calculateTotalStorageCost()
    this.labs.forEach(lab => {
      lab.selectedStorage?.forEach(item => {
        item.price = this.calculateStoragePriceForVolume(item.size, item.type)
      })
    })
  },

  addDefaultStorageToLab(labId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    const storageId = lab.selectedStorage?.length || 0
    const defaultStorage = {
      id: storageId,
      name: `volume-${storageId + 1}`,
      usage: "Archive",
      type: "HDD",
      size: 1,
      price: 0,
    } as StorageUnit

    lab.selectedStorage = lab.selectedStorage || []
    lab.selectedStorage.push(defaultStorage)
    this.updateAddedStorage()
    this.updateCostSummary()
    this.saveStateToLocal()
  },

  addStorageToLab(labId: number, payload: { name: string; usage: string; type: string; size: number }) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    const storageId = lab.selectedStorage?.length || 0
    const newStorage: StorageUnit = {
      id: storageId,
      name: payload.name,
      usage: payload.usage as any,
      type: payload.type as any,
      size: payload.size as number,
      price: 0,
    }
    lab.selectedStorage = lab.selectedStorage || []
    lab.selectedStorage.push(newStorage)
    this.itemsStorageExport[labId] = lab.selectedStorage
    this.updateAddedStorage()
    this.updateCostSummary()
    this.saveStateToLocal()
  },

  editStorageInLab(
    labId: number,
    storageId: number,
    payload: { name: string; usage: string; type: string; size: number },
  ) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    const idx = lab.selectedStorage?.findIndex(s => s.id === storageId) ?? -1
    if (idx === -1) return
    const price = this.calculateStoragePriceForVolume(payload.size, payload.type)
    lab.selectedStorage![idx] = {
      id: storageId,
      name: payload.name,
      usage: payload.usage as any,
      type: payload.type as any,
      size: payload.size,
      price,
    }
    this.itemsStorageExport[labId] = lab.selectedStorage ?? []
    this.updateAddedStorage()
    this.updateCostSummary()
    this.saveStateToLocal()
  },

  removeStorageFromLab(labId: number, storageId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    lab.selectedStorage = lab.selectedStorage?.filter(s => s.id !== storageId) || []
    this.itemsStorageExport[labId] = lab.selectedStorage
    this.updateAddedStorage()
    this.updateCostSummary()
    this.saveStateToLocal()
  },

  /*  Compute helpers  */

  getComputePriceForLab(flavor: string, type: string, gpuFlavor: string | null = null) {
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

  pushDefaultComputeUnitForLab(labId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    const defaultUnit = this.catalogue.computePrices.find(
      (item: PriceListItem) =>
        item["service.unit"] === "default.c1" &&
        item["service.level"] === "COMMITMENT" &&
        item["service.commitment"] === "1Y",
    )
    if (!defaultUnit) return

    const machineInfo = this.catalogue.machinePrices.find(
      (item: MachineFlavor) => item["value"] === defaultUnit["service.unit"],
    )
    if (!machineInfo) return

    const machinetitle = machineInfo["title"].split(" - ")[1].split(" / ")
    const core_count = parseInt(machinetitle[0].split(" ")[0])
    const ram = parseInt(machinetitle[1].split(" ")[0])

    const compId = lab.selectedCompute?.length || 0
    const unit: ComputeUnit = {
      id: compId,
      name: "machine-1",
      flavor: defaultUnit["service.unit"],
      core_count,
      gpu: null,
      ram,
      type: "COMMITMENT_1Y",
      monthlyPrice: defaultUnit["price.nok.ex.vat"] / 12,
      yearlyPrice: defaultUnit["price.nok.ex.vat"],
    }

    lab.selectedCompute = lab.selectedCompute || []
    lab.selectedCompute.push(unit)
    lab.priceComputeYearly = lab.selectedCompute.reduce((acc, c) => acc + (c.yearlyPrice || 0), 0)
    lab.numCompute = lab.selectedCompute.length
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.itemsComputeExport[labId] = lab.selectedCompute

    this.updateCostSummary()
    this.saveStateToLocal()
  },

  addComputeToLab(
    labId: number,
    payload: { name: string; flavor: string; core_count: number; ram: number; type: string; gpu?: string | null },
  ) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    const compId = lab.selectedCompute?.length || 0
    const prices = this.getComputePriceForLab(payload.flavor, payload.type, payload.gpu ?? null)
    const newCompute: ComputeUnit = {
      id: compId,
      name: payload.name,
      flavor: payload.flavor,
      core_count: payload.core_count,
      gpu: payload.gpu ?? null,
      ram: payload.ram,
      type: payload.type as SubscriptionType,
      monthlyPrice: prices.monthlyPrice,
      yearlyPrice: prices.yearlyPrice,
    }
    lab.selectedCompute = lab.selectedCompute || []
    lab.selectedCompute.push(newCompute)
    lab.priceComputeYearly = lab.selectedCompute.reduce((acc, c) => acc + (c.yearlyPrice || 0), 0)
    lab.numCompute = lab.selectedCompute.length
    this.itemsComputeExport[labId] = lab.selectedCompute
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.updateCostSummary()
    this.saveStateToLocal()
  },

  editComputeInLab(
    labId: number,
    computeId: number,
    payload: { name: string; flavor: string; core_count: number; ram: number; type: string; gpu?: string | null },
  ) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab || !lab.selectedCompute) return
    const idx = lab.selectedCompute.findIndex(c => c.id === computeId)
    if (idx === -1) return
    const prices = this.getComputePriceForLab(payload.flavor, payload.type, payload.gpu ?? null)
    lab.selectedCompute[idx] = {
      id: computeId,
      name: payload.name,
      flavor: payload.flavor,
      core_count: payload.core_count,
      gpu: payload.gpu ?? null,
      ram: payload.ram,
      type: payload.type as SubscriptionType,
      monthlyPrice: prices.monthlyPrice,
      yearlyPrice: prices.yearlyPrice,
    }
    lab.priceComputeYearly = lab.selectedCompute.reduce((acc, c) => acc + (c.yearlyPrice || 0), 0)
    lab.numCompute = lab.selectedCompute.length
    this.itemsComputeExport[labId] = lab.selectedCompute
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.updateCostSummary()
    this.saveStateToLocal()
  },

  removeComputeFromLab(labId: number, computeId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    lab.selectedCompute = lab.selectedCompute?.filter(c => c.id !== computeId) || []
    lab.priceComputeYearly = lab.selectedCompute.reduce((acc, c) => acc + (c.yearlyPrice || 0), 0)
    lab.numCompute = lab.selectedCompute.length
    this.itemsComputeExport[labId] = lab.selectedCompute
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.updateCostSummary()
    this.saveStateToLocal()
  },
})
