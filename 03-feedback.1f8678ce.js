!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a.default(e,t,n[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var f,l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,p=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,b=g||y||Function("return this")(),O=Object.prototype.toString,j=Math.max,h=Math.min,w=function(){return b.Date.now()};function x(e,t,n){var r,o,i,u,a,f,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(c);function v(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function p(e){return l=e,a=setTimeout(y,t),s?v(e):u}function g(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-l>=i}function y(){var e=w();if(g(e))return b(e);a=setTimeout(y,function(e){var n=t-(e-f);return d?h(n,i-(e-l)):n}(e))}function b(e){return a=void 0,m&&r?v(e):(r=o=void 0,u)}function O(){var e=w(),n=g(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return p(f);if(d)return a=setTimeout(y,t),v(f)}return void 0===a&&(a=setTimeout(y,t)),u}return t=_(t)||0,S(n)&&(s=!!n.leading,i=(d="maxWait"in n)?j(_(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=f=o=a=void 0},O.flush=function(){return void 0===a?u:b(w())},O}function S(t){var n=void 0===t?"undefined":e(l)(t);return!!t&&("object"==n||"function"==n)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(S(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=S(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=m.test(t);return r||v.test(t)?p(t.slice(2),r?2:8):d.test(t)?NaN:+t}f=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),x(e,t,{leading:r,maxWait:t,trailing:o})};var E={form:document.querySelector(".feedback-form"),email:document.getElementById("email"),message:document.getElementById("message")},T="feedback-form-state",M=localStorage.getItem(T),N=JSON.parse(M),D=e(i)({},N);function I(e){D[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(D))}!function(){if(M){var e=N.email,t=N.message;E.email.value=void 0===e?"":e,E.message.value=void 0===t?"":t}}(),E.email.addEventListener("input",e(f)(I,500)),E.message.addEventListener("input",e(f)(I,500)),E.form.addEventListener("submit",(function(e){if(e.preventDefault(),!E.message.value||!E.email.value)return console.log(" ⚠️ Seriously? Why do I need an empty field??? 🙃 ");console.log(D),e.currentTarget.reset(),localStorage.removeItem(T),D.email="",D.message=""}))}();
//# sourceMappingURL=03-feedback.1f8678ce.js.map