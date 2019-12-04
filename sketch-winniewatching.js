let myParticle;
let particles;
let particleSize = 7;
let numWide, numHigh;
let video;
let img;
let winnie;


function preload() {
  //load image
  img = loadImage('xio.png');
  winnie = loadImage('winniepooh.png');
}

function setup() {
  createCanvas(700, 490);
  
  
  //here I am dividing the total width and height by the size of each particle so I know how big my grid is
  numWide = int(width/particleSize);
  numHigh = int(height/particleSize);
  
  
  //we need this helper function to make a 2d array in javascript.
  particles = make2DArray(numWide, numHigh);
    //as a reminder, a 2d array is an array of arrays, like this:
  //[[x,x,x],[x,x,y],[x,x,x]]
  //I can access the y in this 2d array like this:
  //array[1][2]
  
  //here is where we create a capture tag in our sketch.
  //we set the size of it to the size of our canvas
  video = createCapture(VIDEO);
  video.size(width, height);
  

  //our nested for loop which will fill our 2d array with particles.
  //later on we will use another nested for loop in the draw loop
  //to draw the particles on the screen
  for(let i = 0; i < numWide; i++){
    for(let j = 0; j < numHigh; j++){
  particles[i][j] = new Particle(i* particleSize, j * particleSize, particleSize, [250, 0, 188, 140])
      
    }
  } 
 // console.log(myParticle);
  
  
  
}

function draw() {
  background(255,0,0);
  image(img,-140, 42);
  //winniemove();
  
  // translate(width/2, height/2 );
  // translate(p5.Vector.fromAngle(millis() / 1000, 40));
  
  //"load" the pixels, each time through the draw loop so that the pixel array gets updated with new info from the camera.
  video.loadPixels();
  
  
  //here is where we update, move and display each particle
  for(let i = 0; i < numWide; i++){
    for(let j = 0; j < numHigh; j++){
        particles[i][j].updateColor();
        particles[i][j].move();
        particles[i][j].display();
    }
  }
  image(winnie,mouseX,mouseY,width/3.5, height/2);
}


//our constructor function

function Particle(x,y,size,col){
  this.x =x;
  this.y = y;
  this.size = size;
  this.col = col;
  
  this.move = function(){
  
    this.x+= random(-2.8,2.8);
    this.y+= random(-3.5,3.5);
  
  }

  
  this.updateColor = function(){
  
    let thisColor = video.get(this.x, this.y);
    console.log(thisColor)
    this.col = thisColor;
  
  }
  
  this.display = function(){
    fill(this.col);
    noStroke();
    //strokeWeight(1.4);
    //stroke(random(255),random(255),random(255),70);
    square(this.x, this.y, this.size);
  }

}

//the helper function which returns a 2d array
function make2DArray(rows, cols){
  let arr = new Array(rows);
  for(let i = 0; i < arr.length; i++){
      arr[i] = new Array(cols)
  }
  return arr
}

