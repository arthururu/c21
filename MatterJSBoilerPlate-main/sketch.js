
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground1
var parederight
var paredeleft
var raio = 40



	


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
}
	ball = Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)


	
  	ground1 = new ground(width/2,650,width,20);
	paredeleft = new ground(1100,600,20,120)
	parederight = new ground(1350,600,20,120)
	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  //ellipseMode(RADIUS)
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  ground1.display()
paredeleft.display()
parederight.display()
}
function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:1000,y:-2000})

	}
}

