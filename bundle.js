!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),n(9),n(10),n(11),n(12)},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},,,,,function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,a=0,l=[],c=n(8);function u(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(v(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(v(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function d(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,n);n.insertBefore(e,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),d(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=a++;n=s||(s=h(e)),r=b.bind(null,n,l,!1),o=b.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return u(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var s=n[i];(a=r[s.id]).refs--,o.push(a)}t&&u(f(t,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e){var n,r,o;o=document.getElementById("yearBar"),r=o.offsetTop,n=function(){return window.pageYOffset>=r?o.classList.add("hover_shadow"):o.classList.remove("hover_shadow")},window.onscroll=function(){return n()}},function(t,e){var n,r,o,i;r=document.getElementById("gotoTop"),i=document.getElementById("goto2018"),o=document.getElementById("goto2017"),n=function(t){return document.getElementById(t).scrollIntoView({behavior:"smooth"})},r.onclick=function(){return n("top")},i.onclick=function(){return n("2018")},o.onclick=function(){return n("2017")}},function(t,e){var n=[].indexOf;document.querySelectorAll(".project").forEach(function(t,e,r){var o,i,s,a,l,c,u,f,d;switch(a=void 0,t.parentElement.classList[0]){case"left":a="left";break;case"right":a="right";break;default:a="bottom"}for(u=0,f=(d=t.children).length;u<f;u++)o=d[u],n.call(o.classList,"hidden")>=0&&(c=o),n.call(o.classList,"expander")>=0&&(s=o);switch(l=s.childNodes[0],a){case"left":l.textContent="⯇",l.classList.add("left"),t.style.height="180px";break;case"right":l.textContent="⯈",l.classList.add("right"),t.style.height="180px";break;case"bottom":l.textContent="⯆",l.classList.add("bottom")}return i=function(){if(n.call(c.classList,"hidden")>=0)switch(c.classList.remove("hidden"),a){case"left":return l.textContent="⯈",l.classList.remove("left"),l.classList.add("right"),t.style.marginLeft="7%",t.style.gridTemplateColumns="145px auto 32px 60%",c.style.maxWidth="100%";case"right":return l.textContent="⯇",l.classList.remove("right"),l.classList.add("left"),t.style.marginRight="7%",t.style.gridTemplateColumns="60% 32px 145px auto",c.style.maxWidth="100%";case"bottom":return l.textContent="⯅",l.classList.remove("bottom"),l.classList.add("top"),c.style.maxHeight=c.scrollHeight+"px"}else switch(c.classList.add("hidden"),a){case"left":return l.textContent="⯇",l.classList.remove("right"),l.classList.add("left"),t.style.marginLeft="30%",t.style.gridTemplateColumns="145px auto 32px 0",c.style.maxWidth=null;case"right":return l.textContent="⯈",l.classList.remove("left"),l.classList.add("right"),t.style.marginRight="30%",t.style.gridTemplateColumns="0 32px 145px auto",c.style.maxWidth=null;case"bottom":return l.textContent="⯆",l.classList.remove("top"),l.classList.add("bottom"),c.style.maxHeight=null}},s.onclick=function(){return i()}})},function(t,e){var n,r,o,i;o=document.querySelectorAll(".projectImage"),n=null,r=function(){return document.body.removeChild(n),!1},i=function(t,e){var o,i,s;return(n=document.createElement("modal")).classList.add("imageModal"),document.body.appendChild(n),n.onclick=function(){return r()},o=document.createElement("div"),(s=document.createElement("img")).src=t,o.appendChild(s),(i=document.createElement("p")).textContent=e,o.appendChild(i),n.appendChild(o),!0},o.forEach(function(t,e,n){return t.onclick=function(){return i(t.src,t.alt)}})}]);