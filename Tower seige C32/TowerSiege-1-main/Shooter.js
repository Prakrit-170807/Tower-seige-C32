class Shooter {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false,
          'restitution':0.1,
          'friction':10,
          'density':7
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("polygon.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle);
      strokeWeight(0)
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER)
      image(this.image,0,0,80,80)
      pop()
    }
  };