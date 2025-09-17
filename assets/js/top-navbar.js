/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.getElementById("top-navbar").style.top = `${6 * rem}px`;
  } else {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.getElementById("top-navbar").style.top = `${-3.53 * rem}px`;
  }
  prevScrollPos = currentScrollPos;
} 
