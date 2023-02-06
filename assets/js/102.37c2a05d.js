(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{788:function(e,t,a){"use strict";a.r(t);var s=a(41),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bluebox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bluebox"}},[e._v("#")]),e._v(" BlueBox")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/huntdatacenter/BlueBox",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlueBox"),a("OutboundLink")],1),e._v(" is a tool that we have developed to help you distribute your analysis across a fleet of cloud machines inside your lab.")])]),e._v(" "),a("p",[e._v("In short, BlueBox aids with the installation of software packages and handling of data, code and results across many machines.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-order-a-fleet-of-machines"}},[e._v("1. Order a fleet of machines")])]),a("li",[a("a",{attrs:{href:"#_2-install"}},[e._v("2. Install")])]),a("li",[a("a",{attrs:{href:"#_3-configuration"}},[e._v("3. Configuration")])]),a("li",[a("a",{attrs:{href:"#_4-do-science"}},[e._v("4. Do science")])]),a("li",[a("a",{attrs:{href:"#more-information"}},[e._v("More information")])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Visit our "),a("a",{attrs:{href:"https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlueBox Guide"),a("OutboundLink")],1),e._v(" on Github for the full documentation. Below is an outline of the steps to get you started.")])]),e._v(" "),a("h2",{attrs:{id:"_1-order-a-fleet-of-machines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-order-a-fleet-of-machines"}},[e._v("#")]),e._v(" 1. Order a fleet of machines")]),e._v(" "),a("p",[e._v("The installation of BlueBox requires access to a fleet of On-demand or BLUE machines.")]),e._v(" "),a("p",[e._v("1.1 Order a fleet of machines for your BlueBox in our "),a("RouterLink",{attrs:{to:"/administer-science/service-desk/lab-orders/#fleet-of-blue-machines"}},[e._v("administer science service desk")]),e._v(".")],1),e._v(" "),a("p",[e._v("We will set up your machines and provide you with a list of machine names that you can utilize.")]),e._v(" "),a("h2",{attrs:{id:"_2-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-install"}},[e._v("#")]),e._v(" 2. Install")]),e._v(" "),a("p",[e._v("BluBox is installed on your lab's "),a("strong",[a("code",[e._v("home")])]),e._v(" machine where it orchestrate the communication with a fleet of On-demand or BLUE machines where you analysis happens.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Helping hand")]),e._v(" "),a("p",[a("a",{attrs:{href:"/contact"}},[e._v("Contact us")]),e._v(" us for a helping hand to get up and running. We care passionately about your ability to scale science.")])]),e._v(" "),a("p",[e._v("2.1. Install dependencies on your lab home machine:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" tox "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" tox sshpass\n")])])]),a("p",[e._v("2.2. Download our BlueBox code:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/huntdatacenter/bluebox.git "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" bluebox\n")])])]),a("h2",{attrs:{id:"_3-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-configuration"}},[e._v("#")]),e._v(" 3. Configuration")]),e._v(" "),a("p",[e._v("3.1. Specify the machines in your fleet:")]),e._v(" "),a("p",[e._v("3.1.1 Open at the "),a("strong",[a("code",[e._v("example.hosts.txt")])]),e._v(" file to see the formatting.")]),e._v(" "),a("p",[e._v("3.1.2 Generate a new file named "),a("strong",[a("code",[e._v("hosts.txt")])]),e._v(" that specify which machines in your fleet you would like to utilize.")]),e._v(" "),a("p",[e._v("An example of such a list may look like:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Non-work example list")]),e._v("\nubuntu@demolab-blue-azelf\nubuntu@demolab-blue-maiar\nubuntu@demolab-blue-zaran\n")])])]),a("p",[e._v("3.2. Test your setup")]),e._v(" "),a("p",[e._v("You need to set up your machine the first you use BlueBox and when you are adding or removing machines to your fleet. Run this code to set up machine keys:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" setup\n")])])]),a("h2",{attrs:{id:"_4-do-science"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-do-science"}},[e._v("#")]),e._v(" 4. Do science")]),e._v(" "),a("p",[e._v("Now that your machines are activated, head over to our "),a("a",{attrs:{href:"https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlueBox Guide"),a("OutboundLink")],1),e._v(" on Github to complete the full configuration to set up your software dependencies, push your code and data and run your code in parallel.")]),e._v(" "),a("h2",{attrs:{id:"more-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-information"}},[e._v("#")]),e._v(" More information")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/huntdatacenter/BlueBox/blob/master/docs/guide.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlueBox Guide"),a("OutboundLink")],1),e._v(" on Github.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);