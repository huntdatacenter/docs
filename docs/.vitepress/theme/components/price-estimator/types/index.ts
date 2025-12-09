/*

Definition

Price: Defined price from the catalogue API
Cost: Calculated amount of prices. Used for Summary.

*/

export type SubscriptionType = "COMMITMENT_1Y" | "COMMITMENT_3Y" | "ONDEMAND" | "SPOT"
export type StorageUsageType = "Archive" | "Work" | "Scratch" | "Backup"
export const storageTypes = ["HDD", "NVME"] as const
export type StorageType = (typeof storageTypes)[number]

export interface PriceListItem {
  "service.group": string
  "service.family": string
  "service.unit": string
  "service.level": string
  "service.commitment"?: string
  "price.nok.ex.vat": number
}

export interface ComputeUnit {
  id: number
  name: string
  flavor: string
  core_count: number
  ram: number
  gpu?: string
  type: SubscriptionType
  monthlyPrice: number
  yearlyPrice: number
}

export interface StorageUnit {
  id: number
  name: string
  yearlyPrice: number
  monthlyPrice: number
  size: number
  type: StorageType
  usage: StorageUsageType
}

export interface GpuModel {
  type: string
  vram: number
}

export interface MachineFlavor {
  title: string
  value: string
  header?: string
  divider?: boolean
}

export interface Catalogue {
  computePrices: PriceListItem[]
  storagePrices: PriceListItem[]
  gpuPrices: PriceListItem[]
  availableGpus: GpuModel[]
  machinePrices: MachineFlavor[]
  labPrices: PriceListItem[]
}

export interface LabCard {
  id: number
  title: string
  selectedCompute: ComputeUnit[]
  selectedStorage: StorageUnit[]
  // Storage price changes based on the whole labs storages
}

interface StoragePrice {
  size: number
  monthlyCostTotal: number
  yearlyCostTotal: number
}

export type StorageCostByType = {
  [key in StorageType]: StoragePrice
}

interface CostSummaryEntry {
  units: number
  price: number
}

export interface CostSummary {
  [key: string]: CostSummaryEntry
}

export interface MachineFormData {
  id?: number
  name?: string
  flavor?: string
  gpu?: string
  subscription?: SubscriptionType
}

export interface StorageFormData {
  id?: number
  name?: string
  usage?: StorageUsageType
  type?: StorageType
  size?: number
}

export interface UpdateComputePayload {
  monthlyPrice: number
  yearlyPrice: number
  numCompute: number
  selectedCompute: ComputeUnit[]
}

export interface UpdateStoragePayload {
  size: number
  price: number
  selectedStorage: StorageUnit[]
}
