const datenbutton = document.querySelector('.Datenschutz');
const blackscreen = document.querySelector('.black');
const daten = document.querySelector('.Datenschutz-wrapper');
const closebutton = document.querySelector('.closebtn');

datenbutton.addEventListener('click', opendata);
closebutton.addEventListener('click', closedata);

function opendata() {
  blackscreen.style.display = 'block';
  daten.style.display = 'block';
}

function closedata() {
  blackscreen.style.display = 'none';
  daten.style.display = 'none';
}

//Navigation

const navburger = document.querySelector('.burger-menu');
const fullnav = document.querySelector('.full-nav');

navburger.addEventListener('click', openNav);

function openNav() {
  fullnav.style.display = 'block';
}
