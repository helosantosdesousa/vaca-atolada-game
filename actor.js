let xActor=100;
let yActor =366;
 
function showActor(){
    image (imageActor, xActor, yActor, 30,30);
}

function moveActor(){
    if (keyIsDown(UP_ARROW)){
        yActor -= 2;
    }
    if (keyIsDown(DOWN_ARROW)){
        yActor +=2;
    }
   }
function comebackActor(){
     if (yActor < -40){
        yActor = 400  } 
       }


function verifyColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imageCars.length; i++){
    colisao = collideRectCircle(xCars[i], yCars[i], 50, 40, xActor, yActor, 15)
    if (colisao){
      print ("colidiu");
    }
  }
}

function colidiu(){
  yAtcor = 366;
}
