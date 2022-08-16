import{u as A,A as z,P as k,N as U,R as F}from"./render-a3268961.mjs";import{t as E}from"./use-id-2e145a0f.mjs";import{o as y}from"./keyboard-c50452c7.mjs";import{x as J,a as I}from"./calculate-active-index-130b59fd.mjs";import{o as h}from"./dom-d07dd68d.mjs";import{c as G,l as N,p as Q}from"./open-closed-60cf01bc.mjs";import{b as W}from"./use-resolve-button-type-ce49ba4d.mjs";import{p as X}from"./use-tree-walker-4dae729b.mjs";import{w as Y}from"./focus-management-a746db8b.mjs";import{T as Z}from"./use-outside-click-e9d95a18.mjs";import{m as ee,p as oe}from"./hidden-2d29a848.mjs";import{e as te}from"./form-a0e06e57.mjs";import{i as B,j as w,k as R,x as b,y as _,m as q,F as le,l as M,v as ae,z as ne,A as V,q as ue,p as ie}from"./entry-e833c832.mjs";import"./owner-ef86f285.mjs";import"./use-window-event-e76f3a5c.mjs";var re=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(re||{}),se=(l=>(l[l.Single=0]="Single",l[l.Multi=1]="Multi",l))(se||{}),pe=(l=>(l[l.Pointer=0]="Pointer",l[l.Other=1]="Other",l))(pe||{});let K=Symbol("ComboboxContext");function D(l){let x=ue(K,null);if(x===null){let O=new Error(`<${l} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(O,D),O}return x}let Pe=B({name:"Combobox",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]},name:{type:String},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(l,{slots:x,attrs:O,emit:g}){let e=w(1),o=w(null),d=w(null),S=w(null),c=w(null),s=w({static:!1,hold:!1}),t=w([]),p=w(null),f=w(1),P=w(!1);function v(u=i=>i){let i=p.value!==null?t.value[p.value]:null,r=Y(u(t.value.slice()),m=>h(m.dataRef.domRef)),n=i?r.indexOf(i):null;return n===-1&&(n=null),{options:r,activeOptionIndex:n}}let T=R(()=>l.modelValue),$=R(()=>l.multiple?1:0),j=R(()=>l.nullable),a={comboboxState:e,value:T,mode:$,compare(u,i){return u===i},nullable:j,inputRef:d,labelRef:o,buttonRef:S,optionsRef:c,disabled:R(()=>l.disabled),options:t,change(u){g("update:modelValue",u)},activeOptionIndex:R(()=>{if(P.value&&p.value===null&&t.value.length>0){let u=t.value.findIndex(i=>!i.dataRef.disabled);if(u!==-1)return u}return p.value}),activationTrigger:f,inputPropsRef:w({displayValue:void 0}),optionsPropsRef:s,closeCombobox(){P.value=!1,!l.disabled&&e.value!==1&&(e.value=1,p.value=null)},openCombobox(){if(P.value=!0,l.disabled||e.value===0)return;let u=t.value.findIndex(i=>{let r=b(i.dataRef.value);return A($.value,{[0]:()=>a.compare(b(a.value.value),b(r)),[1]:()=>b(a.value.value).some(n=>a.compare(b(n),b(r)))})});u!==-1&&(p.value=u),e.value=0},goToOption(u,i,r){if(P.value=!1,l.disabled||c.value&&!s.value.static&&e.value===1)return;let n=v();if(n.activeOptionIndex===null){let C=n.options.findIndex(L=>!L.dataRef.disabled);C!==-1&&(n.activeOptionIndex=C)}let m=J(u===I.Specific?{focus:I.Specific,id:i}:{focus:u},{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});p.value=m,f.value=r!=null?r:1,t.value=n.options},syncInputValue(){var u;let i=a.value.value;if(!h(a.inputRef))return;let r=a.inputPropsRef.value.displayValue;typeof r=="function"?a.inputRef.value.value=(u=r(i))!=null?u:"":typeof i=="string"?a.inputRef.value.value=i:a.inputRef.value.value=""},selectOption(u){let i=t.value.find(n=>n.id===u);if(!i)return;let{dataRef:r}=i;g("update:modelValue",A($.value,{[0]:()=>r.value,[1]:()=>{let n=b(a.value.value).slice(),m=b(r.value),C=n.indexOf(m);return C===-1?n.push(m):n.splice(C,1),n}})),a.syncInputValue()},selectActiveOption(){if(a.activeOptionIndex.value===null)return;let{dataRef:u,id:i}=t.value[a.activeOptionIndex.value];g("update:modelValue",A($.value,{[0]:()=>u.value,[1]:()=>{let r=b(a.value.value).slice(),n=b(u.value),m=r.indexOf(n);return m===-1?r.push(n):r.splice(m,1),r}})),a.syncInputValue(),a.goToOption(I.Specific,i)},registerOption(u,i){let r={id:u,dataRef:i},n=v(m=>[...m,r]);if(p.value===null){let m=i.value.value;A($.value,{[0]:()=>a.compare(b(a.value.value),b(m)),[1]:()=>b(a.value.value).some(C=>a.compare(b(C),b(m)))})&&(n.activeOptionIndex=n.options.indexOf(r))}t.value=n.options,p.value=n.activeOptionIndex,f.value=1},unregisterOption(u){let i=v(r=>{let n=r.findIndex(m=>m.id===u);return n!==-1&&r.splice(n,1),r});t.value=i.options,p.value=i.activeOptionIndex,f.value=1}};Z([d,S,c],()=>a.closeCombobox(),R(()=>e.value===0)),_([a.value,a.inputRef],()=>a.syncInputValue(),{immediate:!0}),_(a.comboboxState,u=>{u===1&&a.syncInputValue()},{immediate:!0}),ie(K,a),G(R(()=>A(e.value,{[0]:N.Open,[1]:N.Closed})));let H=R(()=>a.activeOptionIndex.value===null?null:t.value[a.activeOptionIndex.value].dataRef.value);return()=>{let{name:u,modelValue:i,disabled:r,...n}=l,m={open:e.value===0,disabled:r,activeIndex:a.activeOptionIndex.value,activeOption:H.value};return q(le,[...u!=null&&i!=null?te({[u]:i}).map(([C,L])=>q(ee,z({features:oe.Hidden,key:C,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:C,value:L}))):[],k({theirProps:{...O,...U(n,["nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:m,slots:x,attrs:O,name:"Combobox"})])}}}),Te=B({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(l,{attrs:x,slots:O}){let g=D("ComboboxLabel"),e=`headlessui-combobox-label-${E()}`;function o(){var d;(d=h(g.inputRef))==null||d.focus({preventScroll:!0})}return()=>{let d={open:g.comboboxState.value===0,disabled:g.disabled.value},S={id:e,ref:g.labelRef,onClick:o};return k({ourProps:S,theirProps:l,slot:d,attrs:x,slots:O,name:"ComboboxLabel"})}}}),we=B({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"}},setup(l,{attrs:x,slots:O,expose:g}){let e=D("ComboboxButton"),o=`headlessui-combobox-button-${E()}`;g({el:e.buttonRef,$el:e.buttonRef});function d(s){e.disabled.value||(e.comboboxState.value===0?e.closeCombobox():(s.preventDefault(),e.openCombobox()),V(()=>{var t;return(t=h(e.inputRef))==null?void 0:t.focus({preventScroll:!0})}))}function S(s){switch(s.key){case y.ArrowDown:s.preventDefault(),s.stopPropagation(),e.comboboxState.value===1&&e.openCombobox(),V(()=>{var t;return(t=e.inputRef.value)==null?void 0:t.focus({preventScroll:!0})});return;case y.ArrowUp:s.preventDefault(),s.stopPropagation(),e.comboboxState.value===1&&(e.openCombobox(),V(()=>{e.value.value||e.goToOption(I.Last)})),V(()=>{var t;return(t=e.inputRef.value)==null?void 0:t.focus({preventScroll:!0})});return;case y.Escape:if(e.comboboxState.value!==0)return;s.preventDefault(),e.optionsRef.value&&!e.optionsPropsRef.value.static&&s.stopPropagation(),e.closeCombobox(),V(()=>{var t;return(t=e.inputRef.value)==null?void 0:t.focus({preventScroll:!0})});return}}let c=W(R(()=>({as:l.as,type:x.type})),e.buttonRef);return()=>{var s,t;let p={open:e.comboboxState.value===0,disabled:e.disabled.value},f={ref:e.buttonRef,id:o,type:c.value,tabindex:"-1","aria-haspopup":!0,"aria-controls":(s=h(e.optionsRef))==null?void 0:s.id,"aria-expanded":e.disabled.value?void 0:e.comboboxState.value===0,"aria-labelledby":e.labelRef.value?[(t=h(e.labelRef))==null?void 0:t.id,o].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:S,onClick:d};return k({ourProps:f,theirProps:l,slot:p,attrs:x,slots:O,name:"ComboboxButton"})}}}),$e=B({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function}},emits:{change:l=>!0},setup(l,{emit:x,attrs:O,slots:g,expose:e}){let o=D("ComboboxInput"),d=`headlessui-combobox-input-${E()}`;o.inputPropsRef=R(()=>l),e({el:o.inputRef,$el:o.inputRef});function S(t){switch(t.key){case y.Backspace:case y.Delete:if(o.mode.value!==0||!o.nullable.value)return;let p=t.currentTarget;requestAnimationFrame(()=>{if(p.value===""){o.change(null);let f=h(o.optionsRef);f&&(f.scrollTop=0),o.goToOption(I.Nothing)}});break;case y.Enter:if(o.comboboxState.value!==0)return;if(t.preventDefault(),t.stopPropagation(),o.activeOptionIndex.value===null){o.closeCombobox();return}o.selectActiveOption(),o.mode.value===0&&o.closeCombobox();break;case y.ArrowDown:return t.preventDefault(),t.stopPropagation(),A(o.comboboxState.value,{[0]:()=>o.goToOption(I.Next),[1]:()=>o.openCombobox()});case y.ArrowUp:return t.preventDefault(),t.stopPropagation(),A(o.comboboxState.value,{[0]:()=>o.goToOption(I.Previous),[1]:()=>{o.openCombobox(),V(()=>{o.value.value||o.goToOption(I.Last)})}});case y.Home:case y.PageUp:return t.preventDefault(),t.stopPropagation(),o.goToOption(I.First);case y.End:case y.PageDown:return t.preventDefault(),t.stopPropagation(),o.goToOption(I.Last);case y.Escape:if(o.comboboxState.value!==0)return;t.preventDefault(),o.optionsRef.value&&!o.optionsPropsRef.value.static&&t.stopPropagation(),o.closeCombobox();break;case y.Tab:if(o.comboboxState.value!==0)return;o.selectActiveOption(),o.closeCombobox();break}}function c(t){x("change",t)}function s(t){o.openCombobox(),x("change",t)}return()=>{var t,p,f,P,v,T;let $={open:o.comboboxState.value===0},j={"aria-controls":(t=o.optionsRef.value)==null?void 0:t.id,"aria-expanded":o.disabled.value?void 0:o.comboboxState.value===0,"aria-activedescendant":o.activeOptionIndex.value===null||(p=o.options.value[o.activeOptionIndex.value])==null?void 0:p.id,"aria-multiselectable":o.mode.value===1?!0:void 0,"aria-labelledby":(v=(f=h(o.labelRef))==null?void 0:f.id)!=null?v:(P=h(o.buttonRef))==null?void 0:P.id,id:d,onKeydown:S,onChange:c,onInput:s,role:"combobox",type:(T=O.type)!=null?T:"text",tabIndex:0,ref:o.inputRef},a=U(l,["displayValue"]);return k({ourProps:j,theirProps:a,slot:$,attrs:O,slots:g,features:F.RenderStrategy|F.Static,name:"ComboboxInput"})}}}),Ae=B({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(l,{attrs:x,slots:O,expose:g}){let e=D("ComboboxOptions"),o=`headlessui-combobox-options-${E()}`;g({el:e.optionsRef,$el:e.optionsRef}),M(()=>{e.optionsPropsRef.value.static=l.static}),M(()=>{e.optionsPropsRef.value.hold=l.hold});let d=Q(),S=R(()=>d!==null?d.value===N.Open:e.comboboxState.value===0);return X({container:R(()=>h(e.optionsRef)),enabled:R(()=>e.comboboxState.value===0),accept(c){return c.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(c){c.setAttribute("role","none")}}),()=>{var c,s,t,p;let f={open:e.comboboxState.value===0},P={"aria-activedescendant":e.activeOptionIndex.value===null||(c=e.options.value[e.activeOptionIndex.value])==null?void 0:c.id,"aria-labelledby":(p=(s=h(e.labelRef))==null?void 0:s.id)!=null?p:(t=h(e.buttonRef))==null?void 0:t.id,id:o,ref:e.optionsRef,role:"listbox"},v=U(l,["hold"]);return k({ourProps:P,theirProps:v,slot:f,attrs:x,slots:O,features:F.RenderStrategy|F.Static,visible:S.value,name:"ComboboxOptions"})}}}),Ve=B({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(l,{slots:x,attrs:O,expose:g}){let e=D("ComboboxOption"),o=`headlessui-combobox-option-${E()}`,d=w(null);g({el:d,$el:d});let S=R(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===o:!1),c=R(()=>A(e.mode.value,{[0]:()=>e.compare(b(e.value.value),b(l.value)),[1]:()=>b(e.value.value).some(v=>e.compare(b(v),b(l.value)))})),s=R(()=>({disabled:l.disabled,value:l.value,domRef:d}));ae(()=>e.registerOption(o,s)),ne(()=>e.unregisterOption(o)),M(()=>{e.comboboxState.value===0&&(!S.value||e.activationTrigger.value!==0&&V(()=>{var v,T;return(T=(v=h(d))==null?void 0:v.scrollIntoView)==null?void 0:T.call(v,{block:"nearest"})}))});function t(v){var T;if(l.disabled)return v.preventDefault();e.selectOption(o),e.mode.value===0&&(e.closeCombobox(),(T=h(e.inputRef))==null||T.focus({preventScroll:!0}))}function p(){if(l.disabled)return e.goToOption(I.Nothing);e.goToOption(I.Specific,o)}function f(){l.disabled||S.value||e.goToOption(I.Specific,o,0)}function P(){l.disabled||!S.value||e.optionsPropsRef.value.hold||e.goToOption(I.Nothing)}return()=>{let{disabled:v}=l,T={active:S.value,selected:c.value,disabled:v},$={id:o,ref:d,role:"option",tabIndex:v===!0?void 0:-1,"aria-disabled":v===!0?!0:void 0,"aria-selected":c.value===!0?c.value:void 0,disabled:void 0,onClick:t,onFocus:p,onPointermove:f,onMousemove:f,onPointerleave:P,onMouseleave:P};return k({ourProps:$,theirProps:l,slot:T,attrs:O,slots:x,name:"ComboboxOption"})}}});export{Pe as Combobox,we as ComboboxButton,$e as ComboboxInput,Te as ComboboxLabel,Ve as ComboboxOption,Ae as ComboboxOptions};
