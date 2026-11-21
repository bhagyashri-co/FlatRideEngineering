function lf(a,u){for(var c=0;c<u.length;c++){const d=u[c];if(typeof d!="string"&&!Array.isArray(d)){for(const h in d)if(h!=="default"&&!(h in a)){const v=Object.getOwnPropertyDescriptor(d,h);v&&Object.defineProperty(a,h,v.get?v:{enumerable:!0,get:()=>d[h]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const v of h)if(v.type==="childList")for(const j of v.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&d(j)}).observe(document,{childList:!0,subtree:!0});function c(h){const v={};return h.integrity&&(v.integrity=h.integrity),h.referrerPolicy&&(v.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?v.credentials="include":h.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function d(h){if(h.ep)return;h.ep=!0;const v=c(h);fetch(h.href,v)}})();function Uu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Xo={exports:{}},Or={},Jo={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu;function of(){if(gu)return te;gu=1;var a=Symbol.for("react.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),j=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),P=Symbol.iterator;function U(g){return g===null||typeof g!="object"?null:(g=P&&g[P]||g["@@iterator"],typeof g=="function"?g:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,L={};function M(g,b,ee){this.props=g,this.context=b,this.refs=L,this.updater=ee||Z}M.prototype.isReactComponent={},M.prototype.setState=function(g,b){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,b,"setState")},M.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Q(){}Q.prototype=M.prototype;function K(g,b,ee){this.props=g,this.context=b,this.refs=L,this.updater=ee||Z}var X=K.prototype=new Q;X.constructor=K,B(X,M.prototype),X.isPureReactComponent=!0;var J=Array.isArray,xe=Object.prototype.hasOwnProperty,de={current:null},Ce={key:!0,ref:!0,__self:!0,__source:!0};function ze(g,b,ee){var ne,ie={},le=null,pe=null;if(b!=null)for(ne in b.ref!==void 0&&(pe=b.ref),b.key!==void 0&&(le=""+b.key),b)xe.call(b,ne)&&!Ce.hasOwnProperty(ne)&&(ie[ne]=b[ne]);var ae=arguments.length-2;if(ae===1)ie.children=ee;else if(1<ae){for(var ge=Array(ae),Ze=0;Ze<ae;Ze++)ge[Ze]=arguments[Ze+2];ie.children=ge}if(g&&g.defaultProps)for(ne in ae=g.defaultProps,ae)ie[ne]===void 0&&(ie[ne]=ae[ne]);return{$$typeof:a,type:g,key:le,ref:pe,props:ie,_owner:de.current}}function yt(g,b){return{$$typeof:a,type:g.type,key:b,ref:g.ref,props:g.props,_owner:g._owner}}function Xe(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function bt(g){var b={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ee){return b[ee]})}var wt=/\/+/g;function Je(g,b){return typeof g=="object"&&g!==null&&g.key!=null?bt(""+g.key):b.toString(36)}function ut(g,b,ee,ne,ie){var le=typeof g;(le==="undefined"||le==="boolean")&&(g=null);var pe=!1;if(g===null)pe=!0;else switch(le){case"string":case"number":pe=!0;break;case"object":switch(g.$$typeof){case a:case u:pe=!0}}if(pe)return pe=g,ie=ie(pe),g=ne===""?"."+Je(pe,0):ne,J(ie)?(ee="",g!=null&&(ee=g.replace(wt,"$&/")+"/"),ut(ie,b,ee,"",function(Ze){return Ze})):ie!=null&&(Xe(ie)&&(ie=yt(ie,ee+(!ie.key||pe&&pe.key===ie.key?"":(""+ie.key).replace(wt,"$&/")+"/")+g)),b.push(ie)),1;if(pe=0,ne=ne===""?".":ne+":",J(g))for(var ae=0;ae<g.length;ae++){le=g[ae];var ge=ne+Je(le,ae);pe+=ut(le,b,ee,ge,ie)}else if(ge=U(g),typeof ge=="function")for(g=ge.call(g),ae=0;!(le=g.next()).done;)le=le.value,ge=ne+Je(le,ae++),pe+=ut(le,b,ee,ge,ie);else if(le==="object")throw b=String(g),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return pe}function kt(g,b,ee){if(g==null)return g;var ne=[],ie=0;return ut(g,ne,"","",function(le){return b.call(ee,le,ie++)}),ne}function qe(g){if(g._status===-1){var b=g._result;b=b(),b.then(function(ee){(g._status===0||g._status===-1)&&(g._status=1,g._result=ee)},function(ee){(g._status===0||g._status===-1)&&(g._status=2,g._result=ee)}),g._status===-1&&(g._status=0,g._result=b)}if(g._status===1)return g._result.default;throw g._result}var je={current:null},O={transition:null},$={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:O,ReactCurrentOwner:de};function A(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:kt,forEach:function(g,b,ee){kt(g,function(){b.apply(this,arguments)},ee)},count:function(g){var b=0;return kt(g,function(){b++}),b},toArray:function(g){return kt(g,function(b){return b})||[]},only:function(g){if(!Xe(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=M,te.Fragment=c,te.Profiler=h,te.PureComponent=K,te.StrictMode=d,te.Suspense=S,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,te.act=A,te.cloneElement=function(g,b,ee){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var ne=B({},g.props),ie=g.key,le=g.ref,pe=g._owner;if(b!=null){if(b.ref!==void 0&&(le=b.ref,pe=de.current),b.key!==void 0&&(ie=""+b.key),g.type&&g.type.defaultProps)var ae=g.type.defaultProps;for(ge in b)xe.call(b,ge)&&!Ce.hasOwnProperty(ge)&&(ne[ge]=b[ge]===void 0&&ae!==void 0?ae[ge]:b[ge])}var ge=arguments.length-2;if(ge===1)ne.children=ee;else if(1<ge){ae=Array(ge);for(var Ze=0;Ze<ge;Ze++)ae[Ze]=arguments[Ze+2];ne.children=ae}return{$$typeof:a,type:g.type,key:ie,ref:le,props:ne,_owner:pe}},te.createContext=function(g){return g={$$typeof:j,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:v,_context:g},g.Consumer=g},te.createElement=ze,te.createFactory=function(g){var b=ze.bind(null,g);return b.type=g,b},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:E,render:g}},te.isValidElement=Xe,te.lazy=function(g){return{$$typeof:_,_payload:{_status:-1,_result:g},_init:qe}},te.memo=function(g,b){return{$$typeof:k,type:g,compare:b===void 0?null:b}},te.startTransition=function(g){var b=O.transition;O.transition={};try{g()}finally{O.transition=b}},te.unstable_act=A,te.useCallback=function(g,b){return je.current.useCallback(g,b)},te.useContext=function(g){return je.current.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g){return je.current.useDeferredValue(g)},te.useEffect=function(g,b){return je.current.useEffect(g,b)},te.useId=function(){return je.current.useId()},te.useImperativeHandle=function(g,b,ee){return je.current.useImperativeHandle(g,b,ee)},te.useInsertionEffect=function(g,b){return je.current.useInsertionEffect(g,b)},te.useLayoutEffect=function(g,b){return je.current.useLayoutEffect(g,b)},te.useMemo=function(g,b){return je.current.useMemo(g,b)},te.useReducer=function(g,b,ee){return je.current.useReducer(g,b,ee)},te.useRef=function(g){return je.current.useRef(g)},te.useState=function(g){return je.current.useState(g)},te.useSyncExternalStore=function(g,b,ee){return je.current.useSyncExternalStore(g,b,ee)},te.useTransition=function(){return je.current.useTransition()},te.version="18.3.1",te}var vu;function ma(){return vu||(vu=1,Jo.exports=of()),Jo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu;function af(){if(xu)return Or;xu=1;var a=ma(),u=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function j(E,S,k){var _,P={},U=null,Z=null;k!==void 0&&(U=""+k),S.key!==void 0&&(U=""+S.key),S.ref!==void 0&&(Z=S.ref);for(_ in S)d.call(S,_)&&!v.hasOwnProperty(_)&&(P[_]=S[_]);if(E&&E.defaultProps)for(_ in S=E.defaultProps,S)P[_]===void 0&&(P[_]=S[_]);return{$$typeof:u,type:E,key:U,ref:Z,props:P,_owner:h.current}}return Or.Fragment=c,Or.jsx=j,Or.jsxs=j,Or}var yu;function sf(){return yu||(yu=1,Xo.exports=af()),Xo.exports}var l=sf(),N=ma();const ga=Uu(N),cf=lf({__proto__:null,default:ga},[N]);var Ki={},Zo={exports:{}},Ye={},ea={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu;function uf(){return wu||(wu=1,(function(a){function u(O,$){var A=O.length;O.push($);e:for(;0<A;){var g=A-1>>>1,b=O[g];if(0<h(b,$))O[g]=$,O[A]=b,A=g;else break e}}function c(O){return O.length===0?null:O[0]}function d(O){if(O.length===0)return null;var $=O[0],A=O.pop();if(A!==$){O[0]=A;e:for(var g=0,b=O.length,ee=b>>>1;g<ee;){var ne=2*(g+1)-1,ie=O[ne],le=ne+1,pe=O[le];if(0>h(ie,A))le<b&&0>h(pe,ie)?(O[g]=pe,O[le]=A,g=le):(O[g]=ie,O[ne]=A,g=ne);else if(le<b&&0>h(pe,A))O[g]=pe,O[le]=A,g=le;else break e}}return $}function h(O,$){var A=O.sortIndex-$.sortIndex;return A!==0?A:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;a.unstable_now=function(){return v.now()}}else{var j=Date,E=j.now();a.unstable_now=function(){return j.now()-E}}var S=[],k=[],_=1,P=null,U=3,Z=!1,B=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(O){for(var $=c(k);$!==null;){if($.callback===null)d(k);else if($.startTime<=O)d(k),$.sortIndex=$.expirationTime,u(S,$);else break;$=c(k)}}function J(O){if(L=!1,X(O),!B)if(c(S)!==null)B=!0,qe(xe);else{var $=c(k);$!==null&&je(J,$.startTime-O)}}function xe(O,$){B=!1,L&&(L=!1,Q(ze),ze=-1),Z=!0;var A=U;try{for(X($),P=c(S);P!==null&&(!(P.expirationTime>$)||O&&!bt());){var g=P.callback;if(typeof g=="function"){P.callback=null,U=P.priorityLevel;var b=g(P.expirationTime<=$);$=a.unstable_now(),typeof b=="function"?P.callback=b:P===c(S)&&d(S),X($)}else d(S);P=c(S)}if(P!==null)var ee=!0;else{var ne=c(k);ne!==null&&je(J,ne.startTime-$),ee=!1}return ee}finally{P=null,U=A,Z=!1}}var de=!1,Ce=null,ze=-1,yt=5,Xe=-1;function bt(){return!(a.unstable_now()-Xe<yt)}function wt(){if(Ce!==null){var O=a.unstable_now();Xe=O;var $=!0;try{$=Ce(!0,O)}finally{$?Je():(de=!1,Ce=null)}}else de=!1}var Je;if(typeof K=="function")Je=function(){K(wt)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,kt=ut.port2;ut.port1.onmessage=wt,Je=function(){kt.postMessage(null)}}else Je=function(){M(wt,0)};function qe(O){Ce=O,de||(de=!0,Je())}function je(O,$){ze=M(function(){O(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_continueExecution=function(){B||Z||(B=!0,qe(xe))},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):yt=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return U},a.unstable_getFirstCallbackNode=function(){return c(S)},a.unstable_next=function(O){switch(U){case 1:case 2:case 3:var $=3;break;default:$=U}var A=U;U=$;try{return O()}finally{U=A}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var A=U;U=O;try{return $()}finally{U=A}},a.unstable_scheduleCallback=function(O,$,A){var g=a.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?g+A:g):A=g,O){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=A+b,O={id:_++,callback:$,priorityLevel:O,startTime:A,expirationTime:b,sortIndex:-1},A>g?(O.sortIndex=A,u(k,O),c(S)===null&&O===c(k)&&(L?(Q(ze),ze=-1):L=!0,je(J,A-g))):(O.sortIndex=b,u(S,O),B||Z||(B=!0,qe(xe))),O},a.unstable_shouldYield=bt,a.unstable_wrapCallback=function(O){var $=U;return function(){var A=U;U=$;try{return O.apply(this,arguments)}finally{U=A}}}})(ta)),ta}var ku;function df(){return ku||(ku=1,ea.exports=uf()),ea.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju;function pf(){if(ju)return Ye;ju=1;var a=ma(),u=df();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,h={};function v(e,t){j(e,t),j(e+"Capture",t)}function j(e,t){for(h[e]=t,e=0;e<t.length;e++)d.add(t[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},P={};function U(e){return S.call(P,e)?!0:S.call(_,e)?!1:k.test(e)?P[e]=!0:(_[e]=!0,!1)}function Z(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,r){if(t===null||typeof t>"u"||Z(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,K);M[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,K);M[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,K);M[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var i=M.hasOwnProperty(t)?M[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,i,r)&&(n=null),r||i===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var J=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),de=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),ze=Symbol.for("react.strict_mode"),yt=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),bt=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),O=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,g;function b(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var ee=!1;function ne(e,t){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,p=o.length-1;1<=s&&0<=p&&i[s]!==o[p];)p--;for(;1<=s&&0<=p;s--,p--)if(i[s]!==o[p]){if(s!==1||p!==1)do if(s--,p--,0>p||i[s]!==o[p]){var f=`
`+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=s&&0<=p);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function ie(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=ne(e.type,!1),e;case 11:return e=ne(e.type.render,!1),e;case 1:return e=ne(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ce:return"Fragment";case de:return"Portal";case yt:return"Profiler";case ze:return"StrictMode";case Je:return"Suspense";case ut:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bt:return(e.displayName||"Context")+".Consumer";case Xe:return(e._context.displayName||"Context")+".Provider";case wt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kt:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===ze?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=ge(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=Ze(e))}function ja(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ge(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rl(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ae(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ea(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function il(e,t){Ea(e,t);var n=ae(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&ll(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Na(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ll(e,t,n){(t!=="number"||Ur(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(Yn(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function ba(e,t){var n=ae(t.value),r=ae(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,Ra=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sd=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){sd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function Ta(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function _a(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ta(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cd=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sl(e,t){if(t){if(cd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,kn=null,jn=null;function Ma(e){if(e=wr(e)){if(typeof pl!="function")throw Error(c(280));var t=e.stateNode;t&&(t=ui(t),pl(e.stateNode,e.type,t))}}function La(e){kn?jn?jn.push(e):jn=[e]:kn=e}function Oa(){if(kn){var e=kn,t=jn;if(jn=kn=null,Ma(e),t)for(e=0;e<t.length;e++)Ma(t[e])}}function Ia(e,t){return e(t)}function Da(){}var fl=!1;function Aa(e,t,n){if(fl)return e(t,n);fl=!0;try{return Ia(e,t,n)}finally{fl=!1,(kn!==null||jn!==null)&&(Da(),Oa())}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var hl=!1;if(E)try{var er={};Object.defineProperty(er,"passive",{get:function(){hl=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{hl=!1}function ud(e,t,n,r,i,o,s,p,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(z){this.onError(z)}}var tr=!1,Vr=null,Br=!1,ml=null,dd={onError:function(e){tr=!0,Vr=e}};function pd(e,t,n,r,i,o,s,p,f){tr=!1,Vr=null,ud.apply(dd,arguments)}function fd(e,t,n,r,i,o,s,p,f){if(pd.apply(this,arguments),tr){if(tr){var w=Vr;tr=!1,Vr=null}else throw Error(c(198));Br||(Br=!0,ml=w)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ua(e){if(an(e)!==e)throw Error(c(188))}function hd(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ua(i),e;if(o===r)return Ua(i),t;o=o.sibling}throw Error(c(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,p=i.child;p;){if(p===n){s=!0,n=i,r=o;break}if(p===r){s=!0,r=i,n=o;break}p=p.sibling}if(!s){for(p=o.child;p;){if(p===n){s=!0,n=o,r=i;break}if(p===r){s=!0,r=o,n=i;break}p=p.sibling}if(!s)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function Wa(e){return e=hd(e),e!==null?Va(e):null}function Va(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Va(e);if(t!==null)return t;e=e.sibling}return null}var Ba=u.unstable_scheduleCallback,qa=u.unstable_cancelCallback,md=u.unstable_shouldYield,gd=u.unstable_requestPaint,Ee=u.unstable_now,vd=u.unstable_getCurrentPriorityLevel,gl=u.unstable_ImmediatePriority,Ha=u.unstable_UserBlockingPriority,qr=u.unstable_NormalPriority,xd=u.unstable_LowPriority,$a=u.unstable_IdlePriority,Hr=null,jt=null;function yd(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Hr,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:jd,wd=Math.log,kd=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(wd(e)/kd|0)|0}var $r=64,Gr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var p=s&~i;p!==0?r=nr(p):(o&=s,o!==0&&(r=nr(o)))}else s=n&~i,s!==0?r=nr(s):o!==0&&(r=nr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-dt(o),p=1<<s,f=i[s];f===-1?((p&n)===0||(p&r)!==0)&&(i[s]=Sd(p,t)):f<=t&&(e.expiredLanes|=p),o&=~p}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ga(){var e=$r;return $r<<=1,($r&4194240)===0&&($r=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Nd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function Qa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ka,wl,Ya,Xa,Ja,kl=!1,Kr=[],Ft=null,Ut=null,Wt=null,ir=new Map,lr=new Map,Vt=[],Cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Za(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=wr(t),t!==null&&wl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bd(e,t,n,r,i){switch(t){case"focusin":return Ft=or(Ft,e,t,n,r,i),!0;case"dragenter":return Ut=or(Ut,e,t,n,r,i),!0;case"mouseover":return Wt=or(Wt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ir.set(o,or(ir.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,lr.set(o,or(lr.get(o)||null,e,t,n,r,i)),!0}return!1}function es(e){var t=sn(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=Fa(n),t!==null){e.blockedOn=t,Ja(e.priority,function(){Ya(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=wr(n),t!==null&&wl(t),e.blockedOn=n,!1;t.shift()}return!0}function ts(e,t,n){Yr(e)&&n.delete(t)}function zd(){kl=!1,Ft!==null&&Yr(Ft)&&(Ft=null),Ut!==null&&Yr(Ut)&&(Ut=null),Wt!==null&&Yr(Wt)&&(Wt=null),ir.forEach(ts),lr.forEach(ts)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,zd)))}function sr(e){function t(i){return ar(i,e)}if(0<Kr.length){ar(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&ar(Ft,e),Ut!==null&&ar(Ut,e),Wt!==null&&ar(Wt,e),ir.forEach(t),lr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)es(n),n.blockedOn===null&&Vt.shift()}var Sn=J.ReactCurrentBatchConfig,Xr=!0;function Pd(e,t,n,r){var i=se,o=Sn.transition;Sn.transition=null;try{se=1,jl(e,t,n,r)}finally{se=i,Sn.transition=o}}function Rd(e,t,n,r){var i=se,o=Sn.transition;Sn.transition=null;try{se=4,jl(e,t,n,r)}finally{se=i,Sn.transition=o}}function jl(e,t,n,r){if(Xr){var i=Sl(e,t,n,r);if(i===null)Ul(e,t,r,Jr,n),Za(e,r);else if(bd(i,e,t,n,r))r.stopPropagation();else if(Za(e,r),t&4&&-1<Cd.indexOf(e)){for(;i!==null;){var o=wr(i);if(o!==null&&Ka(o),o=Sl(e,t,n,r),o===null&&Ul(e,t,r,Jr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Jr=null;function Sl(e,t,n,r){if(Jr=null,e=dl(r),e=sn(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function ns(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vd()){case gl:return 1;case Ha:return 4;case qr:case xd:return 16;case $a:return 536870912;default:return 16}default:return 16}}var Bt=null,El=null,Zr=null;function rs(){if(Zr)return Zr;var e,t=El,n=t.length,r,i="value"in Bt?Bt.value:Bt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zr=i.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function is(){return!1}function et(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ti:is,this.isPropagationStopped=is,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=et(En),cr=A({},En,{view:0,detail:0}),Td=et(cr),Cl,bl,ur,ni=A({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Cl=e.screenX-ur.screenX,bl=e.screenY-ur.screenY):bl=Cl=0,ur=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),ls=et(ni),_d=A({},ni,{dataTransfer:0}),Md=et(_d),Ld=A({},cr,{relatedTarget:0}),zl=et(Ld),Od=A({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),Id=et(Od),Dd=A({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ad=et(Dd),Fd=A({},En,{data:0}),os=et(Fd),Ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vd[e])?!!t[e]:!1}function Pl(){return Bd}var qd=A({},cr,{key:function(e){if(e.key){var t=Ud[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hd=et(qd),$d=A({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=et($d),Gd=A({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),Qd=et(Gd),Kd=A({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yd=et(Kd),Xd=A({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=et(Xd),Zd=[9,13,27,32],Rl=E&&"CompositionEvent"in window,dr=null;E&&"documentMode"in document&&(dr=document.documentMode);var ep=E&&"TextEvent"in window&&!dr,ss=E&&(!Rl||dr&&8<dr&&11>=dr),cs=" ",us=!1;function ds(e,t){switch(e){case"keyup":return Zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function tp(e,t){switch(e){case"compositionend":return ps(t);case"keypress":return t.which!==32?null:(us=!0,cs);case"textInput":return e=t.data,e===cs&&us?null:e;default:return null}}function np(e,t){if(Nn)return e==="compositionend"||!Rl&&ds(e,t)?(e=rs(),Zr=El=Bt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ss&&t.locale!=="ko"?null:t.data;default:return null}}var rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rp[e.type]:t==="textarea"}function hs(e,t,n,r){La(r),t=ai(t,"onChange"),0<t.length&&(n=new Nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,fr=null;function ip(e){_s(e,0)}function ri(e){var t=Rn(e);if(ja(t))return e}function lp(e,t){if(e==="change")return t}var ms=!1;if(E){var Tl;if(E){var _l="oninput"in document;if(!_l){var gs=document.createElement("div");gs.setAttribute("oninput","return;"),_l=typeof gs.oninput=="function"}Tl=_l}else Tl=!1;ms=Tl&&(!document.documentMode||9<document.documentMode)}function vs(){pr&&(pr.detachEvent("onpropertychange",xs),fr=pr=null)}function xs(e){if(e.propertyName==="value"&&ri(fr)){var t=[];hs(t,fr,e,dl(e)),Aa(ip,t)}}function op(e,t,n){e==="focusin"?(vs(),pr=t,fr=n,pr.attachEvent("onpropertychange",xs)):e==="focusout"&&vs()}function ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(fr)}function sp(e,t){if(e==="click")return ri(t)}function cp(e,t){if(e==="input"||e==="change")return ri(t)}function up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:up;function hr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!S.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ws(e,t){var n=ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ys(n)}}function ks(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ks(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function js(){for(var e=window,t=Ur();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function Ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dp(e){var t=js(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ks(n.ownerDocument.documentElement,n)){if(r!==null&&Ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ws(n,o);var s=ws(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pp=E&&"documentMode"in document&&11>=document.documentMode,Cn=null,Ll=null,mr=null,Ol=!1;function Ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||Cn==null||Cn!==Ur(r)||(r=Cn,"selectionStart"in r&&Ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&hr(mr,r)||(mr=r,r=ai(Ll,"onSelect"),0<r.length&&(t=new Nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:ii("Animation","AnimationEnd"),animationiteration:ii("Animation","AnimationIteration"),animationstart:ii("Animation","AnimationStart"),transitionend:ii("Transition","TransitionEnd")},Il={},Es={};E&&(Es=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function li(e){if(Il[e])return Il[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Es)return Il[e]=t[n];return e}var Ns=li("animationend"),Cs=li("animationiteration"),bs=li("animationstart"),zs=li("transitionend"),Ps=new Map,Rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){Ps.set(e,t),v(t,[e])}for(var Dl=0;Dl<Rs.length;Dl++){var Al=Rs[Dl],fp=Al.toLowerCase(),hp=Al[0].toUpperCase()+Al.slice(1);qt(fp,"on"+hp)}qt(Ns,"onAnimationEnd"),qt(Cs,"onAnimationIteration"),qt(bs,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(zs,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Ts(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fd(r,t,void 0,e),e.currentTarget=null}function _s(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var p=r[s],f=p.instance,w=p.currentTarget;if(p=p.listener,f!==o&&i.isPropagationStopped())break e;Ts(i,p,w),o=f}else for(s=0;s<r.length;s++){if(p=r[s],f=p.instance,w=p.currentTarget,p=p.listener,f!==o&&i.isPropagationStopped())break e;Ts(i,p,w),o=f}}}if(Br)throw e=ml,Br=!1,ml=null,e}function he(e,t){var n=t[$l];n===void 0&&(n=t[$l]=new Set);var r=e+"__bubble";n.has(r)||(Ms(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),Ms(n,e,r,t)}var oi="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[oi]){e[oi]=!0,d.forEach(function(n){n!=="selectionchange"&&(mp.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oi]||(t[oi]=!0,Fl("selectionchange",!1,t))}}function Ms(e,t,n,r){switch(ns(t)){case 1:var i=Pd;break;case 4:i=Rd;break;default:i=jl}n=i.bind(null,t,n,e),i=void 0,!hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var p=r.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var f=s.tag;if((f===3||f===4)&&(f=s.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;s=s.return}for(;p!==null;){if(s=sn(p),s===null)return;if(f=s.tag,f===5||f===6){r=o=s;continue e}p=p.parentNode}}r=r.return}Aa(function(){var w=o,z=dl(n),R=[];e:{var C=Ps.get(e);if(C!==void 0){var I=Nl,F=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":I=Hd;break;case"focusin":F="focus",I=zl;break;case"focusout":F="blur",I=zl;break;case"beforeblur":case"afterblur":I=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Qd;break;case Ns:case Cs:case bs:I=Id;break;case zs:I=Yd;break;case"scroll":I=Td;break;case"wheel":I=Jd;break;case"copy":case"cut":case"paste":I=Ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=as}var W=(t&4)!==0,Ne=!W&&e==="scroll",x=W?C!==null?C+"Capture":null:C;W=[];for(var m=w,y;m!==null;){y=m;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,x!==null&&(T=Zn(m,x),T!=null&&W.push(xr(m,T,y)))),Ne)break;m=m.return}0<W.length&&(C=new I(C,F,null,n,z),R.push({event:C,listeners:W}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",C&&n!==ul&&(F=n.relatedTarget||n.fromElement)&&(sn(F)||F[zt]))break e;if((I||C)&&(C=z.window===z?z:(C=z.ownerDocument)?C.defaultView||C.parentWindow:window,I?(F=n.relatedTarget||n.toElement,I=w,F=F?sn(F):null,F!==null&&(Ne=an(F),F!==Ne||F.tag!==5&&F.tag!==6)&&(F=null)):(I=null,F=w),I!==F)){if(W=ls,T="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(W=as,T="onPointerLeave",x="onPointerEnter",m="pointer"),Ne=I==null?C:Rn(I),y=F==null?C:Rn(F),C=new W(T,m+"leave",I,n,z),C.target=Ne,C.relatedTarget=y,T=null,sn(z)===w&&(W=new W(x,m+"enter",F,n,z),W.target=y,W.relatedTarget=Ne,T=W),Ne=T,I&&F)t:{for(W=I,x=F,m=0,y=W;y;y=zn(y))m++;for(y=0,T=x;T;T=zn(T))y++;for(;0<m-y;)W=zn(W),m--;for(;0<y-m;)x=zn(x),y--;for(;m--;){if(W===x||x!==null&&W===x.alternate)break t;W=zn(W),x=zn(x)}W=null}else W=null;I!==null&&Ls(R,C,I,W,!1),F!==null&&Ne!==null&&Ls(R,Ne,F,W,!0)}}e:{if(C=w?Rn(w):window,I=C.nodeName&&C.nodeName.toLowerCase(),I==="select"||I==="input"&&C.type==="file")var V=lp;else if(fs(C))if(ms)V=cp;else{V=ap;var q=op}else(I=C.nodeName)&&I.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(V=sp);if(V&&(V=V(e,w))){hs(R,V,n,z);break e}q&&q(e,C,w),e==="focusout"&&(q=C._wrapperState)&&q.controlled&&C.type==="number"&&ll(C,"number",C.value)}switch(q=w?Rn(w):window,e){case"focusin":(fs(q)||q.contentEditable==="true")&&(Cn=q,Ll=w,mr=null);break;case"focusout":mr=Ll=Cn=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Ss(R,n,z);break;case"selectionchange":if(pp)break;case"keydown":case"keyup":Ss(R,n,z)}var H;if(Rl)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Nn?ds(e,n)&&(G="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(ss&&n.locale!=="ko"&&(Nn||G!=="onCompositionStart"?G==="onCompositionEnd"&&Nn&&(H=rs()):(Bt=z,El="value"in Bt?Bt.value:Bt.textContent,Nn=!0)),q=ai(w,G),0<q.length&&(G=new os(G,e,null,n,z),R.push({event:G,listeners:q}),H?G.data=H:(H=ps(n),H!==null&&(G.data=H)))),(H=ep?tp(e,n):np(e,n))&&(w=ai(w,"onBeforeInput"),0<w.length&&(z=new os("onBeforeInput","beforeinput",null,n,z),R.push({event:z,listeners:w}),z.data=H))}_s(R,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zn(e,n),o!=null&&r.unshift(xr(e,o,i)),o=Zn(e,t),o!=null&&r.push(xr(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ls(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var p=n,f=p.alternate,w=p.stateNode;if(f!==null&&f===r)break;p.tag===5&&w!==null&&(p=w,i?(f=Zn(n,o),f!=null&&s.unshift(xr(n,f,p))):i||(f=Zn(n,o),f!=null&&s.push(xr(n,f,p)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var gp=/\r\n?/g,vp=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(gp,`
`).replace(vp,"")}function si(e,t,n){if(t=Os(t),Os(e)!==t&&n)throw Error(c(425))}function ci(){}var Wl=null,Vl=null;function Bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,Is=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Is<"u"?function(e){return Is.resolve(null).then(e).catch(wp)}:ql;function wp(e){setTimeout(function(){throw e})}function Hl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),St="__reactFiber$"+Pn,yr="__reactProps$"+Pn,zt="__reactContainer$"+Pn,$l="__reactEvents$"+Pn,kp="__reactListeners$"+Pn,jp="__reactHandles$"+Pn;function sn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ds(e);e!==null;){if(n=e[St])return n;e=Ds(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[St]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function ui(e){return e[yr]||null}var Gl=[],Tn=-1;function $t(e){return{current:e}}function me(e){0>Tn||(e.current=Gl[Tn],Gl[Tn]=null,Tn--)}function fe(e,t){Tn++,Gl[Tn]=e.current,e.current=t}var Gt={},Ae=$t(Gt),He=$t(!1),cn=Gt;function _n(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function di(){me(He),me(Ae)}function As(e,t,n){if(Ae.current!==Gt)throw Error(c(168));fe(Ae,t),fe(He,n)}function Fs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(c(108,pe(e)||"Unknown",i));return A({},n,r)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,cn=Ae.current,fe(Ae,e),fe(He,He.current),!0}function Us(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=Fs(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,me(He),me(Ae),fe(Ae,e)):me(He),fe(He,n)}var Pt=null,fi=!1,Ql=!1;function Ws(e){Pt===null?Pt=[e]:Pt.push(e)}function Sp(e){fi=!0,Ws(e)}function Qt(){if(!Ql&&Pt!==null){Ql=!0;var e=0,t=se;try{var n=Pt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,fi=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),Ba(gl,Qt),i}finally{se=t,Ql=!1}}return null}var Mn=[],Ln=0,hi=null,mi=0,it=[],lt=0,un=null,Rt=1,Tt="";function dn(e,t){Mn[Ln++]=mi,Mn[Ln++]=hi,hi=e,mi=t}function Vs(e,t,n){it[lt++]=Rt,it[lt++]=Tt,it[lt++]=un,un=e;var r=Rt;e=Tt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Rt=1<<32-dt(t)+i|n<<i|r,Tt=o+e}else Rt=1<<o|n<<i|r,Tt=e}function Kl(e){e.return!==null&&(dn(e,1),Vs(e,1,0))}function Yl(e){for(;e===hi;)hi=Mn[--Ln],Mn[Ln]=null,mi=Mn[--Ln],Mn[Ln]=null;for(;e===un;)un=it[--lt],it[lt]=null,Tt=it[--lt],it[lt]=null,Rt=it[--lt],it[lt]=null}var tt=null,nt=null,ve=!1,ft=null;function Bs(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,nt=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:Rt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,nt=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jl(e){if(ve){var t=nt;if(t){var n=t;if(!qs(e,t)){if(Xl(e))throw Error(c(418));t=Ht(n.nextSibling);var r=tt;t&&qs(e,t)?Bs(r,n):(e.flags=e.flags&-4097|2,ve=!1,tt=e)}}else{if(Xl(e))throw Error(c(418));e.flags=e.flags&-4097|2,ve=!1,tt=e}}}function Hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function gi(e){if(e!==tt)return!1;if(!ve)return Hs(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bl(e.type,e.memoizedProps)),t&&(t=nt)){if(Xl(e))throw $s(),Error(c(418));for(;t;)Bs(e,t),t=Ht(t.nextSibling)}if(Hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=tt?Ht(e.stateNode.nextSibling):null;return!0}function $s(){for(var e=nt;e;)e=Ht(e.nextSibling)}function On(){nt=tt=null,ve=!1}function Zl(e){ft===null?ft=[e]:ft.push(e)}var Ep=J.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var p=i.refs;s===null?delete p[o]:p[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Qs(e){function t(x,m){if(e){var y=x.deletions;y===null?(x.deletions=[m],x.flags|=16):y.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=nn(x,m),x.index=0,x.sibling=null,x}function o(x,m,y){return x.index=y,e?(y=x.alternate,y!==null?(y=y.index,y<m?(x.flags|=2,m):y):(x.flags|=2,m)):(x.flags|=1048576,m)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,m,y,T){return m===null||m.tag!==6?(m=Ho(y,x.mode,T),m.return=x,m):(m=i(m,y),m.return=x,m)}function f(x,m,y,T){var V=y.type;return V===Ce?z(x,m,y.props.children,T,y.key):m!==null&&(m.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===qe&&Gs(V)===m.type)?(T=i(m,y.props),T.ref=kr(x,m,y),T.return=x,T):(T=Wi(y.type,y.key,y.props,null,x.mode,T),T.ref=kr(x,m,y),T.return=x,T)}function w(x,m,y,T){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=$o(y,x.mode,T),m.return=x,m):(m=i(m,y.children||[]),m.return=x,m)}function z(x,m,y,T,V){return m===null||m.tag!==7?(m=yn(y,x.mode,T,V),m.return=x,m):(m=i(m,y),m.return=x,m)}function R(x,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ho(""+m,x.mode,y),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xe:return y=Wi(m.type,m.key,m.props,null,x.mode,y),y.ref=kr(x,null,m),y.return=x,y;case de:return m=$o(m,x.mode,y),m.return=x,m;case qe:var T=m._init;return R(x,T(m._payload),y)}if(Yn(m)||$(m))return m=yn(m,x.mode,y,null),m.return=x,m;vi(x,m)}return null}function C(x,m,y,T){var V=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return V!==null?null:p(x,m,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xe:return y.key===V?f(x,m,y,T):null;case de:return y.key===V?w(x,m,y,T):null;case qe:return V=y._init,C(x,m,V(y._payload),T)}if(Yn(y)||$(y))return V!==null?null:z(x,m,y,T,null);vi(x,y)}return null}function I(x,m,y,T,V){if(typeof T=="string"&&T!==""||typeof T=="number")return x=x.get(y)||null,p(m,x,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case xe:return x=x.get(T.key===null?y:T.key)||null,f(m,x,T,V);case de:return x=x.get(T.key===null?y:T.key)||null,w(m,x,T,V);case qe:var q=T._init;return I(x,m,y,q(T._payload),V)}if(Yn(T)||$(T))return x=x.get(y)||null,z(m,x,T,V,null);vi(m,T)}return null}function F(x,m,y,T){for(var V=null,q=null,H=m,G=m=0,Le=null;H!==null&&G<y.length;G++){H.index>G?(Le=H,H=null):Le=H.sibling;var oe=C(x,H,y[G],T);if(oe===null){H===null&&(H=Le);break}e&&H&&oe.alternate===null&&t(x,H),m=o(oe,m,G),q===null?V=oe:q.sibling=oe,q=oe,H=Le}if(G===y.length)return n(x,H),ve&&dn(x,G),V;if(H===null){for(;G<y.length;G++)H=R(x,y[G],T),H!==null&&(m=o(H,m,G),q===null?V=H:q.sibling=H,q=H);return ve&&dn(x,G),V}for(H=r(x,H);G<y.length;G++)Le=I(H,x,G,y[G],T),Le!==null&&(e&&Le.alternate!==null&&H.delete(Le.key===null?G:Le.key),m=o(Le,m,G),q===null?V=Le:q.sibling=Le,q=Le);return e&&H.forEach(function(rn){return t(x,rn)}),ve&&dn(x,G),V}function W(x,m,y,T){var V=$(y);if(typeof V!="function")throw Error(c(150));if(y=V.call(y),y==null)throw Error(c(151));for(var q=V=null,H=m,G=m=0,Le=null,oe=y.next();H!==null&&!oe.done;G++,oe=y.next()){H.index>G?(Le=H,H=null):Le=H.sibling;var rn=C(x,H,oe.value,T);if(rn===null){H===null&&(H=Le);break}e&&H&&rn.alternate===null&&t(x,H),m=o(rn,m,G),q===null?V=rn:q.sibling=rn,q=rn,H=Le}if(oe.done)return n(x,H),ve&&dn(x,G),V;if(H===null){for(;!oe.done;G++,oe=y.next())oe=R(x,oe.value,T),oe!==null&&(m=o(oe,m,G),q===null?V=oe:q.sibling=oe,q=oe);return ve&&dn(x,G),V}for(H=r(x,H);!oe.done;G++,oe=y.next())oe=I(H,x,G,oe.value,T),oe!==null&&(e&&oe.alternate!==null&&H.delete(oe.key===null?G:oe.key),m=o(oe,m,G),q===null?V=oe:q.sibling=oe,q=oe);return e&&H.forEach(function(rf){return t(x,rf)}),ve&&dn(x,G),V}function Ne(x,m,y,T){if(typeof y=="object"&&y!==null&&y.type===Ce&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case xe:e:{for(var V=y.key,q=m;q!==null;){if(q.key===V){if(V=y.type,V===Ce){if(q.tag===7){n(x,q.sibling),m=i(q,y.props.children),m.return=x,x=m;break e}}else if(q.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===qe&&Gs(V)===q.type){n(x,q.sibling),m=i(q,y.props),m.ref=kr(x,q,y),m.return=x,x=m;break e}n(x,q);break}else t(x,q);q=q.sibling}y.type===Ce?(m=yn(y.props.children,x.mode,T,y.key),m.return=x,x=m):(T=Wi(y.type,y.key,y.props,null,x.mode,T),T.ref=kr(x,m,y),T.return=x,x=T)}return s(x);case de:e:{for(q=y.key;m!==null;){if(m.key===q)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(x,m.sibling),m=i(m,y.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=$o(y,x.mode,T),m.return=x,x=m}return s(x);case qe:return q=y._init,Ne(x,m,q(y._payload),T)}if(Yn(y))return F(x,m,y,T);if($(y))return W(x,m,y,T);vi(x,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,y),m.return=x,x=m):(n(x,m),m=Ho(y,x.mode,T),m.return=x,x=m),s(x)):n(x,m)}return Ne}var In=Qs(!0),Ks=Qs(!1),xi=$t(null),yi=null,Dn=null,eo=null;function to(){eo=Dn=yi=null}function no(e){var t=xi.current;me(xi),e._currentValue=t}function ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){yi=e,eo=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(eo!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(yi===null)throw Error(c(308));Dn=e,yi.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var pn=null;function io(e){pn===null?pn=[e]:pn.push(e)}function Ys(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,io(t)):(n.next=i.next,i.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(re&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_t(e,n)}return i=r.interleaved,i===null?(t.next=t,io(r)):(t.next=i.next,i.next=t),r.interleaved=t,_t(e,n)}function wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}function Js(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ki(e,t,n,r){var i=e.updateQueue;Kt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,w=f.next;f.next=null,s===null?o=w:s.next=w,s=f;var z=e.alternate;z!==null&&(z=z.updateQueue,p=z.lastBaseUpdate,p!==s&&(p===null?z.firstBaseUpdate=w:p.next=w,z.lastBaseUpdate=f))}if(o!==null){var R=i.baseState;s=0,z=w=f=null,p=o;do{var C=p.lane,I=p.eventTime;if((r&C)===C){z!==null&&(z=z.next={eventTime:I,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var F=e,W=p;switch(C=t,I=n,W.tag){case 1:if(F=W.payload,typeof F=="function"){R=F.call(I,R,C);break e}R=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=W.payload,C=typeof F=="function"?F.call(I,R,C):F,C==null)break e;R=A({},R,C);break e;case 2:Kt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,C=i.effects,C===null?i.effects=[p]:C.push(p))}else I={eventTime:I,lane:C,tag:p.tag,payload:p.payload,callback:p.callback,next:null},z===null?(w=z=I,f=R):z=z.next=I,s|=C;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;C=p,p=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);if(z===null&&(f=R),i.baseState=f,i.firstBaseUpdate=w,i.lastBaseUpdate=z,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mn|=s,e.lanes=s,e.memoizedState=R}}function Zs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(c(191,i));i.call(r)}}}var jr={},Et=$t(jr),Sr=$t(jr),Er=$t(jr);function fn(e){if(e===jr)throw Error(c(174));return e}function oo(e,t){switch(fe(Er,t),fe(Sr,e),fe(Et,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=al(t,e)}me(Et),fe(Et,t)}function Fn(){me(Et),me(Sr),me(Er)}function ec(e){fn(Er.current);var t=fn(Et.current),n=al(t,e.type);t!==n&&(fe(Sr,e),fe(Et,n))}function ao(e){Sr.current===e&&(me(Et),me(Sr))}var ye=$t(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=[];function co(){for(var e=0;e<so.length;e++)so[e]._workInProgressVersionPrimary=null;so.length=0}var Si=J.ReactCurrentDispatcher,uo=J.ReactCurrentBatchConfig,hn=0,we=null,Pe=null,_e=null,Ei=!1,Nr=!1,Cr=0,Np=0;function Fe(){throw Error(c(321))}function po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function fo(e,t,n,r,i,o){if(hn=o,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Si.current=e===null||e.memoizedState===null?Pp:Rp,e=n(r,i),Nr){o=0;do{if(Nr=!1,Cr=0,25<=o)throw Error(c(301));o+=1,_e=Pe=null,t.updateQueue=null,Si.current=Tp,e=n(r,i)}while(Nr)}if(Si.current=bi,t=Pe!==null&&Pe.next!==null,hn=0,_e=Pe=we=null,Ei=!1,t)throw Error(c(300));return e}function ho(){var e=Cr!==0;return Cr=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?we.memoizedState=_e=e:_e=_e.next=e,_e}function at(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=_e===null?we.memoizedState:_e.next;if(t!==null)_e=t,Pe=e;else{if(e===null)throw Error(c(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},_e===null?we.memoizedState=_e=e:_e=_e.next=e}return _e}function br(e,t){return typeof t=="function"?t(e):t}function mo(e){var t=at(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var p=s=null,f=null,w=o;do{var z=w.lane;if((hn&z)===z)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var R={lane:z,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(p=f=R,s=r):f=f.next=R,we.lanes|=z,mn|=z}w=w.next}while(w!==null&&w!==o);f===null?s=r:f.next=p,pt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,we.lanes|=o,mn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function go(e){var t=at(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);pt(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function tc(){}function nc(e,t){var n=we,r=at(),i=t(),o=!pt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,vo(lc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,zr(9,ic.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(c(349));(hn&30)!==0||rc(n,t,i)}return i}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ic(e,t,n,r){t.value=n,t.getSnapshot=r,oc(t)&&ac(e)}function lc(e,t,n){return n(function(){oc(t)&&ac(e)})}function oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function ac(e){var t=_t(e,1);t!==null&&vt(t,e,1,-1)}function sc(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=zp.bind(null,we,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cc(){return at().memoizedState}function Ni(e,t,n,r){var i=Nt();we.flags|=e,i.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function Ci(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(Pe!==null){var s=Pe.memoizedState;if(o=s.destroy,r!==null&&po(r,s.deps)){i.memoizedState=zr(t,n,o,r);return}}we.flags|=e,i.memoizedState=zr(1|t,n,o,r)}function uc(e,t){return Ni(8390656,8,e,t)}function vo(e,t){return Ci(2048,8,e,t)}function dc(e,t){return Ci(4,2,e,t)}function pc(e,t){return Ci(4,4,e,t)}function fc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hc(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4,4,fc.bind(null,t,e),n)}function xo(){}function mc(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gc(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&po(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vc(e,t,n){return(hn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(pt(n,t)||(n=Ga(),we.lanes|=n,mn|=n,e.baseState=!0),t)}function Cp(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=uo.transition;uo.transition={};try{e(!1),t()}finally{se=n,uo.transition=r}}function xc(){return at().memoizedState}function bp(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yc(e))wc(t,n);else if(n=Ys(e,t,n,r),n!==null){var i=Be();vt(n,e,r,i),kc(n,t,r)}}function zp(e,t,n){var r=en(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(e))wc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,p=o(s,n);if(i.hasEagerState=!0,i.eagerState=p,pt(p,s)){var f=t.interleaved;f===null?(i.next=i,io(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}n=Ys(e,t,i,r),n!==null&&(i=Be(),vt(n,e,r,i),kc(n,t,r))}}function yc(e){var t=e.alternate;return e===we||t!==null&&t===we}function wc(e,t){Nr=Ei=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}var bi={readContext:ot,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Pp={readContext:ot,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,fc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bp.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:sc,useDebugValue:xo,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=sc(!1),t=e[0];return e=Cp.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=Nt();if(ve){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Me===null)throw Error(c(349));(hn&30)!==0||rc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,uc(lc.bind(null,r,o,e),[e]),r.flags|=2048,zr(9,ic.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Me.identifierPrefix;if(ve){var n=Tt,r=Rt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Np++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rp={readContext:ot,useCallback:mc,useContext:ot,useEffect:vo,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:gc,useReducer:mo,useRef:cc,useState:function(){return mo(br)},useDebugValue:xo,useDeferredValue:function(e){var t=at();return vc(t,Pe.memoizedState,e)},useTransition:function(){var e=mo(br)[0],t=at().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:xc,unstable_isNewReconciler:!1},Tp={readContext:ot,useCallback:mc,useContext:ot,useEffect:vo,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:gc,useReducer:go,useRef:cc,useState:function(){return go(br)},useDebugValue:xo,useDeferredValue:function(e){var t=at();return Pe===null?t.memoizedState=e:vc(t,Pe.memoizedState,e)},useTransition:function(){var e=go(br)[0],t=at().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:xc,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=en(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(vt(t,e,i,r),wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=en(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Yt(e,o,i),t!==null&&(vt(t,e,i,r),wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=en(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(vt(t,e,r,n),wi(t,e,r))}};function jc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(i,o):!0}function Sc(e,t,n){var r=!1,i=Gt,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=$e(t)?cn:Ae.current,r=t.contextTypes,o=(r=r!=null)?_n(e,i):Gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ec(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zi.enqueueReplaceState(t,t.state,null)}function wo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lo(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=$e(t)?cn:Ae.current,i.context=_n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(yo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zi.enqueueReplaceState(i,i.state,null),ki(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=ie(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ko(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function Nc(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Do=r),jo(e,t)},n}function Cc(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jo(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function bc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$p.bind(null,e,t,n),t.then(e,e))}function zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Mp=J.ReactCurrentOwner,Ge=!1;function Ve(e,t,n,r){t.child=e===null?Ks(t,null,n,r):In(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var o=t.ref;return An(t,i),r=fo(e,t,n,r,o,i),n=ho(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(ve&&n&&Kl(t),t.flags|=1,Ve(e,t,r,i),t.child)}function Tc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!qo(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_c(e,t,o,r,i)):(e=Wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:hr,n(s,r)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=nn(o,r),e.ref=t.ref,e.return=t,t.child=e}function _c(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(hr(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return So(e,t,n,r,i)}function Mc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Vn,rt),rt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(Vn,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,fe(Vn,rt),rt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,fe(Vn,rt),rt|=r;return Ve(e,t,i,n),t.child}function Lc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function So(e,t,n,r,i){var o=$e(n)?cn:Ae.current;return o=_n(t,o),An(t,i),n=fo(e,t,n,r,o,i),r=ho(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(ve&&r&&Kl(t),t.flags|=1,Ve(e,t,n,i),t.child)}function Oc(e,t,n,r,i){if($e(n)){var o=!0;pi(t)}else o=!1;if(An(t,i),t.stateNode===null)Ri(e,t),Sc(t,n,r),wo(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,p=t.memoizedProps;s.props=p;var f=s.context,w=n.contextType;typeof w=="object"&&w!==null?w=ot(w):(w=$e(n)?cn:Ae.current,w=_n(t,w));var z=n.getDerivedStateFromProps,R=typeof z=="function"||typeof s.getSnapshotBeforeUpdate=="function";R||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==r||f!==w)&&Ec(t,s,r,w),Kt=!1;var C=t.memoizedState;s.state=C,ki(t,r,s,i),f=t.memoizedState,p!==r||C!==f||He.current||Kt?(typeof z=="function"&&(yo(t,n,z,r),f=t.memoizedState),(p=Kt||jc(t,n,p,r,C,f,w))?(R||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),s.props=r,s.state=f,s.context=w,r=p):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Xs(e,t),p=t.memoizedProps,w=t.type===t.elementType?p:ht(t.type,p),s.props=w,R=t.pendingProps,C=s.context,f=n.contextType,typeof f=="object"&&f!==null?f=ot(f):(f=$e(n)?cn:Ae.current,f=_n(t,f));var I=n.getDerivedStateFromProps;(z=typeof I=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==R||C!==f)&&Ec(t,s,r,f),Kt=!1,C=t.memoizedState,s.state=C,ki(t,r,s,i);var F=t.memoizedState;p!==R||C!==F||He.current||Kt?(typeof I=="function"&&(yo(t,n,I,r),F=t.memoizedState),(w=Kt||jc(t,n,w,r,C,F,f)||!1)?(z||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,F,f),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,F,f)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=F),s.props=r,s.state=F,s.context=f,r=w):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Eo(e,t,n,r,o,i)}function Eo(e,t,n,r,i,o){Lc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Us(t,n,!1),Lt(e,t,o);r=t.stateNode,Mp.current=t;var p=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=In(t,e.child,null,o),t.child=In(t,null,p,o)):Ve(e,t,p,o),t.memoizedState=r.state,i&&Us(t,n,!0),t.child}function Ic(e){var t=e.stateNode;t.pendingContext?As(e,t.pendingContext,t.pendingContext!==t.context):t.context&&As(e,t.context,!1),oo(e,t.containerInfo)}function Dc(e,t,n,r,i){return On(),Zl(i),t.flags|=256,Ve(e,t,n,r),t.child}var No={dehydrated:null,treeContext:null,retryLane:0};function Co(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,t,n){var r=t.pendingProps,i=ye.current,o=!1,s=(t.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(ye,i&1),e===null)return Jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Vi(s,r,0,null),e=yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Co(n),t.memoizedState=No,e):bo(t,s));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Lp(e,t,s,r,p,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=nn(i,f),r.subtreeFlags=i.subtreeFlags&14680064),p!==null?o=nn(p,o):(o=yn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Co(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=No,r}return o=e.child,e=o.sibling,r=nn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bo(e,t){return t=Vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&Zl(r),In(t,e.child,null,n),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lp(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ko(Error(c(422))),Pi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Vi({mode:"visible",children:r.children},i,0,null),o=yn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&In(t,e.child,null,s),t.child.memoizedState=Co(s),t.memoizedState=No,o);if((t.mode&1)===0)return Pi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var p=r.dgst;return r=p,o=Error(c(419)),r=ko(o,r,void 0),Pi(e,t,s,r)}if(p=(s&e.childLanes)!==0,Ge||p){if(r=Me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_t(e,i),vt(r,e,i,-1))}return Bo(),r=ko(Error(c(421))),Pi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Gp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nt=Ht(i.nextSibling),tt=t,ve=!0,ft=null,e!==null&&(it[lt++]=Rt,it[lt++]=Tt,it[lt++]=un,Rt=e.id,Tt=e.overflow,un=t),t=bo(t,r.children),t.flags|=4096,t)}function Fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ro(e.return,t,n)}function zo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,n,t);else if(e.tag===19)Fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ji(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zo(t,!0,n,null,o);break;case"together":zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ri(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Op(e,t,n){switch(t.tag){case 3:Ic(t),On();break;case 5:ec(t);break;case 1:$e(t.type)&&pi(t);break;case 4:oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;fe(xi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ac(e,t,n):(fe(ye,ye.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);fe(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Uc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,Mc(e,t,n)}return Lt(e,t,n)}var Wc,Po,Vc,Bc;Wc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Po=function(){},Vc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(Et.current);var o=null;switch(n){case"input":i=rl(e,i),r=rl(e,r),o=[];break;case"select":i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),o=[];break;case"textarea":i=ol(e,i),r=ol(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ci)}sl(n,r);var s;n=null;for(w in i)if(!r.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var p=i[w];for(s in p)p.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(h.hasOwnProperty(w)?o||(o=[]):(o=o||[]).push(w,null));for(w in r){var f=r[w];if(p=i!=null?i[w]:void 0,r.hasOwnProperty(w)&&f!==p&&(f!=null||p!=null))if(w==="style")if(p){for(s in p)!p.hasOwnProperty(s)||f&&f.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in f)f.hasOwnProperty(s)&&p[s]!==f[s]&&(n||(n={}),n[s]=f[s])}else n||(o||(o=[]),o.push(w,n)),n=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(o=o||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(h.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&he("scroll",e),o||p===f||(o=[])):(o=o||[]).push(w,f))}n&&(o=o||[]).push("style",n);var w=o;(t.updateQueue=w)&&(t.flags|=4)}},Bc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ip(e,t,n){var r=t.pendingProps;switch(Yl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return $e(t.type)&&di(),Ue(t),null;case 3:return r=t.stateNode,Fn(),me(He),me(Ae),co(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Uo(ft),ft=null))),Po(e,t),Ue(t),null;case 5:ao(t);var i=fn(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)Vc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}if(e=fn(Et.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[yr]=o,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)he(gr[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Sa(r,o),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},he("invalid",r);break;case"textarea":Ca(r,o),he("invalid",r)}sl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var p=o[s];s==="children"?typeof p=="string"?r.textContent!==p&&(o.suppressHydrationWarning!==!0&&si(r.textContent,p,e),i=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(o.suppressHydrationWarning!==!0&&si(r.textContent,p,e),i=["children",""+p]):h.hasOwnProperty(s)&&p!=null&&s==="onScroll"&&he("scroll",r)}switch(n){case"input":Fr(r),Na(r,o,!0);break;case"textarea":Fr(r),za(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ci)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[yr]=r,Wc(e,t,!1,!1),t.stateNode=e;e:{switch(s=cl(n,r),n){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)he(gr[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":Sa(e,r),i=rl(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=A({},r,{value:void 0}),he("invalid",e);break;case"textarea":Ca(e,r),i=ol(e,r),he("invalid",e);break;default:i=r}sl(n,i),p=i;for(o in p)if(p.hasOwnProperty(o)){var f=p[o];o==="style"?_a(e,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Ra(e,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Xn(e,f):typeof f=="number"&&Xn(e,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(h.hasOwnProperty(o)?f!=null&&o==="onScroll"&&he("scroll",e):f!=null&&X(e,o,f,s))}switch(n){case"input":Fr(e),Na(e,r,!1);break;case"textarea":Fr(e),za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ae(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Bc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=fn(Er.current),fn(Et.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:si(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&si(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ue(t),null;case 13:if(me(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$s(),On(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[St]=t}else On(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else ft!==null&&(Uo(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?Re===0&&(Re=3):Bo())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Fn(),Po(e,t),e===null&&vr(t.stateNode.containerInfo),Ue(t),null;case 10:return no(t.type._context),Ue(t),null;case 17:return $e(t.type)&&di(),Ue(t),null;case 19:if(me(ye),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Pr(o,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ji(e),s!==null){for(t.flags|=128,Pr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(ye,ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Bn&&(t.flags|=128,r=!0,Pr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ji(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return Ue(t),null}else 2*Ee()-o.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,Pr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=ye.current,fe(ye,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Vo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(rt&1073741824)!==0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Dp(e,t){switch(Yl(t),t.tag){case 1:return $e(t.type)&&di(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),me(He),me(Ae),co(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ao(t),null;case 13:if(me(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ye),null;case 4:return Fn(),null;case 10:return no(t.type._context),null;case 22:case 23:return Vo(),null;case 24:return null;default:return null}}var Ti=!1,We=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,D=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Ro(e,t,n){try{n()}catch(r){Se(e,t,r)}}var qc=!1;function Fp(e,t){if(Wl=Xr,e=js(),Ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,p=-1,f=-1,w=0,z=0,R=e,C=null;t:for(;;){for(var I;R!==n||i!==0&&R.nodeType!==3||(p=s+i),R!==o||r!==0&&R.nodeType!==3||(f=s+r),R.nodeType===3&&(s+=R.nodeValue.length),(I=R.firstChild)!==null;)C=R,R=I;for(;;){if(R===e)break t;if(C===n&&++w===i&&(p=s),C===o&&++z===r&&(f=s),(I=R.nextSibling)!==null)break;R=C,C=R.parentNode}R=I}n=p===-1||f===-1?null:{start:p,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vl={focusedElem:e,selectionRange:n},Xr=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var F=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(F!==null){var W=F.memoizedProps,Ne=F.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?W:ht(t.type,W),Ne);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(T){Se(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return F=qc,qc=!1,F}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ro(t,n,o)}i=i.next}while(i!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function To(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[yr],delete t[$l],delete t[kp],delete t[jp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $c(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ci));else if(r!==4&&(e=e.child,e!==null))for(_o(e,t,n),e=e.sibling;e!==null;)_o(e,t,n),e=e.sibling}function Mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}var Oe=null,mt=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Qc(e,t,n),n=n.sibling}function Qc(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Hr,n)}catch{}switch(n.tag){case 5:We||Wn(n,t);case 6:var r=Oe,i=mt;Oe=null,Xt(e,t,n),Oe=r,mt=i,Oe!==null&&(mt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(mt?(e=Oe,n=n.stateNode,e.nodeType===8?Hl(e.parentNode,n):e.nodeType===1&&Hl(e,n),sr(e)):Hl(Oe,n.stateNode));break;case 4:r=Oe,i=mt,Oe=n.stateNode.containerInfo,mt=!0,Xt(e,t,n),Oe=r,mt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Ro(n,t,s),i=i.next}while(i!==r)}Xt(e,t,n);break;case 1:if(!We&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Se(n,t,p)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Xt(e,t,n),We=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function Kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ap),t.forEach(function(r){var i=Qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,p=s;e:for(;p!==null;){switch(p.tag){case 5:Oe=p.stateNode,mt=!1;break e;case 3:Oe=p.stateNode.containerInfo,mt=!0;break e;case 4:Oe=p.stateNode.containerInfo,mt=!0;break e}p=p.return}if(Oe===null)throw Error(c(160));Qc(o,s,i),Oe=null,mt=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(w){Se(i,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yc(t,e),t=t.sibling}function Yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Ct(e),r&4){try{Rr(3,e,e.return),_i(3,e)}catch(W){Se(e,e.return,W)}try{Rr(5,e,e.return)}catch(W){Se(e,e.return,W)}}break;case 1:gt(t,e),Ct(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(gt(t,e),Ct(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var i=e.stateNode;try{Xn(i,"")}catch(W){Se(e,e.return,W)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&o.type==="radio"&&o.name!=null&&Ea(i,o),cl(p,s);var w=cl(p,o);for(s=0;s<f.length;s+=2){var z=f[s],R=f[s+1];z==="style"?_a(i,R):z==="dangerouslySetInnerHTML"?Ra(i,R):z==="children"?Xn(i,R):X(i,z,R,w)}switch(p){case"input":il(i,o);break;case"textarea":ba(i,o);break;case"select":var C=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var I=o.value;I!=null?wn(i,!!o.multiple,I,!1):C!==!!o.multiple&&(o.defaultValue!=null?wn(i,!!o.multiple,o.defaultValue,!0):wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[yr]=o}catch(W){Se(e,e.return,W)}}break;case 6:if(gt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(W){Se(e,e.return,W)}}break;case 3:if(gt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(W){Se(e,e.return,W)}break;case 4:gt(t,e),Ct(e);break;case 13:gt(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Io=Ee())),r&4&&Kc(e);break;case 22:if(z=n!==null&&n.memoizedState!==null,e.mode&1?(We=(w=We)||z,gt(t,e),We=w):gt(t,e),Ct(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!z&&(e.mode&1)!==0)for(D=e,z=e.child;z!==null;){for(R=D=z;D!==null;){switch(C=D,I=C.child,C.tag){case 0:case 11:case 14:case 15:Rr(4,C,C.return);break;case 1:Wn(C,C.return);var F=C.stateNode;if(typeof F.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,F.props=t.memoizedProps,F.state=t.memoizedState,F.componentWillUnmount()}catch(W){Se(r,n,W)}}break;case 5:Wn(C,C.return);break;case 22:if(C.memoizedState!==null){Zc(R);continue}}I!==null?(I.return=C,D=I):Zc(R)}z=z.sibling}e:for(z=null,R=e;;){if(R.tag===5){if(z===null){z=R;try{i=R.stateNode,w?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(p=R.stateNode,f=R.memoizedProps.style,s=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=Ta("display",s))}catch(W){Se(e,e.return,W)}}}else if(R.tag===6){if(z===null)try{R.stateNode.nodeValue=w?"":R.memoizedProps}catch(W){Se(e,e.return,W)}}else if((R.tag!==22&&R.tag!==23||R.memoizedState===null||R===e)&&R.child!==null){R.child.return=R,R=R.child;continue}if(R===e)break e;for(;R.sibling===null;){if(R.return===null||R.return===e)break e;z===R&&(z=null),R=R.return}z===R&&(z=null),R.sibling.return=R.return,R=R.sibling}}break;case 19:gt(t,e),Ct(e),r&4&&Kc(e);break;case 21:break;default:gt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($c(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xn(i,""),r.flags&=-33);var o=Gc(e);Mo(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,p=Gc(e);_o(e,p,s);break;default:throw Error(c(161))}}catch(f){Se(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Up(e,t,n){D=e,Xc(e)}function Xc(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ti;if(!s){var p=i.alternate,f=p!==null&&p.memoizedState!==null||We;p=Ti;var w=We;if(Ti=s,(We=f)&&!w)for(D=i;D!==null;)s=D,f=s.child,s.tag===22&&s.memoizedState!==null?eu(i):f!==null?(f.return=s,D=f):eu(i);for(;o!==null;)D=o,Xc(o),o=o.sibling;D=i,Ti=p,We=w}Jc(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,D=o):Jc(e)}}function Jc(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:We||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zs(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zs(t,s,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var z=w.memoizedState;if(z!==null){var R=z.dehydrated;R!==null&&sr(R)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}We||t.flags&512&&To(t)}catch(C){Se(t,t.return,C)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Zc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function eu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(f){Se(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(f){Se(t,i,f)}}var o=t.return;try{To(t)}catch(f){Se(t,o,f)}break;case 5:var s=t.return;try{To(t)}catch(f){Se(t,s,f)}}}catch(f){Se(t,t.return,f)}if(t===e){D=null;break}var p=t.sibling;if(p!==null){p.return=t.return,D=p;break}D=t.return}}var Wp=Math.ceil,Mi=J.ReactCurrentDispatcher,Lo=J.ReactCurrentOwner,st=J.ReactCurrentBatchConfig,re=0,Me=null,be=null,Ie=0,rt=0,Vn=$t(0),Re=0,Tr=null,mn=0,Li=0,Oo=0,_r=null,Qe=null,Io=0,Bn=1/0,Ot=null,Oi=!1,Do=null,Jt=null,Ii=!1,Zt=null,Di=0,Mr=0,Ao=null,Ai=-1,Fi=0;function Be(){return(re&6)!==0?Ee():Ai!==-1?Ai:Ai=Ee()}function en(e){return(e.mode&1)===0?1:(re&2)!==0&&Ie!==0?Ie&-Ie:Ep.transition!==null?(Fi===0&&(Fi=Ga()),Fi):(e=se,e!==0||(e=window.event,e=e===void 0?16:ns(e.type)),e)}function vt(e,t,n,r){if(50<Mr)throw Mr=0,Ao=null,Error(c(185));rr(e,n,r),((re&2)===0||e!==Me)&&(e===Me&&((re&2)===0&&(Li|=n),Re===4&&tn(e,Ie)),Ke(e,r),n===1&&re===0&&(t.mode&1)===0&&(Bn=Ee()+500,fi&&Qt()))}function Ke(e,t){var n=e.callbackNode;Ed(e,t);var r=Qr(e,e===Me?Ie:0);if(r===0)n!==null&&qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qa(n),t===1)e.tag===0?Sp(nu.bind(null,e)):Ws(nu.bind(null,e)),yp(function(){(re&6)===0&&Qt()}),n=null;else{switch(Qa(r)){case 1:n=gl;break;case 4:n=Ha;break;case 16:n=qr;break;case 536870912:n=$a;break;default:n=qr}n=uu(n,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tu(e,t){if(Ai=-1,Fi=0,(re&6)!==0)throw Error(c(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=Qr(e,e===Me?Ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ui(e,r);else{t=r;var i=re;re|=2;var o=iu();(Me!==e||Ie!==t)&&(Ot=null,Bn=Ee()+500,vn(e,t));do try{qp();break}catch(p){ru(e,p)}while(!0);to(),Mi.current=o,re=i,be!==null?t=0:(Me=null,Ie=0,t=Re)}if(t!==0){if(t===2&&(i=vl(e),i!==0&&(r=i,t=Fo(e,i))),t===1)throw n=Tr,vn(e,0),tn(e,r),Ke(e,Ee()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Vp(i)&&(t=Ui(e,r),t===2&&(o=vl(e),o!==0&&(r=o,t=Fo(e,o))),t===1))throw n=Tr,vn(e,0),tn(e,r),Ke(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:xn(e,Qe,Ot);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Io+500-Ee(),10<t)){if(Qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ql(xn.bind(null,e,Qe,Ot),t);break}xn(e,Qe,Ot);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-dt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wp(r/1960))-r,10<r){e.timeoutHandle=ql(xn.bind(null,e,Qe,Ot),r);break}xn(e,Qe,Ot);break;case 5:xn(e,Qe,Ot);break;default:throw Error(c(329))}}}return Ke(e,Ee()),e.callbackNode===n?tu.bind(null,e):null}function Fo(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(vn(e,t).flags|=256),e=Ui(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Uo(t)),e}function Uo(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Oo,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function nu(e){if((re&6)!==0)throw Error(c(327));qn();var t=Qr(e,0);if((t&1)===0)return Ke(e,Ee()),null;var n=Ui(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=Fo(e,r))}if(n===1)throw n=Tr,vn(e,0),tn(e,t),Ke(e,Ee()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Qe,Ot),Ke(e,Ee()),null}function Wo(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Bn=Ee()+500,fi&&Qt())}}function gn(e){Zt!==null&&Zt.tag===0&&(re&6)===0&&qn();var t=re;re|=1;var n=st.transition,r=se;try{if(st.transition=null,se=1,e)return e()}finally{se=r,st.transition=n,re=t,(re&6)===0&&Qt()}}function Vo(){rt=Vn.current,me(Vn)}function vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xp(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Yl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&di();break;case 3:Fn(),me(He),me(Ae),co();break;case 5:ao(r);break;case 4:Fn();break;case 13:me(ye);break;case 19:me(ye);break;case 10:no(r.type._context);break;case 22:case 23:Vo()}n=n.return}if(Me=e,be=e=nn(e.current,null),Ie=rt=t,Re=0,Tr=null,Oo=Li=mn=0,Qe=_r=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}pn=null}return e}function ru(e,t){do{var n=be;try{if(to(),Si.current=bi,Ei){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ei=!1}if(hn=0,_e=Pe=we=null,Nr=!1,Cr=0,Lo.current=null,n===null||n.return===null){Re=1,Tr=t,be=null;break}e:{var o=e,s=n.return,p=n,f=t;if(t=Ie,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,z=p,R=z.tag;if((z.mode&1)===0&&(R===0||R===11||R===15)){var C=z.alternate;C?(z.updateQueue=C.updateQueue,z.memoizedState=C.memoizedState,z.lanes=C.lanes):(z.updateQueue=null,z.memoizedState=null)}var I=zc(s);if(I!==null){I.flags&=-257,Pc(I,s,p,o,t),I.mode&1&&bc(o,w,t),t=I,f=w;var F=t.updateQueue;if(F===null){var W=new Set;W.add(f),t.updateQueue=W}else F.add(f);break e}else{if((t&1)===0){bc(o,w,t),Bo();break e}f=Error(c(426))}}else if(ve&&p.mode&1){var Ne=zc(s);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),Pc(Ne,s,p,o,t),Zl(Un(f,p));break e}}o=f=Un(f,p),Re!==4&&(Re=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=Nc(o,f,t);Js(o,x);break e;case 1:p=f;var m=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Jt===null||!Jt.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=Cc(o,p,t);Js(o,T);break e}}o=o.return}while(o!==null)}ou(n)}catch(V){t=V,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function iu(){var e=Mi.current;return Mi.current=bi,e===null?bi:e}function Bo(){(Re===0||Re===3||Re===2)&&(Re=4),Me===null||(mn&268435455)===0&&(Li&268435455)===0||tn(Me,Ie)}function Ui(e,t){var n=re;re|=2;var r=iu();(Me!==e||Ie!==t)&&(Ot=null,vn(e,t));do try{Bp();break}catch(i){ru(e,i)}while(!0);if(to(),re=n,Mi.current=r,be!==null)throw Error(c(261));return Me=null,Ie=0,Re}function Bp(){for(;be!==null;)lu(be)}function qp(){for(;be!==null&&!md();)lu(be)}function lu(e){var t=cu(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?ou(e):be=t,Lo.current=null}function ou(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Ip(n,t,rt),n!==null){be=n;return}}else{if(n=Dp(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Re===0&&(Re=5)}function xn(e,t,n){var r=se,i=st.transition;try{st.transition=null,se=1,Hp(e,t,n,r)}finally{st.transition=i,se=r}return null}function Hp(e,t,n,r){do qn();while(Zt!==null);if((re&6)!==0)throw Error(c(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Nd(e,o),e===Me&&(be=Me=null,Ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ii||(Ii=!0,uu(qr,function(){return qn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=st.transition,st.transition=null;var s=se;se=1;var p=re;re|=4,Lo.current=null,Fp(e,n),Yc(n,e),dp(Vl),Xr=!!Wl,Vl=Wl=null,e.current=n,Up(n),gd(),re=p,se=s,st.transition=o}else e.current=n;if(Ii&&(Ii=!1,Zt=e,Di=i),o=e.pendingLanes,o===0&&(Jt=null),yd(n.stateNode),Ke(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oi)throw Oi=!1,e=Do,Do=null,e;return(Di&1)!==0&&e.tag!==0&&qn(),o=e.pendingLanes,(o&1)!==0?e===Ao?Mr++:(Mr=0,Ao=e):Mr=0,Qt(),null}function qn(){if(Zt!==null){var e=Qa(Di),t=st.transition,n=se;try{if(st.transition=null,se=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Di=0,(re&6)!==0)throw Error(c(331));var i=re;for(re|=4,D=e.current;D!==null;){var o=D,s=o.child;if((D.flags&16)!==0){var p=o.deletions;if(p!==null){for(var f=0;f<p.length;f++){var w=p[f];for(D=w;D!==null;){var z=D;switch(z.tag){case 0:case 11:case 15:Rr(8,z,o)}var R=z.child;if(R!==null)R.return=z,D=R;else for(;D!==null;){z=D;var C=z.sibling,I=z.return;if(Hc(z),z===w){D=null;break}if(C!==null){C.return=I,D=C;break}D=I}}}var F=o.alternate;if(F!==null){var W=F.child;if(W!==null){F.child=null;do{var Ne=W.sibling;W.sibling=null,W=Ne}while(W!==null)}}D=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,D=s;else e:for(;D!==null;){if(o=D,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Rr(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,D=x;break e}D=o.return}}var m=e.current;for(D=m;D!==null;){s=D;var y=s.child;if((s.subtreeFlags&2064)!==0&&y!==null)y.return=s,D=y;else e:for(s=m;D!==null;){if(p=D,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:_i(9,p)}}catch(V){Se(p,p.return,V)}if(p===s){D=null;break e}var T=p.sibling;if(T!==null){T.return=p.return,D=T;break e}D=p.return}}if(re=i,Qt(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Hr,e)}catch{}r=!0}return r}finally{se=n,st.transition=t}}return!1}function au(e,t,n){t=Un(n,t),t=Nc(e,t,1),e=Yt(e,t,1),t=Be(),e!==null&&(rr(e,1,t),Ke(e,t))}function Se(e,t,n){if(e.tag===3)au(e,e,n);else for(;t!==null;){if(t.tag===3){au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=Un(n,e),e=Cc(t,e,1),t=Yt(t,e,1),e=Be(),t!==null&&(rr(t,1,e),Ke(t,e));break}}t=t.return}}function $p(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Ie&n)===n&&(Re===4||Re===3&&(Ie&130023424)===Ie&&500>Ee()-Io?vn(e,0):Oo|=n),Ke(e,t)}function su(e,t){t===0&&((e.mode&1)===0?t=1:(t=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var n=Be();e=_t(e,t),e!==null&&(rr(e,t,n),Ke(e,n))}function Gp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),su(e,n)}function Qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),su(e,n)}var cu;cu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,Op(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,ve&&(t.flags&1048576)!==0&&Vs(t,mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ri(e,t),e=t.pendingProps;var i=_n(t,Ae.current);An(t,n),i=fo(null,t,r,e,i,n);var o=ho();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(o=!0,pi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lo(t),i.updater=zi,t.stateNode=i,i._reactInternals=t,wo(t,r,e,n),t=Eo(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&Kl(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ri(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yp(r),e=ht(r,e),i){case 0:t=So(null,t,r,e,n);break e;case 1:t=Oc(null,t,r,e,n);break e;case 11:t=Rc(null,t,r,e,n);break e;case 14:t=Tc(null,t,r,ht(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),So(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Oc(e,t,r,i,n);case 3:e:{if(Ic(t),e===null)throw Error(c(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Xs(e,t),ki(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Un(Error(c(423)),t),t=Dc(e,t,r,n,i);break e}else if(r!==i){i=Un(Error(c(424)),t),t=Dc(e,t,r,n,i);break e}else for(nt=Ht(t.stateNode.containerInfo.firstChild),tt=t,ve=!0,ft=null,n=Ks(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===i){t=Lt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return ec(t),e===null&&Jl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Bl(r,i)?s=null:o!==null&&Bl(r,o)&&(t.flags|=32),Lc(e,t),Ve(e,t,s,n),t.child;case 6:return e===null&&Jl(t),null;case 13:return Ac(e,t,n);case 4:return oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=In(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Rc(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,fe(xi,r._currentValue),r._currentValue=s,o!==null)if(pt(o.value,s)){if(o.children===i.children&&!He.current){t=Lt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var p=o.dependencies;if(p!==null){s=o.child;for(var f=p.firstContext;f!==null;){if(f.context===r){if(o.tag===1){f=Mt(-1,n&-n),f.tag=2;var w=o.updateQueue;if(w!==null){w=w.shared;var z=w.pending;z===null?f.next=f:(f.next=z.next,z.next=f),w.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),ro(o.return,n,t),p.lanes|=n;break}f=f.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(c(341));s.lanes|=n,p=s.alternate,p!==null&&(p.lanes|=n),ro(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,An(t,n),i=ot(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),Tc(e,t,r,i,n);case 15:return _c(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Ri(e,t),t.tag=1,$e(r)?(e=!0,pi(t)):e=!1,An(t,n),Sc(t,r,i),wo(t,r,i,n),Eo(null,t,r,!0,e,n);case 19:return Uc(e,t,n);case 22:return Mc(e,t,n)}throw Error(c(156,t.tag))};function uu(e,t){return Ba(e,t)}function Kp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new Kp(e,t,n,r)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yp(e){if(typeof e=="function")return qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wt)return 11;if(e===kt)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")qo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ce:return yn(n.children,i,o,t);case ze:s=8,i|=8;break;case yt:return e=ct(12,n,t,i|2),e.elementType=yt,e.lanes=o,e;case Je:return e=ct(13,n,t,i),e.elementType=Je,e.lanes=o,e;case ut:return e=ct(19,n,t,i),e.elementType=ut,e.lanes=o,e;case je:return Vi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xe:s=10;break e;case bt:s=9;break e;case wt:s=11;break e;case kt:s=14;break e;case qe:s=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=ct(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function yn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Vi(e,t,n,r){return e=ct(22,e,r,t),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function Ho(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function $o(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Go(e,t,n,r,i,o,s,p,f){return e=new Xp(e,t,n,p,f),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lo(o),e}function Jp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function du(e){if(!e)return Gt;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if($e(n))return Fs(e,n,t)}return t}function pu(e,t,n,r,i,o,s,p,f){return e=Go(n,r,!0,e,i,o,s,p,f),e.context=du(null),n=e.current,r=Be(),i=en(n),o=Mt(r,i),o.callback=t??null,Yt(n,o,i),e.current.lanes=i,rr(e,i,r),Ke(e,r),e}function Bi(e,t,n,r){var i=t.current,o=Be(),s=en(i);return n=du(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,s),e!==null&&(vt(e,i,s,o),wi(e,i,s)),s}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qo(e,t){fu(e,t),(e=e.alternate)&&fu(e,t)}function Zp(){return null}var hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ko(e){this._internalRoot=e}Hi.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Bi(e,t,null,null)},Hi.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){Bi(null,e,null,null)}),t[zt]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&es(e)}};function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function ef(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var w=qi(s);o.call(w)}}var s=pu(t,r,e,0,null,!1,!1,"",mu);return e._reactRootContainer=s,e[zt]=s.current,vr(e.nodeType===8?e.parentNode:e),gn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var p=r;r=function(){var w=qi(f);p.call(w)}}var f=Go(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=f,e[zt]=f.current,vr(e.nodeType===8?e.parentNode:e),gn(function(){Bi(t,f,n,r)}),f}function Gi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var p=i;i=function(){var f=qi(s);p.call(f)}}Bi(t,s,e,i)}else s=ef(n,t,e,i,r);return qi(s)}Ka=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(yl(t,n|1),Ke(t,Ee()),(re&6)===0&&(Bn=Ee()+500,Qt()))}break;case 13:gn(function(){var r=_t(e,1);if(r!==null){var i=Be();vt(r,e,1,i)}}),Qo(e,1)}},wl=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Be();vt(t,e,134217728,n)}Qo(e,134217728)}},Ya=function(e){if(e.tag===13){var t=en(e),n=_t(e,t);if(n!==null){var r=Be();vt(n,e,t,r)}Qo(e,t)}},Xa=function(){return se},Ja=function(e,t){var n=se;try{return se=e,t()}finally{se=n}},pl=function(e,t,n){switch(t){case"input":if(il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ui(r);if(!i)throw Error(c(90));ja(r),il(r,i)}}}break;case"textarea":ba(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}},Ia=Wo,Da=gn;var tf={usingClientEntryPoint:!1,Events:[wr,Rn,ui,La,Oa,Wo]},Lr={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nf={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wa(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{Hr=Qi.inject(nf),jt=Qi}catch{}}return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf,Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yo(t))throw Error(c(200));return Jp(e,t,null,n)},Ye.createRoot=function(e,t){if(!Yo(e))throw Error(c(299));var n=!1,r="",i=hu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Go(e,1,!1,null,null,n,!1,r,i),e[zt]=t.current,vr(e.nodeType===8?e.parentNode:e),new Ko(t)},Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Wa(t),e=e===null?null:e.stateNode,e},Ye.flushSync=function(e){return gn(e)},Ye.hydrate=function(e,t,n){if(!$i(t))throw Error(c(200));return Gi(null,e,t,!0,n)},Ye.hydrateRoot=function(e,t,n){if(!Yo(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=hu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=pu(t,null,e,1,n??null,i,!1,o,s),e[zt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Hi(t)},Ye.render=function(e,t,n){if(!$i(t))throw Error(c(200));return Gi(null,e,t,!1,n)},Ye.unmountComponentAtNode=function(e){if(!$i(e))throw Error(c(40));return e._reactRootContainer?(gn(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1},Ye.unstable_batchedUpdates=Wo,Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$i(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Gi(e,t,n,!1,r)},Ye.version="18.3.1-next-f1338f8080-20240426",Ye}var Su;function Wu(){if(Su)return Zo.exports;Su=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(u){console.error(u)}}return a(),Zo.exports=pf(),Zo.exports}var Eu;function ff(){if(Eu)return Ki;Eu=1;var a=Wu();return Ki.createRoot=a.createRoot,Ki.hydrateRoot=a.hydrateRoot,Ki}var hf=ff();const mf=Uu(hf);Wu();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(a){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},Dr.apply(null,arguments)}var ln;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(ln||(ln={}));const Nu="popstate";function gf(a){a===void 0&&(a={});function u(d,h){let{pathname:v,search:j,hash:E}=d.location;return aa("",{pathname:v,search:j,hash:E},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function c(d,h){return typeof h=="string"?h:Xi(h)}return xf(u,c,null,a)}function ke(a,u){if(a===!1||a===null||typeof a>"u")throw new Error(u)}function Vu(a,u){if(!a){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function vf(){return Math.random().toString(36).substr(2,8)}function Cu(a,u){return{usr:a.state,key:a.key,idx:u}}function aa(a,u,c,d){return c===void 0&&(c=null),Dr({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof u=="string"?Qn(u):u,{state:c,key:u&&u.key||d||vf()})}function Xi(a){let{pathname:u="/",search:c="",hash:d=""}=a;return c&&c!=="?"&&(u+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(u+=d.charAt(0)==="#"?d:"#"+d),u}function Qn(a){let u={};if(a){let c=a.indexOf("#");c>=0&&(u.hash=a.substr(c),a=a.substr(0,c));let d=a.indexOf("?");d>=0&&(u.search=a.substr(d),a=a.substr(0,d)),a&&(u.pathname=a)}return u}function xf(a,u,c,d){d===void 0&&(d={});let{window:h=document.defaultView,v5Compat:v=!1}=d,j=h.history,E=ln.Pop,S=null,k=_();k==null&&(k=0,j.replaceState(Dr({},j.state,{idx:k}),""));function _(){return(j.state||{idx:null}).idx}function P(){E=ln.Pop;let M=_(),Q=M==null?null:M-k;k=M,S&&S({action:E,location:L.location,delta:Q})}function U(M,Q){E=ln.Push;let K=aa(L.location,M,Q);k=_()+1;let X=Cu(K,k),J=L.createHref(K);try{j.pushState(X,"",J)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;h.location.assign(J)}v&&S&&S({action:E,location:L.location,delta:1})}function Z(M,Q){E=ln.Replace;let K=aa(L.location,M,Q);k=_();let X=Cu(K,k),J=L.createHref(K);j.replaceState(X,"",J),v&&S&&S({action:E,location:L.location,delta:0})}function B(M){let Q=h.location.origin!=="null"?h.location.origin:h.location.href,K=typeof M=="string"?M:Xi(M);return K=K.replace(/ $/,"%20"),ke(Q,"No window.location.(origin|href) available to create URL for href: "+K),new URL(K,Q)}let L={get action(){return E},get location(){return a(h,j)},listen(M){if(S)throw new Error("A history only accepts one active listener");return h.addEventListener(Nu,P),S=M,()=>{h.removeEventListener(Nu,P),S=null}},createHref(M){return u(h,M)},createURL:B,encodeLocation(M){let Q=B(M);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:U,replace:Z,go(M){return j.go(M)}};return L}var bu;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(bu||(bu={}));function yf(a,u,c){return c===void 0&&(c="/"),wf(a,u,c)}function wf(a,u,c,d){let h=typeof u=="string"?Qn(u):u,v=Gn(h.pathname||"/",c);if(v==null)return null;let j=Bu(a);kf(j);let E=null,S=_f(v);for(let k=0;E==null&&k<j.length;++k)E=Rf(j[k],S);return E}function Bu(a,u,c,d){u===void 0&&(u=[]),c===void 0&&(c=[]),d===void 0&&(d="");let h=(v,j,E)=>{let S={relativePath:E===void 0?v.path||"":E,caseSensitive:v.caseSensitive===!0,childrenIndex:j,route:v};S.relativePath.startsWith("/")&&(ke(S.relativePath.startsWith(d),'Absolute route path "'+S.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),S.relativePath=S.relativePath.slice(d.length));let k=on([d,S.relativePath]),_=c.concat(S);v.children&&v.children.length>0&&(ke(v.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+k+'".')),Bu(v.children,u,_,k)),!(v.path==null&&!v.index)&&u.push({path:k,score:zf(k,v.index),routesMeta:_})};return a.forEach((v,j)=>{var E;if(v.path===""||!((E=v.path)!=null&&E.includes("?")))h(v,j);else for(let S of qu(v.path))h(v,j,S)}),u}function qu(a){let u=a.split("/");if(u.length===0)return[];let[c,...d]=u,h=c.endsWith("?"),v=c.replace(/\?$/,"");if(d.length===0)return h?[v,""]:[v];let j=qu(d.join("/")),E=[];return E.push(...j.map(S=>S===""?v:[v,S].join("/"))),h&&E.push(...j),E.map(S=>a.startsWith("/")&&S===""?"/":S)}function kf(a){a.sort((u,c)=>u.score!==c.score?c.score-u.score:Pf(u.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}const jf=/^:[\w-]+$/,Sf=3,Ef=2,Nf=1,Cf=10,bf=-2,zu=a=>a==="*";function zf(a,u){let c=a.split("/"),d=c.length;return c.some(zu)&&(d+=bf),u&&(d+=Ef),c.filter(h=>!zu(h)).reduce((h,v)=>h+(jf.test(v)?Sf:v===""?Nf:Cf),d)}function Pf(a,u){return a.length===u.length&&a.slice(0,-1).every((d,h)=>d===u[h])?a[a.length-1]-u[u.length-1]:0}function Rf(a,u,c){let{routesMeta:d}=a,h={},v="/",j=[];for(let E=0;E<d.length;++E){let S=d[E],k=E===d.length-1,_=v==="/"?u:u.slice(v.length)||"/",P=sa({path:S.relativePath,caseSensitive:S.caseSensitive,end:k},_),U=S.route;if(!P)return null;Object.assign(h,P.params),j.push({params:h,pathname:on([v,P.pathname]),pathnameBase:Of(on([v,P.pathnameBase])),route:U}),P.pathnameBase!=="/"&&(v=on([v,P.pathnameBase]))}return j}function sa(a,u){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[c,d]=Tf(a.path,a.caseSensitive,a.end),h=u.match(c);if(!h)return null;let v=h[0],j=v.replace(/(.)\/+$/,"$1"),E=h.slice(1);return{params:d.reduce((k,_,P)=>{let{paramName:U,isOptional:Z}=_;if(U==="*"){let L=E[P]||"";j=v.slice(0,v.length-L.length).replace(/(.)\/+$/,"$1")}const B=E[P];return Z&&!B?k[U]=void 0:k[U]=(B||"").replace(/%2F/g,"/"),k},{}),pathname:v,pathnameBase:j,pattern:a}}function Tf(a,u,c){u===void 0&&(u=!1),c===void 0&&(c=!0),Vu(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let d=[],h="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(j,E,S)=>(d.push({paramName:E,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(d.push({paramName:"*"}),h+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?h+="\\/*$":a!==""&&a!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,u?void 0:"i"),d]}function _f(a){try{return a.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Vu(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+u+").")),a}}function Gn(a,u){if(u==="/")return a;if(!a.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,d=a.charAt(c);return d&&d!=="/"?null:a.slice(c)||"/"}function Mf(a,u){u===void 0&&(u="/");let{pathname:c,search:d="",hash:h=""}=typeof a=="string"?Qn(a):a,v;return c?(c=Hu(c),c.startsWith("/")?v=Pu(c.substring(1),"/"):v=Pu(c,u)):v=u,{pathname:v,search:If(d),hash:Df(h)}}function Pu(a,u){let c=u.replace(/\/+$/,"").split("/");return a.split("/").forEach(h=>{h===".."?c.length>1&&c.pop():h!=="."&&c.push(h)}),c.length>1?c.join("/"):"/"}function na(a,u,c,d){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+u+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lf(a){return a.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function va(a,u){let c=Lf(a);return u?c.map((d,h)=>h===c.length-1?d.pathname:d.pathnameBase):c.map(d=>d.pathnameBase)}function xa(a,u,c,d){d===void 0&&(d=!1);let h;typeof a=="string"?h=Qn(a):(h=Dr({},a),ke(!h.pathname||!h.pathname.includes("?"),na("?","pathname","search",h)),ke(!h.pathname||!h.pathname.includes("#"),na("#","pathname","hash",h)),ke(!h.search||!h.search.includes("#"),na("#","search","hash",h)));let v=a===""||h.pathname==="",j=v?"/":h.pathname,E;if(j==null)E=c;else{let P=u.length-1;if(!d&&j.startsWith("..")){let U=j.split("/");for(;U[0]==="..";)U.shift(),P-=1;h.pathname=U.join("/")}E=P>=0?u[P]:"/"}let S=Mf(h,E),k=j&&j!=="/"&&j.endsWith("/"),_=(v||j===".")&&c.endsWith("/");return!S.pathname.endsWith("/")&&(k||_)&&(S.pathname+="/"),S}const Hu=a=>a.replace(/\/\/+/g,"/"),on=a=>Hu(a.join("/")),Of=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),If=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Df=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Af(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const $u=["post","put","patch","delete"];new Set($u);const Ff=["get",...$u];new Set(Ff);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ar(){return Ar=Object.assign?Object.assign.bind():function(a){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},Ar.apply(null,arguments)}const el=N.createContext(null),Gu=N.createContext(null),It=N.createContext(null),tl=N.createContext(null),Dt=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Qu=N.createContext(null);function Uf(a,u){let{relative:c}=u===void 0?{}:u;Kn()||ke(!1);let{basename:d,navigator:h}=N.useContext(It),{hash:v,pathname:j,search:E}=nl(a,{relative:c}),S=j;return d!=="/"&&(S=j==="/"?d:on([d,j])),h.createHref({pathname:S,search:E,hash:v})}function Kn(){return N.useContext(tl)!=null}function At(){return Kn()||ke(!1),N.useContext(tl).location}function Ku(a){N.useContext(It).static||N.useLayoutEffect(a)}function ya(){let{isDataRoute:a}=N.useContext(Dt);return a?eh():Wf()}function Wf(){Kn()||ke(!1);let a=N.useContext(el),{basename:u,future:c,navigator:d}=N.useContext(It),{matches:h}=N.useContext(Dt),{pathname:v}=At(),j=JSON.stringify(va(h,c.v7_relativeSplatPath)),E=N.useRef(!1);return Ku(()=>{E.current=!0}),N.useCallback(function(k,_){if(_===void 0&&(_={}),!E.current)return;if(typeof k=="number"){d.go(k);return}let P=xa(k,JSON.parse(j),v,_.relative==="path");a==null&&u!=="/"&&(P.pathname=P.pathname==="/"?u:on([u,P.pathname])),(_.replace?d.replace:d.push)(P,_.state,_)},[u,d,j,v,a])}function Vf(){let{matches:a}=N.useContext(Dt),u=a[a.length-1];return u?u.params:{}}function nl(a,u){let{relative:c}=u===void 0?{}:u,{future:d}=N.useContext(It),{matches:h}=N.useContext(Dt),{pathname:v}=At(),j=JSON.stringify(va(h,d.v7_relativeSplatPath));return N.useMemo(()=>xa(a,JSON.parse(j),v,c==="path"),[a,j,v,c])}function Bf(a,u){return qf(a,u)}function qf(a,u,c,d){Kn()||ke(!1);let{navigator:h}=N.useContext(It),{matches:v}=N.useContext(Dt),j=v[v.length-1],E=j?j.params:{};j&&j.pathname;let S=j?j.pathnameBase:"/";j&&j.route;let k=At(),_;if(u){var P;let M=typeof u=="string"?Qn(u):u;S==="/"||(P=M.pathname)!=null&&P.startsWith(S)||ke(!1),_=M}else _=k;let U=_.pathname||"/",Z=U;if(S!=="/"){let M=S.replace(/^\//,"").split("/");Z="/"+U.replace(/^\//,"").split("/").slice(M.length).join("/")}let B=yf(a,{pathname:Z}),L=Kf(B&&B.map(M=>Object.assign({},M,{params:Object.assign({},E,M.params),pathname:on([S,h.encodeLocation?h.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?S:on([S,h.encodeLocation?h.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),v,c,d);return u&&L?N.createElement(tl.Provider,{value:{location:Ar({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:ln.Pop}},L):L}function Hf(){let a=Zf(),u=Af(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),c=a instanceof Error?a.stack:null,h={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},u),c?N.createElement("pre",{style:h},c):null,null)}const $f=N.createElement(Hf,null);class Gf extends N.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,c){return c.location!==u.location||c.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:c.error,location:c.location,revalidation:u.revalidation||c.revalidation}}componentDidCatch(u,c){console.error("React Router caught the following error during render",u,c)}render(){return this.state.error!==void 0?N.createElement(Dt.Provider,{value:this.props.routeContext},N.createElement(Qu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qf(a){let{routeContext:u,match:c,children:d}=a,h=N.useContext(el);return h&&h.static&&h.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=c.route.id),N.createElement(Dt.Provider,{value:u},d)}function Kf(a,u,c,d){var h;if(u===void 0&&(u=[]),c===void 0&&(c=null),d===void 0&&(d=null),a==null){var v;if(!c)return null;if(c.errors)a=c.matches;else if((v=d)!=null&&v.v7_partialHydration&&u.length===0&&!c.initialized&&c.matches.length>0)a=c.matches;else return null}let j=a,E=(h=c)==null?void 0:h.errors;if(E!=null){let _=j.findIndex(P=>P.route.id&&(E==null?void 0:E[P.route.id])!==void 0);_>=0||ke(!1),j=j.slice(0,Math.min(j.length,_+1))}let S=!1,k=-1;if(c&&d&&d.v7_partialHydration)for(let _=0;_<j.length;_++){let P=j[_];if((P.route.HydrateFallback||P.route.hydrateFallbackElement)&&(k=_),P.route.id){let{loaderData:U,errors:Z}=c,B=P.route.loader&&U[P.route.id]===void 0&&(!Z||Z[P.route.id]===void 0);if(P.route.lazy||B){S=!0,k>=0?j=j.slice(0,k+1):j=[j[0]];break}}}return j.reduceRight((_,P,U)=>{let Z,B=!1,L=null,M=null;c&&(Z=E&&P.route.id?E[P.route.id]:void 0,L=P.route.errorElement||$f,S&&(k<0&&U===0?(th("route-fallback"),B=!0,M=null):k===U&&(B=!0,M=P.route.hydrateFallbackElement||null)));let Q=u.concat(j.slice(0,U+1)),K=()=>{let X;return Z?X=L:B?X=M:P.route.Component?X=N.createElement(P.route.Component,null):P.route.element?X=P.route.element:X=_,N.createElement(Qf,{match:P,routeContext:{outlet:_,matches:Q,isDataRoute:c!=null},children:X})};return c&&(P.route.ErrorBoundary||P.route.errorElement||U===0)?N.createElement(Gf,{location:c.location,revalidation:c.revalidation,component:L,error:Z,children:K(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):K()},null)}var Yu=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(Yu||{}),Xu=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(Xu||{});function Yf(a){let u=N.useContext(el);return u||ke(!1),u}function Xf(a){let u=N.useContext(Gu);return u||ke(!1),u}function Jf(a){let u=N.useContext(Dt);return u||ke(!1),u}function Ju(a){let u=Jf(),c=u.matches[u.matches.length-1];return c.route.id||ke(!1),c.route.id}function Zf(){var a;let u=N.useContext(Qu),c=Xf(),d=Ju();return u!==void 0?u:(a=c.errors)==null?void 0:a[d]}function eh(){let{router:a}=Yf(Yu.UseNavigateStable),u=Ju(Xu.UseNavigateStable),c=N.useRef(!1);return Ku(()=>{c.current=!0}),N.useCallback(function(h,v){v===void 0&&(v={}),c.current&&(typeof h=="number"?a.navigate(h):a.navigate(h,Ar({fromRouteId:u},v)))},[a,u])}const Ru={};function th(a,u,c){Ru[a]||(Ru[a]=!0)}function nh(a,u){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function Tu(a){let{to:u,replace:c,state:d,relative:h}=a;Kn()||ke(!1);let{future:v,static:j}=N.useContext(It),{matches:E}=N.useContext(Dt),{pathname:S}=At(),k=ya(),_=xa(u,va(E,v.v7_relativeSplatPath),S,h==="path"),P=JSON.stringify(_);return N.useEffect(()=>k(JSON.parse(P),{replace:c,state:d,relative:h}),[k,P,h,c,d]),null}function xt(a){ke(!1)}function rh(a){let{basename:u="/",children:c=null,location:d,navigationType:h=ln.Pop,navigator:v,static:j=!1,future:E}=a;Kn()&&ke(!1);let S=u.replace(/^\/*/,"/"),k=N.useMemo(()=>({basename:S,navigator:v,static:j,future:Ar({v7_relativeSplatPath:!1},E)}),[S,E,v,j]);typeof d=="string"&&(d=Qn(d));let{pathname:_="/",search:P="",hash:U="",state:Z=null,key:B="default"}=d,L=N.useMemo(()=>{let M=Gn(_,S);return M==null?null:{location:{pathname:M,search:P,hash:U,state:Z,key:B},navigationType:h}},[S,_,P,U,Z,B,h]);return L==null?null:N.createElement(It.Provider,{value:k},N.createElement(tl.Provider,{children:c,value:L}))}function ih(a){let{children:u,location:c}=a;return Bf(ca(u),c)}new Promise(()=>{});function ca(a,u){u===void 0&&(u=[]);let c=[];return N.Children.forEach(a,(d,h)=>{if(!N.isValidElement(d))return;let v=[...u,h];if(d.type===N.Fragment){c.push.apply(c,ca(d.props.children,v));return}d.type!==xt&&ke(!1),!d.props.index||!d.props.children||ke(!1);let j={id:d.props.id||v.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(j.children=ca(d.props.children,v)),c.push(j)}),c}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(a){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},Ji.apply(null,arguments)}function Zu(a,u){if(a==null)return{};var c={};for(var d in a)if({}.hasOwnProperty.call(a,d)){if(u.indexOf(d)!==-1)continue;c[d]=a[d]}return c}function lh(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function oh(a,u){return a.button===0&&(!u||u==="_self")&&!lh(a)}function ua(a){return a===void 0&&(a=""),new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((u,c)=>{let d=a[c];return u.concat(Array.isArray(d)?d.map(h=>[c,h]):[[c,d]])},[]))}function ah(a,u){let c=ua(a);return u&&u.forEach((d,h)=>{c.has(h)||u.getAll(h).forEach(v=>{c.append(h,v)})}),c}const sh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ch=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],uh="6";try{window.__reactRouterVersion=uh}catch{}const dh=N.createContext({isTransitioning:!1}),ph="startTransition",_u=cf[ph];function fh(a){let{basename:u,children:c,future:d,window:h}=a,v=N.useRef();v.current==null&&(v.current=gf({window:h,v5Compat:!0}));let j=v.current,[E,S]=N.useState({action:j.action,location:j.location}),{v7_startTransition:k}=d||{},_=N.useCallback(P=>{k&&_u?_u(()=>S(P)):S(P)},[S,k]);return N.useLayoutEffect(()=>j.listen(_),[j,_]),N.useEffect(()=>nh(d),[d]),N.createElement(rh,{basename:u,children:c,location:E.location,navigationType:E.action,navigator:j,future:d})}const hh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ce=N.forwardRef(function(u,c){let{onClick:d,relative:h,reloadDocument:v,replace:j,state:E,target:S,to:k,preventScrollReset:_,viewTransition:P}=u,U=Zu(u,sh),{basename:Z}=N.useContext(It),B,L=!1;if(typeof k=="string"&&mh.test(k)&&(B=k,hh))try{let X=new URL(window.location.href),J=k.startsWith("//")?new URL(X.protocol+k):new URL(k),xe=Gn(J.pathname,Z);J.origin===X.origin&&xe!=null?k=xe+J.search+J.hash:L=!0}catch{}let M=Uf(k,{relative:h}),Q=xh(k,{replace:j,state:E,target:S,preventScrollReset:_,relative:h,viewTransition:P});function K(X){d&&d(X),X.defaultPrevented||Q(X)}return N.createElement("a",Ji({},U,{href:B||M,onClick:L||v?d:K,ref:c,target:S}))}),gh=N.forwardRef(function(u,c){let{"aria-current":d="page",caseSensitive:h=!1,className:v="",end:j=!1,style:E,to:S,viewTransition:k,children:_}=u,P=Zu(u,ch),U=nl(S,{relative:P.relative}),Z=At(),B=N.useContext(Gu),{navigator:L,basename:M}=N.useContext(It),Q=B!=null&&wh(U)&&k===!0,K=L.encodeLocation?L.encodeLocation(U).pathname:U.pathname,X=Z.pathname,J=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;h||(X=X.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&M&&(J=Gn(J,M)||J);const xe=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let de=X===K||!j&&X.startsWith(K)&&X.charAt(xe)==="/",Ce=J!=null&&(J===K||!j&&J.startsWith(K)&&J.charAt(K.length)==="/"),ze={isActive:de,isPending:Ce,isTransitioning:Q},yt=de?d:void 0,Xe;typeof v=="function"?Xe=v(ze):Xe=[v,de?"active":null,Ce?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let bt=typeof E=="function"?E(ze):E;return N.createElement(ce,Ji({},P,{"aria-current":yt,className:Xe,ref:c,style:bt,to:S,viewTransition:k}),typeof _=="function"?_(ze):_)});var da;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(da||(da={}));var Mu;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Mu||(Mu={}));function vh(a){let u=N.useContext(el);return u||ke(!1),u}function xh(a,u){let{target:c,replace:d,state:h,preventScrollReset:v,relative:j,viewTransition:E}=u===void 0?{}:u,S=ya(),k=At(),_=nl(a,{relative:j});return N.useCallback(P=>{if(oh(P,c)){P.preventDefault();let U=d!==void 0?d:Xi(k)===Xi(_);S(a,{replace:U,state:h,preventScrollReset:v,relative:j,viewTransition:E})}},[k,S,_,d,h,c,a,v,j,E])}function yh(a){let u=N.useRef(ua(a)),c=N.useRef(!1),d=At(),h=N.useMemo(()=>ah(d.search,c.current?null:u.current),[d.search]),v=ya(),j=N.useCallback((E,S)=>{const k=ua(typeof E=="function"?E(h):E);c.current=!0,v("?"+k,S)},[v,h]);return[h,j]}function wh(a,u){u===void 0&&(u={});let c=N.useContext(dh);c==null&&ke(!1);let{basename:d}=vh(da.useViewTransitionState),h=nl(a,{relative:u.relative});if(!c.isTransitioning)return!1;let v=Gn(c.currentLocation.pathname,d)||c.currentLocation.pathname,j=Gn(c.nextLocation.pathname,d)||c.nextLocation.pathname;return sa(h.pathname,j)!=null||sa(h.pathname,v)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ed=(...a)=>a.filter((u,c,d)=>!!u&&u.trim()!==""&&d.indexOf(u)===c).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=N.forwardRef(({color:a="currentColor",size:u=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:h="",children:v,iconNode:j,...E},S)=>N.createElement("svg",{ref:S,...jh,width:u,height:u,stroke:a,strokeWidth:d?Number(c)*24/Number(u):c,className:ed("lucide",h),...E},[...j.map(([k,_])=>N.createElement(k,_)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(a,u)=>{const c=N.forwardRef(({className:d,...h},v)=>N.createElement(Sh,{ref:v,iconNode:u,className:ed(`lucide-${kh(a)}`,d),...h}));return c.displayName=`${a}`,c};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=Y("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=Y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=Y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=Y("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=Y("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=Y("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=Y("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=Y("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=Y("ChartNoAxesCombined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=Y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=Y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=Y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=Y("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=Y("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=Y("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=Y("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=Y("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=Y("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=Y("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=Y("DraftingCompass",[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Y("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=Y("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=Y("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=Y("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=Y("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=Y("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=Y("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=Y("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=Y("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=Y("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=Y("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=Y("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=Y("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=Y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=Y("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=Y("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=Y("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=Y("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=Y("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$h=[["Home","/"],["About Us","/about"],["Services","/services"],["Blog","/blog"],["Careers","/careers"],["Contact","/contact"]];function Gh(){const[a,u]=N.useState(!1),[c,d]=N.useState(!1);return N.useEffect(()=>{const h=()=>d(window.scrollY>12);return h(),window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]),N.useEffect(()=>{const h=v=>{v.key==="Escape"&&u(!1)};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[]),l.jsx("header",{className:c?"header scrolled":"header",children:l.jsxs("div",{className:"container nav-wrap",children:[l.jsx(ce,{to:"/",className:"brand",onClick:()=>u(!1),"aria-label":"Flat Ride Engineering Home",children:l.jsx("img",{src:"/logo.png",alt:"Flat Ride Engineering",className:"brand-logo"})}),l.jsx("button",{className:"menu-toggle","aria-label":a?"Close navigation":"Open navigation","aria-expanded":a,"aria-controls":"primary-navigation",onClick:()=>u(h=>!h),children:a?l.jsx(Hh,{size:25}):l.jsx(Ah,{size:25})}),l.jsxs("nav",{id:"primary-navigation",className:a?"nav-links open":"nav-links",children:[$h.map(([h,v])=>l.jsx(gh,{to:v,end:v==="/",onClick:()=>u(!1),children:h},v)),l.jsxs(ce,{className:"nav-cta",to:"/contact?type=project",onClick:()=>u(!1),children:["Project enquiry",l.jsx(ue,{size:16})]})]})]})})}const Te={companyName:"Flat Ride Engineering",brandName:"FLAT RIDE",brandSuffix:"ENGINEERING",companyTagline:"Engineering Vehicle Performance.",email:"contact@flatrideengineering.com",careersEmail:"careers@flatrideengineering.com",phone:"+91 8073995324",address:"Bengaluru, Karnataka, India",whatsappNumber:"918073995324",aboutText:"Flat Ride Engineering provides engineering solutions in vehicle dynamics, vehicle simulation, and physics-based automotive analysis. We focus on understanding vehicle behaviour through engineering fundamentals, simulation tools, and data-driven analysis to support better vehicle performance, stability, handling, and ride comfort."},ha="flat-ride:open-cookie-preferences",ad="flatRideCookieConsent",Ir={essential:!0,analytics:!1,marketing:!1};function Qh(a){return a&&a.version===1&&typeof a.analytics=="boolean"&&typeof a.marketing=="boolean"}function la(){try{const a=localStorage.getItem(ad);if(!a)return null;const u=JSON.parse(a);return Qh(u)?{essential:!0,analytics:u.analytics,marketing:u.marketing}:null}catch(a){return console.error("Could not read cookie preferences:",a),null}}function Kh(){const a=N.useRef(null),u=N.useRef(null),[c,d]=N.useState(Ir),[h,v]=N.useState(!1),[j,E]=N.useState(!1),[S,k]=N.useState(!0),[_,P]=N.useState(!1),[U,Z]=N.useState("");N.useEffect(()=>{const L=la();L&&(d(L),E(!0)),v(!0)},[]),N.useEffect(()=>{function L(){u.current=document.activeElement,d(la()||Ir),k(!0),P(!0),Z("")}return window.addEventListener(ha,L),()=>window.removeEventListener(ha,L)},[]),N.useEffect(()=>{var X,J,xe;if(!(h&&S)){(J=(X=u.current)==null?void 0:X.focus)==null||J.call(X);return}const M=a.current,Q=M==null?void 0:M.querySelectorAll("button:not(:disabled), input:not(:disabled)");(xe=Q==null?void 0:Q[0])==null||xe.focus();function K(de){if(de.key==="Escape"&&j){k(!1),P(!1);return}if(de.key!=="Tab"||!(Q!=null&&Q.length))return;const Ce=Q[0],ze=Q[Q.length-1];de.shiftKey&&document.activeElement===Ce?(de.preventDefault(),ze.focus()):!de.shiftKey&&document.activeElement===ze&&(de.preventDefault(),Ce.focus())}return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[h,j,S]),N.useEffect(()=>{if(!h||!S)return;const L=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=L}},[h,S]);function B(L){const M={version:1,essential:!0,analytics:L.analytics,marketing:L.marketing,updatedAt:new Date().toISOString()};try{localStorage.setItem(ad,JSON.stringify(M))}catch(K){console.error("Could not save cookie preferences:",K),Z("Your preferences could not be saved. Check your browser storage settings and try again.");return}const Q={essential:!0,analytics:M.analytics,marketing:M.marketing};d(Q),E(!0),k(!1),P(!1),Z(""),window.dispatchEvent(new CustomEvent("flat-ride:consent-change",{detail:Q}))}return!h||!S?null:l.jsx("div",{className:"cookie-consent-overlay",children:l.jsxs("section",{ref:a,className:"cookie-consent-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"cookie-consent-title","aria-describedby":"cookie-consent-description",children:[l.jsx("div",{className:"cookie-consent-accent","aria-hidden":"true"}),l.jsxs("div",{className:"cookie-consent-content",children:[l.jsx("span",{className:"cookie-consent-eyebrow",children:"FLAT RIDE ENGINEERING / PRIVACY"}),l.jsx("h2",{id:"cookie-consent-title",children:"We care about your privacy"}),l.jsx("p",{id:"cookie-consent-description",children:"Essential cookies keep this site working. With your permission, analytics cookies help us understand site use, and marketing cookies support relevant communications. You can change your choice at any time."}),_?l.jsxs("div",{className:"cookie-settings-list",children:[l.jsxs("div",{className:"cookie-setting-row",children:[l.jsxs("div",{children:[l.jsx("h3",{children:"Essential cookies"}),l.jsx("p",{children:"Required for core website functions and always enabled."})]}),l.jsx("input",{type:"checkbox",checked:!0,disabled:!0,"aria-label":"Essential cookies always enabled"})]}),l.jsxs("label",{className:"cookie-setting-row",children:[l.jsxs("span",{children:[l.jsx("h3",{children:"Analytics cookies"}),l.jsx("p",{children:"Help us measure and improve how visitors use the site."})]}),l.jsx("input",{type:"checkbox",checked:c.analytics,onChange:L=>d(M=>({...M,analytics:L.target.checked}))})]}),l.jsxs("label",{className:"cookie-setting-row",children:[l.jsxs("span",{children:[l.jsx("h3",{children:"Marketing cookies"}),l.jsx("p",{children:"Allow measurement and personalization for marketing activity."})]}),l.jsx("input",{type:"checkbox",checked:c.marketing,onChange:L=>d(M=>({...M,marketing:L.target.checked}))})]})]}):l.jsx("p",{className:"cookie-consent-note",children:"No analytics or marketing tracking is enabled unless you choose to allow it."}),U&&l.jsx("p",{className:"cookie-consent-error",role:"alert",children:U}),l.jsx("div",{className:"cookie-consent-actions",children:_?l.jsxs(l.Fragment,{children:[l.jsx("button",{className:"cookie-button cookie-button-primary",type:"button",onClick:()=>B(c),children:"Save Preferences"}),l.jsx("button",{className:"cookie-button cookie-button-secondary",type:"button",onClick:()=>B({analytics:!0,marketing:!0}),children:"Accept All"}),l.jsx("button",{className:"cookie-button cookie-button-text",type:"button",onClick:()=>B(Ir),children:"Reject All"}),j&&l.jsx("button",{className:"cookie-button cookie-button-text",type:"button",onClick:()=>{d(la()||Ir),P(!1)},children:"Cancel"})]}):l.jsxs(l.Fragment,{children:[l.jsx("button",{className:"cookie-button cookie-button-primary",type:"button",onClick:()=>B({analytics:!0,marketing:!0}),children:"Accept All"}),l.jsx("button",{className:"cookie-button cookie-button-secondary",type:"button",onClick:()=>B(Ir),children:"Reject All"}),l.jsx("button",{className:"cookie-button cookie-button-text",type:"button",onClick:()=>P(!0),children:"Cookie Settings"})]})})]})]})})}function Yh(){const a=Te.phone.replace(/[^\d+]/g,""),u=String(Te.whatsappNumber).replace(/\D/g,"");return l.jsxs(l.Fragment,{children:[l.jsxs("footer",{className:"footer",children:[l.jsxs("div",{className:"container footer-main",children:[l.jsxs("div",{className:"footer-brand-section",children:[l.jsxs(ce,{to:"/",className:"brand footer-brand",children:[l.jsxs("span",{className:"brand-mark",children:["FR",l.jsx("span",{children:"."})]}),l.jsxs("span",{className:"brand-copy",children:[l.jsx("b",{children:Te.brandName}),l.jsx("small",{children:Te.brandSuffix})]})]}),l.jsx("p",{className:"footer-description",children:Te.companyTagline}),l.jsxs(ce,{to:"/contact?type=project",className:"footer-contact-link",children:["LET'S WORK TOGETHER",l.jsx(ue,{size:17})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("h4",{children:"EXPLORE"}),l.jsx(ce,{to:"/about",children:"About Us"}),l.jsx(ce,{to:"/services",children:"Our Services"}),l.jsx(ce,{to:"/blog",children:"Blog"}),l.jsx(ce,{to:"/careers",children:"Careers"}),l.jsx(ce,{to:"/contact",children:"Contact"}),l.jsx(ce,{to:"/contact?type=project",children:"Project enquiry"}),l.jsx(ce,{to:"/contact?type=business",children:"Business partnerships"}),l.jsx("button",{type:"button",className:"footer-cookie-preferences",onClick:()=>window.dispatchEvent(new Event(ha)),children:"Cookie Preferences"})]}),l.jsxs("div",{className:"footer-column footer-contact",children:[l.jsx("h4",{children:"GET IN TOUCH"}),l.jsx("p",{children:"Have an engineering challenge?"}),l.jsxs("a",{href:`mailto:${Te.email}`,className:"footer-email",children:[Te.email,l.jsx(ue,{size:16})]}),l.jsxs("a",{href:`tel:${a}`,className:"footer-phone",children:[Te.phone,l.jsx(ue,{size:16})]}),u&&l.jsxs("a",{href:`https://wa.me/${u}?text=Hello%20Flat%20Ride%20Engineering`,className:"footer-whatsapp",target:"_blank",rel:"noopener noreferrer",children:["WhatsApp",l.jsx(ue,{size:16})]}),l.jsxs(ce,{to:"/contact?type=project",className:"footer-enquiry",children:["SEND AN ENQUIRY",l.jsx(Zi,{size:15})]})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsxs("div",{className:"container footer-bottom-inner",children:[l.jsxs("span",{children:["© ",new Date().getFullYear()," ",Te.companyName,". All rights reserved."]}),l.jsx("span",{className:"footer-speciality",children:"VEHICLE DYNAMICS · SIMULATION · ENGINEERING"}),l.jsxs(ce,{to:"/",className:"back-to-top",children:["BACK TO HOME ",l.jsx(ue,{size:13})]})]})})]}),l.jsx("style",{children:`
        .footer {
          background: #ffffff;
          color: #111111;
          padding-top: 85px;
          margin-top: 0;
          border-top: 1px solid #111111;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.3fr;
          gap: 70px;
          padding-bottom: 75px;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          color: #111111;
        }

        .footer-brand .brand-mark {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .footer-brand .brand-mark span {
          color: #111111;
        }

        .footer-brand .brand-copy {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
        }

        .footer-brand .brand-copy b {
          font-size: 14px;
          letter-spacing: 1px;
        }

        .footer-brand .brand-copy small {
          font-size: 10px;
          color: #555555;
          letter-spacing: 2px;
          margin-top: 4px;
        }

        .footer-description {
          max-width: 370px;
          color: #555555;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.9;
          margin: 25px 0;
        }

        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #111111;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-decoration: none;
          border-bottom: 1px solid #111111;
          padding-bottom: 10px;
          transition: color .3s ease;
        }

        .footer-contact-link:hover {
          color: #555555;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
        }

        .footer-column h4 {
          color: #111111;
          font-size: 14px;
          letter-spacing: 2px;
          margin: 5px 0 12px;
          font-weight: 800;
        }

        .footer-column a {
          color: #555555;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: color .3s ease, transform .3s ease;
        }

        .footer-cookie-preferences {
          padding: 0;
          border: 0;
          background: transparent;
          color: #555555;
          font-size: 15px;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          transition: color .3s ease, transform .3s ease;
        }

        .footer-column a:hover {
          color: #111111;
          transform: translateX(4px);
        }

        .footer-cookie-preferences:hover {
          color: #111111;
          transform: translateX(4px);
        }

        .footer-contact p {
          color: #555555;
          font-size: 15px;
          font-weight: 600;
          margin: 0;
        }

        .footer-column .footer-email,
        .footer-column .footer-phone,
        .footer-column .footer-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #111111;
          font-size: 15px;
          font-weight: 800;
          word-break: break-word;
        }

        .footer-column .footer-enquiry {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          color: #111111;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .footer-bottom {
          border-top: 2px solid #111111;
        }

        .footer-bottom-inner {
          min-height: 65px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer-bottom-inner span {
          color: #555555;
          font-size: 12px;
          font-weight: 700;
        }

        .footer-speciality {
          letter-spacing: 1px;
          text-align: center;
        }

        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #111111;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-decoration: none;
        }

        .back-to-top:hover {
          color: #555555;
        }

        @media (max-width: 768px) {
          .footer {
            padding-top: 55px;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 45px 25px;
            padding-bottom: 50px;
          }

          .footer-brand-section {
            grid-column: 1 / -1;
          }

          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 20px;
            padding-bottom: 20px;
            gap: 14px;
          }

          .footer-speciality {
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-brand-section {
            grid-column: auto;
          }
        }
      `})]})}function Fu({eyebrow:a,title:u,text:c,light:d=!1}){return l.jsxs("div",{className:`section-heading ${d?"light":""}`,children:[a&&l.jsx("span",{className:"eyebrow",children:a}),l.jsx("h2",{children:u}),c&&l.jsx("p",{children:c})]})}function Xh({service:a,index:u,image:c}){const d=a.icon;return l.jsxs(ce,{to:"/services",className:"service-card",children:[(c||a.image)&&l.jsx("img",{className:"service-card-image",src:c||a.image,alt:"",loading:"lazy","aria-hidden":"true"}),l.jsxs("div",{className:"service-card-top",children:[l.jsxs("span",{className:"service-number",children:["0",u+1]}),l.jsx("span",{className:"icon-box",children:l.jsx(d,{size:21,"aria-hidden":"true"})})]}),l.jsx("h3",{children:a.title}),l.jsx("p",{children:a.description||a.desc}),l.jsxs("span",{className:"card-link",children:["Explore service ",l.jsx(ue,{size:16})]})]})}const ka=[{title:"Vehicle Dynamics & Chassis Engineering",icon:Hn,description:"We provide vehicle dynamics and chassis engineering solutions for suspension, steering, braking, and overall vehicle dynamics, focusing on improving ride comfort, handling, stability, and vehicle performance.",image:"/1.png",points:["Advanced Vehicle Dynamics & Performance Analysis","Suspension, Steering & Braking System Engineering","Ride Comfort & Handling Optimisation","Tyre Modelling & Performance Evaluation","Chassis Stability & Vehicle Control Analysis","Vehicle Testing, Validation & Engineering Assessment"],items:[{title:"Tire Modeling, Testing & Analysis",icon:zh,image:"/1.png",description:"We provide tyre modelling, performance optimisation, testing, and data analysis solutions, along with specialist vehicle dynamics support.",sections:[{title:"Tire Mathematical Modelling",description:"Development of physics-based and empirical tyre models to predict tyre forces, moments, and behaviour under varied operating conditions.",points:["Pacejka Magic Formula MF5.2 / 6.1 / 6.2 / MF 1.1","Custom tyre model development and tools","Cornering and longitudinal stiffness","Load and inflation sensitivity","Parameter identification and fitting","Tyre simulation and .tir parameter files","TYDEX data processing and custom simulation tools","FTire and CDTire"]},{title:"Tire Performance & Optimisation",description:"Evaluation and optimisation of tyre grip, handling, stability, and performance across different driving conditions.",points:["Tyre characterisation and performance optimisation","Contact patch analysis","Vertical stiffness and deflection analysis","Rolling resistance analysis","Thermal tyre analysis","Temperature, load, and pressure sensitivity","Tyre braking analysis"]},{title:"Tire Testing & Data Analysis",description:"Analysis of experimental tyre data to evaluate force characteristics, validate models, and assess tyre performance.",points:["Tyre test strategy and planning","Rolling resistance and high-speed testing","Static and dynamic footprint testing","Test data analysis and model correlation","Test reporting and test matrix optimisation"]},{title:"Motorsport Formula Student",description:"Engineering support for Formula Student teams to improve tyre modelling, performance, and on-track handling.",points:["Formula Student tyre consulting","Tyre race data analysis and optimisation"]}]},{title:"Braking System Design & Performance",icon:Hn,image:"/2.png",description:"We analyse braking system performance to improve stopping capability, braking stability, and overall vehicle safety under different driving conditions.",points:["Brake Force Distribution Analysis","Stopping Distance & Deceleration Analysis","Brake System Performance Evaluation"]},{title:"Suspension Design & Ride",icon:Uh,image:"/1.png",description:"We provide suspension engineering solutions to improve ride comfort, handling behaviour, and vehicle stability through suspension design and performance evaluation.",points:["Suspension Geometry & Kinematics","Ride Comfort & Handling Analysis","Spring & Damper Performance Evaluation"]},{title:"Steering System Engineering",icon:Yi,image:"/2.png",description:"We evaluate steering geometry, response, and system performance to support precise directional control and predictable vehicle handling.",points:["Steering Geometry & Kinematics","Steering Ratio & Response Analysis","Steering System Performance Evaluation"]},{title:"Chassis Dynamics & Stability",icon:Iu,image:"/3.png",description:"We analyse chassis behaviour and vehicle stability to improve handling response, cornering performance, and dynamic safety.",points:["Lateral Dynamics & Handling Analysis","Yaw Stability & Roll Behaviour","Vehicle Stability Assessment"]},{title:"Vehicle Mass, Inertia & CG Evaluation",icon:ia,image:"/4.png",description:"We evaluate vehicle mass properties and centre of gravity characteristics to understand their influence on vehicle dynamics, stability, and performance.",points:["Vehicle Mass Distribution Analysis","Centre of Gravity (CG) Evaluation","Mass Moment of Inertia Calculation"]}]},{title:"Powertrain & Energy Systems Engineering",icon:ia,description:"We support the development and analysis of conventional, hybrid, and electric powertrains through performance calculations, system modelling, energy consumption analysis, and efficiency optimisation.",image:"/2.png",points:["Conventional, Hybrid & Electric Powertrain Solutions","Energy Management & Efficiency Optimisation","Powertrain Design & Component Sizing","Drive Cycle Modelling & Simulation","Vehicle Performance & Dynamics Analysis","Powertrain System Integration & Evaluation"],items:[{title:"Energy Management & Drive Cycle Simulation",icon:Hn,image:"/1.png",description:"We provide energy management and drive cycle simulation solutions to evaluate vehicle energy consumption, optimise powertrain efficiency, and improve electric vehicle range and overall performance.",points:["Drive Cycle Modelling & Simulation","Energy Consumption & Efficiency Analysis","Energy Management Strategy & Optimisation"]},{title:"Powertrain Design, Sizing & Optimisation",icon:Yi,image:"/2.png",description:"We provide end-to-end powertrain design, sizing, simulation, and optimisation solutions to improve vehicle performance, drivetrain efficiency, energy utilisation, and overall powertrain capability.",points:["Powertrain Architecture & System Design","Electric Motor & Powertrain Component Sizing","Transmission & Gear Ratio Optimisation"]},{title:"Vehicle Performance & Longitudinal Dynamics",icon:ia,image:"/3.png",description:"We provide comprehensive vehicle performance modelling, simulation, and analysis to evaluate longitudinal vehicle behaviour, optimise tractive performance, and improve acceleration, gradeability, and overall driving efficiency.",points:["Road Load & Resistance Analysis","Tractive Effort & Wheel Torque Analysis","Acceleration & Maximum Speed Performance","Gradeability & Hill-Climbing Performance"]}]},{title:"Computer-Aided Design & Engineering (CAD/CAE)",icon:Yi,description:"We provide advanced computer-aided design and engineering solutions, combining 3D modelling, structural analysis, and engineering simulations to improve product design, evaluate component behaviour, and validate performance before physical development.",image:"/3.png",points:["Advanced CAD Modelling & Engineering Design","Structural Performance & Design Evaluation","Engineering Simulation & Analysis","Product Development & Design Optimisation","Component Strength & Durability Assessment","Virtual Testing & Design Validation"],items:[{title:"CAD Modelling & Engineering Design",icon:Eh,image:"/1.png",description:"We develop detailed 3D CAD models and engineering designs to support automotive component development, assembly integration, and design evaluation.",points:["3D Part & Assembly Modelling","Automotive Component Design","Surface & Parametric Modelling"]},{title:"Structural & Finite Element Analysis (FEA)",icon:Ih,image:"/2.png",description:"We perform structural simulations to evaluate component strength, stiffness, stress distribution, and deformation under different loading conditions.",points:["Static Structural Analysis","Stress & Deformation Analysis","Load & Boundary Condition Evaluation"]},{title:"Multibody Dynamics (MBD) Simulation",icon:qh,image:"/3.png",description:"We simulate the motion and interaction of interconnected mechanical systems to evaluate kinematic behaviour, dynamic response, and overall system performance.",points:["Kinematic & Motion Analysis","Suspension System Simulation","Dynamic Force & Motion Evaluation"]},{title:"Frontal Crash Simulation",icon:ld,image:"/4.png",description:"We analyse vehicle structural behaviour during frontal impact events to evaluate deformation patterns, energy absorption, and occupant safety performance.",points:["Frontal Impact Analysis","Structural Deformation Assessment","Crash Energy Absorption Evaluation"]},{title:"Model Refinement & Reporting",icon:Lh,image:"/1.png",description:"We refine engineering models, review simulation outcomes, and prepare technical documentation to improve design accuracy and support engineering decisions.",points:["CAD & CAE Model Refinement","Simulation Result Interpretation","Technical Documentation & Reporting"]},{title:"Bending Analysis",icon:Hn,image:"/2.png",description:"We evaluate the bending behaviour of engineering components under applied loads to assess structural strength, deformation, and resistance to failure.",points:["Bending Stress & Strain Analysis","Deflection & Load Assessment","Structural Strength Evaluation"]}]},{title:"Engineering Consulting & Technical Advisory",icon:wa,description:"We work closely with companies to address engineering challenges through technical expertise, design evaluations, analytical calculations, simulations, and practical engineering recommendations.",image:"/4.png",points:["Engineering Problem Solving & Technical Guidance","Design Review & Performance Evaluation","Engineering Calculations & Feasibility Studies","Simulation-Based Technical Assessment","Product Development & Design Recommendations","Project-Specific Engineering Support"],items:[{title:"Engineering Design & Technical Consultation",icon:_h,image:"/1.png",description:"We provide engineering design guidance and technical consultation to help businesses evaluate design concepts, resolve engineering challenges, and make informed technical decisions.",points:["Engineering Design Review & Assessment","Technical Feasibility & Concept Evaluation","Design Improvement Recommendations"]},{title:"Simulation, Analysis & Technical Validation",icon:Iu,image:"/2.png",description:"We support engineering decisions through analytical calculations, simulation studies, and technical evaluations to assess design performance and validate engineering solutions.",points:["Engineering Calculations & Analytical Studies","Simulation Results & Performance Evaluation","Technical Verification & Validation"]},{title:"Project-Based Engineering Support & Advisory",icon:fa,image:"/3.png",description:"We provide flexible engineering assistance and technical advisory throughout different project stages, helping companies address specific requirements and overcome development challenges.",points:["Project-Specific Engineering Assistance","Technical Problem Solving & Troubleshooting","Engineering Recommendations & Project Guidance"]}]},{title:"Technical Sourcing & Engineering Partnerships",icon:fa,description:"We connect companies with suitable engineering service providers, technical experts, testing facilities, and manufacturing partners based on their specific project requirements.",image:"/1.png",points:["Engineering Service Provider Network","Technical Resource Identification & Coordination","Testing & Validation Partner Sourcing","Manufacturing & Industrial Partnerships","Technical Talent & Expertise Sourcing","Strategic Engineering Collaboration"],items:[{title:"Engineering Services Sourcing & Coordination",icon:Vh,image:"/1.png",description:"We help companies identify and connect with suitable engineering service providers based on project scope, technical requirements, and business objectives.",points:["Engineering Service Provider Identification","Technical Capability & Requirement Assessment","Service Partner Coordination"]},{title:"Testing, Validation & Manufacturing Partnerships",icon:Mh,image:"/2.png",description:"We connect businesses with appropriate testing facilities, validation experts, and manufacturing partners to support product development and engineering requirements.",points:["Testing & Validation Facility Sourcing","Manufacturing Partner Identification","Testing & Production Coordination"]},{title:"Technical Talent & Strategic Engineering Partnerships",icon:od,image:"/3.png",description:"We facilitate connections with skilled technical professionals, engineering specialists, and strategic partners to support project execution and long-term engineering collaboration.",points:["Technical Expert & Specialist Sourcing","Engineering Talent Identification","Strategic Technical Partnerships"]}]}];function $n(a){return a.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Jh(){const a=[{src:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=85",alt:"Automotive engineering workshop"},{src:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=85",alt:"Performance vehicle"},{src:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=85",alt:"Sports car engineering"},{src:"https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=85",alt:"Automotive design"}];return l.jsxs(l.Fragment,{children:[l.jsxs("section",{className:"hero hero-static-section",children:[l.jsx("video",{className:"hero-background-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto","aria-hidden":"true",children:l.jsx("source",{src:"/videos/vehicle_dynamics_20s_v2.mp4",type:"video/mp4"})}),l.jsx("div",{className:"hero-static-overlay"}),l.jsx("div",{className:"hero-grid"}),l.jsxs("div",{className:"container hero-content",children:[l.jsxs("span",{className:"eyebrow hero-eyebrow",children:[l.jsx("i",{}),"AUTOMOTIVE ENGINEERING & SIMULATION"]}),l.jsxs("h1",{children:["Engineering",l.jsx("br",{}),l.jsx("em",{children:"Vehicle Motion."})]}),l.jsx("p",{className:"hero-lead",style:{maxWidth:"550px"},children:"Automotive engineering and simulation consultancy delivering technical insight for vehicle dynamics, design development and performance-led decision making."}),l.jsxs("div",{className:"hero-actions",children:[l.jsxs(ce,{to:"/services",className:"button button-primary",children:["Explore our services",l.jsx(ue,{size:17})]}),l.jsx(ce,{to:"/contact?type=project",className:"button button-outline",children:"Discuss a project"})]}),l.jsxs("div",{className:"hero-meta",children:[l.jsx("span",{children:"/ ENGINEERING"}),l.jsx("span",{children:"VEHICLE DYNAMICS · SIMULATION · DESIGN"})]})]}),l.jsx("div",{className:"hero-side-label",children:"PERFORMANCE THROUGH ENGINEERING"}),l.jsx("a",{className:"scroll-cue",href:"#intro",children:l.jsx(td,{size:17})})]}),l.jsx("section",{className:"intro-section section-pad",id:"intro",children:l.jsxs("div",{className:"container intro-grid",children:[l.jsxs("div",{children:[l.jsx("span",{className:"eyebrow",children:"WHO WE ARE"}),l.jsx("h2",{children:"Technical clarity for complex automotive engineering challenges."})]}),l.jsxs("div",{className:"intro-copy",children:[l.jsx("p",{className:"large-copy",children:Te.aboutText}),l.jsx("p",{children:"We help teams understand vehicle behaviour, evaluate design concepts, and turn simulation-led insight into practical engineering decisions across development and validation programmes."}),l.jsxs(ce,{to:"/about",className:"text-link",children:["Discover Flat Ride",l.jsx(Zi,{size:16})]})]})]})}),l.jsx("section",{className:"engineering-gallery",children:l.jsx("div",{className:"engineering-gallery-track",children:[...a,...a].map((u,c)=>l.jsx("div",{className:"engineering-gallery-item",children:l.jsx("img",{src:u.src,alt:c>=a.length?"":u.alt,loading:"lazy"})},c))})}),l.jsx("section",{className:"services-section section-pad",children:l.jsxs("div",{className:"container",children:[l.jsx(Fu,{eyebrow:"OUR EXPERTISE",title:"Engineering capabilities",text:"Focused technical services across vehicle dynamics, simulation and automotive development."}),l.jsx("div",{className:"services-grid",children:ka.map((u,c)=>l.jsx(Xh,{service:u,index:c},u.title))}),l.jsx("div",{className:"section-bottom-link",children:l.jsxs(ce,{to:"/services",className:"text-link",children:["View all services",l.jsx(Zi,{size:16})]})})]})}),l.jsxs("section",{className:"statement-section",children:[l.jsxs("div",{className:"container statement-grid",children:[l.jsxs("div",{className:"statement-kicker",children:["ENGINEERING",l.jsx("br",{}),"MINDSET ",l.jsx("span",{children:"/"})]}),l.jsxs("div",{children:[l.jsx("h2",{children:"From engineering questions to performance-led decisions."}),l.jsx("p",{children:"Combine analytical thinking, simulation and practical engineering judgement to move development forward."}),l.jsxs(ce,{to:"/contact",className:"button button-light",children:["Start a conversation",l.jsx(ue,{size:17})]})]})]}),l.jsx("div",{className:"statement-orbit orbit-one"}),l.jsx("div",{className:"statement-orbit orbit-two"})]}),l.jsx("section",{className:"approach-section section-pad",children:l.jsxs("div",{className:"container",children:[l.jsx(Fu,{eyebrow:"HOW WE THINK",title:"A methodical approach. Measurable engineering."}),l.jsxs("div",{className:"approach-grid",children:[l.jsxs("div",{children:[l.jsx(Hn,{}),l.jsx("h3",{children:"Understand"}),l.jsx("p",{children:"Define the vehicle-level objective, constraints and engineering question."})]}),l.jsxs("div",{children:[l.jsx(nd,{}),l.jsx("h3",{children:"Analyse"}),l.jsx("p",{children:"Apply appropriate modelling, simulation and technical evaluation methods."})]}),l.jsxs("div",{children:[l.jsx(Th,{}),l.jsx("h3",{children:"Optimise"}),l.jsx("p",{children:"Translate engineering findings into clear development recommendations."})]})]})]})}),l.jsx("section",{className:"cta-band home-cta-band",style:{backgroundImage:'linear-gradient(rgba(7, 20, 34, .58), rgba(7, 20, 34, .58)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTDfsith4KE-QTWehek230vQd0sYCVTJh-FYOnG0zUw&s=10")'},children:l.jsxs("div",{className:"container cta-inner",children:[l.jsxs("div",{children:[l.jsx("span",{className:"eyebrow",children:"HAVE AN ENGINEERING CHALLENGE?"}),l.jsx("h2",{children:"Let's talk performance."})]}),l.jsxs(ce,{to:"/contact",className:"button button-primary",children:["Contact our team",l.jsx(ue,{size:17})]})]})}),l.jsx("style",{children:`

        /* VIDEO HERO */

        .hero-static-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: max(680px, calc(100svh - 112px));
          background: #050505;
        }

        .hero-background-video {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-static-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.86) 0%,
            rgba(0, 0, 0, 0.60) 50%,
            rgba(0, 0, 0, 0.25) 100%
          );
          pointer-events: none;
        }

        .hero-static-section .hero-content {
          position: relative;
          z-index: 3;
          min-height: inherit;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-top: 70px;
          padding-bottom: 78px;
        }

        .hero-static-section .hero-eyebrow,
        .hero-static-section h1,
        .hero-static-section .hero-lead,
        .hero-static-section .hero-actions {
          margin-left: 0;
        }

        .hero-static-section .hero-meta {
          width: min(650px, 100%);
        }

        .hero-static-section .hero-grid {
          z-index: 2;
          pointer-events: none;
        }

        .hero-static-section .hero-side-label,
        .hero-static-section .scroll-cue {
          z-index: 4;
        }

        /* IMAGE SLIDER */

        .engineering-gallery {
          width: 100%;
          overflow: hidden;
          padding: 35px 0;
          background: #ffffff;
        }

        .engineering-gallery-track {
          display: flex;
          width: max-content;
          gap: 20px;
          animation: engineeringSlide 35s linear infinite;
        }

        .engineering-gallery-track:hover {
          animation-play-state: paused;
        }

        .engineering-gallery-item {
          width: 300px;
          height: 210px;
          flex-shrink: 0;
          overflow: hidden;
          background: #eeeeee;
        }

        .engineering-gallery-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .engineering-gallery-item:hover img {
          transform: scale(1.06);
        }

        @keyframes engineeringSlide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .hero-static-section {
            min-height: max(600px, calc(100svh - 92px));
          }

          .hero-static-section .hero-content {
            justify-content: flex-start;
            padding-top: clamp(54px, 10vh, 88px);
            padding-bottom: 72px;
          }

          .engineering-gallery-item {
            width: 240px;
            height: 170px;
          }

          .engineering-gallery {
            padding: 22px 0;
          }

        }

        @media (max-width: 600px) {
          .hero-static-section {
            min-height: max(620px, calc(100svh - 76px));
          }

          .hero-static-section .hero-content {
            padding-top: 58px;
            padding-bottom: 68px;
          }

          .hero-static-section h1 {
            margin-top: 22px;
            margin-bottom: 18px;
          }

          .hero-static-section .hero-actions {
            width: 100%;
          }

          .hero-static-section .hero-actions .button {
            min-height: 48px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .engineering-gallery-track {
            animation: none;
          }

        }

      `})]})}function Zh(){const a=[{icon:nd,title:"Technical Precision",description:"Applying engineering fundamentals and technical accuracy to every development challenge."},{icon:wa,title:"Analytical Thinking",description:"Using data, engineering analysis and structured problem-solving to support informed decisions."},{icon:Au,title:"Performance Optimisation",description:"Focusing on measurable improvements in vehicle behaviour, efficiency and performance."}],u=[{icon:Hn,title:"Reliable Engineering Solutions",description:"Delivering reliable solutions through simulation, analysis and real test data."},{icon:fa,title:"Industry Collaboration",description:"Building strong partnerships with industry, academia, test labs and manufacturers."},{icon:ld,title:"Safer Vehicle Development",description:"Helping clients build vehicles that are safer, more stable and better to drive."},{icon:rd,title:"Developing Skilled Engineers",description:"Supporting the next generation of engineers in vehicle dynamics and automotive technology."}],c=[["Vehicle Development","Engineering support for vehicle systems, architecture, integration and development."],["Engineering Modelling","Mathematical modelling and methods to understand and predict system behaviour."],["Simulation & Analysis","Simulation-driven analysis to evaluate performance and support technical decisions."],["Testing & Validation","Engineering testing, data evaluation and validation to assess system performance."],["Technical Consulting","Engineering guidance and technical collaboration to address development challenges."]];return l.jsxs("div",{className:"about-page",children:[l.jsx("section",{className:"about-hero",children:l.jsxs("div",{className:"about-container about-hero-content",children:[l.jsx("span",{className:"about-label",children:"ABOUT FLAT RIDE"}),l.jsxs("h1",{children:["Engineering built around",l.jsx("br",{}),l.jsx("span",{children:"vehicle performance."})]}),l.jsx("p",{children:"Bringing engineering knowledge, analytical thinking and technical expertise together to support automotive development and innovation."}),l.jsxs("a",{href:"/contact?type=contact",className:"about-btn",children:["Let's Connect ",l.jsx(ue,{size:18})]})]})}),l.jsx("section",{className:"about-marquee","aria-label":"Flat Ride capabilities",children:l.jsx("div",{className:"about-marquee-track",children:[0,1].map(d=>l.jsxs("div",{className:"about-marquee-group",children:[l.jsx("span",{children:"WHO WE ARE"}),l.jsx("b",{children:"✳"}),l.jsx("span",{children:"WHAT WE DO"}),l.jsx("b",{children:"✳"}),l.jsx("span",{children:"OUR APPROACH"}),l.jsx("b",{children:"✳"}),l.jsx("span",{children:"MISSION & VISION"}),l.jsx("b",{children:"✳"})]},d))})}),l.jsx("section",{className:"about-section",id:"who-we-are",children:l.jsx("div",{className:"about-container about-grid",children:l.jsxs("div",{className:"about-text",children:[l.jsx("span",{className:"about-label",children:"WHO WE ARE"}),l.jsxs("h2",{children:["Driven by vehicle dynamics.",l.jsx("br",{}),l.jsx("span",{children:"Committed to excellence."})]}),l.jsx("p",{children:"Flat Ride Engineering was established through a deep commitment to vehicle dynamics and the belief that every vehicle should be safe, stable and a pleasure to drive."}),l.jsx("p",{children:"We approach every project with dedication and bring expertise and precision to help our clients achieve their engineering goals."})]})})}),l.jsx("section",{className:"about-section what-we-do",id:"what-we-do",children:l.jsxs("div",{className:"about-container",children:[l.jsxs("div",{className:"section-heading",children:[l.jsx("span",{className:"about-label",children:"WHAT WE DO"}),l.jsxs("h2",{children:["Supporting every stage",l.jsx("br",{}),"of ",l.jsx("span",{children:"vehicle development."})]}),l.jsx("p",{children:"We combine engineering disciplines and technical capabilities to support automotive development from concept to validation."})]}),l.jsx("div",{className:"capability-layout",children:l.jsxs("div",{className:"capability-list",children:[c.map(([d,h])=>l.jsxs("div",{className:"capability-item",children:[l.jsxs("div",{children:[l.jsx("h3",{children:d}),l.jsx("p",{children:h})]}),l.jsx(ue,{size:20})]},d)),l.jsxs("a",{href:"/services",className:"services-link",children:["Explore Our Services ",l.jsx(ue,{size:18})]})]})})]})}),l.jsx("section",{className:"about-section approach-section",id:"our-approach",children:l.jsxs("div",{className:"about-container",children:[l.jsxs("div",{className:"section-heading",children:[l.jsx("span",{className:"about-label",children:"OUR ENGINEERING APPROACH"}),l.jsxs("h2",{children:["Engineering with",l.jsx("br",{}),l.jsx("span",{children:"purpose and precision."})]}),l.jsx("p",{children:"Our approach combines technical understanding, analytical methods and performance-focused thinking."})]}),l.jsx("div",{className:"approach-cards",children:a.map(d=>{const h=d.icon;return l.jsxs("article",{className:"approach-card",children:[l.jsx(h,{size:26}),l.jsx("h3",{children:d.title}),l.jsx("p",{children:d.description})]},d.title)})})]})}),l.jsx("section",{className:"about-section mission-section",id:"mission-vision",children:l.jsxs("div",{className:"about-container",children:[l.jsxs("div",{className:"section-heading",children:[l.jsx("span",{className:"about-label",children:"MISSION & VISION"}),l.jsxs("h2",{children:["Looking ahead.",l.jsx("br",{}),l.jsx("span",{children:"Engineering forward."})]})]}),l.jsxs("div",{className:"mission-grid",children:[l.jsxs("article",{className:"mission-card",children:[l.jsxs("div",{className:"mission-card-top",children:[l.jsx(Rh,{size:30}),l.jsx("span",{children:"OUR MISSION"})]}),l.jsx("h3",{children:"Delivering engineering solutions that make a difference."}),l.jsx("p",{children:"Our mission is to deliver reliable engineering solutions through simulation, analysis and real test data, while building strong collaborations that help clients develop safer, more stable vehicles."})]}),l.jsxs("article",{className:"mission-card",children:[l.jsxs("div",{className:"mission-card-top",children:[l.jsx(Au,{size:30}),l.jsx("span",{children:"OUR VISION"})]}),l.jsx("h3",{children:"Becoming a trusted name in automotive engineering."}),l.jsx("p",{children:"To become a leading engineering company, trusted worldwide, in vehicle dynamics and automotive engineering."})]})]}),l.jsxs("div",{className:"commitments-heading",children:[l.jsx("span",{className:"about-label",children:"OUR COMMITMENTS"}),l.jsx("h3",{children:"What drives our mission"})]}),l.jsx("div",{className:"mission-pillars",children:u.map(d=>{const h=d.icon;return l.jsxs("article",{className:"mission-pillar",children:[l.jsx(h,{size:27}),l.jsx("h4",{children:d.title}),l.jsx("p",{children:d.description})]},d.title)})})]})}),l.jsxs("section",{className:"about-cta",children:[l.jsx("span",{className:"about-label",children:"LET'S BUILD WHAT'S NEXT"}),l.jsxs("h2",{children:["Have an engineering",l.jsx("br",{}),l.jsx("span",{children:"challenge in mind?"})]}),l.jsx("p",{children:"Let's connect and explore how engineering expertise can support your next project."}),l.jsxs("a",{href:"/contact?type=project",className:"about-btn",children:["Discuss Your Project ",l.jsx(ue,{size:18})]})]}),l.jsx("style",{children:`
        .about-page,
        .about-page * {
          box-sizing: border-box;
        }

        .about-page {
          width: 100%;
          background: #fff;
          color: #102a42;
          overflow: hidden;
        }

        .about-container {
          width: min(1480px, calc(100% - 100px));
          margin-inline: auto;
        }

        .about-label {
          color: #111;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        /* HERO */

        .about-hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #0753ad;
        }

        .about-hero-content {
          padding-block: 110px;
        }

        .about-hero .about-label {
          color: #fff;
        }

        .about-hero h1 {
          max-width: 950px;
          margin: 24px 0;
          color: #fff;
          font-size: clamp(48px, 5.2vw, 78px);
          line-height: 1.08;
          letter-spacing: -2.5px;
        }

        .about-hero h1 span {
          color: #fff;
        }

        .about-hero-content p {
          max-width: 680px;
          color: #fff;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .about-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 25px;
          background: #0753ad;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          border-radius: 4px;
          transition: .3s;
        }

        .about-btn:hover {
          background: #063d82;
          transform: translateY(-2px);
        }

        /* MARQUEE */

        .about-marquee {
          overflow: hidden;
          background: #fff;
          border-block: 1px solid #ddd;
          padding: 22px 0;
        }

        .about-marquee-track {
          display: flex;
          width: max-content;
          animation: flatRideMarquee 30s linear infinite;
        }

        .about-marquee-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 45px;
          padding-right: 45px;
        }

        .about-marquee-group span {
          color: #111;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          white-space: nowrap;
        }

        .about-marquee-group b {
          color: #0753ad;
        }

        @keyframes flatRideMarquee {
          to { transform: translateX(-50%); }
        }

        /* GENERAL SECTIONS */

        .about-section {
          padding: 100px 0;
        }

        .about-grid {
          display: block;
        }

        .about-image {
          position: relative;
          width: 100%;
          height: clamp(390px, 34vw, 510px);
          overflow: hidden;
          border: 1px solid #0753ad;
          background: #fff;
        }

        .about-image-track {
          display: flex;
          width: 800%;
          height: 100%;
          animation: aboutImageSlide 32s linear infinite;
        }

        .about-image:hover .about-image-track {
          animation-play-state: paused;
        }

        .about-image-slide {
          position: relative;
          flex: 0 0 12.5%;
          width: 12.5%;
          height: 100%;
          margin: 0;
          padding: 18px;
          background: #fff;
        }

        .about-image-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .about-image-slide figcaption {
          position: absolute;
          right: 22px;
          bottom: 22px;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid #0753ad;
          background: #fff;
          color: #0753ad;
          font: 500 13px 'DM Mono', monospace;
        }

        @keyframes aboutImageSlide {
          to { transform: translateX(-50%); }
        }

        .about-text {
          max-width: 650px;
        }

        .about-text h2,
        .section-heading h2 {
          margin: 18px 0;
          font-size: clamp(34px, 3vw, 48px);
          line-height: 1.17;
          letter-spacing: -1.5px;
        }

        .about-text h2 span,
        .section-heading h2 span,
        .about-cta h2 span {
          color: #0753ad;
        }

        .about-text p,
        .section-heading p {
          color: #555;
          font-size: 15px;
          line-height: 1.85;
          margin: 17px 0;
        }

        /* WHAT WE DO */

        .what-we-do,
        .mission-section {
          background: #f5f7f9;
        }

        .section-heading {
          max-width: 850px;
          margin-bottom: 55px;
        }

        .capability-layout {
          display: block;
        }

        .capability-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .capability-item {
          display: grid;
          grid-template-columns: 1fr 25px;
          gap: 15px;
          padding: 23px 0;
          border-bottom: 1px solid #d6dce2;
        }

        .capability-item h3 {
          margin: 0 0 8px;
          font-size: 19px;
        }

        .capability-item p {
          margin: 0;
          color: #555;
          font-size: 14px;
          line-height: 1.7;
        }

        .capability-item > svg {
          color: #0753ad;
        }

        .services-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          align-self: flex-start;
          margin-top: 28px;
          color: #0753ad;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        /* APPROACH */

        .approach-section {
          background: #fff;
        }

        .approach-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .approach-card {
          min-width: 0;
          padding: 34px;
          background: #fff;
          border: 1px solid #dce4eb;
          border-radius: 5px;
          transition: .3s;
        }

        .approach-card > svg,
        .mission-card-top > svg,
        .mission-pillar > svg {
          color: #0753ad;
        }

        .approach-card:hover {
          border-color: #0753ad;
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,.06);
        }

        .approach-card h3 {
          margin: 20px 0 12px;
          font-size: 19px;
        }

        .approach-card p {
          color: #555;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        /* MISSION */

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
        }

        .mission-card {
          padding: 42px;
          min-height: 320px;
          border: 1px solid #dce4eb;
          border-radius: 5px;
          background: #fff;
        }

        .mission-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #111;
        }

        .mission-card-top span {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .mission-card h3 {
          margin: 35px 0 18px;
          font-size: clamp(24px, 2vw, 31px);
          line-height: 1.3;
        }

        .mission-card p {
          color: #555;
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }

        /* COMMITMENTS */

        .commitments-heading {
          margin: 75px 0 30px;
        }

        .commitments-heading h3 {
          font-size: 30px;
          margin: 14px 0 0;
        }

        .mission-pillars {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .mission-pillar {
          min-width: 0;
          padding: 28px 24px;
          background: #fff;
          border: 1px solid #dce4eb;
        }

        .mission-pillar h4 {
          font-size: 17px;
          line-height: 1.4;
          margin: 20px 0 14px;
        }

        .mission-pillar p {
          font-size: 14px;
          line-height: 1.8;
          color: #555;
          margin: 0;
        }

        /* CTA */

        .about-cta {
          padding: 100px 25px;
          text-align: center;
          background: #fff;
          border-top: 1px solid #ddd;
        }

        .about-cta h2 {
          margin: 20px 0;
          font-size: clamp(36px, 3.5vw, 54px);
          line-height: 1.15;
        }

        .about-cta p {
          max-width: 650px;
          margin: 0 auto 30px;
          color: #555;
          font-size: 15px;
          line-height: 1.8;
        }

        /* LAPTOP */

        @media (min-width: 1200px) {
          .about-container {
            width: min(1480px, calc(100% - 120px));
          }

          .about-section {
            padding-block: 110px;
          }

          .about-grid {
            grid-template-columns: 1.05fr .95fr;
          }
        }

        /* SMALL LAPTOP */

        @media (max-width: 1100px) and (min-width: 851px) {
          .about-container {
            width: calc(100% - 70px);
          }

          .about-grid {
            gap: 40px;
          }

          .about-image {
            height: 370px;
          }

          .capability-layout {
            gap: 35px;
          }

          .mission-pillars {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* TABLET */

        @media (max-width: 850px) {
          .about-container {
            width: calc(100% - 50px);
          }

          .about-grid,
          .capability-layout,
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .about-image {
            height: 400px;
          }

          .about-text {
            max-width: 100%;
          }

          .approach-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .mission-pillars {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .capability-image,
          .capability-image img {
            min-height: 350px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .about-container {
            width: calc(100% - 36px);
          }

          .about-hero {
            min-height: 520px;
          }

          .about-hero-content {
            padding-block: 80px;
          }

          .about-hero h1 {
            font-size: clamp(37px, 9vw, 48px);
            letter-spacing: -1.5px;
          }

          .about-hero-content p {
            font-size: 15px;
          }

          .about-section {
            padding: 70px 0;
          }

          .about-image {
            height: 290px;
          }

          .about-text h2,
          .section-heading h2 {
            font-size: 32px;
          }

          .section-heading {
            margin-bottom: 35px;
          }

          .approach-cards,
          .mission-pillars {
            grid-template-columns: 1fr;
          }

          .approach-card {
            padding: 26px;
          }

          .mission-card {
            padding: 27px;
            min-height: auto;
          }

          .commitments-heading {
            margin-top: 55px;
          }

          .about-cta {
            padding: 75px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-image-track,
          .about-marquee-track {
            animation: none;
          }
        }
      `})]})}function em(){const[a,u]=N.useState(null),c=d=>{u(h=>h===d?null:d)};return l.jsxs("div",{className:"services-page",children:[l.jsx("section",{className:"services-intro",children:l.jsxs("div",{className:"services-intro-content",children:[l.jsx("span",{className:"intro-label",children:"WHAT WE DO"}),l.jsxs("h1",{children:["OUR ",l.jsx("span",{className:"gradient-text",children:"SERVICES"})]}),l.jsx("p",{children:"Comprehensive automotive engineering solutions, from vehicle dynamics and chassis development to advanced design, simulation, and technical consulting."})]})}),ka.map((d,h)=>{var E,S;const v=d.icon,j=a===h;return l.jsxs("section",{className:"main-service",children:[l.jsxs("div",{className:"service-banner",style:{backgroundImage:`url("${d.image}")`},children:[l.jsx("div",{className:"banner-overlay"}),l.jsxs("div",{className:"banner-content",children:[l.jsx("div",{className:"category-icon",children:v&&l.jsx(v,{size:27})}),l.jsx("h2",{children:d.title}),l.jsx("p",{children:d.description}),((E=d.points)==null?void 0:E.length)>0&&l.jsx("ul",{className:"service-highlights","aria-label":`${d.title} highlights`,children:d.points.slice(0,3).map(k=>l.jsx("li",{children:k},k))})]})]}),((S=d.items)==null?void 0:S.length)>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"service-readmore",children:l.jsxs("button",{type:"button",className:"read-more-btn",onClick:()=>c(h),"aria-expanded":j,children:[j?"READ LESS":"READ MORE",j?l.jsx(bh,{size:18}):l.jsx(td,{size:18})]})}),j&&l.jsx("div",{className:"service-details",children:l.jsx("div",{className:"service-grid",children:d.items.map((k,_)=>{var P,U,Z;return l.jsxs("div",{className:"service-card",children:[k.image&&l.jsx("img",{className:"service-card-image",src:k.image,alt:k.title||k.name||"Automotive engineering",loading:"lazy"}),l.jsxs("div",{className:"service-card-top",children:[l.jsx("div",{className:"service-card-icon",children:k.icon?ga.createElement(k.icon,{size:22}):l.jsx(ra,{size:22})}),l.jsx(ce,{className:"service-card-arrow-link",to:`/services/${$n(d.title)}/${$n(k.title||k.name)}`,"aria-label":`View details for ${k.title||k.name}`,title:`View details for ${k.title||k.name}`,children:l.jsx(ue,{className:"service-card-arrow",size:20,"aria-hidden":"true"})})]}),l.jsx("h3",{children:k.title||k.name}),k.description&&l.jsx("p",{children:k.description}),((P=k.sections)==null?void 0:P.length)>0?l.jsx("div",{className:"nested-card service-card-sections",children:k.sections.map(B=>l.jsx("div",{className:"service-card-section-title",children:B.title},B.title))}):((U=k.points)==null?void 0:U.length)>0?l.jsx("div",{className:"nested-card",children:k.points.map((B,L)=>l.jsxs("div",{className:"nested-card-item",children:[l.jsx(ra,{size:15}),l.jsx("span",{children:B})]},`${B}-${L}`))}):null,((Z=k.items||k.subItems)==null?void 0:Z.length)>0&&l.jsx("div",{className:"nested-card",children:(k.items||k.subItems).map((B,L)=>l.jsxs("div",{className:"nested-card-item",children:[l.jsx(ra,{size:15}),l.jsx("span",{children:B.title||B.name||B})]},B.title||B.name||L))}),l.jsxs(ce,{className:"service-card-read-more",to:`/services/${$n(d.title)}/${$n(k.title||k.name)}`,children:["Read more",l.jsx(ue,{size:16,"aria-hidden":"true"})]})]},k.title||k.name||_)})})})]})]},d.title||h)}),l.jsx("style",{children:`
        .services-page,
        .services-page * {
          box-sizing: border-box;
        }

        .services-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
          color: #111;
          overflow: hidden;
          font-family: inherit;
        }

        /* INTRO */

        .services-intro {
          position: relative;
          min-height: 600px;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #080d16;
        }

        .services-intro-content {
          position: relative;
          z-index: 2;
          width: min(1480px, calc(100% - 120px));
          margin: 0 auto;
          padding: 100px 0;
        }

        .intro-label {
          display: inline-block;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          margin-bottom: 20px;
        }

        .services-intro-content h1 {
          max-width: 1000px;
          font-size: clamp(54px, 6vw, 88px);
          line-height: 1.02;
          font-weight: 800;
          letter-spacing: -3px;
          margin: 0 0 25px;
          color: #fff;
        }

        .gradient-text {
          color: #65b8ff;
        }

        .services-intro-content p {
          max-width: 680px;
          color: #e1e8f0;
          font-size: 17px;
          line-height: 1.8;
          margin: 0;
        }

        /* SERVICE SECTIONS */

        .main-service {
          width: min(1600px, calc(100% - 100px));
          margin: 0 auto;
          padding: 55px 0;
        }

        .service-banner {
          position: relative;
          min-height: 390px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-radius: 10px;
          background-color: #101923;
          background-position: center;
          background-size: cover;
          border: 1px solid #d8e0e8;
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(5,12,23,.96) 0%,
            rgba(5,12,23,.82) 48%,
            rgba(5,12,23,.24) 100%
          );
        }

        .banner-content {
          position: relative;
          z-index: 2;
          width: min(760px, 70%);
          padding: 55px 65px;
        }

        .category-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #55b5ff;
          border: 1px solid rgba(85,181,255,.5);
          border-radius: 10px;
          background: rgba(22,137,232,.14);
          margin-bottom: 22px;
        }

        .banner-content h2 {
          font-size: clamp(30px, 3vw, 44px);
          font-weight: 750;
          line-height: 1.15;
          margin: 0 0 16px;
          color: #fff;
        }

        .banner-content p {
          color: #d0d9e4;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
        }

        .service-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .service-highlights li {
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 999px;
          background: rgba(5,12,23,.45);
          color: #eef5fb;
          font-size: 12px;
          line-height: 1.4;
        }

        /* READ MORE */

        .service-readmore {
          display: flex;
          justify-content: center;
          padding: 25px 0 10px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 13px 28px;
          color: #fff;
          background: #0753ad;
          border: 1px solid #0753ad;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: .3s ease;
        }

        .read-more-btn:hover {
          background: #063d82;
          border-color: #063d82;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,.12);
        }

        /* SERVICE DETAILS */

        .service-details {
          padding: 25px 0 10px;
          animation: serviceFadeIn .35s ease;
        }

        @keyframes serviceFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        /* SERVICE CARDS */

        .service-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          position: relative;
          padding: 28px;
          border-radius: 9px;
          background: #fff;
          border: 1px solid #dce3ea;
          transition: .3s ease;
        }

        .service-card-image {
          display: block;
          width: 100%;
          height: 210px;
          margin-bottom: 22px;
          object-fit: cover;
          background: #f3f5f7;
          border-radius: 6px;
        }

        .service-card:hover {
          border-color: #0753ad;
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,.08);
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .service-card-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1689e8;
          background: rgba(22,137,232,.12);
          border-radius: 8px;
        }

        .service-card-arrow-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #71869d;
          transition: .3s ease;
        }

        .service-card-arrow-link:hover,
        .service-card-arrow-link:focus-visible {
          background: rgba(22,137,232,.12);
          color: #0753ad;
          outline: none;
        }

        .service-card-arrow {
          color: currentColor;
          transition: transform .3s ease;
        }

        .service-card-arrow-link:hover .service-card-arrow {
          transform: translate(3px, -3px);
        }

        .service-card h3 {
          color: #111;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 12px;
        }

        .service-card p {
          color: #555;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        .service-card-sections {
          padding-top: 6px;
          padding-bottom: 6px;
        }

        .service-card-section-title {
          padding: 10px 0;
          border-bottom: 1px solid #e1e5e9;
          color: #334b61;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
        }

        .service-card-section-title:last-child {
          border-bottom: 0;
        }

        .service-card-read-more {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          align-self: flex-start;
          margin-top: auto;
          padding-top: 22px;
          color: #0753ad;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .service-card-read-more:hover {
          color: #063d82;
        }

        /* NESTED DETAILS */

        .nested-card {
          margin-top: 20px;
          padding: 15px;
          background: #f6f8fa;
          border: 1px solid #e1e5e9;
          border-radius: 7px;
        }

        .nested-card-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 9px 0;
          color: #555;
          font-size: 13px;
          line-height: 1.55;
          border-bottom: 1px solid #e1e5e9;
        }

        .nested-card-item:last-child {
          border-bottom: none;
        }

        .nested-card-item svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #1689e8;
        }

        /* LARGE LAPTOP */

        @media (min-width: 1200px) {
          .main-service {
            width: min(1600px, calc(100% - 120px));
          }

          .service-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 26px;
          }
        }

        /* SMALL LAPTOP */

        @media (max-width: 1100px) and (min-width: 901px) {
          .services-intro-content {
            width: calc(100% - 80px);
          }

          .main-service {
            width: calc(100% - 80px);
            padding: 42px 0;
          }

          .service-banner {
            min-height: 350px;
          }

          .banner-content {
            padding: 40px;
          }

          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .service-card {
            padding: 23px;
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .services-intro {
            min-height: 480px;
          }

          .services-intro-content {
            width: calc(100% - 60px);
            padding: 80px 0;
          }

          .main-service {
            width: calc(100% - 60px);
            padding: 35px 0;
          }

          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .service-banner {
            min-height: 330px;
          }

          .banner-content {
            width: 85%;
            padding: 35px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .services-intro {
            min-height: 430px;
          }

          .services-intro-content {
            width: calc(100% - 40px);
            padding: 65px 0;
          }

          .services-intro-content h1 {
            font-size: clamp(42px, 10vw, 58px);
            letter-spacing: -1.5px;
          }

          .services-intro-content p {
            font-size: 15px;
          }

          .main-service {
            width: calc(100% - 36px);
            padding: 25px 0;
          }

          .service-banner {
            min-height: 300px;
          }

          .banner-content {
            width: 100%;
            padding: 25px;
          }

          .banner-content h2 {
            font-size: 27px;
          }

          .banner-content p {
            font-size: 14px;
          }

          .service-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .service-card {
            padding: 22px;
          }

          .service-card-image {
            height: 190px;
          }
        }

        @media (max-width: 380px) {
          .services-intro-content h1 {
            font-size: 38px;
          }

          .banner-content {
            padding: 20px;
          }

          .service-highlights {
            gap: 6px;
          }

          .service-highlights li {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-details {
            animation: none;
          }
        }
      `})]})}function tm(){var j,E,S;const{serviceSlug:a,itemSlug:u}=Vf(),c=ka.find(k=>$n(k.title)===a),d=(j=c==null?void 0:c.items)==null?void 0:j.find(k=>$n(k.title||k.name)===u);if(!c||!d)return l.jsx("section",{className:"service-detail-missing",children:l.jsxs("div",{className:"service-detail-container",children:[l.jsx("span",{className:"service-detail-eyebrow",children:"SERVICE DETAILS"}),l.jsx("h1",{children:"This service detail could not be found."}),l.jsxs(ce,{className:"service-detail-back",to:"/services",children:[l.jsx(Lu,{size:17}),"Back to all services"]})]})});const h=d.icon,v=d.title||d.name;return l.jsx("div",{className:"service-detail-page",children:l.jsxs("div",{className:"service-detail-container",children:[l.jsxs("nav",{className:"service-detail-breadcrumb","aria-label":"Breadcrumb",children:[l.jsxs(ce,{to:"/services",children:[l.jsx(Lu,{size:16}),"All services"]}),l.jsx("span",{children:"/"}),l.jsx("span",{children:c.title})]}),l.jsxs("header",{className:"service-detail-hero",children:[l.jsxs("div",{className:"service-detail-hero-copy",children:[l.jsx("span",{className:"service-detail-eyebrow",children:c.title}),l.jsxs("div",{className:"service-detail-title-row",children:[h&&l.jsx("span",{className:"service-detail-icon",children:l.jsx(h,{size:25,"aria-hidden":"true"})}),l.jsx("h1",{children:v})]}),l.jsx("p",{children:d.description||`Specialist ${v.toLowerCase()} support within ${c.title.toLowerCase()}.`}),l.jsxs(ce,{className:"service-detail-cta",to:"/contact?type=project",children:["Discuss your project",l.jsx(ue,{size:17})]})]}),l.jsx("div",{className:"service-detail-image-wrap",children:l.jsx("img",{src:d.image||c.image,alt:`${v} engineering`})})]}),l.jsxs("section",{className:"service-detail-content",children:[l.jsxs("div",{children:[l.jsx("span",{className:"service-detail-eyebrow",children:"WHAT WE COVER"}),l.jsx("h2",{children:"Engineering support for your requirements."}),l.jsxs("p",{children:["Our ",v.toLowerCase()," work is tailored to the vehicle, development stage, and questions your team needs to answer. We combine practical engineering judgement with analysis and validation to support confident technical decisions."]})]}),((E=d.sections)==null?void 0:E.length)>0?l.jsx("div",{className:"service-detail-sections",children:d.sections.map(k=>{var _;return l.jsxs("article",{className:"service-detail-section",children:[l.jsx("h3",{children:k.title}),k.description&&l.jsx("p",{children:k.description}),((_=k.points)==null?void 0:_.length)>0&&l.jsx("ul",{className:"service-detail-points",children:k.points.map(P=>l.jsxs("li",{children:[l.jsx(pa,{size:17,"aria-hidden":"true"}),l.jsx("span",{children:P})]},P))})]},k.title)})}):((S=d.points)==null?void 0:S.length)>0?l.jsx("ul",{className:"service-detail-points",children:d.points.map(k=>l.jsxs("li",{children:[l.jsx(pa,{size:17,"aria-hidden":"true"}),l.jsx("span",{children:k})]},k))}):null]}),l.jsxs("section",{className:"service-detail-bottom",children:[l.jsxs("div",{children:[l.jsx("span",{className:"service-detail-eyebrow",children:"NEXT STEP"}),l.jsx("h2",{children:"Let’s talk about your engineering challenge."})]}),l.jsxs(ce,{className:"service-detail-cta",to:"/contact?type=project",children:["Contact our team",l.jsx(ue,{size:17})]})]})]})})}const De={category:"Vehicle Dynamics",series:"Foundations of Vehicle Dynamics",part:"Part 1",title:"Maurice Olley: The Father of Vehicle Dynamics",excerpt:"How Maurice Olley turned vehicle handling from guesswork into measured engineering.",author:"Flat Ride Engineering",date:"18 November 2026",readTime:"4 min read",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPlSmFXtp5xmuyHHjO45clk5WJaIsas7JRNAQIHmh3w&s=10"};function nm(){const[a,u]=N.useState(!1);return l.jsxs("main",{className:"blog-page",children:[l.jsx("header",{className:"blog-header",children:l.jsxs("div",{className:"blog-container",children:[l.jsx("span",{className:"blog-eyebrow",children:"FIELD NOTES"}),l.jsxs("h1",{children:["Engineering insight.",l.jsx("br",{}),l.jsx("span",{children:"Explained clearly."})]}),l.jsx("p",{children:"Technical stories, engineering history and practical thinking from the Flat Ride Engineering team."})]})}),l.jsx("section",{className:"blog-content",children:l.jsx("div",{className:"blog-container",children:a?l.jsxs("article",{className:"blog-article",children:[l.jsx("button",{type:"button",className:"blog-back",onClick:()=>u(!1),children:"← Back to all field notes"}),l.jsxs("div",{className:"blog-article-heading",children:[l.jsxs("span",{className:"blog-category",children:[De.series," · ",De.part]}),l.jsx("h2",{children:De.title}),l.jsxs("div",{className:"blog-meta",children:[l.jsxs("span",{children:[l.jsx(Bh,{size:14}),"By ",De.author]}),l.jsxs("span",{children:[l.jsx(Ou,{size:14}),De.date]}),l.jsxs("span",{children:[l.jsx(Du,{size:14}),De.readTime]})]})]}),l.jsx("img",{className:"blog-article-image",src:De.image,alt:"Classic car representing early vehicle engineering"}),l.jsxs("div",{className:"blog-article-body",children:[l.jsx("p",{className:"blog-lead",children:"Vehicle dynamics is the study of how a car moves: how it speeds up, brakes, rides over bumps and turns. Today it is a proper science. But 100 years ago, it was mostly guesswork."}),l.jsxs("p",{children:["The man who changed that was"," ",l.jsx("a",{href:"https://corvettemuseum.org/?p=11173",target:"_blank",rel:"noreferrer",children:"Maurice Olley"})," ","(1889–1972). Words we use every day, like understeer, flat ride and roll centre, come from his work."]}),l.jsx("h3",{children:"Before Olley"}),l.jsx("p",{children:"In the 1920s, cars were tuned by feel. Almost all of them used a solid front axle on leaf springs. Nobody really knew how tyres made cornering force."}),l.jsx("p",{children:"Olley was not the first to study this, but he was among the first to measure and record it properly."}),l.jsx("h3",{children:"From Rolls-Royce to Cadillac"}),l.jsxs("p",{children:["Olley grew up in North Wales. In 1912 he joined"," ",l.jsx("a",{href:"https://www.millikenresearch.com/MauriceOlleybyWFMilliken.pdf",target:"_blank",rel:"noreferrer",children:"Rolls-Royce"})," ","and soon worked in Sir Henry Royce's own design team. Later he ran Rolls-Royce's factory in America."]}),l.jsx("p",{children:"When that business closed after the 1929 crash, he joined Cadillac in 1930, where much of the foundation of vehicle dynamics was laid."}),l.jsx("h3",{children:"What He Discovered"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Flat ride"})," — Front springs should be softer than rear springs so the car stays level over bumps."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Independent front suspension"})," — Soft springs exposed shake in solid axles, leading to short-long arm suspension."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Understeer"})," — Olley began testing cars on a circular skid pad and popularised the term."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Tyre data"})," — He obtained the first tyre force data in the United States from Goodyear."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Roll centre and anti-roll bars"})," — His team defined anti-dive and anti-squat geometry."]})]}),l.jsx("h3",{children:"The First Corvette"}),l.jsx("p",{children:"In 1952 Olley became head of Chevrolet Research and Development. There he helped design the chassis of the first Corvette. In 2008 he was inducted into the Corvette Hall of Fame."}),l.jsx("h3",{children:"Fun Facts"}),l.jsxs("ul",{children:[l.jsx("li",{children:"He did his maths with a slide rule, with no computers."}),l.jsx("li",{children:"GM kept his notes secret for 30 years before they were published as a book in 2002."}),l.jsx("li",{children:"His notes include cartoons he drew himself."}),l.jsx("li",{children:"He reacted enthusiastically when he first heard how aircraft engineers calculated stability."})]}),l.jsx("h3",{children:"His Book"}),l.jsxs("p",{children:["Olley's notes became"," ",l.jsx("em",{children:"Chassis Design: Principles and Analysis"})," by William and Douglas Milliken (SAE, 2002). It remains one of the key references on suspension and handling."]}),l.jsxs("p",{children:["His lesson was simple:"," ",l.jsx("strong",{children:"measure first, then design."})," It is also the idea behind our company name, Flat Ride Engineering."]})]})]}):l.jsx("div",{className:"blog-grid",children:l.jsxs("article",{className:"blog-card",children:[l.jsxs("button",{type:"button",className:"blog-card-image",onClick:()=>u(!0),"aria-label":`Read ${De.title}`,children:[l.jsx("img",{src:De.image,alt:De.title}),l.jsxs("span",{children:[De.series," · ",De.part]})]}),l.jsxs("div",{className:"blog-card-content",children:[l.jsx("span",{className:"blog-category",children:De.category}),l.jsx("h2",{children:l.jsx("button",{type:"button",onClick:()=>u(!0),children:De.title})}),l.jsx("p",{children:De.excerpt}),l.jsxs("div",{className:"blog-meta",children:[l.jsxs("span",{children:[l.jsx(Ou,{size:14}),De.date]}),l.jsxs("span",{children:[l.jsx(Du,{size:14}),De.readTime]})]})]})]})})})})]})}const rm=[{number:"01",title:"Automotive Design Engineer",type:"Full-time",category:"Engineering",description:"Contribute to automotive component design, CAD development, and practical engineering design solutions.",icon:Ch},{number:"02",title:"Vehicle Dynamics Engineer",type:"Full-time",category:"Engineering",description:"Work across suspension, steering, ride, handling, and vehicle dynamics development.",icon:Yi},{number:"03",title:"CAE / Simulation Engineer",type:"Full-time",category:"Simulation",description:"Support engineering analysis, simulation, validation, and performance optimisation.",icon:Ph}],im=[{icon:wa,title:"Innovative Engineering",description:"Work on challenging automotive engineering problems and explore new technical approaches."},{icon:rd,title:"Continuous Learning",description:"Build technical knowledge through practical engineering exposure and collaboration."},{icon:od,title:"Collaborative Culture",description:"Work alongside people who value technical thinking, teamwork, and quality."},{icon:Nh,title:"Career Development",description:"Grow your capabilities through meaningful engineering responsibilities."}],oa=Te.careersEmail;function lm(){return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        .fr-careers { --career-blue:#2497e8; --career-ink:#111719; --career-muted:#aab2b5; color:#f5f7f7; background:#111719; font-family:'DM Sans',sans-serif; overflow:hidden; }
        .fr-careers * { box-sizing:border-box; }
        .career-container { width:min(1180px,calc(100% - 48px)); margin:0 auto; }
        .career-hero { min-height:690px; position:relative; display:flex; align-items:center; isolation:isolate; background:#101719 url('https://www.multimatic.com/_next/image?url=https%3A%2F%2Fmultimatic.wpenginepowered.com%2Fwp-content%2Fuploads%2F2020%2F08%2FMTC-Career.jpg&w=640&q=75') center/cover no-repeat; }
        .career-hero:before { content:''; position:absolute; inset:0; z-index:-1; background:linear-gradient(90deg,rgba(8,13,15,.94) 0%,rgba(8,13,15,.72) 48%,rgba(8,13,15,.22) 100%); }
        .career-hero-inner { padding:130px 0 145px; }
        .career-kicker { display:flex; align-items:center; gap:13px; color:var(--career-blue); font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; }
        .career-kicker:before { content:''; width:34px; height:1px; background:currentColor; }
        .career-hero h1 { max-width:850px; margin:25px 0 22px; font:800 clamp(48px,7.5vw,94px)/.99 'Manrope',sans-serif; letter-spacing:-4px; text-transform:uppercase; }
        .career-hero h1 span { color:var(--career-blue); }
        .career-hero-copy { max-width:560px; color:#d1d7d8; font-size:16px; line-height:1.85; margin:0 0 34px; }
        .career-button { display:inline-flex; align-items:center; gap:22px; padding:16px 21px; background:var(--career-blue); color:#071116; text-decoration:none; font-size:11px; font-weight:800; letter-spacing:1.2px; transition:.25s ease; }
        .career-button:hover { background:#fff; transform:translateY(-3px); }
        .career-hero-foot { position:absolute; bottom:0; left:0; right:0; display:flex; justify-content:space-between; gap:20px; padding:20px max(24px,calc((100% - 1180px)/2)); border-top:1px solid rgba(255,255,255,.22); color:#d1d7d8; font-size:9px; letter-spacing:2px; text-transform:uppercase; }
        .career-intro { padding:105px 0 100px; background:#f3f5f4; color:#171d1e; }
        .career-intro-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:70px; align-items:start; }
        .career-intro-label,.career-section-label { color:#168bd5; font-size:10px; font-weight:800; letter-spacing:2.5px; text-transform:uppercase; }
        .career-intro h2 { margin:0; font:800 clamp(34px,4.5vw,57px)/1.08 'Manrope',sans-serif; letter-spacing:-2px; text-transform:uppercase; }
        .career-intro-copy { color:#5d6668; font-size:16px; line-height:1.85; }
        .career-opportunities { padding:100px 0; background:#111719; }
        .career-opportunities-head { display:flex; justify-content:space-between; align-items:end; margin-bottom:42px; }
        .career-opportunities h2 { margin:10px 0 0; font:800 clamp(34px,4vw,52px)/1.1 'Manrope',sans-serif; letter-spacing:-2px; text-transform:uppercase; }
        .career-list { border-top:1px solid rgba(255,255,255,.14); }
        .career-opportunity { display:grid; grid-template-columns:70px 1.5fr 1fr 1fr 44px; align-items:center; gap:24px; min-height:128px; border-bottom:1px solid rgba(255,255,255,.14); color:#f5f7f7; text-decoration:none; transition:.25s ease; }
        .career-opportunity:hover { background:rgba(36,151,232,.07); padding:0 18px; }
        .career-number { color:var(--career-blue); font-size:11px; font-weight:800; }
        .career-opportunity-icon { width:42px; height:42px; display:grid; place-items:center; background:rgba(36,151,232,.12); color:var(--career-blue); }
        .career-opportunity h3 { margin:0 0 8px; font:700 21px/1.25 'Manrope',sans-serif; }
        .career-opportunity p { margin:0; color:#abb4b6; font-size:13px; line-height:1.6; }
        .career-tag { color:#d5dcdd; font-size:11px; text-transform:uppercase; letter-spacing:1.2px; }
        .career-arrow { width:44px; height:44px; display:grid; place-items:center; border:1px solid rgba(255,255,255,.18); }
        .career-benefits { padding:105px 0; background:#f3f5f4; color:#171d1e; }
        .career-benefits h2 { max-width:700px; margin:14px 0 48px; font:800 clamp(34px,4.5vw,54px)/1.08 'Manrope',sans-serif; letter-spacing:-2px; text-transform:uppercase; }
        .career-benefits-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .career-benefit { min-height:270px; padding:28px; border:1px solid #dce2e1; background:#fff; }
        .career-benefit-icon { width:48px; height:48px; display:grid; place-items:center; color:var(--career-blue); border:1px solid #dce2e1; }
        .career-benefit h3 { margin:28px 0 12px; font:800 18px/1.3 'Manrope',sans-serif; }
        .career-benefit p { margin:0; color:#687174; font-size:14px; line-height:1.75; }
        .career-cta { padding:75px 0; background:var(--career-blue); color:#071116; }
        .career-cta-inner { display:flex; justify-content:space-between; align-items:center; gap:40px; }
        .career-cta h2 { margin:8px 0 0; font:800 clamp(30px,4vw,48px)/1.1 'Manrope',sans-serif; letter-spacing:-1.5px; text-transform:uppercase; }
        .career-cta .career-button { background:#111719; color:#fff; }
        .career-cta .career-button:hover { background:#fff; color:#111719; }
        @media (max-width:900px) {
          .career-container { width:min(100% - 32px,1180px); }
          .career-intro-grid { grid-template-columns:1fr; gap:28px; }
          .career-benefits-grid { grid-template-columns:repeat(2,1fr); }
          .career-opportunity { grid-template-columns:50px 1fr 100px 44px; }
          .career-opportunity p { display:none; }
        }
        @media (max-width:620px) {
          .career-hero { min-height:620px; }
          .career-hero-inner { padding:110px 0 120px; }
          .career-hero h1 { font-size:44px; letter-spacing:-2px; }
          .career-hero-foot { display:none; }
          .career-intro,.career-opportunities,.career-benefits { padding:70px 0; }
          .career-benefits-grid { grid-template-columns:1fr; }
          .career-opportunity { grid-template-columns:38px 1fr 44px; gap:12px; }
          .career-tag { display:none; }
          .career-cta-inner { align-items:flex-start; flex-direction:column; }
        }
      `}),l.jsxs("main",{className:"fr-careers",children:[l.jsxs("section",{className:"career-hero",children:[l.jsxs("div",{className:"career-container career-hero-inner",children:[l.jsx("div",{className:"career-kicker",children:"Careers"}),l.jsxs("h1",{children:["Build the ",l.jsx("span",{children:"Future"})]}),l.jsx("p",{className:"career-hero-copy",children:"Join a team solving practical automotive engineering challenges through design, simulation, and collaboration."}),l.jsxs("a",{className:"career-button",href:"#opportunities",children:["Explore opportunities ",l.jsx(ue,{size:16})]})]}),l.jsxs("div",{className:"career-hero-foot",children:[l.jsx("span",{children:"Engineering"}),l.jsx("span",{children:"Innovation"}),l.jsx("span",{children:"Collaboration"})]})]}),l.jsx("section",{className:"career-intro",children:l.jsxs("div",{className:"career-container career-intro-grid",children:[l.jsxs("div",{children:[l.jsx("div",{className:"career-intro-label",children:"Why work with us"}),l.jsx("h2",{children:"Engineering that moves forward"})]}),l.jsx("p",{className:"career-intro-copy",children:"We bring together technical expertise, curiosity, and a commitment to quality. You will contribute to meaningful automotive projects while developing skills through hands-on experience and support from experienced colleagues."})]})}),l.jsx("section",{className:"career-opportunities",id:"opportunities",children:l.jsxs("div",{className:"career-container",children:[l.jsx("div",{className:"career-opportunities-head",children:l.jsxs("div",{children:[l.jsx("div",{className:"career-section-label",children:"Open positions"}),l.jsx("h2",{children:"Explore opportunities"})]})}),l.jsx("div",{className:"career-list",children:rm.map(a=>(a.icon,l.jsxs("a",{className:"career-opportunity",href:`mailto:${oa}?subject=${encodeURIComponent(a.title)} application`,children:[l.jsx("span",{className:"career-number",children:a.number}),l.jsxs("div",{children:[l.jsx("h3",{children:a.title}),l.jsx("p",{children:a.description})]}),l.jsx("span",{className:"career-tag",children:a.category}),l.jsx("span",{className:"career-tag",children:a.type}),l.jsx("span",{className:"career-arrow",children:l.jsx(ue,{size:18})})]},a.number)))})]})}),l.jsx("section",{className:"career-benefits",children:l.jsxs("div",{className:"career-container",children:[l.jsx("div",{className:"career-section-label",children:"What you will find"}),l.jsx("h2",{children:"Grow with meaningful work"}),l.jsx("div",{className:"career-benefits-grid",children:im.map(a=>{const u=a.icon;return l.jsxs("article",{className:"career-benefit",children:[l.jsx("div",{className:"career-benefit-icon",children:l.jsx(u,{size:22})}),l.jsx("h3",{children:a.title}),l.jsx("p",{children:a.description})]},a.title)})})]})}),l.jsx("section",{className:"career-cta",children:l.jsxs("div",{className:"career-container career-cta-inner",children:[l.jsxs("div",{children:[l.jsx("div",{className:"career-section-label",style:{color:"#071116"},children:"Get in touch"}),l.jsx("h2",{children:"Ready to make an impact?"})]}),l.jsxs("a",{className:"career-button",href:`mailto:${oa}`,children:[l.jsx(id,{size:16})," ",oa]})]})})]})]})}const om={contact:{label:"GENERAL ENQUIRY",title:"Contact us",description:"For general questions, introductions, and other enquiries.",submitLabel:"Send enquiry",fields:[{name:"fullName",label:"Full name",autoComplete:"name",required:!0},{name:"companyName",label:"Company name",autoComplete:"organization",required:!0},{name:"emailAddress",label:"Email address",type:"email",autoComplete:"email",required:!0},{name:"subject",label:"Subject",required:!0}]},project:{label:"PROJECT ENQUIRY",title:"Tell us about your project",description:"Share the project essentials and our engineering team will follow up.",submitLabel:"Submit project enquiry",fields:[{name:"fullName",label:"Full name",autoComplete:"name",required:!0},{name:"companyName",label:"Company name",autoComplete:"organization",required:!0},{name:"workEmail",label:"Work email",type:"email",autoComplete:"email",required:!0},{name:"phoneNumber",label:"Phone number (optional)",type:"tel",autoComplete:"tel"},{name:"projectType",label:"Project type",required:!0,options:["Vehicle dynamics","Suspension & chassis engineering","Simulation & analysis","Powertrain engineering","CAD / CAE","Testing & validation","Other"]},{name:"projectTimeline",label:"Project timeline (optional)"}]},business:{label:"BUSINESS & PARTNERSHIPS",title:"Business & partnership enquiries",description:"For collaboration, supplier, academic, and partnership opportunities.",submitLabel:"Send business enquiry",fields:[{name:"fullName",label:"Full name",autoComplete:"name",required:!0},{name:"companyName",label:"Company name",autoComplete:"organization",required:!0},{name:"emailAddress",label:"Email address",type:"email",autoComplete:"email",required:!0}]}};function am({type:a}){const[u,c]=N.useState({message:"",kind:""}),[d,h]=N.useState(!1),v=om[a];if(!v)return null;async function j(E){if(E.preventDefault(),d)return;const S=E.currentTarget;h(!0),c({message:"",kind:""});try{const k=await fetch(`/api/enquiries/${a}`,{method:"POST",body:new FormData(S)});let _;try{_=await k.json()}catch{throw new Error("The server returned an invalid response. Please try again.")}if(!k.ok||!_.success)throw new Error(_.message||"Unable to send your enquiry.");S.reset(),c({message:_.message||"Thank you. Your enquiry has been received.",kind:"success"})}catch(k){console.error("Enquiry submission error:",k),c({message:k instanceof TypeError?"Cannot connect to the server. Please check that the backend is running and try again.":k.message||"Unable to send your enquiry. Please try again.",kind:"error"})}finally{h(!1)}}return l.jsxs("article",{className:`enquiry-card enquiry-card-${a}`,children:[l.jsxs("header",{className:"enquiry-card-heading",children:[l.jsx("div",{className:"enquiry-card-kicker",children:v.label}),l.jsx("h3",{children:v.title}),l.jsx("p",{children:v.description})]}),l.jsxs("form",{className:"enquiry-form",onSubmit:j,children:[l.jsxs("div",{className:"enquiry-fields",children:[v.fields.map(E=>l.jsxs("label",{children:[E.label,E.required&&l.jsx("span",{"aria-hidden":"true",children:" *"}),E.options?l.jsxs("select",{name:E.name,defaultValue:"",required:E.required,children:[l.jsx("option",{value:"",disabled:!0,children:"Select project type"}),E.options.map(S=>l.jsx("option",{value:S,children:S},S))]}):l.jsx("input",{name:E.name,type:E.type||"text",autoComplete:E.autoComplete,required:E.required,maxLength:E.type==="email"?254:200,placeholder:E.label})]},E.name)),a==="business"&&l.jsxs("label",{children:["Type of enquiry ",l.jsx("span",{"aria-hidden":"true",children:" *"}),l.jsxs("select",{name:"enquiryType",defaultValue:"",required:!0,children:[l.jsx("option",{value:"",disabled:!0,children:"Select enquiry type"}),l.jsx("option",{value:"Business partnership",children:"Business partnership"}),l.jsx("option",{value:"Technical collaboration",children:"Technical collaboration"}),l.jsx("option",{value:"Academic collaboration",children:"Academic collaboration"}),l.jsx("option",{value:"Supplier enquiry",children:"Supplier enquiry"}),l.jsx("option",{value:"Other",children:"Other"})]})]}),a==="project"&&l.jsxs(l.Fragment,{children:[l.jsxs("label",{className:"enquiry-field-wide",children:["Project description"," ",l.jsx("span",{"aria-hidden":"true",children:" *"}),l.jsx("textarea",{name:"projectDescription",rows:"5",maxLength:"5000",required:!0})]}),l.jsxs("label",{className:"enquiry-field-wide enquiry-attachment-field",children:["Attach files or technical drawings (optional)",l.jsx("input",{type:"file",name:"attachments",accept:".pdf,.png,.jpg,.jpeg,.webp,.dxf,.dwg,.step,.stp,.iges,.igs",multiple:!0}),l.jsx("small",{children:"PDF, images, DXF, DWG, STEP or IGES · up to 3 files, 8 MB each"})]})]}),a!=="project"&&l.jsxs("label",{className:"enquiry-field-wide",children:["Message ",l.jsx("span",{"aria-hidden":"true",children:" *"}),l.jsx("textarea",{name:"message",rows:"5",maxLength:"5000",required:!0})]})]}),l.jsxs("div",{className:"enquiry-submit-row",children:[l.jsxs("button",{className:"enquiry-submit",type:"submit",disabled:d,children:[d?"Sending...":v.submitLabel,!d&&l.jsx(Zi,{size:17})]}),l.jsx("span",{className:"enquiry-required-note",children:"* Required fields"})]}),a==="project"&&l.jsx("p",{className:"enquiry-captcha-note",children:"CAPTCHA protection must be configured before this form is used publicly."}),l.jsxs("p",{className:`enquiry-status${u.kind?` is-${u.kind}`:""}`,role:"status","aria-live":"polite",children:[u.kind==="success"&&l.jsx(pa,{size:16,"aria-hidden":"true"}),u.message]})]})]})}function sm(){const[a,u]=yh(),c=a.get("type"),d=["contact","project","business"].includes(c)?c:"contact",h=String(Te.whatsappNumber).replace(/\D/g,"");return l.jsxs(l.Fragment,{children:[l.jsxs("main",{className:"contact-page",children:[l.jsxs("section",{className:"contact-hero",children:[l.jsx("div",{className:"contact-hero-image"}),l.jsxs("div",{className:"contact-container contact-hero-content",children:[l.jsx("span",{className:"contact-eyebrow",children:"FLAT RIDE ENGINEERING / CONTACT"}),l.jsxs("h1",{children:["Let's start a",l.jsx("br",{}),l.jsx("span",{children:"conversation."})]}),l.jsx("p",{children:"Engineering challenges require the right expertise. Connect with our team to discuss your next project, technical requirements, or collaboration opportunities."}),l.jsxs("a",{href:"#contact-details",className:"contact-hero-link",children:["GET IN TOUCH",l.jsx(ue,{size:18})]})]}),l.jsxs("div",{className:"contact-hero-caption",children:[l.jsx("span",{children:"ENGINEERING EXCELLENCE"}),l.jsx("span",{children:"FROM PHYSICS TO PERFORMANCE"})]})]}),l.jsx("section",{className:"contact-intro",children:l.jsxs("div",{className:"contact-container contact-intro-grid",children:[l.jsxs("div",{children:[l.jsx("span",{className:"section-label",children:"CONNECT WITH US"}),l.jsxs("h2",{children:["Great engineering",l.jsx("br",{}),l.jsx("span",{children:"starts with a conversation."})]})]}),l.jsx("p",{children:"Whether you are developing a new product, exploring engineering solutions, or looking for a technical partner, our team is ready to hear from you."})]})}),l.jsx("section",{className:"contact-main",id:"contact-details",children:l.jsxs("div",{className:"contact-container",children:[l.jsxs("header",{className:"contact-enquiry-heading",children:[l.jsx("span",{className:"section-label",children:"GENERAL ENQUIRY"}),l.jsx("h2",{children:"Contact our team."}),l.jsx("p",{children:"Select the type of enquiry below and send it directly to the right team."})]}),l.jsx("div",{className:"enquiry-choice-list",role:"group","aria-label":"Select enquiry type",children:[["contact","General enquiries","Questions, introductions, and general messages."],["project","Tell us about your project","Share a project brief, timeline, and technical drawings."],["business","Business & partnership enquiries","Partnerships, suppliers, and collaboration opportunities."]].map(([v,j,E])=>l.jsxs("button",{type:"button",className:`enquiry-choice${d===v?" is-active":""}`,"aria-pressed":d===v,onClick:()=>{u({type:v},{replace:!0})},children:[l.jsx("span",{children:j}),l.jsx("small",{children:E}),l.jsx(ue,{size:20,"aria-hidden":"true"})]},v))}),l.jsx("div",{className:"contact-main-grid",children:l.jsx(am,{type:d},d)}),l.jsxs("div",{className:"contact-information",children:[l.jsxs("div",{className:"contact-information-heading",children:[l.jsx(Oh,{size:18}),l.jsx("span",{children:"Prefer a direct conversation?"})]}),l.jsxs("a",{className:"contact-channel",href:`mailto:${Te.email}`,children:[l.jsx(id,{size:18}),l.jsx("span",{children:Te.email}),l.jsx(ue,{size:16})]}),l.jsxs("a",{className:"contact-channel",href:`tel:${Te.phone.replace(/[^\d+]/g,"")}`,children:[l.jsx(Wh,{size:18}),l.jsx("span",{children:Te.phone}),l.jsx(ue,{size:16})]}),l.jsxs("div",{className:"contact-channel",children:[l.jsx(Dh,{size:18}),l.jsx("span",{children:Te.address})]}),l.jsxs("a",{className:"contact-channel",href:h?`https://wa.me/${h}?text=Hello%20Flat%20Ride%20Engineering`:`mailto:${Te.email}`,target:h?"_blank":void 0,rel:h?"noopener noreferrer":void 0,children:[l.jsx(Fh,{size:18}),l.jsx("span",{children:"WhatsApp"}),l.jsx(ue,{size:16})]})]})]})}),l.jsxs("section",{className:"contact-mission",children:[l.jsx("div",{className:"contact-mission-overlay"}),l.jsxs("div",{className:"contact-container contact-mission-content",children:[l.jsx("span",{className:"contact-mission-label",children:"MISSION & VISION"}),l.jsxs("div",{className:"contact-mission-grid",children:[l.jsxs("article",{children:[l.jsx("span",{className:"contact-mission-item-label",children:"OUR MISSION"}),l.jsx("h3",{children:"Delivering engineering solutions that make a difference."}),l.jsx("p",{children:"Our mission is to deliver reliable engineering solutions through simulation, analysis and real test data, while building strong collaborations that help clients develop safer, more stable vehicles."})]}),l.jsxs("article",{children:[l.jsx("span",{className:"contact-mission-item-label",children:"OUR VISION"}),l.jsx("h3",{children:"Becoming a trusted name in automotive engineering."}),l.jsx("p",{children:"To become a leading engineering company, trusted worldwide, in vehicle dynamics and automotive engineering."})]})]}),l.jsxs("a",{href:"/about#mission-vision",className:"contact-mission-link",children:["DISCOVER OUR PURPOSE",l.jsx(ue,{size:18})]})]})]}),l.jsx("section",{className:"contact-bottom",children:l.jsxs("div",{className:"contact-container contact-bottom-inner",children:[l.jsxs("div",{children:[l.jsx("span",{className:"contact-bottom-label",children:"FLAT RIDE ENGINEERING"}),l.jsxs("h2",{children:["Let's engineer",l.jsx("br",{}),l.jsx("span",{children:"what comes next."})]})]}),l.jsxs("a",{href:`mailto:${Te.email}`,children:["START A CONVERSATION",l.jsx(ue,{size:19})]})]})})]}),l.jsx("style",{children:`

        .contact-page {
          width: 100%;
          background: #ffffff;
          color: #171717;
          font-family: inherit;
          overflow: hidden;
        }

        .contact-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: 35px;
          padding-right: 35px;
        }

        /* HERO */

        .contact-hero {
          min-height: 560px;
          position: relative;
          display: flex;
          align-items: center;
          isolation: isolate;
          background: #151515;
          color: #ffffff;
          border: 1px solid #111111;
        }

        .contact-hero-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85K9WCwtKOVIdcRTfIEfIx4_MXVubSgAkAyp40NoVog&s=10");
          background-size: cover;
          background-position: center 55%;
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.83) 0%,
            rgba(0, 0, 0, 0.55) 48%,
            rgba(0, 0, 0, 0.10) 100%
          );
        }

        .contact-hero-content {
          padding-top: 100px;
          padding-bottom: 115px;
        }

        .contact-eyebrow,
        .section-label {
          display: block;
          color: #777777;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .contact-eyebrow {
          color: #ffffff;
          margin-bottom: 28px;
        }

        .contact-hero h1 {
          margin: 0 0 24px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(58px, 7.5vw, 96px);
          line-height: 1.02;
          font-weight: 700;
          letter-spacing: -4px;
        }

        .contact-hero h1 span {
          color: #d1d1d1;
          font-weight: 400;
        }

        .contact-hero-content > p {
          max-width: 570px;
          color: #dedede;
          font-size: 17px;
          line-height: 1.9;
          margin-bottom: 32px;
        }

        .contact-hero-link {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          padding: 15px 21px;
          color: #171717;
          background: #ffffff;
          border: 1px solid #111111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          transition: 0.3s ease;
        }

        .contact-hero-link:hover {
          background: #d8d8d8;
          gap: 32px;
        }

        .contact-hero-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          padding: 18px 35px;
          border-top: 1px solid #ffffff;
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* INTRO */

        .contact-intro {
          padding: 105px 0;
          background: #ffffff;
          border: 1px solid #111111;
        }

        .contact-intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: end;
          gap: 70px;
        }

        .contact-intro h2 {
          margin: 23px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 5.5vw, 68px);
          line-height: 1.13;
          letter-spacing: -2.5px;
          font-weight: 700;
        }

        .contact-intro h2 span {
          color: #777777;
          font-weight: 400;
        }

        .contact-intro-grid > p {
          max-width: 440px;
          margin: 0 0 5px;
          color: #666666;
          font-size: 14px;
          line-height: 2;
        }

        /* MAIN CONTACT */

        .contact-main {
          padding: clamp(70px, 9vw, 125px) 0;
          background: #f4f4f1;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 820px);
          gap: 24px;
          align-items: start;
        }

        .contact-enquiry-heading {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .contact-enquiry-heading h2 {
          margin: 17px 0 13px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.08;
          letter-spacing: -1.7px;
          font-weight: 700;
        }

        .contact-enquiry-heading > p {
          max-width: 600px;
          margin: 0;
          color: #64645f;
          font-size: 17px;
          line-height: 1.8;
        }

        .project-enquiry-prompt {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          max-width: 820px;
          margin-top: 40px;
          padding: 24px 0;
          border-top: 1px solid #d6d6d0;
          border-bottom: 1px solid #d6d6d0;
        }

        .project-enquiry-prompt > div > span {
          color: #777770;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .project-enquiry-prompt h3 {
          margin: 8px 0 0;
          font: 700 25px/1.3 Georgia, "Times New Roman", serif;
        }

        .project-enquiry-prompt > a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #171717;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .5px;
          white-space: nowrap;
        }

        .project-enquiry-prompt > a:hover {
          color: #147cac;
        }

        .enquiry-card {
          min-width: 0;
          padding: clamp(24px, 3vw, 38px);
          border: 1px solid #deded8;
          background: #fff;
          color: #171717;
        }

        .enquiry-card-heading {
          min-height: 170px;
          padding-bottom: 25px;
          border-bottom: 1px solid #e4e4df;
        }

        .enquiry-card-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #73736d;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .enquiry-card-kicker > span:first-child {
          color: #147cac;
          font-family: 'DM Mono', monospace;
        }

        .enquiry-card-heading h3 {
          margin: 21px 0 10px;
          color: #171717;
          font: 700 clamp(29px, 2.8vw, 36px)/1.2 Georgia, "Times New Roman", serif;
          letter-spacing: -.5px;
        }

        .enquiry-card-heading > p {
          max-width: 440px;
          margin: 0;
          color: #6d6d67;
          font-size: 15px;
          line-height: 1.7;
        }

        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 25px;
        }

        .enquiry-fields {
          gap: 19px 16px;
        }

        .enquiry-fields label {
          gap: 8px;
          color: #575752;
          font-size: 13px;
          font-weight: 700;
        }

        .enquiry-fields input,
        .enquiry-fields textarea {
          padding: 11px 0;
          border: 0;
          border-bottom: 1px solid #c9c9c2;
          border-radius: 0;
          background: transparent;
          color: #171717;
          font-size: 16px;
          box-shadow: none;
        }

        .enquiry-fields input:focus,
        .enquiry-fields textarea:focus {
          border-bottom-color: #147cac;
          box-shadow: 0 1px 0 #147cac;
        }

        .enquiry-fields textarea {
          min-height: 120px;
          resize: vertical;
        }

        .enquiry-fields textarea::placeholder {
          color: #92928b;
        }

        .enquiry-fields label > span {
          color: #147cac;
        }

        .enquiry-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 6px;
        }

        .enquiry-submit {
          min-height: 48px;
          padding: 0 18px;
          border-radius: 0;
          background: #171717;
          color: #fff;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .enquiry-submit:hover {
          background: #333;
        }

        .enquiry-required-note {
          color: #777770;
          font-size: 12px;
        }

        .enquiry-status {
          margin-top: 0;
          font-size: 12px;
        }

        .enquiry-status.is-error {
          color: #ad302a;
        }

        .contact-information {
          display: grid;
          grid-template-columns: 1.2fr repeat(4, minmax(0, 1fr));
          align-items: center;
          gap: 16px;
          margin-top: 32px;
          padding: 22px 0;
          border-top: 1px solid #d6d6d0;
          border-bottom: 1px solid #d6d6d0;
        }

        .contact-information-heading,
        .contact-channel {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 10px;
        }

        .contact-information-heading {
          color: #171717;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
        }

        .contact-information-heading svg,
        .contact-channel svg {
          flex: 0 0 auto;
          color: #147cac;
        }

        .contact-channel {
          color: #555550;
          font-size: 13px;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        a.contact-channel:hover {
          color: #147cac;
        }

        /* MISSION AND VISION */

        .contact-mission {
          position: relative;
          isolation: isolate;
          min-height: 470px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNseF57xzhKT2CekKH5shTBuvJixC1cMwf6KDOCbsmA&s=10")
            center/cover no-repeat;
        }

        .contact-mission-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.62) 58%,
            rgba(0, 0, 0, 0.12) 100%
          );
        }

        .contact-mission-content {
          color: #ffffff;
          padding-top: 65px;
          padding-bottom: 65px;
        }

        .contact-mission-label {
          display: inline-block;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .contact-mission-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          max-width: 920px;
          margin: 22px 0 28px;
        }

        .contact-mission-grid article {
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(0, 0, 0, 0.38);
        }

        .contact-mission-item-label {
          display: inline-block;
          color: #dddddd;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .contact-mission-grid h3 {
          margin: 14px 0 12px;
          color: #ffffff;
          font-size: clamp(20px, 2.5vw, 28px);
          line-height: 1.25;
        }

        .contact-mission-grid p {
          max-width: 620px;
          margin: 0;
          color: #dddddd;
          font-size: 14px;
          line-height: 1.85;
        }

        .contact-mission-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border: 1px solid #ffffff;
          background: #ffffff;
          color: #111111;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .contact-mission-link:hover {
          background: #dddddd;
          border-color: #dddddd;
          transform: translateY(-2px);
        }

        /* BOTTOM CTA */

        .contact-bottom {
          padding: 85px 0;
          background: #171717;
          color: #ffffff;
          border: 1px solid #111111;
        }

        .contact-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .contact-bottom-label {
          color: #aaaaaa;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .contact-bottom h2 {
          margin: 20px 0 0;
          font-size: clamp(37px, 5vw, 58px);
          line-height: 1.08;
          letter-spacing: -2px;
        }

        .contact-bottom h2 span {
          color: #aaaaaa;
          font-weight: 400;
        }

        .contact-bottom-inner > a {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 17px 23px;
          background: #ffffff;
          color: #171717;
          border: 1px solid #111111;
          text-decoration: none;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
          transition: 0.3s ease;
        }

        .contact-bottom-inner > a:hover {
          background: #d5d5d5;
          gap: 27px;
        }

        /* TABLET */

        @media (max-width: 900px) {
          .contact-intro-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .project-enquiry-prompt {
            align-items: flex-start;
            flex-direction: column;
          }

          .contact-information {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

        }

        /* MOBILE */

        @media (max-width: 600px) {
          .contact-container {
            padding-left: 21px;
            padding-right: 21px;
          }

          .contact-hero {
            min-height: 510px;
          }

          .contact-hero-image {
            background-position: 60% center;
          }

          .contact-hero-content {
            padding-top: 85px;
            padding-bottom: 100px;
          }

          .contact-hero h1 {
            font-size: 45px;
            letter-spacing: -1.8px;
          }

          .contact-hero-content > p {
            font-size: 13px;
          }

          .contact-hero-caption {
            padding: 15px 18px;
            font-size: 7px;
            letter-spacing: 1px;
            gap: 10px;
          }

          .contact-intro {
            padding: 70px 0;
          }

          .contact-intro h2 {
            font-size: 37px;
          }

          .contact-intro-grid > p {
            font-size: 13px;
          }

          .contact-main {
            padding: 55px 0 65px;
          }

          .contact-information {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 24px;
          }

          .enquiry-card {
            padding: 24px 18px;
          }

          .enquiry-card-heading {
            min-height: 0;
            padding-bottom: 20px;
          }

          .enquiry-fields {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .enquiry-field-wide {
            grid-column: auto;
          }

          .enquiry-submit-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .enquiry-submit {
            width: 100%;
          }

          .contact-enquiry-heading {
            margin-bottom: 30px;
          }

          .contact-enquiry-heading h2 {
            font-size: 37px;
            letter-spacing: -1px;
          }

          .contact-enquiry-heading > p {
            font-size: 15px;
          }

          .enquiry-card-heading h3 {
            font-size: 28px;
          }

          .enquiry-card-heading > p {
            font-size: 15px;
          }

          .enquiry-fields label {
            font-size: 13px;
          }

          .enquiry-fields input,
          .enquiry-fields textarea {
            font-size: 16px;
          }

          .project-enquiry-prompt h3 {
            font-size: 23px;
          }

          .contact-mission {
            min-height: 420px;
          }

          .contact-mission-content {
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .contact-mission h2 {
            font-size: 40px;
          }

          .contact-mission-grid {
            grid-template-columns: 1fr;
          }

          .contact-bottom {
            padding: 65px 0;
          }

          .contact-bottom-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .contact-bottom h2 {
            font-size: 43px;
          }
        }

      `})]})}const cm={"/":{title:"Flat Ride Engineering | Engineering Vehicle Performance",description:"Automotive engineering, vehicle dynamics, simulation and performance consultancy from Flat Ride Engineering."},"/about":{title:"About Us | Flat Ride Engineering",description:"Learn about Flat Ride Engineering and our approach to vehicle dynamics, simulation and automotive engineering."},"/services":{title:"Engineering Services | Flat Ride Engineering",description:"Explore vehicle dynamics, powertrain, CAD/CAE and engineering consultancy services from Flat Ride Engineering."},"/blog":{title:"Insights | Flat Ride Engineering",description:"Read engineering insights and updates from Flat Ride Engineering."},"/careers":{title:"Careers | Flat Ride Engineering",description:"Explore career opportunities and connect with Flat Ride Engineering."},"/contact":{title:"Contact Us | Flat Ride Engineering",description:"Contact Flat Ride Engineering to discuss a project, technical requirement or partnership."}};function um(){const{pathname:a}=At();return N.useEffect(()=>{window.scrollTo(0,0)},[a]),null}function dm(){const{pathname:a}=At();return N.useEffect(()=>{const u=cm[a]||(a.startsWith("/services/")?{title:"Service Details | Flat Ride Engineering",description:"Explore specialist automotive engineering services from Flat Ride Engineering."}:{title:"Page Not Found | Flat Ride Engineering",description:"The page you requested could not be found."});let c=document.querySelector('meta[name="description"]');c||(c=document.createElement("meta"),c.name="description",document.head.appendChild(c)),document.title=u.title,c.content=u.description},[a]),null}function pm(){return l.jsxs(l.Fragment,{children:[l.jsx(um,{}),l.jsx(dm,{}),l.jsx(Gh,{}),l.jsx(Kh,{}),l.jsx("main",{children:l.jsxs(ih,{children:[l.jsx(xt,{path:"/",element:l.jsx(Jh,{})}),l.jsx(xt,{path:"/about",element:l.jsx(Zh,{})}),l.jsx(xt,{path:"/services",element:l.jsx(em,{})}),l.jsx(xt,{path:"/services/:serviceSlug/:itemSlug",element:l.jsx(tm,{})}),l.jsx(xt,{path:"/blog",element:l.jsx(nm,{})}),l.jsx(xt,{path:"/projects",element:l.jsx(Tu,{to:"/blog",replace:!0})}),l.jsx(xt,{path:"/careers",element:l.jsx(lm,{})}),l.jsx(xt,{path:"/contact",element:l.jsx(sm,{})}),l.jsx(xt,{path:"/project-enquiry",element:l.jsx(Tu,{to:"/contact?type=project",replace:!0})}),l.jsx(xt,{path:"*",element:l.jsxs("div",{className:"container not-found",children:[l.jsx("h1",{children:"Page not found"}),l.jsx("a",{href:"/",children:"Back home"})]})})]})}),l.jsx(Yh,{})]})}mf.createRoot(document.getElementById("root")).render(l.jsx(ga.StrictMode,{children:l.jsx(fh,{children:l.jsx(pm,{})})}));
