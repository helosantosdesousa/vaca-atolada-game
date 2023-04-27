function draw() {
  background(imageRoad); 
  showActor();
  showCars();
  moveCars();
  moveActor();
  comebackCar();
  comebackActor();
  verifyColisao();
 // colidiu ();
 
}


function setup() {
createCanvas(500, 400);
}