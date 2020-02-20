(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{242:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"matlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[e._v("#")]),e._v(" Matlab")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.mathworks.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MATLAB"),a("OutboundLink")],1),e._v(" is a computing environment developed by MatWorks for efficient matrix manipulations and other handy computing tools.")]),e._v(" "),a("p",[e._v("We do provide the opportunity for MATLAB installations on managed and unmanaged machines.\nInstallation on home-nodes require us to run some code.")]),e._v(" "),a("p",[e._v("The below guide is for multi-user setup in an unmanaged environment (iaas-node).")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Dependencies")]),e._v(" "),a("p",[a("code",[e._v("Without these, it will be impossible to get MATLAB to work in your lab.")])]),e._v(" "),a("ul",[a("li",[e._v("A machine prepared for "),a("router-link",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/"}},[e._v("x2go")]),e._v(".")],1),e._v(" "),a("li",[e._v("An unmanaged machines (IAAS or BLUE machine) where you have root access.")]),e._v(" "),a("li",[e._v("Access to MATLAB software binaries for linux.")]),e._v(" "),a("li",[e._v("Access to a MATLAB license, typically provided by your organization.")])])]),e._v(" "),a("h2",{attrs:{id:"download-matlab-to-your-lab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-matlab-to-your-lab"}},[e._v("#")]),e._v(" Download MATLAB to your lab")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download the MATLAB software on your local computer (client).")]),e._v(" "),a("p",[e._v("For NTNU users, log into "),a("a",{attrs:{href:"https://software.ntnu.no/ntnu/matlab",target:"_blank",rel:"noopener noreferrer"}},[e._v("NTNU's software repository for matlab"),a("OutboundLink")],1),e._v(",\nchoose your desired version in the top right corner and download on your local computer.\nWe recommend that you skip the latest version and choose a slightly older version to ensure a reliable installation.")])]),e._v(" "),a("li",[a("p",[e._v("Transfer MATLAB to your preferred folder in your lab machine, for example /mnt/work/software/matlab/)")])]),e._v(" "),a("li",[a("p",[e._v("Unpack the zip file in your folder.")]),e._v(" "),a("p",[e._v("Install software:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v("\n")])])]),a("p",[e._v("Unzip:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("unzip")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("matlabfile.zip"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Make all files in folder executables: "),a("code",[e._v("chmod -R 777 <matlab-folder>")]),e._v(". This is a primitive fix so you are able to run the files within subfolders as required by MATLAB.")])])]),e._v(" "),a("h2",{attrs:{id:"add-a-license-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-license-file"}},[e._v("#")]),e._v(" Add a license file")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("For NTNU users, the exact content of this files is described in "),a("a",{attrs:{href:"https://software.ntnu.no/ntnu/matlab",target:"_blank",rel:"noopener noreferrer"}},[e._v("NTNU's repository for matlab"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("ul",[a("li",[e._v("Create a file named "),a("code",[e._v("license.dat")]),e._v(" with your license information. The content of this file is dependent on your organizations license. The example below will need you to replace "),a("code",[e._v("<license-server-address>")]),e._v(", "),a("code",[e._v("<key1>")]),e._v(" and "),a("code",[e._v("<key2>")]),e._v(" with an url-address and strings provided by your host institutions license page.:")])]),e._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[e._v("SERVER <license-server-address> <key1> <key2>\nUSE_SERVER\n\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v('Make sure you add a new/empty line after "USE_SERVER".')])]),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("p",[e._v("The below steps require the code to be run in "),a("code",[e._v("xterm")]),e._v(" started from X2GO on the machine holding the MATLAB files downloaded in the above steps.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Go to your matlab folder and run the installer:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo ./install\n")])])])]),e._v(" "),a("li",[a("p",[e._v("During the install choose: "),a("code",[e._v("Use a File Installation Key")])])]),e._v(" "),a("li",[a("p",[e._v("Choose "),a("code",[e._v("I have the File Installation Key for my license")]),e._v(" and enter the key (these are found on you software repository)")])]),e._v(" "),a("li",[a("p",[e._v("Follow the installer and choose the packages you want.")])]),e._v(" "),a("li",[a("p",[e._v("When the installer ask for your product activation, choose the "),a("code",[e._v("non internet")]),e._v(" option and provide the location of the "),a("code",[e._v("license.dat")]),e._v(" file previously generated.")])]),e._v(" "),a("li",[a("p",[e._v('If successful, your should see a "product activation message".')])])]),e._v(" "),a("h2",{attrs:{id:"run-matlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-matlab"}},[e._v("#")]),e._v(" Run MATLAB")]),e._v(" "),a("ul",[a("li",[e._v("If you prefer MATLAB's graphical interface, run "),a("code",[e._v("matlab")]),e._v(" in your terminal ("),a("code",[e._v("xterm")]),e._v(") started in X2GO.")]),e._v(" "),a("li",[e._v("If you're fine with command lines, run "),a("code",[e._v("matlab")]),e._v(" directly in your shell.")])]),e._v(" "),a("p",[e._v("With a little bit of luck, it's now time to celebrate with fresh coffee running your favourite test code on the fresh MATLAB. If not, here's some of our known issues:")]),e._v(" "),a("h2",{attrs:{id:"known-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),a("h3",{attrs:{id:"why-can-t-matlab-find-the-packages-i-choose-to-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-matlab-find-the-packages-i-choose-to-install"}},[e._v("#")]),e._v(" Why can't MATLAB find the packages I choose to install?")]),e._v(" "),a("p",[e._v("Some of the latest MATLAB versions compiled by some universities miss some packages.\nTry to download and install a slightly older version.")]),e._v(" "),a("h3",{attrs:{id:"can-i-install-the-code-without-sudo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-install-the-code-without-sudo"}},[e._v("#")]),e._v(" Can I install the code without sudo?")]),e._v(" "),a("p",[e._v("Not in a straight forward way.\nWe recommend that you install on a unmanaged node where you have root.")]),e._v(" "),a("h3",{attrs:{id:"my-product-activation-do-not-seem-to-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-product-activation-do-not-seem-to-work"}},[e._v("#")]),e._v(" My product activation do not seem to work?")]),e._v(" "),a("p",[e._v("We need to open for traffic from your lab to your organization's license server.\nGive us a shout "),a("a",{attrs:{href:"/contact"}},[e._v("here")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);