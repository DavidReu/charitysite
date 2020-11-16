let share = document.getElementById('share')
let logo = document.getElementById('logo')
let tailleEcranX = window.innerWidth;
let burger = document.getElementById('burger')


burger.addEventListener('click', function () {
    if (tailleEcranX < 600) {
        share.remove();
        logo.remove()
    }
});