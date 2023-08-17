(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1002:function(t,e,n){"use strict";n.r(e);var s=n(41),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"postgresql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),n("p",[n("strong",[n("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostgreSQL"),n("OutboundLink")],1),t._v(" is a relational database management system that can elevate your data handling.")])]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#set-password"}},[t._v("Set password")])]),n("li",[n("a",{attrs:{href:"#connecting-from-workbench"}},[t._v("Connecting from Workbench")])]),n("li",[n("a",{attrs:{href:"#connecting-through-pgweb-in-workbench"}},[t._v("Connecting through pgweb in Workbench")])]),n("li",[n("a",{attrs:{href:"#installing-python-connectors-in-workbench"}},[t._v("Installing Python connectors in Workbench")])])])]),n("p"),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("Requirement")]),t._v(" "),n("p",[t._v("This guide is for the managed PostgreSQL pilot service on home machines.")]),t._v(" "),n("p",[t._v("You can use this guide to connect to your installation if you have requested the setup and received a confirmation that the setup is completed.")])]),t._v(" "),n("h2",{attrs:{id:"set-password"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-password"}},[t._v("#")]),t._v(" Set password")]),t._v(" "),n("p",[t._v("First you need to login over ssh and set your password using this command:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("psql -c "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\password"')]),t._v("\n")])])]),n("h2",{attrs:{id:"connecting-from-workbench"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connecting-from-workbench"}},[t._v("#")]),t._v(" Connecting from Workbench")]),t._v(" "),n("p",[t._v("Once you have configured your password you can also login from "),n("RouterLink",{attrs:{to:"/do-science/hunt-workbench/faq/#can-i-use-a-terminal-from-my-workbench"}},[t._v("Workbench Terminal")]),t._v(":")],1),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("psql --host"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.18")]),t._v(".0.1 --port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5432")]),t._v("\n")])])]),n("h2",{attrs:{id:"connecting-through-pgweb-in-workbench"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connecting-through-pgweb-in-workbench"}},[t._v("#")]),t._v(" Connecting through pgweb in Workbench")]),t._v(" "),n("ul",[n("li",[t._v("Host: "),n("code",[t._v("172.18.0.1")])]),t._v(" "),n("li",[t._v("Port: "),n("code",[t._v("5432")])]),t._v(" "),n("li",[t._v("Username: use your username")]),t._v(" "),n("li",[t._v("Password: use password configured in the beggining of the guide")]),t._v(" "),n("li",[t._v("Database: same as username")])]),t._v(" "),n("h2",{attrs:{id:"installing-python-connectors-in-workbench"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-python-connectors-in-workbench"}},[t._v("#")]),t._v(" Installing Python connectors in Workbench")]),t._v(" "),n("p",[t._v("You can install "),n("code",[t._v("psycopg2")]),t._v(" using conda into "),n("RouterLink",{attrs:{to:"/do-science/hunt-workbench/faq/#how-can-i-change-a-conda-environment-for-my-notebook"}},[t._v("py310 environment")]),t._v(":")],1),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("conda "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -c conda-forge -n py310 psycopg2\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);