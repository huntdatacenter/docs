(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{855:function(t,e){},887:function(t,e,n){"use strict";n.r(e);n(10),n(23),n(27);var i=n(413),a=n.n(i),s=n(472),o=(n(855),{name:"SDButton",components:{ServiceDesk:function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(10),n.e(11)]).then(n.bind(null,889))}},props:{form:{type:String,default:null}},data:function(){return{dialog:!1,data:{}}},computed:{getData:function(){return this.data&&this.data[this.form]?this.data[this.form]:null},showBtn:function(){return this.data&&this.data[this.form]},getRecipient:function(){return this.data&&this.data[this.form]&&this.data[this.form].recipient?this.data[this.form].recipient:"cloud.support+hunt-cloud-request@hunt.ntnu.no"}},mounted:function(){},created:function(){var t=this;this.form&&a()("/cfg/service_desk.yml").then((function(t){return t.text()})).then((function(e){var n=s.load(e);t.data=n}))},methods:{}}),r=n(41),u=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showBtn?n("section",[n("div",{staticClass:"home",staticStyle:{padding:"0px"}},[n("div",{staticClass:"hero"},[n("p",{staticClass:"action"},[n("input",{staticClass:"nav-link external action-button",staticStyle:{padding:"18px",cursor:"pointer"},attrs:{value:t.getData.title,type:"button"},on:{click:function(e){t.dialog=!0}}})])])]),t._v(" "),n("ServiceDesk",{ref:t.form,attrs:{title:t.getData.title,requirements:t.getData.requirements,fields:t.getData.fields,template:t.getData.template,recipient:t.getRecipient},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1):t._e()}),[],!1,null,null,null);e.default=u.exports}}]);