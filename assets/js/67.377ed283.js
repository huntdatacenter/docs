(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1078:function(t,e,o){"use strict";o.r(e);o(216);var a=o(1088),i=o(1089),r=o(396),n=o(442),l=o(996),s=o(623),c=o(1087),d=o(473),v=o(475),u=o(543),p={name:"VideoGuide",components:{VCol:a.a,VRow:i.a,VBtn:r.a,VCard:n.a,VCardTitle:l.d,VCardText:l.c,VCardActions:l.a,VToolbar:s.a,VToolbarTitle:c.b,VToolbarItems:c.a,VSpacer:d.a,VDialog:v.a,VIcon:u.a},props:{value:{type:Number,required:!0},title:{type:String,required:!0},video:{type:String,required:!0},poster:{type:String,required:!0},inc:{type:Number,default:1},buttontext:{type:String,default:"Video guide"}},data:function(){return{videoDialog:!1,preload:!1,totpStepper:1}},computed:{},created:function(){},methods:{nextPanel:function(){this.videoDialog=!1,this.$emit("input",this.value+this.inc)}}},b=(o(622),o(41)),m=Object(b.a)(p,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("v-row",{staticClass:"my-1"},[o("v-col",{attrs:{cols:"12"}},[o("v-btn",{attrs:{text:"",color:"success",elevation:"2"},on:{click:function(e){e.stopPropagation(),t.videoDialog=!0,t.preload=!0}}},[o("v-icon",[t._v("play_arrow")]),t._v("  "+t._s(t.buttontext)+" (NEW)\n      ")],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"1280px"},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.videoDialog=!1}},model:{value:t.videoDialog,callback:function(e){t.videoDialog=e},expression:"videoDialog"}},[o("v-card",{staticClass:"pa-0 ma-0",attrs:{elevation:"0"}},[o("v-card-title",{staticClass:"pa-0"},[o("v-toolbar",{attrs:{dark:"",color:"#00509e",flat:""}},[o("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-items",[o("v-btn",{attrs:{icon:"",fab:""},on:{click:function(e){t.videoDialog=!1}}},[o("v-icon",[t._v("close")])],1)],1)],1)],1),t._v(" "),o("v-card-text",{staticClass:"pa-0 ma-0"},[t.preload?o("video",{staticClass:"video-card-block",attrs:{width:"100%",poster:t.poster,preload:"auto",controls:""}},[o("source",{attrs:{src:t.video,type:"video/mp4"}}),t._v("\n          Your browser does not support the video tag.\n        ")]):t._e()]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"mx-2 my-2",attrs:{outlined:"",color:"link",small:""},on:{click:function(e){t.videoDialog=!1}}},[t._v("Close")]),t._v(" "),o("v-btn",{staticClass:"mx-2 my-2",attrs:{color:"primary",small:""},on:{click:function(e){return t.nextPanel()}}},[t._v("Next")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=m.exports},539:function(t,e,o){},622:function(t,e,o){"use strict";o(539)}}]);