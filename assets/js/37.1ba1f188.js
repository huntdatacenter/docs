(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{730:function(e,t,s){e.exports=s.p+"assets/img/putty_3.3.3.e8d8e5e1.png"},731:function(e,t,s){e.exports=s.p+"assets/img/putty_3.3.4.27c57f0b.png"},732:function(e,t,s){e.exports=s.p+"assets/img/putty_3.3.5.11c3b2fd.png"},733:function(e,t,s){e.exports=s.p+"assets/img/putty_3.3.6.045d7373.png"},734:function(e,t,s){e.exports=s.p+"assets/img/putty_3.3.7.8234bff3.png"},977:function(e,t,s){"use strict";s.r(t);var a=s(41),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"step-3-configure-your-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-configure-your-ssh"}},[e._v("#")]),e._v(" Step 3. Configure your SSH")]),e._v(" "),a("p",[a("strong",[e._v("These steps will configure your SSH connection to and from your local computer and your lab.")])]),e._v(" "),a("p",[e._v("You will first configure a machine used for security purposes that we call "),a("strong",[a("code",[e._v("entry")])]),e._v(", and then one machine that we call "),a("strong",[a("code",[e._v("home")])]),e._v(" were you will do your scientific explorations.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Requirement")]),e._v(" "),a("ul",[a("li",[e._v("A running VPN connection (successful implementation of "),a("RouterLink",{attrs:{to:"/do-science/lab-access/configure-vpn/#_2-4-verify-your-vpn-connection"}},[e._v("Step 2")]),e._v(").")],1)])]),e._v(" "),a("h2",{attrs:{id:"_3-1-identify-required-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-identify-required-info"}},[e._v("#")]),e._v(" 3.1 Identify required info")]),e._v(" "),a("p",[e._v("Open the "),a("strong",[a("code",[e._v("ssh-config.txt")])]),e._v(" file that you collected in Step 1 using your favorite text editor.")]),e._v(" "),a("p",[e._v("This file contains the necessary information for your SSH configuration. Take note of your "),a("strong",[a("code",[e._v("lab-name")])]),e._v(", your "),a("strong",[a("code",[e._v("lab-IP")])]),e._v(" and your "),a("strong",[a("code",[e._v("username")])]),e._v(".")]),e._v(" "),a("p",[e._v("Example contents of "),a("strong",[a("code",[e._v("ssh-config.txt")])]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Host "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-entry\n    HostName "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    User "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-username"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Expected info")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("`your-lab-name'")]),e._v(" - the name of your lab.")]),e._v(" "),a("li",[a("strong",[e._v("`your-lab-IP'")]),e._v(" - the IP address of your lab.")]),e._v(" "),a("li",[a("strong",[e._v("`your-username'")]),e._v(" - your username in your lab.")])])]),e._v(" "),a("h2",{attrs:{id:"_3-2-design-a-passphrase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-design-a-passphrase"}},[e._v("#")]),e._v(" 3.2 Design a passphrase")]),e._v(" "),a("p",[e._v("You will need to update your "),a("strong",[a("code",[e._v("SSH temporary key")])]),e._v(" in the steps below. We prefer that you design a "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" instead of a password. A passphrase is a series of words that creates a phrase. It should be:")]),e._v(" "),a("ul",[a("li",[e._v("long enough to be hard to guess")]),e._v(" "),a("li",[e._v("not a famous quotation from the literature (but could be pretty close)")]),e._v(" "),a("li",[e._v("hard to guess by intuition (even by someone who knows you well)")]),e._v(" "),a("li",[e._v("easy to remember")]),e._v(" "),a("li",[e._v("at least 3 characters have to be different from your previous one (temporary passphrase)")])]),e._v(" "),a("p",[e._v("Oh, and, it should be unique to this site only (not to mention at least\n"),a("em",[e._v("12 characters")]),e._v(" long and include both "),a("em",[e._v("lower")]),e._v(" and "),a("em",[e._v("upper")]),e._v(" cases).")]),e._v(" "),a("p",[e._v("Making a good passphrase is great fun and good security hygiene. Here's one to get you going:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("AnalysingPokemon4FunInTheMorning\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Expected outcome")]),e._v(" "),a("p",[e._v("A unique "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" of minimum 12 characters containing both lower and upper cases.")])]),e._v(" "),a("h2",{attrs:{id:"_3-3-configure-entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-configure-entry"}},[e._v("#")]),e._v(" 3.3 Configure entry")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Windows")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download and save the "),a("strong",[a("code",[e._v("Putty")])]),e._v(" SSH client from "),a("a",{attrs:{href:"https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("this link"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Double click on the "),a("strong",[a("code",[e._v("putty.exe")])]),e._v(" file that your save your local computer to start the client.")])]),e._v(" "),a("li",[a("p",[e._v("Enter "),a("strong",[a("code",[e._v("<your-username>@<your-lab-IP>")])]),e._v(' in the "'),a("em",[e._v("Host Name (or IP address)")]),e._v('" field and click "'),a("em",[e._v("Open")]),e._v('".')]),e._v(" "),a("p",[a("img",{attrs:{src:s(730),alt:"putty step 3.3.3"}})])]),e._v(" "),a("li",[a("p",[e._v("Type in your "),a("strong",[a("code",[e._v("SSH temporary key")])]),e._v(" collected in Step 1 in the terminal window that appear when asked for a password and hit enter. You will not see anything on the screen when you type your password.")]),e._v(" "),a("blockquote",[a("p",[e._v("NOTE: You "),a("strong",[e._v("CANNOT")]),e._v(" paste with Ctrl + v in Putty.")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(731),alt:"putty step 3.3.4"}})])]),e._v(" "),a("li",[a("p",[e._v("Type the same "),a("strong",[a("code",[e._v("SSH temporary key")])]),e._v(" "),a("em",[e._v("one more time")]),e._v(" when asked and hit enter.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(732),alt:"putty step 3.3.5"}})])]),e._v(" "),a("li",[a("p",[e._v("Enter your new "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" from above and hit enter.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(733),alt:"putty step 3.3.6"}})])]),e._v(" "),a("li",[a("p",[e._v("Retype your "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" for verification and hit enter. You will now be kicked out of the entry machine connection.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(734),alt:"putty step 3.3.7"}})])]),e._v(" "),a("li",[a("p",[e._v("Repeat Step 2 and 3 to verify that your passphrase has been updated. Type your "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("OS X and macOS")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Start "),a("strong",[a("code",[e._v("Terminal")])]),e._v(' (Command + Space, type "Terminal").')])]),e._v(" "),a("li",[a("p",[e._v("Type "),a("strong",[a("code",[e._v("ssh <your-username>@<your-lab-IP>")])])])]),e._v(" "),a("li",[a("p",[e._v("You should then be prompted to enter a password "),a("strong",[a("code",[e._v("<your-username>@<your-lab-IP>'s password:")])])])]),e._v(" "),a("li",[a("p",[e._v("Enter your "),a("strong",[a("code",[e._v("SSH temporary key")])]),e._v(" collected in Step 1 "),a("em",[e._v("two")]),e._v(" times. Pasting with Ctrl + v does not work in Putty.")])]),e._v(" "),a("li",[a("p",[e._v("Enter your new "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" and retype for verification. You will be kicked off the entry machine by completion.")])]),e._v(" "),a("li",[a("p",[e._v("Repeat step 2. and 3. to verify your passphrase update. Type your "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Ubuntu Linux")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Start "),a("strong",[a("code",[e._v("Gnome Terminal")])]),e._v(" (Ctrl + Alt + T).")])]),e._v(" "),a("li",[a("p",[e._v("Type "),a("strong",[a("code",[e._v("ssh <your-username>@<your-lab-IP>")])])])]),e._v(" "),a("li",[a("p",[e._v("You should then be prompted to enter a password "),a("strong",[a("code",[e._v("<your-username>@<your-lab-IP>'s password:")])])])]),e._v(" "),a("li",[a("p",[e._v("Enter your "),a("strong",[a("code",[e._v("SSH temporary key")])]),e._v(" collected in Step 1 "),a("em",[e._v("two")]),e._v(" times.")])]),e._v(" "),a("li",[a("p",[e._v("Enter your new "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" and retype for verification. You will be kicked off the entry machine by completion.")])]),e._v(" "),a("li",[a("p",[e._v("Repeat step 2. and 3. to verify your passphrase update. Type your "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" when asked for a password. You should now be logged into your entry machine.")])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Expected result")]),e._v(" "),a("p",[e._v("By completion your should be logged into your "),a("strong",[e._v("entry machine")]),e._v(" and see a terminal window that looks about the same as this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("\nWelcome to Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.04")]),e._v(".3 LTS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GNU/Linux "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.4")]),e._v(".0-174-generic x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  Get cloud support with Ubuntu Advantage Cloud Guest:\n    http://www.ubuntu.com/business/services/cloud\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" packages can be updated.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" update is a security update.\n\nWelcome to YOUR-LABNAME.\n\nFor the record, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" you should not be here - please\nleave and report the incident to cloud.support+hunt-cloud-contact-form@hunt.ntnu.no.\n\nLast login: Mon Jul  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(":40:16 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2018")]),e._v(" from "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".10.10\nyour-username@your-labname-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("entry"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(":~$\n\n")])])])]),e._v(" "),a("h2",{attrs:{id:"_3-4-configure-home"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-configure-home"}},[e._v("#")]),e._v(" 3.4 Configure home")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("When logged into your entry machine (see expected result above), connect to your home server by typing "),a("strong",[a("code",[e._v("ssh home")])]),e._v(" in your terminal window.")])]),e._v(" "),a("li",[a("p",[e._v("You will be prompted to type your "),a("strong",[a("code",[e._v("SSH temporary key")])]),e._v(" "),a("em",[e._v("one time")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Similar to above, you will be asked for a new password. Type your "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" "),a("em",[e._v("two times")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Similar to above, you will be kicked out of your home machine and back to your entry machine by completion.")])]),e._v(" "),a("li",[a("p",[e._v("Similar to above, verify a successful passphrase update by logging into your home machine typing "),a("strong",[a("code",[e._v("ssh home")])]),e._v(" once more.")])]),e._v(" "),a("li",[a("p",[e._v("First time you are usually asked to confirm the authenticity of host, it is fine to confirm with "),a("strong",[a("code",[e._v("yes")])]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("With a tiny bit of luck, you should now be logged into your lab!")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Expected result")]),e._v(" "),a("p",[e._v("By completion your should see a terminal window that looks similar to the text below. You may differentiate between your entry and home  machine by looking at the machine name at the bottom. This one should say "),a("strong",[e._v("-home")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Welcome to Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.04")]),e._v(".3 LTS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GNU/Linux "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.4")]),e._v(".0-98-generic x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  Get cloud support with Ubuntu Advantage Cloud Guest:\n    http://www.ubuntu.com/business/services/cloud\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("66")]),e._v(" packages can be updated.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" updates are security updates.\n\nWelcome to YOUR-LABNAME.\n\nFor the record, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" you should not be here - please\nleave and report the incident to cloud.support+hunt-cloud-contact-form@hunt.ntnu.no.\n\nLast login: Sun Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(":29:28 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v(" from "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".10.10\nyour-username@your-labname-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("home"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(":~$\n")])])])]),e._v(" "),a("h2",{attrs:{id:"_3-5-final-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-final-steps"}},[e._v("#")]),e._v(" 3.5 Final steps")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Do not skip this step")]),e._v(" "),a("p",[e._v("We hope that you will log into your lab a lot over the coming months and years. To avoid unnecessary frustration, you need to finalize your installation through these final steps.")])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Windows")]),e._v(" "),a("ol",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/do-science/hunt-workbench/"}},[e._v("HUNT Workbench")]),e._v(" for smooth access to Jupyter Notebooks, Python, RStudio, R, or MATLAB.")],1)]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"/do-science/tools/technical/mobaxterm"}},[e._v("Configure MobaXterm")]),e._v(' for "password-less" SSH access directly to your home machine, as well as click-based file transfers between your local computer and your home machine.')])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("OS X, MacOS and Ubuntu Linux")]),e._v(" "),a("p",[e._v('When completed, the steps below should allow you to log "password-less" directly into your home machine by typing:')]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" your-lab-name\n")])])]),a("h3",{attrs:{id:"_3-5-1-establish-a-ssh-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1-establish-a-ssh-alias"}},[e._v("#")]),e._v(" 3.5.1 Establish a SSH alias")]),e._v(" "),a("p",[e._v("This will allow you to log directly into your lab without the need to remember your user name or your lab's IP address:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("On your local computer, open the "),a("strong",[a("code",[e._v("ssh-config.txt")])]),e._v(" file from "),a("RouterLink",{attrs:{to:"/do-science/lab-access/collect-your-keys/#_1-2-secrets-on-your-email"}},[e._v("Step 1.2")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("On your local computer, add the content from the "),a("strong",[a("code",[e._v("ssh-config.txt")])]),e._v(" to the file named "),a("strong",[a("code",[e._v("config")])]),e._v(" in the hidden ssh-folder in your home directory ("),a("strong",[a("code",[e._v("~/.ssh/config")])]),e._v(") using your favorite file editor. You may need to generate this file if it is your first ssh-configuration.")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Open editor in OS X and macOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" -Wne ~/.ssh/config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Open editor in Linux Ubuntu")]),e._v("\ngedit ~/.ssh/config\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Test your new setup by typing "),a("strong",[a("code",[e._v("ssh <your-lab-name>-entry")])]),e._v(" in your terminal. For example:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" demolab-entry\n")])])]),a("p",[e._v("You should now be prompted your passphrase. After typing your passphrase you should be logged into your entry-machine. Exit your entry machine and return to your local computer by typing "),a("strong",[a("code",[e._v("exit")])]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_3-5-2-establish-a-password-less-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-2-establish-a-password-less-login"}},[e._v("#")]),e._v(" 3.5.2 Establish a password-less login")]),e._v(" "),a("p",[e._v("This will allow you to log directly into your lab without the need to remember your passphrase.")]),e._v(" "),a("blockquote",[a("p",[e._v("If you already have a RSA certificate on your local computer that you would like to use, start from step 3.")])]),e._v(" "),a("ol",[a("li",[e._v("On your "),a("strong",[a("code",[e._v("local computer")])]),e._v(", open a terminal.")]),e._v(" "),a("li",[e._v("Generate a new RSA certificate:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- On your local computer")]),e._v("\nssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v("\n")])])]),a("p",[e._v("Hit enter "),a("em",[e._v("three times")]),e._v(". When this finishes:")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Add your new certificate to your entry machine:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- On your local computer")]),e._v("\nssh-copy-id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-entry\n")])])]),a("p",[e._v("Enter your "),a("strong",[a("code",[e._v("passphrase")])]),e._v(" when prompted for a password.")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Add your certificate to the ssh-agent.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("ssh-add\n")])])]),a("p",[e._v("If you don't have a running ssh-agent you may see an error message. In such a case, first enter "),a("strong",[a("code",[e._v('eval "$(ssh-agent -s)"')])]),e._v(" and next enter "),a("strong",[a("code",[e._v("ssh-add")])]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_3-5-3-expected-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-expected-result"}},[e._v("#")]),e._v(" 3.5.3 Expected result")]),e._v(" "),a("p",[e._v("You should now be able to directly connect your home machine with this command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("for example,")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" demolab\n")])])]),a("p",[a("strong",[e._v("Voilà!")])]),e._v(" "),a("h3",{attrs:{id:"_3-5-4-one-more-ting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-4-one-more-ting"}},[e._v("#")]),e._v(" 3.5.4 One more ting")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("HUNT Workbench")]),e._v(" "),a("p",[e._v("Setup "),a("RouterLink",{attrs:{to:"/do-science/hunt-workbench/"}},[e._v("HUNT Workbench")]),e._v(" for smooth access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R, or MATLAB.")],1)])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Time for coffee!")])]),e._v(" "),a("h2",{attrs:{id:"immediate-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immediate-troubleshooting"}},[e._v("#")]),e._v(" Immediate troubleshooting")]),e._v(" "),a("h3",{attrs:{id:"authentication-token-manipulation-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-token-manipulation-error"}},[e._v("#")]),e._v(" Authentication token manipulation error")]),e._v(" "),a("p",[e._v("If you are getting "),a("code",[e._v("Authentication token manipulation error")]),e._v(" make sure you follow advises from Step 3.2 when creating your new passphrase and following steps on changing the passphrase for both entry and home machine.")]),e._v(" "),a("h3",{attrs:{id:"unable-to-connect-with-putty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-connect-with-putty"}},[e._v("#")]),e._v(" Unable to connect with Putty")]),e._v(" "),a("p",[e._v("Ensure that you did download "),a("strong",[a("code",[e._v("putty.exe")])]),e._v(" from the "),a("RouterLink",{attrs:{to:"/do-science/lab-access/configure-ssh/#_3-3-configure-entry"}},[e._v("link above")]),e._v(". We have experienced issues with preinstalled versions that connects from for us unknown locations.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);