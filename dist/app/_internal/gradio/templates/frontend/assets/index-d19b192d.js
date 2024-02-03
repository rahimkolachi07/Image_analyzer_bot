import{S as q,e as G,s as H,F as b,G as w,w as h,u as g,H as k,Z as N,ae as Q,o as j,Q as R,h as C,V,W,r as Z,v as z,k as E,m as D,g as J,j as K,n as O}from"./index-c99b2410.js";import{U as P}from"./Upload-ac8c778e.js";import{M as X}from"./ModifyUpload-643080ff.js";import{B as Y}from"./Button-9c502b18.js";import{B as x}from"./BlockLabel-def07c98.js";import{C as $,a as ee}from"./Chart-1c1ef39e.js";import{U as te}from"./UploadText-96773547.js";import"./IconButton-0f3d06d2.js";import"./Undo-61b53ec5.js";import"./color-289140bb.js";import"./csv-b0b7514a.js";import"./dsv-576afacd.js";import"./linear-bcbcf466.js";function le(r){let e,t;return e=new P({props:{filetype:"text/csv",include_file_metadata:!1,$$slots:{default:[ae]},$$scope:{ctx:r}}}),e.$on("load",r[18]),{c(){b(e.$$.fragment)},m(l,s){w(e,l,s),t=!0},p(l,s){const a={};s&2097152&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),t=!1},d(l){k(e,l)}}}function ne(r){let e,t,l,s,a;return t=new X({}),t.$on("clear",r[15]),s=new ee({props:{value:r[13],y:r[4],x:r[5],colors:r[8]}}),s.$on("process",r[17]),{c(){e=D("div"),b(t.$$.fragment),l=j(),b(s.$$.fragment),J(e,"class","chart svelte-etmurc")},m(n,u){C(n,e,u),w(t,e,null),K(e,l),w(s,e,null),a=!0},p(n,u){const c={};u&8192&&(c.value=n[13]),u&16&&(c.y=n[4]),u&32&&(c.x=n[5]),u&256&&(c.colors=n[8]),s.$set(c)},i(n){a||(h(t.$$.fragment,n),h(s.$$.fragment,n),a=!0)},o(n){g(t.$$.fragment,n),g(s.$$.fragment,n),a=!1},d(n){n&&E(e),k(t),k(s)}}}function ae(r){let e,t;return e=new te({props:{type:"csv"}}),{c(){b(e.$$.fragment)},m(l,s){w(e,l,s),t=!0},p:O,i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),t=!1},d(l){k(e,l)}}}function se(r){let e,t,l,s,a,n,u,c;e=new x({props:{show_label:r[7],Icon:$,label:r[6]||"TimeSeries"}});const y=[r[12]];let v={};for(let o=0;o<y.length;o+=1)v=N(v,y[o]);l=new Q({props:v});const p=[ne,le],m=[];function T(o,f){return o[13]?0:o[0]===void 0||o[0]===null?1:-1}return~(a=T(r))&&(n=m[a]=p[a](r)),{c(){b(e.$$.fragment),t=j(),b(l.$$.fragment),s=j(),n&&n.c(),u=R()},m(o,f){w(e,o,f),C(o,t,f),w(l,o,f),C(o,s,f),~a&&m[a].m(o,f),C(o,u,f),c=!0},p(o,f){const d={};f&128&&(d.show_label=o[7]),f&64&&(d.label=o[6]||"TimeSeries"),e.$set(d);const _=f&4096?V(y,[W(o[12])]):{};l.$set(_);let B=a;a=T(o),a===B?~a&&m[a].p(o,f):(n&&(Z(),g(m[B],1,1,()=>{m[B]=null}),z()),~a?(n=m[a],n?n.p(o,f):(n=m[a]=p[a](o),n.c()),h(n,1),n.m(u.parentNode,u)):n=null)},i(o){c||(h(e.$$.fragment,o),h(l.$$.fragment,o),h(n),c=!0)},o(o){g(e.$$.fragment,o),g(l.$$.fragment,o),g(n),c=!1},d(o){o&&(E(t),E(s),E(u)),k(e,o),k(l,o),~a&&m[a].d(o)}}}function ie(r){let e,t;return e=new Y({props:{visible:r[3],variant:r[13]?"solid":"dashed",padding:!1,elem_id:r[1],elem_classes:r[2],container:r[9],scale:r[10],min_width:r[11],$$slots:{default:[se]},$$scope:{ctx:r}}}),{c(){b(e.$$.fragment)},m(l,s){w(e,l,s),t=!0},p(l,[s]){const a={};s&8&&(a.visible=l[3]),s&8192&&(a.variant=l[13]?"solid":"dashed"),s&2&&(a.elem_id=l[1]),s&4&&(a.elem_classes=l[2]),s&512&&(a.container=l[9]),s&1024&&(a.scale=l[10]),s&2048&&(a.min_width=l[11]),s&2109937&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),t=!1},d(l){k(e,l)}}}function re(r){const e=atob(r.split(",")[1]),t=r.split(",")[0].split(":")[1].split(";")[0],l=new ArrayBuffer(e.length),s=new Uint8Array(l);for(let a=0;a<e.length;a++)s[a]=e.charCodeAt(a);return new Blob([l],{type:t})}function oe(r,e){const t=[],l=[];t.push(r.name),e.forEach(({name:s})=>t.push(s));for(let s=0;s<r.values.length;s++){let a=[];a.push(r.values[s]),e.forEach(({values:n})=>a.push(n[s].y)),l.push(a)}return{headers:t,data:l}}function fe(r,e,t){let{elem_id:l=""}=e,{elem_classes:s=[]}=e,{visible:a=!0}=e,{value:n}=e,{y:u}=e,{x:c}=e,{label:y}=e,{show_label:v}=e,{colors:p}=e,{container:m=!0}=e,{scale:T=null}=e,{min_width:o=void 0}=e,{loading_status:f}=e,{gradio:d}=e,_;function B(i){const U=new FileReader;U.addEventListener("loadend",S=>{t(13,_=S.srcElement.result)}),U.readAsText(i)}function I(i){i.headers&&t(13,_=i.headers.join(",")),i.data.forEach(S=>{t(13,_=_+`
`),t(13,_=_+S.join(","))})}function A(i){return t(0,n={data:i}),i}function F({detail:i}){t(0,n=null),d.dispatch("change"),d.dispatch("clear")}const L=({detail:{x:i,y:U}})=>t(0,n=oe(i,U)),M=({detail:i})=>A(i);return r.$$set=i=>{"elem_id"in i&&t(1,l=i.elem_id),"elem_classes"in i&&t(2,s=i.elem_classes),"visible"in i&&t(3,a=i.visible),"value"in i&&t(0,n=i.value),"y"in i&&t(4,u=i.y),"x"in i&&t(5,c=i.x),"label"in i&&t(6,y=i.label),"show_label"in i&&t(7,v=i.show_label),"colors"in i&&t(8,p=i.colors),"container"in i&&t(9,m=i.container),"scale"in i&&t(10,T=i.scale),"min_width"in i&&t(11,o=i.min_width),"loading_status"in i&&t(12,f=i.loading_status),"gradio"in i&&t(16,d=i.gradio)},r.$$.update=()=>{r.$$.dirty&1&&(n&&n.data&&typeof n.data=="string"?n?B(re(n.data)):t(13,_=null):n&&n.data&&typeof n.data!="string"&&(n||t(13,_=null),I(n))),r.$$.dirty&8193&&t(13,_=n==null?null:_),r.$$.dirty&65537&&d.dispatch("change")},[n,l,s,a,u,c,y,v,p,m,T,o,f,_,A,F,d,L,M]}class ue extends q{constructor(e){super(),G(this,e,fe,ie,H,{elem_id:1,elem_classes:2,visible:3,value:0,y:4,x:5,label:6,show_label:7,colors:8,container:9,scale:10,min_width:11,loading_status:12,gradio:16})}}const Be=ue;export{Be as default};
//# sourceMappingURL=index-d19b192d.js.map
