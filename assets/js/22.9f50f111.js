(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{382:function(t,e,s){"use strict";s.d(e,"b",(function(){return n}));var i=s(0);function n(t="value",e="input"){return i.a.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(s){!!s!==this[t]&&this.$emit(e,s)}}})}const r=n();e.a=r},395:function(t,e,s){"use strict";var i=s(426);e.a=i.a},398:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s(378);function n(t,e,s){return Object(i.a)(t,e,s).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:()=>({isActive:!1}),computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},401:function(t,e,s){"use strict";var i=s(0),n=s(8);e.a=i.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.j}}})},408:function(t,e,s){var i=s(3),n=s(1),r=s(42),o=s(5),a=s(65),c=s(67),l=s(202),h=/MSIE .\./.test(a),u=n.Function,d=function(t){return function(e,s){var i=l(arguments.length,1)>2,n=o(e)?e:u(e),a=i?c(arguments,2):void 0;return t(i?function(){r(n,this,a)}:n,s)}};i({global:!0,bind:!0,forced:h},{setTimeout:d(n.setTimeout),setInterval:d(n.setInterval)})},410:function(t,e,s){"use strict";s(500);var i=s(395),n=s(446).a,r=s(398),o=s(382),a=s(427),c=s(445),l=s(415),h=s(456),u=s(369),d=s(17);const p=Object(u.a)(i.a,l.a,c.a,h.a,Object(r.a)("btnToggle"),Object(o.b)("inputValue"));e.a=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...l.a.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return a.a.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!(this.text||this.plain||this.outlined||this.icon)},isElevated(){return Boolean(!(this.icon||this.text||this.outlined||this.depressed||this.disabled||this.plain||!(null==this.elevation||Number(this.elevation)>0)))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){[["flat","text"],["outline","outlined"],["round","rounded"]].forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(d.a)(t,e,this)})},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(n,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:s,data:i}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(s,this.disabled?i:n(this.color,i),e)}})},415:function(t,e,s){"use strict";var i=s(0),n=s(380),r=s(8);e.a=i.a.extend({name:"routable",directives:{Ripple:n.a},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const s={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if(void 0===this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,n=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,s="_vnode.data.class."+(this.exact?e:t);this.$nextTick(()=>{!Object(r.m)(this.$refs.link,s)===this.isActive&&this.toggle()})},toggle(){this.isActive=!this.isActive}}})},420:function(t,e,s){"use strict";var i=s(410);e.a=i.a},426:function(t,e,s){"use strict";s(499);var i=s(432),n=s(372),r=s(427),o=s(444),a=s(433),c=s(373),l=s(369);e.a=Object(l.a)(i.a,n.a,r.a,o.a,a.a,c.a).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},427:function(t,e,s){"use strict";var i=s(0);e.a=i.a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{["elevation-"+this.elevation]:!0}}}})},431:function(t,e,s){},433:function(t,e,s){"use strict";var i=s(0);e.a=i.a.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"==typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"==typeof e){const s=e.split(" ");for(const e of s)t.push("rounded-"+e)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},444:function(t,e,s){"use strict";var i=s(8),n=s(0);e.a=n.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=Object(i.g)(this.height),s=Object(i.g)(this.minHeight),n=Object(i.g)(this.minWidth),r=Object(i.g)(this.maxHeight),o=Object(i.g)(this.maxWidth),a=Object(i.g)(this.width);return e&&(t.height=e),s&&(t.minHeight=s),n&&(t.minWidth=n),r&&(t.maxHeight=r),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},446:function(t,e,s){"use strict";s(501);var i=s(434),n=s(372),r=s(8);e.a=n.a.extend({name:"v-progress-circular",directives:{intersect:i.a},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:Object(r.g)(this.calculatedSize),width:Object(r.g)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:"v-progress-circular__"+t,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},448:function(t,e,s){"use strict";var i=s(8);function n(t,e){const s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),(t=>{const{touchstartX:e,touchendX:s,touchstartY:i,touchendY:n}=t;t.offsetX=s-e,t.offsetY=n-i,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&s<e-16&&t.left(t),t.right&&s>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&n<i-16&&t.up(t),t.down&&n>i+16&&t.down(t))})(e)}function r(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>function(t,e){const s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}(t,e),touchend:t=>n(t,e),touchmove:t=>function(t,e){const s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}const o={inserted:function(t,e,s){const n=e.value,o=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(!o)return;const c=r(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[s.context._uid]=c,Object(i.t)(c).forEach(t=>{o.addEventListener(t,c[t],a)})},unbind:function(t,e,s){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const r=n._touchHandlers[s.context._uid];Object(i.t)(r).forEach(t=>{n.removeEventListener(t,r[t])}),delete n._touchHandlers[s.context._uid]}};e.a=o},449:function(t,e,s){},498:function(t,e,s){"use strict";s(431);var i=s(373),n=s(369);e.a=Object(n.a)(i.a).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},499:function(t,e,s){},500:function(t,e,s){},501:function(t,e,s){},502:function(t,e,s){"use strict";s(503);var i=s(395),n=s(466),r=s(415),o=s(369);e.a=Object(o.a)(n.a,r.a,i.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.a.options.computed.classes.call(this)}},styles(){const t={...i.a.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},503:function(t,e,s){},516:function(t,e){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},536:function(t,e,s){var i=s(3),n=s(16),r=s(2),o=s(4),a=s(18),c=s(12),l=s(202),h=s(561).ctoi,u=/[^\d+/a-z]/i,d=/[\t\n\f\r ]+/g,p=/[=]+$/,v=n("atob"),m=String.fromCharCode,g=r("".charAt),f=r("".replace),b=r(u.exec),y=o((function(){return""!==atob(" ")})),C=!y&&!o((function(){v()}));i({global:!0,enumerable:!0,forced:y||C},{atob:function(t){if(l(arguments.length,1),C)return v(t);var e,s,i=f(a(t),d,""),r="",o=0,y=0;if(i.length%4==0&&(i=f(i,p,"")),i.length%4==1||b(u,i))throw new(n("DOMException"))("The string is not correctly encoded","InvalidCharacterError");for(;e=g(i,o++);)c(h,e)&&(s=y%4?64*s+h[e]:h[e],y++%4&&(r+=m(255&s>>(-2*y&6))));return r}})},537:function(t,e,s){"use strict";var i=s(3),n=s(562),r=s(16),o=s(4),a=s(29),c=s(44),l=s(14).f,h=s(133).f,u=s(19),d=s(12),p=s(205),v=s(11),m=s(221),g=s(132),f=s(516),b=s(210),y=s(43),C=s(10),E=s(21),_=r("Error"),x=r("DOMException")||function(){try{(new(r("MessageChannel")||n("worker_threads").MessageChannel)).port1.postMessage(new WeakMap)}catch(t){if("DATA_CLONE_ERR"==t.name&&25==t.code)return t.constructor}}(),w=x&&x.prototype,k=_.prototype,S=y.set,R=y.getterFor("DOMException"),O="stack"in _("DOMException"),A=function(t){return d(f,t)&&f[t].m?f[t].c:0},$=function(){p(this,B);var t=arguments.length,e=g(t<1?void 0:arguments[0]),s=g(t<2?void 0:arguments[1],"Error"),i=A(s);if(S(this,{type:"DOMException",name:s,message:e,code:i}),C||(this.name=s,this.message=e,this.code=i),O){var n=_(e);n.name="DOMException",l(this,"stack",c(1,b(n.stack,1)))}},B=$.prototype=a(k),D=function(t){return{enumerable:!0,configurable:!0,get:t}},T=function(t){return D((function(){return R(this)[t]}))};C&&h(B,{name:T("name"),message:T("message"),code:T("code")}),l(B,"constructor",c(1,$));var I=o((function(){return!(new x instanceof _)})),V=I||o((function(){return k.toString!==m||"2: 1"!==String(new x(1,2))})),N=I||o((function(){return 25!==new x(1,"DataCloneError").code})),j=I||25!==x.DATA_CLONE_ERR||25!==w.DATA_CLONE_ERR,M=E?V||N||j:I;i({global:!0,forced:M},{DOMException:M?$:x});var L=r("DOMException"),z=L.prototype;for(var P in V&&(E||x===L)&&u(z,"toString",m),N&&C&&x===L&&l(z,"code",D((function(){return A(v(this).name)}))),f)if(d(f,P)){var Y=f[P],W=Y.s,H=c(6,Y.c);d(L,W)||l(L,W,H),d(z,W)||l(z,W,H)}},538:function(t,e,s){"use strict";var i=s(3),n=s(16),r=s(44),o=s(14).f,a=s(12),c=s(205),l=s(134),h=s(132),u=s(516),d=s(210),p=s(21),v=n("Error"),m=n("DOMException"),g=function(){c(this,f);var t=arguments.length,e=h(t<1?void 0:arguments[0]),s=h(t<2?void 0:arguments[1],"Error"),i=new m(e,s),n=v(e);return n.name="DOMException",o(i,"stack",r(1,d(n.stack,1))),l(i,this,g),i},f=g.prototype=m.prototype,b="stack"in v("DOMException"),y="stack"in new m(1,2),C=b&&!y;i({global:!0,forced:p||C},{DOMException:C?g:m});var E=n("DOMException"),_=E.prototype;if(_.constructor!==E)for(var x in p||o(_,"constructor",r(1,E)),u)if(a(u,x)){var w=u[x],k=w.s;a(E,k)||o(E,k,r(6,w.c))}},539:function(t,e,s){var i=s(16);s(49)(i("DOMException"),"DOMException")},540:function(t,e,s){"use strict";s(449);var i=s(395),n=s(420),r=s(381),o=s(382),a=s(373),c=s(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),l=s(369),h=s(17);e.a=Object(l.a)(i.a,o.a,c).extend({name:"v-alert",props:{border:{type:String,validator:t=>["top","right","bottom","left"].includes(t)},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:t=>"string"==typeof t||!1===t},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:t=>["info","error","success","warning"].includes(t)},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(n.a,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r.a,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(r.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i.a.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||a.a.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(h.a)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){t=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},561:function(t,e){for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i={},n=0;n<66;n++)i[s.charAt(n)]=n;t.exports={itoc:s,ctoi:i}},562:function(t,e,s){var i=s(72);t.exports=function(t){try{if(i)return Function('return require("'+t+'")')()}catch(t){}}},640:function(t,e,s){},870:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return a})),s.d(e,"d",(function(){return c}));var i=s(502),n=s(8);const r=Object(n.i)("v-card__actions"),o=Object(n.i)("v-card__subtitle"),a=Object(n.i)("v-card__text"),c=Object(n.i)("v-card__title");i.a},872:function(t,e,s){},873:function(t,e,s){},874:function(t,e,s){"use strict";s(640)},911:function(t,e,s){"use strict";s.r(e);s(125),s(36),s(536),s(537),s(538),s(539),s(9),s(127),s(128),s(207),s(222),s(95),s(218),s(408);var i=s(439),n=s.n(i),r=s(498),o=s(410),a=s(905),c=s(906),l=s(426),h=s(502),u=s(870),d=(s(872),s(873),s(442)),p=s(380),v=s(0).a.extend({name:"rippleable",directives:{ripple:p.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),m=s(401),g=s(369);function f(t){t.preventDefault()}var b=Object(g.a)(d.a,v,m.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=d.a.options.methods.genLabel.call(this);return t?(t.data.on={click:f},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:f},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),y=s(448),C=s(385),E=s(446),_=s(8),x=b.extend({name:"v-switch",directives:{Touch:y.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...d.a.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(C.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(E.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===_.s.left&&this.isActive||t.keyCode===_.s.right&&!this.isActive)&&this.onChange()}}}),w=s(540),k=s(637),S=s(453),R={name:"ConsentForm",components:{VApp:r.a,VBtn:o.a,VCol:a.a,VRow:c.a,VSheet:l.a,VCard:h.a,VCardText:u.c,VCardActions:u.a,VSwitch:x,VAlert:w.a,VIcon:k.a},props:{id:{type:String,default:"applet"},service:{type:String,default:"consent"},apiVersion:{type:String,default:"v1"}},data:function(){return{domain:"hdc.ntnu.no",consentVersion:null,isLoading:!0,isLoadingTexts:!0,isReadonly:!1,isSaving:!1,isError:!1,isWarning:!1,consentToken:null,submittedAs:[],form:{},textData:{},consentItems:[]}},computed:{showConsent:function(){return!(this.isLoading||this.isLoadingTexts||this.isError||!this.consentToken||!this.form||!(this.consentItems.length>0))},url:function(){return"https://".concat(this.service,"-api.").concat(this.domain,"/api/").concat(this.apiVersion,"/consent/").concat(this.consentToken)}},mounted:function(){},created:function(){try{this.isLoading=!0,this.consentToken=this.$route.query.token?atob(this.$route.query.token):null}catch(t){this.isWarning=!0,this.isLoading=!1}this.consentToken&&this.getConsentData()},methods:{getConsentData:function(){var t=this;n()(this.url,{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(t){return t.json()})).then((function(e){t.handleResponse(e)})).catch((function(e){console.error(e),t.isError=!0})).finally((function(){t.isLoading=!1}))},loadCurrentVersionOfTexts:function(t){var e=this;n()("/cfg/consent_texts.yml").then((function(t){return t.text()})).then((function(s){var i=S.load(s);e.textData=i["v".concat(t)]})).catch((function(t){console.error(t),e.isError=!0})).finally((function(){e.isLoadingTexts=!1}))},handleResponse:function(t){var e=this;"error"===t.status?("Consent not found"===t.item&&(this.isWarning=!0),console.log(t.item)):"success"===t.status&&t.item&&t.item.items.length>0&&(t&&"item"in t&&"version"in t.item&&t.item.version?(this.consentVersion=t.item.version,this.loadCurrentVersionOfTexts(this.consentVersion),console.log("Consent version: v".concat(this.consentVersion))):console.log(t),t.item.items.forEach((function(t){console.log(t),"PENDING"===t.status?e.form[t.type]=!1:"ACTIVE"===t.status?e.form[t.type]=!0:e.form[t.type]=!1,e.consentItems.push(t.type)})))},showType:function(t){return this.textData&&"items"in this.textData&&t in this.textData.items&&this.textData.items[t]&&this.consentItems.includes(t)},submit:function(){var t=this;this.isSaving=!0,this.isReadonly=!0;var e=this.consentItems.map((function(e){return t.form[e]?{type:e,status:"ACTIVE"}:{type:e,status:"REVOKED"}}));try{n()(this.url,{method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({items:e})}).then((function(t){return t.text()})).then((function(e){t.handleResponse(e)}))}catch(t){console.error(t),this.isError=!0}finally{setTimeout((function(){t.isSaving=!1,t.submittedAs=t.getSubmitMessage()}),"600"),setTimeout((function(){t.isReadonly=!1}),"1000")}},getSubmitMessage:function(){return this.form.slack?["Once again welcome to our community.","If we have not sent you a slack invitation yet we will send you one as soon as we process this consent."]:["Sorry to see you go!","Your slack account will be deactivated and then deleted as soon as we process this withdrawal."]},giveConsent:function(){var t=this;this.isSaving=!0,this.isReadonly=!0,console.log("give consent"),this.consentItems.forEach((function(e){t.form[e]=!0})),this.submit()},withdrawConsent:function(){var t=this;this.isSaving=!0,this.isReadonly=!0,console.log("withdraw consent"),this.consentItems.forEach((function(e){t.form[e]=!1})),this.submit()}}},O=(s(874),s(41)),A=Object(O.a)(R,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[s("v-app",{attrs:{id:t.id}},[s("v-sheet",{staticClass:"ma-4"},[t.isError?s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-alert",{attrs:{border:"left","colored-border":"",type:"error",elevation:"2"}},[s("strong",[t._v("Error occured while processing your consent.")]),t._v(" "),s("hr",{staticClass:"mt-1 mb-2"}),t._v("\n            Please contact us on "),s("a",{attrs:{href:"/about/contact/",target:"_blank"}},[t._v("email")]),t._v(" or try again later.\n          ")])],1)],1):t._e(),t._v(" "),t.isLoading||t.showConsent||!t.isWarning?t._e():s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-alert",{attrs:{border:"left","colored-border":"",type:"warning",elevation:"2"}},[s("strong",[t._v("Your link appears to be wrong.")]),t._v(" "),s("hr",{staticClass:"mt-1 mb-2"}),t._v("\n            If you do not have your own Consent link order one in Service desk.\n          ")])],1)],1),t._v(" "),t.showConsent?s("v-sheet",[s("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[s("v-row",t._l(t.textData.paragraphs,(function(e){return s("v-col",{attrs:{cols:"12"}},[t._v("\n              "+t._s(e)+"\n            ")])})),1),t._v(" "),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"4"}},[s("v-btn",{attrs:{href:"https://assets.hdc.ntnu.no/assets/consent/v"+t.consentVersion+"/privacy-statement-v"+t.consentVersion+".pdf",target:"_blank",color:"link",block:""}},[t._v("\n                Privacy statement (PDF)\n              ")])],1)],1),t._v(" "),!t.form?t._e():s("v-row",[t.showType("slack")?s("v-col",{attrs:{cols:"12"}},[s("v-switch",{staticClass:"mt-0",attrs:{color:"green lighten-1",readonly:"",inset:"","hide-details":"",name:"slack",label:t.textData.items.slack},model:{value:t.form.slack,callback:function(e){t.$set(t.form,"slack",e)},expression:"form['slack']"}})],1):t._e()],1),t._v(" "),!t.form?t._e():s("v-row",[t.showType("tingweek")?s("v-col",{attrs:{cols:"12"}},[s("v-switch",{staticClass:"mt-0",attrs:{color:"green lighten-1",readonly:"",inset:"","hide-details":"",name:"tingweek",label:t.textData.items.tingweek},model:{value:t.form.tingweek,callback:function(e){t.$set(t.form,"tingweek",e)},expression:"form['tingweek']"}})],1):t._e()],1),t._v(" "),s("v-row",{staticClass:"mb-2",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"3"}},[s("v-btn",{attrs:{color:"success",disabled:t.isError,loading:t.isSaving||t.isLoading,block:""},on:{click:function(e){return t.giveConsent()}}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("\n                  check\n                ")]),t._v("\n                Give consent\n              ")],1)],1),t._v(" "),s("v-col",{attrs:{cols:"3"}},[s("v-btn",{attrs:{color:"blue-grey-darken-4",disabled:t.isError,loading:t.isSaving||t.isLoading,block:"",outlined:"",elevation:"1"},on:{click:function(e){return t.withdrawConsent()}}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("\n                  cancel\n                ")]),t._v("\n                Withdraw consent\n              ")],1)],1)],1)],1)]):t._e(),t._v(" "),!t.submittedAs||2!=t.submittedAs.length?t._e():s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"10"}},[s("v-alert",{attrs:{type:"info"}},[s("strong",[t._v(t._s(t.submittedAs[0]))]),t._v(" "),s("hr",{staticClass:"mt-1 mb-2"}),t._v("\n            "+t._s(t.submittedAs[1])+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=A.exports}}]);