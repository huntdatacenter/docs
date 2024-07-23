(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1235:function(a,e,s){"use strict";s.r(e);var t=s(41),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"ncdu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ncdu"}},[a._v("#")]),a._v(" NCDU")]),a._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"https://dev.yorhel.nl/ncdu/man",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ncdu"),t("OutboundLink")],1),a._v(" is a disk usage analyzer that you can use to find space hogs in your lab.")])]),a._v(" "),t("p",[a._v("Ncdu aims to be fast, simple and easy to use. It uses a ncurses interface, and should be able to run in any minimal POSIX-like environment with ncurses installed.")]),a._v(" "),t("p",[a._v("Although this guide for your lab, Ncdu is a useful tool even on regular desktop systems such as OS X and MacOS and Linux.")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#installation"}},[a._v("Installation")])]),t("li",[t("a",{attrs:{href:"#usage"}},[a._v("Usage")]),t("ul",[t("li",[t("a",{attrs:{href:"#general-usage"}},[a._v("General usage")])]),t("li",[t("a",{attrs:{href:"#analyse-your-root-volume"}},[a._v("Analyse your root volume")])]),t("li",[t("a",{attrs:{href:"#analyze-specific-volumes"}},[a._v("Analyze specific volumes")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("p",[a._v("Log into your lab and install "),t("code",[a._v("ncdu")]),a._v(" using the following command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ncdu\n")])])]),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("h3",{attrs:{id:"general-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-usage"}},[a._v("#")]),a._v(" General usage")]),a._v(" "),t("p",[a._v("Start "),t("code",[a._v("ncdu")]),a._v(" in the directory that you want to analyze:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ncdu\n")])])]),t("p",[a._v("Depending on your volume sizes and number of files, the initial scanning may last from seconds to several minutes.")]),a._v(" "),t("p",[t("img",{attrs:{src:s(912),alt:"Ncdu example"}})]),a._v(" "),t("p",[a._v("This is an example of a scan of a "),t("strong",[t("code",[a._v("/mnt/work")])]),a._v(" volume where the software (46GB) and workbench (23GB) folders take up most of your space.")]),a._v(" "),t("h3",{attrs:{id:"analyse-your-root-volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analyse-your-root-volume"}},[a._v("#")]),a._v(" Analyse your root volume")]),a._v(" "),t("p",[a._v("To find what's taking space on your root volume (/), use the "),t("strong",[t("code",[a._v("-x")])]),a._v(" paramter. This excludes other volumes mounted on your machine (such as /mnt/work):")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ncdu -x /\n")])])]),t("h3",{attrs:{id:"analyze-specific-volumes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analyze-specific-volumes"}},[a._v("#")]),a._v(" Analyze specific volumes")]),a._v(" "),t("p",[a._v("You may use this example to analyze disk usage on specific volumes:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ncdu -x /mnt/archive\n")])])])])}),[],!1,null,null,null);e.default=n.exports},912:function(a,e,s){a.exports=s.p+"assets/img/ncdu-example.971b55f3.png"}}]);