parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"v66i":[function(require,module,exports) {
function n(n){return n instanceof Element}function e(n){return n instanceof MouseEvent}function t(n){do{if(n.clientHeight<n.scrollHeight||n.clientWidth<n.scrollWidth)return n}while(n=n.parentNode)}!function(){var e=document;function t(n){return n.scrollTop}function o(n){return n.offsetTop}var c,i,r,l,d,a,u,s,f,m,h,g,E=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(n){window.setTimeout(n,1e3/60)};function k(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500;n(e)&&(e=e.offsetTop);var c=document.documentElement.offsetTop||document.body.parentNode.offsetTop||document.body.offsetTop,i=e-c,r=0;console.log("start:",c),console.log("to:",e),console.log("change:",i);!function n(){r+=20;var e,l=Math.easeInOutQuad(r,c,i,o);e=l,document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e,r<o?E(n):t&&"function"==typeof t&&t()}()}c=e.getElementById("anchor1Link"),i=e.getElementById("anchor2Link"),r=e.getElementById("anchor3Link"),l=e.getElementById("anchor4Link"),d=e.getElementById("anchor1Link2"),a=e.getElementById("anchor2Link2"),u=e.getElementById("anchor3Link2"),s=e.getElementById("anchor4Link2"),f=e.getElementById("anchor1"),m=e.getElementById("anchor2"),h=e.getElementById("anchor3"),g=e.getElementById("anchor4"),c.addEventListener("click",function(n){k(f,n)},!1),d.addEventListener("click",function(n){k(f,n)},!1),i.addEventListener("click",function(n){k(m,n)},!1),a.addEventListener("click",function(n){k(m,n)},!1),r.addEventListener("click",function(n){k(h,n)},!1),u.addEventListener("click",function(n){k(h,n)},!1),l.addEventListener("click",function(n){k(g.offsetTop,n)},!1),s.addEventListener("click",function(n){k(g.offsetTop,n)},!1),console.log(m),console.log("anchor1: "+t(f)+" / "+o(f)),console.log("anchor2: "+t(m)+" / "+o(m)),console.log("anchor3: "+t(h)+" / "+o(h)),console.log("anchor4: "+t(g)+" / "+o(g)),console.log("App loaded. Have fun!")}(),Math.easeInOutQuad=function(n,e,t,o){return(n/=o/2)<1?t/2*n*n+e:-t/2*(--n*(n-2)-1)+e},Math.easeInCubic=function(n,e,t,o){return e+t*((n/=o)*n*n)},Math.inOutQuintic=function(n,e,t,o){var c=(n/=o)*n,i=c*n;return e+t*(6*i*c+-15*c*c+10*i)};
},{}]},{},["v66i"], null)
//# sourceMappingURL=/the-donut-king-team-project/anchor.48b8b645.js.map