import{S as z,e as D,s as F,F as h,G as k,w as m,u as b,H as w,C as G,Z as H,ae as I,o as E,Q as L,h as B,V as N,W as Q,r as V,v as W,k as T}from"./index-7674dbb6.js";import{B as Z}from"./Button-770df9ba.js";import{B as A}from"./BlockLabel-520e742a.js";import{E as J}from"./Empty-89f2f53e.js";import{C as j,a as K}from"./Chart-51698b0c.js";import"./color-253fe719.js";import"./csv-b0b7514a.js";import"./dsv-576afacd.js";import"./linear-bcbcf466.js";function M(i){let t,l;return t=new J({props:{unpadded_box:!0,size:"large",$$slots:{default:[P]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},m(e,n){k(t,e,n),l=!0},p(e,n){const a={};n&8192&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function O(i){let t,l;return t=new K({props:{value:i[10],colors:i[5]}}),{c(){h(t.$$.fragment)},m(e,n){k(t,e,n),l=!0},p(e,n){const a={};n&1024&&(a.value=e[10]),n&32&&(a.colors=e[5]),t.$set(a)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function P(i){let t,l;return t=new j({}),{c(){h(t.$$.fragment)},m(e,n){k(t,e,n),l=!0},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function R(i){let t,l,e,n,a,c,_,u;t=new A({props:{show_label:i[4],Icon:j,label:i[3]||"TimeSeries"}});const g=[i[9]];let d={};for(let s=0;s<g.length;s+=1)d=H(d,g[s]);e=new I({props:d});const v=[O,M],f=[];function S(s,o){return s[10]?0:1}return a=S(i),c=f[a]=v[a](i),{c(){h(t.$$.fragment),l=E(),h(e.$$.fragment),n=E(),c.c(),_=L()},m(s,o){k(t,s,o),B(s,l,o),k(e,s,o),B(s,n,o),f[a].m(s,o),B(s,_,o),u=!0},p(s,o){const r={};o&16&&(r.show_label=s[4]),o&8&&(r.label=s[3]||"TimeSeries"),t.$set(r);const q=o&512?N(g,[Q(s[9])]):{};e.$set(q);let C=a;a=S(s),a===C?f[a].p(s,o):(V(),b(f[C],1,1,()=>{f[C]=null}),W(),c=f[a],c?c.p(s,o):(c=f[a]=v[a](s),c.c()),m(c,1),c.m(_.parentNode,_))},i(s){u||(m(t.$$.fragment,s),m(e.$$.fragment,s),m(c),u=!0)},o(s){b(t.$$.fragment,s),b(e.$$.fragment,s),b(c),u=!1},d(s){s&&(T(l),T(n),T(_)),w(t,s),w(e,s),f[a].d(s)}}}function U(i){let t,l;return t=new Z({props:{visible:i[2],variant:"solid",padding:!1,elem_id:i[0],elem_classes:i[1],container:i[6],scale:i[7],min_width:i[8],$$slots:{default:[R]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},m(e,n){k(t,e,n),l=!0},p(e,[n]){const a={};n&4&&(a.visible=e[2]),n&1&&(a.elem_id=e[0]),n&2&&(a.elem_classes=e[1]),n&64&&(a.container=e[6]),n&128&&(a.scale=e[7]),n&256&&(a.min_width=e[8]),n&9784&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){w(t,e)}}}function X(i){return i.data.map(t=>t.reduce((l,e,n)=>({...l,[i.headers[n]]:e}),{}))}function Y(i,t,l){let e;const n=G();let{elem_id:a=""}=t,{elem_classes:c=[]}=t,{visible:_=!0}=t,{value:u}=t,{label:g}=t,{show_label:d}=t,{colors:v}=t,{container:f=!0}=t,{scale:S=null}=t,{min_width:s=void 0}=t,{loading_status:o}=t;return i.$$set=r=>{"elem_id"in r&&l(0,a=r.elem_id),"elem_classes"in r&&l(1,c=r.elem_classes),"visible"in r&&l(2,_=r.visible),"value"in r&&l(11,u=r.value),"label"in r&&l(3,g=r.label),"show_label"in r&&l(4,d=r.show_label),"colors"in r&&l(5,v=r.colors),"container"in r&&l(6,f=r.container),"scale"in r&&l(7,S=r.scale),"min_width"in r&&l(8,s=r.min_width),"loading_status"in r&&l(9,o=r.loading_status)},i.$$.update=()=>{i.$$.dirty&2048&&l(10,e=u&&X(u)),i.$$.dirty&2048&&n("change")},[a,c,_,g,d,v,f,S,s,o,e,u]}class y extends z{constructor(t){super(),D(this,t,Y,U,F,{elem_id:0,elem_classes:1,visible:2,value:11,label:3,show_label:4,colors:5,container:6,scale:7,min_width:8,loading_status:9})}}const ie=y;export{ie as default};
//# sourceMappingURL=index-49d17dd5.js.map
