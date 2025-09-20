document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".left-navbar-link");
    const navItems = document.querySelectorAll(".left-navbar-item"); // <li> elements

    function updateActiveLink() {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop;
            if (window.pageYOffset >= top - 60) {
                current = section.id; // e.g. "description"
            }
        });

        // First clear the selected class from all <li> items
        navItems.forEach(item => item.classList.remove("left-navbar-item-selected"));

        // Then add it to the <li> that contains the matching <a>
        navLinks.forEach(link => {
            if (link.getAttribute("href").substring(1) === current) {
                link.parentElement.classList.add("left-navbar-item-selected");
            }
        });
    }

    // Set correct state on load and on scroll
    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink);
});
