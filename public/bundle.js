(()=>{"use strict";let t=new class{constructor(t){this.value=t}add(t,e){return t+e}subtract(t,e){return t-e}multiply(t,e){return t*e}divide(t,e){return t/e}}(0),e=document.getElementById("calc-output"),n=0,d=0,c=!1,i=!1,u=!1,l=!1;const o=document.getElementById("1-button"),r=document.getElementById("2-button"),m=document.getElementById("3-button"),a=document.getElementById("4-button"),s=document.getElementById("5-button"),E=document.getElementById("6-button"),b=document.getElementById("7-button"),v=document.getElementById("8-button"),y=document.getElementById("9-button"),f=document.getElementById("0-button"),g=document.getElementById("add-button"),B=document.getElementById("minus-button"),I=document.getElementById("multiply-button"),k=document.getElementById("divide-button"),L=document.getElementById("equals-button"),x=(document.getElementById("backspace-button"),document.getElementById("clear-all-button"));function T(t){let n=""+t;"0"==e.innerText?e.innerText=n:e.innerText.length<17&&(e.innerText+=n)}function p(t){0==n&&(n=Number(e.innerText),e.innerText="0"),"+"==t?(c=!0,g.disabled=!0):"-"==t?(i=!0,B.disabled=!0):"*"==t?(u=!0,I.disabled=!0):"/"==t&&(l=!0,k.disabled=!0)}function h(e,n,d){return"+"==e?t.add(n,d):"-"==e?t.subtract(n,d):"*"==e?t.multiply(n,d):"/"==e?t.divide(n,d):void 0}o.addEventListener("click",(function(){T(1)})),r.addEventListener("click",(function(){T(2)})),m.addEventListener("click",(function(){T(3)})),a.addEventListener("click",(function(){T(4)})),s.addEventListener("click",(function(){T(5)})),E.addEventListener("click",(function(){T(6)})),b.addEventListener("click",(function(){T(7)})),v.addEventListener("click",(function(){T(8)})),y.addEventListener("click",(function(){T(9)})),f.addEventListener("click",(function(){T(0)})),g.addEventListener("click",(function(){p("+")})),B.addEventListener("click",(function(){p("-")})),I.addEventListener("click",(function(){p("*")})),k.addEventListener("click",(function(){p("/")})),L.addEventListener("click",(function(){let t;d=Number(e.innerText),c?(c=!1,g.disabled=!1,t=h("+",n,d)):i?(i=!1,B.disabled=!1,t=h("-",n,d)):u?(u=!1,I.disabled=!1,t=h("*",n,d)):l&&(l=!1,k.disabled=!1,t=h("/",n,d)),e.innerText=""+t,n=0,d=0})),x.addEventListener("click",(function(){e.innerText="0",n=0,d=0}))})();