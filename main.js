const menu = document.querySelector('#menu-toggle');
const checkbox = document.querySelector('#menu-toggle input');
menu.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
});