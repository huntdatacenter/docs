(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1081:function(t,e,n){"use strict";n.r(e);n(69),n(36),n(461),n(9),n(466);var r=n(1089),o=n(1090),a=n(485),l={name:"CopyTextArea",components:{VCol:r.a,VRow:o.a,VTextarea:a.a},props:{value:{type:[Object,String],default:null},label:{type:String,default:""},placeholder:{type:String,default:null},rows:{type:String,default:"5"}},data:function(){return{}},computed:{getRef:function(){return Math.random().toString(20).slice(2,6)}},created:function(){},methods:{copyText:function(t){this.$refs[t].$el.querySelector("input").select(),document.execCommand("copy")}}},i=n(41),u=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-textarea",{ref:t.getRef,attrs:{value:t.value,autocomplete:"ignore-field",label:t.label,placeholder:t.placeholder,"persistent-placeholder":"",rows:t.rows,outlined:"",dense:"",readonly:"","hide-details":""},on:{input:function(e){return t.$emit("input",e.target.value)},focus:function(t){return t.target.select()}},scopedSlots:t._u([{key:"append",fn:function(){return[n("a",{staticClass:"material-icons content_copy",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.copyText(t.getRef)}}},[t._v("")])]},proxy:!0}])})}),[],!1,null,null,null);e.default=u.exports},461:function(t,e,n){var r=n(3),o=n(19),a=Date.prototype,l=r(a.toString),i=r(a.getTime);"Invalid Date"!=String(new Date(NaN))&&o(a,"toString",(function(){var t=i(this);return t==t?l(this):"Invalid Date"}))},466:function(t,e,n){"use strict";var r=n(3),o=n(94).PROPER,a=n(19),l=n(11),i=n(37),u=n(18),c=n(4),s=n(203),p=RegExp.prototype,f=p.toString,d=r(s),g=c((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),y=o&&"toString"!=f.name;(g||y)&&a(RegExp.prototype,"toString",(function(){var t=l(this),e=u(t.source),n=t.flags;return"/"+e+"/"+u(void 0===n&&i(p,t)&&!("flags"in p)?d(t):n)}),{unsafe:!0})}}]);