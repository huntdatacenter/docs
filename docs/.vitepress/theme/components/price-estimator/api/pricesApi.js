// import data from './data.json';
import axios from "axios"

export default {
  async getPriceList() {
    try {
      const res = await axios.get("https://assets.hdc.ntnu.no/assets/prices/v5/hunt-cloud-pricelist-v5-0.json")
      console.log("Fetched price list:", res.data)
      return res.data
    } catch (error) {
      console.error("Error fetching price list:", error)
      return []
    }
  },
  async getAvailableGPUS() {
    try {
      const res = await axios.get("https://assets.hdc.ntnu.no/assets/js/gpus.json")
      return res.data
    } catch (error) {
      console.error("Error fetching available gpus:", error)
      return []
    }
  },
  async getMachineFlavors() {
    try {
      const response = await axios.get("https://assets.hdc.ntnu.no/assets/js/flavors.json")
      return response.data
    } catch (error) {
      console.error("Error fetching machine flavors:", error)
      return []
    }
  },
}
