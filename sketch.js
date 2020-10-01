var fixedRect,movingRect;
var ob1,ob2


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(1000, 400, 50, 80);
  fixedRect.shapeColor="blue"
  fixedRect.velocityX=-5;
  movingRect=createSprite(200,400,50,80)
  movingRect.shapeColor="pink"
  movingRect.velocityX=5;
  ob1=createSprite(1000,500,50,50);
  ob1.velocityY=5;
  ob1.shapeColor="red"
  ob2=createSprite(1000,700,50,50);
  ob2.velocityY=-5;
  ob2.shapeColor="green"
}

function draw() {
  background("white");  
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;
  
  bounce(ob1,ob2);
  drawSprites();
}
