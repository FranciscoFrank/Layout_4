document.addEventListener('DOMContentLoaded', function () {
    var burgerBtn = document.getElementById('burgerBtn');
    var burgerMenu = document.getElementById('burgerMenu');
    var headerHeight = document.getElementById('header').offsetHeight;

    burgerBtn.addEventListener('click', function () {
        burgerMenu.classList.toggle('menu-open');
    });
});
