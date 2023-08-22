(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1001:function(a,t,n){"use strict";n.r(t);var s=n(41),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"plink"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plink"}},[a._v("#")]),a._v(" PLINK")]),a._v(" "),n("p",[n("a",{attrs:{href:"http://zzz.bwh.harvard.edu/plink/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PLINK"),n("OutboundLink")],1),a._v(" is a free, open-source whole genome association analysis toolset, designed to perform a range of basic, large-scale analyses in a computationally efficient manner.")]),a._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#how-to-install-plink-1"}},[a._v("How to install PLINK 1")])]),n("li",[n("a",{attrs:{href:"#how-to-install-plink-1-9"}},[a._v("How to install PLINK 1.9")])]),n("li",[n("a",{attrs:{href:"#how-to-install-plink-2"}},[a._v("How to install PLINK 2")])])])]),n("p"),a._v(" "),n("h2",{attrs:{id:"how-to-install-plink-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-plink-1"}},[a._v("#")]),a._v(" How to install PLINK 1")]),a._v(" "),n("p",[a._v("Install "),n("a",{attrs:{href:"http://zzz.bwh.harvard.edu/plink/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PLINK 1"),n("OutboundLink")],1),a._v(" with the following command:")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" plink\n")])])]),n("p",[a._v("And use the following executable:")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("plink1 --noweb\n")])])]),n("h2",{attrs:{id:"how-to-install-plink-1-9"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-plink-1-9"}},[a._v("#")]),a._v(" How to install PLINK 1.9")]),a._v(" "),n("p",[a._v("Install "),n("a",{attrs:{href:"https://www.cog-genomics.org/plink/1.9/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PLINK 1.9"),n("OutboundLink")],1),a._v(" with the following commands:")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" plink1.9\n")])])]),n("p",[a._v("And use the following executable:")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("plink1.9\n")])])]),n("p",[a._v("You can also install PLINK 1.9 with Bioconda.\nSee our "),n("a",{attrs:{href:"conda"}},[a._v("Anaconda and Bioconda")]),a._v(" tutorial for more details.")]),a._v(" "),n("h2",{attrs:{id:"how-to-install-plink-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-plink-2"}},[a._v("#")]),a._v(" How to install PLINK 2")]),a._v(" "),n("p",[a._v("Installing "),n("a",{attrs:{href:"https://www.cog-genomics.org/plink/2.0/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PLINK 2"),n("OutboundLink")],1),a._v(" is a little more cumbersome\nas it is not available in Ubuntu's package repositories.")]),a._v(" "),n("p",[a._v("You can either use "),n("RouterLink",{attrs:{to:"/do-science/tools/analytical/conda/"}},[a._v("Conda")]),a._v("\nto install "),n("a",{attrs:{href:"https://anaconda.org/bioconda/plink2",target:"_blank",rel:"noopener noreferrer"}},[a._v("Plink2 package"),n("OutboundLink")],1),a._v(" or follow with binary release below.")],1),a._v(" "),n("p",[a._v("To install package into your "),n("RouterLink",{attrs:{to:"/do-science/tools/analytical/conda/"}},[a._v("Conda")]),a._v("\nenvironment use this command:")],1),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda install -c bioconda plink2\n")])])]),n("p",[a._v("To download and unpack the binary for PLINK 2 follow these steps:")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create a local binary directory in your home directory")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/bin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Download the latest binary of PLINK 2.")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -P ~/bin/ http://s3.amazonaws.com/plink2-assets/plink2_linux_x86_64_latest.zip\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Install unzip")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unzip the archive")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" ~/bin/plink2_linux_x86_64_latest.zip -d ~/bin/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Remove archive")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" ~/bin/plink2_linux_x86_64_latest.zip\n")])])]),n("p",[a._v("You can now use the following executable:")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("plink2\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);