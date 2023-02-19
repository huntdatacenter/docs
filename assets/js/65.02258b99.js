(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{746:function(e,t,a){"use strict";a.r(t);var r=a(41),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"get-going-with-your-first-lab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-going-with-your-first-lab"}},[e._v("#")]),e._v(" Get going with your first lab")]),e._v(" "),a("p",[a("strong",[e._v("This guide aims to describe the steps to get you going with your first lab in HUNT Cloud.")])]),e._v(" "),a("p",[e._v("Labs in HUNT Cloud are digital environments (laboratories) where scientists access scientific tools and allocated cloud resources for storage, computation and transport.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-identify-your-lab-team"}},[e._v("1. Identify your lab team")])]),a("li",[a("a",{attrs:{href:"#_2-brand-your-lab"}},[e._v("2. Brand your lab")])]),a("li",[a("a",{attrs:{href:"#_4-plan-your-lab-resources"}},[e._v("4. Plan your lab resources")])]),a("li",[a("a",{attrs:{href:"#_5-prepare-your-lab-order"}},[e._v("5. Prepare your lab order")])]),a("li",[a("a",{attrs:{href:"#_6-place-your-lab-order"}},[e._v("6. Place your lab order")])]),a("li",[a("a",{attrs:{href:"#_7-add-your-first-lab-users"}},[e._v("7. Add your first lab users")])])])]),a("p"),e._v(" "),a("p",[e._v("Labs are controlled in lab orders that specify lab leaders and coordinators that can authorize lab users and adjust resources. Read more about the lab orders in our "),a("RouterLink",{attrs:{to:"/administer-science/agreements/overview/#lab-order"}},[e._v("agreement section")])],1),e._v(" "),a("h3",{attrs:{id:"_1-identify-your-lab-team"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-identify-your-lab-team"}},[e._v("#")]),e._v(" 1. Identify your lab team")]),e._v(" "),a("p",[e._v("For each lab, identify one lab leader and one lab coordinator that will manage day-to-day activities in your lab, including adding new lab users and adjusting lab resources. The lab leader and lab coordinator are our point of contact in the lab for dialogue and help, as well as the point of contact for your data space coordinator team.")]),e._v(" "),a("h3",{attrs:{id:"_2-brand-your-lab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-brand-your-lab"}},[e._v("#")]),e._v(" 2. Brand your lab")]),e._v(" "),a("p",[e._v('For each lab, and together with your new lab team, invest some time to identify a cool, catchy or powerful name for your lab. The name of your new "scientific instrument" may help strengthen your scientific brand when you communicate with colleagues, collaborators and other interested parties.')]),e._v(" "),a("h3",{attrs:{id:"_4-plan-your-lab-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-plan-your-lab-resources"}},[e._v("#")]),e._v(" 4. Plan your lab resources")]),e._v(" "),a("p",[e._v("For each lab, and together with your lab team, approximate your initial requirements for storage and computational power that fits your planned experiments.")]),e._v(" "),a("p",[e._v("Your lab will be configured with one default machine that we call the "),a("strong",[a("code",[e._v("home")])]),e._v(" machine. We will deploy your lab with an initial machine type of 4 vCPU and 8 GB of memory (default.b2) that you may upgrade as soon as your lab users are onboarded.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Machine type adjustments")]),e._v(" "),a("p",[e._v("Machine sizes can be adjusted up and down throughout your lab's life cycle from our "),a("RouterLink",{attrs:{to:"/administer-science/service-desk/lab-orders.html#compute"}},[e._v("service desk")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("You home machine will be configured with three where you need to the initial size.")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("WORK")]),e._v(". This storage volume is intended for day-to-day activities.")]),e._v(" "),a("li",[a("em",[e._v("ARCHIVE")]),e._v(". This storage volume is intended for long-term data archiving.")]),e._v(" "),a("li",[a("em",[e._v("SCRATCH")]),e._v(". This storage volume is intended for temporary files. Restore is -not- activated for this volume.")])]),e._v(" "),a("p",[e._v("The combined minimum allocation for the three volumes are 1 terabyte (1000 gigabytes). To illustrate, a typical setup for epidemiology labs may be 300 GB for "),a("code",[e._v("work")]),e._v(", 300 GB for "),a("code",[e._v("scratch")]),e._v(" and 400 GB for "),a("code",[e._v("archive")]),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"/contact"}},[e._v("Contact")]),e._v(" us if you think we can help in the process of guiding your initial storage sizes.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Duplicate data copies")]),e._v(" "),a("p",[e._v("The configuration of "),a("code",[e._v("work")]),e._v(" and "),a("code",[e._v("scratch")]),e._v(" volumes comes with 30 days default restore functionality of data (backup). This service duplicates the data on these volumes. Thus, in your planning you might want to double the volume size compared to the data you plan to add on the volumes.")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Constraint on downgrades")]),e._v(" "),a("p",[e._v("Storage volumes can be increased -not decreased- in size throughout your lab's lifecycle, and you pay per allocated terabyte. Therefore, we advice labs to start small and increase their storage volume sizes in sync with the data growth.")])]),e._v(" "),a("p",[e._v("Your home machine type and attached storage will be billed in accordance with our price list. Head over to our "),a("a",{attrs:{href:"/administer-science/prices/introduction"}},[e._v("prices section")]),e._v(" to read more about the price model, see our price list and test your cost in our "),a("RouterLink",{attrs:{to:"/administer-science/prices/calculator/"}},[e._v("prices calculator")]),e._v(". Note that the default configuration of home machines are priced as one year commitment.")],1),e._v(" "),a("p",[a("a",{attrs:{href:"/contact"}},[e._v("Contact us ")]),e._v(" for guidance on both generic and tailored setups if you think we may help.")]),e._v(" "),a("h3",{attrs:{id:"_5-prepare-your-lab-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-prepare-your-lab-order"}},[e._v("#")]),e._v(" 5. Prepare your lab order")]),e._v(" "),a("ul",[a("li",[e._v('Download the "'),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#lab-order"}},[e._v("Lab order")]),e._v('" on your local computer (right click on the link and select "Save Link As...")')],1),e._v(" "),a("li",[e._v('Open the PDF on your local computer and either (i) print and complete the fields by hand or (i) open in an PDF-editor and complete the fields digitally. Field descriptions are included in the "Clarification of the form fields" under the link above.')]),e._v(" "),a("li",[e._v("Add your own signature and the signature of the lab leader.")])]),e._v(" "),a("h3",{attrs:{id:"_6-place-your-lab-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-place-your-lab-order"}},[e._v("#")]),e._v(" 6. Place your lab order")]),e._v(" "),a("p",[e._v("Head over to our service desk to place your lab order.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Service desk")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/administer-science/service-desk/data-space-orders.html#new-lab"}},[e._v("Click here to order your lab")])],1)]),e._v(" "),a("ul",[a("li",[e._v("(1) Attach the PDF-file of the lab order that includes both the signature of the data space leader and lab leader.")]),e._v(" "),a("li",[e._v("(2) Add your preferred storage volume sizes in the email template.")])]),e._v(" "),a("h3",{attrs:{id:"_7-add-your-first-lab-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-add-your-first-lab-users"}},[e._v("#")]),e._v(" 7. Add your first lab users")]),e._v(" "),a("p",[e._v("Now that your lab order is signed, sealed and deliver, it's a good time for your lab leader to identify the lab users that will be using the lab.")]),e._v(" "),a("p",[e._v("You lab leader is responsible for the identification and verification of individual lab users that they authorize access to the lab that they manage. Such authorizations are documented in individual user agreements for each user in each lab they will access.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Service desk")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/administer-science/service-desk/lab-orders.html#add-a-new-lab-user"}},[e._v("Click here to add users to your lab")])],1)]),e._v(" "),a("ul",[a("li",[e._v('Download the "'),a("RouterLink",{attrs:{to:"/administer-science/agreements/downloads/#user-agreement"}},[e._v("User agreement")]),e._v('" on your local computer (right click on the link and select "Save Link As...").')],1),e._v(" "),a("li",[e._v('Open the PDF on your local computer and either (i) print and complete the fields by hand or (i) open in an PDF-editor and complete the fields digitally. Field descriptions are included in the "Clarification of the form fields" under the link above.')]),e._v(" "),a("li",[e._v("Ensure that both the lab leader and the new user sign the agreement.")]),e._v(" "),a("li",[e._v("Forword the signed agreements us using the service desk link above.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Start with your core team")]),e._v(" "),a("p",[e._v("We recommend that you onboard no more than three lab users as a start, including your technical data space coordinator, so we can ensure that both data and tools are in place as you like before the full team enters your lab.")])]),e._v(" "),a("p",[e._v("Well done! Time for fresh coffee!")])])}),[],!1,null,null,null);t.default=o.exports}}]);