
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;  
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;
    roof1 = new roof(200,50,840,40)
	//Create the Bodies Here.
	bobobject1 = new Bob(200,400,30);
   	bobobject2 = new Bob(260,400,30);
	bobobject3 = new Bob(320,400,30);
	bobobject4 = new Bob(380,400,30);
	bobobject5 = new Bob(440,400,30);
	rope1 =  new rope(bobobject1.body,roof1.body,-130,0);
	rope2 =  new rope(bobobject2.body,roof1.body,-130,0);
	rope3 =  new rope(bobobject3.body,roof1.body,-130,0);
	rope4 =  new rope(bobobject4.body,roof1.body,-130,0);
	rope5 =  new rope(bobobject5.body,roof1.body,-130,0);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
 
  Engine.update(engine);
roof1.display();
bobobject1.display();
bobobject2.display();
bobobject3.display();
bobobject4.display();
bobobject5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
keyPressed();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === 32) {
	Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-60,y:-60}); 
  
	}  
} 


