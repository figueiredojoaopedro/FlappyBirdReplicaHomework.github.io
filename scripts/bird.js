const nave = new Image()
nave.src = 'images/spaceship02.png'
class Bird{
    constructor(){
        this.x = 150
        this.y = 200
        this.vy = 0 // vy = velocity y
        this.originalWidth = 351
        this.originalHeight = 250
        this.width = this.originalWidth/10
        this.height = this.originalHeight/10
        this.width = 20
        this.height = 20
        this.weight = 1 // the concept of weight is pulling down the player to the ground, like in the real life
    }
    // this function has the purpose to be called over and over again until the game stop
    update(){
        //if we keep by this way, the bird will fall infinitely, so we need to stop him at the canvas border
        if (this.y > canvas.height - (this.height*3)){
            this.y = canvas.height - (this.height*3)
            this.vy = 0 
        }
        else{
            this.vy += this.weight
            this.vy *= 0.9 // made to decrease the velocity of the bird is falling down
            this.y += this.vy
        }
        // now to prevent the bird touches the roof, we need to program a limit
        if (this.y < 0 + this.height){
            this.y = 0 + this.height
            this.vy = 0 // if it's not zero, the bird sticks on the roof
        }
        // basicaly if the space is pressed, we will call the flap message
        if(jumpPressed == true)
            this.flap()
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x,this.y,this.width*1.5,this.height*1.5)
        ctx.drawImage(nave,0,0,this.originalWidth,this.originalHeight,this.x-18,this.y-15,this.width*3,this.height*3)
    }
    // everytime we press w the bird will jump 2u 
    flap(){
        this.vy -= 2
    }
}
const bird = new Bird() // the good idea to use class, that you make one thing that you can use a bunch of times