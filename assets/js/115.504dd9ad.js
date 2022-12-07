(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{792:function(t,a,e){"use strict";e.r(a);var r=e(40),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),e("OutboundLink")],1),t._v(" provides application containers for Linux.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you need to run docker images on "),e("code",[t._v("home")]),t._v(" machine try using Singularity instead. Read more in our "),e("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/singularity/"}},[t._v("Singularity installation guide")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("Follow official "),e("a",{attrs:{href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker installation guide"),e("OutboundLink")],1),t._v(" if you want to install Docker on Iaas or Blue machine.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/gpu/"}},[t._v("GPU machines")]),t._v(". come with nvidia-docker preinstalled.")],1),t._v(" "),e("h2",{attrs:{id:"moving-docker-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#moving-docker-directory"}},[t._v("#")]),t._v(" Moving docker directory")]),t._v(" "),e("ol",[e("li",[t._v("Stop docker service and migrate files:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo service docker stop\n\nsudo rsync -avu /var/lib/docker/ /home/docker\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Edit "),e("code",[t._v("/etc/docker/daemon.json")]),t._v(" and add "),e("code",[t._v("data-root")]),t._v(" path:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo vim /etc/docker/daemon.json\n")])])]),e("p",[t._v("Example for IAAS / Blue machines:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "data-root": "/home/docker",\n}\n')])])]),e("p",[t._v("Example for GPU machines:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "data-root": "/home/docker",\n    "runtimes": {\n        "nvidia": {\n            "path": "nvidia-container-runtime",\n            "runtimeArgs": []\n        }\n    }\n}\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Backup original Docker files:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo mv /var/lib/docker /var/lib/docker.backup\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Restart Docker service:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo service docker restart\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Test Docker command:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker ps -a\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);