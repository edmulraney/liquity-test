import{a as A,E as re,e as ye}from"./index-c3d7bdbd.js";import{t as ve}from"./tslib-ef20a52d.js";var u={};Object.defineProperty(u,"__esModule",{value:!0});var me=u.getLocalStorage=je=u.getLocalStorageOrThrow=Ie=u.getCrypto=Fe=u.getCryptoOrThrow=Le=u.getLocation=Se=u.getLocationOrThrow=De=u.getNavigator=Ae=u.getNavigatorOrThrow=_e=u.getDocument=Re=u.getDocumentOrThrow=be=u.getFromWindowOrThrow=we=u.getFromWindow=void 0;function C(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}var we=u.getFromWindow=C;function D(t){const e=C(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}var be=u.getFromWindowOrThrow=D;function Ee(){return D("document")}var Re=u.getDocumentOrThrow=Ee;function Oe(){return C("document")}var _e=u.getDocument=Oe;function Te(){return D("navigator")}var Ae=u.getNavigatorOrThrow=Te;function Ce(){return C("navigator")}var De=u.getNavigator=Ce;function Pe(){return D("location")}var Se=u.getLocationOrThrow=Pe;function xe(){return C("location")}var Le=u.getLocation=xe;function Be(){return D("crypto")}var Fe=u.getCryptoOrThrow=Be;function Me(){return C("crypto")}var Ie=u.getCrypto=Me;function Ue(){return D("localStorage")}var je=u.getLocalStorageOrThrow=Ue;function Ne(){return C("localStorage")}me=u.getLocalStorage=Ne;var H={};Object.defineProperty(H,"__esModule",{value:!0});var He=H.getWindowMetadata=void 0;const k=u;function qe(){let t,e;try{t=k.getDocumentOrThrow(),e=k.getLocationOrThrow()}catch{return null}function n(){const y=t.getElementsByTagName("link"),w=[];for(let m=0;m<y.length;m++){const h=y[m],E=h.getAttribute("rel");if(E&&E.toLowerCase().indexOf("icon")>-1){const l=h.getAttribute("href");if(l)if(l.toLowerCase().indexOf("https:")===-1&&l.toLowerCase().indexOf("http:")===-1&&l.indexOf("//")!==0){let _=e.protocol+"//"+e.host;if(l.indexOf("/")===0)_+=l;else{const x=e.pathname.split("/");x.pop();const M=x.join("/");_+=M+"/"+l}w.push(_)}else if(l.indexOf("//")===0){const _=e.protocol+l;w.push(_)}else w.push(l)}}return w}function a(...y){const w=t.getElementsByTagName("meta");for(let m=0;m<w.length;m++){const h=w[m],E=["itemprop","property","name"].map(l=>h.getAttribute(l)).filter(l=>l?y.includes(l):!1);if(E.length&&E){const l=h.getAttribute("content");if(l)return l}}return""}function c(){let y=a("name","og:site_name","og:title","twitter:title");return y||(y=t.title),y}function i(){return a("description","og:description","twitter:description","keywords")}const d=c(),p=i(),B=e.origin,F=n();return{description:p,url:B,icons:F,name:d}}He=H.getWindowMetadata=qe;var bt=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),ne="%[a-f0-9]{2}",V=new RegExp("("+ne+")|([^%]+?)","gi"),G=new RegExp("("+ne+")+","gi");function j(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),a=t.slice(e);return Array.prototype.concat.call([],j(n),j(a))}function Je(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(V)||[],n=1;n<e.length;n++)t=j(e,n).join(""),e=t.match(V)||[];return t}}function $e(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=G.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var a=Je(n[0]);a!==n[0]&&(e[n[0]]=a)}n=G.exec(t)}e["%C2"]="�";for(var c=Object.keys(e),i=0;i<c.length;i++){var d=c[i];t=t.replace(new RegExp(d,"g"),e[d])}return t}var Et=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return $e(t)}},Rt=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},Ot=function(t,e){for(var n={},a=Object.keys(t),c=Array.isArray(e),i=0;i<a.length;i++){var d=a[i],p=t[d];(c?e.indexOf(d)!==-1:e(d,p,t))&&(n[d]=p)}return n};const We=t=>JSON.stringify(t,(e,n)=>typeof n=="bigint"?n.toString()+"n":n),ke=t=>{const e=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,n=t.replace(e,'$1"$2n"$3');return JSON.parse(n,(a,c)=>typeof c=="string"&&c.match(/^\d+n$/)?BigInt(c.substring(0,c.length-1)):c)};function Ve(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return ke(t)}catch{return t}}function z(t){return typeof t=="string"?t:We(t)||""}const Ge="PARSE_ERROR",ze="INVALID_REQUEST",Xe="METHOD_NOT_FOUND",Qe="INVALID_PARAMS",oe="INTERNAL_ERROR",q="SERVER_ERROR",Ke=[-32700,-32600,-32601,-32602,-32603],S={[Ge]:{code:-32700,message:"Parse error"},[ze]:{code:-32600,message:"Invalid Request"},[Xe]:{code:-32601,message:"Method not found"},[Qe]:{code:-32602,message:"Invalid params"},[oe]:{code:-32603,message:"Internal error"},[q]:{code:-32e3,message:"Server error"}},ie=q;function Ye(t){return Ke.includes(t)}function X(t){return Object.keys(S).includes(t)?S[t]:S[ie]}function Ze(t){const e=Object.values(S).find(n=>n.code===t);return e||S[ie]}function et(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):t}var tt={},R={},Q;function rt(){if(Q)return R;Q=1,Object.defineProperty(R,"__esModule",{value:!0}),R.isBrowserCryptoAvailable=R.getSubtleCrypto=R.getBrowerCrypto=void 0;function t(){return(A===null||A===void 0?void 0:A.crypto)||(A===null||A===void 0?void 0:A.msCrypto)||{}}R.getBrowerCrypto=t;function e(){const a=t();return a.subtle||a.webkitSubtle}R.getSubtleCrypto=e;function n(){return!!t()&&!!e()}return R.isBrowserCryptoAvailable=n,R}var O={},K;function nt(){if(K)return O;K=1,Object.defineProperty(O,"__esModule",{value:!0}),O.isBrowser=O.isNode=O.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}O.isReactNative=t;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}O.isNode=e;function n(){return!t()&&!e()}return O.isBrowser=n,O}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=ve;e.__exportStar(rt(),t),e.__exportStar(nt(),t)})(tt);function se(t=3){const e=Date.now()*Math.pow(10,t),n=Math.floor(Math.random()*Math.pow(10,t));return e+n}function ot(t=6){return BigInt(se(t))}function it(t,e,n){return{id:n||se(),jsonrpc:"2.0",method:t,params:e}}function _t(t,e){return{id:t,jsonrpc:"2.0",result:e}}function st(t,e,n){return{id:t,jsonrpc:"2.0",error:at(e,n)}}function at(t,e){return typeof t>"u"?X(oe):(typeof t=="string"&&(t=Object.assign(Object.assign({},X(q)),{message:t})),typeof e<"u"&&(t.data=e),Ye(t.code)&&(t=Ze(t.code)),t)}class ae{}class Tt extends ae{constructor(e){super()}}class ct extends ae{constructor(){super()}}class ft extends ct{constructor(e){super()}}const ut="^https?:",ht="^wss?:";function dt(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function ce(t,e){const n=dt(t);return typeof n>"u"?!1:new RegExp(e).test(n)}function Y(t){return ce(t,ut)}function At(t){return ce(t,ht)}function Ct(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function fe(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function Dt(t){return fe(t)&&"method"in t}function lt(t){return fe(t)&&(pt(t)||ue(t))}function pt(t){return"result"in t}function ue(t){return"error"in t}class Pt extends ft{constructor(e){super(e),this.events=new re,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(it(e.method,e.params||[],e.id||ot().toString()),n)}async requestStrict(e,n){return new Promise(async(a,c)=>{if(!this.connection.connected)try{await this.open()}catch(i){c(i)}this.events.on(`${e.id}`,i=>{ue(i)?c(i.error):a(i.result)});try{await this.connection.send(e,n)}catch(i){c(i)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),lt(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}var N={exports:{}};(function(t,e){var n=typeof self<"u"?self:A,a=function(){function i(){this.fetch=!1,this.DOMException=n.DOMException}return i.prototype=n,new i}();(function(i){(function(d){var p={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};function B(r){return r&&DataView.prototype.isPrototypeOf(r)}if(p.arrayBuffer)var F=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],J=ArrayBuffer.isView||function(r){return r&&F.indexOf(Object.prototype.toString.call(r))>-1};function y(r){if(typeof r!="string"&&(r=String(r)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(r))throw new TypeError("Invalid character in header field name");return r.toLowerCase()}function w(r){return typeof r!="string"&&(r=String(r)),r}function m(r){var o={next:function(){var s=r.shift();return{done:s===void 0,value:s}}};return p.iterable&&(o[Symbol.iterator]=function(){return o}),o}function h(r){this.map={},r instanceof h?r.forEach(function(o,s){this.append(s,o)},this):Array.isArray(r)?r.forEach(function(o){this.append(o[0],o[1])},this):r&&Object.getOwnPropertyNames(r).forEach(function(o){this.append(o,r[o])},this)}h.prototype.append=function(r,o){r=y(r),o=w(o);var s=this.map[r];this.map[r]=s?s+", "+o:o},h.prototype.delete=function(r){delete this.map[y(r)]},h.prototype.get=function(r){return r=y(r),this.has(r)?this.map[r]:null},h.prototype.has=function(r){return this.map.hasOwnProperty(y(r))},h.prototype.set=function(r,o){this.map[y(r)]=w(o)},h.prototype.forEach=function(r,o){for(var s in this.map)this.map.hasOwnProperty(s)&&r.call(o,this.map[s],s,this)},h.prototype.keys=function(){var r=[];return this.forEach(function(o,s){r.push(s)}),m(r)},h.prototype.values=function(){var r=[];return this.forEach(function(o){r.push(o)}),m(r)},h.prototype.entries=function(){var r=[];return this.forEach(function(o,s){r.push([s,o])}),m(r)},p.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);function E(r){if(r.bodyUsed)return Promise.reject(new TypeError("Already read"));r.bodyUsed=!0}function l(r){return new Promise(function(o,s){r.onload=function(){o(r.result)},r.onerror=function(){s(r.error)}})}function _(r){var o=new FileReader,s=l(o);return o.readAsArrayBuffer(r),s}function x(r){var o=new FileReader,s=l(o);return o.readAsText(r),s}function M(r){for(var o=new Uint8Array(r),s=new Array(o.length),v=0;v<o.length;v++)s[v]=String.fromCharCode(o[v]);return s.join("")}function $(r){if(r.slice)return r.slice(0);var o=new Uint8Array(r.byteLength);return o.set(new Uint8Array(r)),o.buffer}function W(){return this.bodyUsed=!1,this._initBody=function(r){this._bodyInit=r,r?typeof r=="string"?this._bodyText=r:p.blob&&Blob.prototype.isPrototypeOf(r)?this._bodyBlob=r:p.formData&&FormData.prototype.isPrototypeOf(r)?this._bodyFormData=r:p.searchParams&&URLSearchParams.prototype.isPrototypeOf(r)?this._bodyText=r.toString():p.arrayBuffer&&p.blob&&B(r)?(this._bodyArrayBuffer=$(r.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):p.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(r)||J(r))?this._bodyArrayBuffer=$(r):this._bodyText=r=Object.prototype.toString.call(r):this._bodyText="",this.headers.get("content-type")||(typeof r=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):p.searchParams&&URLSearchParams.prototype.isPrototypeOf(r)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},p.blob&&(this.blob=function(){var r=E(this);if(r)return r;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?E(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(_)}),this.text=function(){var r=E(this);if(r)return r;if(this._bodyBlob)return x(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(M(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(le)}),this.json=function(){return this.text().then(JSON.parse)},this}var he=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function de(r){var o=r.toUpperCase();return he.indexOf(o)>-1?o:r}function T(r,o){o=o||{};var s=o.body;if(r instanceof T){if(r.bodyUsed)throw new TypeError("Already read");this.url=r.url,this.credentials=r.credentials,o.headers||(this.headers=new h(r.headers)),this.method=r.method,this.mode=r.mode,this.signal=r.signal,!s&&r._bodyInit!=null&&(s=r._bodyInit,r.bodyUsed=!0)}else this.url=String(r);if(this.credentials=o.credentials||this.credentials||"same-origin",(o.headers||!this.headers)&&(this.headers=new h(o.headers)),this.method=de(o.method||this.method||"GET"),this.mode=o.mode||this.mode||null,this.signal=o.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&s)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(s)}T.prototype.clone=function(){return new T(this,{body:this._bodyInit})};function le(r){var o=new FormData;return r.trim().split("&").forEach(function(s){if(s){var v=s.split("="),g=v.shift().replace(/\+/g," "),f=v.join("=").replace(/\+/g," ");o.append(decodeURIComponent(g),decodeURIComponent(f))}}),o}function pe(r){var o=new h,s=r.replace(/\r?\n[\t ]+/g," ");return s.split(/\r?\n/).forEach(function(v){var g=v.split(":"),f=g.shift().trim();if(f){var L=g.join(":").trim();o.append(f,L)}}),o}W.call(T.prototype);function b(r,o){o||(o={}),this.type="default",this.status=o.status===void 0?200:o.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in o?o.statusText:"OK",this.headers=new h(o.headers),this.url=o.url||"",this._initBody(r)}W.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},b.error=function(){var r=new b(null,{status:0,statusText:""});return r.type="error",r};var ge=[301,302,303,307,308];b.redirect=function(r,o){if(ge.indexOf(o)===-1)throw new RangeError("Invalid status code");return new b(null,{status:o,headers:{location:r}})},d.DOMException=i.DOMException;try{new d.DOMException}catch{d.DOMException=function(o,s){this.message=o,this.name=s;var v=Error(o);this.stack=v.stack},d.DOMException.prototype=Object.create(Error.prototype),d.DOMException.prototype.constructor=d.DOMException}function I(r,o){return new Promise(function(s,v){var g=new T(r,o);if(g.signal&&g.signal.aborted)return v(new d.DOMException("Aborted","AbortError"));var f=new XMLHttpRequest;function L(){f.abort()}f.onload=function(){var P={status:f.status,statusText:f.statusText,headers:pe(f.getAllResponseHeaders()||"")};P.url="responseURL"in f?f.responseURL:P.headers.get("X-Request-URL");var U="response"in f?f.response:f.responseText;s(new b(U,P))},f.onerror=function(){v(new TypeError("Network request failed"))},f.ontimeout=function(){v(new TypeError("Network request failed"))},f.onabort=function(){v(new d.DOMException("Aborted","AbortError"))},f.open(g.method,g.url,!0),g.credentials==="include"?f.withCredentials=!0:g.credentials==="omit"&&(f.withCredentials=!1),"responseType"in f&&p.blob&&(f.responseType="blob"),g.headers.forEach(function(P,U){f.setRequestHeader(U,P)}),g.signal&&(g.signal.addEventListener("abort",L),f.onreadystatechange=function(){f.readyState===4&&g.signal.removeEventListener("abort",L)}),f.send(typeof g._bodyInit>"u"?null:g._bodyInit)})}return I.polyfill=!0,i.fetch||(i.fetch=I,i.Headers=h,i.Request=T,i.Response=b),d.Headers=h,d.Request=T,d.Response=b,d.fetch=I,Object.defineProperty(d,"__esModule",{value:!0}),d})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var c=a;e=c.fetch,e.default=c.fetch,e.fetch=c.fetch,e.Headers=c.Headers,e.Request=c.Request,e.Response=c.Response,t.exports=e})(N,N.exports);var gt=N.exports;const Z=ye(gt),yt={Accept:"application/json","Content-Type":"application/json"},vt="POST",ee={headers:yt,method:vt},te=10;class St{constructor(e){if(this.url=e,this.events=new re,this.isAvailable=!1,this.registering=!1,!Y(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,n){this.isAvailable||await this.register();try{const a=z(e),i=await(await Z(this.url,Object.assign(Object.assign({},ee),{body:a}))).json();this.onPayload({data:i})}catch(a){this.onError(e.id,a)}}async register(e=this.url){if(!Y(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((a,c)=>{this.events.once("register_error",i=>{this.resetMaxListeners(),c(i)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return c(new Error("HTTP connection is missing or invalid"));a()})})}this.url=e,this.registering=!0;try{const n=z({id:1,jsonrpc:"2.0",method:"test",params:[]});await Z(e,Object.assign(Object.assign({},ee),{body:n})),this.onOpen()}catch(n){const a=this.parseError(n);throw this.events.emit("register_error",a),this.onClose(),a}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?Ve(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const a=this.parseError(n),c=a.message||a.toString(),i=st(e,c);this.events.emit("payload",i)}parseError(e,n=this.url){return et(e,n,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>te&&this.events.setMaxListeners(te)}}export{Se as A,Fe as B,Ie as C,je as D,se as E,St as H,Tt as I,Pt as J,bt as a,De as b,_e as c,Et as d,Le as e,Ot as f,He as g,z as h,At as i,tt as j,Ct as k,Ve as l,st as m,Dt as n,_t as o,et as p,pt as q,ue as r,Rt as s,lt as t,it as u,me as v,we as w,be as x,Re as y,Ae as z};
