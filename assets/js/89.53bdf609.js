(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{724:function(e,t,a){"use strict";a.r(t);var s=a(40),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"service-desk-orders-for-lab-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-desk-orders-for-lab-users"}},[e._v("#")]),e._v(" Service desk orders for lab users")]),e._v(" "),a("p",[a("strong",[e._v("This page list predefined service orders for active users in one or more labs. To place an order, click the blue button and send us a pre-filled email with required information.")])]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#lab-access"}},[e._v("Lab access")]),a("ul",[a("li",[a("a",{attrs:{href:"#workbench-access"}},[e._v("Workbench access")])]),a("li",[a("a",{attrs:{href:"#workbench-reissue"}},[e._v("Workbench reissue")])]),a("li",[a("a",{attrs:{href:"#ssh-passphrase-reset"}},[e._v("SSH passphrase reset")])]),a("li",[a("a",{attrs:{href:"#deactivate-lab-access"}},[e._v("Deactivate lab access")])])])]),a("li",[a("a",{attrs:{href:"#system-access"}},[e._v("System access")]),a("ul",[a("li",[a("a",{attrs:{href:"#vpn-access-list"}},[e._v("VPN access list")])]),a("li",[a("a",{attrs:{href:"#vpn-certificate-reset"}},[e._v("VPN certificate reset")])]),a("li",[a("a",{attrs:{href:"#google-authenticator-key-reset"}},[e._v("Google authenticator key reset")])])])]),a("li",[a("a",{attrs:{href:"#applications"}},[e._v("Applications")]),a("ul",[a("li",[a("a",{attrs:{href:"#mobaxterm-configuration-file"}},[e._v("MobaXterm configuration file")])])])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Save time")]),e._v(" "),a("p",[e._v("It saves you time to send us the request from your "),a("strong",[e._v("organizational email")]),e._v(". We use this for identification, and request from private emails need additional verification that takes longer.")])]),e._v(" "),a("p",[e._v("Send us a regular "),a("a",{attrs:{href:"/contact"}},[e._v("email")]),e._v(" with your request if you can't find what you are looking for on the this page.")]),e._v(" "),a("h2",{attrs:{id:"lab-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab-access"}},[e._v("#")]),e._v(" Lab access")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("New users")]),e._v(" "),a("p",[e._v("The service orders below are aimed at active lab users. Lab access for new users are ordered by lab leaders or lab coordinators from our "),a("a",{attrs:{href:"/service-desk/lab-orders"}},[e._v("lab orders page")]),e._v(" using the "),a("a",{attrs:{href:"/service-desk/lab-orders#new-lab-user"}},[e._v("new lab user")]),e._v(" button.")])]),e._v(" "),a("h3",{attrs:{id:"workbench-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workbench-access"}},[e._v("#")]),e._v(" Workbench access")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/working-in-your-lab/workbench/"}},[e._v("Workbench")]),e._v(" provides smooth access to modern data science tools such as Jupyter Notebooks, Python, RStudio, R, Stata notebook or MATLAB.")],1),e._v(" "),a("ServiceDesk",{attrs:{title:"Request Workbench access",template:{subject:"Workbench order - {username} @ {labname}",body:"Hi HUNT Cloud team,\n\nI would like to try Workbench in {labname}.\n\nI have installed and activated the Signal app on my phone and are looking forward to receive my key and certificate.\n\nThese are the tools I plan to use: {tools}.\n\n—  \nKind regards,  \n\n"},fields:[{label:"Username",key:"username",pattern:"[-a-z0-9._]{3,}",hint:"Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.",field:"textfield"},{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"},{label:"Tools",key:"tools",field:"selector",options:["Rstudio","Jupyter","Python",{text:"MATLAB (need license)",value:"MATLAB"},{text:"Stata (need license)",value:"Stata"}],default:["Rstudio","Jupyter","Python"]}]}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" All active lab users.")]),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" Workbench access key and certificate.")]),e._v(" "),a("li",[a("strong",[e._v("Requirement:")]),e._v(" (1) Active Signal app on phone. (2) Active license from your host organization for MATLAB and Stata for these to be installed.")]),e._v(" "),a("li",[a("strong",[e._v("Next step:")]),e._v(" "),a("RouterLink",{attrs:{to:"/guides/workbench-request/"}},[e._v("Prepare your key transfer")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in the lab subscription.")])]),e._v(" "),a("h3",{attrs:{id:"workbench-reissue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workbench-reissue"}},[e._v("#")]),e._v(" Workbench reissue")]),e._v(" "),a("p",[e._v("If you have existing Workbench setup and your certificate has expired request new one.")]),e._v(" "),a("ServiceDesk",{attrs:{title:"Request Workbench reissue",template:{subject:"Workbench reissue - {username} @ {labname}",body:"Hi HUNT Cloud team,\n\nI would like to request reissue of Workbench certificate for lab: {labname}.\n\nI have installed and activated the Signal app on my phone and are looking forward to receive my certificate. \n\n\nKind regards,\n"},fields:[{label:"Username",key:"username",pattern:"[-a-z0-9._]{3,}",hint:"Username should include only lowercase letters a-z, 0-9, dash, underscore, or dot.",field:"textfield"},{label:"Lab name",key:"labname",pattern:"[-a-z0-9]{3,}",hint:"Lab name should include only lowercase letters a-z, 0-9, or dash.",field:"textfield"}]}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" All active lab users.")]),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" Workbench certificate.")]),e._v(" "),a("li",[a("strong",[e._v("Requirement:")]),e._v(" (1) Active Signal app on phone.")]),e._v(" "),a("li",[a("strong",[e._v("Next step:")]),e._v(" "),a("RouterLink",{attrs:{to:"/guides/workbench-reissue-certificate/"}},[e._v("Guide on Workbench reissue")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in the lab subscription.")])]),e._v(" "),a("h3",{attrs:{id:"ssh-passphrase-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-passphrase-reset"}},[e._v("#")]),e._v(" SSH passphrase reset")]),e._v(" "),a("p",[e._v("Order a "),a("RouterLink",{attrs:{to:"/guides/configure-ssh/"}},[e._v("SSH passphrase reset")]),e._v(" that you may need to access your workbench and install software on your home machine.")],1),e._v(" "),a("div",{staticClass:"home",staticStyle:{padding:"0px"}},[a("div",{staticClass:"hero"},[a("p",{staticClass:"action"},[a("a",{staticClass:"nav-link external action-button",attrs:{href:"mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=SSH%20passphrase%20reset%20-%20%7Busername%7D%20%40%20%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20passphrase%20reset%20for%20my%20user%20%7Busername%7D%20%40%20%7Blabname%7D.%0A%0AI%20have%20activated%20Signal%20on%20my%20phone%20and%20are%20looking%20forward%20to%20receive%20my%20temporary%20key%20here.%0A%0ABest%2C"}},[e._v("\n    Request SSH passphrase reset\n  ")])])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" All active lab users.")]),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" Temporary passphrase on Signal.")]),e._v(" "),a("li",[a("strong",[e._v("Requirement:")]),e._v(" Active Signal app on your phone.")]),e._v(" "),a("li",[a("strong",[e._v("Next step:")]),e._v(" "),a("RouterLink",{attrs:{to:"/guides/configure-ssh/"}},[e._v("Guide on the passphrase reset")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in the lab subscription.")])]),e._v(" "),a("h3",{attrs:{id:"deactivate-lab-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deactivate-lab-access"}},[e._v("#")]),e._v(" Deactivate lab access")]),e._v(" "),a("p",[e._v("Head over to the "),a("a",{attrs:{href:"/service-desk/lab-orders#deactivate-lab-user"}},[e._v("lab orders page")]),e._v(" to deactivate your lab access.")]),e._v(" "),a("h2",{attrs:{id:"system-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-access"}},[e._v("#")]),e._v(" System access")]),e._v(" "),a("h3",{attrs:{id:"vpn-access-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vpn-access-list"}},[e._v("#")]),e._v(" VPN access list")]),e._v(" "),a("p",[e._v("We allow connection from known IP addresses only outside Norway. Access from networks outside Norway needs to be requested included in our VPN access list.")]),e._v(" "),a("div",{staticClass:"home",staticStyle:{padding:"0px"}},[a("div",{staticClass:"hero"},[a("p",{staticClass:"action"},[a("a",{staticClass:"nav-link external action-button",attrs:{href:"mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=VPN%20access%20opening%20request%20-%20%7Busername%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20an%20VPN%20access%20opening%20for%20the%20following%20IP%20address%3A%20%0A%0Aaccess_ip%3D%7BIP4-address%7D%20%20%0Aaccess_duration%3D%7BPermanent/Temporary%7D%0Aaccess_country%3D%7BCountry%7D%0A%0AI%20am%20looking%20forward%20to%20be%20notified%20on%20email%20when%20the%20opening%20is%20implemented.%0A%0ABest%2C"}},[e._v("\n    Request VPN access list opening\n  ")])])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" All active lab users.")]),e._v(" "),a("li",[a("strong",[e._v("Required information")]),e._v(": "),a("a",{attrs:{href:"http://ip4.me",target:"_blank",rel:"noopener noreferrer"}},[e._v("Your IP4 address"),a("OutboundLink")],1),e._v(", location and purpose (see below).")]),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" One day.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" Opening communicated on email.")]),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in the lab subscription.")])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("About the required information")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("access_ip")]),e._v(". This is the external IP from your local machine that is visible for us when you connect. "),a("a",{attrs:{href:"http://ip4.me",target:"_blank",rel:"noopener noreferrer"}},[e._v("Click here"),a("OutboundLink")],1),e._v(' to locate your address. Note that IPs that starts with "10.", "192." and "172." are internal addresses that will not work.')]),e._v(" "),a("li",[a("strong",[e._v("access_duration")]),e._v('. State if you request a "permanent" or "temporary" access from the address. Permanent openings will follow your user duration. If you need temporary access during travels or similar, state the desired duration of the opening.')]),e._v(" "),a("li",[a("strong",[e._v("access_country")]),e._v(". State from which country you will be connecting.")])])]),e._v(" "),a("h3",{attrs:{id:"vpn-certificate-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vpn-certificate-reset"}},[e._v("#")]),e._v(" VPN certificate reset")]),e._v(" "),a("p",[e._v("You may need to reset your VPN certificate when you get a new local machine or if you need a new VPN passphrase.")]),e._v(" "),a("div",{staticClass:"home",staticStyle:{padding:"0px"}},[a("div",{staticClass:"hero"},[a("p",{staticClass:"action"},[a("a",{staticClass:"nav-link external action-button",attrs:{href:"mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=VPN%20certificate%20reset%20-%20%7Busername%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20reset%20my%20VPN%20certificate.%20%0A%0AI%20have%20an%20active%20Signal%20account%20on%20my%20phone%2C%20and%20are%20looking%20forward%20to%20receive%20my%20new%20VPN%20passphrase%20on%20the%20phone%20and%20a%20link%20to%20the%20new%20VPN%20certificate%20on%20my%20organizational%20email.%0A%0AI%20am%20aware%20that%20my%20lab%20access%20will%20be%20paused%20from%20the%20new%20certificate%20is%20issued%20and%20until%20I%20have%20installed%20the%20new%20certificate%20on%20my%20local%20machine.%0A%0ABest%2C"}},[e._v("\n    Request VPN certificate reset\n  ")])])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" All active lab users.")]),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" VPN passphrase on Signal, link to VPN certificate on email.")]),e._v(" "),a("li",[a("strong",[e._v("Requirement:")]),e._v(" Active Signal app on your phone.")]),e._v(" "),a("li",[a("strong",[e._v("Next step:")]),e._v(" "),a("RouterLink",{attrs:{to:"/guides/vpn-certificate-reset/"}},[e._v("Guide on the VPN reset")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in the lab subscription.")])]),e._v(" "),a("h3",{attrs:{id:"google-authenticator-key-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-authenticator-key-reset"}},[e._v("#")]),e._v(" Google authenticator key reset")]),e._v(" "),a("p",[e._v("You will need to reset the "),a("RouterLink",{attrs:{to:"/guides/google-authenticator-reset/"}},[e._v("Google Authenticator key")]),e._v(" that you need to access the HUNT Cloud VPN, for example when you change your phone.")],1),e._v(" "),a("div",{staticClass:"home",staticStyle:{padding:"0px"}},[a("div",{staticClass:"hero"},[a("p",{staticClass:"action"},[a("a",{staticClass:"nav-link external action-button",attrs:{href:"mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=Google%20authenticator%20key%20request%20-%20%7Busername%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20new%20Google%20authenticator%20key%20for%20my%20VPN%20access.%20%0A%0AAlternative%201%3A%20%0A%0AI%20have%20an%20active%20Signal%20account%20on%20the%20same%20phone%20number%20that%20is%20registered%20in%20my%20user%20account%20and%20are%20looking%20forward%20to%20receive%20my%20new%20key%20on%20my%20phone.%0A%0AAlternative%202%3A%20%0A%0APlease%20note%20that%20I%20have%20a%20new%20phone%20number%20%28%2B00-0000000%29.%20I%20have%20activated%20Signal%20on%20this%20number%20and%20are%20looking%20forward%20to%20receive%20my%20new%20key%20on%20the%20app.%0A%0ABest%2C"}},[e._v("\n    Request Google authenticator key reset\n  ")])])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" All active lab users.")]),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" New key on Signal.")]),e._v(" "),a("li",[a("strong",[e._v("Requirement:")]),e._v(" Active Signal app on your phone.")]),e._v(" "),a("li",[a("strong",[e._v("Next step:")]),e._v(" "),a("RouterLink",{attrs:{to:"/guides/google-authenticator-reset/"}},[e._v("Guide on the key reset")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in the lab subscription.")])]),e._v(" "),a("h2",{attrs:{id:"applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applications"}},[e._v("#")]),e._v(" Applications")]),e._v(" "),a("h3",{attrs:{id:"mobaxterm-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobaxterm-configuration-file"}},[e._v("#")]),e._v(" MobaXterm configuration file")]),e._v(" "),a("p",[e._v("You may simplify your MobaXterm configuration using a predefined file with credentials and configuration during setup.")]),e._v(" "),a("div",{staticClass:"home",staticStyle:{padding:"0px"}},[a("div",{staticClass:"hero"},[a("p",{staticClass:"action"},[a("a",{staticClass:"nav-link external action-button",attrs:{href:"mailto:cloud.support+hunt-cloud-request@hunt.ntnu.no?subject=MobaXterm%20file%20-%20%7Busername%7D%40%7Blabname%7D&body=Hi%20HUNT%20Cloud%20team%2C%0A%0AI%20would%20like%20to%20request%20a%20new%20MobXterm%20configuration%20file.%20%0A%0AI%20am%20looking%20forward%20to%20receive%20my%20file%20over%20email%2C%20and%20then%20head%20over%20to%20the%20docs%20to%20get%20going%20on%20the%20configuration%3A%20%0A%0Ahttps%3A//docs.hdc.ntnu.no/working-in-your-lab/technical-tools/mobaxterm/%0A%0ABest%2C"}},[e._v("\n    Request MobaXterm configuration file\n  ")])])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Who can order:")]),e._v(" All active lab users.")]),e._v(" "),a("li",[a("strong",[e._v("Expected response time:")]),e._v(" Days.")]),e._v(" "),a("li",[a("strong",[e._v("Expected delivery:")]),e._v(" File as email attachment.")]),e._v(" "),a("li",[a("strong",[e._v("Requirement:")]),e._v(" Active SSH connection.")]),e._v(" "),a("li",[a("strong",[e._v("Next step:")]),e._v(" "),a("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/mobaxterm/"}},[e._v("MobaXterm configuration guide")]),e._v(".")],1),e._v(" "),a("li",[a("strong",[e._v("Cost:")]),e._v(" Included in the lab subscription.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);