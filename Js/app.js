const hamburger = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.menu-cross');
const navItems = document.querySelectorAll('.mobile-menu a');

function toggleMenu() {
   document.querySelector('.mobile-menu').classList.toggle('d-block')
   
}