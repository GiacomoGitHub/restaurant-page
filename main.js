(()=>{"use strict";function e(){!function(){const e=document.createElement("h1"),t=document.createTextNode("Welcome to Giacomo's Deli");e.appendChild(t),document.getElementById("content").appendChild(e)}(),function(){const e=document.createElement("img");e.setAttribute("src","https://images.unsplash.com/photo-1559847844-1ff4d5bcd3b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80"),e.setAttribute("width","350"),e.setAttribute("height","200"),e.setAttribute("alt","A fantastic dish from our kitchen"),document.getElementById("content").appendChild(e)}(),function(){const e=document.createElement("p"),t=document.createTextNode("The best food in the world");e.appendChild(t),document.getElementById("content").appendChild(e)}()}function t(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.lastChild)}!function n(){const d=document.createElement("button");d.innerHTML="Home";const c=document.createElement("button");c.innerHTML="Contacts";const o=document.createElement("button");o.innerHTML="Menu",document.getElementById("content").appendChild(d),document.getElementById("content").appendChild(c),document.getElementById("content").appendChild(o),d.addEventListener("click",(()=>{t(),n(),e()})),c.addEventListener("click",(()=>{t(),n(),function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createTextNode("Contacts"),d=document.createElement("p");d.innerHTML="Telephone: 1234567890";const c=document.createElement("p");c.innerHTML="Fictional Street, X, Fictional City";const o=document.createElement("p");o.innerHTML="example@email.com",t.appendChild(n),e.appendChild(t),e.appendChild(c),e.appendChild(d),e.appendChild(o),document.getElementById("content").appendChild(e)}()})),o.addEventListener("click",(()=>{t(),n(),function(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createTextNode("Menu"),d=document.createElement("h3");d.innerHTML="Tasty Burger";const c=document.createElement("p");c.innerHTML="The tastiest burger in the world";const o=document.createElement("h3");o.innerHTML="Secret Formula Curry";const i=document.createElement("p");i.innerHTML="Our secret formula",t.appendChild(n),e.appendChild(t),e.appendChild(d),e.appendChild(c),e.appendChild(o),e.appendChild(i),document.getElementById("content").appendChild(e)}()}))}(),e(),document.body.style.textAlign="center",document.body.style.paddingTop="auto",document.body.style.fontSize="3em"})();