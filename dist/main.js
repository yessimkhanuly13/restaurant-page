(()=>{"use strict";const t=document.createElement("div"),e=document.querySelector("#content");t.classList.add("header");const n=document.createElement("h1");n.setAttribute("id","header"),n.textContent="Restaurant name",t.appendChild(n);const o=document.createElement("button");o.classList.add("btn"),o.textContent="Menu",o.setAttribute("id","menu-btn");const c=document.createElement("button");c.classList.add("btn"),c.textContent="Home",c.setAttribute("id","home-btn");const d=document.createElement("button");d.classList.add("btn"),d.textContent="Contact",d.setAttribute("id","contact-btn"),o.addEventListener("click",(()=>{console.log("hello menu page!")})),c.addEventListener("click",(()=>{console.log("hello home page!")})),d.addEventListener("click",(()=>{console.log("hello contact page!")})),t.appendChild(o),t.appendChild(c),t.appendChild(d),e.appendChild(t)})();