(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1095:function(t,e,n){"use strict";n.r(e);n(69),n(36),n(460),n(9),n(466);var r=n(1087),i=n(1088),o=n(421),a={name:"CopyInput",components:{VCol:r.a,VRow:i.a,VTextField:o.a},props:{value:{type:[Object,String],default:null},label:{type:String,default:""},placeholder:{type:String,default:null},prefix:{type:String,default:null},suffix:{type:String,default:null},prependInnerIcon:{type:String,default:null}},data:function(){return{}},computed:{getRef:function(){return Math.random().toString(20).slice(2,6)}},created:function(){},methods:{copyText:function(t){this.$refs[t].$el.querySelector("input").select(),document.execCommand("copy")}}},u=(n(997),n(41)),l=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[n("v-app",{attrs:{id:t.id}},[n("v-text-field",{ref:t.getRef,attrs:{value:t.value,autocomplete:"ignore-field",label:t.label,placeholder:t.placeholder,"persistent-placeholder":"",prefix:t.prefix,suffix:t.suffix,"prepend-inner-icon":t.prependInnerIcon,outlined:"",dense:"",readonly:"","hide-details":""},on:{input:function(e){return t.$emit("input",e.target.value)},focus:function(t){return t.target.select()}},scopedSlots:t._u([{key:"append",fn:function(){return[n("a",{staticClass:"material-icons content_copy",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.copyText(t.getRef)}}},[t._v("")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=l.exports},460:function(t,e,n){var r=n(3),i=n(19),o=Date.prototype,a=r(o.toString),u=r(o.getTime);"Invalid Date"!=String(new Date(NaN))&&i(o,"toString",(function(){var t=u(this);return t==t?a(this):"Invalid Date"}))},466:function(t,e,n){"use strict";var r=n(3),i=n(94).PROPER,o=n(19),a=n(11),u=n(37),l=n(18),c=n(4),p=n(203),s=RegExp.prototype,f=s.toString,d=r(p),g=c((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),v=i&&"toString"!=f.name;(g||v)&&o(RegExp.prototype,"toString",(function(){var t=a(this),e=l(t.source),n=t.flags;return"/"+e+"/"+l(void 0===n&&u(s,t)&&!("flags"in s)?d(t):n)}),{unsafe:!0})},659:function(t,e,n){},997:function(t,e,n){"use strict";n(659)}}]);