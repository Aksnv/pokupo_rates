/* Слайдер для тарифов */

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

  });

}());

/* END - Слайдер для тарифов */

/* Табы для тарифов */

var personRatesButton = document.querySelector(".rates-table__item_person");
var companyRatesButton = document.querySelector(".rates-table__item_company");
var personRatesTable = document.querySelector(".rates-table__items-wrapper_person");
var companyRatesTable = document.querySelector(".rates-table__items-wrapper_company");

personRatesButton.addEventListener("click", function() {
  this.classList.add("rates-table__item_active");
  personRatesTable.classList.add("rates-table__items-wrapper_active");
  companyRatesButton.classList.remove("rates-table__item_active");
  companyRatesTable.classList.remove("rates-table__items-wrapper_active");
});

companyRatesButton.addEventListener("click", function() {
  this.classList.add("rates-table__item_active");
  companyRatesTable.classList.add("rates-table__items-wrapper_active");
  personRatesButton.classList.remove("rates-table__item_active");
  personRatesTable.classList.remove("rates-table__items-wrapper_active");
});

/* END - Табы для тарифов */
