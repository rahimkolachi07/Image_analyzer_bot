import{S as F,e as H,s as T,m as g,F as U,o as z,g as m,N as k,h as j,G as A,j as w,ap as v,p as c,aG as B,w as I,u as J,k as E,H as K,B as L,C as M,an as O,t as P,x as Q,a7 as R,E as N}from"./index-7674dbb6.js";import"./Button-770df9ba.js";import{B as V}from"./BlockTitle-2eb1c338.js";function W(l){let e;return{c(){e=P(l[4])},m(a,s){j(a,e,s)},p(a,s){s&16&&Q(e,a[4])},d(a){a&&E(e)}}}function X(l){let e,a,s,t,f,o,b;return a=new V({props:{show_label:l[6],info:l[5],$$slots:{default:[W]},$$scope:{ctx:l}}}),{c(){e=g("label"),U(a.$$.fragment),s=z(),t=g("input"),m(t,"aria-label",l[4]),m(t,"type","number"),m(t,"min",l[1]),m(t,"max",l[2]),m(t,"step",l[8]),t.disabled=l[3],m(t,"class","svelte-pjtc3"),m(e,"class","block svelte-pjtc3"),k(e,"container",l[7])},m(i,u){j(i,e,u),A(a,e,null),w(e,s),w(e,t),v(t,l[0]),f=!0,o||(b=[c(t,"input",l[13]),c(t,"keypress",l[9]),c(t,"blur",l[11]),c(t,"focus",l[12])],o=!0)},p(i,[u]){const _={};u&64&&(_.show_label=i[6]),u&32&&(_.info=i[5]),u&65552&&(_.$$scope={dirty:u,ctx:i}),a.$set(_),(!f||u&16)&&m(t,"aria-label",i[4]),(!f||u&2)&&m(t,"min",i[1]),(!f||u&4)&&m(t,"max",i[2]),(!f||u&256)&&m(t,"step",i[8]),(!f||u&8)&&(t.disabled=i[3]),u&1&&B(t.value)!==i[0]&&v(t,i[0]),(!f||u&128)&&k(e,"container",i[7])},i(i){f||(I(a.$$.fragment,i),f=!0)},o(i){J(a.$$.fragment,i),f=!1},d(i){i&&E(e),K(a),o=!1,L(b)}}}function Y(l,e,a){let{value:s=0}=e,{minimum:t=void 0}=e,{maximum:f=void 0}=e,{value_is_output:o=!1}=e,{disabled:b=!1}=e,{label:i}=e,{info:u=void 0}=e,{show_label:_=!0}=e,{container:h=!0}=e,{step:d=1}=e;const r=M();function C(){!isNaN(s)&&s!==null&&(r("change",s),o||r("input"))}O(()=>{a(10,o=!1)});async function D(n){await R(),n.key==="Enter"&&(n.preventDefault(),r("submit"))}function G(n){N.call(this,l,n)}function S(n){N.call(this,l,n)}function q(){s=B(this.value),a(0,s)}return l.$$set=n=>{"value"in n&&a(0,s=n.value),"minimum"in n&&a(1,t=n.minimum),"maximum"in n&&a(2,f=n.maximum),"value_is_output"in n&&a(10,o=n.value_is_output),"disabled"in n&&a(3,b=n.disabled),"label"in n&&a(4,i=n.label),"info"in n&&a(5,u=n.info),"show_label"in n&&a(6,_=n.show_label),"container"in n&&a(7,h=n.container),"step"in n&&a(8,d=n.step)},l.$$.update=()=>{l.$$.dirty&1&&C()},[s,t,f,b,i,u,_,h,d,D,o,G,S,q]}class x extends F{constructor(e){super(),H(this,e,Y,X,T,{value:0,minimum:1,maximum:2,value_is_output:10,disabled:3,label:4,info:5,show_label:6,container:7,step:8})}}export{x as N};
//# sourceMappingURL=Number-04def8a9.js.map
