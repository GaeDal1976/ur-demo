import{A as W,Ba as D,C as T,Ca as p,Da as h,Ea as c,Fa as ie,J as K,T as v,W as X,X as J,_ as O,a as Z,ca as Q,ga as ee,j as Y,k as q,na as te,ra as ne}from"./chunk-5XZD4T2H.js";import{$a as F,C as y,Ea as k,Eb as m,Ka as C,Ma as S,O as l,Oa as d,U as s,Ub as U,Wa as P,Yb as z,_ as L,a as o,ac as H,b as I,ba as x,ca as a,db as j,ea as E,eb as $,fb as B,j as f,ja as N,ma as w,pb as V,q as g,qb as G,r as R,ra as M}from"./chunk-QIVHEG4A.js";var ue="A",fe="Da";var ye="idCapoGruppod",Te="marca",ge="modello",Ce="codiceProduttore",Se="allestimento",_e="carrozzeria",Ae="codiceInfocar",be="annoInfocar",Ie="meseInfocar",ve="classeVeicolo",Oe="alimentazione",De="veicoloOrdinabile",Re="validitaDa",Le="validitaA",xe="scontoPercentuale",Ee="scontoImporto",Ne="dataCreazione",we="tipoSconto",Me="cumulaSconto",ke="configurazione",Pe="scontoAttivo",Fe="veicoloScontato",je="tipoCliente",$e="ragCapogruppo",Be="ragCliente",Ve="idCapogruppo",Ge="idCliente",Ue="codeSapCapogruppo",ze="codeSapCliente",He="societa",Ze="nome",Ye="cognome",qe="codiceFiscale",We="piva";var Je=(()=>{class n{carOptions$=new f({});clientOptions$=new f({});paramsCostruttore$=new f({});paramsPDS$=new f({});setCarOptions(e,t){let i=I(o({},this.carOptions$.value),{[e]:t});this.carOptions$.next(i)}setClientOptions(e,t){let i=I(o({},this.clientOptions$.value),{[e]:t});this.clientOptions$.next(i)}subscribeCarAutoComplition(e){return this.subscribeAutoComplition(e,this.subscribeCarField.bind(this))}subscribeClientAutoComplition(e){return this.subscribeAutoComplition(e,this.subscribeClientField.bind(this))}subscribeParamsCostruttore(){return this.paramsCostruttore$.pipe(y())}subscribeParamsPDS(){return this.paramsPDS$.pipe(y())}setParamsCostruttore(e){this.paramsCostruttore$.next(e)}setParamsPDS(e){this.paramsPDS$.next(e)}subscribeAutoComplition(e,t){let i={};e.forEach(r=>i[r]=t(r));let u=Object.keys(i),b=Object.values(i);return R(b).pipe(g(r=>Object.fromEntries(u.map((ae,le)=>[ae,r[le]]))))}subscribeCarField(e){return this.carOptions$.pipe(g(t=>t[e]),y())}subscribeClientField(e){return this.clientOptions$.pipe(g(t=>t[e]),y())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var oe=(()=>{class n extends c{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=a(n)))(i||n)}})();static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),A=(()=>{class n{document=s(Z);platformId=s(M);el=s(w);injector=s(E);cd=s(U);renderer=s(k);config=s(ie);baseComponentStyle=s(oe);baseStyle=s(c);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=ne("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,t="",i={}){return te(e,t,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!q(this.platformId)){let{dt:t}=e;t&&t.currentValue&&(this._loadScopedThemeStyles(t.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(t.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>D.off("theme:change",e))}_loadStyles(){let e=()=>{h.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),h.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!h.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),h.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!p.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:i,style:u}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,o({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(t?.css,o({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,o({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(o({name:"global-style"},this.styleOptions),u),p.setLoadedStyleName("common")}if(!p.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:t}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,o({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(o({name:`${this.componentStyle?.name}-style`},this.styleOptions),t),p.setLoadedStyleName(this.componentStyle?.name)}if(!p.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,o({name:"layer-order",first:!0},this.styleOptions)),p.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:t}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(t,o({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){h.clearLoadedStyleNames(),D.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,t){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let t=this.componentStyle?.inlineStyles?.[e];return typeof t=="function"?t({instance:this}):typeof t=="string"?t:o({},t)}get parent(){return this.parentInstance}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,inputs:{dt:"dt"},features:[m([oe,c]),L]})}return n})();var ce=["*"],pe=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,de=(()=>{class n extends c{name="baseicon";inlineStyles=pe;static \u0275fac=(()=>{let e;return function(i){return(e||(e=a(n)))(i||n)}})();static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})();var se=(()=>{class n extends A{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=ee(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=a(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",z],styleClass:"styleClass"},features:[m([de]),d],ngContentSelectors:ce,decls:1,vars:0,template:function(t,i){t&1&&(V(),G(0))},encapsulation:2,changeDetection:0})}return n})();var Gt=(()=>{class n extends se{static \u0275fac=(()=>{let e;return function(i){return(e||(e=a(n)))(i||n)}})();static \u0275cmp=C({type:n,selectors:[["TimesIcon"]],features:[d],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(t,i){t&1&&(x(),j(0,"svg",0),B(1,"path",1),$()),t&2&&(F(i.getClassNames()),P("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return n})();var me=({dt:n})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${n("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,he={root:"p-ink"},re=(()=>{class n extends c{name="ripple";theme=me;classes=he;static \u0275fac=(()=>{let e;return function(i){return(e||(e=a(n)))(i||n)}})();static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})();var en=(()=>{class n extends A{zone=s(N);_componentStyle=s(re);animationListener;mouseDownListener;timeout;constructor(){super(),H(()=>{Y(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(T(t,"p-ink-active"),!v(t)&&!O(t)){let r=Math.max(K(this.el.nativeElement),J(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let i=X(this.el.nativeElement),u=e.pageX-i.left+this.document.body.scrollTop-O(t)/2,b=e.pageY-i.top+this.document.body.scrollLeft-v(t)/2;this.renderer.setStyle(t,"top",b+"px"),this.renderer.setStyle(t,"left",u+"px"),W(t,"p-ink-active"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&T(r,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&T(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),T(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Q(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[m([re]),d]})}return n})();export{A as a,se as b,Gt as c,en as d,ue as e,fe as f,ye as g,Te as h,ge as i,Ce as j,Se as k,_e as l,Ae as m,be as n,Ie as o,ve as p,Oe as q,De as r,Re as s,Le as t,xe as u,Ee as v,Ne as w,we as x,Me as y,ke as z,Pe as A,Fe as B,je as C,$e as D,Be as E,Ve as F,Ge as G,Ue as H,ze as I,He as J,Ze as K,Ye as L,qe as M,We as N,Je as O};
