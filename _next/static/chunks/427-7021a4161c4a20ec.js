(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},7544:function(e,t,n){n(6029)},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,d=void 0!==a&&a,g=e.priority,h=void 0!==g&&g,x=e.loading,_=e.lazyRoot,C=void 0===_?null:_,E=e.lazyBoundary,A=e.className,M=e.quality,P=e.width,I=e.height,R=e.style,L=e.objectFit,N=e.objectPosition,q=e.onLoadingComplete,B=e.placeholder,D=void 0===B?"empty":B,W=e.blurDataURL,U=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=l.useContext(f.ImageConfigContext),Z=l.useMemo((function(){var e=y||T||c.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[T]),H=U,F=n?"responsive":"intrinsic";"layout"in H&&(H.layout&&(F=H.layout),delete H.layout);var V=S;if("loader"in H){if(H.loader){var G=H.loader;V=function(e){e.config;var t=v(e,["config"]);return G(t)}}delete H.loader}var K="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var J=j(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,K=J.src,(!F||"fill"!==F)&&(I=I||J.height,P=P||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:K;var Q=O(P),X=O(I),Y=O(M),$=!h&&("lazy"===x||"undefined"===typeof x);(t.startsWith("data:")||t.startsWith("blob:"))&&(d=!0,$=!1);b.has(t)&&($=!1);m&&(d=!0);var ee,te=o(l.useState(!1),2),ne=te[0],re=te[1],oe=o(s.useIntersection({rootRef:C,rootMargin:E||"200px",disabled:!$}),3),ie=oe[0],ae=oe[1],le=oe[2],ue=!$||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:N};0;var pe=Object.assign({},R,de),ge="blur"!==D||ne?{}:{backgroundSize:L||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===F)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof X){var ve=X/Q,he=isNaN(ve)?"100%":"".concat(100*ve,"%");"responsive"===F?(ce.display="block",ce.position="relative",fe=!0,se.paddingTop=he):"intrinsic"===F?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===F&&(ce.display="inline-block",ce.position="relative",ce.width=Q,ce.height=X)}else 0;var me={src:w,srcSet:void 0,sizes:void 0};ue&&(me=z({config:Z,src:t,unoptimized:d,layout:F,width:Q,quality:Y,sizes:n,loader:V}));var ye=t;0;var be,we="imagesrcset",xe="imagesizes";we="imageSrcSet",xe="imageSizes";var je=(r(be={},we,me.srcSet),r(be,xe,me.sizes),be),ze=l.default.useLayoutEffect,Oe=l.useRef(q),Se=l.useRef(t);l.useEffect((function(){Oe.current=q}),[q]),ze((function(){Se.current!==t&&(le(),Se.current=t)}),[le,t]);var _e=p({isLazy:$,imgAttributes:me,heightInt:X,widthInt:Q,qualityInt:Y,layout:F,className:A,imgStyle:pe,blurStyle:ge,loading:x,config:Z,unoptimized:d,placeholder:D,loader:V,srcString:ye,onLoadingCompleteRef:Oe,setBlurComplete:re,setIntersection:ie,isVisible:ue,noscriptSizes:n},H);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ce},fe?l.default.createElement("span",{style:se},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(k,Object.assign({},_e))),h?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},je))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(5443))&&a.__esModule?a:{default:a},c=n(9309),s=n(7190),f=n(9977),d=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function g(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function v(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||{},m=h.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(d.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(C(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(C(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(C(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function z(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,a=e.width,l=e.quality,u=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var o=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(r);l)c.push(parseInt(l[2]));if(c.length){var s,f=.01*(s=Math).min.apply(s,i(c));return{widths:a.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,u),f=s.widths,d=s.kind,p=f.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:f.map((function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:c({config:t,src:n,quality:l,width:f[p]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(n))}function _(e,t,n,r,o,i){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&i(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,o=e.layout,i=e.className,a=e.imgStyle,u=e.blurStyle,c=e.isLazy,s=e.placeholder,f=e.loading,d=e.srcString,g=e.config,h=e.unoptimized,m=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,x=e.onLoad,j=e.onError,O=(e.isVisible,e.noscriptSizes),S=v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return f=c?"lazy":f,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":o,className:i,style:p({},a,u),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&_(e,d,0,s,y,b)}),[w,d,o,s,y,b]),onLoad:function(e){_(e.currentTarget,d,0,s,y,b),x&&x(e)},onError:function(e){"blur"===s&&b(!0),j&&j(e)}})),(c||"blur"===s)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},S,z({config:g,src:d,unoptimized:h,layout:o,width:n,quality:r,sizes:O,loader:m}),{decoding:"async","data-nimg":o,style:a,className:i,loading:f}))))};function C(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),l=n(2725),u=n(3462),c=n(1018),s=n(7190),f=n(1210),d=n(8684);var p="undefined"!==typeof i.default.useTransition,g={};function v(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;g[t+"%"+n+(o?"%"+o:"")]=!0}}var h=i.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,m=e.children,y=e.prefetch,b=e.passHref,w=e.replace,x=e.shallow,j=e.scroll,z=e.locale,O=e.onClick,S=e.onMouseEnter,_=e.legacyBehavior,k=void 0===_?!0!==Boolean(!1):_,C=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=m,!k||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var E=!1!==y,A=r(p?i.default.useTransition():[],2)[1],M=i.default.useContext(u.RouterContext),P=i.default.useContext(c.AppRouterContext);P&&(M=P);var I,R=i.default.useMemo((function(){var e=r(a.resolveHref(M,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?a.resolveHref(M,h):n||t}}),[M,o,h]),L=R.href,N=R.as,q=i.default.useRef(L),B=i.default.useRef(N);k&&(I=i.default.Children.only(n));var D=k?I&&"object"===typeof I&&I.ref:t,W=r(s.useIntersection({rootMargin:"200px"}),3),U=W[0],T=W[1],Z=W[2],H=i.default.useCallback((function(e){B.current===N&&q.current===L||(Z(),B.current=N,q.current=L),U(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[N,D,L,Z,U]);i.default.useEffect((function(){var e=T&&E&&a.isLocalURL(L),t="undefined"!==typeof z?z:M&&M.locale,n=g[L+"%"+N+(t?"%"+t:"")];e&&!n&&v(M,L,N,{locale:t})}),[N,L,T,z,E,M]);var F={ref:H,onClick:function(e){k||"function"!==typeof O||O(e),k&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,u,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var s=function(){t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:l})};c?c(s):s()}}(e,M,L,N,w,x,j,z,P?A:void 0)},onMouseEnter:function(e){k||"function"!==typeof S||S(e),k&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),a.isLocalURL(L)&&v(M,L,N,{priority:!0})}};if(!k||b||"a"===I.type&&!("href"in I.props)){var V="undefined"!==typeof z?z:M&&M.locale,G=M&&M.isLocaleDomain&&f.getDomainLocale(N,V,M.locales,M.domainLocales);F.href=G||d.addBasePath(l.addLocale(N,V,M&&M.defaultLocale))}return k?i.default.cloneElement(I,F):i.default.createElement("a",Object.assign({},C,F),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,s=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],g=r(o.useState(null),2),v=g[0],h=g[1];o.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),c||d)return;return v&&v.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},u.push(n),l.set(n,t),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[v,c,n,t,d]);var m=o.useCallback((function(){p(!1)}),[]);return[h,d,m]};var o=n(7294),i=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6029:function(e,t,n){"use strict";var r=n(9658).Z,o=n(7222).Z,i=n(7788).Z,a=n(2648).Z,l=n(7735).Z,u=a(n(4051));var c,s=(c=n(7294))&&c.__esModule?c:{default:c},f=n(3794);function d(e,t,n,r,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void n(c)}l.done?t(u):Promise.resolve(u).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,l,"next",e)}function l(e){d(i,r,o,a,l,"throw",e)}a(void 0)}))}}function g(e){return v.apply(this,arguments)}function v(){return(v=p(u.default.mark((function e(t){var n,r,o;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,f.loadGetInitialProps(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(e){i(n,e);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return s.default.createElement(t,Object.assign({},n))}}]),n}(s.default.Component);h.origGetInitialProps=g,h.getInitialProps=g},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var i=o.default.createContext(null);t.AppRouterContext=i;var a=o.default.createContext(null);t.AppTreeContext=a;var l=o.default.createContext(null);t.FullAppTreeContext=l},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function c(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),u(e.child))}}function s(e){var t=function(t){var n,o=e.attr,i=e.size,u=e.title,c=l(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}}]);