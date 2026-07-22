/*

Definition

Price: Defined price from the catalogue API
Cost: Calculated amount of prices. Used for Summary.

*/

export type SubscriptionType = "COMMITMENT_1Y" | "COMMITMENT_3Y" | "ONDEMAND" | "SPOT"
export type LabSubscriptionType = "1Y" | "3Y"
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
  machine_type: string
  core_count: number
  ram: number
  gpu?: string
  gpu_count?: number
  subscription: SubscriptionType
  monthlyPrice: number
  yearlyPrice: number
  isDefault: boolean
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
  max: number
}

export interface MachineType {
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
  machinePrices: MachineType[]
  labPrices: PriceListItem[]
}

export interface LabCard {
  id: number
  title: string
  selectedCompute: ComputeUnit[]
  selectedStorage: StorageUnit[]
  subscription: LabSubscriptionType
  collapse: boolean
}

interface StoragePrice {
  size: number
  monthlyCostTotal: number
  yearlyCostTotal: number
}

export type StorageCostByType = {
  [key in StorageType]: StoragePrice
}

export interface MachineFormData {
  id?: number
  name?: string
  machine_type?: string
  gpu?: string
  gpu_count?: number
  subscription?: SubscriptionType
  isDefault?: boolean
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

export interface LocalStorageError {
  status: boolean
  message?: string
}
