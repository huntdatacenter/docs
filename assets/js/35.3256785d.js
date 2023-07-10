(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{537:function(e,s,t){e.exports=t.p+"assets/img/workbench_passreset_1.55b44950.png"},538:function(e,s,t){e.exports=t.p+"assets/img/workbench_passreset_3.25b5237d.png"},539:function(e,s,t){e.exports=t.p+"assets/img/workbench_passreset_5.79d0fd5a.png"},861:function(e,s,t){"use strict";t.r(s);var a=t(41),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ssh-passphrase-reset-in-workbench"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-passphrase-reset-in-workbench"}},[e._v("#")]),e._v(" SSH passphrase reset in Workbench")]),e._v(" "),a("p",[a("strong",[e._v("This guide describes how to reset your SSH passphrase in Workbench.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Pilot phase")]),e._v(" "),a("p",[e._v("This guide is currently in pilot phase. Noticed an issue? Share feedback with us on Slack!")])]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-requirements"}},[e._v("1. Requirements")])]),a("li",[a("a",{attrs:{href:"#_2-design-a-passphrase"}},[e._v("2. Design a passphrase")])]),a("li",[a("a",{attrs:{href:"#_3-reset-your-passphrase-using-workbench"}},[e._v("3. Reset your passphrase using Workbench")])]),a("li",[a("a",{attrs:{href:"#troubleshooting"}},[e._v("Troubleshooting")])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Need a passphrase reset?")]),e._v(" "),a("p",[e._v("Order a SSH passphrase reset in our do-science "),a("RouterLink",{attrs:{to:"/do-science/service-desk/#ssh-passphrase-reset"}},[e._v("service desk")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"_1-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-requirements"}},[e._v("#")]),e._v(" 1. Requirements")]),e._v(" "),a("p",[e._v("1.1 A running VPN connection to HUNT Cloud as described in our "),a("RouterLink",{attrs:{to:"/do-science/lab-access/configure-vpn/"}},[e._v("Configure your VPN")]),e._v(" guide.")],1),e._v(" "),a("p",[e._v("1.2 An established connection to "),a("a",{attrs:{href:"/do-science/hunt-workbench/principles"}},[e._v("Workbench")]),e._v(". If you have not used Workbench before, order your certificate "),a("RouterLink",{attrs:{to:"/do-science/service-desk/#hunt-workbench-access"}},[e._v("here")])],1),e._v(" "),a("h2",{attrs:{id:"_2-design-a-passphrase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-design-a-passphrase"}},[e._v("#")]),e._v(" 2. Design a passphrase")]),e._v(" "),a("details",{staticClass:"custom-block expander",attrs:{id:"detail-pass-1"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#detail-pass-1",onclick:'document.querySelector("#detail-pass-1").setAttribute("open", "")'}},[e._v("#")]),e._v(" Create your own passphrase")]),a("p",[e._v("You will need to update your "),a("strong",[a("code",[e._v("SSH temporary key")])]),e._v(" in the steps below. We prefer that you design a "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" instead of a password. A passphrase is a series of words that creates a phrase. It should be:")]),e._v(" "),a("ul",[a("li",[e._v("long enough to be hard to guess")]),e._v(" "),a("li",[e._v("not a famous quotation from the literature (but could be pretty close)")]),e._v(" "),a("li",[e._v("hard to guess by intuition (even by someone who knows you well)")]),e._v(" "),a("li",[e._v("easy to remember")])]),e._v(" "),a("p",[e._v("Oh, and, it should be unique to this site only (not to mention at least\n"),a("em",[e._v("12 characters")]),e._v(" long and include both "),a("em",[e._v("lower")]),e._v(" and "),a("em",[e._v("upper")]),e._v(" cases).")]),e._v(" "),a("p",[e._v("Making a good passphrase is great fun and good security hygiene. Here's one to get you going:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("AnalysingPokemon4FunInTheMorning\n")])])])]),a("details",{staticClass:"custom-block expander",attrs:{id:"detail-pass-2"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#detail-pass-2",onclick:'document.querySelector("#detail-pass-2").setAttribute("open", "")'}},[e._v("#")]),e._v(" Password management")]),a("p",[e._v("Safest way for you to create a passphrase is to generate and store it using some of the recommended tools below:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://keepassxc.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("KeePassXC"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://www.lastpass.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LastPass"),a("OutboundLink")],1),e._v(" available on all common platforms.")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Expected outcome")]),e._v(" "),a("p",[e._v("A unique "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" of minimum 12 characters containing both lower and upper cases.")])]),e._v(" "),a("h2",{attrs:{id:"_3-reset-your-passphrase-using-workbench"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-reset-your-passphrase-using-workbench"}},[e._v("#")]),e._v(" 3. Reset your passphrase using Workbench")]),e._v(" "),a("p",[e._v("After you have successfully completed above steps, you can login to your Workbench using workbench link. You can find this link in your initial onboarding email in part "),a("code",[e._v("Access link")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Cannot find your access link ?")]),e._v(" "),a("p",[e._v("Request reissue "),a("RouterLink",{attrs:{to:"/do-science/service-desk/#request-lab-access-reissue"}},[e._v("here")])],1)]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<lab_name>.lab.hdc.ntnu.no\n")])])]),a("p",[e._v("3.1 You should be welcomed by a following screen.")]),e._v(" "),a("p",[e._v("3.2 Type in your username and your temporary SSH passphrase.")]),e._v(" "),a("img",{attrs:{src:t(537),width:"300px"}}),e._v(" "),a("p",[e._v("3.3 Afterwards, you should be prompted for a passhprase change. Type in your temporary SSH key again, then your new passhprase which you created in previous steps.")]),e._v(" "),a("img",{attrs:{src:t(538),width:"300px"}}),e._v(" "),a("p",[e._v("Your password change will be confirmed by following screen.")]),e._v(" "),a("img",{attrs:{src:t(539),width:"300px"}}),e._v(" "),a("p",[e._v("3.4 You can login to workbench now with your new passphrase.")]),e._v(" "),a("p",[e._v("3.5 All finished ! You now have full access to your HUNT Workbench and its features.")]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("WIP")])])}),[],!1,null,null,null);s.default=r.exports}}]);