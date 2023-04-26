function draw() {
  background(imageRoad); 
  showActor();
  showCars();
  moveCars();
  moveActor();
  comebackCar();
  comebackActor();
  
 
}


function setup() {
createCanvas(500, 400);
}