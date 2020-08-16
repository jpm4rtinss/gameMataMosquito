var gameplaceH
var gameplaceW 

function ajustSizeGameplace(){
     gameplaceH = window.innerHeight
     gameplaceW = window.innerWidth
}
ajustSizeGameplace()

//generate random positions
var positionY = Math.floor(Math.random()*gameplaceH) - 90
var positionX = Math.floor(Math.random()*gameplaceW) - 90
positionY = positionY < 0 ? 0 : positionY
positionX = positionX < 0 ? 0 : positionX
 
// create element html
var mosquito = document.createElement('img')
mosquito.src = 'img/mosca.png'

// set style and position 
mosquito.className = 'mosquito1'
mosquito.style.left= positionX + 'px'
mosquito.style.top= positionY + 'px'
mosquito.style.position= 'absolute'

//append element 
document.body.appendChild(mosquito)
