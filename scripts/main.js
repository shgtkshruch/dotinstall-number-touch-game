"use strict";!function(){var e=3,t=0,n=void 0,o=void 0,s=document.getElementById("js-score-board"),i=document.getElementById("js-score-text"),d=document.getElementById("js-score-btn"),r=function(){for(var n=[],i=function(n){var s=document.createElement("div");return s.classList.add("score__panel","score__panel--hidden"),s.textContent=n,s.addEventListener("click",function(n){this.textContent-0===t&&(this.classList.add("score__panel--inactive"),t++),t===e*e&&clearTimeout(o)},!1),s};s.firstChild;)s.removeChild(s.firstChild);for(var d=0;d<e*e;d++)n.push(i(d));for(;n.length;){var r=n.splice(Math.floor(Math.random()*n.length),1);s.appendChild(r[0]),n.length%e===0&&s.appendChild(document.createElement("br"))}};r(),d.addEventListener("click",function(e){null!==o&&clearTimeout(o),r();for(var s=document.querySelectorAll(".score__panel"),i=0;i<s.length;i++)s[i].classList.remove("score__panel--hidden");t=0,n=Date.now(),c()},!1),d.addEventListener("mousedown",function(e){this.classList.add("score__btn--pushed")},!1),d.addEventListener("mouseup",function(e){this.classList.remove("score__btn--pushed")},!1);var c=function a(){i.textContent=((Date.now()-n)/1e3).toFixed(2),o=setTimeout(function(){a()},10)}}();