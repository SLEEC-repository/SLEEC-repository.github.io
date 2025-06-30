document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.left-nav-item');
    const selector = document.querySelector('.selector');
    const contentArea = document.getElementById('content');

    // Content for each item (HTML snippets)
    const contentMap = {
        'Description': `
        <h2>Description</h2>
        <p>This is the description content.</p>
        <img src="img/description-image.jpg" alt="Description Image" />
        `,
        'Characteristics': `
        <h2>Characteristics</h2>
        <ul>
        <li>Characteristic 1</li>
        <li>Characteristic 2</li>
        <li>Characteristic 3</li>
        </ul>
        `,
        'Normative Requirements': `
        <h2>Normative Requirements</h2>
        <p>These are the normative requirements.</p>
        <p>More detailed information can go here.</p>
        `,
        'Formalised Requirements': `
        <h2>Formalised Requirements</h2>
        <p>This section covers formalised requirements.</p>
        <p>Additional details and examples can be included here.</p>
        `
    };

    items.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'selected' class from all items
            items.forEach(i => i.classList.remove('selected'));

            // Add 'selected' class to the clicked item
            this.classList.add('selected');

            // Get the position of the selected item
            const rect = this.getBoundingClientRect();

            // Update the selector's position
            selector.style.top = `${rect.top + window.scrollY}px`; // Adjust for scroll position

            // Update the content based on the selected item
            const selectedText = this.textContent.trim();
            contentArea.innerHTML = contentMap[selectedText] || 'Select an option to see the content here.';
        });
    });

    // Initialize the selector position and content for the default selected item
    const selectedItem = document.querySelector('.left-nav-item.selected');
    if (selectedItem) {
        const rect = selectedItem.getBoundingClientRect();
        selector.style.top = `${rect.top + window.scrollY}px`;
        contentArea.innerHTML = contentMap[selectedItem.textContent.trim()] || 'Select an option to see the content here.';
    }
});
