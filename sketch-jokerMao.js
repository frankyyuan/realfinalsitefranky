let pixArray;
let joker;

function preload(){

  joker = loadImage('joker.jpg');


}
function setup() {
  createCanvas(500, 650);
  pixelDensity(1);
  background(joker);
  
  
  pixArray = loadPixels();
  
  for(let x = 0; x < width; x++){
   for(let y = 0; y < height; y++){
   
      let loc = (x + y * width) * 4;
     
      pixels[loc] = random(255);
      pixels[loc + 1] = pixels[loc + 1];
      pixels[loc + 2] = pixels[loc + 100] ;
      pixels[loc + 3] = 255;
   
   
   }
  
  
  
  }
  
  updatePixels();


}

function draw() {
  //background(220);
}