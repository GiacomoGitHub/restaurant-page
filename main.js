(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"body {\n    font-family: 'Poppins', sans-serif;\n    animation: fadein 2s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to { opacity: 1;}\n}\n\nbutton {\n    border: none;\n    background-color: white;\n    font-size: large;\n    color: rgba(0,0,0,0.5);\n}\n\nbutton:hover {\n    cursor: pointer;\n    color: rgba(0,0,0,1);\n}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],d=t.base?a[0]+t.base:a[0],l=n[d]||0,u="".concat(d," ").concat(l);n[d]=l+1;var s=c(u),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(i[s].references++,i[s].updater(m)):i.push({identifier:u,updater:h(m,t),references:1}),o.push(u)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function s(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function m(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function h(e,t){var n,o,r;if(t.singleton){var i=f++;n=p||(p=d(t)),o=s.bind(null,n,i,!1),r=s.bind(null,n,i,!0)}else n=d(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var d=a(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=d}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(28);function r(){!function(){const e=document.createElement("h1"),t=document.createTextNode("Welcome to Giacomo's Deli");e.appendChild(t),document.getElementById("content").appendChild(e)}(),function(){const e=document.createElement("img");e.setAttribute("src","https://images.unsplash.com/photo-1559847844-1ff4d5bcd3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80"),e.setAttribute("width","350"),e.setAttribute("height","200"),e.setAttribute("alt","A fantastic dish from our kitchen"),document.getElementById("content").appendChild(e)}(),function(){const e=document.createElement("p"),t=document.createTextNode("The best food in the world");e.appendChild(t),document.getElementById("content").appendChild(e)}()}function i(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.lastChild)}t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,function e(){const t=document.createElement("button");t.innerHTML="Home";const n=document.createElement("button");n.innerHTML="Contacts";const o=document.createElement("button");o.innerHTML="Menu",document.getElementById("content").appendChild(t),document.getElementById("content").appendChild(n),document.getElementById("content").appendChild(o),t.addEventListener("click",(()=>{i(),e(),r()})),n.addEventListener("click",(()=>{i(),e(),function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createTextNode("Contacts"),o=document.createElement("p");o.innerHTML="Telephone: 1234567890";const r=document.createElement("p");r.innerHTML="Fictional Street, X, Fictional City";const i=document.createElement("p");i.innerHTML="example@email.com",t.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(i),document.getElementById("content").appendChild(e)}()})),o.addEventListener("click",(()=>{i(),e(),function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createTextNode("Menu"),o=document.createElement("h2");o.innerHTML="Tasty Burger";const r=document.createElement("p");r.innerHTML="The tastiest burger in the world";const i=document.createElement("h2");i.innerHTML="Secret Formula Curry";const c=document.createElement("p");c.innerHTML="Our secret formula",t.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r),e.appendChild(i),e.appendChild(c),document.getElementById("content").appendChild(e)}()}))}(),r(),document.body.style.textAlign="center",document.body.style.paddingTop="auto",document.body.style.fontSize="2.5em"})()})();