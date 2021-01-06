 //Namespacing 
 
 const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball,ground;
var engine,world;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //tuning the Physics Engine
  var ground_options = {
//key value pair
//JSON-- javascript Object Notation
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var ball_options = {

    restitution : 1.0
  }

  ball = Bodies.circle(200,200,50,ball_options);
  World.add(world,ball);
}

function draw() {
  background("black"); 
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);



 
  
}