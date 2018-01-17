// Footer date
var currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Navigation offset
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

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

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });

});
