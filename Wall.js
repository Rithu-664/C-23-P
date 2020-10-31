class Wall{
    constructor(x,y,width,height){
        var prop={
            isStatic: true
            
        }
        this.w=width;
        this.h=height;
        this.body=Bodies.rectangle(x,y,width,height,prop);
        World.add(world,this.body)
  
      
      }
      display(){
        fill("red");  
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
  
      }
}