import{Aa as S,B as u,Ba as l,Ca as m,Da as a,Ea as X,I as z,S as _,V as H,W as Z,Z as A,a as V,ba as Y,fa as q,j as G,k as $,ma as W,qa as K,z as U}from"./chunk-MCQEVFIB.js";import{$a as x,Ea as L,Eb as d,Ka as f,Ma as y,O as c,Oa as p,U as o,Ub as F,Wa as E,Yb as j,_ as I,a as s,ac as B,ba as v,ca as r,db as N,ea as O,eb as M,fb as w,ja as b,ma as R,pb as k,qb as P,ra as D}from"./chunk-JC545UEF.js";var ae="A",le="Da";var ce="idCapoGruppod",pe="marca",de="modello",me="codiceProduttore",he="allestimento",ue="carrozzeria",fe="codiceInfocar",ye="annoInfocar",Te="meseInfocar",ge="classeVeicolo",_e="alimentazione",Ae="veicoloOrdinabile",Se="validitaDa",Ce="validitaA",Ie="scontoPercentuale",ve="scontoImporto",Oe="dataCreazione",be="tipoSconto",Re="cumulaSconto",De="configurazione",Le="scontoAttivo",Ee="veicoloScontato",xe="tipoCliente",Ne="ragCapogruppo",Me="ragCliente",we="idCapogruppo",ke="idCliente",Pe="codeSapCapogruppo",Fe="codeSapCliente",je="societa",Be="nome",Ve="cognome",Ge="codiceFiscale",$e="piva";var J=(()=>{class n extends a{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(n)))(i||n)}})();static \u0275prov=c({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),T=(()=>{class n{document=o(V);platformId=o(D);el=o(R);injector=o(O);cd=o(F);renderer=o(L);config=o(X);baseComponentStyle=o(J);baseStyle=o(a);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=K("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,t="",i={}){return W(e,t,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!$(this.platformId)){let{dt:t}=e;t&&t.currentValue&&(this._loadScopedThemeStyles(t.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(t.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>S.off("theme:change",e))}_loadStyles(){let e=()=>{m.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),m.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!m.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),m.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!l.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:i,style:g}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,s({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(t?.css,s({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,s({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(s({name:"global-style"},this.styleOptions),g),l.setLoadedStyleName("common")}if(!l.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:t}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,s({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(s({name:`${this.componentStyle?.name}-style`},this.styleOptions),t),l.setLoadedStyleName(this.componentStyle?.name)}if(!l.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,s({name:"layer-order",first:!0},this.styleOptions)),l.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:t}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(t,s({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){m.clearLoadedStyleNames(),S.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,t){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let t=this.componentStyle?.inlineStyles?.[e];return typeof t=="function"?t({instance:this}):typeof t=="string"?t:s({},t)}get parent(){return this.parentInstance}static \u0275fac=function(t){return new(t||n)};static \u0275dir=y({type:n,inputs:{dt:"dt"},features:[d([J,a]),I]})}return n})();var ne=["*"],ie=`
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
`,oe=(()=>{class n extends a{name="baseicon";inlineStyles=ie;static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(n)))(i||n)}})();static \u0275prov=c({token:n,factory:n.\u0275fac})}return n})();var Q=(()=>{class n extends T{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=q(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(n)))(i||n)}})();static \u0275cmp=f({type:n,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",j],styleClass:"styleClass"},features:[d([oe]),p],ngContentSelectors:ne,decls:1,vars:0,template:function(t,i){t&1&&(k(),P(0))},encapsulation:2,changeDetection:0})}return n})();var xt=(()=>{class n extends Q{static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(n)))(i||n)}})();static \u0275cmp=f({type:n,selectors:[["TimesIcon"]],features:[p],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(t,i){t&1&&(v(),N(0,"svg",0),w(1,"path",1),M()),t&2&&(x(i.getClassNames()),E("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return n})();var se=({dt:n})=>`
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
`,re={root:"p-ink"},ee=(()=>{class n extends a{name="ripple";theme=se;classes=re;static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(n)))(i||n)}})();static \u0275prov=c({token:n,factory:n.\u0275fac})}return n})();var Ut=(()=>{class n extends T{zone=o(b);_componentStyle=o(ee);animationListener;mouseDownListener;timeout;constructor(){super(),B(()=>{G(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(u(t,"p-ink-active"),!_(t)&&!A(t)){let h=Math.max(z(this.el.nativeElement),Z(this.el.nativeElement));t.style.height=h+"px",t.style.width=h+"px"}let i=H(this.el.nativeElement),g=e.pageX-i.left+this.document.body.scrollTop-A(t)/2,te=e.pageY-i.top+this.document.body.scrollLeft-_(t)/2;this.renderer.setStyle(t,"top",te+"px"),this.renderer.setStyle(t,"left",g+"px"),U(t,"p-ink-active"),this.timeout=setTimeout(()=>{let h=this.getInk();h&&u(h,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&u(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),u(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Y(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=y({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[d([ee]),p]})}return n})();export{T as a,Q as b,xt as c,Ut as d,ae as e,le as f,ce as g,pe as h,de as i,me as j,he as k,ue as l,fe as m,ye as n,Te as o,ge as p,_e as q,Ae as r,Se as s,Ce as t,Ie as u,ve as v,Oe as w,be as x,Re as y,De as z,Le as A,Ee as B,xe as C,Ne as D,Me as E,we as F,ke as G,Pe as H,Fe as I,je as J,Be as K,Ve as L,Ge as M,$e as N};
