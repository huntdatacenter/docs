(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1004:function(t,s,a){"use strict";a.r(s);var e=a(41),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vnc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vnc"}},[t._v("#")]),t._v(" VNC")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Virtual_Network_Computing",target:"_blank",rel:"noopener noreferrer"}},[t._v("VNC"),a("OutboundLink")],1),t._v(" is a graphical desktop-sharing system that allow you to connect to graphical interfaces in your lab machines.")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-install-turbovnc"}},[t._v("1. Install TurboVNC")])]),a("li",[a("a",{attrs:{href:"#_2-install-a-desktop-environment"}},[t._v("2. Install a desktop environment")])]),a("li",[a("a",{attrs:{href:"#_3-start-turbovnc"}},[t._v("3. Start TurboVNC")])]),a("li",[a("a",{attrs:{href:"#_4-configure-your-local-computer"}},[t._v("4. Configure your local computer")])]),a("li",[a("a",{attrs:{href:"#useful-commands-for-turbo-vnc"}},[t._v("Useful commands for Turbo VNC")]),a("ul",[a("li",[a("a",{attrs:{href:"#list-running-sessions"}},[t._v("List running sessions")])]),a("li",[a("a",{attrs:{href:"#stop-session"}},[t._v("Stop session")])])])]),a("li",[a("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1-install-turbovnc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-turbovnc"}},[t._v("#")]),t._v(" 1. Install TurboVNC")]),t._v(" "),a("p",[t._v("1.1. Log into your lab machine.")]),t._v(" "),a("p",[t._v("1.2. Download the latest TurboVNC")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# -- Example for version 3.0.2 \nwget https://netix.dl.sourceforge.net/project/turbovnc/3.0.2/turbovnc_3.0.2_amd64.deb\n")])])]),a("p",[a("a",{attrs:{href:"https://sourceforge.net/projects/turbovnc/files/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Click here"),a("OutboundLink")],1),t._v(" to see the latest version and update the text above with a new version number if needed.")]),t._v(" "),a("p",[t._v("1.3. Install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ./turbovnc_3.0.2_amd64.deb\n")])])]),a("h2",{attrs:{id:"_2-install-a-desktop-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-a-desktop-environment"}},[t._v("#")]),t._v(" 2. Install a desktop environment")]),t._v(" "),a("p",[t._v("Make sure you have a desktop environment setup that TigerVNC can connect towards:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" autoremove -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y --no-install-recommends xubuntu-desktop\n")])])]),a("h2",{attrs:{id:"_3-start-turbovnc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-start-turbovnc"}},[t._v("#")]),t._v(" 3. Start TurboVNC")]),t._v(" "),a("p",[t._v("Start the session on your server with the command below and note the number of session N (e.g. "),a("code",[t._v(":1")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/opt/TurboVNC/bin/vncserver -geometry 1280x900 -nohttpd -SecurityTypes None -localhost -disconnect\n")])])]),a("h2",{attrs:{id:"_4-configure-your-local-computer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-configure-your-local-computer"}},[t._v("#")]),t._v(" 4. Configure your local computer")]),t._v(" "),a("p",[t._v("You will need a SSH tunnel between your local computer and your lab to connect to your VNC session.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Calculate your port")]),t._v(" "),a("p",[t._v("In this example we will use port 5901. In case of multiple users you will need to calculate your port based your session number identified above (N): 5900 + n(:1) => 5901.")])]),t._v(" "),a("p",[t._v("4.1 In your local computer, establish a SSH tunnel to your lab:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -L59000:localhost:5901 -C -N lab\n")])])]),a("p",[t._v("4.2 Download and install tigervnc on your local computer.")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Windows")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://sourceforge.net/projects/tigervnc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download TigerVNC"),a("OutboundLink")],1),t._v(" on sourceforge.net (Click "),a("strong",[a("code",[t._v("Download")])]),t._v(").")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("OS X and MacOS")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask tigervnc-viewer\n")])])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Ubuntu")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tigervnc-viewer\n")])])])]),t._v(" "),a("p",[t._v("4.3 Connect your VNC client using the following address (see below).")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:59000\n")])])]),a("h2",{attrs:{id:"useful-commands-for-turbo-vnc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful-commands-for-turbo-vnc"}},[t._v("#")]),t._v(" Useful commands for Turbo VNC")]),t._v(" "),a("p",[t._v("TurboVNC commands are run inside your lab machine.")]),t._v(" "),a("h3",{attrs:{id:"list-running-sessions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-running-sessions"}},[t._v("#")]),t._v(" List running sessions")]),t._v(" "),a("p",[t._v("If you have one or more existing sessions running and you want to list them, you can use "),a("code",[t._v("-list")]),t._v(" parameter:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/opt/TurboVNC/bin/vncserver -list\n")])])]),a("h3",{attrs:{id:"stop-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-session"}},[t._v("#")]),t._v(" Stop session")]),t._v(" "),a("p",[t._v("You can stop your session by using "),a("code",[t._v("-kill")]),t._v(" parameter and "),a("code",[t._v(":n")]),t._v(" being a number of session (e.g. "),a("code",[t._v(":1")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/opt/TurboVNC/bin/vncserver -kill :n\n")])])]),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("p",[t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);