<script>

// Tooltip - info button
// 
// Import in other .vue components using:
//   Tooltip: () => import('./Tooltip.vue'),
// 
// Or simply use in markdown by adding:
//   <Tooltip text="Helpful text information or explanation related to the context on your page."></Tooltip>
// 
// TODO
// 1. fix CSS affecting block components (tip/warning/detail) and possibly other

import {
  VDialog,
  VBtn,
  VIcon,
  VCard,
  VCardText,
  VCardActions,
  VCardTitle,
  VDivider,
  VRow,
  VCol,
} from "vuetify/lib"

export default {
  name: "Tooltip",
  components: {
    VDialog,
    VBtn,
    VIcon,
    VCard,
    VCardText,
    VCardActions,
    VCardTitle,
    VDivider,
    VRow,
    VCol,
  },
  props: {
    // argument: { type: Object, default: null },
    title: { type: String, default: "Information" },
    text: { type: String, required: true },
  },
  data() {
    return {
      // item: null,
      dialog: false,
    }
  },
  computed: {
    // show() {
    //   return this.showItem
    // },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    
  },
};
</script>

<template>
  <div id="tooltip">
    <div class="tooltip-button">
      <button type="button" class="v-btn-tooltip" @click="dialog = true">
        <span class="v-btn__content-tooltip">
          <i aria-hidden="true" class="v-icon-tooltip material-icons">info</i>
        </span>
      </button>
    </div>
    <!-- <v-dialog
      v-model="dialog"
      max-width="600px"
      transition="dialog-bottom-transition"
    > -->
    <div v-show="dialog" role="dialog" aria-modal="true" class="v-dialog__content v-dialog__content--active" style="z-index: 202;">
      <div class="v-dialog v-dialog--active" style="transform-origin: center center; max-width: 600px;" tabindex="0">
        <div class="v-card v-sheet theme--light">
          <div class="v-card__title-tooltip">{{ title }}</div>
          <hr role="separator" aria-orientation="horizontal" class="mb-5 v-divider-tooltip">
          <div class="v-card-text-tooltip">
            <div class="row">
              <div class="col">
                {{ text }}
              </div>
            </div>
          </div>
          <hr role="separator" aria-orientation="horizontal" class="v-divider-tooltip">
          <div class="v-card__actions">
            <button
              type="button"
              class="v-btn-tooltip-dialog"
              @click="dialog = false"
            >
            <!-- v-btn v-btn--text theme--light v-size--default blue--text text--darken-1 -->
              <span class="v-btn__content-tooltip">
                Close
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- </v-dialog> -->
  </div>
</template>


<style>

#tooltip {
  display: inline;
  vertical-align: middle;
}

.tooltip-button {
  padding-bottom: 4px;
}

*, ::before, ::after {
  background-repeat: no-repeat;
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
}

div {
  display: block;
}

/* button, [type=button], [type=reset], [type=submit] {
  -webkit-appearance: button;
} */

.theme--light {
  background: #FFFFFF;
  color: rgba(0, 0, 0, 0.87);
}

/* .v-application {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
} */

.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  padding: 12px;
}

.mb-5 {
  margin-bottom: 20px !important;
}

.v-btn {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.v-dialog__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
  width: 100%;
  z-index: 6;
}

.v-dialog {
  border-radius: 4px;
  margin: 24px;
  overflow-y: auto;
  pointer-events: auto;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  z-index: inherit;
  outline: none;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}

.v-dialog:not(.v-dialog--fullscreen) {
  max-height: 90%;
}

.blue--text.text--darken-1 {
  color: #1E88E5 !important;
  caret-color: #1E88E5 !important;
}

.v-card__actions > .v-btn.v-btn {
  padding: 0 8px;
}

.v-dialog > .v-card > .v-card__actions {
    padding: 8px 16px;
}

.v-card__actions {
    align-items: center;
    display: flex;
    padding: 8px;
}

.v-card {
  border-width: thin;
  display: block;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
  /* .theme-light */
  background-color: #FFFFFF;
  color: rgba(0, 0, 0, 0.87);
}

.v-sheet.v-card {
  border-radius: 4px;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.v-card--tooltip {
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  tab-size: 4;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  pointer-events: auto;
  background-repeat: no-repeat;
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  width: 100%;
  border-width: thin;
  display: block;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
  border-color: #FFFFFF;
  background-color: #FFFFFF;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.v-card__title-tooltip {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  padding: 16px 24px 10px;
  line-height: 2rem;
  word-break: break-all;
}

.v-divider-tooltip {
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0px;
  max-height: 0px;
  border: solid rgba(0, 0, 0, 0.12);
  border-width: thin 0 0 0;
  transition: inherit;
}

.v-card-text-tooltip {
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  tab-size: 4;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Roboto", sans-serif;
  pointer-events: auto;
  overflow-wrap: break-word;
  white-space: normal;
  background-repeat: no-repeat;
  box-sizing: inherit;
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
  width: 100%;
  padding: 0 24px 20px;
  color: rgba(0, 0, 0, 0.6);
}

.v-btn-tooltip {
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  tab-size: 4;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-repeat: no-repeat;
  box-sizing: inherit;
  margin: 0;
  font: inherit;
  overflow: visible;
  border-style: none;
  cursor: pointer;
  -webkit-appearance: button;
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  min-height: 0;
  min-width: 0;
  padding: 0;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.625rem;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 3px 6px 0px rgba(0, 0, 0, 0.14), 0px 1px 12px 0px rgba(0, 0, 0, 0.12);
  height: 32px;
  width: 32px;
  background-color: #f5f5f5;
}

.v-icon-tooltip {
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  tab-size: 4;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font: inherit;
  cursor: pointer;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  background-repeat: no-repeat;
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  user-select: none;
  color: inherit;
  height: 18px;
  font-size: 18px;
  width: 18px;
}

.v-btn__content-tooltip {
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
  text-transform: uppercase;
}

.v-btn-tooltip-dialog {
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  tab-size: 4;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  pointer-events: auto;
  overflow-wrap: break-word;
  background-repeat: no-repeat;
  box-sizing: inherit;
  margin: 0;
  font: inherit;
  overflow: visible;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  -webkit-appearance: button;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 0.875rem;
  height: 36px;
  min-width: 64px;
  padding: 0 8px;
  color: #1E88E5 !important;
  caret-color: #1E88E5 !important;
}

.tooltip {
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  tab-size: 4;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.87);
  background-repeat: no-repeat;
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
  width: 100%;
  z-index: 202;
}

</style>
