(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{736:function(r,e,t){"use strict";t.r(e);var a=t(40),s=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"freesurfer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#freesurfer"}},[r._v("#")]),r._v(" Freesurfer")]),r._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"https://surfer.nmr.mgh.harvard.edu/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Freesurfer"),t("OutboundLink")],1),r._v(" is an open source\nsoftware suite for processing and analyzing (human) brain MRI images.")])]),r._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[r._v("#")]),r._v(" Installation")]),r._v(" "),t("p",[r._v("Check if Freesurfer is already installed in software directory:")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("ls /mnt/work/software\n")])])]),t("p",[r._v("If not installed, download the Freesurfer package:")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("wget -O /mnt/work/software/freesurfer7.tar.gz 'https://surfer.nmr.mgh.harvard.edu/pub/dist/freesurfer/7.2.0/freesurfer-linux-ubuntu18_amd64-7.2.0.tar.gz'\n")])])]),t("p",[r._v("Then, create a directory and unpack the archive:")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("mkdir -p /mnt/work/software/freesurfer\ntar -C /mnt/work/software/ -xzvf /mnt/work/software/freesurfer7.tar.gz\n")])])]),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[r._v("#")]),r._v(" Configuration")]),r._v(" "),t("p",[r._v("Add the following lines to your "),t("code",[r._v("~/.bashrc")]),r._v(" config to be able to run freesurfer tools:")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('PATH="$PATH:/mnt/work/software/freesurfer/bin"\n\nexport FREESURFER_HOME=/mnt/work/software/freesurfer\nexport FSFAST_HOME=/mnt/work/software/freesurfer/fsfast\nexport FSF_OUTPUT_FORMAT=nii\nexport SUBJECTS_DIR=/mnt/work/software/freesurfer/subjects\nexport MNI_DIR=/mnt/work/software/freesurfer/mni\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);