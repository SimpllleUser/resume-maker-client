import{l as t,m as r,n as u}from"./index-597dfed2.js";const m=t("resume-list",()=>{const s=r("resumes",[])||[];return{resumes:s,addResume:e=>{s.value=[...s.value,e]},getResume:e=>u.find(s.value,{id:e})||null,setResume:e=>{if(!e)return;const n=u.findIndex(s.value,{id:e.id});s.value=u.assign([],{...s.value,[n]:e})},removeResume:e=>{e.id&&(s.value=u.differenceBy(s.value,[e]))}}});export{m as u};