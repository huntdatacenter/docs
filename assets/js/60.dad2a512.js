(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{640:function(t,e,n){},873:function(t,e,n){"use strict";n(640)},912:function(t,e,n){"use strict";n.r(e);n(201),n(36),n(536),n(537),n(538),n(539),n(10);var s=n(497),i=n(410),o=n(904),a=n(905),r=n(419),u=n(501),c=n(869),l=n(1086),m={name:"ConsentForm",components:{VApp:s.a,VBtn:i.a,VCol:o.a,VRow:a.a,VSheet:r.a,VCard:u.a,VCardText:c.c,VCardActions:c.a,VSwitch:l.a},props:{id:{type:String,default:"applet"},service:{type:String,default:"consent"},apiVersion:{type:String,default:"v1"}},data:function(){return{domain:"hdc.ntnu.no",isLoading:!0,consentToken:null,form:{slack:!0,tingweek:!0}}},computed:{showConsent:function(){return!(this.isLoading||!this.consentToken)},url:function(){return"https://".concat(this.service,"-api.").concat(this.domain,"/api/").concat(this.apiVersion,"/consent/").concat(this.consentToken)}},mounted:function(){this.isLoading=!1},created:function(){this.isLoading=!0,this.consentToken=this.$route.query.token?atob(this.$route.query.token):null,this.consentToken&&this.getConsentData()},methods:{getConsentData:function(){fetch(this.url,{method:"GET",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(t){return t.text()})).then((function(t){console.log(t)}))},submit:function(){console.log(this.form),fetch(this.url,{method:"PUT",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(t){return t.text()})).then((function(t){console.log(t)}))}}},v=(n(873),n(41)),d=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[n("v-app",{attrs:{id:t.id}},[t.isLoading?n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8"}},[t._v("\n        Loading...\n      ")])],1):t._e(),t._v(" "),t.isLoading||t.showConsent?t._e():n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8"}},[t._v("\n        If you do not have your Consent link request one in Service desk.\n      ")])],1),t._v(" "),n("v-sheet",{staticClass:"pa-4"},[t.showConsent?n("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[n("v-row",[n("v-col",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lorem fermentum, \n            ultrices metus non, sagittis est. Pellentesque habitant morbi tristique senectus et netus \n            et malesuada fames ac turpis egestas. Phasellus vitae porta dolor. Pellentesque feugiat quis \n            sapien et tincidunt. Nam pellentesque quam eget augue finibus pharetra. \n            Nunc eget tortor eu libero porttitor venenatis. Nulla vehicula mollis massa. \n            Sed dignissim mauris ac odio porttitor pulvinar.\n          ")])],1),t._v(" "),n("v-row",[n("v-col",[t._v("\n            Proin rhoncus eros purus, vel dapibus nisi euismod at. Donec viverra elementum vestibulum. \n            Fusce tristique at enim quis semper. Duis vel rutrum augue. Maecenas ultricies ipsum ex, \n            eu tristique ipsum cursus in. Pellentesque ac dictum libero. Vivamus finibus rhoncus neque non \n            tristique. Proin volutpat purus ipsum, sed vehicula felis egestas sed.\n          ")])],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{href:"#",target:"_blank",color:"link",block:""}},[t._v("\n              Privacy statement (PDF)\n            ")])],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-switch",{staticClass:"mt-0",attrs:{disabled:t.isLoading,color:"green lighten-1",inset:"","hide-details":"",name:"slack",label:"Slack: Donec at metus suscipit nunc placerat ornare egestas venenatis metus. Cras pretium urna justo, a auctor enim sodales ut."},model:{value:t.form.slack,callback:function(e){t.$set(t.form,"slack",e)},expression:"form['slack']"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-switch",{staticClass:"mt-0",attrs:{disabled:t.isLoading,color:"green lighten-1",inset:"","hide-details":"",name:"tingweek",label:"Tingweek: Duis vel rutrum augue. Maecenas ultricies ipsum ex, eu tristique ipsum cursus in."},model:{value:t.form.tingweek,callback:function(e){t.$set(t.form,"tingweek",e)},expression:"form['tingweek']"}})],1)],1),t._v(" "),n("v-row",{staticClass:"mb-2",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"3"}},[n("v-btn",{attrs:{type:"submit",color:"success",block:""}},[t._v("\n              Submit consent\n            ")])],1)],1)],1):t._e()])],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);