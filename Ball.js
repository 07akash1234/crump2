class Ball{
    constructor(x,y,Radius){
      
    var option ={
        isStatic:false,
      restitution:0.3,
      friction:0.5,
       density:1.2,
    }
    this.body=Bodies.circle(x,y,Radius/2,option);
    
    this.Radius=Radius;
    this.image = loadImage("paper.png");
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
       
        ellipseMode(CENTER);
        ellipse(0,0,this.Radius);
        imageMode(CENTER);
        image(this.image, 0, 0,40, 40);
        
        
    pop();
    }
    
    }