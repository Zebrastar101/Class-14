var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstacle, obi1img, obi2img, obi4img, obi3img, obi5img, obi6img ;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obi1img=loadImage("obstacle1.png");
  obi2img=loadImage("obstacle2.png");
  obi3img=loadImage("obstacle3.png");
  obi4img=loadImage("obstacle4.png");
  obi5img=loadImage("obstacle5.png");
  obi6img=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello "+ 5)

  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  spawnObstacle();

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacle(){
  if(frameCount% 100===0){
    obstacle=createSprite(600,170,40,50);

    var num=Math.round(random(1,6));

    switch(num){
      case 1: obstacle.addImage(obi1img);
      break;
      case 2: obstacle.addImage(obi2img);
      break;
      case 3: obstacle.addImage(obi3img);
      break;
      case 4: obstacle.addImage(obi4img);
      break;
      case 5: obstacle.addImage(obi5img);
      break;
      case 6: obstacle.addImage(obi6img);
      break;
      default: break;
    }
    obstacle.scale=0.5;
    obstacle.velocityX=-4;
    obstacle.lifetime=150;

  }

}