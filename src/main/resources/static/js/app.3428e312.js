(function(){"use strict";var e={5845:function(e,t,r){var a=r(9242),n=r(3396);const o={id:"app"};function s(e,t,r,a,s,i){const c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(c)])}var i={name:"App"},c=r(89);const l=(0,c.Z)(i,[["render",s]]);var u=l,f=r(678);const d=(0,n._)("h1",null,"TaskAgile",-1),m=[d];function p(e,t,r,a,o,s){return(0,n.wg)(),(0,n.iD)("div",null,m)}var v={name:"LoginPage"};const g=(0,c.Z)(v,[["render",p]]);var b=g,h=r(7139);const y=e=>((0,n.dD)("data-v-cebefe76"),e=e(),(0,n.Cn)(),e),w={class:"container"},_={class:"row justify-content-center"},k={class:"register-form"},O=y((()=>(0,n._)("div",{class:"logo-wrapper"},[(0,n._)("img",{class:"logo",src:"/static/images/logo.png"}),(0,n._)("div",{class:"tagline"},"Open source task management tool")],-1))),P={class:"form-group"},j={class:"form-group"},A={class:"form-group"},x=(0,n.uE)('<div class="d-grid" data-v-cebefe76><button type="submit" class="btn btn-primary" data-v-cebefe76>Create account</button></div><p class="accept-terms text-muted" data-v-cebefe76>By clicking “Create account”, you agree to our <a href="#" data-v-cebefe76>terms of service</a> and <a href="#" data-v-cebefe76>privacy policy</a>.</p><p class="text-center text-muted" data-v-cebefe76>Already have an account? <a href="/login" data-v-cebefe76>Sign in</a></p>',3),M=(0,n.uE)('<footer class="footer" data-v-cebefe76><span class="copyright" data-v-cebefe76>© 2022 TaskAgile.com</span><ul class="footer-links list-inline float-end" data-v-cebefe76><li class="list-inline-item" data-v-cebefe76><a href="#" data-v-cebefe76>About</a></li><li class="list-inline-item" data-v-cebefe76><a href="#" data-v-cebefe76>Terms of Service</a></li><li class="list-inline-item" data-v-cebefe76><a href="#" data-v-cebefe76>Privacy Policy</a></li><li class="list-inline-item" data-v-cebefe76><a href="https://github.com/taskagile/vuejs.spring-boot.mysql" target="_blank" data-v-cebefe76>GitHub</a></li></ul></footer>',1);function F(e,t,r,o,s,i){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",_,[(0,n._)("div",k,[O,(0,n._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,n.wy)((0,n._)("div",{class:"alert alert-danger failed"},(0,h.zw)(e.errorMessage),513),[[a.F8,e.errorMessage]]),(0,n._)("div",P,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"username","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.username=t)},null,512),[[a.nr,e.form.username]])]),(0,n._)("div",j,[(0,n.wy)((0,n._)("input",{type:"email",class:"form-control",id:"emailAddress","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.emailAddress=t)},null,512),[[a.nr,e.form.emailAddress]])]),(0,n._)("div",A,[(0,n.wy)((0,n._)("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":t[2]||(t[2]=t=>e.form.password=t)},null,512),[[a.nr,e.form.password]])]),x],32)])]),M])}var T=r(6265),C=r.n(T),U={register(e){return new Promise(((t,r)=>{C().post("/registrations",e).then((({data:e})=>{t(e)})).catch((e=>{r(e)}))}))}},D={name:"RegisterPage",data:function(){return{form:{username:"",emailAddress:"",password:""},errorMessage:""}},methods:{submitForm(){U.register(this.form).then((()=>{this.$router.push({name:"LoginPage"})})).catch((e=>{this.errorMessage="Failed to rergister user. Reason: "+(e.message?e.message:"Unknown")+"."}))}}};const L=(0,c.Z)(D,[["render",F],["__scopeId","data-v-cebefe76"]]);var R=L;const E=[{path:"/login",name:"LoginPage",component:b},{path:"/register",name:"RegisterPage",component:R},{}],S=(0,f.p7)({history:(0,f.PO)("/"),routes:E});var V=S,Z=r(8874),q=(0,Z.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});C().defaults.baseURL="/api",C().defaults.headers.common.Accept="application/json",C().interceptors.response.use((e=>e),(e=>Promise.reject(e))),(0,a.ri)(u).use(q).use(V).mount("#app")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,n,o){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],o=e[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.j=143}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,s=a[0],i=a[1],c=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(a);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},a=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(5845)}));a=r.O(a)})();
//# sourceMappingURL=app.3428e312.js.map