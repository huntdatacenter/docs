(window.webpackJsonp=window.webpackJsonp||[]).push([[30,40,47],{406:function(e,t,r){"use strict";r(132);var n=r(3),a=r(0),s=r(16),i=r(13),o=r(2),l=r(414),u=r(19),c=r(211),f=r(46),h=r(210),d=r(42),p=r(203),g=r(6),v=r(11),m=r(47),y=r(69),k=r(12),w=r(7),b=r(18),x=r(29),_=r(43),P=r(133),S=r(96),R=r(206),C=r(5),D=r(436),U=C("iterator"),q=d.set,F=d.getterFor("URLSearchParams"),L=d.getterFor("URLSearchParamsIterator"),B=s("fetch"),O=s("Request"),I=s("Headers"),V=O&&O.prototype,j=I&&I.prototype,T=a.RegExp,H=a.TypeError,E=a.decodeURIComponent,A=a.encodeURIComponent,$=o("".charAt),z=o([].join),M=o([].push),N=o("".replace),W=o([].shift),J=o([].splice),Q=o("".split),G=o("".slice),K=/\+/g,Y=Array(4),X=function(e){return Y[e-1]||(Y[e-1]=T("((?:%[\\da-f]{2}){"+e+"})","gi"))},Z=function(e){try{return E(e)}catch(t){return e}},ee=function(e){var t=N(e,K," "),r=4;try{return E(t)}catch(e){for(;r;)t=N(t,X(r--),Z);return t}},te=/[!'()~]|%20/g,re={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ne=function(e){return re[e]},ae=function(e){return N(A(e),te,ne)},se=h((function(e,t){q(this,{type:"URLSearchParamsIterator",iterator:P(F(e).entries),kind:t})}),"Iterator",(function(){var e=L(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r}),!0),ie=function(e){this.entries=[],this.url=null,void 0!==e&&(w(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===$(e,0)?G(e,1):e:b(e)))};ie.prototype={type:"URLSearchParams",bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,a,s,o,l,u=S(e);if(u)for(r=(t=P(e,u)).next;!(n=i(r,t)).done;){if(s=(a=P(k(n.value))).next,(o=i(s,a)).done||(l=i(s,a)).done||!i(s,a).done)throw H("Expected sequence with length 2");M(this.entries,{key:b(o.value),value:b(l.value)})}else for(var c in e)v(e,c)&&M(this.entries,{key:c,value:b(e[c])})},parseQuery:function(e){if(e)for(var t,r,n=Q(e,"&"),a=0;a<n.length;)(t=n[a++]).length&&(r=Q(t,"="),M(this.entries,{key:ee(W(r)),value:ee(z(r,"="))}))},serialize:function(){for(var e,t=this.entries,r=[],n=0;n<t.length;)e=t[n++],M(r,ae(e.key)+"="+ae(e.value));return z(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var oe=function(){p(this,le);var e=arguments.length>0?arguments[0]:void 0;q(this,new ie(e))},le=oe.prototype;if(c(le,{append:function(e,t){R(arguments.length,2);var r=F(this);M(r.entries,{key:b(e),value:b(t)}),r.updateURL()},delete:function(e){R(arguments.length,1);for(var t=F(this),r=t.entries,n=b(e),a=0;a<r.length;)r[a].key===n?J(r,a,1):a++;t.updateURL()},get:function(e){R(arguments.length,1);for(var t=F(this).entries,r=b(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){R(arguments.length,1);for(var t=F(this).entries,r=b(e),n=[],a=0;a<t.length;a++)t[a].key===r&&M(n,t[a].value);return n},has:function(e){R(arguments.length,1);for(var t=F(this).entries,r=b(e),n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){R(arguments.length,1);for(var r,n=F(this),a=n.entries,s=!1,i=b(e),o=b(t),l=0;l<a.length;l++)(r=a[l]).key===i&&(s?J(a,l--,1):(s=!0,r.value=o));s||M(a,{key:i,value:o}),n.updateURL()},sort:function(){var e=F(this);D(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){for(var t,r=F(this).entries,n=m(e,arguments.length>1?arguments[1]:void 0),a=0;a<r.length;)n((t=r[a++]).value,t.key,this)},keys:function(){return new se(this,"keys")},values:function(){return new se(this,"values")},entries:function(){return new se(this,"entries")}},{enumerable:!0}),u(le,U,le.entries,{name:"entries"}),u(le,"toString",(function(){return F(this).serialize()}),{enumerable:!0}),f(oe,"URLSearchParams"),n({global:!0,forced:!l},{URLSearchParams:oe}),!l&&g(I)){var ue=o(j.has),ce=o(j.set),fe=function(e){if(w(e)){var t,r=e.body;if("URLSearchParams"===y(r))return t=e.headers?new I(e.headers):new I,ue(t,"content-type")||ce(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),x(e,{body:_(0,b(r)),headers:_(0,t)})}return e};if(g(B)&&n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return B(e,arguments.length>1?fe(arguments[1]):{})}}),g(O)){var he=function(e){return p(this,V),new O(e,arguments.length>1?fe(arguments[1]):{})};V.constructor=he,he.prototype=V,n({global:!0,forced:!0},{Request:he})}}e.exports={URLSearchParams:oe,getState:F}},414:function(e,t,r){var n=r(4),a=r(5),s=r(21),i=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),r+=n+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[i]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},415:function(e,t,r){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},424:function(e,t,r){"use strict";r(23);var n,a=r(3),s=r(9),i=r(414),o=r(0),l=r(47),u=r(2),c=r(127).f,f=r(19),h=r(203),d=r(11),p=r(212),g=r(213),v=r(205),m=r(134).codeAt,y=r(435),k=r(18),w=r(46),b=r(206),x=r(406),_=r(42),P=_.set,S=_.getterFor("URL"),R=x.URLSearchParams,C=x.getState,D=o.URL,U=o.TypeError,q=o.parseInt,F=Math.floor,L=Math.pow,B=u("".charAt),O=u(/./.exec),I=u([].join),V=u(1..toString),j=u([].pop),T=u([].push),H=u("".replace),E=u([].shift),A=u("".split),$=u("".slice),z=u("".toLowerCase),M=u([].unshift),N=/[a-z]/i,W=/[\d+-.a-z]/i,J=/\d/,Q=/^0x/i,G=/^[0-7]+$/,K=/^\d+$/,Y=/^[\da-f]+$/i,X=/[\0\t\n\r #%/:<>?@[\\\]^|]/,Z=/[\0\t\n\r #/:<>?@[\\\]^|]/,ee=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,te=/[\t\n\r]/g,re=function(e){var t,r,n,a;if("number"==typeof e){for(t=[],r=0;r<4;r++)M(t,e%256),e=F(e/256);return I(t,".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,r=1,n=null,a=0,s=0;s<8;s++)0!==e[s]?(a>r&&(t=n,r=a),n=null,a=0):(null===n&&(n=s),++a);return a>r&&(t=n,r=a),t}(e),r=0;r<8;r++)a&&0===e[r]||(a&&(a=!1),n===r?(t+=r?":":"::",a=!0):(t+=V(e[r],16),r<7&&(t+=":")));return"["+t+"]"}return e},ne={},ae=p({},ne,{" ":1,'"':1,"<":1,">":1,"`":1}),se=p({},ae,{"#":1,"?":1,"{":1,"}":1}),ie=p({},se,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),oe=function(e,t){var r=m(e,0);return r>32&&r<127&&!d(t,e)?e:encodeURIComponent(e)},le={ftp:21,file:null,http:80,https:443,ws:80,wss:443},ue=function(e,t){var r;return 2==e.length&&O(N,B(e,0))&&(":"==(r=B(e,1))||!t&&"|"==r)},ce=function(e){var t;return e.length>1&&ue($(e,0,2))&&(2==e.length||"/"===(t=B(e,2))||"\\"===t||"?"===t||"#"===t)},fe=function(e){return"."===e||"%2e"===z(e)},he={},de={},pe={},ge={},ve={},me={},ye={},ke={},we={},be={},xe={},_e={},Pe={},Se={},Re={},Ce={},De={},Ue={},qe={},Fe={},Le={},Be=function(e,t,r){var n,a,s,i=k(e);if(t){if(a=this.parse(i))throw U(a);this.searchParams=null}else{if(void 0!==r&&(n=new Be(r,!0)),a=this.parse(i,null,n))throw U(a);(s=C(new R)).bindURL(this),this.searchParams=s}};Be.prototype={type:"URL",parse:function(e,t,r){var a,s,i,o,l,u=this,c=t||he,f=0,h="",p=!1,m=!1,y=!1;for(e=k(e),t||(u.scheme="",u.username="",u.password="",u.host=null,u.port=null,u.path=[],u.query=null,u.fragment=null,u.cannotBeABaseURL=!1,e=H(e,ee,"")),e=H(e,te,""),a=g(e);f<=a.length;){switch(s=a[f],c){case he:if(!s||!O(N,s)){if(t)return"Invalid scheme";c=pe;continue}h+=z(s),c=de;break;case de:if(s&&(O(W,s)||"+"==s||"-"==s||"."==s))h+=z(s);else{if(":"!=s){if(t)return"Invalid scheme";h="",c=pe,f=0;continue}if(t&&(u.isSpecial()!=d(le,h)||"file"==h&&(u.includesCredentials()||null!==u.port)||"file"==u.scheme&&!u.host))return;if(u.scheme=h,t)return void(u.isSpecial()&&le[u.scheme]==u.port&&(u.port=null));h="","file"==u.scheme?c=Se:u.isSpecial()&&r&&r.scheme==u.scheme?c=ge:u.isSpecial()?c=ke:"/"==a[f+1]?(c=ve,f++):(u.cannotBeABaseURL=!0,T(u.path,""),c=qe)}break;case pe:if(!r||r.cannotBeABaseURL&&"#"!=s)return"Invalid scheme";if(r.cannotBeABaseURL&&"#"==s){u.scheme=r.scheme,u.path=v(r.path),u.query=r.query,u.fragment="",u.cannotBeABaseURL=!0,c=Le;break}c="file"==r.scheme?Se:me;continue;case ge:if("/"!=s||"/"!=a[f+1]){c=me;continue}c=we,f++;break;case ve:if("/"==s){c=be;break}c=Ue;continue;case me:if(u.scheme=r.scheme,s==n)u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=v(r.path),u.query=r.query;else if("/"==s||"\\"==s&&u.isSpecial())c=ye;else if("?"==s)u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=v(r.path),u.query="",c=Fe;else{if("#"!=s){u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=v(r.path),u.path.length--,c=Ue;continue}u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=v(r.path),u.query=r.query,u.fragment="",c=Le}break;case ye:if(!u.isSpecial()||"/"!=s&&"\\"!=s){if("/"!=s){u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,c=Ue;continue}c=be}else c=we;break;case ke:if(c=we,"/"!=s||"/"!=B(h,f+1))continue;f++;break;case we:if("/"!=s&&"\\"!=s){c=be;continue}break;case be:if("@"==s){p&&(h="%40"+h),p=!0,i=g(h);for(var w=0;w<i.length;w++){var b=i[w];if(":"!=b||y){var x=oe(b,ie);y?u.password+=x:u.username+=x}else y=!0}h=""}else if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&u.isSpecial()){if(p&&""==h)return"Invalid authority";f-=g(h).length+1,h="",c=xe}else h+=s;break;case xe:case _e:if(t&&"file"==u.scheme){c=Ce;continue}if(":"!=s||m){if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&u.isSpecial()){if(u.isSpecial()&&""==h)return"Invalid host";if(t&&""==h&&(u.includesCredentials()||null!==u.port))return;if(o=u.parseHost(h))return o;if(h="",c=De,t)return;continue}"["==s?m=!0:"]"==s&&(m=!1),h+=s}else{if(""==h)return"Invalid host";if(o=u.parseHost(h))return o;if(h="",c=Pe,t==_e)return}break;case Pe:if(!O(J,s)){if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&u.isSpecial()||t){if(""!=h){var _=q(h,10);if(_>65535)return"Invalid port";u.port=u.isSpecial()&&_===le[u.scheme]?null:_,h=""}if(t)return;c=De;continue}return"Invalid port"}h+=s;break;case Se:if(u.scheme="file","/"==s||"\\"==s)c=Re;else{if(!r||"file"!=r.scheme){c=Ue;continue}if(s==n)u.host=r.host,u.path=v(r.path),u.query=r.query;else if("?"==s)u.host=r.host,u.path=v(r.path),u.query="",c=Fe;else{if("#"!=s){ce(I(v(a,f),""))||(u.host=r.host,u.path=v(r.path),u.shortenPath()),c=Ue;continue}u.host=r.host,u.path=v(r.path),u.query=r.query,u.fragment="",c=Le}}break;case Re:if("/"==s||"\\"==s){c=Ce;break}r&&"file"==r.scheme&&!ce(I(v(a,f),""))&&(ue(r.path[0],!0)?T(u.path,r.path[0]):u.host=r.host),c=Ue;continue;case Ce:if(s==n||"/"==s||"\\"==s||"?"==s||"#"==s){if(!t&&ue(h))c=Ue;else if(""==h){if(u.host="",t)return;c=De}else{if(o=u.parseHost(h))return o;if("localhost"==u.host&&(u.host=""),t)return;h="",c=De}continue}h+=s;break;case De:if(u.isSpecial()){if(c=Ue,"/"!=s&&"\\"!=s)continue}else if(t||"?"!=s)if(t||"#"!=s){if(s!=n&&(c=Ue,"/"!=s))continue}else u.fragment="",c=Le;else u.query="",c=Fe;break;case Ue:if(s==n||"/"==s||"\\"==s&&u.isSpecial()||!t&&("?"==s||"#"==s)){if(".."===(l=z(l=h))||"%2e."===l||".%2e"===l||"%2e%2e"===l?(u.shortenPath(),"/"==s||"\\"==s&&u.isSpecial()||T(u.path,"")):fe(h)?"/"==s||"\\"==s&&u.isSpecial()||T(u.path,""):("file"==u.scheme&&!u.path.length&&ue(h)&&(u.host&&(u.host=""),h=B(h,0)+":"),T(u.path,h)),h="","file"==u.scheme&&(s==n||"?"==s||"#"==s))for(;u.path.length>1&&""===u.path[0];)E(u.path);"?"==s?(u.query="",c=Fe):"#"==s&&(u.fragment="",c=Le)}else h+=oe(s,se);break;case qe:"?"==s?(u.query="",c=Fe):"#"==s?(u.fragment="",c=Le):s!=n&&(u.path[0]+=oe(s,ne));break;case Fe:t||"#"!=s?s!=n&&("'"==s&&u.isSpecial()?u.query+="%27":u.query+="#"==s?"%23":oe(s,ne)):(u.fragment="",c=Le);break;case Le:s!=n&&(u.fragment+=oe(s,ae))}f++}},parseHost:function(e){var t,r,n;if("["==B(e,0)){if("]"!=B(e,e.length-1))return"Invalid host";if(!(t=function(e){var t,r,n,a,s,i,o,l=[0,0,0,0,0,0,0,0],u=0,c=null,f=0,h=function(){return B(e,f)};if(":"==h()){if(":"!=B(e,1))return;f+=2,c=++u}for(;h();){if(8==u)return;if(":"!=h()){for(t=r=0;r<4&&O(Y,h());)t=16*t+q(h(),16),f++,r++;if("."==h()){if(0==r)return;if(f-=r,u>6)return;for(n=0;h();){if(a=null,n>0){if(!("."==h()&&n<4))return;f++}if(!O(J,h()))return;for(;O(J,h());){if(s=q(h(),10),null===a)a=s;else{if(0==a)return;a=10*a+s}if(a>255)return;f++}l[u]=256*l[u]+a,2!=++n&&4!=n||u++}if(4!=n)return;break}if(":"==h()){if(f++,!h())return}else if(h())return;l[u++]=t}else{if(null!==c)return;f++,c=++u}}if(null!==c)for(i=u-c,u=7;0!=u&&i>0;)o=l[u],l[u--]=l[c+i-1],l[c+--i]=o;else if(8!=u)return;return l}($(e,1,-1))))return"Invalid host";this.host=t}else if(this.isSpecial()){if(e=y(e),O(X,e))return"Invalid host";if(null===(t=function(e){var t,r,n,a,s,i,o,l=A(e,".");if(l.length&&""==l[l.length-1]&&l.length--,(t=l.length)>4)return e;for(r=[],n=0;n<t;n++){if(""==(a=l[n]))return e;if(s=10,a.length>1&&"0"==B(a,0)&&(s=O(Q,a)?16:8,a=$(a,8==s?1:2)),""===a)i=0;else{if(!O(10==s?K:8==s?G:Y,a))return e;i=q(a,s)}T(r,i)}for(n=0;n<t;n++)if(i=r[n],n==t-1){if(i>=L(256,5-t))return null}else if(i>255)return null;for(o=j(r),n=0;n<r.length;n++)o+=r[n]*L(256,3-n);return o}(e)))return"Invalid host";this.host=t}else{if(O(Z,e))return"Invalid host";for(t="",r=g(e),n=0;n<r.length;n++)t+=oe(r[n],ne);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return d(le,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"==this.scheme&&1==t&&ue(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,r=e.username,n=e.password,a=e.host,s=e.port,i=e.path,o=e.query,l=e.fragment,u=t+":";return null!==a?(u+="//",e.includesCredentials()&&(u+=r+(n?":"+n:"")+"@"),u+=re(a),null!==s&&(u+=":"+s)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?i[0]:i.length?"/"+I(i,"/"):"",null!==o&&(u+="?"+o),null!==l&&(u+="#"+l),u},setHref:function(e){var t=this.parse(e);if(t)throw U(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"==e)try{return new Oe(e.path[0]).origin}catch(e){return"null"}return"file"!=e&&this.isSpecial()?e+"://"+re(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(k(e)+":",he)},getUsername:function(){return this.username},setUsername:function(e){var t=g(k(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<t.length;r++)this.username+=oe(t[r],ie)}},getPassword:function(){return this.password},setPassword:function(e){var t=g(k(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<t.length;r++)this.password+=oe(t[r],ie)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?re(e):re(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,xe)},getHostname:function(){var e=this.host;return null===e?"":re(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,_e)},getPort:function(){var e=this.port;return null===e?"":k(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(""==(e=k(e))?this.port=null:this.parse(e,Pe))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+I(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,De))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){""==(e=k(e))?this.query=null:("?"==B(e,0)&&(e=$(e,1)),this.query="",this.parse(e,Fe)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){""!=(e=k(e))?("#"==B(e,0)&&(e=$(e,1)),this.fragment="",this.parse(e,Le)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var Oe=function(e){var t=h(this,Ie),r=b(arguments.length,1)>1?arguments[1]:void 0,n=P(t,new Be(e,!1,r));s||(t.href=n.serialize(),t.origin=n.getOrigin(),t.protocol=n.getProtocol(),t.username=n.getUsername(),t.password=n.getPassword(),t.host=n.getHost(),t.hostname=n.getHostname(),t.port=n.getPort(),t.pathname=n.getPathname(),t.search=n.getSearch(),t.searchParams=n.getSearchParams(),t.hash=n.getHash())},Ie=Oe.prototype,Ve=function(e,t){return{get:function(){return S(this)[e]()},set:t&&function(e){return S(this)[t](e)},configurable:!0,enumerable:!0}};if(s&&c(Ie,{href:Ve("serialize","setHref"),origin:Ve("getOrigin"),protocol:Ve("getProtocol","setProtocol"),username:Ve("getUsername","setUsername"),password:Ve("getPassword","setPassword"),host:Ve("getHost","setHost"),hostname:Ve("getHostname","setHostname"),port:Ve("getPort","setPort"),pathname:Ve("getPathname","setPathname"),search:Ve("getSearch","setSearch"),searchParams:Ve("getSearchParams"),hash:Ve("getHash","setHash")}),f(Ie,"toJSON",(function(){return S(this).serialize()}),{enumerable:!0}),f(Ie,"toString",(function(){return S(this).serialize()}),{enumerable:!0}),D){var je=D.createObjectURL,Te=D.revokeObjectURL;je&&f(Oe,"createObjectURL",l(je,D)),Te&&f(Oe,"revokeObjectURL",l(Te,D))}w(Oe,"URL"),a({global:!0,forced:!i,sham:!s},{URL:Oe})},435:function(e,t,r){"use strict";var n=r(0),a=r(2),s=/[^\0-\u007E]/,i=/[.\u3002\uFF0E\uFF61]/g,o="Overflow: input needs wider integers to process",l=n.RangeError,u=a(i.exec),c=Math.floor,f=String.fromCharCode,h=a("".charCodeAt),d=a([].join),p=a([].push),g=a("".replace),v=a("".split),m=a("".toLowerCase),y=function(e){return e+22+75*(e<26)},k=function(e,t,r){var n=0;for(e=r?c(e/700):e>>1,e+=c(e/t);e>455;)e=c(e/35),n+=36;return c(n+36*e/(e+38))},w=function(e){var t,r,n=[],a=(e=function(e){for(var t=[],r=0,n=e.length;r<n;){var a=h(e,r++);if(a>=55296&&a<=56319&&r<n){var s=h(e,r++);56320==(64512&s)?p(t,((1023&a)<<10)+(1023&s)+65536):(p(t,a),r--)}else p(t,a)}return t}(e)).length,s=128,i=0,u=72;for(t=0;t<e.length;t++)(r=e[t])<128&&p(n,f(r));var g=n.length,v=g;for(g&&p(n,"-");v<a;){var m=2147483647;for(t=0;t<e.length;t++)(r=e[t])>=s&&r<m&&(m=r);var w=v+1;if(m-s>c((2147483647-i)/w))throw l(o);for(i+=(m-s)*w,s=m,t=0;t<e.length;t++){if((r=e[t])<s&&++i>2147483647)throw l(o);if(r==s){for(var b=i,x=36;;){var _=x<=u?1:x>=u+26?26:x-u;if(b<_)break;var P=b-_,S=36-_;p(n,f(y(_+P%S))),b=c(P/S),x+=36}p(n,f(y(b))),u=k(i,w,v==g),i=0,v++}}i++,s++}return d(n,"")};e.exports=function(e){var t,r,n=[],a=v(g(m(e),i,"."),".");for(t=0;t<a.length;t++)r=a[t],p(n,u(s,r)?"xn--"+w(r):r);return d(n,".")}},436:function(e,t,r){var n=r(205),a=Math.floor,s=function(e,t){var r=e.length,l=a(r/2);return r<8?i(e,t):o(e,s(n(e,0,l),t),s(n(e,l),t),t)},i=function(e,t){for(var r,n,a=e.length,s=1;s<a;){for(n=s,r=e[s];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==s++&&(e[n]=r)}return e},o=function(e,t,r,n){for(var a=t.length,s=r.length,i=0,o=0;i<a||o<s;)e[i+o]=i<a&&o<s?n(t[i],r[o])<=0?t[i++]:r[o++]:i<a?t[i++]:r[o++];return e};e.exports=s},451:function(e,t,r){},505:function(e,t,r){"use strict";r(451)},808:function(e,t,r){"use strict";var n=r(368),a=r(398),s=r(374);t.a=Object(n.a)(a.a,Object(s.b)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),r={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",n=>{n&&(this.errorBag.hasOwnProperty(e._uid)||(r.valid=t(e)))}):r.valid=t(e),r},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const r=this.watchers.find(e=>e._uid===t._uid);r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},865:function(e,t,r){"use strict";r.r(t);var n=r(101),a=r(555),s=(r(10),r(23),r(27),r(556),r(431),r(460),r(48),r(67),r(129),r(130),r(38),r(36),r(94),r(128),r(201),r(209),r(424),r(406),r(461),r(415)),i=r.n(s),o=r(557),l=r(564),u=r(565),c=r(475),f=r(876),h=r(877),d=r(443),p=r(422),g=r(507),v=r(383),m=r(427),y=r(815),k=r(432),w=r(806),b=r(850),x=r(808),_=r(412),P=r(543),S=r(879),R=r(405),C=r(813),D=r(448),U=r(871),q=r(441),F=r(881),L={name:"PdfForm",components:{EmbedPdfViewer:function(){return Promise.all([r.e(0),r.e(2),r.e(14),r.e(45)]).then(r.bind(null,864))},VApp:c.a,VCol:f.a,VRow:h.a,VList:d.a,VListItem:p.a,VListItemTitle:g.b,VListItemContent:g.a,VSheet:v.a,VCard:m.a,VCardTitle:y.d,VCardSubtitle:y.b,VCardText:y.c,VToolbar:k.a,VToolbarTitle:w.b,VToolbarItems:w.a,VSpacer:b.a,VForm:x.a,VBtn:_.a,VIcon:P.a,VTooltip:S.a,VTextField:R.a,VAutocomplete:C.a,VTextarea:D.a,VDialog:U.a,VDivider:q.a,VDatePicker:F.a},props:{id:{type:String,default:"applet"},url:{type:String,default:null},title:{type:String,default:"Agreement"},servicedesk:{type:String,default:null},fields:{type:Array,default:null}},data:function(){return{formData:{},layout:{formCols:5,pdfCols:7,hidePdf:!1},datemodal:{},datedialog:{},canvasOffsets:{},signatures:{},pdfSignatures:{},pdfDoc:null,renderedFields:null,pdfFields:[],pdfFile:null,pdfDownloadClicked:!1,pdfPages:1,showPdf:!1,downloadPdf:!1,pdfTimestamp:(new Date).toISOString(),dialogs:{},signaturePad:null,defaultScale:.04,drawer:null,expandForm:!0}},computed:{getCountries:function(){return l.a?l.a:[]},formFilled:function(){var e=this;return this.fields.filter((function(e){return e.key})).every((function(t){return!(!e.formData[t.key]&&e.isFieldRequired(t.required))}))},pdfData:function(){return this.pdfFile?this.pdfFile:""},getPdfTitle:function(){var e=new Date,t=e.getFullYear()+("0"+(e.getMonth()+1)).slice(-2)+("0"+e.getDate()).slice(-2)+"-"+("0"+e.getHours()).slice(-2)+("0"+e.getMinutes()).slice(-2)+("0"+e.getSeconds()).slice(-2);return"agreement-".concat(t,".pdf")}},watch:{expandForm:function(e){if(e){this.layout={formCols:12,pdfCols:12,hidePdf:!0}}else{this.layout={formCols:5,pdfCols:7,hidePdf:!1}}}},mounted:function(){},created:function(){var e=this;this.fields.filter((function(e){return"signature"===e.field})).forEach((function(t){e.dialogs=Object.assign({},e.dialogs,Object(a.a)({},t.key,null)),e.pdfSignatures[t.key]={page:t.page&&t.page>0?t.page:0,xpos:t.xpos&&t.xpos>0?t.xpos:.5,ypos:t.ypos&&t.ypos>0?t.ypos:.5,scale:t.scale&&t.scale>0?t.scale:e.defaultScale}})),this.fields.filter((function(e){return"date"===e.field})).forEach((function(t){var r=new Date;e.formData[t.key]=r.toISOString().substring(0,10)})),this.url&&this.loadPdf(this.url)},methods:{loadPdf:function(e){var t=this;try{i()(e).then((function(e){if(!e.ok)throw new Error("unexpected response ".concat(e.statusText));return e.arrayBuffer()})).then((function(e){t.pdfBuffer=e;try{var r=t.pdfBuffer;o.PDFDocument.load(r).then((function(e){t.pdfDoc=e,t.pdfDoc.saveAsBase64({dataUri:!0}).then((function(r){var n=e.getPages().length;t.browsePdf(r,n,!0)}));var r=e.getForm();t.pdfFields=r.getFields().map((function(e){return e.getName()})),console.log(t.pdfFields)}))}catch(e){console.log("Failed to read fields"),console.log(e)}}))}catch(e){console.log(e)}},getTimestamp:function(){return(new Date).toISOString()},isFieldRequired:function(e){return!(!e||"false"===e)},isBoolTrue:function(e){return!(!e||"false"===e)},addSignature:function(e){var t=this,r=document.getElementById("signature-pad--".concat(e));if(r){var n=r.querySelector("canvas");this.signatures[e]={},this.signatures[e].signed=!1,this.signatures[e].canvas=n;var a=new u.a(n,{dotSize:3,minWidth:2,maxWidth:4});this.signatures[e].signature=a,a.addEventListener("beginStroke",(function(){console.log("Signature started")}),{once:!0}),window.addEventListener("resize",this.resizeCanvas),this.$nextTick((function(){t.resizeCanvas(null,e)}))}else console.log("No wrapper found for id: signature-pad--".concat(e))},resizeCanvas:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=r?[r]:Object.keys(this.signatures);n.forEach((function(e){var r=document.getElementById("signature-pad--".concat(e));if(r){var n=r.querySelector("canvas"),a=Math.max(window.devicePixelRatio||1,1);if(t.canvasOffsets&&t.canvasOffsets[e]&&t.canvasOffsets[e].width&&t.canvasOffsets[e].height)var s=t.canvasOffsets[e].width,i=t.canvasOffsets[e].height;else{s=n.offsetWidth,i=n.offsetHeight;t.canvasOffsets[e]={width:s,height:i}}console.log("Canvas current size ".concat(s," x ").concat(i," (device ratio: ").concat(window.devicePixelRatio,")")),n.width=s*a,n.height=i*a,n.getContext("2d").scale(a,a),t.signatures[e].signature.clear()}else console.log("No wrapper found for id: signature-pad--".concat(e))}))},openDialog:function(e){var t=this;this.dialogs=Object.assign({},this.dialogs,Object(a.a)({},e,!0)),this.$nextTick((function(){t.addSignature(e)}))},closeDialog:function(e){this.dialogs=Object.assign({},this.dialogs,Object(a.a)({},e,!1))},saveDialog:function(e){this.dialogs=Object.assign({},this.dialogs,Object(a.a)({},e,!1)),this.signatures[e].signed=!this.signatures[e].signature.isEmpty(),console.log("Signature signed [".concat(e,"]: ").concat(this.signatures[e].signed)),this.signatures[e].pngurl=this.signatures[e].signature.toDataURL()},submit:function(){var e=this;console.log(this.formData);try{var t=this.pdfBuffer;o.PDFDocument.load(t).then((function(t){var r=t.getForm();e.renderedFields={},e.fields.forEach((function(t){if(t.key&&!["section","signature","date"].includes(t.field)&&e.formData[t.key]){var n=r.getTextField(t.key),a=null;a=t.joinkey?"".concat(e.formData[t.joinkey],", ").concat(e.formData[t.key]):e.formData[t.key],n.setText(a),e.renderedFields[t.key]=a}})),r.flatten();var n=Object.keys(e.signatures).filter((function(t){return e.signatures[t].signed}));if(n.length>0){var a=n.map((function(r){var n=e.signatures[r].pngurl;return t.embedPng(n).then((function(n){var a=n,s=t.getPages(),i=e.pdfSignatures[r].page,o=s[i],l=a.scale(e.pdfSignatures[r].scale),u=o.getWidth()*e.pdfSignatures[r].xpos,c=o.getHeight()*e.pdfSignatures[r].ypos;console.log("Page ".concat(i," (").concat(o.getWidth()," x ").concat(o.getHeight(),") - insert image ").concat(r,".png (").concat(l.width," x ").concat(l.height,") at position ").concat(u," x ").concat(c)),o.drawImage(a,{x:u,y:c,width:l.width,height:l.height})}))}));Promise.all(a).then((function(){console.log("Render PDF with signatures"),t.saveAsBase64({dataUri:!0}).then((function(r){var n=t.getPages().length;e.browsePdf(r,n,!0,!0)}))}))}else console.log("PDF without signatures"),t.saveAsBase64({dataUri:!0}).then((function(r){var n=t.getPages().length;e.browsePdf(r,n,!0,!0)}))})),this.pdfDownloadClicked=!1}catch(e){console.log(e)}},browsePdf:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=t;this.pdfFile=s,this.pdfPages=r,this.pdfTimestamp=this.getTimestamp(),this.showPdf=n,this.$nextTick((function(){e.downloadPdf=a}))},showTooltip:function(e){console.log(e)},saveDate:function(e,t){this.$refs[e][0].save(t),this.datemodal[e]=!1},serviceDeskRedirect:function(){window.history.state;var e=new URL("/-/service-desk/",window.location.origin);e.searchParams.set("open",this.servicedesk);for(var t=0,r=Object.entries(this.renderedFields);t<r.length;t++){var a=Object(n.a)(r[t],2),s=a[0],i=a[1];e.searchParams.set(s,i)}window.location=e}}},B=(r(505),r(41)),O=Object(B.a)(L,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{staticClass:"d-flex flex-xs-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap h-100 w-100 align-self-center",staticStyle:{"max-width":"1680px"}},[r("v-sheet",{staticClass:"flex-grow-1 flex-shrink-0 mx-2 px-2 h-100 h-xs-auto h-sm-auto overflow-y-auto col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",staticStyle:{"min-width":"300px","max-width":"100%"}},[r("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("v-list",[r("v-list-item",[r("p",{staticClass:"font-weight-bold py-0 my-0"},[e._v(e._s(e.title))])]),e._v(" "),e._l(e.fields,(function(t){return["divider"===t.field?r("v-divider",{key:t.key}):e._e(),e._v(" "),"section"===t.field?r("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[r("p",{staticClass:"text-darken-1 py-0 mt-0 mb-2"},[e._v(e._s(t.label))])]):e._e(),e._v(" "),"textfield"===t.field?r("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[r("v-text-field",{ref:t.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",pattern:t.pattern?t.pattern:null,title:t.hint?t.hint:null,minlength:t.minlength?t.minlength:null,maxlength:t.maxlength?t.maxlength:null,min:t.min&&"number"===t.specialType?t.min:null,max:t.max&&"number"===t.specialType?t.max:null,required:e.isFieldRequired(t.required),autocapitalize:t.autocapitalize?t.autocapitalize:null,suffix:t.suffix?t.suffix:null,type:t.specialType?t.specialType:null,hint:t.hint?t.hint:null,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                "+e._s(t.label)),e.isFieldRequired(t.required)?r("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0},!t.tooltip?null:{key:"append",fn:function(){return[r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:"","x-small":""}},"v-btn",a,!1),n),[r("v-icon",{staticClass:"material-icons"},[e._v("info")])],1)]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(t.tooltip))])])]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(r){e.$set(e.formData,t.key,r)},expression:"formData[item.key]"}})],1):e._e(),e._v(" "),"autocompleteone"===t.field?r("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[r("v-autocomplete",{ref:t.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",items:t.options,required:e.isFieldRequired(t.required),clearable:e.isBoolTrue(t.clearable),"clear-icon":"",placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                "+e._s(t.label)),e.isFieldRequired(t.required)?r("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0},{key:"append",fn:function(){return[!e.isBoolTrue(t.clearable)||!e.formData[t.key]?e._e():r("div",{staticClass:"v-input__icon v-input__icon--clear"},[r("i",{staticClass:"v-icon notranslate v-icon--link material-icons theme--dark primary--text",attrs:{type:"button","aria-label":"clear icon",tabindex:"-1"},on:{click:function(r){r.stopPropagation(),e.formData[t.key]=null}}},[e._v("\n                    close\n                  ")])])]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(r){e.$set(e.formData,t.key,r)},expression:"formData[item.key]"}})],1):e._e(),e._v(" "),"date"===t.field?r("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[r("v-dialog",{ref:t.key,refInFor:!0,attrs:{"return-value":e.formData[t.key],persistent:"",width:"290px"},on:{"update:returnValue":function(r){return e.$set(e.formData,t.key,r)},"update:return-value":function(r){return e.$set(e.formData,t.key,r)}},scopedSlots:e._u([{key:"activator",fn:function(n){var a=n.on,s=n.attrs;return[r("v-text-field",e._g(e._b({staticClass:"mb-3",attrs:{placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":"",readonly:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                    "+e._s(t.label)),e.isFieldRequired(t.required)?r("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(r){e.$set(e.formData,t.key,r)},expression:"formData[item.key]"}},"v-text-field",s,!1),a))]}}],null,!0),model:{value:e.datemodal[t.key],callback:function(r){e.$set(e.datemodal,t.key,r)},expression:"datemodal[item.key]"}},[e._v(" "),r("v-date-picker",{attrs:{scrollable:""},model:{value:e.datedialog[t.key],callback:function(r){e.$set(e.datedialog,t.key,r)},expression:"datedialog[item.key]"}},[r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(r){e.datemodal[t.key]=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(r){return e.saveDate(t.key,e.datedialog[t.key])}}},[e._v("\n                  OK\n                ")])],1)],1)],1):e._e(),e._v(" "),"countries"===t.field?r("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[r("v-autocomplete",{ref:t.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",items:e.getCountries,"item-text":function(e){return e.name+" "+e.flag},"item-value":function(e){return e.name},required:e.isFieldRequired(t.required),placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"","hide-details":""},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                "+e._s(t.label)),e.isFieldRequired(t.required)?r("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(r){e.$set(e.formData,t.key,r)},expression:"formData[item.key]"}})],1):e._e(),e._v(" "),"textarea"===t.field?r("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[r("v-textarea",{ref:t.key,refInFor:!0,staticClass:"mb-3",attrs:{autocomplete:"ignore-field",pattern:t.pattern?t.pattern:null,title:t.hint?t.hint:null,minlength:t.minlength?t.minlength:null,maxlength:t.maxlength?t.maxlength:null,required:e.isFieldRequired(t.required),hint:t.hint?t.hint:null,"persistent-hint":!(!t.hint||!e.formData[t.key]),placeholder:t.placeholder?t.placeholder:"","persistent-placeholder":"",outlined:"",dense:"",rows:1,"hide-details":!e.formData[t.key]&&"auto"},on:{focus:function(e){return e.target.select()}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                "+e._s(t.label)),e.isFieldRequired(t.required)?r("span",{staticClass:"red--text text--darken-2"},[e._v(" * ")]):e._e()]},proxy:!0}],null,!0),model:{value:e.formData[t.key],callback:function(r){e.$set(e.formData,t.key,r)},expression:"formData[item.key]"}})],1):e._e(),e._v(" "),"signature"===t.field?r("v-list-item",{key:t.key,attrs:{cols:"12",dense:""}},[r("v-card",{staticClass:"px-0 mb-3",staticStyle:{width:"100%"},attrs:{elevation:"0",outlined:""}},[r("v-card-text",[r("v-row",{staticClass:"mr-xs-12 pr-sm-8",attrs:{justify:"space-between","no-gutters":""}},[r("v-col",{attrs:{cols:"8"}},[r("div",{staticClass:"font-weight-bold"},[e._v(e._s(t.label))])]),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{color:"primary",block:""},on:{click:function(r){return e.openDialog(t.key)}}},[e._v("\n                      Add signature\n                    ")])],1)],1),e._v(" "),r("v-row",{staticClass:"mr-xs-12 pr-sm-8",attrs:{align:"center",justify:"space-between","no-gutters":""}},[r("v-col",{staticStyle:{height:"40px"},attrs:{cols:"12"}},[e.signatures&&e.signatures[t.key]&&e.signatures[t.key].signed?r("div",[r("img",{staticStyle:{"max-height":"40px"},attrs:{src:e.signatures[t.key].pngurl}})]):r("div",[e._v("\n                      Add digital signature now or sign later\n                    ")])])],1),e._v(" "),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialogs[t.key],callback:function(r){e.$set(e.dialogs,t.key,r)},expression:"dialogs[item.key]"}},[r("v-card",{staticClass:"prevent-select",staticStyle:{height:"100%"}},[r("v-toolbar",[r("v-toolbar-title",[e._v(e._s(t.label))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:function(r){return e.closeDialog(t.key)}}},[e._v("\n                        Close\n                      ")]),e._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{text:""},on:{click:function(r){return e.saveDialog(t.key)}}},[e._v("\n                          Save\n                        ")])],1)],1),e._v(" "),r("div",{staticClass:"signature-card"},[r("div",{staticClass:"signature-pad mt-8",attrs:{id:"signature-pad--"+t.key}},[r("div",{staticClass:"signature-pad--body"},[r("canvas")]),e._v(" "),r("div",{staticClass:"signature-pad--footer"},[r("div",{staticClass:"description"},[e._v("Sign above")])])])])],1)],1)],1)],1)],1):e._e()]})),e._v(" "),r("v-list-item",[r("v-row",{staticClass:"px-2",attrs:{align:"center",justify:"space-around"}},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-8 px-0",attrs:{type:"submit",block:"",color:"teal",disabled:!e.formFilled}},[e._v("Generate Agreement")])],1)],1)],1),e._v(" "),r("v-list-item",[r("v-row",{staticClass:"px-2",attrs:{align:"center",justify:"space-around"}},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-8 px-0",attrs:{block:"",color:e.pdfDownloadClicked?"link":"success",href:e.pdfFile,download:e.getPdfTitle,target:"_blank",disabled:!e.pdfFile||!e.downloadPdf},on:{click:function(t){e.pdfDownloadClicked=!0}}},[e._v("\n                Download Agreement\n              ")])],1)],1)],1),e._v(" "),e.servicedesk?r("v-list-item",[r("v-row",{staticClass:"px-2",attrs:{align:"center",justify:"space-around"}},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-8 px-0",attrs:{block:"",color:"primary",target:"_blank",disabled:!e.pdfDownloadClicked},on:{click:e.serviceDeskRedirect}},[e._v("\n                Service desk\n              ")])],1)],1)],1):e._e()],2)],1)]),e._v(" "),r("v-sheet",{staticClass:"flex-grow-1 flex-shrink-1 mx-2 px-2 h-100 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",staticStyle:{"min-width":"300px","max-width":"100%"}},[!e.showPdf?e._e():r("EmbedPdfViewer",{attrs:{source:e.pdfData,pages:e.pdfPages,height:"500"}})],1)],1)}),[],!1,null,null,null);t.default=O.exports}}]);