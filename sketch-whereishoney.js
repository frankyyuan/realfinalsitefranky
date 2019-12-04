let redflag;
let leafstar;
let whereishoney;



function preload(){
 
  redflag = loadImage('redflag.jpg');
  leafstar = loadImage('leafstar.png');
  whereishoney=createVideo('worryabouthoney.mov')
  whereishoney.hide();

}


function setup() {
  createCanvas(1244, 700,WEBGL);
  
}

function draw() {
  background(250,0,0);
  //translate(-700,-70);
    rectMode(CENTER);
  
  
  
  
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(whereishoney);

  sphere(140,140);
  pop();
  


rotateY(millis() / 1400);
  leaflag();
  //texture(leaflag());
  
  //rect(0, 0, 700, 700)
 
   
  
    
   
  

  
  

  
  
  //pointLight(255,255,165, 1400, 1400, 700);

  

  
}

 function mousePressed(){
  whereishoney.loop();
 
 }

 function leaflag(){
  //background(255,0,0);
  translate(-500,-140);
  let x = 35;
  let y = 28;
  x = x+random(-2.8,2.8);
  image(leafstar, x, y, 140, 140);
  image(leafstar, x+154, y+154, 56,56);
  image(leafstar, x+189, y+98, 56,56);
  image(leafstar, x+189, y+42, 56,56);
  image(leafstar, x+154, y-14, 56,56);
   
 
 
 }