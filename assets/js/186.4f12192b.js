(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1133:function(a,t,s){"use strict";s.r(t);var e=s(41),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"transferring-data-from-azure-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transferring-data-from-azure-storage"}},[a._v("#")]),a._v(" Transferring data from Azure Storage")]),a._v(" "),s("p",[a._v("Guide below is meant for users who want to transfer data from Azure Storage to HUNT Cloud lab.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("This guide is meant to help you setup correct parameters for your transfer and is not indented as a full guide to azcopy. For proper guidance, follow official Microsoft documentation.")])]),a._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("p",[a._v("If this is your first time using conda, follow our "),s("RouterLink",{attrs:{to:"/do-science/tools/analytical/conda/"}},[a._v("guide")]),a._v(" for proper installation in your lab.\nAfterwards, you can run following command in conda environment to install azcopy.")],1),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("conda "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -c conda-forge azcopy\n")])])]),s("h2",{attrs:{id:"setup-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-parameters"}},[a._v("#")]),a._v(" Setup parameters")]),a._v(" "),s("p",[a._v("Before you begin your transfer, make sure to setup below parameters")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AZCOPY_CONCURRENCY_VALUE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# First test with timeout")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("900")]),a._v(" azcopy "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" --cap-mbps "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v(" --recursive  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# If all is fine remove timeout")]),a._v("\nazcopy "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" --cap-mbps "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v(" --recursive  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);