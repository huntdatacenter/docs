<script setup>
defineOptions({
  name: "AccessIntro",
})

// Props definition
const props = defineProps({
  username: { type: String, default: null },
  labName: { type: String, default: null },
  ipAddress: { type: String, default: null },
})

// Methods (though copyText isn't used in the template, keeping for compatibility)
const copyText = async text => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text || "")
    } else {
      console.warn("Clipboard API not available")
    }
  } catch (error) {
    console.error("Failed to copy text:", error)
  }
}
</script>

<template>
  <v-row justify="center" class="pt-4 pb-4 pr-1 pl-1">
    <v-col cols="10">
      These are the essential access credentials. Follow the guides below to configure your access.
    </v-col>
    <v-col cols="4">
      <CopyTextField :v-model="username" label="Username" placeholder="Your link is missing access token" prefix="" />
    </v-col>
    <v-col cols="4">
      <CopyTextField :v-model="labName" label="Lab name" placeholder="Your link is missing access token" prefix="" />
    </v-col>
    <v-col cols="4">
      <CopyTextField
        :v-model="ipAddress"
        label="Lab IP Address"
        placeholder="Your link is missing access token"
        prefix=""
      />
    </v-col>
  </v-row>
</template>
