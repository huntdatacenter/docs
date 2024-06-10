(window.webpackJsonp=window.webpackJsonp||[]).push([[29,14],{1074:function(t,e,s){"use strict";s.r(e);var i=s(1087),n=s(1088),a=s(396),r=s(442),o=s(1041),l=s(623),h=s(1089),c=s(473),d=s(475),u=s(418),p=s(419),v=s(420),g=s(510),m=s(544),b=s(421),f={name:"DesignNewPassphrase",components:{VCol:i.a,VRow:n.a,VBtn:a.a,VCard:r.a,VCardTitle:o.d,VCardText:o.c,VToolbar:l.a,VToolbarTitle:h.b,VToolbarItems:h.a,VSpacer:c.a,VDialog:d.a,VStepper:u.a,VStepperContent:p.a,VStepperStep:v.a,VStepperItems:g.a,VIcon:m.a,VTextField:b.a},props:{},data:function(){return{dialog:!1,totpStepper:1}},computed:{},created:function(){},methods:{}},y=s(41),C=Object(y.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("a",{on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v("your new passphrase")]),t._v(" "),s("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"960px"},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.dialog=!1}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",{attrs:{elevation:"0"}},[s("v-card-title",{staticClass:"pa-0"},[s("v-toolbar",{attrs:{dark:"",color:"#00509e",flat:""}},[s("v-toolbar-title",[t._v("Design your new passphrase")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",[s("v-btn",{attrs:{icon:"",fab:""},on:{click:function(e){t.dialog=!1}}},[s("v-icon",[t._v("close")])],1)],1)],1)],1),t._v(" "),s("v-card-text",{staticClass:"pa-0"},[s("v-card",{staticClass:"pa-8",attrs:{elevation:"0"}},[t._v("\n          You will need to update your SSH temporary key in the steps below.\n          We prefer that you design a passphrase instead of a password.\n          A passphrase is a series of words that creates a phrase.\n          "),s("br"),s("br"),t._v("\n          It should be:\n  \n          "),s("ul",{staticClass:"my-2"},[s("li",[t._v("\n              long enough to be hard to guess (at least 12 characters long)\n            ")]),t._v(" "),s("li",[t._v("\n              not a famous quotation from the literature (but could be pretty close)\n            ")]),t._v(" "),s("li",[t._v("\n              hard to guess by intuition (even by someone who knows you well)\n            ")]),t._v(" "),s("li",[t._v("\n              easy to remember\n            ")]),t._v(" "),s("li",[t._v("\n              at least 3 characters have to be different from your previous one (including temporary key)\n            ")]),t._v(" "),s("li",[t._v("\n              include both lower and upper cases\n            ")])]),t._v("\n\n          Oh, and, it should be unique to this site only.\n          "),s("br"),s("br"),t._v("\n\n          Making a good passphrase is great fun and good security hygiene.\n          "),s("br"),t._v("\n          \n          Here's one example of such passphrase:\n\n          "),s("div",{staticClass:"language- extra-class",staticStyle:{"user-select":"none"}},[s("pre",{staticClass:"language-text"},[t._v("            "),s("code",{domProps:{textContent:t._s("AnalysingPokemon4FunInTheMorning")}}),t._v("\n          ")])]),t._v(" "),s("br"),t._v("Go ahead and create one for yourself to use in the next steps of the guide.\n\n          "),s("br"),s("br"),t._v(" "),s("v-btn",{staticClass:"mx-2",attrs:{color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Continue in the guide")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=C.exports},377:function(t,e,s){"use strict";s.d(e,"b",(function(){return n}));var i=s(0);function n(t="value",e="input"){return i.a.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(s){!!s!==this[t]&&this.$emit(e,s)}}})}const a=n();e.a=a},381:function(t,e,s){"use strict";var i=s(0),n=s(378),a=s(8);e.a=i.a.extend({name:"routable",directives:{Ripple:n.a},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const s={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if(void 0===this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,n=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,s="_vnode.data.class."+(this.exact?e:t);this.$nextTick(()=>{!Object(a.m)(this.$refs.link,s)===this.isActive&&this.toggle()})},toggle(){this.isActive=!this.isActive}}})},383:function(t,e,s){"use strict";var i=s(385);e.a=i.a},384:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s(375);function n(t,e,s){return Object(i.a)(t,e,s).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:()=>({isActive:!1}),computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},385:function(t,e,s){"use strict";s(407);var i=s(404),n=s(371),a=s(386),r=s(391),o=s(389),l=s(372),h=s(369);e.a=Object(h.a)(i.a,n.a,a.a,r.a,o.a,l.a).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},386:function(t,e,s){"use strict";var i=s(0);e.a=i.a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{["elevation-"+this.elevation]:!0}}}})},389:function(t,e,s){"use strict";var i=s(0);e.a=i.a.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"==typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"==typeof e){const s=e.split(" ");for(const e of s)t.push("rounded-"+e)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},390:function(t,e,s){"use strict";s(408);var i=s(435),n=s(371),a=s(8);e.a=n.a.extend({name:"v-progress-circular",directives:{intersect:i.a},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:Object(a.g)(this.calculatedSize),width:Object(a.g)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:"v-progress-circular__"+t,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},391:function(t,e,s){"use strict";var i=s(8),n=s(0);e.a=n.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=Object(i.g)(this.height),s=Object(i.g)(this.minHeight),n=Object(i.g)(this.minWidth),a=Object(i.g)(this.maxHeight),r=Object(i.g)(this.maxWidth),o=Object(i.g)(this.width);return e&&(t.height=e),s&&(t.minHeight=s),n&&(t.minWidth=n),a&&(t.maxHeight=a),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},396:function(t,e,s){"use strict";s(406);var i=s(383),n=s(390).a,a=s(384),r=s(377),o=s(386),l=s(413),h=s(381),c=s(422),d=s(369),u=s(17);const p=Object(d.a)(i.a,h.a,l.a,c.a,Object(a.a)("btnToggle"),Object(r.b)("inputValue"));e.a=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...h.a.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return o.a.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!(this.text||this.plain||this.outlined||this.icon)},isElevated(){return Boolean(!(this.icon||this.text||this.outlined||this.depressed||this.disabled||this.plain||!(null==this.elevation||Number(this.elevation)>0)))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){[["flat","text"],["outline","outlined"],["round","rounded"]].forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u.a)(t,e,this)})},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(n,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:s,data:i}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(s,this.disabled?i:n(this.color,i),e)}})},402:function(t,e,s){"use strict";var i=s(17),n=s(0);e.a=n.a.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(i.e)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},406:function(t,e,s){},407:function(t,e,s){},408:function(t,e,s){},409:function(t,e,s){},414:function(t,e,s){},416:function(t,e,s){},417:function(t,e,s){},418:function(t,e,s){"use strict";s(445);var i=s(383),n=s(375),a=s(429),r=s(369),o=s(17);const l=Object(r.a)(i.a,Object(n.b)("stepper"),a.a);e.a=l.extend({name:"v-stepper",provide(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data(){const t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes(){return{"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear,...i.a.options.computed.classes.call(this)}},styles(){return{...i.a.options.computed.styles.call(this)}}},watch:{internalValue(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created(){this.$listeners.input&&Object(o.a)("@input","@change",this)},mounted(){this.updateView()},methods:{register(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter(e=>e!==t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter(e=>e!==t))},stepClick(t){this.$nextTick(()=>this.internalValue=t)},updateView(){for(let t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(let t=this.content.length;--t>=0;)this.content[t].toggle(this.internalValue,this.isReverse)}},render(t){return t(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},419:function(t,e,s){"use strict";var i=s(388),n=s(375),a=s(8),r=s(369);const o=Object(r.a)(Object(n.a)("stepper","v-stepper-content","v-stepper"));e.a=o.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?i.f:i.g},styles(){return this.isVertical?{height:Object(a.g)(this.height)}:{}}},watch:{isActive(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter(){let t=0;requestAnimationFrame(()=>{t=this.$refs.wrapper.scrollHeight}),this.height=0,setTimeout(()=>this.isActive&&(this.height=t||"auto"),450)},leave(){this.height=this.$refs.wrapper.clientHeight,setTimeout(()=>this.height=0,10)},toggle(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render(t){const e={staticClass:"v-stepper__content"},s={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);const i=t("div",s,[this.$slots.default]),n=t("div",e,[i]);return t(this.computedTransition,{on:this.$listeners},[n])}})},420:function(t,e,s){"use strict";var i=s(382),n=s(371),a=s(375),r=s(378),o=s(369),l=s(8);const h=Object(o.a)(n.a,Object(a.a)("stepper","v-stepper-step","v-stepper"));e.a=h.extend().extend({name:"v-stepper-step",directives:{ripple:r.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:()=>[]},step:[Number,String]},data:()=>({isActive:!1,isInactive:!0}),computed:{classes(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError(){return this.rules.some(t=>!0!==t())}},mounted(){this.stepper&&this.stepper.register(this)},beforeDestroy(){this.stepper&&this.stepper.unregister(this)},methods:{click(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon(t){return this.$createElement(i.a,t)},genLabel(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep(){const t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent(){const t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},keyboardClick(t){t.keyCode===l.s.space&&this.click(t)},toggle(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render(t){return t("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}})},442:function(t,e,s){"use strict";s(409);var i=s(383),n=s(465),a=s(381),r=s(369);e.a=Object(r.a)(n.a,a.a,i.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.a.options.computed.classes.call(this)}},styles(){const t={...i.a.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},445:function(t,e,s){},473:function(t,e,s){"use strict";s(414);var i=s(8);e.a=Object(i.i)("spacer","div","v-spacer")},475:function(t,e,s){"use strict";s(416);var i=s(1090),n=s(398),a=s(397),r=s(432),o=(s(417),s(371)),l=s(372),h=s(377),c=s(369),d=Object(c.a)(o.a,l.a,h.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),u=s(8),p=s(0).a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:()=>({animationFrame:0,overlay:null}),watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new d({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(u.q)(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(u.a)(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[u.s.up,u.s.pageup],s=[u.s.down,u.s.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!s.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const s=e.shiftKey||e.deltaX?"x":"y",i="y"===s?e.deltaY:e.deltaX||e.deltaY;let n,a;"y"===s?(n=0===t.scrollTop,a=t.scrollTop+t.clientHeight===t.scrollHeight):(n=0===t.scrollLeft,a=t.scrollLeft+t.clientWidth===t.scrollWidth);return!(n||!(i<0))||(!(a||!(i>0))||!(!n&&!a)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=Object(u.f)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,s=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(s,e))||!this.shouldScroll(e,t)}for(let s=0;s<e.length;s++){const i=e[s];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),v=s(430),g=s(431),m=s(405),b=s(17);const f=Object(c.a)(a.a,r.a,p,v.a,g.a,n.a);e.a=f.extend({name:"v-dialog",directives:{ClickOutside:m.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:()=>({activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}),computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(b.e)("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):p.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===u.s.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=[...this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].find(t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]'));t&&t.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(i.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(u.g)(this.maxWidth),width:Object(u.g)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},510:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var i=s(8),n=s(418),a=s(420),r=s(419);const o=Object(i.i)("v-stepper__header"),l=Object(i.i)("v-stepper__items");n.a,r.a,a.a}}]);