(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{220:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"faq-on-lab-compute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq-on-lab-compute"}},[e._v("#")]),e._v(" FAQ on lab compute")]),e._v(" "),t("p",[e._v("This page list frequently asked questions realted to compuation and analysis in labs.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#resources"}},[e._v("Resources")]),t("ul",[t("li",[t("a",{attrs:{href:"#how-can-i-upgrade-my-compute-resources"}},[e._v("How can I upgrade my compute resources?")])]),t("li",[t("a",{attrs:{href:"#is-my-process-hitting-memory-issues"}},[e._v("Is my process hitting memory issues?")])]),t("li",[t("a",{attrs:{href:"#how-can-i-monitor-my-resource-consumption"}},[e._v("How can I monitor my resource consumption?")])]),t("li",[t("a",{attrs:{href:"#how-can-i-profile-my-resource-consumption"}},[e._v("How can I profile my resource consumption?")])])])]),t("li",[t("a",{attrs:{href:"#software"}},[e._v("Software")]),t("ul",[t("li",[t("a",{attrs:{href:"#can-i-bring-my-own-software"}},[e._v("Can I bring my own software?")])]),t("li",[t("a",{attrs:{href:"#how-do-i-install-my-own-software"}},[e._v("How do I install my own software?")])]),t("li",[t("a",{attrs:{href:"#can-i-bring-my-own-licenses"}},[e._v("Can I bring my own licenses?")])])])]),t("li",[t("a",{attrs:{href:"#workflow"}},[e._v("Workflow")]),t("ul",[t("li",[t("a",{attrs:{href:"#how-can-i-keep-my-jobs-running-when-i-disconnect"}},[e._v("How can I keep my jobs running when I disconnect?")])])])]),t("li",[t("a",{attrs:{href:"#machine-types"}},[e._v("Machine types")]),t("ul",[t("li",[t("a",{attrs:{href:"#what-is-a-home-machine"}},[e._v('What is a "home" machine?')])]),t("li",[t("a",{attrs:{href:"#what-is-an-iaas-machine"}},[e._v('What is an "iaas" machine?')])]),t("li",[t("a",{attrs:{href:"#what-is-a-blue-machine"}},[e._v('What is a "blue" machine?')])]),t("li",[t("a",{attrs:{href:"#what-is-an-entry-machine"}},[e._v('What is an "entry" machine?')])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),t("h3",{attrs:{id:"how-can-i-upgrade-my-compute-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-upgrade-my-compute-resources"}},[e._v("#")]),e._v(" How can I upgrade my compute resources?")]),e._v(" "),t("p",[e._v("Your "),t("router-link",{attrs:{to:"/faq/users/#user-roles"}},[e._v("lab leader")]),e._v(" and lab coordinator approves upgrades. This includes both upgrades in cpu and memory of individual machines, and supplement of new machines in accordance with our "),t("a",{attrs:{href:"https://www.ntnu.edu/mh/huntcloud/cloud-services/hunt-compute",target:"_blank",rel:"noopener noreferrer"}},[e._v("machine types"),t("OutboundLink")],1),e._v(". Forward upgrade requests to us on "),t("a",{attrs:{href:"/contact"}},[e._v("email")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"is-my-process-hitting-memory-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-my-process-hitting-memory-issues"}},[e._v("#")]),e._v(" Is my process hitting memory issues?")]),e._v(" "),t("p",[e._v("See below for descriptions on how to monitor your memory consumption using the "),t("code",[e._v("htop")]),e._v(" and "),t("code",[e._v("time")]),e._v(" commands.")]),e._v(" "),t("h3",{attrs:{id:"how-can-i-monitor-my-resource-consumption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-monitor-my-resource-consumption"}},[e._v("#")]),e._v(" How can I monitor my resource consumption?")]),e._v(" "),t("p",[e._v("You have several options:")]),e._v(" "),t("p",[e._v("(1) A quick way is to use "),t("a",{attrs:{href:"https://docs.hdc.ntnu.no/working-in-your-lab/technical-tools/htop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTOP"),t("OutboundLink")],1),e._v(" for interatctive monitoring of cpu and memory inside individual machines.")]),e._v(" "),t("p",[e._v("(2) The "),t("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/time.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("time"),t("OutboundLink")],1),e._v(" command is a quick way to determine the duration of execution of a particular command. For example add "),t("code",[e._v("/usr/bin/time -v")]),e._v(" before your command to get going:")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("/usr/bin/time examples")]),t("p"),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- principal example")]),e._v("\n/usr/bin/time -v "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-comand"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- command example")]),e._v("\n/usr/bin/time -v "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- script example")]),e._v("\n/usr/bin/time -v ./script.sh\n")])])]),t("p",[t("a",{attrs:{href:"https://www.cyberciti.biz/faq/unix-linux-time-command-examples-usage-syntax/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Read more time command example"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("When yoru command or script finishes, "),t("code",[e._v("time")]),e._v(" writes a message to standard error giving timing statistics about your program run, for example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('        Command being timed: "ls /"\n        User time (seconds): 0.00\n        System time (seconds): 0.01\n        Percent of CPU this job got: 250%\n        Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.00\n        Average shared text size (kbytes): 0\n        Average unshared data size (kbytes): 0\n        Average stack size (kbytes): 0\n        Average total size (kbytes): 0\n        Maximum resident set size (kbytes): 0\n        Average resident set size (kbytes): 0\n        Major (requiring I/O) page faults: 0\n        Minor (reclaiming a frame) page faults: 315\n        Voluntary context switches: 2\n        Involuntary context switches: 0\n        Swaps: 0\n        File system inputs: 0\n        File system outputs: 0\n        Socket messages sent: 0\n        Socket messages received: 0\n        Signals delivered: 0\n        Page size (bytes): 4096\n        Exit status: 0\n')])])]),t("p")]),t("p",[e._v('(3) Use your monthly "Lab report" sent to your lab leader and lab coordinator for tracking of longer term resource consumptions inside your lab.')]),e._v(" "),t("h3",{attrs:{id:"how-can-i-profile-my-resource-consumption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-profile-my-resource-consumption"}},[e._v("#")]),e._v(" How can I profile my resource consumption?")]),e._v(" "),t("p",[e._v("For longer workflows your resource consumption may differ for each step in your code. Profiling tools may help to identify consumption for each part, such as time, cpu, mem, etc., both within your code and any third party libraries that you may utilize.")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("See example of profiling tools")]),t("p"),t("p",[e._v("For those interested in a deep dive into profiling, we recommend to get familiar with "),t("a",{attrs:{href:"http://www.brendangregg.com/flamegraphs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flame graphs"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Examples of python profilers:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/benfred/py-spy",target:"_blank",rel:"noopener noreferrer"}},[e._v("py-spy"),t("OutboundLink")],1),e._v(" - top-like sampling profiler (low overhead, non-interuptive, flamegraphs)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/emeryberger/scalene",target:"_blank",rel:"noopener noreferrer"}},[e._v("scalene"),t("OutboundLink")],1),e._v(" - a high-performance CPU and memory profiler for Python.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/nvdv/vprof",target:"_blank",rel:"noopener noreferrer"}},[e._v("vprof"),t("OutboundLink")],1),e._v(" - Visual Python profiler.")])]),e._v(" "),t("p")]),t("h2",{attrs:{id:"software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),t("h3",{attrs:{id:"can-i-bring-my-own-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-bring-my-own-software"}},[e._v("#")]),e._v(" Can I bring my own software?")]),e._v(" "),t("p",[e._v("Yes. You can install your own software in your lab environment under our "),t("em",[e._v("bring-your-own-software")]),e._v(" policy.")]),e._v(" "),t("h3",{attrs:{id:"how-do-i-install-my-own-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-install-my-own-software"}},[e._v("#")]),e._v(" How do I install my own software?")]),e._v(" "),t("p",[e._v("A quick way to install software packages is to use the built in "),t("a",{attrs:{href:"https://itsfoss.com/apt-get-linux-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("apt package tool"),t("OutboundLink")],1),e._v(" in Ubuntu:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("packagename"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"can-i-bring-my-own-licenses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-bring-my-own-licenses"}},[e._v("#")]),e._v(" Can I bring my own licenses?")]),e._v(" "),t("p",[e._v("Yes. If you use software that needs paid licenses you need to bring your own licenses under our "),t("em",[e._v("bring-your-own-license")]),e._v("-policy. Your lab leader is responsible to ensure that licensed software is used in accordance with the license agreement inside the lab environments.")]),e._v(" "),t("h2",{attrs:{id:"workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[e._v("#")]),e._v(" Workflow")]),e._v(" "),t("h3",{attrs:{id:"how-can-i-keep-my-jobs-running-when-i-disconnect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-keep-my-jobs-running-when-i-disconnect"}},[e._v("#")]),e._v(" How can I keep my jobs running when I disconnect?")]),e._v(" "),t("p",[e._v("You can keep your jobs and sessions running by using something called a terminal multiplexer. See our "),t("a",{attrs:{href:"/tutorials/terminal-multiplexers"}},[e._v("terminal multiplexers guide")]),e._v(" to get started.")]),e._v(" "),t("h2",{attrs:{id:"machine-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#machine-types"}},[e._v("#")]),e._v(" Machine types")]),e._v(" "),t("p",[e._v("You will meet four principal machine types in your lab. You may choose to deploy home, iaas and blue machines in "),t("a",{attrs:{href:"https://www.ntnu.edu/mh/huntcloud/cloud-services/hunt-compute",target:"_blank",rel:"noopener noreferrer"}},[e._v("various sizes"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"what-is-a-home-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-home-machine"}},[e._v("#")]),e._v(' What is a "home" machine?')]),e._v(" "),t("p",[e._v('This is a managed machine type. All labs have one "home" machine that is pre-configured with user accounts, mounted storage and some analytical software. Users may download their own software using the '),t("code",[e._v("apt")]),e._v(" package manager and reboot their machine when needed. Further configurations has to be guided by us. Home machines run Ubuntu 16.04 operating systems.")]),e._v(" "),t("h3",{attrs:{id:"what-is-an-iaas-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-iaas-machine"}},[e._v("#")]),e._v(' What is an "iaas" machine?')]),e._v(" "),t("p",[e._v('In addition to the home machine, lab leaders and lab coordinators may request new "iaas" machines to be deployed in your lab. This is an unmanage machine type. You do get full administrator privileges (root access). We expect you to configure and maintain these machines yourself. We normally deploy these machines with a vanilla Ubuntu 18.04 operating system. Iaas machines are deployed for a minimum of 30 days.')]),e._v(" "),t("h3",{attrs:{id:"what-is-a-blue-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-blue-machine"}},[e._v("#")]),e._v(' What is a "blue" machine?')]),e._v(" "),t("p",[e._v("Blue machines are identical to iaas machine with one exceptions: they are deployed for a maximum of 30 days. The machine type is introduced to allow for flexible deployments of short-lived high capacity environments.")]),e._v(" "),t("h3",{attrs:{id:"what-is-an-entry-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-entry-machine"}},[e._v("#")]),e._v(' What is an "entry" machine?')]),e._v(" "),t("p",[e._v('You will meet the "entry" machine when you configure your account during your initial onboarding. Hopefully, you will not meet this machine type again. The machine type is introduced for security purposes allowing us to quickly install security updates and do machine restarts without affecting your analyis in the other lab machines.')])])}),[],!1,null,null,null);a.default=r.exports}}]);