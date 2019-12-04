let honeybackground;
let beesbackgrounds = [];
let honeycylinder;
let bees;


function preload() {
  honeybackground =createVideo('honeybackground.mov');
  honeybackground.hide();
  bees = loadImage('bees0.png');
}
function setup() {
  
  
  createCanvas(1244, 700, WEBGL);
  
  //frameRate(10);
  
  for(let i = 0; i < 56; i++){
    
    // let x = random(width/2);
    // let y = random(height/2);
    // let size = random(100,600);
    // let b = new Beesbackground(x, y,size, size);
    // beesbackgrounds.push(b);
    beesbackgrounds[i] = new Beesbackground(random(width/2), random(height/2), random(70,700));
  }
  

  honeycylinder = createSlider(7, 16, 7);
  //honeycylinder.position(10, height + 5);
  honeycylinder.style('width', '210px');
  
}

// function mouseClicked() {
//     image(bees, random(width), random(height), 500, 500);
// }
function draw() {
  background(255,255,0);
  //   let locX = mouseX - width ;
  // let locY = mouseY - height ;
  


  
  
  rectMode(CENTER);
  //mouseClicked();
  //pass video frame as texture
  rotateY(millis() / 1400);
  rect(0, 0, 1244, 700,);
  
  
              for(let i = 0; i< 56; i++){
    beesbackgrounds[i].move();
    beesbackgrounds[i].show();
      }
  texture(honeybackground);
  //pointLight(255,255,165, 1400, 1400, 700);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  
    

  stroke(random(255),255,0,);
  strokeWeight(0.1);
  cylinder(140, 210);
  
    

  
  //cylinder(140, 210, 35,honeycylinder.value());
  
  
  

  

  
  //mouseClicked();
  //mousePressed();
  //translate(re);



}

function mousePressed() {
  honeybackground.loop();
//   for(i = 0; i< 21; i++){
  
//   beesbackgrounds[i].clicked(mouseX, mouseY);
  
//   }
  
}

function Beesbackground(x ,y,size ){
  this.x = x;
  this.y = y;
  this.size = size;
  
  this.move = function(){
    this.x+= random(-2.8,2.8);
    this.y+= random(-3.5,2.8);
  }
  this.show = function(){
  image (bees, this.x, this.y, this.size);
  }


}

