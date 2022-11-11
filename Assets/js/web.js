/**
 * Aksol Script
 */

// Hambuger menu
// const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

// const navMenu = document.querySelector(".nav-menu"); 

// mobileMenuBtn.addEventListener("click", mobileMenu)

// function mobileMenu(){
//     mobileMenuBtn.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// const navLink = document.querySelectorAll(".nav-link");


// Project done counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
  startValue +=1;
  valueDisplay.textContent = startValue;
  if (startValue == endValue) {
    clearInterval(counter);
  }
}, duration);
});