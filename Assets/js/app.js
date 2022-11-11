const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

// end of hamburger menu

// form function
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Show password input
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text;"
    } else {
        x.type = "password";
    }
}

window.onscroll = function (){
     // show or hide the back-top-top button
     var backToTo = document.querySelector(".scroll-top");
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         backToTo.style.display = "flex";
     } else {
         backToTo.style.display = "none";
     };

     function skroll() {
        if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
          document.getElementById("aksol_selector").style.display = "none";
          document.getElementById("navbar").style.position = "fixed";
        }
        else{
        document.getElementById("aksol_selector").style.display = "block";
        document.getElementById("navbar").style.position = "relative";
      }
      }
}

// For gallery (jquery)
$(document).ready(function() {
    $("#tab-btn ul li a").click(function(event) {
      event.preventDefault();
      var selectAtt = $(this).attr("data-category");
  
      $("#tab-btn ul li a").removeClass("active_tab");
      $(this).addClass("active_tab");
  
      $(".all").hide();
      $("." + selectAtt).fadeIn();
    });
  });

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

