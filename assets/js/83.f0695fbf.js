(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1023:function(a,t,e){"use strict";e.r(t);var s=e(41),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_7z"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7z"}},[a._v("#")]),a._v(" 7z")]),a._v(" "),s("p",[s("strong",[a._v("This guide explain how you can install, compress and decompress archives in your lab with the "),s("a",{attrs:{href:"https://www.7-zip.org/7z.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("7z"),s("OutboundLink")],1),a._v(" software, such as zip files.")])]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#installation"}},[a._v("Installation")]),s("ul",[s("li",[s("a",{attrs:{href:"#install-7z-on-your-lab-machine"}},[a._v("Install 7z on your lab machine")])]),s("li",[s("a",{attrs:{href:"#install-7z-on-your-local-computer"}},[a._v("Install 7z on your local computer")])])])]),s("li",[s("a",{attrs:{href:"#extract-an-archive"}},[a._v("Extract an archive")])]),s("li",[s("a",{attrs:{href:"#compress-small-folders"}},[a._v("Compress small folders")])]),s("li",[s("a",{attrs:{href:"#compress-large-folders"}},[a._v("Compress large folders")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("h3",{attrs:{id:"install-7z-on-your-lab-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-7z-on-your-lab-machine"}},[a._v("#")]),a._v(" Install 7z on your lab machine")]),a._v(" "),s("p",[a._v("Log into your lab machine and run the following code:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" p7zip-full\n")])])]),s("h3",{attrs:{id:"install-7z-on-your-local-computer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-7z-on-your-local-computer"}},[a._v("#")]),a._v(" Install 7z on your local computer")]),a._v(" "),s("p",[a._v("You can also install the 7z software on your own local computer:")]),a._v(" "),s("details",{staticClass:"custom-block expander",attrs:{id:"detail-2-windows"}},[s("summary",[s("a",{staticClass:"header-anchor",attrs:{href:"#detail-2-windows",onclick:'document.querySelector("#detail-2-windows").setAttribute("open", "")'}},[a._v("#")]),a._v(" Windows")]),s("p",[a._v("Download 7-Zip installer from official pages: "),s("a",{attrs:{href:"https://www.7-zip.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("7-Zip website"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Note: First option from download list on 7-zip website linked above should work in most cases.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("NTNU users")]),a._v(" "),s("p",[a._v("NTNU users can install 7-zip from the "),s("a",{attrs:{href:"https://innsida.ntnu.no/wiki/-/wiki/English/Software+overview",target:"_blank",rel:"noopener noreferrer"}},[a._v("Software Center"),s("OutboundLink")],1),a._v("."),s("br"),s("br")])])]),s("details",{staticClass:"custom-block expander",attrs:{id:"detail-2-macos"}},[s("summary",[s("a",{staticClass:"header-anchor",attrs:{href:"#detail-2-macos",onclick:'document.querySelector("#detail-2-macos").setAttribute("open", "")'}},[a._v("#")]),a._v(" Mac OS")]),s("p",[a._v("We recommend opening your zip files with "),s("a",{attrs:{href:"https://www.keka.io/en/download",target:"_blank",rel:"noopener noreferrer"}},[a._v("Keka"),s("OutboundLink")],1),a._v(".")])]),s("details",{staticClass:"custom-block expander",attrs:{id:"detail-2-ubuntu"}},[s("summary",[s("a",{staticClass:"header-anchor",attrs:{href:"#detail-2-ubuntu",onclick:'document.querySelector("#detail-2-ubuntu").setAttribute("open", "")'}},[a._v("#")]),a._v(" Ubuntu")]),s("p",[a._v("Install 7-zip command line tool using this command:")]),a._v(" "),s("CopyInput",{attrs:{value:"sudo apt update && sudo apt-get install p7zip-full",label:"",prefix:""}})],1),s("h2",{attrs:{id:"extract-an-archive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extract-an-archive"}},[a._v("#")]),a._v(" Extract an archive")]),a._v(" "),s("details",{staticClass:"custom-block expander",attrs:{id:"detail-3-windows"}},[s("summary",[s("a",{staticClass:"header-anchor",attrs:{href:"#detail-3-windows",onclick:'document.querySelector("#detail-3-windows").setAttribute("open", "")'}},[a._v("#")]),a._v(" Windows")]),s("p",[s("img",{attrs:{src:e(800),alt:"7zip_picture"}})])]),s("details",{staticClass:"custom-block expander",attrs:{id:"detail-3-macos"}},[s("summary",[s("a",{staticClass:"header-anchor",attrs:{href:"#detail-3-macos",onclick:'document.querySelector("#detail-3-macos").setAttribute("open", "")'}},[a._v("#")]),a._v(" Mac OS")]),s("p",[a._v("Right click on your archive and select "),s("strong",[a._v("Open With")]),a._v(" --\x3e "),s("RouterLink",{attrs:{to:"/do-science/tools/transfer/7z/#detail-2-macos"}},[s("strong",[a._v("Keka")])]),a._v(".")],1)]),s("details",{staticClass:"custom-block expander",attrs:{id:"detail-3-ubuntu"}},[s("summary",[s("a",{staticClass:"header-anchor",attrs:{href:"#detail-3-ubuntu",onclick:'document.querySelector("#detail-3-ubuntu").setAttribute("open", "")'}},[a._v("#")]),a._v(" Ubuntu / Linux")]),s("p",[a._v("Use the following code to extract an archive on your lab machine:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- extract 7z")]),a._v("\n7za e "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("myfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".7z\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- extract zip")]),a._v("\n7za e "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("myfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".zip\n")])])])]),s("h2",{attrs:{id:"compress-small-folders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compress-small-folders"}},[a._v("#")]),a._v(" Compress small folders")]),a._v(" "),s("p",[a._v("This command allows you to compress and encrypt a folder in your lab:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- principal examples")]),a._v("\n7za a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename-for-new-file.7z"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("lab-folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ul",[s("li",[a._v("Replace "),s("code",[a._v("<filename-for-new-file.7z>")]),a._v(" with the name for your to-be compressed archive.")]),a._v(" "),s("li",[a._v("Replace "),s("code",[a._v("<lab-folder>")]),a._v(" with the path of the folder (or file) in your lab that you aim to compress, for example "),s("strong",[s("code",[a._v("/mnt/cargo/export-folder/")])]),a._v(".")]),a._v(" "),s("li",[a._v("Replace "),s("code",[a._v("<key>")]),a._v(" with a key (passphrase) that you generate. This key is used to encrypt your archive. We recommend that your choose a "),s("RouterLink",{attrs:{to:"/do-science/lab-access/configure-ssh/#_3-2-design-a-passphrase"}},[a._v("passphrase")]),a._v(" of at least 12 characters.")],1)]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Secure key transfers")]),a._v(" "),s("p",[a._v("Transfer your key in a separate channel than your compressed file. For example, you may consider to transfer your compressed file over SSH or filesender.no, and to transfer your archive key over the encrypted mobile app Signal.")])]),a._v(" "),s("h2",{attrs:{id:"compress-large-folders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compress-large-folders"}},[a._v("#")]),a._v(" Compress large folders")]),a._v(" "),s("p",[a._v("For larger folders we recommend to split your compressed file into several parts for easier transfers. The code below split your folder into 100G chunks:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("7za a -v100G "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename-for-new-file.7z"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("lab-folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports},800:function(a,t,e){a.exports=e.p+"assets/img/1.picture_7-zip.af8d48cd.png"}}]);