(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0XgM":function(Q,z,b){},"9W6o":function(Q,z,b){"use strict";var B=b("B9cy"),J=b("Ol7k"),F=b("oN5p"),g=b("q1tI"),h=b.n(g),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright",theme:"outlined"},P=C,G=b("6VBw"),V=function(p,D){return g.createElement(G.a,Object.assign({},p,{ref:D,icon:P}))};V.displayName="CopyrightOutlined";var k=g.forwardRef(V),Z=b("GNNt"),O=b("wEI+"),o=b("DPCm"),a=b("TSYQ"),c=b.n(a),d=function(m){var p=m.className,D=m.prefixCls,W=m.links,ee=m.copyright,A=m.style,L=Object(g.useContext)(O.b.ConfigContext),j=L.getPrefixCls(D||"pro-global-footer");if((W==null||W===!1||Array.isArray(W)&&W.length===0)&&(ee==null||ee===!1))return null;var ae=c()(j,p);return h.a.createElement("div",{className:ae,style:A},W&&h.a.createElement("div",{className:"".concat(j,"-links")},W.map(function(ne){return h.a.createElement("a",{key:ne.key,title:ne.key,target:ne.blankTarget?"_blank":"_self",href:ne.href},ne.title)})),ee&&h.a.createElement("div",{className:"".concat(j,"-copyright")},ee))};function T(m,p){var D=Object.keys(m);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(m);p&&(W=W.filter(function(ee){return Object.getOwnPropertyDescriptor(m,ee).enumerable})),D.push.apply(D,W)}return D}function R(m){for(var p=1;p<arguments.length;p++){var D=arguments[p]!=null?arguments[p]:{};p%2?T(Object(D),!0).forEach(function(W){_(m,W,D[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(D)):T(Object(D)).forEach(function(W){Object.defineProperty(m,W,Object.getOwnPropertyDescriptor(D,W))})}return m}function _(m,p,D){return p in m?Object.defineProperty(m,p,{value:D,enumerable:!0,configurable:!0,writable:!0}):m[p]=D,m}var N=J.a.Footer,I=[{key:"Ant Design Pro",title:"Ant Design Pro",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:h.a.createElement(F.a,null),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}],E="2019 \u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u51FA\u54C1",S=function(p){var D=p.links,W=p.copyright,ee=p.style,A=p.className,L=p.prefixCls;return h.a.createElement(N,{className:A,style:R({padding:0},ee)},h.a.createElement(d,{links:D!==void 0?D:I,prefixCls:L,copyright:W===!1?null:h.a.createElement(g.Fragment,null,h.a.createElement(k,null)," ",W||E)}))},H=z.a=S},B9cy:function(Q,z,b){"use strict";var B=b("cIOH"),J=b.n(B),F=b("0XgM"),g=b.n(F)},DPCm:function(Q,z,b){},GOef:function(Q,z,b){"use strict";b.d(z,"c",function(){return cr}),b.d(z,"a",function(){return Re}),b.d(z,"b",function(){return pr});var B=b("n2rz"),J=b.n(B),F=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function g(e,t){return!!(e===t||F(e)&&F(t))}function h(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!g(e[r],t[r]))return!1;return!0}function C(e,t){t===void 0&&(t=h);var r,n=[],u,f=!1;function i(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return f&&r===this&&t(l,n)||(u=e.apply(this,l),f=!0,r=this,n=l),u}return i}var P=C;function G(e){for(var t=[],r=0;r<e.length;){var n=e[r];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(n==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(n==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(n===":"){for(var u="",f=r+1;f<e.length;){var i=e.charCodeAt(f);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){u+=e[f++];continue}break}if(!u)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:u}),r=f;continue}if(n==="("){var l=1,s="",f=r+1;if(e[f]==="?")throw new TypeError('Pattern cannot start with "?" at '+f);for(;f<e.length;){if(e[f]==="\\"){s+=e[f++]+e[f++];continue}if(e[f]===")"){if(l--,l===0){f++;break}}else if(e[f]==="("&&(l++,e[f+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+f);s+=e[f++]}if(l)throw new TypeError("Unbalanced pattern at "+r);if(!s)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:s}),r=f;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function V(e,t){t===void 0&&(t={});for(var r=G(e),n=t.prefixes,u=n===void 0?"./":n,f="[^"+a(t.delimiter||"/#?")+"]+?",i=[],l=0,s=0,y="",x=function(ue){if(s<r.length&&r[s].type===ue)return r[s++].value},v=function(ue){var le=x(ue);if(le!==void 0)return le;var De=r[s],yr=De.type,hr=De.index;throw new TypeError("Unexpected "+yr+" at "+hr+", expected "+ue)},w=function(){for(var ue="",le;le=x("CHAR")||x("ESCAPED_CHAR");)ue+=le;return ue};s<r.length;){var $=x("CHAR"),U=x("NAME"),q=x("PATTERN");if(U||q){var M=$||"";u.indexOf(M)===-1&&(y+=M,M=""),y&&(i.push(y),y=""),i.push({name:U||l++,prefix:M,suffix:"",pattern:q||f,modifier:x("MODIFIER")||""});continue}var Y=$||x("ESCAPED_CHAR");if(Y){y+=Y;continue}y&&(i.push(y),y="");var K=x("OPEN");if(K){var M=w(),re=x("NAME")||"",te=x("PATTERN")||"",we=w();v("CLOSE"),i.push({name:re||(te?l++:""),pattern:re&&!te?f:te,prefix:M,suffix:we,modifier:x("MODIFIER")||""});continue}v("END")}return i}function k(e,t){return Z(V(e,t),t)}function Z(e,t){t===void 0&&(t={});var r=c(t),n=t.encode,u=n===void 0?function(s){return s}:n,f=t.validate,i=f===void 0?!0:f,l=e.map(function(s){if(typeof s=="object")return new RegExp("^(?:"+s.pattern+")$",r)});return function(s){for(var y="",x=0;x<e.length;x++){var v=e[x];if(typeof v=="string"){y+=v;continue}var w=s?s[v.name]:void 0,$=v.modifier==="?"||v.modifier==="*",U=v.modifier==="*"||v.modifier==="+";if(Array.isArray(w)){if(!U)throw new TypeError('Expected "'+v.name+'" to not repeat, but got an array');if(w.length===0){if($)continue;throw new TypeError('Expected "'+v.name+'" to not be empty')}for(var q=0;q<w.length;q++){var M=u(w[q],v);if(i&&!l[x].test(M))throw new TypeError('Expected all "'+v.name+'" to match "'+v.pattern+'", but got "'+M+'"');y+=v.prefix+M+v.suffix}continue}if(typeof w=="string"||typeof w=="number"){var M=u(String(w),v);if(i&&!l[x].test(M))throw new TypeError('Expected "'+v.name+'" to match "'+v.pattern+'", but got "'+M+'"');y+=v.prefix+M+v.suffix;continue}if(!$){var Y=U?"an array":"a string";throw new TypeError('Expected "'+v.name+'" to be '+Y)}}return y}}function O(e,t){var r=[],n=N(e,r,t);return o(n,r,t)}function o(e,t,r){r===void 0&&(r={});var n=r.decode,u=n===void 0?function(f){return f}:n;return function(f){var i=e.exec(f);if(!i)return!1;for(var l=i[0],s=i.index,y=Object.create(null),x=function($){if(i[$]===void 0)return"continue";var U=t[$-1];U.modifier==="*"||U.modifier==="+"?y[U.name]=i[$].split(U.prefix+U.suffix).map(function(q){return u(q,U)}):y[U.name]=u(i[$],U)},v=1;v<i.length;v++)x(v);return{path:l,index:s,params:y}}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function c(e){return e&&e.sensitive?"":"i"}function d(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}function T(e,t,r){var n=e.map(function(u){return N(u,t,r).source});return new RegExp("(?:"+n.join("|")+")",c(r))}function R(e,t,r){return _(V(e,r),t,r)}function _(e,t,r){r===void 0&&(r={});for(var n=r.strict,u=n===void 0?!1:n,f=r.start,i=f===void 0?!0:f,l=r.end,s=l===void 0?!0:l,y=r.encode,x=y===void 0?function(he){return he}:y,v="["+a(r.endsWith||"")+"]|$",w="["+a(r.delimiter||"/#?")+"]",$=i?"^":"",U=0,q=e;U<q.length;U++){var M=q[U];if(typeof M=="string")$+=a(x(M));else{var Y=a(x(M.prefix)),K=a(x(M.suffix));if(M.pattern)if(t&&t.push(M),Y||K)if(M.modifier==="+"||M.modifier==="*"){var re=M.modifier==="*"?"?":"";$+="(?:"+Y+"((?:"+M.pattern+")(?:"+K+Y+"(?:"+M.pattern+"))*)"+K+")"+re}else $+="(?:"+Y+"("+M.pattern+")"+K+")"+M.modifier;else $+="("+M.pattern+")"+M.modifier;else $+="(?:"+Y+K+")"+M.modifier}}if(s)u||($+=w+"?"),$+=r.endsWith?"(?="+v+")":"$";else{var te=e[e.length-1],we=typeof te=="string"?w.indexOf(te[te.length-1])>-1:te===void 0;u||($+="(?:"+w+"(?="+v+"))?"),we||($+="(?="+w+"|"+v+")")}return new RegExp($,c(r))}function N(e,t,r){return e instanceof RegExp?d(e,t):Array.isArray(e)?T(e,t,r):R(e,t,r)}function I(e,t){return t>>>e|t<<32-e}function E(e,t,r){return e&t^~e&r}function S(e,t,r){return e&t^e&r^t&r}function H(e){return I(2,e)^I(13,e)^I(22,e)}function m(e){return I(6,e)^I(11,e)^I(25,e)}function p(e){return I(7,e)^I(18,e)^e>>>3}function D(e){return I(17,e)^I(19,e)^e>>>10}function W(e,t){return e[t&15]+=D(e[t+14&15])+e[t+9&15]+p(e[t+1&15])}var ee=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],A,L,j,ae="0123456789abcdef";function ne(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function ge(){A=new Array(8),L=new Array(2),j=new Array(64),L[0]=L[1]=0,A[0]=1779033703,A[1]=3144134277,A[2]=1013904242,A[3]=2773480762,A[4]=1359893119,A[5]=2600822924,A[6]=528734635,A[7]=1541459225}function ie(){var e,t,r,n,u,f,i,l,s,y,x=new Array(16);e=A[0],t=A[1],r=A[2],n=A[3],u=A[4],f=A[5],i=A[6],l=A[7];for(var v=0;v<16;v++)x[v]=j[(v<<2)+3]|j[(v<<2)+2]<<8|j[(v<<2)+1]<<16|j[v<<2]<<24;for(var w=0;w<64;w++)s=l+m(u)+E(u,f,i)+ee[w],w<16?s+=x[w]:s+=W(x,w),y=H(e)+S(e,t,r),l=i,i=f,f=u,u=ne(n,s),n=r,r=t,t=e,e=ne(s,y);A[0]+=e,A[1]+=t,A[2]+=r,A[3]+=n,A[4]+=u,A[5]+=f,A[6]+=i,A[7]+=l}function se(e,t){var r,n,u=0;n=L[0]>>3&63;var f=t&63;for((L[0]+=t<<3)<t<<3&&L[1]++,L[1]+=t>>29,r=0;r+63<t;r+=64){for(var i=n;i<64;i++)j[i]=e.charCodeAt(u++);ie(),n=0}for(var l=0;l<f;l++)j[l]=e.charCodeAt(u++)}function de(){var e=L[0]>>3&63;if(j[e++]=128,e<=56)for(var t=e;t<56;t++)j[t]=0;else{for(var r=e;r<64;r++)j[r]=0;ie();for(var n=0;n<56;n++)j[n]=0}j[56]=L[1]>>>24&255,j[57]=L[1]>>>16&255,j[58]=L[1]>>>8&255,j[59]=L[1]&255,j[60]=L[0]>>>24&255,j[61]=L[0]>>>16&255,j[62]=L[0]>>>8&255,j[63]=L[0]&255,ie()}function gr(){for(var e=0,t=new Array(32),r=0;r<8;r++)t[e++]=A[r]>>>24&255,t[e++]=A[r]>>>16&255,t[e++]=A[r]>>>8&255,t[e++]=A[r]&255;return t}function Ce(){for(var e=new String,t=0;t<8;t++)for(var r=28;r>=0;r-=4)e+=ae.charAt(A[t]>>>r&15);return e}function Ie(e){return ge(),se(e,e.length),de(),Ce()}var je=Ie;function ve(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ve=function(r){return typeof r}:ve=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ve(e)}function Ne(e,t){return Be(e)||$e(e,t)||be(e,t)||Fe()}function Fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,u=!1,f=void 0;try{for(var i=e[Symbol.iterator](),l;!(n=(l=i.next()).done)&&(r.push(l.value),!(t&&r.length===t));n=!0);}catch(s){u=!0,f=s}finally{try{!n&&i.return!=null&&i.return()}finally{if(u)throw f}}return r}}function Be(e){if(Array.isArray(e))return e}function We(e,t){var r;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=be(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,u=function(){};return{s:u,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(y){throw y},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f=!0,i=!1,l;return{s:function(){r=e[Symbol.iterator]()},n:function(){var y=r.next();return f=y.done,y},e:function(y){i=!0,l=y},f:function(){try{!f&&r.return!=null&&r.return()}finally{if(i)throw l}}}}function Ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Le(e,t,r){return t&&Ae(e.prototype,t),r&&Ae(e,r),e}function Ue(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}function Ge(e){var t=_e();return function(){var n=oe(e),u;if(t){var f=oe(this).constructor;u=Reflect.construct(n,arguments,f)}else u=n.apply(this,arguments);return He(this,u)}}function He(e,t){return t&&(ve(t)==="object"||typeof t=="function")?t:ze(e)}function ze(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e){var t=typeof Map=="function"?new Map:void 0;return me=function(n){if(n===null||!Ve(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(n))return t.get(n);t.set(n,u)}function u(){return pe(n,arguments,oe(this).constructor)}return u.prototype=Object.create(n.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),fe(u,n)},me(e)}function pe(e,t,r){return _e()?pe=Reflect.construct:pe=function(u,f,i){var l=[null];l.push.apply(l,f);var s=Function.bind.apply(u,l),y=new s;return i&&fe(y,i.prototype),y},pe.apply(null,arguments)}function _e(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function Ve(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function fe(e,t){return fe=Object.setPrototypeOf||function(n,u){return n.__proto__=u,n},fe(e,t)}function oe(e){return oe=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},oe(e)}function Me(e){return Qe(e)||Je(e)||be(e)||Xe()}function Xe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(e,t){if(!!e){if(typeof e=="string")return xe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xe(e,t)}}function Je(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function Qe(e){if(Array.isArray(e))return xe(e)}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ye(e,t){if(e==null)return{};var r=Ze(e,t),n,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(u=0;u<f.length;u++)n=f[u],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Ze(e,t){if(e==null)return{};var r={},n=Object.keys(e),u,f;for(f=0;f<n.length;f++)u=n[f],!(t.indexOf(u)>=0)&&(r[u]=e[u]);return r}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pe(Object(r),!0).forEach(function(n){qe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e){return e.split("?")[0].split("#")[0]}var Oe=function(t){if(!t.startsWith("http"))return!1;try{var r=new URL(t);return!!r}catch(n){return!1}},ke=function(t){var r=t.path;if(!r||r==="/")try{return"/".concat(je(JSON.stringify(t)))}catch(n){}return r&&ce(r)},er=function(t,r){var n=t.name,u=t.locale;return"locale"in t&&u===!1||!n?!1:t.locale||"".concat(r,".").concat(n)},Te=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return(t||r).startsWith("/")||Oe(t)?t:"/".concat(r,"/").concat(t).replace(/\/\//g,"/").replace(/\/\//g,"/")},rr=function(t,r){var n=t.menu,u=n===void 0?{}:n,f=t.indexRoute,i=t.path,l=i===void 0?"":i,s=t.children,y=u.name,x=y===void 0?t.name:y,v=u.icon,w=v===void 0?t.icon:v,$=u.hideChildren,U=$===void 0?t.hideChildren:$,q=u.flatMenu,M=q===void 0?t.flatMenu:q,Y=f&&Object.keys(f).join(",")!=="redirect"?[X({path:l,menu:u},f)].concat(s||[]):s,K=X({},t);if(x&&(K.name=x),w&&(K.icon=w),Y&&Y.length){if(U)return delete K.children,K;var re=Ee(X(X({},r),{},{data:Y}),t);if(M)return re;K.children=re}return K};function Ee(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},r=e.data,n=e.formatMessage,u=e.parentName,f=e.locale;return!r||!Array.isArray(r)?[]:r.filter(function(i){return i?i.routes||i.children||i.path||i.layout?!0:(i.redirect,!1):!1}).filter(function(i){var l,s;return i.unaccessible&&delete i.name,(i==null||(l=i.menu)===null||l===void 0?void 0:l.name)||(i==null?void 0:i.flatMenu)||(i==null||(s=i.menu)===null||s===void 0?void 0:s.flatMenu)?!0:i.menu!==!1}).map(function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"},l=Te(i.path,t?t.path:"/"),s=i.name,y=er(i,u||"menu"),x=y!==!1&&f!==!1&&n&&y?n({id:y,defaultMessage:s}):s,v=t.pro_layout_parentKeys,w=v===void 0?[]:v,$=t.children,U=t.icon,q=t.flatMenu,M=t.indexRoute,Y=Ye(t,["pro_layout_parentKeys","children","icon","flatMenu","indexRoute"]),K=X(X(X({},Y),{},{menu:void 0},i),{},{path:l,locale:y,key:i.key||ke(X(X({},i),{},{path:l})),routes:null,pro_layout_parentKeys:Array.from(new Set([].concat(Me(i.parentKeys||[]),Me(w),["/".concat(t.key||"").replace(/\/\//g,"/").replace(/\/\//g,"/")]))).filter(function(te){return te&&te!=="/"})});if(x?K.name=x:delete K.name,K.menu===void 0&&delete K.menu,i.routes||i.children){var re=Ee(X(X({},e),{},{data:i.routes||i.children,parentName:y||""}),K);K.children=re&&re.length>0?re:void 0,K.children||delete K.children}return rr(K,e)}).flat(1)}var tr=P(Ee,J.a),nr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.filter(function(r){return r&&(r.name||r.children)&&!r.hideInMenu&&!r.redirect}).map(function(r){if(r.children&&Array.isArray(r.children)&&!r.hideChildrenInMenu&&r.children.some(function(u){return u&&!!u.name})){var n=e(r.children);if(n.length)return X(X({},r),{},{children:n})}return X(X({},r),{},{children:void 0})}).filter(function(r){return r})},ar=function(e){Ue(r,e);var t=Ge(r);function r(){return Ke(this,r),t.apply(this,arguments)}return Le(r,[{key:"get",value:function(u){var f;try{var i=We(this.entries()),l;try{for(i.s();!(l=i.n()).done;){var s=Ne(l.value,2),y=s[0],x=s[1],v=ce(y);if(!Oe(y)&&N(v,[]).test(u)){f=x;break}}}catch(w){i.e(w)}finally{i.f()}}catch(w){f=void 0}return f}}]),r}(me(Map)),ur=function(t){var r=new ar,n=function u(f,i){f.forEach(function(l){l&&l.children&&u(l.children,l);var s=Te(l.path,i?i.path:"/");r.set(ce(s),l)})};return n(t),r},ir=P(ur,J.a),fr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.map(function(r){if(r.children&&Array.isArray(r.children)&&r.children.length>0){var n=e(r.children);if(n.length)return X(X({},r),{},{children:n})}var u=X({},r);return delete u.children,u}).filter(function(r){return r})},or=function(t,r,n,u){var f=tr({data:t,formatMessage:n,locale:r}),i=u?fr(f):nr(f),l=ir(f);return{breadcrumb:l,menuData:i}},cr=or;function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Se(Object(r),!0).forEach(function(n){lr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function lr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var sr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r={};return t.forEach(function(n){!n||!n.key||(r[ce(n.path||n.key||"/")]=ye({},n),r[n.key||n.path||"/"]=ye({},n),n.children&&(r=ye(ye({},r),e(n.children))))}),r},Re=sr,dr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return t.filter(function(u){if(u==="/"&&r==="/")return!0;if(u!=="/"&&u!=="/*"&&u&&!Oe(u)){var f=ce(u);try{if(n&&N("".concat(f)).test(r)||N("".concat(f),[]).test(r)||N("".concat(f,"/(.*)")).test(r))return!0}catch(i){}}return!1}).sort(function(u,f){return u===r?10:f===r?-10:u.substr(1).split("/").length-f.substr(1).split("/").length})},vr=function(t,r,n,u){var f=Re(r),i=Object.keys(f),l=dr(i,t||"/",u);return!l||l.length<1?[]:(n||(l=[l[l.length-1]]),l.map(function(s){var y=f[s]||{pro_layout_parentKeys:"",key:""},x=new Map,v=(y.pro_layout_parentKeys||[]).map(function(w){return x.has(w)?null:(x.set(w,!0),f[w])}).filter(function(w){return w});return y.key&&v.push(y),v}).flat(1))},pr=vr},Ol7k:function(Q,z,b){"use strict";var B=b("PKem"),J=b("ZX9x"),F=B.e;F.Header=B.c,F.Footer=B.b,F.Content=B.a,F.Sider=J.b,z.a=F},Qv07:function(Q,z,b){"use strict";var B=b("GOef");function J(o,a){return h(o)||g(o,a)||G(o,a)||F()}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(o,a){var c=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(c!=null){var d=[],T=!0,R=!1,_,N;try{for(c=c.call(o);!(T=(_=c.next()).done)&&(d.push(_.value),!(a&&d.length===a));T=!0);}catch(I){R=!0,N=I}finally{try{!T&&c.return!=null&&c.return()}finally{if(R)throw N}}return d}}function h(o){if(Array.isArray(o))return o}function C(o){return k(o)||V(o)||G(o)||P()}function P(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(o,a){if(!!o){if(typeof o=="string")return Z(o,a);var c=Object.prototype.toString.call(o).slice(8,-1);if(c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set")return Array.from(o);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Z(o,a)}}function V(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function k(o){if(Array.isArray(o))return Z(o)}function Z(o,a){(a==null||a>o.length)&&(a=o.length);for(var c=0,d=new Array(a);c<a;c++)d[c]=o[c];return d}function O(o){return C(o).reduce(function(a,c){var d=J(c,2),T=d[0],R=d[1];return a[T]=R,a},{})}z.a=function(o,a,c,d){var T=Object(B.c)(o,(a==null?void 0:a.locale)||!1,c,!0),R=T.menuData,_=T.breadcrumb;if(!d)return{breadcrumb:O(_),breadcrumbMap:_,menuData:R};var N=Object(B.c)(d(R),(a==null?void 0:a.locale)||!1,c,!0);return{breadcrumb:O(N.breadcrumb),breadcrumbMap:N.breadcrumb,menuData:N.menuData}}},jfsG:function(Q,z){Q.exports=o,Q.exports.parse=F,Q.exports.compile=g,Q.exports.tokensToFunction=h,Q.exports.tokensToRegExp=O;var b="/",B="./",J=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function F(a,c){for(var d=[],T=0,R=0,_="",N=c&&c.delimiter||b,I=c&&c.delimiters||B,E=!1,S;(S=J.exec(a))!==null;){var H=S[0],m=S[1],p=S.index;if(_+=a.slice(R,p),R=p+H.length,m){_+=m[1],E=!0;continue}var D="",W=a[R],ee=S[2],A=S[3],L=S[4],j=S[5];if(!E&&_.length){var ae=_.length-1;I.indexOf(_[ae])>-1&&(D=_[ae],_=_.slice(0,ae))}_&&(d.push(_),_="",E=!1);var ne=D!==""&&W!==void 0&&W!==D,ge=j==="+"||j==="*",ie=j==="?"||j==="*",se=D||N,de=A||L;d.push({name:ee||T++,prefix:D,delimiter:se,optional:ie,repeat:ge,partial:ne,pattern:de?P(de):"[^"+C(se)+"]+?"})}return(_||R<a.length)&&d.push(_+a.substr(R)),d}function g(a,c){return h(F(a,c))}function h(a){for(var c=new Array(a.length),d=0;d<a.length;d++)typeof a[d]=="object"&&(c[d]=new RegExp("^(?:"+a[d].pattern+")$"));return function(T,R){for(var _="",N=R&&R.encode||encodeURIComponent,I=0;I<a.length;I++){var E=a[I];if(typeof E=="string"){_+=E;continue}var S=T?T[E.name]:void 0,H;if(Array.isArray(S)){if(!E.repeat)throw new TypeError('Expected "'+E.name+'" to not repeat, but got array');if(S.length===0){if(E.optional)continue;throw new TypeError('Expected "'+E.name+'" to not be empty')}for(var m=0;m<S.length;m++){if(H=N(S[m],E),!c[I].test(H))throw new TypeError('Expected all "'+E.name+'" to match "'+E.pattern+'"');_+=(m===0?E.prefix:E.delimiter)+H}continue}if(typeof S=="string"||typeof S=="number"||typeof S=="boolean"){if(H=N(String(S),E),!c[I].test(H))throw new TypeError('Expected "'+E.name+'" to match "'+E.pattern+'", but got "'+H+'"');_+=E.prefix+H;continue}if(E.optional){E.partial&&(_+=E.prefix);continue}throw new TypeError('Expected "'+E.name+'" to be '+(E.repeat?"an array":"a string"))}return _}}function C(a){return a.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(a){return a.replace(/([=!:$/()])/g,"\\$1")}function G(a){return a&&a.sensitive?"":"i"}function V(a,c){if(!c)return a;var d=a.source.match(/\((?!\?)/g);if(d)for(var T=0;T<d.length;T++)c.push({name:T,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return a}function k(a,c,d){for(var T=[],R=0;R<a.length;R++)T.push(o(a[R],c,d).source);return new RegExp("(?:"+T.join("|")+")",G(d))}function Z(a,c,d){return O(F(a,d),c,d)}function O(a,c,d){d=d||{};for(var T=d.strict,R=d.start!==!1,_=d.end!==!1,N=C(d.delimiter||b),I=d.delimiters||B,E=[].concat(d.endsWith||[]).map(C).concat("$").join("|"),S=R?"^":"",H=a.length===0,m=0;m<a.length;m++){var p=a[m];if(typeof p=="string")S+=C(p),H=m===a.length-1&&I.indexOf(p[p.length-1])>-1;else{var D=p.repeat?"(?:"+p.pattern+")(?:"+C(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;c&&c.push(p),p.optional?p.partial?S+=C(p.prefix)+"("+D+")?":S+="(?:"+C(p.prefix)+"("+D+"))?":S+=C(p.prefix)+"("+D+")"}}return _?(T||(S+="(?:"+N+")?"),S+=E==="$"?"$":"(?="+E+")"):(T||(S+="(?:"+N+"(?="+E+"))?"),H||(S+="(?="+N+"|"+E+")")),new RegExp(S,G(d))}function o(a,c,d){return a instanceof RegExp?V(a,c):Array.isArray(a)?k(a,c,d):Z(a,c,d)}},n2rz:function(Q,z,b){"use strict";var B=b("bfL6"),J=typeof BigInt64Array!="undefined";Q.exports=function F(g,h){if(g===h)return!0;if(g&&h&&typeof g=="object"&&typeof h=="object"){if(g.constructor!==h.constructor)return!1;var C,P,G;if(Array.isArray(g)){if(C=g.length,C!=h.length)return!1;for(P=C;P--!=0;)if(!F(g[P],h[P]))return!1;return!0}if(g instanceof Map&&h instanceof Map){if(g.size!==h.size)return!1;var V=B(g.entries()),k;try{for(V.s();!(k=V.n()).done;)if(P=k.value,!h.has(P[0]))return!1}catch(d){V.e(d)}finally{V.f()}var Z=B(g.entries()),O;try{for(Z.s();!(O=Z.n()).done;)if(P=O.value,!F(P[1],h.get(P[0])))return!1}catch(d){Z.e(d)}finally{Z.f()}return!0}if(g instanceof Set&&h instanceof Set){if(g.size!==h.size)return!1;var o=B(g.entries()),a;try{for(o.s();!(a=o.n()).done;)if(P=a.value,!h.has(P[0]))return!1}catch(d){o.e(d)}finally{o.f()}return!0}if(ArrayBuffer.isView(g)&&ArrayBuffer.isView(h)){if(C=g.length,C!=h.length)return!1;for(P=C;P--!=0;)if(g[P]!==h[P])return!1;return!0}if(g.constructor===RegExp)return g.source===h.source&&g.flags===h.flags;if(g.valueOf!==Object.prototype.valueOf)return g.valueOf()===h.valueOf();if(g.toString!==Object.prototype.toString)return g.toString()===h.toString();if(G=Object.keys(g),C=G.length,C!==Object.keys(h).length)return!1;for(P=C;P--!=0;)if(!Object.prototype.hasOwnProperty.call(h,G[P]))return!1;for(P=C;P--!=0;){var c=G[P];if(!F(g[c],h[c]))return!1}return!0}return g!==g&&h!==h}},oN5p:function(Q,z,b){"use strict";var B=b("q1tI"),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},F=J,g=b("6VBw"),h=function(G,V){return B.createElement(g.a,Object.assign({},G,{ref:V,icon:F}))};h.displayName="GithubOutlined";var C=z.a=B.forwardRef(h)},su3W:function(Q,z,b){"use strict";b.d(z,"b",function(){return k});var B=b("jfsG"),J=b.n(B);function F(O){return P(O)||C(O)||h(O)||g()}function g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(O,o){if(!!O){if(typeof O=="string")return G(O,o);var a=Object.prototype.toString.call(O).slice(8,-1);if(a==="Object"&&O.constructor&&(a=O.constructor.name),a==="Map"||a==="Set")return Array.from(O);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return G(O,o)}}function C(O){if(typeof Symbol!="undefined"&&O[Symbol.iterator]!=null||O["@@iterator"]!=null)return Array.from(O)}function P(O){if(Array.isArray(O))return G(O)}function G(O,o){(o==null||o>O.length)&&(o=O.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=O[a];return c}var V=function(o,a,c){if(c){var d=F(c.keys()).find(function(R){return J()(R).test(o)});if(d)return c.get(d)}if(a){var T=Object.keys(a).find(function(R){return J()(R).test(o)});if(T)return a[T]}return{path:""}},k=function(o,a){var c=o.pathname,d=c===void 0?"/":c,T=o.breadcrumb,R=o.breadcrumbMap,_=o.formatMessage,N=o.title,I=N===void 0?"Ant Design Pro":N,E=o.menu,S=E===void 0?{locale:!1}:E,H=a?"":I||"",m=V(d,T,R);if(!m)return{title:H,id:"",pageName:H};var p=m.name;return S.locale!==!1&&m.locale&&_&&(p=_({id:m.locale||"",defaultMessage:m.name})),p?a||!I?{title:p,id:m.locale||"",pageName:p}:{title:"".concat(p," - ").concat(I),id:m.locale||"",pageName:p}:{title:H,id:m.locale||"",pageName:H}},Z=function(o,a){return k(o,a).title};z.a=Z}}]);
