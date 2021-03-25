
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ball, platform1, platform2, moving1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	platform1sprite=createSprite(400, 550, 200 ,15);
	platform1sprite.shapeColor=color(255)

	platform2sprite=createSprite(700, 300, 200 ,15);
	platform2sprite.shapeColor=color(255)

	bad1sprite=createSprite(1000, 160, 15 ,400);
	bad1sprite.shapeColor=color("red")

	bad2sprite=createSprite(1000, 600, 15 ,200);
	bad2sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	platform1 = Bodies.rectangle(400, 550, 200 ,15, {isStatic:true});
	World.add(world, platform1);

	platform2 = Bodies.rectangle(700, 300, 200 ,15, {isStatic:true});
	World.add(world, platform2);

	bad1 = Bodies.rectangle(1000, 160, 15 ,400, {isStatic:true,restitution:1});
	World.add(world, bad1);

	bad2 = Bodies.rectangle(1000, 600, 15 ,200, {isStatic:true,restitution:1});
	World.add(world, bad2);
	

	

	//Create the Bodies Here.
	ground = new Ground(width/2,700,width,10);
	ball = new Ball(45,650,45);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();

/*
  if(Body.ball.isTouching(bad1)){
	Body.ball.x = 45;
	Body.ball.y = 650;
  }
  */

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-600});
	}
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:0});
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-250,y:0});
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:500});
	}
}



