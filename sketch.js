const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;
var ground1;
function setup() {
  createCanvas(800,400);
  //first tier
 box1= new Box(300,235,30,30);
 box2= new Box(330,235,30,30);
 box3= new Box(360,235,30,30);
 box4= new Box(390,235,30,30);
 box5= new Box(420,235,30,30);
 box6= new Box(450,235,30,30);
 box7= new Box(480,235,30,30);
 //second tier
 box8= new Box(510,235,30,30);
 box9= new Box(330,205,30,30);
 box10= new Box(360,205,30,30);
 box11= new Box(390,205,30,30);
 box12= new Box(420,205,30,30);
 //third tier
 box13= new Box(450,205,30,30);
 box14= new Box(360,175,30,30);
 box15= new Box(390,175,30,30);
 //top tier
 box16= new Box(390,145,30,30);
 //ground
 ground1= new Ground(290,240,180,5);
}

function draw() {
  background(255,255,255);
  engine = Engine.create();
  world = engine.world;  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ground1.display();
 drawSprites();
}