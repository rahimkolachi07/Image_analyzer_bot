import{S as V,e as W,s as Z,F as v,o as C,Q as U,G as I,h as B,r as F,u as d,v as H,w as g,k as j,H as S,a0 as X,a1 as Y,C as y,E as P,m as z,g as k,M as G,N as L,j as M,p as $,ag as b,Z as x,ae as p,V as ee,W as te}from"./index-7674dbb6.js";import{u as le}from"./utils-c3e3db58.js";import{B as se}from"./Button-770df9ba.js";import{B as ne}from"./BlockLabel-520e742a.js";import{I as ae}from"./IconButton-a4282a0e.js";import{E as ie}from"./Empty-89f2f53e.js";import{S as oe}from"./ShareButton-c5d88eaa.js";import{D as re}from"./Download-036e6033.js";import{I as A}from"./Image-b5c3e889.js";import{g as ue}from"./utils-90f3612b.js";function _e(n){let e,l,t,s,i,c,o,_,w,a=n[3]&&Q(n),u=n[5]&&T(n);return{c(){e=z("div"),a&&a.c(),l=C(),u&&u.c(),t=C(),s=z("button"),i=z("img"),k(e,"class","icon-buttons svelte-1btp92j"),G(i.src,c=n[0])||k(i,"src",c),k(i,"alt",""),k(i,"loading","lazy"),k(i,"class","svelte-1btp92j"),L(i,"selectable",n[4])},m(h,m){B(h,e,m),a&&a.m(e,null),M(e,l),u&&u.m(e,null),B(h,t,m),B(h,s,m),M(s,i),o=!0,_||(w=$(s,"click",n[7]),_=!0)},p(h,m){h[3]?a?(a.p(h,m),m&8&&g(a,1)):(a=Q(h),a.c(),g(a,1),a.m(e,l)):a&&(F(),d(a,1,1,()=>{a=null}),H()),h[5]?u?(u.p(h,m),m&32&&g(u,1)):(u=T(h),u.c(),g(u,1),u.m(e,null)):u&&(F(),d(u,1,1,()=>{u=null}),H()),(!o||m&1&&!G(i.src,c=h[0]))&&k(i,"src",c),(!o||m&16)&&L(i,"selectable",h[4])},i(h){o||(g(a),g(u),o=!0)},o(h){d(a),d(u),o=!1},d(h){h&&(j(e),j(t),j(s)),a&&a.d(),u&&u.d(),_=!1,w()}}}function fe(n){let e,l;return e=new ie({props:{unpadded_box:!0,size:"large",$$slots:{default:[ce]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment)},m(t,s){I(e,t,s),l=!0},p(t,s){const i={};s&4096&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function Q(n){let e,l,t;return l=new ae({props:{Icon:re,label:n[6]("common.download")}}),{c(){e=z("a"),v(l.$$.fragment),k(e,"href",n[0]),k(e,"target",window.__is_colab__?"_blank":null),k(e,"download","image")},m(s,i){B(s,e,i),I(l,e,null),t=!0},p(s,i){const c={};i&64&&(c.label=s[6]("common.download")),l.$set(c),(!t||i&1)&&k(e,"href",s[0])},i(s){t||(g(l.$$.fragment,s),t=!0)},o(s){d(l.$$.fragment,s),t=!1},d(s){s&&j(e),S(l)}}}function T(n){let e,l;return e=new oe({props:{formatter:n[8],value:n[0]}}),e.$on("share",n[9]),e.$on("error",n[10]),{c(){v(e.$$.fragment)},m(t,s){I(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.value=t[0]),e.$set(i)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function ce(n){let e,l;return e=new A({}),{c(){v(e.$$.fragment)},m(t,s){I(e,t,s),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function he(n){let e,l,t,s,i,c;e=new ne({props:{show_label:n[2],Icon:A,label:n[1]||n[6]("image.image")}});const o=[fe,_e],_=[];function w(a,u){return a[0]===null?0:1}return t=w(n),s=_[t]=o[t](n),{c(){v(e.$$.fragment),l=C(),s.c(),i=U()},m(a,u){I(e,a,u),B(a,l,u),_[t].m(a,u),B(a,i,u),c=!0},p(a,[u]){const h={};u&4&&(h.show_label=a[2]),u&66&&(h.label=a[1]||a[6]("image.image")),e.$set(h);let m=t;t=w(a),t===m?_[t].p(a,u):(F(),d(_[m],1,1,()=>{_[m]=null}),H(),s=_[t],s?s.p(a,u):(s=_[t]=o[t](a),s.c()),g(s,1),s.m(i.parentNode,i))},i(a){c||(g(e.$$.fragment,a),g(s),c=!0)},o(a){d(e.$$.fragment,a),d(s),c=!1},d(a){a&&(j(l),j(i)),S(e,a),_[t].d(a)}}}function me(n,e,l){let t;X(n,Y,f=>l(6,t=f));let{value:s}=e,{label:i=void 0}=e,{show_label:c}=e,{show_download_button:o=!0}=e,{selectable:_=!1}=e,{show_share_button:w=!1}=e;const a=y(),u=f=>{let E=ue(f);E&&a("select",{index:E,value:null})},h=async f=>f?`<img src="${await le(f,"base64")}" />`:"";function m(f){P.call(this,n,f)}function q(f){P.call(this,n,f)}return n.$$set=f=>{"value"in f&&l(0,s=f.value),"label"in f&&l(1,i=f.label),"show_label"in f&&l(2,c=f.show_label),"show_download_button"in f&&l(3,o=f.show_download_button),"selectable"in f&&l(4,_=f.selectable),"show_share_button"in f&&l(5,w=f.show_share_button)},n.$$.update=()=>{n.$$.dirty&1&&s&&a("change",s)},[s,i,c,o,_,w,t,u,h,m,q]}class be extends V{constructor(e){super(),W(this,e,me,he,Z,{value:0,label:1,show_label:2,show_download_button:3,selectable:4,show_share_button:5})}}function ge(n){let e,l,t,s;const i=[n[13]];let c={};for(let o=0;o<i.length;o+=1)c=x(c,i[o]);return e=new p({props:c}),t=new be({props:{value:n[0],label:n[4],show_label:n[5],show_download_button:n[6],selectable:n[9],show_share_button:n[14]}}),t.$on("select",n[17]),t.$on("share",n[18]),t.$on("error",n[19]),{c(){v(e.$$.fragment),l=C(),v(t.$$.fragment)},m(o,_){I(e,o,_),B(o,l,_),I(t,o,_),s=!0},p(o,_){const w=_&8192?ee(i,[te(o[13])]):{};e.$set(w);const a={};_&1&&(a.value=o[0]),_&16&&(a.label=o[4]),_&32&&(a.show_label=o[5]),_&64&&(a.show_download_button=o[6]),_&512&&(a.selectable=o[9]),_&16384&&(a.show_share_button=o[14]),t.$set(a)},i(o){s||(g(e.$$.fragment,o),g(t.$$.fragment,o),s=!0)},o(o){d(e.$$.fragment,o),d(t.$$.fragment,o),s=!1},d(o){o&&j(l),S(e,o),S(t,o)}}}function de(n){let e,l;return e=new se({props:{visible:n[3],variant:"solid",border_mode:n[16]?"focus":"base",padding:!1,elem_id:n[1],elem_classes:n[2],height:n[7]||void 0,width:n[8],allow_overflow:!1,container:n[10],scale:n[11],min_width:n[12],$$slots:{default:[ge]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment)},m(t,s){I(e,t,s),l=!0},p(t,[s]){const i={};s&8&&(i.visible=t[3]),s&2&&(i.elem_id=t[1]),s&4&&(i.elem_classes=t[2]),s&128&&(i.height=t[7]||void 0),s&256&&(i.width=t[8]),s&1024&&(i.container=t[10]),s&2048&&(i.scale=t[11]),s&4096&&(i.min_width=t[12]),s&1106545&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function we(n,e,l){let{elem_id:t=""}=e,{elem_classes:s=[]}=e,{visible:i=!0}=e,{value:c=null}=e,{label:o}=e,{show_label:_}=e,{show_download_button:w}=e,{height:a}=e,{width:u}=e,{selectable:h=!1}=e,{container:m=!0}=e,{scale:q=null}=e,{min_width:f=void 0}=e,{loading_status:E}=e,{show_share_button:N=!1}=e,{gradio:D}=e,J;const K=({detail:r})=>D.dispatch("select",r),O=({detail:r})=>D.dispatch("share",r),R=({detail:r})=>D.dispatch("error",r);return n.$$set=r=>{"elem_id"in r&&l(1,t=r.elem_id),"elem_classes"in r&&l(2,s=r.elem_classes),"visible"in r&&l(3,i=r.visible),"value"in r&&l(0,c=r.value),"label"in r&&l(4,o=r.label),"show_label"in r&&l(5,_=r.show_label),"show_download_button"in r&&l(6,w=r.show_download_button),"height"in r&&l(7,a=r.height),"width"in r&&l(8,u=r.width),"selectable"in r&&l(9,h=r.selectable),"container"in r&&l(10,m=r.container),"scale"in r&&l(11,q=r.scale),"min_width"in r&&l(12,f=r.min_width),"loading_status"in r&&l(13,E=r.loading_status),"show_share_button"in r&&l(14,N=r.show_share_button),"gradio"in r&&l(15,D=r.gradio)},n.$$.update=()=>{n.$$.dirty&1&&l(0,c=c||null),n.$$.dirty&32769&&D.dispatch("change")},[c,t,s,i,o,_,w,a,u,h,m,q,f,E,N,D,J,K,O,R]}class ke extends V{constructor(e){super(),W(this,e,we,de,Z,{elem_id:1,elem_classes:2,visible:3,value:0,label:4,show_label:5,show_download_button:6,height:7,width:8,selectable:9,container:10,scale:11,min_width:12,loading_status:13,show_share_button:14,gradio:15})}get elem_id(){return this.$$.ctx[1]}set elem_id(e){this.$$set({elem_id:e}),b()}get elem_classes(){return this.$$.ctx[2]}set elem_classes(e){this.$$set({elem_classes:e}),b()}get visible(){return this.$$.ctx[3]}set visible(e){this.$$set({visible:e}),b()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),b()}get label(){return this.$$.ctx[4]}set label(e){this.$$set({label:e}),b()}get show_label(){return this.$$.ctx[5]}set show_label(e){this.$$set({show_label:e}),b()}get show_download_button(){return this.$$.ctx[6]}set show_download_button(e){this.$$set({show_download_button:e}),b()}get height(){return this.$$.ctx[7]}set height(e){this.$$set({height:e}),b()}get width(){return this.$$.ctx[8]}set width(e){this.$$set({width:e}),b()}get selectable(){return this.$$.ctx[9]}set selectable(e){this.$$set({selectable:e}),b()}get container(){return this.$$.ctx[10]}set container(e){this.$$set({container:e}),b()}get scale(){return this.$$.ctx[11]}set scale(e){this.$$set({scale:e}),b()}get min_width(){return this.$$.ctx[12]}set min_width(e){this.$$set({min_width:e}),b()}get loading_status(){return this.$$.ctx[13]}set loading_status(e){this.$$set({loading_status:e}),b()}get show_share_button(){return this.$$.ctx[14]}set show_share_button(e){this.$$set({show_share_button:e}),b()}get gradio(){return this.$$.ctx[15]}set gradio(e){this.$$set({gradio:e}),b()}}const Fe=ke;export{Fe as default};
//# sourceMappingURL=index-105fcce0.js.map
