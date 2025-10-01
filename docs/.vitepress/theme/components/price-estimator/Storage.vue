<script>
export default {
  name: "Storage",
  emits: ["close"],
  props: {
    storageId: { type: Number, default: () => 0 },
  },
  data: () => ({
    /* This is the form data that will be used to create the storage */
    /* Perhaps its possible to add different speeds to the storage */
    formData: {
      id: null,
      name: null,
      usage: "Archive",
      type: "HDD",
      size: 1,
    },
    overlay: true,
  }),

  created() {
    this.formData.id = this.storageId
    this.formData.name = `volume-${this.storageId}`
  },
  methods: {
    close() {
      this.$emit("close")
    },
    save() {
      this.$emit("close", {
        id: this.formData.id,
        name: this.formData.name,
        size: parseInt(this.formData.size),
        usage: this.formData.usage,
        type: this.formData.type,
      })
    },
  },
}
</script>

<template>
  <!-- <v-overlay v-model="overlay" class="d-flex justify-center align-center"> -->
  <v-card class="d-flex justify-center align-center">
    <v-card-title>
      <span class="headline">Storage</span>
    </v-card-title>
    <v-card-text style="width: 100%">
      <v-container>
        <v-row dense>
          <v-form @submit.prevent="save" style="width: 100%">
            <v-col cols="12">
              <v-text-field v-model="formData.name" label="Name" required variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                :items="['Archive', 'Work', 'Scratch', 'Home']"
                v-model="formData.usage"
                label="Usage"
                required
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                :items="['HDD', 'NVME']"
                v-model="formData.type"
                label="Type"
                required
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="formData.size"
                label="Size (TB)"
                hint="Enter the size of the storage in Terrabytes"
                persistent-hint
                type="number"
                :min="1"
                :max="100"
                :step="1"
                required
                suffix="TB"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-form>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red darken-2" text @click="close()"> Close </v-btn>
      <v-btn color="green darken-2" text @click="save()"> Save </v-btn>
    </v-card-actions>
  </v-card>
  <!-- </v-overlay> -->
</template>
