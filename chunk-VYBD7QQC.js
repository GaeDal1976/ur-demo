import{Aa as S,B as a,Da as y,I as v,S as A,V as E,W as D,Z as h,ba as L,j as b,z as g}from"./chunk-KODN66SN.js";import{C as s,Eb as I,Ma as R,O as c,Oa as _,U as m,a as d,ac as x,b as T,ca as O,j as r,ja as C,q as p,r as f}from"./chunk-P6AE7GFT.js";var $="A",j="Da";var V="idCapoGruppod",G="marca",z="modello",U="codiceProduttore",B="allestimento",Z="carrozzeria",H="codiceInfocar",W="annoInfocar",X="meseInfocar",Y="classeVeicolo",q="alimentazione",J="veicoloOrdinabile",K="validitaDa",Q="validitaA",ee="scontoPercentuale",te="scontoImporto",ie="dataCreazione",oe="tipoSconto",ne="cumulaSconto",re="configurazione",se="scontoAttivo",ae="veicoloScontato",pe="tipoCliente",ce="ragCapogruppo",le="ragCliente",ue="idCapogruppo",de="idCliente",Te="codeSapCapogruppo",me="codeSapCliente",Ae="societa",he="nome",fe="cognome",Oe="codiceFiscale",Ce="piva";var Ie=(()=>{class i{carOptions$=new r({});clientOptions$=new r({});paramsCostruttore$=new r({});paramsPDS$=new r({});setCarOptions(e,t){let o=T(d({},this.carOptions$.value),{[e]:t});this.carOptions$.next(o)}setClientOptions(e,t){let o=T(d({},this.clientOptions$.value),{[e]:t});this.clientOptions$.next(o)}subscribeCarAutoComplition(e){return this.subscribeAutoComplition(e,this.subscribeCarField.bind(this))}subscribeClientAutoComplition(e){return this.subscribeAutoComplition(e,this.subscribeClientField.bind(this))}subscribeParamsCostruttore(){return this.paramsCostruttore$.pipe(s())}subscribeParamsPDS(){return this.paramsPDS$.pipe(s())}setParamsCostruttore(e){this.paramsCostruttore$.next(e)}setParamsPDS(e){this.paramsPDS$.next(e)}subscribeAutoComplition(e,t){let o={};e.forEach(n=>o[n]=t(n));let l=Object.keys(o),u=Object.values(o);return f(u).pipe(p(n=>Object.fromEntries(l.map((k,P)=>[k,n[P]]))))}subscribeCarField(e){return this.carOptions$.pipe(p(t=>t[e]),s())}subscribeClientField(e){return this.clientOptions$.pipe(p(t=>t[e]),s())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var M=({dt:i})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${i("ripple.background")};
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
`,F={root:"p-ink"},N=(()=>{class i extends S{name="ripple";theme=M;classes=F;static \u0275fac=(()=>{let e;return function(o){return(e||(e=O(i)))(o||i)}})();static \u0275prov=c({token:i,factory:i.\u0275fac})}return i})();var we=(()=>{class i extends y{zone=m(C);_componentStyle=m(N);animationListener;mouseDownListener;timeout;constructor(){super(),x(()=>{b(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(a(t,"p-ink-active"),!A(t)&&!h(t)){let n=Math.max(v(this.el.nativeElement),D(this.el.nativeElement));t.style.height=n+"px",t.style.width=n+"px"}let o=E(this.el.nativeElement),l=e.pageX-o.left+this.document.body.scrollTop-h(t)/2,u=e.pageY-o.top+this.document.body.scrollLeft-A(t)/2;this.renderer.setStyle(t,"top",u+"px"),this.renderer.setStyle(t,"left",l+"px"),g(t,"p-ink-active"),this.timeout=setTimeout(()=>{let n=this.getInk();n&&a(n,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&a(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),a(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,L(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=R({type:i,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[I([N]),_]})}return i})();export{we as a,$ as b,j as c,V as d,G as e,z as f,U as g,B as h,Z as i,H as j,W as k,X as l,Y as m,q as n,J as o,K as p,Q as q,ee as r,te as s,ie as t,oe as u,ne as v,re as w,se as x,ae as y,pe as z,ce as A,le as B,ue as C,de as D,Te as E,me as F,Ae as G,he as H,fe as I,Oe as J,Ce as K,Ie as L};
