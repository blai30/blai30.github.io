(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{5505:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{r:function(){return M}});var i,c,l,s=t(7294);function f(e,n){if(e in n){for(var t=n[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"===typeof t?t.apply(void 0,o):t}var u=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(u,f),u}function d(e){var n=e.props,t=e.slot,a=e.defaultTag,u=e.features,l=e.visible,s=void 0===l||l,d=e.name;if(s)return p(n,t,a,d);var v=null!=u?u:i.None;if(v&i.Static){var m=n.static,h=void 0!==m&&m,y=o(n,["static"]);if(h)return p(y,t,a,d)}if(v&i.RenderStrategy){var b,g=n.unmount,w=void 0===g||g,E=o(n,["unmount"]);return f(w?c.Unmount:c.Hidden,((b={})[c.Unmount]=function(){return null},b[c.Hidden]=function(){return p(r({},E,{hidden:!0,style:{display:"none"}}),t,a,d)},b))}return p(n,t,a,d)}function p(e,n,t,r){var a;void 0===n&&(n={});var i=v(e,["unmount","static"]),c=i.as,l=void 0===c?t:c,f=i.children,d=i.refName,p=void 0===d?"ref":d,m=o(i,["as","children","refName"]),h=void 0!==e.ref?((a={})[p]=e.ref,a):{},y="function"===typeof f?f(n):f;if(m.className&&"function"===typeof m.className&&(m.className=m.className(n)),l===s.Fragment&&Object.keys(m).length>0){if(!(0,s.isValidElement)(y)||Array.isArray(y)&&y.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(m).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,s.cloneElement)(y,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),a=function(){var t,a=r.value;void 0!==e[a]&&void 0!==n[a]&&Object.assign(o,((t={})[a]=function(t){t.defaultPrevented||e[a](t),t.defaultPrevented||n[a](t)},t))},i=u(t);!(r=i()).done;)a();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(v(m,["ref"])),y.props,["onClick"]),h))}return(0,s.createElement)(l,Object.assign({},v(m,["ref"]),l!==s.Fragment&&h),y)}function v(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=u(n);!(t=o()).done;){var a=t.value;a in r&&delete r[a]}return r}function m(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!a||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(i||(i={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(c||(c={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(l||(l={}));var h="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,y={serverHandoffComplete:!1};var b=0;function g(){return++b}function w(){var e=function(){var e=(0,s.useState)(y.serverHandoffComplete),n=e[0],t=e[1];return(0,s.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,s.useEffect)((function(){!1===y.serverHandoffComplete&&(y.serverHandoffComplete=!0)}),[]),n}(),n=(0,s.useState)(e?g:null),t=n[0],r=n[1];return h((function(){null===t&&r(g())}),[t]),null!=t?""+t:void 0}var E=(0,s.createContext)(null);function k(){var e=(0,s.useContext)(E);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}return e}function S(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}function C(e,n){var t=(0,s.useState)((function(){return S(e)})),r=t[0],o=t[1];return h((function(){o(S(e))}),[e.type,e.as]),h((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}var L=(0,s.createContext)(null);function j(){var e=(0,s.useContext)(L);if(null===e){var n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return e}var A=(0,s.createContext)(null);A.displayName="GroupContext";var T=s.Fragment;function M(e){var n=e.checked,t=e.onChange,a=o(e,["checked","onChange"]),i="headlessui-switch-"+w(),c=(0,s.useContext)(A),f=(0,s.useRef)(null),p=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,s.useRef)(n);return(0,s.useEffect)((function(){r.current=n}),[n]),(0,s.useCallback)((function(e){for(var n,t=u(r.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}(f,null===c?null:c.setSwitch),v=(0,s.useCallback)((function(){return t(!n)}),[t,n]),h=(0,s.useCallback)((function(e){if(m(e.currentTarget))return e.preventDefault();e.preventDefault(),v()}),[v]),y=(0,s.useCallback)((function(e){e.key!==l.Tab&&e.preventDefault(),e.key===l.Space&&v()}),[v]),b=(0,s.useCallback)((function(e){return e.preventDefault()}),[]),g=(0,s.useMemo)((function(){return{checked:n}}),[n]);return d({props:r({},a,{id:i,ref:p,role:"switch",type:C(e,f),tabIndex:0,"aria-checked":n,"aria-labelledby":null==c?void 0:c.labelledby,"aria-describedby":null==c?void 0:c.describedby,onClick:h,onKeyUp:y,onKeyPress:b}),slot:g,defaultTag:"button",name:"Switch"})}M.Group=function(e){var n=(0,s.useState)(null),t=n[0],r=n[1],o=function(){var e=(0,s.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var n=(0,s.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,s.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return s.createElement(L.Provider,{value:r},e.children)}}),[t])]}(),a=o[0],u=o[1],i=function(){var e=(0,s.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var n=(0,s.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,s.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return s.createElement(E.Provider,{value:r},e.children)}}),[t])]}(),c=i[0],l=i[1],f=(0,s.useMemo)((function(){return{switch:t,setSwitch:r,labelledby:a,describedby:c}}),[t,r,a,c]);return s.createElement(l,{name:"Switch.Description"},s.createElement(u,{name:"Switch.Label",props:{onClick:function(){t&&(t.click(),t.focus({preventScroll:!0}))}}},s.createElement(A.Provider,{value:f},d({props:e,defaultTag:T,name:"Switch.Group"}))))},M.Label=function(e){var n=e.passive,t=void 0!==n&&n,a=o(e,["passive"]),u=j(),i="headlessui-label-"+w();h((function(){return u.register(i)}),[i,u.register]);var c=r({},u.props,{id:i}),l=r({},a,c);return t&&delete l.onClick,d({props:l,slot:u.slot||{},defaultTag:"label",name:u.name||"Label"})},M.Description=function(e){var n=k(),t="headlessui-description-"+w();h((function(){return n.register(t)}),[t,n.register]);var o=e,a=r({},n.props,{id:t});return d({props:r({},o,a),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(6273),i=t(387),c=t(7190);var l={};function s(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var n=r(u.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?u.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,w=r(c.useIntersection({rootMargin:"200px"}),2),E=w[0],k=w[1],S=a.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);a.default.useEffect((function(){var e=k&&t&&u.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,k,b,t,o]);var C={ref:S,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,m,h,y,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof b?b:o&&o.locale,j=o&&o.isLocaleDomain&&u.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);C.href=j||u.addBasePath(u.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(n,C)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,c=o.useRef(),l=r(o.useState(!1),2),s=l[0],f=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||s||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),a=t(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map},1664:function(e,n,t){e.exports=t(8418)},3801:function(e,n,t){"use strict";t.d(n,{Hf3:function(){return o}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"}))}}}]);