<script>
import fetch from 'node-fetch';

export default {
  name: "MyIPAddress",
  data() {
    return {
      ipAddress: null,
    }
  },
  computed: {
    getMyIpaddress() {
      return this.ipAddress ? this.ipAddress : null
    },
    show() {
      return this.ipAddress && this.ipAddress.length > 3 ? true : false
    },
  },
  mounted() {},
  created() {
    fetch('https://ipecho.net/plain', {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "text/plain",
      },
    }).then(
      (response) => {
        return response.text()
      }
    ).then((data) => {
      this.ipAddress = data
    })
  },
};
</script>

<template>
  <div style="display: unset !important;">
    <strong><code v-if="show">{{ getMyIpaddress }}</code></strong>
    <a href="http://ip4.me/" target="_blank">
      <span v-if="show"> [ip4.me]</span><span v-else>ip4.me</span><span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span>
    </a>
  </div>
</template>
