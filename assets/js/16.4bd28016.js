(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1092:function(e,t,n){"use strict";n.r(t);n(68),n(36),n(453),n(9),n(457);var r=n(1109),o=n(1110),i=n(429),l={name:"CopyInputField",components:{VCol:r.a,VRow:o.a,VTextField:i.a},props:{value:{type:[Object,String],default:null},label:{type:String,default:""},placeholder:{type:String,default:null},prefix:{type:String,default:null},suffix:{type:String,default:null},prependInnerIcon:{type:String,default:null},loading:{type:Boolean,default:!1}},data:function(){return{}},computed:{getRef:function(){return Math.random().toString(20).slice(2,6)}},created:function(){},methods:{copyText:function(e){this.$refs[e].$el.querySelector("input").select(),document.execCommand("copy")}}},a=(n(581),n(41)),u=Object(a.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",{ref:e.getRef,attrs:{value:e.value,autocomplete:"ignore-field",label:e.label,placeholder:e.placeholder,"persistent-placeholder":"",prefix:e.prefix?e.prefix+" ":"",suffix:e.suffix,"prepend-inner-icon":e.prependInnerIcon,loading:e.loading,outlined:"",dense:"",readonly:"","hide-details":""},on:{input:function(t){return e.$emit("input",t.target.value)},focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("a",{staticClass:"material-icons content_copy",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.copyText(e.getRef)}}},[e._v("")])]},proxy:!0}])})}),[],!1,null,null,null);t.default=u.exports},453:function(e,t,n){var r=n(3),o=n(19),i=Date.prototype,l=r(i.toString),a=r(i.getTime);"Invalid Date"!=String(new Date(NaN))&&o(i,"toString",(function(){var e=a(this);return e==e?l(this):"Invalid Date"}))},457:function(e,t,n){"use strict";var r=n(3),o=n(94).PROPER,i=n(19),l=n(11),a=n(37),u=n(18),c=n(4),p=n(203),f=RegExp.prototype,s=f.toString,d=r(p),g=c((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),y=o&&"toString"!=s.name;(g||y)&&i(RegExp.prototype,"toString",(function(){var e=l(this),t=u(e.source),n=e.flags;return"/"+t+"/"+u(void 0===n&&a(f,e)&&!("flags"in f)?d(e):n)}),{unsafe:!0})},533:function(e,t,n){},581:function(e,t,n){"use strict";n(533)}}]);