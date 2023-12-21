(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1057:function(e,a,t){"use strict";t.r(a);var n=t(1069),o=t(1070),s=t(411),r=t(504),i=t(1023),l=t(611),c=t(1071),p=t(442),u=t(444),d=t(388),v=t(389),h=t(390),b=t(467),g=t(651),_=t(404),f={name:"DesignNewPassphrase",components:{VCol:n.a,VRow:o.a,VBtn:s.a,VCard:r.a,VCardTitle:i.d,VCardText:i.c,VToolbar:l.a,VToolbarTitle:c.b,VToolbarItems:c.a,VSpacer:p.a,VDialog:u.a,VStepper:d.a,VStepperContent:v.a,VStepperStep:h.a,VStepperItems:b.a,VIcon:g.a,VTextField:_.a},props:{},data:function(){return{dialog:!1,totpStepper:1}},computed:{},created:function(){},methods:{}},y=t(41),m=Object(y.a)(f,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",[t("a",{on:{click:function(a){a.stopPropagation(),e.dialog=!0}}},[e._v("your new passphrase")]),e._v(" "),t("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"960px"},on:{keydown:function(a){if(!a.type.indexOf("key")&&e._k(a.keyCode,"esc",27,a.key,["Esc","Escape"]))return null;e.dialog=!1}},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",{attrs:{elevation:"0"}},[t("v-card-title",{staticClass:"pa-0"},[t("v-toolbar",{attrs:{dark:"",color:"#00509e",flat:""}},[t("v-toolbar-title",[e._v("Design your new passphrase")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-toolbar-items",[t("v-btn",{attrs:{icon:"",fab:""},on:{click:function(a){e.dialog=!1}}},[t("v-icon",[e._v("close")])],1)],1)],1)],1),e._v(" "),t("v-card-text",{staticClass:"pa-0"},[t("v-card",{staticClass:"pa-8",attrs:{elevation:"0"}},[e._v("\n          You will need to update your SSH temporary key in the steps below.\n          We prefer that you design a passphrase instead of a password.\n          A passphrase is a series of words that creates a phrase.\n          "),t("br"),t("br"),e._v("\n          It should be:\n  \n          "),t("ul",{staticClass:"my-2"},[t("li",[e._v("\n              long enough to be hard to guess (at least 12 characters long)\n            ")]),e._v(" "),t("li",[e._v("\n              not a famous quotation from the literature (but could be pretty close)\n            ")]),e._v(" "),t("li",[e._v("\n              hard to guess by intuition (even by someone who knows you well)\n            ")]),e._v(" "),t("li",[e._v("\n              easy to remember\n            ")]),e._v(" "),t("li",[e._v("\n              at least 3 characters have to be different from your previous one (including temporary key)\n            ")]),e._v(" "),t("li",[e._v("\n              include both lower and upper cases\n            ")])]),e._v("\n\n          Oh, and, it should be unique to this site only.\n          "),t("br"),t("br"),e._v("\n\n          Making a good passphrase is great fun and good security hygiene.\n          "),t("br"),e._v("\n          \n          Here's one example of such passphrase:\n\n          "),t("div",{staticClass:"language- extra-class",staticStyle:{"user-select":"none"}},[t("pre",{staticClass:"language-text"},[e._v("            "),t("code",{domProps:{textContent:e._s("AnalysingPokemon4FunInTheMorning")}}),e._v("\n          ")])]),e._v(" "),t("br"),e._v("Go ahead and create one for yourself to use in the next steps of the guide.\n\n          "),t("br"),t("br"),e._v(" "),t("v-btn",{staticClass:"mx-2",attrs:{color:"primary"},on:{click:function(a){e.dialog=!1}}},[e._v("Continue in the guide")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=m.exports}}]);