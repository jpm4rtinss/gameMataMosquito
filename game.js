var gameplaceH
var gameplaceW 
var lifes = 1
var time = 15

function ajustSizeGameplace(){
     gameplaceH = window.innerHeight
     gameplaceW = window.innerWidth
}
ajustSizeGameplace()

// chronometer control
var chronometer = setInterval(function(){
    
    time-= 1
    if(time<=0){
        clearInterval(chronometer)
        clearInterval(createMosquito)
        window.location.href = 'victory.html'
    }
    document.getElementById('chrono').innerHTML = time 
    
},1000)


function randomElement(){
     //remove the previous mosquito (if exists)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        // lifes control and send to game over page
        if(lifes>3){
            window.location.href = 'gameover.html'
            
        } else{
            document.getElementById('v'+lifes).src = "img/coracao_vazio.png"
            lifes++
        }
    }

     //generate random positions
     var positionY = Math.floor(Math.random()*gameplaceH) - 90
     var positionX = Math.floor(Math.random()*gameplaceW) - 90
     positionY = positionY < 0 ? 0 : positionY
     positionX = positionX < 0 ? 0 : positionX
 
      //create element html
     var mosquito = document.createElement('img')
     mosquito.src = 'img/mosca.png'

      // set style and position 
     mosquito.className = mosquitoClass() + ' ' +reverseMosquito()
     mosquito.style.left= positionX + 'px'
     mosquito.style.top= positionY + 'px'
     mosquito.style.position= 'absolute'
     mosquito.id = 'mosquito'
     mosquito.onclick=function(){
         this.remove()
     }

      //append element 
     document.body.appendChild(mosquito)
}
randomElement()
 //alternate style classes
function mosquitoClass (){
    var numberMosquitoClass = Math.floor(Math.random()*3)
    
    switch(numberMosquitoClass){
        case 0:
            return 'mosquito0'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
     }
}

 // reverse mosquito img
function reverseMosquito() {
    var changeSide = Math.floor(Math.random()*2)
    
    switch(changeSide){
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
     }
}