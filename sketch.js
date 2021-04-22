var car,wall;
var speed,height


function setup() {
  createCanvas(1600,400);
  
  car=createSprite(50,200,50,50)
  

  wall=createSprite(1300,200,60,200);
  wall.shapecolor=color(80,80,80)
 
 
 
  speed=random(55,90) 
   height=400,1500

 car.velocityX=speed;
}

function draw() {
  
  background(255,255,255);  

  if(wall.x-car.x < (wall.width=car.width)/2)
  {
    car.velocity=0
   var deformation=0.5*height*speed*speed/22509
    if(deformation>180)
    {
      car.shapecolor=color(255,0,0);
    }
 if(deformation<180 && deformation>100)
{
car.shapecolor=color(230,230,0);
}
if (deformation<100){
  car,shapecolor=color(0,255,0);
}


      }
      drawSprites();
    }
















