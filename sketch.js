
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 //var lstone,lmango;
var  boy,tree1,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var ground;
var stoneObj, slingshot;



function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,80);
    
    boy = new Boy(150,410,180,225);

    stoneObj = new Stone(100,100);

    tree1 = new Tree(700,255,450,500);

    mango1 = new Mango(550,250);

    mango2 = new Mango(600,200);

    mango3 = new Mango(610,150);

    mango4 = new Mango(650,200);

    mango5 = new Mango(750,220);

    mango6 = new Mango(800,200);

    mango7 = new Mango(650,100);

    mango8 = new Mango(700,200);

    mango9 = new Mango(850,230);

    mango10 = new Mango(780,150);

    mango11 = new Mango(780,85);

    mango12 = new Mango(700,150)

    slingshot = new SlingShot(stoneObj.body,{x:95, y:360});

}

function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(4);

	detectcollition(stoneObj,mango1);
	detectcollition(stoneObj,mango2);
	detectcollition(stoneObj,mango3);
	detectcollition(stoneObj,mango4);
	detectcollition(stoneObj,mango5);
	detectcollition(stoneObj,mango6);
	detectcollition(stoneObj,mango7);
	detectcollition(stoneObj,mango8);
	detectcollition(stoneObj,mango9);
	detectcollition(stoneObj,mango10);
	detectcollition(stoneObj,mango11);
	detectcollition(stoneObj,mango12);

    ground.display();
    
    boy.display();

    tree1.display();

    mango1.display();

    mango2.display();

    mango3.display();

    mango4.display();

    mango5.display();

    mango6.display();

    mango7.display();

    mango8.display();

    mango9.display();

    mango10.display();

    mango11.display();

    mango12.display();

    stoneObj.display();
       slingshot.dispaly();
  
    
}
 function detectcollition( lstone,lmango){
mangoBodyPosition = lmangoBodyPosition
stoneBodyPosition =  lstoneBodyPosition
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBody.x,mangoBody.y)
if(distance<=lmango.r+ lstone.r){
Matter.body.setStatic(lmango.body,false);
}
 }  

    
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stoneObj.body);
    }
}