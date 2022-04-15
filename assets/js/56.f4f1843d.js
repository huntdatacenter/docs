(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{563:function(a,t,e){"use strict";e.r(t);var s=e(34),o=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"internal-kista"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-kista"}},[a._v("#")]),a._v(" Internal kista")]),a._v(" "),e("p",[e("strong",[a._v("Internal kistas provide labs with a simple and controlled way to transfer data between two labs inside HUNT Cloud.")])]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#order"}},[a._v("Order")])]),e("li",[e("a",{attrs:{href:"#roles"}},[a._v("Roles")])]),e("li",[e("a",{attrs:{href:"#connect"}},[a._v("Connect")])]),e("li",[e("a",{attrs:{href:"#upload"}},[a._v("Upload")])]),e("li",[e("a",{attrs:{href:"#download"}},[a._v("Download")])]),e("li",[e("a",{attrs:{href:"#troubleshooting"}},[a._v("Troubleshooting")])])])]),e("p"),a._v(" "),e("p",[a._v("In short, internal kistas are short-lived and hardened "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"}},[a._v("SFTP"),e("OutboundLink")],1),a._v(" servers dedicated to one data transaction between two labs.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("This page describes the practical aspects of kista transfers. Head over to our "),e("RouterLink",{attrs:{to:"/faq/internal-transfer/"}},[a._v("internal transfer")]),a._v(" section in the FAQ for more information on the service itself.")],1)]),a._v(" "),e("h2",{attrs:{id:"order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[a._v("#")]),a._v(" Order")]),a._v(" "),e("p",[a._v("Lab leaders and lab coordinators can order internal kistas in our "),e("RouterLink",{attrs:{to:"/service-desk/lab-orders/#internal-kista"}},[a._v("service desk")]),a._v(".")],1),a._v(" "),e("h2",{attrs:{id:"roles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[a._v("#")]),a._v(" Roles")]),a._v(" "),e("p",[a._v("The kista order defines two roles that we will use in this document:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Uploader")]),a._v(". This is the lab user in the lab that has ordered the Kista and that will provide (upload) data.")]),a._v(" "),e("li",[e("strong",[a._v("Downloader")]),a._v(". This the lab user in the lab that will receive (download) data.")])]),a._v(" "),e("p",[a._v("We wil notify the lab user that registered as the uploader when the kista is deployed. The uploader is responsible for notifying the downloader when data is uploaded and ready to be downloaded.")]),a._v(" "),e("h2",{attrs:{id:"connect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[a._v("#")]),a._v(" Connect")]),a._v(" "),e("p",[a._v("You can view the kista transfer information directly from your home machine both as a uploader and downloader:")]),a._v(" "),e("ol",[e("li",[a._v("Log into your home machine")]),a._v(" "),e("li",[a._v("View the kista transfer information in the "),e("strong",[e("code",[a._v("/opt/hunt-cloud/kista/")])]),a._v(" folder:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- List kista transfer information files")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /opt/hunt-cloud/kista/\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Principle example to see transfer information")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /opt/hunt-cloud/kista/*"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("number"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("*\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Practical example to see transfer information")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /opt/hunt-cloud/kista/*5623*\n")])])]),e("p",[a._v("The transfer information will look similar to this:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("### SFTP account information")]),a._v("\nProtocol: "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sftp")]),a._v("\nServer: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.42")]),a._v(".132."),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("number"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nPort: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("\nUsername: "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("role"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[e("em",[a._v('Note. The information above is for illustration and will not work for your connection. Your account information will contain different information for the "Server" and "Username".')])]),a._v(" "),e("p",[a._v("Next, connect to your kista using the SFTP protocol. This may seem unfamiliar at first, however its simple to use once you get going:")]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("From your home machine, connect to the kista over SFTP using the transfer information collected above.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Principal example")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sftp")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("usernam"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("-"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("role"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("@10.42.132."),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("number"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Demo example uploader")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sftp")]),a._v(" demouser-upload@10.42.132.118\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Demo example downloader")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sftp")]),a._v(" demouser-download@10.42.132.118\n")])])]),e("p",[a._v("When successfully connected, you should see the following message in your terminal:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Connected to 10.42.132.<number>.\nsftp>\n")])])]),e("h2",{attrs:{id:"upload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload"}},[a._v("#")]),a._v(" Upload")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("This section is aimed at the lab user that will "),e("strong",[a._v("upload")]),a._v(" data to a kista. See the "),e("a",{attrs:{href:"#download"}},[a._v("download section")]),a._v(" if you plan to download data to your lab.")])]),a._v(" "),e("ol",[e("li",[a._v("Once inside your kista, move to the "),e("strong",[e("code",[a._v("upload")])]),a._v(" folder.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" upload\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Upload a file or folder by specifying its local path on your home machine.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Upload individual file")]),a._v("\nput /mnt/cargo/example-file1.txt\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Upload folder")]),a._v("\nput -r /mnt/cargo/example-directory/\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("List files the current directory to verify the transfer")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -lah\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("Disconnect from your the SFTP-server")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("quit\n")])])]),e("p",[a._v("For large uploads, "),e("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/terminal-multiplexers/#gnu-screen"}},[a._v("terminal multiplexers")]),a._v(" can be a handy tool allowing for the transfer to continue even when you log off from your home machine.")],1),a._v(" "),e("p",[a._v("You can resume an upload with this command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("reput /mnt/cargo/example-file1.txt\n")])])]),e("h2",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[a._v("#")]),a._v(" Download")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("This section is aimed at the lab user that will "),e("strong",[a._v("download")]),a._v(" data from a kista. See the "),e("a",{attrs:{href:"#upload"}},[a._v("upload section")]),a._v(" if you plan to download data to your lab.")])]),a._v(" "),e("ol",[e("li",[a._v("Once inside your kista, move to the "),e("strong",[e("code",[a._v("upload")])]),a._v(" folder.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" upload\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("List files in the current directory.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -lah\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Download a file or folder by specifying the file or folder name and the local path that you want to download to.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Principal example")]),a._v("\nget "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sftp-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("home-machine-folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Download individual file")]),a._v("\nget example-filename1.txt /mnt/cargo/\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Download folder")]),a._v("\nget -r example-directory /mnt/cargo/\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Disconnect from your the SFTP-server")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("quit\n")])])]),e("p",[a._v("For large downloads, "),e("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/terminal-multiplexers/#gnu-screen"}},[a._v("terminal multiplexers")]),a._v(" can be a handy tool allowing for the transfer to continue even when you log off from your home machine.")],1),a._v(" "),e("p",[a._v("You can resume a download with this command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("reget /mnt/cargo/example-file1.txt\n")])])]),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),e("h4",{attrs:{id:"warning-remote-host-identification-has-changed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#warning-remote-host-identification-has-changed"}},[a._v("#")]),a._v(" WARNING: Remote host identification has changed")]),a._v(" "),e("p",[a._v("You might see this warning message when you log into a kista that has been rebuild on the same IP as you have used for a previous kista transport.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("Solution")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/troubleshooting/connection/#warning-remote-host-identification-has-changed"}},[a._v("Click here")]),a._v(" to see the full message and explanation in our main troubleshooting section. You may ignore this message if you connect to a kista inside your lab.")],1),a._v(" "),e("p",[a._v("You can remove the message and proceed with the login by running the command that is stated at the end of the screen message similar to:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("ssh-keygen -f "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/home/<username>/.ssh/known_hosts"')]),a._v(" -R "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10.42.<number>.<number>"')]),a._v("\n")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);