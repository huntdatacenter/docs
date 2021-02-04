(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{433:function(a,t,s){"use strict";s.r(t);var e=s(25),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#r"}},[a._v("#")]),a._v(" R")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.r-project.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("R"),s("OutboundLink")],1),a._v(" is a handy language and environment for statistical computing and graphics.\nWe have already installed the latest version on your home machines.\nFor those of you running unmanaged machines on our security tier 2 may want to upgrade to the latest version using the code below:")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#install-r"}},[a._v("Install R")]),s("ul",[s("li",[s("a",{attrs:{href:"#install-using-conda"}},[a._v("Install using Conda")])]),s("li",[s("a",{attrs:{href:"#install-using-system-packages"}},[a._v("Install using system packages")])]),s("li",[s("a",{attrs:{href:"#upgrade-to-latest-r-version-4-0"}},[a._v("Upgrade to latest R version (4.0)")])]),s("li",[s("a",{attrs:{href:"#downgrade-to-a-specific-r-version-iaas-machines"}},[a._v("Downgrade to a specific R version (IAAS machines)")])])])]),s("li",[s("a",{attrs:{href:"#install-r-studio"}},[a._v("Install R Studio")]),s("ul",[s("li",[s("a",{attrs:{href:"#download-the-latest-software-version"}},[a._v("Download the latest software version")])]),s("li",[s("a",{attrs:{href:"#configure-x2go"}},[a._v("Configure X2Go")])])])]),s("li",[s("a",{attrs:{href:"#troubleshooting"}},[a._v("Troubleshooting")]),s("ul",[s("li",[s("a",{attrs:{href:"#i-cannot-create-r-tempdir"}},[a._v("I cannot create R_TempDir")])]),s("li",[s("a",{attrs:{href:"#installation-of-devtools"}},[a._v("Installation of devtools")])]),s("li",[s("a",{attrs:{href:"#predictabel-matplotlib-viridis-or-plyr-fails-to-import"}},[a._v("PredictABEL, matplotlib, viridis, or plyr fails to import")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"install-r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-r"}},[a._v("#")]),a._v(" Install R")]),a._v(" "),s("h3",{attrs:{id:"install-using-conda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-using-conda"}},[a._v("#")]),a._v(" Install using Conda")]),a._v(" "),s("p",[a._v("We recommend using "),s("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/conda/"}},[a._v("Conda")]),a._v(" to install R packages. Conda gives you better flexibility when choosing versions, which will not affect other researchers in your lab.")],1),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("We have very easy guide on how to get "),s("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/saige/"}},[a._v("Saige")]),a._v(" running in Conda environment.")],1)]),a._v(" "),s("p",[a._v("If you have a conda setup based on the guide above you will need some additional channels to install the packages.\nYou will need "),s("a",{attrs:{href:"https://anaconda.org/bioconda",target:"_blank",rel:"noopener noreferrer"}},[a._v("bioconda"),s("OutboundLink")],1),a._v(" and "),s("a",{attrs:{href:"https://anaconda.org/conda-forge",target:"_blank",rel:"noopener noreferrer"}},[a._v("conda-forge"),s("OutboundLink")],1),a._v(" channels.\nIf you have not set channels yet make sure to add them in the same order,\nbut feel free to skip bioconda if you do not see a need for it:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda config --add channels bioconda\nconda config --add channels conda-forge\n")])])]),s("p",[a._v("To install R (>=4.0.3) you have to install r-base package. In the example below we create an environment where r-base is being installed as default with devtools:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('conda create --name renv --channel conda-forge  "r-base>=4.0.3" r-devtools\n')])])]),s("p",[a._v("To be able to work with R that you just installed you have to activate your conda environment:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda activate renv\nR\n")])])]),s("p",[a._v("Additional R packages can be found in channels or installed using R devtools. R packages in "),s("a",{attrs:{href:"https://anaconda.org/bioconda",target:"_blank",rel:"noopener noreferrer"}},[a._v("bioconda"),s("OutboundLink")],1),a._v(" and "),s("a",{attrs:{href:"https://anaconda.org/conda-forge",target:"_blank",rel:"noopener noreferrer"}},[a._v("conda-forge"),s("OutboundLink")],1),a._v(" channels have "),s("code",[a._v("r-")]),a._v(" prefix in their names. Here is an example how to install matrix R package into renv environment:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda install -n renv r-matrix\n")])])]),s("h3",{attrs:{id:"install-using-system-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-using-system-packages"}},[a._v("#")]),a._v(" Install using system packages")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Install R")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" r-base r-base-dev -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Add the updated package repository to your sources list:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# https://cran.r-project.org/bin/linux/ubuntu/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deb https://cloud.r-project.org/bin/linux/ubuntu '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('-cran35/"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/apt/sources.list.d/'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('-cran35.list"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Add keys for the CRAN repository")]),a._v("\ngpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E084DAB9\ngpg -a --export E084DAB9 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Update packages")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" upgrade\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" autoremove\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Start R")]),a._v("\nR\n")])])]),s("h3",{attrs:{id:"upgrade-to-latest-r-version-4-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-latest-r-version-4-0"}},[a._v("#")]),a._v(" Upgrade to latest R version (4.0)")]),a._v(" "),s("p",[a._v("The default version in Ubuntu is usually a few versions behind the newest R version available. Follow the code below if you need the newest version.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Please note")]),a._v(" "),s("p",[a._v("Running dist-upgrade affects versions of all packages on your machine. This may break your or others environments.\nWe recommend installing new R version using "),s("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/r-studio/#install-using-conda"}},[a._v("Conda")]),a._v(" instead.")],1)]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Add the new package repository to your sources list:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deb https://cloud.r-project.org/bin/linux/ubuntu '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('-cran40/"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/etc/apt/sources.list.d/'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('-cran40.list"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Add keys for the r-project repository")]),a._v("\ngpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E084DAB9\ngpg -a --export E084DAB9 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Update packages")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" dist-upgrade -y\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" r-base\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" autoremove -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -- Start R")]),a._v("\nR\n")])])]),s("h3",{attrs:{id:"downgrade-to-a-specific-r-version-iaas-machines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downgrade-to-a-specific-r-version-iaas-machines"}},[a._v("#")]),a._v(" Downgrade to a specific R version (IAAS machines)")]),a._v(" "),s("p",[a._v("Sometimes you may want to pin your R version to a specific release to please specific packages required for your work.\nBelow are a guide on how to downgrade and pin your R version to a specific release (just in case your figured out the need "),s("em",[a._v("after")]),a._v(" you upgraded R to a new version...).\nThe guide is copied from this great "),s("a",{attrs:{href:"https://askubuntu.com/questions/1056630/r-3-5-0-not-working-on-ubuntu-18-04/1057231#1057231",target:"_blank",rel:"noopener noreferrer"}},[a._v("forum post"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Please note")]),a._v(" "),s("p",[a._v("This setup below will only work on IAAS- or BLUE-machines as they require administrator privileges.\nContact us if you need to downgrade the R version on your home machine.")])]),a._v(" "),s("h4",{attrs:{id:"save-the-r-packages-that-is-already-installed-in-your-lab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#save-the-r-packages-that-is-already-installed-in-your-lab"}},[a._v("#")]),a._v(" Save the R-packages that is already installed in your lab")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("dpkg -l "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^ii  r-"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" r_packages.txt\n")])])]),s("h4",{attrs:{id:"pin-the-software-version-to-a-specific-version-in-this-case-r-3-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pin-the-software-version-to-a-specific-version-in-this-case-r-3-5"}},[a._v("#")]),a._v(" Pin the software version to a specific version (in this case R 3.5)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" /etc/apt/preferences.d/pin-r35")]),a._v("\nPackage: r-*\nPin: release a="),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("-cran35\nPin: version 3.5*\nPin-Priority: 800\n\nPackage: r-cran-nlme\nPin: release a="),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("-cran35\nPin: version 3.1.139-1"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("0\nPin-Priority: 800\nEOF")]),a._v("\n")])])]),s("h4",{attrs:{id:"purge-and-remove-the-current-r-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purge-and-remove-the-current-r-version"}},[a._v("#")]),a._v(" Purge and remove the current R version")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" purge r-*\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" autoremove\n")])])]),s("h4",{attrs:{id:"re-install-your-specific-r-version-and-your-r-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#re-install-your-specific-r-version-and-your-r-packages"}},[a._v("#")]),a._v(" Re-install your specific R version and your r-packages")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" r_packages.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2")]),a._v("}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("h4",{attrs:{id:"check-that-the-new-correct-version-is-running"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-that-the-new-correct-version-is-running"}},[a._v("#")]),a._v(" Check that the new correct version is running")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("R\n\nR version "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.5")]),a._v(".3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-03-11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Great Truth"')]),a._v("\n")])])]),s("h4",{attrs:{id:"optional-remove-the-version-pinning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional-remove-the-version-pinning"}},[a._v("#")]),a._v(" Optional, remove the version pinning")]),a._v(" "),s("p",[a._v("Remove your pin-file if you want to revert to the newest version.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /etc/apt/preferences.d/pin-r35\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" dist-upgrade\n")])])]),s("h2",{attrs:{id:"install-r-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-r-studio"}},[a._v("#")]),a._v(" Install R Studio")]),a._v(" "),s("p",[a._v("We do provide the opportunity for a graphical interface via R Studio.\nResearchers may install this on unmanaged machines.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("Make sure R-Studio is not already installed, if the lab was setup before command will return path.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("which rstudio\n")])])])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Please note")]),a._v(" "),s("p",[a._v("Installation on home-machines requires us to run some code.")]),a._v(" "),s("p",[a._v("The below guide will therefore not work on home-machines.")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Dependencies")]),a._v(" "),s("p",[s("code",[a._v("Without these, it will be impossible to get RStudio to work.")])]),a._v(" "),s("ul",[s("li",[a._v("R (installed as above)")]),a._v(" "),s("li",[a._v("A machine prepared for a "),s("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/"}},[a._v("graphical interface (X2Go)")])],1),a._v(" "),s("li",[a._v("An IAAS-machine or BLUE-machine with administrator access")])])]),a._v(" "),s("h3",{attrs:{id:"download-the-latest-software-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-the-latest-software-version"}},[a._v("#")]),a._v(" Download the latest software version")]),a._v(" "),s("p",[a._v("Search "),s("a",{attrs:{href:"https://www.rstudio.com/products/rstudio/download/#download",target:"_blank",rel:"noopener noreferrer"}},[a._v("www.rstudio.com"),s("OutboundLink")],1),a._v(" for the latest version in accordance with your operating system (e.g. Ubuntu 16.04 xenial).\nThe below text is an example code which you may cut and paste into your shell:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# download the package")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://download1.rstudio.org/rstudio-xenial-1.1.463-amd64.deb -O /tmp/rstudio.deb\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install essential dependencies")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y libnss3 libasound2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install rstudio")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" /tmp/rstudio.deb\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# clean up files")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /tmp/rstudio.deb\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Latest version")]),a._v(" "),s("p",[a._v("If you plan to install latest version (>=1.2.0) remember to use "),s("code",[a._v("--disable-gpu")]),a._v(" parameter when running R-Studio\nor setup environment variable as mentioned in "),s("a",{attrs:{href:"https://support.rstudio.com/hc/en-us/articles/360017886674-Troubleshooting-RStudio-Rendering-Errors",target:"_blank",rel:"noopener noreferrer"}},[a._v("Troubleshooting RStudio Rendering Errors"),s("OutboundLink")],1),a._v(".")])]),a._v(" "),s("h3",{attrs:{id:"configure-x2go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-x2go"}},[a._v("#")]),a._v(" Configure X2Go")]),a._v(" "),s("p",[a._v("To automatically start RStudio, revisit your "),s("em",[a._v("Session preferences")]),a._v(" in the "),s("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/"}},[a._v("X2Go setup")]),a._v(" and update your "),s("em",[a._v("Single application command path")]),a._v(" to "),s("code",[a._v("/usr/bin/rstudio")]),a._v("and "),s("em",[a._v("Create a session icon on the desktop...")]),a._v(".")],1),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("NOTE")]),a._v(" "),s("p",[a._v("There is a known bug in x2go "),s("code",[a._v("1.1.456")]),a._v(" that will go away if you comment out (add # before) a line in the x2goagent.options:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/x2go/x2goagent.options\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# X2GO_NXAGENT_DEFAULT_OPTIONS+=" -extension BIG-REQUESTS"')]),a._v("\n")])])])]),a._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),s("h3",{attrs:{id:"i-cannot-create-r-tempdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-cannot-create-r-tempdir"}},[a._v("#")]),a._v(" I cannot create R_TempDir")]),a._v(" "),s("p",[a._v("If your system disk is full, R will not be able to store temporary files used for computation. You may see the error message "),s("strong",[s("code",[a._v("Fatal error: cannot create 'R_TempDir'")])]),a._v(". Click here to verify if the disk disk is full, and this guide to change your temp folder to a larger volume.")]),a._v(" "),s("h3",{attrs:{id:"installation-of-devtools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-of-devtools"}},[a._v("#")]),a._v(" Installation of devtools")]),a._v(" "),s("p",[a._v("You may need to install some more dependencies to get "),s("code",[a._v('install.packages("devtools")')]),a._v(" going:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt update\nsudo apt install libcurl4-openssl-dev libssh2-1-dev libssl-dev libxml2-dev\n")])])]),s("h3",{attrs:{id:"predictabel-matplotlib-viridis-or-plyr-fails-to-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#predictabel-matplotlib-viridis-or-plyr-fails-to-import"}},[a._v("#")]),a._v(" PredictABEL, matplotlib, viridis, or plyr fails to import")]),a._v(" "),s("p",[a._v("If running "),s("code",[a._v("library(PredictABEL)")]),a._v(" in rstudio server fails with:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Error: package or namespace load failed for 'PredictABEL':\n .onLoad failed in loadNamespace() for 'tcltk', details:\n  call: fun(libname, pkgname)\n  error: (converted from warning) couldn't connect to display \":0\"\n")])])]),s("p",[a._v("You need to install these packages related to tcl and tk:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt update\nsudo apt install tcl tcl8.6 tk tk-table tk8.6\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);