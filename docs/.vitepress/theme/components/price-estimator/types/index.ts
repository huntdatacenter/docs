export interface ComputeUnit {
  id: number
  name: string
  flavor: string
  core_count: number
  ram: number
  gpu: string | null
  type: SubscriptionType
  monthlyPrice: number | string
  yearlyPrice: number | string
}
export interface ComputeLabSum {
  monthlyPrice: number
  yearlyPrice: number
  ram: number
  cpu_count: number
}

export type SubscriptionType = "COMMITMENT_1Y" | "COMMITMENT_3Y" | "ONDEMAND" | "SPOT"

export interface StorageUnit {
  id: number
  name: string
  usage: StorageUsageType
  type: StorageType
  size: number
  price: number
}

export type StorageUsageType = "Archive" | "Work" | "Scratch" | "Home"

export type StorageType = "HDD" | "NVME"

export interface StorageLabSum {
  size: number
  type: string | null
  price: number
}

export interface PriceListItem {
  "service.group": string
  "service.family": string
  "service.unit": string
  "service.level": string
  "service.commitment"?: string
  "price.nok.ex.vat": number
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

export interface LabCard {
  id: number
  title: string
  storage: number
  priceStorage: number
  priceComputeYearly: number
  numCompute: number
  initSelectedCompute?: ComputeUnit[] // initSelectedCompute would be better?
  initSelectedStorage?: StorageUnit[] // same here
  selectedCompute?: ComputeUnit[] // selectedCompute ?
  selectedStorage?: StorageUnit[] // selectedStorage
}

export interface TotalPriceItem {
  name: string
  units: number | string
  price: number
}

export interface MachineFormData {
  id: number | null
  name: string | null
  flavor: string | null
  gpu: string | null
  subscription: SubscriptionType | null
}

export interface StorageFormData {
  id: number | null
  name: string | null
  usage: StorageUsageType
  type: StorageType
  size: number
}

export interface UpdateComputePayload {
  monthlyPrice: number
  yearlyPrice: number
  numCompute: number
  selectedCompute: ComputeUnit[] // selectedCompute
}

export interface UpdateStoragePayload {
  size: number
  price: number
  selectedStorage: StorageUnit[] // same here
}
