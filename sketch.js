const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4,log5;

var bird1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,80,80);
    box2 = new Box(600,300,80,80);
    box3 = new Box(400,200,80,80);
    box4 = new Box(600,200,80,80);
    box5 = new Box(500,150,80,80);
    ground = new Ground(600,height,width,50)
    pig1=new pig (500,350);
    pig2=new pig (500,190);
    log1=new log(500,270,400,PI/2);
    log2=new log(500,170,400,PI/2);
    log3=new log(500,150,200,PI/7);
    log4=new log(600,150,200,-PI/7);

    bird1 = new angryBird(200,400);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    pig1.display();
    box1.display();
    box2.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    
    log2.display();
    ground.display();
}