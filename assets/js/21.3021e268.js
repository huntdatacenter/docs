(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{435:function(e,t,o){e.exports=o.p+"assets/img/tunnelblick-login.5aa67b9e.png"},572:function(e,t,o){"use strict";o.r(t);var n=o(34),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"step-2-configure-your-vpn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-your-vpn"}},[e._v("#")]),e._v(" Step 2. Configure your VPN")]),e._v(" "),n("p",[e._v("This step configure an encrypted connection between your local machine and your lab. The specific steps are dependent on the operating system on your local machine.")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Requirement")]),e._v(" "),n("p",[e._v("Successful "),n("RouterLink",{attrs:{to:"/getting-started/collect-your-keys/#_1-4-verify-your-key-collection"}},[e._v("verification")]),e._v(" of Step 1.")],1)]),e._v(" "),n("h2",{attrs:{id:"_2-1-install-the-vpn-software"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-install-the-vpn-software"}},[e._v("#")]),e._v(" 2.1 Install the VPN software")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Windows")]),e._v(" "),n("p",[e._v("We use the open-source application "),n("code",[e._v("OpenVPN")]),e._v(" to ensure encrypted communication between your local machine and us.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://openvpn.net/community-downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install OpenVPN using the latest Windows Installer"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Click on the link above, scroll down to the file named "),n("strong",[n("code",[e._v("OpenVPN-<version-number>-i601-amd64.msi")])]),e._v(" (Windows 10 users), download the file and follow the on-screen installation instructions.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Windows users from NTNU can install OpenVPN community edition\nusing NTNU Software Center even without administrative rights.\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[n("strong",[e._v("You will need administrative rights on your local machine to successfully install OpenVPN.")])]),e._v(" "),n("p",[e._v("Click on the link below if you do not hold administrative rights on your local machine, or don't know if you have such rights.")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Installing OpenVPN without administrative rights")]),e._v(" "),n("p",[e._v("You can check if you have administrative rights on your local machine by running "),n("strong",[n("code",[e._v('net localgroup "Administrators"')])]),e._v(" in a "),n("a",{attrs:{href:"https://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/",target:"_blank",rel:"noopener noreferrer"}},[e._v("command prompt"),n("OutboundLink")],1),e._v(" and see if your username is listed.")]),e._v(" "),n("p",[n("strong",[e._v("Request assistance from your local IT personnel if you do not hold administrative rights on your local machine and request that they:")])]),e._v(" "),n("p",[e._v("(1) assist you in the OpenVPN installation, or")]),e._v(" "),n("p",[e._v("(2) grant you administrative rights on your local machine so you can install OpenVPN yourself.")]),e._v(" "),n("p",[e._v("For simplicity, we have outlined the steps they need to perform below which you can attach to your request.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('1. Install the OpenVPN client on the computer for my user:\n    Download and install using the Windows installer from https://openvpn.net/index.php/open-source/downloads.html\n\n2. Create an OpenVPN Administrators group on my computer:\n    net localgroup /add "OpenVPN Administrators"\n\n3. Add my user to OpenVPN Administrators group on my computer:\n    net localgroup "OpenVPN Administrators" /add <DOMAIN>\\<USERNAME>\n')])])])])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("OS X and macOS")]),e._v(" "),n("p",[e._v("We use Tunnelblick to ensure encrypted communication between your local machine and us.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://tunnelblick.net/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install the latest "),n("strong",[e._v("'stable release'")]),e._v(" from this page"),n("OutboundLink")],1)])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Ubuntu Linux")]),e._v(" "),n("p",[e._v("We use OpenVPN to ensure encrypted communication between your local machine and us.")]),e._v(" "),n("p",[e._v("Install the "),n("strong",[n("code",[e._v("openvpn")])]),e._v(" and "),n("strong",[n("code",[e._v("network-manager-openvpn-gnome")])]),e._v(" packages from the standard repositories.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" openvpn network-manager-openvpn-gnome\n")])])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Other Linux distributions")]),e._v(" "),n("p",[e._v("You have a few options on how to install OpenVPN clients in other distributions:")]),e._v(" "),n("ul",[n("li",[e._v("Install the "),n("strong",[n("code",[e._v("openvpn")])]),e._v(" package from the official distribution repository.")]),e._v(" "),n("li",[e._v("Add the "),n("a",{attrs:{href:"https://community.openvpn.net/openvpn/wiki/OpenvpnSoftwareRepos",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenVPN community repository"),n("OutboundLink")],1),e._v(" and install the "),n("strong",[n("code",[e._v("openvpn")])]),e._v(" package.")]),e._v(" "),n("li",[e._v("Download the latest "),n("a",{attrs:{href:"https://openvpn.net/index.php/open-source/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("source tarball"),n("OutboundLink")],1),e._v(" from OpenVPN and install.")])]),e._v(" "),n("p",[e._v('After the installation, follow the "Ubuntu Linux" guides below on how to setup and connect.')])]),e._v(" "),n("h2",{attrs:{id:"_2-2-setup-the-vpn-profile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-setup-the-vpn-profile"}},[e._v("#")]),e._v(" 2.2 Setup the VPN profile")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Windows")]),e._v(" "),n("ol",[n("li",[e._v("Start the OpenVPN client (if it is not running already)")]),e._v(" "),n("li",[e._v("Right-click on the OpenVPN "),n("a",{attrs:{href:"https://pchelp.ricmedia.com/wp-content/uploads/connect-vpn-using-openvpn-on-windows/openvpn-gui-taskbar-icon.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("notification icon"),n("OutboundLink")],1),e._v(" on the taskbar")]),e._v(" "),n("li",[e._v("Select "),n("strong",[n("code",[e._v("Import file...")])])]),e._v(" "),n("li",[e._v("Select the OpenVPN profile file named "),n("strong",[n("code",[e._v("<username>.ovpn")])]),e._v(" that you collected in Step 1.")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("OS X and macOS")]),e._v(" "),n("p",[n("strong",[e._v("2.2.1 If you 'do' get prompted with the "),n("code",[e._v("Welcome to Tunnelblick")]),e._v(" message, follow these steps:")])]),e._v(" "),n("ol",[n("li",[e._v("Select "),n("strong",[n("code",[e._v("I have configuration files")])]),e._v(".")]),e._v(" "),n("li",[e._v("In the "),n("strong",[n("code",[e._v("Welcome to Tunnelblick")])]),e._v(" prompt, select "),n("strong",[n("code",[e._v("I have configuration files")])]),e._v(".")]),e._v(" "),n("li",[e._v("When prompted for which type of configuration you have, select "),n("strong",[n("code",[e._v("OpenVPN Configurations")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the OpenVPN profile named. "),n("strong",[n("code",[e._v("<username>.ovpn")])]),e._v(" in the collection of credentials given from HUNT.")]),e._v(" "),n("li",[e._v("Continue with the "),n("strong",[n("code",[e._v("Connecting to the VPN section")])]),e._v(" below.")])]),e._v(" "),n("p",[n("strong",[e._v("2.2.2 If you 'do not' get prompted with the "),n("code",[e._v("Welcome to Tunnelblick")]),e._v(" message, follow these steps:")])]),e._v(" "),n("ol",[n("li",[e._v("Find the OpenVPN profile named "),n("strong",[n("code",[e._v("<username>.ovpn")])]),e._v(" that you collected in Step 1.")]),e._v(" "),n("li",[e._v("Right-click the file OpenVPN profile named "),n("strong",[n("code",[e._v("<username>.ovpn")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select "),n("strong",[n("code",[e._v("Open With -> Tunnelblick")])]),e._v(".")]),e._v(" "),n("li",[e._v("When prompted for "),n("strong",[n("code",[e._v("Install Configuration For All Users")])]),e._v(", select "),n("strong",[n("code",[e._v("Only Me")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter your macOS password to allow Tunnelblick to install the OpenVPN configuration.")]),e._v(" "),n("li",[e._v("Continue with the "),n("strong",[n("code",[e._v("Connecting to the VPN section")])]),e._v(" below.")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Ubuntu Linux")]),e._v(" "),n("ol",[n("li",[e._v("Click on the "),n("em",[e._v("Network Manager")]),e._v(" icon in the task bar.")]),e._v(" "),n("li",[e._v("Select "),n("em",[e._v("Edit Connections...")]),e._v(".")]),e._v(" "),n("li",[e._v("Click "),n("em",[e._v("Add")]),e._v(".")]),e._v(" "),n("li",[e._v("Choose "),n("em",[e._v("Import a saved VPN configuration")]),e._v(" and click "),n("em",[e._v("Create")]),e._v(".")]),e._v(" "),n("li",[e._v("Select the OpenVPN profile named "),n("strong",[n("code",[e._v("<username>.ovpn")])]),e._v(" that you collected in Step 1.")]),e._v(" "),n("li",[e._v("Enter your user name (same as the OpenVPN profile file name).")]),e._v(" "),n("li",[e._v("Click on the person icon in the "),n("em",[e._v("Password")]),e._v(" field and select "),n("strong",[n("code",[e._v("Ask for this password every time")])]),e._v(".")]),e._v(" "),n("li",[e._v("Enter the "),n("em",[e._v("Private Key Password")]),e._v(" with the "),n("strong",[n("code",[e._v("VPN passphrase")])]),e._v(" sent to you from HUNT over Signal.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[e._v("IPv4 Settings")]),e._v(" tab.")]),e._v(" "),n("li",[e._v("Click "),n("em",[e._v("Routes...")]),e._v(".")]),e._v(" "),n("li",[e._v("Select the "),n("em",[e._v("Use this connection only for resources on its network")]),e._v(" and click "),n("em",[e._v("OK")]),e._v(".")]),e._v(" "),n("li",[e._v("Click "),n("em",[e._v("Apply")]),e._v(".")])])]),e._v(" "),n("h2",{attrs:{id:"_2-3-connect-to-the-vpn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-connect-to-the-vpn"}},[e._v("#")]),e._v(" 2.3 Connect to the VPN")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Windows")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Right-click on the OpenVPN notification icon on the taskbar.")])]),e._v(" "),n("li",[n("p",[e._v("Select "),n("em",[e._v("Connect")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Enter your user name (same as the OpenVPN profile file name).")])]),e._v(" "),n("li",[n("p",[e._v("Enter a rotating "),n("strong",[n("code",[e._v("verification code")])]),e._v(" from Google Authenticator as your password.")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Make sure that the "),n("em",[e._v("Save password")]),e._v(" checkbox is "),n("strong",[n("code",[e._v("unchecked")])]),e._v(".")])])]),e._v(" "),n("li",[n("p",[e._v("When prompted for a "),n("em",[e._v("Private Key Password")]),e._v(" or "),n("em",[e._v("Passphrase")]),e._v(", insert the "),n("strong",[n("code",[e._v("VPN passphrase")])]),e._v(" that your collected in Step 1.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Save this passphrase.")])])])]),e._v(" "),n("p",[e._v("Your authentication will fail when you complete your passphrase above. This is expected since your verification code timed out while you typed your passphrase.")]),e._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[e._v("Now try again to connect with a fresh "),n("strong",[n("code",[e._v("verfication code")])]),e._v(" from Google Authenticator.")])]),e._v(" "),n("p",[e._v("You should now be connected to the VPN.")])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("OS X and macOS")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Start Tunnelblick and "),n("strong",[n("code",[e._v("Connect")])])])]),e._v(" "),n("li",[n("p",[e._v("Enter your user name (same as the OpenVPN profile file name)")])]),e._v(" "),n("li",[n("p",[e._v("Enter the "),n("strong",[n("code",[e._v("verification code")])]),e._v(" from Google Authenticator as your password")]),e._v(" "),n("p",[n("img",{attrs:{src:o(435),alt:"tunnelblick-login"}})]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Make sure that the "),n("em",[e._v("Save password")]),e._v(" checkbox is "),n("strong",[n("code",[e._v("unchecked")])]),e._v(".")])])]),e._v(" "),n("li",[n("p",[e._v("When prompted for a "),n("em",[e._v("Private Key Password")]),e._v(" or "),n("em",[e._v("Passphrase")]),e._v(", insert the "),n("strong",[n("code",[e._v("VPN passphrase")])]),e._v(" that you collected in Step 1.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Save this passphrase.")])])])]),e._v(" "),n("p",[e._v("Your authentication will fail when you complete your passphrase above. This is expected since your verification code timed out while you typed your passphrase.")]),e._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[e._v("Now try again to connect with a fresh "),n("strong",[n("code",[e._v("verfication code")])]),e._v(" from Google Authenticator.")])]),e._v(" "),n("p",[e._v("You should now be connected to the VPN.")])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Ubuntu Linux")]),e._v(" "),n("ol",[n("li",[e._v("Click on the "),n("em",[e._v("Network Manager")]),e._v(" icon in the task bar.")]),e._v(" "),n("li",[e._v("Select "),n("em",[e._v("VPN Connections >")]),e._v(" and the name of your profile.")]),e._v(" "),n("li",[e._v("In the "),n("em",[e._v("Authenticate VPN")]),e._v(" window, enter the "),n("strong",[n("code",[e._v("verification code")])]),e._v(" from Google Authenticator in the "),n("em",[e._v("Password")]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click "),n("em",[e._v("OK")]),e._v(" to connect.")])])]),e._v(" "),n("h2",{attrs:{id:"_2-4-verify-your-vpn-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-verify-your-vpn-connection"}},[e._v("#")]),e._v(" 2.4 Verify your VPN connection")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Please invest some time to verify a successful VPN connection as you will not be able to complete Step 3 before your VPN is working.")])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Windows")]),e._v(" "),n("p",[e._v("The OpenVPN notification icon on the taskbar should be green.")])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("OS X and macOS")]),e._v(" "),n("p",[e._v('A small Tunnelblick window should state "Connected" in green letters with a timer that count the connection length.')])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Ubuntu Linux")]),e._v(" "),n("p",[e._v("If you received the notification "),n("em",[e._v("VPN connection has been successfully established")]),e._v(", then you are good to go.")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Next step")]),e._v(" "),n("p",[e._v("If you successfully completed this step, head over to Step 3 to "),n("a",{attrs:{href:"/getting-started/configure-ssh"}},[e._v("Configure your SSH")]),e._v(" connection. If you did not succeed, start with a quick look in our Immediate troubleshooting section below.")])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Immediate troubleshooting")]),e._v(" "),n("p",[e._v("Below are a few immediate things to try if your connection did not succeed:")]),e._v(" "),n("h3",{attrs:{id:"authenticate-vpn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authenticate-vpn"}},[e._v("#")]),e._v(" Authenticate VPN")]),e._v(" "),n("p",[e._v("If the "),n("em",[e._v("Authenticate VPN")]),e._v(" prompt pops up again, then try to log in again with a new "),n("strong",[n("code",[e._v("verification code")])]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"vpn-connection-failed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vpn-connection-failed"}},[e._v("#")]),e._v(" VPN connection failed")]),e._v(" "),n("p",[e._v("If you received the notification "),n("em",[e._v("VPN Connection Failed")]),e._v(" after 60 seconds, please check the following")]),e._v(" "),n("ul",[n("li",[e._v("Verify that you have an active internet connection.")]),e._v(" "),n("li",[e._v("Verify that the "),n("em",[e._v("Private Key Password")]),e._v(" is correct.")])]),e._v(" "),n("h3",{attrs:{id:"unable-to-apply-changes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-apply-changes"}},[e._v("#")]),e._v(" Unable to apply changes")]),e._v(" "),n("p",[e._v("If you are unable to click "),n("em",[e._v("Apply")]),e._v(" after your changes, try to re-enter your "),n("em",[e._v("Private Key Password")]),e._v(" using your "),n("strong",[n("code",[e._v("VPN passphrase")])]),e._v(" that you collected in Step 1.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("If nothing works, please head over to our main "),n("RouterLink",{attrs:{to:"/troubleshooting/connection/#vpn"}},[e._v("troubleshooting")]),e._v(" section for more information on how to troubleshoot connections.")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);