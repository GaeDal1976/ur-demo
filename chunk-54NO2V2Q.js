import{Aa as C,B as n,Da as x,I as _,S as a,V as R,W as O,Z as p,ba as I,j as f,z as h}from"./chunk-KODN66SN.js";import{Eb as m,Ma as d,O as c,Oa as A,U as s,ac as u,ca as l,ja as T}from"./chunk-P6AE7GFT.js";var N="A",y="Da";var k="idCapoGruppod",S="marca",M="modello",P="codiceProduttore",w="allestimento",b="carrozzeria",F="codiceInfocar",V="annoInfocar",G="meseInfocar",z="classeVeicolo",U="alimentazione",Z="veicoloOrdinabile",j="validitaDa",B="validitaA",H="scontoPercentuale",W="scontoImporto",X="dataCreazione",Y="tipoSconto",$="cumulaSconto",q="configurazione",J="scontoAttivo",K="veicoloScontato",Q="tipoCliente",ee="ragCapogruppo",te="ragCliente",oe="idCapogruppo",ie="idCliente",ne="codeSapCapogruppo",re="codeSapCliente",se="societa",ae="nome",pe="cognome",ce="codiceFiscale",le="piva";var D=({dt:o})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${o("ripple.background")};
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
`,L={root:"p-ink"},g=(()=>{class o extends C{name="ripple";theme=D;classes=L;static \u0275fac=(()=>{let e;return function(r){return(e||(e=l(o)))(r||o)}})();static \u0275prov=c({token:o,factory:o.\u0275fac})}return o})();var xe=(()=>{class o extends x{zone=s(T);_componentStyle=s(g);animationListener;mouseDownListener;timeout;constructor(){super(),u(()=>{f(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(n(t,"p-ink-active"),!a(t)&&!p(t)){let i=Math.max(_(this.el.nativeElement),O(this.el.nativeElement));t.style.height=i+"px",t.style.width=i+"px"}let r=R(this.el.nativeElement),E=e.pageX-r.left+this.document.body.scrollTop-p(t)/2,v=e.pageY-r.top+this.document.body.scrollLeft-a(t)/2;this.renderer.setStyle(t,"top",v+"px"),this.renderer.setStyle(t,"left",E+"px"),h(t,"p-ink-active"),this.timeout=setTimeout(()=>{let i=this.getInk();i&&n(i,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&n(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),n(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,I(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||o)};static \u0275dir=d({type:o,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[m([g]),A]})}return o})();export{xe as a,N as b,y as c,k as d,S as e,M as f,P as g,w as h,b as i,F as j,V as k,G as l,z as m,U as n,Z as o,j as p,B as q,H as r,W as s,X as t,Y as u,$ as v,q as w,J as x,K as y,Q as z,ee as A,te as B,oe as C,ie as D,ne as E,re as F,se as G,ae as H,pe as I,ce as J,le as K};
