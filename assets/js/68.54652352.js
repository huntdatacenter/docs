(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1072:function(e,t,a){"use strict";a.r(t);var i=a(582),s=(a(9),a(23),a(28),a(583),a(461),a(215),a(48),a(69),a(129),a(130),a(38),a(36),a(95),a(135),a(125),a(220),a(212),a(467)),n=a.n(s),l=a(586),r=a(610),o=a(611),c=a(513),d=a(1087),u=a(1088),f=a(426),g=a(401),p=a(464),h=a(385),v=a(442),m=a(1041),k=a(623),y=a(1089),x=a(473),_=a(1053),b=a(396),D=a(544),w=a(1063),C=a(421),F=a(514),S=a(485),P=a(475),T=a(424),q=a(1069),V=a(476),O={name:"PdfForm",components:{EmbedPdfViewer:function(){return Promise.all([a.e(0),a.e(16),a.e(65)]).then(a.bind(null,1071))},ServiceDesk:function(){return Promise.all([a.e(0),a.e(37)]).then(a.bind(null,1070))},VApp:c.a,VCol:d.a,VRow:u.a,VList:f.a,VListItem:g.a,VListItemTitle:p.b,VListItemContent:p.a,VSheet:h.a,VCard:v.a,VCardTitle:m.d,VCardSubtitle:m.b,VCardText:m.c,VToolbar:k.a,VToolbarTitle:y.b,VToolbarItems:y.a,VSpacer:x.a,VForm:_.a,VBtn:b.a,VIcon:D.a,VTooltip:w.a,VTextField:C.a,VAutocomplete:F.a,VTextarea:S.a,VDialog:P.a,VDivider:T.a,VDatePicker:q.a},props:{id:{type:String,default:"applet"},agreementTag:{type:String,default:null},url:{type:String,default:null},title:{type:String,default:"Agreement"},servicedesk:{type:String,default:null},fields:{type:Array,default:null}},data:function(){return{formData:{},layout:{formCols:5,pdfCols:7,hidePdf:!1},datemodal:{},datedialog:{},canvasOffsets:{},signatures:{},pdfSignatures:{},pdfDoc:null,renderedFields:null,pdfFields:[],pdfFile:null,pdfDownloadClicked:!1,pdfPages:1,showPdf:!1,downloadPdf:!1,pdfTimestamp:(new Date).toISOString(),dialogs:{},signaturePad:null,defaultScale:.04,drawer:null,expandForm:!0,serviceDeskDialog:!1,data:{}}},computed:{getCountries:function(){return r.a?r.a:[]},formFilled:function(){var e=this;return this.fields.filter((function(e){return e.key})).every((function(t){return!(!e.formData[t.key]&&e.isFieldRequired(t.required))}))},pdfData:function(){return this.pdfFile?this.pdfFile:""},getPdfTitle:function(){var e=new Date,t=e.getFullYear()+("0"+(e.getMonth()+1)).slice(-2)+("0"+e.getDate()).slice(-2)+"-"+("0"+e.getHours()).slice(-2)+("0"+e.getMinutes()).slice(-2)+("0"+e.getSeconds()).slice(-2);return"agreement-".concat(t,".pdf")},getData:function(){return this.data&&this.data[this.servicedesk]?this.data[this.servicedesk]:null},showServiceDesk:function(){return this.data&&this.servicedesk&&this.data[this.servicedesk]},getRecipient:function(){return this.data&&this.data[this.servicedesk]&&this.data[this.servicedesk].recipient?this.data[this.servicedesk].recipient:"cloud.support+hunt-cloud-request@hunt.ntnu.no"}},watch:{expandForm:function(e){if(e){this.layout={formCols:12,pdfCols:12,hidePdf:!0}}else{this.layout={formCols:5,pdfCols:7,hidePdf:!1}}}},mounted:function(){},created:function(){var e=this;this.fields.filter((function(e){return"signature"===e.field})).forEach((function(t){e.dialogs=Object.assign({},e.dialogs,Object(i.a)({},t.key,null)),e.pdfSignatures[t.key]={page:t.page&&t.page>0?t.page:0,xpos:t.xpos&&t.xpos>0?t.xpos:.5,ypos:t.ypos&&t.ypos>0?t.ypos:.5,scale:t.scale&&t.scale>0?t.scale:e.defaultScale}})),this.resetFormData(),this.url&&this.loadPdf(this.url);var t=this.fetchAgreementFormCache(this.agreementTag);t&&(this.renderedFields=t,console.log("loaded fields from cache"),console.log(t),this.$refs.form&&(console.log("submit from cache"),this.$refs.form.submit()))},methods:{loadPdf:function(e){var t=this;try{n()(e).then((function(e){if(!e.ok)throw new Error("unexpected response ".concat(e.statusText));return e.arrayBuffer()})).then((function(e){t.pdfBuffer=e;try{var a=t.pdfBuffer;l.PDFDocument.load(a).then((function(e){t.pdfDoc=e,t.pdfDoc.saveAsBase64({dataUri:!0}).then((function(a){var i=e.getPages().length;t.browsePdf(a,i,!0)}));var a=e.getForm();t.pdfFields=a.getFields().map((function(e){return e.getName()})),console.log(t.pdfFields)}))}catch(e){console.log("Failed to read fields"),console.log(e)}}))}catch(e){console.log(e)}},getTimestamp:function(){return(new Date).toISOString()},isFieldRequired:function(e){return!(!e||"false"===e)},isBoolTrue:function(e){return!(!e||"false"===e)},addSignature:function(e){var t=this,a=document.getElementById("signature-pad--".concat(e));if(a){var i=a.querySelector("canvas");this.signatures[e]={},this.signatures[e].signed=!1,this.signatures[e].canvas=i;var s=new o.a(i,{dotSize:3,minWidth:2,maxWidth:4});this.signatures[e].signature=s,s.addEventListener("beginStroke",(function(){console.log("Signature started")}),{once:!0}),window.addEventListener("resize",this.resizeCanvas),this.$nextTick((function(){t.resizeCanvas(null,e)}))}else console.log("No wrapper found for id: signature-pad--".concat(e))},resizeCanvas:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=a?[a]:Object.keys(this.signatures);i.forEach((function(e){var a=document.getElementById("signature-pad--".concat(e));if(a){var i=a.querySelector("canvas"),s=Math.max(window.devicePixelRatio||1,1);if(t.canvasOffsets&&t.canvasOffsets[e]&&t.canvasOffsets[e].width&&t.canvasOffsets[e].height)var n=t.canvasOffsets[e].width,l=t.canvasOffsets[e].height;else{n=i.offsetWidth,l=i.offsetHeight;t.canvasOffsets[e]={width:n,height:l}}console.log("Canvas current size ".concat(n," x ").concat(l," (device ratio: ").concat(window.devicePixelRatio,")")),i.width=n*s,i.height=l*s,i.getContext("2d").scale(s,s),t.signatures[e].signature.clear()}else console.log("No wrapper found for id: signature-pad--".concat(e))}))},openDialog:function(e){var t=this;this.dialogs=Object.assign({},this.dialogs,Object(i.a)({},e,!0)),this.$nextTick((function(){t.addSignature(e)}))},closeDialog:function(e){this.dialogs=Object.assign({},this.dialogs,Object(i.a)({},e,!1))},saveDialog:function(e){this.dialogs=Object.assign({},this.dialogs,Object(i.a)({},e,!1)),this.signatures[e].signed=!this.signatures[e].signature.isEmpty(),console.log("Signature signed [".concat(e,"]: ").concat(this.signatures[e].signed)),this.signatures[e].pngurl=this.signatures[e].signature.toDataURL()},fetchAgreementFormCache:function(e){var t={},a=e?localStorage.getItem(e):null;try{t=a?JSON.parse(a):{}}catch(e){console.log("Failed to fetch data from cache")}return t},updateAgreementFormCache:function(e,t){localStorage.agreementFields||(localStorage.agreementFields={}),e&&t&&localStorage.setItem(e,JSON.stringify(t))},submit:function(){var e=this;try{var t=this.pdfBuffer;l.PDFDocument.load(t).then((function(t){var a=t.getForm();e.renderedFields={},e.fields.forEach((function(t){if(t.key&&!["section","signature","date"].includes(t.field)&&e.formData[t.key]){var i=a.getTextField(t.key),s=null;s=t.joinkey?"".concat(e.formData[t.joinkey],", ").concat(e.formData[t.key]):e.formData[t.key],i.setText(s),e.renderedFields[t.key]=s}})),e.updateAgreementFormCache(e.agreementTag,e.renderedFields),a.flatten();var i=Object.keys(e.signatures).filter((function(t){return e.signatures[t].signed}));if(i.length>0){var s=i.map((function(a){var i=e.signatures[a].pngurl;return t.embedPng(i).then((function(i){var s=i,n=t.getPages(),l=e.pdfSignatures[a].page,r=n[l],o=s.scale(e.pdfSignatures[a].scale),c=r.getWidth()*e.pdfSignatures[a].xpos,d=r.getHeight()*e.pdfSignatures[a].ypos;console.log("Page ".concat(l," (").concat(r.getWidth()," x ").concat(r.getHeight(),") - insert image ").concat(a,".png (").concat(o.width," x ").concat(o.height,") at position ").concat(c," x ").concat(d)),r.drawImage(s,{x:c,y:d,width:o.width,height:o.height})}))}));Promise.all(s).then((function(){console.log("Render PDF with signatures"),t.saveAsBase64({dataUri:!0}).then((function(a){var i=t.getPages().length;e.browsePdf(a,i,!0,!0)}))}))}else console.log("PDF without signatures"),t.saveAsBase64({dataUri:!0}).then((function(a){var i=t.getPages().length;e.browsePdf(a,i,!0,!0)}))})),this.pdfDownloadClicked=!1}catch(e){console.log(e)}},browsePdf:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=t;this.pdfFile=n,this.pdfPages=a,this.pdfTimestamp=this.getTimestamp(),this.showPdf=i,this.$nextTick((function(){e.downloadPdf=s}))},showTooltip:function(e){console.log(e)},saveDate:function(e,t){this.$refs[e][0].save(t),this.datemodal[e]=!1},loadFormData:function(){var e=this;n()("/cfg/service_desk.yml").then((function(e){return e.text()})).then((function(t){var a=V.load(t);e.data=a,e.serviceDeskDialog=!0}))},serviceDeskRedirect:function(){this.loadFormData()},resetFormData:function(){var e=this;this.pdfDownloadClicked=!1,this.formData={},this.fields.filter((function(e){return e.key&&e.default&&!["signature","date"].includes(e.field)})).forEach((function(t){var a=t.default;e.formData[t.key]=a})),this.fields.filter((function(e){return"date"===e.field})).forEach((function(t){var a=new Date;e.formData[t.key]=a.toISOString().substring(0,10)})),this.updateAgreementFormCache(this.agreementTag,{})}}},R=(a(618),a(41)),j=Object(R.a)(O,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"d-flex flex-xs-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap h-100 w-100 align-self-center",staticStyle:{"max-width":"1680px"}},[a("v-sheet",{staticClass:"flex-grow-1 flex-shrink-0 mx-2 px-2 h-100 h-xs-auto h-sm-auto overflow-y-auto col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",staticStyle:{"min-width":"300px","max-width":"100%"}},[a("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("v-list",[a("v-list-item",[a("v-row",{staticClass:"mr-xs-1 pr-sm-1",attrs:{justify:"space-between","no-gutters":""}},[a("div",{staticClass:"font-weight-bold"},[e._v(e._s(e.title))]),e._v(" "),a("v-btn",{attrs:{fab:"","x-small":"",title:"Reset the form fields",color:"link",elevation:"0"},on:{click:e.resetFormData}},[a("v-icon",[e._v("close")])],1)],1)],1),e._v(" "),e._l(e.fields,(function(t){return["divider"===t.field?a("v-divider",{key:t.key}):e._e(),e._v(" "),"section"===t.field?a("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[a("p",{staticClass:"text-darken-1 py-0 mt-1 mb-4"},[e._v(e._s(t.label))])]):e._e(),e._v(" "),"textfield"===t.field?a("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[a("v-text-field",{ref:t.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",pattern:t.pattern?t.pattern:null,title:t.hint?t.hint:null,minlength:t.minlength?t.minlength:null,maxlength:t.maxlength?t.maxlength:null,min:t.min&&"number"===t.specialType?t.min:null,max:t.max&&"number"===t.specialType?t.max:null,required:e.isFieldRequired(t.required),autocapitalize:t.autocapitalize?t.autocapitalize:null,suffix:t.suffix?t.suffix:null,type:t.specialType?t.specialType:null,hint:t.hint?t.hint:null,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:t.placeholder?t.placeholder:null,"persistent-placeholder":"",outlined:"",dense:"","hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                "+e._s(t.label)),e.isFieldRequired(t.required)?a("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0},!t.tooltip?null:{key:"append",fn:function(){return[a("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:"","x-small":""}},"v-btn",s,!1),i),[a("v-icon",{staticClass:"material-icons"},[e._v("info")])],1)]}}],null,!0)},[e._v(" "),a("span",[e._v(e._s(t.tooltip))])])]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(a){e.$set(e.formData,t.key,a)},expression:"formData[item.key]"}})],1):e._e(),e._v(" "),"autocompleteone"===t.field?a("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[a("v-autocomplete",{ref:t.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",items:t.options,required:e.isFieldRequired(t.required),clearable:e.isBoolTrue(t.clearable),"clear-icon":"",placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                "+e._s(t.label)),e.isFieldRequired(t.required)?a("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0},{key:"append",fn:function(){return[!e.isBoolTrue(t.clearable)||!e.formData[t.key]?e._e():a("div",{staticClass:"v-input__icon v-input__icon--clear"},[a("i",{staticClass:"v-icon notranslate v-icon--link material-icons theme--dark primary--text",attrs:{type:"button","aria-label":"clear icon",tabindex:"-1"},on:{click:function(a){a.stopPropagation(),e.formData[t.key]=null}}},[e._v("\n                    close\n                  ")])])]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(a){e.$set(e.formData,t.key,a)},expression:"formData[item.key]"}})],1):e._e(),e._v(" "),"date"===t.field?a("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[a("v-dialog",{ref:t.key,refInFor:!0,attrs:{"return-value":e.formData[t.key],persistent:"",width:"290px"},on:{"update:returnValue":function(a){return e.$set(e.formData,t.key,a)},"update:return-value":function(a){return e.$set(e.formData,t.key,a)}},scopedSlots:e._u([{key:"activator",fn:function(i){var s=i.on,n=i.attrs;return[a("v-text-field",e._g(e._b({staticClass:"mb-3",attrs:{placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":"",readonly:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                    "+e._s(t.label)),e.isFieldRequired(t.required)?a("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(a){e.$set(e.formData,t.key,a)},expression:"formData[item.key]"}},"v-text-field",n,!1),s))]}}],null,!0),model:{value:e.datemodal[t.key],callback:function(a){e.$set(e.datemodal,t.key,a)},expression:"datemodal[item.key]"}},[e._v(" "),a("v-date-picker",{attrs:{scrollable:""},model:{value:e.datedialog[t.key],callback:function(a){e.$set(e.datedialog,t.key,a)},expression:"datedialog[item.key]"}},[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){e.datemodal[t.key]=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){return e.saveDate(t.key,e.datedialog[t.key])}}},[e._v("\n                  OK\n                ")])],1)],1)],1):e._e(),e._v(" "),"countries"===t.field?a("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[a("v-autocomplete",{ref:t.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",items:e.getCountries,"item-text":function(e){return e.name+" "+e.flag},"item-value":function(e){return e.name},required:e.isFieldRequired(t.required),placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                "+e._s(t.label)),e.isFieldRequired(t.required)?a("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(a){e.$set(e.formData,t.key,a)},expression:"formData[item.key]"}})],1):e._e(),e._v(" "),"textarea"===t.field?a("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[a("v-textarea",{ref:t.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",pattern:t.pattern?t.pattern:null,title:t.hint?t.hint:null,minlength:t.minlength?t.minlength:null,maxlength:t.maxlength?t.maxlength:null,required:e.isFieldRequired(t.required),hint:t.hint?t.hint:null,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"",rows:1,"hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                "+e._s(t.label)),e.isFieldRequired(t.required)?a("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(a){e.$set(e.formData,t.key,a)},expression:"formData[item.key]"}})],1):e._e(),e._v(" "),"signature"===t.field?a("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[a("v-card",{staticClass:"px-0 mb-3",staticStyle:{width:"100%"},attrs:{elevation:"0",outlined:""}},[a("v-card-text",[a("v-row",{staticClass:"mr-xs-12 pr-sm-8",attrs:{justify:"space-between","no-gutters":""}},[a("v-col",{attrs:{cols:"8"}},[a("div",{staticClass:"font-weight-bold"},[e._v(e._s(t.label))])]),e._v(" "),a("v-col",{attrs:{cols:"4"}},[a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(a){return e.openDialog(t.key)}}},[e._v("\n                      Add signature\n                    ")])],1)],1),e._v(" "),a("v-row",{staticClass:"mr-xs-12 pr-sm-8",attrs:{align:"center",justify:"space-between","no-gutters":""}},[a("v-col",{staticStyle:{height:"40px"},attrs:{cols:"12"}},[e.signatures&&e.signatures[t.key]&&e.signatures[t.key].signed?a("div",[a("img",{staticStyle:{"max-height":"40px"},attrs:{src:e.signatures[t.key].pngurl}})]):a("div",[e._v("\n                      Add digital signature now or sign later\n                    ")])])],1),e._v(" "),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialogs[t.key],callback:function(a){e.$set(e.dialogs,t.key,a)},expression:"dialogs[item.key]"}},[a("v-card",{staticClass:"prevent-select",staticStyle:{height:"100%"}},[a("v-toolbar",[a("v-toolbar-title",[e._v(e._s(t.label))]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:""},on:{click:function(a){return e.closeDialog(t.key)}}},[e._v("\n                        Close\n                      ")]),e._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{text:""},on:{click:function(a){return e.saveDialog(t.key)}}},[e._v("\n                          Save\n                        ")])],1)],1),e._v(" "),a("div",{staticClass:"signature-card"},[a("div",{staticClass:"signature-pad mt-8",attrs:{id:"signature-pad--"+t.key}},[a("div",{staticClass:"signature-pad--body"},[a("canvas")]),e._v(" "),a("div",{staticClass:"signature-pad--footer"},[a("div",{staticClass:"description"},[e._v("Sign above")])])])])],1)],1)],1)],1)],1):e._e()]})),e._v(" "),a("v-list-item",[a("v-row",{staticClass:"px-2",attrs:{align:"center",justify:"space-around"}},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-8 px-0",attrs:{type:"submit",block:"",color:e.formFilled?"teal":"link"}},[e._v("\n                Preview agreement\n              ")])],1)],1)],1),e._v(" "),a("v-list-item",[a("v-row",{staticClass:"px-2",attrs:{align:"center",justify:"space-around"}},[!e.pdfFile||!e.downloadPdf?e._e():a("v-col",{staticClass:"px-4 mt-4",attrs:{cols:"12"}},[e._v("\n              Double check the preview and then save the agreement file.\n            ")]),e._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-8 px-0",attrs:{block:"",color:e.pdfDownloadClicked?"link":"primary",href:e.pdfFile,download:e.getPdfTitle,target:"_blank",disabled:!e.pdfFile||!e.downloadPdf},on:{click:function(t){e.pdfDownloadClicked=!0}}},[e._v("\n                Save Agreement\n              ")])],1)],1)],1),e._v(" "),e.servicedesk?a("v-list-item",[a("v-row",{staticClass:"px-2",attrs:{align:"center",justify:"space-around"}},[e.pdfDownloadClicked?a("v-col",{staticClass:"px-4 mt-6",attrs:{cols:"12"}},[a("v-icon",[e._v("attach_file")]),e._v(" Make sure to attach "),a("b",[e._v("signed agreement file (.pdf)")]),e._v(" to your email request.\n            ")],1):e._e(),e._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-8 px-0",attrs:{block:"",color:"success",target:"_blank",disabled:!e.pdfDownloadClicked},on:{click:e.serviceDeskRedirect}},[e._v("\n                Prepare Service desk email\n              ")])],1)],1)],1):e._e()],2)],1)]),e._v(" "),a("v-sheet",{staticClass:"flex-grow-1 flex-shrink-1 mx-2 px-2 h-100 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",staticStyle:{"min-width":"300px","max-width":"100%"}},[!e.showPdf?e._e():a("EmbedPdfViewer",{attrs:{source:e.pdfData,pages:e.pdfPages,height:"500"}})],1),e._v(" "),e.showServiceDesk?a("v-sheet",[a("ServiceDesk",{ref:e.servicedesk,attrs:{title:e.getData.title,requirements:e.getData.requirements,attachments:e.getData.attachments,fields:e.getData.fields,template:e.getData.template,recipient:e.getRecipient,"cache-key":e.agreementTag},model:{value:e.serviceDeskDialog,callback:function(t){e.serviceDeskDialog=t},expression:"serviceDeskDialog"}})],1):e._e()],1)}),[],!1,null,null,null);t.default=j.exports},537:function(e,t,a){},618:function(e,t,a){"use strict";a(537)}}]);