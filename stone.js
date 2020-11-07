class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,25,30);
      this.image = loadImage("Plucking mangoes/stone.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      
      super.display();
    }
  }