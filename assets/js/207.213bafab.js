(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1260:function(t,a,s){"use strict";s.r(a);var e=s(41),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transferring-data-from-google-cloud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transferring-data-from-google-cloud"}},[t._v("#")]),t._v(" Transferring data from Google cloud")]),t._v(" "),s("p",[t._v("Guide below is meant for users who want to transfer data between Google cloud and HUNT Cloud lab.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This guide is meant to help you setup correct parameters for your transfer and is not indented as a full guide to gsutil. For proper guidance, follow official documentation.")])]),t._v(" "),s("h2",{attrs:{id:"setup-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-parameters"}},[t._v("#")]),t._v(" Setup parameters")]),t._v(" "),s("p",[t._v("Before you begin your transfer, make sure to apply parameters "),s("code",[t._v("GSUtil:parallel_process_count=1")]),t._v(" and "),s("code",[t._v("GSUtil:parallel_thread_count=2")]),t._v(".\nIncreasing the values could affect the work of your lab mates.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# First test with timeout")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),t._v(" gsutil -o GSUtil:parallel_process_count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -o GSUtil:parallel_thread_count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -m "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r gs://your-bucket  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If all is fine remove timeout")]),t._v("\ngsutil -o GSUtil:parallel_process_count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -o GSUtil:parallel_thread_count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -m "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r gs://your-bucket  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);