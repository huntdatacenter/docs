(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1e3:function(a,s,t){"use strict";t.r(s);var e=t(41),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_7z"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7z"}},[a._v("#")]),a._v(" 7z")]),a._v(" "),e("p",[e("strong",[a._v("This guide explain how you can install, compress and decompress archives in your lab with the "),e("a",{attrs:{href:"https://www.7-zip.org/7z.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("7z"),e("OutboundLink")],1),a._v(" software, such as zip files.")])]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#installation"}},[a._v("Installation")]),e("ul",[e("li",[e("a",{attrs:{href:"#install-7z-on-your-lab-machine"}},[a._v("Install 7z on your lab machine")])]),e("li",[e("a",{attrs:{href:"#install-7z-on-your-local-computer"}},[a._v("Install 7z on your local computer")])])])]),e("li",[e("a",{attrs:{href:"#extract-an-archive"}},[a._v("Extract an archive")])]),e("li",[e("a",{attrs:{href:"#compress-small-folders"}},[a._v("Compress small folders")])]),e("li",[e("a",{attrs:{href:"#compress-large-folders"}},[a._v("Compress large folders")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("h3",{attrs:{id:"install-7z-on-your-lab-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-7z-on-your-lab-machine"}},[a._v("#")]),a._v(" Install 7z on your lab machine")]),a._v(" "),e("p",[a._v("Log into your lab machine and run the following code:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" p7zip-full\n")])])]),e("h3",{attrs:{id:"install-7z-on-your-local-computer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-7z-on-your-local-computer"}},[a._v("#")]),a._v(" Install 7z on your local computer")]),a._v(" "),e("p",[a._v("You can also install the 7z software on your own local computer:")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("Windows")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.7-zip.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("7-Zip website"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("Note: First option from download list on 7-zip website should work in most cases.")]),a._v(" "),e("p",[a._v("::: NTNU users\nNTNU users can install 7-zip from the "),e("a",{attrs:{href:"https://innsida.ntnu.no/wiki/-/wiki/English/Software+overview",target:"_blank",rel:"noopener noreferrer"}},[a._v("Software Center"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("OS X / MacOS")]),a._v(" "),e("p",[a._v("We recommend opening your zip files with "),e("a",{attrs:{href:"https://www.keka.io/en/download",target:"_blank",rel:"noopener noreferrer"}},[a._v("Keka"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("Ubuntu")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" p7zip-full\n")])])])]),a._v(" "),e("h2",{attrs:{id:"extract-an-archive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extract-an-archive"}},[a._v("#")]),a._v(" Extract an archive")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("Windows")]),a._v(" "),e("p",[e("img",{attrs:{src:t(733),alt:"7zip_picture"}})])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("Linux")]),a._v(" "),e("p",[a._v("Use the following code to extract an archive on your lab machine:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- extract 7z")]),a._v("\n7za e "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("myfile"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".7z\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- extract zip")]),a._v("\n7za e "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("myfile"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".zip\n")])])])]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("MacOS")]),a._v(" "),e("p",[a._v("Right click on your archive and select open with --\x3e Keka")])]),a._v(" "),e("h2",{attrs:{id:"compress-small-folders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compress-small-folders"}},[a._v("#")]),a._v(" Compress small folders")]),a._v(" "),e("p",[a._v("This command allows you to compress and encrypt a folder in your lab:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- principal examples")]),a._v("\n7za a "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename-for-new-file.7z"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("lab-folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("ul",[e("li",[a._v("Replace "),e("code",[a._v("<filename-for-new-file.7z>")]),a._v(" with the name for your to-be compressed archive.")]),a._v(" "),e("li",[a._v("Replace "),e("code",[a._v("<lab-folder>")]),a._v(" with the path of the folder (or file) in your lab that you aim to compress, for example "),e("strong",[e("code",[a._v("/mnt/cargo/export-folder/")])]),a._v(".")]),a._v(" "),e("li",[a._v("Replace "),e("code",[a._v("<key>")]),a._v(" with a key (passphrase) that you generate. This key is used to encrypt your archive. We recommend that your choose a "),e("RouterLink",{attrs:{to:"/do-science/lab-access/configure-ssh/#_3-2-design-a-passphrase"}},[a._v("passphrase")]),a._v(" of at least 12 characters.")],1)]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Secure key transfers")]),a._v(" "),e("p",[a._v("Transfer your key in a separate channel than your compressed file. For example, you may consider to transfer your compressed file over SSH or filesender.no, and to transfer your archive key over the encrypted mobile app Signal.")])]),a._v(" "),e("h2",{attrs:{id:"compress-large-folders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compress-large-folders"}},[a._v("#")]),a._v(" Compress large folders")]),a._v(" "),e("p",[a._v("For larger folders we recommend to split your compressed file into several parts for easier transfers. The code below split your folder into 100G chunks:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("7za a -v100G "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename-for-new-file.7z"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("lab-folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports},733:function(a,s,t){a.exports=t.p+"assets/img/1.picture_7-zip.af8d48cd.png"}}]);