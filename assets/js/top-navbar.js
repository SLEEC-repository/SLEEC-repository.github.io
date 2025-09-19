/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
function updateNavbarTop() {
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // 6rem → pixel value
    document.getElementById("top-navbar").style.top = `${6 * rem}px`;
}

/* Scroll handling – use the same function for the "show" case */
let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", () => {
  const cur = window.pageYOffset;
  if (prevScrollPos > cur) {
    // scrolling up → show
    updateNavbarTop();               // recompute in case font-size changed
  } else {
    // scrolling down → hide
    document.getElementById("top-navbar").style.top = "-0.3rem";  // hide can stay in rem (doesn't depend on root size)
  }
  prevScrollPos = cur;
});

/* Resize handling – keep the offset in sync */
window.addEventListener("resize", updateNavbarTop);

/* Resize handling – zoom / visual-viewport changes */
if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateNavbarTop);
}
