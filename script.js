// Example JavaScript code for portfolio

// Function to toggle a mobile navigation menu
function toggleMenu() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("show");
}

// Add event listener to the navigation menu button
var menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", toggleMenu);

