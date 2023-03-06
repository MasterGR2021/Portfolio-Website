const menu = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

const overlay = document.getElementById('overlay');

// Menu Button
menuBtn.addEventListener('click', function() {
  if(menu.classList.contains('open')) {
    closeMenu(); 
    closeOverlay();
  }
  else {
    openMenu();
    openOverlay();
  }
})

closeBtn.addEventListener('click', function() {
  if(menu.classList.contains('open')) {
    closeMenu();
    closeOverlay();
  }
  else {
    openMenu();
    openOverlay();
  }
})

// Overlay
overlay.addEventListener('click', function() {
  closeMenu();
  closeOverlay();
})

function closeMenu() {
  menu.classList.remove('open');
}

function openMenu() {
  menu.classList.add('open');
}

function openOverlay() {
  overlay.classList.add('open');
}

function closeOverlay() {
  overlay.classList.remove('open');
}

// hiding navbar on scroll
let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("header");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 10) {
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset";
  }
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "  -10rem";
  }
  prevScrollpos = currentScrollPos;
};