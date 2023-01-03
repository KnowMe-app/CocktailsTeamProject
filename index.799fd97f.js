function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.799fd97f.js","8OQ7p":"icons.cf303b57.svg"}'));const s="https://www.thecocktaildb.com/api/json/v1/";async function o(e){const t=`${s}/1/search.php?f=${e}`;try{const e=await fetch(t);return await e.json()}catch{console.log(error.message)}}async function a(){const e=`${s}/1/random.php`;try{const t=await fetch(e);return await t.json()}catch{console.log(error.message)}}var c;c=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const l=document.querySelector(".markup-cards"),h=window.matchMedia("(max-width: 767px)"),u=window.matchMedia("(min-width: 1280px)");let d=6;function p(e,t){for(const n of e){const e=`<li class="card">\n                                    <img src="${n.strDrinkThumb}" alt="${n.strDrink}" />\n                                    <div class="card__info">\n                                    <p class="card__title theme__dark">${n.strDrink}</p>\n                                    <div class="card__btns">\n                                        <button type="button" class="card__btn">Learn more</button>\n                                        <button type="button" class="card__btn-add">\n                                        Add to\n                                        <svg class="card__icon" width="18" height="18">\n                                            <use href="${c}#icon-Heart"></use>\n                                        </svg>\n                                        </button>\n                                    </div>\n                                    </div>\n                                </li> `;t.innerHTML+=e}}console.log("mobil:",h.matches,"descktop:",u.matches),function(){h.matches?d=3:u.matches&&(d=9);for(let e=1;e<=d;e++)a().then((e=>{p(e.drinks,l)}))}();const f={gallery:document.querySelector(".markup-cards"),paginationNumbers:document.querySelector(".pagination__numbers"),pageNumbers:document.getElementsByClassName("page__number"),prevPageBtn:document.querySelector(".page-prev"),nextPageBtn:document.querySelector(".page-next")};let _=1;function m(e){g(e,1),function(e){if(e.length<=9)return;for(let t=1;t<=Math.ceil(e.length/9);t++)v(t);y(),f.prevPageBtn.classList.remove("visually-hidden"),f.nextPageBtn.classList.remove("visually-hidden")}(e),f.prevPageBtn.addEventListener("click",(()=>{g(e,_-1)})),f.nextPageBtn.addEventListener("click",(()=>{g(e,_+1)})),[...f.pageNumbers].forEach((t=>{const n=+t.textContent;t.addEventListener("click",(()=>{g(e,n)}))}))}function g(e,t){_=t;const n=9*t,i=9*(t-1);f.gallery.innerHTML="",function(e){1===_?w(f.prevPageBtn):b(f.prevPageBtn);_===Math.ceil(e.length/9)?w(f.nextPageBtn):b(f.nextPageBtn)}(e),y();const r=[...e].filter(((e,t)=>t>=i&&t<n));return s=r,void f.gallery.insertAdjacentHTML("beforeend",s.map((e=>function({strDrinkThumb:e,strDrink:t}){return`<li class="card">\n      <img src="${e}" alt="${t}" />\n      <div class="card__info">\n        <p class="card__title">${t}</p>\n        <div class="card__btns">\n          <button type="button" class="card__btn">\n            Learn more\n          </button>\n          <button type="button" class="card__btn-add">\n            Add to\n            <svg class="card__icon" width="18" height="18">\n              <use href="./images/icons.svg#icon-Heart"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>`}(e))).join(""));var s}function v(e){const t=document.createElement("a");t.textContent=e,t.classList.add("page__number"),f.paginationNumbers.append(t)}function y(){[...f.pageNumbers].forEach((e=>{e.classList.remove("page-active");+e.textContent===_&&e.classList.add("page-active")}))}function w(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function b(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}const I=document.querySelector(".hero__search-list");document.querySelector(".markup-cards"),document.querySelector(".cards__pagination"),document.querySelector(".section-cards"),document.querySelector(".void");I.addEventListener("click",(function(e){o(e.target.name).then((e=>{f.paginationNumbers.innerHTML="",m(e.drinks)}))}));const C=document.querySelector(".theme__light"),T=document.querySelector(".slider.round"),k=document.querySelector(".theme__dark"),E=document.querySelector(".navigation__home"),S=document.querySelector(".navigation__favorite"),N=document.querySelector(".dark-tema");T.addEventListener("click",(function(){document.body.classList.toggle("dark")?(k.style.color="var(--var-accent-color)",C.style.color="var(--var-primary-bg-color)",E.style.color="var(--var-primary-bg-color)",S.style.color="var(--var-primary-bg-color)",N.style.color="var(--var-primary-bg-color)"):(C.style.color="var(--var-accent-color)",k.style.color="var(--var-primary-text-color)",E.style.color="var(--var-primary-text-color)",S.style.color="var(--var-primary-text-color)",N.style.color="var(--var-primary-text-color)")}));let P=document.querySelector(".open_modal"),R=document.getElementById("close_modal"),O=document.getElementById("modal"),D=document.getElementsByTagName("body")[0];P.onclick=function(){O.classList.add("modal_vis"),O.classList.remove("bounceOutDown"),D.classList.add("body_block")},R.onclick=function(){O.classList.add("bounceOutDown"),O.classList.remove("modal_vis"),D.classList.remove("body_block")};var A,x,M,L=A={};function F(){throw new Error("setTimeout has not been defined")}function U(){throw new Error("clearTimeout has not been defined")}function q(e){if(x===setTimeout)return setTimeout(e,0);if((x===F||!x)&&setTimeout)return x=setTimeout,setTimeout(e,0);try{return x(e,0)}catch(t){try{return x.call(null,e,0)}catch(t){return x.call(this,e,0)}}}!function(){try{x="function"==typeof setTimeout?setTimeout:F}catch(e){x=F}try{M="function"==typeof clearTimeout?clearTimeout:U}catch(e){M=U}}();var j,W=[],H=!1,z=-1;function B(){H&&j&&(H=!1,j.length?W=j.concat(W):z=-1,W.length&&V())}function V(){if(!H){var e=q(B);H=!0;for(var t=W.length;t;){for(j=W,W=[];++z<t;)j&&j[z].run();z=-1,t=W.length}j=null,H=!1,function(e){if(M===clearTimeout)return clearTimeout(e);if((M===U||!M)&&clearTimeout)return M=clearTimeout,clearTimeout(e);try{M(e)}catch(t){try{return M.call(null,e)}catch(t){return M.call(this,e)}}}(e)}}function $(e,t){this.fun=e,this.array=t}function K(){}L.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];W.push(new $(e,t)),1!==W.length||H||q(V)},$.prototype.run=function(){this.fun.apply(null,this.array)},L.title="browser",L.browser=!0,L.env={},L.argv=[],L.version="",L.versions={},L.on=K,L.addListener=K,L.once=K,L.off=K,L.removeListener=K,L.removeAllListeners=K,L.emit=K,L.prependListener=K,L.prependOnceListener=K,L.listeners=function(e){return[]},L.binding=function(e){throw new Error("process.binding is not supported")},L.cwd=function(){return"/"},L.chdir=function(e){throw new Error("process.chdir is not supported")},L.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G=!1,Y=!1,J="${JSCORE_VERSION}",Q=function(e,t){if(!e)throw X(t)},X=function(e){return new Error("Firebase Database ("+J+") INTERNAL ASSERT FAILED: "+e)},Z=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ee={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Z(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},te=function(e){const t=Z(e);return ee.encodeByteArray(t,!0)},ne=function(e){return te(e).replace(/\./g,"")},ie=function(e){try{return ee.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){return se(void 0,e)}function se(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=se(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oe(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ae(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function ce(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function le(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function he(){const e=oe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ue(){return!0===G||!0===Y}function de(){try{return"object"==typeof indexedDB}catch(e){return!1}}function pe(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function fe(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,me=()=>{try{return _e()||(()=>{if(void 0===A||void 0===A.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ie(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ge=e=>{var t,n;return null===(n=null===(t=me())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ve=e=>{const t=ge(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},ye=e=>{var t;return null===(t=me())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ne(JSON.stringify({alg:"none",type:"JWT"})),ne(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ce.prototype.create)}}class Ce{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Te,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Ie(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Te=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e){return JSON.parse(e)}function Ee(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=ke(ie(s[0])||""),n=ke(ie(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Ne=function(e){const t=Se(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Pe=function(e){const t=Se(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Re(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Oe(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function De(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ae(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function xe(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Me(n)&&Me(s)){if(!xe(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Me(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Fe(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Ue(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function je(e,t){const n=new We(e,t);return n.subscribe.bind(n)}class We{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=He),void 0===i.error&&(i.error=He),void 0===i.complete&&(i.complete=He);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function He(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Be=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Q(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Ve=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};function $e(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(e){return e&&e._delegate?e._delegate:e}class Ge{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new we;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Je{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ye(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=[];var Xe,Ze;(Ze=Xe||(Xe={}))[Ze.DEBUG=0]="DEBUG",Ze[Ze.VERBOSE=1]="VERBOSE",Ze[Ze.INFO=2]="INFO",Ze[Ze.WARN=3]="WARN",Ze[Ze.ERROR=4]="ERROR",Ze[Ze.SILENT=5]="SILENT";const et={debug:Xe.DEBUG,verbose:Xe.VERBOSE,info:Xe.INFO,warn:Xe.WARN,error:Xe.ERROR,silent:Xe.SILENT},tt=Xe.INFO,nt={[Xe.DEBUG]:"log",[Xe.VERBOSE]:"log",[Xe.INFO]:"info",[Xe.WARN]:"warn",[Xe.ERROR]:"error"},it=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=nt[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class rt{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?et[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Xe.DEBUG,...e),this._logHandler(this,Xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Xe.VERBOSE,...e),this._logHandler(this,Xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Xe.INFO,...e),this._logHandler(this,Xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Xe.WARN,...e),this._logHandler(this,Xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Xe.ERROR,...e),this._logHandler(this,Xe.ERROR,...e)}constructor(e){this.name=e,this._logLevel=tt,this._logHandler=it,this._userLogHandler=null,Qe.push(this)}}let st,ot;const at=new WeakMap,ct=new WeakMap,lt=new WeakMap,ht=new WeakMap,ut=new WeakMap;let dt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ct.get(e);if("objectStoreNames"===t)return e.objectStoreNames||lt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function pt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ot||(ot=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(mt(this),t),_t(at.get(this))}:function(...t){return _t(e.apply(mt(this),t))}:function(t,...n){const i=e.call(mt(this),t,...n);return lt.set(i,t.sort?t.sort():[t]),_t(i)}}function ft(e){return"function"==typeof e?pt(e):(e instanceof IDBTransaction&&function(e){if(ct.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));ct.set(e,t)}(e),t=e,(st||(st=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,dt):e);var t}function _t(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(_t(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&at.set(t,e)})).catch((()=>{})),ut.set(t,e),t}(e);if(ht.has(e))return ht.get(e);const t=ft(e);return t!==e&&(ht.set(e,t),ut.set(t,e)),t}const mt=e=>ut.get(e);function gt(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=_t(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(_t(o.result),e.oldVersion,e.newVersion,_t(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const vt=["get","getKey","getAll","getAllKeys","count"],yt=["put","add","delete","clear"],wt=new Map;function bt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(wt.get(t))return wt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=yt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!vt.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return wt.set(t,s),s}dt=(e=>({...e,get:(t,n,i)=>bt(t,n)||e.get(t,n,i),has:(t,n)=>!!bt(t,n)||e.has(t,n)}))(dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ct=new rt("@firebase/app"),Tt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},kt=new Map,Et=new Map;function St(e,t){try{e.container.addComponent(t)}catch(n){Ct.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nt(e){const t=e.name;if(Et.has(t))return Ct.debug(`There were multiple attempts to register component ${t}.`),!1;Et.set(t,e);for(const t of kt.values())St(t,e);return!0}function Pt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt=new Ce("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ge("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Rt.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=me())||void 0===s?void 0:s.config),!n)throw Rt.create("no-options");const o=kt.get(r);if(o){if(xe(n,o.options)&&xe(i,o.config))return o;throw Rt.create("duplicate-app",{appName:r})}const a=new Je(r);for(const e of Et.values())a.addComponent(e);const c=new Ot(n,i,a);return kt.set(r,c),c}function At(e="[DEFAULT]"){const t=kt.get(e);if(!t&&"[DEFAULT]"===e)return Dt();if(!t)throw Rt.create("no-app",{appName:e});return t}function xt(e,t,n){var i;let r=null!==(i=Tt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ct.warn(e.join(" "))}Nt(new Ge(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Mt=null;function Lt(){return Mt||(Mt=gt("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Rt.create("idb-open",{originalErrorMessage:e.message})}))),Mt}async function Ft(e,t){try{const n=(await Lt()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Ut(e)),n.done}catch(e){if(e instanceof Ie)Ct.warn(e.message);else{const t=Rt.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ct.warn(t.message)}}}function Ut(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=jt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=jt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Ht(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ht(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ne(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function jt(){return(new Date).toISOString().substring(0,10)}class Wt{async runIndexedDBEnvironmentCheck(){return!!de()&&pe().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Lt()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ut(e))}catch(e){if(e instanceof Ie)Ct.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ct.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Ht(e){return ne(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt;zt="",Nt(new Ge("platform-logger",(e=>new It(e)),"PRIVATE")),Nt(new Ge("heartbeat",(e=>new qt(e)),"PRIVATE")),xt("@firebase/app","0.9.0",zt),xt("@firebase/app","0.9.0","esm2017"),xt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xt("firebase","9.15.0","app");const Bt=new Ce("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Vt(e){return e instanceof Ie&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Kt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Gt(e,t){const n=(await t.json()).error;return Bt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Yt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Jt(e,{refreshToken:t}){const n=Yt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Qt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt=/^[cdef][\w-]{21}$/;function en(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Zt.test(t)?t:""}catch(e){return""}}function tn(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Map;function rn(e,t){const n=tn(e);sn(n,t),function(e,t){const n=an();n&&n.postMessage({key:e,fid:t});cn()}(n,t)}function sn(e,t){const n=nn.get(e);if(n)for(const e of n)e(t)}let on=null;function an(){return!on&&"BroadcastChannel"in self&&(on=new BroadcastChannel("[Firebase] FID Change"),on.onmessage=e=>{sn(e.data.key,e.data.fid)}),on}function cn(){0===nn.size&&on&&(on.close(),on=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln=null;function hn(){return ln||(ln=gt("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-installations-store")}})),ln}async function un(e,t){const n=tn(e),i=(await hn()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n);return await r.put(t,n),await i.done,s&&s.fid===t.fid||rn(e,t.fid),t}async function dn(e){const t=tn(e),n=(await hn()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(t),await n.done}async function pn(e,t){const n=tn(e),i=(await hn()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.done,!o||s&&s.fid===o.fid||rn(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e){let t;const n=await pn(e.appConfig,(n=>{const i=function(e){return gn(e||{fid:en(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Bt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=$t(e),r=Yt(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.6.0"},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Qt((()=>fetch(i,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Kt(e.authToken)}}throw await Gt("Create Installation",c)}(e,t);return un(e.appConfig,n)}catch(n){throw Vt(n)&&409===n.customData.serverCode?await dn(e.appConfig):await un(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:_n(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function _n(e){let t=await mn(e.appConfig);for(;1===t.registrationStatus;)await Xt(100),t=await mn(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await fn(e);return n||t}return t}function mn(e){return pn(e,(e=>{if(!e)throw Bt.create("installation-not-found");return gn(e)}))}function gn(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function vn({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${$t(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),r=Jt(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={installation:{sdkVersion:"w:0.6.0",appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Qt((()=>fetch(i,a)));if(c.ok){return Kt(await c.json())}throw await Gt("Generate Auth Token",c)}async function yn(e,t=!1){let n;const i=await pn(e.appConfig,(i=>{if(!bn(i))throw Bt.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await wn(e.appConfig);for(;1===n.authToken.requestStatus;)await Xt(100),n=await wn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?yn(e,t):i}(e,t),i;{if(!navigator.onLine)throw Bt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await vn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await un(e.appConfig,i),n}catch(n){if(!Vt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await un(e.appConfig,n)}else await dn(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function wn(e){return pn(e,(e=>{if(!bn(e))throw Bt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function bn(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function In(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await fn(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await yn(n,t)).token}function Cn(e){return Bt.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=e=>{const t=Pt(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await fn(t);return i?i.catch(console.error):yn(t).catch(console.error),n.fid}(t),getToken:e=>In(t,e)}};Nt(new Ge("installations",(e=>{const t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw Cn("App Configuration");if(!e.name)throw Cn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Cn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Pt(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Nt(new Ge("installations-internal",Tn,"PRIVATE")),xt("@firebase/installations","0.6.0"),xt("@firebase/installations","0.6.0","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn=new rt("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Sn(e,t,n,i){return async function(r,s,o){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await En(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){kn.error(e)}}(e,t,n,s,o):"config"===r?await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await En(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){kn.error(e)}e("config",r,s)}(e,t,n,i,s,o):"consent"===r?e("consent","update",o):e("set",s)}catch(e){kn.error(e)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nn=new Ce("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Pn=new class{getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}};function Rn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function On(e,t=Pn,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Nn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Nn.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new An;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Dn({appId:i,apiKey:r,measurementId:s},o,a,t)}async function Dn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=Pn){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(Nn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(a)return kn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Rn(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Nn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(o),t}catch(t){const c=t;if(!function(e){if(!(e instanceof Ie&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(r.deleteThrottleMetadata(o),a)return kn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw t}const l=503===Number(null===(s=null==c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?$e(n,r.intervalMillis,30):$e(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),kn.debug(`Calling attemptFetch again in ${l} millis`),Dn(e,h,i,r)}}class An{addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}constructor(){this.listeners=[]}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn,Mn;function Ln(e){Mn=e}function Fn(e){xn=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(e,t,n,i,r,s,o){var a;const c=On(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&kn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>kn.error(e))),t.push(c);const l=async function(){if(!de())return kn.warn(Nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await pe()}catch(e){return kn.warn(Nn.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[h,u]=await Promise.all([c,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes("https://www.googletagmanager.com/gtag/js")&&n.src.includes(e))return n;return null})(s)||function(e,t){const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,h.measurementId),Mn&&(r("consent","default",Mn),Ln(void 0)),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=u&&(d.firebase_id=u),r("config",h.measurementId,d),xn&&(r("set",xn),Fn(void 0)),h.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{_delete(){return delete jn[this.app.options.appId],Promise.resolve()}constructor(e){this.app=e}}let jn={},Wn=[];const Hn={};let zn,Bn,Vn="dataLayer",$n="gtag",Kn=!1;function Gn(e,t,n){!function(){const e=[];if(ce()&&e.push("This is a browser extension environment."),fe()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Nn.create("invalid-analytics-context",{errorInfo:t});kn.warn(n.message)}}();const i=e.options.appId;if(!i)throw Nn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Nn.create("no-api-key");kn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=jn[i])throw Nn.create("already-exists",{id:i});if(!Kn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Vn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=Sn(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(jn,Wn,Hn,Vn,$n);Bn=e,zn=t,Kn=!0}jn[i]=Un(e,Wn,Hn,t,zn,Vn,n);return new qn(e)}function Yn(e,t,n,i){e=Ke(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(Bn,jn[e.app.options.appId],t,n,i).catch((e=>kn.error(e)))}Nt(new Ge("analytics",((e,{options:t})=>Gn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Nt(new Ge("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,i)=>Yn(t,e,n,i)}}catch(e){throw Nn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),xt("@firebase/analytics","0.9.0"),xt("@firebase/analytics","0.9.0","esm2017");function Jn(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Qn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xn=Qn,Zn=new Ce("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ei=new rt("@firebase/auth");function ti(e,...t){ei.logLevel<=Xe.ERROR&&ei.error(`Auth (9.15.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e,...t){throw oi(e,...t)}function ii(e,...t){return oi(e,...t)}function ri(e,t,n){const i=Object.assign(Object.assign({},Xn()),{[t]:n});return new Ce("auth","Firebase",i).create(t,{appName:e.name})}function si(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ni(e,"argument-error"),ri(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oi(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Zn.create(e,...t)}function ai(e,t,...n){if(!e)throw oi(t,...n)}function ci(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ti(t),new Error(t)}function li(e,t){e||ci(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map;function ui(e){li(e instanceof Function,"Expected a class definition");let t=hi.get(e);return t?(li(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hi.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function pi(){return"http:"===fi()||"https:"===fi()}function fi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(pi()||ce()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,li(t>e,"Short delay should be less than long delay!"),this.isMobile=ae()||le()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t){li(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},yi=new _i(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function bi(e,t,n,i,r={}){return Ii(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=Le(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),gi.fetch()(Ti(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ii(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},vi),t);try{const t=new ki(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Ei(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ei(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ei(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ei(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ri(e,a,o);ni(e,a)}}catch(t){if(t instanceof Ie)throw t;ni(e,"network-request-failed")}}async function Ci(e,t,n,i,r={}){const s=await bi(e,t,n,i,r);return"mfaPendingCredential"in s&&ni(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ti(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?mi(e.config,r):`${e.config.apiScheme}://${r}`}class ki{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ii(this.auth,"network-request-failed"))),yi.get())}))}}function Ei(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ii(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Si(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){return 1e3*Number(e)}function Pi(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ti("JWT malformed, contained fewer than 3 sections"),null;try{const e=ie(n);return e?JSON.parse(e):(ti("Failed to decode base64 JWT payload"),null)}catch(e){return ti("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ri(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ie&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Oi{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Ri(e,async function(e,t){return bi(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));ai(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Jn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const h=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Di(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ai(e.idToken,"internal-error"),ai(void 0!==e.idToken,"internal-error"),ai(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Pi(e);return ai(t,"internal-error"),ai(void 0!==t.exp,"internal-error"),ai(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ai(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ii(e,{},(async()=>{const n=Le({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Ti(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",gi.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new xi;return n&&(ai("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(ai("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(ai("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xi,this.toJSON())}_performRefresh(){return ci("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e,t){ai("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Li{async getIdToken(e){const t=await Ri(this,this.stsTokenManager.getToken(this.auth,e));return ai(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ke(e),i=await n.getIdToken(t),r=Pi(i);ai(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Si(Ni(r.auth_time)),issuedAtTime:Si(Ni(r.iat)),expirationTime:Si(Ni(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ke(e);await Ai(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ai(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ai(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ai(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ri(this,async function(e,t){return bi(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,_=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:I}=t;ai(v&&I,e,"internal-error");const C=xi.fromJSON(this.name,I);ai("string"==typeof v,e,"internal-error"),Mi(h,e.name),Mi(u,e.name),ai("boolean"==typeof y,e,"internal-error"),ai("boolean"==typeof w,e,"internal-error"),Mi(d,e.name),Mi(p,e.name),Mi(f,e.name),Mi(_,e.name),Mi(m,e.name),Mi(g,e.name);const T=new Li({uid:v,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:C,createdAt:m,lastLoginAt:g});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),_&&(T._redirectEventId=_),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new xi;i.updateFromServerResponse(t);const r=new Li({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ai(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Jn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Oi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Di(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Fi.type="NONE";const Ui=Fi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e,t,n){return`firebase:${e}:${t}:${n}`}class ji{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ji(ui(Ui),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||ui(Ui);const s=qi(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Li._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new ji(r,e,n)):new ji(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=qi(this.userKey,i.apiKey,r),this.fullPersistenceKey=qi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Hi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ki(t))return"Blackberry";if(Gi(t))return"Webos";if(zi(t))return"Safari";if((t.includes("chrome/")||Bi(t))&&!t.includes("edge/"))return"Chrome";if($i(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Hi(e=oe()){return/firefox\//i.test(e)}function zi(e=oe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Bi(e=oe()){return/crios\//i.test(e)}function Vi(e=oe()){return/iemobile/i.test(e)}function $i(e=oe()){return/android/i.test(e)}function Ki(e=oe()){return/blackberry/i.test(e)}function Gi(e=oe()){return/webos/i.test(e)}function Yi(e=oe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ji(){return he()&&10===document.documentMode}function Qi(e=oe()){return Yi(e)||$i(e)||Gi(e)||Ki(e)||/windows phone/i.test(e)||Vi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(e,t=[]){let n;switch(e){case"Browser":n=Wi(oe());break;case"Worker":n=`${Wi(oe())}-${e}`;break;default:n=e}return`${n}/JsCore/9.15.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ui(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ai(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ai(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ke(e):null;return t&&ai(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ai(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ui(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ce("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ui(e)||this._popupRedirectResolver;ai(t,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[ui(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ai(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ai(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nr(this),this.idTokenSubscription=new nr(this),this.beforeStateQueue=new Zi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function tr(e){return Ke(e)}class nr{get next(){return ai(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=je((e=>this.observer=e))}}function ir(e,t,n){const i=tr(e);ai(i._canInitEmulator,i,"emulator-config-failed"),ai(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=rr(t),{host:o,port:a}=function(e){const t=rr(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:sr(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:sr(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function rr(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function sr(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class or{toJSON(){return ci("not implemented")}_getIdTokenResponse(e){return ci("not implemented")}_linkToIdToken(e,t){return ci("not implemented")}_getReauthenticationResolver(e){return ci("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e,t){return bi(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr extends or{static _fromEmailAndPassword(e,t){return new cr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new cr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ci(e,"POST","/v1/accounts:signInWithPassword",wi(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ci(e,"POST","/v1/accounts:signInWithEmailLink",wi(e,t))}(e,{email:this._email,oobCode:this._password});default:ni(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ar(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ci(e,"POST","/v1/accounts:signInWithEmailLink",wi(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ni(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(e,t){return Ci(e,"POST","/v1/accounts:signInWithIdp",wi(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends or{static _fromParams(e){const t=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ni("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Jn(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new hr(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return lr(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,lr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lr(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Le(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr extends or{static _fromVerification(e,t){return new dr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new dr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ci(e,"POST","/v1/accounts:signInWithPhoneNumber",wi(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ci(e,"POST","/v1/accounts:signInWithPhoneNumber",wi(e,t));if(n.temporaryProof)throw Ei(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ci(e,"POST","/v1/accounts:signInWithPhoneNumber",wi(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ur)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new dr({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{static parseLink(e){const t=function(e){const t=Fe(Ue(e)).link,n=t?Fe(Ue(t)).deep_link_id:null,i=Fe(Ue(e)).deep_link_id;return(i?Fe(Ue(i)).link:null)||i||n||t||e}(e);try{return new pr(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=Fe(Ue(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ai(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{static credential(e,t){return cr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=pr.parseLink(t);return ai(n,"argument-error"),cr._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=fr.PROVIDER_ID}}fr.PROVIDER_ID="password",fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends _r{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr extends mr{static credential(e){return hr._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com",gr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr extends mr{static credential(e,t){return hr._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vr.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}vr.GOOGLE_SIGN_IN_METHOD="google.com",vr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr extends mr{static credential(e){return hr._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}yr.GITHUB_SIGN_IN_METHOD="github.com",yr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr extends mr{static credential(e,t){return hr._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wr.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}wr.TWITTER_SIGN_IN_METHOD="twitter.com",wr.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Li._fromIdTokenResponse(e,n,i),s=Ir(n);return new br({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ir(n);return new br({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Ir(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cr extends Ie{static _fromErrorAndOperation(e,t,n,i){return new Cr(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Tr(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Cr._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(e,t,n=!1){const i=await Ri(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return br._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Er(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Ri(e,Tr(i,r,t,e),n);ai(s.idToken,i,"internal-error");const o=Pi(s.idToken);ai(o,i,"internal-error");const{sub:a}=o;return ai(e.uid===a,i,"user-mismatch"),br._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ni(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(e,t,n=!1){const i="signIn",r=await Tr(e,i,t),s=await br._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}function Nr(e){return Ke(e).signOut()}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Pr{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ji()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=oe();return zi(e)||Yi(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Qi(),this._shouldAllowMigration=!0}}Rr.type="LOCAL";const Or=Rr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Pr{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Dr.type="SESSION";const Ar=Dr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new xr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mr(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr.receivers=[];class Lr{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Mr("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ur(){return void 0!==Fr().WorkerGlobalScope&&"function"==typeof Fr().importScripts}class qr{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function jr(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Wr(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new qr(e).toPromise()}(),t(await Wr()))}))}))}async function Hr(e,t,n){const i=jr(e,!0).put({fbase_key:t,value:n});return new qr(i).toPromise()}function zr(e,t){const n=jr(e,!0).delete(t);return new qr(n).toPromise()}class Br{async _openDb(){return this.db||(this.db=await Wr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ur()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xr._getInstance(Ur()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Lr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wr();return await Hr(e,"__sak","1"),await zr(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Hr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=jr(e,!1).get(t),i=await new qr(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>zr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=jr(e,!1).getAll();return new qr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Br.type="LOCAL";const Vr=Br;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=ii("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Kr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Kr("rcb"),new _i(3e4,6e4);async function Gr(e,t,n){var i;const r=await n.verify();try{let s;if(ai("string"==typeof r,e,"argument-error"),ai("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){ai("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return bi(e,"POST","/v2/accounts/mfaEnrollment:start",wi(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{ai("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;ai(n,e,"missing-multi-factor-info");const o=await function(e,t){return bi(e,"POST","/v2/accounts/mfaSignIn:start",wi(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return bi(e,"POST","/v1/accounts:sendVerificationCode",wi(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{verifyPhoneNumber(e,t){return Gr(this.auth,e,Ke(t))}static credential(e,t){return dr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Yr.credentialFromTaggedObject(t)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?dr._fromTokenResponse(t,n):null}constructor(e){this.providerId=Yr.PROVIDER_ID,this.auth=tr(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(e,t){return t?ui(t):(ai(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr.PROVIDER_ID="phone",Yr.PHONE_SIGN_IN_METHOD="phone";class Qr extends or{_getIdTokenResponse(e){return lr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Xr(e){return Sr(e.auth,new Qr(e),e.bypassAuthState)}function Zr(e){const{auth:t,user:n}=e;return ai(n,t,"internal-error"),Er(n,new Qr(e),e.bypassAuthState)}async function es(e){const{auth:t,user:n}=e;return ai(n,t,"internal-error"),kr(n,new Qr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xr;case"linkViaPopup":case"linkViaRedirect":return es;case"reauthViaPopup":case"reauthViaRedirect":return Zr;default:ni(this.auth,"internal-error")}}resolve(e){li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new _i(2e3,1e4);async function is(e,t,n){const i=tr(e);si(e,t,_r);const r=Jr(i,n);return new rs(i,"signInViaPopup",t,r).executeNotNull()}class rs extends ts{async executeNotNull(){const e=await this.execute();return ai(e,this.auth,"internal-error"),e}async onExecution(){li(1===this.filter.length,"Popup operations only handle one event");const e=Mr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ii(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ii(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ns.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}}rs.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ss=new Map;class os extends ts{async execute(){let e=ss.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ls(t),i=cs(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ss.set(this.auth._key(),e)}return this.bypassAuthState||ss.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function as(e,t){ss.set(e._key(),t)}function cs(e){return ui(e._redirectPersistence)}function ls(e){return qi("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(e,t,n=!1){const i=tr(e),r=Jr(i,t),s=new os(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class us{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ps(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ps(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ii(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ds(e))}saveEventToCache(e){this.cachedEventUids.add(ds(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function ds(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ps({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_s=/^https?/;async function ms(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return bi(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(gs(e))return}catch(e){}ni(e,"unauthorized-domain")}function gs(e){const t=di(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!_s.test(n))return!1;if(fs.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new _i(3e4,6e4);function ys(){const e=Fr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ws=null;function bs(e){return ws=ws||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){ys(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ys(),n(ii(e,"network-request-failed"))},timeout:vs.get()})}if(null===(r=null===(i=Fr().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Fr().gapi)||void 0===s?void 0:s.load)){const t=Kr("iframefcb");return Fr()[t]=()=>{gapi.load?o():n(ii(e,"network-request-failed"))},$r(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ws=null,e}))}(e),ws}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new _i(5e3,15e3),Cs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ts=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ks(e){const t=e.config;ai(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?mi(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.15.0"},r=Ts.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Le(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Es={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ss{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Ns(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Es),{width:i.toString(),height:r.toString(),top:s,left:o}),l=oe().toLowerCase();n&&(a=Bi(l)?"_blank":n),Hi(l)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=oe()){var t;return Yi(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Ss(null);const u=window.open(t||"",a,h);ai(u,e,"popup-blocked");try{u.focus()}catch(e){}return new Ss(u)}function Ps(e,t,n,i,r,s){ai(e.config.authDomain,e,"auth-domain-config-required"),ai(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.15.0",eventId:r};if(t instanceof _r){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",De(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof mr){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?mi(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Le(a).slice(1)}`}const Rs=class{async _openPopup(e,t,n,i){var r;li(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Ns(e,Ps(e,t,n,di(),i),Mr())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Ps(e,t,n,di(),i),Fr().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(li(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await bs(e),n=Fr().gapi;return ai(n,e,"internal-error"),t.open({where:document.body,url:ks(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cs,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=ii(e,"network-request-failed"),s=Fr().setTimeout((()=>{i(r)}),Is.get());function o(){Fr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new us(e);return t.register("authEvent",(t=>{ai(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),ni(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ms(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qi()||zi()||Yi()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ar,this._completeRedirectFn=hs,this._overrideRedirectResult=as}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ai(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ds=ye("authIdTokenMaxAge")||300;let As=null;var xs;xs="Browser",Nt(new Ge("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{ai(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),ai(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:xs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xi(xs)},o=new er(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ui);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Nt(new Ge("auth-internal",(e=>{const t=tr(e.getProvider("auth").getImmediate());return new Os(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),xt("@firebase/auth","0.21.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(xs)),xt("@firebase/auth","0.21.0","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ke(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Re(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ls(t)}}catch(e){}return new Fs},qs=Us("localStorage"),js=Us("sessionStorage"),Ws=new rt("@firebase/database"),Hs=function(){let e=1;return function(){return e++}}(),zs=function(e){const t=Be(e),n=new qe;n.update(t);const i=n.digest();return ee.encodeByteArray(i)},Bs=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Bs.apply(null,i):t+="object"==typeof i?Ee(i):i,t+=" "}return t};let Vs=null,$s=!0;const Ks=function(e,t){Q(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ws.logLevel=Xe.VERBOSE,Vs=Ws.log.bind(Ws),t&&js.set("logging_enabled",!0)):"function"==typeof e?Vs=e:(Vs=null,js.remove("logging_enabled"))},Gs=function(...e){if(!0===$s&&($s=!1,null===Vs&&!0===js.get("logging_enabled")&&Ks(!0)),Vs){const t=Bs.apply(null,e);Vs(t)}},Ys=function(e){return function(...t){Gs(e,...t)}},Js=function(...e){const t="FIREBASE INTERNAL ERROR: "+Bs(...e);Ws.error(t)},Qs=function(...e){const t=`FIREBASE FATAL ERROR: ${Bs(...e)}`;throw Ws.error(t),new Error(t)},Xs=function(...e){const t="FIREBASE WARNING: "+Bs(...e);Ws.warn(t)},Zs=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},eo=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=co(e),i=co(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},to=function(e,t){return e===t?0:e<t?-1:1},no=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ee(t))},io=function(e){if("object"!=typeof e||null===e)return Ee(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Ee(t[i]),n+=":",n+=io(e[t[i]]);return n+="}",n},ro=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function so(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const oo=function(e){Q(!Zs(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const ao=new RegExp("^-?(0*)\\d{1,10}$"),co=function(e){if(ao.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},lo=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Xs("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ho=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Xs(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Gs("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xs(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class fo{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}fo.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _o=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qs.get("host:"+e)||this._host}}function go(e,t,n){let i;if(Q("string"==typeof t,"typeof type must == string"),Q("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return so(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{incrementCounter(e,t=1){Re(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return re(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo={},wo={};function bo(e){const t=e.toString();return yo[t]||(yo[t]=new vo),yo[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&lo((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Io(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(ue()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new To(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&_o.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Co.forceAllow_=!0}static forceDisallow(){Co.forceDisallow_=!0}static isAvailable(){return!ue()&&(!!Co.forceAllow_||!(Co.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=te(t),i=ro(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(ue())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ee(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ys(e),this.stats_=bo(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),go(t,"long_polling",e))}}class To{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Gs("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){ue()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Gs("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,ue())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Hs(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=To.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Gs("frame writing exception"),e.stack&&Gs(e.stack),Gs(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko=null;"undefined"!=typeof MozWebSocket?ko=MozWebSocket:"undefined"!=typeof WebSocket&&(ko=WebSocket);class Eo{static connectionURL_(e,t,n,i,r){const s={v:"5"};return!ue()&&"undefined"!=typeof location&&location.hostname&&_o.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),go(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qs.set("previous_websocket_failure",!0);try{let e;if(ue()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Ms}/${A.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ko(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Eo.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ko&&!Eo.forceDisallow_}static previouslyFailed(){return qs.isInMemoryStorage||!0===qs.get("previous_websocket_failure")}markConnectionHealthy(){qs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=ke(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ro(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ys(this.connId),this.stats_=bo(t),this.connURL=Eo.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}Eo.responsesRequiredToBeHealthy=2,Eo.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{static get ALL_TRANSPORTS(){return[Co,Eo]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Eo&&Eo.isAvailable();let n=t&&!Eo.previouslyFailed();if(e.webSocketOnly&&(t||Xs("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Eo];else{const e=this.transports_=[];for(const t of So.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);So.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}So.globalTransportInitialized_=!1;class No{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ho((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=no("t",e),n=no("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=no("t",e),n=no("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=no("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Js("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Js("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Xs("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ho((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ho((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ys("c:"+this.id+":"),this.transportManager_=new So(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Q(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Ro{static getInstance(){return new Oo}getInitialEvent(e){return Q("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ae()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Ao(){return new Do("")}function xo(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Mo(e){return e.pieces_.length-e.pieceNum_}function Lo(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Do(e.pieces_,t)}function Fo(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Uo(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function qo(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Do(t,0)}function jo(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Do)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Do(n,0)}function Wo(e){return e.pieceNum_>=e.pieces_.length}function Ho(e,t){const n=xo(e),i=xo(t);if(null===n)return t;if(n===i)return Ho(Lo(e),Lo(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function zo(e,t){if(Mo(e)!==Mo(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Bo(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Mo(e)>Mo(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Vo{constructor(e,t){this.errorPrefix_=t,this.parts_=Uo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ve(this.parts_[e]);$o(this)}}function $o(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ko(e))}function Ko(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends Ro{static getInstance(){return new Go}getInitialEvent(e){return Q("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Po{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Ee(r)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new we,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Yo.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Re(e,"w")){const n=Oe(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Xs(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Pe(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ne(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Js("Unrecognized action received from server: "+Ee(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yo.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){Q(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?Gs("getToken() completed but was canceled"):(Gs("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new No(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Xs(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Xs(e),a())}}}interrupt(e){Gs("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Gs("Resuming connection for reason: "+e),delete this.interruptReasons_[e],De(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>io(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Do(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Gs("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Gs("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";ue()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Ms.replace(/\./g,"-")]=1,ae()?e["framework.cordova"]=1:le()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Oo.getInstance().currentlyOnline();return De(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Yo.nextPersistentConnectionId_++,this.log_=Ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ue())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Go.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Oo.getInstance().on("online",this.onOnline_,this)}}Yo.nextPersistentConnectionId_=0,Yo.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{static Wrap(e,t){return new Jo(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Jo("[MIN_NAME]",e),i=new Jo("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Jo.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;class Zo extends Qo{static get __EMPTY_NODE(){return Xo}static set __EMPTY_NODE(e){Xo=e}compare(e,t){return eo(e.name,t.name)}isDefinedOn(e){throw X("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Jo.MIN}maxPost(){return new Jo("[MAX_NAME]",Xo)}makePost(e,t){return Q("string"==typeof e,"KeyIndex indexValue must always be a string."),new Jo(e,Xo)}toString(){return".key"}}const ea=new Zo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class na{copy(e,t,n,i,r){return new na(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ia.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ia.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,na.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,na.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:na.RED,this.left=null!=i?i:ia.EMPTY_NODE,this.right=null!=r?r:ia.EMPTY_NODE}}na.RED=!0,na.BLACK=!1;class ia{insert(e,t){return new ia(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,na.BLACK,null,null))}remove(e){return new ia(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,na.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ta(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ta(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ta(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ta(this.root_,null,this.comparator_,!0,e)}constructor(e,t=ia.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(e,t){return eo(e.name,t.name)}function sa(e,t){return eo(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;ia.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new na(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const aa=function(e){return"number"==typeof e?"number:"+oo(e):"string:"+e},ca=function(e){if(e.isLeafNode()){const t=e.val();Q("string"==typeof t||"number"==typeof t||"object"==typeof t&&Re(t,".sv"),"Priority must be a string or number.")}else Q(e===oa||e.isEmpty(),"priority of unexpected type.");Q(e===oa||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let la,ha,ua;class da{static set __childrenNodeConstructor(e){la=e}static get __childrenNodeConstructor(){return la}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new da(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:da.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Wo(e)?this:".priority"===xo(e)?this.priorityNode_:da.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:da.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=xo(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Q(".priority"!==n||1===Mo(e),".priority must be the last token in a path"),this.updateImmediateChild(n,da.__childrenNodeConstructor.EMPTY_NODE.updateChild(Lo(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+aa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?oo(this.value_):this.value_,this.lazyHash_=zs(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===da.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof da.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=da.VALUE_TYPE_ORDER.indexOf(t),r=da.VALUE_TYPE_ORDER.indexOf(n);return Q(i>=0,"Unknown leaf type: "+t),Q(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=da.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Q(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ca(this.priorityNode_)}}da.VALUE_TYPE_ORDER=["object","boolean","number","string"];const pa=new class extends Qo{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?eo(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Jo.MIN}maxPost(){return new Jo("[MAX_NAME]",new da("[PRIORITY-POST]",ua))}makePost(e,t){const n=ha(e);return new Jo(t,new da("[PRIORITY-POST]",n))}toString(){return".priority"}},fa=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/fa,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const ma=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new na(a,o.node,na.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),h=r(c+1,i);return o=e[c],a=n?n(o):o,new na(a,o.node,na.BLACK,l,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),h=e[s],u=n?n(h):h;c(new na(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,na.BLACK):(a(i,na.BLACK),a(i,na.RED))}return s}(new _a(e.length));return new ia(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;const va={};class ya{static get Default(){return Q(va&&pa,"ChildrenNode.ts has not been loaded"),ga=ga||new ya({".priority":va},{".priority":pa}),ga}get(e){const t=Oe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ia?t:null}hasIndex(e){return Re(this.indexSet_,e.toString())}addIndex(e,t){Q(e!==ea,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Jo.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?ma(n,e.getCompare()):va;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new ya(l,c)}addToIndexes(e,t){const n=Ae(this.indexes_,((n,i)=>{const r=Oe(this.indexSet_,i);if(Q(r,"Missing index implementation for "+i),n===va){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Jo.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),ma(n,r.getCompare())}return va}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Jo(e.name,i))),r.insert(e,e.node)}}));return new ya(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ae(this.indexes_,(n=>{if(n===va)return n;{const i=t.get(e.name);return i?n.remove(new Jo(e.name,i)):n}}));return new ya(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;class ba{static get EMPTY_NODE(){return wa||(wa=new ba(new ia(sa),null,ya.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wa}updatePriority(e){return this.children_.isEmpty()?this:new ba(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?wa:t}}getChild(e){const t=xo(e);return null===t?this:this.getImmediateChild(t).getChild(Lo(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Q(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Jo(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?wa:this.priorityNode_;return new ba(i,s,r)}}updateChild(e,t){const n=xo(e);if(null===n)return t;{Q(".priority"!==xo(e)||1===Mo(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Lo(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(pa,((s,o)=>{t[s]=o.val(e),n++,r&&ba.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+aa(this.getPriority().val())+":"),this.forEachChild(pa,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":zs(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Jo(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Jo(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Jo(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Jo.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Jo.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ia?-1:0}withIndex(e){if(e===ea||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ba(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ea||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(pa),n=t.getIterator(pa);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===ea?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ca(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}ba.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ia=new class extends ba{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ba.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new ia(sa),ba.EMPTY_NODE,ya.Default)}};Object.defineProperties(Jo,{MIN:{value:new Jo("[MIN_NAME]",ba.EMPTY_NODE)},MAX:{value:new Jo("[MAX_NAME]",Ia)}}),Zo.__EMPTY_NODE=ba.EMPTY_NODE,da.__childrenNodeConstructor=ba,oa=Ia,function(e){ua=e}(Ia);function Ca(e,t=null){if(null===e)return ba.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Q(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new da(e,Ca(t))}if(e instanceof Array){let n=ba.EMPTY_NODE;return so(e,((t,i)=>{if(Re(e,t)&&"."!==t.substring(0,1)){const e=Ca(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Ca(t))}{const n=[];let i=!1;if(so(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Ca(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Jo(e,r)))}})),0===n.length)return ba.EMPTY_NODE;const r=ma(n,ra,(e=>e.name),sa);if(i){const e=ma(n,pa.getCompare());return new ba(r,Ca(t),new ya({".priority":e},{".priority":pa}))}return new ba(r,Ca(t),ya.Default)}}!function(e){ha=e}(Ca);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta extends Qo{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?eo(e.name,t.name):r}makePost(e,t){const n=Ca(e),i=ba.EMPTY_NODE.updateChild(this.indexPath_,n);return new Jo(t,i)}maxPost(){const e=ba.EMPTY_NODE.updateChild(this.indexPath_,Ia);return new Jo("[MAX_NAME]",e)}toString(){return Uo(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,Q(!Wo(e)&&".priority"!==xo(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new class extends Qo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?eo(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Jo.MIN}maxPost(){return Jo.MAX}makePost(e,t){const n=Ca(e);return new Jo(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e){return{type:"value",snapshotNode:e}}function Sa(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Na(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Pa(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{updateChild(e,t,n,i,r,s){Q(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Na(t,o)):Q(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Sa(t,n)):s.trackChildChange(Pa(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(pa,((e,i)=>{t.hasChild(e)||n.trackChildChange(Na(e,i))})),t.isLeafNode()||t.forEachChild(pa,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Pa(t,i,r))}else n.trackChildChange(Sa(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ba.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Jo(t,n))||(n=ba.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ba.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ba.EMPTY_NODE);const r=this;return t.forEachChild(pa,((e,t)=>{r.matches(new Jo(e,t))||(i=i.updateImmediateChild(e,ba.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new Ra(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Oa.getStartPost_(e),this.endPost_=Oa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Jo(t,n))||(n=ba.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=ba.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=ba.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(ba.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,ba.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Q(o.numChildren()===this.limit_,"");const a=new Jo(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:s(h,a);if(l&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(Pa(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Na(t,e));const n=o.updateImmediateChild(t,ba.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(Sa(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:l&&s(c,a)>=0?(null!=r&&(r.trackChildChange(Na(c.name,c.node)),r.trackChildChange(Sa(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,ba.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Oa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pa}copy(){const e=new Aa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pa}}function xa(e){const t={};if(e.isDefault())return t;let n;if(e.index_===pa?n="$priority":e.index_===ka?n="$value":e.index_===ea?n="$key":(Q(e.index_ instanceof Ta,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ee(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Ee(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Ee(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Ee(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Ee(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ma(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==pa&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends Po{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=La.getListenId_(e,n),o={};this.listens_[s]=o;const a=xa(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Oe(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=La.getListenId_(e,t);delete this.listens_[n]}get(e){const t=xa(e._queryParams),n=e._path.toString(),i=new we;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Le(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ke(o.responseText)}catch(e){Xs("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Xs("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Ys("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=ba.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(){return{value:null,children:new Map}}function qa(e,t,n){if(Wo(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=xo(t);e.children.has(i)||e.children.set(i,Ua());qa(e.children.get(i),t=Lo(t),n)}}function ja(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{ja(i,new Do(t.toString()+"/"+e),n)}))}class Wa{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&so(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;so(e,((e,i)=>{i>0&&Re(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),ho(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wa(e);const n=1e4+2e4*Math.random();ho(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var za,Ba;function Va(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ba=za||(za={}))[Ba.OVERWRITE=0]="OVERWRITE",Ba[Ba.MERGE=1]="MERGE",Ba[Ba.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ba[Ba.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class $a{operationForChild(e){if(Wo(this.path)){if(null!=this.affectedTree.value)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Do(e));return new $a(Ao(),t,this.revert)}}return Q(xo(this.path)===e,"operationForChild called for unrelated child."),new $a(Lo(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=za.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{operationForChild(e){return Wo(this.path)?new Ka(this.source,Ao()):new Ka(this.source,Lo(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=za.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{operationForChild(e){return Wo(this.path)?new Ga(this.source,Ao(),this.snap.getImmediateChild(e)):new Ga(this.source,Lo(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=za.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{operationForChild(e){if(Wo(this.path)){const t=this.children.subtree(new Do(e));return t.isEmpty()?null:t.value?new Ga(this.source,Ao(),t.value):new Ya(this.source,Ao(),t)}return Q(xo(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ya(this.source,Lo(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=za.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Wo(e))return this.isFullyInitialized()&&!this.filtered_;const t=xo(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xa(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw X("Should only compare child_ events.");const i=new Jo(t.childName,t.snapshotNode),r=new Jo(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Za(e,t){return{eventCache:e,serverCache:t}}function ec(e,t,n,i){return Za(new Ja(t,n,i),e.serverCache)}function tc(e,t,n,i){return Za(e.eventCache,new Ja(t,n,i))}function nc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ic(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;class sc{static fromObject(e){let t=new sc(null);return so(e,((e,n)=>{t=t.set(new Do(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ao(),value:this.value};if(Wo(e))return null;{const n=xo(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Lo(e),t);if(null!=r){return{path:jo(new Do(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Wo(e))return this;{const t=xo(e),n=this.children.get(t);return null!==n?n.subtree(Lo(e)):new sc(null)}}set(e,t){if(Wo(e))return new sc(t,this.children);{const n=xo(e),i=(this.children.get(n)||new sc(null)).set(Lo(e),t),r=this.children.insert(n,i);return new sc(this.value,r)}}remove(e){if(Wo(e))return this.children.isEmpty()?new sc(null):new sc(null,this.children);{const t=xo(e),n=this.children.get(t);if(n){const i=n.remove(Lo(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new sc(null):new sc(this.value,r)}return this}}get(e){if(Wo(e))return this.value;{const t=xo(e),n=this.children.get(t);return n?n.get(Lo(e)):null}}setTree(e,t){if(Wo(e))return t;{const n=xo(e),i=(this.children.get(n)||new sc(null)).setTree(Lo(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new sc(this.value,r)}}fold(e){return this.fold_(Ao(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(jo(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ao(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Wo(e))return null;{const i=xo(e),r=this.children.get(i);return r?r.findOnPath_(Lo(e),jo(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ao(),t)}foreachOnPath_(e,t,n){if(Wo(e))return this;{this.value&&n(t,this.value);const i=xo(e),r=this.children.get(i);return r?r.foreachOnPath_(Lo(e),jo(t,i),n):new sc(null)}}foreach(e){this.foreach_(Ao(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(jo(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(rc||(rc=new ia(to)),rc))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{static empty(){return new oc(new sc(null))}constructor(e){this.writeTree_=e}}function ac(e,t,n){if(Wo(t))return new oc(new sc(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Ho(r,t);return s=s.updateChild(o,n),new oc(e.writeTree_.set(r,s))}{const i=new sc(n),r=e.writeTree_.setTree(t,i);return new oc(r)}}}function cc(e,t,n){let i=e;return so(n,((e,n)=>{i=ac(i,jo(t,e),n)})),i}function lc(e,t){if(Wo(t))return oc.empty();{const n=e.writeTree_.setTree(t,new sc(null));return new oc(n)}}function hc(e,t){return null!=uc(e,t)}function uc(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ho(n.path,t)):null}function dc(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(pa,((e,n)=>{t.push(new Jo(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Jo(e,n.value))})),t}function pc(e,t){if(Wo(t))return e;{const n=uc(e,t);return new oc(null!=n?new sc(n):e.writeTree_.subtree(t))}}function fc(e){return e.writeTree_.isEmpty()}function _c(e,t){return mc(Ao(),e.writeTree_,t)}function mc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Q(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=mc(jo(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(jo(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(e,t){return Rc(t,e)}function vc(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Q(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&yc(t,i.path)?r=!1:Bo(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=bc(e.allWrites,wc,Ao()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=lc(e.visibleWrites,i.path);else{so(i.children,(t=>{e.visibleWrites=lc(e.visibleWrites,jo(i.path,t))}))}return!0}return!1}function yc(e,t){if(e.snap)return Bo(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Bo(jo(e.path,n),t))return!0;return!1}function wc(e){return e.visible}function bc(e,t,n){let i=oc.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Bo(n,e)?(t=Ho(n,e),i=ac(i,t,s.snap)):Bo(e,n)&&(t=Ho(e,n),i=ac(i,Ao(),s.snap.getChild(t)));else{if(!s.children)throw X("WriteRecord should have .snap or .children");if(Bo(n,e))t=Ho(n,e),i=cc(i,t,s.children);else if(Bo(e,n))if(t=Ho(e,n),Wo(t))i=cc(i,Ao(),s.children);else{const e=Oe(s.children,xo(t));if(e){const n=e.getChild(Lo(t));i=ac(i,Ao(),n)}}}}}return i}function Ic(e,t,n,i,r){if(i||r){const s=pc(e.visibleWrites,t);if(!r&&fc(s))return n;if(r||null!=n||hc(s,Ao())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Bo(e.path,t)||Bo(t,e.path))};return _c(bc(e.allWrites,s,t),n||ba.EMPTY_NODE)}return null}{const i=uc(e.visibleWrites,t);if(null!=i)return i;{const i=pc(e.visibleWrites,t);if(fc(i))return n;if(null!=n||hc(i,Ao())){return _c(i,n||ba.EMPTY_NODE)}return null}}}function Cc(e,t,n,i){return Ic(e.writeTree,e.treePath,t,n,i)}function Tc(e,t){return function(e,t,n){let i=ba.EMPTY_NODE;const r=uc(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(pa,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=pc(e.visibleWrites,t);return n.forEachChild(pa,((e,t)=>{const n=_c(pc(r,new Do(e)),t);i=i.updateImmediateChild(e,n)})),dc(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return dc(pc(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function kc(e,t,n,i){return function(e,t,n,i,r){Q(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=jo(t,n);if(hc(e.visibleWrites,s))return null;{const t=pc(e.visibleWrites,s);return fc(t)?r.getChild(n):_c(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Ec(e,t){return function(e,t){return uc(e.visibleWrites,t)}(e.writeTree,jo(e.treePath,t))}function Sc(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=pc(e.visibleWrites,t),l=uc(c,Ao());if(null!=l)a=l;else{if(null==n)return[];a=_c(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Nc(e,t,n){return function(e,t,n,i){const r=jo(t,n),s=uc(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return _c(pc(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Pc(e,t){return Rc(jo(e.treePath,t),e.writeTree)}function Rc(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{trackChildChange(e){const t=e.type,n=e.childName;Q("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Q(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Pa(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Na(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Sa(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw X("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Pa(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Ac{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ja(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nc(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ic(this.viewCache_),r=Sc(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(e,t,n,i,r){const s=new Oc;let o,a;if(n.type===za.OVERWRITE){const c=n;c.source.fromUser?o=Fc(e,t,c.path,c.snap,i,r,s):(Q(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!Wo(c.path),o=Lc(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===za.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=jo(n,i);Uc(t,xo(l))&&(a=Fc(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=jo(n,i);Uc(t,xo(l))||(a=Fc(e,a,l,c,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):(Q(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=jc(e,t,c.path,c.children,i,r,a,s))}else if(n.type===za.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=Ec(i,n))return t;{const a=new Ac(i,t,r),c=t.eventCache.getNode();let l;if(Wo(n)||".priority"===xo(n)){let n;if(t.serverCache.isFullyInitialized())n=Cc(i,ic(t));else{const e=t.serverCache.getNode();Q(e instanceof ba,"serverChildren would be complete if leaf node"),n=Tc(i,e)}l=e.filter.updateFullNode(c,n,s)}else{const r=xo(n);let h=Nc(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=c.getImmediateChild(r)),l=null!=h?e.filter.updateChild(c,r,h,Lo(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,ba.EMPTY_NODE,Lo(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Cc(i,ic(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Ec(i,Ao()),ec(t,l,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=Ec(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(Wo(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Lc(e,t,n,c.getNode().getChild(n),r,s,a,o);if(Wo(n)){let i=new sc(null);return c.getNode().forEachChild(ea,((e,t)=>{i=i.set(new Do(e),t)})),jc(e,t,n,i,r,s,a,o)}return t}{let l=new sc(null);return i.foreach(((e,t)=>{const i=jo(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),jc(e,t,n,l,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==za.LISTEN_COMPLETE)throw X("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=tc(t,s.getNode(),s.isFullyInitialized()||Wo(n),s.isFiltered());return Mc(e,o,n,i,Dc,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=nc(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Ea(nc(t)))}}(t,o,c),{viewCache:o,changes:c}}function Mc(e,t,n,i,r,s){const o=t.eventCache;if(null!=Ec(i,n))return t;{let a,c;if(Wo(n))if(Q(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ic(t),r=Tc(i,n instanceof ba?n:ba.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=Cc(i,ic(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=xo(n);if(".priority"===l){Q(1===Mo(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=kc(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=Lo(n);let u;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=kc(i,n,o.getNode(),c);u=null!=e?o.getNode().getImmediateChild(l).updateChild(h,e):o.getNode().getImmediateChild(l)}else u=Nc(i,l,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),l,u,h,r,s):o.getNode()}}return ec(t,a,o.isFullyInitialized()||Wo(n),e.filter.filtersNodes())}}function Lc(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(Wo(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=xo(n);if(!c.isCompleteForPath(n)&&Mo(n)>1)return t;const r=Lo(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?h.updatePriority(c.getNode(),s):h.updateChild(c.getNode(),e,s,r,Dc,null)}const u=tc(t,l,c.isFullyInitialized()||Wo(n),h.filtersNodes());return Mc(e,u,n,r,new Ac(r,u,s),a)}function Fc(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const h=new Ac(r,t,s);if(Wo(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=ec(t,l,!0,e.filter.filtersNodes());else{const r=xo(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ec(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=Lo(n),l=a.getNode().getImmediateChild(r);let u;if(Wo(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===Fo(s)&&e.getChild(qo(s)).isEmpty()?e:e.updateChild(s,i):ba.EMPTY_NODE}if(l.equals(u))c=t;else{c=ec(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Uc(e,t){return e.eventCache.isCompleteForChild(t)}function qc(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function jc(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=Wo(n)?i:new sc(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const c=qc(0,t.serverCache.getNode().getImmediateChild(n),i);l=Lc(e,l,new Do(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!c){const c=qc(0,t.serverCache.getNode().getImmediateChild(n),i);l=Lc(e,l,new Do(n),c,r,s,o,a)}})),l}class Wc{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ra(n.getIndex()),r=(s=n).loadsAllData()?new Ra(s.getIndex()):s.hasLimit()?new Da(s):new Oa(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(ba.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(ba.EMPTY_NODE,a.getNode(),null),h=new Ja(c,o.isFullyInitialized(),i.filtersNodes()),u=new Ja(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Za(u,h),this.eventGenerator_=new Qa(this.query_)}}function Hc(e,t){const n=ic(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Wo(t)&&!n.getImmediateChild(xo(t)).isEmpty())?n.getChild(t):null}function zc(e){return 0===e.eventRegistrations_.length}function Bc(e,t,n){const i=[];if(n){Q(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Vc(e,t,n,i){t.type===za.MERGE&&null!==t.source.queryId&&(Q(ic(e.viewCache_),"We should always have a full cache before handling merges"),Q(nc(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=xc(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Q(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Q(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Q(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,$c(e,s.changes,s.viewCache.eventCache.getNode(),null)}function $c(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Xa(e,r,"child_removed",t,i,n),Xa(e,r,"child_added",t,i,n),Xa(e,r,"child_moved",s,i,n),Xa(e,r,"child_changed",t,i,n),Xa(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc,Gc;class Yc{constructor(){this.views=new Map}}function Jc(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Q(null!=s,"SyncTree gave us an op for an invalid query."),Vc(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Vc(s,t,n,i));return r}}function Qc(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Cc(n,r?i:null),s=!1;e?s=!0:i instanceof ba?(e=Tc(n,i),s=!1):(e=ba.EMPTY_NODE,s=!1);const o=Za(new Ja(e,s,!1),new Ja(i,r,!1));return new Wc(t,o)}return o}function Xc(e,t,n,i,r,s){const o=Qc(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(pa,((e,t)=>{i.push(Sa(e,t))}));return n.isFullyInitialized()&&i.push(Ea(n.getNode())),$c(e,i,n.getNode(),t)}(o,n)}function Zc(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=rl(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(Bc(r,n,i)),zc(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(Bc(t,n,i)),zc(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!rl(e)&&s.push(new(Q(Kc,"Reference.ts has not been loaded"),Kc)(t._repo,t._path)),{removed:s,events:o}}function el(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function tl(e,t){let n=null;for(const i of e.views.values())n=n||Hc(i,t);return n}function nl(e,t){if(t._queryParams.loadsAllData())return sl(e);{const n=t._queryIdentifier;return e.views.get(n)}}function il(e,t){return null!=nl(e,t)}function rl(e){return null!=sl(e)}function sl(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol=1;class al{constructor(e){this.listenProvider_=e,this.syncPointTree_=new sc(null),this.pendingWriteTree_={visibleWrites:oc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cl(e,t,n,i,r){return function(e,t,n,i,r){Q(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=ac(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?ml(e,new Ga({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ll(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(vc(e.pendingWriteTree_,t)){let t=new sc(null);return null!=i.snap?t=t.set(Ao(),!0):so(i.children,(e=>{t=t.set(new Do(e),!0)})),ml(e,new $a(i.path,t,n))}return[]}function hl(e,t,n){return ml(e,new Ga({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ul(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||il(o,t))){const c=Zc(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>rl(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&rl(t)){return[sl(t)]}{let e=[];return t&&(e=el(t)),so(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=yl(e,i);e.listenProvider_.startListening(kl(r),wl(e,r),s.hashFn,s.onComplete)}}}if(!r&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(kl(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(bl(t));e.listenProvider_.stopListening(kl(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=bl(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return a}function dl(e,t,n,i){const r=Il(e,i);if(null!=r){const i=Cl(r),s=i.path,o=i.queryId,a=Ho(s,t);return Tl(e,s,new Ga(Va(o),a,n))}return[]}function pl(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Ho(e,r);s=s||tl(t,n),o=o||rl(t)}));let a,c=e.syncPointTree_.get(r);if(c?(o=o||rl(c),s=s||tl(c,Ao())):(c=new Yc,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=s)a=!0;else{a=!1,s=ba.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=tl(t,Ao());n&&(s=s.updateImmediateChild(e,n))}))}const l=il(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=bl(t);Q(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ol++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=Xc(c,t,n,gc(e.pendingWriteTree_,r),s,a);if(!l&&!o&&!i){const n=nl(c,t);h=h.concat(function(e,t,n){const i=t._path,r=wl(e,t),s=yl(e,n),o=e.listenProvider_.startListening(kl(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)Q(!rl(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Wo(e)&&t&&rl(t))return[sl(t).query];{let e=[];return t&&(e=e.concat(el(t).map((e=>e.query)))),so(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(kl(i),wl(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function fl(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=tl(n,Ho(e,t));if(i)return i}));return Ic(i,t,r,n,!0)}function _l(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=Ho(e,n);i=i||tl(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||tl(r,Ao()):(r=new Yc,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Ja(i,!0,!1):null;return function(e){return nc(e.viewCache_)}(Qc(r,t,gc(e.pendingWriteTree_,t._path),s?o.getNode():ba.EMPTY_NODE,s))}function ml(e,t){return gl(t,e.syncPointTree_,null,gc(e.pendingWriteTree_,Ao()))}function gl(e,t,n,i){if(Wo(e.path))return vl(e,t,n,i);{const r=t.get(Ao());null==n&&null!=r&&(n=tl(r,Ao()));let s=[];const o=xo(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Pc(i,o);s=s.concat(gl(a,c,e,t))}return r&&(s=s.concat(Jc(r,e,i,n))),s}}function vl(e,t,n,i){const r=t.get(Ao());null==n&&null!=r&&(n=tl(r,Ao()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Pc(i,t),c=e.operationForChild(t);c&&(s=s.concat(vl(c,r,o,a)))})),r&&(s=s.concat(Jc(r,e,i,n))),s}function yl(e,t){const n=t.query,i=wl(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ba.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Il(e,n);if(i){const n=Cl(i),r=n.path,s=n.queryId,o=Ho(r,t);return Tl(e,r,new Ka(Va(s),o))}return[]}(e,n._path,i):function(e,t){return ml(e,new Ka({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return ul(e,n,null,i)}}}}function wl(e,t){const n=bl(t);return e.queryToTagMap.get(n)}function bl(e){return e._path.toString()+"$"+e._queryIdentifier}function Il(e,t){return e.tagToQueryMap.get(t)}function Cl(e){const t=e.indexOf("$");return Q(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Do(e.substr(0,t))}}function Tl(e,t,n){const i=e.syncPointTree_.get(t);Q(i,"Missing sync point for query tag that we're tracking");return Jc(i,n,gc(e.pendingWriteTree_,t),null)}function kl(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Q(Gc,"Reference.ts has not been loaded"),Gc)(e._repo,e._path):e}class El{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new El(t)}node(){return this.node_}constructor(e){this.node_=e}}class Sl{getImmediateChild(e){const t=jo(this.path_,e);return new Sl(this.syncTree_,t)}node(){return fl(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Nl=function(e,t,n){return e&&"object"==typeof e?(Q(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Pl(e[".sv"],t,n):"object"==typeof e[".sv"]?Rl(e[".sv"],t):void Q(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Pl=function(e,t,n){if("timestamp"===e)return n.timestamp;Q(!1,"Unexpected server value: "+e)},Rl=function(e,t,n){e.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Q(!1,"Unexpected increment value: "+i);const r=t.node();if(Q(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Ol=function(e,t,n,i){return Al(t,new Sl(n,e),i)},Dl=function(e,t,n){return Al(e,new El(t),n)};function Al(e,t,n){const i=e.getPriority().val(),r=Nl(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Nl(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new da(s,Ca(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new da(r))),i.forEachChild(pa,((e,i)=>{const r=Al(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ml(e,t){let n=t instanceof Do?t:new Do(t),i=e,r=xo(n);for(;null!==r;){const e=Oe(i.node.children,r)||{children:{},childCount:0};i=new xl(r,i,e),n=Lo(n),r=xo(n)}return i}function Ll(e){return e.node.value}function Fl(e,t){e.node.value=t,Hl(e)}function Ul(e){return e.node.childCount>0}function ql(e,t){so(e.node.children,((n,i)=>{t(new xl(n,e,i))}))}function jl(e,t,n,i){n&&!i&&t(e),ql(e,(e=>{jl(e,t,!0,i)})),n&&i&&t(e)}function Wl(e){return new Do(null===e.parent?e.name:Wl(e.parent)+"/"+e.name)}function Hl(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ll(e)&&!Ul(e)}(n),r=Re(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Hl(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Hl(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const zl=/[\[\].#$\/\u0000-\u001F\u007F]/,Bl=/[\[\].#$\u0000-\u001F\u007F]/,Vl=function(e){return"string"==typeof e&&0!==e.length&&!zl.test(e)},$l=function(e){return"string"==typeof e&&0!==e.length&&!Bl.test(e)},Kl=function(e,t,n){const i=n instanceof Do?new Vo(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ko(i));if("function"==typeof t)throw new Error(e+"contains a function "+Ko(i)+" with contents = "+t.toString());if(Zs(t))throw new Error(e+"contains "+t.toString()+" "+Ko(i));if("string"==typeof t&&t.length>10485760/3&&Ve(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Ko(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(so(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Vl(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ko(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ve(a),$o(o),Kl(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ve(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Ko(i)+" in addition to actual children.")}},Gl=function(e,t,n,i){if(!(i&&void 0===n||$l(n)))throw new Error(ze(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Yl=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Vl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),$l(e)}(n))throw new Error(ze(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jl{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ql(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||zo(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Xl(e,t,n){Ql(e,n),Zl(e,(e=>Bo(e,t)||Bo(t,e)))}function Zl(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(eh(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function eh(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Vs&&Gs("event: "+n.toString()),lo(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jl,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ua(),this.transactionQueueTree_=new xl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function nh(e,t,n){if(e.stats_=bo(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new La(e.repoInfo_,((t,n,i,r)=>{sh(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>oh(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Yo(e.repoInfo_,t,((t,n,i,r)=>{sh(e,t,n,i,r)}),(t=>{oh(e,t)}),(t=>{!function(e,t){so(t,((t,n)=>{ah(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return wo[n]||(wo[n]=t()),wo[n]}(e.repoInfo_,(()=>new Ha(e.stats_,e.server_))),e.infoData_=new Fa,e.infoSyncTree_=new al({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=hl(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),ah(e,"connected",!1),e.serverSyncTree_=new al({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Xl(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ih(e){const t=e.infoData_.getNode(new Do(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function rh(e){return(t=(t={timestamp:ih(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function sh(e,t,n,i,r){e.dataUpdateCount++;const s=new Do(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=Ae(n,(e=>Ca(e)));o=function(e,t,n,i){const r=Il(e,i);if(r){const i=Cl(r),s=i.path,o=i.queryId,a=Ho(s,t),c=sc.fromObject(n);return Tl(e,s,new Ya(Va(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=Ca(n);o=dl(e.serverSyncTree_,s,t,r)}else if(i){const t=Ae(n,(e=>Ca(e)));o=function(e,t,n){const i=sc.fromObject(n);return ml(e,new Ya({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=Ca(n);o=hl(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=ph(e,s)),Xl(e.eventQueue_,a,o)}function oh(e,t){ah(e,"connected",t),!1===t&&function(e){hh(e,"onDisconnectEvents");const t=rh(e),n=Ua();ja(e.onDisconnect_,Ao(),((i,r)=>{const s=Ol(i,r,e.serverSyncTree_,t);qa(n,i,s)}));let i=[];ja(n,Ao(),((t,n)=>{i=i.concat(hl(e.serverSyncTree_,t,n));const r=vh(e,t);ph(e,r)})),e.onDisconnect_=Ua(),Xl(e.eventQueue_,Ao(),i)}(e)}function ah(e,t,n){const i=new Do("/.info/"+t),r=Ca(n);e.infoData_.updateSnapshot(i,r);const s=hl(e.infoSyncTree_,i,r);Xl(e.eventQueue_,i,s)}function ch(e){return e.nextWriteId_++}function lh(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function hh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Gs(n,...t)}function uh(e,t,n){return fl(e.serverSyncTree_,t,n)||ba.EMPTY_NODE}function dh(e,t=e.transactionQueueTree_){if(t||gh(e,t),Ll(t)){const n=_h(e,t);Q(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=uh(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Q(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Ho(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{hh(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(ll(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();gh(e,Ml(e.transactionQueueTree_,t)),dh(e,e.transactionQueueTree_),Xl(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)lo(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Xs("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}ph(e,t)}}),o)}(e,Wl(t),n)}else Ul(t)&&ql(t,(t=>{dh(e,t)}))}function ph(e,t){const n=fh(e,t),i=Wl(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=Ho(n,c.path);let h,u=!1;if(Q(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)u=!0,h=c.abortReason,r=r.concat(ll(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)u=!0,h="maxretry",r=r.concat(ll(e.serverSyncTree_,c.currentWriteId,!0));else{const n=uh(e,c.path,s);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Kl("transaction failed: Data returned ",i,c.path);let t=Ca(i);"object"==typeof i&&null!=i&&Re(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=rh(e),l=Dl(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=ch(e),s.splice(s.indexOf(o),1),r=r.concat(cl(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(ll(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(ll(e.serverSyncTree_,c.currentWriteId,!0))}Xl(e.eventQueue_,n,r),r=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;gh(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)lo(i[e]);dh(e,e.transactionQueueTree_)}(e,_h(e,n),i),i}function fh(e,t){let n,i=e.transactionQueueTree_;for(n=xo(t);null!==n&&void 0===Ll(i);)i=Ml(i,n),n=xo(t=Lo(t));return i}function _h(e,t){const n=[];return mh(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function mh(e,t,n){const i=Ll(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);ql(t,(t=>{mh(e,t,n)}))}function gh(e,t){const n=Ll(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Fl(t,n.length>0?n:void 0)}ql(t,(t=>{gh(e,t)}))}function vh(e,t){const n=Wl(fh(e,t)),i=Ml(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{yh(e,t)})),yh(e,i),jl(i,(t=>{yh(e,t)})),n}function yh(e,t){const n=Ll(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Q(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Q(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(ll(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Fl(t,void 0):n.length=s+1,Xl(e.eventQueue_,Wl(t),r);for(let e=0;e<i.length;e++)lo(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=function(e,t){const n=bh(e),i=n.namespace;"firebase.com"===n.domain&&Qs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Qs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Xs("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new mo(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Do(n.pathString)}},bh=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Xs(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ih{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class Ch{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Q(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kh{get key(){return Wo(this._path)?null:Fo(this._path)}get ref(){return new Eh(this._repo,this._path)}get _queryIdentifier(){const e=Ma(this._queryParams),t=io(e);return"{}"===t?"default":t}get _queryObject(){return Ma(this._queryParams)}isEqual(e){if(!((e=Ke(e))instanceof kh))return!1;const t=this._repo===e._repo,n=zo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Eh extends kh{get parent(){const e=qo(this._path);return null===e?null:new Eh(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Aa,!1)}}class Sh{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Do(e),n=Ph(this.ref,e);return new Sh(this._node.getChild(t),n,pa)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Sh(n,Ph(this.ref,t),pa))))}hasChild(e){const t=new Do(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function Nh(e,t){return(e=Ke(e))._checkNotDeleted("ref"),void 0!==t?Ph(e._root,t):e._root}function Ph(e,t){var n,i,r,s;return null===xo((e=Ke(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Gl(n,i,r,s)):Gl("child","path",t,!1),new Eh(e._repo,jo(e._path,t))}function Rh(e){e=Ke(e);const t=new Th((()=>{})),n=new Oh(t);return function(e,t,n){const i=_l(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=Ca(i).withIndex(t._queryParams.getIndex());let s;if(pl(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=hl(e.serverSyncTree_,t._path,r);else{const n=wl(e.serverSyncTree_,t);s=dl(e.serverSyncTree_,t._path,r,n)}return Xl(e.eventQueue_,t._path,s),ul(e.serverSyncTree_,t,n,null,!0),r}),(n=>(hh(e,"get for query "+Ee(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Sh(t,new Eh(e._repo,e._path),e._queryParams.getIndex())))}class Oh{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ih("value",this,new Sh(e.snapshotNode,new Eh(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ch(this,e,t):null}matches(e){return e instanceof Oh&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){Q(!Kc,"__referenceConstructor has already been defined"),Kc=e}(Eh),function(e){Q(!Gc,"__referenceConstructor has already been defined"),Gc=e}(Eh);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dh={};let Ah=!1;function xh(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Qs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Gs("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=wh(s,r),l=c.repoInfo;void 0!==A&&A.env&&(a=A.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=wh(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const h=r&&o?new fo(fo.OWNER):new po(e.name,e.options,t);Yl("Invalid Firebase Database URL",c),Wo(c.path)||Qs("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let r=Dh[t.name];r||(r={},Dh[t.name]=r);let s=r[e.toURLString()];s&&Qs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new th(e,Ah,n,i),r[e.toURLString()]=s,s}(l,e,h,new uo(e.name,n));return new Mh(u,e)}class Mh{get _repo(){return this._instanceStarted||(nh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Eh(this._repo,Ao())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Dh[t];n&&n[e.key]===e||Qs(`Database ${t}(${e.repoInfo_}) has already been deleted.`),lh(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Qs("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function Lh(e=At(),t){const n=Pt(e,"database").getImmediate({identifier:t}),i=ve("database");return i&&function(e,t,n,i={}){(e=Ke(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Qs("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Qs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new fo(fo.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:be(i.mockUserToken,e.app.options.projectId);s=new fo(t)}!function(e,t,n,i){e.repoInfo_=new mo(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...i),n}Yo.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Yo.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Ms="9.15.0",Nt(new Ge("database",((e,{instanceIdentifier:t})=>xh(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),xt("@firebase/database","0.14.0",e),xt("@firebase/database","0.14.0","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const Fh=Dt({apiKey:"AIzaSyDFcAreCWID-9C9oPsYvHsHfe-CGSdW08U",authDomain:"cocktails-team-project-86758.firebaseapp.com",projectId:"cocktails-team-project-86758",storageBucket:"cocktails-team-project-86758.appspot.com",messagingSenderId:"24636582189",appId:"1:24636582189:web:30f6356787dd0fd3b2cba4",measurementId:"G-0MXLZKTJYN"}),Uh=function(e=At()){const t=Pt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Pt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(xe(n.getOptions(),null!=t?t:{}))return e;ni(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Rs,persistence:[Vr,Or,Ar]}),i=ye("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ds)return;const i=null==t?void 0:t.token;As!==i&&(As=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){Ke(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){Ke(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=ge("auth");return s&&ir(n,`http://${s}`),n}(),qh=(function(e=At()){const t=Pt(e=Ke(e),"analytics");t.isInitialized()?t.getImmediate():function(e,t={}){const n=Pt(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(xe(t,n.getOptions()))return e;throw Nn.create("already-initialized")}n.initialize({options:t})}(e)}(Fh),new vr),jh=(Lh(),document.querySelector(".btn-login"));jh.addEventListener("click",(function(e){"logIn"===e.target.textContent?async function(){await is(Uh,qh).then((e=>{vr.credentialFromResult(e).accessToken,e.user})).catch((e=>{e.code,e.message,e.customData.email,vr.credentialFromError(e)}))}():async function(){await Nr(Uh).then((()=>{})).catch((e=>{}))}()})),function(e,t,n,i){Ke(e).onAuthStateChanged(t,n,i)}(Uh,(e=>{!function(e){jh.textContent=e?"logOut":"logIn"}(e),async function(){if(Uh.currentUser){const e=Uh.currentUser.uid,t=Nh(Lh());return await Rh(Ph(t,`favourite/${e}/cocktails`)).then((e=>{if(e.exists()){const t=e.val();Object.keys(t)}})).catch((e=>{console.error(e)}))}throw new Error("Please, login")}()}));
//# sourceMappingURL=index.799fd97f.js.map
