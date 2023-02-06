(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{810:function(e,s,t){"use strict";t.r(s);var a=t(41),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"terminal-multiplexers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terminal-multiplexers"}},[e._v("#")]),e._v(" Terminal Multiplexers")]),e._v(" "),t("p",[t("strong",[e._v("Working with code and programs in persistent terminal sessions allow your work to run even when you disconnect from your virtual machine.")])]),e._v(" "),t("p",[e._v("This is practical when your want to keep your code running if your internet connection drops, to resume work at home or similar.")]),e._v(" "),t("p",[e._v("Below are a couple of popular terminal multiplexers, all preinstalled in your lab, so you can find your favorite.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#gnu-screen"}},[e._v("GNU Screen")]),t("ul",[t("li",[t("a",{attrs:{href:"#start-a-new-session"}},[e._v("Start a new session")])]),t("li",[t("a",{attrs:{href:"#list-sessions"}},[e._v("List sessions")])]),t("li",[t("a",{attrs:{href:"#detach-your-session"}},[e._v("Detach your session")])]),t("li",[t("a",{attrs:{href:"#resuming-a-session"}},[e._v("Resuming a session")])]),t("li",[t("a",{attrs:{href:"#terminating-a-session"}},[e._v("Terminating a session")])]),t("li",[t("a",{attrs:{href:"#learning-more-about-screen"}},[e._v("Learning more about Screen")])])])]),t("li",[t("a",{attrs:{href:"#tmux"}},[e._v("tmux")])]),t("li",[t("a",{attrs:{href:"#byobu"}},[e._v("Byobu")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"gnu-screen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnu-screen"}},[e._v("#")]),e._v(" GNU Screen")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.gnu.org/software/screen/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU Screen"),t("OutboundLink")],1),e._v(" is one of the most popular terminal multiplexers. It's a great starting point to get you going.")]),e._v(" "),t("h3",{attrs:{id:"start-a-new-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-a-new-session"}},[e._v("#")]),e._v(" Start a new session")]),e._v(" "),t("p",[e._v("Start a virtual session on your computer with:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v(" -S testsession\n")])])]),t("p",[e._v("You may see a blink on the screen or a Screen welcome menu, and then something that resembles your regular terminal window.")]),e._v(" "),t("h3",{attrs:{id:"list-sessions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-sessions"}},[e._v("#")]),e._v(" List sessions")]),e._v(" "),t("p",[e._v("Now let's try to list your running sessions (you can have many running at once):")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v(" -ls\n")])])]),t("p",[e._v("You should see something like:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("There are screens on:\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("number"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".testsession        "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("time"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Attached"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("This means that you are attached to the virtual session named "),t("code",[e._v("testsession")]),e._v(".\nWrite some random text in your command line within the session to mimic come work before we try to attach the session.")]),e._v(" "),t("h3",{attrs:{id:"detach-your-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detach-your-session"}},[e._v("#")]),e._v(" Detach your session")]),e._v(" "),t("p",[e._v("Detach your session holding down the "),t("code",[e._v("Ctrl")]),e._v(" key together with "),t("code",[e._v("A")]),e._v(" and "),t("code",[e._v("D")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Ctrl + A + D\n")])])]),t("p",[e._v("Your screen should blink again and you should see something like this in your terminal:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("detached from "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("number"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".testsession"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),t("h3",{attrs:{id:"resuming-a-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resuming-a-session"}},[e._v("#")]),e._v(" Resuming a session")]),e._v(" "),t("p",[e._v("First list the sessions again using "),t("code",[e._v("screen -ls")]),e._v(" as described above. You should expect something like this:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("There are screens on:\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("number"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".testsession  "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("time"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Detached"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("This means that your session is still alive on your computer. This session can now be resumed with the command "),t("code",[e._v("screen -r <sessionname>")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v(" -r testsession\n")])])]),t("p",[e._v("You should now see the random text that you left in inside your session before you detached.")]),e._v(" "),t("h3",{attrs:{id:"terminating-a-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terminating-a-session"}},[e._v("#")]),e._v(" Terminating a session")]),e._v(" "),t("p",[e._v("Terminate your session with "),t("code",[e._v("exit")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v("\n")])])]),t("h3",{attrs:{id:"learning-more-about-screen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learning-more-about-screen"}},[e._v("#")]),e._v(" Learning more about Screen")]),e._v(" "),t("p",[e._v("If you want to learn more about Screen, including how to use multiple windows and split screens check out the "),t("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-screen-on-an-ubuntu-cloud-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Install and Use Screen on an Ubuntu Cloud Server"),t("OutboundLink")],1),e._v(" tutorial or the comprehensive "),t("a",{attrs:{href:"https://www.gnu.org/software/screen/manual/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Screen User's Manual"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"tmux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tmux"}},[e._v("#")]),e._v(" tmux")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tmux/tmux/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("tmux"),t("OutboundLink")],1),e._v(" is a newer and popular alternative to GNU Screen.\nThere are many good online introductions to tmux such as "),t("a",{attrs:{href:"https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Quick and Easy Guide to tmux"),t("OutboundLink")],1),e._v(" and the online book "),t("a",{attrs:{href:"https://leanpub.com/the-tao-of-tmux/read",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Tao of tmux"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"byobu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#byobu"}},[e._v("#")]),e._v(" Byobu")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://byobu.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Byobu"),t("OutboundLink")],1),e._v(" is a handy wrapper for both tmux and GNU Screen.\nIt includes an enhanced profiles, convenient keybindings, configuration utilities, and toggle-able system status notifications for both the GNU Screen window manager and the more modern Tmux terminal multiplexer, and works on most Linux, BSD, and Mac distributions.")])])}),[],!1,null,null,null);s.default=r.exports}}]);