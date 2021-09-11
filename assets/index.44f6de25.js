import{t as e,c as a,v as l,w as n,j as o}from"./index.6d01456d.js";import{G as r,z as s,H as u,K as t,a2 as c,x as i,E as d}from"./vendor.1dc7622a.js";const p=Symbol("checkboxGroupToken"),b={control:e,autofocus:a.bool.def(!1),checked:a.oneOfType([String,Number,Boolean]).def(!1),disabled:a.bool,indeterminate:a.bool.def(!1),label:a.string,trueValue:a.oneOfType([String,Number,Boolean]).def(!0),falseValue:a.oneOfType([String,Number,Boolean]).def(!1),value:a.string,"onUpdate:checked":a.emit(),onChange:a.emit(),onBlur:a.emit(),onFocus:a.emit()},v={control:e,value:a.arrayOf(a.oneOfType([String,Number])).def((()=>[])),disabled:a.bool.def(!1),name:a.string,options:a.array(),"onUpdate:value":a.emit(),onChange:a.emit()};var h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;"undefined"!=typeof require&&require;var m=r({name:"IxCheckbox",props:b,inheritAttrs:!1,setup(e,{attrs:a,expose:l,slots:n}){const o=s(p,null),r=u((()=>{var e;return null!=(e=a.name)?e:null==o?void 0:o.props.name})),{isChecked:i,isDisabled:d,handleChange:b,handleBlur:v,handleFocus:m}=k(e,o),O=y(e,i,d),{inputRef:C,focus:B,blur:V}=g();return l({focus:B,blur:V}),()=>{const l=n.default?n.default():e.label,o=l?t("span",{class:"ix-checkbox-label"},[l]):void 0,s=a,{class:u,style:p,type:k,tabindex:y}=s,g=((e,a)=>{var l={};for(var n in e)f.call(e,n)&&a.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&h)for(var n of h(e))a.indexOf(n)<0&&x.call(e,n)&&(l[n]=e[n]);return l})(s,["class","style","type","tabindex"]);return t("label",{class:[O.value,u],style:p,role:"checkbox","aria-checked":i.value,"aria-disabled":d.value},[t("span",{class:"ix-checkbox-input-wrapper"},[t("input",c({ref:C,type:"checkbox",class:"ix-checkbox-input","aria-hidden":!0},g,{autofocus:e.autofocus,name:r.value,value:e.value,checked:i.value,disabled:d.value,onChange:b,onBlur:v,onFocus:m}),null),t("span",{class:"ix-checkbox-inner",tabindex:y},null)]),o])}}});const k=(e,a)=>{let r,s,t,c;if(a){const{props:l,accessor:n}=a;r=u((()=>{var a,l;return null==(l=n.value)?void 0:l.includes(null!=(a=e.value)?a:e.trueValue)})),s=u((()=>{var a;return null!=(a=e.disabled)?a:n.disabled})),c=a=>{o(e.onBlur,a),n.markAsBlurred()},t=a=>{const r=a.target.checked?e.trueValue:e.falseValue,s=e.value,u=[...n.value],t=n.value.indexOf(s);-1===t?u.push(s):u.splice(t,1),o(e.onChange,r),o(l.onChange,u),n.setValue(u)}}else{const{accessor:a}=l({valueKey:"checked"});n(),r=u((()=>a.value===e.trueValue)),s=u((()=>a.disabled)),c=l=>{o(e.onBlur,l),a.markAsBlurred()},t=l=>{const n=l.target.checked?e.trueValue:e.falseValue;o(e.onChange,n),a.setValue(n)}}return{isChecked:r,isDisabled:s,handleChange:t,handleBlur:c,handleFocus:a=>o(e.onFocus,a)}},y=(e,a,l)=>u((()=>{const n=l.value,o=a.value,r=e.indeterminate;return{"ix-checkbox":!0,"ix-checkbox-disabled":!!n,"ix-checkbox-indeterminate":!!r,"ix-checkbox-checked":!r&&o}})),g=()=>{const e=i();return{inputRef:e,focus:a=>{var l;return null==(l=e.value)?void 0:l.focus(a)},blur:()=>{var a;return null==(a=e.value)?void 0:a.blur()}}};var O=r({name:"IxCheckboxGroup",props:v,setup(e,{slots:a}){const{accessor:o}=l();return n(),d(p,{props:e,accessor:o}),()=>{var l;const n=e.options?e.options.map((e=>t(m,e,null))):null==(l=a.default)?void 0:l.call(a);return t("div",{class:"ix-checkbox-group"},[n])}}});const C=m,B=O;export{C as I,B as a};
