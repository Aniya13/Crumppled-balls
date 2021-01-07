const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

   box1 = new Box(1300,660,170,20);
   box2 = new Box(1200,615,20,120);
   box3 = new Box(1400,615,20,120);
   paper = new Paper(500, 660, 20);
   ground = new Ground(800,680,1600,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    paper.display();
    ground.display();
}
function keyPressed(){
    if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-45})
    }
}