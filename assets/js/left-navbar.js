function syncLeftNavbarHeight() {
    const left_navbar = document.querySelector('.left-navbar');
    const root   = document.documentElement;
    if (!left_navbar) return;
    const height = navbar.getBoundingClientRect().height;
    root.style.setProperty('--left-navbar-height', `${height}px`);
}
window.addEventListener('load', syncLeftNavbarHeight);
window.addEventListener('resize', syncLeftNavbarHeight);

/*document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".left-navbar-link");

    function updateActiveLink() {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("left-navbar-item-selected");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("left-navbar-item-selected");
            }
        });
    }

    // Initial call to set correct active link on page load
    updateActiveLink();

    // Update on scroll
    window.addEventListener("scroll", updateActiveLink);
});
*/
