// Footer date
var currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Navigation offset
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
