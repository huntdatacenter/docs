(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{779:function(t,e,a){t.exports=a.p+"assets/img/Preferences_and_MATLAB_R2022b_-_academic_use-2.3c5e1842.png"},998:function(t,e,a){"use strict";a.r(e);var s=a(41),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"matlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[t._v("#")]),t._v(" MATLAB")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://www.mathworks.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MATLAB"),s("OutboundLink")],1),t._v(" is a computing environment developed by MatWorks for efficient matrix manipulations and other handy computing tools.")])]),t._v(" "),s("p",[t._v("This guide covers the installation of MATLAB on unmanaged On-demand and BLUE machines. "),s("a",{attrs:{href:"/contat"}},[t._v("Contact us")]),t._v(" for installations on your "),s("RouterLink",{attrs:{to:"/do-science/faq/compute/#machine-types"}},[t._v("home machine")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("MATLAB in HUNT Workbench")]),t._v(" "),s("p",[t._v("Head over to the "),s("RouterLink",{attrs:{to:"/do-science/hunt-workbench/faq/#matlab"}},[t._v("MATLAB FAQ")]),t._v(" in our HUNT Workbench section to learn more about the setup in your workbench environment.")],1)]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-download"}},[t._v("1. Download")])]),s("li",[s("a",{attrs:{href:"#_2-activate-the-license"}},[t._v("2. Activate the license")])]),s("li",[s("a",{attrs:{href:"#_3-install"}},[t._v("3. Install")])]),s("li",[s("a",{attrs:{href:"#_4-run"}},[t._v("4. Run")])]),s("li",[s("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")])])])]),s("p"),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Requirements")]),t._v(" "),s("ul",[s("li",[t._v("An unmanaged On-demand or BLUE machine where you have root access.")]),t._v(" "),s("li",[t._v("A working "),s("RouterLink",{attrs:{to:"/do-science/tools/technical/x2go/"}},[t._v("X2Go server")]),t._v(" installation on this on this machine.")],1),t._v(" "),s("li",[t._v("Access to the MATLAB software binaries for Linux from your organizaton.")]),t._v(" "),s("li",[t._v("Access to a MATLAB license for the users in your lab.")])])]),t._v(" "),s("h2",{attrs:{id:"_1-download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-download"}},[t._v("#")]),t._v(" 1. Download")]),t._v(" "),s("p",[t._v("1.1 Download the MATLAB software for Linux on your local computer (client). We recommend that you choose a stable "),s("code",[t._v("beta")]),t._v(" version (for example, 2022b) to ensure a reliable installation.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("For NTNU users")]),t._v(" "),s("p",[t._v("Log into "),s("a",{attrs:{href:"https://software.ntnu.no/ntnu/MATLAB",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTNU's software repository for MATLAB"),s("OutboundLink")],1),t._v(",\nchoose your desired version in the top right corner and download on your local computer.")])]),t._v(" "),s("p",[t._v("1.2. Transfer MATLAB to your preferred folder in your lab machine (for example "),s("code",[t._v("/mnt/scratch/MATLAB/")]),t._v(")")]),t._v(" "),s("p",[t._v("1.3. Log into your lab machine and unpack the zip file in your folder.")]),t._v(" "),s("p",[t._v("Install dependencies:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" libnss3\n")])])]),s("p",[t._v("Unzip MATLAB installer:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MATLABfile.zip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Make all files in your MATLAB-folder executables: "),s("code",[t._v("chmod -R 777 <MATLAB-folder>")]),t._v(" (e.g. /mnt/scratch/MATLAB/). This is a simple fix so you can run the files within subfolders as required by MATLAB.")])]),t._v(" "),s("h2",{attrs:{id:"_2-activate-the-license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-activate-the-license"}},[t._v("#")]),t._v(" 2. Activate the license")]),t._v(" "),s("p",[t._v("2.1 Identify the required license information from your host organization. The content is dependent on your organizations license.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("For NTNU users")]),t._v(" "),s("p",[t._v("The exact content of this files is described in "),s("a",{attrs:{href:"https://software.ntnu.no/ntnu/MATLAB",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTNU's repository for MATLAB"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("2.2 Create a file named "),s("code",[t._v("license.dat")]),t._v(" with your license information in your "),s("code",[t._v("<MATLAB-folder>")]),t._v(".")]),t._v(" "),s("p",[t._v("In the principal example below, you will need you to replace "),s("code",[t._v("<license-server-address>")]),t._v(", "),s("code",[t._v("<key1>")]),t._v(" and "),s("code",[t._v("<key2>")]),t._v(" with an URL-address and strings provided by your host institutions license:")]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[t._v("SERVER <license-server-address> <key1> <key2>\nUSE_SERVER\n\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v('Make sure you add a new/empty line after "USE_SERVER".')])]),t._v(" "),s("h2",{attrs:{id:"_3-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-install"}},[t._v("#")]),t._v(" 3. Install")]),t._v(" "),s("p",[t._v("The below steps require the code to be run in "),s("code",[t._v("xterm")]),t._v(" started from X2GO on the machine holding the MATLAB files downloaded in the above steps.")]),t._v(" "),s("p",[t._v("3.1. Prepare target directory:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/work/software/matlab_r2022b\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/scratch/tmp\n")])])]),s("p",[t._v("3.2 Go to your MATLAB installation folder (e.g. /mnt/scratch/software/matlab_r2022b) and run the installer:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./install -downloadFolder /mnt/scratch/software/matlab_r2022b -tmpdir /mnt/scratch/tmp -destinationFolder /mnt/work/software/matlab_r2022b\n")])])]),s("p",[t._v("Note that you will need to update the MATLAB version in the above code to the version your are installing.")]),t._v(" "),s("p",[t._v("3.3 During the installation choose: "),s("code",[t._v("Use a File Installation Key")])]),t._v(" "),s("p",[t._v("3.4. Choose "),s("code",[t._v("I have the File Installation Key for my license")]),t._v(" and enter the key (these are found on you software repository)")]),t._v(" "),s("p",[t._v("3.5. Follow the installer and choose the packages you want.")]),t._v(" "),s("p",[t._v("3.6. When the installer asks for your product activation, choose the "),s("code",[t._v("non internet")]),t._v(" option and provide the location of the "),s("code",[t._v("license.dat")]),t._v(" file previously generated.")]),t._v(" "),s("p",[t._v("3.7. If successful, your should see "),s("code",[t._v("product activation message")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"_4-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-run"}},[t._v("#")]),t._v(" 4. Run")]),t._v(" "),s("p",[s("strong",[t._v("Run in command line")])]),t._v(" "),s("p",[t._v("If you're fine with command lines, run "),s("code",[t._v("MATLAB")]),t._v(" directly in your shell. Read more in "),s("a",{attrs:{href:"https://se.mathworks.com/help/matlab/ref/matlablinux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MathWorks documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Run in the graphical interface")])]),t._v(" "),s("p",[t._v("If you prefer MATLAB's graphical interface, run "),s("code",[t._v("MATLAB")]),t._v(" in your terminal ("),s("code",[t._v("xterm")]),t._v(") started in "),s("RouterLink",{attrs:{to:"/do-science/tools/technical/x2go/"}},[t._v("X2GO")]),t._v(".")],1),t._v(" "),s("p",[t._v("Open X2Go, connect to your lab machine where you installed MATLAB and run the following command in "),s("code",[t._v("xterm")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("/usr/bin/xterm -e matlab\n")])])]),s("p",[t._v("or with full path e.g.:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("/usr/bin/xterm -e /mnt/work/software/matlab_r2022b/bin/matlab\n")])])]),s("p",[t._v("For the example above, you will need to update the MATLAB version to the one you just installed.")]),t._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("p",[t._v("Here are are collection of known issues.")]),t._v(" "),s("h4",{attrs:{id:"why-can-t-matlab-find-the-packages-i-choose-to-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-matlab-find-the-packages-i-choose-to-install"}},[t._v("#")]),t._v(" Why can't MATLAB find the packages I choose to install?")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Read more")]),t._v(" "),s("p",[t._v("One known issue is that sometimes the latest MATLAB version compiled by some universities do miss some packages. Try to install a slightly older version. "),s("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for assistance if this do not work.")])]),t._v(" "),s("h4",{attrs:{id:"can-i-install-the-code-without-sudo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-i-install-the-code-without-sudo"}},[t._v("#")]),t._v(" Can I install the code without sudo?")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Read more")]),t._v(" "),s("p",[t._v("No, not in an easy way. Thus, either we have to install on "),s("code",[t._v("home")]),t._v(" machines, or your can install these yourself on unmanaged iaas and blue machines where you get root. "),s("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" if you need MATLAB on your home machine.")])]),t._v(" "),s("h4",{attrs:{id:"my-product-activation-do-not-seem-to-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-product-activation-do-not-seem-to-work"}},[t._v("#")]),t._v(" My product activation do not seem to work?")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Read more")]),t._v(" "),s("p",[t._v("We need to open for traffic from your lab to your organization's license server. "),s("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for network openings.")])]),t._v(" "),s("h4",{attrs:{id:"why-is-the-live-editor-not-working"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-live-editor-not-working"}},[t._v("#")]),t._v(" Why is the live editor not working?")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Read more")]),t._v(" "),s("p",[t._v("If MATLAB complains that Live editor is unable to run in the current system configuration it is important to check if libnss3 is installed.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dpkg -s libnss3\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If not installed run")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libnss3\n")])])])]),t._v(" "),s("h4",{attrs:{id:"why-is-my-matlab-installation-stuck"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-is-my-matlab-installation-stuck"}},[t._v("#")]),t._v(" Why is my MATLAB installation stuck?")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Read more")]),t._v(" "),s("p",[t._v("If the installation was progressing and then stuck at some point it is important to check disk space "),s("code",[t._v("df -h")]),t._v(". In some cases "),s("code",[t._v("/tmp")]),t._v(" directory may get filled up. We usually recommend setting alternative tmp before running install:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/scratch/tmp\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/mnt/scratch/tmp\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TEMP_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/mnt/scratch/tmp\n")])])])]),t._v(" "),s("h4",{attrs:{id:"macos-cannot-copy-paste-in-matlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-cannot-copy-paste-in-matlab"}},[t._v("#")]),t._v(" MacOS - cannot copy-paste in MATLAB")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Read more")]),t._v(" "),s("p",[t._v("If standard copy-pasting is not working for you, you might want to change your keyboard shortcuts settings in MATLAB")]),t._v(" "),s("p",[s("code",[t._v("Matlab --\x3e Preferences --\x3e Keyboard --\x3e Shortcuts --\x3e select preffered keyboard")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(779),alt:"image_1"}})])])])}),[],!1,null,null,null);e.default=o.exports}}]);