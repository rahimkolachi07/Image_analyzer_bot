import{S as g,e as m,s as p,f as o,g as l,h as v,j as c,n as h,k as d,aD as u}from"./index-c99b2410.js";function w(s){let t,e,a;return{c(){t=o("svg"),e=o("path"),a=o("path"),l(e,"fill","currentColor"),l(e,"d","M12 15H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5V5a1 1 0 0 0-1-1H3V2h6a3 3 0 0 1 3 3zM5 9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5V9zm15 14v2a1 1 0 0 0 1 1h5v-4h-5a1 1 0 0 0-1 1z"),l(a,"fill","currentColor"),l(a,"d","M2 30h28V2Zm26-2h-7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5v-2a1 1 0 0 0-1-1h-6v-2h6a3 3 0 0 1 3 3Z"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),l(t,"aria-hidden","true"),l(t,"role","img"),l(t,"class","iconify iconify--carbon"),l(t,"width","100%"),l(t,"height","100%"),l(t,"preserveAspectRatio","xMidYMid meet"),l(t,"viewBox","0 0 32 32")},m(n,i){v(n,t,i),c(t,e),c(t,a)},p:h,i:h,o:h,d(n){n&&d(t)}}}class x extends g{constructor(t){super(),m(this,t,null,w,p,{})}}function f(s,t,e){if(!e){var a=document.createElement("canvas");e=a.getContext("2d")}e.fillStyle=s,e.fillRect(0,0,1,1);const[n,i,r]=e.getImageData(0,0,1,1).data;return e.clearRect(0,0,1,1),`rgba(${n}, ${i}, ${r}, ${255/t})`}function V(s,t,e,a){for(const n in s){const i=s[n].trim();i in u?t[n]=u[i]:t[n]={primary:e?f(s[n],1,a):s[n],secondary:e?f(s[n],.5,a):s[n]}}}function C(s,t){let e=[],a=null,n=null;for(const[i,r]of s)t==="empty"&&r===null||t==="equal"&&n===r?a=a?a+i:i:(a!==null&&e.push([a,n]),a=i,n=r);return a!==null&&e.push([a,n]),e}export{x as T,V as c,C as m};
//# sourceMappingURL=utils-1cf441be.js.map
