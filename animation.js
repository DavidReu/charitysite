let secondul = document.getElementById("secondul")
let share = document.getElementById('share')
let logo = document.getElementById('logo')
let tailleEcranX = document.body.clientWidth;
let navbar = document.getElementById('navbarSupportedContent')
let burger = document.getElementById('burger')

console.log(tailleEcranX);
console.log("boom")
burger.addEventListener('click', function () {
    if (tailleEcranX < 600) {
        secondul.removeChild(share)
        console.log("ça marche")
    }
})


