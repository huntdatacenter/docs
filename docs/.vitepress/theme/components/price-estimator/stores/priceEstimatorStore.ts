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
    let saved = false

    if (!ISSERVER) {
      try {
        const savedJson = localStorage.getItem("hunt-cloud-estimator-state")
        if (savedJson) {
          const state = JSON.parse(savedJson)
          if (state.labs && Array.isArray(state.labs)) {
            this.labs = []

            for (const lab of state.labs) {
              const newLabId = this.labs.length
              this.labs.push({
                id: newLabId,
                title: lab.title,
                selectedCompute: [],
                selectedStorage: [],
                // @ts-ignore
                subscriptionType: lab.subscriptionType,
              })

              if (lab.selectedCompute) {
                for (const comp of lab.selectedCompute) {
                  this.addComputeToLab(newLabId, {
                    name: comp.name,
                    flavor: comp.flavor,
                    core_count: comp.core_count,
                    ram: comp.ram,
                    type: comp.type,
                    gpu: comp.gpu,
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
            saved = true
          }
        }
      } catch (err) {
        console.error("Failed to load state:", err)
      }
    }

    this.updateTotalSummary()
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
    if (this.isInitializingPriseEstimator || ISSERVER) return

    try {
      const stateToSave = {
        labs: this.labs,
      }
      localStorage.setItem("hunt-cloud-estimator-state", JSON.stringify(stateToSave))
    } catch (err) {
      console.error("Failed to save state:", err)
    }
  },

  /* Lab helpers */
  addLab(payload: {
    name: string
    subscriptionType: string
    machineFlavor: string
    machineSubscription: string
    hddSize: number
    nvmeSize: number
  }) {
    const newLab: LabCard = {
      id: this.labs.length,
      title: payload.name,
      selectedCompute: [],
      selectedStorage: [],
      // @ts-ignore
      subscriptionType: payload.subscriptionType,
    }

    // Add compute
    const machineInfo = this.catalogue.machinePrices.find(
      (item: MachineFlavor) => item["value"] === payload.machineFlavor,
    )

    if (machineInfo) {
      const prices = this.getComputePriceFromCatalogue(payload.machineFlavor, payload.machineSubscription)

      const machineTitle = machineInfo["title"].split(" - ")[1].split(" / ")
      const coreCount = parseInt(machineTitle[0].split(" ")[0])
      const ram = parseInt(machineTitle[1].split(" ")[0])
      const unit: ComputeUnit = {
        id: 0,
        name: "machine-1",
        flavor: payload.machineFlavor,
        core_count: coreCount,
        ram,
        type: payload.machineSubscription as SubscriptionType,
        monthlyPrice: prices.monthlyPrice,
        yearlyPrice: prices.yearlyPrice,
      }
      newLab.selectedCompute.push(unit)
    }

    // Add HDD storage
    if (payload.hddSize > 0) {
      const hddPrices = this.getStoragePriceFromCatalogue("HDD", payload.hddSize)
      if (hddPrices) {
        newLab.selectedStorage.push({
          id: 0,
          name: "volume-hdd",
          usage: "Archive",
          type: "HDD",
          size: payload.hddSize,
          monthlyPrice: hddPrices.monthlyPrice,
          yearlyPrice: hddPrices.yearlyPrice,
        })
      }
    }

    // Add NVME storage
    if (payload.nvmeSize > 0) {
      const nvmePrices = this.getStoragePriceFromCatalogue("NVME", payload.nvmeSize)
      if (nvmePrices) {
        newLab.selectedStorage.push({
          id: newLab.selectedStorage.length,
          name: "volume-nvme",
          usage: "Work",
          type: "NVME",
          size: payload.nvmeSize,
          monthlyPrice: nvmePrices.monthlyPrice,
          yearlyPrice: nvmePrices.yearlyPrice,
        })
      }
    }

    // Update
    this.labs.push(newLab)
    this.saveStateToLocal()
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

    if (!ISSERVER) localStorage.removeItem("hunt-cloud-estimator-state")
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
    const summary = {
      labSubscriptions: {
        "1Y": { units: 0, price: 0 },
        "3Y": { units: 0, price: 0 },
      },
      allCompute: { units: 0, price: 0 },
      allStorage: {},
    }

    if (this.labs.length > 0 && this.catalogue.labPrices.length > 0) {
      this.labs.forEach(lab => {
        // @ts-ignore
        const type = lab.subscriptionType as "1Y" | "3Y"
        const priceItem = this.catalogue.labPrices.find(p => p["service.commitment"] === type)
        console.log(summary.labSubscriptions[type])
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
    console.log("SUMMARY", storageSum)
    summary.allStorage = storageSum
    console.log("FINAL SUMMARY", summary)
    return summary
  },

  exportItems() {
    const labsToExport = this.labs.map(lab => ({
      id: lab.id,
      name: lab.title,
      // @ts-ignore
      subscriptionType: lab.subscriptionType,
      compute: lab.selectedCompute.map(c => ({
        id: c.id,
        name: c.name,
        flavor: c.flavor,
        core_count: c.core_count,
        ram: c.ram,
        gpu: c.gpu,
        type: c.type,
      })),
      storage: lab.selectedStorage.map(s => ({
        id: s.id,
        name: s.name,
        usage: s.usage,
        type: s.type,
        size: s.size,
      })),
    }))

    const exportData = {
      version: "1.0",
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

      reader.onload = e => {
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
                const required = ["name", "flavor", "core_count", "ram", "type"]
                const missing = required.filter(
                  field => comp[field] === undefined || comp[field] === null || comp[field] === "",
                )
                if (missing.length > 0) {
                  throw new Error(
                    `Invalid compute item at index ${compIndex} in lab '${lab.name}': Missing fields: ${missing.join(", ")}`,
                  )
                }
              })
            }

            if (lab.storage) {
              if (!Array.isArray(lab.storage)) throw new Error(`Invalid lab '${lab.name}': 'storage' must be an array`)
              lab.storage.forEach((store: any, storeIndex: number) => {
                const required = ["name", "usage", "type", "size"]
                const missing = required.filter(
                  field => store[field] === undefined || store[field] === null || store[field] === "",
                )
                if (missing.length > 0) {
                  throw new Error(
                    `Invalid storage item at index ${storeIndex} in lab '${lab.name}': Missing fields: ${missing.join(", ")}`,
                  )
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
              // @ts-ignore
              subscriptionType: labData.subscriptionType,
            })

            if (labData.compute) {
              for (const comp of labData.compute) {
                this.addComputeToLab(newLabId, {
                  name: comp.name,
                  flavor: comp.flavor,
                  core_count: comp.core_count,
                  ram: comp.ram,
                  type: comp.type,
                  gpu: comp.gpu,
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
