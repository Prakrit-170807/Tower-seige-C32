class Box {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false, 
          'restitution':0.1,
          'friction':10,
          'density':4
      }
      this.box= Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.veiw=255
      this.score=0
      World.add(world, this.box);
    }
    display(){
      var posi =this.box.position;
      var pos = this.box.position;
      var angle = this.box.angle;
      
      push()
      if(this.box.velocity.x>12||this.box.velocity.y>10){
        World.remove(world,this.box) 
        this.score++
        textSize=1000
        text("Score:"+this.score,20,20)
      }
      else{
      rotate(angle);
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill(186,14,28);
      rect(0, 0, 40, 30);
      pop()
      }
    }
  };