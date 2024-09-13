function Xe(R,Q){for(var y=0;y<Q.length;y++){const T=Q[y];if(typeof T!="string"&&!Array.isArray(T)){for(const _ in T)if(_!=="default"&&!(_ in R)){const h=Object.getOwnPropertyDescriptor(T,_);h&&Object.defineProperty(R,_,h.get?h:{enumerable:!0,get:()=>T[_]})}}}return Object.freeze(Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}))}var qe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ue(R){return R&&R.__esModule&&Object.prototype.hasOwnProperty.call(R,"default")?R.default:R}var de={exports:{}};/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */(function(R,Q){(function(y){var T=y.setTimeout,_=y.clearTimeout,h=y.XMLHttpRequest,ue=y.XDomainRequest,ce=y.ActiveXObject,K=y.EventSource,H=y.document,Ae=y.Promise,Z=y.fetch,le=y.Response,J=y.TextDecoder,ve=y.TextEncoder,ee=y.AbortController;if(typeof window<"u"&&typeof H<"u"&&!("readyState"in H)&&H.body==null&&(H.readyState="loading",window.addEventListener("load",function(e){H.readyState="complete"},!1)),h==null&&ce!=null&&(h=function(){return new ce("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function r(){}return r.prototype=e,new r}),Date.now||(Date.now=function(){return new Date().getTime()}),ee==null){var De=Z;Z=function(e,r){var n=r.signal;return De(e,{headers:r.headers,credentials:r.credentials,cache:r.cache}).then(function(t){var o=t.body.getReader();return n._reader=o,n._aborted&&n._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return o}}}})},ee=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function he(){this.bitsNeeded=0,this.codePoint=0}he.prototype.decode=function(e){function r(d,u,i){if(i===1)return d>=128>>u&&d<<u<=2047;if(i===2)return d>=2048>>u&&d<<u<=55295||d>=57344>>u&&d<<u<=65535;if(i===3)return d>=65536>>u&&d<<u<=1114111;throw new Error}function n(d,u){if(d===6*1)return u>>6>15?3:u>31?2:1;if(d===6*2)return u>15?3:2;if(d===6*3)return 3;throw new Error}for(var t=65533,o="",a=this.bitsNeeded,f=this.codePoint,c=0;c<e.length;c+=1){var s=e[c];a!==0&&(s<128||s>191||!r(f<<6|s&63,a-6,n(a,f)))&&(a=0,f=t,o+=String.fromCharCode(f)),a===0?(s>=0&&s<=127?(a=0,f=s):s>=192&&s<=223?(a=6*1,f=s&31):s>=224&&s<=239?(a=6*2,f=s&15):s>=240&&s<=247?(a=6*3,f=s&7):(a=0,f=t),a!==0&&!r(f,a,n(a,f))&&(a=0,f=t)):(a-=6,f=f<<6|s&63),a===0&&(f<=65535?o+=String.fromCharCode(f):(o+=String.fromCharCode(55296+(f-65535-1>>10)),o+=String.fromCharCode(56320+(f-65535-1&1023))))}return this.bitsNeeded=a,this.codePoint=f,o};var Oe=function(){try{return new J().decode(new ve().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(J==null||ve==null||!Oe())&&(J=he);var A=function(){};function M(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=A,this.onload=A,this.onerror=A,this.onreadystatechange=A,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=A}M.prototype.open=function(e,r){this._abort(!0);var n=this,t=this._xhr,o=1,a=0;this._abort=function(i){n._sendTimeout!==0&&(_(n._sendTimeout),n._sendTimeout=0),(o===1||o===2||o===3)&&(o=4,t.onload=A,t.onerror=A,t.onabort=A,t.onprogress=A,t.onreadystatechange=A,t.abort(),a!==0&&(_(a),a=0),i||(n.readyState=4,n.onabort(null),n.onreadystatechange())),o=0};var f=function(){if(o===1){var i=0,l="",F=void 0;if("contentType"in t)i=200,l="OK",F=t.contentType;else try{i=t.status,l=t.statusText,F=t.getResponseHeader("Content-Type")}catch{i=0,l="",F=void 0}i!==0&&(o=2,n.readyState=2,n.status=i,n.statusText=l,n._contentType=F,n.onreadystatechange())}},c=function(){if(f(),o===2||o===3){o=3;var i="";try{i=t.responseText}catch{}n.readyState=3,n.responseText=i,n.onprogress()}},s=function(i,l){if((l==null||l.preventDefault==null)&&(l={preventDefault:A}),c(),o===1||o===2||o===3){if(o=4,a!==0&&(_(a),a=0),n.readyState=4,i==="load")n.onload(l);else if(i==="error")n.onerror(l);else if(i==="abort")n.onabort(l);else throw new TypeError;n.onreadystatechange()}},d=function(i){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&s(t.responseText===""?"error":"load",i):t.readyState===3?"onprogress"in t||c():t.readyState===2&&f())},u=function(){a=T(function(){u()},500),t.readyState===3&&c()};"onload"in t&&(t.onload=function(i){s("load",i)}),"onerror"in t&&(t.onerror=function(i){s("error",i)}),"onabort"in t&&(t.onabort=function(i){s("abort",i)}),"onprogress"in t&&(t.onprogress=c),"onreadystatechange"in t&&(t.onreadystatechange=function(i){d(i)}),("contentType"in t||!("ontimeout"in h.prototype))&&(r+=(r.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,r,!0),"readyState"in t&&(a=T(function(){u()},0))},M.prototype.abort=function(){this._abort(!1)},M.prototype.getResponseHeader=function(e){return this._contentType},M.prototype.setRequestHeader=function(e,r){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,r)},M.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},M.prototype.send=function(){if((!("ontimeout"in h.prototype)||!("sendAsBinary"in h.prototype)&&!("mozAnon"in h.prototype))&&H!=null&&H.readyState!=null&&H.readyState!=="complete"){var e=this;e._sendTimeout=T(function(){e._sendTimeout=0,e.send()},4);return}var r=this._xhr;"withCredentials"in r&&(r.withCredentials=this.withCredentials);try{r.send(void 0)}catch(n){throw n}};function pe(e){return e.replace(/[A-Z]/g,function(r){return String.fromCharCode(r.charCodeAt(0)+32)})}function ye(e){for(var r=Object.create(null),n=e.split(`\r
`),t=0;t<n.length;t+=1){var o=n[t],a=o.split(": "),f=a.shift(),c=a.join(": ");r[pe(f)]=c}this._map=r}ye.prototype.get=function(e){return this._map[pe(e)]},h!=null&&h.HEADERS_RECEIVED==null&&(h.HEADERS_RECEIVED=2);function ge(){}ge.prototype.open=function(e,r,n,t,o,a,f){e.open("GET",o);var c=0;e.onprogress=function(){var d=e.responseText,u=d.slice(c);c+=u.length,n(u)},e.onerror=function(d){d.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===h.HEADERS_RECEIVED){var d=e.status,u=e.statusText,i=e.getResponseHeader("Content-Type"),l=e.getAllResponseHeaders();r(d,u,i,new ye(l))}},e.withCredentials=a;for(var s in f)Object.prototype.hasOwnProperty.call(f,s)&&e.setRequestHeader(s,f[s]);return e.send(),e};function Ee(e){this._headers=e}Ee.prototype.get=function(e){return this._headers.get(e)};function we(){}we.prototype.open=function(e,r,n,t,o,a,f){var c=null,s=new ee,d=s.signal,u=new J;return Z(o,{headers:f,credentials:a?"include":"same-origin",signal:d,cache:"no-store"}).then(function(i){return c=i.body.getReader(),r(i.status,i.statusText,i.headers.get("Content-Type"),new Ee(i.headers)),new Ae(function(l,F){var $=function(){c.read().then(function(b){if(b.done)l(void 0);else{var E=u.decode(b.value,{stream:!0});n(E),$()}}).catch(function(b){F(b)})};$()})}).catch(function(i){if(i.name!=="AbortError")return i}).then(function(i){t(i)}),{abort:function(){c!=null&&c.cancel(),s.abort()}}};function V(){this._listeners=Object.create(null)}function me(e){T(function(){throw e},0)}V.prototype.dispatchEvent=function(e){e.target=this;var r=this._listeners[e.type];if(r!=null)for(var n=r.length,t=0;t<n;t+=1){var o=r[t];try{typeof o.handleEvent=="function"?o.handleEvent(e):o.call(this,e)}catch(a){me(a)}}},V.prototype.addEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];t==null&&(t=[],n[e]=t);for(var o=!1,a=0;a<t.length;a+=1)t[a]===r&&(o=!0);o||t.push(r)},V.prototype.removeEventListener=function(e,r){e=String(e);var n=this._listeners,t=n[e];if(t!=null){for(var o=[],a=0;a<t.length;a+=1)t[a]!==r&&o.push(t[a]);o.length===0?delete n[e]:n[e]=o}};function X(e){this.type=e,this.target=void 0}function Te(e,r){X.call(this,e),this.data=r.data,this.lastEventId=r.lastEventId}Te.prototype=Object.create(X.prototype);function te(e,r){X.call(this,e),this.status=r.status,this.statusText=r.statusText,this.headers=r.headers}te.prototype=Object.create(X.prototype);function be(e,r){X.call(this,e),this.error=r.error}be.prototype=Object.create(X.prototype);var re=-1,j=0,q=1,W=2,ne=-1,L=0,ae=1,Ce=2,Fe=3,xe=/^text\/event\-stream(;.*)?$/i,Ne=1e3,Ie=18e6,oe=function(e,r){var n=e==null?r:parseInt(e,10);return n!==n&&(n=r),ie(n)},ie=function(e){return Math.min(Math.max(e,Ne),Ie)},U=function(e,r,n){try{typeof r=="function"&&r.call(e,n)}catch(t){me(t)}};function D(e,r){V.call(this),r=r||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,Le(this,e,r)}function He(){return h!=null&&"withCredentials"in h.prototype||ue==null?new h:new ue}var je=Z!=null&&le!=null&&"body"in le.prototype;function Le(e,r,n){r=String(r);var t=!!n.withCredentials,o=n.lastEventIdQueryParameterName||"lastEventId",a=ie(1e3),f=oe(n.heartbeatTimeout,45e3),c="",s=a,d=!1,u=0,i=n.headers||{},l=n.Transport,F=je&&l==null?void 0:new M(l!=null?new l:He()),$=l!=null&&typeof l!="string"?new l:F==null?new we:new ge,b=void 0,E=0,O=re,B="",Y="",x="",k="",w=L,fe=0,P=0,Me=function(p,v,C,S){if(O===j)if(p===200&&C!=null&&xe.test(C)){O=q,d=Date.now(),s=a,e.readyState=q;var m=new te("open",{status:p,statusText:v,headers:S});e.dispatchEvent(m),U(e,e.onopen,m)}else{var g="";p!==200?(v&&(v=v.replace(/\s+/g," ")),g="EventSource's response has a status "+p+" "+v+" that is not 200. Aborting the connection."):g="EventSource's response has a Content-Type specifying an unsupported type: "+(C==null?"-":C.replace(/\s+/g," "))+". Aborting the connection.",se();var m=new te("error",{status:p,statusText:v,headers:S});e.dispatchEvent(m),U(e,e.onerror,m),console.error(g)}},Pe=function(p){if(O===q){for(var v=-1,C=0;C<p.length;C+=1){var S=p.charCodeAt(C);(S===`
`.charCodeAt(0)||S==="\r".charCodeAt(0))&&(v=C)}var m=(v!==-1?k:"")+p.slice(0,v+1);k=(v===-1?k:"")+p.slice(v+1),p!==""&&(d=Date.now(),u+=p.length);for(var g=0;g<m.length;g+=1){var S=m.charCodeAt(g);if(w===ne&&S===`
`.charCodeAt(0))w=L;else if(w===ne&&(w=L),S==="\r".charCodeAt(0)||S===`
`.charCodeAt(0)){if(w!==L){w===ae&&(P=g+1);var N=m.slice(fe,P-1),I=m.slice(P+(P<g&&m.charCodeAt(P)===" ".charCodeAt(0)?1:0),g);N==="data"?(B+=`
`,B+=I):N==="id"?Y=I:N==="event"?x=I:N==="retry"?(a=oe(I,a),s=a):N==="heartbeatTimeout"&&(f=oe(I,f),E!==0&&(_(E),E=T(function(){z()},f)))}if(w===L){if(B!==""){c=Y,x===""&&(x="message");var G=new Te(x,{data:B.slice(1),lastEventId:Y});if(e.dispatchEvent(G),x==="open"?U(e,e.onopen,G):x==="message"?U(e,e.onmessage,G):x==="error"&&U(e,e.onerror,G),O===W)return}B="",x=""}w=S==="\r".charCodeAt(0)?ne:L}else w===L&&(fe=g,w=ae),w===ae?S===":".charCodeAt(0)&&(P=g+1,w=Ce):w===Ce&&(w=Fe)}}},_e=function(p){if(O===q||O===j){O=re,E!==0&&(_(E),E=0),E=T(function(){z()},s),s=ie(Math.min(a*16,s*2)),e.readyState=j;var v=new be("error",{error:p});e.dispatchEvent(v),U(e,e.onerror,v),p!=null&&console.error(p)}},se=function(){O=W,b!=null&&(b.abort(),b=void 0),E!==0&&(_(E),E=0),e.readyState=W},z=function(){if(E=0,O!==re){if(!d&&b!=null)_e(new Error("No activity within "+f+" milliseconds. "+(O===j?"No response received.":u+" chars received.")+" Reconnecting.")),b!=null&&(b.abort(),b=void 0);else{var p=Math.max((d||Date.now())+f-Date.now(),1);d=!1,E=T(function(){z()},p)}return}d=!1,u=0,E=T(function(){z()},f),O=j,B="",x="",Y=c,k="",fe=0,P=0,w=L;var v=r;if(r.slice(0,5)!=="data:"&&r.slice(0,5)!=="blob:"&&c!==""){var C=r.indexOf("?");v=C===-1?r:r.slice(0,C+1)+r.slice(C+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(I,G){return G===o?"":I}),v+=(r.indexOf("?")===-1?"?":"&")+o+"="+encodeURIComponent(c)}var S=e.withCredentials,m={};m.Accept="text/event-stream";var g=e.headers;if(g!=null)for(var N in g)Object.prototype.hasOwnProperty.call(g,N)&&(m[N]=g[N]);try{b=$.open(F,Me,Pe,_e,v,S,m)}catch(I){throw se(),I}};e.url=r,e.readyState=j,e.withCredentials=t,e.headers=i,e._close=se,z()}D.prototype=Object.create(V.prototype),D.prototype.CONNECTING=j,D.prototype.OPEN=q,D.prototype.CLOSED=W,D.prototype.close=function(){this._close()},D.CONNECTING=j,D.OPEN=q,D.CLOSED=W,D.prototype.withCredentials=void 0;var Se=K;h!=null&&(K==null||!("withCredentials"in K.prototype))&&(Se=D),function(e){{var r=e(Q);r!==void 0&&(R.exports=r)}}(function(e){e.EventSourcePolyfill=D,e.NativeEventSource=K,e.EventSource=Se})})(typeof globalThis>"u"?typeof window<"u"?window:typeof self<"u"?self:qe:globalThis)})(de,de.exports);var Be=de.exports,Re=Be.EventSourcePolyfill;const Ge=Ue(Re),Ve=Xe({__proto__:null,default:Ge},[Re]);export{Ve as b};
