const btn = document.querySelector('.menu-btn');
const showcase = document.querySelector('.showcase');
const menu = document.querySelectorAll('.menu');

btn.addEventListener('click', () => {
    showcase.classList.toggle('active');
    menu.forEach(item => item.classList.toggle('active'));
});