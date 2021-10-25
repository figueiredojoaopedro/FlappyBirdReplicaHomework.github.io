
// basic stuff about the canvas
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height = 400

// space needs to remain false while the key space isnt pressed
let jumpPressed = false
let angle = 0 // angle is used just to make the mov up and mov down more slightly
let frame = 0 // made to know when we can create a new obstacle basicaly
let score = 0 // just to count your record and etc
let gameSpeed = 2 // you know, the speed that the obstacles progress against you
// i guess you can make a paralax effect with that

function animate(){
    // this clearRect is made to clear the position and do not seems like you are painting the screen
    ctx.clearRect(0,0,canvas.width,canvas.height)
    // ctx.fillRect(10,canvas.height - 90,40,40) // rectangle player
    obstaclesNew ()
    bird.update()
    bird.draw()
    colisions()
    if (colisions() === true){
        return
    }
    requestAnimationFrame(animate) //this makes a loop of call this function over and over again
    frame++
}
animate()

// the eventListener to make the space pressing work
window.addEventListener('keydown', function(event){
    // now if the event.code == to 'w or 87 in the ascii table' the rectangle will jump
    if (event.code === "KeyW")
        jumpPressed = true
})
window.addEventListener('keyup', function(event){
    // the same of the other function, but just if the key is up, without being pressed the spacePress variable be false
    if (event.code === 'KeyW')
        jumpPressed = false
})

// programming the game over
const gameOver = new Image()
gameOver.src = './images/gameover.png'
function colisions() {  // thank you stackOverflow
    for(let i = 0; i<obstaclesArray.length; i++){
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width && bird.x + bird.width > obstaclesArray[i].x 
            && ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0)
            ||(bird.y > canvas.height - obstaclesArray[i].bottom && bird.y + bird.height < canvas.height))){
                ctx.drawImage(gameOver, bird.x, bird.y, 100, 100)
                ctx.font = '25px Times'
                ctx.fillStyle = 'yellow'
                ctx.fillText('Perdeu PLAYBOY, sua pontuação foi: ' + score, 100,  canvas.height/2 - 10)
                return true
            }
    }
}

function loadGame(){
    location.href = 'paginaDoJogo.html'
}
function restart(){
    location.href = 'paginaDoJogo.html'
}
