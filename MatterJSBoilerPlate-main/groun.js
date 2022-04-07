class ground{
 constructor(x,y,width,height){
    var options={
        isStatic: true
    }
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world,this.body)


 }
display(){
var posicao = this.body.position;
push();
translate(posicao.x,posicao.y)
rectMode(CENTER)
fill("yellow")
rect(0,0,this.width,this.height)
pop()

}


}




















