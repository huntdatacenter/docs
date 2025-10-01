import{_ as s,c as n,o as e,aM as p}from"./chunks/framework.DAyGILei.js";const u=JSON.parse('{"title":"Saige","description":"Installation guide for Saige","frontmatter":{"title":"Saige","category":"Analytical tools","permalink":"/do-science/tools/analytical/saige","outline":1,"description":"Installation guide for Saige"},"headers":[],"relativePath":"do-science/tools/analytical/saige.md","filePath":"do-science/tools/analytical/saige.md"}'),i={name:"do-science/tools/analytical/saige.md"};function l(t,a,o,c,r,d){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="saige-package-for-r" tabindex="-1">Saige package for R <a class="header-anchor" href="#saige-package-for-r" aria-label="Permalink to &quot;Saige package for R&quot;">​</a></h1><p><strong><a href="https://github.com/weizhouUMICH/SAIGE" target="_blank" rel="noreferrer">SAIGE is an R package</a> with Scalable and Accurate Implementation of Generalized mixed model (Chen, H. et al. 2016). It accounts for sample relatedness and is feasible for genetic association tests in large cohorts and biobanks.</strong></p><nav class="table-of-contents"><ul><li><a href="#install-using-conda">Install using conda</a></li><li><a href="#install-the-hard-way">Install the hard way</a><ul><li><a href="#defining-your-software-directory">Defining your software directory</a></li><li><a href="#install-required-apt-packages">Install required APT packages</a></li><li><a href="#defining-your-java-version">Defining your Java version</a></li><li><a href="#installing-required-python-packages">Installing required python packages</a></li><li><a href="#installing-a-specific-r-version">Installing a specific R version</a></li><li><a href="#installing-saige">Installing SAIGE</a></li><li><a href="#set-number-of-threads-for-openblas">Set number of threads for openblas</a></li><li><a href="#combine">Combine</a></li><li><a href="#cleanup">Cleanup</a></li><li><a href="#testing-saige">Testing SAIGE</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are interested in using Saige, you should try to <a href="/do-science/tools/analytical/regenie">Regenie</a>, a strong C++ tool for whole genome regression modelling of large GWAS.</p></div><h2 id="install-using-conda" tabindex="-1">Install using conda <a class="header-anchor" href="#install-using-conda" aria-label="Permalink to &quot;Install using conda&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Requirements</p><ul><li>Conda (miniconda), see our <a href="/do-science/tools/analytical/conda">Conda tutorial</a> for more details.</li><li>Conda channels: conda-forge, bioconda</li></ul></div><p>You will need bioconda and conda-forge channels. If you have not set channels yet make sure to add them in this order:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>conda config --add channels bioconda</span></span>
<span class="line"><span>conda config --add channels conda-forge</span></span></code></pre></div><p>To create a new environment and install the latest version of SAIGE use:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>conda create -n saige -c bioconda r-saige=0.44.2</span></span>
<span class="line"><span>conda activate saige</span></span></code></pre></div><p>After installation you should be able to import SAIGE library in R and run SAIGE scripts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>step1_fitNULLGLMM.R --help</span></span>
<span class="line"><span>step2_SPAtests.R --help</span></span>
<span class="line"><span>createSparseGRM.R --help</span></span></code></pre></div><p>If you need to run your scripts with older version of R, you can use <code>3.6.3</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>conda install -c conda-forge -c bioconda &quot;r-base=3.6.3&quot; r-saige</span></span></code></pre></div><h2 id="install-the-hard-way" tabindex="-1">Install the hard way <a class="header-anchor" href="#install-the-hard-way" aria-label="Permalink to &quot;Install the hard way&quot;">​</a></h2><p>The below guide is based on packages listed in the Dockerfile example in Github. It describes installation of the <a href="https://github.com/weizhouUMICH/SAIGE" target="_blank" rel="noreferrer">SAIGE R package</a> on a clean IAAS or BLUE machine in HUNT Cloud.</p><div class="warning custom-block"><p class="custom-block-title">Requirements</p><ul><li>Ubuntu operating system (current installation is tested on 18.04).</li><li>Administrator privileges (HUNT IAAS or HUNT BLUE machines).</li><li>Fresh coffee and 30 minutes to spare.</li></ul></div><h3 id="defining-your-software-directory" tabindex="-1">Defining your software directory <a class="header-anchor" href="#defining-your-software-directory" aria-label="Permalink to &quot;Defining your software directory&quot;">​</a></h3><p>Below is an example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Define your software directory</span></span>
<span class="line"><span>software_dir=&quot;/home/ubuntu/software/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Create directory if it don&#39;t exist</span></span>
<span class="line"><span>mkdir -p $software_dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Move into the directory</span></span>
<span class="line"><span>cd $software_dir</span></span></code></pre></div><h3 id="install-required-apt-packages" tabindex="-1">Install required APT packages <a class="header-anchor" href="#install-required-apt-packages" aria-label="Permalink to &quot;Install required APT packages&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt update -y &amp;&amp; sudo apt-get install -y \\</span></span>
<span class="line"><span>    build-essential \\</span></span>
<span class="line"><span>    cmake \\</span></span>
<span class="line"><span>    curl \\</span></span>
<span class="line"><span>    libboost-all-dev \\</span></span>
<span class="line"><span>    libbz2-dev \\</span></span>
<span class="line"><span>    libcairo2-dev \\</span></span>
<span class="line"><span>    libcurl4-openssl-dev \\</span></span>
<span class="line"><span>    liblzma-dev \\</span></span>
<span class="line"><span>    libopenblas-dev \\</span></span>
<span class="line"><span>    libpcre3-dev \\</span></span>
<span class="line"><span>    libpng-dev \\</span></span>
<span class="line"><span>    libreadline-dev \\</span></span>
<span class="line"><span>    libssl-dev \\</span></span>
<span class="line"><span>    libz-dev \\</span></span>
<span class="line"><span>    python3-pip \\</span></span>
<span class="line"><span>    python3-setuptools \\</span></span>
<span class="line"><span>    unzip \\</span></span>
<span class="line"><span>    gfortran \\</span></span>
<span class="line"><span>    r-cran-rjava \\</span></span>
<span class="line"><span>    openjdk-8-jdk</span></span></code></pre></div><h3 id="defining-your-java-version" tabindex="-1">Defining your Java version <a class="header-anchor" href="#defining-your-java-version" aria-label="Permalink to &quot;Defining your Java version&quot;">​</a></h3><p>Run the code below and manually choose java-8in the provided list and hit &#39;ENTER&#39;.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># manual update to java-8-openjdk</span></span>
<span class="line"><span>sudo update-alternatives --config java</span></span></code></pre></div><h3 id="installing-required-python-packages" tabindex="-1">Installing required python packages <a class="header-anchor" href="#installing-required-python-packages" aria-label="Permalink to &quot;Installing required python packages&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip3 install cget;</span></span></code></pre></div><h3 id="installing-a-specific-r-version" tabindex="-1">Installing a specific R version <a class="header-anchor" href="#installing-a-specific-r-version" aria-label="Permalink to &quot;Installing a specific R version&quot;">​</a></h3><p>The current SAIGE version requires a specific R-version (3.5.1). The below snippets compile this specific version.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># ensure software dir</span></span>
<span class="line"><span>cd $software_dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span># define version</span></span>
<span class="line"><span>r_version=&quot;3.5.1&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># download</span></span>
<span class="line"><span>curl -O https://cloud.r-project.org/src/base/R-3/R-\${r_version}.tar.gz;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># unzip</span></span>
<span class="line"><span>tar xvzf R-\${r_version}.tar.gz;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cleanup</span></span>
<span class="line"><span>rm R-\${r_version}.tar.gz;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># move into r-folder</span></span>
<span class="line"><span>cd $software_dir/R-\${r_version}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># configure</span></span>
<span class="line"><span>sudo ./configure \\</span></span>
<span class="line"><span>  --with-x=no \\</span></span>
<span class="line"><span>  --with-blas=&quot;-lopenblas&quot; \\</span></span>
<span class="line"><span>  --enable-R-shlib  \\</span></span>
<span class="line"><span>  -enable-shared;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># make</span></span>
<span class="line"><span>sudo make; # TODO stopped here</span></span>
<span class="line"><span>sudo mkdir -p /usr/local/lib/R/lib;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># install</span></span>
<span class="line"><span>sudo make install;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cleanup</span></span>
<span class="line"><span>cd $software_dir</span></span>
<span class="line"><span>sudo rm -rf $software_dir/R-\${r_version}</span></span></code></pre></div><h3 id="installing-saige" tabindex="-1">Installing SAIGE <a class="header-anchor" href="#installing-saige" aria-label="Permalink to &quot;Installing SAIGE&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd $software_dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Download latest version</span></span>
<span class="line"><span>curl -OL https://github.com/weizhouUMICH/SAIGE/archive/master.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Unpack</span></span>
<span class="line"><span>unzip master.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Update file folder names</span></span>
<span class="line"><span>mv SAIGE-master/ SAIGE/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Install required R-packages</span></span>
<span class="line"><span>Rscript SAIGE/extdata/install_packages.R</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Install SAIGE</span></span>
<span class="line"><span>R CMD INSTALL SAIGE</span></span></code></pre></div><h3 id="set-number-of-threads-for-openblas" tabindex="-1">Set number of threads for openblas <a class="header-anchor" href="#set-number-of-threads-for-openblas" aria-label="Permalink to &quot;Set number of threads for openblas&quot;">​</a></h3><p>This steps adds a thread restriction on BLAS to avoid multithread conflicts with other R packages.</p><p>First, add restriction to <code>step2_SPAtests.R</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>echo &quot;#!/usr/bin/env Rscript</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Restrict threads in openblas</span></span>
<span class="line"><span>hasOpenBlas = grepl(\\&quot;openblas\\&quot;,extSoftVersion()[\\&quot;BLAS\\&quot;]);</span></span>
<span class="line"><span>if (hasOpenBlas) {</span></span>
<span class="line"><span>  ### Only when using openblas instead of blas</span></span>
<span class="line"><span>  require(inline)</span></span>
<span class="line"><span>  openblas.set.num.threads &lt;- cfunction( signature(ipt=\\&quot;integer\\&quot;),</span></span>
<span class="line"><span>    body = \\&#39;openblas_set_num_threads(*ipt);\\&#39;,</span></span>
<span class="line"><span>    otherdefs = c (\\&#39;extern void openblas_set_num_threads(int);\\&#39;),</span></span>
<span class="line"><span>      libargs = c (\\&#39;-L/opt/openblas/lib -lopenblas\\&#39;),</span></span>
<span class="line"><span>      language = \\&quot;C\\&quot;,</span></span>
<span class="line"><span>      convention = \\&quot;.C\\&quot;)};</span></span>
<span class="line"><span>if (hasOpenBlas) openblas.set.num.threads(1)</span></span>
<span class="line"><span>&quot; &gt; insert_openblas_restriction.tmp</span></span></code></pre></div><p>Then, add to file:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># cut header</span></span>
<span class="line"><span>cat SAIGE/extdata/step2_SPAtests.R | sed -n &#39;1!p&#39; &gt; step2_body.tmp</span></span></code></pre></div><h3 id="combine" tabindex="-1">Combine <a class="header-anchor" href="#combine" aria-label="Permalink to &quot;Combine&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cat insert_openblas_restriction.tmp \\</span></span>
<span class="line"><span>    step2_body.tmp &gt; step2_SPAtests.R</span></span>
<span class="line"><span>Install the required &#39;inline&#39; R-package:</span></span>
<span class="line"><span>echo &#39;req_packages &lt;- &quot;inline&quot;;</span></span>
<span class="line"><span>for (pack in req_packages) {</span></span>
<span class="line"><span>  if(!require(pack,character.only = TRUE)) {</span></span>
<span class="line"><span>    install.packages(pack, repos = &quot;http://cran.us.r-project.org&quot;)}}&#39; \\</span></span>
<span class="line"><span>&gt; install_inline.R</span></span>
<span class="line"><span>Rscript install_inline.R</span></span>
<span class="line"><span>rm install_inline.R</span></span></code></pre></div><p>Add quick references:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Move files to usr/local/bin for quick referencing</span></span>
<span class="line"><span>sudo mv SAIGE/extdata/step1_fitNULLGLMM.R /usr/local/bin/</span></span>
<span class="line"><span>sudo mv step2_SPAtests.R /usr/local/bin/</span></span>
<span class="line"><span>sudo mv SAIGE/extdata/createSparseGRM.R /usr/local/bin/</span></span>
<span class="line"><span>sudo chmod a+x /usr/local/bin/*.R</span></span></code></pre></div><h3 id="cleanup" tabindex="-1">Cleanup <a class="header-anchor" href="#cleanup" aria-label="Permalink to &quot;Cleanup&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rm -rf master.zip</span></span>
<span class="line"><span>rm -rf SAIGE</span></span>
<span class="line"><span>rm insert_openblas_restriction.tmp</span></span>
<span class="line"><span>rm step2_body.tmp</span></span>
<span class="line"><span>rm step2_SPAtests.R</span></span></code></pre></div><h3 id="testing-saige" tabindex="-1">Testing SAIGE <a class="header-anchor" href="#testing-saige" aria-label="Permalink to &quot;Testing SAIGE&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>step1_fitNULLGLMM.R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>step2_SPAtests.R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createSparseGRM.R</span></span></code></pre></div><p>More information</p>`,47)])])}const g=s(i,[["render",l]]);export{u as __pageData,g as default};
