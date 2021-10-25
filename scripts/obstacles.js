const obstaclesArray = [] // this array went created to store a bunch of types of obstacles, that will appear on the screen

class Obstacles{
    constructor(){
        this.top = (Math.random() * canvas.height/3 + 50) // the size of each obstacles needs to be random, if everything is quite equal, the game will be boring!
        this.bottom = (Math.random()*canvas.height/3 + 50) 
        this.x = canvas.width
        this.width = 20
        this.color = 'blue '
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,0,this.width,this.top) // top rectangle
        ctx.fillRect(this.x,canvas.height - this.bottom, this.width, this.bottom) // bottom rectangle
    }
    update(){
        this.x -= gameSpeed
        this.draw()
    }
}

// now to create a new obstacle on a determined space of time:
function obstaclesNew (){
    if (frame%60 === 0){//each 50 frames passed, we got a new obstacle, and i can exchange the distances between each obstacles, but it will make easier
        // basically, everytime a frame number which is divisible per 50, we gonna take an action
        // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. -> by MDN WEB DOCS
        obstaclesArray.unshift(new Obstacles)
        score++ // basically, each new obstacle, we have a new pontuation
        
    }
    for(let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update() // we draw another obstacle
    }
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]) 
    }
}