var robot, boss, life;
var life6img, life5img, life4img, life3img, life2img, life1img, life0img;
var score=60;


function preload(){
  life6img=loadImage( "lifebar6.png");
  life5img=loadImage("lifebar5.png");
  life4img=loadImage("lifebar4.png");
  life3img=loadImage("lifebar3.png");
  life2img=loadImage("lifebar2.png");
  life1img=loadImage("lifebar1.png");
  life0img=loadImage("lifebar0.png");
}





function setup() {
  createCanvas(800,800);
  robot=createSprite(400, 400, 50, 50);
  boss=createSprite(400, 200, 100, 100);
  life=createSprite(200, 400, 20, 400);
  life.addImage(life6img);
  life.scale=0.5;
}

function draw() {
  background("pink"); 

 
  
  
  if(keyDown("LEFT_ARROW")){
    robot.x=robot.x-5;
    
}
if(keyDown("RIGHT_ARROW")){
    robot.x=robot.x+5;
}
if(keyDown("UP_ARROW")){
    robot.y=robot.y-5;
}
if(keyDown("DOWN_ARROW")){
    robot.y=robot.y+5;
}
if(robot.x<0||robot.x>800||robot.y>800||robot.y<0){
    fill("white");
   textFont("courier new")
   textSize(40);
    text("COME INSIDE!!", 500, 500);  
    
}

if(score===50){
  life.addImage(life5img);
}
if(score===40){
  life.addImage(life4img);
}
if(score===30){
  life.addImage(life3img);
}
if(score===20){
  life.addImage(life2img);
}
if(score===10){
  life.addImage(life1img);
}
if(score===0||score<0){
  life.addImage(life0img);
  fill("white");
  textFont("courier new")
  textSize(40);
   text("GAME OVER", 500, 500);
}
  drawSprites();
}
