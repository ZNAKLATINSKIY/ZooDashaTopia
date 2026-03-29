(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},mr=[],rn=()=>{},$f=()=>!1,wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ta=t=>t.startsWith("onUpdate:"),et=Object.assign,Cc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ty=Object.prototype.hasOwnProperty,Ce=(t,e)=>ty.call(t,e),oe=Array.isArray,gr=t=>zi(t)==="[object Map]",Ia=t=>zi(t)==="[object Set]",bh=t=>zi(t)==="[object Date]",he=t=>typeof t=="function",We=t=>typeof t=="string",hn=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Hf=t=>(Pe(t)||he(t))&&he(t.then)&&he(t.catch),Wf=Object.prototype.toString,zi=t=>Wf.call(t),ny=t=>zi(t).slice(8,-1),zf=t=>zi(t)==="[object Object]",Sc=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sy=/-\w/g,vt=Aa(t=>t.replace(sy,e=>e.slice(1).toUpperCase())),ry=/\B([A-Z])/g,Js=Aa(t=>t.replace(ry,"-$1").toLowerCase()),ba=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),yl=Aa(t=>t?`on${ba(t)}`:""),vn=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Kf=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ca=t=>{const e=parseFloat(t);return isNaN(e)?t:e},iy=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let Ch;const Sa=()=>Ch||(Ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=We(s)?cy(s):Rc(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(We(t)||Pe(t))return t}const oy=/;(?![^(]*\))/g,ay=/:([^]+)/,ly=/\/\*[^]*?\*\//g;function cy(t){const e={};return t.replace(ly,"").split(oy).forEach(n=>{if(n){const s=n.split(ay);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ie(t){let e="";if(We(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const s=Ie(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hy=bc(uy);function Gf(t){return!!t||t===""}function dy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ki(t[s],e[s]);return n}function Ki(t,e){if(t===e)return!0;let n=bh(t),s=bh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=hn(t),s=hn(e),n||s)return t===e;if(n=oe(t),s=oe(e),n||s)return n&&s?dy(t,e):!1;if(n=Pe(t),s=Pe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ki(t[o],e[o]))return!1}}return String(t)===String(e)}function fy(t,e){return t.findIndex(n=>Ki(n,e))}const Qf=t=>!!(t&&t.__v_isRef===!0),O=t=>We(t)?t:t==null?"":oe(t)||Pe(t)&&(t.toString===Wf||!he(t.toString))?Qf(t)?O(t.value):JSON.stringify(t,Yf,2):String(t),Yf=(t,e)=>Qf(e)?Yf(t,e.value):gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[vl(s,i)+" =>"]=r,n),{})}:Ia(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vl(n))}:hn(e)?vl(e):Pe(e)&&!oe(e)&&!zf(e)?String(e):e,vl=(t,e="")=>{var n;return hn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class py{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){++this._on===1&&(this.prevScope=Tt,Tt=this)}off(){this._on>0&&--this._on===0&&(Tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function my(){return Tt}let De;const El=new WeakSet;class Jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,El.has(this)&&(El.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sh(this),ep(this);const e=De,n=$t;De=this,$t=!0;try{return this.fn()}finally{tp(this),De=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vc(e);this.deps=this.depsTail=void 0,Sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?El.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ql(this)&&this.run()}get dirty(){return ql(this)}}let Xf=0,vi,Ei;function Zf(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=vi,vi=t}function Pc(){Xf++}function kc(){if(--Xf>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tp(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Vc(s),gy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function ql(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(np(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function np(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ki)||(t.globalVersion=ki,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ql(t))))return;t.flags|=2;const e=t.dep,n=De,s=$t;De=t,$t=!0;try{ep(t);const r=t.fn(t._value);(e.version===0||vn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{De=n,$t=s,tp(t),t.flags&=-3}}function Vc(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function gy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const sp=[];function Cn(){sp.push($t),$t=!1}function Sn(){const t=sp.pop();$t=t===void 0?!0:t}function Sh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let ki=0;class _y{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!De||!$t||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new _y(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,ip(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=s)}return n}trigger(e){this.version++,ki++,this.notify(e)}notify(e){Pc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kc()}}}function ip(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ip(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $l=new WeakMap,Fs=Symbol(""),Hl=Symbol(""),Vi=Symbol("");function ht(t,e,n){if($t&&De){let s=$l.get(t);s||$l.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new rp),r.map=s,r.key=n),r.track()}}function En(t,e,n,s,r,i){const o=$l.get(t);if(!o){ki++;return}const l=c=>{c&&c.trigger()};if(Pc(),e==="clear")o.forEach(l);else{const c=oe(t),h=c&&Sc(n);if(c&&n==="length"){const f=Number(s);o.forEach((m,E)=>{(E==="length"||E===Vi||!hn(E)&&E>=f)&&l(m)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Vi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Fs)),gr(t)&&l(o.get(Hl)));break;case"delete":c||(l(o.get(Fs)),gr(t)&&l(o.get(Hl)));break;case"set":gr(t)&&l(o.get(Fs));break}}kc()}function or(t){const e=Re(t);return e===t?e:(ht(e,"iterate",Vi),Ht(t)?e:e.map(Rn))}function Ra(t){return ht(t=Re(t),"iterate",Vi),t}function nn(t,e){return us(t)?br(Us(t)?Rn(e):e):Rn(e)}const yy={__proto__:null,[Symbol.iterator](){return wl(this,Symbol.iterator,t=>nn(this,t))},concat(...t){return or(this).concat(...t.map(e=>oe(e)?or(e):e))},entries(){return wl(this,"entries",t=>(t[1]=nn(this,t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(s=>nn(this,s)),arguments)},find(t,e){return mn(this,"find",t,e,n=>nn(this,n),arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,n=>nn(this,n),arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Tl(this,"includes",t)},indexOf(...t){return Tl(this,"indexOf",t)},join(t){return or(this).join(t)},lastIndexOf(...t){return Tl(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...t){return ii(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return ii(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return ii(this,"splice",t)},toReversed(){return or(this).toReversed()},toSorted(t){return or(this).toSorted(t)},toSpliced(...t){return or(this).toSpliced(...t)},unshift(...t){return ii(this,"unshift",t)},values(){return wl(this,"values",t=>nn(this,t))}};function wl(t,e,n){const s=Ra(t),r=s[e]();return s!==t&&!Ht(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const vy=Array.prototype;function mn(t,e,n,s,r,i){const o=Ra(t),l=o!==t&&!Ht(t),c=o[e];if(c!==vy[e]){const m=c.apply(t,i);return l?Rn(m):m}let h=n;o!==t&&(l?h=function(m,E){return n.call(this,nn(t,m),E,t)}:n.length>2&&(h=function(m,E){return n.call(this,m,E,t)}));const f=c.call(o,h,s);return l&&r?r(f):f}function Rh(t,e,n,s){const r=Ra(t),i=r!==t&&!Ht(t);let o=n,l=!1;r!==t&&(i?(l=s.length===0,o=function(h,f,m){return l&&(l=!1,h=nn(t,h)),n.call(this,h,nn(t,f),m,t)}):n.length>3&&(o=function(h,f,m){return n.call(this,h,f,m,t)}));const c=r[e](o,...s);return l?nn(t,c):c}function Tl(t,e,n){const s=Re(t);ht(s,"iterate",Vi);const r=s[e](...n);return(r===-1||r===!1)&&xc(n[0])?(n[0]=Re(n[0]),s[e](...n)):r}function ii(t,e,n=[]){Cn(),Pc();const s=Re(t)[e].apply(t,n);return kc(),Sn(),s}const Ey=bc("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hn));function wy(t){hn(t)||(t=String(t));const e=Re(this);return ht(e,"has",t),e.hasOwnProperty(t)}class ap{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Vy:hp:i?up:cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=oe(e);if(!r){let c;if(o&&(c=yy[n]))return c;if(n==="hasOwnProperty")return wy}const l=Reflect.get(e,n,Et(e)?e:s);if((hn(n)?op.has(n):Ey(n))||(r||ht(e,"get",n),i))return l;if(Et(l)){const c=o&&Sc(n)?l:l.value;return r&&Pe(c)?zl(c):c}return Pe(l)?r?zl(l):Nc(l):l}}class lp extends ap{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=oe(e)&&Sc(n);if(!this._isShallow){const h=us(i);if(!Ht(s)&&!us(s)&&(i=Re(i),s=Re(s)),!o&&Et(i)&&!Et(s))return h||(i.value=s),!0}const l=o?Number(n)<e.length:Ce(e,n),c=Reflect.set(e,n,s,Et(e)?e:r);return e===Re(r)&&(l?vn(s,i)&&En(e,"set",n,s):En(e,"add",n,s)),c}deleteProperty(e,n){const s=Ce(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&En(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!hn(n)||!op.has(n))&&ht(e,"has",n),s}ownKeys(e){return ht(e,"iterate",oe(e)?"length":Fs),Reflect.ownKeys(e)}}class Ty extends ap{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Iy=new lp,Ay=new Ty,by=new lp(!0);const Wl=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function Cy(t,e,n){return function(...s){const r=this.__v_raw,i=Re(r),o=gr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=r[t](...s),f=n?Wl:e?br:Rn;return!e&&ht(i,"iterate",c?Hl:Fs),et(Object.create(h),{next(){const{value:m,done:E}=h.next();return E?{value:m,done:E}:{value:l?[f(m[0]),f(m[1])]:f(m),done:E}}})}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Sy(t,e){const n={get(r){const i=this.__v_raw,o=Re(i),l=Re(r);t||(vn(r,l)&&ht(o,"get",r),ht(o,"get",l));const{has:c}=Eo(o),h=e?Wl:t?br:Rn;if(c.call(o,r))return h(i.get(r));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ht(Re(r),"iterate",Fs),r.size},has(r){const i=this.__v_raw,o=Re(i),l=Re(r);return t||(vn(r,l)&&ht(o,"has",r),ht(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Re(l),h=e?Wl:t?br:Rn;return!t&&ht(c,"iterate",Fs),l.forEach((f,m)=>r.call(i,h(f),h(m),o))}};return et(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(r){const i=Re(this),o=Eo(i),l=Re(r),c=!e&&!Ht(r)&&!us(r)?l:r;return o.has.call(i,c)||vn(r,c)&&o.has.call(i,r)||vn(l,c)&&o.has.call(i,l)||(i.add(c),En(i,"add",c,c)),this},set(r,i){!e&&!Ht(i)&&!us(i)&&(i=Re(i));const o=Re(this),{has:l,get:c}=Eo(o);let h=l.call(o,r);h||(r=Re(r),h=l.call(o,r));const f=c.call(o,r);return o.set(r,i),h?vn(i,f)&&En(o,"set",r,i):En(o,"add",r,i),this},delete(r){const i=Re(this),{has:o,get:l}=Eo(i);let c=o.call(i,r);c||(r=Re(r),c=o.call(i,r)),l&&l.call(i,r);const h=i.delete(r);return c&&En(i,"delete",r,void 0),h},clear(){const r=Re(this),i=r.size!==0,o=r.clear();return i&&En(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Cy(r,t,e)}),n}function Dc(t,e){const n=Sy(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ce(n,r)&&r in s?n:s,r,i)}const Ry={get:Dc(!1,!1)},Py={get:Dc(!1,!0)},ky={get:Dc(!0,!1)};const cp=new WeakMap,up=new WeakMap,hp=new WeakMap,Vy=new WeakMap;function Dy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ny(t){return t.__v_skip||!Object.isExtensible(t)?0:Dy(ny(t))}function Nc(t){return us(t)?t:Oc(t,!1,Iy,Ry,cp)}function Oy(t){return Oc(t,!1,by,Py,up)}function zl(t){return Oc(t,!0,Ay,ky,hp)}function Oc(t,e,n,s,r){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Ny(t);if(i===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,i===2?s:n);return r.set(t,l),l}function Us(t){return us(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function us(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function xc(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function xy(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Kf(t,"__v_skip",!0),t}const Rn=t=>Pe(t)?Nc(t):t,br=t=>Pe(t)?zl(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function My(t){return Et(t)?t.value:t}const Ly={get:(t,e,n)=>e==="__v_raw"?t:My(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Et(r)&&!Et(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function dp(t){return Us(t)?t:new Proxy(t,Ly)}class Fy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new rp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ki-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Zf(this,!0),!0}get value(){const e=this.dep.track();return np(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uy(t,e,n=!1){let s,r;return he(t)?s=t:(s=t.get,r=t.set),new Fy(s,r,n)}const To={},Wo=new WeakMap;let Ns;function By(t,e=!1,n=Ns){if(n){let s=Wo.get(n);s||Wo.set(n,s=[]),s.push(t)}}function jy(t,e,n=Ve){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,h=J=>r?J:Ht(J)||r===!1||r===0?wn(J,1):wn(J);let f,m,E,R,S=!1,L=!1;if(Et(t)?(m=()=>t.value,S=Ht(t)):Us(t)?(m=()=>h(t),S=!0):oe(t)?(L=!0,S=t.some(J=>Us(J)||Ht(J)),m=()=>t.map(J=>{if(Et(J))return J.value;if(Us(J))return h(J);if(he(J))return c?c(J,2):J()})):he(t)?e?m=c?()=>c(t,2):t:m=()=>{if(E){Cn();try{E()}finally{Sn()}}const J=Ns;Ns=f;try{return c?c(t,3,[R]):t(R)}finally{Ns=J}}:m=rn,e&&r){const J=m,le=r===!0?1/0:r;m=()=>wn(J(),le)}const H=my(),X=()=>{f.stop(),H&&H.active&&Cc(H.effects,f)};if(i&&e){const J=e;e=(...le)=>{J(...le),X()}}let Y=L?new Array(t.length).fill(To):To;const te=J=>{if(!(!(f.flags&1)||!f.dirty&&!J))if(e){const le=f.run();if(r||S||(L?le.some((_e,b)=>vn(_e,Y[b])):vn(le,Y))){E&&E();const _e=Ns;Ns=f;try{const b=[le,Y===To?void 0:L&&Y[0]===To?[]:Y,R];Y=le,c?c(e,3,b):e(...b)}finally{Ns=_e}}}else f.run()};return l&&l(te),f=new Jf(m),f.scheduler=o?()=>o(te,!1):te,R=J=>By(J,!1,f),E=f.onStop=()=>{const J=Wo.get(f);if(J){if(c)c(J,4);else for(const le of J)le();Wo.delete(f)}},e?s?te(!0):Y=f.run():o?o(te.bind(null,!0),!0):f.run(),X.pause=f.pause.bind(f),X.resume=f.resume.bind(f),X.stop=X,X}function wn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Et(t))wn(t.value,e,n);else if(oe(t))for(let s=0;s<t.length;s++)wn(t[s],e,n);else if(Ia(t)||gr(t))t.forEach(s=>{wn(s,e,n)});else if(zf(t)){for(const s in t)wn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&wn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gi(t,e,n,s){try{return s?t(...s):t()}catch(r){Pa(r,e,n)}}function zt(t,e,n,s){if(he(t)){const r=Gi(t,e,n,s);return r&&Hf(r)&&r.catch(i=>{Pa(i,e,n)}),r}if(oe(t)){const r=[];for(let i=0;i<t.length;i++)r.push(zt(t[i],e,n,s));return r}}function Pa(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let m=0;m<f.length;m++)if(f[m](t,c,h)===!1)return}l=l.parent}if(i){Cn(),Gi(i,null,10,[t,c,h]),Sn();return}}qy(t,n,r,s,o)}function qy(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const yt=[];let en=-1;const _r=[];let Zn=null,lr=0;const fp=Promise.resolve();let zo=null;function pp(t){const e=zo||fp;return t?e.then(this?t.bind(this):t):e}function $y(t){let e=en+1,n=yt.length;for(;e<n;){const s=e+n>>>1,r=yt[s],i=Di(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Mc(t){if(!(t.flags&1)){const e=Di(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=Di(n)?yt.push(t):yt.splice($y(e),0,t),t.flags|=1,mp()}}function mp(){zo||(zo=fp.then(_p))}function Hy(t){oe(t)?_r.push(...t):Zn&&t.id===-1?Zn.splice(lr+1,0,t):t.flags&1||(_r.push(t),t.flags|=1),mp()}function Ph(t,e,n=en+1){for(;n<yt.length;n++){const s=yt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;yt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function gp(t){if(_r.length){const e=[...new Set(_r)].sort((n,s)=>Di(n)-Di(s));if(_r.length=0,Zn){Zn.push(...e);return}for(Zn=e,lr=0;lr<Zn.length;lr++){const n=Zn[lr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Zn=null,lr=0}}const Di=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _p(t){try{for(en=0;en<yt.length;en++){const e=yt[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<yt.length;en++){const e=yt[en];e&&(e.flags&=-2)}en=-1,yt.length=0,gp(),zo=null,(yt.length||_r.length)&&_p()}}let kt=null,yp=null;function Ko(t){const e=kt;return kt=t,yp=t&&t.type.__scopeId||null,e}function vp(t,e=kt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&jh(-1);const i=Ko(e);let o;try{o=t(...r)}finally{Ko(i),s._d&&jh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ne(t,e){if(kt===null)return t;const n=Na(kt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Ve]=e[r];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&wn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ss(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(Cn(),zt(c,n,8,[t.el,l,t,e]),Sn())}}function Wy(t,e){if(ft){let n=ft.provides;const s=ft.parent&&ft.parent.provides;s===n&&(n=ft.provides=Object.create(s)),n[t]=e}}function Vo(t,e,n=!1){const s=Jp();if(s||yr){let r=yr?yr._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&he(e)?e.call(s&&s.proxy):e}}const zy=Symbol.for("v-scx"),Ky=()=>Vo(zy);function Il(t,e,n){return Ep(t,e,n)}function Ep(t,e,n=Ve){const{immediate:s,deep:r,flush:i,once:o}=n,l=et({},n),c=e&&s||!e&&i!=="post";let h;if(xi){if(i==="sync"){const R=Ky();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!c){const R=()=>{};return R.stop=rn,R.resume=rn,R.pause=rn,R}}const f=ft;l.call=(R,S,L)=>zt(R,f,S,L);let m=!1;i==="post"?l.scheduler=R=>{wt(R,f&&f.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(R,S)=>{S?R():Mc(R)}),l.augmentJob=R=>{e&&(R.flags|=4),m&&(R.flags|=2,f&&(R.id=f.uid,R.i=f))};const E=jy(t,e,l);return xi&&(h?h.push(E):c&&E()),E}function Gy(t,e,n){const s=this.proxy,r=We(t)?t.includes(".")?wp(s,t):()=>s[t]:t.bind(s,s);let i;he(e)?i=e:(i=e.handler,n=e);const o=Qi(this),l=Ep(r,i.bind(s),n);return o(),l}function wp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Qy=Symbol("_vte"),Yy=t=>t.__isTeleport,Jn=Symbol("_leaveCb"),oi=Symbol("_enterCb");function Jy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cp(()=>{t.isMounted=!0}),Rp(()=>{t.isUnmounting=!0}),t}const Ot=[Function,Array],Xy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ot,onEnter:Ot,onAfterEnter:Ot,onEnterCancelled:Ot,onBeforeLeave:Ot,onLeave:Ot,onAfterLeave:Ot,onLeaveCancelled:Ot,onBeforeAppear:Ot,onAppear:Ot,onAfterAppear:Ot,onAppearCancelled:Ot};function Zy(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Kl(t,e,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:f,onEnterCancelled:m,onBeforeLeave:E,onLeave:R,onAfterLeave:S,onLeaveCancelled:L,onBeforeAppear:H,onAppear:X,onAfterAppear:Y,onAppearCancelled:te}=e,J=String(t.key),le=Zy(n,t),_e=(_,A)=>{_&&zt(_,s,9,A)},b=(_,A)=>{const I=A[1];_e(_,A),oe(_)?_.every(T=>T.length<=1)&&I():_.length<=1&&I()},v={mode:o,persisted:l,beforeEnter(_){let A=c;if(!n.isMounted)if(i)A=H||c;else return;_[Jn]&&_[Jn](!0);const I=le[J];I&&cr(t,I)&&I.el[Jn]&&I.el[Jn](),_e(A,[_])},enter(_){if(le[J]===t)return;let A=h,I=f,T=m;if(!n.isMounted)if(i)A=X||h,I=Y||f,T=te||m;else return;let y=!1;_[oi]=rt=>{y||(y=!0,rt?_e(T,[_]):_e(I,[_]),v.delayedLeave&&v.delayedLeave(),_[oi]=void 0)};const we=_[oi].bind(null,!1);A?b(A,[_,we]):we()},leave(_,A){const I=String(t.key);if(_[oi]&&_[oi](!0),n.isUnmounting)return A();_e(E,[_]);let T=!1;_[Jn]=we=>{T||(T=!0,A(),we?_e(L,[_]):_e(S,[_]),_[Jn]=void 0,le[I]===t&&delete le[I])};const y=_[Jn].bind(null,!1);le[I]=t,R?b(R,[_,y]):y()},clone(_){return Kl(_,e,n,s)}};return v}function Ni(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ni(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Tp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ue?(o.patchFlag&128&&r++,s=s.concat(Tp(o.children,e,l))):(e||o.type!==Pn)&&s.push(l!=null?qs(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Ip(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function kh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Go=new WeakMap;function wi(t,e,n,s,r=!1){if(oe(t)){t.forEach((L,H)=>wi(L,e&&(oe(e)?e[H]:e),n,s,r));return}if(Ti(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&wi(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Na(s.component):s.el,o=r?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Ve?l.refs={}:l.refs,m=l.setupState,E=Re(m),R=m===Ve?$f:L=>kh(f,L)?!1:Ce(E,L),S=(L,H)=>!(H&&kh(f,H));if(h!=null&&h!==c){if(Vh(e),We(h))f[h]=null,R(h)&&(m[h]=null);else if(Et(h)){const L=e;S(h,L.k)&&(h.value=null),L.k&&(f[L.k]=null)}}if(he(c))Gi(c,l,12,[o,f]);else{const L=We(c),H=Et(c);if(L||H){const X=()=>{if(t.f){const Y=L?R(c)?m[c]:f[c]:S()||!t.k?c.value:f[t.k];if(r)oe(Y)&&Cc(Y,i);else if(oe(Y))Y.includes(i)||Y.push(i);else if(L)f[c]=[i],R(c)&&(m[c]=f[c]);else{const te=[i];S(c,t.k)&&(c.value=te),t.k&&(f[t.k]=te)}}else L?(f[c]=o,R(c)&&(m[c]=o)):H&&(S(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const Y=()=>{X(),Go.delete(t)};Y.id=-1,Go.set(t,Y),wt(Y,n)}else Vh(t),X()}}}function Vh(t){const e=Go.get(t);e&&(e.flags|=8,Go.delete(t))}Sa().requestIdleCallback;Sa().cancelIdleCallback;const Ti=t=>!!t.type.__asyncLoader,Ap=t=>t.type.__isKeepAlive;function ev(t,e){bp(t,"a",e)}function tv(t,e){bp(t,"da",e)}function bp(t,e,n=ft){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ka(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ap(r.parent.vnode)&&nv(s,e,n,r),r=r.parent}}function nv(t,e,n,s){const r=ka(e,t,s,!0);Pp(()=>{Cc(s[e],r)},n)}function ka(t,e,n=ft,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Cn();const l=Qi(n),c=zt(e,n,t,o);return l(),Sn(),c});return s?r.unshift(i):r.push(i),i}}const xn=t=>(e,n=ft)=>{(!xi||t==="sp")&&ka(t,(...s)=>e(...s),n)},sv=xn("bm"),Cp=xn("m"),rv=xn("bu"),Sp=xn("u"),Rp=xn("bum"),Pp=xn("um"),iv=xn("sp"),ov=xn("rtg"),av=xn("rtc");function lv(t,e=ft){ka("ec",t,e)}const cv="components";function Kn(t,e){return hv(cv,t,!0,e)||t}const uv=Symbol.for("v-ndc");function hv(t,e,n=!0,s=!1){const r=kt||ft;if(r){const i=r.type;{const l=Qv(i,!1);if(l&&(l===e||l===vt(e)||l===ba(vt(e))))return i}const o=Dh(r[t]||i[t],e)||Dh(r.appContext[t],e);return!o&&s?i:o}}function Dh(t,e){return t&&(t[e]||t[vt(e)]||t[ba(vt(e))])}function Ee(t,e,n,s){let r;const i=n,o=oe(t);if(o||We(t)){const l=o&&Us(t);let c=!1,h=!1;l&&(c=!Ht(t),h=us(t),t=Ra(t)),r=new Array(t.length);for(let f=0,m=t.length;f<m;f++)r[f]=e(c?h?br(Rn(t[f])):Rn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];r[c]=e(t[f],f,c,i)}}else r=[];return r}const Gl=t=>t?Xp(t)?Na(t):Gl(t.parent):null,Ii=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gl(t.parent),$root:t=>Gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vp(t),$forceUpdate:t=>t.f||(t.f=()=>{Mc(t.update)}),$nextTick:t=>t.n||(t.n=pp.bind(t.proxy)),$watch:t=>Gy.bind(t)}),Al=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Ce(t,e),dv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Al(s,e))return o[e]=1,s[e];if(r!==Ve&&Ce(r,e))return o[e]=2,r[e];if(Ce(i,e))return o[e]=3,i[e];if(n!==Ve&&Ce(n,e))return o[e]=4,n[e];Ql&&(o[e]=0)}}const h=Ii[e];let f,m;if(h)return e==="$attrs"&&ht(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Ve&&Ce(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Al(r,e)?(r[e]=n,!0):s!==Ve&&Ce(s,e)?(s[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let c;return!!(n[l]||t!==Ve&&l[0]!=="$"&&Ce(t,l)||Al(e,l)||Ce(i,l)||Ce(s,l)||Ce(Ii,l)||Ce(r.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ql=!0;function fv(t){const e=Vp(t),n=t.proxy,s=t.ctx;Ql=!1,e.beforeCreate&&Oh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:m,mounted:E,beforeUpdate:R,updated:S,activated:L,deactivated:H,beforeDestroy:X,beforeUnmount:Y,destroyed:te,unmounted:J,render:le,renderTracked:_e,renderTriggered:b,errorCaptured:v,serverPrefetch:_,expose:A,inheritAttrs:I,components:T,directives:y,filters:we}=e;if(h&&pv(h,s,null),o)for(const xe in o){const Te=o[xe];he(Te)&&(s[xe]=Te.bind(n))}if(r){const xe=r.call(n,n);Pe(xe)&&(t.data=Nc(xe))}if(Ql=!0,i)for(const xe in i){const Te=i[xe],Nt=he(Te)?Te.bind(n,n):he(Te.get)?Te.get.bind(n,n):rn,er=!he(Te)&&he(Te.set)?Te.set.bind(n):rn,Qt=Jv({get:Nt,set:er});Object.defineProperty(s,xe,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Ct=>Qt.value=Ct})}if(l)for(const xe in l)kp(l[xe],s,n,xe);if(c){const xe=he(c)?c.call(n):c;Reflect.ownKeys(xe).forEach(Te=>{Wy(Te,xe[Te])})}f&&Oh(f,t,"c");function ze(xe,Te){oe(Te)?Te.forEach(Nt=>xe(Nt.bind(n))):Te&&xe(Te.bind(n))}if(ze(sv,m),ze(Cp,E),ze(rv,R),ze(Sp,S),ze(ev,L),ze(tv,H),ze(lv,v),ze(av,_e),ze(ov,b),ze(Rp,Y),ze(Pp,J),ze(iv,_),oe(A))if(A.length){const xe=t.exposed||(t.exposed={});A.forEach(Te=>{Object.defineProperty(xe,Te,{get:()=>n[Te],set:Nt=>n[Te]=Nt,enumerable:!0})})}else t.exposed||(t.exposed={});le&&t.render===rn&&(t.render=le),I!=null&&(t.inheritAttrs=I),T&&(t.components=T),y&&(t.directives=y),_&&Ip(t)}function pv(t,e,n=rn){oe(t)&&(t=Yl(t));for(const s in t){const r=t[s];let i;Pe(r)?"default"in r?i=Vo(r.from||s,r.default,!0):i=Vo(r.from||s):i=Vo(r),Et(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Oh(t,e,n){zt(oe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kp(t,e,n,s){let r=s.includes(".")?wp(n,s):()=>n[s];if(We(t)){const i=e[t];he(i)&&Il(r,i)}else if(he(t))Il(r,t.bind(n));else if(Pe(t))if(oe(t))t.forEach(i=>kp(i,e,n,s));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&Il(r,i,t)}}function Vp(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(h=>Qo(c,h,o,!0)),Qo(c,e,o)),Pe(e)&&i.set(e,c),c}function Qo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Qo(t,i,n,!0),r&&r.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=mv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const mv={data:xh,props:Mh,emits:Mh,methods:hi,computed:hi,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:hi,directives:hi,watch:_v,provide:xh,inject:gv};function xh(t,e){return e?t?function(){return et(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function gv(t,e){return hi(Yl(t),Yl(e))}function Yl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?et(Object.create(null),t,e):e}function Mh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:et(Object.create(null),Nh(t),Nh(e??{})):e}function _v(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const s in e)n[s]=_t(t[s],e[s]);return n}function Dp(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yv=0;function vv(t,e){return function(s,r=null){he(s)||(s=et({},s)),r!=null&&!Pe(r)&&(r=null);const i=Dp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:yv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Xv,get config(){return i.config},set config(f){},use(f,...m){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(h,...m)):he(f)&&(o.add(f),f(h,...m))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,m){return m?(i.components[f]=m,h):i.components[f]},directive(f,m){return m?(i.directives[f]=m,h):i.directives[f]},mount(f,m,E){if(!c){const R=h._ceVNode||Ft(s,r);return R.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),t(R,f,E),c=!0,h._container=f,f.__vue_app__=h,Na(R.component)}},onUnmount(f){l.push(f)},unmount(){c&&(zt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,m){return i.provides[f]=m,h},runWithContext(f){const m=yr;yr=h;try{return f()}finally{yr=m}}};return h}}let yr=null;const Ev=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${Js(e)}Modifiers`];function wv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ve;let r=n;const i=e.startsWith("update:"),o=i&&Ev(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>We(f)?f.trim():f)),o.number&&(r=n.map(Ca)));let l,c=s[l=yl(e)]||s[l=yl(vt(e))];!c&&i&&(c=s[l=yl(Js(e))]),c&&zt(c,t,6,r);const h=s[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,zt(h,t,6,r)}}const Tv=new WeakMap;function Np(t,e,n=!1){const s=n?Tv:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!he(t)){const c=h=>{const f=Np(h,e,!0);f&&(l=!0,et(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Pe(t)&&s.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):et(o,i),Pe(t)&&s.set(t,o),o)}function Va(t,e){return!t||!wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Js(e))||Ce(t,e))}function Lh(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:m,data:E,setupState:R,ctx:S,inheritAttrs:L}=t,H=Ko(t);let X,Y;try{if(n.shapeFlag&4){const J=r||s,le=J;X=sn(h.call(le,J,f,m,R,E,S)),Y=l}else{const J=e;X=sn(J.length>1?J(m,{attrs:l,slots:o,emit:c}):J(m,null)),Y=e.props?l:Iv(l)}}catch(J){Ai.length=0,Pa(J,t,1),X=Ft(Pn)}let te=X;if(Y&&L!==!1){const J=Object.keys(Y),{shapeFlag:le}=te;J.length&&le&7&&(i&&J.some(Ta)&&(Y=Av(Y,i)),te=qs(te,Y,!1,!0))}return n.dirs&&(te=qs(te,null,!1,!0),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition&&Ni(te,n.transition),X=te,Ko(H),X}const Iv=t=>{let e;for(const n in t)(n==="class"||n==="style"||wa(n))&&((e||(e={}))[n]=t[n]);return e},Av=(t,e)=>{const n={};for(const s in t)(!Ta(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Fh(s,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const E=f[m];if(Op(o,s,E)&&!Va(h,E))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Fh(s,o,h):!0:!!o;return!1}function Fh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(Op(e,t,i)&&!Va(n,i))return!0}return!1}function Op(t,e,n){const s=t[n],r=e[n];return n==="style"&&Pe(s)&&Pe(r)?!Ki(s,r):s!==r}function Cv({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const xp={},Mp=()=>Object.create(xp),Lp=t=>Object.getPrototypeOf(t)===xp;function Sv(t,e,n,s=!1){const r={},i=Mp();t.propsDefaults=Object.create(null),Fp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Oy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Rv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Re(r),[c]=t.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let m=0;m<f.length;m++){let E=f[m];if(Va(t.emitsOptions,E))continue;const R=e[E];if(c)if(Ce(i,E))R!==i[E]&&(i[E]=R,h=!0);else{const S=vt(E);r[S]=Jl(c,l,S,R,t,!1)}else R!==i[E]&&(i[E]=R,h=!0)}}}else{Fp(t,e,r,i)&&(h=!0);let f;for(const m in l)(!e||!Ce(e,m)&&((f=Js(m))===m||!Ce(e,f)))&&(c?n&&(n[m]!==void 0||n[f]!==void 0)&&(r[m]=Jl(c,l,m,void 0,t,!0)):delete r[m]);if(i!==l)for(const m in i)(!e||!Ce(e,m))&&(delete i[m],h=!0)}h&&En(t.attrs,"set","")}function Fp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(yi(c))continue;const h=e[c];let f;r&&Ce(r,f=vt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Va(t.emitsOptions,c)||(!(c in s)||h!==s[c])&&(s[c]=h,o=!0)}if(i){const c=Re(n),h=l||Ve;for(let f=0;f<i.length;f++){const m=i[f];n[m]=Jl(r,c,m,h[m],t,!Ce(h,m))}}return o}function Jl(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=Ce(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&he(c)){const{propsDefaults:h}=r;if(n in h)s=h[n];else{const f=Qi(r);s=h[n]=c.call(null,e),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Js(n))&&(s=!0))}return s}const Pv=new WeakMap;function Up(t,e,n=!1){const s=n?Pv:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!he(t)){const f=m=>{c=!0;const[E,R]=Up(m,e,!0);et(o,E),R&&l.push(...R)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Pe(t)&&s.set(t,mr),mr;if(oe(i))for(let f=0;f<i.length;f++){const m=vt(i[f]);Uh(m)&&(o[m]=Ve)}else if(i)for(const f in i){const m=vt(f);if(Uh(m)){const E=i[f],R=o[m]=oe(E)||he(E)?{type:E}:et({},E),S=R.type;let L=!1,H=!0;if(oe(S))for(let X=0;X<S.length;++X){const Y=S[X],te=he(Y)&&Y.name;if(te==="Boolean"){L=!0;break}else te==="String"&&(H=!1)}else L=he(S)&&S.name==="Boolean";R[0]=L,R[1]=H,(L||Ce(R,"default"))&&l.push(m)}}const h=[o,l];return Pe(t)&&s.set(t,h),h}function Uh(t){return t[0]!=="$"&&!yi(t)}const Lc=t=>t==="_"||t==="_ctx"||t==="$stable",Fc=t=>oe(t)?t.map(sn):[sn(t)],kv=(t,e,n)=>{if(e._n)return e;const s=vp((...r)=>Fc(e(...r)),n);return s._c=!1,s},Bp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Lc(r))continue;const i=t[r];if(he(i))e[r]=kv(r,i,s);else if(i!=null){const o=Fc(i);e[r]=()=>o}}},jp=(t,e)=>{const n=Fc(e);t.slots.default=()=>n},qp=(t,e,n)=>{for(const s in e)(n||!Lc(s))&&(t[s]=e[s])},Vv=(t,e,n)=>{const s=t.slots=Mp();if(t.vnode.shapeFlag&32){const r=e._;r?(qp(s,e,n),n&&Kf(s,"_",r,!0)):Bp(e,s)}else e&&jp(t,e)},Dv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ve;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:qp(r,e,n):(i=!e.$stable,Bp(e,r)),o=e}else e&&(jp(t,e),o={default:1});if(i)for(const l in r)!Lc(l)&&o[l]==null&&delete r[l]},wt=Lv;function Nv(t){return Ov(t)}function Ov(t,e){const n=Sa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:m,nextSibling:E,setScopeId:R=rn,insertStaticContent:S}=t,L=(w,C,D,j=null,F=null,B=null,z=void 0,$=null,q=!!C.dynamicChildren)=>{if(w===C)return;w&&!cr(w,C)&&(j=Bn(w),Ct(w,F,B,!0),w=null),C.patchFlag===-2&&(q=!1,C.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:G}=C;switch(U){case Da:H(w,C,D,j);break;case Pn:X(w,C,D,j);break;case Do:w==null&&Y(C,D,j,z);break;case ue:T(w,C,D,j,F,B,z,$,q);break;default:G&1?le(w,C,D,j,F,B,z,$,q):G&6?y(w,C,D,j,F,B,z,$,q):(G&64||G&128)&&U.process(w,C,D,j,F,B,z,$,q,ws)}ne!=null&&F?wi(ne,w&&w.ref,B,C||w,!C):ne==null&&w&&w.ref!=null&&wi(w.ref,null,B,w,!0)},H=(w,C,D,j)=>{if(w==null)s(C.el=l(C.children),D,j);else{const F=C.el=w.el;C.children!==w.children&&h(F,C.children)}},X=(w,C,D,j)=>{w==null?s(C.el=c(C.children||""),D,j):C.el=w.el},Y=(w,C,D,j)=>{[w.el,w.anchor]=S(w.children,C,D,j,w.el,w.anchor)},te=({el:w,anchor:C},D,j)=>{let F;for(;w&&w!==C;)F=E(w),s(w,D,j),w=F;s(C,D,j)},J=({el:w,anchor:C})=>{let D;for(;w&&w!==C;)D=E(w),r(w),w=D;r(C)},le=(w,C,D,j,F,B,z,$,q)=>{if(C.type==="svg"?z="svg":C.type==="math"&&(z="mathml"),w==null)_e(C,D,j,F,B,z,$,q);else{const U=w.el&&w.el._isVueCE?w.el:null;try{U&&U._beginPatch(),_(w,C,F,B,z,$,q)}finally{U&&U._endPatch()}}},_e=(w,C,D,j,F,B,z,$)=>{let q,U;const{props:ne,shapeFlag:G,transition:Z,dirs:se}=w;if(q=w.el=o(w.type,B,ne&&ne.is,ne),G&8?f(q,w.children):G&16&&v(w.children,q,null,j,F,bl(w,B),z,$),se&&Ss(w,null,j,"created"),b(q,w,w.scopeId,z,j),ne){for(const Ae in ne)Ae!=="value"&&!yi(Ae)&&i(q,Ae,null,ne[Ae],B,j);"value"in ne&&i(q,"value",null,ne.value,B),(U=ne.onVnodeBeforeMount)&&Xt(U,j,w)}se&&Ss(w,null,j,"beforeMount");const ye=xv(F,Z);ye&&Z.beforeEnter(q),s(q,C,D),((U=ne&&ne.onVnodeMounted)||ye||se)&&wt(()=>{try{U&&Xt(U,j,w),ye&&Z.enter(q),se&&Ss(w,null,j,"mounted")}finally{}},F)},b=(w,C,D,j,F)=>{if(D&&R(w,D),j)for(let B=0;B<j.length;B++)R(w,j[B]);if(F){let B=F.subTree;if(C===B||zp(B.type)&&(B.ssContent===C||B.ssFallback===C)){const z=F.vnode;b(w,z,z.scopeId,z.slotScopeIds,F.parent)}}},v=(w,C,D,j,F,B,z,$,q=0)=>{for(let U=q;U<w.length;U++){const ne=w[U]=$?yn(w[U]):sn(w[U]);L(null,ne,C,D,j,F,B,z,$)}},_=(w,C,D,j,F,B,z)=>{const $=C.el=w.el;let{patchFlag:q,dynamicChildren:U,dirs:ne}=C;q|=w.patchFlag&16;const G=w.props||Ve,Z=C.props||Ve;let se;if(D&&Rs(D,!1),(se=Z.onVnodeBeforeUpdate)&&Xt(se,D,C,w),ne&&Ss(C,w,D,"beforeUpdate"),D&&Rs(D,!0),(G.innerHTML&&Z.innerHTML==null||G.textContent&&Z.textContent==null)&&f($,""),U?A(w.dynamicChildren,U,$,D,j,bl(C,F),B):z||Te(w,C,$,null,D,j,bl(C,F),B,!1),q>0){if(q&16)I($,G,Z,D,F);else if(q&2&&G.class!==Z.class&&i($,"class",null,Z.class,F),q&4&&i($,"style",G.style,Z.style,F),q&8){const ye=C.dynamicProps;for(let Ae=0;Ae<ye.length;Ae++){const be=ye[Ae],je=G[be],Je=Z[be];(Je!==je||be==="value")&&i($,be,je,Je,F,D)}}q&1&&w.children!==C.children&&f($,C.children)}else!z&&U==null&&I($,G,Z,D,F);((se=Z.onVnodeUpdated)||ne)&&wt(()=>{se&&Xt(se,D,C,w),ne&&Ss(C,w,D,"updated")},j)},A=(w,C,D,j,F,B,z)=>{for(let $=0;$<C.length;$++){const q=w[$],U=C[$],ne=q.el&&(q.type===ue||!cr(q,U)||q.shapeFlag&198)?m(q.el):D;L(q,U,ne,null,j,F,B,z,!0)}},I=(w,C,D,j,F)=>{if(C!==D){if(C!==Ve)for(const B in C)!yi(B)&&!(B in D)&&i(w,B,C[B],null,F,j);for(const B in D){if(yi(B))continue;const z=D[B],$=C[B];z!==$&&B!=="value"&&i(w,B,$,z,F,j)}"value"in D&&i(w,"value",C.value,D.value,F)}},T=(w,C,D,j,F,B,z,$,q)=>{const U=C.el=w?w.el:l(""),ne=C.anchor=w?w.anchor:l("");let{patchFlag:G,dynamicChildren:Z,slotScopeIds:se}=C;se&&($=$?$.concat(se):se),w==null?(s(U,D,j),s(ne,D,j),v(C.children||[],D,ne,F,B,z,$,q)):G>0&&G&64&&Z&&w.dynamicChildren&&w.dynamicChildren.length===Z.length?(A(w.dynamicChildren,Z,D,F,B,z,$),(C.key!=null||F&&C===F.subTree)&&$p(w,C,!0)):Te(w,C,D,ne,F,B,z,$,q)},y=(w,C,D,j,F,B,z,$,q)=>{C.slotScopeIds=$,w==null?C.shapeFlag&512?F.ctx.activate(C,D,j,z,q):we(C,D,j,F,B,z,q):rt(w,C,q)},we=(w,C,D,j,F,B,z)=>{const $=w.component=Hv(w,j,F);if(Ap(w)&&($.ctx.renderer=ws),Wv($,!1,z),$.asyncDep){if(F&&F.registerDep($,ze,z),!w.el){const q=$.subTree=Ft(Pn);X(null,q,C,D),w.placeholder=q.el}}else ze($,w,C,D,F,B,z)},rt=(w,C,D)=>{const j=C.component=w.component;if(bv(w,C,D))if(j.asyncDep&&!j.asyncResolved){xe(j,C,D);return}else j.next=C,j.update();else C.el=w.el,j.vnode=C},ze=(w,C,D,j,F,B,z)=>{const $=()=>{if(w.isMounted){let{next:G,bu:Z,u:se,parent:ye,vnode:Ae}=w;{const Rt=Hp(w);if(Rt){G&&(G.el=Ae.el,xe(w,G,z)),Rt.asyncDep.then(()=>{wt(()=>{w.isUnmounted||U()},F)});return}}let be=G,je;Rs(w,!1),G?(G.el=Ae.el,xe(w,G,z)):G=Ae,Z&&ko(Z),(je=G.props&&G.props.onVnodeBeforeUpdate)&&Xt(je,ye,G,Ae),Rs(w,!0);const Je=Lh(w),St=w.subTree;w.subTree=Je,L(St,Je,m(St.el),Bn(St),w,F,B),G.el=Je.el,be===null&&Cv(w,Je.el),se&&wt(se,F),(je=G.props&&G.props.onVnodeUpdated)&&wt(()=>Xt(je,ye,G,Ae),F)}else{let G;const{el:Z,props:se}=C,{bm:ye,m:Ae,parent:be,root:je,type:Je}=w,St=Ti(C);Rs(w,!1),ye&&ko(ye),!St&&(G=se&&se.onVnodeBeforeMount)&&Xt(G,be,C),Rs(w,!0);{je.ce&&je.ce._hasShadowRoot()&&je.ce._injectChildStyle(Je,w.parent?w.parent.type:void 0);const Rt=w.subTree=Lh(w);L(null,Rt,D,j,w,F,B),C.el=Rt.el}if(Ae&&wt(Ae,F),!St&&(G=se&&se.onVnodeMounted)){const Rt=C;wt(()=>Xt(G,be,Rt),F)}(C.shapeFlag&256||be&&Ti(be.vnode)&&be.vnode.shapeFlag&256)&&w.a&&wt(w.a,F),w.isMounted=!0,C=D=j=null}};w.scope.on();const q=w.effect=new Jf($);w.scope.off();const U=w.update=q.run.bind(q),ne=w.job=q.runIfDirty.bind(q);ne.i=w,ne.id=w.uid,q.scheduler=()=>Mc(ne),Rs(w,!0),U()},xe=(w,C,D)=>{C.component=w;const j=w.vnode.props;w.vnode=C,w.next=null,Rv(w,C.props,j,D),Dv(w,C.children,D),Cn(),Ph(w),Sn()},Te=(w,C,D,j,F,B,z,$,q=!1)=>{const U=w&&w.children,ne=w?w.shapeFlag:0,G=C.children,{patchFlag:Z,shapeFlag:se}=C;if(Z>0){if(Z&128){er(U,G,D,j,F,B,z,$,q);return}else if(Z&256){Nt(U,G,D,j,F,B,z,$,q);return}}se&8?(ne&16&&pn(U,F,B),G!==U&&f(D,G)):ne&16?se&16?er(U,G,D,j,F,B,z,$,q):pn(U,F,B,!0):(ne&8&&f(D,""),se&16&&v(G,D,j,F,B,z,$,q))},Nt=(w,C,D,j,F,B,z,$,q)=>{w=w||mr,C=C||mr;const U=w.length,ne=C.length,G=Math.min(U,ne);let Z;for(Z=0;Z<G;Z++){const se=C[Z]=q?yn(C[Z]):sn(C[Z]);L(w[Z],se,D,null,F,B,z,$,q)}U>ne?pn(w,F,B,!0,!1,G):v(C,D,j,F,B,z,$,q,G)},er=(w,C,D,j,F,B,z,$,q)=>{let U=0;const ne=C.length;let G=w.length-1,Z=ne-1;for(;U<=G&&U<=Z;){const se=w[U],ye=C[U]=q?yn(C[U]):sn(C[U]);if(cr(se,ye))L(se,ye,D,null,F,B,z,$,q);else break;U++}for(;U<=G&&U<=Z;){const se=w[G],ye=C[Z]=q?yn(C[Z]):sn(C[Z]);if(cr(se,ye))L(se,ye,D,null,F,B,z,$,q);else break;G--,Z--}if(U>G){if(U<=Z){const se=Z+1,ye=se<ne?C[se].el:j;for(;U<=Z;)L(null,C[U]=q?yn(C[U]):sn(C[U]),D,ye,F,B,z,$,q),U++}}else if(U>Z)for(;U<=G;)Ct(w[U],F,B,!0),U++;else{const se=U,ye=U,Ae=new Map;for(U=ye;U<=Z;U++){const it=C[U]=q?yn(C[U]):sn(C[U]);it.key!=null&&Ae.set(it.key,U)}let be,je=0;const Je=Z-ye+1;let St=!1,Rt=0;const Bt=new Array(Je);for(U=0;U<Je;U++)Bt[U]=0;for(U=se;U<=G;U++){const it=w[U];if(je>=Je){Ct(it,F,B,!0);continue}let tt;if(it.key!=null)tt=Ae.get(it.key);else for(be=ye;be<=Z;be++)if(Bt[be-ye]===0&&cr(it,C[be])){tt=be;break}tt===void 0?Ct(it,F,B,!0):(Bt[tt-ye]=U+1,tt>=Rt?Rt=tt:St=!0,L(it,C[tt],D,null,F,B,z,$,q),je++)}const nr=St?Mv(Bt):mr;for(be=nr.length-1,U=Je-1;U>=0;U--){const it=ye+U,tt=C[it],Hr=C[it+1],Ts=it+1<ne?Hr.el||Wp(Hr):j;Bt[U]===0?L(null,tt,D,Ts,F,B,z,$,q):St&&(be<0||U!==nr[be]?Qt(tt,D,Ts,2):be--)}}},Qt=(w,C,D,j,F=null)=>{const{el:B,type:z,transition:$,children:q,shapeFlag:U}=w;if(U&6){Qt(w.component.subTree,C,D,j);return}if(U&128){w.suspense.move(C,D,j);return}if(U&64){z.move(w,C,D,ws);return}if(z===ue){s(B,C,D);for(let G=0;G<q.length;G++)Qt(q[G],C,D,j);s(w.anchor,C,D);return}if(z===Do){te(w,C,D);return}if(j!==2&&U&1&&$)if(j===0)$.beforeEnter(B),s(B,C,D),wt(()=>$.enter(B),F);else{const{leave:G,delayLeave:Z,afterLeave:se}=$,ye=()=>{w.ctx.isUnmounted?r(B):s(B,C,D)},Ae=()=>{B._isLeaving&&B[Jn](!0),G(B,()=>{ye(),se&&se()})};Z?Z(B,ye,Ae):Ae()}else s(B,C,D)},Ct=(w,C,D,j=!1,F=!1)=>{const{type:B,props:z,ref:$,children:q,dynamicChildren:U,shapeFlag:ne,patchFlag:G,dirs:Z,cacheIndex:se,memo:ye}=w;if(G===-2&&(F=!1),$!=null&&(Cn(),wi($,null,D,w,!0),Sn()),se!=null&&(C.renderCache[se]=void 0),ne&256){C.ctx.deactivate(w);return}const Ae=ne&1&&Z,be=!Ti(w);let je;if(be&&(je=z&&z.onVnodeBeforeUnmount)&&Xt(je,C,w),ne&6)qr(w.component,D,j);else{if(ne&128){w.suspense.unmount(D,j);return}Ae&&Ss(w,null,C,"beforeUnmount"),ne&64?w.type.remove(w,C,D,ws,j):U&&!U.hasOnce&&(B!==ue||G>0&&G&64)?pn(U,C,D,!1,!0):(B===ue&&G&384||!F&&ne&16)&&pn(q,C,D),j&&jr(w)}const Je=ye!=null&&se==null;(be&&(je=z&&z.onVnodeUnmounted)||Ae||Je)&&wt(()=>{je&&Xt(je,C,w),Ae&&Ss(w,null,C,"unmounted"),Je&&(w.el=null)},D)},jr=w=>{const{type:C,el:D,anchor:j,transition:F}=w;if(C===ue){tr(D,j);return}if(C===Do){J(w);return}const B=()=>{r(D),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(w.shapeFlag&1&&F&&!F.persisted){const{leave:z,delayLeave:$}=F,q=()=>z(D,B);$?$(w.el,B,q):q()}else B()},tr=(w,C)=>{let D;for(;w!==C;)D=E(w),r(w),w=D;r(C)},qr=(w,C,D)=>{const{bum:j,scope:F,job:B,subTree:z,um:$,m:q,a:U}=w;Bh(q),Bh(U),j&&ko(j),F.stop(),B&&(B.flags|=8,Ct(z,w,C,D)),$&&wt($,C),wt(()=>{w.isUnmounted=!0},C)},pn=(w,C,D,j=!1,F=!1,B=0)=>{for(let z=B;z<w.length;z++)Ct(w[z],C,D,j,F)},Bn=w=>{if(w.shapeFlag&6)return Bn(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=E(w.anchor||w.el),D=C&&C[Qy];return D?E(D):C};let Es=!1;const $r=(w,C,D)=>{let j;w==null?C._vnode&&(Ct(C._vnode,null,null,!0),j=C._vnode.component):L(C._vnode||null,w,C,null,null,null,D),C._vnode=w,Es||(Es=!0,Ph(j),gp(),Es=!1)},ws={p:L,um:Ct,m:Qt,r:jr,mt:we,mc:v,pc:Te,pbc:A,n:Bn,o:t};return{render:$r,hydrate:void 0,createApp:vv($r)}}function bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Rs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $p(t,e,n=!1){const s=t.children,r=e.children;if(oe(s)&&oe(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=yn(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&$p(o,l)),l.type===Da&&(l.patchFlag===-1&&(l=r[i]=yn(l)),l.el=o.el),l.type===Pn&&!l.el&&(l.el=o.el)}}function Mv(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const h=t[s];if(h!==0){if(r=n[n.length-1],t[r]<h){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hp(e)}function Bh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Wp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Wp(e.subTree):null}const zp=t=>t.__isSuspense;function Lv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Hy(t)}const ue=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),Pn=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),Ai=[];let Vt=null;function V(t=!1){Ai.push(Vt=t?null:[])}function Fv(){Ai.pop(),Vt=Ai[Ai.length-1]||null}let Oi=1;function jh(t,e=!1){Oi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function Kp(t){return t.dynamicChildren=Oi>0?Vt||mr:null,Fv(),Oi>0&&Vt&&Vt.push(t),t}function N(t,e,n,s,r,i){return Kp(d(t,e,n,s,r,i,!0))}function gn(t,e,n,s,r){return Kp(Ft(t,e,n,s,r,!0))}function Gp(t){return t?t.__v_isVNode===!0:!1}function cr(t,e){return t.type===e.type&&t.key===e.key}const Qp=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Et(t)||he(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,s=0,r=null,i=t===ue?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qp(e),ref:e&&No(e),scopeId:yp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:kt};return l?(Uc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),Oi>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const Ft=Uv;function Uv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===uv)&&(t=Pn),Gp(t)){const l=qs(t,e,!0);return n&&Uc(l,n),Oi>0&&!i&&Vt&&(l.shapeFlag&6?Vt[Vt.indexOf(t)]=l:Vt.push(l)),l.patchFlag=-2,l}if(Yv(t)&&(t=t.__vccOpts),e){e=Bv(e);let{class:l,style:c}=e;l&&!We(l)&&(e.class=Ie(l)),Pe(c)&&(xc(c)&&!oe(c)&&(c=et({},c)),e.style=Rc(c))}const o=We(t)?1:zp(t)?128:Yy(t)?64:Pe(t)?4:he(t)?2:0;return d(t,e,n,s,r,o,i,!0)}function Bv(t){return t?xc(t)||Lp(t)?et({},t):t:null}function qs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?jv(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Qp(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(No(e)):[i,No(e)]:No(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ue?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qs(t.ssContent),ssFallback:t.ssFallback&&qs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Ni(f,c.clone(f)),f}function Ms(t=" ",e=0){return Ft(Da,null,t,e)}function Yp(t,e){const n=Ft(Do,null,t);return n.staticCount=e,n}function fe(t="",e=!1){return e?(V(),gn(Pn,null,t)):Ft(Pn,null,t)}function sn(t){return t==null||typeof t=="boolean"?Ft(Pn):oe(t)?Ft(ue,null,t.slice()):Gp(t)?yn(t):Ft(Da,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qs(t)}function Uc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Uc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Lp(e)?e._ctx=kt:r===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),s&64?(n=16,e=[Ms(e)]):n=8);t.children=e,t.shapeFlag|=n}function jv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ie([e.class,s.class]));else if(r==="style")e.style=Rc([e.style,s.style]);else if(wa(r)){const i=e[r],o=s[r];o&&i!==o&&!(oe(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!Ta(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function Xt(t,e,n,s=null){zt(t,e,7,[n,s])}const qv=Dp();let $v=0;function Hv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||qv,i={uid:$v++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new py(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Up(s,r),emitsOptions:Np(s,r),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:s.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wv.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const Jp=()=>ft||kt;let Yo,Xl;{const t=Sa(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Xl=e("__VUE_SSR_SETTERS__",n=>xi=n)}const Qi=t=>{const e=ft;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},qh=()=>{ft&&ft.scope.off(),Yo(null)};function Xp(t){return t.vnode.shapeFlag&4}let xi=!1;function Wv(t,e=!1,n=!1){e&&Xl(e);const{props:s,children:r}=t.vnode,i=Xp(t);Sv(t,s,i,e),Vv(t,r,n||e);const o=i?zv(t,e):void 0;return e&&Xl(!1),o}function zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dv);const{setup:s}=n;if(s){Cn();const r=t.setupContext=s.length>1?Gv(t):null,i=Qi(t),o=Gi(s,t,0,[t.props,r]),l=Hf(o);if(Sn(),i(),(l||t.sp)&&!Ti(t)&&Ip(t),l){if(o.then(qh,qh),e)return o.then(c=>{$h(t,c)}).catch(c=>{Pa(c,t,0)});t.asyncDep=o}else $h(t,o)}else Zp(t)}function $h(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=dp(e)),Zp(t)}function Zp(t,e,n){const s=t.type;t.render||(t.render=s.render||rn);{const r=Qi(t);Cn();try{fv(t)}finally{Sn(),r()}}}const Kv={get(t,e){return ht(t,"get",""),t[e]}};function Gv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Kv),slots:t.slots,emit:t.emit,expose:e}}function Na(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dp(xy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}})):t.proxy}function Qv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Yv(t){return he(t)&&"__vccOpts"in t}const Jv=(t,e)=>Uy(t,e,xi),Xv="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zl;const Hh=typeof window<"u"&&window.trustedTypes;if(Hh)try{Zl=Hh.createPolicy("vue",{createHTML:t=>t})}catch{}const em=Zl?t=>Zl.createHTML(t):t=>t,Zv="http://www.w3.org/2000/svg",eE="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,Wh=_n&&_n.createElement("template"),tE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?_n.createElementNS(Zv,t):e==="mathml"?_n.createElementNS(eE,t):n?_n.createElement(t,{is:n}):_n.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Wh.innerHTML=em(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Wh.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gn="transition",ai="animation",Cr=Symbol("_vtc"),tm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nE=et({},Xy,tm),Ps=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},zh=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function sE(t){const e={};for(const T in t)T in tm||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:f=l,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:E=`${n}-leave-active`,leaveToClass:R=`${n}-leave-to`}=t,S=rE(r),L=S&&S[0],H=S&&S[1],{onBeforeEnter:X,onEnter:Y,onEnterCancelled:te,onLeave:J,onLeaveCancelled:le,onBeforeAppear:_e=X,onAppear:b=Y,onAppearCancelled:v=te}=e,_=(T,y,we,rt)=>{T._enterCancelled=rt,Xn(T,y?f:l),Xn(T,y?h:o),we&&we()},A=(T,y)=>{T._isLeaving=!1,Xn(T,m),Xn(T,R),Xn(T,E),y&&y()},I=T=>(y,we)=>{const rt=T?b:Y,ze=()=>_(y,T,we);Ps(rt,[y,ze]),Kh(()=>{Xn(y,T?c:i),Zt(y,T?f:l),zh(rt)||Gh(y,s,L,ze)})};return et(e,{onBeforeEnter(T){Ps(X,[T]),Zt(T,i),Zt(T,o)},onBeforeAppear(T){Ps(_e,[T]),Zt(T,c),Zt(T,h)},onEnter:I(!1),onAppear:I(!0),onLeave(T,y){T._isLeaving=!0;const we=()=>A(T,y);Zt(T,m),T._enterCancelled?(Zt(T,E),ec(T)):(ec(T),Zt(T,E)),Kh(()=>{T._isLeaving&&(Xn(T,m),Zt(T,R),zh(J)||Gh(T,s,H,we))}),Ps(J,[T,we])},onEnterCancelled(T){_(T,!1,void 0,!0),Ps(te,[T])},onAppearCancelled(T){_(T,!0,void 0,!0),Ps(v,[T])},onLeaveCancelled(T){A(T),Ps(le,[T])}})}function rE(t){if(t==null)return null;if(Pe(t))return[Cl(t.enter),Cl(t.leave)];{const e=Cl(t);return[e,e]}}function Cl(t){return iy(t)}function Zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Cr]||(t[Cr]=new Set)).add(e)}function Xn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Cr];n&&(n.delete(e),n.size||(t[Cr]=void 0))}function Kh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let iE=0;function Gh(t,e,n,s){const r=t._endId=++iE,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=nm(t,e);if(!o)return s();const h=o+"end";let f=0;const m=()=>{t.removeEventListener(h,E),i()},E=R=>{R.target===t&&++f>=c&&m()};setTimeout(()=>{f<c&&m()},l+1),t.addEventListener(h,E)}function nm(t,e){const n=window.getComputedStyle(t),s=S=>(n[S]||"").split(", "),r=s(`${Gn}Delay`),i=s(`${Gn}Duration`),o=Qh(r,i),l=s(`${ai}Delay`),c=s(`${ai}Duration`),h=Qh(l,c);let f=null,m=0,E=0;e===Gn?o>0&&(f=Gn,m=o,E=i.length):e===ai?h>0&&(f=ai,m=h,E=c.length):(m=Math.max(o,h),f=m>0?o>h?Gn:ai:null,E=f?f===Gn?i.length:c.length:0);const R=f===Gn&&/\b(?:transform|all)(?:,|$)/.test(s(`${Gn}Property`).toString());return{type:f,timeout:m,propCount:E,hasTransform:R}}function Qh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Yh(n)+Yh(t[s])))}function Yh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ec(t){return(t?t.ownerDocument:document).body.offsetHeight}function oE(t,e,n){const s=t[Cr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jh=Symbol("_vod"),aE=Symbol("_vsh"),lE=Symbol(""),cE=/(?:^|;)\s*display\s*:/;function uE(t,e,n){const s=t.style,r=We(n);let i=!1;if(n&&!r){if(e)if(We(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Oo(s,l,"")}else for(const o in e)n[o]==null&&Oo(s,o,"");for(const o in n)o==="display"&&(i=!0),Oo(s,o,n[o])}else if(r){if(e!==n){const o=s[lE];o&&(n+=";"+o),s.cssText=n,i=cE.test(n)}}else e&&t.removeAttribute("style");Jh in t&&(t[Jh]=i?s.display:"",t[aE]&&(s.display="none"))}const Xh=/\s*!important$/;function Oo(t,e,n){if(oe(n))n.forEach(s=>Oo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=hE(t,e);Xh.test(n)?t.setProperty(Js(s),n.replace(Xh,""),"important"):t[s]=n}}const Zh=["Webkit","Moz","ms"],Sl={};function hE(t,e){const n=Sl[e];if(n)return n;let s=vt(e);if(s!=="filter"&&s in t)return Sl[e]=s;s=ba(s);for(let r=0;r<Zh.length;r++){const i=Zh[r]+s;if(i in t)return Sl[e]=i}return e}const ed="http://www.w3.org/1999/xlink";function td(t,e,n,s,r,i=hy(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ed,e.slice(6,e.length)):t.setAttributeNS(ed,e,n):n==null||i&&!Gf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":hn(n)?String(n):n)}function nd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?em(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function xs(t,e,n,s){t.addEventListener(e,n,s)}function dE(t,e,n,s){t.removeEventListener(e,n,s)}const sd=Symbol("_vei");function fE(t,e,n,s,r=null){const i=t[sd]||(t[sd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=pE(e);if(s){const h=i[e]=_E(s,r);xs(t,l,h,c)}else o&&(dE(t,l,o,c),i[e]=void 0)}}const rd=/(?:Once|Passive|Capture)$/;function pE(t){let e;if(rd.test(t)){e={};let s;for(;s=t.match(rd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Js(t.slice(2)),e]}let Rl=0;const mE=Promise.resolve(),gE=()=>Rl||(mE.then(()=>Rl=0),Rl=Date.now());function _E(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(yE(s,n.value),e,5,[s])};return n.value=t,n.attached=gE(),n}function yE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const id=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vE=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?oE(t,s,o):e==="style"?uE(t,n,s):wa(e)?Ta(e)||fE(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):EE(t,e,s,o))?(nd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&td(t,e,s,o,i,e!=="value")):t._isVueCE&&(wE(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!We(s)))?nd(t,vt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),td(t,e,s,o))};function EE(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&id(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return id(e)&&We(n)?!1:e in t}function wE(t,e){const n=t._def.props;if(!n)return!1;const s=vt(e);return Array.isArray(n)?n.some(r=>vt(r)===s):Object.keys(n).some(r=>vt(r)===s)}const sm=new WeakMap,rm=new WeakMap,Jo=Symbol("_moveCb"),od=Symbol("_enterCb"),TE=t=>(delete t.props.mode,t),IE=TE({name:"TransitionGroup",props:et({},nE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Jp(),s=Jy();let r,i;return Sp(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!RE(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(bE),r.forEach(CE);const l=r.filter(SE);ec(n.vnode.el),l.forEach(c=>{const h=c.el,f=h.style;Zt(h,o),f.transform=f.webkitTransform=f.transitionDuration="";const m=h[Jo]=E=>{E&&E.target!==h||(!E||E.propertyName.endsWith("transform"))&&(h.removeEventListener("transitionend",m),h[Jo]=null,Xn(h,o))};h.addEventListener("transitionend",m)}),r=[]}),()=>{const o=Re(t),l=sE(o);let c=o.tag||ue;if(r=[],i)for(let h=0;h<i.length;h++){const f=i[h];f.el&&f.el instanceof Element&&(r.push(f),Ni(f,Kl(f,l,s,n)),sm.set(f,im(f.el)))}i=e.default?Tp(e.default()):[];for(let h=0;h<i.length;h++){const f=i[h];f.key!=null&&Ni(f,Kl(f,l,s,n))}return Ft(c,null,i)}}}),AE=IE;function bE(t){const e=t.el;e[Jo]&&e[Jo](),e[od]&&e[od]()}function CE(t){rm.set(t,im(t.el))}function SE(t){const e=sm.get(t),n=rm.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el,o=i.style,l=i.getBoundingClientRect();let c=1,h=1;return i.offsetWidth&&(c=l.width/i.offsetWidth),i.offsetHeight&&(h=l.height/i.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(h)||h===0)&&(h=1),Math.abs(c-1)<.01&&(c=1),Math.abs(h-1)<.01&&(h=1),o.transform=o.webkitTransform=`translate(${s/c}px,${r/h}px)`,o.transitionDuration="0s",t}}function im(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function RE(t,e,n){const s=t.cloneNode(),r=t[Cr];r&&r.forEach(l=>{l.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:o}=nm(s);return i.removeChild(s),o}const Xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>ko(e,n):e};function PE(t){t.target.composing=!0}function ad(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vr=Symbol("_assign");function ld(t,e,n){return e&&(t=t.trim()),n&&(t=Ca(t)),t}const Ue={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[vr]=Xo(r);const i=s||r.props&&r.props.type==="number";xs(t,e?"change":"input",o=>{o.target.composing||t[vr](ld(t.value,n,i))}),(n||i)&&xs(t,"change",()=>{t.value=ld(t.value,n,i)}),e||(xs(t,"compositionstart",PE),xs(t,"compositionend",ad),xs(t,"change",ad))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[vr]=Xo(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ca(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c)}},om={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ia(e);xs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ca(Zo(o)):Zo(o));t[vr](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,pp(()=>{t._assigning=!1})}),t[vr]=Xo(s)},mounted(t,{value:e}){cd(t,e)},beforeUpdate(t,e,n){t[vr]=Xo(n)},updated(t,{value:e}){t._assigning||cd(t,e)}};function cd(t,e){const n=t.multiple,s=oe(e);if(!(n&&!s&&!Ia(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=Zo(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=fy(e,l)>-1}else o.selected=e.has(l);else if(Ki(Zo(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Zo(t){return"_value"in t?t._value:t.value}const kE=["ctrl","shift","alt","meta"],VE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kE.some(n=>t[`${n}Key`]&&!e.includes(n))},xt=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=VE[e[o]];if(l&&l(r,e))return}return t(r,...i)})},DE=et({patchProp:vE},tE);let ud;function NE(){return ud||(ud=Nv(DE))}const OE=(...t)=>{const e=NE().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ME(s);if(!r)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,xE(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function xE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ME(t){return We(t)?document.querySelector(t):t}const LE=()=>{};var hd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},FE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,h=c?t[r+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let E=(l&15)<<2|h>>6,R=h&63;c||(R=64,o||(E=64)),s.push(n[f],n[m],n[E],n[R])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(am(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const m=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||h==null||m==null)throw new UE;const E=i<<2|l>>4;if(s.push(E),h!==64){const R=l<<4&240|h>>2;if(s.push(R),m!==64){const S=h<<6&192|m;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BE=function(t){const e=am(t);return lm.encodeByteArray(e,!0)},ea=function(t){return BE(t).replace(/\./g,"")},cm=function(t){try{return lm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=()=>jE().__FIREBASE_DEFAULTS__,$E=()=>{if(typeof process>"u"||typeof hd>"u")return;const t=hd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cm(t[1]);return e&&JSON.parse(e)},Oa=()=>{try{return LE()||qE()||$E()||HE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},um=t=>{var e,n;return(n=(e=Oa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},WE=t=>{const e=um(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},hm=()=>{var t;return(t=Oa())==null?void 0:t.config},dm=t=>{var e;return(e=Oa())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ea(JSON.stringify(n)),ea(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function QE(){var e;const t=(e=Oa())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZE(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ew(){return!QE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tw(){try{return typeof indexedDB=="object"}catch{return!1}}function nw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="FirebaseError";class Mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=sw,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?rw(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Mn(r,l,s)}}function rw(t,e){return t.replace(iw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const iw=/\{\$([^}]+)}/g;function ow(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $s(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(dd(i)&&dd(o)){if(!$s(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aw(t,e){const n=new lw(t,e);return n.subscribe.bind(n)}class lw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");cw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Pl),r.error===void 0&&(r.error=Pl),r.complete===void 0&&(r.complete=Pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fm(t){return(await fetch(t,{credentials:"include"})).ok}class Hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dw(e))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Os){return this.instances.has(e)}getOptions(e=Os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Os){return this.component?this.component.multipleInstances?e:Os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hw(t){return t===Os?void 0:t}function dw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const pw={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},mw=pe.INFO,gw={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},_w=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=gw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=mw,this._logHandler=_w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const yw=(t,e)=>e.some(n=>t instanceof n);let fd,pd;function vw(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ew(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pm=new WeakMap,tc=new WeakMap,mm=new WeakMap,kl=new WeakMap,jc=new WeakMap;function ww(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(is(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pm.set(n,t)}).catch(()=>{}),jc.set(e,t),e}function Tw(t){if(tc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tc.set(t,e)}let nc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Iw(t){nc=t(nc)}function Aw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vl(this),e,...n);return mm.set(s,e.sort?e.sort():[e]),is(s)}:Ew().includes(t)?function(...e){return t.apply(Vl(this),e),is(pm.get(this))}:function(...e){return is(t.apply(Vl(this),e))}}function bw(t){return typeof t=="function"?Aw(t):(t instanceof IDBTransaction&&Tw(t),yw(t,vw())?new Proxy(t,nc):t)}function is(t){if(t instanceof IDBRequest)return ww(t);if(kl.has(t))return kl.get(t);const e=bw(t);return e!==t&&(kl.set(t,e),jc.set(e,t)),e}const Vl=t=>jc.get(t);function Cw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=is(o);return s&&o.addEventListener("upgradeneeded",c=>{s(is(o.result),c.oldVersion,c.newVersion,is(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Sw=["get","getKey","getAll","getAllKeys","count"],Rw=["put","add","delete","clear"],Dl=new Map;function md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dl.get(e))return Dl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Rw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Sw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),r&&c.done]))[0]};return Dl.set(e,i),i}Iw(t=>({...t,get:(e,n,s)=>md(e,n)||t.get(e,n,s),has:(e,n)=>!!md(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",gd="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Bc("@firebase/app"),Vw="@firebase/app-compat",Dw="@firebase/analytics-compat",Nw="@firebase/analytics",Ow="@firebase/app-check-compat",xw="@firebase/app-check",Mw="@firebase/auth",Lw="@firebase/auth-compat",Fw="@firebase/database",Uw="@firebase/data-connect",Bw="@firebase/database-compat",jw="@firebase/functions",qw="@firebase/functions-compat",$w="@firebase/installations",Hw="@firebase/installations-compat",Ww="@firebase/messaging",zw="@firebase/messaging-compat",Kw="@firebase/performance",Gw="@firebase/performance-compat",Qw="@firebase/remote-config",Yw="@firebase/remote-config-compat",Jw="@firebase/storage",Xw="@firebase/storage-compat",Zw="@firebase/firestore",eT="@firebase/ai",tT="@firebase/firestore-compat",nT="firebase",sT="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="[DEFAULT]",rT={[sc]:"fire-core",[Vw]:"fire-core-compat",[Nw]:"fire-analytics",[Dw]:"fire-analytics-compat",[xw]:"fire-app-check",[Ow]:"fire-app-check-compat",[Mw]:"fire-auth",[Lw]:"fire-auth-compat",[Fw]:"fire-rtdb",[Uw]:"fire-data-connect",[Bw]:"fire-rtdb-compat",[jw]:"fire-fn",[qw]:"fire-fn-compat",[$w]:"fire-iid",[Hw]:"fire-iid-compat",[Ww]:"fire-fcm",[zw]:"fire-fcm-compat",[Kw]:"fire-perf",[Gw]:"fire-perf-compat",[Qw]:"fire-rc",[Yw]:"fire-rc-compat",[Jw]:"fire-gcs",[Xw]:"fire-gcs-compat",[Zw]:"fire-fst",[tT]:"fire-fst-compat",[eT]:"fire-vertex","fire-js":"fire-js",[nT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map,iT=new Map,ic=new Map;function _d(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sr(t){const e=t.name;if(ic.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;ic.set(e,t);for(const n of ta.values())_d(n,t);for(const n of iT.values())_d(n,t);return!0}function qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},os=new Yi("app","Firebase",oT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw os.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=sT;function gm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:rc,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw os.create("bad-app-name",{appName:String(r)});if(n||(n=hm()),!n)throw os.create("no-options");const i=ta.get(r);if(i){if($s(n,i.options)&&$s(s,i.config))return i;throw os.create("duplicate-app",{appName:r})}const o=new fw(r);for(const c of ic.values())o.addComponent(c);const l=new aT(n,s,o);return ta.set(r,l),l}function _m(t=rc){const e=ta.get(t);if(!e&&t===rc&&hm())return gm();if(!e)throw os.create("no-app",{appName:t});return e}function as(t,e,n){let s=rT[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}Sr(new Hs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="firebase-heartbeat-database",cT=1,Mi="firebase-heartbeat-store";let Nl=null;function ym(){return Nl||(Nl=Cw(lT,cT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mi)}catch(n){console.warn(n)}}}}).catch(t=>{throw os.create("idb-open",{originalErrorMessage:t.message})})),Nl}async function uT(t){try{const n=(await ym()).transaction(Mi),s=await n.objectStore(Mi).get(vm(t));return await n.done,s}catch(e){if(e instanceof Mn)kn.warn(e.message);else{const n=os.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function yd(t,e){try{const s=(await ym()).transaction(Mi,"readwrite");await s.objectStore(Mi).put(e,vm(t)),await s.done}catch(n){if(n instanceof Mn)kn.warn(n.message);else{const s=os.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(s.message)}}}function vm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=1024,dT=30;class fT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>dT){const o=gT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:s,unsentEntries:r}=pT(this._heartbeatsCache.heartbeats),i=ea(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kn.warn(n),""}}}function vd(){return new Date().toISOString().substring(0,10)}function pT(t,e=hT){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ed(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ed(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tw()?nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return yd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return yd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ed(t){return ea(JSON.stringify({version:2,heartbeats:t})).length}function gT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){Sr(new Hs("platform-logger",e=>new Pw(e),"PRIVATE")),Sr(new Hs("heartbeat",e=>new fT(e),"PRIVATE")),as(sc,gd,t),as(sc,gd,"esm2020"),as("fire-js","")}_T("");var yT="firebase",vT="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */as(yT,vT,"app");function Em(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ET=Em,wm=new Yi("auth","Firebase",Em());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Bc("@firebase/auth");function wT(t,...e){na.logLevel<=pe.WARN&&na.warn(`Auth (${Or}): ${t}`,...e)}function xo(t,...e){na.logLevel<=pe.ERROR&&na.error(`Auth (${Or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw $c(t,...e)}function on(t,...e){return $c(t,...e)}function Tm(t,e,n){const s={...ET(),[e]:n};return new Yi("auth","Firebase",s).create(e,{appName:t.name})}function An(t){return Tm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $c(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return wm.create(t,...e)}function re(t,e,...n){if(!t)throw $c(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Vn(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function TT(){return wd()==="http:"||wd()==="https:"}function wd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TT()||JE()||"connection"in navigator)?navigator.onLine:!0}function AT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=GE()||XE()}get(){return IT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ST=new Zi(3e4,6e4);function Ln(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fn(t,e,n,s,r={}){return Am(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Ji({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:c,...i};return YE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Xi(t.emulatorConfig.host)&&(h.credentials="include"),Im.fetch()(await bm(t,t.config.apiHost,n,l),h)})}async function Am(t,e,n){t._canInitEmulator=!1;const s={...bT,...e};try{const r=new PT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Io(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tm(t,f,h);Kt(t,f)}}catch(r){if(r instanceof Mn)throw r;Kt(t,"network-request-failed",{message:String(r)})}}async function eo(t,e,n,s,r={}){const i=await fn(t,e,n,s,r);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function bm(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Hc(t.config,r):`${t.config.apiScheme}://${r}`;return CT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function RT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(on(this.auth,"network-request-failed")),ST.get())})}}function Io(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=on(t,e,s);return r.customData._tokenResponse=n,r}function Td(t){return t!==void 0&&t.enterprise!==void 0}class kT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function VT(t,e){return fn(t,"GET","/v2/recaptchaConfig",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e){return fn(t,"POST","/v1/accounts:delete",e)}async function sa(t,e){return fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NT(t,e=!1){const n=Ye(t),s=await n.getIdToken(e),r=Wc(s);re(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:bi(Ol(r.auth_time)),issuedAtTime:bi(Ol(r.iat)),expirationTime:bi(Ol(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ol(t){return Number(t)*1e3}function Wc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const r=cm(n);return r?JSON.parse(r):(xo("Failed to decode base64 JWT payload"),null)}catch(r){return xo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Id(t){const e=Wc(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mn&&OT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function OT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){var m;const e=t.auth,n=await t.getIdToken(),s=await Rr(t,sa(e,{idToken:n}));re(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(m=r.providerUserInfo)!=null&&m.length?Cm(r.providerUserInfo):[],o=LT(t.providerData,i),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ac(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function MT(t){const e=Ye(t);await ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Cm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e){const n=await Am(t,{},async()=>{const s=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await bm(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&Xi(t.emulatorConfig.host)&&(c.credentials="include"),Im.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UT(t,e){return fn(t,"POST","/v2/accounts:revokeToken",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Id(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await FT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Er;return s&&(re(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(re(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new xT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ac(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Rr(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NT(this,e)}reload(){return MT(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ra(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Rr(this,DT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:R,providerData:S,stsTokenManager:L}=n;re(m&&L,e,"internal-error");const H=Er.fromJSON(this.name,L);re(typeof m=="string",e,"internal-error"),Qn(s,e.name),Qn(r,e.name),re(typeof E=="boolean",e,"internal-error"),re(typeof R=="boolean",e,"internal-error"),Qn(i,e.name),Qn(o,e.name),Qn(l,e.name),Qn(c,e.name),Qn(h,e.name),Qn(f,e.name);const X=new qt({uid:m,auth:e,email:r,emailVerified:E,displayName:s,isAnonymous:R,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:H,createdAt:h,lastLoginAt:f});return S&&Array.isArray(S)&&(X.providerData=S.map(Y=>({...Y}))),c&&(X._redirectEventId=c),X}static async _fromIdTokenResponse(e,n,s=!1){const r=new Er;r.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ra(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];re(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Cm(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Er;l.updateFromIdToken(s);const c=new qt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ac(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Map;function In(t){Vn(t instanceof Function,"Expected a class definition");let e=Ad.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ad.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sm.type="NONE";const bd=Sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class wr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sa(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wr(In(bd),e,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||In(bd);const o=Mo(s,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const E=await sa(e,{idToken:f}).catch(()=>{});if(!E)break;m=await qt._fromGetAccountInfoResponse(e,E,f)}else m=qt._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const c=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wr(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new wr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nm(e))return"Blackberry";if(Om(e))return"Webos";if(Pm(e))return"Safari";if((e.includes("chrome/")||km(e))&&!e.includes("edge/"))return"Chrome";if(Dm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rm(t=pt()){return/firefox\//i.test(t)}function Pm(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function km(t=pt()){return/crios\//i.test(t)}function Vm(t=pt()){return/iemobile/i.test(t)}function Dm(t=pt()){return/android/i.test(t)}function Nm(t=pt()){return/blackberry/i.test(t)}function Om(t=pt()){return/webos/i.test(t)}function zc(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BT(t=pt()){var e;return zc(t)&&!!((e=window.navigator)!=null&&e.standalone)}function jT(){return ZE()&&document.documentMode===10}function xm(t=pt()){return zc(t)||Dm(t)||Om(t)||Nm(t)||/windows phone/i.test(t)||Vm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t,e=[]){let n;switch(t){case"Browser":n=Cd(pt());break;case"Worker":n=`${Cd(pt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t,e={}){return fn(t,"GET","/v2/passwordPolicy",Ln(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=6;class WT{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??HT,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sd(this),this.idTokenSubscription=new Sd(this),this.beforeStateQueue=new qT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await wr.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sa(this,{idToken:e}),s=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(An(this));const n=e?Ye(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $T(this),n=new WT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await UT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&wT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _s(t){return Ye(t)}class Sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=aw(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KT(t){xa=t}function Lm(t){return xa.loadJS(t)}function GT(){return xa.recaptchaEnterpriseScript}function QT(){return xa.gapiScript}function YT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class JT{constructor(){this.enterprise=new XT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ZT="recaptcha-enterprise",Fm="NO_RECAPTCHA";class eI{constructor(e){this.type=ZT,this.auth=_s(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{VT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new kT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;Td(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Fm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JT().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&Td(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=GT();c.length!==0&&(c+=l),Lm(c).then(()=>{r(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Rd(t,e,n,s=!1,r=!1){const i=new eI(t);let o;if(r)o=Fm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ia(t,e,n,s,r){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Rd(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Rd(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e){const n=qc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if($s(i,e??{}))return r;Kt(r,"already-initialized")}return n.initialize({options:e})}function nI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function sI(t,e,n){const s=_s(t);re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Um(e),{host:o,port:l}=rI(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){re(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),re($s(h,s.config.emulator)&&$s(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Xi(o)?fm(`${i}//${o}${c}`):iI()}function Um(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rI(t){const e=Um(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Pd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Pd(o)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function oI(t,e){return fn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e){return eo(t,"POST","/v1/accounts:signInWithPassword",Ln(t,e))}async function lI(t,e){return fn(t,"POST","/v1/accounts:sendOobCode",Ln(t,e))}async function cI(t,e){return lI(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}async function hI(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Kc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Li(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(e,n,"signInWithPassword",aI);case"emailLink":return uI(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(e,s,"signUpPassword",oI);case"emailLink":return hI(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e){return eo(t,"POST","/v1/accounts:signInWithIdp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="http://localhost";class Ws extends Kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Ws(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Tr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:dI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pI(t){const e=di(fi(t)).link,n=e?di(fi(e)).deep_link_id:null,s=di(fi(t)).deep_link_id;return(s?di(fi(s)).link:null)||s||n||e||t}class Gc{constructor(e){const n=di(fi(e)),s=n.apiKey??null,r=n.oobCode??null,i=fI(n.mode??null);re(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=pI(e);try{return new Gc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.providerId=xr.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Gc.parseLink(n);return re(s,"argument-error"),Li._fromEmailAndCode(e,s.code,s.tenantId)}}xr.PROVIDER_ID="password";xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Bm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends to{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ws._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ts.credential(n,s)}catch{return null}}}ts.GOOGLE_SIGN_IN_METHOD="google.com";ts.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends to{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com";ns.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends to{constructor(){super("twitter.com")}static credential(e,n){return Ws._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ss.credential(n,s)}catch{return null}}}ss.TWITTER_SIGN_IN_METHOD="twitter.com";ss.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(t,e){return eo(t,"POST","/v1/accounts:signUp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qt._fromIdTokenResponse(e,s,r),o=kd(s);return new zs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=kd(s);return new zs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function kd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Mn{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new oa(e,n,s,r)}}function jm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,i,e,s):i})}async function gI(t,e,n=!1){const s=await Rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e,n=!1){const{auth:s}=t;if(Mt(s.app))return Promise.reject(An(s));const r="reauthenticate";try{const i=await Rr(t,jm(s,r,e,t),n);re(i.idToken,s,"internal-error");const o=Wc(i.idToken);re(o,s,"internal-error");const{sub:l}=o;return re(t.uid===l,s,"user-mismatch"),zs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(t,e,n=!1){if(Mt(t.app))return Promise.reject(An(t));const s="signIn",r=await jm(t,s,e),i=await zs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function yI(t,e){return qm(_s(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t){const e=_s(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vI(t,e,n){const s=_s(t);await ia(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",cI)}async function EI(t,e,n){if(Mt(t.app))return Promise.reject(An(t));const s=_s(t),o=await ia(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&$m(t),c}),l=await zs._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function wI(t,e,n){return Mt(t.app)?Promise.reject(An(t)):yI(Ye(t),xr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&$m(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){return fn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ye(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Rr(s,TI(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const l=s.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function II(t,e,n,s){return Ye(t).onIdTokenChanged(e,n,s)}function AI(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function bI(t,e,n,s){return Ye(t).onAuthStateChanged(e,n,s)}function CI(t){return Ye(t).signOut()}const aa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=1e3,RI=10;class zm extends Wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);jT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,RI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},SI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zm.type="LOCAL";const PI=zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends Wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Km.type="SESSION";const Gm=Km;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ma(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await kI(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Qc("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(m){const E=m;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function DI(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function NI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function xI(){return Qm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="firebaseLocalStorageDb",MI=1,la="firebaseLocalStorage",Jm="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function LI(){const t=indexedDB.deleteDatabase(Ym);return new no(t).toPromise()}function lc(){const t=indexedDB.open(Ym,MI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(la,{keyPath:Jm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(la)?e(s):(s.close(),await LI(),e(await lc()))})})}async function Vd(t,e,n){const s=La(t,!0).put({[Jm]:e,value:n});return new no(s).toPromise()}async function FI(t,e){const n=La(t,!1).get(e),s=await new no(n).toPromise();return s===void 0?null:s.value}function Dd(t,e){const n=La(t,!0).delete(e);return new no(n).toPromise()}const UI=800,BI=3;class Xm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>BI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(xI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await NI(),!this.activeServiceWorker)return;this.sender=new VI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lc();return await Vd(e,aa,"1"),await Dd(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>FI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=La(r,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xm.type="LOCAL";const jI=Xm;new Zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e){return e?In(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends Kc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $I(t){return qm(t.auth,new Yc(t),t.bypassAuthState)}function HI(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),_I(n,new Yc(t),t.bypassAuthState)}async function WI(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),gI(n,new Yc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $I;case"linkViaPopup":case"linkViaRedirect":return WI;case"reauthViaPopup":case"reauthViaRedirect":return HI;default:Kt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=new Zi(2e3,1e4);class pr extends Zm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zI.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="pendingRedirect",Lo=new Map;class GI extends Zm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const s=await QI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QI(t,e){const n=XI(e),s=JI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function YI(t,e){Lo.set(t._key(),e)}function JI(t){return In(t._redirectPersistence)}function XI(t){return Mo(KI,t.config.apiKey,t.name)}async function ZI(t,e,n=!1){if(Mt(t.app))return Promise.reject(An(t));const s=_s(t),r=qI(s,e),o=await new GI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=10*60*1e3;class tA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!eg(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(on(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nd(e))}saveEventToCache(e){this.cachedEventUids.add(Nd(e)),this.lastProcessedEventTime=Date.now()}}function Nd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e={}){return fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iA=/^https?/;async function oA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sA(t);for(const n of e)try{if(aA(n))return}catch{}Kt(t,"unauthorized-domain")}function aA(t){const e=oc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!iA.test(n))return!1;if(rA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new Zi(3e4,6e4);function Od(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cA(t){return new Promise((e,n)=>{var r,i,o;function s(){Od(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Od(),n(on(t,"network-request-failed"))},timeout:lA.get()})}if((i=(r=an().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)s();else{const l=YT("iframefcb");return an()[l]=()=>{gapi.load?s():n(on(t,"network-request-failed"))},Lm(`${QT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function uA(t){return Fo=Fo||cA(t),Fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Zi(5e3,15e3),dA="__/auth/iframe",fA="emulator/auth/iframe",pA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gA(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hc(e,fA):`https://${t.config.authDomain}/${dA}`,s={apiKey:e.apiKey,appName:t.name,v:Or},r=mA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ji(s).slice(1)}`}async function _A(t){const e=await uA(t),n=an().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:gA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{i(o)},hA.get());function c(){an().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vA=500,EA=600,wA="_blank",TA="http://localhost";class xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IA(t,e,n,s=vA,r=EA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...yA,width:s.toString(),height:r.toString(),top:i,left:o},h=pt().toLowerCase();n&&(l=km(h)?wA:n),Rm(h)&&(e=e||TA,c.scrollbars="yes");const f=Object.entries(c).reduce((E,[R,S])=>`${E}${R}=${S},`,"");if(BT(h)&&l!=="_self")return AA(e||"",l),new xd(null);const m=window.open(e||"",l,f);re(m,t,"popup-blocked");try{m.focus()}catch{}return new xd(m)}function AA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="__/auth/handler",CA="emulator/auth/handler",SA=encodeURIComponent("fac");async function Md(t,e,n,s,r,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Or,eventId:r};if(e instanceof Bm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ow(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof to){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${SA}=${encodeURIComponent(c)}`:"";return`${RA(t)}?${Ji(l).slice(1)}${h}`}function RA({config:t}){return t.emulator?Hc(t,CA):`https://${t.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="webStorageSupport";class PA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gm,this._completeRedirectFn=ZI,this._overrideRedirectResult=YI}async _openPopup(e,n,s,r){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Md(e,n,s,oc(),r);return IA(e,i,Qc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Md(e,n,s,oc(),r);return DI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Vn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _A(e),s=new tA(e);return n.register("authEvent",r=>(re(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xl,{type:xl},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[xl];i!==void 0&&n(!!i),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xm()||Pm()||zc()}}const kA=PA;var Ld="@firebase/auth",Fd="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NA(t){Sr(new Hs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mm(t)},h=new zT(s,r,i,c);return nI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Sr(new Hs("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(s=>new VA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),as(Ld,Fd,DA(t)),as(Ld,Fd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=5*60,xA=dm("authIdTokenMaxAge")||OA;let Ud=null;const MA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xA)return;const r=n==null?void 0:n.token;Ud!==r&&(Ud=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function LA(t=_m()){const e=qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tI(t,{popupRedirectResolver:kA,persistence:[jI,PI,Gm]}),s=dm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=MA(i.toString());AI(n,o,()=>o(n.currentUser)),II(n,l=>o(l))}}const r=um("auth");return r&&sI(n,`http://${r}`),n}function FA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}KT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=on("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",FA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NA("Browser");var Bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,tg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.F=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(A,I,T){for(var y=Array(arguments.length-2),we=2;we<arguments.length;we++)y[we-2]=arguments[we];return v.prototype[I].apply(A,y)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,v,_){_||(_=0);const A=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)A[I]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(I=0;I<16;++I)A[I]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],I=b.g[2];let T=b.g[3],y;y=v+(T^_&(I^T))+A[0]+3614090360&4294967295,v=_+(y<<7&4294967295|y>>>25),y=T+(I^v&(_^I))+A[1]+3905402710&4294967295,T=v+(y<<12&4294967295|y>>>20),y=I+(_^T&(v^_))+A[2]+606105819&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(v^I&(T^v))+A[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=v+(T^_&(I^T))+A[4]+4118548399&4294967295,v=_+(y<<7&4294967295|y>>>25),y=T+(I^v&(_^I))+A[5]+1200080426&4294967295,T=v+(y<<12&4294967295|y>>>20),y=I+(_^T&(v^_))+A[6]+2821735955&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(v^I&(T^v))+A[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=v+(T^_&(I^T))+A[8]+1770035416&4294967295,v=_+(y<<7&4294967295|y>>>25),y=T+(I^v&(_^I))+A[9]+2336552879&4294967295,T=v+(y<<12&4294967295|y>>>20),y=I+(_^T&(v^_))+A[10]+4294925233&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(v^I&(T^v))+A[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=v+(T^_&(I^T))+A[12]+1804603682&4294967295,v=_+(y<<7&4294967295|y>>>25),y=T+(I^v&(_^I))+A[13]+4254626195&4294967295,T=v+(y<<12&4294967295|y>>>20),y=I+(_^T&(v^_))+A[14]+2792965006&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(v^I&(T^v))+A[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=v+(I^T&(_^I))+A[1]+4129170786&4294967295,v=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(v^_))+A[6]+3225465664&4294967295,T=v+(y<<9&4294967295|y>>>23),y=I+(v^_&(T^v))+A[11]+643717713&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^v&(I^T))+A[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=v+(I^T&(_^I))+A[5]+3593408605&4294967295,v=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(v^_))+A[10]+38016083&4294967295,T=v+(y<<9&4294967295|y>>>23),y=I+(v^_&(T^v))+A[15]+3634488961&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^v&(I^T))+A[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=v+(I^T&(_^I))+A[9]+568446438&4294967295,v=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(v^_))+A[14]+3275163606&4294967295,T=v+(y<<9&4294967295|y>>>23),y=I+(v^_&(T^v))+A[3]+4107603335&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^v&(I^T))+A[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=v+(I^T&(_^I))+A[13]+2850285829&4294967295,v=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(v^_))+A[2]+4243563512&4294967295,T=v+(y<<9&4294967295|y>>>23),y=I+(v^_&(T^v))+A[7]+1735328473&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^v&(I^T))+A[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=v+(_^I^T)+A[5]+4294588738&4294967295,v=_+(y<<4&4294967295|y>>>28),y=T+(v^_^I)+A[8]+2272392833&4294967295,T=v+(y<<11&4294967295|y>>>21),y=I+(T^v^_)+A[11]+1839030562&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^v)+A[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=v+(_^I^T)+A[1]+2763975236&4294967295,v=_+(y<<4&4294967295|y>>>28),y=T+(v^_^I)+A[4]+1272893353&4294967295,T=v+(y<<11&4294967295|y>>>21),y=I+(T^v^_)+A[7]+4139469664&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^v)+A[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=v+(_^I^T)+A[13]+681279174&4294967295,v=_+(y<<4&4294967295|y>>>28),y=T+(v^_^I)+A[0]+3936430074&4294967295,T=v+(y<<11&4294967295|y>>>21),y=I+(T^v^_)+A[3]+3572445317&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^v)+A[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=v+(_^I^T)+A[9]+3654602809&4294967295,v=_+(y<<4&4294967295|y>>>28),y=T+(v^_^I)+A[12]+3873151461&4294967295,T=v+(y<<11&4294967295|y>>>21),y=I+(T^v^_)+A[15]+530742520&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^v)+A[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=v+(I^(_|~T))+A[0]+4096336452&4294967295,v=_+(y<<6&4294967295|y>>>26),y=T+(_^(v|~I))+A[7]+1126891415&4294967295,T=v+(y<<10&4294967295|y>>>22),y=I+(v^(T|~_))+A[14]+2878612391&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~v))+A[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=v+(I^(_|~T))+A[12]+1700485571&4294967295,v=_+(y<<6&4294967295|y>>>26),y=T+(_^(v|~I))+A[3]+2399980690&4294967295,T=v+(y<<10&4294967295|y>>>22),y=I+(v^(T|~_))+A[10]+4293915773&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~v))+A[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=v+(I^(_|~T))+A[8]+1873313359&4294967295,v=_+(y<<6&4294967295|y>>>26),y=T+(_^(v|~I))+A[15]+4264355552&4294967295,T=v+(y<<10&4294967295|y>>>22),y=I+(v^(T|~_))+A[6]+2734768916&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~v))+A[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=v+(I^(_|~T))+A[4]+4149444226&4294967295,v=_+(y<<6&4294967295|y>>>26),y=T+(_^(v|~I))+A[11]+3174756917&4294967295,T=v+(y<<10&4294967295|y>>>22),y=I+(v^(T|~_))+A[2]+718787259&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~v))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+T&4294967295}s.prototype.v=function(b,v){v===void 0&&(v=b.length);const _=v-this.blockSize,A=this.C;let I=this.h,T=0;for(;T<v;){if(I==0)for(;T<=_;)r(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<v;)if(A[I++]=b.charCodeAt(T++),I==this.blockSize){r(this,A),I=0;break}}else for(;T<v;)if(A[I++]=b[T++],I==this.blockSize){r(this,A),I=0;break}}this.h=I,this.o+=v},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)b[v++]=this.g[_]>>>A&255;return b};function i(b,v){var _=l;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;const _=[];let A=!0;for(let I=b.length-1;I>=0;I--){const T=b[I]|0;A&&T==v||(_[I]=T,A=!1)}this.g=_}var l={};function c(b){return-128<=b&&b<128?i(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return H(h(-b));const v=[];let _=1;for(let A=0;b>=_;A++)v[A]=b/_|0,_*=4294967296;return new o(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return H(f(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(v,8));let A=m;for(let T=0;T<b.length;T+=8){var I=Math.min(8,b.length-T);const y=parseInt(b.substring(T,T+I),v);I<8?(I=h(Math.pow(v,I)),A=A.j(I).add(h(y))):(A=A.j(_),A=A.add(h(y)))}return A}var m=c(0),E=c(1),R=c(16777216);t=o.prototype,t.m=function(){if(L(this))return-H(this).m();let b=0,v=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);b+=(A>=0?A:4294967296+A)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(L(this))return"-"+H(this).toString(b);const v=h(Math.pow(b,6));var _=this;let A="";for(;;){const I=J(_,v).g;_=X(_,I.j(v));let T=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=I,S(_))return T+A;for(;T.length<6;)T="0"+T;A=T+A}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=X(this,b),L(b)?-1:S(b)?0:1};function H(b){const v=b.g.length,_=[];for(let A=0;A<v;A++)_[A]=~b.g[A];return new o(_,~b.h).add(E)}t.abs=function(){return L(this)?H(this):this},t.add=function(b){const v=Math.max(this.g.length,b.g.length),_=[];let A=0;for(let I=0;I<=v;I++){let T=A+(this.i(I)&65535)+(b.i(I)&65535),y=(T>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);A=y>>>16,T&=65535,y&=65535,_[I]=y<<16|T}return new o(_,_[_.length-1]&-2147483648?-1:0)};function X(b,v){return b.add(H(v))}t.j=function(b){if(S(this)||S(b))return m;if(L(this))return L(b)?H(this).j(H(b)):H(H(this).j(b));if(L(b))return H(this.j(H(b)));if(this.l(R)<0&&b.l(R)<0)return h(this.m()*b.m());const v=this.g.length+b.g.length,_=[];for(var A=0;A<2*v;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let I=0;I<b.g.length;I++){const T=this.i(A)>>>16,y=this.i(A)&65535,we=b.i(I)>>>16,rt=b.i(I)&65535;_[2*A+2*I]+=y*rt,Y(_,2*A+2*I),_[2*A+2*I+1]+=T*rt,Y(_,2*A+2*I+1),_[2*A+2*I+1]+=y*we,Y(_,2*A+2*I+1),_[2*A+2*I+2]+=T*we,Y(_,2*A+2*I+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function Y(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function te(b,v){this.g=b,this.h=v}function J(b,v){if(S(v))throw Error("division by zero");if(S(b))return new te(m,m);if(L(b))return v=J(H(b),v),new te(H(v.g),H(v.h));if(L(v))return v=J(b,H(v)),new te(H(v.g),v.h);if(b.g.length>30){if(L(b)||L(v))throw Error("slowDivide_ only works with positive integers.");for(var _=E,A=v;A.l(b)<=0;)_=le(_),A=le(A);var I=_e(_,1),T=_e(A,1);for(A=_e(A,2),_=_e(_,2);!S(A);){var y=T.add(A);y.l(b)<=0&&(I=I.add(_),T=y),A=_e(A,1),_=_e(_,1)}return v=X(b,I.j(v)),new te(I,v)}for(I=m;b.l(v)>=0;){for(_=Math.max(1,Math.floor(b.m()/v.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),T=h(_),y=T.j(v);L(y)||y.l(b)>0;)_-=A,T=h(_),y=T.j(v);S(T)&&(T=E),I=I.add(T),b=X(b,y)}return new te(I,b)}t.B=function(b){return J(this,b).h},t.and=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<v;A++)_[A]=this.i(A)&b.i(A);return new o(_,this.h&b.h)},t.or=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<v;A++)_[A]=this.i(A)|b.i(A);return new o(_,this.h|b.h)},t.xor=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<v;A++)_[A]=this.i(A)^b.i(A);return new o(_,this.h^b.h)};function le(b){const v=b.g.length+1,_=[];for(let A=0;A<v;A++)_[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(_,b.h)}function _e(b,v){const _=v>>5;v%=32;const A=b.g.length-_,I=[];for(let T=0;T<A;T++)I[T]=v>0?b.i(T+_)>>>v|b.i(T+_+1)<<32-v:b.i(T+_);return new o(I,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,tg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ls=o}).apply(typeof Bd<"u"?Bd:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ng,pi,sg,Uo,cc,rg,ig,og;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(a,u){if(u)e:{var p=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in p))break e;p=p[P]}a=a[a.length-1],g=p[a],u=u(g),u!=g&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(u){var p=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&p.push([g,u[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,p){return a.call.apply(a.bind,arguments)}function h(a,u,p){return h=c,h.apply(null,arguments)}function f(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,P,k){for(var W=Array(arguments.length-2),de=2;de<arguments.length;de++)W[de-2]=arguments[de];return u.prototype[P].apply(g,W)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const u=a.length;if(u>0){const p=Array(u);for(let g=0;g<u;g++)p[g]=a[g];return p}return[]}function S(a,u){for(let g=1;g<arguments.length;g++){const P=arguments[g];var p=typeof P;if(p=p!="object"?p:P?Array.isArray(P)?"array":p:"null",p=="array"||p=="object"&&typeof P.length=="number"){p=a.length||0;const k=P.length||0;a.length=p+k;for(let W=0;W<k;W++)a[p+W]=P[W]}else a.push(P)}}class L{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function H(a){o.setTimeout(()=>{throw a},0)}function X(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Y{constructor(){this.h=this.g=null}add(u,p){const g=te.get();g.set(u,p),this.h?this.h.next=g:this.g=g,this.h=g}}var te=new L(()=>new J,a=>a.reset());class J{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let le,_e=!1,b=new Y,v=()=>{const a=Promise.resolve(void 0);le=()=>{a.then(_)}};function _(){for(var a;a=X();){try{a.h.call(a.g)}catch(p){H(p)}var u=te;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}_e=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function we(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}m(we,I),we.prototype.init=function(a,u){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),ze=0;function xe(a,u,p,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!g,this.ha=P,this.key=++ze,this.da=this.fa=!1}function Te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Nt(a,u,p){for(const g in a)u.call(p,a[g],g,a)}function er(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function Qt(a){const u={};for(const p in a)u[p]=a[p];return u}const Ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jr(a,u){let p,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(p in g)a[p]=g[p];for(let k=0;k<Ct.length;k++)p=Ct[k],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function tr(a){this.src=a,this.g={},this.h=0}tr.prototype.add=function(a,u,p,g,P){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const W=pn(a,u,g,P);return W>-1?(u=a[W],p||(u.fa=!1)):(u=new xe(u,this.src,k,!!g,P),u.fa=p,a.push(u)),u};function qr(a,u){const p=u.type;if(p in a.g){var g=a.g[p],P=Array.prototype.indexOf.call(g,u,void 0),k;(k=P>=0)&&Array.prototype.splice.call(g,P,1),k&&(Te(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function pn(a,u,p,g){for(let P=0;P<a.length;++P){const k=a[P];if(!k.da&&k.listener==u&&k.capture==!!p&&k.ha==g)return P}return-1}var Bn="closure_lm_"+(Math.random()*1e6|0),Es={};function $r(a,u,p,g,P){if(Array.isArray(u)){for(let k=0;k<u.length;k++)$r(a,u[k],p,g,P);return null}return p=z(p),a&&a[rt]?a.J(u,p,l(g)?!!g.capture:!1,P):ws(a,u,p,!1,g,P)}function ws(a,u,p,g,P,k){if(!u)throw Error("Invalid event type");const W=l(P)?!!P.capture:!!P;let de=F(a);if(de||(a[Bn]=de=new tr(a)),p=de.add(u,p,g,W,k),p.proxy)return p;if(g=Mu(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)T||(P=W),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(D(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Mu(){function a(p){return u.call(a.src,a.listener,p)}const u=j;return a}function w(a,u,p,g,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)w(a,u[k],p,g,P);else g=l(g)?!!g.capture:!!g,p=z(p),a&&a[rt]?(a=a.i,k=String(u).toString(),k in a.g&&(u=a.g[k],p=pn(u,p,g,P),p>-1&&(Te(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[k],a.h--)))):a&&(a=F(a))&&(u=a.g[u.toString()],a=-1,u&&(a=pn(u,p,g,P)),(p=a>-1?u[a]:null)&&C(p))}function C(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[rt])qr(u.i,a);else{var p=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(p,g,a.capture):u.detachEvent?u.detachEvent(D(p),g):u.addListener&&u.removeListener&&u.removeListener(g),(p=F(u))?(qr(p,a),p.h==0&&(p.src=null,u[Bn]=null)):Te(a)}}}function D(a){return a in Es?Es[a]:Es[a]="on"+a}function j(a,u){if(a.da)a=!0;else{u=new we(u,this);const p=a.listener,g=a.ha||a.src;a.fa&&C(a),a=p.call(g,u)}return a}function F(a){return a=a[Bn],a instanceof tr?a:null}var B="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[B]||(a[B]=function(u){return a.handleEvent(u)}),a[B])}function $(){A.call(this),this.i=new tr(this),this.M=this,this.G=null}m($,A),$.prototype[rt]=!0,$.prototype.removeEventListener=function(a,u,p,g){w(this,a,u,p,g)};function q(a,u){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var P=u;u=new I(g,a),jr(u,P)}P=!0;let k,W;if(p)for(W=p.length-1;W>=0;W--)k=u.g=p[W],P=U(k,g,!0,u)&&P;if(k=u.g=a,P=U(k,g,!0,u)&&P,P=U(k,g,!1,u)&&P,p)for(W=0;W<p.length;W++)k=u.g=p[W],P=U(k,g,!1,u)&&P}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let g=0;g<p.length;g++)Te(p[g]);delete a.g[u],a.h--}}this.G=null},$.prototype.J=function(a,u,p,g){return this.i.add(String(a),u,!1,p,g)},$.prototype.K=function(a,u,p,g){return this.i.add(String(a),u,!0,p,g)};function U(a,u,p,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let P=!0;for(let k=0;k<u.length;++k){const W=u[k];if(W&&!W.da&&W.capture==p){const de=W.listener,Xe=W.ha||W.src;W.fa&&qr(a.i,W),P=de.call(Xe,g)!==!1&&P}}return P&&!g.defaultPrevented}function ne(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function G(a){a.g=ne(()=>{a.g=null,a.i&&(a.i=!1,G(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Z extends A{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:G(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(a){A.call(this),this.h=a,this.g={}}m(se,A);var ye=[];function Ae(a){Nt(a.g,function(u,p){this.g.hasOwnProperty(p)&&C(u)},a),a.g={}}se.prototype.N=function(){se.Z.N.call(this),Ae(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var be=o.JSON.stringify,je=o.JSON.parse,Je=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function St(){}function Rt(){}var Bt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function nr(){I.call(this,"d")}m(nr,I);function it(){I.call(this,"c")}m(it,I);var tt={},Hr=null;function Ts(){return Hr=Hr||new $}tt.Ia="serverreachability";function Lu(a){I.call(this,tt.Ia,a)}m(Lu,I);function Wr(a){const u=Ts();q(u,new Lu(u))}tt.STAT_EVENT="statevent";function Fu(a,u){I.call(this,tt.STAT_EVENT,a),this.stat=u}m(Fu,I);function mt(a){const u=Ts();q(u,new Fu(u,a))}tt.Ja="timingevent";function Uu(a,u){I.call(this,tt.Ja,a),this.size=u}m(Uu,I);function zr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Kr(){this.g=!0}Kr.prototype.ua=function(){this.g=!1};function N_(a,u,p,g,P,k){a.info(function(){if(a.g)if(k){var W="",de=k.split("&");for(let ke=0;ke<de.length;ke++){var Xe=de[ke].split("=");if(Xe.length>1){const nt=Xe[0];Xe=Xe[1];const Jt=nt.split("_");W=Jt.length>=2&&Jt[1]=="type"?W+(nt+"="+Xe+"&"):W+(nt+"=redacted&")}}}else W=null;else W=k;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+p+`
`+W})}function O_(a,u,p,g,P,k,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+p+`
`+k+" "+W})}function sr(a,u,p,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+M_(a,p)+(g?" "+g:"")})}function x_(a,u){a.info(function(){return"TIMEOUT: "+u})}Kr.prototype.info=function(){};function M_(a,u){if(!a.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var p=k[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let W=1;W<g.length;W++)g[W]=""}}}}return be(k)}catch{return u}}var co={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ju;function rl(){}m(rl,St),rl.prototype.g=function(){return new XMLHttpRequest},ju=new rl;function Gr(a){return encodeURIComponent(String(a))}function L_(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function jn(a,u,p,g){this.j=a,this.i=u,this.l=p,this.S=g||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var $u={},il={};function ol(a,u,p){a.M=1,a.A=ho(Yt(u)),a.u=p,a.R=!0,Hu(a,null)}function Hu(a,u){a.F=Date.now(),uo(a),a.B=Yt(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),sh(p.i,"t",g),a.C=0,p=a.j.L,a.h=new qu,a.g=wh(a.j,p?u:null,!a.u),a.P>0&&(a.O=new Z(h(a.Y,a,a.g),a.P)),u=a.V,p=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(ye[0]=P.toString()),P=ye);for(let k=0;k<P.length;k++){const W=$r(p,P[k],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.J?Qt(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Wr(),N_(a.i,a.v,a.B,a.l,a.S,a.u)}jn.prototype.ba=function(a){a=a.target;const u=this.O;u&&Hn(a)==3?u.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const de=Hn(this.g),Xe=this.g.ya(),ke=this.g.ca();if(!(de<3)&&(de!=3||this.g&&(this.h.h||this.g.la()||uh(this.g)))){this.K||de!=4||Xe==7||(Xe==8||ke<=0?Wr(3):Wr(2)),al(this);var u=this.g.ca();this.X=u;var p=F_(this);if(this.o=u==200,O_(this.i,this.v,this.B,this.l,this.S,de,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var k=g;break t}}k=null}if(a=k)sr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ll(this,a);else{this.o=!1,this.m=3,mt(12),Is(this),Qr(this);break e}}if(this.R){a=!0;let nt;for(;!this.K&&this.C<p.length;)if(nt=U_(this,p),nt==il){de==4&&(this.m=4,mt(14),a=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==$u){this.m=4,mt(15),sr(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else sr(this.i,this.l,nt,null),ll(this,nt);if(Wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||p.length!=0||this.h.h||(this.m=1,mt(16),a=!1),this.o=this.o&&a,!a)sr(this.i,this.l,p,"[Invalid Chunked Response]"),Is(this),Qr(this);else if(p.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),gl(W),W.P=!0,mt(11))}}else sr(this.i,this.l,p,null),ll(this,p);de==4&&Is(this),this.o&&!this.K&&(de==4?_h(this.j,this):(this.o=!1,uo(this)))}else Z_(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),Is(this),Qr(this)}}}catch{}finally{}};function F_(a){if(!Wu(a))return a.g.la();const u=uh(a.g);if(u==="")return"";let p="";const g=u.length,P=Hn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Is(a),Qr(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,p+=a.h.i.decode(u[k],{stream:!(P&&k==g-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function Wu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function U_(a,u){var p=a.C,g=u.indexOf(`
`,p);return g==-1?il:(p=Number(u.substring(p,g)),isNaN(p)?$u:(g+=1,g+p>u.length?il:(u=u.slice(g,g+p),a.C=g+p,u)))}jn.prototype.cancel=function(){this.K=!0,Is(this)};function uo(a){a.T=Date.now()+a.H,zu(a,a.H)}function zu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=zr(h(a.aa,a),u)}function al(a){a.D&&(o.clearTimeout(a.D),a.D=null)}jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(x_(this.i,this.B),this.M!=2&&(Wr(),mt(17)),Is(this),this.m=2,Qr(this)):zu(this,this.T-a)};function Qr(a){a.j.I==0||a.K||_h(a.j,a)}function Is(a){al(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Ae(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function ll(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||cl(p.h,a))){if(!a.L&&cl(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)_o(p),mo(p);else break e;ml(p),mt(18)}}else p.xa=P[1],0<p.xa-p.K&&P[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=zr(h(p.Va,p),6e3));Qu(p.h)<=1&&p.ta&&(p.ta=void 0)}else bs(p,11)}else if((a.L||p.g==a)&&_o(p),!y(u))for(P=p.Ba.g.parse(u),u=0;u<P.length;u++){let ke=P[u];const nt=ke[0];if(!(nt<=p.K))if(p.K=nt,ke=ke[1],p.I==2)if(ke[0]=="c"){p.M=ke[1],p.ba=ke[2];const Jt=ke[3];Jt!=null&&(p.ka=Jt,p.j.info("VER="+p.ka));const Cs=ke[4];Cs!=null&&(p.za=Cs,p.j.info("SVER="+p.za));const Wn=ke[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(g=1.5*Wn,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const zn=a.g;if(zn){const vo=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var k=g.h;k.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(ul(k,k.h),k.h=null))}if(g.G){const _l=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;_l&&(g.wa=_l,Me(g.J,g.G,_l))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var W=a;if(g.na=Eh(g,g.L?g.ba:null,g.W),W.L){Yu(g.h,W);var de=W,Xe=g.O;Xe&&(de.H=Xe),de.D&&(al(de),uo(de)),g.g=W}else mh(g);p.i.length>0&&go(p)}else ke[0]!="stop"&&ke[0]!="close"||bs(p,7);else p.I==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?bs(p,7):pl(p):ke[0]!="noop"&&p.l&&p.l.qa(ke),p.A=0)}}Wr(4)}catch{}}var B_=class{constructor(a,u){this.g=a,this.map=u}};function Ku(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qu(a){return a.h?1:a.g?a.g.size:0}function cl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ul(a,u){a.g?a.g.add(u):a.h=u}function Yu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ku.prototype.cancel=function(){if(this.i=Ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ju(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return R(a.i)}var Xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function j_(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let P,k=null;g>=0?(P=a[p].substring(0,g),k=a[p].substring(g+1)):P=a[p],u(P,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof qn?(this.l=a.l,Yr(this,a.j),this.o=a.o,this.g=a.g,Jr(this,a.u),this.h=a.h,hl(this,rh(a.i)),this.m=a.m):a&&(u=String(a).match(Xu))?(this.l=!1,Yr(this,u[1]||"",!0),this.o=Xr(u[2]||""),this.g=Xr(u[3]||"",!0),Jr(this,u[4]),this.h=Xr(u[5]||"",!0),hl(this,u[6]||"",!0),this.m=Xr(u[7]||"")):(this.l=!1,this.i=new ei(null,this.l))}qn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Zr(u,Zu,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Zr(u,Zu,!0),"@"),a.push(Gr(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Zr(p,p.charAt(0)=="/"?H_:$_,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Zr(p,z_)),a.join("")},qn.prototype.resolve=function(a){const u=Yt(this);let p=!!a.j;p?Yr(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var g=a.h;if(p)Jr(u,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=u.h.lastIndexOf("/");P!=-1&&(g=u.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const k=[];for(let W=0;W<P.length;){const de=P[W++];de=="."?g&&W==P.length&&k.push(""):de==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&W==P.length&&k.push("")):(k.push(de),g=!0)}g=k.join("/")}else g=P}return p?u.h=g:p=a.i.toString()!=="",p?hl(u,rh(a.i)):p=!!a.m,p&&(u.m=a.m),u};function Yt(a){return new qn(a)}function Yr(a,u,p){a.j=p?Xr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Jr(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function hl(a,u,p){u instanceof ei?(a.i=u,K_(a.i,a.l)):(p||(u=Zr(u,W_)),a.i=new ei(u,a.l))}function Me(a,u,p){a.i.set(u,p)}function ho(a){return Me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Xr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zr(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,q_),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function q_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zu=/[#\/\?@]/g,$_=/[#\?:]/g,H_=/[#\?]/g,W_=/[#\?@]/g,z_=/#/g;function ei(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function As(a){a.g||(a.g=new Map,a.h=0,a.i&&j_(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}t=ei.prototype,t.add=function(a,u){As(this),this.i=null,a=rr(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function eh(a,u){As(a),u=rr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function th(a,u){return As(a),u=rr(a,u),a.g.has(u)}t.forEach=function(a,u){As(this),this.g.forEach(function(p,g){p.forEach(function(P){a.call(u,P,g,this)},this)},this)};function nh(a,u){As(a);let p=[];if(typeof u=="string")th(a,u)&&(p=p.concat(a.g.get(rr(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}t.set=function(a,u){return As(this),this.i=null,a=rr(this,a),th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=nh(this,a),a.length>0?String(a[0]):u):u};function sh(a,u,p){eh(a,u),p.length>0&&(a.i=null,a.g.set(rr(a,u),R(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var p=u[g];const P=Gr(p);p=nh(this,p);for(let k=0;k<p.length;k++){let W=P;p[k]!==""&&(W+="="+Gr(p[k])),a.push(W)}}return this.i=a.join("&")};function rh(a){const u=new ei;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function rr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function K_(a,u){u&&!a.j&&(As(a),a.i=null,a.g.forEach(function(p,g){const P=g.toLowerCase();g!=P&&(eh(this,g),sh(this,P,p))},a)),a.j=u}function G_(a,u){const p=new Kr;if(o.Image){const g=new Image;g.onload=f($n,p,"TestLoadImage: loaded",!0,u,g),g.onerror=f($n,p,"TestLoadImage: error",!1,u,g),g.onabort=f($n,p,"TestLoadImage: abort",!1,u,g),g.ontimeout=f($n,p,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Q_(a,u){const p=new Kr,g=new AbortController,P=setTimeout(()=>{g.abort(),$n(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(P),k.ok?$n(p,"TestPingServer: ok",!0,u):$n(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),$n(p,"TestPingServer: error",!1,u)})}function $n(a,u,p,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(p)}catch{}}function Y_(){this.g=new Je}function dl(a){this.i=a.Sb||null,this.h=a.ab||!1}m(dl,St),dl.prototype.g=function(){return new fo(this.i,this.h)};function fo(a,u){$.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(fo,$),t=fo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,ni(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ih(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ih(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ti(this):ni(this),this.readyState==3&&ih(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ti(this))},t.Na=function(a){this.g&&(this.response=a,ti(this))},t.ga=function(){this.g&&ti(this)};function ti(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ni(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function oh(a){let u="";return Nt(a,function(p,g){u+=g,u+=":",u+=p,u+=`\r
`}),u}function fl(a,u,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=oh(p),typeof a=="string"?p!=null&&Gr(p):Me(a,u,p))}function qe(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(qe,$);var J_=/^https?$/i,X_=["POST","PUT"];t=qe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ju.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){ah(this,k);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)p.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())p.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(X_,u,void 0)>=0)||g||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of p)this.g.setRequestHeader(k,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){ah(this,k)}};function ah(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,lh(a),po(a)}function lh(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),qe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ch(this):this.Xa())},t.Xa=function(){ch(this)};function ch(a){if(a.h&&typeof i<"u"){if(a.v&&Hn(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var g;if(g=k===0){let W=String(a.D).match(Xu)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),g=!J_.test(W?W.toLowerCase():"")}p=g}if(p)q(a,"complete"),q(a,"success");else{a.o=6;try{var P=Hn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",lh(a)}}finally{po(a)}}}}function po(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||q(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Hn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),je(u)}};function uh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Z_(a){const u={};a=(a.g&&Hn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var p=L_(a[g]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=u[P]||[];u[P]=k,k.push(p)}er(u,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function si(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function hh(a){this.za=0,this.i=[],this.j=new Kr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=si("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=si("baseRetryDelayMs",5e3,a),this.Za=si("retryDelaySeedMs",1e4,a),this.Ta=si("forwardChannelMaxRetries",2,a),this.va=si("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ku(a&&a.concurrentRequestLimit),this.Ba=new Y_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=hh.prototype,t.ka=8,t.I=1,t.connect=function(a,u,p,g){mt(0),this.W=a,this.H=u||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=Eh(this,null,this.W),go(this)};function pl(a){if(dh(a),a.I==3){var u=a.V++,p=Yt(a.J);if(Me(p,"SID",a.M),Me(p,"RID",u),Me(p,"TYPE","terminate"),ri(a,p),u=new jn(a,a.j,u),u.M=2,u.A=ho(Yt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=wh(u.j,null),u.g.ea(u.A)),u.F=Date.now(),uo(u)}vh(a)}function mo(a){a.g&&(gl(a),a.g.cancel(),a.g=null)}function dh(a){mo(a),a.v&&(o.clearTimeout(a.v),a.v=null),_o(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function go(a){if(!Gu(a.h)&&!a.m){a.m=!0;var u=a.Ea;le||v(),_e||(le(),_e=!0),b.add(u,a),a.D=0}}function ey(a,u){return Qu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=zr(h(a.Ea,a,u),yh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new jn(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Qt(k),jr(k,this.U)):k=this.U),this.u!==null||this.R||(P.J=k,k=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=ph(this,P,u),p=Yt(this.J),Me(p,"RID",a),Me(p,"CVER",22),this.G&&Me(p,"X-HTTP-Session-Id",this.G),ri(this,p),k&&(this.R?u="headers="+Gr(oh(k))+"&"+u:this.u&&fl(p,this.u,k)),ul(this.h,P),this.Ra&&Me(p,"TYPE","init"),this.S?(Me(p,"$req",u),Me(p,"SID","null"),P.U=!0,ol(P,p,null)):ol(P,p,u),this.I=2}}else this.I==3&&(a?fh(this,a):this.i.length==0||Gu(this.h)||fh(this))};function fh(a,u){var p;u?p=u.l:p=a.V++;const g=Yt(a.J);Me(g,"SID",a.M),Me(g,"RID",p),Me(g,"AID",a.K),ri(a,g),a.u&&a.o&&fl(g,a.u,a.o),p=new jn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=ph(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ul(a.h,p),ol(p,g,u)}function ri(a,u){a.H&&Nt(a.H,function(p,g){Me(u,g,p)}),a.l&&Nt({},function(p,g){Me(u,g,p)})}function ph(a,u,p){p=Math.min(a.i.length,p);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let de=-1;for(;;){const Xe=["count="+p];de==-1?p>0?(de=P[0].g,Xe.push("ofs="+de)):de=0:Xe.push("ofs="+de);let ke=!0;for(let nt=0;nt<p;nt++){var k=P[nt].g;const Jt=P[nt].map;if(k-=de,k<0)de=Math.max(0,P[nt].g-100),ke=!1;else try{k="req"+k+"_"||"";try{var W=Jt instanceof Map?Jt:Object.entries(Jt);for(const[Cs,Wn]of W){let zn=Wn;l(Wn)&&(zn=be(Wn)),Xe.push(k+Cs+"="+encodeURIComponent(zn))}}catch(Cs){throw Xe.push(k+"type="+encodeURIComponent("_badmap")),Cs}}catch{g&&g(Jt)}}if(ke){W=Xe.join("&");break e}}W=void 0}return a=a.i.splice(0,p),u.G=a,W}function mh(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;le||v(),_e||(le(),_e=!0),b.add(u,a),a.A=0}}function ml(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=zr(h(a.Da,a),yh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,gh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=zr(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),mo(this),gh(this))};function gl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Yt(a.na);Me(u,"RID","rpc"),Me(u,"SID",a.M),Me(u,"AID",a.K),Me(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Me(u,"TO",a.ia),Me(u,"TYPE","xmlhttp"),ri(a,u),a.u&&a.o&&fl(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=ho(Yt(u)),p.u=null,p.R=!0,Hu(p,a)}t.Va=function(){this.C!=null&&(this.C=null,mo(this),ml(this),mt(19))};function _o(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function _h(a,u){var p=null;if(a.g==u){_o(a),gl(a),a.g=null;var g=2}else if(cl(a.h,u))p=u.G,Yu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var P=a.D;g=Ts(),q(g,new Uu(g,p)),go(a)}else mh(a);else if(P=u.m,P==3||P==0&&u.X>0||!(g==1&&ey(a,u)||g==2&&ml(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),P){case 1:bs(a,5);break;case 4:bs(a,10);break;case 3:bs(a,6);break;default:bs(a,2)}}}function yh(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function bs(a,u){if(a.j.info("Error code "+u),u==2){var p=h(a.bb,a),g=a.Ua;const P=!g;g=new qn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Yr(g,"https"),ho(g),P?G_(g.toString(),p):Q_(g.toString(),p)}else mt(2);a.I=0,a.l&&a.l.pa(u),vh(a),dh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function vh(a){if(a.I=0,a.ja=[],a.l){const u=Ju(a.h);(u.length!=0||a.i.length!=0)&&(S(a.ja,u),S(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function Eh(a,u,p){var g=p instanceof qn?Yt(p):new qn(p);if(g.g!="")u&&(g.g=u+"."+g.g),Jr(g,g.u);else{var P=o.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;const k=new qn(null);g&&Yr(k,g),u&&(k.g=u),P&&Jr(k,P),p&&(k.h=p),g=k}return p=a.G,u=a.wa,p&&u&&Me(g,p,u),Me(g,"VER",a.ka),ri(a,g),g}function wh(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new qe(new dl({ab:p})):new qe(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Th(){}t=Th.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function yo(){}yo.prototype.g=function(a,u){return new Pt(a,u)};function Pt(a,u){$.call(this),this.g=new hh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!y(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ir(this)}m(Pt,$),Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){pl(this.g)},Pt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=be(a),a=p);u.i.push(new B_(u.Ya++,a)),u.I==3&&go(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,Pt.Z.N.call(this)};function Ih(a){nr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}m(Ih,nr);function Ah(){it.call(this),this.status=1}m(Ah,it);function ir(a){this.g=a}m(ir,Th),ir.prototype.ra=function(){q(this.g,"a")},ir.prototype.qa=function(a){q(this.g,new Ih(a))},ir.prototype.pa=function(a){q(this.g,new Ah)},ir.prototype.oa=function(){q(this.g,"b")},yo.prototype.createWebChannel=yo.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,og=function(){return new yo},ig=function(){return Ts()},rg=tt,cc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,Uo=co,Bu.COMPLETE="complete",sg=Bu,Rt.EventType=Bt,Bt.OPEN="a",Bt.CLOSE="b",Bt.ERROR="c",Bt.MESSAGE="d",$.prototype.listen=$.prototype.J,pi=Rt,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,ng=qe}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="12.11.0";function UA(t){Mr=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Bc("@firebase/firestore");function ur(){return Ks.logLevel}function Q(t,...e){if(Ks.logLevel<=pe.DEBUG){const n=e.map(Jc);Ks.debug(`Firestore (${Mr}): ${t}`,...n)}}function Dn(t,...e){if(Ks.logLevel<=pe.ERROR){const n=e.map(Jc);Ks.error(`Firestore (${Mr}): ${t}`,...n)}}function Gs(t,...e){if(Ks.logLevel<=pe.WARN){const n=e.map(Jc);Ks.warn(`Firestore (${Mr}): ${t}`,...n)}}function Jc(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,ag(t,s,n)}function ag(t,e,n){let s=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Dn(s),new Error(s)}function Se(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||ag(e,r,s)}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class jA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qA{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Se(typeof s.accessToken=="string",31837,{l:s}),new lg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new ut(e)}}class $A{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class HA{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new $A(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const s=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new jd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=zA(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function uc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return Ml(r)===Ml(i)?me(r,i):Ml(r)?1:-1}return me(t.length,e.length)}const KA=55296,GA=57343;function Ml(t){const e=t.charCodeAt(0);return e>=KA&&e<=GA}function Pr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="__name__";class tn{constructor(e,n,s){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ie(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=tn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const s=tn.isNumericId(e),r=tn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?tn.extractNumericId(e).compare(tn.extractNumericId(n)):uc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ls.fromString(e.substring(4,e.length-2))}}class Oe extends tn{construct(e,n,s){return new Oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const QA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends tn{construct(e,n,s){return new at(e,n,s)}static isValidIdentifier(e){return QA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qd}static keyField(){return new at([qd])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new K(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new K(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new K(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Oe.fromString(e))}static fromName(e){return new ee(Oe.fromString(e).popFirst(5))}static empty(){return new ee(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e,n){if(!n)throw new K(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YA(t,e,n,s){if(e===!0&&s===!0)throw new K(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $d(t){if(!ee.isDocumentKey(t))throw new K(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hd(t){if(ee.isDocumentKey(t))throw new K(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ug(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Fa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fa(t);throw new K(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function so(t,e){if(!ug(t))throw new K(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new K(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=-62135596800,zd=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*zd);return new Fe(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Wd)throw new K(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zd}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(so(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:Qe("string",Fe._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Fe(0,0))}static max(){return new ae(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=-1;function JA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ae.fromTimestamp(s===1e9?new Fe(n+1,0):new Fe(n,s));return new hs(r,ee.empty(),e)}function XA(t){return new hs(t.readTime,t.key,Fi)}class hs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new hs(ae.min(),ee.empty(),Fi)}static max(){return new hs(ae.max(),ee.empty(),Fi)}}function ZA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==eb)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,s)=>{n(e)})}static reject(e){return new M((n,s)=>{s(e)})}static waitFor(e){return new M((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=M.resolve(!1);for(const s of e)n=n.next(r=>r?M.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new M((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{o[h]=f,++l,l===i&&s(o)},f=>r(f))}})}static doWhile(e,n){return new M((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function nb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ua.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=-1;function Ba(t){return t==null}function ca(t){return t===0&&1/t==-1/0}function sb(t){return typeof t=="number"&&Number.isInteger(t)&&!ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="";function rb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kd(e)),e=ib(t.get(n),e);return Kd(e)}function ib(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case hg:n+="";break;default:n+=i}}return n}function Kd(t){return t+hg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ot.RED,this.left=r??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ot(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qd(this.data.getIterator())}getIteratorFrom(e){return new Qd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Qd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Ze(at.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fg("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=ob.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="server_timestamp",mg="__type__",gg="__previous_value__",_g="__local_write_time__";function eu(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[mg])==null?void 0:s.stringValue)===pg}function ja(t){const e=t.mapValue.fields[gg];return eu(e)?ja(e):e}function Ui(t){const e=ds(t.mapValue.fields[_g].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,s,r,i,o,l,c,h,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const ua="(default)";class Bi{constructor(e,n){this.projectId=e,this.database=n||ua}static empty(){return new Bi("","")}get isDefaultDatabase(){return this.database===ua}isEqual(e){return e instanceof Bi&&e.projectId===this.projectId&&e.database===this.database}}function lb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bi(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="__type__",cb="__max__",Co={mapValue:{}},vg="__vector__",ha="value";function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eu(t)?4:hb(t)?9007199254740991:ub(t)?10:11:ie(28295,{value:t})}function dn(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ui(t).isEqual(Ui(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=ds(r.timestampValue),l=ds(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return fs(r.bytesValue).isEqual(fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return He(r.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(r.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return He(r.integerValue)===He(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=He(r.doubleValue),l=He(i.doubleValue);return o===l?ca(o)===ca(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Pr(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Gd(o)!==Gd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!dn(o[c],l[c])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function ji(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function kr(t,e){if(t===e)return 0;const n=ps(t),s=ps(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=He(i.integerValue||i.doubleValue),c=He(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Yd(t.timestampValue,e.timestampValue);case 4:return Yd(Ui(t),Ui(e));case 5:return uc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=fs(i),c=fs(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=me(l[h],c[h]);if(f!==0)return f}return me(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=me(He(i.latitude),He(o.latitude));return l!==0?l:me(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Jd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var E,R,S,L;const l=i.fields||{},c=o.fields||{},h=(E=l[ha])==null?void 0:E.arrayValue,f=(R=c[ha])==null?void 0:R.arrayValue,m=me(((S=h==null?void 0:h.values)==null?void 0:S.length)||0,((L=f==null?void 0:f.values)==null?void 0:L.length)||0);return m!==0?m:Jd(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Co.mapValue&&o===Co.mapValue)return 0;if(i===Co.mapValue)return 1;if(o===Co.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const E=uc(c[m],f[m]);if(E!==0)return E;const R=kr(l[c[m]],h[f[m]]);if(R!==0)return R}return me(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{he:n})}}function Yd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=ds(t),s=ds(e),r=me(n.seconds,s.seconds);return r!==0?r:me(n.nanos,s.nanos)}function Jd(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=kr(n[r],s[r]);if(i)return i}return me(n.length,s.length)}function Vr(t){return hc(t)}function hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ds(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=hc(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${hc(n.fields[o])}`;return r+"}"}(t.mapValue):ie(61005,{value:t})}function Bo(t){switch(ps(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ja(t);return e?16+Bo(e):16;case 5:return 2*t.stringValue.length;case 6:return fs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Bo(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return ys(s.fields,(i,o)=>{r+=i.length+Bo(o)}),r}(t.mapValue);default:throw ie(13486,{value:t})}}function Xd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dc(t){return!!t&&"integerValue"in t}function tu(t){return!!t&&"arrayValue"in t}function Zd(t){return!!t&&"nullValue"in t}function ef(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jo(t){return!!t&&"mapValue"in t}function ub(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[yg])==null?void 0:s.stringValue)===vg}function Ci(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ci(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return{...t}}function hb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===cb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!jo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=at.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=Ci(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());jo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];jo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ys(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new At(Ci(this.value))}}function Eg(t){const e=[];return ys(t.fields,(n,s)=>{const r=new at([n]);if(jo(s)){const i=Eg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ae.min(),ae.min(),ae.min(),At.empty(),0)}static newFoundDocument(e,n,s,r){return new dt(e,1,n,ae.min(),s,r,0)}static newNoDocument(e,n){return new dt(e,2,n,ae.min(),ae.min(),At.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ae.min(),ae.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function tf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ee.comparator(ee.fromName(o.referenceValue),n.key):s=kr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n="asc"){this.field=e,this.dir=n}}function db(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{}class Ge extends wg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new pb(e,n,s):n==="array-contains"?new _b(e,s):n==="in"?new yb(e,s):n==="not-in"?new vb(e,s):n==="array-contains-any"?new Eb(e,s):new Ge(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new mb(e,s):new gb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(kr(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends wg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Gt(e,n)}matches(e){return Tg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Tg(t){return t.op==="and"}function Ig(t){return fb(t)&&Tg(t)}function fb(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function fc(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Vr(t.value);if(Ig(t))return t.filters.map(e=>fc(e)).join(",");{const e=t.filters.map(n=>fc(n)).join(",");return`${t.op}(${e})`}}function Ag(t,e){return t instanceof Ge?function(s,r){return r instanceof Ge&&s.op===r.op&&s.field.isEqual(r.field)&&dn(s.value,r.value)}(t,e):t instanceof Gt?function(s,r){return r instanceof Gt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&Ag(o,r.filters[l]),!0):!1}(t,e):void ie(19439)}function bg(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Vr(n.value)}`}(t):t instanceof Gt?function(n){return n.op.toString()+" {"+n.getFilters().map(bg).join(" ,")+"}"}(t):"Filter"}class pb extends Ge{constructor(e,n,s){super(e,n,s),this.key=ee.fromName(s.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class mb extends Ge{constructor(e,n){super(e,"in",n),this.keys=Cg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gb extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Cg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cg(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(s=>ee.fromName(s.referenceValue))}class _b extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tu(n)&&ji(n.arrayValue,this.value)}}class yb extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ji(this.value.arrayValue,n)}}class vb extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ji(this.value.arrayValue,n)}}class Eb extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ji(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function sf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new wb(t,e,n,s,r,i,o)}function nu(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>fc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vr(s)).join(",")),e.Te=n}return e.Te}function su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!db(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ag(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nf(t.startAt,e.startAt)&&nf(t.endAt,e.endAt)}function pc(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Tb(t,e,n,s,r,i,o,l){return new Ur(t,e,n,s,r,i,o,l)}function qa(t){return new Ur(t)}function rf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ib(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Sg(t){return t.collectionGroup!==null}function Si(t){const e=ce(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new qi(i,s))}),n.has(at.keyField().canonicalString())||e.Ee.push(new qi(at.keyField(),s))}return e.Ee}function ln(t){const e=ce(t);return e.Ie||(e.Ie=Ab(e,Si(t))),e.Ie}function Ab(t,e){if(t.limitType==="F")return sf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new qi(r.field,i)});const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;return sf(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function mc(t,e){const n=t.filters.concat([e]);return new Ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bb(t,e){const n=t.explicitOrderBy.concat([e]);return new Ur(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function fa(t,e,n){return new Ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $a(t,e){return su(ln(t),ln(e))&&t.limitType===e.limitType}function Rg(t){return`${nu(ln(t))}|lt:${t.limitType}`}function hr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>bg(r)).join(", ")}]`),Ba(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Vr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Vr(r)).join(",")),`Target(${s})`}(ln(t))}; limitType=${t.limitType})`}function Ha(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ee.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Si(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const h=tf(o,l,c);return o.inclusive?h<=0:h<0}(s.startAt,Si(s),r)||s.endAt&&!function(o,l,c){const h=tf(o,l,c);return o.inclusive?h>=0:h>0}(s.endAt,Si(s),r))}(t,e)}function Cb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pg(t){return(e,n)=>{let s=!1;for(const r of Si(t)){const i=Sb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Sb(t,e,n){const s=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?kr(c,h):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return dg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new Be(ee.comparator);function Nn(){return Rb}const kg=new Be(ee.comparator);function mi(...t){let e=kg;for(const n of t)e=e.insert(n.key,n);return e}function Vg(t){let e=kg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ls(){return Ri()}function Dg(){return Ri()}function Ri(){return new Xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Pb=new Be(ee.comparator),kb=new Ze(ee.comparator);function ge(...t){let e=kb;for(const n of t)e=e.add(n);return e}const Vb=new Ze(me);function Db(){return Vb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function Ng(t){return{integerValue:""+t}}function Nb(t,e){return sb(e)?Ng(e):ru(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this._=void 0}}function Ob(t,e,n){return t instanceof $i?function(r,i){const o={fields:{[mg]:{stringValue:pg},[_g]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&eu(i)&&(i=ja(i)),i&&(o.fields[gg]=i),{mapValue:o}}(n,e):t instanceof Hi?xg(t,e):t instanceof Wi?Mg(t,e):function(r,i){const o=Og(r,i),l=of(o)+of(r.Ae);return dc(o)&&dc(r.Ae)?Ng(l):ru(r.serializer,l)}(t,e)}function xb(t,e,n){return t instanceof Hi?xg(t,e):t instanceof Wi?Mg(t,e):n}function Og(t,e){return t instanceof pa?function(s){return dc(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class $i extends Wa{}class Hi extends Wa{constructor(e){super(),this.elements=e}}function xg(t,e){const n=Lg(e);for(const s of t.elements)n.some(r=>dn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Wi extends Wa{constructor(e){super(),this.elements=e}}function Mg(t,e){let n=Lg(e);for(const s of t.elements)n=n.filter(r=>!dn(r,s));return{arrayValue:{values:n}}}class pa extends Wa{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function of(t){return He(t.integerValue||t.doubleValue)}function Lg(t){return tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.field=e,this.transform=n}}function Lb(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Hi&&r instanceof Hi||s instanceof Wi&&r instanceof Wi?Pr(s.elements,r.elements,dn):s instanceof pa&&r instanceof pa?dn(s.Ae,r.Ae):s instanceof $i&&r instanceof $i}(t.transform,e.transform)}class Fb{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class za{}function Fg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iu(t.key,Ut.none()):new ro(t.key,t.data,Ut.none());{const n=t.data,s=At.empty();let r=new Ze(at.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new vs(t.key,s,new Dt(r.toArray()),Ut.none())}}function Ub(t,e,n){t instanceof ro?function(r,i,o){const l=r.value.clone(),c=lf(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(r,i,o){if(!qo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=lf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ug(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pi(t,e,n,s){return t instanceof ro?function(i,o,l,c){if(!qo(i.precondition,o))return l;const h=i.value.clone(),f=cf(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,s):t instanceof vs?function(i,o,l,c){if(!qo(i.precondition,o))return l;const h=cf(i.fieldTransforms,c,o),f=o.data;return f.setAll(Ug(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,s):function(i,o,l){return qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Bb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Og(s.transform,r||null);i!=null&&(n===null&&(n=At.empty()),n.set(s.field,i))}return n||null}function af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Pr(s,r,(i,o)=>Lb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends za{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vs extends za{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ug(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function lf(t,e,n){const s=new Map;Se(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,xb(o,l,n[r]))}return s}function cf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ob(i,o,e))}return s}class iu extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jb extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Ub(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Pi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Pi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Dg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=Fg(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Pr(this.mutations,e.mutations,(n,s)=>af(n,s))&&Pr(this.baseMutations,e.baseMutations,(n,s)=>af(n,s))}}class ou{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Se(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return Pb}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ou(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ve;function Wb(t){switch(t){case x.OK:return ie(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function Bg(t){if(t===void 0)return Dn("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ke.OK:return x.OK;case Ke.CANCELLED:return x.CANCELLED;case Ke.UNKNOWN:return x.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return x.INTERNAL;case Ke.UNAVAILABLE:return x.UNAVAILABLE;case Ke.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ke.NOT_FOUND:return x.NOT_FOUND;case Ke.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ke.ABORTED:return x.ABORTED;case Ke.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ke.DATA_LOSS:return x.DATA_LOSS;default:return ie(39323,{code:t})}}(ve=Ke||(Ke={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new ls([4294967295,4294967295],0);function uf(t){const e=zb().encode(t),n=new tg;return n.update(e),new Uint8Array(n.digest())}function hf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ls([n,s],0),new ls([r,i],0)]}class au{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(s<0)throw new gi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ls.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(ls.fromNumber(s)));return r.compare(Kb)===1&&(r=new ls([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=uf(e),[s,r]=hf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new au(i,r,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=uf(e),[s,r]=hf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ka(ae.min(),r,new Be(me),Nn(),ge())}}class io{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new io(s,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class jg{constructor(e,n){this.targetId=e,this.Ce=n}}class qg{constructor(e,n,s=lt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class df{constructor(){this.ve=0,this.Fe=ff(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ge(),n=ge(),s=ge();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ie(38017,{changeType:i})}}),new io(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=ff()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Gb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nn(),this.Je=So(),this.He=So(),this.Ze=new Be(me)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,r)=>{this.rt(r)&&n(r)})}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(pc(i))if(s===0){const o=new ee(i.path);this.et(n,o,dt.newNoDocument(o,ae.min()))}else Se(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=fs(s).toUint8Array()}catch(c){if(c instanceof fg)return Gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new au(o,r,i)}catch(c){return Gs(c instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),r++)}),r}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&pc(l.target)){const c=new ee(l.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,dt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let s=ge();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const r=new Ka(e,n,this.Ze,this.je,s);return this.je=Nn(),this.Je=So(),this.He=So(),this.Ze=new Be(me),r}Ye(e,n){if(!this.rt(e))return;const s=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.It(e,n)?r.Ke(n,1):r.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new df,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ze(me),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ze(me),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new df),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function So(){return new Be(ee.comparator)}function ff(){return new Be(ee.comparator)}const Qb={asc:"ASCENDING",desc:"DESCENDING"},Yb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jb={and:"AND",or:"OR"};class Xb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gc(t,e){return t.useProto3Json||Ba(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $g(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zb(t,e){return ma(t,e.toTimestamp())}function cn(t){return Se(!!t,49232),ae.fromTimestamp(function(n){const s=ds(n);return new Fe(s.seconds,s.nanos)}(t))}function lu(t,e){return _c(t,e).canonicalString()}function _c(t,e){const n=function(r){return new Oe(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Hg(t){const e=Oe.fromString(t);return Se(Qg(e),10190,{key:e.toString()}),e}function yc(t,e){return lu(t.databaseId,e.path)}function Ll(t,e){const n=Hg(e);if(n.get(1)!==t.databaseId.projectId)throw new K(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(zg(n))}function Wg(t,e){return lu(t.databaseId,e)}function e0(t){const e=Hg(t);return e.length===4?Oe.emptyPath():zg(e)}function vc(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zg(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function pf(t,e,n){return{name:yc(t,e),fields:n.value.mapValue.fields}}function t0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Se(f===void 0||typeof f=="string",58123),lt.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?x.UNKNOWN:Bg(h.code);return new K(f,h.message||"")}(o);n=new qg(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ll(t,s.document.name),i=cn(s.document.updateTime),o=s.document.createTime?cn(s.document.createTime):ae.min(),l=new At({mapValue:{fields:s.document.fields}}),c=dt.newFoundDocument(r,i,o,l),h=s.targetIds||[],f=s.removedTargetIds||[];n=new $o(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ll(t,s.document),i=s.readTime?cn(s.readTime):ae.min(),o=dt.newNoDocument(r,i),l=s.removedTargetIds||[];n=new $o([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ll(t,s.document),i=s.removedTargetIds||[];n=new $o([],i,r,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Hb(r,i),l=s.targetId;n=new jg(l,o)}}return n}function n0(t,e){let n;if(e instanceof ro)n={update:pf(t,e.key,e.value)};else if(e instanceof iu)n={delete:yc(t,e.key)};else if(e instanceof vs)n={update:pf(t,e.key,e.data),updateMask:h0(e.fieldMask)};else{if(!(e instanceof jb))return ie(16599,{dt:e.type});n={verify:yc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof $i)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ie(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Zb(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)}(t,e.precondition)),n}function s0(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(r,i){let o=r.updateTime?cn(r.updateTime):cn(i);return o.isEqual(ae.min())&&(o=cn(i)),new Fb(o,r.transformResults||[])}(n,e))):[]}function r0(t,e){return{documents:[Wg(t,e.path)]}}function i0(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Wg(t,r);const i=function(h){if(h.length!==0)return Gg(Gt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:dr(E.field),direction:l0(E.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=gc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:r}}function o0(t){let e=e0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Se(s===1,65062);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const E=Kg(m);return E instanceof Gt&&Ig(E)?E.getFilters():[E]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(E=>function(S){return new qi(fr(S.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(n.orderBy));let l=null;n.limit&&(l=function(m){let E;return E=typeof m=="object"?m.value:m,Ba(E)?null:E}(n.limit));let c=null;n.startAt&&(c=function(m){const E=!!m.before,R=m.values||[];return new da(R,E)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const E=!m.before,R=m.values||[];return new da(R,E)}(n.endAt)),Tb(e,r,o,i,l,"F",c,h)}function a0(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=fr(n.unaryFilter.field);return Ge.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=fr(n.unaryFilter.field);return Ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fr(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fr(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(fr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gt.create(n.compositeFilter.filters.map(s=>Kg(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function l0(t){return Qb[t]}function c0(t){return Yb[t]}function u0(t){return Jb[t]}function dr(t){return{fieldPath:t.canonicalString()}}function fr(t){return at.fromServerFormat(t.fieldPath)}function Gg(t){return t instanceof Ge?function(n){if(n.op==="=="){if(ef(n.value))return{unaryFilter:{field:dr(n.field),op:"IS_NAN"}};if(Zd(n.value))return{unaryFilter:{field:dr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ef(n.value))return{unaryFilter:{field:dr(n.field),op:"IS_NOT_NAN"}};if(Zd(n.value))return{unaryFilter:{field:dr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(n.field),op:c0(n.op),value:n.value}}}(t):t instanceof Gt?function(n){const s=n.getFilters().map(r=>Gg(r));return s.length===1?s[0]:{compositeFilter:{op:u0(n.op),filters:s}}}(t):ie(54877,{filter:t})}function h0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Yg(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s,r,i=ae.min(),o=ae.min(),l=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.yt=e}}function f0(t){const e=o0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this.bn=new m0}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(hs.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(hs.min())}updateCollectionGroup(e,n,s){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class m0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ze(Oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ze(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jg=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Jg,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Dr(0)}static ar(){return new Dr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="LruGarbageCollector",g0=1048576;function _f([t,e],[n,s]){const r=me(t,n);return r===0?me(e,s):r}class _0{constructor(e){this.Pr=e,this.buffer=new Ze(_f),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();_f(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class y0{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Q(gf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fr(n)?Q(gf,"Ignoring IndexedDB error during garbage collection: ",n):await Lr(n)}await this.Ar(3e5)})}}class v0{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ua.ce);const s=new _0(n);return this.Vr.forEachTarget(e,r=>s.Ir(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Ir(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(mf)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mf):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let s,r,i,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),r=this.params.maximumSequenceNumbersToCollect):r=m,o=Date.now(),this.nthSequenceNumber(e,r))).next(m=>(s=m,l=Date.now(),this.removeTargets(e,s,n))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(m=>(h=Date.now(),ur()<=pe.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:m})))}}function E0(t,e){return new v0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?M.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Pi(s.mutation,r,Dt.empty(),Fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ge()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ge()){const r=Ls();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=mi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ge()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=Nn();const o=Ri(),l=function(){return Ri()}();return n.forEach((c,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof vs)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Pi(f.mutation,h,f.mutation.getFieldMask(),Fe.now())):o.set(h.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new T0(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const s=Ri();let r=new Be((o,l)=>o-l),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=s.get(c)||Dt.empty();f=l.applyToLocalView(h,f),s.set(c,f);const m=(r.get(l.batchId)||ge()).add(c);r=r.insert(l.batchId,m)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=Dg();f.forEach(E=>{if(!i.has(E)){const R=Fg(n.get(E),s.get(E));R!==null&&m.set(E,R),i=i.add(E)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return Ib(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):M.resolve(Ls());let l=Fi,c=i;return o.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{c=c.insert(f,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ge())).next(f=>({batchId:l,changes:Vg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(s=>{let r=mi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(m,E){return new Ur(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(f=>{f.forEach((m,E)=>{o=o.insert(m,E)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let l=mi();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Pi(f.mutation,h,Dt.empty(),Fe.now()),Ha(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:cn(r.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(r){return{name:r.name,query:f0(r.bundledQuery),readTime:cn(r.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.overlays=new Be(ee.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ls();return M.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(s)),M.resolve()}getOverlaysForCollection(e,n,s){const r=Ls(),i=n.length+1,o=new ee(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return M.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Be((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=Ls(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ls(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=r)););return M.resolve(l)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new $b(n,s));let i=this.Lr.get(n);i===void 0&&(i=ge(),this.Lr.set(n,i)),this.Lr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.kr=new Ze(st.qr),this.Kr=new Ze(st.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const s=new st(e,n);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Wr(new st(e,n))}Qr(e,n){e.forEach(s=>this.removeReference(s,n))}Gr(e){const n=new ee(new Oe([])),s=new st(n,e),r=new st(n,e+1),i=[];return this.Kr.forEachInRange([s,r],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new ee(new Oe([])),s=new st(n,e),r=new st(n,e+1);let i=ge();return this.Kr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class st{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return ee.comparator(e.key,n.key)||me(e.Jr,n.Jr)}static Ur(e,n){return me(e.Jr,n.Jr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ze(st.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qb(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Hr=this.Hr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Xr(s),i=r<0?0:r;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Zc:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new st(n,0),r=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],o=>{const l=this.Zr(o.Jr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ze(me);return n.forEach(r=>{const i=new st(r,0),o=new st(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{s=s.add(l.Jr)})}),M.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ee.isDocumentKey(i)||(i=i.child(""));const o=new st(new ee(i),0);let l=new Ze(me);return this.Hr.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(c.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Se(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return M.forEach(n.mutations,r=>{const i=new st(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=s})}nr(e){}containsKey(e,n){const s=new st(n,0),r=this.Hr.firstAfterOrEqual(s);return M.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.ti=e,this.docs=function(){return new Be(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return M.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let s=Nn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():dt.newInvalidDocument(r))}),M.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Nn();const o=n.path,l=new ee(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ZA(XA(f),s)<=0||(r.has(f.key)||Ha(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ie(9500)}ni(e,n){return M.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new P0(this)}getSize(e){return M.resolve(this.size)}}class P0 extends w0{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.persistence=e,this.ri=new Xs(n=>nu(n),su),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.ii=0,this.si=new cu,this.targetCount=0,this.oi=Dr._r()}forEachTarget(e,n){return this.ri.forEach((s,r)=>n(r)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Dr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),M.waitFor(i).next(()=>r)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const s=this.ri.get(n)||null;return M.resolve(s)}addMatchingKeys(e,n,s){return this.si.$r(n,s),M.resolve()}removeMatchingKeys(e,n,s){this.si.Qr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const s=this.si.jr(n);return M.resolve(s)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this._i={},this.overlays={},this.ai=new Ua(0),this.ui=!1,this.ui=!0,this.ci=new C0,this.referenceDelegate=e(this),this.li=new k0(this),this.indexManager=new p0,this.remoteDocumentCache=function(r){return new R0(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new d0(n),this.Pi=new A0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new b0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this._i[e.toKey()];return s||(s=new S0(n,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,s){Q("MemoryPersistence","Starting transaction:",e);const r=new V0(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(i=>this.referenceDelegate.Ei(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ii(e,n){return M.or(Object.values(this._i).map(s=>()=>s.containsKey(e,n)))}}class V0 extends tb{constructor(e){super(),this.currentSequenceNumber=e}}class uu{constructor(e){this.persistence=e,this.Ri=new cu,this.Ai=null}static Vi(e){return new uu(e)}get di(){if(this.Ai)return this.Ai;throw ie(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),M.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.di.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,s=>{const r=ee.fromPath(s);return this.mi(e,r).next(i=>{i||n.removeEntry(r,ae.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ga{constructor(e,n){this.persistence=e,this.fi=new Xs(s=>rb(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=E0(this,n)}static Vi(e,n){return new ga(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}pr(e){let n=0;return this.mr(e,s=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(i=>i?M.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,o=>this.wr(e,o,n).next(l=>{l||(s++,i.removeEntry(o,ae.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),M.resolve()}removeReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Bo(e.data.value)),n}wr(e,n,s){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.fi.get(n);return M.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ts=s,this.Es=r}static Is(e,n){let s=ge(),r=ge();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ew()?8:nb(pt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new D0;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,s,r){return s.documentReadCount<this.Vs?(ur()<=pe.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",hr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(ur()<=pe.DEBUG&&Q("QueryEngine","Query:",hr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(ur()<=pe.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",hr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}gs(e,n){if(rf(n))return M.resolve(null);let s=ln(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=fa(n,null,"F"),s=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ge(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.Ss(n,l);return this.bs(n,h,o,c.readTime)?this.gs(e,fa(n,null,"F")):this.Ds(e,h,n,c)}))})))}ps(e,n,s,r){return rf(n)||r.isEqual(ae.min())?M.resolve(null):this.fs.getDocuments(e,s).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,s,r)?M.resolve(null):(ur()<=pe.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hr(n)),this.Ds(e,o,n,JA(r,Fi)).next(l=>l))})}Ss(e,n){let s=new Ze(Pg(e));return n.forEach((r,i)=>{Ha(e,i)&&(s=s.add(i))}),s}bs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,n,s){return ur()<=pe.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",hr(n)),this.fs.getDocumentsMatchingQuery(e,n,hs.min(),s)}Ds(e,n,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="LocalStore",O0=3e8;class x0{constructor(e,n,s,r){this.persistence=e,this.Cs=n,this.serializer=r,this.vs=new Be(me),this.Fs=new Xs(i=>nu(i),su),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new I0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function M0(t,e,n,s){return new x0(t,e,n,s)}async function Zg(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=ge();for(const h of r){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function L0(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,E=m.keys();let R=M.resolve();return E.forEach(S=>{R=R.next(()=>f.getEntry(c,S)).next(L=>{const H=h.docVersions.get(S);Se(H!==null,48541),L.version.compareTo(H)<0&&(m.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),f.addEntry(L)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=ge();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function e_(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function F0(t,e){const n=ce(t),s=e.snapshotVersion;let r=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});r=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const E=r.get(m);if(!E)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let R=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(lt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,s)),r=r.insert(m,R),function(L,H,X){return L.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=O0?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(E,R,f)&&l.push(n.li.updateTargetData(i,R))});let c=Nn(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(U0(i,o,e.documentUpdates).next(f=>{c=f.Bs,h=f.Ls})),!s.isEqual(ae.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.vs=r,i))}function U0(t,e,n){let s=ge(),r=ge();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Nn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Q(du,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Bs:o,Ls:r}})}function B0(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Zc),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function j0(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.li.getTargetData(s,e).next(i=>i?(r=i,M.resolve(r)):n.li.allocateTargetId(s).next(o=>(r=new rs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(s.targetId,s),n.Fs.set(e,s.targetId)),s})}async function Ec(t,e,n){const s=ce(t),r=s.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Fr(o))throw o;Q(du,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function yf(t,e,n){const s=ce(t);let r=ae.min(),i=ge();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const m=ce(c),E=m.Fs.get(f);return E!==void 0?M.resolve(m.vs.get(E)):m.li.getTargetData(h,f)}(s,o,ln(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s.Cs.getDocumentsMatchingQuery(o,e,n?r:ae.min(),n?i:ge())).next(l=>(q0(s,Cb(e),l),{documents:l,ks:i})))}function q0(t,e,n){let s=t.Ms.get(e)||ae.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ms.set(e,s)}class vf{constructor(){this.activeTargetIds=Db()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $0{constructor(){this.vo=new vf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,s){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new vf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="ConnectivityMonitor";class wf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Q(Ef,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Q(Ef,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro=null;function wc(){return Ro===null?Ro=function(){return 268435456+Math.round(2147483648*Math.random())}():Ro++,"0x"+Ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="RestConnection",W0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class z0{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===ua?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,n,s,r,i){const o=wc(),l=this.Qo(e,n.toUriEncodedString());Q(Fl,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,i);const{host:h}=new URL(l),f=Xi(h);return this.zo(e,l,c,s,f).then(m=>(Q(Fl,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Gs(Fl,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",s),m})}jo(e,n,s,r,i,o){return this.Wo(e,n,s,r,i)}Go(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Qo(e,n){const s=W0[e];let r=`${this.Ko}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection",li=(t,e,n)=>{t.listen(e,s=>{try{n(s)}catch(r){setTimeout(()=>{throw r},0)}})};class Ir extends z0{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ir.c_){const e=ig();li(e,rg.STAT_EVENT,n=>{n.stat===cc.PROXY?Q(ct,"STAT_EVENT: detected buffering proxy"):n.stat===cc.NOPROXY&&Q(ct,"STAT_EVENT: detected no buffering proxy")}),Ir.c_=!0}}zo(e,n,s,r,i){const o=wc();return new Promise((l,c)=>{const h=new ng;h.setWithCredentials(!0),h.listenOnce(sg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Uo.NO_ERROR:const m=h.getResponseJson();Q(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Uo.TIMEOUT:Q(ct,`RPC '${e}' ${o} timed out`),c(new K(x.DEADLINE_EXCEEDED,"Request time out"));break;case Uo.HTTP_ERROR:const E=h.getStatus();if(Q(ct,`RPC '${e}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const L=function(X){const Y=X.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(Y)>=0?Y:x.UNKNOWN}(S.status);c(new K(L,S.message))}else c(new K(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new K(x.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Q(ct,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(r);Q(ct,`RPC '${e}' ${o} sending request:`,r),h.send(n,"POST",f,s,15)})}T_(e,n,s){const r=wc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const h=i.join("");Q(ct,`Creating RPC '${e}' stream ${r}: ${h}`,l);const f=o.createWebChannel(h,l);this.E_(f);let m=!1,E=!1;const R=new K0({Jo:S=>{E?Q(ct,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(m||(Q(ct,`Opening RPC '${e}' stream ${r} transport.`),f.open(),m=!0),Q(ct,`RPC '${e}' stream ${r} sending:`,S),f.send(S))},Ho:()=>f.close()});return li(f,pi.EventType.OPEN,()=>{E||(Q(ct,`RPC '${e}' stream ${r} transport opened.`),R.i_())}),li(f,pi.EventType.CLOSE,()=>{E||(E=!0,Q(ct,`RPC '${e}' stream ${r} transport closed`),R.o_(),this.I_(f))}),li(f,pi.EventType.ERROR,S=>{E||(E=!0,Gs(ct,`RPC '${e}' stream ${r} transport errored. Name:`,S.name,"Message:",S.message),R.o_(new K(x.UNAVAILABLE,"The operation could not be completed")))}),li(f,pi.EventType.MESSAGE,S=>{var L;if(!E){const H=S.data[0];Se(!!H,16349);const X=H,Y=(X==null?void 0:X.error)||((L=X[0])==null?void 0:L.error);if(Y){Q(ct,`RPC '${e}' stream ${r} received error:`,Y);const te=Y.status;let J=function(b){const v=Ke[b];if(v!==void 0)return Bg(v)}(te),le=Y.message;te==="NOT_FOUND"&&le.includes("database")&&le.includes("does not exist")&&le.includes(this.databaseId.database)&&Gs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),J===void 0&&(J=x.INTERNAL,le="Unknown error status: "+te+" with message "+Y.message),E=!0,R.o_(new K(J,le)),f.close()}else Q(ct,`RPC '${e}' stream ${r} received:`,H),R.__(H)}}),Ir.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,s){super.Go(e,n,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return og()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){return new Ir(t)}function Ul(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){return new Xb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir.c_=!1;class t_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&Q("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="PersistentStream";class n_{constructor(e,n,s,r,i,o,l,c){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new t_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===n&&this.G_(s,r)},s=>{e(()=>{const r=new K(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,n){const s=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(Tf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(Q(Tf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Q0 extends n_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=t0(this.serializer,e),s=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?cn(o.readTime):ae.min()}(e);return this.listener.H_(n,s)}Z_(e){const n={};n.database=vc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=pc(c)?{documents:r0(i,c)}:{query:i0(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$g(i,o.resumeToken);const h=gc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ae.min())>0){l.readTime=ma(i,o.snapshotVersion.toTimestamp());const h=gc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const s=a0(this.serializer,e);s&&(n.labels=s),this.q_(n)}X_(e){const n={};n.database=vc(this.serializer),n.removeTarget=e,this.q_(n)}}class Y0 extends n_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=s0(e.writeResults,e.commitTime),s=cn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=vc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>n0(this.serializer,s))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{}class X0 extends J0{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new K(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,_c(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(x.UNKNOWN,i.toString())})}jo(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,_c(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(x.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Z0(t,e,n,s){return new X0(t,e,n,s)}class eC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dn(n),this.aa=!1):Q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="RemoteStore";class tC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{s.enqueueAndForget(async()=>{Zs(this)&&(Q(Qs,"Restarting streams for network reachability change."),await async function(c){const h=ce(c);h.Ia.add(4),await oo(h),h.Va.set("Unknown"),h.Ia.delete(4),await Qa(h)}(this))})}),this.Va=new eC(s,r)}}async function Qa(t){if(Zs(t))for(const e of t.Ra)await e(!0)}async function oo(t){for(const e of t.Ra)await e(!1)}function s_(t,e){const n=ce(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),gu(n)?mu(n):Br(n).O_()&&pu(n,e))}function fu(t,e){const n=ce(t),s=Br(n);n.Ea.delete(e),s.O_()&&r_(n,e),n.Ea.size===0&&(s.O_()?s.L_():Zs(n)&&n.Va.set("Unknown"))}function pu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Br(t).Z_(e)}function r_(t,e){t.da.$e(e),Br(t).X_(e)}function mu(t){t.da=new Gb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Br(t).start(),t.Va.ua()}function gu(t){return Zs(t)&&!Br(t).x_()&&t.Ea.size>0}function Zs(t){return ce(t).Ia.size===0}function i_(t){t.da=void 0}async function nC(t){t.Va.set("Online")}async function sC(t){t.Ea.forEach((e,n)=>{pu(t,e)})}async function rC(t,e){i_(t),gu(t)?(t.Va.ha(e),mu(t)):t.Va.set("Unknown")}async function iC(t,e,n){if(t.Va.set("Online"),e instanceof qg&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ea.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ea.delete(l),r.da.removeTarget(l))}(t,e)}catch(s){Q(Qs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _a(t,s)}else if(e instanceof $o?t.da.Xe(e):e instanceof jg?t.da.st(e):t.da.tt(e),!n.isEqual(ae.min()))try{const s=await e_(t.localStore);n.compareTo(s)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),r_(i,c);const m=new rs(f.target,c,h,f.sequenceNumber);pu(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){Q(Qs,"Failed to raise snapshot:",s),await _a(t,s)}}async function _a(t,e,n){if(!Fr(e))throw e;t.Ia.add(1),await oo(t),t.Va.set("Offline"),n||(n=()=>e_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q(Qs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Qa(t)})}function o_(t,e){return e().catch(n=>_a(t,n,e))}async function Ya(t){const e=ce(t),n=ms(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zc;for(;oC(e);)try{const r=await B0(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,aC(e,r)}catch(r){await _a(e,r)}a_(e)&&l_(e)}function oC(t){return Zs(t)&&t.Ta.length<10}function aC(t,e){t.Ta.push(e);const n=ms(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function a_(t){return Zs(t)&&!ms(t).x_()&&t.Ta.length>0}function l_(t){ms(t).start()}async function lC(t){ms(t).ra()}async function cC(t){const e=ms(t);for(const n of t.Ta)e.ea(n.mutations)}async function uC(t,e,n){const s=t.Ta.shift(),r=ou.from(s,e,n);await o_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ya(t)}async function hC(t,e){e&&ms(t).Y_&&await async function(s,r){if(function(o){return Wb(o)&&o!==x.ABORTED}(r.code)){const i=s.Ta.shift();ms(s).B_(),await o_(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ya(s)}}(t,e),a_(t)&&l_(t)}async function If(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),Q(Qs,"RemoteStore received new credentials");const s=Zs(n);n.Ia.add(3),await oo(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Qa(n)}async function dC(t,e){const n=ce(t);e?(n.Ia.delete(2),await Qa(n)):e||(n.Ia.add(2),await oo(n),n.Va.set("Unknown"))}function Br(t){return t.ma||(t.ma=function(n,s,r){const i=ce(n);return i.sa(),new Q0(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Zo:nC.bind(null,t),Yo:sC.bind(null,t),t_:rC.bind(null,t),H_:iC.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),gu(t)?mu(t):t.Va.set("Unknown")):(await t.ma.stop(),i_(t))})),t.ma}function ms(t){return t.fa||(t.fa=function(n,s,r){const i=ce(n);return i.sa(),new Y0(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:lC.bind(null,t),t_:hC.bind(null,t),ta:cC.bind(null,t),na:uC.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ya(t)):(await t.fa.stop(),t.Ta.length>0&&(Q(Qs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new _u(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yu(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Fr(t))return new K(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{static emptySet(e){return new Ar(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ee.comparator(n.key,s.key):(n,s)=>ee.comparator(n.key,s.key),this.keyedMap=mi(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ar;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.ga=new Be(ee.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class Nr{constructor(e,n,s,r,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Nr(e,n,Ar.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class pC{constructor(){this.queries=bf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=ce(n),i=r.queries;r.queries=bf(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(s)})})(this,new K(x.ABORTED,"Firestore shutting down"))}}function bf(){return new Xs(t=>Rg(t),$a)}async function vu(t,e){const n=ce(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new fC,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=yu(o,`Initialization of query '${hr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&wu(n)}async function Eu(t,e){const n=ce(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function mC(t,e){const n=ce(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(s=!0);o.wa=r}}s&&wu(n)}function gC(t,e,n){const s=ce(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function wu(t){t.Ca.forEach(e=>{e.next()})}var Tc,Cf;(Cf=Tc||(Tc={})).Ma="default",Cf.Cache="cache";class Tu{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Nr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Tc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.key=e}}class u_{constructor(e){this.key=e}}class _C{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ge(),this.mutatedKeys=ge(),this.eu=Pg(e),this.tu=new Ar(this.eu)}get nu(){return this.Za}ru(e,n){const s=n?n.iu:new Af,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,m)=>{const E=r.get(f),R=Ha(this.query,m)?m:null,S=!!E&&this.mutatedKeys.has(E.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let H=!1;E&&R?E.data.isEqual(R.data)?S!==L&&(s.track({type:3,doc:R}),H=!0):this.su(E,R)||(s.track({type:2,doc:R}),H=!0,(c&&this.eu(R,c)>0||h&&this.eu(R,h)<0)&&(l=!0)):!E&&R?(s.track({type:0,doc:R}),H=!0):E&&!R&&(s.track({type:1,doc:E}),H=!0,(c||h)&&(l=!0)),H&&(R?(o=o.add(R),i=L?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,bs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(R,S){const L=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:H})}};return L(R)-L(S)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(s),r=r??!1;const l=n&&!r?this._u():[],c=this.Ya.size===0&&this.current&&!r?1:0,h=c!==this.Xa;return this.Xa=c,o.length!==0||h?{snapshot:new Nr(this.query,e.tu,i,o,e.mutatedKeys,c===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Af,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ge(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))});const n=[];return e.forEach(s=>{this.Ya.has(s)||n.push(new u_(s))}),this.Ya.forEach(s=>{e.has(s)||n.push(new c_(s))}),n}cu(e){this.Za=e.ks,this.Ya=ge();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Nr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Iu="SyncEngine";class yC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class vC{constructor(e){this.key=e,this.hu=!1}}class EC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xs(l=>Rg(l),$a),this.Eu=new Map,this.Iu=new Set,this.Ru=new Be(ee.comparator),this.Au=new Map,this.Vu=new cu,this.du={},this.mu=new Map,this.fu=Dr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wC(t,e,n=!0){const s=g_(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await h_(s,e,n,!0),r}async function TC(t,e){const n=g_(t);await h_(n,e,!0,!1)}async function h_(t,e,n,s){const r=await j0(t.localStore,ln(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await IC(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&s_(t.remoteStore,r),l}async function IC(t,e,n,s,r){t.pu=(m,E,R)=>async function(L,H,X,Y){let te=H.view.ru(X);te.bs&&(te=await yf(L.localStore,H.query,!1).then(({documents:b})=>H.view.ru(b,te)));const J=Y&&Y.targetChanges.get(H.targetId),le=Y&&Y.targetMismatches.get(H.targetId)!=null,_e=H.view.applyChanges(te,L.isPrimaryClient,J,le);return Rf(L,H.targetId,_e.au),_e.snapshot}(t,m,E,R);const i=await yf(t.localStore,e,!0),o=new _C(e,i.ks),l=o.ru(i.documents),c=io.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),h=o.applyChanges(l,t.isPrimaryClient,c);Rf(t,n,h.au);const f=new yC(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),h.snapshot}async function AC(t,e,n){const s=ce(t),r=s.Tu.get(e),i=s.Eu.get(r.targetId);if(i.length>1)return s.Eu.set(r.targetId,i.filter(o=>!$a(o,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Ec(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&fu(s.remoteStore,r.targetId),Ic(s,r.targetId)}).catch(Lr)):(Ic(s,r.targetId),await Ec(s.localStore,r.targetId,!0))}async function bC(t,e){const n=ce(t),s=n.Tu.get(e),r=n.Eu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),fu(n.remoteStore,s.targetId))}async function CC(t,e,n){const s=NC(t);try{const r=await function(o,l){const c=ce(o),h=Fe.now(),f=l.reduce((R,S)=>R.add(S.key),ge());let m,E;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=Nn(),L=ge();return c.xs.getEntries(R,f).next(H=>{S=H,S.forEach((X,Y)=>{Y.isValidDocument()||(L=L.add(X))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,S)).next(H=>{m=H;const X=[];for(const Y of l){const te=Bb(Y,m.get(Y.key).overlayedDocument);te!=null&&X.push(new vs(Y.key,te,Eg(te.value.mapValue),Ut.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,X,l)}).next(H=>{E=H;const X=H.applyToLocalDocumentSet(m,L);return c.documentOverlayCache.saveOverlays(R,H.batchId,X)})}).then(()=>({batchId:E.batchId,changes:Vg(m)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let h=o.du[o.currentUser.toKey()];h||(h=new Be(me)),h=h.insert(l,c),o.du[o.currentUser.toKey()]=h}(s,r.batchId,n),await ao(s,r.changes),await Ya(s.remoteStore)}catch(r){const i=yu(r,"Failed to persist write");n.reject(i)}}async function d_(t,e){const n=ce(t);try{const s=await F0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Au.get(i);o&&(Se(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Se(o.hu,14607):r.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))}),await ao(n,s,e)}catch(s){await Lr(s)}}function Sf(t,e,n){const s=ce(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=ce(o);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const E of m.Sa)E.va(l)&&(h=!0)}),h&&wu(c)}(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function SC(t,e,n){const s=ce(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new Be(ee.comparator);o=o.insert(i,dt.newNoDocument(i,ae.min()));const l=ge().add(i),c=new Ka(ae.min(),new Map,new Be(me),o,l);await d_(s,c),s.Ru=s.Ru.remove(i),s.Au.delete(e),Au(s)}else await Ec(s.localStore,e,!1).then(()=>Ic(s,e,n)).catch(Lr)}async function RC(t,e){const n=ce(t),s=e.batch.batchId;try{const r=await L0(n.localStore,e);p_(n,s,null),f_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ao(n,r)}catch(r){await Lr(r)}}async function PC(t,e,n){const s=ce(t);try{const r=await function(o,l){const c=ce(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(Se(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(s.localStore,e);p_(s,e,n),f_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ao(s,r)}catch(r){await Lr(r)}}function f_(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function p_(t,e,n){const s=ce(t);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Ic(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Eu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(s=>{t.Vu.containsKey(s)||m_(t,s)})}function m_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(fu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Au(t))}function Rf(t,e,n){for(const s of n)s instanceof c_?(t.Vu.addReference(s.key,e),kC(t,s)):s instanceof u_?(Q(Iu,"Document no longer in limbo: "+s.key),t.Vu.removeReference(s.key,e),t.Vu.containsKey(s.key)||m_(t,s.key)):ie(19791,{wu:s})}function kC(t,e){const n=e.key,s=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(s)||(Q(Iu,"New document in limbo: "+n),t.Iu.add(s),Au(t))}function Au(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ee(Oe.fromString(e)),s=t.fu.next();t.Au.set(s,new vC(n)),t.Ru=t.Ru.insert(n,s),s_(t.remoteStore,new rs(ln(qa(n.path)),s,"TargetPurposeLimboResolution",Ua.ce))}}async function ao(t,e,n){const s=ce(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((l,c)=>{o.push(s.pu(c,e,n).then(h=>{var f;if((h||n)&&s.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){r.push(h);const m=hu.Is(c.targetId,h);i.push(m)}}))}),await Promise.all(o),s.Pu.H_(r),await async function(c,h){const f=ce(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,E=>M.forEach(E.Ts,R=>f.persistence.referenceDelegate.addReference(m,E.targetId,R)).next(()=>M.forEach(E.Es,R=>f.persistence.referenceDelegate.removeReference(m,E.targetId,R)))))}catch(m){if(!Fr(m))throw m;Q(du,"Failed to update sequence numbers: "+m)}for(const m of h){const E=m.targetId;if(!m.fromCache){const R=f.vs.get(E),S=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(S);f.vs=f.vs.insert(E,L)}}}(s.localStore,i))}async function VC(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){Q(Iu,"User change. New user:",e.toKey());const s=await Zg(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new K(x.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ao(n,s.Ns)}}function DC(t,e){const n=ce(t),s=n.Au.get(e);if(s&&s.hu)return ge().add(s.key);{let r=ge();const i=n.Eu.get(e);if(!i)return r;for(const o of i){const l=n.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function g_(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=d_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SC.bind(null,e),e.Pu.H_=mC.bind(null,e.eventManager),e.Pu.yu=gC.bind(null,e.eventManager),e}function NC(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PC.bind(null,e),e}class ya{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return M0(this.persistence,new N0,e.initialUser,this.serializer)}Cu(e){return new Xg(uu.Vi,this.serializer)}Du(e){return new $0}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ya.provider={build:()=>new ya};class OC extends ya{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof ga,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new y0(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Xg(s=>ga.Vi(s,n),this.serializer)}}class Ac{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=VC.bind(null,this.syncEngine),await dC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pC}()}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),s=G0(e.databaseInfo);return Z0(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new tC(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Sf(this.syncEngine,n,0),function(){return wf.v()?new wf:new H0}())}createSyncEngine(e,n){return function(r,i,o,l,c,h,f){const m=new EC(r,i,o,l,c,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=ce(r);Q(Qs,"RemoteStore shutting down."),i.Ia.add(5),await oo(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ac.provider={build:()=>new Ac};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="FirestoreClient";class xC{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=r,this.user=ut.UNAUTHENTICATED,this.clientId=Xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{Q(gs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Q(gs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=yu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Bl(t,e){t.asyncQueue.verifyOperationInProgress(),Q(gs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Zg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MC(t);Q(gs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>If(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>If(e.remoteStore,r)),t._onlineComponents=e}async function MC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q(gs,"Using user provided OfflineComponentProvider");try{await Bl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===x.FAILED_PRECONDITION||r.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await Bl(t,new ya)}}else Q(gs,"Using default OfflineComponentProvider"),await Bl(t,new OC(void 0));return t._offlineComponents}async function __(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q(gs,"Using user provided OnlineComponentProvider"),await Pf(t,t._uninitializedComponentsProvider._online)):(Q(gs,"Using default OnlineComponentProvider"),await Pf(t,new Ac))),t._onlineComponents}function LC(t){return __(t).then(e=>e.syncEngine)}async function va(t){const e=await __(t),n=e.eventManager;return n.onListen=wC.bind(null,e.syncEngine),n.onUnlisten=AC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bC.bind(null,e.syncEngine),n}function FC(t,e,n,s){const r=new bu(s),i=new Tu(e,r,n);return t.asyncQueue.enqueueAndForget(async()=>vu(await va(t),i)),()=>{r.Nu(),t.asyncQueue.enqueueAndForget(async()=>Eu(await va(t),i))}}function UC(t,e,n={}){const s=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new bu({next:E=>{f.Nu(),o.enqueueAndForget(()=>Eu(i,m));const R=E.docs.has(l);!R&&E.fromCache?h.reject(new K(x.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&E.fromCache&&c&&c.source==="server"?h.reject(new K(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new Tu(qa(l.path),f,{includeMetadataChanges:!0,qa:!0});return vu(i,m)}(await va(t),t.asyncQueue,e,n,s)),s.promise}function BC(t,e,n={}){const s=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new bu({next:E=>{f.Nu(),o.enqueueAndForget(()=>Eu(i,m)),E.fromCache&&c.source==="server"?h.reject(new K(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new Tu(l,f,{includeMetadataChanges:!0,qa:!0});return vu(i,m)}(await va(t),t.asyncQueue,e,n,s)),s.promise}function jC(t,e){const n=new bn;return t.asyncQueue.enqueueAndForget(async()=>CC(await LC(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="ComponentProvider",kf=new Map;function $C(t,e,n,s,r){return new ab(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,y_(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firestore.googleapis.com",Vf=!0;class Df{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=v_,this.ssl=Vf}else this.host=e.host,this.ssl=e.ssl??Vf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Jg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<g0)throw new K(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=y_(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ja{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Df({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Df(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new BA;switch(s.type){case"firstParty":return new HA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new K(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=kf.get(n);s&&(Q(qC,"Removing Datastore"),kf.delete(n),s.terminate())}(this),Promise.resolve()}}function HC(t,e,n,s={}){var h;t=bt(t,Ja);const r=Xi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;r&&fm(`https://${l}`),i.host!==v_&&i.host!==l&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!$s(c,o)&&(t._setSettings(c),s.mockUserToken)){let f,m;if(typeof s.mockUserToken=="string")f=s.mockUserToken,m=ut.MOCK_USER;else{f=KE(s.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new K(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ut(E)}t._authCredentials=new jA(new lg(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class $e{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(so(n,$e._jsonSchema))return new $e(e,s||null,new ee(Oe.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Qe("string",$e._jsonSchemaVersion),referencePath:Qe("string")};class cs extends Fn{constructor(e,n,s){super(e,n,qa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new ee(e))}withConverter(e){return new cs(this.firestore,e,this._path)}}function gt(t,e,...n){if(t=Ye(t),cg("collection","path",e),t instanceof Ja){const s=Oe.fromString(e,...n);return Hd(s),new cs(t,null,s)}{if(!(t instanceof $e||t instanceof cs))throw new K(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return Hd(s),new cs(t.firestore,null,s)}}function jt(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Xc.newId()),cg("doc","path",e),t instanceof Ja){const s=Oe.fromString(e,...n);return $d(s),new $e(t,null,new ee(s))}{if(!(t instanceof $e||t instanceof cs))throw new K(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return $d(s),new $e(t.firestore,t instanceof cs?t.converter:null,new ee(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="AsyncQueue";class Of{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new t_(this,"async_queue_retry"),this._c=()=>{const s=Ul();s&&Q(Nf,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Ul();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new bn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Fr(e))throw e;Q(Nf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Dn("INTERNAL UNHANDLED ERROR: ",xf(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=_u.createAndSchedule(this,e,n,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&ie(47125,{Pc:xf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function xf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class On extends Ja{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Of,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Of(e),this._firestoreClient=void 0,await e}}}function WC(t,e){const n=typeof t=="object"?t:_m(),s=typeof t=="string"?t:ua,r=qc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=WE("firestore");i&&HC(r,...i)}return r}function Xa(t){if(t._terminated)throw new K(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||zC(t),t._firestoreClient}function zC(t){var s,r,i,o;const e=t._freezeSettings(),n=$C(t._databaseId,((s=t._app)==null?void 0:s.options.appId)||"",t._persistenceKey,(r=t._app)==null?void 0:r.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new xC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(lt.fromBase64String(e))}catch(n){throw new K(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(so(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Qe("string",Lt._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:un._jsonSchemaVersion}}static fromJSON(e){if(so(e,un._jsonSchema))return new un(e.latitude,e.longitude)}}un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Qe("string",un._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(so(e,Wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Wt(e.vectorValues);throw new K(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:Qe("string",Wt._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=/^__.*__$/;class GC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}class E_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function w_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{dataSource:t})}}class Su{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Su({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var r;const n=(r=this.path)==null?void 0:r.child(e),s=this.i({path:n,arrayElement:!1});return s.mc(e),s}fc(e){var r;const n=(r=this.path)==null?void 0:r.child(e),s=this.i({path:n,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ea(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(w_(this.dataSource)&&KC.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class QC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ga(e)}A(e,n,s,r=!1){return new Su({dataSource:e,methodName:n,targetDoc:s,path:at.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function el(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new QC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T_(t,e,n,s,r,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,r);Pu("Data must be an object, but it was:",o,s);const l=I_(s,o);let c,h;if(i.merge)c=new Dt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const E=Ys(e,m,n);if(!o.contains(E))throw new K(x.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);C_(f,E)||f.push(E)}c=new Dt(f),h=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=o.fieldTransforms;return new GC(new At(l),c,h)}class tl extends Za{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tl}}class Ru extends Za{_toFieldTransform(e){return new Mb(e.path,new $i)}isEqual(e){return e instanceof Ru}}function YC(t,e,n,s){const r=t.A(1,e,n);Pu("Data must be an object, but it was:",r,s);const i=[],o=At.empty();ys(s,(c,h)=>{const f=b_(e,c,n);h=Ye(h);const m=r.fc(f);if(h instanceof tl)i.push(f);else{const E=lo(h,m);E!=null&&(i.push(f),o.set(f,E))}});const l=new Dt(i);return new E_(o,l,r.fieldTransforms)}function JC(t,e,n,s,r,i){const o=t.A(1,e,n),l=[Ys(e,s,n)],c=[r];if(i.length%2!=0)throw new K(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push(Ys(e,i[E])),c.push(i[E+1]);const h=[],f=At.empty();for(let E=l.length-1;E>=0;--E)if(!C_(h,l[E])){const R=l[E];let S=c[E];S=Ye(S);const L=o.fc(R);if(S instanceof tl)h.push(R);else{const H=lo(S,L);H!=null&&(h.push(R),f.set(R,H))}}const m=new Dt(h);return new E_(f,m,o.fieldTransforms)}function XC(t,e,n,s=!1){return lo(n,t.A(s?4:3,e))}function lo(t,e){if(A_(t=Ye(t)))return Pu("Unsupported field value:",e,t),I_(t,e);if(t instanceof Za)return function(s,r){if(!w_(r.dataSource))throw r.yc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.yc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=lo(l,r.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Nb(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Fe.fromDate(s);return{timestampValue:ma(r.serializer,i)}}if(s instanceof Fe){const i=new Fe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ma(r.serializer,i)}}if(s instanceof un)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Lt)return{bytesValue:$g(r.serializer,s._byteString)};if(s instanceof $e){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lu(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Wt)return function(o,l){const c=o instanceof Wt?o.toArray():o;return{mapValue:{fields:{[yg]:{stringValue:vg},[ha]:{arrayValue:{values:c.map(f=>{if(typeof f!="number")throw l.yc("VectorValues must only contain numeric values.");return ru(l.serializer,f)})}}}}}}(s,r);if(Yg(s))return s._toProto(r.serializer);throw r.yc(`Unsupported field value: ${Fa(s)}`)}(t,e)}function I_(t,e){const n={};return dg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(s,r)=>{const i=lo(r,e.dc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function A_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof un||t instanceof Lt||t instanceof $e||t instanceof Za||t instanceof Wt||Yg(t))}function Pu(t,e,n){if(!A_(n)||!ug(n)){const s=Fa(n);throw s==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+s)}}function Ys(t,e,n){if((e=Ye(e))instanceof Cu)return e._internalPath;if(typeof e=="string")return b_(t,e);throw Ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZC=new RegExp("[~\\*/\\[\\]]");function b_(t,e,n){if(e.search(ZC)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cu(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ea(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new K(x.INVALID_ARGUMENT,l+t+c)}function C_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ys(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var s,r,i;const n=(i=(r=(s=e.fields)==null?void 0:s[ha].arrayValue)==null?void 0:r.values)==null?void 0:i.map(o=>He(o.doubleValue));return new Wt(n)}convertGeoPoint(e){return new un(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ja(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ui(e));default:return null}}convertTimestamp(e){const n=ds(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Oe.fromString(e);Se(Qg(s),9688,{name:e});const r=new Bi(s.get(1),s.get(3)),i=new ee(s.popFirst(5));return r.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends eS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Yn(){return new Ru("serverTimestamp")}const Mf="@firebase/firestore",Lf="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ys("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tS extends S_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vu{}class Du extends Vu{}function ks(t,e,...n){let s=[];e instanceof Vu&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof Nu).length,l=i.filter(c=>c instanceof nl).length;if(o>1||o>0&&l>0)throw new K(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class nl extends Du{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new nl(e,n,s)}_apply(e){const n=this._parse(e);return P_(e._query,n),new Fn(e.firestore,e.converter,mc(e._query,n))}_parse(e){const n=el(e.firestore);return function(i,o,l,c,h,f,m){let E;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){qf(m,f);const S=[];for(const L of m)S.push(jf(c,i,L));E={arrayValue:{values:S}}}else E=jf(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||qf(m,f),E=XC(l,o,m,f==="in"||f==="not-in");return Ge.create(h,f,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Uf(t,e,n){const s=e,r=Ys("where",t);return nl._create(r,s,n)}class Nu extends Vu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Nu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const l=i.getFlattenedFilters();for(const c of l)P_(o,c),o=mc(o,c)}(e._query,n),new Fn(e.firestore,e.converter,mc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ou extends Du{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ou(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new K(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new K(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qi(i,o)}(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,bb(e._query,n))}}function Vs(t,e="asc"){const n=e,s=Ys("orderBy",t);return Ou._create(s,n)}class xu extends Du{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new xu(e,n,s)}_apply(e){return new Fn(e.firestore,e.converter,fa(e._query,this._limit,this._limitType))}}function Bf(t){return xu._create("limit",t,"F")}function jf(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new K(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sg(e)&&n.indexOf("/")!==-1)throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Oe.fromString(n));if(!ee.isDocumentKey(s))throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Xd(t,new ee(s))}if(n instanceof $e)return Xd(t,n._key);throw new K(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fa(n)}.`)}function qf(t,e){if(!Array.isArray(t)||t.length===0)throw new K(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function P_(t,e){const n=function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function k_(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bs extends S_{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ys("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Bs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Bs._jsonSchema={type:Qe("string",Bs._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Ho extends Bs{data(e={}){return super.data(e)}}class js{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new _i(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ho(this._firestore,this._userDataWriter,s.key,s,new _i(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new Ho(r._firestore,r._userDataWriter,l.doc.key,l.doc,new _i(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ho(r._firestore,r._userDataWriter,l.doc.key,l.doc,new _i(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:nS(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=js._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */js._jsonSchemaVersion="firestore/querySnapshot/1.0",js._jsonSchema={type:Qe("string",js._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t){t=bt(t,$e);const e=bt(t.firestore,On),n=Xa(e);return UC(n,t._key).then(s=>V_(e,t,s))}function Po(t){t=bt(t,Fn);const e=bt(t.firestore,On),n=Xa(e),s=new ku(e);return R_(t._query),BC(n,t._query).then(r=>new js(e,s,t,r))}function rS(t,e,n){t=bt(t,$e);const s=bt(t.firestore,On),r=k_(t.converter,e),i=el(s);return sl(s,[T_(i,"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ut.none())])}function jl(t,e,n,...s){t=bt(t,$e);const r=bt(t.firestore,On),i=el(r);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Cu?JC(i,"updateDoc",t._key,e,n,s):YC(i,"updateDoc",t._key,e),sl(r,[o.toMutation(t._key,Ut.exists(!0))])}function ci(t){return sl(bt(t.firestore,On),[new iu(t._key,Ut.none())])}function Ds(t,e){const n=bt(t.firestore,On),s=jt(t),r=k_(t.converter,e),i=el(t.firestore);return sl(n,[T_(i,"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ut.exists(!1))]).then(()=>s)}function ar(t,...e){var h,f,m;t=Ye(t);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Ff(e[s])||(n=e[s++]);const r={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Ff(e[s])){const E=e[s];e[s]=(h=E.next)==null?void 0:h.bind(E),e[s+1]=(f=E.error)==null?void 0:f.bind(E),e[s+2]=(m=E.complete)==null?void 0:m.bind(E)}let i,o,l;if(t instanceof $e)o=bt(t.firestore,On),l=qa(t._key.path),i={next:E=>{e[s]&&e[s](V_(o,t,E))},error:e[s+1],complete:e[s+2]};else{const E=bt(t,Fn);o=bt(E.firestore,On),l=E._query;const R=new ku(o);i={next:S=>{e[s]&&e[s](new js(o,R,E,S))},error:e[s+1],complete:e[s+2]},R_(t._query)}const c=Xa(o);return FC(c,l,r,i)}function sl(t,e){const n=Xa(t);return jC(n,e)}function V_(t,e,n){const s=n.docs.get(e._key),r=new ku(t);return new Bs(t,r,e._key,s,new _i(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){UA(Or),Sr(new Hs("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new On(new qA(s.getProvider("auth-internal")),new WA(o,s.getProvider("app-check-internal")),lb(o,r),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),as(Mf,Lf,e),as(Mf,Lf,"esm2020")})();const iS={apiKey:"AIzaSyDRBG--QCxmnVzwpoR6jOF8CVXnxYhFqCA",authDomain:"zootopia-2c2b8.firebaseapp.com",projectId:"zootopia-2c2b8",storageBucket:"zootopia-2c2b8.firebasestorage.app",messagingSenderId:"577644999831",appId:"1:577644999831:web:b1acf8b4b741ebb7fc65d2",measurementId:"G-FYCEQ82SMS"},D_=gm(iS),ui=LA(D_),Le=WC(D_),Un=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},oS="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23f0ede6'/><text x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='52'>🦁</text></svg>",aS={name:"HomeView",props:["animals","events","loading"],emits:["open-animal","open-event","navigate","buy-ticket"],data(){return{searchQuery:"",selectedCategory:"Все",sortBy:"name",currentPage:1,perPage:8,newsletterEmail:"",liveVisitors:Math.floor(Math.random()*200)+100,weatherTemp:Math.floor(Math.random()*10)+15,infoBanners:[{icon:"🕘",title:"Часы работы",text:"Ежедневно с 09:00 до 20:00. Касса работает до 19:00."},{icon:"📍",title:"Как добраться",text:"ул. Байтурсынова 161, Алматы. Автобусы 2, 28, 65."},{icon:"🅿️",title:"Парковка",text:"Бесплатная парковка для посетителей на 200 мест."},{icon:"♿",title:"Доступность",text:"Зоопарк полностью доступен для людей с ограниченными возможностями."}]}},computed:{categories(){return["Все",...new Set(this.animals.map(t=>t.category).filter(Boolean))]},filteredAnimals(){let t=[...this.animals];if(this.selectedCategory!=="Все"&&(t=t.filter(e=>e.category===this.selectedCategory)),this.searchQuery){const e=this.searchQuery.toLowerCase();t=t.filter(n=>(n.name||"").toLowerCase().includes(e)||(n.description||"").toLowerCase().includes(e))}return t.sort((e,n)=>this.sortBy==="name"?(e.name||"").localeCompare(n.name||""):this.sortBy==="category"?(e.category||"").localeCompare(n.category||""):this.sortBy==="status"?(e.status||"").localeCompare(n.status||""):0),t},totalPages(){return Math.ceil(this.filteredAnimals.length/this.perPage)},paginatedAnimals(){const t=(this.currentPage-1)*this.perPage;return this.filteredAnimals.slice(t,t+this.perPage)}},watch:{searchQuery(){this.currentPage=1},selectedCategory(){this.currentPage=1}},methods:{formatDate(t){return t?(t.toDate?t.toDate():new Date(t)).toLocaleDateString("ru-RU",{day:"numeric",month:"short"}):""},handleImgError(t){t.target.onerror=null,t.target.src=oS},subscribeNewsletter(){this.newsletterEmail&&(alert("Спасибо! Вы подписались на новости."),this.newsletterEmail="")}}},lS={class:"home-view"},cS={class:"hero"},uS={class:"hero-content"},hS={class:"hero-actions"},dS={class:"section catalog-section"},fS={class:"container"},pS={class:"section-header"},mS={class:"catalog-controls"},gS={class:"search-wrap"},_S={class:"filter-tags"},yS=["onClick"],vS={class:"sort-wrap"},ES={key:0,class:"loading-grid"},wS={key:1,class:"animals-grid"},TS=["onClick"],IS={class:"animal-card-img"},AS=["src","alt"],bS={class:"animal-card-body"},CS={class:"animal-category"},SS={class:"animal-latin-small"},RS={key:2,class:"no-results"},PS={key:3,class:"pagination"},kS=["disabled"],VS=["onClick"],DS=["disabled"],NS={class:"section events-section"},OS={class:"container"},xS={class:"section-header"},MS={class:"events-layout"},LS={key:0,class:"events-featured"},FS=["src","alt"],US={class:"event-big-overlay"},BS={class:"event-type-pill"},jS={class:"event-meta"},qS={class:"events-side"},$S=["onClick"],HS={class:"event-side-img"},WS=["src","alt"],zS={class:"event-side-info"},KS={class:"event-type-small"},GS={class:"event-side-meta"},QS={class:"event-price"},YS={class:"events-right-sidebar"},JS={class:"sidebar-widget weather-widget"},XS={class:"weather-main"},ZS={class:"weather-temp"},eR={class:"sidebar-widget ticket-widget"},tR={class:"ticket-options"},nR={class:"sidebar-widget newsletter-widget"},sR={class:"sidebar-widget stats-widget"},rR={class:"live-stat"},iR={class:"live-stat"},oR={class:"live-stat"},aR={class:"section info-section"},lR={class:"container"},cR={class:"info-grid"},uR={class:"info-icon"};function hR(t,e,n,s,r,i){return V(),N("div",lS,[d("section",cS,[e[23]||(e[23]=d("div",{class:"hero-bg"},[d("div",{class:"hero-overlay"}),d("img",{src:"https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1600&q=80",alt:"Zoo",class:"hero-img"})],-1)),d("div",uS,[e[19]||(e[19]=d("div",{class:"hero-badge"},"🌿 Зоопарк Алматы",-1)),e[20]||(e[20]=d("h1",{class:"hero-title"},[Ms("Откройте мир"),d("br"),d("span",{class:"hero-accent"},"дикой природы")],-1)),e[21]||(e[21]=d("p",{class:"hero-subtitle"},"Более 200 видов животных со всего мира ждут вас каждый день",-1)),d("div",hS,[d("button",{class:"btn-primary",onClick:e[0]||(e[0]=o=>t.$emit("navigate","tickets"))},"Купить билет"),d("button",{class:"btn-secondary",onClick:e[1]||(e[1]=o=>t.$emit("navigate","animals"))},"Смотреть животных")]),e[22]||(e[22]=Yp('<div class="hero-stats"><div class="hero-stat"><span class="stat-num">200+</span><span class="stat-label">Видов</span></div><div class="hero-stat"><span class="stat-num">50K+</span><span class="stat-label">Посетителей</span></div><div class="hero-stat"><span class="stat-num">1972</span><span class="stat-label">Основан</span></div></div>',1))]),e[24]||(e[24]=d("div",{class:"hero-scroll"},[d("div",{class:"scroll-indicator"})],-1))]),d("section",dS,[d("div",fS,[d("div",pS,[e[25]||(e[25]=d("div",null,[d("h2",{class:"section-title"},"Наши животные"),d("p",{class:"section-sub"},"Познакомьтесь с обитателями нашего зоопарка")],-1)),d("button",{class:"btn-outline",onClick:e[2]||(e[2]=o=>t.$emit("navigate","animals"))},"Все животные →")]),d("div",mS,[d("div",gS,[e[26]||(e[26]=d("span",{class:"search-icon"},"🔍",-1)),Ne(d("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.searchQuery=o),type:"text",placeholder:"Поиск животных...",class:"search-input"},null,512),[[Ue,r.searchQuery]])]),d("div",_S,[(V(!0),N(ue,null,Ee(i.categories,o=>(V(),N("button",{key:o,class:Ie(["filter-tag",{active:r.selectedCategory===o}]),onClick:l=>r.selectedCategory=o},O(o),11,yS))),128))]),d("div",vS,[Ne(d("select",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.sortBy=o),class:"sort-select"},[...e[27]||(e[27]=[d("option",{value:"name"},"По имени",-1),d("option",{value:"category"},"По категории",-1),d("option",{value:"status"},"По статусу",-1)])],512),[[om,r.sortBy]])])]),n.loading?(V(),N("div",ES,[(V(),N(ue,null,Ee(8,o=>d("div",{key:o,class:"skeleton-card"})),64))])):(V(),N("div",wS,[(V(!0),N(ue,null,Ee(i.paginatedAnimals,o=>(V(),N("div",{key:o.id,class:"animal-card",onClick:l=>t.$emit("open-animal",o)},[d("div",IS,[d("img",{src:o.image||"",alt:o.name,loading:"lazy",onError:e[5]||(e[5]=(...l)=>i.handleImgError&&i.handleImgError(...l))},null,40,AS),d("span",{class:Ie(["animal-status-dot","dot-"+o.status])},null,2),e[28]||(e[28]=d("div",{class:"animal-card-overlay"},[d("span",null,"Подробнее")],-1))]),d("div",bS,[d("span",CS,O(o.category),1),d("h3",null,O(o.name),1),d("p",SS,O(o.latinName),1),d("span",{class:Ie(["status-badge","status-"+o.status])},O(o.statusText),3)])],8,TS))),128))])),!n.loading&&i.filteredAnimals.length===0?(V(),N("div",RS,[...e[29]||(e[29]=[d("p",null,"🔍 Животные не найдены. Попробуйте изменить фильтры.",-1)])])):fe("",!0),i.totalPages>1?(V(),N("div",PS,[d("button",{disabled:r.currentPage===1,onClick:e[6]||(e[6]=o=>r.currentPage--),class:"page-btn"},"‹",8,kS),(V(!0),N(ue,null,Ee(i.totalPages,o=>(V(),N("button",{key:o,class:Ie(["page-btn",{active:o===r.currentPage}]),onClick:l=>r.currentPage=o},O(o),11,VS))),128)),d("button",{disabled:r.currentPage===i.totalPages,onClick:e[7]||(e[7]=o=>r.currentPage++),class:"page-btn"},"›",8,DS)])):fe("",!0)])]),d("section",NS,[d("div",OS,[d("div",xS,[e[30]||(e[30]=d("div",null,[d("h2",{class:"section-title"},"Мероприятия"),d("p",{class:"section-sub"},"Специальные события и экскурсии")],-1)),d("button",{class:"btn-outline",onClick:e[8]||(e[8]=o=>t.$emit("navigate","events"))},"Все мероприятия →")]),d("div",MS,[n.events.length?(V(),N("div",LS,[d("div",{class:"event-big-card",onClick:e[11]||(e[11]=o=>t.$emit("open-event",n.events[0]))},[d("img",{src:n.events[0].image||"",alt:n.events[0].title,onError:e[9]||(e[9]=(...o)=>i.handleImgError&&i.handleImgError(...o))},null,40,FS),d("div",US,[d("span",BS,O(n.events[0].type),1),d("h3",null,O(n.events[0].title),1),d("p",null,O((n.events[0].description||"").substring(0,100))+"...",1),d("div",jS,[d("span",null,"📅 "+O(i.formatDate(n.events[0].date)),1),d("span",null,"👥 "+O(n.events[0].spotsLeft)+" мест",1)]),d("button",{class:"btn-event-book",onClick:e[10]||(e[10]=xt(o=>t.$emit("open-event",n.events[0]),["stop"]))},"Подробнее")])])])):fe("",!0),d("div",qS,[(V(!0),N(ue,null,Ee(n.events.slice(1,4),o=>(V(),N("div",{key:o.id,class:"event-side-card",onClick:l=>t.$emit("open-event",o)},[d("div",HS,[d("img",{src:o.image||"",alt:o.title,loading:"lazy",onError:e[12]||(e[12]=(...l)=>i.handleImgError&&i.handleImgError(...l))},null,40,WS)]),d("div",zS,[d("span",KS,O(o.type),1),d("h4",null,O(o.title),1),d("div",GS,[d("span",null,"📅 "+O(i.formatDate(o.date)),1),d("span",QS,O(o.price?o.price+" ₸":"Бесплатно"),1)])])],8,$S))),128))]),d("div",YS,[d("div",JS,[e[32]||(e[32]=d("h4",null,"🌤️ Погода сегодня",-1)),d("div",XS,[d("span",ZS,"+"+O(r.weatherTemp)+"°C",1),e[31]||(e[31]=d("span",{class:"weather-desc"},"Ясно, отличный день для прогулки!",-1))]),e[33]||(e[33]=d("div",{class:"weather-tips"},[d("span",null,"🕘 Открыт 09:00–20:00")],-1))]),d("div",eR,[e[37]||(e[37]=d("h4",null,"🎫 Быстрая покупка",-1)),d("div",tR,[d("div",{class:"ticket-option",onClick:e[13]||(e[13]=o=>t.$emit("navigate","tickets"))},[...e[34]||(e[34]=[d("span",null,"👨 Взрослый",-1),d("strong",null,"2 000 ₸",-1)])]),d("div",{class:"ticket-option",onClick:e[14]||(e[14]=o=>t.$emit("navigate","tickets"))},[...e[35]||(e[35]=[d("span",null,"👶 Детский",-1),d("strong",null,"1 000 ₸",-1)])]),d("div",{class:"ticket-option",onClick:e[15]||(e[15]=o=>t.$emit("navigate","tickets"))},[...e[36]||(e[36]=[d("span",null,"👨‍👩‍👧‍👦 Семейный",-1),d("strong",null,"5 500 ₸",-1)])])]),d("button",{class:"btn-buy-ticket",onClick:e[16]||(e[16]=o=>t.$emit("navigate","tickets"))},"Купить билеты")]),d("div",nR,[e[39]||(e[39]=d("h4",null,"📬 Новости зоопарка",-1)),e[40]||(e[40]=d("p",null,"Получайте уведомления о новых мероприятиях",-1)),d("form",{onSubmit:e[18]||(e[18]=xt((...o)=>i.subscribeNewsletter&&i.subscribeNewsletter(...o),["prevent"])),class:"newsletter-form"},[Ne(d("input",{"onUpdate:modelValue":e[17]||(e[17]=o=>r.newsletterEmail=o),type:"email",placeholder:"Ваш email"},null,512),[[Ue,r.newsletterEmail]]),e[38]||(e[38]=d("button",{type:"submit"},"Подписаться",-1))],32)]),d("div",sR,[e[45]||(e[45]=d("h4",null,"📊 Зоопарк сейчас",-1)),d("div",rR,[e[42]||(e[42]=d("span",{class:"live-dot"},null,-1)),d("span",null,[e[41]||(e[41]=Ms("Посетителей сегодня: ",-1)),d("strong",null,O(r.liveVisitors),1)])]),d("div",iR,[d("span",null,[e[43]||(e[43]=Ms("🦁 Животных: ",-1)),d("strong",null,O(n.animals.length),1)])]),d("div",oR,[d("span",null,[e[44]||(e[44]=Ms("📅 Событий: ",-1)),d("strong",null,O(n.events.length),1)])])])])])])]),d("section",aR,[d("div",lR,[d("div",cR,[(V(!0),N(ue,null,Ee(r.infoBanners,o=>(V(),N("div",{class:"info-card",key:o.title},[d("span",uR,O(o.icon),1),d("h3",null,O(o.title),1),d("p",null,O(o.text),1)]))),128))])])])])}const dR=Un(aS,[["render",hR]]),fR={name:"AnimalsView",props:["animals","loading"],emits:["open-animal"],data(){return{searchQuery:"",selectedCategory:"Все",sortBy:"name",currentPage:1,perPage:12}},computed:{categories(){return["Все",...new Set(this.animals.map(t=>t.category))]},filteredAnimals(){let t=[...this.animals];if(this.selectedCategory!=="Все"&&(t=t.filter(e=>e.category===this.selectedCategory)),this.searchQuery){const e=this.searchQuery.toLowerCase();t=t.filter(n=>n.name.toLowerCase().includes(e))}return t.sort((e,n)=>{var s;return((s=e[this.sortBy])==null?void 0:s.localeCompare(n[this.sortBy]))||0}),t},totalPages(){return Math.ceil(this.filteredAnimals.length/this.perPage)},paginatedAnimals(){const t=(this.currentPage-1)*this.perPage;return this.filteredAnimals.slice(t,t+this.perPage)}},watch:{searchQuery(){this.currentPage=1},selectedCategory(){this.currentPage=1}},methods:{handleErr(t){t.target.src="https://via.placeholder.com/300x200?text=🦁"}}},pR={class:"animals-view"},mR={class:"container"},gR={class:"catalog-controls"},_R={class:"search-wrap"},yR={class:"filter-tags"},vR=["onClick"],ER={key:0,class:"loading-grid"},wR={key:1,class:"animals-grid"},TR=["onClick"],IR={class:"animal-card-img"},AR=["src","alt"],bR={class:"animal-card-body"},CR={class:"animal-category"},SR={class:"animal-latin-small"},RR={key:2,class:"pagination"},PR=["disabled"],kR=["onClick"],VR=["disabled"];function DR(t,e,n,s,r,i){return V(),N("div",pR,[e[8]||(e[8]=d("div",{class:"page-hero"},[d("h1",null,"Наши животные"),d("p",null,"Познакомьтесь с 200+ обитателями зоопарка")],-1)),d("div",mR,[d("div",gR,[d("div",_R,[e[5]||(e[5]=d("span",{class:"search-icon"},"🔍",-1)),Ne(d("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.searchQuery=o),type:"text",placeholder:"Поиск...",class:"search-input"},null,512),[[Ue,r.searchQuery]])]),d("div",yR,[(V(!0),N(ue,null,Ee(i.categories,o=>(V(),N("button",{key:o,class:Ie(["filter-tag",{active:r.selectedCategory===o}]),onClick:l=>r.selectedCategory=o},O(o),11,vR))),128))]),Ne(d("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.sortBy=o),class:"sort-select"},[...e[6]||(e[6]=[d("option",{value:"name"},"По имени",-1),d("option",{value:"category"},"По категории",-1),d("option",{value:"status"},"По статусу",-1)])],512),[[om,r.sortBy]])]),n.loading?(V(),N("div",ER,[(V(),N(ue,null,Ee(12,o=>d("div",{key:o,class:"skeleton-card"})),64))])):(V(),N("div",wR,[(V(!0),N(ue,null,Ee(i.paginatedAnimals,o=>(V(),N("div",{key:o.id,class:"animal-card",onClick:l=>t.$emit("open-animal",o)},[d("div",IR,[d("img",{src:o.image,alt:o.name,loading:"lazy",onError:e[2]||(e[2]=(...l)=>i.handleErr&&i.handleErr(...l))},null,40,AR),d("span",{class:Ie(["animal-status-dot","dot-"+o.status])},null,2),e[7]||(e[7]=d("div",{class:"animal-card-overlay"},[d("span",null,"Подробнее")],-1))]),d("div",bR,[d("span",CR,O(o.category),1),d("h3",null,O(o.name),1),d("p",SR,O(o.latinName),1),d("span",{class:Ie(["status-badge","status-"+o.status])},O(o.statusText),3)])],8,TR))),128))])),i.totalPages>1?(V(),N("div",RR,[d("button",{disabled:r.currentPage===1,onClick:e[3]||(e[3]=o=>r.currentPage--),class:"page-btn"},"‹",8,PR),(V(!0),N(ue,null,Ee(i.totalPages,o=>(V(),N("button",{key:o,class:Ie(["page-btn",{active:o===r.currentPage}]),onClick:l=>r.currentPage=o},O(o),11,kR))),128)),d("button",{disabled:r.currentPage===i.totalPages,onClick:e[4]||(e[4]=o=>r.currentPage++),class:"page-btn"},"›",8,VR)])):fe("",!0)])])}const NR=Un(fR,[["render",DR]]),OR={name:"EventsView",props:["events","loading","currentUser"],emits:["open-event","add-to-cart","need-auth"],data(){return{selectedType:"Все"}},computed:{eventTypes(){return["Все",...new Set(this.events.map(t=>t.type))]},filteredEvents(){return this.selectedType==="Все"?this.events:this.events.filter(t=>t.type===this.selectedType)}},methods:{formatDate(t){return t?(t.toDate?t.toDate():new Date(t)).toLocaleDateString("ru-RU",{day:"numeric",month:"long"}):""},handleErr(t){t.target.onerror=null,t.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0ede6'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23333'%3EФото недоступно%3C/text%3E%3C/svg%3E"}}},xR={class:"events-view"},MR={class:"container"},LR={class:"events-filter-bar"},FR={class:"filter-tags"},UR=["onClick"],BR={key:0,class:"loading-grid"},jR={key:1,class:"events-full-grid"},qR=["onClick"],$R={class:"efc-img"},HR=["src","alt"],WR={class:"efc-type"},zR={key:0,class:"efc-warning"},KR={class:"efc-body"},GR={class:"efc-meta"},QR={class:"efc-footer"},YR={class:"efc-price"},JR=["onClick"];function XR(t,e,n,s,r,i){return V(),N("div",xR,[e[1]||(e[1]=d("div",{class:"page-hero events-hero"},[d("h1",null,"Мероприятия"),d("p",null,"Экскурсии, шоу, мастер-классы и специальные события")],-1)),d("div",MR,[d("div",LR,[d("div",FR,[(V(!0),N(ue,null,Ee(i.eventTypes,o=>(V(),N("button",{key:o,class:Ie(["filter-tag",{active:r.selectedType===o}]),onClick:l=>r.selectedType=o},O(o),11,UR))),128))])]),n.loading?(V(),N("div",BR,[(V(),N(ue,null,Ee(6,o=>d("div",{key:o,class:"skeleton-card"})),64))])):(V(),N("div",jR,[(V(!0),N(ue,null,Ee(i.filteredEvents,o=>{var l;return V(),N("div",{key:o.id,class:"event-full-card",onClick:c=>t.$emit("open-event",o)},[d("div",$R,[d("img",{src:o.image||"https://via.placeholder.com/400x250",alt:o.title,onError:e[0]||(e[0]=(...c)=>i.handleErr&&i.handleErr(...c))},null,40,HR),d("span",WR,O(o.type),1),o.spotsLeft<10?(V(),N("div",zR,"Мало мест!")):fe("",!0)]),d("div",KR,[d("h3",null,O(o.title),1),d("p",null,O((l=o.description)==null?void 0:l.substring(0,120))+"...",1),d("div",GR,[d("span",null,"Дата: "+O(i.formatDate(o.date)),1),d("span",null,"Время: "+O(o.time),1),d("span",null,"Мест: "+O(o.spotsLeft),1)]),d("div",QR,[d("strong",YR,O(o.price?o.price.toLocaleString()+" ₸":"Бесплатно"),1),d("button",{class:"btn-book-sm",onClick:xt(c=>t.$emit("add-to-cart",{type:"event",itemId:o.id,title:o.title,price:o.price||0,date:o.date||null,image:o.image||""}),["stop"])}," Записаться ",8,JR)])])],8,qR)}),128))]))])])}const ZR=Un(OR,[["render",XR]]),e1={name:"TicketsView",props:["currentUser"],emits:["add-to-cart","need-auth"],data(){return{tickets:[{id:"t1",emoji:"👤",name:"Взрослый",desc:"Для посетителей от 18 лет",price:2e3,qty:1,features:["Весь зоопарк","Аудиогид","Карта зоопарка"]},{id:"t2",emoji:"👦",name:"Детский",desc:"Для детей 3–17 лет",price:1e3,qty:1,features:["Весь зоопарк","Детский аудиогид","Раскраска"]},{id:"t3",emoji:"👨‍👩‍👧‍👦",name:"Семейный",desc:"2 взрослых + 2 ребёнка",price:5500,qty:1,featured:!0,features:["Весь зоопарк","Аудиогид ×4","Скидка 15%","Фото на память"]},{id:"t4",emoji:"👴",name:"Льготный",desc:"Для пенсионеров",price:800,qty:1,features:["Весь зоопарк","Аудиогид","Карта зоопарка"]},{id:"t5",emoji:"⭐",name:"VIP",desc:"Максимальный опыт",price:8e3,qty:1,features:["Весь зоопарк","Личный гид","Кормление животных","Сувенир","Фотосессия"]}]}},methods:{addToCart(t){if(!this.currentUser){this.$emit("need-auth");return}for(let e=0;e<t.qty;e++)this.$emit("add-to-cart",{type:"ticket",itemId:t.id,title:t.name+" билет",price:t.price,quantity:t.qty,image:null})}}},t1={class:"tickets-view"},n1={class:"container"},s1={class:"tickets-grid"},r1={class:"ticket-header"},i1={class:"ticket-emoji"},o1={class:"ticket-desc"},a1={class:"ticket-price"},l1={class:"price-big"},c1={class:"ticket-features"},u1={class:"ticket-qty"},h1=["onClick"],d1=["onClick"],f1=["onClick"];function p1(t,e,n,s,r,i){return V(),N("div",t1,[e[2]||(e[2]=d("div",{class:"page-hero tickets-hero"},[d("h1",null,"Билеты"),d("p",null,"Выберите тип билета и добавьте в корзину")],-1)),d("div",n1,[d("div",s1,[(V(!0),N(ue,null,Ee(r.tickets,o=>(V(),N("div",{key:o.id,class:Ie(["ticket-card",{featured:o.featured}])},[d("div",r1,[d("span",i1,O(o.emoji),1),d("h3",null,O(o.name),1),d("p",o1,O(o.desc),1)]),d("div",a1,[d("span",l1,O(o.price.toLocaleString()),1),e[0]||(e[0]=d("span",{class:"price-currency"},"₸",-1))]),d("ul",c1,[(V(!0),N(ue,null,Ee(o.features,l=>(V(),N("li",{key:l},"✓ "+O(l),1))),128))]),d("div",u1,[d("button",{onClick:l=>o.qty=Math.max(1,o.qty-1)},"−",8,h1),d("span",null,O(o.qty),1),d("button",{onClick:l=>o.qty++},"+",8,d1)]),d("button",{class:"btn-add-ticket",onClick:l=>i.addToCart(o)}," Добавить в корзину ",8,f1)],2))),128))]),e[1]||(e[1]=d("div",{class:"ticket-info-banner"},[d("h3",null,"📋 Правила посещения"),d("div",{class:"ticket-rules"},[d("p",null,"🕘 Часы работы: 09:00–20:00 ежедневно"),d("p",null,"🎫 Билет действителен в день покупки"),d("p",null,"👶 Дети до 3 лет — бесплатно"),d("p",null,"🦽 Льготные билеты для инвалидов — 50%")])],-1))])])}const m1=Un(e1,[["render",p1]]),g1={name:"CartView",props:["cartItems","currentUser"],emits:["remove-from-cart","checkout","need-auth"],computed:{total(){return this.cartItems.reduce((t,e)=>t+(e.price||0)*(e.quantity||1),0)}},methods:{formatDate(t){return t?(t.toDate?t.toDate():new Date(t)).toLocaleDateString("ru-RU"):""}}},_1={class:"cart-view"},y1={class:"container"},v1={key:0,class:"empty-state"},E1={key:1,class:"empty-state"},w1={key:2,class:"cart-layout"},T1={class:"cart-items-list"},I1={key:0,class:"cart-item-img"},A1=["src","alt"],b1={key:1,class:"cart-item-placeholder"},C1={class:"cart-item-info"},S1={key:0,class:"cart-item-date"},R1={class:"cart-item-price"},P1=["onClick"],k1={class:"cart-summary-box"},V1={class:"summary-total"};function D1(t,e,n,s,r,i){return V(),N("div",_1,[e[8]||(e[8]=d("div",{class:"page-hero"},[d("h1",null,"Корзина")],-1)),d("div",y1,[n.currentUser?n.cartItems.length===0?(V(),N("div",E1,[...e[5]||(e[5]=[d("span",{class:"empty-icon"},"Пусто",-1),d("p",null,"Корзина пуста",-1)])])):(V(),N("div",w1,[d("div",T1,[(V(!0),N(ue,null,Ee(n.cartItems,o=>(V(),N("div",{key:o.id,class:"cart-item-card"},[o.image?(V(),N("div",I1,[d("img",{src:o.image,alt:o.title,onError:e[1]||(e[1]=l=>l.target.style.display="none")},null,40,A1)])):(V(),N("div",b1,"Билет")),d("div",C1,[d("h4",null,O(o.title),1),o.date?(V(),N("p",S1,"Дата: "+O(i.formatDate(o.date)),1)):fe("",!0)]),d("span",R1,O(((o.price||0)*(o.quantity||1)).toLocaleString())+" ₸",1),d("button",{class:"cart-item-remove",onClick:l=>t.$emit("remove-from-cart",o.id)},"X",8,P1)]))),128))]),d("div",k1,[e[7]||(e[7]=d("h3",null,"Итого",-1)),(V(!0),N(ue,null,Ee(n.cartItems,o=>(V(),N("div",{class:"summary-row",key:o.id},[d("span",null,O(o.title),1),d("span",null,O(((o.price||0)*(o.quantity||1)).toLocaleString())+" ₸",1)]))),128)),d("div",V1,[e[6]||(e[6]=d("strong",null,"Всего:",-1)),d("strong",null,O(i.total.toLocaleString())+" ₸",1)]),d("button",{class:"btn-checkout",onClick:e[2]||(e[2]=o=>t.$emit("checkout"))},"Оформить заказ")])])):(V(),N("div",v1,[e[3]||(e[3]=d("span",{class:"empty-icon"},"Доступ закрыт",-1)),e[4]||(e[4]=d("p",null,"Войдите, чтобы увидеть корзину",-1)),d("button",{class:"btn-primary",onClick:e[0]||(e[0]=o=>t.$emit("need-auth"))},"Войти")]))])])}const N1=Un(g1,[["render",D1]]),O1={name:"ProfileView",props:["currentUser","orders","reviews","cartItems"],emits:["logout","remove-from-cart","checkout","delete-review","navigate"],data(){var t;return{activeTab:"overview",userRole:"user",editForm:{name:((t=this.currentUser)==null?void 0:t.displayName)||""}}},computed:{tabs(){return[{id:"overview",icon:"🏠",label:"Обзор",count:0},{id:"cart",icon:"🛒",label:"Корзина",count:this.cartItems.length},{id:"orders",icon:"📦",label:"Заказы",count:0},{id:"reviews",icon:"⭐",label:"Отзывы",count:0},{id:"settings",icon:"⚙️",label:"Настройки",count:0}]},cartTotal(){return this.cartItems.reduce((t,e)=>t+(e.price||0)*(e.quantity||1),0)}},methods:{formatDate(t){return t?(t.toDate?t.toDate():new Date(t)).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}):""},handleAvatar(t){t.target.src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="%23e8d5a3"/><text x="40" y="50" text-anchor="middle" font-size="40">👤</text></svg>'},handleImgError(t){t.target.style.display="none"},statusLabel(t){return{confirmed:"✅ Подтверждён",pending:"⏳ В обработке",cancelled:"❌ Отменён"}[t]||t},async decreaseQty(t){if((t.quantity||1)<=1){this.$emit("remove-from-cart",t.id);return}},async increaseQty(t){},async saveProfile(){try{await Hm(this.currentUser,{displayName:this.editForm.name}),alert("Профиль обновлён!")}catch(t){console.error(t)}}}},x1={class:"profile-view"},M1={class:"profile-layout"},L1={class:"profile-sidebar"},F1={class:"profile-avatar-wrap"},U1={class:"profile-avatar"},B1=["src"],j1={class:"profile-email"},q1={class:"profile-role-badge"},$1={class:"profile-nav"},H1=["onClick"],W1={class:"nav-tab-icon"},z1={key:0,class:"nav-badge"},K1={class:"profile-sidebar-actions"},G1={class:"profile-main"},Q1={key:0,class:"profile-tab"},Y1={class:"overview-stats"},J1={class:"ov-stat"},X1={class:"ov-num"},Z1={class:"ov-stat"},eP={class:"ov-num"},tP={class:"ov-stat"},nP={class:"ov-num"},sP={key:0,class:"recent-orders"},rP={class:"order-info"},iP={class:"order-date"},oP={class:"order-items-count"},aP={class:"order-right"},lP={class:"order-total"},cP={key:1,class:"profile-tab"},uP={key:0,class:"empty-state"},hP={key:1},dP={class:"cart-list"},fP={key:0,class:"cart-item-img"},pP=["src","alt"],mP={key:1,class:"cart-item-emoji"},gP={class:"cart-item-info"},_P={key:0,class:"cart-item-date"},yP={class:"cart-item-type"},vP={class:"cart-item-price-wrap"},EP={class:"qty-control"},wP=["onClick"],TP=["onClick"],IP={class:"cart-item-price"},AP=["onClick"],bP={class:"cart-summary"},CP={class:"cart-total"},SP={key:2,class:"profile-tab"},RP={key:0,class:"empty-state"},PP={key:1},kP={class:"order-card-header"},VP={class:"order-id"},DP={class:"order-date"},NP={class:"order-right"},OP={class:"order-total"},xP={class:"order-items"},MP={key:3,class:"profile-tab"},LP={key:0,class:"empty-state"},FP={key:1,class:"reviews-list"},UP={class:"review-card-header"},BP={class:"review-animal"},jP={class:"review-animal-name"},qP={class:"review-stars"},$P={class:"review-card-actions"},HP={class:"review-card-date"},WP=["onClick"],zP={class:"review-text"},KP={key:4,class:"profile-tab"},GP={class:"form-group"},QP={class:"form-group"},YP=["value"];function JP(t,e,n,s,r,i){return V(),N("div",x1,[d("div",M1,[d("aside",L1,[d("div",F1,[d("div",U1,[d("img",{src:n.currentUser.photoURL||"",onError:e[0]||(e[0]=(...o)=>i.handleAvatar&&i.handleAvatar(...o)),class:"avatar-img"},null,40,B1)]),d("h3",null,O(n.currentUser.displayName||"Пользователь"),1),d("p",j1,O(n.currentUser.email),1),d("span",q1,O(r.userRole),1)]),d("nav",$1,[(V(!0),N(ue,null,Ee(i.tabs,o=>(V(),N("button",{key:o.id,class:Ie(["profile-nav-item",{active:r.activeTab===o.id}]),onClick:l=>r.activeTab=o.id},[d("span",W1,O(o.icon),1),d("span",null,O(o.label),1),o.count>0?(V(),N("span",z1,O(o.count),1)):fe("",!0)],10,H1))),128))]),d("div",K1,[d("button",{class:"btn-logout",onClick:e[1]||(e[1]=o=>t.$emit("logout"))},[...e[8]||(e[8]=[d("span",null,"🚪",-1),Ms(" Выйти ",-1)])])])]),d("div",G1,[r.activeTab==="overview"?(V(),N("div",Q1,[e[16]||(e[16]=d("h2",null,"Личный кабинет",-1)),d("div",Y1,[d("div",J1,[e[9]||(e[9]=d("span",{class:"ov-icon"},"🛒",-1)),d("span",X1,O(n.cartItems.length),1),e[10]||(e[10]=d("span",{class:"ov-label"},"В корзине",-1))]),d("div",Z1,[e[11]||(e[11]=d("span",{class:"ov-icon"},"📦",-1)),d("span",eP,O(n.orders.length),1),e[12]||(e[12]=d("span",{class:"ov-label"},"Заказов",-1))]),d("div",tP,[e[13]||(e[13]=d("span",{class:"ov-icon"},"⭐",-1)),d("span",nP,O(n.reviews.length),1),e[14]||(e[14]=d("span",{class:"ov-label"},"Отзывов",-1))])]),n.orders.length>0?(V(),N("div",sP,[e[15]||(e[15]=d("h3",null,"Последние заказы",-1)),(V(!0),N(ue,null,Ee(n.orders.slice(0,3),o=>{var l,c;return V(),N("div",{key:o.id,class:"order-item-mini"},[d("div",rP,[d("span",iP,O(i.formatDate(o.createdAt)),1),d("span",oP,O(((l=o.items)==null?void 0:l.length)||0)+" позиций",1)]),d("div",aP,[d("span",lP,O((c=o.total)==null?void 0:c.toLocaleString())+" ₸",1),d("span",{class:Ie(["order-status","os-"+o.status])},O(i.statusLabel(o.status)),3)])])}),128))])):fe("",!0)])):fe("",!0),r.activeTab==="cart"?(V(),N("div",cP,[e[20]||(e[20]=d("h2",null,"Корзина",-1)),n.cartItems.length===0?(V(),N("div",uP,[e[17]||(e[17]=d("span",{class:"empty-icon"},"🛒",-1)),e[18]||(e[18]=d("p",null,"Корзина пуста",-1)),d("button",{class:"btn-primary",onClick:e[2]||(e[2]=o=>t.$emit("navigate","tickets"))},"Купить билеты")])):(V(),N("div",hP,[d("div",dP,[(V(!0),N(ue,null,Ee(n.cartItems,o=>(V(),N("div",{key:o.id,class:"cart-item-card"},[o.image?(V(),N("div",fP,[d("img",{src:o.image,alt:o.title,onError:e[3]||(e[3]=(...l)=>i.handleImgError&&i.handleImgError(...l))},null,40,pP)])):(V(),N("div",mP,"🎫")),d("div",gP,[d("h4",null,O(o.title),1),o.date?(V(),N("p",_P,"📅 "+O(i.formatDate(o.date)),1)):fe("",!0),d("p",yP,O(o.type),1)]),d("div",vP,[d("div",EP,[d("button",{onClick:l=>i.decreaseQty(o)},"−",8,wP),d("span",null,O(o.quantity||1),1),d("button",{onClick:l=>i.increaseQty(o)},"+",8,TP)]),d("span",IP,O(((o.price||0)*(o.quantity||1)).toLocaleString())+" ₸",1)]),d("button",{class:"cart-item-remove",onClick:l=>t.$emit("remove-from-cart",o.id)},"✕",8,AP)]))),128))]),d("div",bP,[d("div",CP,[e[19]||(e[19]=d("span",null,"Итого:",-1)),d("strong",null,O(i.cartTotal.toLocaleString())+" ₸",1)]),d("button",{class:"btn-checkout",onClick:e[4]||(e[4]=o=>t.$emit("checkout"))},"Оформить заказ")])]))])):fe("",!0),r.activeTab==="orders"?(V(),N("div",SP,[e[22]||(e[22]=d("h2",null,"История заказов",-1)),n.orders.length===0?(V(),N("div",RP,[...e[21]||(e[21]=[d("span",{class:"empty-icon"},"📦",-1),d("p",null,"Заказов пока нет",-1)])])):(V(),N("div",PP,[(V(!0),N(ue,null,Ee(n.orders,o=>{var l;return V(),N("div",{key:o.id,class:"order-card"},[d("div",kP,[d("div",null,[d("span",VP,"Заказ #"+O(o.id.slice(-6).toUpperCase()),1),d("span",DP,O(i.formatDate(o.createdAt)),1)]),d("div",NP,[d("strong",OP,O((l=o.total)==null?void 0:l.toLocaleString())+" ₸",1),d("span",{class:Ie(["order-status","os-"+o.status])},O(i.statusLabel(o.status)),3)])]),d("div",xP,[(V(!0),N(ue,null,Ee(o.items,(c,h)=>(V(),N("div",{key:h,class:"order-item-row"},[d("span",null,O(c.title),1),d("span",null,"×"+O(c.quantity||1),1),d("span",null,O(((c.price||0)*(c.quantity||1)).toLocaleString())+" ₸",1)]))),128))])])}),128))]))])):fe("",!0),r.activeTab==="reviews"?(V(),N("div",MP,[e[25]||(e[25]=d("h2",null,"Мои отзывы",-1)),n.reviews.length===0?(V(),N("div",LP,[e[23]||(e[23]=d("span",{class:"empty-icon"},"⭐",-1)),e[24]||(e[24]=d("p",null,"Вы ещё не оставляли отзывов",-1)),d("button",{class:"btn-primary",onClick:e[5]||(e[5]=o=>t.$emit("navigate","animals"))},"Посмотреть животных")])):(V(),N("div",FP,[(V(!0),N(ue,null,Ee(n.reviews,o=>(V(),N("div",{key:o.id,class:"review-card"},[d("div",UP,[d("div",BP,[d("span",jP,"Животное ID: "+O(o.animalId),1),d("div",qP,O("⭐".repeat(o.rating)),1)]),d("div",$P,[d("span",HP,O(i.formatDate(o.createdAt)),1),d("button",{class:"btn-delete-review",onClick:l=>t.$emit("delete-review",o.id)},"🗑️",8,WP)])]),d("p",zP,O(o.text),1)]))),128))]))])):fe("",!0),r.activeTab==="settings"?(V(),N("div",KP,[e[29]||(e[29]=d("h2",null,"Настройки профиля",-1)),d("form",{onSubmit:e[7]||(e[7]=xt((...o)=>i.saveProfile&&i.saveProfile(...o),["prevent"])),class:"settings-form"},[d("div",GP,[e[26]||(e[26]=d("label",null,"Имя",-1)),Ne(d("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>r.editForm.name=o),type:"text"},null,512),[[Ue,r.editForm.name]])]),d("div",QP,[e[27]||(e[27]=d("label",null,"Email",-1)),d("input",{value:n.currentUser.email,type:"email",disabled:"",class:"disabled-input"},null,8,YP)]),e[28]||(e[28]=d("button",{type:"submit",class:"btn-primary"},"Сохранить изменения",-1))],32)])):fe("",!0)])])])}const XP=Un(O1,[["render",JP]]),ZP={name:"AboutView",data(){return{missions:[{icon:"🌿",title:"Сохранение природы",text:"Участвуем в международных программах сохранения редких видов."},{icon:"🎓",title:"Образование",text:"Проводим экскурсии, лекции и мастер-классы для школьников."},{icon:"🔬",title:"Наука",text:"Ведём научную работу по изучению поведения и биологии животных."},{icon:"🌍",title:"Экология",text:"Внедряем экологические практики во всей работе зоопарка."}]}}},ek={class:"about-view"},tk={class:"container"},nk={class:"about-content"},sk={class:"about-mission"},rk={class:"mission-cards"},ik={class:"mission-icon"};function ok(t,e,n,s,r,i){return V(),N("div",ek,[e[3]||(e[3]=d("div",{class:"page-hero"},[d("h1",null,"О нас"),d("p",null,"История и миссия Алматинского зоопарка")],-1)),d("div",tk,[d("div",nk,[e[1]||(e[1]=d("div",{class:"about-section"},[d("h2",null,"Наша история"),d("p",null,"Алматинский зоопарк был основан в 1972 году и является одним из крупнейших зоопарков Центральной Азии. За более чем 50 лет работы зоопарк стал не только местом отдыха, но и важным научным и образовательным центром."),d("p",null,"Сегодня в нашем зоопарке обитают более 200 видов животных, многие из которых занесены в Красную книгу и участвуют в международных программах разведения редких животных.")],-1)),d("div",sk,[e[0]||(e[0]=d("h2",null,"Наша миссия",-1)),d("div",rk,[(V(!0),N(ue,null,Ee(r.missions,o=>(V(),N("div",{class:"mission-card",key:o.title},[d("span",ik,O(o.icon),1),d("h3",null,O(o.title),1),d("p",null,O(o.text),1)]))),128))])]),e[2]||(e[2]=Yp('<div class="about-contacts"><h2>Контакты</h2><div class="contact-grid"><div class="contact-item"><span>📍</span><p>ул. Байтурсынова 161, Алматы</p></div><div class="contact-item"><span>📞</span><p>+7 (727) 270-40-88</p></div><div class="contact-item"><span>📧</span><p>info@zoo.almaty.kz</p></div><div class="contact-item"><span>🕘</span><p>Ежедневно 09:00–20:00</p></div></div></div>',1))])])])}const ak=Un(ZP,[["render",ok]]),lk={name:"AdminView",props:["animals","events","users"],emits:["add-animal","update-animal","delete-animal","add-event","update-event","delete-event","set-admin"],data(){return{activeTab:"animals",adminTabs:[{id:"animals",label:"🦁 Животные"},{id:"events",label:"📅 Мероприятия"},{id:"users",label:"👥 Пользователи"}],showAddAnimalForm:!1,showAddEventForm:!1,animalForm:{name:"",latinName:"",category:"",image:"",status:"",statusText:"",description:""},eventForm:{title:"",type:"",price:0,spotsLeft:20,location:"",image:"",description:""}}},methods:{submitAnimal(){this.$emit("add-animal",{...this.animalForm}),this.animalForm={name:"",latinName:"",category:"",image:"",status:"",statusText:"",description:""},this.showAddAnimalForm=!1},submitEvent(){this.$emit("add-event",{...this.eventForm,price:Number(this.eventForm.price),spotsLeft:Number(this.eventForm.spotsLeft),date:new Date}),this.eventForm={title:"",type:"",price:0,spotsLeft:20,location:"",image:"",description:""},this.showAddEventForm=!1}}},ck={class:"admin-view"},uk={class:"container"},hk={class:"admin-tabs"},dk=["onClick"],fk={key:0,class:"admin-section"},pk={class:"admin-section-header"},mk={class:"form-actions"},gk={class:"admin-table"},_k={class:"admin-actions"},yk=["onClick"],vk={key:1,class:"admin-section"},Ek={class:"admin-section-header"},wk={class:"form-actions"},Tk={class:"admin-table"},Ik={class:"admin-actions"},Ak=["onClick"],bk={key:2,class:"admin-section"};function Ck(t,e,n,s,r,i){return V(),N("div",ck,[e[25]||(e[25]=d("div",{class:"page-hero admin-hero"},[d("h1",null,"⚙️ Администрирование")],-1)),d("div",uk,[d("div",hk,[(V(!0),N(ue,null,Ee(r.adminTabs,o=>(V(),N("button",{key:o.id,class:Ie(["admin-tab",{active:r.activeTab===o.id}]),onClick:l=>r.activeTab=o.id},O(o.label),11,dk))),128))]),r.activeTab==="animals"?(V(),N("div",fk,[d("div",pk,[d("h2",null,"Животные ("+O(n.animals.length)+")",1),d("button",{class:"btn-add",onClick:e[0]||(e[0]=o=>r.showAddAnimalForm=!r.showAddAnimalForm)},"+ Добавить")]),r.showAddAnimalForm?(V(),N("form",{key:0,onSubmit:e[9]||(e[9]=xt((...o)=>i.submitAnimal&&i.submitAnimal(...o),["prevent"])),class:"admin-form"},[Ne(d("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.animalForm.name=o),placeholder:"Название",required:""},null,512),[[Ue,r.animalForm.name]]),Ne(d("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.animalForm.latinName=o),placeholder:"Латинское название"},null,512),[[Ue,r.animalForm.latinName]]),Ne(d("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.animalForm.category=o),placeholder:"Категория"},null,512),[[Ue,r.animalForm.category]]),Ne(d("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.animalForm.image=o),placeholder:"URL изображения"},null,512),[[Ue,r.animalForm.image]]),Ne(d("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>r.animalForm.status=o),placeholder:"Статус (vulnerable, endangered...)"},null,512),[[Ue,r.animalForm.status]]),Ne(d("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>r.animalForm.statusText=o),placeholder:"Текст статуса"},null,512),[[Ue,r.animalForm.statusText]]),Ne(d("textarea",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.animalForm.description=o),placeholder:"Описание",rows:"3"},null,512),[[Ue,r.animalForm.description]]),d("div",mk,[e[20]||(e[20]=d("button",{type:"submit",class:"btn-primary"},"Сохранить",-1)),d("button",{type:"button",onClick:e[8]||(e[8]=o=>r.showAddAnimalForm=!1)},"Отмена")])],32)):fe("",!0),d("div",gk,[e[21]||(e[21]=d("div",{class:"admin-row header-row"},[d("span",null,"Название"),d("span",null,"Категория"),d("span",null,"Статус"),d("span",null,"Действия")],-1)),(V(!0),N(ue,null,Ee(n.animals,o=>(V(),N("div",{key:o.id,class:"admin-row"},[d("span",null,O(o.name),1),d("span",null,O(o.category),1),d("span",{class:Ie("status-"+o.status)},O(o.statusText),3),d("span",_k,[d("button",{onClick:l=>t.$emit("delete-animal",o.id),class:"btn-delete"},"Удалить",8,yk)])]))),128))])])):fe("",!0),r.activeTab==="events"?(V(),N("div",vk,[d("div",Ek,[d("h2",null,"Мероприятия ("+O(n.events.length)+")",1),d("button",{class:"btn-add",onClick:e[10]||(e[10]=o=>r.showAddEventForm=!r.showAddEventForm)},"+ Добавить")]),r.showAddEventForm?(V(),N("form",{key:0,onSubmit:e[19]||(e[19]=xt((...o)=>i.submitEvent&&i.submitEvent(...o),["prevent"])),class:"admin-form"},[Ne(d("input",{"onUpdate:modelValue":e[11]||(e[11]=o=>r.eventForm.title=o),placeholder:"Название",required:""},null,512),[[Ue,r.eventForm.title]]),Ne(d("input",{"onUpdate:modelValue":e[12]||(e[12]=o=>r.eventForm.type=o),placeholder:"Тип (Экскурсия, Лекция...)"},null,512),[[Ue,r.eventForm.type]]),Ne(d("input",{"onUpdate:modelValue":e[13]||(e[13]=o=>r.eventForm.price=o),type:"number",placeholder:"Цена (0 = бесплатно)"},null,512),[[Ue,r.eventForm.price]]),Ne(d("input",{"onUpdate:modelValue":e[14]||(e[14]=o=>r.eventForm.spotsLeft=o),type:"number",placeholder:"Количество мест"},null,512),[[Ue,r.eventForm.spotsLeft]]),Ne(d("input",{"onUpdate:modelValue":e[15]||(e[15]=o=>r.eventForm.location=o),placeholder:"Место проведения"},null,512),[[Ue,r.eventForm.location]]),Ne(d("input",{"onUpdate:modelValue":e[16]||(e[16]=o=>r.eventForm.image=o),placeholder:"URL изображения"},null,512),[[Ue,r.eventForm.image]]),Ne(d("textarea",{"onUpdate:modelValue":e[17]||(e[17]=o=>r.eventForm.description=o),placeholder:"Описание",rows:"3"},null,512),[[Ue,r.eventForm.description]]),d("div",wk,[e[22]||(e[22]=d("button",{type:"submit",class:"btn-primary"},"Сохранить",-1)),d("button",{type:"button",onClick:e[18]||(e[18]=o=>r.showAddEventForm=!1)},"Отмена")])],32)):fe("",!0),d("div",Tk,[e[23]||(e[23]=d("div",{class:"admin-row header-row"},[d("span",null,"Название"),d("span",null,"Тип"),d("span",null,"Цена"),d("span",null,"Мест"),d("span",null,"Действия")],-1)),(V(!0),N(ue,null,Ee(n.events,o=>(V(),N("div",{key:o.id,class:"admin-row"},[d("span",null,O(o.title),1),d("span",null,O(o.type),1),d("span",null,O(o.price?o.price+" ₸":"Бесплатно"),1),d("span",null,O(o.spotsLeft),1),d("span",Ik,[d("button",{onClick:l=>t.$emit("delete-event",o.id),class:"btn-delete"},"Удалить",8,Ak)])]))),128))])])):fe("",!0),r.activeTab==="users"?(V(),N("div",bk,[...e[24]||(e[24]=[d("h2",null,"Пользователи",-1),d("p",{class:"admin-note"},"Управление пользователями через Firebase.",-1)])])):fe("",!0)])])}const Sk=Un(lk,[["render",Ck],["__scopeId","data-v-59a8034b"]]),Rk="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23f0ede6'/><text x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='20'>Img</text></svg>",Pk="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><circle cx='20' cy='20' r='20' fill='%23e8d5a3'/><text x='20' y='25' text-anchor='middle' font-size='12'>User</text></svg>",kk={name:"App",components:{HomeView:dR,AnimalsView:NR,EventsView:ZR,TicketsView:m1,CartView:N1,ProfileView:XP,AboutView:ak,AdminView:Sk},data(){return{currentView:"home",currentUser:null,isAdmin:!1,scrolled:!1,mobileMenuOpen:!1,activeModal:null,authTab:"login",authForm:{email:"",password:"",name:""},authError:"",authLoading:!1,animals:[],events:[],cartItems:[],orders:[],reviews:[],allUsers:[],loading:!0,selectedAnimal:null,selectedEvent:null,animalReviews:[],reviewForm:{rating:5,text:""},toasts:[],unsubscribers:[]}},computed:{userName(){var t,e,n;return((t=this.currentUser)==null?void 0:t.displayName)||((n=(e=this.currentUser)==null?void 0:e.email)==null?void 0:n.split("@")[0])||"Пользователь"},cartCount(){return this.cartItems.reduce((t,e)=>t+(e.quantity||1),0)},similarEvents(){return this.selectedEvent?this.events.filter(t=>t.id!==this.selectedEvent.id&&t.type===this.selectedEvent.type).slice(0,3):[]}},async mounted(){window.addEventListener("scroll",this.handleScroll),this.setupAuthListener(),await this.loadAnimals(),await this.loadEvents()},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll),this.unsubscribers.forEach(t=>t())},methods:{handleScroll(){this.scrolled=window.scrollY>50},navigate(t){if(t==="profile"&&!this.currentUser){this.openModal("auth");return}t==="admin"&&!this.isAdmin||(this.currentView=t,this.mobileMenuOpen=!1,window.scrollTo({top:0,behavior:"smooth"}))},openModal(t){this.activeModal=t,this.authError=""},closeModal(){this.activeModal=null,this.authForm={email:"",password:"",name:""},this.authError=""},openAnimalModal(t){this.selectedAnimal=t,this.activeModal="animal",this.loadAnimalReviews(t.id)},openEventModal(t){this.selectedEvent=t,this.activeModal="event"},setupAuthListener(){const t=bI(ui,async e=>{this.currentUser=e,e?await this.loadUserData(e.uid):(this.cartItems=[],this.orders=[],this.reviews=[],this.isAdmin=!1)});this.unsubscribers.push(t)},async loadUserData(t){try{const e=await sS(jt(Le,"users",t));e.exists()&&(this.isAdmin=e.data().role==="admin"),this.loadCart(t),this.loadOrders(t),this.loadUserReviews(t)}catch(e){console.error("loadUserData:",e)}},async login(){this.authLoading=!0,this.authError="";try{await wI(ui,this.authForm.email,this.authForm.password),this.closeModal(),this.showToast("Добро пожаловать!","success")}catch(t){this.authError=this.getAuthError(t.code)}finally{this.authLoading=!1}},async register(){this.authLoading=!0,this.authError="";try{const{user:t}=await EI(ui,this.authForm.email,this.authForm.password);await Hm(t,{displayName:this.authForm.name}),await rS(jt(Le,"users",t.uid),{name:this.authForm.name,email:this.authForm.email,role:"user",createdAt:Yn()}),this.closeModal(),this.showToast("Аккаунт создан!","success")}catch(t){this.authError=this.getAuthError(t.code)}finally{this.authLoading=!1}},async logout(){await CI(ui),this.currentView="home",this.showToast("До свидания!","info")},async resetPassword(){if(!this.authForm.email){this.authError="Введите email для сброса пароля";return}try{await vI(ui,this.authForm.email),this.showToast("Письмо для сброса пароля отправлено!","success")}catch(t){this.authError=this.getAuthError(t.code)}},getAuthError(t){return{"auth/email-already-in-use":"Email уже используется","auth/invalid-email":"Некорректный email","auth/weak-password":"Слабый пароль (минимум 6 символов)","auth/user-not-found":"Пользователь не найден","auth/wrong-password":"Неверный пароль","auth/too-many-requests":"Слишком много попыток. Попробуйте позже","auth/invalid-credential":"Неверный email или пароль"}[t]||"Произошла ошибка. Попробуйте снова."},async loadAnimals(){this.loading=!0;try{const t=ks(gt(Le,"animals"),Vs("name"),Bf(50)),e=await Po(t);if(e.empty){await this.seedAnimals();const s=await Po(t);this.animals=s.docs.map(r=>({id:r.id,...r.data()}))}else this.animals=e.docs.map(s=>({id:s.id,...s.data()}));const n=ar(ks(gt(Le,"animals"),Vs("name")),s=>{this.animals=s.docs.map(r=>({id:r.id,...r.data()}))});this.unsubscribers.push(n)}catch(t){console.error("loadAnimals:",t)}finally{this.loading=!1}},async loadEvents(){try{const t=ks(gt(Le,"events"),Vs("date"),Bf(50)),e=await Po(t);if(e.empty){await this.seedEvents();const s=await Po(t);this.events=s.docs.map(r=>({id:r.id,...r.data()}))}else this.events=e.docs.map(s=>({id:s.id,...s.data()}));const n=ar(ks(gt(Le,"events"),Vs("date")),s=>{this.events=s.docs.map(r=>({id:r.id,...r.data()}))});this.unsubscribers.push(n)}catch(t){console.error("loadEvents:",t)}},loadCart(t){const e=ar(gt(Le,"users",t,"cart"),n=>{this.cartItems=n.docs.map(s=>({id:s.id,...s.data()}))});this.unsubscribers.push(e)},loadOrders(t){const e=ar(ks(gt(Le,"users",t,"orders"),Vs("createdAt","desc")),n=>{this.orders=n.docs.map(s=>({id:s.id,...s.data()}))});this.unsubscribers.push(e)},loadUserReviews(t){const e=ar(ks(gt(Le,"reviews"),Uf("userId","==",t),Vs("createdAt","desc")),n=>{this.reviews=n.docs.map(s=>({id:s.id,...s.data()}))});this.unsubscribers.push(e)},loadAnimalReviews(t){const e=ar(ks(gt(Le,"reviews"),Uf("animalId","==",t),Vs("createdAt","desc")),n=>{this.animalReviews=n.docs.map(s=>({id:s.id,...s.data()}))},n=>{console.error("Ошибка загрузки отзывов (вероятно, нужен индекс):",n)});this.unsubscribers.push(e)},async addToCart(t){if(!this.currentUser){this.openModal("auth");return}try{await Ds(gt(Le,"users",this.currentUser.uid,"cart"),{...t,quantity:1,addedAt:Yn()}),this.showToast("Добавлено в корзину!","success")}catch{this.showToast("Ошибка добавления в корзину","error")}},addEventToCart(t){if(!this.currentUser){this.closeModal(),this.openModal("auth");return}this.addToCart({type:"event",itemId:t.id,title:t.title,price:t.price||0,date:t.date,image:t.image||""}),this.closeModal()},async removeFromCart(t){if(this.currentUser)try{await ci(jt(Le,"users",this.currentUser.uid,"cart",t)),this.showToast("Удалено из корзины","info")}catch{this.showToast("Ошибка удаления","error")}},async checkout(){if(!(!this.currentUser||!this.cartItems.length))try{const t=this.cartItems.reduce((e,n)=>e+(n.price||0)*(n.quantity||1),0);await Ds(gt(Le,"users",this.currentUser.uid,"orders"),{items:this.cartItems,total:t,status:"confirmed",createdAt:Yn()});for(const e of this.cartItems)await ci(jt(Le,"users",this.currentUser.uid,"cart",e.id));this.showToast("Заказ оформлен!","success"),this.navigate("profile")}catch{this.showToast("Ошибка оформления заказа","error")}},async submitReview(){if(!(!this.currentUser||!this.selectedAnimal||!this.reviewForm.text.trim()))try{await Ds(gt(Le,"reviews"),{animalId:this.selectedAnimal.id,userId:this.currentUser.uid,userName:this.currentUser.displayName||"Посетитель",text:this.reviewForm.text,rating:this.reviewForm.rating,createdAt:Yn()}),this.reviewForm={rating:5,text:""},this.showToast("Отзыв отправлен!","success")}catch(t){console.error("Ошибка сохранения отзыва в БД:",t),this.showToast("Ошибка отправки отзыва","error")}},async deleteReview(t){try{await ci(jt(Le,"reviews",t)),this.showToast("Отзыв удалён","info")}catch{this.showToast("Ошибка удаления отзыва","error")}},async addAnimal(t){await Ds(gt(Le,"animals"),{...t,createdAt:Yn()}),this.showToast("Животное добавлено!","success")},async updateAnimal(t,e){await jl(jt(Le,"animals",t),e),this.showToast("Обновлено!","success")},async deleteAnimal(t){await ci(jt(Le,"animals",t)),this.showToast("Удалено","info")},async addEvent(t){await Ds(gt(Le,"events"),{...t,createdAt:Yn()}),this.showToast("Мероприятие добавлено!","success")},async updateEvent(t,e){await jl(jt(Le,"events",t),e),this.showToast("Обновлено!","success")},async deleteEvent(t){await ci(jt(Le,"events",t)),this.showToast("Удалено","info")},async setAdmin(t,e){await jl(jt(Le,"users",t),{role:e?"admin":"user"}),this.showToast("Роль обновлена","success")},handleCardImgError(t){t.target.onerror=null,t.target.src=Rk},handleAvatarError(t){t.target.onerror=null,t.target.src=Pk},formatDate(t){return t?(t.toDate?t.toDate():new Date(t)).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}):""},showToast(t,e="info"){const n=Date.now();this.toasts.push({id:n,message:t,type:e}),setTimeout(()=>{this.toasts=this.toasts.filter(s=>s.id!==n)},3e3)},async seedAnimals(){const t=[{name:"Африканский лев",latinName:"Panthera leo",category:"Хищники",species:"Млекопитающее",habitat:"Африканская саванна",status:"vulnerable",statusText:"Уязвимый",description:'Величественный хищник, известный как "царь зверей". Живёт в прайдах до 30 особей.',image:"https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",facts:["Может развивать скорость до 80 км/ч","Спит до 20 часов в сутки","Рёв слышен на 8 км"]},{name:"Жираф",latinName:"Giraffa camelopardalis",category:"Травоядные",species:"Млекопитающее",habitat:"Африканская саванна",status:"vulnerable",statusText:"Уязвимый",description:"Самое высокое животное на Земле. Шея жирафа может достигать 2 метров.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Giraffa_camelopardalis_reticulata.jpg/800px-Giraffa_camelopardalis_reticulata.jpg",facts:["Рост до 5.8 метров","Сон длится всего 30 минут в сутки","Язык длиной 45-50 см"]},{name:"Снежный барс",latinName:"Panthera uncia",category:"Хищники",species:"Млекопитающее",habitat:"Горы Центральной Азии",status:"vulnerable",statusText:"Уязвимый",description:"Редкая крупная кошка из горных районов Центральной Азии. Символ Алматы.",image:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Irbis4.JPG",facts:["Прыгает на расстояние до 15 метров","Живёт на высоте до 5500 м","Никогда не рычит, только мяукает"]},{name:"Пятнистая гиена",latinName:"Crocuta crocuta",category:"Хищники",species:"Млекопитающее",habitat:"Африканские саванны",status:"least_concern",statusText:"Наименьшая угроза",description:"Несмотря на репутацию падальщика, гиена — один из самых эффективных охотников Африки.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Spotted_hyena_%28Crocuta_crocuta%29_adult.jpg/800px-Spotted_hyena_%28Crocuta_crocuta%29_adult.jpg",facts:["Смех — сигнал возбуждения","Матриархальное общество","Переваривают даже кости"]},{name:"Фламинго",latinName:"Phoenicopterus roseus",category:"Птицы",species:"Птица",habitat:"Тропические озёра",status:"least_concern",statusText:"Наименьшая угроза",description:"Яркие розовые птицы, живущие большими колониями. Цвет оперения зависит от питания.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Greater_Flamingo_at_Walvis_Bay.jpg/800px-Greater_Flamingo_at_Walvis_Bay.jpg",facts:["Рождаются белыми","Стоят на одной ноге для терморегуляции","Живут до 40 лет"]},{name:"Горная горилла",latinName:"Gorilla beringei beringei",category:"Приматы",species:"Млекопитающее",habitat:"Горные леса Африки",status:"endangered",statusText:"Под угрозой исчезновения",description:"Самый крупный примат на Земле. Находится под угрозой исчезновения.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Silverback_Mountain_Gorilla.JPG/800px-Silverback_Mountain_Gorilla.JPG",facts:["ДНК совпадает с человеческим на 98.3%","Строят новое гнездо каждую ночь","Могут выучить язык жестов"]},{name:"Амурский тигр",latinName:"Panthera tigris altaica",category:"Хищники",species:"Млекопитающее",habitat:"Дальний Восток России",status:"endangered",statusText:"Под угрозой исчезновения",description:"Крупнейший представитель семейства кошачьих. В дикой природе осталось менее 500 особей.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Amurtiger_Zoo_Muenster.jpg/800px-Amurtiger_Zoo_Muenster.jpg",facts:["Может прыгать на 10 метров","Рождаются слепыми","У каждого уникальный рисунок полос"]},{name:"Белый медведь",latinName:"Ursus maritimus",category:"Хищники",species:"Млекопитающее",habitat:"Арктика",status:"vulnerable",statusText:"Уязвимый",description:"Крупнейший наземный хищник планеты. Отличный пловец.",image:"https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg",facts:["Шерсть прозрачная, не белая","Плавает со скоростью 10 км/ч","Нюх улавливает запах за 30 км"]},{name:"Слон африканский",latinName:"Loxodonta africana",category:"Травоядные",species:"Млекопитающее",habitat:"Африканская саванна",status:"vulnerable",statusText:"Уязвимый",description:"Крупнейшее наземное животное Земли. Обладает высоким интеллектом и сложной социальной структурой.",image:"https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",facts:["Масса до 7 тонн","Беременность длится почти 2 года","Узнаёт себя в зеркале"]},{name:"Дельфин-афалина",latinName:"Tursiops truncatus",category:"Морские",species:"Млекопитающее",habitat:"Тёплые моря и океаны",status:"least_concern",statusText:"Наименьшая угроза",description:"Один из самых умных животных. Живут в сложных социальных группах.",image:"https://upload.wikimedia.org/wikipedia/commons/1/10/Tursiops_truncatus_01.jpg",facts:["Спят с открытым одним глазом","Скорость до 55 км/ч","У каждого есть имя — уникальный свист"]},{name:"Зебра",latinName:"Equus quagga",category:"Травоядные",species:"Млекопитающее",habitat:"Африканская саванна",status:"near_threatened",statusText:"Близкий к уязвимому",description:"Полосатые лошади африканских равнин. Каждая особь имеет уникальный рисунок полос.",image:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Plains_Zebra_Equus_quagga.jpg",facts:["Полосы уникальны как отпечатки пальцев","Спят стоя","Детёныш встаёт через 15 минут после рождения"]},{name:"Павлин",latinName:"Pavo cristatus",category:"Птицы",species:"Птица",habitat:"Южная Азия",status:"least_concern",statusText:"Наименьшая угроза",description:"Одна из красивейших птиц мира. Самцы распускают роскошный хвост в брачный период.",image:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Peacock_Plumage.jpg",facts:["Хвост составляет 60% длины тела","Национальная птица Индии","Кричат перед дождём"]}];for(const e of t)await Ds(gt(Le,"animals"),{...e,createdAt:Yn()})},async seedEvents(){const t=new Date,e=[{title:"Ночной тур по зоопарку",type:"Экскурсия",description:"Уникальная возможность увидеть ночных животных в их активное время. Гид проведёт вас по специальному маршруту.",date:new Date(t.getFullYear(),t.getMonth(),t.getDate()+7),time:"20:00",location:"Главный вход",price:5e3,spotsLeft:20,image:"https://images.pexels.com/photos/133356/pexels-photo-133356.jpeg?auto=compress&cs=tinysrgb&w=800"},{title:"Кормление жирафов",type:"Интерактив",description:"Покормите жирафов из рук! Специальные листья и морковь включены в стоимость.",date:new Date(t.getFullYear(),t.getMonth(),t.getDate()+2),time:"11:00",location:"Вольер жирафов",price:2500,spotsLeft:15,image:"https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80"},{title:"День рождения зоопарка",type:"Праздник",description:"Большой праздник с конкурсами, шоу животных, мастер-классами. Вход бесплатный!",date:new Date(t.getFullYear(),t.getMonth(),t.getDate()+14),time:"10:00",location:"Центральная площадь",price:0,spotsLeft:500,image:"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80"},{title:"Лекция: Снежный барс",type:"Лекция",description:"Учёные расскажут о программе сохранения снежного барса в Казахстане.",date:new Date(t.getFullYear(),t.getMonth(),t.getDate()+5),time:"14:00",location:"Конференц-зал",price:1500,spotsLeft:50,image:"https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80"},{title:"Фотосессия с попугаями",type:"Интерактив",description:"Профессиональная фотосессия с экзотическими попугаями. Фотограф включён в стоимость.",date:new Date(t.getFullYear(),t.getMonth(),t.getDate()+3),time:"12:00",location:"Тропический павильон",price:3500,spotsLeft:8,image:"https://images.unsplash.com/photo-1591198936750-16d8e15b9938?w=800&q=80"},{title:"Детский мастер-класс",type:"Детское",description:'Дети узнают о жизни животных и получат диплом "юного зоолога".',date:new Date(t.getFullYear(),t.getMonth(),t.getDate()+10),time:"10:00",location:"Детский центр",price:2e3,spotsLeft:25,image:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"}];for(const n of e)await Ds(gt(Le,"events"),{...n,createdAt:Yn()})}}},Vk={class:"nav-container"},Dk={class:"nav-actions"},Nk={key:0,class:"cart-badge"},Ok=["src"],xk={class:"nav-username"},Mk={class:"main-content"},Lk={class:"modal modal-auth"},Fk={class:"auth-tabs"},Uk={class:"form-group"},Bk={class:"form-group"},jk={key:0,class:"auth-error"},qk=["disabled"],$k={class:"form-group"},Hk={class:"form-group"},Wk={class:"form-group"},zk={key:0,class:"auth-error"},Kk=["disabled"],Gk={class:"modal modal-animal"},Qk={class:"animal-modal-content"},Yk={class:"animal-modal-img"},Jk=["src","alt"],Xk={class:"animal-category-badge"},Zk={class:"animal-modal-info"},eV={class:"animal-latin"},tV={class:"animal-stats"},nV={class:"stat"},sV={class:"stat"},rV={class:"stat"},iV={class:"animal-desc"},oV={key:0,class:"animal-fun-facts"},aV={class:"modal-reviews"},lV={key:0,class:"reviews-list"},cV={class:"review-header"},uV={class:"stars"},hV={class:"review-date"},dV={key:1,class:"no-reviews"},fV={class:"rating-select"},pV={class:"stars-input"},mV=["onClick"],gV={key:3,class:"login-prompt"},_V={class:"modal modal-event"},yV={class:"event-modal-img"},vV=["src","alt"],EV={class:"event-modal-body"},wV={class:"event-modal-main"},TV={class:"event-type-badge"},IV={class:"event-desc"},AV={class:"event-details-grid"},bV={class:"event-detail-item"},CV={class:"event-detail-item"},SV={class:"event-detail-item"},RV={class:"event-detail-item"},PV={class:"event-modal-sidebar"},kV={class:"event-price-card"},VV={class:"price-value"},DV={key:0,class:"spots-warning"},NV={key:0,class:"similar-events"},OV=["onClick"],xV=["src","alt"],MV={class:"toast-container"};function LV(t,e,n,s,r,i){const o=Kn("HomeView"),l=Kn("AnimalsView"),c=Kn("EventsView"),h=Kn("TicketsView"),f=Kn("CartView"),m=Kn("ProfileView"),E=Kn("AboutView"),R=Kn("AdminView");return V(),N("div",{id:"app",class:Ie({"modal-open":r.activeModal})},[d("nav",{class:Ie(["navbar",{scrolled:r.scrolled}])},[d("div",Vk,[d("div",{class:"nav-logo",onClick:e[0]||(e[0]=S=>i.navigate("home"))},[...e[38]||(e[38]=[d("span",{class:"logo-text"},"ZOOTOPIA",-1)])]),d("div",{class:Ie(["nav-links",{open:r.mobileMenuOpen}])},[d("a",{onClick:e[1]||(e[1]=S=>i.navigate("home")),class:Ie({active:r.currentView==="home"})},"Главная",2),d("a",{onClick:e[2]||(e[2]=S=>i.navigate("animals")),class:Ie({active:r.currentView==="animals"})},"Животные",2),d("a",{onClick:e[3]||(e[3]=S=>i.navigate("events")),class:Ie({active:r.currentView==="events"})},"Мероприятия",2),d("a",{onClick:e[4]||(e[4]=S=>i.navigate("tickets")),class:Ie({active:r.currentView==="tickets"})},"Билеты",2),d("a",{onClick:e[5]||(e[5]=S=>i.navigate("about")),class:Ie({active:r.currentView==="about"})},"О нас",2)],2),d("div",Dk,[d("button",{class:"btn-cart",onClick:e[6]||(e[6]=S=>i.navigate("cart")),title:"Корзина"},[e[39]||(e[39]=d("span",{class:"cart-icon"},"🛒",-1)),i.cartCount>0?(V(),N("span",Nk,O(i.cartCount),1)):fe("",!0)]),r.isAdmin?(V(),N("button",{key:0,class:"btn-admin",onClick:e[7]||(e[7]=S=>i.navigate("admin")),style:{background:"#e74c3c",color:"white",border:"none",padding:"8px 15px","border-radius":"6px",cursor:"pointer","margin-right":"10px"}}," ⚙️ Админка ")):fe("",!0),r.currentUser?(V(),N("button",{key:1,class:"btn-profile",onClick:e[9]||(e[9]=S=>i.navigate("profile"))},[d("img",{src:r.currentUser.photoURL||"",onError:e[8]||(e[8]=(...S)=>i.handleAvatarError&&i.handleAvatarError(...S)),class:"nav-avatar"},null,40,Ok),d("span",xk,O(i.userName),1)])):(V(),N("button",{key:2,class:"btn-login",onClick:e[10]||(e[10]=S=>i.openModal("auth"))},"Войти")),d("button",{class:"btn-burger",onClick:e[11]||(e[11]=S=>r.mobileMenuOpen=!r.mobileMenuOpen)},[...e[40]||(e[40]=[d("span",null,null,-1),d("span",null,null,-1),d("span",null,null,-1)])])])])],2),d("main",Mk,[r.currentView==="home"?(V(),gn(o,{key:0,animals:r.animals,events:r.events,loading:r.loading,onOpenAnimal:i.openAnimalModal,onOpenEvent:i.openEventModal,onNavigate:i.navigate,onBuyTicket:e[12]||(e[12]=S=>i.openModal("auth"))},null,8,["animals","events","loading","onOpenAnimal","onOpenEvent","onNavigate"])):fe("",!0),r.currentView==="animals"?(V(),gn(l,{key:1,animals:r.animals,loading:r.loading,onOpenAnimal:i.openAnimalModal},null,8,["animals","loading","onOpenAnimal"])):fe("",!0),r.currentView==="events"?(V(),gn(c,{key:2,events:r.events,loading:r.loading,onOpenEvent:i.openEventModal,onAddToCart:i.addToCart,"current-user":r.currentUser,onNeedAuth:e[13]||(e[13]=S=>i.openModal("auth"))},null,8,["events","loading","onOpenEvent","onAddToCart","current-user"])):fe("",!0),r.currentView==="tickets"?(V(),gn(h,{key:3,onAddToCart:i.addToCart,"current-user":r.currentUser,onNeedAuth:e[14]||(e[14]=S=>i.openModal("auth"))},null,8,["onAddToCart","current-user"])):fe("",!0),r.currentView==="cart"?(V(),gn(f,{key:4,"cart-items":r.cartItems,"current-user":r.currentUser,onRemoveFromCart:i.removeFromCart,onCheckout:i.checkout,onNeedAuth:e[15]||(e[15]=S=>i.openModal("auth"))},null,8,["cart-items","current-user","onRemoveFromCart","onCheckout"])):fe("",!0),r.currentView==="profile"&&r.currentUser?(V(),gn(m,{key:5,"current-user":r.currentUser,orders:r.orders,reviews:r.reviews,"cart-items":r.cartItems,onLogout:i.logout,onRemoveFromCart:i.removeFromCart,onDeleteReview:i.deleteReview,onNavigate:i.navigate},null,8,["current-user","orders","reviews","cart-items","onLogout","onRemoveFromCart","onDeleteReview","onNavigate"])):fe("",!0),r.currentView==="about"?(V(),gn(E,{key:6})):fe("",!0),r.currentView==="admin"&&r.isAdmin?(V(),gn(R,{key:7,animals:r.animals,events:r.events,users:r.allUsers,onAddAnimal:i.addAnimal,onUpdateAnimal:i.updateAnimal,onDeleteAnimal:i.deleteAnimal,onAddEvent:i.addEvent,onUpdateEvent:i.updateEvent,onDeleteEvent:i.deleteEvent,onSetAdmin:i.setAdmin},null,8,["animals","events","users","onAddAnimal","onUpdateAnimal","onDeleteAnimal","onAddEvent","onUpdateEvent","onDeleteEvent","onSetAdmin"])):fe("",!0)]),r.activeModal==="auth"?(V(),N("div",{key:0,class:"modal-overlay",onClick:e[27]||(e[27]=xt((...S)=>i.closeModal&&i.closeModal(...S),["self"]))},[d("div",Lk,[d("button",{class:"modal-close",onClick:e[16]||(e[16]=(...S)=>i.closeModal&&i.closeModal(...S))},"X"),d("div",Fk,[d("button",{class:Ie({active:r.authTab==="login"}),onClick:e[17]||(e[17]=S=>r.authTab="login")},"Войти",2),d("button",{class:Ie({active:r.authTab==="register"}),onClick:e[18]||(e[18]=S=>r.authTab="register")},"Регистрация",2)]),r.authTab==="login"?(V(),N("form",{key:0,onSubmit:e[22]||(e[22]=xt((...S)=>i.login&&i.login(...S),["prevent"])),class:"auth-form"},[e[43]||(e[43]=d("h2",null,"Добро пожаловать!",-1)),d("div",Uk,[e[41]||(e[41]=d("label",null,"Email",-1)),Ne(d("input",{"onUpdate:modelValue":e[19]||(e[19]=S=>r.authForm.email=S),type:"email",placeholder:"your@email.com",required:""},null,512),[[Ue,r.authForm.email]])]),d("div",Bk,[e[42]||(e[42]=d("label",null,"Пароль",-1)),Ne(d("input",{"onUpdate:modelValue":e[20]||(e[20]=S=>r.authForm.password=S),type:"password",placeholder:"••••••••",required:""},null,512),[[Ue,r.authForm.password]])]),r.authError?(V(),N("p",jk,O(r.authError),1)):fe("",!0),d("button",{type:"submit",class:"btn-submit",disabled:r.authLoading},O(r.authLoading?"Входим...":"Войти"),9,qk),d("a",{class:"forgot-link",onClick:e[21]||(e[21]=(...S)=>i.resetPassword&&i.resetPassword(...S))},"Забыли пароль?")],32)):fe("",!0),r.authTab==="register"?(V(),N("form",{key:1,onSubmit:e[26]||(e[26]=xt((...S)=>i.register&&i.register(...S),["prevent"])),class:"auth-form"},[e[47]||(e[47]=d("h2",null,"Создать аккаунт",-1)),d("div",$k,[e[44]||(e[44]=d("label",null,"Имя",-1)),Ne(d("input",{"onUpdate:modelValue":e[23]||(e[23]=S=>r.authForm.name=S),type:"text",placeholder:"Ваше имя",required:""},null,512),[[Ue,r.authForm.name]])]),d("div",Hk,[e[45]||(e[45]=d("label",null,"Email",-1)),Ne(d("input",{"onUpdate:modelValue":e[24]||(e[24]=S=>r.authForm.email=S),type:"email",placeholder:"your@email.com",required:""},null,512),[[Ue,r.authForm.email]])]),d("div",Wk,[e[46]||(e[46]=d("label",null,"Пароль",-1)),Ne(d("input",{"onUpdate:modelValue":e[25]||(e[25]=S=>r.authForm.password=S),type:"password",placeholder:"Минимум 6 символов",required:"",minlength:"6"},null,512),[[Ue,r.authForm.password]])]),r.authError?(V(),N("p",zk,O(r.authError),1)):fe("",!0),d("button",{type:"submit",class:"btn-submit",disabled:r.authLoading},O(r.authLoading?"Регистрируем...":"Зарегистрироваться"),9,Kk)],32)):fe("",!0)])])):fe("",!0),r.activeModal==="animal"&&r.selectedAnimal?(V(),N("div",{key:1,class:"modal-overlay",onClick:e[33]||(e[33]=xt((...S)=>i.closeModal&&i.closeModal(...S),["self"]))},[d("div",Gk,[d("button",{class:"modal-close",onClick:e[28]||(e[28]=(...S)=>i.closeModal&&i.closeModal(...S))},"X"),d("div",Qk,[d("div",Yk,[d("img",{src:r.selectedAnimal.image||"",alt:r.selectedAnimal.name,onError:e[29]||(e[29]=(...S)=>i.handleCardImgError&&i.handleCardImgError(...S))},null,40,Jk),d("span",Xk,O(r.selectedAnimal.category),1)]),d("div",Zk,[d("h2",null,O(r.selectedAnimal.name),1),d("p",eV,O(r.selectedAnimal.latinName),1),d("div",tV,[d("div",nV,[e[48]||(e[48]=d("span",{class:"stat-label"},"Вид",-1)),d("span",null,O(r.selectedAnimal.species),1)]),d("div",sV,[e[49]||(e[49]=d("span",{class:"stat-label"},"Среда обитания",-1)),d("span",null,O(r.selectedAnimal.habitat),1)]),d("div",rV,[e[50]||(e[50]=d("span",{class:"stat-label"},"Статус",-1)),d("span",{class:Ie("status-"+r.selectedAnimal.status)},O(r.selectedAnimal.statusText),3)])]),d("p",iV,O(r.selectedAnimal.description),1),r.selectedAnimal.facts&&r.selectedAnimal.facts.length?(V(),N("div",oV,[e[51]||(e[51]=d("h4",null,"Интересные факты",-1)),d("ul",null,[(V(!0),N(ue,null,Ee(r.selectedAnimal.facts,(S,L)=>(V(),N("li",{key:L},O(S),1))),128))])])):fe("",!0)])]),d("div",aV,[e[55]||(e[55]=d("h3",null,"Отзывы посетителей",-1)),r.animalReviews.length?(V(),N("div",lV,[(V(!0),N(ue,null,Ee(r.animalReviews,S=>(V(),N("div",{key:S.id,class:"review-item"},[d("div",cV,[d("strong",null,O(S.userName),1),d("div",uV,O("*".repeat(S.rating)),1),d("span",hV,O(i.formatDate(S.createdAt)),1)]),d("p",null,O(S.text),1)]))),128))])):(V(),N("p",dV,"Ещё нет отзывов. Будьте первым!")),r.currentUser?(V(),N("form",{key:2,onSubmit:e[31]||(e[31]=xt((...S)=>i.submitReview&&i.submitReview(...S),["prevent"])),class:"review-form"},[d("div",fV,[e[52]||(e[52]=d("span",null,"Оценка:",-1)),d("div",pV,[(V(),N(ue,null,Ee(5,S=>d("button",{key:S,type:"button",class:Ie({filled:r.reviewForm.rating>=S}),onClick:L=>r.reviewForm.rating=S},"*",10,mV)),64))])]),Ne(d("textarea",{"onUpdate:modelValue":e[30]||(e[30]=S=>r.reviewForm.text=S),placeholder:"Напишите ваш отзыв...",rows:"3",required:""},null,512),[[Ue,r.reviewForm.text]]),e[53]||(e[53]=d("button",{type:"submit",class:"btn-review-submit"},"Отправить отзыв",-1))],32)):(V(),N("p",gV,[d("a",{onClick:e[32]||(e[32]=S=>i.openModal("auth"))},"Войдите"),e[54]||(e[54]=Ms(", чтобы оставить отзыв ",-1))]))])])])):fe("",!0),r.activeModal==="event"&&r.selectedEvent?(V(),N("div",{key:2,class:"modal-overlay",onClick:e[37]||(e[37]=xt((...S)=>i.closeModal&&i.closeModal(...S),["self"]))},[d("div",_V,[d("div",yV,[d("img",{src:r.selectedEvent.image||"",alt:r.selectedEvent.title,onError:e[34]||(e[34]=(...S)=>i.handleCardImgError&&i.handleCardImgError(...S))},null,40,vV)]),d("div",EV,[d("div",wV,[d("span",TV,O(r.selectedEvent.type),1),d("h2",null,O(r.selectedEvent.title),1),d("p",IV,O(r.selectedEvent.description),1),d("div",AV,[d("div",bV,[e[57]||(e[57]=d("span",{class:"detail-icon"},null,-1)),d("div",null,[e[56]||(e[56]=d("strong",null,"Дата",-1)),d("p",null,O(i.formatDate(r.selectedEvent.date)),1)])]),d("div",CV,[e[59]||(e[59]=d("span",{class:"detail-icon"},null,-1)),d("div",null,[e[58]||(e[58]=d("strong",null,"Время",-1)),d("p",null,O(r.selectedEvent.time),1)])]),d("div",SV,[e[61]||(e[61]=d("span",{class:"detail-icon"},null,-1)),d("div",null,[e[60]||(e[60]=d("strong",null,"Место",-1)),d("p",null,O(r.selectedEvent.location),1)])]),d("div",RV,[e[63]||(e[63]=d("span",{class:"detail-icon"},null,-1)),d("div",null,[e[62]||(e[62]=d("strong",null,"Мест",-1)),d("p",null,O(r.selectedEvent.spotsLeft)+" осталось",1)])])])]),d("div",PV,[d("div",kV,[e[64]||(e[64]=d("p",{class:"price-label"},"Стоимость",-1)),d("p",VV,O(r.selectedEvent.price?r.selectedEvent.price+" ₸":"Бесплатно"),1),d("button",{class:"btn-book",onClick:e[35]||(e[35]=S=>i.addEventToCart(r.selectedEvent))},O(r.currentUser?"Забронировать":"Войти для записи"),1),r.selectedEvent.spotsLeft<10?(V(),N("p",DV,"Внимание: Осталось мало мест!")):fe("",!0)]),i.similarEvents.length?(V(),N("div",NV,[e[65]||(e[65]=d("h4",null,"Похожие мероприятия",-1)),(V(!0),N(ue,null,Ee(i.similarEvents,S=>(V(),N("div",{key:S.id,class:"similar-event-item",onClick:L=>i.openEventModal(S)},[d("img",{src:S.image||"",alt:S.title,onError:e[36]||(e[36]=(...L)=>i.handleCardImgError&&i.handleCardImgError(...L))},null,40,xV),d("div",null,[d("p",null,O(S.title),1),d("small",null,O(i.formatDate(S.date)),1)])],8,OV))),128))])):fe("",!0)])])])])):fe("",!0),d("div",MV,[Ft(AE,{name:"toast"},{default:vp(()=>[(V(!0),N(ue,null,Ee(r.toasts,S=>(V(),N("div",{key:S.id,class:Ie(["toast",S.type])},O(S.message),3))),128))]),_:1})])],2)}const FV=Un(kk,[["render",LV]]);OE(FV).mount("#app");
