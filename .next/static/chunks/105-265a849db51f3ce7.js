(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{50424:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(70655),o=n(23493),i=n.n(o),u=n(67294),s=function(t){var e=(0,u.useRef)(t);return e.current=t,e},a=function(t){var e=s(t);(0,u.useEffect)(function(){return function(){e.current()}},[])},c=function(t,e){var n,o=s(t),c=null!==(n=null==e?void 0:e.wait)&&void 0!==n?n:1e3,l=(0,u.useMemo)(function(){return i()(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.current.apply(o,(0,r.ev)([],(0,r.CR)(t),!1))},c,e)},[]);return a(function(){l.cancel()}),{run:l,cancel:l.cancel,flush:l.flush}}},62705:function(t,e,n){var r=n(55639).Symbol;t.exports=r},44239:function(t,e,n){var r=n(62705),o=n(89607),i=n(2333),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},27561:function(t,e,n){var r=n(67990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},31957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},89607:function(t,e,n){var r=n(62705),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[s]=n:delete t[s]),o}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},55639:function(t,e,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},67990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},23279:function(t,e,n){var r=n(13218),o=n(7771),i=n(14841),u=Math.max,s=Math.min;t.exports=function(t,e,n){var a,c,l,f,p,h,d=0,y=!1,v=!1,m=!0;if("function"!=typeof t)throw TypeError("Expected a function");function b(e){var n=a,r=c;return a=c=void 0,d=e,f=t.apply(r,n)}function g(t){var n=t-h,r=t-d;return void 0===h||n>=e||n<0||v&&r>=l}function x(){var t,n,r,i=o();if(g(i))return w(i);p=setTimeout(x,(t=i-h,n=i-d,r=e-t,v?s(r,l-n):r))}function w(t){return(p=void 0,m&&a)?b(t):(a=c=void 0,f)}function j(){var t,n=o(),r=g(n);if(a=arguments,c=this,h=n,r){if(void 0===p)return d=t=h,p=setTimeout(x,e),y?b(t):f;if(v)return clearTimeout(p),p=setTimeout(x,e),b(h)}return void 0===p&&(p=setTimeout(x,e)),f}return e=i(e)||0,r(n)&&(y=!!n.leading,l=(v="maxWait"in n)?u(i(n.maxWait)||0,e):l,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==p&&clearTimeout(p),d=0,a=h=c=p=void 0},j.flush=function(){return void 0===p?f:w(o())},j}},13218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,e,n){var r=n(44239),o=n(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},7771:function(t,e,n){var r=n(55639);t.exports=function(){return r.Date.now()}},23493:function(t,e,n){var r=n(23279),o=n(13218);t.exports=function(t,e,n){var i=!0,u=!0;if("function"!=typeof t)throw TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,u="trailing"in n?!!n.trailing:u),r(t,e,{leading:i,maxWait:e,trailing:u})}},14841:function(t,e,n){var r=n(27561),o=n(13218),i=n(33448),u=0/0,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return u;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=a.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):s.test(t)?u:+t}},96086:function(t){"use strict";var e=Object.assign.bind(Object);t.exports=e,t.exports.default=t.exports},7667:function(t,e,n){var r;t.exports=(r=n(5262),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,(function(e){return t[e]}).bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),u=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return u(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});var a=s(n(2));n(3).polyfill();var c=function(t){function e(e){var n,r,o=t.call(this,e)||this;return o.state={id:o.props.id||Date.now()+"_"+Math.random().toFixed(4),width:o.props.width||150,height:o.props.height||40,len:o.props.length||4,style:(r={position:"relative",backgroundColor:"#fff",overflow:"hidden",width:o.props.width?o.props.width+"px":"150px",height:o.props.height?o.props.height+"px":"40px",cursor:"pointer",verticalAlign:"middle",userSelect:"none"},o.props.style?Object.assign({},r,o.props.style):r),options:(n={codes:["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","x","u","v","y","z","w","n","0","1","2","3","4","5","6","7","8","9"],fontSizeMin:22,fontSizeMax:26,colors:["#117cb3","#f47b06","#202890","#db1821","#b812c2"],fonts:["Times New Roman","Georgia","Serif","sans-serif","arial","tahoma","Hiragino Sans GB"],lines:8,lineColors:["#7999e1","#383838","#ec856d","#008888"],lineHeightMin:1,lineHeightMax:2,lineWidthMin:40,lineWidthMax:100},o.props.options?Object.assign({},n,o.props.options):n)},o}return o(e,t),e.prototype.componentDidMount=function(){this.onDraw(this.props.value)},e.prototype.componentDidUpdate=function(t){this.props.value!==t.value&&this.onDraw(this.props.value),this.props.width===t.width&&this.props.height===t.height&&this.props.style===t.style||this.setState({width:this.props.width||150,height:this.props.height||40,style:Object.assign({},this.state.style,{width:this.props.width?this.props.width+"px":"150px",height:this.props.height?this.props.height+"px":"40px"})})},e.prototype.onClick=function(){this.props.value||this.onDraw(this.props.value),this.props.onClick&&this.props.onClick()},e.prototype.codeCss=function(t,e,n){var r="rotate("+this.randint(-15,15,!0)+"deg) translateY("+this.randint(-55,-45,!0)+"%)";return["font-size:"+this.randint(this.state.options.fontSizeMin,this.state.options.fontSizeMax)+"px","color:"+this.state.options.colors[this.randint(0,this.state.options.colors.length-1)],"position: absolute","left:"+Math.max(Math.min(this.randint(t*e,t*e+t/2,!0),n),t/4)+"px","top:50%","transform:"+r+";-o-transform:"+r+";-ms-transform:"+r+";-moz-transform:"+r+";-webkit-transform:"+r,"font-family:"+this.state.options.fonts[this.randint(0,this.state.options.fonts.length-1)],"font-weight:bold","z-index:2"].join(";")},e.prototype.lineCss=function(){var t="rotate("+this.randint(-30,30)+"deg)";return["position: absolute","opacity:"+this.randint(3,8)/10,"width:"+this.randint(this.state.options.lineWidthMin,this.state.options.lineWidthMax)+"px","height:"+this.randint(this.state.options.lineHeightMin,this.state.options.lineHeightMax)+"px","background:"+this.state.options.lineColors[this.randint(0,this.state.options.lineColors.length-1)],"left:"+this.randint(-this.state.options.lineWidthMin/2,this.state.width)+"px","top:"+this.randint(0,this.state.height)+"px","transform:"+t+";-o-transform:"+t+";-ms-transform:"+t+";-moz-transform:"+t+";-webkit-transform:"+t].join(";")},e.prototype.onDraw=function(t){var e,n="",r=document.getElementById(this.state.id),o=/^http[s]*:\/\/|\.jpg$|\.png$|\.jpeg$|\.gif$|\.bmp$|\.webp$|^data:image/.test(t||"");if(r&&(r.innerHTML=""),o)return(e=document.createElement("img")).style.cssText="display: block;max-width:100%;max-height:100%",e.src=t,r&&r.appendChild(e),this.props.onChange&&this.props.onChange(null),null;for(var i=t?t.length:this.state.len,u=this.state.width/i,s=this.state.width-u/4,a=0;a<i;a++){(e=document.createElement("span")).style.cssText=this.codeCss(u,a,s);var c=t?t[a]:this.state.options.codes[Math.round(Math.random()*(this.state.options.codes.length-1))];e.innerHTML=String(c),n=""+n+c,r&&r.appendChild(e)}for(a=0;a<this.state.options.lines;a++)(e=document.createElement("div")).style.cssText=this.lineCss(),r&&r.appendChild(e);return this.props.onChange&&this.props.onChange(n),n},e.prototype.randint=function(t,e,n){var r=Math.random()*(e-t+1)+t;return n?r:Math.floor(r)},e.prototype.render=function(){var t=this;return a.createElement("div",{id:this.state.id,style:this.state.style,className:this.props.className,onClick:function(){return t.onClick()}})},e}(a.PureComponent);e.default=c},function(t,e){t.exports=r},function(t,e,n){"use strict";function r(t,e){if(null==t)throw TypeError("Cannot convert first argument to object");for(var n=Object(t),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i=Object.keys(Object(o)),u=0,s=i.length;u<s;u++){var a=i[u],c=Object.getOwnPropertyDescriptor(o,a);void 0!==c&&c.enumerable&&(n[a]=o[a])}}return n}t.exports={assign:r,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}}}]))},74600:function(t,e,n){"use strict";/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(96086),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function x(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||b}function w(){}function j(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||b}x.prototype.isReactComponent={},x.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(m(85));this.updater.enqueueSetState(this,t,e,"setState")},x.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},w.prototype=x.prototype;var _=j.prototype=new w;_.constructor=j,r(_,x.prototype),_.isPureReactComponent=!0;var O={current:null},S=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function k(t,e,n){var r,o={},u=null,s=null;if(null!=e)for(r in void 0!==e.ref&&(s=e.ref),void 0!==e.key&&(u=""+e.key),e)S.call(e,r)&&!C.hasOwnProperty(r)&&(o[r]=e[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:i,type:t,key:u,ref:s,props:o,_owner:O.current}}function M(t){return"object"==typeof t&&null!==t&&t.$$typeof===i}var E=/\/+/g,$=[];function P(t,e,n,r){if($.length){var o=$.pop();return o.result=t,o.keyPrefix=e,o.func=n,o.context=r,o.count=0,o}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function R(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>$.length&&$.push(t)}function T(t,e,n){return null==t?0:function t(e,n,r,o){var s=typeof e;("undefined"===s||"boolean"===s)&&(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case u:a=!0}}if(a)return r(o,e,""===n?"."+D(e,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=n+D(s=e[c],c);a+=t(s,l,r,o)}else if("function"==typeof(l=null===e||"object"!=typeof e?null:"function"==typeof(l=v&&e[v]||e["@@iterator"])?l:null))for(e=l.call(e),c=0;!(s=e.next()).done;)l=n+D(s=s.value,c++),a+=t(s,l,r,o);else if("object"===s)throw Error(m(31,"[object Object]"==(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return a}(t,"",e,n)}function D(t,e){var n,r;return"object"==typeof t&&null!==t&&null!=t.key?(n=t.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(t){return r[t]})):e.toString(36)}function A(t,e){t.func.call(t.context,e,t.count++)}function z(t,e,n){var r,o,u=t.result,s=t.keyPrefix;Array.isArray(t=t.func.call(t.context,e,t.count++))?H(t,u,n,function(t){return t}):null!=t&&(M(t)&&(r=t,o=s+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(E,"$&/")+"/")+n,t={$$typeof:i,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}),u.push(t))}function H(t,e,n,r,o){var i="";null!=n&&(i=(""+n).replace(E,"$&/")+"/"),T(t,z,e=P(e,i,r,o)),R(e)}var I={current:null};function N(){var t=I.current;if(null===t)throw Error(m(321));return t}e.Children={map:function(t,e,n){if(null==t)return t;var r=[];return H(t,r,null,e,n),r},forEach:function(t,e,n){if(null==t)return t;T(t,A,e=P(null,null,e,n)),R(e)},count:function(t){return T(t,function(){return null},null)},toArray:function(t){var e=[];return H(t,e,null,function(t){return t}),e},only:function(t){if(!M(t))throw Error(m(143));return t}},e.Component=x,e.Fragment=s,e.Profiler=c,e.PureComponent=j,e.StrictMode=a,e.Suspense=h,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:r},e.cloneElement=function(t,e,n){if(null==t)throw Error(m(267,t));var o=r({},t.props),u=t.key,s=t.ref,a=t._owner;if(null!=e){if(void 0!==e.ref&&(s=e.ref,a=O.current),void 0!==e.key&&(u=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(l in e)S.call(e,l)&&!C.hasOwnProperty(l)&&(o[l]=void 0===e[l]&&void 0!==c?c[l]:e[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:i,type:t.type,key:u,ref:s,props:o,_owner:a}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:f,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},e.createElement=k,e.createFactory=function(t){var e=k.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:p,render:t}},e.isValidElement=M,e.lazy=function(t){return{$$typeof:y,_ctor:t,_status:-1,_result:null}},e.memo=function(t,e){return{$$typeof:d,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return N().useCallback(t,e)},e.useContext=function(t,e){return N().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return N().useEffect(t,e)},e.useImperativeHandle=function(t,e,n){return N().useImperativeHandle(t,e,n)},e.useLayoutEffect=function(t,e){return N().useLayoutEffect(t,e)},e.useMemo=function(t,e){return N().useMemo(t,e)},e.useReducer=function(t,e,n){return N().useReducer(t,e,n)},e.useRef=function(t){return N().useRef(t)},e.useState=function(t){return N().useState(t)},e.version="16.14.0"},5262:function(t,e,n){"use strict";t.exports=n(74600)}}]);