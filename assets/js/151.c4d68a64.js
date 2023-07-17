(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1033:function(t,s,a){"use strict";a.r(s);var n=a(41),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fsl"}},[t._v("#")]),t._v(" FSL")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FSL"),a("OutboundLink")],1),t._v(" is a comprehensive library of image analysis and statistical tools for fMRI, MRI and DTI brain imaging data.")])]),t._v(" "),a("p",[t._v("The FSL suite consists of various command line tools, as well as simple GUIs for its core analysis pipelines.\nAmong others, FSL offers implementations of standard GLM analysis, white matter tractography, tissue segmentation, affine and non-linear co-registration, and independent component analysis ("),a("a",{attrs:{href:"http://neuro.debian.net/pkgs/fsl-complete.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source: Neurodebian"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("(1) Use "),a("a",{attrs:{href:"https://neuro.debian.net/blog/2012/2012-03-09_parallelize_fsl_with_condor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTCondor"),a("OutboundLink")],1),t._v("\nwith FSL to speed up analysis by running the tasks in parallel.")]),t._v(" "),a("p",[t._v("(2) "),a("a",{attrs:{href:"https://users.fmrib.ox.ac.uk/~moisesf/Bedpostx_GPU/Installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bedpostx"),a("OutboundLink")],1),t._v(" also supports "),a("RouterLink",{attrs:{to:"/do-science/tools/technical/gpu/"}},[t._v("GPU")]),t._v(", which provides significantly faster results on large datasets.")],1)]),t._v(" "),a("h2",{attrs:{id:"installation-using-conda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-using-conda"}},[t._v("#")]),t._v(" Installation using Conda")]),t._v(" "),a("p",[t._v("A simple way if you manage your dependencies with "),a("RouterLink",{attrs:{to:"/do-science/tools/analytical/conda/"}},[t._v("Conda")]),t._v(" is to install the "),a("a",{attrs:{href:"https://anaconda.org/conda-forge/fslpy",target:"_blank",rel:"noopener noreferrer"}},[t._v("FSLpy package"),a("OutboundLink")],1),t._v(" in your environment:")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("conda "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -c conda-forge fslpy\n")])])]),a("h2",{attrs:{id:"installation-using-flsinstaller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-using-flsinstaller"}},[t._v("#")]),t._v(" Installation using flsinstaller")]),t._v(" "),a("p",[t._v("You may install FSL directly on your lab machine. We recoomend that your read up on the official "),a("a",{attrs:{href:"https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation/Linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("FSL installation"),a("OutboundLink")],1),t._v(" documentation if you choose this path.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Requirement")]),t._v(" "),a("p",[t._v("The installation require Python 2.")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gist.github.com/cffe4e955249bdde6985d4232a618ab8.git ~/fslinstaller\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/work/software/FSL\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /mnt/scratch/tmp\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TMP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/mnt/scratch/tmp/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /mnt/work/software/FSL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" python ~/fslinstaller/fslinstaller.py\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf ~/fslinstaller\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Output log from installation")]),t._v(" "),a("p",[t._v("This is an example of expected output for a successful installation:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("--- FSL Installer - Version 3.0.15 ---\nWhen asked a question, the default answer is given in square brackets.\nHit the Enter key to accept this default answer.\nWhere would you like the FSL install to be (including the FSL folder name)? [/usr/local/fsl]: /mnt/work/software/FSL/fsl\nDownloading...\nChecking FSL package\n[OK] File downloaded\nInstalling FSL software version 6.0.1...\n[OK] FSL software installed.\nPerforming post install tasks\nStage 1\nBy installing this python distribution you agree to the license terms in\n/mnt/work/software/FSL/fsl/fslpython/LICENSE.txt\n100%\nStage 2\n100%\n/tmp/fslpythonYBC3/fslpython_miniconda_installer.log\n100%\nPost install setup complete\n[OK] Post installation setup complete\n")])])])]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Based on "),a("a",{attrs:{href:"https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation/ShellSetup",target:"_blank",rel:"noopener noreferrer"}},[t._v("shell setup"),a("OutboundLink")],1),t._v(", add the following to your "),a("code",[t._v(".profile")]),t._v(" or "),a("code",[t._v(".bashrc")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('PATH="$PATH:/mnt/work/software/fsl/bin"\nexport FSLDIR=/mnt/work/software/fsl\nsource "${FSLDIR}/etc/fslconf/fsl.sh"\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);