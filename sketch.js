const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground; 

var engine, world, object;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var object_options = {
    restitution: 1.5
  }
  object = Bodies.rectangle(200,100,50,50,object_options);    
  World.add(world, object);
  console.log(object);
  var options = {
    isStatic: true 
    }

  ground = Bodies.rectangle(200,390,400,15,{isStatic: true});  

  World.add(world,ground); 
  
}

function draw() {
  background(255);

  Engine.update(engine); 
   
 rectMode(CENTER);
 rect(object.position.x,object.position.y,50,50);

 rect(ground.position.x,ground.position.y,400,15);
}