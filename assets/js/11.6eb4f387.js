(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{577:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-1-dmg.de6598e5.png"},578:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-2-Install-guide.1fd4ed77.png"},579:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-3-Install.06a8ac28.png"},580:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-4-Install.6a7ace32.png"},581:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-5-Security-and-Privacy-open.d38dfe04.png"},582:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-5-Security-and-Privacy-allow.a1d6526c.png"},583:function(a,s,t){a.exports=t.p+"assets/img/macFUSE-6-Install-restart.b8ad55e8.png"},584:function(a,s,t){a.exports=t.p+"assets/img/sshfs-1-install.d51cffdd.png"},585:function(a,s,t){a.exports=t.p+"assets/img/sshfs-2-install-agree.8013ed2b.png"},586:function(a,s,t){a.exports=t.p+"assets/img/sshfs-3-install-approve.72db8fbf.png"},587:function(a,s,t){a.exports=t.p+"assets/img/sshfs-4-install-finish.b382cb25.png"},815:function(a,s,t){"use strict";t.r(s);var e=t(41),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"sshfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sshfs"}},[a._v("#")]),a._v(" SSHFS")]),a._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/SSHFS",target:"_blank",rel:"noopener noreferrer"}},[a._v("SSHFS"),e("OutboundLink")],1),a._v(" is a filesystem client to mount and interact with directories and files located in your lab over a normal ssh connection.")])]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#installation"}},[a._v("Installation")]),e("ul",[e("li",[e("a",{attrs:{href:"#install-sshfs-on-your-local-computer-with-ubuntu"}},[a._v("Install SSHFS on your local computer with Ubuntu")])]),e("li",[e("a",{attrs:{href:"#install-sshfs-on-your-local-computer-with-os-x-and-macos"}},[a._v("Install SSHFS on your local computer with OS X and macOS")])])])]),e("li",[e("a",{attrs:{href:"#_1-installation"}},[a._v("1. Installation")])]),e("li",[e("a",{attrs:{href:"#_2-configure-sshfs"}},[a._v("2. Configure SSHFS")])]),e("li",[e("a",{attrs:{href:"#good-to-know-commands"}},[a._v("Good to know commands")]),e("ul",[e("li",[e("a",{attrs:{href:"#unmount-your-lab-storage"}},[a._v("Unmount your lab storage")])])])]),e("li",[e("a",{attrs:{href:"#troubleshooting"}},[a._v("Troubleshooting")]),e("ul",[e("li",[e("a",{attrs:{href:"#installation-on-macos-11"}},[a._v("Installation on macOS 11+")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("p",[a._v("Depending on the data safety level in your lab, you may mount selected part of your storage system to your client computer over VPN.")]),a._v(" "),e("h3",{attrs:{id:"install-sshfs-on-your-local-computer-with-ubuntu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-sshfs-on-your-local-computer-with-ubuntu"}},[a._v("#")]),a._v(" Install SSHFS on your local computer with Ubuntu")]),a._v(" "),e("p",[a._v("On your local computer:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" sshfs\n")])])]),e("h3",{attrs:{id:"install-sshfs-on-your-local-computer-with-os-x-and-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-sshfs-on-your-local-computer-with-os-x-and-macos"}},[a._v("#")]),a._v(" Install SSHFS on your local computer with OS X and macOS")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("REQUIREMENT")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Install Homebrew package manager for macOS: brew"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"_1-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-installation"}},[a._v("#")]),a._v(" 1. Installation")]),a._v(" "),e("p",[a._v("This step install SSHFS on your local computer.")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("OS X and macOS")]),a._v(" "),e("p",[e("strong",[a._v("Requirement:")])]),a._v(" "),e("p",[a._v("You will need the Homebrew package manager for macOS to complete this guide: "),e("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Install Homebrew package manager for macOS: brew"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[e("strong",[a._v("Installation guide:")])]),a._v(" "),e("p",[a._v("1.1 Install macfuse:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --cask macfuse\n")])])]),e("p",[a._v("1.2 Allow developer in "),e("code",[a._v("System Preferences")]),a._v(" -> "),e("code",[a._v("Security & Privacy")]),a._v(" -> "),e("code",[a._v("General")])]),a._v(" "),e("p",[a._v("1.3 Install sshfs:")]),a._v(" "),e("p",[a._v("Download latest version of sshfs from "),e("a",{attrs:{href:"https://github.com/osxfuse/sshfs/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),e("OutboundLink")],1),a._v(", open and install it")]),a._v(" "),e("p",[a._v("1.4 Reboot your machine before continuing.")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Request access")]),a._v(" "),e("p",[a._v("If you do not see a section to enable develper in your "),e("code",[a._v("System Preferences")]),a._v(" -> "),e("code",[a._v("Security & Privacy")]),a._v(" -> "),e("code",[a._v("General")]),a._v(", you will need to contact your organiational IT support and request access to this section (NTNU Hjelp for NTNU managed Macbooks).")])])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("Linux (Debian)")]),a._v(" "),e("p",[a._v("Install sshfs:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" sshfs\n")])])])]),a._v(" "),e("h2",{attrs:{id:"_2-configure-sshfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-configure-sshfs"}},[a._v("#")]),a._v(" 2. Configure SSHFS")]),a._v(" "),e("p",[a._v("This step configures SSHFS on your local computer.")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Requirements")]),a._v(" "),e("p",[a._v("A working HUNT Cloud VPN and and a working SSH connection to your lab.")])]),a._v(" "),e("p",[a._v("2.1. Define your labname as a variable.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("labname")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("labname"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Change "),e("code",[a._v("<labname>")]),a._v(" to your lab and run the line in the terminal on your local computer.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- non-working example")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("labname")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("demolab\n")])])]),e("p",[a._v("2.2. Make a folder on your local computer that is dedicated as mount point for your lab storage:")]),a._v(" "),e("p",[a._v("Run this code without any changes since we defined your labname above.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage\n")])])]),e("p",[a._v("2.3. Mount your labstorage over SSHFS to your local computer:")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("For OS X and macOS")]),a._v(" "),e("p",[a._v("Run this code without any changes since we defined your labname above.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("sshfs "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage -o follow_symlinks -o "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("volname")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v('-storage"')]),a._v("\n")])])])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("For Linux (Debian)")]),a._v(" "),e("p",[a._v("Run this code without any changes since we defined your labname above.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("sshfs "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage -o follow_symlinks\n")])])])]),a._v(" "),e("p",[e("strong",[a._v("Simplify future access")])]),a._v(" "),e("p",[a._v("You can make an alias in your profile configuration file. This allows you to connect to the lab storage on your local computer with a simple command.")]),a._v(" "),e("p",[a._v("2.4. Connect to HUNT Cloud VPN")]),a._v(" "),e("p",[a._v("2.5. Make an alias in your profile configuration:")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("For OS X and macOS")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"alias '),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-mount='sshfs "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v(": ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage -o follow_symlinks -o volname="),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("'\"")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.profile\n")])])]),e("p",[a._v("The above example adds the alias to your "),e("code",[a._v("~/.profile")]),a._v(" file. Depending on your preferences you may want to add this to other profile/rc config such as "),e("code",[a._v("~/.bash_profile")]),a._v(", "),e("code",[a._v("~/.bashrc")]),a._v(", or "),e("code",[a._v("~/.zshrc")]),a._v(").")])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("For Linux (Debian)")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"alias '),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-mount='sshfs "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v(": ~/"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage -o follow_symlinks'\"")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.profile\n")])])]),e("p",[a._v("The above example adds the alias to your "),e("code",[a._v("~/.profile")]),a._v(" file. Depending on your preferences you may want to add this to other profile/rc config such as "),e("code",[a._v("~/.bash_profile")]),a._v(", "),e("code",[a._v("~/.bashrc")]),a._v(", or "),e("code",[a._v("~/.zshrc")]),a._v(").")])]),a._v(" "),e("p",[a._v("2.6 Source your new alias.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.profile\n")])])]),e("p",[a._v("2.7 Mount your storage:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("labname"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("-storage\n")])])]),e("p",[a._v("That's it.\nWith a little bit of luck you should be able to find your lab folders in \"Finder\"...\nIf not, don't hesitate to contact us "),e("a",{attrs:{href:"/contact"}},[a._v("here")]),a._v(" so we can improve this guide together.")]),a._v(" "),e("h2",{attrs:{id:"good-to-know-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#good-to-know-commands"}},[a._v("#")]),a._v(" Good to know commands")]),a._v(" "),e("h3",{attrs:{id:"unmount-your-lab-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unmount-your-lab-storage"}},[a._v("#")]),a._v(" Unmount your lab storage")]),a._v(" "),e("p",[a._v("If you wish to stop the mount before you turn off your computer or vpn, you can turn it off with this command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("umount")]),a._v(" ~/"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("labname"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("-storage\n")])])]),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),e("h3",{attrs:{id:"installation-on-macos-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-macos-11"}},[a._v("#")]),a._v(" Installation on macOS 11+")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("Read more")]),a._v(" "),e("p",[a._v("Brew packages above are deprecated and if you are on new version or could not install old way download\nmacFUSE and SSHFS from "),e("a",{attrs:{href:"https://osxfuse.github.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("osxfuse.github.io"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Download and open macFUSE:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(577),alt:"macFUSE-1-dmg.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Start installation and confirm that you trust the developer:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(578),alt:"macFUSE-2-Install-guide.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Read the info, then continue:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(579),alt:"macFUSE-3-Install.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Approve if you want the installation to continue:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(580),alt:"macFUSE-4-Install.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Switch to Security and privacy in System Preferences:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(581),alt:"macFUSE-5-Security-and-Privacy-open.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Confirm if you want to allow software from this developer to be used in the system,\nallowing this is necessary for sshfs to work:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(582),alt:"macFUSE-5-Security-and-Privacy-allow.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Restart the system immediately if you plan to install sshfs:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(583),alt:"macFUSE-6-Install-restart.png"}})])])]),a._v(" "),e("p",[a._v("After restarting the system, when necessary drivers are loaded, you can continue installing sshfs.")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Download and open sshfs:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(584),alt:"sshfs-1-install.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Confirm if you agree with license agreement:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(585),alt:"sshfs-2-install-agree.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Approve if you want the installation to continue:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(586),alt:"sshfs-3-install-approve.png"}})])]),a._v(" "),e("li",[e("p",[a._v("Finish:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(587),alt:"sshfs-4-install-finish.png"}})])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);