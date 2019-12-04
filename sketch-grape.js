
let time = 0;
let r = 70;
let grape;


function preload(){
  
  grape = loadImage("grape.jpg");
  
}
function setup() {
  createCanvas(700, 700,WEBGL);
  
}

function draw() {
  
  translate(-310,-310,-100);
  
  background(185,0,232);
  for (let j = 0; j < height/r; j++){
   for (let i = 0; i < width/r; i++){
     
     const xAngle = map(mouseX, 0, width, -11 * PI, 11 * PI, true);
     const yAngle = map(mouseY,0, height, -11 * PI, 11 * PI, true);
     const angle = (xAngle * (i/ width)*2) + (yAngle * (j/ height)*8);
     
   
      let bigX = j * r;
      let bigY = i * r;
   
    
     //noFill();
     fill(118,249,4,140);
     
    strokeWeight(2);
    //stroke(10,252,66,70);
     //stroke(random(255),random(255),random(140),70);
    ellipse(bigX, bigY, r*2);
    
    let x = bigX + 20 * cos(2 * PI * time * angle);
    let y = bigY + 20 * sin(2 * PI * time * angle);
     
     
     noStroke();
     //strokeWeight(2.8);
     //fill(255,122,4);
     texture(grape);
     
     ellipse(x, y, 2*r);
     
     
  
  
  
  }
  
}
  
time += 0.0021;
}