import{e as f}from"./owner-ef86f285.mjs";import{l as d}from"./entry-e833c832.mjs";function N({container:e,accept:r,walk:l,enabled:t}){d(()=>{let a=e.value;if(!a||t!==void 0&&!t.value)return;let c=f(e);if(!c)return;let n=Object.assign(i=>r(i),{acceptNode:r}),o=c.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,n,!1);for(;o.nextNode();)l(o.currentNode)})}export{N as p};
