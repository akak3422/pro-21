const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,left,right,topWall,help,idk
var btn1,btn2;
function setup() {
  createCanvas(2000,1000);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);



  ground = new Ground(962,902,9000,20);
  right = new Ground(1818,389, 20,9000);
  left = new Ground(10,200,20,9000);
  topWall = new Ground(200,10,9000,20);
  idk = new Ground (1200,840,20,100)
  help = new Ground (1000,840,20,100)

  var ballOptions={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball=Bodies.circle(200,100,20,ballOptions)
  World.add(world,ball);


}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  right.show();
  left.show();
  topWall.show();
  idk.show();
  help.show();
  ellipse(ball.position.x,ball.position.y,20);
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

  function keyPressed(){
    if (keyCode === UP_ARROW)
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); 
    
  }
}
