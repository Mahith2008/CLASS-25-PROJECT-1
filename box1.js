class Box1  {
    constructor(x,y,width,height)   {
        var options = {
            isStatic:true
        }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   
     this.image = loadImage('box.png');

     World.add(world,this.body);
    }

    display()   {
      push();
        var pos3= this.body.position;
       
        translate(pos3.x,pos3.y);
        image(this.image,0,0,190,190);
        imageMode(CENTER);
        fill("white");
      // rect(0,0,this.width,this.height);
        pop();
    }
}