(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1061:function(t,e){},1095:function(t,e,n){"use strict";n.r(e);n(9),n(23),n(28);var a=n(460),i=n.n(a),s=n(468),o=(n(1061),{name:"SDButton",components:{ServiceDesk:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,1067))}},props:{form:{type:String,default:null}},data:function(){return{dialog:!1,data:{}}},computed:{getData:function(){return this.data&&this.data[this.form]?this.data[this.form]:null},showBtn:function(){return this.data&&this.data[this.form]},getRecipient:function(){return this.data&&this.data[this.form]&&this.data[this.form].recipient?this.data[this.form].recipient:"cloud.support+hunt-cloud-request@hunt.ntnu.no"}},mounted:function(){},created:function(){var t=this;this.form&&i()("/cfg/service_desk.yml").then((function(t){return t.text()})).then((function(e){var n=s.load(e);t.data=n}))},methods:{}}),r=n(41),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showBtn?n("section",[n("div",{staticClass:"home",staticStyle:{padding:"0px"}},[n("div",{staticClass:"hero"},[n("p",{staticClass:"action"},[n("input",{staticClass:"nav-link external action-button",staticStyle:{padding:"18px",cursor:"pointer"},attrs:{value:t.getData.title,type:"button"},on:{click:function(e){t.dialog=!0}}})])])]),t._v(" "),n("ServiceDesk",{ref:t.form,attrs:{title:t.getData.title,requirements:t.getData.requirements,attachments:t.getData.attachments,fields:t.getData.fields,template:t.getData.template,recipient:t.getRecipient},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1):t._e()}),[],!1,null,null,null);e.default=c.exports}}]);