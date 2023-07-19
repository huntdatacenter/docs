(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{988:function(a,e,t){"use strict";t.r(e);var s=t(41),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"singularity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#singularity"}},[a._v("#")]),a._v(" Singularity")]),a._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"https://sylabs.io/guides/latest/user-guide/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Singularity"),t("OutboundLink")],1),a._v(" provides application containers for Linux that is also compatible with Docker.")])]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#install-with-conda"}},[a._v("Install with Conda")])]),t("li",[t("a",{attrs:{href:"#common-practices-and-commands"}},[a._v("Common practices and commands")]),t("ul",[t("li",[t("a",{attrs:{href:"#pull-docker-image"}},[a._v("Pull Docker image")])]),t("li",[t("a",{attrs:{href:"#run-docker-image"}},[a._v("Run Docker image")])]),t("li",[t("a",{attrs:{href:"#listing-running-containers"}},[a._v("Listing running containers")])]),t("li",[t("a",{attrs:{href:"#stop-running-container"}},[a._v("Stop running container")])]),t("li",[t("a",{attrs:{href:"#where-are-the-images-stored"}},[a._v("Where are the images stored ?")])]),t("li",[t("a",{attrs:{href:"#temporary-file-storage"}},[a._v("Temporary file storage")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"install-with-conda"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-with-conda"}},[a._v("#")]),a._v(" Install with Conda")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("Requirements")]),a._v(" "),t("ul",[t("li",[a._v("Conda (miniconda), see our "),t("RouterLink",{attrs:{to:"/do-science/tools/analytical/conda/"}},[a._v("Conda tutorial")]),a._v(" for more details.")],1),a._v(" "),t("li",[a._v("Conda channels: conda-forge, bioconda")])])]),a._v(" "),t("p",[t("strong",[a._v("Add the conda-forge channel")])]),a._v(" "),t("p",[a._v("You will need the conda-forge channel to install Singularity. If you have not set channels yet make sure to add it:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda config --add channels conda-forge\n")])])]),t("p",[t("strong",[a._v("Install singularity in conda base")])]),a._v(" "),t("p",[a._v("Activate your base environment")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda activate base\n")])])]),t("p",[a._v("Install Singularity")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("conda "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -n base -c conda-forge "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"singularity>=3.0.0"')]),a._v("\n")])])]),t("h2",{attrs:{id:"common-practices-and-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-practices-and-commands"}},[a._v("#")]),a._v(" Common practices and commands")]),a._v(" "),t("p",[a._v("All information is collected from official Singularity documentation (link above).")]),a._v(" "),t("h3",{attrs:{id:"pull-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-docker-image"}},[a._v("#")]),a._v(" Pull Docker image")]),a._v(" "),t("p",[a._v("You can use the "),t("a",{attrs:{href:"https://docs.sylabs.io/guides/3.3/user-guide/cli/singularity_pull.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("pull"),t("OutboundLink")],1),a._v(" and "),t("a",{attrs:{href:"https://docs.sylabs.io/guides/3.3/user-guide/cli/singularity_build.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("build"),t("OutboundLink")],1),a._v(" commands to download pre-built images from an external resource like the "),t("a",{attrs:{href:"https://cloud.sylabs.io/library",target:"_blank",rel:"noopener noreferrer"}},[a._v("Container Library"),t("OutboundLink")],1),a._v(" or "),t("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker Hub"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#-- Example")]),a._v("\nsingularity pull library://library/default/alpine\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#-- Example")]),a._v("\nsingularity build  -B "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$TMPDIR")]),a._v(" lolcow.sif docker://godlovedc/lolcow\n")])])]),t("h3",{attrs:{id:"run-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-docker-image"}},[a._v("#")]),a._v(" Run Docker image")]),a._v(" "),t("p",[a._v("For demonstration, let’s use an easy (though somewhat useless) example of "),t("a",{attrs:{href:"https://cloud.sylabs.io/library/_container/5baba5e594feb900016ea41c",target:"_blank",rel:"noopener noreferrer"}},[a._v("alpine_latest.sif"),t("OutboundLink")],1),a._v(" image from the "),t("a",{attrs:{href:"https://cloud.sylabs.io/library/",target:"_blank",rel:"noopener noreferrer"}},[a._v("container library"),t("OutboundLink")],1),a._v(":")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("singularity pull library://alpine\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#-- The above command will save the alpine image from the Container Library as alpine_latest.sif.")]),a._v("\n")])])]),t("p",[a._v("To start an instance, you should follow below pattern:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[command]                                    [image]        [name of instance]\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ singularity instance start -B "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$TMPDIR")]),a._v("   alpine_latest.sif     instance1\n")])])]),t("p",[a._v("This command causes Singularity to create an isolated environment for the container services to live inside.")]),a._v(" "),t("h3",{attrs:{id:"listing-running-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listing-running-containers"}},[a._v("#")]),a._v(" Listing running containers")]),a._v(" "),t("p",[a._v("One can confirm that an instance is running by using the "),t("code",[a._v("instance list")]),a._v(" command like so:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("singularity instance list\n\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("INSTANCE")]),a._v(" NAME    PID      IMAGE\ninstance1        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12715")]),a._v("    /home/ysub/alpine_latest.sif\n")])])]),t("h3",{attrs:{id:"stop-running-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-running-container"}},[a._v("#")]),a._v(" Stop running container")]),a._v(" "),t("p",[a._v("When you are finished with your instance you can clean it up with the "),t("code",[a._v("instance stop")]),a._v(" command as follows:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v(" singularity instance stop instance1\n")])])]),t("h3",{attrs:{id:"where-are-the-images-stored"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-are-the-images-stored"}},[a._v("#")]),a._v(" Where are the images stored ?")]),a._v(" "),t("p",[a._v("By default, Singularity will create a set of folders in your "),t("code",[a._v("$SINGULARITY_CACHEDIR")]),a._v(" directory for docker layers, Cloud library images, and metadata, respectively:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SINGULARITY_CACHEDIR")]),a._v("/cache/library\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SINGULARITY_CACHEDIR")]),a._v("/cache/oci\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SINGULARITY_CACHEDIR")]),a._v("/cache/oci-tmp\n")])])]),t("h3",{attrs:{id:"temporary-file-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#temporary-file-storage"}},[a._v("#")]),a._v(" Temporary file storage")]),a._v(" "),t("p",[a._v("By default, Singularity won't recognize lab tmp storage. You can apply lab tmp storage location "),t("code",[a._v("/mnt/scratch/tmp")]),a._v(" to a container using "),t("code",[a._v("-B $TMPDIR")]),a._v(" variable")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#-- Example")]),a._v("\nsingularity shell -B "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$TMPDIR")]),a._v(" docker://ubuntu\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);