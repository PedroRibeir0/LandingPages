//menu
let menuHamburger = document.querySelector('#hamburger')
let closeButton = document.querySelector('#close')
let homeMenu = document.querySelector('#home-menu')
menuHamburger.addEventListener('click', ()=>{
    homeMenu.style.display = 'block'
    homeMenu.style.animation = 'menuJump 0.6s'
})

closeButton.addEventListener('click', ()=>{
    homeMenu.style.animation = 'none'
    homeMenu.style.display = 'none'
})

