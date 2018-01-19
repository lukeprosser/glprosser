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

// Footer date
var currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

/*
// Navigation offset
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
*/