
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var ball_options = {
    isStatic: false,
	restitution: 0.3,
    friction: 0,
	density: 1.2

	}

	engine = Engine.create();
	world = Engine.world;

	//Create the Bodies Here.

	groundMain = new ground(width/2, 670, width, 20)

	leftWall = new ground(1100, 600, 20, 120)

	rightWall = new ground(1100, 650, 20, 120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundMain.display();
  leftwall.display();
  rightwall.display();

  drawSprites();
 
}



