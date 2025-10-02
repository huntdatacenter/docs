<script lang="ts">
import type {
  ComputeUnit,
  PriceListItem,
  GpuModel,
  MachineFlavor,
  MachineFormData,
} from "./types"

export default {
  name: "Machine",
  props: {
    computeId: { type: Number, default: () => 0 },
    flavors: { type: Array as () => PriceListItem[], default: () => [] },
    gpus: { type: Array as () => PriceListItem[], default: () => [] },
    machines: { type: Array as () => MachineFlavor[], default: () => [] },
    availableGpus: { type: Array as () => GpuModel[], default: () => [] },
    selectedRadio: { type: String, default: "1Y" },
    initialData: { type: Object as () => ComputeUnit | null, default: null },
  },

  emits: ["close", "open-snackbar"],

  data() {
    return {
      formData: {
        id: null,
        name: null,
        flavor: null,
        gpu: null,
        subscription: null,
      } as MachineFormData,
      overlay: true,
      subscriptions: [
        { text: "Commitment - 1 Year", value: "COMMITMENT_1Y" },
        { text: "Commitment - 3 Years", value: "COMMITMENT_3Y" },
        { text: "On demand", value: "ONDEMAND" },
        { text: "Spot", value: "SPOT" },
      ],
    }
  },

  computed: {
    getComputePriceYear(): string | number {
      if (!this.formData.flavor || !this.formData.subscription) {
        return 0
      }
      let price: number | undefined
      if (this.formData.subscription.includes("COMMITMENT")) {
        if (this.formData.subscription === "COMMITMENT_3Y") {
          const item = this.flavors.find(
            item =>
              item["service.unit"] === this.formData.flavor &&
              item["service.level"] === "COMMITMENT" &&
              item["service.commitment"] === "3Y",
          )
          price = item ? item["price.nok.ex.vat"] / 3 : undefined
        } else {
          const item = this.flavors.find(
            item =>
              item["service.unit"] === this.formData.flavor &&
              item["service.level"] === "COMMITMENT" &&
              item["service.commitment"] === "1Y",
          )
          price = item ? item["price.nok.ex.vat"] : undefined
        }
      } else {
        const item = this.flavors.find(
          item => item["service.unit"] === this.formData.flavor && item["service.level"] === this.formData.subscription,
        )
        price = item ? item["price.nok.ex.vat"] : undefined
      }
      return price ? Number(price).toFixed(2) : 0
    },
    getComputePriceMonth(): string | number {
      const yearly = Number(this.getComputePriceYear)
      return yearly ? Number(yearly / 12).toFixed(2) : 0
    },

    getGpuPriceYear(): string | number {
      if (!this.formData.gpu) {
        return 0
      }
      const price = this.gpus.find(
        item => item["service.unit"] === this.formData.gpu && item["service.level"] === "ONDEMAND"
      )
      return price ? Number(price["price.nok.ex.vat"]).toFixed(2) : 0
    },
    getGpuPriceMonth(): string | number {
      const yearlyGpu = Number(this.getGpuPriceYear)
      return yearlyGpu ? Number(yearlyGpu / 12).toFixed(2) : 0
    },
    getFlavors(): MachineFlavor[] {
      if (!this.formData.subscription) {
        return []
      }
      return this.machines.filter(item => item)
    },
    getGpus() {
      return this.availableGpus.map(item => {
        return {
          title: item["type"] + " - " + item["vram"] + " GB VRAM",
          value: item["type"],
        }
      })
    },
  },

  created() {
    if (this.initialData) {
      this.formData.id = this.initialData.id
      this.formData.name = this.initialData.name.replace(" (incl. GPU)", "")
      this.formData.subscription = this.initialData.type

      if (this.initialData.flavor.includes(" + ")) {
        const parts = this.initialData.flavor.split(" + ")
        this.formData.flavor = parts[0]
        this.formData.gpu = parts[1]
      } else {
        this.formData.flavor = this.initialData.flavor
        this.formData.gpu = this.initialData.gpu || null
      }
    } else {
      this.formData.id = this.computeId
      this.formData.name = `machine-${this.computeId}`
    }
  },

  methods: {
    getSummedPrice(num1: string | number, num2: string | number): number {
      return (Number(num1) + Number(num2))
    },
    close() {
      this.$emit("close")
    },
    save() {
      if (!this.formData.flavor) {
        this.$emit("open-snackbar", "No machine type selected")
        return
      }

      const name = this.formData.gpu ? `${this.formData.name} (incl. GPU)` : this.formData.name
      const monthlyPrice = this.getSummedPrice(this.getComputePriceMonth, this.getGpuPriceMonth)
      const yearlyPrice = this.getSummedPrice(this.getComputePriceYear, this.getGpuPriceYear)
      const machinetitle = this.machines
        .filter(item => item["value"] === this.formData.flavor)[0]
        ["title"].split(" - ")[1]
        .split(" / ")
      const core_count = parseInt(machinetitle[0].split(" ")[0])
      const ram = parseInt(machinetitle[1].split(" ")[0])
      const flavorWithGpu = this.formData.gpu ? this.formData.flavor + " + " + this.formData.gpu : this.formData.flavor
      this.$emit("close", {
        id: this.formData.id,
        name: name,
        flavor: this.formData.flavor ? flavorWithGpu : null,
        gpu: this.formData.gpu ? this.formData.gpu : null,
        core_count: core_count,
        ram: ram,
        monthlyPrice: monthlyPrice,
        yearlyPrice: yearlyPrice,
        type: this.formData.subscription,
      })
    },
  },
}
</script>

<template>
  <v-card light class="d-flex justify-center align-center">
    <v-card-title>
      <span class="text-h5">Add Compute</span>
    </v-card-title>
    <v-card-text style="width: 100%">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-text-field v-model="formData.name" label="Name" required variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="formData.subscription"
              :items="subscriptions"
              item-title="text"
              item-value="value"
              label="Subscription type"
              required
              variant="outlined"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="formData.flavor"
              :items="getFlavors"
              label="Machine type"
              variant="outlined"
              required
              :disabled="!formData.subscription"
              width="100%"
            >
              <template #item="{ item, props }">
                <VDivider v-if="'divider' in item.raw" />
                <VListSubheader v-else-if="'header' in item.raw" :title="item.raw.header" />
                <VListItem v-else v-bind="props" :title="item.title" :value="item.value" />
              </template>
            </v-autocomplete>
          </v-col>
          <v-col v-show="formData.flavor" cols="12" sm="6">
            <v-text-field
              v-model="getComputePriceMonth"
              label="Compute Price / Month"
              suffix="NOK ex. VAT"
              readonly
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col v-show="formData.flavor" cols="12" sm="6">
            <v-text-field
              v-model="getComputePriceYear"
              label="Compute Price / Year"
              suffix="NOK ex. VAT / Year"
              readonly
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="formData.gpu"
              :items="getGpus"
              label="GPU type (optional)"
              variant="outlined"
              clearable
              :disabled="!formData.subscription"
            ></v-select>
          </v-col>
          <v-col v-show="formData.gpu" cols="12" sm="6">
            <v-text-field
              v-model="getGpuPriceMonth"
              label="GPU Price / Month"
              suffix="NOK ex. VAT"
              readonly
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col v-show="formData.gpu" cols="12" sm="6">
            <v-text-field
              v-model="getGpuPriceYear"
              label="GPU Price / Year"
              suffix="NOK ex. VAT / Year"
              readonly
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red darken-2" text @click="close()"> Close </v-btn>
      <v-btn color="green darken-2" text @click="save()"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>
