(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{892:function(e,s,t){"use strict";t.r(s);t(9),t(23),t(27);var l=t(905),n=t(906),a=t(403),o={name:"AccessIntro",components:{VCol:l.a,VRow:n.a,VTextField:a.a,CopyTextField:function(){return t.e(4).then(t.bind(null,899))}},props:{username:{type:String,default:null},labName:{type:String,default:null},ipAddress:{type:String,default:null}},data:function(){return{}},computed:{},created:function(){},methods:{copyText:function(e){this.$refs[e].$el.querySelector("input").select(),document.execCommand("copy")}}},c=t(41),r=Object(c.a)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-row",{staticClass:"pt-4 pb-4",attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"10"}},[e._v("\n    These are the essential access credentials. Follow the guides below to configure your access.\n  ")]),e._v(" "),t("v-col",{attrs:{cols:"4"}},[t("CopyTextField",{attrs:{label:"Username",placeholder:"Your link is missing access token",prefix:""},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}})],1),e._v(" "),t("v-col",{attrs:{cols:"4"}},[t("CopyTextField",{attrs:{label:"Lab name",placeholder:"Your link is missing access token",prefix:""},model:{value:e.labName,callback:function(s){e.labName=s},expression:"labName"}})],1),e._v(" "),t("v-col",{attrs:{cols:"4"}},[t("CopyTextField",{attrs:{label:"Lab IP Address",placeholder:"Your link is missing access token",prefix:""},model:{value:e.ipAddress,callback:function(s){e.ipAddress=s},expression:"ipAddress"}})],1)],1)}),[],!1,null,null,null);s.default=r.exports}}]);