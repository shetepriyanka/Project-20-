var car,wall,speed,weight
function setup() {
  createCanvas(1400,400);
 car = createSprite(50, 200, 50, 50);
 car.shapeColor="white"
 wall = createSprite(1300, 200, 100, 200);
 wall.shapeColor="brown"
speed=random(55,90);
weight=random(1400,500);
car.velocityX=speed
}

function draw() {
  background(0);  
if(wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX=0
var de= 0.5*weight*speed*speed/22500
if(de>180){
  car.shapeColor="red"
}
  if(de<80){
  
    car.shapeColor="green"
  }
  if(de<180&&de>80){
    car.shapeColor="yellow"
  }
}

  

  drawSprites();
}