var a=Object.defineProperty;var d=(s,e,r)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var i=(s,e,r)=>(d(s,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function u(s){return s*2}const m=u(5);console.log("Ex5: Doubled:",m);class f{constructor(e,r){i(this,"brand");i(this,"model");this.brand=e,this.model=r}startEngine(){console.log(`Ex7: ${this.brand} ${this.model} engine started.`)}}const p=new f("Toyota","Camry");p.startEngine();class h{constructor(e,r,n){i(this,"itemName");i(this,"itemId");i(this,"price");this.itemName=e,this.itemId=r,this.price=n}displayDetails(){console.log(`Ex4: Item ID: ${this.itemId}, Name: ${this.itemName}, Price: $${this.price}`)}}const l=new h("Smartwatch",123,150);l.itemName="Desktop";l.displayDetails();