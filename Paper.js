class Paper
 {
    constructor(x, y,r) 
    {
      var options = {
          isStatic:false,
          friction:0.5,
          density:1.2,
          restitution:-1
      }
      this.x=x;
      this.y=y;
      this.r=r;  
      
      this.body=Bodies.circle(300,200,5,options);
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("violet");
        rectMode(CENTER);
        ellipse(pos.x, pos.y,this.r);
        
    }
}

