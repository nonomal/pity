(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"15/o":function(H,N,i){},AOa7:function(H,N,i){},DnfT:function(H,N,i){},FRQA:function(H,N,i){"use strict";var se=i("GNNt"),ne=i("wEI+"),T=i("DnfT"),B=i.n(T),Q=i("q1tI"),V=i.n(Q),ee=i("TSYQ"),te=i.n(ee),fe=i("jYQm"),s=function(A){var S=Object(Q.useContext)(fe.a),K=A.children,X=A.contentWidth,w=A.className,re=A.style,u=Object(Q.useContext)(ne.b.ConfigContext),o=u.getPrefixCls,c=A.prefixCls||o("pro"),d=X||S.contentWidth,m="".concat(c,"-grid-content");return V.a.createElement("div",{className:te()(m,w,{wide:d==="Fixed"}),style:re},V.a.createElement("div",{className:"".concat(c,"-grid-content-children")},K))};N.a=s},"YV/h":function(H,N,i){},jRje:function(H,N,i){"use strict";var se=i("GNNt"),ne=i("wEI+"),T=i("q1tI"),B=i.n(T),Q=i("TSYQ"),V=i.n(Q),ee=i("BGR+"),te=i("rsCp"),fe=i.n(te),s=i("jYQm"),x=["children","className","extra","style","renderContent"];function A(){return A=Object.assign||function(o){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(o[m]=d[m])}return o},A.apply(this,arguments)}function S(o,c){var d=Object.keys(o);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(o);c&&(m=m.filter(function(C){return Object.getOwnPropertyDescriptor(o,C).enumerable})),d.push.apply(d,m)}return d}function K(o){for(var c=1;c<arguments.length;c++){var d=arguments[c]!=null?arguments[c]:{};c%2?S(Object(d),!0).forEach(function(m){X(o,m,d[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(d)):S(Object(d)).forEach(function(m){Object.defineProperty(o,m,Object.getOwnPropertyDescriptor(d,m))})}return o}function X(o,c,d){return c in o?Object.defineProperty(o,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[c]=d,o}function w(o,c){if(o==null)return{};var d=re(o,c),m,C;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(o);for(C=0;C<R.length;C++)m=R[C],!(c.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,m)||(d[m]=o[m]))}return d}function re(o,c){if(o==null)return{};var d={},m=Object.keys(o),C,R;for(R=0;R<m.length;R++)C=m[R],!(c.indexOf(C)>=0)&&(d[C]=o[C]);return d}var u=function(c){var d=c.children,m=c.className,C=c.extra,R=c.style,L=c.renderContent,I=w(c,x),ve=Object(T.useContext)(ne.b.ConfigContext),J=ve.getPrefixCls,oe=c.prefixCls||J("pro"),F="".concat(oe,"-footer-bar"),P=Object(T.useContext)(s.a),D=Object(T.useMemo)(function(){var _=P.hasSiderMenu,me=P.isMobile,ie=P.siderWidth;if(!!_)return ie?me?"100%":"calc(100% - ".concat(ie,"px)"):"100%"},[P.collapsed,P.hasSiderMenu,P.isMobile,P.siderWidth]),z=B.a.createElement(B.a.Fragment,null,B.a.createElement("div",{className:"".concat(F,"-left")},C),B.a.createElement("div",{className:"".concat(F,"-right")},d));return Object(T.useEffect)(function(){return!P||!(P==null?void 0:P.setHasFooterToolbar)?function(){}:(P==null||P.setHasFooterToolbar(!0),function(){var _;P==null||(_=P.setHasFooterToolbar)===null||_===void 0||_.call(P,!1)})},[]),B.a.createElement("div",A({className:V()(m,"".concat(F)),style:K({width:D},R)},Object(ee.a)(I,["prefixCls"])),L?L(K(K(K({},c),P),{},{leftWidth:D}),z):z)};N.a=u},jYQm:function(H,N,i){"use strict";var se=i("q1tI"),ne=i.n(se),T=Object(se.createContext)({});N.a=T},rsCp:function(H,N,i){},tMyG:function(H,N,i){"use strict";var se=i("cIOH"),ne=i("15/o"),T=i("wx14"),B=i("rePB"),Q=i("1OyB"),V=i("vuIU"),ee=i("Ji7U"),te=i("LK+K"),fe=i("U8pU"),s=i("q1tI"),x=i.n(s),A=i("TSYQ"),S=i.n(A),K=i("bT9E"),X=i("t23M"),w=i("H84U"),re=i("KQm4"),u=i("wgJM");function o(a){var e,r=function(l){return function(){e=null,a.apply(void 0,Object(re.a)(l))}},t=function(){if(e==null){for(var l=arguments.length,v=new Array(l),f=0;f<l;f++)v[f]=arguments[f];e=Object(u.a)(r(v))}};return t.cancel=function(){return u.a.cancel(e)},t}function c(){return function(e,r,t){var n=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(r))return n;var f=o(n.bind(this));return l=!0,Object.defineProperty(this,r,{value:f,configurable:!0,writable:!0}),l=!1,f}}}}var d=i("zT1h");function m(a){return a!==window?a.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function C(a,e,r){if(r!==void 0&&e.top>a.top-r)return r+e.top}function R(a,e,r){if(r!==void 0&&e.bottom<a.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var L=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],I=[];function ve(){return I}function J(a,e){if(!!a){var r=I.find(function(t){return t.target===a});r?r.affixList.push(e):(r={target:a,affixList:[e],eventHandlers:{}},I.push(r),L.forEach(function(t){r.eventHandlers[t]=Object(d.a)(a,t,function(){r.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function oe(a){var e=I.find(function(r){var t=r.affixList.some(function(n){return n===a});return t&&(r.affixList=r.affixList.filter(function(n){return n!==a})),t});e&&e.affixList.length===0&&(I=I.filter(function(r){return r!==e}),L.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var F=function(a,e,r,t){var n=arguments.length,l=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":Object(fe.a)(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(a,e,r,t);else for(var f=a.length-1;f>=0;f--)(v=a[f])&&(l=(n<3?v(l):n>3?v(e,r,l):v(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l};function P(){return typeof window!="undefined"?window:null}var D;(function(a){a[a.None=0]="None",a[a.Prepare=1]="Prepare"})(D||(D={}));var z=function(a){Object(ee.a)(r,a);var e=Object(te.a)(r);function r(){var t;return Object(Q.a)(this,r),t=e.apply(this,arguments),t.state={status:D.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var n=t.props.offsetBottom,l=t.props.offsetTop;return n===void 0&&l===void 0&&(l=0),l},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(n){t.placeholderNode=n},t.saveFixedNode=function(n){t.fixedNode=n},t.measure=function(){var n=t.state,l=n.status,v=n.lastAffix,f=t.props.onChange,g=t.getTargetFunc();if(!(l!==D.Prepare||!t.fixedNode||!t.placeholderNode||!g)){var E=t.getOffsetTop(),h=t.getOffsetBottom(),O=g();if(!!O){var b={status:D.None},y=m(O),p=m(t.placeholderNode),M=C(p,y,E),k=R(p,y,h);M!==void 0?(b.affixStyle={position:"fixed",top:M,width:p.width,height:p.height},b.placeholderStyle={width:p.width,height:p.height}):k!==void 0&&(b.affixStyle={position:"fixed",bottom:k,width:p.width,height:p.height},b.placeholderStyle={width:p.width,height:p.height}),b.lastAffix=!!b.affixStyle,f&&v!==b.lastAffix&&f(b.lastAffix),t.setState(b)}}},t.prepareMeasure=function(){if(t.setState({status:D.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},t.render=function(){var n=t.context.getPrefixCls,l=t.state,v=l.affixStyle,f=l.placeholderStyle,g=t.props,E=g.prefixCls,h=g.children,O=S()(Object(B.a)({},n("affix",E),v)),b=Object(K.a)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return s.createElement(X.a,{onResize:function(){t.updatePosition()}},s.createElement("div",Object(T.a)({},b,{ref:t.savePlaceholderNode}),v&&s.createElement("div",{style:f,"aria-hidden":"true"}),s.createElement("div",{className:O,ref:t.saveFixedNode,style:v},s.createElement(X.a,{onResize:function(){t.updatePosition()}},h))))},t}return Object(V.a)(r,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:n||P}},{key:"componentDidMount",value:function(){var n=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){J(l(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var l=this.state.prevTarget,v=this.getTargetFunc(),f=null;v&&(f=v()||null),l!==f&&(oe(this),f&&(J(f,this),this.updatePosition()),this.setState({prevTarget:f})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),oe(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),l=this.state.affixStyle;if(n&&l){var v=this.getOffsetTop(),f=this.getOffsetBottom(),g=n();if(g&&this.placeholderNode){var E=m(g),h=m(this.placeholderNode),O=C(h,E,v),b=R(h,E,f);if(O!==void 0&&l.top===O||b!==void 0&&l.bottom===b)return}}this.prepareMeasure()}}]),r}(s.Component);z.contextType=w.b,F([c()],z.prototype,"updatePosition",null),F([c()],z.prototype,"lazyUpdatePosition",null);var _=z,me=i("GNNt"),ie=i("wEI+"),Ee=i("YV/h"),xe=i("AOa7"),Le=i("lUTK"),_e=i("qVdP"),Ue=i("Telt"),Ce=i("ODXe"),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},je=Te,ge=i("6VBw"),he=function(e,r){return s.createElement(ge.a,Object.assign({},e,{ref:r,icon:je}))};he.displayName="ArrowLeftOutlined";var Re=s.forwardRef(he),Ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Be=Ne,pe=function(e,r){return s.createElement(ge.a,Object.assign({},e,{ref:r,icon:Be}))};pe.displayName="ArrowRightOutlined";var We=s.forwardRef(pe),He=i("Zm9Q"),Ke=i("8Skl"),De=i("XBQK"),Fe=function(a,e){var r={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&e.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(r[t[n]]=a[t[n]]);return r},Me=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,l=e.children,v=e.overlay,f=e.dropdownProps,g=Fe(e,["prefixCls","separator","children","overlay","dropdownProps"]),E=s.useContext(w.b),h=E.getPrefixCls,O=h("breadcrumb",r),b=function(M){return v?s.createElement(De.a,Object(T.a)({overlay:v,placement:"bottomCenter"},f),s.createElement("span",{className:"".concat(O,"-overlay-link")},M,s.createElement(Ke.a,null))):M},y;return"href"in g?y=s.createElement("a",Object(T.a)({className:"".concat(O,"-link")},g),l):y=s.createElement("span",Object(T.a)({className:"".concat(O,"-link")},g),l),y=b(y),l?s.createElement("span",null,y,n&&n!==""&&s.createElement("span",{className:"".concat(O,"-separator")},n)):null};Me.__ANT_BREADCRUMB_ITEM=!0;var Ae=Me,be=function(e){var r=e.children,t=s.useContext(w.b),n=t.getPrefixCls,l=n("breadcrumb");return s.createElement("span",{className:"".concat(l,"-separator")},r||"/")};be.__ANT_BREADCRUMB_SEPARATOR=!0;var ze=be,Oe=i("BvKs"),le=i("uaoM"),$=i("0n0R"),Z=function(a,e){var r={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&e.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(r[t[n]]=a[t[n]]);return r};function $e(a,e){if(!a.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=a.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(n,l){return e[l]||n});return t}function Ye(a,e,r,t){var n=r.indexOf(a)===r.length-1,l=$e(a,e);return n?s.createElement("span",null,l):s.createElement("a",{href:"#/".concat(t.join("/"))},l)}var Se=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Ge=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,n=Object(re.a)(e),l=Se(r,t);return l&&n.push(l),n},ye=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,l=e.style,v=e.className,f=e.routes,g=e.children,E=e.itemRender,h=E===void 0?Ye:E,O=e.params,b=O===void 0?{}:O,y=Z(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),p=s.useContext(w.b),M=p.getPrefixCls,k=p.direction,Y,ae=M("breadcrumb",r);if(f&&f.length>0){var q=[];Y=f.map(function(j){var W=Se(j.path,b);W&&q.push(W);var Pe;return j.children&&j.children.length&&(Pe=s.createElement(Oe.a,null,j.children.map(function(de){return s.createElement(Oe.a.Item,{key:de.path||de.breadcrumbName},h(de,b,f,Ge(q,de.path,b)))}))),s.createElement(Ae,{overlay:Pe,separator:n,key:W||j.breadcrumbName},h(j,b,f,q))})}else g&&(Y=Object(He.a)(g).map(function(j,W){return j&&(Object(le.a)(j.type&&(j.type.__ANT_BREADCRUMB_ITEM===!0||j.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object($.a)(j,{separator:n,key:W}))}));var G=S()(ae,Object(B.a)({},"".concat(ae,"-rtl"),k==="rtl"),v);return s.createElement("div",Object(T.a)({className:G,style:l},y),Y)};ye.Item=Ae,ye.Separator=ze;var Ie=ye,ce=Ie,Qe=i("Tckk"),ke=i("gDlH"),qe=i("YMnH"),et=function(e,r,t){return!r||!t?null:s.createElement(qe.a,{componentName:"PageHeader"},function(n){var l=n.back;return s.createElement("div",{className:"".concat(e,"-back")},s.createElement(ke.a,{onClick:function(f){t&&t(f)},className:"".concat(e,"-back-button"),"aria-label":l},r))})},tt=function(e){return s.createElement(ce,e)},rt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?s.createElement(We,null):s.createElement(Re,null)},at=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=r.title,l=r.avatar,v=r.subTitle,f=r.tags,g=r.extra,E=r.onBack,h="".concat(e,"-heading"),O=n||v||f||g;if(!O)return null;var b=rt(r,t),y=et(e,b,E),p=y||l||O;return s.createElement("div",{className:h},p&&s.createElement("div",{className:"".concat(h,"-left")},y,l&&s.createElement(Qe.a,l),n&&s.createElement("span",{className:"".concat(h,"-title"),title:typeof n=="string"?n:void 0},n),v&&s.createElement("span",{className:"".concat(h,"-sub-title"),title:typeof v=="string"?v:void 0},v),f&&s.createElement("span",{className:"".concat(h,"-tags")},f)),g&&s.createElement("span",{className:"".concat(h,"-extra")},g))},nt=function(e,r){return r?s.createElement("div",{className:"".concat(e,"-footer")},r):null},ot=function(e,r){return s.createElement("div",{className:"".concat(e,"-content")},r)},it=function(e){var r=s.useState(!1),t=Object(Ce.a)(r,2),n=t[0],l=t[1],v=function(g){var E=g.width;l(E<768)};return s.createElement(w.a,null,function(f){var g,E=f.getPrefixCls,h=f.pageHeader,O=f.direction,b=e.prefixCls,y=e.style,p=e.footer,M=e.children,k=e.breadcrumb,Y=e.breadcrumbRender,ae=e.className,q=!0;"ghost"in e?q=e.ghost:h&&"ghost"in h&&(q=h.ghost);var G=E("page-header",b),j=function(){var Ve;return((Ve=k)===null||Ve===void 0?void 0:Ve.routes)?tt(k):null},W=j(),Pe=(Y==null?void 0:Y(e,W))||W,de=S()(G,ae,(g={"has-breadcrumb":Pe,"has-footer":p},Object(B.a)(g,"".concat(G,"-ghost"),q),Object(B.a)(g,"".concat(G,"-rtl"),O==="rtl"),Object(B.a)(g,"".concat(G,"-compact"),n),g));return s.createElement(X.a,{onResize:v},s.createElement("div",{className:de,style:y},Pe,at(G,e,O),M&&ot(G,M),nt(G,p)))})},lt=it,Pt=i("Znn+"),Xe=i("ZTPi"),ct=i("jYQm"),st=i("FRQA"),ft=i("jRje"),Et=i("u/V1"),ut=i("95SA"),dt=i("yxHc"),vt=["title","content","pageHeaderRender","header","extraContent","style","prefixCls"];function Je(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),r.push.apply(r,t)}return r}function U(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Je(Object(r),!0).forEach(function(t){Ze(a,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(r,t))})}return a}function Ze(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function mt(a,e){if(a==null)return{};var r=gt(a,e),t,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,t)||(r[t]=a[t]))}return r}function gt(a,e){if(a==null)return{};var r={},t=Object.keys(a),n,l;for(l=0;l<t.length;l++)n=t[l],!(e.indexOf(n)>=0)&&(r[n]=a[n]);return r}function ue(){return ue=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},ue.apply(this,arguments)}function we(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?we=function(r){return typeof r}:we=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},we(a)}function ht(a){return we(a)==="object"?a:{spinning:a}}var pt=function(e){var r=e.tabList,t=e.tabActiveKey,n=e.onTabChange,l=e.tabBarExtraContent,v=e.tabProps,f=e.prefixedClassName;return r&&r.length?x.a.createElement(Xe.a,ue({className:"".concat(f,"-tabs"),activeKey:t,onChange:function(E){n&&n(E)},tabBarExtraContent:l},v),r.map(function(g,E){return x.a.createElement(Xe.a.TabPane,ue({},g,{tab:g.tab,key:g.key||E}))})):null},bt=function(e,r,t){return!e&&!r?null:x.a.createElement("div",{className:"".concat(t,"-detail")},x.a.createElement("div",{className:"".concat(t,"-main")},x.a.createElement("div",{className:"".concat(t,"-row")},e&&x.a.createElement("div",{className:"".concat(t,"-content")},e),r&&x.a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},Ot=function(e,r){var t,n=e.title,l=e.content,v=e.pageHeaderRender,f=e.header,g=e.extraContent,E=e.style,h=e.prefixCls,O=mt(e,vt);if(v===!1)return null;if(v)return v(U(U({},e),r));var b=n;!n&&n!==!1&&(b=r.title);var y=U(U(U({},r),{},{title:b},O),{},{footer:pt(U(U({},O),{},{prefixedClassName:r.prefixedClassName}))},f),p=y.breadcrumb;return["title","subTitle","breadcrumb","extra","tags","footer","avatar","backIcon"].every(function(M){return!y[M]})&&(!p||!(p==null?void 0:p.itemRender)&&!(p==null||(t=p.routes)===null||t===void 0?void 0:t.length))&&!l&&!g?null:x.a.createElement(lt,ue({},y,{breadcrumb:U(U({},y.breadcrumb),r.breadcrumbProps),prefixCls:h}),(f==null?void 0:f.children)||bt(l,g,r.prefixedClassName))},yt=function(e){var r=e.children,t=e.loading,n=t===void 0?!1:t,l=e.style,v=e.footer,f=e.affixProps,g=e.ghost,E=e.fixedHeader,h=Object(s.useContext)(ct.a),O=Object(s.useContext)(ie.b.ConfigContext),b=O.getPrefixCls,y=e.prefixCls||b("pro"),p="".concat(y,"-page-container"),M=S()(p,e.className,Ze({},"".concat(y,"-page-container-ghost"),g)),k=r?x.a.createElement("div",null,x.a.createElement("div",{className:"".concat(p,"-children-content")},r),h.hasFooterToolbar&&x.a.createElement("div",{style:{height:48,marginTop:24}})):null,Y=Ot(e,U(U({},h),{},{prefixCls:void 0,prefixedClassName:p})),ae=Y?x.a.createElement("div",{className:"".concat(p,"-warp")},Y):null,q=function(){var j=ht(n),W=j.spinning?x.a.createElement(ut.a,j):k;return e.waterMarkProps||h.waterMarkProps?x.a.createElement(dt.a,e.waterMarkProps||h.waterMarkProps,W):W};return x.a.createElement("div",{style:l,className:M},E&&ae?x.a.createElement(_,ue({offsetTop:h.hasHeader&&h.fixedHeader?h.headerHeight:0},f),ae):ae,x.a.createElement(st.a,null,q()),v&&x.a.createElement(ft.a,{prefixCls:y},v))},xt=N.a=yt},"u/V1":function(H,N,i){},yxHc:function(H,N,i){"use strict";var se=i("GNNt"),ne=i("wEI+"),T=i("q1tI"),B=i.n(T),Q=i("TSYQ"),V=i.n(Q);function ee(u,o){var c=Object.keys(u);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(u);o&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(u,m).enumerable})),c.push.apply(c,d)}return c}function te(u){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?ee(Object(c),!0).forEach(function(d){fe(u,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(c)):ee(Object(c)).forEach(function(d){Object.defineProperty(u,d,Object.getOwnPropertyDescriptor(c,d))})}return u}function fe(u,o,c){return o in u?Object.defineProperty(u,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[o]=c,u}function s(u,o){return X(u)||K(u,o)||A(u,o)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(u,o){if(!!u){if(typeof u=="string")return S(u,o);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return S(u,o)}}function S(u,o){(o==null||o>u.length)&&(o=u.length);for(var c=0,d=new Array(o);c<o;c++)d[c]=u[c];return d}function K(u,o){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var d=[],m=!0,C=!1,R,L;try{for(c=c.call(u);!(m=(R=c.next()).done)&&(d.push(R.value),!(o&&d.length===o));m=!0);}catch(I){C=!0,L=I}finally{try{!m&&c.return!=null&&c.return()}finally{if(C)throw L}}return d}}function X(u){if(Array.isArray(u))return u}var w=function(o){if(!o)return 1;var c=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/c},re=function(o){var c=o.children,d=o.style,m=o.className,C=o.markStyle,R=o.markClassName,L=o.zIndex,I=L===void 0?9:L,ve=o.gapX,J=ve===void 0?212:ve,oe=o.gapY,F=oe===void 0?222:oe,P=o.width,D=P===void 0?120:P,z=o.height,_=z===void 0?64:z,me=o.rotate,ie=me===void 0?-22:me,Ee=o.image,xe=o.content,Le=o.offsetLeft,_e=o.offsetTop,Ue=o.fontStyle,Ce=Ue===void 0?"normal":Ue,Te=o.fontWeight,je=Te===void 0?"normal":Te,ge=o.fontColor,he=ge===void 0?"rgba(0,0,0,.15)":ge,Re=o.fontSize,Ne=Re===void 0?16:Re,Be=o.fontFamily,pe=Be===void 0?"sans-serif":Be,We=o.prefixCls,He=Object(T.useContext)(ne.b.ConfigContext),Ke=He.getPrefixCls,De=Ke("pro-layout-watermark",We),Fe=V()("".concat(De,"-wrapper"),m),Me=V()(De,R),Ae=Object(T.useState)(""),be=s(Ae,2),ze=be[0],Oe=be[1];return Object(T.useEffect)(function(){var le=document.createElement("canvas"),$=le.getContext("2d"),Z=w($),$e="".concat((J+D)*Z,"px"),Ye="".concat((F+_)*Z,"px"),Se=Le||J/2,Ge=_e||F/2;if(le.setAttribute("width",$e),le.setAttribute("height",Ye),$){$.translate(Se*Z,Ge*Z),$.rotate(Math.PI/180*Number(ie));var ye=D*Z,Ie=_*Z;if(Ee){var ce=new Image;ce.crossOrigin="anonymous",ce.referrerPolicy="no-referrer",ce.src=Ee,ce.onload=function(){$.drawImage(ce,0,0,ye,Ie),Oe(le.toDataURL())}}else if(xe){var Qe=Number(Ne)*Z;$.font="".concat(Ce," normal ").concat(je," ").concat(Qe,"px/").concat(Ie,"px ").concat(pe),$.fillStyle=he,$.fillText(xe,0,0),Oe(le.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[J,F,Le,_e,ie,Ce,je,D,_,pe,he,Ee,xe,Ne]),B.a.createElement("div",{style:te({position:"relative"},d),className:Fe},c,B.a.createElement("div",{className:Me,style:te({zIndex:I,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(J+D,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(ze,"')")},C)}))};N.a=re}}]);