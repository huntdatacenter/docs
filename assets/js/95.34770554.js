(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{774:function(e,t,o){"use strict";o.r(t);var s=o(41),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ssh-passphrase-reset"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ssh-passphrase-reset"}},[e._v("#")]),e._v(" SSH passphrase reset")]),e._v(" "),o("p",[o("strong",[e._v("This guide describes how to reset your SSH passphrase on your entry and home machines.")])]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#_1-requirements"}},[e._v("1. Requirements")])]),o("li",[o("a",{attrs:{href:"#_2-design-a-passphrase"}},[e._v("2. Design a passphrase")])]),o("li",[o("a",{attrs:{href:"#_3-change-passphrase-for-your-entry-machine"}},[e._v("3. Change passphrase for your Entry machine")])]),o("li",[o("a",{attrs:{href:"#_3-change-passphrase-for-your-home-machine"}},[e._v("3. Change passphrase for your Home machine")])])])]),o("p"),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Need a passphrase reset?")]),e._v(" "),o("p",[e._v("Order a SSH passphrase reset in our do-science "),o("RouterLink",{attrs:{to:"/do-science/service-desk/#ssh-passphrase-reset"}},[e._v("service desk")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"_1-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-requirements"}},[e._v("#")]),e._v(" 1. Requirements")]),e._v(" "),o("p",[e._v("A running VPN connection to HUNT Cloud as described in our "),o("RouterLink",{attrs:{to:"/do-science/getting-started/configure-vpn/"}},[e._v("Configure your VPN")]),e._v(" guide.")],1),e._v(" "),o("h2",{attrs:{id:"_2-design-a-passphrase"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-design-a-passphrase"}},[e._v("#")]),e._v(" 2. Design a passphrase")]),e._v(" "),o("p",[e._v("You will need to update your "),o("strong",[o("code",[e._v("SSH temporary key")])]),e._v(" in the steps below. We prefer that you design a "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" instead of a password. A passphrase is a series of words that creates a phrase. It should be:")]),e._v(" "),o("ul",[o("li",[e._v("long enough to be hard to guess")]),e._v(" "),o("li",[e._v("not a famous quotation from the literature (but could be pretty close)")]),e._v(" "),o("li",[e._v("hard to guess by intuition (even by someone who knows you well)")]),e._v(" "),o("li",[e._v("easy to remember")])]),e._v(" "),o("p",[e._v("Oh, and, it should be unique to this site only (not to mention at least\n"),o("em",[e._v("12 characters")]),e._v(" long and include both "),o("em",[e._v("lower")]),e._v(" and "),o("em",[e._v("upper")]),e._v(" cases).")]),e._v(" "),o("p",[e._v("Making a good passphrase is great fun and good security hygiene. Here's one to get you going:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("AnalysingPokemon4FunInTheMorning\n")])])]),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Expected outcome")]),e._v(" "),o("p",[e._v("A unique "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" of minimum 12 characters containing both lower and upper cases.")])]),e._v(" "),o("h2",{attrs:{id:"_3-change-passphrase-for-your-entry-machine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-change-passphrase-for-your-entry-machine"}},[e._v("#")]),e._v(" 3. Change passphrase for your Entry machine")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Windows")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Download and save the "),o("strong",[o("code",[e._v("Putty")])]),e._v(" SSH client from "),o("a",{attrs:{href:"https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("this link"),o("OutboundLink")],1),e._v(", or follow with the next step if you already have "),o("strong",[o("code",[e._v("Putty")])]),e._v(" installed.")])]),e._v(" "),o("li",[o("p",[e._v("Click on the "),o("strong",[o("code",[e._v("putty.exe")])]),e._v(" file that you downloaded to your local machine and start the client.")])]),e._v(" "),o("li",[o("p",[e._v('Make sure "'),o("em",[e._v("Host Name (or IP address)")]),e._v('" field contains: '),o("strong",[o("code",[e._v("<your-username>@<your-lab-IP>")])]),e._v(' and click "'),o("em",[e._v("Open")]),e._v('".')])]),e._v(" "),o("li",[o("p",[e._v("Enter your "),o("strong",[o("code",[e._v("SSH temporary key")])]),e._v(" in the terminal window that appear when asked for a password and hit enter. You will not see anything on the screen when you type your password.")])]),e._v(" "),o("li",[o("p",[e._v("Type the same "),o("strong",[o("code",[e._v("SSH temporary key")])]),e._v(" "),o("em",[e._v("one more time")]),e._v(" when asked and hit enter.")])]),e._v(" "),o("li",[o("p",[e._v("Enter your new "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" from above and hit enter.")])]),e._v(" "),o("li",[o("p",[e._v("Retype your "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" for verification and hit enter. You will now be kicked out of the entry machine connection.")])]),e._v(" "),o("li",[o("p",[e._v("Repeat Step 2 and 3 to verify your passphrase update. Type your "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("OS X and macOS")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Start "),o("strong",[o("code",[e._v("Terminal")])]),e._v(' (Command + Space, type "Terminal").')])]),e._v(" "),o("li",[o("p",[e._v("Type "),o("strong",[o("code",[e._v("ssh <your-username>@<your-lab-IP>")])])])]),e._v(" "),o("li",[o("p",[e._v("You should then be prompted to enter a password "),o("strong",[o("code",[e._v("<your-username>@<your-lab-IP>'s password:")])])])]),e._v(" "),o("li",[o("p",[e._v("Enter your "),o("strong",[o("code",[e._v("SSH temporary key")])]),e._v(" colelcted in Step 1 "),o("em",[e._v("two")]),e._v(" times.")])]),e._v(" "),o("li",[o("p",[e._v("Enter your new "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" and retype for verification. You will be kicked off the entry machine by completion.")])]),e._v(" "),o("li",[o("p",[e._v("Repeat step 2. and 3. to verify your passphrase update. Type your "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Ubuntu Linux")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Start "),o("strong",[o("code",[e._v("Gnome Terminal")])]),e._v(" (Ctrl + Alt + T).")])]),e._v(" "),o("li",[o("p",[e._v("Type "),o("strong",[o("code",[e._v("ssh <your-username>@<your-lab-IP>")])])])]),e._v(" "),o("li",[o("p",[e._v("You should then be prompted to enter a password "),o("strong",[o("code",[e._v("<your-username>@<your-lab-IP>'s password:")])])])]),e._v(" "),o("li",[o("p",[e._v("Enter your "),o("strong",[o("code",[e._v("SSH temporary key")])]),e._v(" collected in Step 1 "),o("em",[e._v("two")]),e._v(" times.")])]),e._v(" "),o("li",[o("p",[e._v("Enter your new "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" and retype for verification. You will be kicked off the entry machine by completion.")])]),e._v(" "),o("li",[o("p",[e._v("Repeat step 2. and 3. to verify your passphrase update. Type your "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Expected result")]),e._v(" "),o("p",[e._v("By completion your should be logged into your "),o("strong",[e._v("entry machine")]),e._v(" and see a terminal window that looks about the same as the example below.\nIt should mention "),o("strong",[e._v("-entry")]),e._v(" to be sure you are connected to correct machine:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 4.4.0-174-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  Get cloud support with Ubuntu Advantage Cloud Guest:\n    http://www.ubuntu.com/business/services/cloud\n\n0 packages can be updated.\n0 update is a security update.\n\nWelcome to YOUR-LABNAME.\n\nFor the record, if you should not be here - please\nleave and report the incident to cloud@hunt.ntnu.no.\n\nLast login: Mon Jul  2 17:40:16 2018 from 10.10.10.10\nyour-username@your-labname-`entry`:~$\n")])])])]),e._v(" "),o("h2",{attrs:{id:"_3-change-passphrase-for-your-home-machine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-change-passphrase-for-your-home-machine"}},[e._v("#")]),e._v(" 3. Change passphrase for your Home machine")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("When logged into your entry machine (see expected result above), connect to your home server by typing "),o("strong",[o("code",[e._v("ssh home")])]),e._v(" in your terminal window.")])]),e._v(" "),o("li",[o("p",[e._v("You will be prompted to type your "),o("strong",[o("code",[e._v("SSH temporary key")])]),e._v(" "),o("em",[e._v("one time")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Similar to above, you will be asked for a new passphrase. Type your "),o("strong",[o("code",[e._v("passphrase")])]),e._v(" "),o("em",[e._v("two times")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Similar to above, you will be kicked out of your home machine and back to your entry machine by completion.")])]),e._v(" "),o("li",[o("p",[e._v("Similar to above, verify a successful passphrase update by logging into your home machine typing "),o("strong",[o("code",[e._v("ssh home")])]),e._v(" once more.")])])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Expected result")]),e._v(" "),o("p",[e._v("By completion your should see a terminal window that looks similar to the text below. You may differentiate between your entry and home  machine by looking at the machine name at the bottom. This one should say "),o("strong",[e._v("-home")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Welcome to Ubuntu 18.04.3 LTS (GNU/Linux 4.4.0-98-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  Get cloud support with Ubuntu Advantage Cloud Guest:\n    http://www.ubuntu.com/business/services/cloud\n\n66 packages can be updated.\n0 updates are security updates.\n\nWelcome to YOUR-LABNAME.\n\nFor the record, if you should not be here - please\nleave and report the incident to cloud@hunt.ntnu.no.\n\nLast login: Sun Dec  3 12:29:28 2017 from 10.10.10.10\n{your-username}@{your-labname}-`home`:~$\n")])])])]),e._v(" "),o("p",[e._v("With a little bit of luck, and if everything worked as expected, you should now be logged into your lab.")])])}),[],!1,null,null,null);t.default=a.exports}}]);