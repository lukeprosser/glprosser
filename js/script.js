// Back-to-top button
jQuery(document).ready(function() {

  var offset = 300;
  var duration = 300;

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".back-to-top").fadeIn(duration);
    } else {
      jQuery(".back-to-top").fadeOut(duration);
    }

  });

  jQuery(".back-to-top").click(function(event) {
    event.preventDefault();
    jQuery("html, body").animate({scrollTop: 0}, duration);
    return false;
  });

});

/*
$(document).ready(function() {

  // Offset anchor from another page
  var offsetSize = $(".navbar").innerHeight();
  $("html, body").animate({scrollTop:$(window.location.hash).offset().top-offsetSize}, 500);

});

// Offset anchor within same page
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
*/

// Footer date
var currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;