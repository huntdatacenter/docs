(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{400:function(e,t,s){},537:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(0);function r(e){return a.a.extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:s,data:a,children:r}){a.staticClass=`${e} ${a.staticClass||""}`.trim();const{attrs:n}=a;if(n){a.attrs={};const e=Object.keys(n).filter(e=>{if("slot"===e)return!1;const t=n[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"==typeof t});e.length&&(a.staticClass+=" "+e.join(" "))}return s.id&&(a.domProps=a.domProps||{},a.domProps.id=s.id),t(s.tag,a,r)}})}},627:function(e,t,s){},860:function(e,t,s){"use strict";s(627)},889:function(e,t,s){"use strict";s.r(t);s(10),s(23),s(27),s(201),s(35),s(64),s(467),s(36),s(621),s(622),s(624),s(625),s(419);var a=s(525),r=s(883),n=s(884),i=s(424),o=s(457),l=s(427),u=s(507),c=s(508),d=s(509),p=s(510),h=s(886),m=s(898),y=s(858),f=s(1057),v=s(879),b=(s(400),s(536),s(537)),g=s(399),w=Object(b.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:s,children:a}){let r;const{attrs:n}=s;return n&&(s.attrs={},r=Object.keys(n).filter(e=>{if("slot"===e)return!1;const t=n[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"==typeof t})),t.id&&(s.domProps=s.domProps||{},s.domProps.id=t.id),e(t.tag,Object(g.a)(s,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(r||[])}),a)}}),q={name:"LabAccess",components:{VApp:a.a,VCol:r.a,VRow:n.a,VTextField:i.a,VTextarea:o.a,VCard:l.a,VExpansionPanel:u.a,VExpansionPanels:c.a,VExpansionPanelHeader:d.a,VExpansionPanelContent:p.a,VTab:h.a,VTabs:m.a,VTabsSlider:y.a,VTabItem:f.a,VTabsItems:v.a,VContainer:w,AccessIntro:function(){return s.e(87).then(s.bind(null,871))},WindowsJourney:function(){return Promise.all([s.e(0),s.e(3),s.e(36)]).then(s.bind(null,875))},MacJourney:function(){return Promise.all([s.e(0),s.e(3),s.e(35)]).then(s.bind(null,873))},LinuxJourney:function(){return Promise.all([s.e(0),s.e(3),s.e(34)]).then(s.bind(null,872))}},props:{id:{type:String,default:"applet"}},data:function(){return{tab:null,access:null,query:{ipAddress:null,labName:null,username:null},sshKeygenWin:'ssh-keygen -q -t rsa -b 4096 -f %USERPROFILE%\\.ssh\\id_rsa -N ""',sshKeygenMac:'ssh-keygen -q -t rsa -b 4096 -f ~/.ssh/id_rsa -N ""',powershell:"# -- Set new passphrase on entry\nssh -o StrictHostKeyChecking=accept-new {username}@{ip_address}\n# -- Reconnect to entry\nssh {username}@{ip_address}\n\n# -- Set new passphrase on home\nssh -o StrictHostKeyChecking=accept-new home\n# -- Confirm passphrase change by reconnecting to home\nssh home\n\n# -- Open new Powershell window and generate ssh key\nssh-keygen -q -t rsa -b 4096 -f $env:USERPROFILE\\.ssh\\id_rsa -N '\"\"'\n\n# -- Set public key in lab\ntype $env:USERPROFILE\\.ssh\\id_rsa.pub | ssh {username}@{ip_address} add-public-key\n\n# -- Confirm passwordless access\nssh {username}@{ip_address}\n      ",passExpired:"WARNING: Your password has expired.\nYou must change your password now and login again!\nChanging password for {username}.\n(current) UNIX password:",passSetNew:"New password:\nRetype new password:",passChangedEntry:"passwd: Password updated successfully\nConnection to {ip_address} closed.",passChangedHome:"passwd: Password updated successfully\nConnection to home closed.",template:"Host {lab_name}-entry\n    HostName {ip_address}\n    User {username}\n\nHost {lab_name}\n    HostName home\n    HostKeyAlias {lab_name}\n    User {username}\n    # Use ProxyCommand to jump directly to home via entry\n    ProxyJump {lab_name}-entry\n"}},computed:{cfgShow:function(){return!!(this.query.ipAddress&&this.query.labName&&this.query.username)},configText:function(){return this.query.ipAddress&&this.query.labName&&this.query.username?this.wrap(this.template):null},passExpiredText:function(){return this.query.ipAddress&&this.query.labName&&this.query.username?this.wrap(this.passExpired):null},puttyHostName:function(){return this.query.ipAddress&&this.query.username?"".concat(this.query.username,"@").concat(this.query.ipAddress):null},hostsWorkbench:function(){return this.query.ipAddress&&this.query.labName?"".concat(this.query.ipAddress,"    ").concat(this.query.labName,".lab.hdc.ntnu.no"):null},entryIpUrl:function(){return this.query.ipAddress?this.query.ipAddress.replace(".","%2E"):""},homeIpUrl:function(){return"home"}},watch:{tab:function(e){localStorage.osTab=e}},mounted:function(){null!==window.location.hash&&""!==window.location.hash&&window.location.hash in this.$refs&&(this.$refs[window.location.hash].isActive=!0);var e=this.access;3==e.length?(this.query.ipAddress=e[0],localStorage.ipAddress=e[0],this.query.labName=e[1],localStorage.labName=e[1],this.query.username=e[2],localStorage.username=e[2]):4==e.length?(this.query.ipAddress=e[0],localStorage.ipAddress=e[0],this.query.labName=e[2],localStorage.labName=e[2],this.query.username=e[3],localStorage.username=e[3]):e&&0!=e.length||(localStorage.ipAddress&&(this.query.ipAddress=localStorage.ipAddress),localStorage.labName&&(this.query.labName=localStorage.labName),localStorage.username&&(this.query.username=localStorage.username)),localStorage.osTab&&(this.tab=localStorage.osTab)},created:function(){this.access=this.$route.query.access?atob(this.$route.query.access).split("|"):[]},methods:{wrap:function(e){var t=e;return t=(t=(t=t.replaceAll("{ip_address}",this.query.ipAddress)).replaceAll("{lab_name}",this.query.labName)).replaceAll("{username}",this.query.username)},copyText:function(e){this.$refs[e].$el.querySelector("input").select(),document.execCommand("copy")},copyTextArea:function(e){this.$refs[e].$el.querySelector("textarea").select(),document.execCommand("copy")}}},S=(s(860),s(41)),_=Object(S.a)(q,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[s("v-app",{attrs:{id:e.id}},[s("v-card",{directives:[{name:"show",rawName:"v-show",value:e.cfgShow,expression:"cfgShow"}],staticClass:"pt-4"},[s("v-card",{attrs:{elevation:"1"}},[s("v-tabs",{attrs:{centered:"",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("v-tab",{attrs:{href:"#first-time"}},[e._v("First time?")]),e._v(" "),s("v-tab",{attrs:{href:"#windows"}},[e._v("Windows")]),e._v(" "),s("v-tab",{attrs:{href:"#macos"}},[e._v("MacOS")]),e._v(" "),s("v-tab",{attrs:{href:"#linux"}},[e._v("Linux")])],1),e._v(" "),s("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("v-tab-item",{staticStyle:{"padding-top":"24px"},attrs:{value:"first-time"}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"10"}},[s("v-container",{staticClass:"introblock"},[s("v-row",{staticStyle:{"margin-left":"16px","margin-right":"16px"},attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"10",align:"center"}},[s("b",[e._v("First time setting up access to your lab?")])])],1),e._v(" "),s("v-row",{staticStyle:{"margin-left":"16px","margin-right":"16px"},attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"10",align:"center"}},[e._v("\n                      We have tailored all the steps in this guide to you.\n                      You'll find your unique connection information conveniently included where necessary.\n                    ")])],1),e._v(" "),s("v-row",{staticStyle:{"margin-left":"16px","margin-right":"16px"},attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"10",align:"center"}},[e._v("\n                      To make your onboarding process as efficient as possible, we've made it easy for you to copy and paste commands.\n                      Simply look for a button in the right corner of commands.\n                    ")])],1),e._v(" "),s("v-row",{staticStyle:{"margin-left":"16px","margin-right":"16px"},attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"10",align:"center"}},[e._v("\n                      Whether you're using Windows, macOS, or Linux, this guide accommodates your operating system preference. \n                      So go ahead, choose your OS, and embark on your journey with confidence.\n                    ")])],1),e._v(" "),s("v-row",{staticStyle:{"margin-left":"16px","margin-right":"16px"},attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"10",align:"center"}},[s("i",[e._v("Let's get started!")])])],1)],1)],1)],1),e._v(" "),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{align:"center"}},[s("img",{attrs:{alt:"Illustration of a robot",src:"/img/hunt-cloud_bot_250_2.png"}})])],1)],1),e._v(" "),s("v-tab-item",{attrs:{value:"windows"}},[s("AccessIntro",{attrs:{username:this.query.username,labName:this.query.labName,ipAddress:this.query.ipAddress}}),e._v(" "),s("WindowsJourney",{attrs:{username:this.query.username,labName:this.query.labName,ipAddress:this.query.ipAddress,template:this.template}})],1),e._v(" "),s("v-tab-item",{attrs:{value:"macos"}},[s("v-expansion-panels",{attrs:{elevation:"0"}},[s("AccessIntro",{attrs:{username:this.query.username,labName:this.query.labName,ipAddress:this.query.ipAddress}}),e._v(" "),s("MacJourney",{attrs:{username:this.query.username,labName:this.query.labName,ipAddress:this.query.ipAddress,template:this.template}})],1)],1),e._v(" "),s("v-tab-item",{attrs:{value:"linux"}},[s("v-expansion-panels",{attrs:{elevation:"0"}},[s("AccessIntro",{attrs:{username:this.query.username,labName:this.query.labName,ipAddress:this.query.ipAddress}}),e._v(" "),s("LinuxJourney",{attrs:{username:this.query.username,labName:this.query.labName,ipAddress:this.query.ipAddress,template:this.template}})],1)],1)],1)],1)],1),e._v(" "),s("v-card",{directives:[{name:"show",rawName:"v-show",value:!e.cfgShow,expression:"!cfgShow"}],staticClass:"pt-4"},[e._v("\n      Invalid link. Please check your emails to find the full link.\n    ")])],1)],1)}),[],!1,null,null,null);t.default=_.exports}}]);