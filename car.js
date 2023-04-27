let xCars=[420, 420, 420];
let yCars = [38, 96, 150];
let velCars = [3, 2.5, 2];

function showCars(){
    for (let i = 0; i < imageCars.length; i = i + 1){
     image(imageCars[i], xCars[i], yCars[i], 50, 40);

    }
} 
 
function moveCars(){
    for (let i=0; i <velCars.length; i = i+1 ){
    xCars[i] -= velCars[i];
}
}

  function comebackCar(){
    for (let i=0; i < imageCars.length; i= i+1 ){
        
    if (passedScreen(xCars[i]))
        xCars[i] = 600
    }
}  
 

function passedScreen(xCars){
    return xCars < -50 
}