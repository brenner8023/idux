import{I as G,a as I}from"./index.2c264b52.js";import{u as h,_ as g,a as D,e as v,q as z,f as N,I as P,b as T}from"./index.b0bc66d4.js";import{_}from"./GlobalCodeBox.75cd63e4.js";import{H as f,o as c,ad as i,a7 as A,D as B,r as F,c as b,w as u,a8 as E,N as o,d as n,e as s,F as S,y as j}from"./vendor.01b03999.js";import"./index.13acc08f.js";const K=f({setup(){return{buttonConfig:h("button")}}});function q(a,t,k,p,C,d){return c(),i("p",null,"Default size of button: "+A(a.buttonConfig.size),1)}var L=g(K,[["render",q]]);const V=f({name:"components-config-Basic",components:{"raw-demo":L},setup(){const{lang:a}=B(D);return{lang:a}}}),R={key:0},M=n("p",null,"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",-1),Q=[M],U={key:1},H=n("p",null,"The simplest usage.",-1),J=[H],O=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Default size of button: {{ buttonConfig.size }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useGlobalConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/components/config'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" buttonConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'button'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" buttonConfig "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function W(a,t,k,p,C,d){const e=F("raw-demo"),l=_;return c(),b(l,{packageName:"components",componentName:"config",demoName:"Basic",code:"%3Ctemplate%3E%0A%20%20%3Cp%3EDefault%20size%20of%20button%3A%20%7B%7B%20buttonConfig.size%20%7D%7D%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20useGlobalConfig%20%7D%20from%20'%40idux%2Fcomponents%2Fconfig'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20buttonConfig%20%3D%20useGlobalConfig('button')%0A%20%20%20%20return%20%7B%20buttonConfig%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"\u57FA\u672C\u4F7F\u7528":"Basic usage"},{description:u(()=>[a.lang==="zh"?(c(),i("span",R,Q)):E("",!0),a.lang==="en"?(c(),i("span",U,J)):E("",!0)]),rawCode:u(()=>[o(e)]),highlightCode:u(()=>[O]),_:1},8,["title"])}var X=g(V,[["render",W]]);const Y=f({setup(){const{config:a,changeConfig:t}=h("button",{size:"large"});return{config:a,changeConfig:t}}}),Z=n("br",null,null,-1),nn=s("Small"),sn=s("Medium"),an=s("Large");function tn(a,t,k,p,C,d){const e=v,l=z;return c(),i(S,null,[n("p",null,"Default size of button: "+A(a.config.size),1),Z,o(l,null,{default:u(()=>[o(e,{onClick:t[0]||(t[0]=r=>a.changeConfig({size:"small"}))},{default:u(()=>[nn]),_:1}),o(e,{onClick:t[1]||(t[1]=r=>a.changeConfig({size:"medium"}))},{default:u(()=>[sn]),_:1}),o(e,{onClick:t[2]||(t[2]=r=>a.changeConfig({size:"large"}))},{default:u(()=>[an]),_:1})]),_:1})],64)}var on=g(Y,[["render",tn]]);const un=f({name:"components-config-ChangeConfig",components:{"raw-demo":on},setup(){const{lang:a}=B(D);return{lang:a}}}),en={key:0},cn=n("p",null,[s("\u4F7F\u7528 "),n("code",null,"changeConfig"),s(" \u6765\u52A8\u6001\u7684\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u3002")],-1),pn=[cn],ln={key:1},kn=n("p",null,[s("Via "),n("code",null,"changeConfig"),s(" to dynamically modify the default configuration.")],-1),rn=[kn],gn=n("div",null,[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Default size of button: {{ config.size }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxSpace")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeConfig({ size: "),n("span",{class:"token punctuation"},"'"),s("small"),n("span",{class:"token punctuation"},"'"),s(" })"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeConfig({ size: "),n("span",{class:"token punctuation"},"'"),s("medium"),n("span",{class:"token punctuation"},"'"),s(" })"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Medium"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IxButton")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeConfig({ size: "),n("span",{class:"token punctuation"},"'"),s("large"),n("span",{class:"token punctuation"},"'"),s(" })"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxButton")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("IxSpace")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useGlobalConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/components/config'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" config"),n("span",{class:"token punctuation"},","),s(" changeConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'button'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" size"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'large'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" config"),n("span",{class:"token punctuation"},","),s(" changeConfig "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function Cn(a,t,k,p,C,d){const e=F("raw-demo"),l=_;return c(),b(l,{packageName:"components",componentName:"config",demoName:"ChangeConfig",code:"%3Ctemplate%3E%0A%20%20%3Cp%3EDefault%20size%20of%20button%3A%20%7B%7B%20config.size%20%7D%7D%3C%2Fp%3E%0A%20%20%3Cbr%20%2F%3E%0A%20%20%3CIxSpace%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22changeConfig(%7B%20size%3A%20'small'%20%7D)%22%3ESmall%3C%2FIxButton%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22changeConfig(%7B%20size%3A%20'medium'%20%7D)%22%3EMedium%3C%2FIxButton%3E%0A%20%20%20%20%3CIxButton%20%40click%3D%22changeConfig(%7B%20size%3A%20'large'%20%7D)%22%3ELarge%3C%2FIxButton%3E%0A%20%20%3C%2FIxSpace%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0A%0Aimport%20%7B%20useGlobalConfig%20%7D%20from%20'%40idux%2Fcomponents%2Fconfig'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20%7B%20config%2C%20changeConfig%20%7D%20%3D%20useGlobalConfig('button'%2C%20%7B%20size%3A%20'large'%20%7D)%0A%20%20%20%20return%20%7B%20config%2C%20changeConfig%20%7D%0A%20%20%7D%2C%0A%7D)%0A%3C%2Fscript%3E%0A",title:a.lang==="zh"?"\u4FEE\u6539\u914D\u7F6E":"Change config"},{description:u(()=>[a.lang==="zh"?(c(),i("span",en,pn)):E("",!0),a.lang==="en"?(c(),i("span",ln,rn)):E("",!0)]),rawCode:u(()=>[o(e)]),highlightCode:u(()=>[gn]),_:1},8,["title"])}var dn=g(un,[["render",Cn]]);const fn={name:"Democonfig",components:{Basic:X,ChangeConfig:dn},setup(){const a=p=>{window&&(window.location.hash=p)},t=j(!1);return{goLink:a,expanded:t,expandAll:()=>{t.value=!t.value}}}},Fn=s(),En=s(),mn={class:"markdown header-wrapper"},hn=s("Config"),Dn=n("span",{class:"subtitle"},"\u5168\u5C40\u914D\u7F6E",-1),_n={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IDuxFE/idux/edit/main/components/config/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},An=n("section",{class:"markdown"},[n("p",null,[s("\u6211\u4EEC\u7ED9\u4F17\u591A\u7EC4\u4EF6\u6DFB\u52A0\u4E86"),n("strong",null,"\u5168\u5C40\u914D\u7F6E"),s("\u529F\u80FD\u3002")]),n("p",null,"\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u6765\u5B9A\u4E49\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4ECE\u800C\u51CF\u5C11\u5728\u6A21\u677F\u4E2D\u9700\u8981\u5199\u7684\u4EE3\u7801\u3002"),n("p",null,"\u652F\u6301\u5728\u8FD0\u884C\u65F6\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u9879\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5C40\u90E8\u8986\u76D6\u5168\u5C40\u914D\u7F6E\u9879\u3002"),n("h2",{id:"\u5982\u4F55\u4F7F\u7528"},[n("span",null,"\u5982\u4F55\u4F7F\u7528"),n("a",{onclick:"window.location.hash = '\u5982\u4F55\u4F7F\u7528'",class:"anchor"},"#")]),n("h3",{id:"\u5168\u5C40\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E"},[n("span",null,"\u5168\u5C40\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E"),n("a",{onclick:"window.location.hash = '\u5168\u5C40\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E'",class:"anchor"},"#")]),n("p",null,[s("\u5982\u679C\u4F60\u60F3\u8981\u5728\u5168\u5C40\u8303\u56F4\u5185\u4E3A\u67D0\u4E2A\u7EC4\u4EF6\u63D0\u4F9B\u9ED8\u8BA4\u914D\u7F6E\u9879\uFF0C\u8BF7\u5728\u4F7F\u7528 "),n("code",null,"createGlobalConfig"),s(", \u8FDB\u884C\u8986\u76D6\uFF0C\u4F8B\u5982\uFF1A")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token comment"},"// main.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createGlobalConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@idux/components/config'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" globalConfig "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createGlobalConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  button`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" size"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'large'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("globalConfig"),n("span",{class:"token punctuation"},")")])]),n("h3",{id:"\u5C40\u90E8\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E"},[n("span",null,"\u5C40\u90E8\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E"),n("a",{onclick:"window.location.hash = '\u5C40\u90E8\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E'",class:"anchor"},"#")]),n("p",null,[s("\u5982\u679C\u4F60\u53EA\u60F3\u8981\u518D\u67D0\u4E2A\u7EC4\u4EF6\u5185\u63D0\u4F9B\u9ED8\u8BA4\u914D\u7F6E\u9879\uFF0C\u5C31\u5728\u5F53\u524D\u7EC4\u4EF6\u5185\u4F7F\u7528 "),n("code",null,"useGlobalConfig"),s(" \u8FDB\u884C\u8986\u76D6\uFF0C\u8BF7\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\u3002")])],-1),Bn=n("span",null,"\u4EE3\u7801\u6F14\u793A",-1),bn={class:"example-wrapper"},wn=n("section",{class:"markdown api-wrapper"},[n("h2",{id:"API"},[n("span",null,"API"),n("a",{onclick:"window.location.hash = 'API'",class:"anchor"},"#")]),n("h3",{id:"createGlobalConfig"},[n("span",null,"createGlobalConfig"),n("a",{onclick:"window.location.hash = 'createGlobalConfig'",class:"anchor"},"#")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" Plugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" GlobalConfig"),n("span",{class:"token punctuation"},","),s(" GlobalConfigKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./types'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"DeepPartialGlobalConfig"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"K"),s(),n("span",{class:"token keyword"},"in"),s(" GlobalConfigKey"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Partial"),n("span",{class:"token operator"},"<"),s("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"K"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/**
 * \u521B\u5EFA\u5168\u5C40\u914D\u7F6E\u63D2\u4EF6
 *
 * @param config \u7528\u4E8E\u8986\u76D6\u9ED8\u8BA4\u7684\u5168\u5C40\u914D\u7F6E
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"createGlobalConfig"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token operator"},":"),s(" DeepPartialGlobalConfig"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" Plugin"),n("span",{class:"token punctuation"},";")])]),n("h3",{id:"useGlobalConfig"},[n("span",null,"useGlobalConfig"),n("a",{onclick:"window.location.hash = 'useGlobalConfig'",class:"anchor"},"#")]),n("pre",{class:"language-ts"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" Plugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" GlobalConfig"),n("span",{class:"token punctuation"},","),s(" GlobalConfigKey "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./types'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},[s("UseGlobalConfig"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token keyword"},"extends"),s(" GlobalConfigKey"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * \u5F53\u524D\u7EC4\u4EF6\u7684\u5168\u5C40\u914D\u7F6E
   */`),s(`
  config`),n("span",{class:"token operator"},":"),s(" Readonly"),n("span",{class:"token operator"},"<"),s("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},`/**
   * \u66F4\u6539\u5F53\u524D\u7EC4\u4EF6\u7684\u5168\u5C40\u914D\u7F6E
   */`),s(`
  `),n("span",{class:"token function-variable function"},"changeConfig"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token operator"},":"),s(" Partial"),n("span",{class:"token operator"},"<"),s("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 *
 * @param compName \u7EC4\u4EF6\u540D\u79F0
 * @param config \u53EF\u9009\u7684\u53C2\u6570\uFF0C\u7528\u4E8E\u8986\u76D6\u67D0\u4E2A\u7EC4\u4EF6\u7684\u5168\u5C40\u914D\u7F6E\uFF0C\u4EC5\u5728\u5F53\u524D\u7EC4\u4EF6(\u8C03\u7528\u8005)\u4F5C\u7528\u57DF\u5185\u751F\u6548
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token keyword"},"extends"),s(" GlobalConfigKey"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("compName"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Readonly"),n("span",{class:"token operator"},"<"),s("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useGlobalConfig"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token keyword"},"extends"),s(" GlobalConfigKey"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("compName"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token operator"},":"),s(" Partial"),n("span",{class:"token operator"},"<"),s("GlobalConfig"),n("span",{class:"token punctuation"},"["),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" UseGlobalConfig"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";")])]),n("blockquote",null,[n("p",null,[s("\u9700\u8981\u6CE8\u610F\u7684\u662F: "),n("code",null,"useGlobalConfig"),s(" \u53C2\u6570\u7C7B\u578B\u4E0D\u540C\u7684\u8FD4\u56DE\u7ED3\u679C\u4E5F\u4E0D\u540C\u3002")])]),n("h2",{id:"FAQ"},[n("span",null,"FAQ"),n("a",{onclick:"window.location.hash = 'FAQ'",class:"anchor"},"#")]),n("h3",{id:"\u4F18\u5148\u7EA7\u8BF4\u660E"},[n("span",null,"\u4F18\u5148\u7EA7\u8BF4\u660E"),n("a",{onclick:"window.location.hash = '\u4F18\u5148\u7EA7\u8BF4\u660E'",class:"anchor"},"#")]),n("p",null,"\u5BF9\u4E8E\u4EFB\u4F55\u4E00\u4E2A\u5C5E\u6027\u6765\u8BF4\uFF0C\u5404\u4E2A\u6765\u6E90\u7684\u503C\u7684\u4F18\u5148\u7EA7\u5982\u4E0B\uFF1A"),n("ol",null,[n("li",null,[s("\u7EC4\u4EF6\u7684\u67D0\u4E2A\u5B9E\u4F8B\u5355\u72EC\u8BBE\u7F6E\u7684\u503C, \u4F8B\u5982\uFF1A"),n("code",null,'<IxButton size="small" />')]),n("li",null,[s("\u4E1A\u52A1\u7EC4\u4EF6\u901A\u8FC7 "),n("code",null,"useGlobalConfig"),s(" \u8986\u76D6\u7684\u5168\u5C40\u914D\u7F6E, \u4F8B\u5982\u4EE3\u7801\u6F14\u793A\u4E2D\u7684\u793A\u4F8B")]),n("li",null,[s("\u901A\u8FC7 "),n("code",null,"createGlobalConfig"),s(" \u8BBE\u7F6E\u7684\u5168\u5C40\u914D\u7F6E")]),n("li",null,[n("code",null,"@idux"),s(" \u63D0\u4F9B\u7684\u9ED8\u8BA4\u5168\u5C40\u914D\u7F6E")])]),n("h3",{id:"\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684\u5168\u5C40\u914D\u7F6E\u9879"},[n("span",null,"\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684\u5168\u5C40\u914D\u7F6E\u9879"),n("a",{onclick:"window.location.hash = '\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684\u5168\u5C40\u914D\u7F6E\u9879'",class:"anchor"},"#")]),n("p",null,[n("a",{href:"https://github.com/IDuxFE/idux/blob/master/packages/components/core/config/types.ts",target:"_blank",rel:"noopener"},[n("code",null,"GlobalConfig")]),s(" \u63A5\u53E3\u63D0\u4F9B\u7684\u7C7B\u578B\u5B9A\u4E49\u4FE1\u606F\u80FD\u591F\u5E2E\u52A9\u4F60\u627E\u5230\u6240\u6709\u652F\u6301\u5168\u5C40\u914D\u7F6E\u9879\u7684\u7EC4\u4EF6\u548C\u5C5E\u6027\u3002")]),n("p",null,"\u53E6\u5916\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6587\u6863\u90FD\u4F1A\u6307\u51FA\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u9879\u7684\u65B9\u5F0F\u6307\u5B9A\u3002")],-1);function yn(a,t,k,p,C,d){const e=I,l=G,r=N,w=F("Basic"),y=F("ChangeConfig"),x=T,$=P;return c(),i("article",null,[o(l,{class:"toc-wrapper",affix:"",offset:"16",onClick:t[0]||(t[0]=m=>p.goLink(m))},{default:u(()=>[o(e,{href:"#components-config-demo-Basic",title:"\u57FA\u672C\u4F7F\u7528"}),Fn,o(e,{href:"#components-config-demo-ChangeConfig",title:"\u4FEE\u6539\u914D\u7F6E"}),En,o(e,{href:"#API",title:"API"})]),_:1}),n("section",mn,[n("h1",null,[hn,Dn,n("a",_n,[o(r,{name:"edit"})])]),An,n("h2",null,[Bn,o(r,{name:"appstore",class:"code-box-expand-trigger",title:"\u5C55\u5F00\u5168\u90E8",onClick:t[1]||(t[1]=m=>p.expandAll())})])]),n("section",bn,[o($,{gutter:"8"},{default:u(()=>[o(x,{span:"24"},{default:u(()=>[o(w),o(y)]),_:1})]),_:1})]),wn])}var zn=g(fn,[["render",yn]]);export{zn as default};
