(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{553:function(e,t,s){},823:function(e,t,s){"use strict";s(553)},885:function(e,t,s){"use strict";s.r(t);s(10),s(23),s(27),s(201),s(35),s(64),s(397),s(434),s(36),s(548),s(549),s(551),s(552);var n=s(475),a=s(412),o=s(876),i=s(877),r=s(405),l=s(448),c=s(427),u=s(456),p=s(457),d=s(458),h=s(459),f=s(878),m=s(893),v=s(822),y=s(1053),g=s(873),x={name:"IaasAccess",components:{VApp:n.a,VBtn:a.a,VCol:o.a,VRow:i.a,VTextField:r.a,VTextarea:l.a,VCard:c.a,VExpansionPanel:u.a,VExpansionPanels:p.a,VExpansionPanelHeader:d.a,VExpansionPanelContent:h.a,VTab:f.a,VTabs:m.a,VTabsSlider:v.a,VTabItem:y.a,VTabsItems:g.a,CopyTextField:function(){return s.e(3).then(s.bind(null,870))}},props:{id:{type:String,default:"applet"}},data:function(){return{tab:null,access:null,query:{ipAddress:null,labName:null,username:null,iaasName:null},template:"Host {lab_name}-entry\n    HostName {ip_address}\n    User {username}\n\nHost {lab_name}\n    HostName home\n    HostKeyAlias {lab_name}\n    User {username}\n    ProxyJump {lab_name}-entry\n\nHost {iaas_name}\n    HostName {iaas_name}\n    User ubuntu\n    ProxyJump {lab_name}\n\n"}},computed:{cfgShow:function(){return!!(this.query.ipAddress&&this.query.labName&&this.query.username)},configText:function(){return this.query.ipAddress&&this.query.labName&&this.query.username?this.wrap(this.template):null},powershellText:function(){return this.query.ipAddress&&this.query.labName&&this.query.username?this.wrap(this.powershell):null},passExpiredText:function(){return this.query.ipAddress&&this.query.labName&&this.query.username?this.wrap(this.passExpired):null},puttyHostName:function(){return this.query.ipAddress&&this.query.username?"".concat(this.query.username,"@").concat(this.query.ipAddress):null},hostsWorkbench:function(){return this.query.ipAddress&&this.query.labName?"".concat(this.query.ipAddress,"  ").concat(this.query.labName,".lab.hdc.ntnu.no"):null},isDataComplete:function(){return!!(this.query.ipAddress&&this.query.labName&&this.query.username&&this.query.iaasName)},entryIpUrl:function(){return this.query.ipAddress?this.query.ipAddress.replaceAll(".","%2E"):""},iaasName:function(){return this.query.iaasName?this.query.iaasName.replaceAll(".","%2E").replaceAll("-","%2D"):""},userName:function(){return this.query.username?this.query.username.replaceAll("-","%2D").replaceAll(".","%2E"):""},iaas_mobaxtermTerminal:function(){return this.cfgShow?"mobaxterm:".concat(this.iaasName,"%20%3D%23109%230%25").concat(this.iaasName,"%2522%25ubuntu%25%25%2D1%25%2D1%25%25").concat(this.entryIpUrl,"%5F%5FPIPE%5F%5F").concat(this.homeIpUrl,"%2522%5F%5FPIPE%5F%5F22%25").concat(this.userName,"%5F%5FPIPE%5F%5F").concat(this.userName,"%25%2D1%250%250%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%5F%5FPIPE%5F%5F%5FProfileDir%5F%5C%2Essh%5Cid%5Frsa%25%2D1%250%250%250%25%251080%25%250%250%251%25%250%25%25%25%250%25%2D1%25%2D1%250%23MobaFont%2510%250%250%25%2D1%2515%25236%2C236%2C236%2530%2C30%2C30%25180%2C180%2C192%250%25%2D1%250%25%25xterm%2D256color%25%2D1%250%25%5FStd%5FColors%5F0%5F%2580%2524%250%251%25%2D1%25%3Cnone%3E%25%250%250%25%2D1%25%2D1%230%23%20%23%2D1"):null},homeIpUrl:function(){return"home"}},watch:{tab:function(e){localStorage.osTab=e}},mounted:function(){null!==window.location.hash&&""!==window.location.hash&&window.location.hash in this.$refs&&(this.$refs[window.location.hash].isActive=!0);var e=this.access;4==e.length?(this.query.ipAddress=e[0],localStorage.ipAddress=e[0],this.query.labName=e[1],localStorage.labName=e[1],this.query.username=e[2],localStorage.username=e[2],this.query.iaasName=e[3],localStorage.iaasName=e[3]):(localStorage.ipAddress&&(this.query.ipAddress=localStorage.ipAddress),localStorage.labName&&(this.query.labName=localStorage.labName),localStorage.username&&(this.query.username=localStorage.username),localStorage.iaasName&&(this.query.iaasName=localStorage.iaasName)),localStorage.osTab&&(this.tab=localStorage.osTab)},created:function(){console.log(this.$route.query),this.access=this.$route.query.access?atob(this.$route.query.access).split("|"):[],console.log(this.query)},methods:{wrap:function(e){var t=e;return t=(t=(t=(t=t.replaceAll("{ip_address}",this.query.ipAddress)).replaceAll("{lab_name}",this.query.labName)).replaceAll("{username}",this.query.username)).replaceAll("{iaas_name}",this.query.iaasName)},copyText:function(e){this.$refs[e].$el.querySelector("input").select(),document.execCommand("copy")},copyTextArea:function(e){this.$refs[e].$el.querySelector("textarea").select(),document.execCommand("copy")}}},_=(s(823),s(41)),b=Object(_.a)(x,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[s("v-app",{attrs:{id:e.id}},[s("v-card",{directives:[{name:"show",rawName:"v-show",value:e.isDataComplete,expression:"isDataComplete"}],staticClass:"pt-4"},[s("v-row",{staticClass:"ml-3 mb-2",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"6"}},[s("CopyTextField",{attrs:{label:"Username",placeholder:"Your link is missing access token"},model:{value:e.query.username,callback:function(t){e.$set(e.query,"username",t)},expression:"query.username"}})],1),e._v(" "),s("v-col",{attrs:{cols:"6"}},[s("CopyTextField",{attrs:{label:"Lab name",placeholder:"Your link is missing access token"},model:{value:e.query.labName,callback:function(t){e.$set(e.query,"labName",t)},expression:"query.labName"}})],1),e._v(" "),s("v-col",{attrs:{cols:"6"}},[s("CopyTextField",{attrs:{label:"Lab IP Address",placeholder:"Your link is missing access token"},model:{value:e.query.ipAddress,callback:function(t){e.$set(e.query,"ipAddress",t)},expression:"query.ipAddress"}})],1),e._v(" "),s("v-col",{attrs:{cols:"6"}},[s("CopyTextField",{attrs:{label:"IAAS machine name",placeholder:"Your link is missing access token"},model:{value:e.query.iaasName,callback:function(t){e.$set(e.query,"iaasName",t)},expression:"query.iaasName"}})],1)],1),e._v(" "),s("v-card",{attrs:{elevation:"1"}},[s("v-tabs",{attrs:{centered:"",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("v-tab",{attrs:{href:"#windows"}},[e._v("Windows")]),e._v(" "),s("v-tab",{attrs:{href:"#macos"}},[e._v("MacOS")]),e._v(" "),s("v-tab",{attrs:{href:"#linux"}},[e._v("Linux")])],1),e._v(" "),s("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("v-tab-item",{staticStyle:{"padding-top":"24px"},attrs:{value:"windows"}},[s("v-expansion-panels",{attrs:{elevation:"0"}},[s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-config"}},[e._v("#")]),e._v(" 1. SSH Config file")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#ssh-config",staticClass:"mt-2",attrs:{id:"ssh-config"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.1. Open new Command Prompt window ("),s("code",[e._v("WIN + R")]),e._v(" and type "),s("code",[e._v("cmd.exe")]),e._v(" then hit "),s("code",[e._v("Enter")]),e._v(") and assure SSH Config file exists.\n                    "),s("v-text-field",{ref:"winSshConfig1",attrs:{value:'type nul >> "%USERPROFILE%\\.ssh\\config"',label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"C:\\Users\\User>",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("winSshConfig1")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.2. Open SSH Config file.\n                    "),s("v-text-field",{ref:"winSshConfig2",attrs:{value:'Notepad.exe "%USERPROFILE%\\.ssh\\config"',label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"C:\\Users\\User>",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("winSshConfig2")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.3. Copy and paste configuration into SSH Config opened in Notepad.\n                    "),s("v-textarea",{ref:"ssh-config-win",staticClass:"py-2 mt-2",attrs:{label:"SSH Config file",placeholder:"Your link is missing access token","persistent-placeholder":"",outlined:"",readonly:"",rows:"16","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyTextArea("ssh-config-win")}}},[e._v("")])]},proxy:!0}]),model:{value:e.configText,callback:function(t){e.configText="string"==typeof t?t.trim():t},expression:"configText"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.4. Test by connecting straight into IAAS machine.\n                    "),s("v-text-field",{ref:"ssh-config-lab-win",attrs:{value:"ssh "+e.query.iaasName,label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"C:\\Users\\User>",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("ssh-config-lab-win")}}},[e._v("")])]},proxy:!0}])})],1)],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#mobaxterm"}},[e._v("#")]),e._v("2. IaaS MobaXterm")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#mobaxterm",staticClass:"mt-2",attrs:{id:"mobaxterm"}},[s("v-col",{attrs:{cols:"10"}},[s("v-btn",{attrs:{color:"success",block:"",target:"_blank",href:e.iaas_mobaxtermTerminal}},[e._v("\n                        Create terminal session\n                      ")])],1)],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#troubleshooting",staticClass:"mt-2",attrs:{id:"troubleshooting"}},[s("v-col",[e._v("Work in progress.")])],1)],1)],1)],1),e._v(" "),s("v-tab-item",{staticStyle:{"padding-top":"24px"},attrs:{value:"macos"}},[s("v-expansion-panels",{attrs:{elevation:"0"}},[s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-config"}},[e._v("#")]),e._v(" 1. SSH Config file")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#ssh-config",staticClass:"mt-2",attrs:{id:"ssh-config"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.1. Open new Terminal window and assure SSH Config file exists.\n                    "),s("v-text-field",{ref:"macSshConfig1",attrs:{value:"touch ~/.ssh/config",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macSshConfig1")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.2. Open SSH Config file.\n                    "),s("v-text-field",{ref:"macSshConfig2",attrs:{value:"open -Wne ~/.ssh/config",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("macSshConfig2")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.3. Copy and paste configuration into SSH Config opened in Text Editor.\n                    "),s("v-textarea",{ref:"ssh-config-mac",staticClass:"py-2 mt-2",attrs:{label:"SSH Config file",placeholder:"Your link is missing access token","persistent-placeholder":"",outlined:"",readonly:"",rows:"16","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyTextArea("ssh-config-mac")}}},[e._v("")])]},proxy:!0}]),model:{value:e.configText,callback:function(t){e.configText="string"==typeof t?t.trim():t},expression:"configText"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.4 Test by connecting straight into IAAS machine.\n                    "),s("v-text-field",{ref:"ssh-config-lab-mac",attrs:{value:"ssh "+e.query.iaasName,label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"~",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("ssh-config-lab-mac")}}},[e._v("")])]},proxy:!0}])})],1)],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#troubleshooting",staticClass:"mt-2",attrs:{id:"troubleshooting"}},[s("v-col",[e._v("Work in progress.")])],1)],1)],1)],1),e._v(" "),s("v-tab-item",{staticStyle:{"padding-top":"24px"},attrs:{value:"linux"}},[s("v-expansion-panels",{attrs:{elevation:"0"}},[s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-config"}},[e._v("#")]),e._v(" 1. SSH Config file")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#ssh-config",staticClass:"mt-2",attrs:{id:"ssh-config"}},[s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.1. Open new Terminal window ("),s("code",[e._v("CTRL + ALT + T")]),e._v(") and assure SSH Config file exists.\n                    "),s("v-text-field",{ref:"linuxSshConfig1",attrs:{value:"touch ~/.ssh/config",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"$",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("linuxSshConfig1")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.2. Open SSH Config file.\n                    "),s("v-text-field",{ref:"linuxSshConfig2",attrs:{value:"gedit ~/.ssh/config",label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"$",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("linuxSshConfig2")}}},[e._v("")])]},proxy:!0}])})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.3. Copy and paste configuration into SSH Config opened in Text Editor.\n                    "),s("v-textarea",{ref:"ssh-config-linux",staticClass:"py-2 mt-2",attrs:{label:"SSH Config file",placeholder:"Your link is missing access token","persistent-placeholder":"",outlined:"",readonly:"",rows:"16","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyTextArea("ssh-config-linux")}}},[e._v("")])]},proxy:!0}]),model:{value:e.configText,callback:function(t){e.configText="string"==typeof t?t.trim():t},expression:"configText"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12"}},[e._v("\n                    1.4. Test by connecting straight into IAAS machine.\n                    "),s("v-text-field",{ref:"ssh-config-lab-linux",attrs:{value:"ssh "+e.query.iaasName,label:"",placeholder:"Your link is missing access token","persistent-placeholder":"",prefix:"$",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("a",{staticClass:"material-icons content_copy",on:{click:function(t){return e.copyText("ssh-config-lab-linux")}}},[e._v("")])]},proxy:!0}])})],1)],1)],1),e._v(" "),s("v-expansion-panel",[s("v-expansion-panel-header",[s("h3",[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")])]),e._v(" "),s("v-expansion-panel-content",{ref:"#troubleshooting",staticClass:"mt-2",attrs:{id:"troubleshooting"}},[s("v-col",[e._v("Work in progress.")])],1)],1)],1)],1)],1)],1)],1),e._v(" "),s("v-card",{directives:[{name:"show",rawName:"v-show",value:!e.isDataComplete,expression:"!isDataComplete"}],staticClass:"pt-4"},[e._v("\n      Invalid link. Please check your emails to find the full link.\n    ")])],1)],1)}),[],!1,null,null,null);t.default=b.exports}}]);