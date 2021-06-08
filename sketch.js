const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var bgImage;

function preload(){

  bgImage = loadImage("bg.png");
}


function setup() {
	createCanvas(1100, 550);


	engine = Engine.create();
	world = engine.world;



	stone = new Stone(210,400,15  );
	mango1 = new Mango(800,470,30);
	mango2 = new Ball(1000,450,30);
	mango3 = new Mango(900,400,30);
	mango4 = new Mango(940,220,30);
	mango5 = new Ball(870,220,30);
	mango6 = new Mango(900,300,30);
  mango7 = new Ball(1000,300,30);
	mango8 = new Bell(1000,380,30);
	mango9 = new Bell(820,380,30);
  mango10 = new Bell(915,150,30);

  tree = new Tree(900,600);
  ground = new Ground(0,540,4000,20);
	boy = new Boy(200,460);
	chain = new Chain(stone.body,{x:85, y:410});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background(bgImage)
  fill('navy');
  textSize(30);
  textFont("IMPACT")
  text("🎁 COLLECT THE GIFTS! 🎁 ", 200,70);
  textFont("bernard MT Condensed")
  textSize(25);
  text("Drag & Aim the Snowball onto the Gifts So that they get Collected!", 60,100);
  textFont("IMPACT")
  text("PRESS SPACE TO GET ONE MORE CHANCE!", 170,130);
  textFont("mistral regular")
  textSize(35);
  stroke("navy");
  strokeWeight(1);
 
  text("- VibhuG", 450,170);





  ground.display();
  tree.display();
  boy.display();
  stone.display();
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
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);




  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:165, y:550});
   chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}

