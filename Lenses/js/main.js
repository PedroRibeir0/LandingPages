let images = document.querySelectorAll('#left img')
let time = 3500
let index = 0
let maxImages = images.length

function changeImg(){
    images[index].classList.remove('selected')
    index++

    if(index >= maxImages)
        index = 0

    images[index].classList.add('selected')
    
}

function loaded(){
    setInterval(changeImg, time)
}

window.addEventListener('load',loaded)



//

let menu = document.querySelector('#brand #right #menu')
if (window.matchMedia("(min-width: 660px)").matches){
    changeMenu()
}
function changeMenu(){
    console.log(menu)
}