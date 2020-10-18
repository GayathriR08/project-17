
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,250,20,20)
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background(255)  ;
  if(ground.x<0){
    
    ground.x=ground.width/2
    
  }
  
  if(keyDown("space")){
    
    monkey.velocityY=-12;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  
  drawSprites();
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.round(frameCount/100) 
  text("Survival Time: "+ score, 100,50);
  

  
}

function food(){
  if (frameCount%80==0){
    banana = createSprite(600,250,40,10);
    banana.y=Math.round(random(120,200));
    banana.velocityX=-5;
    banana.addImage("food",bananaImage);
    banana.scale=0.05;
    banana.lifetime=300;
    foodGroup.add(banana);
     monkey.depth=banana.depth+1;
    
    
  }
  
 
  
}
function obstacles(){
  
  if(frameCount%300==0){
    obstacle=createSprite(800,320,10,40);
    obstacle.velocityX=-6;
    obstacle.addImage("obstacle",obstaceImage);
    obstacle.scale=0.15;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
}




