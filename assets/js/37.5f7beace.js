(window.webpackJsonp=window.webpackJsonp||[]).push([[37,13],{1062:function(e,t,s){"use strict";s.r(t);var i=s(1074),n=s(1075),r=s(411),o=s(503),a=s(984),l=s(611),c=s(1073),h=s(442),d=s(444),p=s(388),u=s(389),v=s(390),m=s(467),g=s(645),y=s(404),f={name:"DesignNewPassphrase",components:{VCol:i.a,VRow:n.a,VBtn:r.a,VCard:o.a,VCardTitle:a.d,VCardText:a.c,VToolbar:l.a,VToolbarTitle:c.b,VToolbarItems:c.a,VSpacer:h.a,VDialog:d.a,VStepper:p.a,VStepperContent:u.a,VStepperStep:v.a,VStepperItems:m.a,VIcon:g.a,VTextField:y.a},props:{},data:function(){return{dialog:!1,totpStepper:1}},computed:{},created:function(){},methods:{}},b=s(41),w=Object(b.a)(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[s("a",{on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[e._v("your new passphrase")]),e._v(" "),s("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"960px"},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.dialog=!1}},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",{attrs:{elevation:"0"}},[s("v-card-title",{staticClass:"pa-0"},[s("v-toolbar",{attrs:{dark:"",color:"#00509e",flat:""}},[s("v-toolbar-title",[e._v("Design your new passphrase")]),e._v(" "),s("v-spacer"),e._v(" "),s("v-toolbar-items",[s("v-btn",{attrs:{icon:"",fab:""},on:{click:function(t){e.dialog=!1}}},[s("v-icon",[e._v("close")])],1)],1)],1)],1),e._v(" "),s("v-card-text",{staticClass:"pa-0"},[s("v-card",{staticClass:"pa-8",attrs:{elevation:"0"}},[e._v("\n          You will need to update your SSH temporary key in the steps below.\n          We prefer that you design a passphrase instead of a password.\n          A passphrase is a series of words that creates a phrase.\n          "),s("br"),s("br"),e._v("\n          It should be:\n  \n          "),s("ul",{staticClass:"my-2"},[s("li",[e._v("\n              long enough to be hard to guess (at least 12 characters long)\n            ")]),e._v(" "),s("li",[e._v("\n              not a famous quotation from the literature (but could be pretty close)\n            ")]),e._v(" "),s("li",[e._v("\n              hard to guess by intuition (even by someone who knows you well)\n            ")]),e._v(" "),s("li",[e._v("\n              easy to remember\n            ")]),e._v(" "),s("li",[e._v("\n              at least 3 characters have to be different from your previous one (including temporary key)\n            ")]),e._v(" "),s("li",[e._v("\n              include both lower and upper cases\n            ")])]),e._v("\n\n          Oh, and, it should be unique to this site only.\n          "),s("br"),s("br"),e._v("\n\n          Making a good passphrase is great fun and good security hygiene.\n          "),s("br"),e._v("\n          \n          Here's one example of such passphrase:\n\n          "),s("div",{staticClass:"language- extra-class",staticStyle:{"user-select":"none"}},[s("pre",{staticClass:"language-text"},[e._v("            "),s("code",{domProps:{textContent:e._s("AnalysingPokemon4FunInTheMorning")}}),e._v("\n          ")])]),e._v(" "),s("br"),e._v("Go ahead and create one for yourself to use in the next steps of the guide.\n\n          "),s("br"),s("br"),e._v(" "),s("v-btn",{staticClass:"mx-2",attrs:{color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("Continue in the guide")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=w.exports},388:function(e,t,s){"use strict";s(414);var i=s(396),n=s(378),r=s(407),o=s(369),a=s(17);const l=Object(o.a)(i.a,Object(n.b)("stepper"),r.a);t.a=l.extend({name:"v-stepper",provide(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data(){const e={isBooted:!1,steps:[],content:[],isReverse:!1};return e.internalLazyValue=null!=this.value?this.value:(e[0]||{}).step||1,e},computed:{classes(){return{"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear,...i.a.options.computed.classes.call(this)}},styles(){return{...i.a.options.computed.styles.call(this)}}},watch:{internalValue(e,t){this.isReverse=Number(e)<Number(t),t&&(this.isBooted=!0),this.updateView()}},created(){this.$listeners.input&&Object(a.a)("@input","@change",this)},mounted(){this.updateView()},methods:{register(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter(t=>t!==e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter(t=>t!==e))},stepClick(e){this.$nextTick(()=>this.internalValue=e)},updateView(){for(let e=this.steps.length;--e>=0;)this.steps[e].toggle(this.internalValue);for(let e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render(e){return e(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},389:function(e,t,s){"use strict";var i=s(386),n=s(378),r=s(8),o=s(369);const a=Object(o.a)(Object(n.a)("stepper","v-stepper-content","v-stepper"));t.a=a.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?i.f:i.g},styles(){return this.isVertical?{height:Object(r.g)(this.height)}:{}}},watch:{isActive(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter(){let e=0;requestAnimationFrame(()=>{e=this.$refs.wrapper.scrollHeight}),this.height=0,setTimeout(()=>this.isActive&&(this.height=e||"auto"),450)},leave(){this.height=this.$refs.wrapper.clientHeight,setTimeout(()=>this.height=0,10)},toggle(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render(e){const t={staticClass:"v-stepper__content"},s={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);const i=e("div",s,[this.$slots.default]),n=e("div",t,[i]);return e(this.computedTransition,{on:this.$listeners},[n])}})},390:function(e,t,s){"use strict";var i=s(381),n=s(372),r=s(378),o=s(380),a=s(369),l=s(8);const c=Object(a.a)(n.a,Object(r.a)("stepper","v-stepper-step","v-stepper"));t.a=c.extend().extend({name:"v-stepper-step",directives:{ripple:o.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:()=>[]},step:[Number,String]},data:()=>({isActive:!1,isInactive:!0}),computed:{classes(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError(){return this.rules.some(e=>!0!==e())}},mounted(){this.stepper&&this.stepper.register(this)},beforeDestroy(){this.stepper&&this.stepper.unregister(this)},methods:{click(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},genIcon(e){return this.$createElement(i.a,e)},genLabel(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep(){const e=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(e,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent(){const e=[];return this.hasError?e.push(this.genIcon(this.errorIcon)):this.complete?this.editable?e.push(this.genIcon(this.editIcon)):e.push(this.genIcon(this.completeIcon)):e.push(String(this.step)),e},keyboardClick(e){e.keyCode===l.s.space&&this.click(e)},toggle(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render(e){return e("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}})},391:function(e,t,s){},392:function(e,t,s){},393:function(e,t,s){},414:function(e,t,s){},442:function(e,t,s){"use strict";s(391);var i=s(8);t.a=Object(i.i)("spacer","div","v-spacer")},444:function(e,t,s){"use strict";s(392);var i=s(1076),n=s(401),r=s(400),o=s(420),a=(s(393),s(372)),l=s(373),c=s(382),h=s(369),d=Object(h.a)(a.a,l.a,c.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),p=s(8),u=s(0).a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:()=>({animationFrame:0,overlay:null}),watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new d({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(p.q)(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(e=!0){this.overlay&&(Object(p.a)(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("key"in e){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[p.s.up,p.s.pageup],s=[p.s.down,p.s.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!s.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll(e,t){if(e.hasAttribute("data-app"))return!1;const s=t.shiftKey||t.deltaX?"x":"y",i="y"===s?t.deltaY:t.deltaX||t.deltaY;let n,r;"y"===s?(n=0===e.scrollTop,r=e.scrollTop+e.clientHeight===e.scrollHeight):(n=0===e.scrollLeft,r=e.scrollLeft+e.clientWidth===e.scrollWidth);return!(n||!(i<0))||(!(r||!(i>0))||!(!n&&!r)&&this.shouldScroll(e.parentNode,t))},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=Object(p.f)(e);if("keydown"===e.type&&t[0]===document.body){const t=this.$refs.dialog,s=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(s,t))||!this.shouldScroll(t,e)}for(let s=0;s<t.length;s++){const i=t[s];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,e)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(p.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),v=s(418),m=s(419),g=s(408),y=s(17);const f=Object(h.a)(r.a,o.a,u,v.a,m.a,n.a);t.a=f.extend({name:"v-dialog",directives:{ClickOutside:g.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:()=>({activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}),computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(e){const t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var e,t;(null===(e=this.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(t=this.$refs.dialog)||void 0===t||t.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(e){if(e.keyCode===p.s.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const e=this.getActivator();this.$nextTick(()=>e&&e.focus())}this.$emit("keydown",e)},onFocusin(e){if(!e||!this.retainFocus)return;const t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(e=>e.contains(t))){const e=[...this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].find(e=>!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]'));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(i.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent(){const e={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style={...e.style,maxWidth:Object(p.g)(this.maxWidth),width:Object(p.g)(this.width)}),this.$createElement("div",e,this.getContentSlot())}},render(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},467:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var i=s(8),n=s(388),r=s(390),o=s(389);const a=Object(i.i)("v-stepper__header"),l=Object(i.i)("v-stepper__items");n.a,o.a,r.a}}]);