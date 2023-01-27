//Banner

let images = document.querySelectorAll('header #banner img')
let index = 0
let maxImages = 6

function changeImage(){
    images[index].classList.remove('selected')
    index++
    if (index >=maxImages){
        index = 0
    }
    images[index].classList.add('selected')
    
}
setInterval(changeImage, 2500)

// Map
let map = document.querySelector('img#main-map')
let mapInfo = document.querySelector('#map-info')
let closeButton = document.querySelector('#close')
map.addEventListener('click', ()=>{
    map.style.animation = 'map-turn 0.8s forwards'
    mapInfo.style.display = 'block'
    mapInfo.style.animation = 'map-info 1.3s forwards'
})

closeButton.addEventListener('click', ()=>{
    map.style.animation = 'none'
    mapInfo.style.display = 'none'
    mapInfo.style.animation = 'none'

})