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