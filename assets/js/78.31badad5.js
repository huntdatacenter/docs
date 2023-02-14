(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{761:function(e,t,a){"use strict";a.r(t);var r=a(41),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"service-desk-orders-for-data-spaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-desk-orders-for-data-spaces"}},[e._v("#")]),e._v(" Service desk orders for data spaces")]),e._v(" "),a("p",[a("strong",[e._v("This page list predefined service orders for data space management. To place an order, click the blue button and send us a prefilled email.")])]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#lab-mangement"}},[e._v("Lab mangement")]),a("ul",[a("li",[a("a",{attrs:{href:"#new-lab"}},[e._v("New lab")])]),a("li",[a("a",{attrs:{href:"#delete-lab"}},[e._v("Delete lab")])])])]),a("li",[a("a",{attrs:{href:"#transfers"}},[e._v("Transfers")]),a("ul",[a("li",[a("a",{attrs:{href:"#external-import-kista"}},[e._v("External import kista")])]),a("li",[a("a",{attrs:{href:"#external-export-kista"}},[e._v("External export kista")])]),a("li",[a("a",{attrs:{href:"#network-opening"}},[e._v("Network opening")])])])]),a("li",[a("a",{attrs:{href:"#data-space-management"}},[e._v("Data space management")]),a("ul",[a("li",[a("a",{attrs:{href:"#update-data-space-coordinator-roles"}},[e._v("Update data space coordinator roles")])]),a("li",[a("a",{attrs:{href:"#update-lab-leader-role"}},[e._v("Update lab leader role")])]),a("li",[a("a",{attrs:{href:"#new-invoice-profile"}},[e._v("New invoice profile")])]),a("li",[a("a",{attrs:{href:"#update-existing-invoice-profile"}},[e._v("Update existing invoice profile")])])])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Save time")]),e._v(" "),a("p",[e._v("It saves you time to send us the request from your "),a("strong",[e._v("organizational email")]),e._v(". We use this for identification. Requests from private emails need additional verification that takes longer.")])]),e._v(" "),a("p",[e._v("Send us a regular "),a("a",{attrs:{href:"/contact"}},[e._v("email")]),e._v(" with your request if you can't find what you are looking for on the this page.")]),e._v(" "),a("h2",{attrs:{id:"lab-mangement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab-mangement"}},[e._v("#")]),e._v(" Lab mangement")]),e._v(" "),a("h3",{attrs:{id:"new-lab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-lab"}},[e._v("#")]),e._v(" New lab")]),e._v(" "),a("p",[e._v("Click the button below to order a new lab under your existing data space.")]),e._v(" "),a("SDButton",{attrs:{form:"request_new_lab"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders and data space compliance administrators in active data spaces.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachment")]),e._v(": "),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#lab-order"}},[e._v("A signed lab order")]),e._v(" and information on storage volume sizes and machine type for the home machine (see below).")],1),e._v(" "),a("li",[a("strong",[e._v("Expected delivery time:")]),e._v(" One week.")]),e._v(" "),a("li",[a("strong",[e._v("Next step")]),e._v(": "),a("RouterLink",{attrs:{to:"/administer-science/service-desk/lab-orders.html#add-a-new-lab-user"}},[e._v("Add your first lab users")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" One lab subscription as specified in the "),a("RouterLink",{attrs:{to:"/administer-science/services/specifications/"}},[e._v("Services specifications")]),e._v(" and "),a("RouterLink",{attrs:{to:"/administer-science/prices/pricelist/"}},[e._v("Price list")]),e._v(".")],1)]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("More on the required resource specifications")]),e._v(" "),a("p",[e._v("Your lab comes with one (1) machine with computational resources and attached storage by default. We call this your "),a("strong",[a("code",[e._v("home")])]),e._v("-machine.")]),e._v(" "),a("p",[a("strong",[e._v("Machine type")])]),e._v(" "),a("p",[e._v("For cost savings, we recommend that you start with the "),a("strong",[a("code",[e._v("default.b2")])]),e._v(" machine type. And if needed, upgrade to larger machine types when your scientists are well onboard in your new lab and ready to explore. You may specify "),a("RouterLink",{attrs:{to:"/administer-science/services/machine-types/"}},[e._v("alternative machines types")]),e._v(" in the order if you know you need other sizes right away.")],1),e._v(" "),a("p",[a("strong",[e._v("Storage volumes")])]),e._v(" "),a("p",[e._v("Your lab comes with three (3) storage volumes attached to your home machine. We have suggested default sizes on these volumes that you may want to change.")]),e._v(" "),a("p",[a("em",[e._v("Volume types")])]),e._v(" "),a("p",[e._v("i) the "),a("strong",[a("code",[e._v("archive")])]),e._v(" volume is tailored for data storage, such as your raw data and results;\nii) the "),a("strong",[a("code",[e._v("work")])]),e._v(" volume is tailored for your data in your day-to-day activities that your want to preserve, such as code files; and iii) the "),a("strong",[a("code",[e._v("scratch")])]),e._v(" volume is tailored for temporary analytical files, such typically generated in intermediate steps of your analysis. Note that the "),a("strong",[a("code",[e._v("scratch")])]),e._v(" volume do -not- include our restore service (backup).")]),e._v(" "),a("p",[a("em",[e._v("Volume sizes")])]),e._v(" "),a("p",[e._v("The minimum storage allocation of the three volumes is 1000 Gigabytes (1 Terabyte). We have suggested a default allocation that you may update if you like:")]),e._v(" "),a("p",[e._v("ARCHIVE = 400\nWORK = 300\nSCRACH = 300")]),e._v(" "),a("p",[e._v("The above numbers are in Gigabytes (1000 Gigabytes = 1 Terabyte). To illustrate, if you want your archive volume to be 2 Terabyte, specify "),a("strong",[a("code",[e._v("ARCHIVE = 2000")])]),e._v(" in your order.")]),e._v(" "),a("p",[a("strong",[e._v("More information")])]),e._v(" "),a("p",[e._v('See the "Lab" section in our '),a("RouterLink",{attrs:{to:"/administer-science/services/specifications/"}},[e._v("Services specifications")]),e._v(" for more information on the lab service and default configuration. "),a("a",{attrs:{href:"/contact"}},[e._v("Contact us")]),e._v(" if you need guidance on the size selection.")],1)]),e._v(" "),a("h3",{attrs:{id:"delete-lab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-lab"}},[e._v("#")]),e._v(" Delete lab")]),e._v(" "),a("p",[e._v("Click the button below to order a lab deletion of an active lab under your data space.")]),e._v(" "),a("SDButton",{attrs:{form:"request_lab_deletion"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders and Lab leaders in collaboration.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachment")]),e._v(": "),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#lab-deletion-order"}},[e._v("A signed lab deletion order")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Weeks.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" Countersignature from HUNT Cloud on your lab deletion order confirming that lab data, including online and offline duplicate copies, are deleted.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in your lab subscription.")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),a("p",[e._v("Once your lab data is deleted it can not be recreated. You must ensure that you have exported all data that you intend to preserve from the lab -before- you order the lab deletion. "),a("a",{attrs:{href:"/contact"}},[e._v("Contact us")]),e._v(" if you need guidance with this work.")])]),e._v(" "),a("h2",{attrs:{id:"transfers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfers"}},[e._v("#")]),e._v(" Transfers")]),e._v(" "),a("p",[e._v("Data transfers in and out of HUNT Cloud needs authorization from Data space leaders or Data space compliance administrators.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Internal transfers and import")]),e._v(" "),a("p",[e._v("Data transfers between labs inside HUNT Cloud can be requested from our "),a("a",{attrs:{href:"/administer-science/service-desk/lab-orders"}},[e._v("lab order service desk")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"external-import-kista"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-import-kista"}},[e._v("#")]),e._v(" External import kista")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/do-science/faq/external-transfer/#faq-on-external-data-transfer"}},[e._v("external import kista")]),e._v(" allows external parties outside HUNT Cloud to transfer data directly to a lab inside HUNT Cloud in a compliant manner.")],1),e._v(" "),a("SDButton",{attrs:{form:"request_external_import_kista"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders or Data space compliance administrators.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachments")]),e._v(": (1) "),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#external-kista-import-order"}},[e._v("A signed external kista import order")]),e._v(", and (2) one "),a("RouterLink",{attrs:{to:"/do-science/data-transfers/external-kista/#ssh-key-pair"}},[e._v("SSH public key")]),e._v(" from the external uploader.")],1),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" Kista access information sent to the lab user that will import the data.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in your data space subscription.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("External dependency")]),e._v(" "),a("p",[e._v("Note that time to successful transfer depend on access to SFTP software and potential firewall adjustments for the external-party that will download data.")])]),e._v(" "),a("h3",{attrs:{id:"external-export-kista"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-export-kista"}},[e._v("#")]),e._v(" External export kista")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/do-science/faq/external-transfer/#faq-on-external-data-transfer"}},[e._v("external export kista")]),e._v(" allows labs to make data available for external parties outside HUNT Cloud in a compliant manner.")],1),e._v(" "),a("SDButton",{attrs:{form:"request_external_export_kista"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders or Data space compliance administrators.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachments")]),e._v(": (1) "),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#external-kista-export-order"}},[e._v("A signed external kista export order")]),e._v(", and (2) one "),a("RouterLink",{attrs:{to:"/do-science/data-transfers/external-kista/#ssh-key-pair"}},[e._v("SSH public key")]),e._v(" from the external downloader.")],1),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" Access information sent to the lab user that will make data available for export.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in your data space subscription.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("External dependency")]),e._v(" "),a("p",[e._v("Note that time to successful transfer depends on access to SFTP software and potential firewall adjustments for the external-party that will upload data.")])]),e._v(" "),a("h3",{attrs:{id:"network-opening"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-opening"}},[e._v("#")]),e._v(" Network opening")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/do-science/faq/external-transfer/#direct-external-transfers"}},[e._v("Network opening orders")]),e._v(" allows data transfers directly to and from parties outside HUNT Cloud.")],1),e._v(" "),a("SDButton",{attrs:{form:"request_network_opening"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders or Data space compliance administrators.")]),e._v(" "),a("li",[a("strong",[e._v("Required information")]),e._v(": IPv4 address and port number for the external party.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachments")]),e._v(": "),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#network-opening-order"}},[e._v("A signed network opening order")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" Network opening communicated in your Slack lab channel.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in your data space subscription.")])]),e._v(" "),a("h2",{attrs:{id:"data-space-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-space-management"}},[e._v("#")]),e._v(" Data space management")]),e._v(" "),a("h3",{attrs:{id:"update-data-space-coordinator-roles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-data-space-coordinator-roles"}},[e._v("#")]),e._v(" Update data space coordinator roles")]),e._v(" "),a("p",[e._v("Click the button below to update your "),a("RouterLink",{attrs:{to:"/administer-science/roles/"}},[e._v("data space coordinator roles")]),e._v(" under your existing data space.")],1),e._v(" "),a("SDButton",{attrs:{form:"update_data_space_coordinator_role"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders or Data space compliance administrators in active data spaces.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachment")]),e._v(": None.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v("  Included in your data space subscription.")])]),e._v(" "),a("h3",{attrs:{id:"update-lab-leader-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-lab-leader-role"}},[e._v("#")]),e._v(" Update lab leader role")]),e._v(" "),a("p",[e._v("Click the button below to update lab leader roles for labs attached to your data space.")]),e._v(" "),a("SDButton",{attrs:{form:"request_lab_leader_role"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders and data space compliance officers.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachment")]),e._v(": A new "),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#lab-order"}},[e._v("signed lab order")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Expected delivery time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in your data space subscription.")])]),e._v(" "),a("h3",{attrs:{id:"new-invoice-profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-invoice-profile"}},[e._v("#")]),e._v(" New invoice profile")]),e._v(" "),a("p",[e._v("Click the button below to add a new invoice profile to your data space. Use this is you want a new lab to be invoiced to a specific account that you control, or if you want to separate one of your existing labs into a separate account.")]),e._v(" "),a("SDButton",{attrs:{form:"request_new_invoice_profile"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders and data space financial officers.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachment")]),e._v(": A new "),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#invoice-profile"}},[e._v("signed invoice profile")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Expected delivery time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in your data space subscription.")])]),e._v(" "),a("h3",{attrs:{id:"update-existing-invoice-profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-existing-invoice-profile"}},[e._v("#")]),e._v(" Update existing invoice profile")]),e._v(" "),a("p",[e._v("Click the button below to update an existing invoice profile to your data space. Use this is you want to update your account information, update your financial contact etc.")]),e._v(" "),a("SDButton",{attrs:{form:"request_update_of_existing_invoice"}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" Data space leaders and data space financial officers.")]),e._v(" "),a("li",[a("strong",[e._v("Required attachment")]),e._v(": A new "),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#invoice-profile"}},[e._v("signed invoice profile")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Expected delivery time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in your data space subscription.")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);