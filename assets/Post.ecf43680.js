import{d as h,f as n,c,a as t,u as g,p as m,g as x,h as f,_ as i,t as d,r as v,o as P,w as S,v as I,F as T,i as B,j as p}from"./index.912be17a.js";import{a as $,s as w}from"./index.7f816fe0.js";const N="/mdx12c.github.io/assets/Logo.7e0ac421.svg",y=s=>(m("data-v-10ca9bea"),s=s(),x(),s),k={class:"header glass"},L={class:"logo"},V=["src"],C=y(()=>t("h1",null,[f("MDX"),t("span",null,"12"),f("C")],-1)),M=y(()=>t("i",{class:"bx bx-log-out-circle bx-rotate-180"},null,-1)),E=[M],O=h({__name:"header",setup(s){const e=()=>{localStorage.clear(),location.assign("/")};return(a,r)=>(n(),c("div",k,[t("div",L,[t("img",{src:g(N),alt:"logo"},null,8,V),C]),t("button",{onClick:e},E)]))}});const K=i(O,[["__scopeId","data-v-10ca9bea"]]),D={class:"userPanel glass"},U={class:"avatar"},F={class:"username"},H=h({__name:"userPanel",setup(s){const e=localStorage.getItem("username");return(a,r)=>{var u,o;return n(),c("div",D,[t("div",U,d((o=(u=g(e))==null?void 0:u.split("").at(0))==null?void 0:o.toUpperCase()),1),t("div",F,d(g(e)),1)])}}});const j=i(H,[["__scopeId","data-v-95ef4512"]]),q=async s=>{try{return(await $({method:"POST",url:`${w}/post/`,data:{TOKEN:s}})).data.data}catch{return alert("Something went wrong, try once later!"),null}},A=async s=>{try{const e=await $({method:"PUT",url:`${w}/post`,data:{TOKEN:localStorage.getItem("TOKEN"),data:s}});return console.log(e.data),e.data}catch{return alert("Something went wrong, try once later!"),null}},G=s=>(m("data-v-54dea2a6"),s=s(),x(),s),W={class:"posts"},X={class:"newPost glass"},z=["innerHTML"],J={class:"postList"},Q={class:"post glass"},R={class:"title"},Y={class:"avatar"},Z={class:"username"},tt={class:"content"},st=G(()=>t("div",{class:"functions"},[t("div",{class:"replies"},[t("i",{class:"bx bx-reply"})])],-1)),et=h({__name:"posts",setup(s){const e=v([]),a=v(""),r=v("Post");P(()=>{const o=localStorage.getItem("TOKEN");q(String(o)).then(_=>{console.log(_),e.value=_})});const u=()=>{if(a.value=="")return;alert(`Confirm Posting:
 Are you sure to post new post?`);const o={author:String(localStorage.getItem("username")),content:a.value,title:""};console.log(o),r.value="<i class='bx bxs-circle-quarter bx-spin' ></i>",A(o).then(_=>{r.value="Post",location.reload()})};return(o,_)=>(n(),c("div",W,[t("div",X,[S(t("textarea",{"onUpdate:modelValue":_[0]||(_[0]=l=>a.value=l),placeholder:"Say something..."},null,512),[[I,a.value]]),t("button",{onClick:u,innerHTML:r.value},null,8,z)]),t("div",J,[(n(!0),c(T,null,B(e.value,l=>(n(),c("div",Q,[t("div",R,[t("div",Y,d(l.author.split("").at(0)),1),t("div",Z,d(l.author),1)]),t("div",tt,d(l.content),1),st]))),256))])]))}});const ot=i(et,[["__scopeId","data-v-54dea2a6"]]);const at={},b=s=>(m("data-v-7cc39afb"),s=s(),x(),s),nt={class:"linkBoard glass"},ct=b(()=>t("h1",null,"Links Board",-1)),_t=b(()=>t("div",{class:"list"},[t("a",{href:"https://www3.mingdao.edu.tw/"},"Mingdao Website")],-1)),rt=[ct,_t];function lt(s,e){return n(),c("div",nt,rt)}const dt=i(at,[["render",lt],["__scopeId","data-v-7cc39afb"]]),it={class:"postPage"},ut={class:"content"},pt=h({__name:"Post",setup(s){return(e,a)=>(n(),c("div",it,[p(K),t("div",ut,[p(j),p(ot),p(dt)])]))}});const gt=i(pt,[["__scopeId","data-v-07643010"]]);export{gt as default};