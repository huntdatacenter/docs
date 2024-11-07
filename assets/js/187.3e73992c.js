(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1230:function(a,s,t){"use strict";t.r(s);var n=t(41),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"plink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plink"}},[a._v("#")]),a._v(" PLINK")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://zzz.bwh.harvard.edu/plink/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PLINK"),t("OutboundLink")],1),a._v(" is a free, open-source whole genome association analysis toolset, designed to perform a range of basic, large-scale analyses in a computationally efficient manner.")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#how-to-install-plink-1"}},[a._v("How to install PLINK 1")])]),t("li",[t("a",{attrs:{href:"#how-to-install-plink-1-9"}},[a._v("How to install PLINK 1.9")])]),t("li",[t("a",{attrs:{href:"#how-to-install-plink-2"}},[a._v("How to install PLINK 2")]),t("ul",[t("li",[t("a",{attrs:{href:"#using-conda"}},[a._v("Using conda")])]),t("li",[t("a",{attrs:{href:"#using-binary-release"}},[a._v("Using binary release")])])])]),t("li",[t("a",{attrs:{href:"#troubleshooting"}},[a._v("Troubleshooting")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"how-to-install-plink-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-plink-1"}},[a._v("#")]),a._v(" How to install PLINK 1")]),a._v(" "),t("p",[a._v("Install "),t("a",{attrs:{href:"http://zzz.bwh.harvard.edu/plink/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PLINK 1"),t("OutboundLink")],1),a._v(" with the following command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" plink\n")])])]),t("p",[a._v("And use the following executable:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("plink1 --noweb\n")])])]),t("h2",{attrs:{id:"how-to-install-plink-1-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-plink-1-9"}},[a._v("#")]),a._v(" How to install PLINK 1.9")]),a._v(" "),t("p",[a._v("Install "),t("a",{attrs:{href:"https://www.cog-genomics.org/plink/1.9/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PLINK 1.9"),t("OutboundLink")],1),a._v(" with the following commands:")]),a._v(" "),t("p",[a._v("Make sure you have your personal bin directory in place:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p ~/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.profile\n")])])]),t("p",[a._v("Download the latest binary release of PLINK 1.9:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -P ~/bin/ https://s3.amazonaws.com/plink1-assets/plink_linux_x86_64_20231211.zip\n")])])]),t("p",[a._v("Unpack the archive:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v("  ~/bin/plink_linux_x86_64_20231211.zip -d ~/bin/\n")])])]),t("p",[a._v("Remove archive:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -v ~/bin/plink_linux_x86_64_20231211.zip\n")])])]),t("p",[a._v("Test by printing the version:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("plink --version\n")])])]),t("p",[a._v("You can also install PLINK 1.9 with Bioconda.\nSee our "),t("a",{attrs:{href:"conda"}},[a._v("Anaconda and Bioconda")]),a._v(" tutorial for more details.")]),a._v(" "),t("h2",{attrs:{id:"how-to-install-plink-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-plink-2"}},[a._v("#")]),a._v(" How to install PLINK 2")]),a._v(" "),t("h3",{attrs:{id:"using-conda"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-conda"}},[a._v("#")]),a._v(" Using conda")]),a._v(" "),t("p",[a._v("Installing "),t("a",{attrs:{href:"https://www.cog-genomics.org/plink/2.0/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PLINK 2"),t("OutboundLink")],1),a._v(" is a little more cumbersome\nas it is not available in Ubuntu's package repositories.")]),a._v(" "),t("p",[a._v("You can either use "),t("RouterLink",{attrs:{to:"/do-science/tools/analytical/conda/"}},[a._v("Conda")]),a._v("\nto install "),t("a",{attrs:{href:"https://anaconda.org/bioconda/plink2",target:"_blank",rel:"noopener noreferrer"}},[a._v("Plink2 package"),t("OutboundLink")],1),a._v(" or follow with binary release below.")],1),a._v(" "),t("p",[a._v("To install package into your "),t("RouterLink",{attrs:{to:"/do-science/tools/analytical/conda/"}},[a._v("Conda")]),a._v("\nenvironment use this command:")],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda install -c bioconda plink2\n")])])]),t("h3",{attrs:{id:"using-binary-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-binary-release"}},[a._v("#")]),a._v(" Using binary release")]),a._v(" "),t("p",[a._v("To download and unpack the binary for PLINK 2 follow these steps.")]),a._v(" "),t("p",[a._v("Make sure you have your personal bin directory in place:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p ~/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.profile\n")])])]),t("p",[a._v("Download the latest binary release of PLINK 2:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -P ~/bin/ http://s3.amazonaws.com/plink2-assets/plink2_linux_x86_64_latest.zip\n")])])]),t("p",[a._v("Unzip the archive:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" ~/bin/plink2_linux_x86_64_latest.zip -d ~/bin/\n")])])]),t("p",[a._v("Remove archive:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -v ~/bin/plink2_linux_x86_64_latest.zip\n")])])]),t("p",[a._v("You can now use the following executable:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("plink2\n")])])]),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),t("p",[a._v("Install unzip if missing:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);