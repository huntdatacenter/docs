(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1061:function(t,e,o){"use strict";o.r(e);var a=o(1070),s=o(1071),n=o(411),l=o(503),i=o(980),r=o(611),c=o(1069),p=o(442),v=o(444),d=o(388),u=o(389),_=o(390),h=o(467),m=o(645),b=o(404),f={name:"TotpGuide",components:{VCol:a.a,VRow:s.a,VBtn:n.a,VCard:l.a,VCardTitle:i.d,VCardText:i.c,VToolbar:r.a,VToolbarTitle:c.b,VToolbarItems:c.a,VSpacer:p.a,VDialog:v.a,VStepper:d.a,VStepperContent:u.a,VStepperStep:_.a,VStepperItems:h.a,VIcon:m.a,VTextField:b.a},props:{},data:function(){return{totpDialog:!1,totpStepper:1}},computed:{},created:function(){},methods:{}},y=o(41),g=Object(y.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("v-row",{staticClass:"my-1"},[o("v-col",{attrs:{cols:"12"}},[o("v-btn",{attrs:{text:"",elevation:"2"},on:{click:function(e){e.stopPropagation(),t.totpDialog=!0}}},[o("v-icon",[t._v("smartphone")]),t._v("  1. Time-based one-time password (TOTP)\n      ")],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"960px"},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.totpDialog=!1}},model:{value:t.totpDialog,callback:function(e){t.totpDialog=e},expression:"totpDialog"}},[o("v-card",{attrs:{elevation:"0"}},[o("v-card-title",{staticClass:"pa-0"},[o("v-toolbar",{attrs:{dark:"",color:"#00509e",flat:""}},[o("v-toolbar-title",[t._v("TOTP Configuration")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-items",[o("v-btn",{attrs:{icon:"",fab:""},on:{click:function(e){t.totpDialog=!1}}},[o("v-icon",[t._v("close")])],1)],1)],1)],1),t._v(" "),o("v-card-text",{staticClass:"pa-0"},[o("v-stepper",{attrs:{vertical:""},model:{value:t.totpStepper,callback:function(e){t.totpStepper=e},expression:"totpStepper"}},[o("v-stepper-step",{attrs:{complete:t.totpStepper>1,step:"1"}},[t._v("\n            Install TOTP application on your phone\n          ")]),t._v(" "),o("v-stepper-content",{attrs:{step:"1"}},[o("v-card",{staticClass:"mb-12",attrs:{elevation:"0"}},[t._v("\n              Search for "),o("code",[t._v("Google Authenticator")]),t._v(" in the iOS or Android app stores, or use the links below:\n\n              "),o("ul",{staticClass:"my-2"},[o("li",[o("a",{attrs:{href:"https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8",target:"_blank"}},[t._v("Download and install for iOS here (opens new window)")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en",target:"_blank"}},[t._v("Download and install for Android here (opens new window)")])])]),t._v("\n\n              If you prefer different TOTP application e.g. "),o("code",[t._v("Microsoft Authenticator")]),t._v(" you can use it,\n              although the steps might be sligthly different and we do not cover them in our guides.\n            ")]),t._v(" "),o("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"primary"},on:{click:function(e){t.totpStepper=2}}},[t._v("Continue")])],1),t._v(" "),o("v-stepper-step",{attrs:{complete:t.totpStepper>2,step:"2"}},[t._v("\n            Add new TOTP account\n          ")]),t._v(" "),o("v-stepper-content",{attrs:{step:"2"}},[o("v-card",{staticClass:"mb-12",attrs:{elevation:"0"}},[o("ol",[o("li",[t._v("Start the Google Authenticator app and follow these steps.")]),t._v(" "),o("li",[t._v("If you are using the app for the first time and screen saying "),o("i",[t._v('"Welcome to Google Authenticator"')]),t._v(" appears, just tap "),o("code",[t._v("Use google authenticator without an account")]),t._v(".")]),t._v(" "),o("li",[t._v("\n                  Click on the "),o("img",{staticStyle:{height:"2.5em","margin-bottom":"-0.5em"},attrs:{alt:"google-auth-plus-icon",src:"/img/totp/google-auth-plus-icon.png"}}),t._v(" "),o("code",[t._v("plus button")]),t._v(" in the bottom right corner "),o("v-icon",[t._v("south_east")]),t._v(" of your phone screen."),o("br")],1),t._v(" "),o("li",[t._v("\n                  Select option "),o("code",[t._v("Enter a setup key "),o("v-icon",[t._v("keyboard")])],1),t._v(".\n                ")]),t._v(" "),o("li",[t._v("\n                  A form called "),o("i",[t._v('"Enter account details"')]),t._v(" appears."),o("br"),t._v(" "),o("v-row",{staticStyle:{"max-width":"400px"},attrs:{justify:"start",dense:"","no-gutters":""}},[o("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{outlined:"",label:"Account name",readonly:"",disabled:"",dense:"","hide-details":""}})],1),t._v(" "),o("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{outlined:"",label:"Your key",readonly:"",disabled:"",dense:"","hide-details":""}})],1),t._v(" "),o("v-col",{staticClass:"my-1",attrs:{cols:"8"}},[o("v-text-field",{attrs:{value:"Time based",outlined:"",label:"Type of key",placeholder:"",readonly:"",disabled:"",dense:"","persistent-placeholder":"","hide-details":""}})],1)],1)],1),t._v(" "),o("li",[t._v("\n                  Enter "),o("code",{staticStyle:{"font-weight":"bold"}},[t._v("HUNT CLOUD VPN")]),t._v(" as "),o("i",[t._v('"Account name"')]),t._v(" because you will have only one HUNT Cloud VPN.\n                  "),o("v-row",{staticStyle:{"max-width":"400px"},attrs:{justify:"start",dense:"","no-gutters":""}},[o("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{value:"HUNT CLOUD VPN",outlined:"",label:"Account name",placeholder:"",readonly:"",disabled:"",dense:"","persistent-placeholder":"","hide-details":""}})],1)],1)],1),t._v(" "),o("li",[t._v("\n                  Enter the "),o("code",[t._v("Google Authenticator")]),t._v(" key sent to you over Signal.\n                  "),o("v-row",{staticStyle:{"max-width":"400px"},attrs:{justify:"start",dense:"","no-gutters":""}},[o("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{value:"",outlined:"",label:"Your key",placeholder:"****************",readonly:"",disabled:"",dense:"","persistent-placeholder":"","hide-details":""}})],1)],1)],1),t._v(" "),o("li",[t._v("\n                  Make sure "),o("code",{staticStyle:{"font-weight":"bold"}},[t._v("Time based")]),t._v(" is selected.\n                  "),o("v-row",{staticStyle:{"max-width":"400px"},attrs:{justify:"start",dense:"","no-gutters":""}},[o("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[o("v-text-field",{attrs:{value:"Time based",outlined:"",label:"Type of key",placeholder:"",readonly:"",disabled:"",dense:"","persistent-placeholder":"","hide-details":""}})],1)],1)],1),t._v(" "),o("li",[t._v("Tap on "),o("code",{staticStyle:{"font-weight":"bold"}},[t._v("Add")]),t._v(" button to finish the setup of the new account.")])])]),t._v(" "),o("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"primary"},on:{click:function(e){t.totpStepper=3}}},[t._v("Continue")]),t._v(" "),o("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"link"},on:{click:function(e){t.totpStepper=1}}},[t._v("Back")])],1),t._v(" "),o("v-stepper-step",{attrs:{step:"3"}},[t._v("\n            Check your TOTP codes\n          ")]),t._v(" "),o("v-stepper-content",{attrs:{step:"3"}},[o("v-card",{staticClass:"mb-12",attrs:{elevation:"0"}},[t._v("\n              In your "),o("i",[t._v("Google authenticator")]),t._v(" app you should see a field"),o("br"),t._v("\n              with name "),o("code",[t._v("HUNT CLOUD VPN")]),t._v(" showing "),o("b",[t._v("6 digit verification code")]),t._v(".\n              "),o("br"),o("br"),t._v("\n              This code refreshes every 30 seconds.\n            ")]),t._v(" "),o("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"primary"},on:{click:function(e){t.totpStepper=1}}},[t._v("Start again")]),t._v(" "),o("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"link"},on:{click:function(e){t.totpStepper=2}}},[t._v("Back")]),t._v(" "),o("v-btn",{staticClass:"mx-2 mb-1",attrs:{color:"success"},on:{click:function(e){t.totpDialog=!1,t.totpStepper=1}}},[t._v("Finish")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=g.exports}}]);