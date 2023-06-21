(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{938:function(e,t,a){"use strict";a.r(t);var r=a(41),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gpu-on-hunt-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu-on-hunt-cloud"}},[e._v("#")]),e._v(" GPU on HUNT Cloud")]),e._v(" "),a("p",[a("strong",[e._v("You can add GPU cards to your On-demand and BLUE machine for your AI/ML workloads.")])]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#gpu-models"}},[e._v("GPU Models")])]),a("li",[a("a",{attrs:{href:"#software"}},[e._v("Software")])]),a("li",[a("a",{attrs:{href:"#how-to-order"}},[e._v("How to order")])]),a("li",[a("a",{attrs:{href:"#how-to-use"}},[e._v("How to use")]),a("ul",[a("li",[a("a",{attrs:{href:"#specify-cuda-version"}},[e._v("Specify CUDA version")])]),a("li",[a("a",{attrs:{href:"#jupyter-in-nvidia-docker"}},[e._v("Jupyter in Nvidia Docker")])])])]),a("li",[a("a",{attrs:{href:"#more-info"}},[e._v("More info")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"gpu-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu-models"}},[e._v("#")]),e._v(" GPU Models")]),e._v(" "),a("p",[e._v("See our "),a("RouterLink",{attrs:{to:"/administer-science/services/machine-types/#gpu-accelerator-machine-types"}},[e._v("GPU accelerator machine types")]),e._v(" for more details on the specific GPU models we offer.")],1),e._v(" "),a("h2",{attrs:{id:"software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),a("p",[e._v("We pre-install the machines with with the folloing software to get you started:")]),e._v(" "),a("ul",[a("li",[e._v("Ubuntu 22.04 LTS")]),e._v(" "),a("li",[e._v("Docker")]),e._v(" "),a("li",[e._v("NVIDIA 525 drivers or later (from the "),a("a",{attrs:{href:"https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa?field.series_filter=jammy",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("graphics-drivers")]),e._v(" repository"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v("NVIDIA Container Toolkit (also known as "),a("strong",[a("code",[e._v("nvidia-docker")])]),e._v(")")])]),e._v(" "),a("p",[e._v("You may install other tools and versions.")]),e._v(" "),a("h2",{attrs:{id:"how-to-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-order"}},[e._v("#")]),e._v(" How to order")]),e._v(" "),a("p",[e._v("You can order your GPU machines in our "),a("RouterLink",{attrs:{to:"/administer-science/service-desk/lab-orders/#new-gpu-machine"}},[e._v("administer science service desk")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How to use")]),e._v(" "),a("p",[e._v("Log into your GPU lab machine and run the following command to call the NVIDIA System Management Interface ("),a("strong",[a("code",[e._v("nvidia-smi")])]),e._v(") to manage and verify that things are working:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("nvidia-smi\n")])])]),a("h3",{attrs:{id:"specify-cuda-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specify-cuda-version"}},[e._v("#")]),e._v(" Specify CUDA version")]),e._v(" "),a("p",[e._v("If you wish to use a specific version of CUDA, we recommend that you use the NVIDIA Container Toolkit to run a container of your choosing. Here is an example for CUDA version "),a("strong",[a("code",[e._v("12.0")])]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --rm --runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nvidia nvidia/cuda:12.0.0-base-ubuntu22.04 nvidia-smi\n")])])]),a("p",[e._v("More versions of CUDA base image can be found in "),a("a",{attrs:{href:"https://hub.docker.com/r/nvidia/cuda/tags?page=1&name=base-ubuntu22.04",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"jupyter-in-nvidia-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jupyter-in-nvidia-docker"}},[e._v("#")]),e._v(" Jupyter in Nvidia Docker")]),e._v(" "),a("p",[e._v("If you want to use Jupyterlab on your GPU machine we recommend the "),a("a",{attrs:{href:"https://github.com/iot-salzburg/gpu-jupyter",target:"_blank",rel:"noopener noreferrer"}},[e._v("iot-salzburg/gpu-jupyter"),a("OutboundLink")],1),e._v(" docker image.")]),e._v(" "),a("p",[e._v("This project uses the NVIDIA CUDA image as the base image and installs their toolstack on top of it to enable GPU calculations in the Jupyter notebooks. Python packages Tensorflow and Pytorch are preinstalled to match the Cuda version (GPU drivers).")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" pull cschranz/gpu-jupyter:v1.4_cuda-11.6_ubuntu-20.04_python-only\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --rm -d --runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nvidia -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),e._v(" --workdir "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GRANT_SUDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yes -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("JUPYTER_ENABLE_LAB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yes -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8888")]),e._v(":8888 --user root --name gpu-jupyter cschranz/gpu-jupyter:v1.4_cuda-11.6_ubuntu-20.04_python-only\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n")])])]),a("p",[e._v("The commands above starts an instance of GPU-Jupyter with the tag "),a("strong",[a("code",[e._v("v1.4_cuda-11.6_ubuntu-20.04_python-only")])]),e._v(" at "),a("strong",[a("code",[e._v("http://localhost:8888")])]),e._v(" (port "),a("em",[e._v("8888")]),e._v("). The default password is "),a("strong",[a("code",[e._v("gpu-jupyter")])]),e._v(".")]),e._v(" "),a("p",[e._v("It is also possible to start an interactive bash session and run scripts inside:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --rm --runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nvidia -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),e._v(" --workdir "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),e._v(" -v /etc/passwd:/etc/passwd -v /etc/group:/etc/group --user "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1000"')]),e._v(" --entrypoint "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" -ti cschranz/gpu-jupyter:v1.4_cuda-11.6_ubuntu-20.04_python-only\n")])])]),a("p",[e._v("More details about this docker image can be found on "),a("a",{attrs:{href:"https://hub.docker.com/r/cschranz/gpu-jupyter",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker hub"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"more-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-info"}},[e._v("#")]),e._v(" More info")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.nvidia.com/datacenter/tesla/drivers/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVIDIA Drivers overview"),a("OutboundLink")],1),e._v(" for an overview of drivers for NVIDIA GPUs.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVIDIA Container Toolkit documentation"),a("OutboundLink")],1),e._v(" for more details on how to easily use and run containers.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://ngc.nvidia.com/catalog/containers/nvidia:cuda",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVIDIA GPU Cloud catalog"),a("OutboundLink")],1),e._v(" for an overview of CUDA containers from NVIDIA.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);