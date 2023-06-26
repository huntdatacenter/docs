(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{485:function(e,t,n){},763:function(e,t,n){"use strict";n(485)},790:function(e,t,n){"use strict";n.r(t);var a=n(124),l=n(742),o=(n(743),n(10),n(201),n(411),n(744),n(127),n(35),n(64),n(378),n(209),n(700)),s=n(795),i=n(415),r=n(777),c=n(778),u=n(404),d=n(425),p=n(768),f=n(781),v=n(472),m=n(493),h=n(782),b=n(474),y=n(783),k=n(484),x=n(784),_=n(483),g=n(426),C=n(427),w=n(428),j=n(429),D={name:"ServiceDesk",components:{VApp:o.a,VDialog:s.a,VBtn:i.a,VCol:r.a,VRow:c.a,VTextField:u.a,VTextarea:d.a,VSelect:p.a,VAutocomplete:f.a,VIcon:v.a,VToolbar:m.a,VToolbarTitle:h.b,VCard:b.a,VCardText:y.b,VCardActions:y.a,VSubheader:k.a,VSpacer:x.a,VDivider:_.a,VToolbarItems:h.a,VExpansionPanel:g.a,VExpansionPanels:C.a,VExpansionPanelHeader:w.a,VExpansionPanelContent:j.a},props:{id:{type:String,default:"applet"},title:{type:String,default:null},fields:{type:Array,default:null},template:{type:Object,default:null},requirements:{type:Array,default:null},recipient:{type:String,default:"cloud.support+hunt-cloud-request@hunt.ntnu.no"}},data:function(){return{subjectTemplate:null,bodyTemplate:null,formData:{},message:{subject:null,body:null},dialog:null,sendClicked:!1,finalizeClicked:!1,panel:0}},computed:{messageSubject:function(){return this.subjectTemplate?this.wrap(this.subjectTemplate):null},messageBody:function(){return this.bodyTemplate?this.wrap(this.bodyTemplate):null},formFilled:function(){var e=this;return this.fields.every((function(t){return!(!e.formData[t.key]&&!t.optional)}))},encodedSubject:function(){return this.subjectTemplate?this.encode(this.subjectTemplate):null},encodedBody:function(){return this.bodyTemplate?this.encode(this.bodyTemplate):null},mailto:function(){return"mailto:".concat(this.recipient,"?subject=").concat(this.encodedSubject,"&body=").concat(this.encodedBody)}},mounted:function(){},created:function(){this.panel=0,this.subjectTemplate=this.template?this.template.subject:null,this.bodyTemplate=this.template?this.template.body:null;var e,t=Object(l.a)(this.fields);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(n&&n.key&&n.default){var a=n.default;this.formData[n.key]=a}}}catch(e){t.e(e)}finally{t.f()}},methods:{close:function(){this.finalizeClicked=!0,this.sendClicked=!0,this.panel=0,this.dialog=!1},closeBtn:function(){this.panel=0,this.dialog=!1},submit:function(){this.panel=2},review:function(){this.finalizeClicked=!0,this.panel=2},actionSend:function(){this.sendClicked=!0,this.panel=3,window.location.href=this.mailto},encode:function(e){return e?encodeURIComponent(this.wrap(e)):null},setValue:function(e,t){var n={};n[t]=e?e.trim():e,this.formData=Object.assign({},this.formData,n)},wrap:function(e){for(var t=e,n=0,l=Object.entries(this.formData);n<l.length;n++){var o=Object(a.a)(l[n],2),s=o[0],i=o[1];i&&(t=Array.isArray(i)?t.replaceAll("{".concat(s,"}"),i.join(", ")):t.replaceAll("{".concat(s,"}"),i))}return t=t.replaceAll("\n---\n","\n```  \n")}}},V=(n(763),n(41)),S=Object(V.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[n("v-app",{attrs:{id:e.id}},[n("v-dialog",{attrs:{"hide-overlay":"",transition:"dialog-bottom-transition","max-width":"960px"},on:{"click:outside":e.closeBtn},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,l=t.attrs;return[n("div",{staticClass:"home",staticStyle:{padding:"0px"}},[n("div",{staticClass:"hero"},[n("p",{staticClass:"action"},[n("a",e._g(e._b({staticClass:"nav-link external action-button"},"a",l,!1),a),[e._v(e._s(e.title))])])])])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"#00509e"}},[n("v-toolbar-title",[e._v("Service desk - "+e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{icon:"",fab:""},on:{click:e.closeBtn}},[n("v-icon",[e._v("close")])],1)],1)],1),e._v(" "),n("v-card-text",{staticClass:"pt-6"},[n("v-expansion-panels",{model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.formFilled}},[e._v("\n                Request details\n                ")]),e._v(" "),n("v-expansion-panel-content",{staticClass:"mt-2"},[n("v-row",{attrs:{justify:"center"}},e._l(e.requirements,(function(t){return n("v-col",{key:t.key,staticClass:"pb-0 pt-0",attrs:{cols:"12",dense:""}},[n("p",{staticClass:"mb-2",domProps:{innerHTML:e._s(t)}})])})),1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"success",block:""},on:{click:function(t){e.panel=e.panel+1}}},[e._v("\n                        Continue\n                      ")])],1)],1)],1)],1),e._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.formFilled},scopedSlots:e._u([e.formFilled?{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"teal"}},[e._v("done")])]},proxy:!0}:null],null,!0)},[e._v("\n                Form\n                ")]),e._v(" "),n("v-expansion-panel-content",[n("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("v-row",{attrs:{justify:"center"}},e._l(e.fields,(function(t){return n("v-col",{key:t.key,attrs:{cols:"8"}},["textfield"===t.field?n("v-text-field",{attrs:{autocomplete:"ignore-field",label:t.label,pattern:t.pattern?t.pattern:null,title:t.hint?t.hint:null,hint:t.hint?t.hint:null,suffix:t.suffix?t.suffix:null,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()},change:function(n){return e.setValue(n,t.key)}},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):"selector"===t.field?n("v-select",{attrs:{items:t.options,label:t.label,placeholder:"","persistent-placeholder":"",chips:"",multiple:"",outlined:"","hide-details":""},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):"selectone"===t.field?n("v-select",{attrs:{items:t.options,label:t.label,placeholder:"","persistent-placeholder":"",chips:"",outlined:"","hide-details":""},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):"autocompleteone"===t.field?n("v-autocomplete",{attrs:{items:t.options,label:t.label,placeholder:"","persistent-placeholder":"","small-chips":"",outlined:"",dense:"","clear-icon":"close","hide-details":""},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):e._e(),e._v(" "),"number"===t.field?n("v-text-field",{attrs:{autocomplete:"ignore-field",type:"number",label:t.label,title:t.hint?t.hint:null,hint:t.hint?t.hint:null,suffix:t.suffix?t.suffix:null,min:t.min?t.min:null,max:t.max?t.max:null,step:t.step?t.step:null,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()},change:function(n){return e.setValue(n,t.key)}},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):e._e()],1)})),1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"success",block:"",type:"submit",disabled:!e.formFilled}},[e._v("\n                        Continue\n                      ")])],1)],1)],1)])],1),e._v(" "),n("v-expansion-panel",{attrs:{disabled:!e.formFilled}},[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.sendClicked},scopedSlots:e._u([e.sendClicked?{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"teal"}},[e._v(" done ")])]},proxy:!0}:null],null,!0)},[e._v("\n                Email request\n                ")]),e._v(" "),n("v-expansion-panel-content",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-text-field",{staticClass:"py-2",attrs:{value:e.recipient,label:"To",outlined:"",readonly:"",dense:"","hide-details":""},on:{focus:function(e){return e.target.select()}}}),e._v(" "),n("v-text-field",{staticClass:"py-2",attrs:{label:"Subject",outlined:"",readonly:"",dense:"","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.messageSubject,callback:function(t){e.messageSubject="string"==typeof t?t.trim():t},expression:"messageSubject"}}),e._v(" "),n("v-textarea",{staticClass:"py-2",attrs:{label:"Body",outlined:"",readonly:"",rows:"13","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.messageBody,callback:function(t){e.messageBody="string"==typeof t?t.trim():t},expression:"messageBody"}})],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"primary",block:""},on:{click:e.actionSend}},[e._v("\n                      Open Email Client\n                    ")])],1)],1)],1)],1),e._v(" "),e.sendClicked?n("v-expansion-panel",{attrs:{disabled:!e.formFilled}},[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.finalizeClicked},scopedSlots:e._u([e.finalizeClicked?{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"teal"}},[e._v(" done ")])]},proxy:!0}:null],null,!0)},[e._v("\n                Finalize request\n                ")]),e._v(" "),n("v-expansion-panel-content",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}})],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("p",{staticClass:"text-center body-1"},[e._v("\n                      Now your Email client should open and you can follow up\n                      sending Service desk request there.\n                    ")])]),e._v(" "),n("v-col",{attrs:{cols:"10"}},[n("p",{staticClass:"text-center body-1"},[e._v("\n                      In case your Email client did not open and you want to\n                      send email manually feel free to hit Review button and\n                      copy the message contents and use our service desk\n                      address.\n                    ")])])],1)],1)],1):e._e()],1)],1),e._v(" "),e.sendClicked?n("v-card-actions",[n("v-row",{staticClass:"mb-2",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"primary",block:"",outlined:""},on:{click:e.review}},[e._v("\n                Review\n              ")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"link",block:""},on:{click:e.close}},[e._v(" Close ")])],1)],1)],1):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);t.default=S.exports}}]);