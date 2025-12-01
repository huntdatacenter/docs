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
} from "../types"

const ISSERVER = typeof window === "undefined"

export const pricingEstimatorStore = reactive({
  // state
  labs: [] as LabCard[],
  catalogue: {
    computePrices: [] as PriceListItem[],
    storagePrices: [] as PriceListItem[],
    gpuPrices: [] as PriceListItem[],
    machineCatalogue: [] as MachineFlavor[],
    availableGpus: [] as GpuModel[],
    labPrices: [] as PriceListItem[],
  } as Catalogue,
  totals: {
    computeCost: 0,
    storageCostByType: {} as Record<string, { size: number; cost: number }>,
  },
  totalLabCost: [] as TotalPriceItem[],
  // TODO: What is this
  itemsComputeExport: [] as ComputeUnit[][],
  itemsStorageExport: [] as StorageUnit[][],
  isLoadingCatalogues: false,
  isLoadingPriseEstimator: false,

  // helpers
  generateLabId() {
    return Date.now() + Math.floor(Math.random() * 10000)
  },

  generateItemId() {
    return Date.now() + Math.floor(Math.random() * 10000)
  },

  preparePricesToYearly(item: PriceListItem) {
    if (item["service.commitment"] === "1D") {
      item["service.commitment"] = "1Y"
      item["price.nok.ex.vat"] *= 365
    }
    return item
  },

  /* ------------------------- Storage helpers ------------------------- */
  calculateTotalStorageCost() {
    const totalByType: Record<string, number> = {}
    this.labs.forEach(lab => {
      lab.selectedStorage?.forEach(storage => {
        totalByType[storage.type] = (totalByType[storage.type] || 0) + storage.size
      })
    })

    const result: Record<string, { size: number; cost: number }> = {}
    for (const [type, size] of Object.entries(totalByType)) {
      result[type] = { size, cost: 0 }
      const blockType = type === "NVME" ? "block.nvme.rep" : "block.hdd.rep"
      let remaining = size
      const priceEntries = this.catalogue.storagePrices.filter(
        item =>
          item["service.group"] === blockType &&
          item["service.level"] === "COMMITMENT" &&
          item["service.commitment"] === "1Y",
      )

      for (const entry of priceEntries) {
        let applicableSize = 0
        if (entry["service.unit"] === "First 10 TB") {
          applicableSize = Math.min(remaining, 10)
        } else if (entry["service.unit"] === "Next 90 TB") {
          applicableSize = Math.min(remaining, 90)
        } else {
          applicableSize = remaining
        }
        remaining -= applicableSize
        result[type].cost += entry["price.nok.ex.vat"] * applicableSize
      }
    }
    return result
  },

  calculateStoragePriceForVolume(volumeSize: number, storageType: string) {
    const typeCostData = this.totals.storageCostByType[storageType]

    if (!typeCostData || typeCostData.size === 0) {
      return 0
    }

    const unitPrice = typeCostData.cost / typeCostData.size
    return volumeSize * unitPrice
  },

  updateAddedStorageForLab(labId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    lab.selectedStorage?.forEach(item => {
      item.price = this.calculateStoragePriceForVolume(item.size, item.type)
    })
  },

  pushDefaultStorageForLab(labId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return

    const storageId = this.generateItemId()
    const defaultStorage = {
      id: storageId,
      name: `volume-${storageId}`,
      usage: "Archive",
      type: "HDD",
      size: 1,
      price: 0,
    } as StorageUnit

    lab.selectedStorage = lab.selectedStorage || []
    lab.selectedStorage.push(defaultStorage)
    this.updateAddedStorageForLab(labId)
    this.updateTotalBreakdown()
    this.saveState()
  },

  addStorageToLab(labId: number, payload: { name: string; usage: string; type: string; size: number }) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    const id = this.generateItemId()
    const price = this.calculateStoragePriceForVolume(payload.size, payload.type)
    const newStorage: StorageUnit = {
      id,
      name: payload.name,
      usage: payload.usage as any,
      type: payload.type as any,
      size: payload.size,
      price,
    }
    lab.selectedStorage = lab.selectedStorage || []
    lab.selectedStorage.push(newStorage)
    this.itemsStorageExport[labId] = lab.selectedStorage
    this.totals.storageCostByType = this.calculateTotalStorageCost()
    this.updateTotalBreakdown()
    this.saveState()
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
    this.itemsStorageExport[labId] = lab.selectedStorage
    this.totals.storageCostByType = this.calculateTotalStorageCost()
    this.updateTotalBreakdown()
    this.saveState()
  },

  removeStorageFromLab(labId: number, storageId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    lab.selectedStorage = lab.selectedStorage?.filter(s => s.id !== storageId) || []
    this.itemsStorageExport[labId] = lab.selectedStorage
    this.totals.storageCostByType = this.calculateTotalStorageCost()
    this.updateTotalBreakdown()
    this.saveState()
  },

  /* ------------------------- Compute helpers ------------------------- */
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

    const machineInfo = this.catalogue.machineCatalogue.find(
      (item: MachineFlavor) => item["value"] === defaultUnit["service.unit"],
    )
    if (!machineInfo) return

    const machinetitle = machineInfo["title"].split(" - ")[1].split(" / ")
    const core_count = parseInt(machinetitle[0].split(" ")[0])
    const ram = parseInt(machinetitle[1].split(" ")[0])

    const id = this.generateItemId()
    const unit: ComputeUnit = {
      id,
      name: "machine-0",
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
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.itemsComputeExport[labId] = lab.selectedCompute
    this.updateTotalBreakdown()
    this.saveState()
  },

  addComputeToLab(
    labId: number,
    payload: { name: string; flavor: string; core_count: number; ram: number; type: string; gpu?: string | null },
  ) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    const id = this.generateItemId()
    const prices = this.getComputePriceForLab(payload.flavor, payload.type, payload.gpu ?? null)
    const newCompute: ComputeUnit = {
      id,
      name: payload.name,
      flavor: payload.flavor,
      core_count: payload.core_count,
      gpu: payload.gpu ?? null,
      ram: payload.ram,
      type: payload.type,
      monthlyPrice: prices.monthlyPrice,
      yearlyPrice: prices.yearlyPrice,
    }
    lab.selectedCompute = lab.selectedCompute || []
    lab.selectedCompute.push(newCompute)
    lab.priceComputeYearly = lab.selectedCompute.reduce((acc, c) => acc + (c.yearlyPrice || 0), 0)
    lab.numCompute = lab.selectedCompute.length
    this.itemsComputeExport[labId] = lab.selectedCompute
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.updateTotalBreakdown()
    this.saveState()
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
      type: payload.type,
      monthlyPrice: prices.monthlyPrice,
      yearlyPrice: prices.yearlyPrice,
    }
    lab.priceComputeYearly = lab.selectedCompute.reduce((acc, c) => acc + (c.yearlyPrice || 0), 0)
    lab.numCompute = lab.selectedCompute.length
    this.itemsComputeExport[labId] = lab.selectedCompute
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.updateTotalBreakdown()
    this.saveState()
  },

  removeComputeFromLab(labId: number, computeId: number) {
    const lab = this.labs.find(l => l.id === labId)
    if (!lab) return
    lab.selectedCompute = lab.selectedCompute?.filter(c => c.id !== computeId) || []
    lab.priceComputeYearly = lab.selectedCompute.reduce((acc, c) => acc + (c.yearlyPrice || 0), 0)
    lab.numCompute = lab.selectedCompute.length
    this.itemsComputeExport[labId] = lab.selectedCompute
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.updateTotalBreakdown()
    this.saveState()
  },

  /* ------------------------- Lab sums / helpers ------------------------- */
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
    if (!lab) return { size: 0, price: 0 }
    const size = lab.selectedStorage?.reduce((a, b) => a + (b.size || 0), 0) || 0
    const price = lab.selectedStorage?.reduce((a, b) => a + (b.price || 0), 0) || 0
    return { size, price }
  },

  /* ------------------------- persisted state helpers ------------------------- */
  saveState() {
    if (ISSERVER) return
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

  loadState() {
    if (ISSERVER) return
    try {
      const saved = localStorage.getItem("pricingEstimatorState")
      if (!saved) return
      this.isLoadingPriseEstimator = true
      const state = JSON.parse(saved)
      this.labs = (state.labs || []).map((lab: any) => ({
        id: lab.id ?? this.generateLabId(),
        title: lab.title,
        storage: lab.storage || 0,
        priceStorage: lab.priceStorage || 0,
        priceComputeYearly: lab.priceComputeYearly || 0,
        numCompute: lab.numCompute || 0,
        selectedCompute: lab.selectedCompute || [],
        selectedStorage: lab.selectedStorage || [],
      }))
      this.totals.computeCost = this.labs.reduce((sum, lab) => sum + (lab.priceComputeYearly || 0), 0)
      this.totals.storageCostByType = this.calculateTotalStorageCost()
      this.updateTotalBreakdown()
      this.isLoadingPriseEstimator = false
    } catch (err) {
      console.error("Failed to load state:", err)
      this.isLoadingPriseEstimator = false
    }
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
      id: this.generateLabId(),
      title: lab?.title || "Lab",
      storage: lab?.storage || 0,
      priceStorage: lab?.priceStorage || 0,
      priceComputeYearly: lab?.priceComputeYearly || 0,
      numCompute: lab?.numCompute || 0,
      selectedCompute: lab?.selectedCompute || [],
      selectedStorage: lab?.selectedStorage || [],
    }
    this.labs.push(newLab)
    this.updateTotalBreakdown()
    this.saveState()
  },

  updateLabCompute(id: number, payload: UpdateComputePayload) {
    const lab = this.labs.find(l => l.id === id)
    if (!lab) return
    lab.priceComputeYearly = Number(payload.yearlyPrice)
    lab.numCompute = Number(payload.numCompute)
    lab.selectedCompute = payload.selectedCompute
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.itemsComputeExport[id] = payload.selectedCompute
    this.updateTotalBreakdown()
    this.saveState()
  },

  updateLabStorage(id: number, payload: UpdateStoragePayload) {
    const lab = this.labs.find(l => l.id === id)
    if (!lab) return
    lab.storage = payload.size
    lab.priceStorage = payload.price
    lab.selectedStorage = payload.selectedStorage
    this.totals.storageCostByType = this.calculateTotalStorageCost()
    this.itemsStorageExport[id] = payload.selectedStorage
    this.updateTotalBreakdown()
    this.saveState()
  },

  removeLab(id: number) {
    this.labs = this.labs.filter(l => l.id !== id)
    delete this.itemsComputeExport[id]
    delete this.itemsStorageExport[id]
    this.totals.computeCost = this.labs.reduce((sum, l) => sum + (l.priceComputeYearly || 0), 0)
    this.totals.storageCostByType = this.calculateTotalStorageCost()
    this.updateTotalBreakdown()
    this.saveState()
  },

  updateTotalBreakdown() {
    const priceItems: TotalPriceItem[] = []

    if (this.labs.length > 0 && this.catalogue.labPrices.length > 0) {
      this.labs.forEach(lab => {
        priceItems.push({
          name: lab.title,
          units: 1,
          price: this.catalogue.labPrices[0]["price.nok.ex.vat"],
        })
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
})
