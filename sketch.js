//Global Variables
var player, player_running;
var bananaImage, foodGroup;
var stone, obstacleImage, obstaclesGroup;
var invisibleGround;
var back, backImage;
var score;


function preload(){
  backImage = loadImage("jungle.png");
  player_running = loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png,");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(400,400);
  
  back = createSprite(200,180,20,50);
  back.addImage("background",backImage);
  back.x = back.width /2;
  back.velocityX = -4;
  
  player = createSprite(50,290,20,20);
  player.addAnimation("running",player_running);
  player.scale = 0.1;
  
  invisibleGround = createSprite(400,350,800,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
  foodGroup = new Group();
}


function draw(){
 background(255); 
   if (back.x < 0){
    back.x = back.width/2;
  }
  
  if(obstaclesGroup.isTouching(player)){
     player.scale=0.2;
  }
  
  switch(score){
    case 10: player.scale=0.12;
      break;
    case 20: player.scale=0.14;
      break;
    case 30: player.scale=0.16;
      break;
    case 40: player.scale=0.18;
      break;
      default: break;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  player.collide(invisibleGround);
  drawSprites();
}

function Obstacles() {
  if(frameCount%300 === 0) {
    stone = createSprite(400,320,20,20);
    stone.setAnimation("Stone",obstacleImage);
    stone.velocityX = -8;
    stone.lifetime = 50;
    stone.scale=0.15;
    
    obstacleGroup.add(stone);
  }
}

function food() {
  if(frameCount%80 === 0) {
    banana = createSprite(400,200,20,20);
    banana.y = random(190,250);
    banana.addAnimation("Banana",bananaImage);
    banana.velocityX = -5;
    banana.lifetime = 80;
    banana.scale=0.05;
    
    foodGroup.add(banana);
  }
}
