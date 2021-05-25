
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg=loadImage("817485.jpg");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,650,1200,15)
    dustbin1=new Dustbin(590,590,15,100);

    dustbin=new Dustbin2(630,590,5)
    
	dustbin2=new Dustbin(630,635,90,15);    
    dustbin3=new Dustbin(670,590,15,100);  
    ball=new Ball(70,100,30);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  

ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
ball.display();
dustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-30})
	}
	
  }

