(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{723:function(e,a,t){"use strict";t.r(a);var n=t(40),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"service-desk-orders-for-labs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-desk-orders-for-labs"}},[e._v("#")]),e._v(" Service desk orders for labs")]),e._v(" "),t("p",[t("strong",[e._v("This page list predefined service orders for activities within one lab. To place an order, click the blue button and send us a prefilled email.")])]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#user-management"}},[e._v("User management")]),t("ul",[t("li",[t("a",{attrs:{href:"#add-a-new-lab-user"}},[e._v("Add a new lab user")])]),t("li",[t("a",{attrs:{href:"#deactivate-lab-user"}},[e._v("Deactivate lab user")])]),t("li",[t("a",{attrs:{href:"#reactivate-lab-user"}},[e._v("Reactivate lab user")])]),t("li",[t("a",{attrs:{href:"#renew-lab-user-agreement"}},[e._v("Renew lab user agreement")])])])]),t("li",[t("a",{attrs:{href:"#compute"}},[e._v("Compute")]),t("ul",[t("li",[t("a",{attrs:{href:"#update-cpu-machine-size"}},[e._v("Update CPU machine size")])]),t("li",[t("a",{attrs:{href:"#new-cpu-machine"}},[e._v("New CPU machine")])]),t("li",[t("a",{attrs:{href:"#new-gpu-machine"}},[e._v("New GPU machine")])]),t("li",[t("a",{attrs:{href:"#fleet-of-blue-machines"}},[e._v("Fleet of blue machines")])])])]),t("li",[t("a",{attrs:{href:"#store"}},[e._v("Store")]),t("ul",[t("li",[t("a",{attrs:{href:"#expand-existing-volume"}},[e._v("Expand existing volume")])]),t("li",[t("a",{attrs:{href:"#new-volume"}},[e._v("New volume")])])])]),t("li",[t("a",{attrs:{href:"#data-transfers"}},[e._v("Data transfers")]),t("ul",[t("li",[t("a",{attrs:{href:"#internal-kista"}},[e._v("Internal kista")])])])]),t("li",[t("a",{attrs:{href:"#others"}},[e._v("Others")]),t("ul",[t("li",[t("a",{attrs:{href:"#update-lab-coordinator-role"}},[e._v("Update lab coordinator role")])])])])])]),t("p"),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Save time")]),e._v(" "),t("p",[e._v("It saves you time to send us the request from your "),t("strong",[e._v("organizational email")]),e._v(". We use this for identification, and request from private emails need additional verification that takes longer.")])]),e._v(" "),t("p",[e._v("Send us a regular "),t("a",{attrs:{href:"/contact"}},[e._v("email")]),e._v(" with your request if you can't find what you are looking for on the this page.")]),e._v(" "),t("h2",{attrs:{id:"user-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-management"}},[e._v("#")]),e._v(" User management")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Active lab users")]),e._v(" "),t("p",[e._v("Orders for active lab users, such as workbench access and password resets, are listed in our "),t("a",{attrs:{href:"/service-desk/user-orders"}},[e._v("user orders page")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"add-a-new-lab-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-a-new-lab-user"}},[e._v("#")]),e._v(" Add a new lab user")]),e._v(" "),t("p",[e._v("Click the button below to order access for a new user to your lab.")]),e._v(" "),t("ServiceDesk",{attrs:{title:"Request lab access for a new user",template:{subject:"New labuser - {username} @ {labname}",body:"Hi HUNT Cloud team,\n\nI would like to request access for a new lab user.\n\nI have attached a signed user agreement to this email, and asked our new colleague to install and activate the Signal app for the key transfer. \n\nWe are looking forward to start the onboarding process.\n\n\nBest regards,\n\n\n"},fields:[{label:"Name of user",key:"username",field:"textfield"},{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Required attachment")]),e._v(": "),t("RouterLink",{attrs:{to:"/agreements/downloads/#user-agreement"}},[e._v("A signed user agreement")]),e._v(".")],1),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" One week.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" Lab keys and VPN certificate.")]),e._v(" "),t("li",[t("strong",[e._v("Next step:")]),e._v(" "),t("RouterLink",{attrs:{to:"/getting-started/"}},[e._v("Prepare your key transfer")]),e._v(".")],1),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" Included in your lab subscription.")])]),e._v(" "),t("h3",{attrs:{id:"deactivate-lab-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deactivate-lab-user"}},[e._v("#")]),e._v(" Deactivate lab user")]),e._v(" "),t("p",[e._v("This order closes access for lab users that no longer need to use your lab, for example when projects ends or lab users switches jobs.")]),e._v(" "),t("ServiceDesk",{attrs:{title:"Request lab user deactivation",template:{subject:"Deactivate lab user - {username} @ {labname}",body:"Hi HUNT Cloud team,\n\nI would like to deactivate lab access for one of our lab users:\n \nusername = {username}  \nlab name = {labname}  \n\nI am looking forward to a confirmation of the deactivation on email.\n\n\nBest regards,\n\n\n\n"},fields:[{label:"Username",key:"username",pattern:"[-a-z0-9._]{3,}",hint:"Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.",field:"textfield"},{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators can deactivate access for all lab users. Lab users can deactivate their own lab access.")]),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" Confirmation on email that lab access is deactivated.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" Included in your lab subscription.")])]),e._v(" "),t("h3",{attrs:{id:"reactivate-lab-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reactivate-lab-user"}},[e._v("#")]),e._v(" Reactivate lab user")]),e._v(" "),t("p",[e._v("Lab users are deactivated on request or after 180 inactive days. Lab leaders and lab coordinator can reactivate their access. We will need one order per lab for multiple lab access reactivations.")]),e._v(" "),t("ServiceDesk",{attrs:{title:"Request lab user reactivation",template:{subject:"Reactivate lab user - {username} @ {labname}",body:"Hi HUNT Cloud team,\n\nI would like to reactivate access for one of our lab users.\n\nI have attached a new signed user agreement to this email, and asked our colleague to install and activate the Signal app for the key transfer.\n\nI am looking forward to a confirmation of the reactivation on email.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Name of user",key:"username",field:"textfield"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Required attachment")]),e._v(": "),t("RouterLink",{attrs:{to:"/agreements/downloads/#user-agreement"}},[e._v("A new user agreement")]),e._v(".")],1),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" One week.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" Lab keys and VPN certificate.")]),e._v(" "),t("li",[t("strong",[e._v("Next step:")]),e._v(" "),t("RouterLink",{attrs:{to:"/getting-started/"}},[e._v("Prepare your key transfer")]),e._v(".")],1),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" Included in your lab subscription.")])]),e._v(" "),t("h3",{attrs:{id:"renew-lab-user-agreement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renew-lab-user-agreement"}},[e._v("#")]),e._v(" Renew lab user agreement")]),e._v(" "),t("p",[e._v("Lab user agreements needs to be renewed approximately every two years for accounts to be active. Click the button below to renew the lab user areement for one user.")]),e._v(" "),t("ServiceDesk",{attrs:{title:"Renew user agreement",template:{subject:"Renew lab user agreement - {username} @ {labname}",body:"Hi HUNT Cloud team,\n\nI would like to renew that lab user agreement for one of our lab users.\n\nI have attached a new signed user agreement to this email.\n\nI am looking forward to a confirmation of the renewal on email.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"User name",key:"username",pattern:"[-a-z0-9]{3,}",hint:"Lab user should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Required attachment")]),e._v(": "),t("RouterLink",{attrs:{to:"/agreements/downloads/#user-agreement"}},[e._v("A signed user agreement")]),e._v(".")],1),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" Email acknowledgment.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" Included in your lab subscription.")])]),e._v(" "),t("h2",{attrs:{id:"compute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compute"}},[e._v("#")]),e._v(" Compute")]),e._v(" "),t("h3",{attrs:{id:"update-cpu-machine-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-cpu-machine-size"}},[e._v("#")]),e._v(" Update CPU machine size")]),e._v(" "),t("p",[e._v("Increase or decrease the computational power of one of your existing lab machines to a new "),t("RouterLink",{attrs:{to:"/services/machine-types/"}},[e._v("machine type")]),e._v(".")],1),e._v(" "),t("ServiceDesk",{attrs:{title:"Request a machine size update",template:{subject:"Update machine size - {labname}",body:"Hi HUNT Cloud team,\n\nI would like to request a machine update: \n\nlab name = {labname}  \nmachine name = {machinename}  \ncurrent machine type = {machine_type}  \nnew machine type = {newmachine}  \n\nI am aware that the update will require a machine restart.\n\nLet us touch base in our Slack lab channel to schedule a time for the restart that fits our scientific activities.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Machine name",key:"machinename",pattern:"[-a-z0-9]{3,}",hint:"Machine name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Current machine type",key:"machine_type",default:"default.b2",pattern:"(default).[a-z][0-9]",hint:"Machine type should include only lowercase letters a-z, 0-9.",field:"textfield"},{label:"New machine type",key:"newmachine",pattern:"(default).[a-z][0-9]",hint:"Machine type should include only lowercase letters a-z, 0-9.",field:"textfield"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" Lab machine with updated size.")]),e._v(" "),t("li",[t("strong",[e._v("Requirement:")]),e._v(" The procedure require a machine restart that needs to be scheduled with your lab users.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" As specified in the "),t("RouterLink",{attrs:{to:"/services/specifications/"}},[e._v("Services specifications")]),e._v(" and "),t("RouterLink",{attrs:{to:"/prices/pricelist/"}},[e._v("Price list")]),e._v(".")],1)]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("GPU machines")]),e._v(" "),t("p",[e._v("Machine types deployed with GPU (GPU machines) can not be updated after deployment due to technical constraints. To update GPU machine types, (1) request a new GPU machine with your preferred machine type, (2) transfer any data or configuration files, and (3) request the deletion of your original machine.")])]),e._v(" "),t("h3",{attrs:{id:"new-cpu-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-cpu-machine"}},[e._v("#")]),e._v(" New CPU machine")]),e._v(" "),t("p",[e._v("Add a "),t("RouterLink",{attrs:{to:"/services/machine-types/"}},[e._v("new machine")]),e._v(" to your lab. A CPU machine is the default lab machine with CPU and memory aimed at data analysis.")],1),e._v(" "),t("ServiceDesk",{attrs:{title:"Request a new lab machine",template:{subject:"New CPU machine - {labname}",body:"Hi HUNT Cloud team,\n\nI would like to request a new CPU machine in our lab: \n\nlab name = {labname}  \nmachine type = {machine_type}  \nstorage size = {terabytes} TB  \nsubscription = {subscription}  \n\nI am looking forward to receive access information in our Slack lab channel when the machine is up and running.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Machine type",key:"machine_type",default:"default.b2",pattern:"(default).[a-z][0-9]",hint:"Machine type should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Storage size (in terabytes)",key:"terabytes",hint:"Field should include only numbers",suffix:"TB",min:1,max:25,step:1,field:"number",default:1},{label:"Subscription",key:"subscription",field:"selectone",options:["Commitment","On-demand","Blue"],pattern:"{1,}"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" New lab machine accessible from your home machine.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" As specified in the "),t("RouterLink",{attrs:{to:"/services/specifications/"}},[e._v("Services specifications")]),e._v(" and "),t("RouterLink",{attrs:{to:"/prices/pricelist/"}},[e._v("Price list")]),e._v(".")],1)]),e._v(" "),t("h3",{attrs:{id:"new-gpu-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-gpu-machine"}},[e._v("#")]),e._v(" New GPU machine")]),e._v(" "),t("p",[e._v("Add a new "),t("RouterLink",{attrs:{to:"/services/machine-types/#gpu-accelerator-machine-types"}},[e._v("GPU machine")]),e._v(" to your lab.")],1),e._v(" "),t("ServiceDesk",{attrs:{title:"Request a new GPU machine",template:{subject:"New GPU machine - {labname}",body:"Hi HUNT Cloud team,\n\nI would like to request a new GPU machine in our lab: \n\nlab name = {labname}  \ngpu type = {nvidia.p100}  \nmachine type = {machine_type}  \nstorage size = {terabytes} TB  \nsubscription = {subscription}  \n\nI am looking forward to receive access information in our Slack lab channel when the machine is up and running.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"GPU type",key:"nvidia.p100",pattern:"(nvidia).[a-z0-9]+",hint:"GPU type should include only letters a-z, 0-9, or dot.",field:"textfield"},{label:"Machine type",key:"machine_type",default:"default.b2",pattern:"(default).[a-z][0-9]",hint:"Machine type should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Storage size (in terabytes)",key:"terabytes",hint:"Field should include only numbers",suffix:"TB",min:1,max:25,step:1,field:"number",default:1},{label:"Subscription",key:"subscription",field:"selectone",options:["Commitment","On-demand","Blue"],pattern:"{1,}"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" Days (subject to availability).")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" New lab machine with GPU accelerator accessible from your home machine.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" As specified in the "),t("RouterLink",{attrs:{to:"/services/specifications/"}},[e._v("Services specifications")]),e._v(" and "),t("RouterLink",{attrs:{to:"/prices/pricelist/"}},[e._v("Price list")]),e._v(".")],1)]),e._v(" "),t("h3",{attrs:{id:"fleet-of-blue-machines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fleet-of-blue-machines"}},[e._v("#")]),e._v(" Fleet of blue machines")]),e._v(" "),t("p",[e._v("Add a fleet of blue machines to distribute analysis for large scale analysis, for example by utilizing tools such as our "),t("a",{attrs:{href:"https://docs.hdc.ntnu.no/working-in-your-lab/analytical-tools/bluebox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlueBox"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("ServiceDesk",{attrs:{title:"Request a fleet of Blue machines",template:{subject:"Fleet of blue machines - {labname}",body:"Hi HUNT Cloud team,\n\nI would like to request a fleet of the following blue machines: \n\nlab name = {labname}  \nnumber of machines = {number}  \nmachine type = {machine_type}  \nstorage size per machine = {terabytes} TB   \n\nI am looking forward to receive access information in our Slack lab channel when the fleet is up and running.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Number of machines",hint:"Field should include only numbers",key:"number",min:1,max:100,step:1,field:"number",default:1},{label:"Machine type",key:"machine_type",default:"default.b2",pattern:"(default).[a-z][0-9]",hint:"Machine type should include only lowercase letters a-z, 0-9.",field:"textfield"},{label:"Storage size per machine (in terabytes)",key:"terabytes",hint:"Field should include only numbers",suffix:"TB",min:1,max:25,step:1,field:"number",default:1}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" Days (subject to availability).")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" Multiple blue machines accessible from your home machine.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" As specified in the "),t("RouterLink",{attrs:{to:"/services/specifications/"}},[e._v("Services specifications")]),e._v(" and "),t("RouterLink",{attrs:{to:"/prices/pricelist/"}},[e._v("Price list")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[e._v("#")]),e._v(" Store")]),e._v(" "),t("h3",{attrs:{id:"expand-existing-volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expand-existing-volume"}},[e._v("#")]),e._v(" Expand existing volume")]),e._v(" "),t("p",[e._v("You may expand the existing storage volumes inside your lab up to a maximum of 20TB. We will need separate orders for each individual volume you plan to expand. Read more in our "),t("RouterLink",{attrs:{to:"/data/faq/#volumes"}},[e._v("coordinator FAQ")]),e._v(".")],1),e._v(" "),t("ServiceDesk",{attrs:{title:"Request storage volume expansion",template:{subject:"Storage volume expansion - {labname}",body:"Hi HUNT Cloud team,\n\nI would like to request a storage volume expansion: \n\nlab name = {labname}  \nmachine name = {machinename}  \nvolume name = {volumename}  \ncurrent size = {terabytes} TB  \nnew size = {terabytes1} TB  \n\nI am aware that the expansion will require a machine restart.\n\nLet us touch base in our Slack lab channel to schedule a time for the restart that fits our scientific activities.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Machine name",key:"machinename",pattern:"[-a-z0-9]{3,}",hint:"Machine name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Volume name",key:"volumename",field:"selectone",options:["Archive","Work","Scratch"],pattern:"{1,}"},{label:"Current size (in terabytes)",key:"terabytes",hint:"Field should include only numbers",suffix:"TB",min:1,max:25,step:1,field:"number",default:1},{label:"New size (in terabytes)",key:"terabytes1",hint:"Field should include only numbers",suffix:"TB",min:1,max:25,step:1,field:"number",default:1}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Required information")]),e._v(": lab name, machine name, volume name and intended size.")]),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" One week. The volume expansion requires a machine restart that needs to be scheduled 9-11am on a workday.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" Increased storage capacity.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" New storage is included in your total storage plan.")])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Identify the required information")]),e._v(" "),t("p",[e._v("You may identify lab name, machine name and volume name from your resource reports. Alternatively, you may log into your lab machine using SSH and fetch the information manually")]),e._v(" "),t("p",[t("strong",[e._v("Lab and machine name")])]),e._v(" "),t("p",[e._v("You will find the lab and machine name for you home machine when you log into your home machine.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Welcome to "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("LAB NAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n\nFor the record, "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" you shouldn't be here - please\nleave and report the incident to cloud@hunt.ntnu.no.\n\nLast login: Sun Dec  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(":29:28 "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v(" from "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".10.10\nyour-username@"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("your-labname"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("-home~$\n")])])]),t("p",[e._v("Example from above:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Machine name")]),e._v("\nyour-labname-home\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Lab name (remove -home)")]),e._v("\nyour-labname\n")])])]),t("p",[e._v("If you plan to expand volumes of machines other than "),t("code",[e._v("home")]),e._v(", log into your machine of choice to identify the exact machine name:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Machine name")]),e._v("\nyour-labname-iaas-helya-gpu1\n")])])]),t("p",[e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Volume name and current size")])]),e._v(" "),t("p",[e._v("You can identify the volume name while you are logged into the machine where you need to expand the storage:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Command")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("df")]),e._v(" -h "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'(^Filesystem|/mnt/)'")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Output example")]),e._v("\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vdc1       197G   61M  187G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt/work\n/dev/vdd1       493G   71M  467G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt/archive\n/dev/vde1       197G   60M  187G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt/scratch\n/dev/vdf1        99G   60M   94G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt/cargo\n")])])]),t("p",[e._v("The above example shows for example that "),t("code",[e._v("/mnt/archive")]),e._v(" has a current "),t("code",[e._v("Size")]),e._v(" of 493 gigabytes shown (500 gigabytes allocated).")])]),e._v(" "),t("h3",{attrs:{id:"new-volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-volume"}},[e._v("#")]),e._v(" New volume")]),e._v(" "),t("p",[e._v("You may add new volumes to your lab machines. We will need separate orders for each individual volume you plan to add.  Read more in our "),t("RouterLink",{attrs:{to:"/data/faq/#volumes"}},[e._v("coordinator FAQ")]),e._v(".")],1),e._v(" "),t("ServiceDesk",{attrs:{title:"Request a new storage volume",template:{subject:"New storage volume - {labname}",body:"Hi HUNT Cloud team,\n\nI would like to request a new storage volume: \n\nlab name = {labname}  \nmachine name = {machinename}  \nvolume name = {volume_name}  \nsize = {terabytes} TB  \n\nI am aware that the expansion will require a machine restart. So, let us touch base in our Slack lab channel to schedule a time for the restart that fits our scientific activities.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Machine name",key:"machinename",pattern:"[-a-z0-9]{3,}",hint:"Machine name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Volume name",key:"volume_name",field:"selectone",options:["Archive","Work","Scratch"],pattern:"{1,}"},{label:"Size (in terabytes)",key:"terabytes",hint:"Field should include only numbers",suffix:"TB",min:1,max:25,step:1,field:"number",default:1}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders and lab coordinators.")]),e._v(" "),t("li",[t("strong",[e._v("Required information")]),e._v(": lab name, machine name, volume name and total size in terabytes.")]),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" One week. The volume expansion requires a machine restart that needs to be scheduled 9-11 am CET on a workday.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" New storage volume attached (mounted) to your lab machine.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" New storage is included in your total storage plan.")])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Identify the required information")]),e._v(" "),t("p",[e._v("You may identify lab name, machine name and volume name from your resource reports. Alternatively, you may log into your lab machine using SSH and fetch the information manually")]),e._v(" "),t("p",[t("strong",[e._v("Lab and machine name")])]),e._v(" "),t("p",[e._v("You will find the lab and machine name for you home machine when you log into your home machine.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Welcome to "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("LAB NAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n\nFor the record, "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" you shouldn't be here - please\nleave and report the incident to cloud@hunt.ntnu.no.\n\nLast login: Sun Dec  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(":29:28 "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v(" from "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.10")]),e._v(".10.10\nyour-username@"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("your-labname"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("-home~$\n")])])]),t("p",[e._v("Example from above:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Machine name")]),e._v("\nyour-labname-home\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Lab name (remove -home)")]),e._v("\nyour-labname\n")])])]),t("p",[e._v("If you plan to expand volumes of machines other than "),t("code",[e._v("home")]),e._v(", log into your machine of choice to identify the exact machine name:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Machine name")]),e._v("\nyour-labname-iaas-helya-gpu1\n")])])]),t("p",[t("strong",[e._v("Volume name and current size")])]),e._v(" "),t("p",[e._v("You can identify your current volume names while you are logged into the machine where you need to expand the storage. For example on your home machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Command")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("df")]),e._v(" -h "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'(^Filesystem|/mnt/)'")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -- Output example")]),e._v("\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vdc1       197G   61M  187G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt/work\n/dev/vdd1       493G   71M  467G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt/archive\n/dev/vde1       197G   60M  187G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt/scratch\n/dev/vdf1        99G   60M   94G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt/cargo\n")])])]),t("p",[e._v("You may use this information to plan your new storage names and sizes. We typically recommend to go by type of storage and numbers as usage tends to change over time, such as "),t("code",[e._v("archive2")]),e._v(", "),t("code",[e._v("work2")]),e._v(" etc.")])]),e._v(" "),t("h2",{attrs:{id:"data-transfers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-transfers"}},[e._v("#")]),e._v(" Data transfers")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("External data exports")]),e._v(" "),t("p",[e._v("Head over to the "),t("a",{attrs:{href:"/service-desk/data-space-orders"}},[e._v("data space orders")]),e._v(" to request data exports outside HUNT Cloud, such as external export kistas and network openings.")])]),e._v(" "),t("h3",{attrs:{id:"internal-kista"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#internal-kista"}},[e._v("#")]),e._v(" Internal kista")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/data-transfers/internal-kista/"}},[e._v("Internal kista")]),e._v(" is the best way to transfer data between two labs in HUNT Cloud.")],1),e._v(" "),t("ServiceDesk",{attrs:{title:"Request an internal kista",template:{subject:"Internal kista order - {uploader_lab}",body:"Hi HUNT Cloud team,\n\nI would like to request an internal kista from {uploader_lab} to {downloader_lab}.\n\nI have attached the signed internal kista order.\n\nWe are looking forward to receive access information in our Slack lab channel.\n\n\nBest regards,\n\n\n"},fields:[{label:"Uploader Lab",key:"uploader_lab",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Downloader Lab",key:"downloader_lab",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders or lab coordinators from the uploader lab.")]),e._v(" "),t("li",[t("strong",[e._v("Required attachment")]),e._v(": "),t("RouterLink",{attrs:{to:"/agreements/downloads/#internal-kista-order"}},[e._v("A signed internal kista order")]),e._v(".")],1),e._v(" "),t("li",[t("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery:")]),e._v(" Access information communicated in your Slack lab channel.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" Included in your lab subscription.")])]),e._v(" "),t("h2",{attrs:{id:"others"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[e._v("#")]),e._v(" Others")]),e._v(" "),t("h3",{attrs:{id:"update-lab-coordinator-role"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-lab-coordinator-role"}},[e._v("#")]),e._v(" Update lab coordinator role")]),e._v(" "),t("p",[e._v("Click the button below to update the "),t("RouterLink",{attrs:{to:"/coordinator/roles/#lab-coordinator"}},[e._v("lab coordinator")]),e._v(" role for a lab attached to your data space.")],1),e._v(" "),t("ServiceDesk",{attrs:{title:"Request update of lab coordinator role",template:{subject:"Update lab coordinator role - {labname}",body:"Hi HUNT Cloud team,\n\nI would like to update the coordinator role in our Lab:\n\nLab name: {labname}  \n\nNew lab coordinator:  \n\nName and surname: {name}  \nDepartment: {department}  \nFaculty: {faculty}  \nInstitution: {institution}  \nEmail address: {email}  \nPhone number: {phone}  \n\nI am looking forward to receive an email acknowledging that you have updated the role.\n\n\nBest regards,\n\n\n"},fields:[{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Name and Surname",key:"name",field:"textfield"},{label:"Department",key:"department",field:"textfield"},{label:"Faculty",key:"faculty",field:"textfield"},{label:"Institution",key:"institution",field:"textfield"},{label:"Email address",key:"email",pattern:"[^@].*[@]+.*",field:"textfield"},{label:"Phone number",key:"phone",pattern:"[0-9+]{3,}",field:"textfield"}]}}),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Who can order:")]),e._v(" Lab leaders.")]),e._v(" "),t("li",[t("strong",[e._v("Required attachment")]),e._v(": None.")]),e._v(" "),t("li",[t("strong",[e._v("Expected delivery time:")]),e._v(" Days.")]),e._v(" "),t("li",[t("strong",[e._v("Cost:")]),e._v(" Included in your lab subscription.")])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);