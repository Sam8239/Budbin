// Preloader Starts
(function ($) {
  "use strict";

  jQuery(window).on("load", function () {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(350).fadeOut("slow");
  });
})(jQuery);
// Preloader Ends

// Current Active Menu Starts
var btnContainer = document.getElementById("navbarSupportedContent");

var btns = btnContainer.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// Current Active Menu Ends

//Touch to Close Collapse Navbar Starts
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
//Touch to Close Collapse Navbar Ends
