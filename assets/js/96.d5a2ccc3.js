(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{910:function(t,e,a){"use strict";a.r(e);a(10),a(23),a(27);var n=a(435),i=a.n(n),r=a(454),o={name:"SDFullscreen",components:{ServiceDesk:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(11),a.e(12)]).then(a.bind(null,881))}},props:{form:{type:String,default:null}},data:function(){return{formTag:null,data:{},dialog:!1}},computed:{getData:function(){return this.data&&this.data[this.formTag]?this.data[this.formTag]:null},showForm:function(){return this.data&&this.data[this.formTag]},getRecipient:function(){return this.data&&this.data[this.formTag]&&this.data[this.formTag].recipient?this.data[this.formTag].recipient:"cloud.support+hunt-cloud-request@hunt.ntnu.no"}},watch:{},mounted:function(){},created:function(){this.loadFormTag(),this.loadFormData()},methods:{loadFormTag:function(){this.formTag=this.$route.query&&this.$route.query.form?this.$route.query.form:this.form},loadFormData:function(){var t=this;i()("/cfg/service_desk.yml").then((function(t){return t.text()})).then((function(e){var a=r.load(e);t.data=a,t.dialog=!0}))}}},s=a(41),u=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showForm?a("section",[a("ServiceDesk",{ref:t.formTag,attrs:{title:t.getData.title,requirements:t.getData.requirements,attachments:t.getData.attachments,fields:t.getData.fields,template:t.getData.template,recipient:t.getRecipient,fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1):t._e()}),[],!1,null,null,null);e.default=u.exports}}]);