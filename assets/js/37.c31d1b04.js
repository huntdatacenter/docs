(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1069:function(e,t,n){"use strict";n.r(t);var a=n(124),i=(n(73),n(74),n(9),n(98),n(23),n(28),n(127),n(38),n(36),n(86));n(215),n(125),n(619),n(212),n(435),n(511),n(35),n(64),n(439),n(214);var s=n(512),o=n(475),l=n(396),r=n(1087),c=n(1088),u=n(421),d=n(485),p=n(463),h=n(513),v=n(543),f=n(623),m=n(1086),b=n(442),y=n(995),x=n(425),k=n(473),g=n(424),_=n(515),C=n(516),w=n(517),j=n(518),D={name:"ServiceDesk",components:{VApp:s.a,VDialog:o.a,VBtn:l.a,VCol:r.a,VRow:c.a,VTextField:u.a,VTextarea:d.a,VSelect:p.a,VAutocomplete:h.a,VIcon:v.a,VToolbar:f.a,VToolbarTitle:m.b,VCard:b.a,VCardText:y.c,VCardActions:y.a,VSubheader:x.a,VSpacer:k.a,VDivider:g.a,VToolbarItems:m.a,VExpansionPanel:_.a,VExpansionPanels:C.a,VExpansionPanelHeader:w.a,VExpansionPanelContent:j.a,CopyTextField:function(){return n.e(4).then(n.bind(null,1080))},CopyTextArea:function(){return n.e(70).then(n.bind(null,1079))}},emits:["input"],props:{id:{type:String,default:"applet"},value:{type:Boolean,default:!1},title:{type:String,default:null},fields:{type:Array,default:null},template:{type:Object,default:null},requirements:{type:Array,default:null},attachments:{type:Array,default:null},recipient:{type:String,default:"cloud.support+hunt-cloud-request@hunt.ntnu.no"},cacheKey:{type:String,default:null},fullscreen:{type:Boolean,default:!1}},data:function(){return{subjectTemplate:null,bodyTemplate:null,formData:{},message:{subject:null,body:null},loadingEmailButtons:!0,sendClicked:!1,finalizeClicked:!1,panel:0}},computed:{messageSubject:function(){return this.subjectTemplate?this.wrap(this.subjectTemplate):null},messageBody:function(){return this.bodyTemplate?this.wrap(this.bodyTemplate):null},formFilled:function(){var e=this;return this.fields.every((function(t){return!(!e.formData[t.key]&&!t.optional)}))},encodedSubject:function(){return this.subjectTemplate?this.encode(this.subjectTemplate):null},encodedBody:function(){return this.bodyTemplate?this.encode(this.bodyTemplate):null},encodedRecipient:function(){return this.recipient?this.encode(this.recipient):this.recipient},mailto:function(){var e="mailto:".concat(this.encodedRecipient,"?subject=").concat(this.encodedSubject,"&body=").concat(this.encodedBody);return console.log(e),e},outlookDoubleEncodedTo:function(){return this.recipient?this.encode(this.encode(this.recipient)):this.recipient},wrapRecipient:function(){return this.recipient?this.encode(this.encode("HUNT Cloud - Service Desk <".concat(this.recipient,">"))):this.recipient},deeplinkUrl:function(){var e="".concat("https://outlook.office.com/mail/deeplink/compose","?to=").concat(this.wrapRecipient,"&subject=").concat(this.encodedSubject,"&body=").concat(this.encodedBody);return console.log(e),e}},mounted:function(){},created:function(){this.panel=0,this.loadingEmailButtons=!0,this.subjectTemplate=this.template?this.template.subject:null,this.bodyTemplate=this.template?this.template.body:null;var e,t=[],n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(i.a)(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){r=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(r)throw o}}}}(this.fields);try{for(n.s();!(e=n.n()).done;){var s=e.value;if(s&&s.key&&(t.push(s.key),s.default||""===s.default)){var o=s.default;this.formData[s.key]=o}}}catch(e){n.e(e)}finally{n.f()}var l=this.fetchAgreementFormCache(this.cacheKey);if(l)try{for(var r=0,c=Object.entries(l);r<c.length;r++){var u=Object(a.a)(c[r],2),d=u[0],p=u[1];"open"!==d&&t.includes(d)&&(console.log("Prefill from cache: ".concat(d," = ").concat(p)),this.setValue(p,d))}}catch(e){console.log("Failed to load form fields from cache")}},methods:{close:function(){this.finalizeClicked=!0,this.sendClicked=!0,this.panel=0,this.$emit("input",!1)},closeBtn:function(){this.panel=0,this.$emit("input",!1)},activateSendButtons:function(){this.loadingEmailButtons=!1},submit:function(){this.panel=2,setTimeout(this.activateSendButtons,1200)},review:function(){this.finalizeClicked=!0,this.panel=2},actionSend:function(){this.sendClicked=!0,this.panel=3,window.location.href=this.mailto},actionSendOutlook:function(){this.sendClicked=!0,this.panel=3,window.location.href=this.deeplinkUrl},actionSendOutlookPopup:function(){this.sendClicked=!0,this.panel=3,window.open(this.deeplinkUrl,"_blank")},encode:function(e){return e?encodeURIComponent(this.wrap(e)):null},setValue:function(e,t){var n={};n[t]=e?e.trim():e,this.formData=Object.assign({},this.formData,n)},wrap:function(e){for(var t=e,n=0,i=Object.entries(this.formData);n<i.length;n++){var s=Object(a.a)(i[n],2),o=s[0],l=s[1];(l||""===l)&&(t=Array.isArray(l)?t.replaceAll("{".concat(o,"}"),l.join(", ")):t.replaceAll("{".concat(o,"}"),l))}return t=t.replaceAll("\n---\n","\n```  \n")},fetchAgreementFormCache:function(e){var t={},n=e?localStorage.getItem(e):null;try{t=n?JSON.parse(n):{}}catch(e){console.log("Failed to fetch data from cache")}return t}}},A=(n(621),n(41)),B=Object(A.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[n("v-app",{attrs:{id:e.id}},[n("v-dialog",{attrs:{"hide-overlay":"",transition:"dialog-bottom-transition","max-width":"960px",fullscreen:e.fullscreen},on:{"click:outside":e.closeBtn},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"#00509e"}},[n("v-toolbar-title",[e._v("Service desk - "+e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{icon:"",fab:""},on:{click:e.closeBtn}},[n("v-icon",[e._v("close")])],1)],1)],1),e._v(" "),n("v-card-text",{staticClass:"pt-6"},[n("v-expansion-panels",{model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.formFilled}},[e._v("\n                Request details\n                ")]),e._v(" "),n("v-expansion-panel-content",{staticClass:"mt-2"},[n("v-row",{attrs:{justify:"center"}},e._l(e.requirements,(function(t){return n("v-col",{key:t.key,staticClass:"pb-0 pt-0",attrs:{cols:"12",dense:""}},[n("p",{staticClass:"mb-2",domProps:{innerHTML:e._s(t)}})])})),1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"success",block:""},on:{click:function(t){e.panel=e.panel+1}}},[e._v("\n                        Continue\n                      ")])],1)],1)],1)],1),e._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.formFilled},scopedSlots:e._u([e.formFilled?{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"teal"}},[e._v("done")])]},proxy:!0}:null],null,!0)},[e._v("\n                Form\n                ")]),e._v(" "),n("v-expansion-panel-content",[n("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("v-row",{attrs:{justify:"center"}},e._l(e.fields,(function(t){return n("v-col",{key:t.key,attrs:{cols:"8"}},["textfield"===t.field?n("v-text-field",{attrs:{autocomplete:"ignore-field",label:t.label,pattern:t.pattern?t.pattern:null,title:t.hint?t.hint:null,hint:t.hint?t.hint:null,suffix:t.suffix?t.suffix:null,autocapitalize:t.autocapitalize?t.autocapitalize:null,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()},change:function(n){return e.setValue(n,t.key)}},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):"textarea"===t.field?n("v-textarea",{attrs:{autocomplete:"ignore-field",label:t.label,title:t.hint?t.hint:null,hint:t.hint?t.hint:null,suffix:t.suffix?t.suffix:null,autocapitalize:t.autocapitalize?t.autocapitalize:null,rows:t.rows?t.rows:3,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()},change:function(n){return e.setValue(n,t.key)}},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):"selector"===t.field?n("v-select",{attrs:{items:t.options,label:t.label,placeholder:"","persistent-placeholder":"",chips:"",multiple:"",outlined:"","hide-details":""},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):"selectone"===t.field?n("v-select",{attrs:{items:t.options,label:t.label,placeholder:"","persistent-placeholder":"",chips:"",outlined:"","hide-details":""},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):"autocompleteone"===t.field?n("v-autocomplete",{attrs:{items:t.options,label:t.label,placeholder:"","persistent-placeholder":"","small-chips":"",outlined:"",dense:"","clear-icon":"close","hide-details":""},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):"number"===t.field?n("v-text-field",{attrs:{autocomplete:"ignore-field",type:"number",label:t.label,title:t.hint?t.hint:null,hint:t.hint?t.hint:null,suffix:t.suffix?t.suffix:null,min:t.min?t.min:null,max:t.max?t.max:null,step:t.step?t.step:null,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()},change:function(n){return e.setValue(n,t.key)}},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[item.key]"}}):e._e()],1)})),1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"success",block:"",type:"submit",disabled:!e.formFilled}},[e._v("\n                        Continue\n                      ")])],1)],1)],1)])],1),e._v(" "),n("v-expansion-panel",{attrs:{disabled:!e.formFilled}},[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.sendClicked},scopedSlots:e._u([e.sendClicked?{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"teal"}},[e._v(" done ")])]},proxy:!0}:null],null,!0)},[e._v("\n                Email request\n                ")]),e._v(" "),n("v-expansion-panel-content",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("CopyTextField",{staticClass:"py-2",attrs:{value:e.recipient,label:"Email recipient (TO)","prepend-inner-icon":"mail"}}),e._v(" "),n("CopyTextField",{staticClass:"py-2",attrs:{value:e.messageSubject,label:"Email subject"}}),e._v(" "),n("CopyTextArea",{staticClass:"py-2",attrs:{value:e.messageBody,label:"Body",rows:"8"}})],1)],1),e._v(" "),e.attachments&&e.attachments.length>0?n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"pb-0 pt-0 px-4",attrs:{cols:"10",dense:""}},[n("b",[n("p",{staticClass:"mb-2"},[e._v("Remember to attach these documents in the email request:")])])])],1):e._e(),e._v(" "),e.attachments&&e.attachments.length>0?n("v-row",{staticClass:"mb-6",attrs:{justify:"center"}},[n("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"1",align:"center",dense:""}},[n("v-icon",[e._v("attach_file")])],1),e._v(" "),n("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"9",dense:""}},[n("ul",e._l(e.attachments,(function(t){return n("li",{key:t.key,staticClass:"pb-0 pt-0",attrs:{dense:""}},[n("p",{staticClass:"mb-2",domProps:{innerHTML:e._s(t)}})])})),0)])],1):e._e(),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"success",block:"",loading:e.loadingEmailButtons,disabled:e.loadingEmailButtons},on:{click:e.actionSend}},[e._v("\n                      Open in Email Client\n                    ")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"primary",block:"",loading:e.loadingEmailButtons,disabled:e.loadingEmailButtons},on:{click:e.actionSendOutlookPopup}},[e._v("\n                      Open in Outlook Web\n                    ")])],1)],1)],1)],1),e._v(" "),e.sendClicked?n("v-expansion-panel",{attrs:{disabled:!e.formFilled}},[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":e.finalizeClicked},scopedSlots:e._u([e.finalizeClicked?{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"teal"}},[e._v(" done ")])]},proxy:!0}:null],null,!0)},[e._v("\n                Finalize request\n                ")]),e._v(" "),n("v-expansion-panel-content",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}})],1),e._v(" "),n("v-row",{staticClass:"mb-6",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("p",{staticClass:"text-center body-1"},[e._v("\n                      Now your Email client should open and you can follow up\n                      sending Service desk request there.\n                    ")])]),e._v(" "),n("v-col",{attrs:{cols:"10"}},[n("p",{staticClass:"text-center body-1"},[e._v("\n                      In case your "),n("b",[e._v("Email client did not open")]),e._v(" and you want to\n                      send email manually feel free to hit Review button and\n                      copy the message contents and use our service desk email\n                      address.\n                    ")])])],1),e._v(" "),e.attachments&&e.attachments.length>0?n("v-row",{staticClass:"mb-6",attrs:{justify:"center"}},[n("v-col",{staticClass:"pb-0 pt-0 px-4",attrs:{cols:"1",align:"center",dense:""}},[n("v-icon",[e._v("attach_file")])],1),e._v(" "),n("v-col",{staticClass:"pb-0 pt-0 px-4",attrs:{cols:"9",dense:""}},[n("v-row",[n("b",[n("p",{staticClass:"mb-2"},[e._v("Remember to attach these documents in the email request:")])])]),e._v(" "),n("v-row",[n("ul",e._l(e.attachments,(function(t){return n("li",{key:t.key,staticClass:"pb-0 pt-0",attrs:{dense:""}},[n("p",{staticClass:"mb-2",domProps:{innerHTML:e._s(t)}})])})),0)])],1)],1):e._e()],1)],1):e._e()],1)],1),e._v(" "),e.sendClicked?n("v-card-actions",[n("v-row",{staticClass:"mb-2",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"success",block:"",outlined:""},on:{click:e.review}},[e._v("\n                Review email\n              ")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"primary",block:"",outlined:""},on:{click:e.actionSendOutlook}},[e._v("\n                Open in Outlook Web\n              ")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"link",block:""},on:{click:e.close}},[e._v(" Close ")])],1)],1)],1):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);t.default=B.exports},435:function(e,t,n){var a=n(2),i=n(1),s=n(42),o=n(5),l=n(66),r=n(67),c=n(202),u=/MSIE .\./.test(l),d=i.Function,p=function(e){return function(t,n){var a=c(arguments.length,1)>2,i=o(t)?t:d(t),l=a?r(arguments,2):void 0;return e(a?function(){s(i,this,l)}:i,n)}};a({global:!0,bind:!0,forced:u},{setTimeout:p(i.setTimeout),setInterval:p(i.setInterval)})},439:function(e,t,n){"use strict";var a=n(2),i=n(1),s=n(13),o=n(3),l=n(27),r=n(5),c=n(204),u=n(18),d=n(65),p=n(203),h=n(206),v=n(6),f=n(21),m=v("replace"),b=RegExp.prototype,y=i.TypeError,x=o(p),k=o("".indexOf),g=o("".replace),_=o("".slice),C=Math.max,w=function(e,t,n){return n>e.length?-1:""===t?n:k(e,t,n)};a({target:"String",proto:!0},{replaceAll:function(e,t){var n,a,i,o,p,v,j,D,A,B=l(this),O=0,S=0,T="";if(null!=e){if((n=c(e))&&(a=u(l("flags"in b?e.flags:x(e))),!~k(a,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(i=d(e,m))return s(i,e,B,t);if(f&&n)return g(u(B),e,t)}for(o=u(B),p=u(e),(v=r(t))||(t=u(t)),j=p.length,D=C(1,j),O=w(o,p,0);-1!==O;)A=v?u(t(p,O,o)):h(p,o,O,[],void 0,t),T+=_(o,S,O)+A,S=O+j,O=w(o,p,O+D);return S<o.length&&(T+=_(o,S)),T}})},462:function(e,t,n){},511:function(e,t,n){"use strict";var a=n(2),i=n(217).trim;a({target:"String",proto:!0,forced:n(519)("trim")},{trim:function(){return i(this)}})},515:function(e,t,n){"use strict";var a=n(384),i=n(375),s=n(8),o=n(369);t.a=Object(o.a)(Object(a.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(i.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:()=>({content:null,header:null,nextIsActive:!1}),computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(s.o)(this))}})},516:function(e,t,n){"use strict";n(462);var a=n(403),i=n(17);t.a=a.a.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...a.a.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(i.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(i.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const n=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(a)}}})},517:function(e,t,n){"use strict";var a=n(388),i=n(382),s=n(371),o=n(375),l=n(378),r=n(8),c=n(369);const u=Object(c.a)(s.a,Object(o.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t.a=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:l.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(r.o)(this,"actions")||[this.$createElement(i.a,this.expandIcon)];return this.$createElement(a.d,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(r.o)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},518:function(e,t,n){"use strict";var a=n(388),i=n(402),s=n(371),o=n(375),l=n(8),r=n(369);const c=Object(r.a)(i.a,s.a,Object(o.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t.a=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(a.a,this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(l.o)(this))])]))}})},519:function(e,t,n){var a=n(94).PROPER,i=n(4),s=n(218);e.exports=function(e){return i((function(){return!!s[e]()||"​᠎"!=="​᠎"[e]()||a&&s[e].name!==e}))}},538:function(e,t,n){},619:function(e,t,n){var a=n(2),i=n(620).entries;a({target:"Object",stat:!0},{entries:function(e){return i(e)}})},620:function(e,t,n){var a=n(10),i=n(3),s=n(72),o=n(22),l=i(n(97).f),r=i([].push),c=function(e){return function(t){for(var n,i=o(t),c=s(i),u=c.length,d=0,p=[];u>d;)n=c[d++],a&&!l(i,n)||r(p,e?[n,i[n]]:i[n]);return p}};e.exports={entries:c(!0),values:c(!1)}},621:function(e,t,n){"use strict";n(538)}}]);