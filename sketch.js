
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var object1, object2, object3;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  object1= Bodies.rectangle(110,60,100,100);
  World.add(world,object1);

  console.log(object1);

  console.log(object1.position.x);
  console.log(object1.position.y);

  object2= Bodies.rectangle(300,60,100,200);
  World.add(world,object2);

  console.log(object2);

  console.log(object2.position.x);
  console.log(object2.position.y);

  object3= Bodies.circle(550,60,30);
  World.add(world,object3);

  console.log(object3);

  console.log(object3.position.x);
  console.log(object3.position.y);




}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  fill("red");
    rect(object1.position.x,object1.position.y,50,50);

    fill("yellow");
 rect(object2.position.x,object2.position.y,50,70);
    
 fill("pink");
 circle(object3.position.x,object3.position.y,60); 

}
