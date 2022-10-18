(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{759:function(e,t,a){"use strict";a.r(t);var s=a(40),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vnc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vnc"}},[e._v("#")]),e._v(" VNC")]),e._v(" "),a("h2",{attrs:{id:"install-turbovnc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-turbovnc"}},[e._v("#")]),e._v(" Install TurboVNC")]),e._v(" "),a("p",[e._v("Install TurboVNC on your lab machine:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget https://netix.dl.sourceforge.net/project/turbovnc/2.2.6/turbovnc_2.2.6_amd64.deb\nsudo apt install ./turbovnc_2.2.6_amd64.deb\n")])])]),a("p",[e._v("Make sure you have a desktop environment setup:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-get update -y && sudo apt-get autoremove -y\nsudo apt-get install -y --no-install-recommends xubuntu-desktop\n")])])]),a("h2",{attrs:{id:"using-turbovnc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-turbovnc"}},[e._v("#")]),e._v(" Using TurboVNC")]),e._v(" "),a("p",[e._v("Start the session on your server with the command below and note the number of session N (e.g. "),a("code",[e._v(":1")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/opt/TurboVNC/bin/vncserver -geometry 1280x900 -nohttpd -SecurityTypes None -localhost -disconnect\n")])])]),a("p",[e._v("If you have one or more existing sessions running and you want to list them, you can use "),a("code",[e._v("-list")]),e._v(" parameter:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/opt/TurboVNC/bin/vncserver -list\n")])])]),a("p",[e._v("You can stop your session by using "),a("code",[e._v("-kill")]),e._v(" parameter and "),a("code",[e._v(":n")]),e._v(" being a number of session (e.g. "),a("code",[e._v(":1")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/opt/TurboVNC/bin/vncserver -kill :n\n")])])]),a("h2",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")]),e._v(" "),a("p",[e._v("To be able to connect to a VNC session you need allowing connection\nusing ssh tunnel. In the example we use port 5901, but in case of multiple users\nyou will need to calculate your port based on session number N: 5900 + n(:1) => 5901.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssh -L59000:localhost:5901 -C -N lab\n")])])]),a("p",[e._v("Connect with VNC client of your choice using the address below.\nWe recommend installing TigerVNC as a client on your notebook.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("127.0.0.1:59000\n")])])]),a("p",[e._v("If you do not have it installed yet, you can follow the examples below.")]),e._v(" "),a("h3",{attrs:{id:"ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[e._v("#")]),e._v(" Ubuntu")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt update\nsudo apt install tigervnc-viewer\n")])])]),a("h3",{attrs:{id:"mac-os-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-x"}},[e._v("#")]),e._v(" Mac OS X")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("brew install --cask tigervnc-viewer\n")])])]),a("h3",{attrs:{id:"windows-or-other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-or-other"}},[e._v("#")]),e._v(" Windows or other")]),e._v(" "),a("p",[e._v("https://sourceforge.net/projects/tigervnc/files/stable/1.12.0/vncviewer64-1.12.0.exe/download")])])}),[],!1,null,null,null);t.default=n.exports}}]);