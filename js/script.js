// Footer date
var currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Navigation offset
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

$(document).ready(function(){

  // Set trigger and container variables
  var trigger = $('#services-menu li a'),
      container = $('#content');

  // Fire on click
  trigger.on('click', function(){
    // Set $this for re-use. Set target from data attribute
    var $this = $(this),
    target = $this.data('target');

    // Load target page into container
    container.load(target + '.html');

    // Stop normal link behaviour
    return false;
  });

  $("#form").validate();
});
