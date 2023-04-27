import helloHomePage from "./home";
import helloMenuPAge from "./menu";
import contactPage from "./contact";

const div = document.createElement('div');
const content = document.querySelector('#content');
div.classList.add('header');
const h1 = document.createElement('h1');
h1.setAttribute('id', 'header');
h1.textContent = 'Restaurant name';
div.appendChild(h1);

const btn1 = document.createElement('button');
btn1.classList.add('btn');
btn1.textContent = "Menu";
btn1.setAttribute('id', 'menu-btn')

const btn2 = document.createElement('button');
btn2.classList.add('btn');
btn2.textContent = "Home";
btn2.setAttribute('id', 'home-btn')

const btn3 = document.createElement('button');
btn3.classList.add('btn');
btn3.textContent = "Contact";
btn3.setAttribute('id', 'contact-btn')

btn1.addEventListener('click', ()=>{
  helloMenuPAge();
})

btn2.addEventListener('click', ()=>{
  helloHomePage();
})

btn3.addEventListener('click', ()=>{
  contactPage();
})


div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);



content.appendChild(div);