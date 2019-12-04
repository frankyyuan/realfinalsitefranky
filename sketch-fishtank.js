let img;
let fishback;
let fishside;
let parrotfish;
let bubbles = [];
var a = 300;
var b = 300;
var speed = 7;
let bubblesound;
let electricbubble;
let circles = 30;
let numCircles = [];
let fft;
let p;
let particles = [];

let myFish;


function preload() {
  img = loadImage('background_mouth.jpg');
  bubblesound = loadSound('bubblesound.wav');
  electricbubble =  loadSound('electricbubble.wav');
  fishback = loadImage('fishback.png');
  fishside = loadImage('fishside.png');
  parrotfish = loadImage('parrotfish.png');
  
}
function setup() {
 
  createCanvas(770, 600);
  
  bubblesound.rate(1.0);
  bubblesound.loop();
  
  image(img, 0, 0,770, 600);
  background(127,255,0,21);
  smooth();
 
  
   for (let i = 0; i < 35; i ++){
  //let x = 100 + 56 * i;
  bubbles[i] = new Bubble(random(height), random(width), random(0.7,7));
}
  
  fft = new p5.FFT();
  for(let i=0;i<numCircles;i++){
  
  circles[i]=new Circle(random (50, width - 50), random (50, height - 50), random(10,100),[random(255),random(255),random(255)])
  
  }
  
  
   
  myFish = new Fish(fishback, 300, 50, 210);
  rotate(myFish);
  
  
  //if circles(playSound, 1000);
}


function draw() {
  //background(img);
  
  //image(parrotfish,random(width), random(height), 140,100);
  noStroke();
  //stroke(random(110,140),8,random(200,210));
  //strokeWeight(3);
  
//   a = a + speed;
//   if (a >= width || a <= 0){
//   speed = speed * -1;
// }

  stroke(255,0,127);
  
    for (let i = 0; i < bubbles.length; i ++){
  push();
  bubbles[i].move();
  bubbles[i].show();
  pop();
}
  
//   fill(10,81,249,70);
//   stroke(random(210,249),10,random(7,21),35);
//   strokeWeight(random(1,2.1));
//   ellipse(a,b,random(21,49));
  
//   a = a + random(-21,21);
//   b = b + random(-21,21);
  
  let  p = new Particle();
  particles.push(p);
  for(let i =0; i < particles.length; i++){
    
    frameRate(14);
    particles[i].update();
 
    if(particles[i].alive){
       particles[i].show();
  } else {
  
    particles.splice(i,1);
}
}
  spectrum = fft.analyze();
  
  for(let i=0;i<numCircles;i++){
 
    circles[i].checkWalls();
    circles[i].update(spectrum[i]);
    
    circles[i].display();

  }
  
  
  myFish.move();
  myFish.display();
}

class Bubble{
  constructor(x,y,r){
  this.x = x;
  this.y = y;
  this.r = r;
}
  move(){
  this.x = this.x + random(-3, 3);
  this.y = this.y + random(-3, 3);
}
  show(){
  smooth();
  stroke(random(210,255),random(0,255),0,random(0,49));
  strokeWeight(random(0,3.5));
    
    fill(random(140,200),247,random(7,9),random(0,63));
    ellipse(this.x, this.y, this.r);  
}
  
}
  
  class Particle{

  constructor(){
    this.x = 500;
    this.y = 200;
    this.size = random(0,1.4);
    this.sizeGrow = random(1, 7);
    this.vx = random(-0.4, 0.1);
    this.vy = random(-0.4, 0.1);
    this.r = random(255);
    this.g= random(210);
    this.b= random(140);   
    this.alpha =35;
    this.alive = true;
  }
  
  update(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.size+=this.sizeGrow;
    this.alpha-= 2.8
  }
  
  show() {
    fill(this.r, this.g, this.b, this.alpha);
    //stroke(7,random(210,246),206,random(0,56));
    // stroke(random(255),random(255),random(255),random(255),random(0,56));
    strokeWeight(0.01);
    ellipse(this.x, this.y, this.size);
  }
 checkVisible() {
  
    if(this.alpha > 7){
    
      this.alive = false;
    }
  }
  
    
  
//       show(){
//       fill(7,246,206,49);
//       noStroke();
//       ellipse(this.x, this.y, this.size);
//       }
    
    
    }


function Circles(x,y,size){
  this.x=x;
  this.y=y;
  this.size=size;
  
  this.xSpeed=random(-0.7,0.7);
  this.ySpeed=random(-0.7,0.7);
  
  this.display=function(){
    
  fill(7,246,206,49);
  noStroke();
  ellipse(this.x,this.y,this.size);
  
  }
  
  this.update=function(){
  
  this.x=this.x+this.xSpeed;
    this.y=this.y+this.ySpeed;
  
  }

 
  this.checkWalls=function(){

if(this.x >width-this.size||this.x<this.size){this.xSpeed=this.xSpeed *-1;}
  if(this.y>height-this.size||this.y<this.size){this.ySpeed=this.ySpeed*-1;}


}

  playSound=function(){
  electricbubble.play()}
}

function Fish(img, x, y, size){
  this.x = x;
  this.y = y;
  this.img = img;
  this.size = size;
  
  
  
  
  this.move = function(){
  
    this.x = this.x + random(-1.4, 1.4);
    this.y = this.y + random(-1.4, 1.4);
    
  }
  
  
  this.display = function(){
  
    image(this.img, this.x, this.y, this.size, this.size);
  
  }
  
  
}
  