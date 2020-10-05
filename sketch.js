var box1, box2, box3, box4;


function setup() {
  createCanvas(800,400);
  movingRect= createSprite(200, 200, 50, 80);
  fixedRect=createSprite(400,200,80,30);
   movingRect.velocityX=5;
   movingRect.velocityY=0.5;
  box1 = createSprite(100,100,50,50);
  box2 = createSprite(200,100,50,50);
  box3 = createSprite(300,100,50,50);
  box4 = createSprite(400,100,50,50);

}

function draw() {
  background(255,255,255);  
  // movingRect.x=mouseX;
  // movingRect.y=mouseY;
  //movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
box1.shapeColor="green";
box2.shapeColor="green";
box3.shapeColor="green";
box4.shapeColor="green";

  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  if(isTouching(movingRect,box1)){
    movingRect.shapeColor="red";
    box1.shapeColor="red";
  }
  if(isTouching(movingRect,box2)){
    movingRect.shapeColor="red";
    box2.shapeColor="red";
  }

  if(isTouching(movingRect,box3)){
    movingRect.shapeColor="red";
    box3.shapeColor="red";
  }

  if(isTouching(movingRect,box4)){
    movingRect.shapeColor="red";
    box4.shapeColor="red";
  }


  bounceoff(fixedRect,movingRect);
  drawSprites();
}



