(window.webpackJsonp=window.webpackJsonp||[]).push([[25,83],{377:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var n=s(374);function a(e,t,s){return Object(n.a)(e,t,s).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[e])return this[e].activeClass}},disabled:Boolean},data:()=>({isActive:!1}),computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[e]&&this[e].register(this)},beforeDestroy(){this[e]&&this[e].unregister(this)},methods:{toggle(){this.$emit("change")}}})}a("itemGroup")},389:function(e,t,s){"use strict";var n=s(17),a=s(1);t.a=a.a.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(n.e)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}})},390:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));s(400);var n=s(396),a=s(414),o=s(372),i=s(368),r=s(17);const l=Object(i.a)(n.a,a.a,o.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((e,t)=>this.toggleMethod(this.getValue(e,t)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some(e=>this.valueComparator(e,t)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(r.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue:(e,t)=>void 0===e.value?t:e.value,onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",()=>this.onClick(e)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),s=this.getValue(e,t);this.items.splice(t,1);if(!(this.selectedValues.indexOf(s)<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(e=>e!==s):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const s=this.getValue(e,t);e.isActive=this.toggleMethod(s)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const s=t.find(e=>!e.disabled);if(!s)return;const n=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,n))},updateMultiple(e){const t=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),s=t.findIndex(t=>this.valueComparator(t,e));this.mandatory&&s>-1&&t.length-1<1||null!=this.max&&s<0&&t.length+1>this.max||(s>-1?t.splice(s,1):t.push(e),this.internalValue=t)},updateSingle(e){const t=this.valueComparator(this.internalValue,e);this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},396:function(e,t,s){"use strict";var n=s(1),a=s(8);t.a=n.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:a.j}}})},397:function(e,t,s){"use strict";var n=s(3),a=s(0),o=s(13),i=s(2),r=s(28),l=s(6),c=s(203),p=s(18),u=s(65),d=s(202),h=s(207),v=s(5),f=s(21),m=v("replace"),y=RegExp.prototype,g=a.TypeError,x=i(d),_=i("".indexOf),b=i("".replace),k=i("".slice),C=Math.max,w=function(e,t,s){return s>e.length?-1:""===t?s:_(e,t,s)};n({target:"String",proto:!0},{replaceAll:function(e,t){var s,n,a,i,d,v,S,A,I,T=r(this),P=0,V=0,N="";if(null!=e){if((s=c(e))&&(n=p(r("flags"in y?e.flags:x(e))),!~_(n,"g")))throw g("`.replaceAll` does not allow non-global regexes");if(a=u(e,m))return o(a,e,T,t);if(f&&s)return b(p(T),e,t)}for(i=p(T),d=p(e),(v=l(t))||(t=p(t)),S=d.length,A=C(1,S),P=w(i,d,0);-1!==P;)I=v?p(t(d,P,i)):h(d,i,P,[],void 0,t),N+=k(i,V,P)+I,V=P+S,P=w(i,d,P+A);return V<i.length&&(N+=k(i,V)),N}})},400:function(e,t,s){},401:function(e,t,s){},410:function(e,t,s){},445:function(e,t,s){"use strict";s(401);var n=s(405),a=s(368);const o=Object(a.a)(n.a);t.a=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...n.a.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick(()=>{var t;e?this.calculateInputHeight():null===(t=this.$refs.input)||void 0===t||t.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(s,t)+"px"},genInput(){const e=n.a.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){n.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},453:function(e,t,s){"use strict";var n=s(377),a=s(374),o=s(8),i=s(368);t.a=Object(i.a)(Object(n.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(a.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:()=>({content:null,header:null,nextIsActive:!1}),computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o.o)(this))}})},454:function(e,t,s){"use strict";s(410);var n=s(390),a=s(17);t.a=n.a.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...n.a.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(a.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(a.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const s=this.getValue(e,t),n=this.getValue(e,t+1);e.isActive=this.toggleMethod(s),e.nextIsActive=this.toggleMethod(n)}}})},455:function(e,t,s){"use strict";var n=s(387),a=s(385),o=s(371),i=s(374),r=s(379),l=s(8),c=s(368);const p=Object(c.a)(o.a,Object(i.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t.a=p.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(l.o)(this,"actions")||[this.$createElement(a.a,this.expandIcon)];return this.$createElement(n.c,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(l.o)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},456:function(e,t,s){"use strict";var n=s(387),a=s(389),o=s(371),i=s(374),r=s(8),l=s(368);const c=Object(l.a)(a.a,o.a,Object(i.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t.a=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(n.a,this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(r.o)(this))])]))}})},868:function(e,t,s){"use strict";s.r(t);s(10),s(23),s(27),s(201),s(35),s(64),s(397);var n=s(876),a=s(877),o=s(405),i=s(445),r=s(453),l=s(454),c=s(455),p=s(456),u={name:"MacJourney",components:{VCol:n.a,VRow:a.a,VTextField:o.a,VTextarea:i.a,VExpansionPanel:r.a,VExpansionPanels:l.a,VExpansionPanelHeader:c.a,VExpansionPanelContent:p.a,CopyTextField:function(){return s.e(3).then(s.bind(null,870))}},props:{username:{type:String,default:null},labName:{type:String,default:null},ipAddress:{type:String,default:null},template:{type:String,default:""}},data:function(){return{sshKeygenWin:'ssh-keygen -q -t rsa -b 4096 -f %USERPROFILE%\\.ssh\\id_rsa -N ""',passExpired:"WARNING: Your password has expired.\nYou must change your password now and login again!\nChanging password for {username}.\n(current) UNIX password:",passSetNew:"New password:\nRetype new password:",passChangedEntry:"passwd: Password updated successfully\nConnection to {ip_address} closed.",passChangedHome:"passwd: Password updated successfully\nConnection to home closed."}},computed:{cfgShow:function(){return!!(this.ipAddress&&this.labName&&this.username)},configText:function(){return this.ipAddress&&this.labName&&this.username?this.wrap(this.template):null},passExpiredText:function(){return this.ipAddress&&this.labName&&this.username?this.wrap(this.passExpired):null},hostsWorkbench:function(){return this.ipAddress&&this.labName?"".concat(this.ipAddress,"    ").concat(this.labName,".lab.hdc.ntnu.no"):null},hostsCyberduck:function(){return this.ipAddress&&this.labName?"10.5.5.12    home\n".concat(this.ipAddress,"    ").concat(this.labName,"-entry\n"):null}},created:function(){},methods:{wrap:function(e){var t=e;return t=(t=(t=t.replaceAll("{ip_address}",this.ipAddress)).replaceAll("{lab_name}",this.labName)).replaceAll("{username}",this.username)},copyText:function(e){this.$refs[e].$el.querySelector("input").select(),document.execCommand("copy")},copyTextArea:function(e){this.$refs[e].$el.querySelector("textarea").select(),document.execCommand("copy")}}},d=s(41),h=Object(d.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-expansion-panels",{attrs:{elevation:"0"}},[s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#vpn-config"}},[e._v("#")]),e._v(" 1. VPN Configuration")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#vpn-config",staticClass:"mt-2",attrs:{id:"vpn-config"}},[e._v("\n      If you have not setup HUNT Cloud VPN yet follow our\n      "),s("a",{attrs:{href:"/do-science/lab-access/configure-vpn/",target:"_blank"}},[e._v("VPN configuration guide")])])],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-passphrase"}},[e._v("#")]),e._v(" 2. SSH Passphrase change")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#ssh-passphrase",staticClass:"mt-2",attrs:{id:"ssh-passphrase"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.1. Design "),s("a",{attrs:{href:"/do-science/lab-access/configure-ssh/#_3-2-design-a-passphrase",target:"_blank"}},[e._v("your new passphrase")]),e._v(".\n      ")]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.2. Start Terminal application.\n      ")]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.3. Login to entry machine.\n        "),s("CopyTextField",{attrs:{value:"ssh -o StrictHostKeyChecking=accept-new "+e.username+"@"+e.ipAddress,label:"",prefix:"~",placeholder:"Your link is missing access token"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.4. You should then be prompted to enter a password. Enter your "),s("code",[e._v("SSH temporary key")]),e._v(" from Signal message.\n        "),s("div",{staticClass:"language- extra-class"},[s("pre",{staticClass:"language-text"},[e._v("          "),s("code",{domProps:{textContent:e._s(e.username+"@"+e.ipAddress+"'s password:")}}),e._v("\n        ")])])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.5. When asked for current UNIX password type in your "),s("code",[e._v("SSH temporary key")]),e._v(" from Signal message.\n        "),s("div",{staticClass:"language- extra-class"},[s("pre",{staticClass:"language-text"},[e._v("          "),s("code",{domProps:{textContent:e._s(e.passExpiredText)}}),e._v("\n        ")])])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.6. Enter "),s("a",{attrs:{href:"/do-science/lab-access/configure-ssh/#_3-2-design-a-passphrase",target:"_blank"}},[e._v("your new passphrase")]),e._v(" and retype for verification. You will be kicked off the entry machine right after your password is changed.\n        "),s("div",{staticClass:"language- extra-class"},[s("pre",{staticClass:"language-text"},[e._v("          "),s("code",{domProps:{textContent:e._s(e.passSetNew)}}),e._v("\n        ")])])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.7. Reconnect to entry using your new passphrase.\n        "),s("v-text-field",{ref:"macStep7",attrs:{value:"ssh "+e.username+"@"+e.ipAddress,label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macStep7")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        Expected result:\n        "),s("div",{staticClass:"language- extra-class"},[s("pre",{staticClass:"language-text"},[e._v("            "),s("code",{domProps:{textContent:e._s(e.username+"@"+e.labName+"-entry:~$")}}),e._v("\n        ")])])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.8. When logged into your "),s("code",[e._v("entry")]),e._v(" machine, connect to your "),s("code",[e._v("home")]),e._v(" machine.\n        "),s("v-text-field",{ref:"macStep8",attrs:{value:"ssh -o StrictHostKeyChecking=accept-new home",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:e.username+"@"+e.labName+"-entry:~$",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macStep8")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.9. You will be prompted to type your "),s("code",[e._v("SSH temporary key")]),e._v(" from Signal message.\n        "),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{staticClass:"language-text"},[e._v("          "),s("code",{domProps:{textContent:e._s(e.passExpiredText)}}),e._v("\n        ")])])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.10. Similar to above, you will be asked for a new password. Type your new passphrase two times.\n        "),s("div",{staticClass:"language- extra-class"},[s("pre",{staticClass:"language-text"},[e._v("          "),s("code",{domProps:{textContent:e._s(e.passSetNew)}}),e._v("\n        ")])])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.11. Verify a successful passphrase update by logging into your home machine.\n        "),s("v-text-field",{ref:"macStep11",attrs:{value:"ssh home",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:e.username+"@"+e.labName+"-entry:~$",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macStep11")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        Expected result:\n        "),s("div",{staticClass:"language- extra-class"},[s("pre",{staticClass:"language-text"},[e._v("            "),s("code",{domProps:{textContent:e._s(e.username+"@"+e.labName+"-home:~$")}}),e._v("\n        ")])])]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2.12. Close Terminal window to make sure you are disconnected from your lab.\n      ")])],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#passwordless-access"}},[e._v("#")]),e._v(" 3. SSH Passwordless access")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#passwordless-access",staticClass:"mt-2",attrs:{id:"passwordless-access"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n        3.1. Open new Terminal window and generate ssh key. If command reports that id_rsa key already exists, to avoid overwriting your existing keys press "),s("code",[e._v("n")]),e._v(" and skip to next step.\n        "),s("v-text-field",{ref:"macStep13",attrs:{value:'ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""',label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macStep13")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        3.2. Start ssh-agent. Note: Output of this command is only informational.\n        "),s("v-text-field",{ref:"macStep14",attrs:{value:'eval "$(ssh-agent -s)"',label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macStep14")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        3.3. Add your public key to the ssh agent.\n        "),s("v-text-field",{ref:"macStep15",attrs:{value:"ssh-add --apple-use-keychain ~/.ssh/id_rsa",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macStep15")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        3.4. Place your public key into the lab.\n        "),s("v-text-field",{ref:"macStep16",attrs:{value:"ssh-copy-id -i ~/.ssh/id_rsa "+e.username+"@"+e.ipAddress,label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macStep16")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        3.5. Confirm passwordless access.\n        "),s("v-text-field",{ref:"macStep17",attrs:{value:"ssh -o PasswordAuthentication=no -o PreferredAuthentications=publickey "+e.username+"@"+e.ipAddress,label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macStep17")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        3.6. Close Terminal window to make sure you are disconnected from your lab.\n      ")])],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-config"}},[e._v("#")]),e._v(" 4. SSH Config file")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#ssh-config",staticClass:"mt-2",attrs:{id:"ssh-config"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n        4.1. Open new Terminal window and assure SSH Config file exists. No output is expected.\n        "),s("v-text-field",{ref:"macSshConfig1",attrs:{value:"touch ~/.ssh/config",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macSshConfig1")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        4.2. Open SSH Config file.\n        "),s("v-text-field",{ref:"macSshConfig2",attrs:{value:"open -Wne ~/.ssh/config",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macSshConfig2")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        4.3. Add lab configuration into SSH Config opened in Text Editor.\n        "),s("v-textarea",{ref:"ssh-config-mac",staticClass:"py-2 mt-2",attrs:{label:"SSH Config file",placeholder:"Your link is missing access token","persistent-placeholder":"",outlined:"",readonly:"",rows:"11","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyTextArea("ssh-config-mac")}}},[e._v("")])]},proxy:!0}]),model:{value:e.configText,callback:function(t){e.configText="string"==typeof t?t.trim():t},expression:"configText"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        4.4. Test by connecting straight into home machine.\n        "),s("v-text-field",{ref:"ssh-config-lab-mac",attrs:{value:"ssh -o StrictHostKeyChecking=accept-new "+e.labName,label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("ssh-config-lab-mac")}}},[e._v("")])]},proxy:!0}])})],1)],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#workbench"}},[e._v("#")]),e._v(" 5. Workbench")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#workbench",staticClass:"mt-2",attrs:{id:"workbench"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n        HUNT Workbench provides you with web-based access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R and MATLAB.\n      ")]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        Follow "),s("a",{attrs:{href:"/do-science/hunt-workbench/installation/",target:"_blank"}},[e._v("Workbench Installation guide")]),e._v(" to configure your access.\n      ")]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{ref:"hostsWorkbenchMacOS",attrs:{autocomplete:"ignore-field",label:"Hosts file - Workbench",placeholder:"Your link is missing access token","persistent-placeholder":"",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("hostsWorkbenchMacOS")}}},[e._v("")])]},proxy:!0}]),model:{value:e.hostsWorkbench,callback:function(t){e.hostsWorkbench=t},expression:"hostsWorkbench"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        After you have successfully configured your access, you can use the following link to access your Workbench.\n        "),s("v-text-field",{ref:"workbench-link",attrs:{value:"https://"+this.labName+".lab.hdc.ntnu.no",placeholder:"Your link is missing access token","persistent-placeholder":"",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("workbench-link")}}},[e._v("")])]},proxy:!0}])})],1)],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#cyberduck"}},[e._v("#")]),e._v(" Cyberduck")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#cyberduck",staticClass:"mt-2",attrs:{id:"cyberduck"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n        Cyberduck is an SFTP client with graphical user interface.\n      ")]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        1. Add the hosts records below to your "),s("code",[e._v("/etc/hosts")]),e._v(" file.\n      ")]),e._v(" "),s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{ref:"hostsCyberduck",staticClass:"py-2 mt-2",attrs:{autocomplete:"ignore-field",label:"Hosts file - Cyberduck",placeholder:"Your link is missing access token","persistent-placeholder":"",outlined:"",readonly:"",rows:"3","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("hostsCyberduck")}}},[e._v("")])]},proxy:!0}]),model:{value:e.hostsCyberduck,callback:function(t){e.hostsCyberduck=t},expression:"hostsCyberduck"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        2. Follow "),s("a",{attrs:{href:"/do-science/tools/transfer/cyberduck/",target:"_blank"}},[e._v("Cyberduck guide")]),e._v("\n        to configure your access.\n      ")])],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#copypubkey"}},[e._v("#")]),e._v(" Copy SSH Public key")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#copypubkey",staticClass:"mt-2",attrs:{id:"copypubkey"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n        1. Open new Terminal window.\n      ")]),e._v(" "),s("v-col",{attrs:{cols:"10"}},[e._v("\n        2. Run this command to copy SSH Public key created in Step 3 into clipboard.\n        "),s("v-text-field",{ref:"macCopyPubKeyCmd",attrs:{value:"pbcopy < ~/.ssh/id_rsa.pub",label:"",placeholder:"","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macCopyPubKeyCmd")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n        3. Paste (CMD+V) your SSH Public key where needed.\n      ")])],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#troubleshooting",staticClass:"mt-2",attrs:{id:"troubleshooting"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n        WIP\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=h.exports}}]);