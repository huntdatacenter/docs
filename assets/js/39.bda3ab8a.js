(window.webpackJsonp=window.webpackJsonp||[]).push([[39,40],{399:function(t,e,a){},417:function(t,e,a){var n=a(2),o=a(19),r=Date.prototype,i=n(r.toString),s=n(r.getTime);"Invalid Date"!=String(new Date(NaN))&&o(r,"toString",(function(){var t=s(this);return t==t?i(this):"Invalid Date"}))},419:function(t,e,a){"use strict";var n=a(2),o=a(94).PROPER,r=a(19),i=a(11),s=a(37),u=a(18),l=a(4),c=a(202),p=RegExp.prototype,h=p.toString,d=n(c),g=l((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),f=o&&"toString"!=h.name;(g||f)&&r(RegExp.prototype,"toString",(function(){var t=i(this),e=u(t.source),a=t.flags;return"/"+e+"/"+u(void 0===a&&s(p,t)&&!("flags"in p)?d(t):a)}),{unsafe:!0})},440:function(t,e,a){"use strict";a(399);var n=a(401),o=a(368);const r=Object(o.a)(n.a);e.a=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...n.a.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=n.a.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){n.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},871:function(t,e,a){"use strict";a.r(e);a(66),a(36),a(417),a(10),a(419);var n=a(877),o=a(878),r=a(440),i={name:"CopyTextArea",components:{VCol:n.a,VRow:o.a,VTextarea:r.a},props:{value:{type:[Object,String],default:null},label:{type:String,default:""},placeholder:{type:String,default:null},rows:{type:String,default:"5"}},data:function(){return{}},computed:{getRef:function(){return Math.random().toString(20).slice(2,6)}},created:function(){},methods:{copyText:function(t){this.$refs[t].$el.querySelector("input").select(),document.execCommand("copy")}}},s=a(41),u=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-textarea",{ref:t.getRef,attrs:{value:t.value,autocomplete:"ignore-field",label:t.label,placeholder:t.placeholder,"persistent-placeholder":"",rows:t.rows,outlined:"",dense:"",readonly:"","hide-details":""},on:{input:function(e){return t.$emit("input",e.target.value)},focus:function(t){return t.target.select()}},scopedSlots:t._u([{key:"append",fn:function(){return[a("a",{staticClass:"material-icons content_copy",on:{click:function(e){return t.copyText(t.getRef)}}},[t._v("")])]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports}}]);