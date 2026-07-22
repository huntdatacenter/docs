// src/stores/pricingEstimatorStore.ts
import { reactive } from "vue"
import {
  type LabCard,
  type ComputeUnit,
  type StorageUnit,
  type StorageType,
  type PriceListItem,
  type GpuModel,
  type MachineType,
  type Catalogue,
  type SubscriptionType,
  storageTypes,
  StorageCostByType,
  LocalStorageError,
  LabSubscriptionType,
} from "../types/index.js"
import pricesApi from "../api/pricesApi.js"
import { StorageUsageType } from "../types/index"

const ISSERVER = typeof window === "undefined"

const VERSION = "1.2"

export const priceEstimatorStore = reactive({
  /* State */

  isInitializingPriseEstimator: false,
  labs: [] as LabCard[],
  catalogue: {
    computePrices: [] as PriceListItem[],
    storagePrices: [] as PriceListItem[],
    gpuPrices: [] as PriceListItem[],
    machinePrices: [] as MachineType[],
    availableGpus: [] as GpuModel[],
    labPrices: [] as PriceListItem[],
  } as Catalogue,

  /* Generic Helper */

  async initializePriceEstimatorStore() {
    this.isInitializingPriseEstimator = true

    await this.getCatalogueAPI()

    // Load saved data from localstorage
    let loadingError: LocalStorageError = { status: false }

    if (!ISSERVER) {
      try {
        const savedJson = localStorage.getItem("hunt-cloud-estimator-state")
        if (savedJson) {
          const state = JSON.parse(savedJson)
          if (state.labs && Array.isArray(state.labs) && state.version == VERSION) {
            this.labs = []

            for (const lab of state.labs as LabCard[]) {
              const newLabId = this.labs.length
              this.labs.push({
                id: newLabId,
                title: lab.title,
                selectedCompute: [],
                selectedStorage: [],
                subscription: lab.subscription,
                collapse: lab.collapse,
              })

              if (lab.selectedCompute) {
                for (const comp of lab.selectedCompute) {
                  this.addComputeToLab(newLabId, {
                    name: comp.name,
                    machine_type: comp.machine_type,
                    core_count: comp.core_count,
                    ram: comp.ram,
                    subscription: comp.subscription,
                    gpu: comp.gpu,
                    gpu_count: comp.gpu_count,
                    isDefault: comp.isDefault,
                  })
                }
              }

              if (lab.selectedStorage) {
                for (const store of lab.selectedStorage) {
                  this.addStorageToLab(newLabId, {
                    name: store.name,
                    usage: store.usage,
                    type: store.type,
                    size: store.size,
                  })
                }
              }
            }
          } else {
            loadingError.status = true
            loadingError.message = "Failed to load the state of price estimator: config structure is wrong"
          }
        }
      } catch (err) {
        console.error("Failed to load state:", err)
        loadingError.status = true
        loadingError.message = "Failed to load the state of price estimator: Error"
      }
    }

    this.updateTotalSummary()
    this.isInitializingPriseEstimator = false
    return loadingError
  },

  async getCatalogueAPI() {
    // Get price list from the API
    const priceListPromise = pricesApi.getPriceList().then((json: PriceListItem[]) => {
      this.catalogue.computePrices = json.filter((item) => item["service.group"] === "cpu").map(this.convertPricesToYearly)
      this.catalogue.storagePrices = json.filter((item) => item["service.family"] === "store")
      this.catalogue.gpuPrices = json
        .filter((item) => item["service.group"] === "gpu")
        .map((item) => ({ ...item, "service.unit": item["service.unit"]?.replace("nvidia.", "") }))
        .map(this.convertPricesToYearly)
      this.catalogue.labPrices = json.filter((item) => item["service.group"] === "lab")
    })

    const gpusPromise = pricesApi.getAvailableGPUS().then((gpus: GpuModel[]) => {
      gpus = gpus.map((item) => ({
        ...item,
        type: item.type.replace("nvidia.", ""),
      }))
      this.catalogue.availableGpus = gpus
    })

    const machinesPromise = pricesApi.getMachineTypes().then((machine: MachineType[]) => {
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
    if (this.isInitializingPriseEstimator || ISSERVER) return

    try {
      const stateToSave = {
        labs: this.labs,
        version: VERSION,
      }
      localStorage.setItem("hunt-cloud-estimator-state", JSON.stringify(stateToSave))
    } catch (err) {
      console.error("Failed to save state:", err)
    }
  },

  /* Lab helpers */
  addLab(payload: {
    name: string
    subscription: string
    machineType: string
    machineSubscription: string
    isDefault: boolean
    archive: number
    work: number
    scratch: number
    collapse: boolean
  }) {
    const newLab: LabCard = {
      id: this.labs.length,
      title: payload.name,
      selectedCompute: [],
      selectedStorage: [],
      subscription: payload.subscription as LabSubscriptionType,
      collapse: payload.collapse,
    }

    // Add compute
    const machineInfo = this.catalogue.machinePrices.find((item: MachineType) => item["value"] === payload.machineType)

    if (machineInfo) {
      const prices = this.getComputePriceFromCatalogue(payload.machineType, payload.machineSubscription)

      const machineTitle = machineInfo["title"].split(" - ")[1].split(" / ")
      const coreCount = parseInt(machineTitle[0].split(" ")[0])
      const ram = parseInt(machineTitle[1].split(" ")[0])
      const unit: ComputeUnit = {
        id: 0,
        name: `${payload.name.toLowerCase().replace(" ", "-")}-home`,
        machine_type: payload.machineType,
        core_count: coreCount,
        ram,
        subscription: payload.machineSubscription as SubscriptionType,
        monthlyPrice: prices.monthlyPrice,
        yearlyPrice: prices.yearlyPrice,
        isDefault: payload.isDefault,
      }
      newLab.selectedCompute.push(unit)
    }

    // Add Archieve storage
    const archivePrice = this.getStoragePriceFromCatalogue("HDD", payload.archive)
    if (archivePrice) {
      newLab.selectedStorage.push({
        id: 0,
        name: "volume-1",
        usage: "Archive",
        type: "HDD",
        size: payload.archive,
        monthlyPrice: archivePrice.monthlyPrice,
        yearlyPrice: archivePrice.yearlyPrice,
      })
    }

    // Add Work storage
    const workPrice = this.getStoragePriceFromCatalogue("HDD", payload.work)
    if (workPrice) {
      newLab.selectedStorage.push({
        id: 1,
        name: "volume-2",
        usage: "Work",
        type: "HDD",
        size: payload.work,
        monthlyPrice: workPrice.monthlyPrice,
        yearlyPrice: workPrice.yearlyPrice,
      })
    }

    // Add Scratch storage
    const scratchPrice = this.getStoragePriceFromCatalogue("HDD", payload.scratch)
    if (scratchPrice) {
      newLab.selectedStorage.push({
        id: 2,
        name: "volume-3",
        usage: "Scratch",
        type: "HDD",
        size: payload.scratch,
        monthlyPrice: scratchPrice.monthlyPrice,
        yearlyPrice: scratchPrice.yearlyPrice,
      })
    }

    // Update
    this.labs.push(newLab)
    this.saveStateToLocal()
  },

  removeLab(labId: number) {
    this.labs = this.labs.filter((lab) => lab.id !== labId)
  },

  getLabSubscription(period: string) {
    const price = priceEstimatorStore.catalogue.labPrices.find((labPrice) => labPrice["service.commitment"] === period)
    return price?.["price.nok.ex.vat"]
  },

  getLabComputePriceSum(labId: number) {
    const lab = this.getLab(labId)
    if (!lab) {
      return { monthlyCostTotal: 0, yearlyCostTotal: 0 }
    }

    const monthlyCostTotal = lab.selectedCompute.reduce((a, b) => a + b.monthlyPrice, 0)
    const yearlyCostTotal = lab.selectedCompute.reduce((a, b) => a + b.yearlyPrice, 0)

    return { monthlyCostTotal, yearlyCostTotal }
  },

  getLabStoragePriceSum(labId: number) {
    let results = { yearlyCostTotal: 0, monthlyCostTotal: 0 }
    const lab = this.getLab(labId)
    if (!lab) {
      return results
    }

    const monthlyCostTotal = lab.selectedStorage.reduce((sum, s) => sum + s.monthlyPrice, 0)
    const yearlyCostTotal = lab.selectedStorage.reduce((sum, s) => sum + s.yearlyPrice, 0)
    results = { monthlyCostTotal: monthlyCostTotal, yearlyCostTotal: yearlyCostTotal }

    return results
  },

  getLabStoragePriceSumByType(labId: number): StorageCostByType {
    const results: StorageCostByType = {
      HDD: { size: 0, yearlyCostTotal: 0, monthlyCostTotal: 0 },
      NVME: { size: 0, yearlyCostTotal: 0, monthlyCostTotal: 0 },
    }

    const lab = this.getLab(labId)
    if (!lab) {
      return results
    }

    for (const storageType of storageTypes) {
      const storages = lab.selectedStorage.filter((str) => str.type === storageType)
      const size = storages.reduce((sum, s) => sum + s.size, 0)
      const yearlyCostTotal = storages.reduce((sum, s) => sum + s.yearlyPrice, 0)
      const monthlyCostTotal = storages.reduce((sum, s) => sum + s.monthlyPrice, 0)
      results[storageType] = { size, yearlyCostTotal, monthlyCostTotal }
    }

    return results
  },

  clearAllLabs() {
    this.labs = []

    if (!ISSERVER) localStorage.removeItem("hunt-cloud-estimator-state")
  },

  updateLabTitle(id: number, title: string) {
    const lab = this.labs.find((l) => l.id === id)
    if (lab) {
      lab.title = title
      this.saveStateToLocal()
    }
  },

  updateLabCollapse(id: number, collapse: boolean) {
    const lab = this.labs.find((l) => l.id === id)
    if (lab) {
      lab.collapse = collapse
      this.saveStateToLocal()
    }
  },

  updateLabSubscription(id: number, subscription: string) {
    const lab = this.labs.find((l) => l.id === id)
    if (lab) {
      lab.subscription = subscription as LabSubscriptionType
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
        (item: PriceListItem) => item["service.group"] === blockType && item["service.level"] === "COMMITMENT" && item["service.commitment"] === "1Y",
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
    const lab = this.getLab(labId)
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

  editStorageInLab(labId: number, storageId: number, payload: { name: string; usage: StorageUsageType; type: StorageType; size: number }) {
    const lab = this.getLab(labId)
    if (!lab) return

    const idx = lab.selectedStorage?.findIndex((s) => s.id === storageId) ?? -1
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
    const lab = this.getLab(labId)
    if (!lab) return

    lab.selectedStorage = lab.selectedStorage?.filter((s) => s.id !== storageId)

    this.sortIndex(labId)
    this.saveStateToLocal()
  },

  getStoragePriceFromCatalogue(type: string, size: number) {
    // This gets default storage value. No discount.

    let totalYearlyPrice = 0
    let totalMonthlyPrice = 0

    if (type === "HDD") {
      const defaultHDDUnit = this.catalogue.storagePrices.find(
        (item: PriceListItem) =>
          item["service.group"] === "block.hdd.rep" && item["service.unit"] === "First 10 TB" && item["service.level"] === "COMMITMENT" && item["service.commitment"] === "1Y",
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
          item["service.group"] === "block.nvme.rep" && item["service.unit"] === "First 10 TB" && item["service.level"] === "COMMITMENT" && item["service.commitment"] === "1Y",
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

  getComputePriceFromCatalogue(machineType: string, type: string, machineWithGpu?: string, gpuCount: number = 1) {
    let totalYearlyPrice = 0
    let totalMonthlyPrice = 0
    let mainMachineTypePrice: number | undefined
    let gpuYearly: number | undefined

    if (type.includes("COMMITMENT")) {
      if (type === "COMMITMENT_3Y") {
        const found3Y = this.catalogue.computePrices.find((p) => p["service.unit"] === machineType && p["service.level"] === "COMMITMENT" && p["service.commitment"] === "3Y")
        if (found3Y) {
          mainMachineTypePrice = found3Y["price.nok.ex.vat"] / 3
        }
      } else {
        mainMachineTypePrice = this.catalogue.computePrices.find(
          (p) => p["service.unit"] === machineType && p["service.level"] === "COMMITMENT" && p["service.commitment"] === "1Y",
        )?.["price.nok.ex.vat"]
      }
    } else {
      const foundPrice = this.catalogue.computePrices.find((p) => p["service.unit"] === machineType && p["service.level"] === type)
      mainMachineTypePrice = foundPrice?.["price.nok.ex.vat"]
    }

    if (mainMachineTypePrice) {
      totalYearlyPrice += mainMachineTypePrice
    }

    totalMonthlyPrice = Number(totalYearlyPrice / 12)

    if (machineWithGpu) {
      const gpuPrice = this.catalogue.gpuPrices.find((p) => p["service.unit"] === machineWithGpu && p["service.level"] === "ONDEMAND")
      if (gpuPrice) {
        gpuYearly = gpuPrice["price.nok.ex.vat"] * gpuCount
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
    payload: { name: string; machine_type: string; core_count: number; ram: number; subscription: string; gpu?: string; gpu_count?: number; isDefault: boolean },
  ) {
    const lab = this.getLab(labId)
    if (!lab) return

    const compId = lab.selectedCompute?.length || 0
    const prices = this.getComputePriceFromCatalogue(payload.machine_type, payload.subscription, payload.gpu, payload.gpu_count)
    const newCompute: ComputeUnit = {
      id: compId,
      name: payload.name,
      machine_type: payload.machine_type,
      core_count: payload.core_count,
      gpu: payload.gpu,
      gpu_count: payload.gpu_count,
      ram: payload.ram,
      subscription: payload.subscription as SubscriptionType,
      monthlyPrice: prices.monthlyPrice,
      yearlyPrice: prices.yearlyPrice,
      isDefault: payload.isDefault,
    }
    lab.selectedCompute = lab.selectedCompute || []
    lab.selectedCompute.push(newCompute)

    this.saveStateToLocal()
  },

  editComputeInLab(
    labId: number,
    computeId: number,
    payload: { name: string; machine_type: string; core_count: number; ram: number; subscription: string; gpu?: string; gpuCount?: number; isDefault: boolean },
  ) {
    const lab = this.getLab(labId)
    if (!lab || !lab.selectedCompute) return

    const idx = lab.selectedCompute.findIndex((c) => c.id === computeId)
    if (idx === -1) return

    const prices = this.getComputePriceFromCatalogue(payload.machine_type, payload.subscription, payload.gpu, payload.gpuCount)
    lab.selectedCompute[idx] = {
      id: computeId,
      name: payload.name,
      machine_type: payload.machine_type,
      core_count: payload.core_count,
      gpu: payload.gpu,
      gpu_count: payload.gpuCount,
      ram: payload.ram,
      subscription: payload.subscription as SubscriptionType,
      monthlyPrice: prices.monthlyPrice,
      yearlyPrice: prices.yearlyPrice,
      isDefault: payload.isDefault,
    }

    this.saveStateToLocal()
  },

  removeComputeFromLab(labId: number, computeId: number) {
    const lab = this.getLab(labId)
    if (!lab) return
    lab.selectedCompute = lab.selectedCompute?.filter((c) => c.id !== computeId)
    this.sortIndex(labId)
    this.saveStateToLocal()
  },

  getLab(labId: number) {
    const lab = this.labs.find((l) => l.id === labId)
    return lab
  },

  sortIndex(labId: number) {
    const lab = this.getLab(labId)
    if (!lab) return
    lab.selectedCompute = lab.selectedCompute.sort((a, b) => a.id - b.id).map((unit, index) => ({ ...unit, id: index }))
    lab.selectedStorage = lab.selectedStorage.sort((a, b) => a.id - b.id).map((unit, index) => ({ ...unit, id: index }))
  },

  /* Total Helpers */
  updateTotalSummary() {
    // Get lab subscriptions
    const summary = {
      labSubscriptions: {
        "1Y": { units: 0, price: 0 },
        "3Y": { units: 0, price: 0 },
      },
      allCompute: { units: 0, price: 0 },
      allStorage: {},
    }

    if (this.labs.length > 0 && this.catalogue.labPrices.length > 0) {
      this.labs.forEach((lab) => {
        const type = lab.subscription
        const priceItem = this.catalogue.labPrices.find((p) => p["service.commitment"] === type)
        summary.labSubscriptions[type].units += 1
        if (priceItem) {
          summary.labSubscriptions[type].price += priceItem["price.nok.ex.vat"]
        } else {
          summary.labSubscriptions[type].price += this.catalogue.labPrices[0]["price.nok.ex.vat"]
        }
      })
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
    summary.allStorage = storageSum
    return summary
  },

  exportItems() {
    const labsToExport = this.labs.map((lab) => ({
      id: lab.id,
      name: lab.title,
      subscription: lab.subscription,
      compute: lab.selectedCompute.map((c) => ({
        id: c.id,
        name: c.name,
        machine_type: c.machine_type,
        core_count: c.core_count,
        ram: c.ram,
        gpu: c.gpu,
        gpu_count: c.gpu_count,
        subscription: c.subscription,
      })),
      storage: lab.selectedStorage.map((s) => ({
        id: s.id,
        name: s.name,
        usage: s.usage,
        type: s.type,
        size: s.size,
      })),
      collapse: lab.collapse === undefined ? true : lab.collapse,
    }))

    const exportData = {
      version: VERSION,
      labs: labsToExport,
    }

    const jsonString = JSON.stringify(exportData, null, 2)
    const blob = new Blob([jsonString], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "hunt-cloud-estimate.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  },

  async importLabs(file: File) {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string)

          // Validation
          if (!data.version) throw new Error("Invalid JSON format: Missing version")
          if (!Array.isArray(data.labs)) throw new Error("Invalid JSON format: 'labs' must be an array")

          data.labs.forEach((lab: any, labIndex: number) => {
            if (!lab.name) throw new Error(`Invalid lab at index ${labIndex}: Missing 'name'`)

            if (lab.compute) {
              if (!Array.isArray(lab.compute)) throw new Error(`Invalid lab '${lab.name}': 'compute' must be an array`)
              lab.compute.forEach((comp: any, compIndex: number) => {
                const required = ["name", "machine_type", "core_count", "ram", "subscription"]
                const missing = required.filter((field) => comp[field] === undefined || comp[field] === null || comp[field] === "")
                if (missing.length > 0) {
                  throw new Error(`Invalid compute item at index ${compIndex} in lab '${lab.name}': Missing fields: ${missing.join(", ")}`)
                }
              })
            }

            if (lab.storage) {
              if (!Array.isArray(lab.storage)) throw new Error(`Invalid lab '${lab.name}': 'storage' must be an array`)
              lab.storage.forEach((store: any, storeIndex: number) => {
                const required = ["name", "usage", "type", "size"]
                const missing = required.filter((field) => store[field] === undefined || store[field] === null || store[field] === "")
                if (missing.length > 0) {
                  throw new Error(`Invalid storage item at index ${storeIndex} in lab '${lab.name}': Missing fields: ${missing.join(", ")}`)
                }
              })
            }
          })

          this.isInitializingPriseEstimator = true
          this.clearAllLabs()

          for (const labData of data.labs) {
            const newLabId = this.labs.length

            this.labs.push({
              id: newLabId,
              title: labData.name,
              selectedCompute: [],
              selectedStorage: [],
              subscription: labData.subscription,
              collapse: labData.collapse,
            })

            if (labData.compute) {
              for (const comp of labData.compute) {
                let isDefault = false
                if (comp.name === `${labData.name.toLowerCase().replace(" ", "-")}-home`) {
                  isDefault = true
                }

                this.addComputeToLab(newLabId, {
                  name: comp.name,
                  machine_type: comp.machine_type,
                  core_count: comp.core_count,
                  ram: comp.ram,
                  subscription: comp.subscription,
                  gpu: comp.gpu,
                  gpu_count: comp.gpu_count,
                  isDefault: isDefault,
                })
              }
            }

            if (labData.storage) {
              for (const store of labData.storage) {
                this.addStorageToLab(newLabId, {
                  name: store.name,
                  usage: store.usage,
                  type: store.type,
                  size: store.size,
                })
              }
            }
          }

          this.updateTotalSummary()
          this.isInitializingPriseEstimator = false
          resolve()
        } catch (err) {
          this.isInitializingPriseEstimator = false
          reject(err)
        }
      }

      reader.onerror = () => {
        this.isInitializingPriseEstimator = false
        reject(new Error("Failed to read file"))
      }

      reader.readAsText(file)
    })
  },
})
