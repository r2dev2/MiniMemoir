var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,s;function u(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function d(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function $(){return p(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e,n){t.classList[n?"add":"remove"](e)}function b(t){s=t}const x=[],v=[],w=[],_=[],k=Promise.resolve();let E=!1;function j(t){w.push(t)}let q=!1;const T=new Set;function H(){if(!q){q=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];b(e),I(e.$$)}for(b(null),x.length=0;v.length;)v.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];T.has(e)||(T.add(e),e())}w.length=0}while(x.length);for(;_.length;)_.pop()();E=!1,q=!1,T.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const z=new Set;function A(t,e){t&&t.i&&(z.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),undefined.c.push((()=>{z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function L(t){t&&t.c()}function M(t,n,i,c){const{fragment:s,on_mount:u,on_destroy:l,after_update:d}=t.$$;s&&s.m(n,i),c||j((()=>{const n=u.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),d.forEach(j)}function U(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(x.push(t),E||(E=!0,k.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,i,c,u,l,d,a=[-1]){const h=s;b(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:r.context||[]),callbacks:n(),dirty:a,skip_bound:!1,root:r.target||h.$$.root};d&&d(p.root);let $=!1;if(p.ctx=i?i(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&W(e,t)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&A(e.$$.fragment),M(e,r.target,r.anchor,r.customElement),H()}b(h)}class N{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function O(t){let e,n,o,r,i,c,s;const u=t[4].default,g=function(t,e,n,o){if(t){const r=l(t,e,n,o);return t[0](r)}}(u,t,t[3],null);return{c(){e=h("div"),n=h("div"),g&&g.c(),o=$(),r=h("div"),i=h("span"),c=p(t[0]),m(n,"class","embed svelte-xcb0nj"),m(r,"class","description svelte-xcb0nj"),m(e,"class","section-container full-screen svelte-xcb0nj"),y(e,"light",t[1]),y(e,"reverse",t[2])},m(t,u){a(t,e,u),d(e,n),g&&g.m(n,null),d(e,o),d(e,r),d(r,i),d(i,c),s=!0},p(t,[n]){g&&g.p&&(!s||8&n)&&function(t,e,n,o,r,i){if(r){const c=l(e,n,o,i);t.p(c,r)}}(g,u,t,t[3],s?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(u,t[3],n,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[3]),null),(!s||1&n)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,t[0]),2&n&&y(e,"light",t[1]),4&n&&y(e,"reverse",t[2])},i(t){s||(A(g,t),s=!0)},o(t){G(g,t),s=!1},d(t){t&&f(e),g&&g.d(t)}}}function Y(t,e,n){let{$$slots:o={},$$scope:r}=e,{description:i=""}=e,{light:c=!1}=e,{reverse:s=!1}=e;return t.$$set=t=>{"description"in t&&n(0,i=t.description),"light"in t&&n(1,c=t.light),"reverse"in t&&n(2,s=t.reverse),"$$scope"in t&&n(3,r=t.$$scope)},[i,c,s,r,o]}class B extends N{constructor(t){super(),D(this,t,Y,O,i,{description:0,light:1,reverse:2})}}function C(e){let n,o,r,i,c,s,l,p,y,b,x,v,w,_;return j(e[4]),{c(){var t,d,a;n=h("div"),o=h("a"),r=h("img"),c=$(),s=h("a"),l=h("img"),y=$(),b=h("a"),x=h("img"),u(r.src,i="/yt.png")||m(r,"src","/yt.png"),m(r,"alt","YouTube's logo"),m(r,"height",e[2]),m(r,"width",e[3]),t="object-fit",d="cover",r.style.setProperty(t,d,a?"important":""),m(r,"class","svelte-oxcd35"),m(o,"title","YouTube"),m(o,"href","https://youtube.com"),u(l.src,p="/discord.png")||m(l,"src","/discord.png"),m(l,"alt","Discord's logo"),m(l,"height",e[2]),m(l,"width",e[3]),m(l,"class","svelte-oxcd35"),m(s,"title","Discord"),m(s,"href","https://discord.com/app"),u(x.src,v="/ghub.png")||m(x,"src","/ghub.png"),m(x,"alt","GitHub logo"),m(x,"height",e[2]),m(x,"width",e[3]),m(x,"class","svelte-oxcd35"),m(b,"title","My GitHub"),m(b,"href","https://github.com/r2dev2"),m(n,"class","svelte-oxcd35")},m(t,i){a(t,n,i),d(n,o),d(o,r),d(n,c),d(n,s),d(s,l),d(n,y),d(n,b),d(b,x),w||(_=g(window,"resize",e[4]),w=!0)},p(t,[e]){4&e&&m(r,"height",t[2]),8&e&&m(r,"width",t[3]),4&e&&m(l,"height",t[2]),8&e&&m(l,"width",t[3]),4&e&&m(x,"height",t[2]),8&e&&m(x,"width",t[3])},i:t,o:t,d(t){t&&f(n),w=!1,_()}}}function P(t,e,n){let o,r,i,c;return t.$$.update=()=>{2&t.$$.dirty&&n(3,o=.1*c),1&t.$$.dirty&&n(2,r=.33*i)},[i,c,r,o,function(){n(0,i=window.innerHeight),n(1,c=window.innerWidth)}]}class R extends N{constructor(t){super(),D(this,t,P,C,i,{})}}var S={chess:"\n  I play a lot of chess, especially online. I have a play style in the extremes: either extremely positional or extremely tactical. The game on the left is one of my exciting tactical games.\n  ",coding:"\n  I like to code free and open source software in my free time. I currently have been maintaining a 300+ day contribution streak to open source software on GitHub.\n  ",socials:"\n  I spend a lot of time on YouTube, Discord, and GitHub.\n  "};function F(t){let e,n,o;return{c(){e=h("iframe"),u(e.src,n="https://lichess.org/embed/vUizUuWy?theme=auto&bg=light")||m(e,"src","https://lichess.org/embed/vUizUuWy?theme=auto&bg=light"),m(e,"width",o=.4*t[0]+"px"),m(e,"height","100%"),m(e,"frameborder","0")},m(t,n){a(t,e,n)},p(t,n){1&n&&o!==(o=.4*t[0]+"px")&&m(e,"width",o)},d(t){t&&f(e)}}}function J(t){let e,n,o;return{c(){e=h("img"),m(e,"height","100%"),m(e,"width",n=.5*t[0]+"px"),u(e.src,o="/vim-byobu.png")||m(e,"src","/vim-byobu.png"),m(e,"alt","my dev setup"),m(e,"class","coding svelte-h3lqq0")},m(t,n){a(t,e,n)},p(t,o){1&o&&n!==(n=.5*t[0]+"px")&&m(e,"width",n)},d(t){t&&f(e)}}}function K(t){let e,n;return e=new R({}),{c(){L(e.$$.fragment)},m(t,o){M(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function Q(t){let e,n,o,r,i,c,s,u,l,d,p;return j(t[1]),r=new B({props:{description:S.chess,light:!0,$$slots:{default:[F]},$$scope:{ctx:t}}}),c=new B({props:{description:S.coding,reverse:!0,$$slots:{default:[J]},$$scope:{ctx:t}}}),u=new B({props:{description:S.socials,light:!0,$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){e=$(),n=h("main"),n.innerHTML='<h1 class="full-height svelte-h3lqq0">Ronak Badhe</h1>',o=$(),L(r.$$.fragment),i=$(),L(c.$$.fragment),s=$(),L(u.$$.fragment),document.title="Ronak's mini-memoir",m(n,"class","svelte-h3lqq0")},m(f,h){a(f,e,h),a(f,n,h),a(f,o,h),M(r,f,h),a(f,i,h),M(c,f,h),a(f,s,h),M(u,f,h),l=!0,d||(p=g(window,"resize",t[1]),d=!0)},p(t,[e]){const n={};5&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};5&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const i={};4&e&&(i.$$scope={dirty:e,ctx:t}),u.$set(i)},i(t){l||(A(r.$$.fragment,t),A(c.$$.fragment,t),A(u.$$.fragment,t),l=!0)},o(t){G(r.$$.fragment,t),G(c.$$.fragment,t),G(u.$$.fragment,t),l=!1},d(t){t&&f(e),t&&f(n),t&&f(o),U(r,t),t&&f(i),U(c,t),t&&f(s),U(u,t),d=!1,p()}}}function V(t,e,n){let o;return[o,function(){n(0,o=window.innerWidth)}]}const X=new class extends N{constructor(t){super(),D(this,t,V,Q,i,{})}}({target:document.body,props:{name:"world"}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{X.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),X}();
//# sourceMappingURL=bundle.js.map
