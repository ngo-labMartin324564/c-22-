const World=Matter.World; 
const Engine=Matter.Engine; 
const Bodies= Matter.Bodies 
var engine,world,ground 
var ball 
function setup() 
{ 
createCanvas(800,400); 
engine= Engine.create() 
world=engine.world;

var option=
{
isStatic : true  
}
ground= Bodies.rectangle(400,390,800,20,option); 
World.add(world,ground)
console.log(ground.position.x)
console.log(ground.position.y)

var option1=
{
  restitution : 1.0
}

ball= Bodies.circle(200,100,20,option1)
World.add(world,ball)
}


function draw() 
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,800,20) 
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)
}