import{_ as u,f as b}from"./index.b0bc66d4.js";import{I as k}from"./index.2c264b52.js";import{u as w}from"./index.13acc08f.js";import{H as x,o as s,ad as a,F as m,ae as h,ac as y,a7 as g,d as o,N as i,e as C}from"./vendor.01b03999.js";const $=["l50","l40","l30","l20","l10","","d10","d20","d30","d40"],F=[{name:"red",english:"Red"},{name:"orange",english:"Orange"},{name:"brown",english:"Brown"},{name:"yellow",english:"Yellow"},{name:"canary",english:"Canary"},{name:"bud",english:"Bud"},{name:"green",english:"Green"},{name:"turquoise",english:"Turquoise"},{name:"cyan",english:"Cyan"},{name:"glacier",english:"Glacier"},{name:"blue",english:"Blue"},{name:"indigo",english:"Indigo"},{name:"purple",english:"Purple"},{name:"magenta",english:"Magenta"},{name:"graphite",english:"Graphite"},{name:"grey",english:"Grey"}],I=x({name:"GlobalColors",setup(){const{copy:e}=w();return{colors:F,levels:$,copy:e}}}),G={class:"global-color"},B=["onClick"];function A(e,r,p,c,_,f){return s(),a("div",G,[(s(!0),a(m,null,h(e.colors,(t,l)=>(s(),a("div",{key:l,class:"global-color-row"},[(s(!0),a(m,null,h(e.levels,n=>(s(),a("span",{key:n,class:y(["global-color-col","global-color-"+t.name+(n?"-"+n:"")]),onClick:d=>e.copy(t.name+(n?"-"+n:""))},g(t.name)+g(n?"-"+n:""),11,B))),128))]))),128))])}var j=u(I,[["render",A]]);const L={setup(){return{goLink:r=>{window&&(window.location.hash=r)}}}},N={class:"markdown"},z=C("\u8272\u5F69"),E=o("span",{class:"subtitle"},null,-1),V={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IDuxFE/idux/edit/main/docs/Color.zh.md",target:"_blank",rel:"noopener noreferrer"},q={class:"markdown"},v=o("h3",{id:"\u57FA\u7840\u8272\u677F"},[o("span",null,"\u57FA\u7840\u8272\u677F"),o("a",{onclick:"window.location.hash = '\u57FA\u7840\u8272\u677F'",class:"anchor"},"#")],-1);function D(e,r,p,c,_,f){const t=b,l=k,n=j;return s(),a("article",N,[o("h1",null,[z,E,o("a",V,[i(t,{name:"edit"})])]),i(l,{class:"toc-wrapper",affix:"",offset:"16",onClick:r[0]||(r[0]=d=>c.goLink(d))}),o("section",q,[v,i(n)])])}var P=u(L,[["render",D]]);export{P as default};
