(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{396:function(e,t,r){"use strict";var n=r(44),o=r(14),i=r(2),s=r(204),a=r(201),c=r(11),l=r(27),u=r(128),d=r(205),p=r(66),f=r(18),E=r(65),m=r(212),h=r(206),g=r(96),R=r(202),v=r(4),_=R.UNSUPPORTED_Y,y=Math.min,A=[].push,x=i(/./.exec),b=i(A),D=i("".slice);s("split",(function(e,t,r){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var i=f(l(this)),s=void 0===r?4294967295:r>>>0;if(0===s)return[];if(void 0===e)return[i];if(!a(e))return o(t,i,e,s);for(var c,u,d,p=[],E=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,R=new RegExp(e.source,E+"g");(c=o(g,R,i))&&!((u=R.lastIndex)>h&&(b(p,D(i,h,c.index)),c.length>1&&c.index<i.length&&n(A,p,m(c,1)),d=c[0].length,h=u,p.length>=s));)R.lastIndex===c.index&&R.lastIndex++;return h===i.length?!d&&x(R,"")||b(p,""):b(p,D(i,h)),p.length>s?m(p,0,s):p}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:o(t,this,e,r)}:t,[function(t,r){var n=l(this),s=null==t?void 0:E(t,e);return s?o(s,t,n,r):o(i,f(n),t,r)},function(e,n){var o=c(this),s=f(e),a=r(i,o,s,n,i!==t);if(a.done)return a.value;var l=u(o,RegExp),E=o.unicode,m=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(_?"g":"y"),g=new l(_?"^(?:"+o.source+")":o,m),R=void 0===n?4294967295:n>>>0;if(0===R)return[];if(0===s.length)return null===h(g,s)?[s]:[];for(var v=0,A=0,x=[];A<s.length;){g.lastIndex=_?0:A;var I,N=h(g,_?D(s,A):s);if(null===N||(I=y(p(g.lastIndex+(_?A:0)),s.length))===v)A=d(s,A,E);else{if(b(x,D(s,v,A)),x.length===R)return x;for(var O=1;O<=N.length-1;O++)if(b(x,N[O]),x.length===R)return x;A=v=I}}return b(x,D(s,v)),x}]}),!!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),_)},444:function(e,t){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},454:function(e,t,r){},668:function(e,t,r){var n=r(3),o=r(16),i=r(2),s=r(4),a=r(18),c=r(12),l=r(217),u=r(669).ctoi,d=/[^\d+/a-z]/i,p=/[\t\n\f\r ]+/g,f=/[=]+$/,E=o("atob"),m=String.fromCharCode,h=i("".charAt),g=i("".replace),R=i(d.exec),v=s((function(){return""!==atob(" ")})),_=!v&&!s((function(){E()}));n({global:!0,enumerable:!0,forced:v||_},{atob:function(e){if(l(arguments.length,1),_)return E(e);var t,r,n=g(a(e),p,""),i="",s=0,v=0;if(n.length%4==0&&(n=g(n,f,"")),n.length%4==1||R(d,n))throw new(o("DOMException"))("The string is not correctly encoded","InvalidCharacterError");for(;t=h(n,s++);)c(u,t)&&(r=v%4?64*r+u[t]:u[t],v++%4&&(i+=m(255&r>>(-2*v&6))));return i}})},669:function(e,t){for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n={},o=0;o<66;o++)n[r.charAt(o)]=o;e.exports={itoc:r,ctoi:n}},670:function(e,t,r){"use strict";var n=r(3),o=r(671),i=r(16),s=r(4),a=r(30),c=r(43),l=r(13).f,u=r(135).f,d=r(19),p=r(12),f=r(211),E=r(11),m=r(219),h=r(133),g=r(444),R=r(214),v=r(42),_=r(9),y=r(21),A=i("Error"),x=i("DOMException")||function(){try{(new(i("MessageChannel")||o("worker_threads").MessageChannel)).port1.postMessage(new WeakMap)}catch(e){if("DATA_CLONE_ERR"==e.name&&25==e.code)return e.constructor}}(),b=x&&x.prototype,D=A.prototype,I=v.set,N=v.getterFor("DOMException"),O="stack"in A("DOMException"),T=function(e){return p(g,e)&&g[e].m?g[e].c:0},C=function(){f(this,M);var e=arguments.length,t=h(e<1?void 0:arguments[0]),r=h(e<2?void 0:arguments[1],"Error"),n=T(r);if(I(this,{type:"DOMException",name:r,message:t,code:n}),_||(this.name=r,this.message=t,this.code=n),O){var o=A(t);o.name="DOMException",l(this,"stack",c(1,R(o.stack,1)))}},M=C.prototype=a(D),S=function(e){return{enumerable:!0,configurable:!0,get:e}},q=function(e){return S((function(){return N(this)[e]}))};_&&u(M,{name:q("name"),message:q("message"),code:q("code")}),l(M,"constructor",c(1,C));var w=s((function(){return!(new x instanceof A)})),U=w||s((function(){return D.toString!==m||"2: 1"!==String(new x(1,2))})),L=w||s((function(){return 25!==new x(1,"DataCloneError").code})),k=w||25!==x.DATA_CLONE_ERR||25!==b.DATA_CLONE_ERR,H=y?U||L||k:w;n({global:!0,forced:H},{DOMException:H?C:x});var V=i("DOMException"),P=V.prototype;for(var F in U&&(y||x===V)&&d(P,"toString",m),L&&_&&x===V&&l(P,"code",S((function(){return T(E(this).name)}))),g)if(p(g,F)){var W=g[F],$=W.s,Y=c(6,W.c);p(V,$)||l(V,$,Y),p(P,$)||l(P,$,Y)}},671:function(e,t,r){var n=r(68);e.exports=function(e){try{if(n)return Function('return require("'+e+'")')()}catch(e){}}},672:function(e,t,r){"use strict";var n=r(3),o=r(16),i=r(43),s=r(13).f,a=r(12),c=r(211),l=r(132),u=r(133),d=r(444),p=r(214),f=r(21),E=o("Error"),m=o("DOMException"),h=function(){c(this,g);var e=arguments.length,t=u(e<1?void 0:arguments[0]),r=u(e<2?void 0:arguments[1],"Error"),n=new m(t,r),o=E(t);return o.name="DOMException",s(n,"stack",i(1,p(o.stack,1))),l(n,this,h),n},g=h.prototype=m.prototype,R="stack"in E("DOMException"),v="stack"in new m(1,2),_=R&&!v;n({global:!0,forced:f||_},{DOMException:_?h:m});var y=o("DOMException"),A=y.prototype;if(A.constructor!==y)for(var x in f||s(A,"constructor",i(1,y)),d)if(a(d,x)){var b=d[x],D=b.s;a(y,D)||s(y,D,i(6,b.c))}},673:function(e,t,r){var n=r(16);r(49)(n("DOMException"),"DOMException")},683:function(e,t,r){"use strict";r(454)},730:function(e,t,r){"use strict";r.r(t);r(35),r(396),r(37),r(668),r(670),r(672),r(673),r(64),r(445);var n=r(674),o=r(715),i=r(716),s=r(471),a=r(717),c=r(453),l={name:"SSHConfig",components:{VApp:n.a,VCol:o.a,VRow:i.a,VTextField:s.a,VTextarea:a.a,VCard:c.a},props:{id:{type:String,default:"applet"}},data:function(){return{query:{ipAddress:null,labName:null,username:null},template:"# Place in ~/.ssh/config\n\nHost {lab_name}-entry\n    HostName {ip_address}\n    User {username}\n\nHost {lab_name}\n    HostName home\n    HostKeyAlias {lab_name}\n    User {username}\n    # Use ProxyCommand to jump directly to home via entry\n    ProxyCommand ssh -W %h:%p {lab_name}-entry\n"}},computed:{configText:function(){return this.query.ipAddress&&this.query.labName&&this.query.username?this.wrap(this.template):null}},mounted:function(){},created:function(){console.log(this.$route.query);var e=this.$route.query.access?atob(this.$route.query.access).split("|"):[];3==e.length&&(this.query.ipAddress=e[0],this.query.labName=e[1],this.query.username=e[2]),console.log(this.query)},methods:{wrap:function(e){var t=e;return t=(t=(t=t.replaceAll("{ip_address}",this.query.ipAddress)).replaceAll("{lab_name}",this.query.labName)).replaceAll("{username}",this.query.username)}}},u=(r(683),r(41)),d=Object(u.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vuewidget vuewrapper",attrs:{"data-vuetify":""}},[r("v-app",{attrs:{id:e.id}},[r("v-card",{staticClass:"pt-4"},[r("v-row",{staticClass:"mb-2"},[r("v-col",{attrs:{cols:"10"}},[r("v-text-field",{attrs:{autocomplete:"ignore-field",label:"Username",placeholder:"Missing username query","persistent-placeholder":"",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.query.username,callback:function(t){e.$set(e.query,"username",t)},expression:"query.username"}})],1),e._v(" "),r("v-col",{attrs:{cols:"10"}},[r("v-text-field",{attrs:{autocomplete:"ignore-field",label:"Lab name",placeholder:"Missing lab_name query","persistent-placeholder":"",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.query.labName,callback:function(t){e.$set(e.query,"labName",t)},expression:"query.labName"}})],1),e._v(" "),r("v-col",{attrs:{cols:"10"}},[r("v-text-field",{attrs:{autocomplete:"ignore-field",label:"IP Address",placeholder:"Missing ip_address query","persistent-placeholder":"",outlined:"",dense:"",readonly:"","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.query.ipAddress,callback:function(t){e.$set(e.query,"ipAddress",t)},expression:"query.ipAddress"}})],1)],1),e._v(" "),r("h3",{attrs:{id:"ssh-config"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssh-config"}},[e._v("#")]),e._v(" SSH Config")]),e._v(" "),r("v-textarea",{staticClass:"py-2 mt-2",attrs:{label:"SSH Config file",placeholder:"URL is missing parameters","persistent-placeholder":"",outlined:"",readonly:"",rows:"13","hide-details":""},on:{focus:function(e){return e.target.select()}},model:{value:e.configText,callback:function(t){e.configText="string"==typeof t?t.trim():t},expression:"configText"}})],1)],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);