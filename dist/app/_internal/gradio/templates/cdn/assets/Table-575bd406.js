import{S as xe,e as $e,s as el,o as X,m as B,g,N as P,h as S,p as ne,ai as st,r as _e,u as W,v as ce,w as j,k as N,B as Fe,C as Dl,ap as rl,af as El,E as Ye,R as se,t as Ae,x as Le,n as Ne,F as ge,G as be,H as me,Q as Pe,aq as it,a9 as Ze,y as je,K as Y,j as H,ar as Se,ab as Ge,ac as Qe,ad as Xe,D as Hl,I as ue,J as He,$ as Te,a7 as we,U as pe,X as ke,a0 as rt,a1 as at,f as ve}from"./index-7674dbb6.js";import{d as fe}from"./index-2f00b72c.js";import{c as ot}from"./utils-c3e3db58.js";import{U as ft}from"./Upload-59d47275.js";import{a as Tl}from"./Button-770df9ba.js";import{M as ut}from"./StaticMarkdown-0958b32f.js";import{d as _t}from"./dsv-576afacd.js";function al(n){let e,l,t;return{c(){e=B("input"),g(e,"tabindex","-1"),g(e,"class","svelte-q8uklq"),P(e,"header",n[5])},m(s,o){S(s,e,o),n[18](e),rl(e,n[10]),l||(t=[ne(e,"input",n[19]),ne(e,"blur",n[20]),El(n[12].call(null,e)),ne(e,"keydown",n[17])],l=!0)},p(s,o){o&1024&&e.value!==s[10]&&rl(e,s[10]),o&32&&P(e,"header",s[5])},d(s){s&&N(e),n[18](null),l=!1,Fe(t)}}}function ct(n){let e=(n[9]?n[0]:n[3]||n[0])+"",l;return{c(){l=Ae(e)},m(t,s){S(t,l,s)},p(t,s){s&521&&e!==(e=(t[9]?t[0]:t[3]||t[0])+"")&&Le(l,e)},i:Ne,o:Ne,d(t){t&&N(l)}}}function ht(n){let e,l;return e=new ut({props:{message:n[0].toLocaleString(),latex_delimiters:n[7],line_breaks:n[8],chatbot:!1}}),{c(){ge(e.$$.fragment)},m(t,s){be(e,t,s),l=!0},p(t,s){const o={};s&1&&(o.message=t[0].toLocaleString()),s&128&&(o.latex_delimiters=t[7]),s&256&&(o.line_breaks=t[8]),e.$set(o)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),l=!1},d(t){me(e,t)}}}function dt(n){let e,l;return{c(){e=new it(!1),l=Pe(),e.a=l},m(t,s){e.m(n[0],t,s),S(t,l,s)},p(t,s){s&1&&e.p(t[0])},i:Ne,o:Ne,d(t){t&&(N(l),e.d())}}}function gt(n){let e,l,t,s,o,f,a,r=n[2]&&al(n);const b=[dt,ht,ct],c=[];function _(h,M){return h[6]==="html"?0:h[6]==="markdown"?1:2}return t=_(n),s=c[t]=b[t](n),{c(){r&&r.c(),e=X(),l=B("span"),s.c(),g(l,"tabindex","-1"),g(l,"role","button"),g(l,"style",n[4]),g(l,"class","svelte-q8uklq"),P(l,"edit",n[2])},m(h,M){r&&r.m(h,M),S(h,e,M),S(h,l,M),c[t].m(l,null),o=!0,f||(a=[ne(l,"dblclick",n[15]),ne(l,"focus",st(n[16]))],f=!0)},p(h,[M]){h[2]?r?r.p(h,M):(r=al(h),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null);let k=t;t=_(h),t===k?c[t].p(h,M):(_e(),W(c[k],1,1,()=>{c[k]=null}),ce(),s=c[t],s?s.p(h,M):(s=c[t]=b[t](h),s.c()),j(s,1),s.m(l,null)),(!o||M&16)&&g(l,"style",h[4]),(!o||M&4)&&P(l,"edit",h[2])},i(h){o||(j(s),o=!0)},o(h){W(s),o=!1},d(h){h&&(N(e),N(l)),r&&r.d(h),c[t].d(),f=!1,Fe(a)}}}function bt(n,e,l){let t,{edit:s}=e,{value:o=""}=e,{display_value:f=null}=e,{styling:a=""}=e,{header:r=!1}=e,{datatype:b="str"}=e,{latex_delimiters:c}=e,{clear_on_focus:_=!1}=e,{select_on_focus:h=!1}=e,{line_breaks:M=!0}=e,{editable:k=!0}=e;const E=Dl();let{el:D}=e;function C(m){return _&&l(10,t=""),h&&m.select(),m.focus(),{}}function F(m){Ye.call(this,n,m)}function d(m){Ye.call(this,n,m)}function v(m){Ye.call(this,n,m)}function T(m){se[m?"unshift":"push"](()=>{D=m,l(1,D)})}function V(){t=this.value,l(10,t),l(0,o)}const p=({currentTarget:m})=>{l(0,o=m.value),E("blur")};return n.$$set=m=>{"edit"in m&&l(2,s=m.edit),"value"in m&&l(0,o=m.value),"display_value"in m&&l(3,f=m.display_value),"styling"in m&&l(4,a=m.styling),"header"in m&&l(5,r=m.header),"datatype"in m&&l(6,b=m.datatype),"latex_delimiters"in m&&l(7,c=m.latex_delimiters),"clear_on_focus"in m&&l(13,_=m.clear_on_focus),"select_on_focus"in m&&l(14,h=m.select_on_focus),"line_breaks"in m&&l(8,M=m.line_breaks),"editable"in m&&l(9,k=m.editable),"el"in m&&l(1,D=m.el)},n.$$.update=()=>{n.$$.dirty&1&&l(10,t=o)},[o,D,s,f,a,r,b,c,M,k,t,E,C,_,h,F,d,v,T,V,p]}class Ue extends xe{constructor(e){super(),$e(this,e,bt,gt,el,{edit:2,value:0,display_value:3,styling:4,header:5,datatype:6,latex_delimiters:7,clear_on_focus:13,select_on_focus:14,line_breaks:8,editable:9,el:1})}}const mt=n=>({}),ol=n=>({});function fl(n,e,l){const t=n.slice();return t[34]=e[l],t}const wt=n=>({item:n[0]&256,index:n[0]&256}),ul=n=>({item:n[34].data,index:n[34].index}),pt=n=>({}),_l=n=>({});function cl(n){let e=[],l=new Map,t,s,o=ue(n[8]);const f=a=>a[34].data[0].id;for(let a=0;a<o.length;a+=1){let r=fl(n,o,a),b=f(r);l.set(b,e[a]=hl(b,r))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=Pe()},m(a,r){for(let b=0;b<e.length;b+=1)e[b]&&e[b].m(a,r);S(a,t,r),s=!0},p(a,r){r[0]&2097408&&(o=ue(a[8]),_e(),e=He(e,r,f,1,a,o,l,t.parentNode,Te,hl,t,fl),ce())},i(a){if(!s){for(let r=0;r<o.length;r+=1)j(e[r]);s=!0}},o(a){for(let r=0;r<e.length;r+=1)W(e[r]);s=!1},d(a){a&&N(t);for(let r=0;r<e.length;r+=1)e[r].d(a)}}}function kt(n){let e;return{c(){e=Ae(`Missing Table Row
					`)},m(l,t){S(l,e,t)},d(l){l&&N(e)}}}function hl(n,e){let l,t;const s=e[22].tbody,o=Ze(s,e,e[21],ul),f=o||kt();return{key:n,first:null,c(){l=Pe(),f&&f.c(),this.first=l},m(a,r){S(a,l,r),f&&f.m(a,r),t=!0},p(a,r){e=a,o&&o.p&&(!t||r[0]&2097408)&&Ge(o,s,e,e[21],t?Xe(s,e[21],r,wt):Qe(e[21]),ul)},i(a){t||(j(f,a),t=!0)},o(a){W(f,a),t=!1},d(a){a&&N(l),f&&f.d(a)}}}function vt(n){let e,l,t,s,o,f,a,r,b,c,_,h,M;const k=n[22].thead,E=Ze(k,n,n[21],_l);let D=n[8].length&&n[8][0].data.length&&cl(n);const C=n[22].tfoot,F=Ze(C,n,n[21],ol);return{c(){e=B("svelte-virtual-table-viewport"),l=B("table"),t=B("thead"),E&&E.c(),o=X(),f=B("tbody"),D&&D.c(),a=X(),r=B("tfoot"),F&&F.c(),g(t,"class","thead svelte-1jok1de"),je(()=>n[23].call(t)),g(f,"class","tbody svelte-1jok1de"),g(r,"class","tfoot svelte-1jok1de"),je(()=>n[25].call(r)),g(l,"class","table svelte-1jok1de"),Y(l,"height",yt),Y(l,"--bw-svt-p-top",n[5]+"px"),Y(l,"--bw-svt-p-bottom",n[1]+"px"),Y(l,"--bw-svt-head-height",n[3]+"px"),Y(l,"--bw-svt-foot-height",n[4]+"px"),Y(l,"--bw-svt-avg-row-height",n[0]+"px"),je(()=>n[27].call(l))},m(d,v){S(d,e,v),H(e,l),H(l,t),E&&E.m(t,null),s=Se(t,n[23].bind(t)),H(l,o),H(l,f),D&&D.m(f,null),n[24](f),H(l,a),H(l,r),F&&F.m(r,null),b=Se(r,n[25].bind(r)),n[26](l),c=Se(l,n[27].bind(l)),_=!0,h||(M=ne(l,"scroll",n[9]),h=!0)},p(d,v){E&&E.p&&(!_||v[0]&2097152)&&Ge(E,k,d,d[21],_?Xe(k,d[21],v,pt):Qe(d[21]),_l),d[8].length&&d[8][0].data.length?D?(D.p(d,v),v[0]&256&&j(D,1)):(D=cl(d),D.c(),j(D,1),D.m(f,null)):D&&(_e(),W(D,1,1,()=>{D=null}),ce()),F&&F.p&&(!_||v[0]&2097152)&&Ge(F,C,d,d[21],_?Xe(C,d[21],v,mt):Qe(d[21]),ol),(!_||v[0]&32)&&Y(l,"--bw-svt-p-top",d[5]+"px"),(!_||v[0]&2)&&Y(l,"--bw-svt-p-bottom",d[1]+"px"),(!_||v[0]&8)&&Y(l,"--bw-svt-head-height",d[3]+"px"),(!_||v[0]&16)&&Y(l,"--bw-svt-foot-height",d[4]+"px"),(!_||v[0]&1)&&Y(l,"--bw-svt-avg-row-height",d[0]+"px")},i(d){_||(j(E,d),j(D),j(F,d),_=!0)},o(d){W(E,d),W(D),W(F,d),_=!1},d(d){d&&N(e),E&&E.d(d),s(),D&&D.d(),n[24](null),F&&F.d(d),b(),n[26](null),c(),h=!1,M()}}}let yt="100%";function At(n,e){if(!n)return 0;const l=getComputedStyle(n);return parseInt(l.getPropertyValue(e))}function Mt(n,e,l){let t,{$$slots:s={},$$scope:o}=e,{items:f=[]}=e,{table_width:a}=e,{max_height:r}=e,{actual_height:b}=e,{table_scrollbar_width:c}=e,{start:_=0}=e,{end:h=0}=e,{selected:M}=e,k,E=0,D,C=0,F=0,d=[],v,T,V=0,p,m=0,U=[],ee=0;async function oe(L){if(m===0||a===0)return;const{scrollTop:J}=p;l(13,c=p.offsetWidth-p.clientWidth),ee=V-(J-C);let Z=_;for(;ee<r&&Z<L.length;){let R=T[Z-_];R||(l(11,h=Z+1),await we(),R=T[Z-_]);let $=R?.getBoundingClientRect().height;$||($=k);const O=d[Z]=$;ee+=O,Z+=1}l(11,h=Z);const G=L.length-h,Q=p.offsetHeight-p.clientHeight;Q>0&&(ee+=Q);let ie=d.filter(R=>typeof R=="number");l(0,k=ie.reduce((R,$)=>R+$,0)/ie.length),l(1,E=G*k),d.length=L.length,await we(),r?ee<r?l(12,b=ee+2):l(12,b=r):l(12,b=ee+1),await we()}async function x(L){requestAnimationFrame(async()=>{if(typeof L!="number")return;const J=typeof L!="number"?!1:ye(L);J!==!0&&(J==="back"&&await y(L,{behavior:"instant"}),J==="forwards"&&await y(L,{behavior:"instant"},!0))})}function ye(L){const J=T&&T[L-_];if(!J&&L<_)return"back";if(!J&&L>=h-1)return"forwards";const{top:Z}=p.getBoundingClientRect(),{top:G,bottom:Q}=J.getBoundingClientRect();return G-Z<37?"back":Q-Z>m?"forwards":!0}async function Me(L){const J=p.scrollTop;T=D.children;const Z=t.length<_,G=At(T[1],"border-top-width"),Q=0;Z&&await y(t.length-1,{behavior:"auto"});let ie=0;for(let le=0;le<T.length;le+=1)d[_+le]=T[le].getBoundingClientRect().height;let R=0,$=C+G/2,O=[];for(;R<t.length;){const le=d[R]||k;if(O[R]=le,$+le+Q>J){ie=R,l(5,V=$-(C+G/2));break}$+=le,R+=1}for(ie=Math.max(0,ie);R<t.length;){const le=d[R]||k;if($+=le,R+=1,$>J+m)break}l(10,_=ie),l(11,h=R);const ze=t.length-h;h===0&&l(11,h=10),l(0,k=($-C)/h);let Ve=ze*k;for(;R<t.length;)R+=1,d[R]=k;l(1,E=Ve),isFinite(E)||l(1,E=2e5)}async function y(L,J,Z=!1){await we();const G=k;let Q=L*G;Z&&(Q=Q-m+G+C);const ie=p.offsetHeight-p.clientHeight;ie>0&&(Q+=ie);const R={top:Q,behavior:"smooth",...J};p.scrollTo(R)}Hl(()=>{T=D.children,l(19,v=!0),oe(f)});function w(){C=this.offsetHeight,l(3,C)}function A(L){se[L?"unshift":"push"](()=>{D=L,l(2,D)})}function K(){F=this.offsetHeight,l(4,F)}function qe(L){se[L?"unshift":"push"](()=>{p=L,l(6,p)})}function We(){m=this.offsetHeight,l(7,m)}return n.$$set=L=>{"items"in L&&l(14,f=L.items),"table_width"in L&&l(15,a=L.table_width),"max_height"in L&&l(16,r=L.max_height),"actual_height"in L&&l(12,b=L.actual_height),"table_scrollbar_width"in L&&l(13,c=L.table_scrollbar_width),"start"in L&&l(10,_=L.start),"end"in L&&l(11,h=L.end),"selected"in L&&l(17,M=L.selected),"$$scope"in L&&l(21,o=L.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&16384&&l(20,t=f),n.$$.dirty[0]&1572864&&v&&requestAnimationFrame(()=>oe(t)),n.$$.dirty[0]&131072&&x(M),n.$$.dirty[0]&1051648&&l(8,U=t.slice(_,h).map((L,J)=>({index:J+_,data:L})))},[k,E,D,C,F,V,p,m,U,Me,_,h,b,c,f,a,r,M,y,v,t,o,s,w,A,K,qe,We]}class Lt extends xe{constructor(e){super(),$e(this,e,Mt,vt,el,{items:14,table_width:15,max_height:16,actual_height:12,table_scrollbar_width:13,start:10,end:11,selected:17,scroll_to_index:18},null,[-1,-1])}get scroll_to_index(){return this.$$.ctx[18]}}function dl(n,e,l){const t=n.slice();return t[10]=e[l].value,t[86]=e[l].id,t[89]=e,t[90]=l,t}function gl(n,e,l){const t=n.slice();return t[10]=e[l].value,t[86]=e[l].id,t[87]=e,t[88]=l,t}function bl(n,e,l){const t=n.slice();return t[10]=e[l].value,t[86]=e[l].id,t[91]=e,t[88]=l,t}function ml(n,e,l){const t=n.slice();return t[10]=e[l].value,t[86]=e[l].id,t[90]=l,t}function wl(n){let e,l;return{c(){e=B("p"),l=Ae(n[1]),g(e,"class","svelte-1bvc1p0")},m(t,s){S(t,e,s),H(e,l)},p(t,s){s[0]&2&&Le(l,t[1])},d(t){t&&N(e)}}}function pl(n){let e,l;return{c(){e=B("caption"),l=Ae(n[1]),g(e,"class","sr-only")},m(t,s){S(t,e,s),H(e,l)},p(t,s){s[0]&2&&Le(l,t[1])},d(t){t&&N(e)}}}function kl(n,e){let l,t,s,o,f,a,r,b,c,_,h;return s=new Ue({props:{value:e[10],latex_delimiters:e[4],line_breaks:e[8],header:!0,edit:!1,el:null}}),{key:n,first:null,c(){l=B("th"),t=B("div"),ge(s.$$.fragment),o=X(),f=B("div"),a=ve("svg"),r=ve("path"),c=X(),g(r,"d","M4.49999 0L8.3971 6.75H0.602875L4.49999 0Z"),g(a,"width","1em"),g(a,"height","1em"),g(a,"viewBox","0 0 9 7"),g(a,"fill","none"),g(a,"xmlns","http://www.w3.org/2000/svg"),g(a,"class","svelte-1bvc1p0"),g(f,"class",b="sort-button "+e[16]+" svelte-1bvc1p0"),P(f,"sorted",e[17]===e[90]),P(f,"des",e[17]===e[90]&&e[16]==="des"),g(t,"class","cell-wrap svelte-1bvc1p0"),g(l,"aria-sort",_=e[34](e[10],e[17],e[16])),g(l,"class","svelte-1bvc1p0"),P(l,"editing",e[22]===e[90]),Y(l,"width",e[9].length?e[9][e[90]]:void 0),this.first=l},m(M,k){S(M,l,k),H(l,t),be(s,t,null),H(t,o),H(t,f),H(f,a),H(a,r),H(l,c),h=!0},p(M,k){e=M;const E={};k[0]&16384&&(E.value=e[10]),k[0]&16&&(E.latex_delimiters=e[4]),k[0]&256&&(E.line_breaks=e[8]),s.$set(E),(!h||k[0]&65536&&b!==(b="sort-button "+e[16]+" svelte-1bvc1p0"))&&g(f,"class",b),(!h||k[0]&212992)&&P(f,"sorted",e[17]===e[90]),(!h||k[0]&212992)&&P(f,"des",e[17]===e[90]&&e[16]==="des"),(!h||k[0]&212992&&_!==(_=e[34](e[10],e[17],e[16])))&&g(l,"aria-sort",_),(!h||k[0]&4210688)&&P(l,"editing",e[22]===e[90]),k[0]&16896&&Y(l,"width",e[9].length?e[9][e[90]]:void 0)},i(M){h||(j(s.$$.fragment,M),h=!0)},o(M){W(s.$$.fragment,M),h=!1},d(M){M&&N(l),me(s)}}}function vl(n,e){let l,t,s,o,f=e[88],a;s=new Ue({props:{value:e[10],latex_delimiters:e[4],line_breaks:e[8],datatype:Array.isArray(e[0])?e[0][e[88]]:e[0],edit:!1,el:null}});const r=()=>e[51](l,f),b=()=>e[51](null,f);return{key:n,first:null,c(){l=B("td"),t=B("div"),ge(s.$$.fragment),o=X(),g(t,"class","cell-wrap svelte-1bvc1p0"),g(l,"tabindex","-1"),g(l,"class","svelte-1bvc1p0"),this.first=l},m(c,_){S(c,l,_),H(l,t),be(s,t,null),H(l,o),r(),a=!0},p(c,_){e=c;const h={};_[1]&2&&(h.value=e[10]),_[0]&16&&(h.latex_delimiters=e[4]),_[0]&256&&(h.line_breaks=e[8]),_[0]&1|_[1]&2&&(h.datatype=Array.isArray(e[0])?e[0][e[88]]:e[0]),s.$set(h),f!==e[88]&&(b(),f=e[88],r())},i(c){a||(j(s.$$.fragment,c),a=!0)},o(c){W(s.$$.fragment,c),a=!1},d(c){c&&N(l),me(s),b()}}}function yl(n){let e,l;return{c(){e=B("caption"),l=Ae(n[1]),g(e,"class","sr-only")},m(t,s){S(t,e,s),H(e,l)},p(t,s){s[0]&2&&Le(l,t[1])},d(t){t&&N(e)}}}function qt(n){let e,l=n[1]&&n[1].length!==0&&yl(n);return{c(){l&&l.c(),e=Pe()},m(t,s){l&&l.m(t,s),S(t,e,s)},p(t,s){t[1]&&t[1].length!==0?l?l.p(t,s):(l=yl(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){t&&N(e),l&&l.d(t)}}}function Al(n,e){let l,t,s,o,f,a,r,b,c,_,h,M,k,E,D;function C(V){e[60](V,e[90])}function F(V){e[61](V,e[86])}function d(){return e[62](e[90])}let v={latex_delimiters:e[4],line_breaks:e[8],edit:e[22]===e[90],select_on_focus:e[23],header:!0};e[14][e[90]].value!==void 0&&(v.value=e[14][e[90]].value),e[20][e[86]].input!==void 0&&(v.el=e[20][e[86]].input),s=new Ue({props:v}),se.push(()=>pe(s,"value",C)),se.push(()=>pe(s,"el",F)),s.$on("keydown",e[40]),s.$on("dblclick",d);function T(){return e[63](e[90])}return{key:n,first:null,c(){l=B("th"),t=B("div"),ge(s.$$.fragment),a=X(),r=B("div"),b=ve("svg"),c=ve("path"),h=X(),g(c,"d","M4.49999 0L8.3971 6.75H0.602875L4.49999 0Z"),g(b,"width","1em"),g(b,"height","1em"),g(b,"viewBox","0 0 9 7"),g(b,"fill","none"),g(b,"xmlns","http://www.w3.org/2000/svg"),g(b,"class","svelte-1bvc1p0"),g(r,"class",_="sort-button "+e[16]+" svelte-1bvc1p0"),P(r,"sorted",e[17]===e[90]),P(r,"des",e[17]===e[90]&&e[16]==="des"),g(t,"class","cell-wrap svelte-1bvc1p0"),g(l,"aria-sort",M=e[34](e[10],e[17],e[16])),Y(l,"width","var(--cell-width-"+e[90]+")"),g(l,"class","svelte-1bvc1p0"),P(l,"focus",e[22]===e[90]||e[24]===e[90]),this.first=l},m(V,p){S(V,l,p),H(l,t),be(s,t,null),H(t,a),H(t,r),H(r,b),H(b,c),H(l,h),k=!0,E||(D=ne(r,"click",T),E=!0)},p(V,p){e=V;const m={};p[0]&16&&(m.latex_delimiters=e[4]),p[0]&256&&(m.line_breaks=e[8]),p[0]&4210688&&(m.edit=e[22]===e[90]),p[0]&8388608&&(m.select_on_focus=e[23]),!o&&p[0]&16384&&(o=!0,m.value=e[14][e[90]].value,ke(()=>o=!1)),!f&&p[0]&1064960&&(f=!0,m.el=e[20][e[86]].input,ke(()=>f=!1)),s.$set(m),(!k||p[0]&65536&&_!==(_="sort-button "+e[16]+" svelte-1bvc1p0"))&&g(r,"class",_),(!k||p[0]&212992)&&P(r,"sorted",e[17]===e[90]),(!k||p[0]&212992)&&P(r,"des",e[17]===e[90]&&e[16]==="des"),(!k||p[0]&212992&&M!==(M=e[34](e[10],e[17],e[16])))&&g(l,"aria-sort",M),(!k||p[0]&16384)&&Y(l,"width","var(--cell-width-"+e[90]+")"),(!k||p[0]&20987904)&&P(l,"focus",e[22]===e[90]||e[24]===e[90])},i(V){k||(j(s.$$.fragment,V),k=!0)},o(V){W(s.$$.fragment,V),k=!1},d(V){V&&N(l),me(s),E=!1,D()}}}function zt(n){let e,l=[],t=new Map,s,o=ue(n[14]);const f=a=>a[86];for(let a=0;a<o.length;a+=1){let r=dl(n,o,a),b=f(r);t.set(b,l[a]=Al(b,r))}return{c(){e=B("tr");for(let a=0;a<l.length;a+=1)l[a].c();g(e,"slot","thead"),g(e,"class","svelte-1bvc1p0")},m(a,r){S(a,e,r);for(let b=0;b<l.length;b+=1)l[b]&&l[b].m(e,null);s=!0},p(a,r){r[0]&30621968|r[1]&904&&(o=ue(a[14]),_e(),l=He(l,r,f,1,a,o,t,e,Te,Al,null,dl),ce())},i(a){if(!s){for(let r=0;r<o.length;r+=1)j(l[r]);s=!0}},o(a){for(let r=0;r<l.length;r+=1)W(l[r]);s=!1},d(a){a&&N(e);for(let r=0;r<l.length;r+=1)l[r].d()}}}function Ml(n,e){let l,t,s,o,f,a,r,b=`var(--cell-width-${e[88]})`,c,_,h;function M(d){e[54](d,e[84],e[88])}function k(d){e[55](d,e[86])}let E={display_value:e[12]?.[e[84]]?.[e[88]],latex_delimiters:e[4],line_breaks:e[8],editable:e[5],edit:fe(e[19],[e[84],e[88]]),datatype:Array.isArray(e[0])?e[0][e[88]]:e[0],clear_on_focus:e[21]};e[15][e[84]][e[88]].value!==void 0&&(E.value=e[15][e[84]][e[88]].value),e[20][e[86]].input!==void 0&&(E.el=e[20][e[86]].input),s=new Ue({props:E}),se.push(()=>pe(s,"value",M)),se.push(()=>pe(s,"el",k)),s.$on("blur",e[56]);function D(){return e[57](e[84],e[88])}function C(){return e[58](e[84],e[88])}function F(){return e[59](e[84],e[88])}return{key:n,first:null,c(){l=B("td"),t=B("div"),ge(s.$$.fragment),a=X(),g(t,"class","cell-wrap svelte-1bvc1p0"),g(l,"tabindex","0"),g(l,"style",r=e[13]?.[e[84]]?.[e[88]]||""),g(l,"class","svelte-1bvc1p0"),P(l,"focus",fe(e[11],[e[84],e[88]])),Y(l,"width",b),this.first=l},m(d,v){S(d,l,v),H(l,t),be(s,t,null),H(l,a),c=!0,_||(h=[ne(l,"touchstart",D,{passive:!0}),ne(l,"click",C),ne(l,"dblclick",F)],_=!0)},p(d,v){e=d;const T={};v[0]&4096|v[2]&12582912&&(T.display_value=e[12]?.[e[84]]?.[e[88]]),v[0]&16&&(T.latex_delimiters=e[4]),v[0]&256&&(T.line_breaks=e[8]),v[0]&32&&(T.editable=e[5]),v[0]&524288|v[2]&12582912&&(T.edit=fe(e[19],[e[84],e[88]])),v[0]&1|v[2]&8388608&&(T.datatype=Array.isArray(e[0])?e[0][e[88]]:e[0]),v[0]&2097152&&(T.clear_on_focus=e[21]),!o&&v[0]&32768|v[2]&12582912&&(o=!0,T.value=e[15][e[84]][e[88]].value,ke(()=>o=!1)),!f&&v[0]&1048576|v[2]&8388608&&(f=!0,T.el=e[20][e[86]].input,ke(()=>f=!1)),s.$set(T),(!c||v[0]&8192|v[2]&12582912&&r!==(r=e[13]?.[e[84]]?.[e[88]]||""))&&g(l,"style",r),(!c||v[0]&2048|v[2]&12582912)&&P(l,"focus",fe(e[11],[e[84],e[88]])),v[0]&8192|v[2]&12582912&&Y(l,"width",b)},i(d){c||(j(s.$$.fragment,d),c=!0)},o(d){W(s.$$.fragment,d),c=!1},d(d){d&&N(l),me(s),_=!1,Fe(h)}}}function Dt(n){let e,l=[],t=new Map,s,o=ue(n[85]);const f=a=>a[86];for(let a=0;a<o.length;a+=1){let r=gl(n,o,a),b=f(r);t.set(b,l[a]=Ml(b,r))}return{c(){e=B("tr");for(let a=0;a<l.length;a+=1)l[a].c();g(e,"slot","tbody"),g(e,"class","svelte-1bvc1p0"),P(e,"row_odd",n[84]%2===0)},m(a,r){S(a,e,r);for(let b=0;b<l.length;b+=1)l[b]&&l[b].m(e,null);s=!0},p(a,r){r[0]&137935153|r[1]&80|r[2]&12582912&&(o=ue(a[85]),_e(),l=He(l,r,f,1,a,o,t,e,Te,Ml,null,gl),ce()),(!s||r[2]&4194304)&&P(e,"row_odd",a[84]%2===0)},i(a){if(!s){for(let r=0;r<o.length;r+=1)j(l[r]);s=!0}},o(a){for(let r=0;r<l.length;r+=1)W(l[r]);s=!1},d(a){a&&N(e);for(let r=0;r<l.length;r+=1)l[r].d()}}}function Et(n){let e,l,t,s,o;function f(c){n[64](c)}function a(c){n[65](c)}function r(c){n[66](c)}let b={table_width:n[26],max_height:n[7],selected:n[31],$$slots:{tbody:[Dt,({index:c,item:_})=>({84:c,85:_}),({index:c,item:_})=>[0,0,(c?4194304:0)|(_?8388608:0)]],thead:[zt],default:[qt]},$$scope:{ctx:n}};return n[15]!==void 0&&(b.items=n[15]),n[29]!==void 0&&(b.actual_height=n[29]),n[30]!==void 0&&(b.table_scrollbar_width=n[30]),e=new Lt({props:b}),se.push(()=>pe(e,"items",f)),se.push(()=>pe(e,"actual_height",a)),se.push(()=>pe(e,"table_scrollbar_width",r)),{c(){ge(e.$$.fragment)},m(c,_){be(e,c,_),o=!0},p(c,_){const h={};_[0]&67108864&&(h.table_width=c[26]),_[0]&128&&(h.max_height=c[7]),_[1]&1&&(h.selected=c[31]),_[0]&167508275|_[2]&12582912|_[3]&1&&(h.$$scope={dirty:_,ctx:c}),!l&&_[0]&32768&&(l=!0,h.items=c[15],ke(()=>l=!1)),!t&&_[0]&536870912&&(t=!0,h.actual_height=c[29],ke(()=>t=!1)),!s&&_[0]&1073741824&&(s=!0,h.table_scrollbar_width=c[30],ke(()=>s=!1)),e.$set(h)},i(c){o||(j(e.$$.fragment,c),o=!0)},o(c){W(e.$$.fragment,c),o=!1},d(c){me(e,c)}}}function Ll(n){let e,l,t,s=n[3][1]==="dynamic"&&ql(n),o=n[2][1]==="dynamic"&&zl(n);return{c(){e=B("div"),s&&s.c(),l=X(),o&&o.c(),g(e,"class","controls-wrap svelte-1bvc1p0")},m(f,a){S(f,e,a),s&&s.m(e,null),H(e,l),o&&o.m(e,null),t=!0},p(f,a){f[3][1]==="dynamic"?s?(s.p(f,a),a[0]&8&&j(s,1)):(s=ql(f),s.c(),j(s,1),s.m(e,l)):s&&(_e(),W(s,1,1,()=>{s=null}),ce()),f[2][1]==="dynamic"?o?(o.p(f,a),a[0]&4&&j(o,1)):(o=zl(f),o.c(),j(o,1),o.m(e,null)):o&&(_e(),W(o,1,1,()=>{o=null}),ce())},i(f){t||(j(s),j(o),t=!0)},o(f){W(s),W(o),t=!1},d(f){f&&N(e),s&&s.d(),o&&o.d()}}}function ql(n){let e,l,t;return l=new Tl({props:{variant:"secondary",size:"sm",$$slots:{default:[Ht]},$$scope:{ctx:n}}}),l.$on("click",n[71]),{c(){e=B("span"),ge(l.$$.fragment),g(e,"class","button-wrap svelte-1bvc1p0")},m(s,o){S(s,e,o),be(l,e,null),t=!0},p(s,o){const f={};o[1]&4|o[3]&1&&(f.$$scope={dirty:o,ctx:s}),l.$set(f)},i(s){t||(j(l.$$.fragment,s),t=!0)},o(s){W(l.$$.fragment,s),t=!1},d(s){s&&N(e),me(l)}}}function Ht(n){let e,l,t,s=n[33]("dataframe.new_row")+"",o;return{c(){e=ve("svg"),l=ve("path"),t=X(),o=Ae(s),g(l,"fill","currentColor"),g(l,"d","M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10l-1.41-1.41z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),g(e,"aria-hidden","true"),g(e,"role","img"),g(e,"width","1em"),g(e,"height","1em"),g(e,"preserveAspectRatio","xMidYMid meet"),g(e,"viewBox","0 0 32 32"),g(e,"class","svelte-1bvc1p0")},m(f,a){S(f,e,a),H(e,l),S(f,t,a),S(f,o,a)},p(f,a){a[1]&4&&s!==(s=f[33]("dataframe.new_row")+"")&&Le(o,s)},d(f){f&&(N(e),N(t),N(o))}}}function zl(n){let e,l,t;return l=new Tl({props:{variant:"secondary",size:"sm",$$slots:{default:[Tt]},$$scope:{ctx:n}}}),l.$on("click",n[72]),{c(){e=B("span"),ge(l.$$.fragment),g(e,"class","button-wrap svelte-1bvc1p0")},m(s,o){S(s,e,o),be(l,e,null),t=!0},p(s,o){const f={};o[1]&4|o[3]&1&&(f.$$scope={dirty:o,ctx:s}),l.$set(f)},i(s){t||(j(l.$$.fragment,s),t=!0)},o(s){W(l.$$.fragment,s),t=!1},d(s){s&&N(e),me(l)}}}function Tt(n){let e,l,t,s=n[33]("dataframe.new_column")+"",o;return{c(){e=ve("svg"),l=ve("path"),t=X(),o=Ae(s),g(l,"fill","currentColor"),g(l,"d","m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),g(e,"aria-hidden","true"),g(e,"role","img"),g(e,"width","1em"),g(e,"height","1em"),g(e,"preserveAspectRatio","xMidYMid meet"),g(e,"viewBox","0 0 32 32"),g(e,"class","svelte-1bvc1p0")},m(f,a){S(f,e,a),H(e,l),S(f,t,a),S(f,o,a)},p(f,a){a[1]&4&&s!==(s=f[33]("dataframe.new_column")+"")&&Le(o,s)},d(f){f&&(N(e),N(t),N(o))}}}function Bt(n){let e,l,t,s,o,f,a,r=[],b=new Map,c,_,h,M=[],k=new Map,E,D,C,F,d,v,T,V,p=n[1]&&n[1].length!==0&&wl(n),m=n[1]&&n[1].length!==0&&pl(n),U=ue(n[14]);const ee=w=>w[86];for(let w=0;w<U.length;w+=1){let A=ml(n,U,w),K=ee(A);b.set(K,r[w]=kl(K,A))}let oe=ue(n[32]);const x=w=>w[86];for(let w=0;w<oe.length;w+=1){let A=bl(n,oe,w),K=x(A);k.set(K,M[w]=vl(K,A))}function ye(w){n[67](w)}let Me={flex:!1,center:!1,boundedheight:!1,disable_click:!0,$$slots:{default:[Et]},$$scope:{ctx:n}};n[25]!==void 0&&(Me.dragging=n[25]),C=new ft({props:Me}),se.push(()=>pe(C,"dragging",ye)),C.$on("load",n[68]);let y=n[5]&&Ll(n);return{c(){e=B("div"),p&&p.c(),l=X(),t=B("div"),s=B("table"),m&&m.c(),o=X(),f=B("thead"),a=B("tr");for(let w=0;w<r.length;w+=1)r[w].c();c=X(),_=B("tbody"),h=B("tr");for(let w=0;w<M.length;w+=1)M[w].c();D=X(),ge(C.$$.fragment),d=X(),y&&y.c(),g(a,"class","svelte-1bvc1p0"),g(f,"class","svelte-1bvc1p0"),g(h,"class","svelte-1bvc1p0"),g(s,"class","svelte-1bvc1p0"),je(()=>n[52].call(s)),P(s,"fixed-layout",n[9].length!=0),g(t,"class","table-wrap svelte-1bvc1p0"),Y(t,"height",n[29]+"px"),g(t,"role","grid"),g(t,"tabindex","0"),P(t,"dragging",n[25]),P(t,"no-wrap",!n[6]),g(e,"class","svelte-1bvc1p0"),P(e,"label",n[1]&&n[1].length!==0)},m(w,A){S(w,e,A),p&&p.m(e,null),H(e,l),H(e,t),H(t,s),m&&m.m(s,null),H(s,o),H(s,f),H(f,a);for(let K=0;K<r.length;K+=1)r[K]&&r[K].m(a,null);H(s,c),H(s,_),H(_,h);for(let K=0;K<M.length;K+=1)M[K]&&M[K].m(h,null);E=Se(s,n[52].bind(s)),n[53](s),H(t,D),be(C,t,null),n[69](t),H(e,d),y&&y.m(e,null),v=!0,T||(V=[ne(window,"click",n[43]),ne(window,"touchstart",n[43]),ne(window,"resize",n[50]),ne(t,"keydown",n[70]),El(ot.call(null,e))],T=!0)},p(w,A){w[1]&&w[1].length!==0?p?p.p(w,A):(p=wl(w),p.c(),p.m(e,l)):p&&(p.d(1),p=null),w[1]&&w[1].length!==0?m?m.p(w,A):(m=pl(w),m.c(),m.m(s,o)):m&&(m.d(1),m=null),A[0]&4408080|A[1]&8&&(U=ue(w[14]),_e(),r=He(r,A,ee,1,w,U,b,a,Te,kl,null,ml),ce()),A[0]&262417|A[1]&2&&(oe=ue(w[32]),_e(),M=He(M,A,x,1,w,oe,k,h,Te,vl,null,bl),ce()),(!v||A[0]&512)&&P(s,"fixed-layout",w[9].length!=0);const K={};A[0]&1845230003|A[1]&1|A[3]&1&&(K.$$scope={dirty:A,ctx:w}),!F&&A[0]&33554432&&(F=!0,K.dragging=w[25],ke(()=>F=!1)),C.$set(K),(!v||A[0]&536870912)&&Y(t,"height",w[29]+"px"),(!v||A[0]&33554432)&&P(t,"dragging",w[25]),(!v||A[0]&64)&&P(t,"no-wrap",!w[6]),w[5]?y?(y.p(w,A),A[0]&32&&j(y,1)):(y=Ll(w),y.c(),j(y,1),y.m(e,null)):y&&(_e(),W(y,1,1,()=>{y=null}),ce()),(!v||A[0]&2)&&P(e,"label",w[1]&&w[1].length!==0)},i(w){if(!v){for(let A=0;A<U.length;A+=1)j(r[A]);for(let A=0;A<oe.length;A+=1)j(M[A]);j(C.$$.fragment,w),j(y),v=!0}},o(w){for(let A=0;A<r.length;A+=1)W(r[A]);for(let A=0;A<M.length;A+=1)W(M[A]);W(C.$$.fragment,w),W(y),v=!1},d(w){w&&N(e),p&&p.d(),m&&m.d();for(let A=0;A<r.length;A+=1)r[A].d();for(let A=0;A<M.length;A+=1)M[A].d();E(),n[53](null),me(C),n[69](null),y&&y.d(),T=!1,Fe(V)}}}function Ee(){return Math.random().toString(36).substring(2,15)}function Ct(n,e){return e.filter(l);function l(t){var s=-1;return n.split(`
`).every(o);function o(f){if(!f)return!0;var a=f.split(t).length;return s<0&&(s=a),s===a&&a>1}}}function Rt(n){const e=atob(n.split(",")[1]),l=n.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(e.length),s=new Uint8Array(t);for(let o=0;o<e.length;o++)s[o]=e.charCodeAt(o);return new Blob([t],{type:l})}function jt(n,e,l){let t,s,o;rt(n,at,i=>l(33,o=i));let{datatype:f}=e,{label:a=null}=e,{headers:r=[]}=e,b,{value:c}=e,{col_count:_}=e,{row_count:h}=e,{latex_delimiters:M}=e,{editable:k=!0}=e,{wrap:E=!1}=e,{height:D=500}=e,{line_breaks:C=!0}=e,{column_widths:F=[]}=e,d=!1,v=c?.metadata?.display_value??null,T=c?.metadata?.styling??null;const V=Dl();let p=!1;const m=(i,u)=>y?.[i]?.[u]?.value;let U={};function ee(i){let u=i||[];if(_[1]==="fixed"&&u.length<_[0]){const q=Array(_[0]-u.length).fill("").map((z,I)=>`${I+u.length}`);u=u.concat(q)}return!u||u.length===0?Array(_[0]).fill(0).map((q,z)=>{const I=Ee();return l(20,U[I]={cell:null,input:null},U),{id:I,value:JSON.stringify(z+1)}}):u.map((q,z)=>{const I=Ee();return l(20,U[I]={cell:null,input:null},U),{id:I,value:q??""}})}function oe(i){const u=i.length;return Array(h[1]==="fixed"||u<h[0]?h[0]:u).fill(0).map((q,z)=>Array(_[1]==="fixed"?_[0]:u>0?i[0].length:r.length).fill(0).map((I,te)=>{const ae=Ee();return l(20,U[ae]=U[ae]||{input:null,cell:null},U),{value:i?.[z]?.[te]??"",id:ae}}))}let x=ee(r),ye;function Me(){l(14,x=ee(r)),l(48,ye=r.slice())}let y=[[]],w;function A(i,u,q){if(!u)return"none";if(r[u]===i){if(q==="asc")return"ascending";if(q==="des")return"descending"}return"none"}function K(i){return y.reduce((u,q,z)=>{const I=q.reduce((te,ae,Re)=>i===ae.id?Re:te,-1);return I===-1?u:[z,I]},[-1,-1])}async function qe(i,u){!k||fe(p,[i,u])||l(19,p=[i,u])}function We(i,u){const q={ArrowRight:[0,1],ArrowLeft:[0,-1],ArrowDown:[1,0],ArrowUp:[-1,0]}[i],z=u[0]+q[0],I=u[1]+q[1];if(z<0&&I<=0)l(24,O=I),l(11,d=!1);else{const te=y[z]?.[I];l(11,d=te?[z,I]:d)}}let L=!1;async function J(i){if(O!==!1&&R===!1)switch(i.key){case"ArrowDown":l(11,d=[0,O]),l(24,O=!1);return;case"ArrowLeft":l(24,O=O>0?O-1:O);return;case"ArrowRight":l(24,O=O<x.length-1?O+1:O);return;case"Escape":i.preventDefault(),l(24,O=!1);break;case"Enter":i.preventDefault();break}if(!d)return;const[u,q]=d;switch(i.key){case"ArrowRight":case"ArrowLeft":case"ArrowDown":case"ArrowUp":if(p)break;i.preventDefault(),We(i.key,[u,q]);break;case"Escape":if(!k)break;i.preventDefault(),l(19,p=!1);break;case"Enter":if(!k)break;i.preventDefault(),i.shiftKey?(le(u),await we(),l(11,d=[u+1,q])):fe(p,[u,q])?(l(19,p=!1),await we(),l(11,d=[u,q])):l(19,p=[u,q]);break;case"Backspace":if(!k)break;p||(i.preventDefault(),l(15,y[u][q].value="",y));break;case"Delete":if(!k)break;p||(i.preventDefault(),l(15,y[u][q].value="",y));break;case"Tab":let z=i.shiftKey?-1:1,I=y[u][q+z],te=y?.[u+z]?.[z>0?0:x.length-1];(I||te)&&(i.preventDefault(),l(11,d=I?[u,q+z]:[u+z,z>0?0:x.length-1])),l(19,p=!1);break;default:if(!k)break;(!p||p&&fe(p,[u,q]))&&i.key.length===1&&(l(21,L=!0),l(19,p=[u,q]))}}async function Z(i,u){fe(p,[i,u])||(l(22,R=!1),l(24,O=!1),l(19,p=!1),l(11,d=[i,u]),await we(),re.focus())}let G,Q;function ie(i){typeof Q!="number"||Q!==i?(l(16,G="asc"),l(17,Q=i)):G==="asc"?l(16,G="des"):G==="des"&&l(16,G="asc")}let R,$=!1,O=!1;async function ze(i,u=!1){!k||_[1]!=="dynamic"||R===i||(l(11,d=!1),l(24,O=i),l(22,R=i),l(23,$=u))}function Ve(i){if(k)switch(i.key){case"Escape":case"Enter":case"Tab":i.preventDefault(),l(11,d=!1),l(24,O=R),l(22,R=!1),re.focus();break}}async function le(i){if(re.focus(),h[1]==="dynamic"){if(y.length===0){l(47,b=[Array(r.length).fill("")]);return}y.splice(i?i+1:y.length,0,Array(y[0].length).fill(0).map((u,q)=>{const z=Ee();return l(20,U[z]={cell:null,input:null},U),{id:z,value:""}})),l(15,y),l(47,b),l(49,w),l(10,c),l(11,d=[i?i+1:y.length-1,0])}}async function ll(){if(re.focus(),_[1]==="dynamic"){for(let i=0;i<y.length;i++){const u=Ee();l(20,U[u]={cell:null,input:null},U),y[i].push({id:u,value:""})}r.push(`Header ${r.length+1}`),l(15,y),l(47,b),l(49,w),l(10,c),l(46,r),l(10,c),l(47,b),await we(),requestAnimationFrame(()=>{ze(r.length-1,!0);const i=re.querySelectorAll("tbody")[1].offsetWidth;re.querySelectorAll("table")[1].scrollTo({left:i})})}}function Bl(i){i.stopImmediatePropagation();const[u]=i.composedPath();re.contains(u)||(l(19,p=!1),l(22,R=!1),l(24,O=!1),l(11,d=!1))}function tl(i){const u=new FileReader;function q(z){if(!z?.target?.result||typeof z.target.result!="string")return;const[I]=Ct(z.target.result,[",","	"]),[te,...ae]=_t(I).parseRows(z.target.result);l(14,x=ee(_[1]==="fixed"?te.slice(0,_[0]):te)),l(47,b=ae),u.removeEventListener("loadend",q)}u.addEventListener("loadend",q),u.readAsText(i)}let Ie=!1,Ke=0;function Cl(i){let u=i[0].slice();for(let q=0;q<i.length;q++)for(let z=0;z<i[q].length;z++)`${u[z].value}`.length<`${i[q][z].value}`.length&&(u[z]=i[q][z]);return u}let De=[],re,Oe;function Be(){const i=De.map((u,q)=>u?.clientWidth||0);if(i.length!==0)for(let u=0;u<i.length;u++)re.style.setProperty(`--cell-width-${u}`,`${i[u]-Ce/i.length}px`)}let Je=D,Ce=0;function Rl(i,u,q,z,I){let te=null;if(d&&d[0]in y&&d[1]in y[d[0]]&&(te=y[d[0]][d[1]].id),typeof z!="number"||!I)return;const ae=[...Array(i.length).keys()];if(I==="asc")ae.sort((he,de)=>i[he][z].value<i[de][z].value?-1:1);else if(I==="des")ae.sort((he,de)=>i[he][z].value>i[de][z].value?-1:1);else return;const Re=[...i],sl=u?[...u]:null,il=q?[...q]:null;if(ae.forEach((he,de)=>{i[de]=Re[he],u&&sl&&(u[de]=sl[he]),q&&il&&(q[de]=il[he])}),l(15,y),l(47,b),l(49,w),l(10,c),te){const[he,de]=K(te);l(11,d=[he,de])}}let nl=!1;Hl(()=>{const i=new IntersectionObserver((u,q)=>{u.forEach(z=>{z.isIntersecting&&!nl&&(Be(),l(15,y),l(47,b),l(49,w),l(10,c)),nl=z.isIntersecting})});return i.observe(re),()=>{i.disconnect()}});const jl=()=>Be();function Sl(i,u){se[i?"unshift":"push"](()=>{De[u]=i,l(18,De)})}function Nl(){Ke=this.clientWidth,l(26,Ke)}function Fl(i){se[i?"unshift":"push"](()=>{Oe=i,l(28,Oe)})}function Pl(i,u,q){n.$$.not_equal(y[u][q].value,i)&&(y[u][q].value=i,l(15,y),l(47,b),l(49,w),l(10,c))}function Ul(i,u){n.$$.not_equal(U[u].input,i)&&(U[u].input=i,l(20,U))}const Wl=()=>(l(21,L=!1),re.focus()),Vl=(i,u)=>qe(i,u),Il=(i,u)=>Z(i,u),Kl=(i,u)=>qe(i,u);function Ol(i,u){n.$$.not_equal(x[u].value,i)&&(x[u].value=i,l(14,x))}function Jl(i,u){n.$$.not_equal(U[u].input,i)&&(U[u].input=i,l(20,U))}const Yl=i=>ze(i),Zl=i=>ie(i);function Gl(i){y=i,l(15,y),l(47,b),l(49,w),l(10,c)}function Ql(i){Je=i,l(29,Je)}function Xl(i){Ce=i,l(30,Ce)}function xl(i){Ie=i,l(25,Ie)}const $l=i=>tl(Rt(i.detail.data));function et(i){se[i?"unshift":"push"](()=>{re=i,l(27,re)})}const lt=i=>J(i),tt=i=>(i.stopPropagation(),le()),nt=i=>(i.stopPropagation(),ll());return n.$$set=i=>{"datatype"in i&&l(0,f=i.datatype),"label"in i&&l(1,a=i.label),"headers"in i&&l(46,r=i.headers),"value"in i&&l(10,c=i.value),"col_count"in i&&l(2,_=i.col_count),"row_count"in i&&l(3,h=i.row_count),"latex_delimiters"in i&&l(4,M=i.latex_delimiters),"editable"in i&&l(5,k=i.editable),"wrap"in i&&l(6,E=i.wrap),"height"in i&&l(7,D=i.height),"line_breaks"in i&&l(8,C=i.line_breaks),"column_widths"in i&&l(9,F=i.column_widths)},n.$$.update=()=>{if(n.$$.dirty[0]&1024|n.$$.dirty[1]&65536&&(c?(l(46,r=c.headers),l(47,b=c.data),l(12,v=c?.metadata?.display_value??null),l(13,T=c?.metadata?.styling??null)):b===null&&l(47,b=[])),n.$$.dirty[0]&2048&&d!==!1){const[i,u]=d;!isNaN(i)&&!isNaN(u)&&V("select",{index:[i,u],value:m(i,u)})}n.$$.dirty[1]&163840&&(fe(r,ye)||Me()),n.$$.dirty[1]&327680&&(fe(b,w)||(l(15,y=oe(b)),l(49,w=b))),n.$$.dirty[0]&61472&&x&&V("change",{data:y.map(i=>i.map(({value:u})=>u)),headers:x.map(i=>i.value),metadata:k?null:{display_value:v,styling:T}}),n.$$.dirty[0]&32768&&l(32,t=Cl(y)),n.$$.dirty[0]&262144&&De[0]&&Be(),n.$$.dirty[0]&241664&&Rl(y,v,T,Q,G),n.$$.dirty[0]&2048&&l(31,s=!!d&&d[0])},[f,a,_,h,M,k,E,D,C,F,c,d,v,T,x,y,G,Q,De,p,U,L,R,$,O,Ie,Ke,re,Oe,Je,Ce,s,t,o,A,qe,J,Z,ie,ze,Ve,le,ll,Bl,tl,Be,r,b,ye,w,jl,Sl,Nl,Fl,Pl,Ul,Wl,Vl,Il,Kl,Ol,Jl,Yl,Zl,Gl,Ql,Xl,xl,$l,et,lt,tt,nt]}class It extends xe{constructor(e){super(),$e(this,e,jt,Bt,el,{datatype:0,label:1,headers:46,value:10,col_count:2,row_count:3,latex_delimiters:4,editable:5,wrap:6,height:7,line_breaks:8,column_widths:9},null,[-1,-1,-1,-1])}}export{It as T};
//# sourceMappingURL=Table-575bd406.js.map
