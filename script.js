const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});


const toggleButton = document.getElementById('darkmode-toggle');
const icon = document.getElementById('icon');
const body = document.body;
const inputForms = document.querySelectorAll('.input-form');


toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');

    if (isDarkMode) {
        body.style.setProperty('--bg-color', '#242424');
        body.style.setProperty('--text-color', 'white');
        body.style.setProperty('--second-color', 'white');
        inputForms.forEach(inputForm => {
            inputForm.style.setProperty('--bg-color1', '#474444');
        });
        icon.src = 'images/sun-svgrepo-com.svg'; // Change to sun icon
        toggleButton.style.background = '#242424'; // Change the background color of the button
        
    } else {
        body.style.setProperty('--bg-color', '#dfe2e8');
        body.style.setProperty('--text-color', '#3a3a40');
        body.style.setProperty('--second-color', '#3a3a40');
        inputForms.forEach(inputForm => {
            inputForm.style.setProperty('--bg-color1', 'white');
        });
        icon.src = 'images/moon-stars-svgrepo-com.svg'; // Change back to moon icon
        toggleButton.style.background = '#dfe2e8'; // Change the background color of the button
    }
});

setTimeout(function() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';

  // Initialize AOS after the content is visible
  AOS.init();
}, 4000); // 5000 milliseconds = 5 seconds



document.addEventListener("DOMContentLoaded", function() {
  let prevScrollPos = window.scrollY;
  const navbar = document.querySelector("header");

  window.addEventListener("scroll", function() {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      navbar.classList.remove("navbar-hidden");
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
      navbar.classList.add("navbar-hidden");
    }

    prevScrollPos = currentScrollPos;
  });
});






