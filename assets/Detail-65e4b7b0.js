import{d as $,p as N,q as D,s as j,x as L,w,u as t,y as q,o as _,a as h,b as n,e as m,h as V,i as U,v as x,r as O,z as y,_ as T,P as H,A as J,B as I,c as R,D as Y,t as F,E as P,j as A,G as B,H as z,F as K,I as M,J as G,l as Q,m as X,M as Z,n as W,K as ee,f as te,L as ne,N as oe,O as se}from"./index-597dfed2.js";import{u as le}from"./resume-list-0edfe613.js";function ae(){const i=()=>document.querySelectorAll("style")[0].innerHTML,o=r=>{const c=document.querySelector(r);if(!c)throw new Error(`Element with selector "${r}" not found`);return c.outerHTML};return{printElement:r=>{const c=o(r),e=window.open("","_blank");e==null||e.document.write(`
           <html>
           <head>
           <link href="https://fonts.googleapis.com/css2?family=Lato&family=Lora&family=Montserrat&family=PT+Sans+Narrow:wght@400;700&family=Poppins&display=swap" rel="stylesheet">
           <title>${123123}
           </title>
             <style>${i()}</style>
             </head>
             <body>
               ${c}
             </body>
             </html>
           `),e==null||e.document.close(),e==null||e.focus(),e==null||e.print(),setTimeout(()=>{e==null||e.close()},50)}}}const ce={class:"dropdown dropdown-end"},re={class:"flex flex-wrap justify-center align-center dropdown-content shadow bg-base-100 rounded-box"},ie=["onClick"],ue=$({__name:"IconSelector",props:{modelValue:null,icons:null},emits:["update:modelValue"],setup(i,{emit:o}){const s=i,r=N(),c=D(s,"modelValue",o),[e,v]=j(),b=()=>{e.value&&v()},a=d=>{c.value=d,v()};return L(()=>{Boolean(c.value)||(c.value=s.icons.at(0)||"image-times")}),(d,p)=>{const l=O("unicon");return w((_(),h("div",ce,[n("button",{class:"btn-sm",onClick:p[0]||(p[0]=u=>t(v)())},[m(l,{name:t(c),fill:t(r).color.code},null,8,["name","fill"])]),w(n("div",re,[(_(!0),h(V,null,U(i.icons,u=>(_(),h("div",{key:u,class:"p-1 cursor-pointer",onClick:C=>a(u)},[m(l,{name:u,fill:t(r).color.code},null,8,["name","fill"])],8,ie))),128))],512),[[x,t(e)]])])),[[t(q),b]])}}}),me={class:"flex items-center justify-center flex-wrap relative px-2"},de={class:"print:ml-2"},pe={class:"absolute right-0"},_e=["onClick"],ve={class:"absolute bottom-[-1rem] left-0 print:hidden"},he=$({__name:"ResumeContact",props:{modelValue:null,fullSize:{type:Boolean}},emits:["update:modelValue","add","remove"],setup(i,{emit:o}){const s=i,r=D(s,"modelValue",o),c=["phone","envelope","map-marker","github"],e=()=>{r.value=[...r.value,{icon:"phone",value:""}],o("add",r.value)},v=a=>{r.value=r.value.filter((f,d)=>d!==a),o("remove",r.value)},b="min-width: 50px; max-width: 90%";return(a,f)=>{const d=O("unicon");return _(),h("div",me,[(_(!0),h(V,null,U(t(r),(p,l)=>(_(),h("div",{key:l,class:y(["flex items-center mb-2 relative",{"w-1/2":!s.fullSize,"justify-center flex-wrap":s.fullSize}])},[n("div",de,[m(ue,{modelValue:p.icon,"onUpdate:modelValue":u=>p.icon=u,icons:c},null,8,["modelValue","onUpdate:modelValue"])]),m(T,{modelValue:p.value,"onUpdate:modelValue":u=>p.value=u,style:b,class:"min-w-full print:text-center"},null,8,["modelValue","onUpdate:modelValue"]),n("div",pe,[n("button",{class:"action btn btn-square btn-warning btn-xs print:opacity-0",onClick:u=>v(l)},[m(d,{name:"multiply",class:"text-xs",fill:"black","hover-fill":"white"})],8,_e)])],2))),128)),n("div",ve,[n("button",{class:"btn btn-square btn-outline btn-primary btn-xs",onClick:e},[m(d,{name:"plus",fill:t(H),"hover-fill":"white"},null,8,["fill"])])])])}}}),be=["src"],fe=$({__name:"ResumePhoto",props:{label:{default:"update"},modelValue:null},emits:["update:modelValue"],setup(i,{emit:o}){const s=i,r=J(),c=D(s,"modelValue",o),e=I({token:"123456798",name:"avatar"}),[v,b]=j(),a=R(()=>Boolean(r.img)),f=R(()=>Boolean(r["button-actions"])),d=u=>{c.value=u||""},p=u=>{c.value=u},l=()=>{p("")};return(u,C)=>{const g=O("my-upload");return _(),h(V,null,[m(g,{field:"img",modelValue:t(v),"onUpdate:modelValue":C[0]||(C[0]=S=>Y(v)?v.value=S:null),params:e.value,langType:"eng",onCropSuccess:d,"img-format":"png"},null,8,["modelValue","params"]),w(n("img",{src:t(c)},null,8,be),[[x,!t(a)]]),w(n("button",{class:"btn btn-primary btn-sm",onClick:C[1]||(C[1]=S=>t(b)())},F(s.label),513),[[x,!t(f)]]),P(u.$slots,"img",{img:t(c)}),P(u.$slots,"button-actions",{update:t(b),remove:l})],64)}}}),ge={class:"text-center",tabindex:"0"},ye={class:"w-auto h-36 border flex align-baseline content-center object-cover"},we=["src"],Ce=["onClick"],xe=["onClick"],$e=$({__name:"ResumeMainInfo",props:{modelValue:null},emits:["update:modelValue","add","remove"],setup(i,{emit:o}){const s=i,r=N(),c=I(""),e=D(s,"modelValue",o),v=()=>{var a;const b=Boolean((a=c.value)==null?void 0:a.length);return{contacts:{"w-4/5":b,"w-full":!b},photo:{"w-1/5 pl-2 flex items-center justify-center":b}}};return R(()=>`color: ${r.color}`),(b,a)=>{const f=O("unicon");return _(),A(z,null,{default:B(({focus:d})=>[n("div",{class:y(["flex items-center relative",{"shadow-2xl":d}])},[n("div",{class:y(v().contacts)},[n("div",ge,[m(T,{modelValue:t(e).fullName,"onUpdate:modelValue":a[0]||(a[0]=p=>t(e).fullName=p),class:y([t(r).color.text,"text-2xl font-bold"])},null,8,["modelValue","class"]),m(T,{modelValue:t(e).position,"onUpdate:modelValue":a[1]||(a[1]=p=>t(e).position=p),class:y([t(r).color.text,"text-xl"])},null,8,["modelValue","class"])]),n("div",{class:y({"action-hide":!d})},[m(he,{"full-size":!t(e).img,modelValue:t(e).contacts,"onUpdate:modelValue":a[2]||(a[2]=p=>t(e).contacts=p)},null,8,["full-size","modelValue"])],2)],2),n("div",{class:y(v().photo)},[m(fe,{modelValue:t(e).img,"onUpdate:modelValue":a[3]||(a[3]=p=>t(e).img=p),label:"update-photo"},{img:B(()=>[w(n("div",ye,[n("img",{src:t(e).img,alt:"user-photo"},null,8,we)],512),[[x,t(e).img]])]),"button-actions":B(({update:p,remove:l})=>[n("div",{class:y(["flex justify-center",{hidden:!d}])},[n("button",{class:y(["btn btn-accent btn-sm absolute transform top-0 right-0",{"right-12":t(e).img}]),onClick:u=>p()},[w(m(f,{name:"camera-plus",fill:"white"},null,512),[[x,!t(e).img]]),w(m(f,{name:"camera-change",fill:"white"},null,512),[[x,t(e).img]])],10,Ce),w(n("button",{class:"btn btn-accent btn-sm absolute transform top-0 right-0",onClick:u=>l()},[m(f,{name:"camera-slash",fill:"white"})],8,xe),[[x,t(e).img]])],2)]),_:2},1032,["modelValue"])],2)],2)]),_:1})}}}),Se=n("div",{class:"text-center"},[n("small",null,"Fonts")],-1),Ve=["value"],ke=$({__name:"FontSelector",setup(i){const o=N(),s=I(K[0]);return M(s,o.setFont,{deep:!0}),(r,c)=>(_(),h("div",null,[Se,w(n("select",{className:"select select-bordered w-full max-w-xs","onUpdate:modelValue":c[0]||(c[0]=e=>s.value=e)},[(_(!0),h(V,null,U(t(o).fonts,e=>(_(),h("option",{key:e.value,value:e},F(e.label),9,Ve))),128))],512),[[G,s.value]])]))}}),Ee=n("div",{class:"text-center"},[n("small",null,"Colors")],-1),Re=["onClick"],Ne=$({__name:"ColorSelector",setup(i){const o=N(),s=c=>{o.setColor(c)},r=c=>{var e;return c===((e=o.color)==null?void 0:e.label)?"m-2":"drop-shadow-xl m-1"};return(c,e)=>(_(),h(V,null,[Ee,(_(!0),h(V,null,U(t(o).colors,v=>(_(),h("div",{key:v.code,class:y(["p-4 my-2 cursor-pointer",`${v.bg} ${r(v.label)}`]),onClick:b=>s(v)},null,10,Re))),128))],64))}}),Ue={class:"flex justify-around bg-white z-50"},Be={class:"w-100"},Oe=n("li",null,[n("div",{class:"text-center"},[n("small",null,"Elements")])],-1),Me=["onClick"],Te={class:"my-2"},De=$({__name:"Sidebar",emits:["add"],setup(i,{emit:o}){const s=N(),r=R(()=>s.resumeElements),c=e=>{s.addResumeElement(e),o("add",e.name)};return(e,v)=>(_(),h("div",Ue,[n("ul",Be,[Oe,(_(!0),h(V,null,U(t(r),b=>(_(),h("li",{key:b.name,class:"w-100"},[n("button",{class:"btn btn-outline btn-success btn-wide",onClick:a=>c(b)},F(b.name),9,Me)]))),128)),n("li",Te,[m(ke)]),n("li",null,[m(Ne)])])]))}}),Ie={class:"flex p-1 bg-white"},Fe=n("span",{class:"text-black"},"Remove",-1),Pe=[Fe],je=$({__name:"ElementActions",emits:["remove"],setup(i,{emit:o}){const s=()=>{o("remove")};return(r,c)=>(_(),h("div",Ie,[n("button",{class:"btn btn-sm btn-warning btn-wide",onClick:s},Pe)]))}}),Ae=i=>JSON.parse(JSON.stringify(i)),ze=Q("resume-content",()=>{const i=X("resume-content-state",{main:Z,dynamic:{}}),o=a=>ee.includes(a)?te[a]:null;return{resumeContentState:i,create:({id:a,name:f})=>{const d=o(f);d&&(i.value.dynamic={...i.value.dynamic,[a]:JSON.parse(JSON.stringify(d))})},remove:a=>{const f=W.omit(i.value.dynamic,[a]);i.value={...i.value,...f}},addContent:({id:a,name:f})=>{var l;const d=(l=o(f))==null?void 0:l.data,p=i.value.dynamic[a];!Array.isArray(d)||!d[0]||p.data.push(Ae(d[0]))},removeContent:({id:a,index:f})=>{i.value.dynamic[a].data.splice(f,1)},addContents:a=>{i.value={...i.value.dynamic,...a}},setContents:a=>{i.value=a}}}),Le={class:"flex justify-center max-w-[1240px] mx-auto pb-12 bg-slate-100"},qe={class:"bg-white print:hidden"},He={class:"mt-8 shadow-sm"},Je={class:"mx-auto h-[90vh] overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-primary scrollbar-track-white bg-white print:h-auto"},Ye={class:"resume-detail overflow-x-hidden w-[990px] bg-white mx-auto border border-solid border-gray-300 p-4"},Ke={class:"bg-white px-6 z-10"},Ge={class:"absolute top-[-4.6rem] right-0 z-30 bg-white w-11"},Qe=["onClick"],Xe=["onClick"],Ze={class:"element-actions absolute left-1/2 transform -translate-x-1/2"},We=$({__name:"MainForm",setup(i){const o=N(),s=ze(),r=le(),c=se(),e=R(()=>{var l;return(l=c==null?void 0:c.params)==null?void 0:l.id.toString()}),{printElement:v}=ae();M(e,()=>{if(!e)return;const l=r.getResume(e==null?void 0:e.value);l&&(o.setColor(l.color),o.setFont(l.font),o.setResumeElements(l==null?void 0:l.elements),s.setContents(l==null?void 0:l.content))},{immediate:!0}),M(()=>o.currentElements,(l,u)=>{if(l.length<=u.length)return;const C=l.at(-1);C&&s.create(C)},{deep:!0});const b=R(()=>({color:o.color,font:o.font,elements:o.currentElements,content:s.resumeContentState}));M(b,()=>{r.setResume({...b.value,id:e.value})});const a=l=>{o.removeResumeElement(l),s.remove(l)},f=(l,u)=>{s.removeContent({index:l,id:u})},d=l=>l!==0,p=l=>l!==o.currentElements.length-1;return(l,u)=>{const C=O("unicon");return _(),h("div",Le,[n("div",qe,[n("div",null,[m(De),n("div",He,[n("button",{class:"btn btn-sm btn-wide btn-primary",onClick:u[0]||(u[0]=g=>t(v)(".resume-detail"))},[ne(" Print "),m(C,{name:"print",fill:"white"})])])])]),n("div",Je,[n("div",Ye,[m($e,{modelValue:t(s).resumeContentState.main,"onUpdate:modelValue":u[1]||(u[1]=g=>t(s).resumeContentState.main=g)},null,8,["modelValue"]),(_(!0),h(V,null,U(t(o).currentElements,(g,S)=>(_(),h("div",{key:g.id,class:"my-6"},[m(z,null,{header:B(()=>[n("div",{class:y(["flex justify-center items-center py-4 my-2 container-title-line",`variant-${t(o).color.label}`])},[n("div",Ke,[m(T,{modelValue:t(s).resumeContentState.dynamic[g.id].title,"onUpdate:modelValue":E=>t(s).resumeContentState.dynamic[g.id].title=E,class:y(["container-title-input",t(o).color.text])},null,8,["modelValue","onUpdate:modelValue","class"])])],2)]),default:B(({focus:E})=>[n("div",{class:y(["relative bg-white",{"action-hide":!E,"shadow-2xl":E}])},[w(n("div",Ge,[w(n("button",{onClick:k=>t(o).swapOrder(Number(S),S-1),class:"btn btn-primary rotate-180 btn-sm mb-1"},[m(C,{name:"angle-double-down",fill:"white"})],8,Qe),[[x,d(S)]]),w(n("button",{onClick:k=>t(o).swapOrder(Number(S),S+1),class:"btn btn-primary btn-sm"},[m(C,{name:"angle-double-down",fill:"white"})],8,Xe),[[x,p(S)]])],512),[[x,E]]),w(n("div",Ze,[m(je,{onRemove:k=>a(g.id)},null,8,["onRemove"])],512),[[x,E]]),(_(),A(oe(g.component),{modelValue:t(s).resumeContentState.dynamic[g.id].data,"onUpdate:modelValue":k=>t(s).resumeContentState.dynamic[g.id].data=k,onAdd:k=>t(s).addContent(g),onRemove:k=>f(k,g.id)},null,40,["modelValue","onUpdate:modelValue","onAdd","onRemove"]))],2)]),_:2},1024)]))),128))])])])}}}),et={class:"resume-content"},ot=$({__name:"Detail",setup(i){return(o,s)=>(_(),h("div",null,[n("div",et,[m(We)])]))}});export{ot as default};