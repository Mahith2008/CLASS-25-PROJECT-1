const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	//boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	
	box2 = new Box(1180,440,15,170);
	box3 = new Box(1020,440,15,170);
	box1 = new Box1(1005,350,150,15);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("lightyellow");
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	box3.display();
	box2.display();
	box1.display();
	//image(boximage,1000,330,200,200);
	
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}




