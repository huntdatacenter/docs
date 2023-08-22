(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1003:function(t,a,e){"use strict";e.r(a);var s=e(41),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"stata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stata"}},[t._v("#")]),t._v(" Stata")]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://www.stata.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stata"),e("OutboundLink")],1),t._v(" is a ananlytical software developed by StataCorp tailored towards epidemiological analysis.")])]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#installation-in-hunt-workbench"}},[t._v("Installation in HUNT Workbench")])]),e("li",[e("a",{attrs:{href:"#installation-on-home-machines"}},[t._v("Installation on home machines")])]),e("li",[e("a",{attrs:{href:"#running-stata-over-x2go"}},[t._v("Running Stata over X2Go")])]),e("li",[e("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")])])])]),e("p"),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Requirement")]),t._v(" "),e("ul",[e("li",[t._v("Access to a Stata license for the lab users in your lab.")])])]),t._v(" "),e("h2",{attrs:{id:"installation-in-hunt-workbench"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-in-hunt-workbench"}},[t._v("#")]),t._v(" Installation in HUNT Workbench")]),t._v(" "),e("p",[t._v("You may request Stata in your HUNT Workbench as a Jupyter notebook. This means that you can write known Stata commands and that you can view plots on your screen. See our "),e("RouterLink",{attrs:{to:"/do-science/guides/stata/"}},[t._v("Stata guide")]),t._v(" for more details and request HUNT Workbench Stata access in our do-science "),e("RouterLink",{attrs:{to:"/do-science/do-science/service-desk/#workbench-access"}},[t._v("service desk")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"installation-on-home-machines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-home-machines"}},[t._v("#")]),t._v(" Installation on home machines")]),t._v(" "),e("p",[e("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for assistance on installations on your "),e("RouterLink",{attrs:{to:"/do-science/faq/compute/#machine-types"}},[t._v("home machine")]),t._v(" and discussions on licenses types tailored for your lab work.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NTNU license")]),t._v(" "),e("p",[t._v("All NTNU employees are covered by the NTNU license which allow for quick installations. Lab users that are not affiliated with NTNU will need to either bring their own license or ask their lab leader to buy a license from StataCorp.")])]),t._v(" "),e("h2",{attrs:{id:"running-stata-over-x2go"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-stata-over-x2go"}},[t._v("#")]),t._v(" Running Stata over X2Go")]),t._v(" "),e("p",[t._v("After our installation, you can access Stata over "),e("RouterLink",{attrs:{to:"/do-science/tools/technical/x2go/"}},[t._v("X2Go")]),t._v(" with this "),e("strong",[e("code",[t._v("Single application")])]),t._v(" address in the X2Go configuration (or similar provided by us):")],1),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/usr/bin/xterm -e /mnt/work/software/stata170/xstata-mp -f0\n")])])]),e("p",[t._v("Or you can run as terminal application:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/mnt/work/software/stata170/stata-mp\n")])])]),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),e("h4",{attrs:{id:"the-icons-appear-as-question-marks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-icons-appear-as-question-marks"}},[t._v("#")]),t._v(" The icons appear as question marks")]),t._v(" "),e("p",[t._v("There is a "),e("a",{attrs:{href:"https://www.statalist.org/forums/filedata/fetch?id=1351289&d=1469795531&type=full",target:"_blank",rel:"noopener noreferrer"}},[t._v("known issue"),e("OutboundLink")],1),t._v(" in Stata on Linux that may render icons as question marks. We have implemented work arounds that should mitigate this issues for installations that we support. "),e("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" if you still experience this so we can have a look and update your configuration.")]),t._v(" "),e("h4",{attrs:{id:"my-file-consume-all-of-the-machine-memory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#my-file-consume-all-of-the-machine-memory"}},[t._v("#")]),t._v(" My file consume all of the machine memory")]),t._v(" "),e("p",[t._v("You might need to consider the memory consumption of Stata when you work with files close to your machine memory. "),e("RouterLink",{attrs:{to:"/do-science/faq/compute/#is-my-process-hitting-memory-issues"}},[t._v("Click here")]),t._v(" to learn how to assess if you are hitting memory issues on your machines. If so, the University of Wisconsin has written up a guide on "),e("a",{attrs:{href:"https://www.ssc.wisc.edu/sscc/pubs/stata_memory.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("how to reduce Stata's memory consumption"),e("OutboundLink")],1),t._v(". "),e("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for a memory upgrade if necessary.")],1)])}),[],!1,null,null,null);a.default=o.exports}}]);