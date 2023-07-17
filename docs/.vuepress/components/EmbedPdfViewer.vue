
<script>

import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  props: {
    source: { type: String, default: "" },
    pages: { type: Number, default: 1 },
  },
  data() {
    return {
      src: "",
      showPdf: false,
      page: null,
      scale: null,
      zoom: 1,
      defaultScaleDelta: 1.1,
      pageWidth: null,
      minScale: 0.25,
      maxScale: 10.0,
      default_scale: 1,
      initialPdfWidth: null,
    }
  },
  computed: {
    // Getters
  },
  watch: {
    source(val) {
      if (val) {
        this.$nextTick(() => {
          this.render(val)
        })
      }
    },
  },
  mounted() {},
  created() {
    if (!this.src || this.src.length == 0) {
      this.render(this.source)
    }
  },

  methods: {
    render(doc) {
      this.showPdf = false
      this.src = doc
      this.showPdf = true
      this.$nextTick(() => {
        this.initialPdfWidth = this.setPdfInitWidth()
      })
    },
    previousPage() {
      this.page = this.page && this.page > 1 ? this.page - 1 : 1
      console.log(this.page)
    },
    nextPage() {
      if (this.page) {
        this.page = this.page < this.pages ? this.page + 1 : this.pages
      } else {
        this.page = this.pages > 1 ? 2 : 1
      }
    },
    setPdfInitWidth() {
      var pdf = document.getElementById('viewer')
      if (pdf) {
        this.initialPdfWidth = pdf.width ? pdf.width : pdf.offsetWidth
      }
    },
    scalePdfWidth(zoom) {
      if (!this.initialPdfWidth) {
        this.setPdfInitWidth()
      }
      const zoomWidth = Math.ceil(zoom * this.initialPdfWidth)
      this.pageWidth = zoomWidth
      console.log(`Page width on zoom: ${zoomWidth}`)
    },
    zoomIn() {
      var newScale = this.zoom
      newScale = (newScale * this.defaultScaleDelta).toFixed(2)
      newScale = Math.ceil(newScale * 10) / 10
      newScale = Math.min(this.maxScale, newScale)
      this.zoom = newScale
      // console.log(this.zoom)
      this.scalePdfWidth(this.zoom)
    },
    zoomOut() {
      var newScale = this.zoom
      newScale = (newScale / this.defaultScaleDelta).toFixed(2)
      newScale = Math.floor(newScale * 10) / 10
      newScale = Math.max(this.minScale, newScale)
      this.zoom = newScale
      // console.log(this.zoom)
      this.scalePdfWidth(this.zoom)
    },
  },
}
</script>

<template>
  <div id="pdf-viewer">
    <!-- <header hidden>
      <h1 id="title"></h1>
    </header> -->

    <div id="viewerContainer">
      <vue-pdf-embed v-if="showPdf" id="viewer" ref="pdf" :source="src" :page="page" :scale="scale" :width="pageWidth" />
    </div>

    <div id="loadingBar" hidden>
      <div class="progress"></div>
      <div class="glimmer"></div>
    </div>

    <div id="errorWrapper" hidden="true">
      <div id="errorMessageLeft">
        <span id="errorMessage"></span>
        <button id="errorShowMore">
          More Information
        </button>
        <button id="errorShowLess">
          Less Information
        </button>
      </div>
      <div id="errorMessageRight">
        <button id="errorClose">
          Close
        </button>
      </div>
      <div class="clearBoth"></div>
      <textarea
        id="errorMoreInfo"
        hidden="true"
        readonly="readonly"
      ></textarea>
    </div>

    <footer>
      <button
        class="toolbarButton pageUp ripple"
        title="Previous Page"
        id="previous"
        @click="previousPage"
      ></button>
      <button
        class="toolbarButton pageDown ripple"
        title="Next Page"
        id="next"
        @click="nextPage"
      ></button>

      <input
        type="number"
        id="pageNumber"
        class="toolbarField pageNumber"
        :value="page ? page : 1"
        size="4"
        min="1"
        :max="pages ? pages : 1"
        @input="event => page = parseInt(event.target.value)"
      />

      <button
        class="toolbarButton zoomOut"
        title="Zoom Out"
        id="zoomOut"
        @click="zoomOut"
      ></button>
      <button
        class="toolbarButton zoomIn"
        title="Zoom In"
        id="zoomIn"
        @click="zoomIn"
      ></button>
    </footer>
  </div>
</template>


<style>

#pdf-viewer {
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

#pdf-viewer header {
  background-color: #f4f4f4;
}

#pdf-viewer header h1 {
  border-bottom: 1px solid #d8d8d8;
  color: #858585;
  font-size: 23px;
  font-style: italic;
  font-weight: normal;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#pdf-viewer footer {
  height: 4rem;
  display: flex;
  overflow: hidden;
}

#pdf-viewer .toolbarButton {
  display: block;
  padding: 0;
  margin: 0;
  border-width: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  cursor: pointer;
}

#pdf-viewer .toolbarButton:active {
  background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
}

#pdf-viewer .toolbarButton.pageUp {
  width: 18%;
  height: 100%;
  background-image: url(/img/icon_prev_page.svg);
  background-size: 2rem;
}

#pdf-viewer .toolbarButton.pageDown {
  width: 18%;
  height: 100%;
  background-image: url(/img/icon_next_page.svg);
  background-size: 2rem;
}

#pdf-viewer #pageNumber {
  width: 28%;
  height: 100%;
  left: 36%;
  text-align: center;
  border: 0;
  background-color: transparent;
  font-size: 1.2rem;
  color: #000;
  background-repeat: no-repeat;
  background-position: left, right;
  background-size: 0.2rem, 0.2rem;
}

#pdf-viewer .toolbarButton.zoomOut {
  width: 18%;
  height: 100%;
  background-image: url(/img/icon_zoom_out.svg);
  background-size: 2.4rem;
}

#pdf-viewer .toolbarButton.zoomIn {
  width: 18%;
  height: 100%;
  background-image: url(/img/icon_zoom_in.svg);
  background-size: 2.4rem;
}

#pdf-viewer .toolbarButton[disabled] {
  opacity: 0.3;
}

#pdf-viewer .hidden {
  display: none;
}
[hidden] {
  display: none !important;
}

#pdf-viewer #viewerContainer {
  overflow: auto;
  width: 100%;
  height: 93%;
  background-color: #f8f8f8;
}

#pdf-viewer .page {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 25px;
  margin-top: 0;
}

#pdf-viewer #viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}

#pdf-viewer canvas {
  margin: auto;
  display: block;
}

#pdf-viewer #loadingBar {
  position: relative;
  height: 0.6rem;
  background-color: #333;
  border-bottom: 1px solid #333;
  margin-top: 5rem;
}

#pdf-viewer #loadingBar .progress {
  /* position: absolute; */
  left: 0;
  width: 0;
  height: 100%;
  background-color: #ddd;
  overflow: hidden;
  transition: width 200ms;
}

@keyframes progressIndeterminate {
  0% {
    left: 0;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

#pdf-viewer #loadingBar .progress.indeterminate {
  background-color: #999;
  transition: none;
}

#pdf-viewer #loadingBar .indeterminate .glimmer {
  /* position: absolute; */
  top: 0;
  left: 0;
  height: 100%;
  width: 5rem;

  background-image: linear-gradient(to right, #999 0%, #fff 50%, #999 100%);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  animation: progressIndeterminate 2s linear infinite;
}

#pdf-viewer #errorWrapper {
  background: none repeat scroll 0 0 #ff5555;
  color: white;
  left: 0;
  /* position: absolute; */
  right: 0;
  top: 3.2rem;
  z-index: 1000;
  padding: 0.3rem;
  font-size: 0.8em;
}

#pdf-viewer #errorMessageLeft {
  float: left;
}

#pdf-viewer #errorMessageRight {
  float: right;
}

#pdf-viewer #errorMoreInfo {
  background-color: #ffffff;
  color: black;
  padding: 0.3rem;
  margin: 0.3rem;
  width: 98%;
}

</style>
