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

var navburger = document.querySelector('.burger-menu');
var fullnav = document.querySelector('.full-nav');
const closebutton2 = document.querySelector('.closeNav');

navburger.addEventListener('click', openNav);
closebutton2.addEventListener('click', closeNav);

function openNav() {
  fullnav.style.display = 'block';
  blackscreen.style.display = 'block';
}
function closeNav() {
  fullnav.style.display = 'none';
  blackscreen.style.display = 'none';
}

//Standort

const standortbutton = document.querySelector('.standort-button');
const standortpicture = document.querySelector('.standort-wrapper');

standortbutton.addEventListener('click', openStandort);

function openStandort() {
  standortpicture.style.display = 'block';
}
