(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{834:function(t,e,a){"use strict";a.r(e);var s=a(41),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"matlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[t._v("#")]),t._v(" MATLAB")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://www.mathworks.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MATLAB"),a("OutboundLink")],1),t._v(" is a computing environment developed by MatWorks for efficient matrix manipulations and other handy computing tools.")])]),t._v(" "),a("p",[t._v("This guide covers the installation of MATLAB on unmanaged On-demand and BLUE machines. "),a("a",{attrs:{href:"/contat"}},[t._v("Contact us")]),t._v(" for installations on your "),a("RouterLink",{attrs:{to:"/do-science/faq/compute/#machine-types"}},[t._v("home machine")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("MATLAB in HUNT Workbench")]),t._v(" "),a("p",[t._v("Head over to the "),a("RouterLink",{attrs:{to:"/do-science/hunt-workbench/faq/#matlab"}},[t._v("MATLAB FAQ")]),t._v(" in our HUNT Workbench section to learn more about the setup in your workbench environment.")],1)]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-download"}},[t._v("1. Download")])]),a("li",[a("a",{attrs:{href:"#_2-activate-the-license"}},[t._v("2. Activate the license")])]),a("li",[a("a",{attrs:{href:"#_3-install"}},[t._v("3. Install")])]),a("li",[a("a",{attrs:{href:"#_4-run"}},[t._v("4. Run")])]),a("li",[a("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Requirements")]),t._v(" "),a("ul",[a("li",[t._v("An unmanaged On-demand or BLUE machine where you have root access.")]),t._v(" "),a("li",[t._v("A working "),a("RouterLink",{attrs:{to:"/do-science/tools/technical/x2go/"}},[t._v("X2Go server")]),t._v(" installation on this on this machine.")],1),t._v(" "),a("li",[t._v("Access to the MATLAB software binaries for Linux from your organizaton.")]),t._v(" "),a("li",[t._v("Access to a MATLAB license for the users in your lab.")])])]),t._v(" "),a("h2",{attrs:{id:"_1-download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-download"}},[t._v("#")]),t._v(" 1. Download")]),t._v(" "),a("p",[t._v("1.1 Download the MATLAB software for Linux on your local computer (client). We recommend that you choose a stable "),a("code",[t._v("beta")]),t._v(" version (for example, 2022b) to ensure a reliable installation.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("For NTNU users")]),t._v(" "),a("p",[t._v("Log into "),a("a",{attrs:{href:"https://software.ntnu.no/ntnu/MATLAB",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTNU's software repository for MATLAB"),a("OutboundLink")],1),t._v(",\nchoose your desired version in the top right corner and download on your local computer.")])]),t._v(" "),a("p",[t._v("1.2. Transfer MATLAB to your preferred folder in your lab machine (for example "),a("code",[t._v("/mnt/scratch/MATLAB/")]),t._v(")")]),t._v(" "),a("p",[t._v("1.3. Log into your lab machine and unpack the zip file in your folder.")]),t._v(" "),a("p",[t._v("Install dependencies:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" libnss3\n")])])]),a("p",[t._v("Unzip MATLAB installer:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MATLABfile.zip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Make all files in your MATLAB-folder executables: "),a("code",[t._v("chmod -R 777 <MATLAB-folder>")]),t._v(" (e.g. /mnt/scratch/MATLAB/). This is a simple fix so you can run the files within subfolders as required by MATLAB.")])]),t._v(" "),a("h2",{attrs:{id:"_2-activate-the-license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-activate-the-license"}},[t._v("#")]),t._v(" 2. Activate the license")]),t._v(" "),a("p",[t._v("2.1 Identify the required license information from your host organization. The content is dependent on your organizations license.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("For NTNU users")]),t._v(" "),a("p",[t._v("The exact content of this files is described in "),a("a",{attrs:{href:"https://software.ntnu.no/ntnu/MATLAB",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTNU's repository for MATLAB"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("2.2 Create a file named "),a("code",[t._v("license.dat")]),t._v(" with your license information in your "),a("code",[t._v("<MATLAB-folder>")]),t._v(".")]),t._v(" "),a("p",[t._v("In the principal example below, you will need you to replace "),a("code",[t._v("<license-server-address>")]),t._v(", "),a("code",[t._v("<key1>")]),t._v(" and "),a("code",[t._v("<key2>")]),t._v(" with an URL-address and strings provided by your host institutions license:")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[t._v("SERVER <license-server-address> <key1> <key2>\nUSE_SERVER\n\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v('Make sure you add a new/empty line after "USE_SERVER".')])]),t._v(" "),a("h2",{attrs:{id:"_3-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-install"}},[t._v("#")]),t._v(" 3. Install")]),t._v(" "),a("p",[t._v("The below steps require the code to be run in "),a("code",[t._v("xterm")]),t._v(" started from X2GO on the machine holding the MATLAB files downloaded in the above steps.")]),t._v(" "),a("p",[t._v("3.1. Prepare target directory:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/work/software/MATLAB_r2019b\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/scratch/tmp\n")])])]),a("p",[t._v("3.2 Go to your MATLAB installation folder (e.g. /mnt/scratch/software/MATLAB_r2019b) and run the installer:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./install -downloadFolder /mnt/scratch/software/MATLAB_r2019b -tmpdir /mnt/scratch/tmp -destinationFolder /mnt/work/software/MATLAB_r2019b\n")])])]),a("p",[t._v("Note that you will need to update the MATLAB version in the above code to the version your are installing.")]),t._v(" "),a("p",[t._v("3.3 During the installation choose: "),a("code",[t._v("Use a File Installation Key")])]),t._v(" "),a("p",[t._v("3.4. Choose "),a("code",[t._v("I have the File Installation Key for my license")]),t._v(" and enter the key (these are found on you software repository)")]),t._v(" "),a("p",[t._v("3.5. Follow the installer and choose the packages you want.")]),t._v(" "),a("p",[t._v("3.6. When the installer asks for your product activation, choose the "),a("code",[t._v("non internet")]),t._v(" option and provide the location of the "),a("code",[t._v("license.dat")]),t._v(" file previously generated.")]),t._v(" "),a("p",[t._v("3.7. If successful, your should see "),a("code",[t._v("product activation message")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"_4-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-run"}},[t._v("#")]),t._v(" 4. Run")]),t._v(" "),a("p",[a("strong",[t._v("Run in command line")])]),t._v(" "),a("p",[t._v("If you're fine with command lines, run "),a("code",[t._v("MATLAB")]),t._v(" directly in your shell. Read more in "),a("a",{attrs:{href:"https://se.mathworks.com/help/matlab/ref/matlablinux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MathWorks documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Run in the graphical interface")])]),t._v(" "),a("p",[t._v("If you prefer MATLAB's graphical interface, run "),a("code",[t._v("MATLAB")]),t._v(" in your terminal ("),a("code",[t._v("xterm")]),t._v(") started in "),a("RouterLink",{attrs:{to:"/do-science/tools/technical/x2go/"}},[t._v("X2GO")]),t._v(".")],1),t._v(" "),a("p",[t._v("Open X2Go, connect to your lab machine where you installed MATLAB and run the following command in "),a("code",[t._v("xterm")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/usr/bin/xterm -e MATLAB\n")])])]),a("p",[t._v("or with full path e.g.:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/usr/bin/xterm -e /mnt/work/software/MATLAB2019b/bin/MATLAB\n")])])]),a("p",[t._v("For the example above, you will need to update the MATLAB version to the one you just installed.")]),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("p",[t._v("Here are are collection of known issues.")]),t._v(" "),a("h4",{attrs:{id:"why-can-t-matlab-find-the-packages-i-choose-to-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-matlab-find-the-packages-i-choose-to-install"}},[t._v("#")]),t._v(" Why can't MATLAB find the packages I choose to install?")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Read more")]),t._v(" "),a("p",[t._v("One known issue is that sometimes the latest MATLAB version compiled by some universities do miss some packages. Try to install a slightly older version. "),a("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for assistance if this do not work.")])]),t._v(" "),a("h4",{attrs:{id:"can-i-install-the-code-without-sudo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-install-the-code-without-sudo"}},[t._v("#")]),t._v(" Can I install the code without sudo?")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Read more")]),t._v(" "),a("p",[t._v("No, not in an easy way. Thus, either we have to install on "),a("code",[t._v("home")]),t._v(" machines, or your can install these yourself on unmanaged iaas and blue machines where you get root. "),a("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" if you need MATLAB on your home machine.")])]),t._v(" "),a("h4",{attrs:{id:"my-product-activation-do-not-seem-to-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-product-activation-do-not-seem-to-work"}},[t._v("#")]),t._v(" My product activation do not seem to work?")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Read more")]),t._v(" "),a("p",[t._v("We need to open for traffic from your lab to your organization's license server. "),a("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for network openings.")])]),t._v(" "),a("h4",{attrs:{id:"why-is-the-live-editor-not-working"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-live-editor-not-working"}},[t._v("#")]),t._v(" Why is the live editor not working?")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Read more")]),t._v(" "),a("p",[t._v("If MATLAB complains that Live editor is unable to run in the current system configuration it is important to check if libnss3 is installed.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("dpkg -s libnss3\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If not installed run")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libnss3\n")])])])]),t._v(" "),a("h4",{attrs:{id:"why-is-my-matlab-installation-stuck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-my-matlab-installation-stuck"}},[t._v("#")]),t._v(" Why is my MATLAB installation stuck?")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Read more")]),t._v(" "),a("p",[t._v("If the installation was progressing and then stuck at some point it is important to check disk space "),a("code",[t._v("df -h")]),t._v(". In some cases "),a("code",[t._v("/tmp")]),t._v(" directory may get filled up. We usually recommend setting alternative tmp before running install:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/scratch/tmp\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/mnt/scratch/tmp\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TEMP_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/mnt/scratch/tmp\n")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);