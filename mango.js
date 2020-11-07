class Mango{
  constructor(x, y, ) {
      var options = {
           isStatic: true
      }
      this.body = Bodies.rectangle(x, y,20, 25, options);
      this.x = x
      this.y = y

      this.image = loadImage("Plucking mangoes/mango.png");
      World.add(world, this.body);
    }
    display(){

      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0,20,25);
      pop();
    }
}