// Toggle Menu
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    nav.classList.toggle('open');
});

// Year and Last Modified
const year = document.querySelector('#current-year');
const modified = document.querySelector('#last-modified');

const today = new Date();
year.textContent = `${today.getFullYear()}`;
modified.textContent = `Last modified: ${document.lastModified}`;
