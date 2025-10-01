//
import axios from "axios"

const price_list_url = "https://assets.hdc.ntnu.no/assets/prices/v5/hunt-cloud-pricelist-v5-0.json"

const gpu_models_url = "https://assets.hdc.ntnu.no/assets/js/gpus.json"

const machine_flavors_url = "https://assets.hdc.ntnu.no/assets/js/flavors.json"

export default {
  async getPriceList() {
    try {
      const res = await axios.get(price_list_url)
      // console.log("Fetched price list:", res.data)
      return res.data
    } catch (error) {
      console.error("Error fetching price list:", error)
      return []
    }
  },
  async getAvailableGPUS() {
    try {
      const res = await axios.get(gpu_models_url)
      return res.data
    } catch (error) {
      console.error("Error fetching available gpus:", error)
      return []
    }
  },
  async getMachineFlavors() {
    try {
      const response = await axios.get(machine_flavors_url)
      return response.data
    } catch (error) {
      console.error("Error fetching machine flavors:", error)
      return []
    }
  },
}
