(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{453:function(e,t,s){},671:function(e,t,s){"use strict";s(453)},718:function(e,t,s){"use strict";s.r(t);s(35),s(64),s(444);var a=s(662),r=s(703),n=s(704),l=s(470),i=s(705),o=s(452),u={name:"SSHConfig",components:{VApp:a.a,VCol:r.a,VRow:n.a,VTextField:l.a,VTextarea:i.a,VCard:o.a},props:{id:{type:String,default:"applet"}},data:function(){return{query:{ipAddress:null,labName:null,username:null},template:"# Place in ~/.ssh/config\n\nHost {lab_name}-entry\n    HostName {ip_address}\n    User {username}\n\nHost {lab_name}\n    HostName home\n    HostKeyAlias {lab_name}\n    User {username}\n    # Use ProxyCommand to jump directly to home via entry\n    ProxyCommand ssh -W %h:%p {lab_name}-entry\n"}},computed:{configText:function(){return this.query.ipAddress&&this.query.labName&&this.query.username?this.wrap(this.template):null}},mounted:function(){},created:function(){console.log(this.$route.query),this.query.ipAddress=this.$route.query.ip_address,this.query.labName=this.$route.query.lab_name,this.query.username=this.$route.query.username,console.log(this.query)},methods:{wrap:function(e){var t=e;return t=(t=(t=t.replaceAll("{ip_address}",this.query.ipAddress)).replaceAll("{lab_name}",this.query.labName)).replaceAll("{username}",this.query.username)}}},d=(s(671),s(41)),c=Object(d.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[s("v-app",{attrs:{id:e.id}},[s("v-card",{staticClass:"pt-4"},[s("v-row",{staticClass:"mb-2"},[s("v-col",{attrs:{cols:"10"}},[s("v-text-field",{attrs:{autocomplete:"ignore-field",label:"Username",placeholder:"Missing username query","persistent-placeholder":"",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.query.username,callback:function(t){e.$set(e.query,"username",t)},expression:"query.username"}})],1),e._v(" "),s("v-col",{attrs:{cols:"10"}},[s("v-text-field",{attrs:{autocomplete:"ignore-field",label:"Lab name",placeholder:"Missing lab_name query","persistent-placeholder":"",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.query.labName,callback:function(t){e.$set(e.query,"labName",t)},expression:"query.labName"}})],1),e._v(" "),s("v-col",{attrs:{cols:"10"}},[s("v-text-field",{attrs:{autocomplete:"ignore-field",label:"IP Address",placeholder:"Missing ip_address query","persistent-placeholder":"",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.query.ipAddress,callback:function(t){e.$set(e.query,"ipAddress",t)},expression:"query.ipAddress"}})],1)],1),e._v(" "),s("h3",{attrs:{id:"ssh-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-config"}},[e._v("#")]),e._v(" SSH-Config")]),e._v(" "),s("v-textarea",{staticClass:"py-2 mt-2",attrs:{label:"SSH Config",placeholder:"URL is missing parameters","persistent-placeholder":"",outlined:"",readonly:"",rows:"13","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.configText,callback:function(t){e.configText="string"==typeof t?t.trim():t},expression:"configText"}})],1)],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);