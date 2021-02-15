const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10, block11, block12;
var block13, block14;
var block15;
var block16,block17,block18;
var block19,block20;
var block21;
var polygon,polygonImg;
var slingShot;

function preload() {
    polygonImg=loadImage("polygon.png")
}

function setup(){  
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,590,1200,30);
    stand1 = new Ground(500,480,300,10);
    stand2 = new Ground(850,350,300,10)
    
    block1 = new Block(412,445,45,60);
    block2 = new Block(457,445,45,60);
    block3 = new Block(502,445,45,60);
    block4 = new Block(547,445,45,60);
    block5 = new Block(592,445,45,60);
  
    block6 = new Block(435,385,45,60);
    block7 = new Block(480,385,45,60);
    block8 = new Block(525,385,45,60);
    block9 = new Block(570,385,45,60);

    block10 = new Block(458,325,45,60);
    block11 = new Block(503,325,45,60);
    block12 = new Block(548,325,45,60);

    block13 = new Block(480,265,45,60);
    block14 = new Block(525,265,45,60);

    block15 = new Block(503,205,45,60);

    block16 = new Block(805,315,45,60);
    block17 = new Block(850,315,45,60);
    block18 = new Block(895,315,45,60);

    block19 = new Block(828,255,45,60);
    block20 = new Block(873,255,45,60);

    block21 = new Block(850,195,45,60);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot= new Slingshot(this.polygon,{x:200,y:300})

    Engine.run(engine);
}

function draw(){
    background(101,67,33);
    text("Drag the Hexagonal Stone to release it, to launch it towards the blocks",50,200);
    Engine.update(engine);
    
    ground.display();
    
    stand1.display();
    stand2.display();
    
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    fill("pink");
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    fill("green");
    block10.display();
    block11.display();
    block12.display();

    fill("red");
    block13.display();
    block14.display();
    
    fill("purple");
    block15.display();

    fill("blue");
    block16.display();
    block17.display();
    block18.display();

    fill("green");
    block19.display();
    block20.display();

    fill("purple");
    block21.display();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
