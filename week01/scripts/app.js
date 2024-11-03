// Burger menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
    });
});
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the lastModified element in the footer
    const lastModifiedSpan = document.getElementById('lastModified');

    // Get the document's last modified date
    const lastModified = new Date(document.lastModified);

    // Format the date as "DD/MM/YYYY HH:MM:SS"
    const formattedDate = `${String(lastModified.getDate()).padStart(2, '0')}/` +
                          `${String(lastModified.getMonth() + 1).padStart(2, '0')}/` +
                          `${lastModified.getFullYear()} ` +
                          `${String(lastModified.getHours()).padStart(2, '0')}:` +
                          `${String(lastModified.getMinutes()).padStart(2, '0')}:` +
                          `${String(lastModified.getSeconds()).padStart(2, '0')}`;

    // Set the formatted date as the content of the lastModified element
    lastModifiedSpan.textContent = `Last Update: ${formattedDate}`;
});
