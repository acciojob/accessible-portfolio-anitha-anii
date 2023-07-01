


function toggleMenu() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("show");
}

var menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", toggleMenu);

