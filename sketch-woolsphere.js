let angle = 0;
let r = 210;
let resolution = 28;
let xAngle = 0;
let woolball;



function preload() {
 woolball = loadImage('woolball.png');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  background(194,236,26);
  
  
  
}

function draw() {
  
  orbitControl();
  frameRate(42);
  
  
  rotateX(xAngle);
  rotateY(xAngle*7);
  rotateZ(xAngle*7);
  scale(xAngle/7);
  
  
  for(let i = 0; i< resolution; i++){
  
  let x = r * cos(angle);
  let y = r * sin(angle);
  push();
    
    translate(x,y);
    
  
  
  
  fill(random(225),random(225),random(140,158),238);
    //strokeWeight(21);
   //noStroke();
    strokeWeight(0.21);
    stroke(245,random(70,100),11);
  sphere(35);
    
    pop();
    angle+=TWO_PI/resolution;
    //push();
    image(woolball,0,0);
    //pop();
}

  xAngle+=0.01;
}