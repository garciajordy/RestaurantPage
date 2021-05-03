import '../style/style.css';

const homeInner = require('./home');
const menuInner = require('./menu');
const contactInner = require('./contact');

const content = document.getElementById('content');
const contentChild = document.createElement('div');
function navBar() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');
  li1.classList.add('list-item');
  a1.innerHTML = 'Home';
  a1.id = 'home';
  li2.classList.add('list-item');
  a2.innerHTML = 'Menu';
  a2.id = 'menu';
  li3.classList.add('list-item');
  a3.innerHTML = 'Contact';
  a3.id = 'contact';
  a1.href = '#';
  a2.href = '#';
  a3.href = '#';
  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  nav.appendChild(ul);
  content.appendChild(nav);
  content.appendChild(contentChild);
}
navBar();
const home = document.getElementById('home');
const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const homeContent = document.createElement('div');
const menuContent = document.createElement('div');
const contactContent = document.createElement('div');
function homePage() {
  if (contentChild.childNodes[0]) {
    contentChild.removeChild(contentChild.childNodes[0]);
  }
  contentChild.appendChild(homeContent);

  homeContent.innerHTML = homeInner;
}
function menuPage() {
  if (contentChild.childNodes[0]) {
    contentChild.removeChild(contentChild.childNodes[0]);
  }
  contentChild.appendChild(menuContent);
  menuContent.innerHTML = menuInner;
}
function contactPage() {
  if (contentChild.childNodes[0]) {
    contentChild.removeChild(contentChild.childNodes[0]);
  }
  contentChild.appendChild(contactContent);
  contactContent.innerHTML = contactInner;
}

homePage();
home.addEventListener('click', homePage);
contact.addEventListener('click', contactPage);
menu.addEventListener('click', menuPage);