let angleZ = 0;
let numCubes = 7;
let numRows = 7;
let cameraZ;
let zVal = 7;
let speed = 7;

function setup() {
  createCanvas(500, 500, WEBGL);
  stroke(102,205,170);
  strokeWeight(3);
  //let xVal = sin*zVal;
  //cameraZ =(height/2.0) / tan(PI*30.0 / 180.0);

}

function draw() {
  background(249,49,6);
  
  ambientLight(random(140,216),random(210,249),random(0,14));
  ambientMaterial(210);
  //pointLight(0,0,100,0,100,0);
  //camera(0, 0, cameraZ, 0, 0, 0, 0, 1, 0);
  
  //just the usual for loop here
  
for (let j = 0; j < numRows; j++){
  for (let i =0; i < numCubes; i++){
    
  
    
    push();
    //the location of each cube is determined by this translate function
    //notice how it is wrapped in its own individual transformation matrix
    //by the enclosing push() / pop()
    translate(-210 + i*70, 210-j*70, -14*zVal);
    
    //each sphere rotates on its own axis 
    // because these rotations are also inside the push()/pop()
    rotateY(PI/1.4);
    rotateZ(angleZ);
    
    box(56);
    pop();
    
  }
  if (zVal < 0.3 || zVal > 1.8){
  speed *= -1
  }
  
  zVal -= speed;
  
  }
  
  
  
  
  
  angleZ+=0.01
}