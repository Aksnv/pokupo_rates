/*Слайдер для переключения тарифов*/

(function () {
  
  var leftArrow = document.querySelector(".rates_slide__ctrl-left");
  var rightArrow = document.querySelector(".rates_slide__ctrl-right");

  var screenWidth = document.documentElement.clientWidth;

  window.addEventListener("resize", function(event) {

    if (screenWidth > 1023) {
      document.querySelector(".startup .grade-1").style = "block";
      document.querySelector(".startup .grade-2").style = "block";
      document.querySelector(".startup .grade-3").style = "block";
      document.querySelector(".business .grade-1").style = "block";
      document.querySelector(".business .grade-2").style = "block";
      document.querySelector(".business .grade-3").style = "block";
      document.querySelector(".company .grade-1").style = "block";
      document.querySelector(".company .grade-2").style = "block";
      document.querySelector(".company .grade-3").style = "block";
    } else {
      document.querySelector(".startup .grade-1").style = "none";
      document.querySelector(".startup .grade-2").style = "block";
      document.querySelector(".startup .grade-3").style = "none";
      document.querySelector(".business .grade-1").style = "none";
      document.querySelector(".business .grade-2").style = "block";
      document.querySelector(".business .grade-3").style = "none";
      document.querySelector(".company .grade-1").style = "none";
      document.querySelector(".company .grade-2").style = "block";
      document.querySelector(".company .grade-3").style = "none";

      rightArrow.removeAttribute("disabled");
      leftArrow.removeAttribute("disabled");
    }

  });

  rightArrow.addEventListener("click", function(event) {
    /*event.preventDefault();*/

    if (document.querySelector(".startup .grade-2").style.display == "block") {
      document.querySelector(".startup .grade-2").style.display = "none";
      document.querySelector(".startup .grade-3").style.display = "block";
      document.querySelector(".business .grade-2").style.display = "none";
      document.querySelector(".business .grade-3").style.display = "block";
      document.querySelector(".company .grade-2").style.display = "none";
      document.querySelector(".company .grade-3").style.display = "block";
      rightArrow.setAttribute("disabled", "disabled");
    } else {
      document.querySelector(".startup .grade-1").style.display = "none";
      document.querySelector(".startup .grade-2").style.display = "block";
      document.querySelector(".business .grade-1").style.display = "none";
      document.querySelector(".business .grade-2").style.display = "block";
      document.querySelector(".company .grade-1").style.display = "none";
      document.querySelector(".company .grade-2").style.display = "block";
      leftArrow.removeAttribute("disabled");
    }

  });

  leftArrow.addEventListener("click", function(event) {
    /*event.preventDefault();*/

    if (document.querySelector(".startup .grade-2").style.display == "block") {
      document.querySelector(".startup .grade-2").style.display = "none";
      document.querySelector(".startup .grade-1").style.display = "block";
      document.querySelector(".business .grade-2").style.display = "none";
      document.querySelector(".business .grade-1").style.display = "block";
      document.querySelector(".company .grade-2").style.display = "none";
      document.querySelector(".company .grade-1").style.display = "block";
      leftArrow.setAttribute("disabled", "disabled");
    } else {
      document.querySelector(".startup .grade-3").style.display = "none";
      document.querySelector(".startup .grade-2").style.display = "block";
      document.querySelector(".business .grade-3").style.display = "none";
      document.querySelector(".business .grade-2").style.display = "block";
      document.querySelector(".company .grade-3").style.display = "none";
      document.querySelector(".company .grade-2").style.display = "block";
      rightArrow.removeAttribute("disabled");
    }
    
    /*menu_hamburger.classList.toggle("page-header__menu-hamburger--active");*/

  });

}());
