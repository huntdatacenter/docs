(window.webpackJsonp=window.webpackJsonp||[]).push([[38,46],{421:function(t,e,i){"use strict";var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();t.exports=e=a.fetch,a.fetch&&(e.default=a.fetch.bind(a)),e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response},434:function(t,e,i){},494:function(t,e,i){"use strict";i(434)},783:function(t,e,i){"use strict";var a=i(368),s=i(400),n=i(377);e.a=Object(a.a)(s.a,Object(n.b)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},847:function(t,e,i){"use strict";i.r(e);var a=i(548),s=(i(10),i(23),i(27),i(549),i(422),i(443),i(46),i(67),i(128),i(129),i(38),i(36),i(94),i(127),i(201),i(209),i(421)),n=i.n(s),r=i(550),o=i(557),l=i(558),d=i(528),c=i(859),u=i(860),f=i(536),h=i(482),g=i(845),p=i(389),v=i(479),m=i(863),y=i(495),x=i(858),w=i(834),b=i(783),_=i(423),k=i(529),C=i(865),D=i(413),S=i(861),P=i(432),F=i(853),V=i(534),T={name:"PdfForm",components:{EmbedPdfViewer:function(){return Promise.all([i.e(0),i.e(7),i.e(13),i.e(44)]).then(i.bind(null,846))},VApp:d.a,VCol:c.a,VRow:u.a,VList:f.a,VListItem:h.a,VListItemTitle:g.b,VListItemContent:g.a,VSheet:p.a,VCard:v.a,VCardTitle:m.d,VCardSubtitle:m.b,VCardText:m.c,VToolbar:y.a,VToolbarTitle:x.b,VToolbarItems:x.a,VSpacer:w.a,VForm:b.a,VBtn:_.a,VIcon:k.a,VTooltip:C.a,VTextField:D.a,VAutocomplete:S.a,VTextarea:P.a,VDialog:F.a,VDivider:V.a},props:{id:{type:String,default:"applet"},url:{type:String,default:null},title:{type:String,default:"Agreement"},fields:{type:Array,default:null}},data:function(){return{formData:{},layout:{formCols:5,pdfCols:7,hidePdf:!1},canvasOffsets:{},signatures:{},pdfSignatures:{},pdfDoc:null,pdfFields:[],pdfFile:null,pdfPages:1,showPdf:!1,downloadPdf:!1,pdfTimestamp:(new Date).toISOString(),dialogs:{},signaturePad:null,defaultScale:.04,drawer:null,expandForm:!0}},computed:{getCountries:function(){return o.a?o.a:[]},formFilled:function(){var t=this;return this.fields.filter((function(t){return t.key})).every((function(e){return!(!t.formData[e.key]&&t.isFieldRequired(e.required))}))},pdfData:function(){return this.pdfFile?this.pdfFile:""},getPdfTitle:function(){var t=new Date,e=t.getFullYear()+("0"+(t.getMonth()+1)).slice(-2)+("0"+t.getDate()).slice(-2)+"-"+("0"+t.getHours()).slice(-2)+("0"+t.getMinutes()).slice(-2)+("0"+t.getSeconds()).slice(-2);return"agreement-".concat(e,".pdf")}},watch:{expandForm:function(t){if(t){this.layout={formCols:12,pdfCols:12,hidePdf:!0}}else{this.layout={formCols:5,pdfCols:7,hidePdf:!1}}}},mounted:function(){},created:function(){var t=this;this.fields.filter((function(t){return"signature"===t.field})).forEach((function(e){t.dialogs=Object.assign({},t.dialogs,Object(a.a)({},e.key,null)),t.pdfSignatures[e.key]={page:e.page&&e.page>0?e.page:0,xpos:e.xpos&&e.xpos>0?e.xpos:.5,ypos:e.ypos&&e.ypos>0?e.ypos:.5,scale:e.scale&&e.scale>0?e.scale:t.defaultScale}})),this.url&&this.loadPdf(this.url)},methods:{loadPdf:function(t){var e=this;try{n()(t).then((function(t){if(!t.ok)throw new Error("unexpected response ".concat(t.statusText));return t.arrayBuffer()})).then((function(t){e.pdfBuffer=t;try{var i=e.pdfBuffer;r.PDFDocument.load(i).then((function(t){e.pdfDoc=t,e.pdfDoc.saveAsBase64({dataUri:!0}).then((function(i){var a=t.getPages().length;e.browsePdf(i,a,!0)}));var i=t.getForm();e.pdfFields=i.getFields().map((function(t){return t.getName()})),console.log(e.pdfFields)}))}catch(t){console.log("Failed to read fields"),console.log(t)}}))}catch(t){console.log(t)}},getTimestamp:function(){return(new Date).toISOString()},isFieldRequired:function(t){return!(!t||"false"===t)},addSignature:function(t){var e=this,i=document.getElementById("signature-pad--".concat(t));if(i){var a=i.querySelector("canvas");this.signatures[t]={},this.signatures[t].signed=!1,this.signatures[t].canvas=a;var s=new l.a(a,{dotSize:2,minWidth:1.5,maxWidth:4});this.signatures[t].signature=s,s.addEventListener("beginStroke",(function(){console.log("Signature started")}),{once:!0}),window.addEventListener("resize",this.resizeCanvas),this.$nextTick((function(){e.resizeCanvas(null,t)}))}else console.log("No wrapper found for id: signature-pad--".concat(t))},resizeCanvas:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=i?[i]:Object.keys(this.signatures);a.forEach((function(t){var i=document.getElementById("signature-pad--".concat(t));if(i){var a=i.querySelector("canvas"),s=Math.max(window.devicePixelRatio||1,1);if(e.canvasOffsets&&e.canvasOffsets[t]&&e.canvasOffsets[t].width&&e.canvasOffsets[t].height)var n=e.canvasOffsets[t].width,r=e.canvasOffsets[t].height;else{n=a.offsetWidth,r=a.offsetHeight;e.canvasOffsets[t]={width:n,height:r}}console.log("Canvas current size ".concat(n," x ").concat(r," (device ratio: ").concat(window.devicePixelRatio,")")),a.width=n*s,a.height=r*s,a.getContext("2d").scale(s,s),e.signatures[t].signature.clear()}else console.log("No wrapper found for id: signature-pad--".concat(t))}))},openDialog:function(t){var e=this;this.dialogs=Object.assign({},this.dialogs,Object(a.a)({},t,!0)),this.$nextTick((function(){e.addSignature(t)}))},closeDialog:function(t){this.dialogs=Object.assign({},this.dialogs,Object(a.a)({},t,!1))},saveDialog:function(t){this.dialogs=Object.assign({},this.dialogs,Object(a.a)({},t,!1)),this.signatures[t].signed=!this.signatures[t].signature.isEmpty(),console.log("Signature signed [".concat(t,"]: ").concat(this.signatures[t].signed)),this.signatures[t].pngurl=this.signatures[t].signature.toDataURL()},submit:function(){var t=this;console.log(this.formData);try{var e=this.pdfBuffer;r.PDFDocument.load(e).then((function(e){var i=e.getForm();t.fields.forEach((function(e){e.key&&!["section","signature"].includes(e.field)&&t.formData[e.key]&&i.getTextField(e.key).setText(t.formData[e.key])})),i.flatten();var a=Object.keys(t.signatures).filter((function(e){return t.signatures[e].signed}));if(a.length>0){var s=a.map((function(i){var a=t.signatures[i].pngurl;return e.embedPng(a).then((function(a){var s=a,n=e.getPages(),r=t.pdfSignatures[i].page,o=n[r],l=s.scale(t.pdfSignatures[i].scale),d=o.getWidth()*t.pdfSignatures[i].xpos,c=o.getHeight()*t.pdfSignatures[i].ypos;console.log("Page ".concat(r," (").concat(o.getWidth()," x ").concat(o.getHeight(),") - insert image ").concat(i,".png (").concat(l.width," x ").concat(l.height,") at position ").concat(d," x ").concat(c)),o.drawImage(s,{x:d,y:c,width:l.width,height:l.height})}))}));Promise.all(s).then((function(){console.log("Render PDF with signatures"),e.saveAsBase64({dataUri:!0}).then((function(i){var a=e.getPages().length;t.browsePdf(i,a,!0,!0)}))}))}else console.log("PDF without signatures"),e.saveAsBase64({dataUri:!0}).then((function(i){var a=e.getPages().length;t.browsePdf(i,a,!0,!0)}))}))}catch(t){console.log(t)}},browsePdf:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=e;this.pdfFile=n,this.pdfPages=i,this.pdfTimestamp=this.getTimestamp(),this.showPdf=a,this.$nextTick((function(){t.downloadPdf=s}))},showTooltip:function(t){console.log(t)}}},O=(i(494),i(41)),B=Object(O.a)(T,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",{staticClass:"d-flex flex-xs-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap h-100 w-100 align-self-center",staticStyle:{"max-width":"1680px"}},[i("v-sheet",{staticClass:"flex-grow-1 flex-shrink-0 mx-2 px-2 h-100 h-xs-auto h-sm-auto overflow-y-auto col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",staticStyle:{"min-width":"300px","max-width":"100%"}},[i("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[i("v-list",[i("v-list-item",[i("p",{staticClass:"font-weight-bold py-0 my-0"},[t._v(t._s(t.title))])]),t._v(" "),t._l(t.fields,(function(e){return["divider"===e.field?i("v-divider",{key:e.key}):t._e(),t._v(" "),"section"===e.field?i("v-list-item",{key:e.key,attrs:{cols:"12",dense:""}},[i("p",{staticClass:"text-darken-1 py-0 mt-0 mb-2"},[t._v(t._s(e.label))])]):t._e(),t._v(" "),"textfield"===e.field?i("v-list-item",{key:e.key,attrs:{cols:"12",dense:""}},[i("v-text-field",{ref:e.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",pattern:e.pattern?e.pattern:null,title:e.hint?e.hint:null,minlength:e.minlength?e.minlength:null,maxlength:e.maxlength?e.maxlength:null,required:t.isFieldRequired(e.required),autocapitalize:e.autocapitalize?e.autocapitalize:null,suffix:e.suffix?e.suffix:null,type:e.specialType?e.specialType:null,hint:e.hint?e.hint:null,"persistent-hint":!(!e.hint||!t.formData[e.key]),placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":!t.formData[e.key]&&"auto"},on:{focus:function(t){return t.target.select()}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n                "+t._s(e.label)),t.isFieldRequired(e.required)?i("span",{staticClass:"red--text text--darken-2"},[t._v(" * ")]):t._e()]},proxy:!0},!e.tooltip?null:{key:"append",fn:function(){return[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",s,!1),a),[i("v-icon",{staticClass:"material-icons"},[t._v("info")])],1)]}}],null,!0)},[t._v(" "),i("span",[t._v(t._s(e.tooltip))])])]},proxy:!0}],null,!0),model:{value:t.formData[e.key],callback:function(i){t.$set(t.formData,e.key,i)},expression:"formData[item.key]"}})],1):t._e(),t._v(" "),"countries"===e.field?i("v-list-item",{key:e.key,attrs:{cols:"12",dense:""}},[i("v-autocomplete",{ref:e.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",items:t.getCountries,"item-text":function(t){return t.name+" "+t.flag},"item-value":function(t){return t.name},required:t.isFieldRequired(e.required),placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":""},on:{focus:function(t){return t.target.select()}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n                "+t._s(e.label)),t.isFieldRequired(e.required)?i("span",{staticClass:"red--text text--darken-2"},[t._v(" * ")]):t._e()]},proxy:!0}],null,!0),model:{value:t.formData[e.key],callback:function(i){t.$set(t.formData,e.key,i)},expression:"formData[item.key]"}})],1):t._e(),t._v(" "),"textarea"===e.field?i("v-list-item",{key:e.key,attrs:{cols:"12",dense:""}},[i("v-textarea",{ref:e.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",pattern:e.pattern?e.pattern:null,title:e.hint?e.hint:null,minlength:e.minlength?e.minlength:null,maxlength:e.maxlength?e.maxlength:null,required:t.isFieldRequired(e.required),hint:e.hint?e.hint:null,"persistent-hint":!(!e.hint||!t.formData[e.key]),placeholder:"","persistent-placeholder":"",outlined:"",dense:"",rows:1,"hide-details":!t.formData[e.key]&&"auto"},on:{focus:function(t){return t.target.select()}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n                "+t._s(e.label)),t.isFieldRequired(e.required)?i("span",{staticClass:"red--text text--darken-2"},[t._v(" * ")]):t._e()]},proxy:!0}],null,!0),model:{value:t.formData[e.key],callback:function(i){t.$set(t.formData,e.key,i)},expression:"formData[item.key]"}})],1):t._e(),t._v(" "),"signature"===e.field?i("v-list-item",{key:e.key,attrs:{cols:"12",dense:""}},[i("v-card",{staticClass:"px-0 mb-3",staticStyle:{width:"100%"},attrs:{elevation:"0",outlined:""}},[i("v-card-text",[i("v-row",{staticClass:"mr-xs-12 pr-sm-8",attrs:{justify:"space-between","no-gutters":""}},[i("v-col",{attrs:{cols:"8"}},[i("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.label))])]),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"primary",block:""},on:{click:function(i){return t.openDialog(e.key)}}},[t._v("\n                      Add signature\n                    ")])],1)],1),t._v(" "),i("v-row",{staticClass:"mr-xs-12 pr-sm-8",attrs:{align:"center",justify:"space-between","no-gutters":""}},[i("v-col",{staticStyle:{height:"40px"},attrs:{cols:"12"}},[t.signatures&&t.signatures[e.key]&&t.signatures[e.key].signed?i("div",[i("img",{staticStyle:{"max-height":"40px"},attrs:{src:t.signatures[e.key].pngurl}})]):i("div",[t._v("\n                      Add digital signature now or sign later\n                    ")])])],1),t._v(" "),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialogs[e.key],callback:function(i){t.$set(t.dialogs,e.key,i)},expression:"dialogs[item.key]"}},[i("v-card",{staticClass:"prevent-select",staticStyle:{height:"100%"}},[i("v-toolbar",[i("v-toolbar-title",[t._v(t._s(e.label))]),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{attrs:{text:""},on:{click:function(i){return t.closeDialog(e.key)}}},[t._v("\n                        Close\n                      ")]),t._v(" "),i("v-toolbar-items",[i("v-btn",{attrs:{text:""},on:{click:function(i){return t.saveDialog(e.key)}}},[t._v("\n                          Save\n                        ")])],1)],1),t._v(" "),i("div",{staticClass:"signature-card"},[i("div",{staticClass:"signature-pad mt-8",attrs:{id:"signature-pad--"+e.key}},[i("div",{staticClass:"signature-pad--body"},[i("canvas")]),t._v(" "),i("div",{staticClass:"signature-pad--footer"},[i("div",{staticClass:"description"},[t._v("Sign above")])])])])],1)],1)],1)],1)],1):t._e()]})),t._v(" "),i("v-list-item",[i("v-row",{staticClass:"px-2",attrs:{align:"center",justify:"space-around"}},[i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticClass:"mr-8 px-0",attrs:{type:"submit",block:"",color:"teal",disabled:!t.formFilled}},[t._v("Generate Agreement")])],1)],1)],1),t._v(" "),i("v-list-item",[i("v-row",{staticClass:"px-2",attrs:{align:"center",justify:"space-around"}},[i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticClass:"mr-8 px-0",attrs:{block:"",color:"success",href:t.pdfFile,download:t.getPdfTitle,target:"_blank",disabled:!t.pdfFile||!t.downloadPdf}},[t._v("Download Agreement")])],1)],1)],1)],2)],1)]),t._v(" "),i("v-sheet",{staticClass:"flex-grow-1 flex-shrink-1 mx-2 px-2 h-100 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",staticStyle:{"min-width":"300px","max-width":"100%"}},[!t.showPdf?t._e():i("EmbedPdfViewer",{attrs:{source:t.pdfData,pages:t.pdfPages,height:"500"}})],1)],1)}),[],!1,null,null,null);e.default=B.exports}}]);