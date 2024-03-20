(window.webpackJsonp=window.webpackJsonp||[]).push([[47,69],{1076:function(t,e,i){"use strict";i.r(e);i(69),i(36),i(455),i(9),i(459);var s=i(1084),n=i(1085),o=i(481),l={name:"CopyTextArea",components:{VCol:s.a,VRow:n.a,VTextarea:o.a},props:{value:{type:[Object,String],default:null},label:{type:String,default:""},placeholder:{type:String,default:null},rows:{type:String,default:"5"}},data:function(){return{}},computed:{getRef:function(){return Math.random().toString(20).slice(2,6)}},created:function(){},methods:{copyText:function(t){this.$refs[t].$el.querySelector("input").select(),document.execCommand("copy")}}},a=i(41),r=Object(a.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-textarea",{ref:t.getRef,attrs:{value:t.value,autocomplete:"ignore-field",label:t.label,placeholder:t.placeholder,"persistent-placeholder":"",rows:t.rows,outlined:"",dense:"",readonly:"","hide-details":""},on:{input:function(e){return t.$emit("input",e.target.value)},focus:function(t){return t.target.select()}},scopedSlots:t._u([{key:"append",fn:function(){return[i("a",{staticClass:"material-icons content_copy",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.copyText(t.getRef)}}},[t._v("")])]},proxy:!0}])})}),[],!1,null,null,null);e.default=r.exports},395:function(t,e,i){"use strict";i(428);var s=i(437),n=(i(474),i(372)),o=i(369),l=Object(o.a)(n.a).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:i}=e,s=parseInt(i.max,10),o=parseInt(i.value,10),l=s?`${o} / ${s}`:String(i.value);return t("div",{staticClass:"v-counter",class:{"error--text":s&&o>s,...Object(n.b)(e)}},l)}}),a=i(517),r=i(466),h=i(17),u=i(0);var d=i(507),c=i(510),p=i(409),f=i(379),g=i(469),v=i(8);const m=Object(o.a)(s.a,(b={onVisible:["onResize","tryAutofocus"]},u.a.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){r.a.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){r.a.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(t,e,i){if(this.isIntersecting=i,i)for(let t=0,e=b.onVisible.length;t<e;t++){const e=this[b.onVisible[t]];"function"!=typeof e?Object(h.c)(b.onVisible[t]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})),d.a);var b;const x=["color","file","time","date","datetime-local","week","month"];e.a=m.extend().extend({name:"v-text-field",directives:{resize:p.a,ripple:f.a},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...s.a.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=c.a.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"==typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return s.a.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null===(t=this.lazyValue)||void 0===t?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||x.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&Object(h.a)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(h.a)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(h.c)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch(()=>this.labelValue,this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame(()=>{this.isBooted=!0,requestAnimationFrame(()=>{this.isIntersecting||this.onResize()})})},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame(()=>{this.$refs.input&&this.$refs.input.blur()})},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick(()=>this.internalValue=null)},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=s.a.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,i;if(!this.hasCounter)return null;const s=!0===this.counter?this.attrs$.maxlength:this.counter,n={dark:this.dark,light:this.light,max:s,value:this.computedCounterValue};return null!==(i=null===(e=(t=this.$scopedSlots).counter)||void 0===e?void 0:e.call(t,{props:n}))&&void 0!==i?i:this.$createElement(l,{props:n})},genControl(){return s.a.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(a.a,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(v.g)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...i}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...i,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=s.a.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:"v-text-field__"+t,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick(()=>this.$emit("blur",t))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=Object(g.a)(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===v.s.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),s.a.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),s.a.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"==typeof document||!this.$refs.input)return!1;const t=Object(g.a)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},409:function(t,e,i){"use strict";const s={inserted:function(t,e,i){const s=e.value,n=e.options||{passive:!0};window.addEventListener("resize",s,n),t._onResize=Object(t._onResize),t._onResize[i.context._uid]={callback:s,options:n},e.modifiers&&e.modifiers.quiet||s()},unbind:function(t,e,i){var s;if(!(null===(s=t._onResize)||void 0===s?void 0:s[i.context._uid]))return;const{callback:n,options:o}=t._onResize[i.context._uid];window.removeEventListener("resize",n,o),delete t._onResize[i.context._uid]}};e.a=s},425:function(t,e,i){},428:function(t,e,i){},455:function(t,e,i){var s=i(3),n=i(19),o=Date.prototype,l=s(o.toString),a=s(o.getTime);"Invalid Date"!=String(new Date(NaN))&&n(o,"toString",(function(){var t=a(this);return t==t?l(this):"Invalid Date"}))},459:function(t,e,i){"use strict";var s=i(3),n=i(94).PROPER,o=i(19),l=i(11),a=i(37),r=i(18),h=i(4),u=i(203),d=RegExp.prototype,c=d.toString,p=s(u),f=h((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),g=n&&"toString"!=c.name;(f||g)&&o(RegExp.prototype,"toString",(function(){var t=l(this),e=r(t.source),i=t.flags;return"/"+e+"/"+r(void 0===i&&a(d,t)&&!("flags"in d)?p(t):i)}),{unsafe:!0})},469:function(t,e,i){"use strict";function s(t){if("function"!=typeof t.getRootNode){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return s}))},474:function(t,e,i){},481:function(t,e,i){"use strict";i(425);var s=i(395),n=i(369);const o=Object(n.a)(s.a);e.a=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s.a.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=s.a.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);