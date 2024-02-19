(window.webpackJsonp=window.webpackJsonp||[]).push([[40,14],{1065:function(t,e,s){"use strict";s.r(e);var i=s(1074),o=s(1075),n=s(411),a=s(503),r=s(984),l=s(611),c=s(1073),h=s(442),d=s(444),p=s(388),v=s(389),u=s(390),m=s(467),g=s(645),y=s(404),f={name:"TotpGuide",components:{VCol:i.a,VRow:o.a,VBtn:n.a,VCard:a.a,VCardTitle:r.d,VCardText:r.c,VToolbar:l.a,VToolbarTitle:c.b,VToolbarItems:c.a,VSpacer:h.a,VDialog:d.a,VStepper:p.a,VStepperContent:v.a,VStepperStep:u.a,VStepperItems:m.a,VIcon:g.a,VTextField:y.a},props:{},data:function(){return{totpDialog:!1,totpStepper:1}},computed:{},created:function(){},methods:{}},b=s(41),_=Object(b.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("v-row",{staticClass:"my-1"},[s("v-col",{attrs:{cols:"12"}},[s("v-btn",{attrs:{text:"",elevation:"2"},on:{click:function(e){e.stopPropagation(),t.totpDialog=!0}}},[s("v-icon",[t._v("smartphone")]),t._v("  1. Time-based one-time password (TOTP)\n      ")],1)],1)],1),t._v(" "),s("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"960px"},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.totpDialog=!1}},model:{value:t.totpDialog,callback:function(e){t.totpDialog=e},expression:"totpDialog"}},[s("v-card",{attrs:{elevation:"0"}},[s("v-card-title",{staticClass:"pa-0"},[s("v-toolbar",{attrs:{dark:"",color:"#00509e",flat:""}},[s("v-toolbar-title",[t._v("TOTP Configuration")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",[s("v-btn",{attrs:{icon:"",fab:""},on:{click:function(e){t.totpDialog=!1}}},[s("v-icon",[t._v("close")])],1)],1)],1)],1),t._v(" "),s("v-card-text",{staticClass:"pa-0"},[s("v-stepper",{attrs:{vertical:""},model:{value:t.totpStepper,callback:function(e){t.totpStepper=e},expression:"totpStepper"}},[s("v-stepper-step",{attrs:{complete:t.totpStepper>1,step:"1"}},[t._v("\n            Install TOTP application on your phone\n          ")]),t._v(" "),s("v-stepper-content",{attrs:{step:"1"}},[s("v-card",{staticClass:"mb-12",attrs:{elevation:"0"}},[t._v("\n              Search for "),s("code",[t._v("Google Authenticator")]),t._v(" in the iOS or Android app stores, or use the links below:\n\n              "),s("ul",{staticClass:"my-2"},[s("li",[s("a",{attrs:{href:"https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8",target:"_blank"}},[t._v("Download and install for iOS here (opens new window)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en",target:"_blank"}},[t._v("Download and install for Android here (opens new window)")])])]),t._v("\n\n              If you prefer different TOTP application e.g. "),s("code",[t._v("Microsoft Authenticator")]),t._v(" you can use it,\n              although the steps might be sligthly different and we do not cover them in our guides.\n            ")]),t._v(" "),s("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"primary"},on:{click:function(e){t.totpStepper=2}}},[t._v("Continue")])],1),t._v(" "),s("v-stepper-step",{attrs:{complete:t.totpStepper>2,step:"2"}},[t._v("\n            Add new TOTP account\n          ")]),t._v(" "),s("v-stepper-content",{attrs:{step:"2"}},[s("v-card",{staticClass:"mb-12",attrs:{elevation:"0"}},[s("ol",[s("li",[t._v("Start the Google Authenticator app and follow these steps.")]),t._v(" "),s("li",[t._v("If you are using the app for the first time and screen saying "),s("i",[t._v('"Welcome to Google Authenticator"')]),t._v(" appears, just tap "),s("code",[t._v("Use google authenticator without an account")]),t._v(".")]),t._v(" "),s("li",[t._v("\n                  Click on the "),s("img",{staticStyle:{height:"2.5em","margin-bottom":"-0.5em"},attrs:{alt:"google-auth-plus-icon",src:"/img/totp/google-auth-plus-icon.png"}}),t._v(" "),s("code",[t._v("plus button")]),t._v(" in the bottom right corner "),s("v-icon",[t._v("south_east")]),t._v(" of your phone screen."),s("br")],1),t._v(" "),s("li",[t._v("\n                  Select option "),s("code",[t._v("Enter a setup key "),s("v-icon",[t._v("keyboard")])],1),t._v(".\n                ")]),t._v(" "),s("li",[t._v("\n                  A form called "),s("i",[t._v('"Enter account details"')]),t._v(" appears."),s("br"),t._v(" "),s("v-row",{staticStyle:{"max-width":"400px"},attrs:{justify:"start",dense:"","no-gutters":""}},[s("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[s("v-text-field",{attrs:{outlined:"",label:"Account name",readonly:"",disabled:"",dense:"","hide-details":""}})],1),t._v(" "),s("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[s("v-text-field",{attrs:{outlined:"",label:"Your key",readonly:"",disabled:"",dense:"","hide-details":""}})],1),t._v(" "),s("v-col",{staticClass:"my-1",attrs:{cols:"8"}},[s("v-text-field",{attrs:{value:"Time based",outlined:"",label:"Type of key",placeholder:"",readonly:"",disabled:"",dense:"","persistent-placeholder":"","hide-details":""}})],1)],1)],1),t._v(" "),s("li",[t._v("\n                  Enter "),s("code",{staticStyle:{"font-weight":"bold"}},[t._v("HUNT CLOUD VPN")]),t._v(" as "),s("i",[t._v('"Account name"')]),t._v(" because you will have only one HUNT Cloud VPN.\n                  "),s("v-row",{staticStyle:{"max-width":"400px"},attrs:{justify:"start",dense:"","no-gutters":""}},[s("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[s("v-text-field",{attrs:{value:"HUNT CLOUD VPN",outlined:"",label:"Account name",placeholder:"",readonly:"",disabled:"",dense:"","persistent-placeholder":"","hide-details":""}})],1)],1)],1),t._v(" "),s("li",[t._v("\n                  Enter the "),s("code",[t._v("Google Authenticator")]),t._v(" key sent to you over Signal.\n                  "),s("v-row",{staticStyle:{"max-width":"400px"},attrs:{justify:"start",dense:"","no-gutters":""}},[s("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[s("v-text-field",{attrs:{value:"",outlined:"",label:"Your key",placeholder:"****************",readonly:"",disabled:"",dense:"","persistent-placeholder":"","hide-details":""}})],1)],1)],1),t._v(" "),s("li",[t._v("\n                  Make sure "),s("code",{staticStyle:{"font-weight":"bold"}},[t._v("Time based")]),t._v(" is selected.\n                  "),s("v-row",{staticStyle:{"max-width":"400px"},attrs:{justify:"start",dense:"","no-gutters":""}},[s("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[s("v-text-field",{attrs:{value:"Time based",outlined:"",label:"Type of key",placeholder:"",readonly:"",disabled:"",dense:"","persistent-placeholder":"","hide-details":""}})],1)],1)],1),t._v(" "),s("li",[t._v("Tap on "),s("code",{staticStyle:{"font-weight":"bold"}},[t._v("Add")]),t._v(" button to finish the setup of the new account.")])])]),t._v(" "),s("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"primary"},on:{click:function(e){t.totpStepper=3}}},[t._v("Continue")]),t._v(" "),s("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"link"},on:{click:function(e){t.totpStepper=1}}},[t._v("Back")])],1),t._v(" "),s("v-stepper-step",{attrs:{step:"3"}},[t._v("\n            Check your TOTP codes\n          ")]),t._v(" "),s("v-stepper-content",{attrs:{step:"3"}},[s("v-card",{staticClass:"mb-12",attrs:{elevation:"0"}},[t._v("\n              In your "),s("i",[t._v("Google authenticator")]),t._v(" app you should see a field"),s("br"),t._v("\n              with name "),s("code",[t._v("HUNT CLOUD VPN")]),t._v(" showing "),s("b",[t._v("6 digit verification code")]),t._v(".\n              "),s("br"),s("br"),t._v("\n              This code refreshes every 30 seconds.\n              "),s("br"),s("br"),t._v("\n              Phone might need to be connected to internet to assure precise synchronization of time.\n            ")]),t._v(" "),s("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"primary"},on:{click:function(e){t.totpStepper=1}}},[t._v("Start again")]),t._v(" "),s("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"link"},on:{click:function(e){t.totpStepper=2}}},[t._v("Back")]),t._v(" "),s("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"success"},on:{click:function(e){t.totpDialog=!1,t.totpStepper=1}}},[t._v("Finish")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=_.exports},388:function(t,e,s){"use strict";s(414);var i=s(396),o=s(378),n=s(407),a=s(369),r=s(17);const l=Object(a.a)(i.a,Object(o.b)("stepper"),n.a);e.a=l.extend({name:"v-stepper",provide(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data(){const t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes(){return{"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear,...i.a.options.computed.classes.call(this)}},styles(){return{...i.a.options.computed.styles.call(this)}}},watch:{internalValue(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created(){this.$listeners.input&&Object(r.a)("@input","@change",this)},mounted(){this.updateView()},methods:{register(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter(e=>e!==t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter(e=>e!==t))},stepClick(t){this.$nextTick(()=>this.internalValue=t)},updateView(){for(let t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(let t=this.content.length;--t>=0;)this.content[t].toggle(this.internalValue,this.isReverse)}},render(t){return t(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},389:function(t,e,s){"use strict";var i=s(386),o=s(378),n=s(8),a=s(369);const r=Object(a.a)(Object(o.a)("stepper","v-stepper-content","v-stepper"));e.a=r.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?i.f:i.g},styles(){return this.isVertical?{height:Object(n.g)(this.height)}:{}}},watch:{isActive(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter(){let t=0;requestAnimationFrame(()=>{t=this.$refs.wrapper.scrollHeight}),this.height=0,setTimeout(()=>this.isActive&&(this.height=t||"auto"),450)},leave(){this.height=this.$refs.wrapper.clientHeight,setTimeout(()=>this.height=0,10)},toggle(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render(t){const e={staticClass:"v-stepper__content"},s={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);const i=t("div",s,[this.$slots.default]),o=t("div",e,[i]);return t(this.computedTransition,{on:this.$listeners},[o])}})},390:function(t,e,s){"use strict";var i=s(381),o=s(372),n=s(378),a=s(380),r=s(369),l=s(8);const c=Object(r.a)(o.a,Object(n.a)("stepper","v-stepper-step","v-stepper"));e.a=c.extend().extend({name:"v-stepper-step",directives:{ripple:a.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:()=>[]},step:[Number,String]},data:()=>({isActive:!1,isInactive:!0}),computed:{classes(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError(){return this.rules.some(t=>!0!==t())}},mounted(){this.stepper&&this.stepper.register(this)},beforeDestroy(){this.stepper&&this.stepper.unregister(this)},methods:{click(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon(t){return this.$createElement(i.a,t)},genLabel(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep(){const t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent(){const t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},keyboardClick(t){t.keyCode===l.s.space&&this.click(t)},toggle(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render(t){return t("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}})},391:function(t,e,s){},392:function(t,e,s){},393:function(t,e,s){},414:function(t,e,s){},442:function(t,e,s){"use strict";s(391);var i=s(8);e.a=Object(i.i)("spacer","div","v-spacer")},444:function(t,e,s){"use strict";s(392);var i=s(1076),o=s(401),n=s(400),a=s(420),r=(s(393),s(372)),l=s(373),c=s(382),h=s(369),d=Object(h.a)(r.a,l.a,c.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),p=s(8),v=s(0).a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:()=>({animationFrame:0,overlay:null}),watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new d({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(p.q)(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(p.a)(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[p.s.up,p.s.pageup],s=[p.s.down,p.s.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!s.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const s=e.shiftKey||e.deltaX?"x":"y",i="y"===s?e.deltaY:e.deltaX||e.deltaY;let o,n;"y"===s?(o=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(o=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);return!(o||!(i<0))||(!(n||!(i>0))||!(!o&&!n)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=Object(p.f)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,s=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(s,e))||!this.shouldScroll(e,t)}for(let s=0;s<e.length;s++){const i=e[s];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(p.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),u=s(418),m=s(419),g=s(408),y=s(17);const f=Object(h.a)(n.a,a.a,v,u.a,m.a,o.a);e.a=f.extend({name:"v-dialog",directives:{ClickOutside:g.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:()=>({activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}),computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===p.s.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=[...this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].find(t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]'));t&&t.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(i.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(p.g)(this.maxWidth),width:Object(p.g)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},467:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var i=s(8),o=s(388),n=s(390),a=s(389);const r=Object(i.i)("v-stepper__header"),l=Object(i.i)("v-stepper__items");o.a,a.a,n.a}}]);