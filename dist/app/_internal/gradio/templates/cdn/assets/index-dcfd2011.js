import{S as K,e as L,s as M,ag as _,F as w,G as v,w as g,u as m,H as k,R,U,o as O,h as P,r as Q,v as Y,X as V,k as y,Z as p,ae as $,V as ee,W as te}from"./index-7674dbb6.js";import{T as se}from"./Textbox-5df53a1e.js";import{B as le}from"./Button-770df9ba.js";import"./BlockTitle-2eb1c338.js";import"./Info-47344107.js";import"./Copy-bc542573.js";function W(l){let e,t;const n=[l[17]];let f={};for(let u=0;u<n.length;u+=1)f=p(f,n[u]);return e=new $({props:f}),{c(){w(e.$$.fragment)},m(u,a){v(e,u,a),t=!0},p(u,a){const r=a&131072?ee(n,[te(u[17])]):{};e.$set(r)},i(u){t||(g(e.$$.fragment,u),t=!0)},o(u){m(e.$$.fragment,u),t=!1},d(u){k(e,u)}}}function ie(l){let e,t,n,f,u,a=l[17]&&W(l);function r(i){l[22](i)}function b(i){l[23](i)}let c={label:l[3],info:l[4],show_label:l[10],lines:l[8],type:l[12],rtl:l[18],text_align:l[19],max_lines:l[11]?l[11]:l[8]+1,placeholder:l[9],show_copy_button:l[16],autofocus:l[20],container:l[13],autoscroll:l[21],disabled:!0};return l[0]!==void 0&&(c.value=l[0]),l[1]!==void 0&&(c.value_is_output=l[1]),t=new se({props:c}),R.push(()=>U(t,"value",r)),R.push(()=>U(t,"value_is_output",b)),t.$on("change",l[24]),t.$on("input",l[25]),t.$on("submit",l[26]),t.$on("blur",l[27]),t.$on("select",l[28]),t.$on("focus",l[29]),{c(){a&&a.c(),e=O(),w(t.$$.fragment)},m(i,o){a&&a.m(i,o),P(i,e,o),v(t,i,o),u=!0},p(i,o){i[17]?a?(a.p(i,o),o&131072&&g(a,1)):(a=W(i),a.c(),g(a,1),a.m(e.parentNode,e)):a&&(Q(),m(a,1,1,()=>{a=null}),Y());const h={};o&8&&(h.label=i[3]),o&16&&(h.info=i[4]),o&1024&&(h.show_label=i[10]),o&256&&(h.lines=i[8]),o&4096&&(h.type=i[12]),o&262144&&(h.rtl=i[18]),o&524288&&(h.text_align=i[19]),o&2304&&(h.max_lines=i[11]?i[11]:i[8]+1),o&512&&(h.placeholder=i[9]),o&65536&&(h.show_copy_button=i[16]),o&1048576&&(h.autofocus=i[20]),o&8192&&(h.container=i[13]),o&2097152&&(h.autoscroll=i[21]),!n&&o&1&&(n=!0,h.value=i[0],V(()=>n=!1)),!f&&o&2&&(f=!0,h.value_is_output=i[1],V(()=>f=!1)),t.$set(h)},i(i){u||(g(a),g(t.$$.fragment,i),u=!0)},o(i){m(a),m(t.$$.fragment,i),u=!1},d(i){i&&y(e),a&&a.d(i),k(t,i)}}}function ne(l){let e,t;return e=new le({props:{visible:l[7],elem_id:l[5],elem_classes:l[6],scale:l[14],min_width:l[15],allow_overflow:!1,padding:l[13],$$slots:{default:[ie]},$$scope:{ctx:l}}}),{c(){w(e.$$.fragment)},m(n,f){v(e,n,f),t=!0},p(n,[f]){const u={};f&128&&(u.visible=n[7]),f&32&&(u.elem_id=n[5]),f&64&&(u.elem_classes=n[6]),f&16384&&(u.scale=n[14]),f&32768&&(u.min_width=n[15]),f&8192&&(u.padding=n[13]),f&1077886751&&(u.$$scope={dirty:f,ctx:n}),e.$set(u)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function ue(l,e,t){let{gradio:n}=e,{label:f="Textbox"}=e,{info:u=void 0}=e,{elem_id:a=""}=e,{elem_classes:r=[]}=e,{visible:b=!0}=e,{value:c=""}=e,{lines:i}=e,{placeholder:o=""}=e,{show_label:h}=e,{max_lines:S}=e,{type:T="text"}=e,{container:x=!0}=e,{scale:B=null}=e,{min_width:j=void 0}=e,{show_copy_button:q=!1}=e,{loading_status:C=void 0}=e,{value_is_output:d=!1}=e,{rtl:F=!1}=e,{text_align:G=void 0}=e,{autofocus:H=!1}=e,{autoscroll:N=!0}=e;function X(s){c=s,t(0,c)}function Z(s){d=s,t(1,d)}const z=()=>n.dispatch("change",c),A=()=>n.dispatch("input"),D=()=>n.dispatch("submit"),E=()=>n.dispatch("blur"),I=s=>n.dispatch("select",s.detail),J=()=>n.dispatch("focus");return l.$$set=s=>{"gradio"in s&&t(2,n=s.gradio),"label"in s&&t(3,f=s.label),"info"in s&&t(4,u=s.info),"elem_id"in s&&t(5,a=s.elem_id),"elem_classes"in s&&t(6,r=s.elem_classes),"visible"in s&&t(7,b=s.visible),"value"in s&&t(0,c=s.value),"lines"in s&&t(8,i=s.lines),"placeholder"in s&&t(9,o=s.placeholder),"show_label"in s&&t(10,h=s.show_label),"max_lines"in s&&t(11,S=s.max_lines),"type"in s&&t(12,T=s.type),"container"in s&&t(13,x=s.container),"scale"in s&&t(14,B=s.scale),"min_width"in s&&t(15,j=s.min_width),"show_copy_button"in s&&t(16,q=s.show_copy_button),"loading_status"in s&&t(17,C=s.loading_status),"value_is_output"in s&&t(1,d=s.value_is_output),"rtl"in s&&t(18,F=s.rtl),"text_align"in s&&t(19,G=s.text_align),"autofocus"in s&&t(20,H=s.autofocus),"autoscroll"in s&&t(21,N=s.autoscroll)},[c,d,n,f,u,a,r,b,i,o,h,S,T,x,B,j,q,C,F,G,H,N,X,Z,z,A,D,E,I,J]}class ae extends K{constructor(e){super(),L(this,e,ue,ne,M,{gradio:2,label:3,info:4,elem_id:5,elem_classes:6,visible:7,value:0,lines:8,placeholder:9,show_label:10,max_lines:11,type:12,container:13,scale:14,min_width:15,show_copy_button:16,loading_status:17,value_is_output:1,rtl:18,text_align:19,autofocus:20,autoscroll:21})}get gradio(){return this.$$.ctx[2]}set gradio(e){this.$$set({gradio:e}),_()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),_()}get info(){return this.$$.ctx[4]}set info(e){this.$$set({info:e}),_()}get elem_id(){return this.$$.ctx[5]}set elem_id(e){this.$$set({elem_id:e}),_()}get elem_classes(){return this.$$.ctx[6]}set elem_classes(e){this.$$set({elem_classes:e}),_()}get visible(){return this.$$.ctx[7]}set visible(e){this.$$set({visible:e}),_()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),_()}get lines(){return this.$$.ctx[8]}set lines(e){this.$$set({lines:e}),_()}get placeholder(){return this.$$.ctx[9]}set placeholder(e){this.$$set({placeholder:e}),_()}get show_label(){return this.$$.ctx[10]}set show_label(e){this.$$set({show_label:e}),_()}get max_lines(){return this.$$.ctx[11]}set max_lines(e){this.$$set({max_lines:e}),_()}get type(){return this.$$.ctx[12]}set type(e){this.$$set({type:e}),_()}get container(){return this.$$.ctx[13]}set container(e){this.$$set({container:e}),_()}get scale(){return this.$$.ctx[14]}set scale(e){this.$$set({scale:e}),_()}get min_width(){return this.$$.ctx[15]}set min_width(e){this.$$set({min_width:e}),_()}get show_copy_button(){return this.$$.ctx[16]}set show_copy_button(e){this.$$set({show_copy_button:e}),_()}get loading_status(){return this.$$.ctx[17]}set loading_status(e){this.$$set({loading_status:e}),_()}get value_is_output(){return this.$$.ctx[1]}set value_is_output(e){this.$$set({value_is_output:e}),_()}get rtl(){return this.$$.ctx[18]}set rtl(e){this.$$set({rtl:e}),_()}get text_align(){return this.$$.ctx[19]}set text_align(e){this.$$set({text_align:e}),_()}get autofocus(){return this.$$.ctx[20]}set autofocus(e){this.$$set({autofocus:e}),_()}get autoscroll(){return this.$$.ctx[21]}set autoscroll(e){this.$$set({autoscroll:e}),_()}}const ge=ae;export{ge as default};
//# sourceMappingURL=index-dcfd2011.js.map
