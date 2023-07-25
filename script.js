const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Function to toggle the menu
function toggleMenu() {
  const navLinks = document.querySelector('.navlist');
  navLinks.classList.toggle('show');
}

// Add event listener to the menu icon
const menuIcon = document.getElementById('menu-icon');
if (menuIcon) {
  menuIcon.addEventListener('click', toggleMenu);
}
