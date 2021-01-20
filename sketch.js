
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground1;
var Hammer1;
var Stone1;
var Rubber1;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   Ground1=new Ground(600,height,1200,20)
   Hammer1=new Hammer(500,500,50,50)
   Stone1 = new Stone(700,230,70,70);
   Rubber1 = new Rubber(400,200,25,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground1.display();
  Hammer1.display();
  Stone1.display();
  Rubber1.display();
  drawSprites();
 
}



